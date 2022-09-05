//在https双向认证的情况下，dump客户端证书为p12. 证书密码: hooker
var password = "hooker";


function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),
        // 年
        "m+": (date.getMonth() + 1).toString(),
        // 月
        "d+": date.getDate().toString(),
        // 日
        "H+": date.getHours().toString(),
        // 时
        "M+": date.getMinutes().toString(),
        // 分
        "S+": date.getSeconds().toString() // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getNowTime() {
    return dateFormat("YYYY_mm_dd_HH_MM_SS", new Date()) + "_" + random(1, 100);
}

function newMethodBeat(text, executor) {
    var threadClz = Java.use("java.lang.Thread");
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var processClz = Java.use("android.os.Process");
    var currentThread = threadClz.currentThread();
    var beat = new Object();
    beat.invokeId = Math.random().toString(36).slice( - 8);
    beat.executor = executor;
    beat.myPid = processClz.myPid();
    beat.threadId = currentThread.getId();
    beat.threadName = currentThread.getName();
    beat.text = text;
    beat.startTime = new Date().getTime();
    beat.stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new()).substring(20);
    return beat;
}

function printBeat(beat) {
    var str = ("------------pid:" + beat.myPid + ",startFlag:" + beat.invokeId + ",objectHash:"+beat.executor+",thread(id:" + beat.threadId +",name:" + beat.threadName + "),timestamp:" + beat.startTime+"---------------\n");
    str += beat.text + "\n";
    str += beat.stackInfo;
    str += ("------------endFlag:" + beat.invokeId + ",usedtime:" + (new Date().getTime() - beat.startTime) +"---------------\n");
	console.log(str);
}

function dump2sdcard(pri, p7, filePath) {
    console.log("dump:" + filePath);
    var X509CertificateClass = Java.use("java.security.cert.X509Certificate");
    var myX509 = Java.cast(p7, X509CertificateClass);
    var chain = Java.array("java.security.cert.X509Certificate", [myX509]);
    var ks = Java.use("java.security.KeyStore").getInstance("PKCS12", "BC");
    ks.load(null, null);
    ks.setKeyEntry("client", pri, Java.use('java.lang.String').$new(password).toCharArray(), chain);
    try {
        var out = Java.use("java.io.FileOutputStream").$new(filePath);
        ks.store(out, Java.use('java.lang.String').$new(password).toCharArray());
    } catch(error) {
        console.log(error);
    }
}

var logic = function() {
    console.log("在https双向认证的情况下，dump客户端证书为p12. 存储位置:/data/user/0/{packageName}/client_keystore_{nowtime}.p12 证书密码: hooker");
    Java.use("java.security.KeyStore$PrivateKeyEntry").getPrivateKey.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public java.security.cert.Certificate java.security.KeyStore$PrivateKeyEntry.getPrivateKey()';
        var beat = newMethodBeat(beatText, executor);
        var result = this.getPrivateKey();
        var packageName = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext().getPackageName();
        let filePath = '/data/user/0/' + packageName + "/client_keystore_" + "_" + getNowTime() + '.p12';
        dump2sdcard(this.getPrivateKey(), this.getCertificate(), filePath);
        printBeat(beat);
        return result;
    }
    Java.use("java.security.KeyStore$PrivateKeyEntry").getCertificateChain.implementation = function() {
        var executor = this.hashCode();
        var beatText = 'public java.security.cert.Certificate java.security.KeyStore$PrivateKeyEntry.getCertificate()';
        var beat = newMethodBeat(beatText, executor);
        var result = this.getCertificateChain();
        var packageName = Java.use("android.app.ActivityThread").currentApplication().getApplicationContext().getPackageName();
        let filePath = '/data/user/0/' + packageName + "/client_keystore_" + getNowTime() + '.p12';
        dump2sdcard(this.getPrivateKey(), this.getCertificate(), filePath);
        return result;
    }
    //SSLpinning helper 帮助定位证书绑定的关键代码
    Java.use("java.io.File").$init.overload('java.io.File', 'java.lang.String').implementation = function (file, cert) {
      var result = this.$init(file, cert);
    //   console.log("1--File path: ", cert);
      if (((file.getPath().indexOf("/data/user") > -1) || (file.getPath().indexOf("/data/data") > -1))){
          var stack = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new());
          if (cert.indexOf("cacert") >= 0 || file.getPath().indexOf("cacert") >= 0 || stack.indexOf("X509TrustManagerExtensions.checkServerTrusted") >= 0) {
            console.log("find ", "SSLpinning position locator => " + file.getPath() + " " + cert);
            console.log(stack);
          }else if ((cert.indexOf(".") > -1) && (cert.indexOf(".xml") === -1) && (cert.indexOf(".db") === -1)){
              if (cert.split(".").length < 3){
                    console.log("find file1 = ", file.getPath() + "/" + cert);
              }
          }
      }
      return result;
    }
    Java.use("java.io.File").$init.overload('java.lang.String').implementation = function (cert) {
      var result = this.$init(cert);
    //   console.log("2--File path: ", cert);
      if (((cert.indexOf("/data/user") > -1) || (cert.indexOf("/data/data") > -1))) {
          var stack = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new());
          if (cert.indexOf("cacert") >= 0 || stack.indexOf("X509TrustManagerExtensions.checkServerTrusted") >= 0) {
              console.log("find ", "SSLpinning position locator => " + cert);
              console.log(stack);
          } else if ((cert.indexOf(".") > -1) && (cert.indexOf(".xml") === -1) && (cert.indexOf(".db") === -1)) {
              if (cert.split(".").length < 3) {
                  console.log("find file2 = ", file.getPath() + "/" + cert);
              }
          }
      }
      return result;
    }
}


Java.perform(function (){
    var application = Java.use("android.app.Application");
    application.attach.overload('android.content.Context').implementation = function(context) {
        var result = this.attach(context); // 先执行原来的attach方法
        Java.classFactory.loader = context.getClassLoader(); // 获取classloader
        logic();
        console.log("hook over");
        return result;
    }

    // logic();
    // console.log("hook over");
})
