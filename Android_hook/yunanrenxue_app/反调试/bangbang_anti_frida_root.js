
//三种反调试
/*
* 1.maps 里面去打开/data/local/tmp/re.frida.server/frida-agent-32.so 的
* 2.读/task/status 里面的内容 判断frida 是否存在
* 3.strstr, readlink 对frida关键字的判断  //这里没有hook 也许加上 strcmp等函数的hook会更好
* */
const openPtr = Module.getExportByName('libc.so', 'open');
const open = new NativeFunction(openPtr, 'int', ['pointer', 'int']);
var readPtr = Module.findExportByName("libc.so", "read");
var read = new NativeFunction(readPtr, 'int', ['int', 'pointer', "int"]);
var fakePath = "/data/data/com.hxzk.android.hxzksyjg_xj/maps";//这里要改包名
var file = new File(fakePath, "w");
var buffer = Memory.alloc(512);

var fakePath2 = "/data/data/com.hxzk.android.hxzksyjg_xj/task";
var file2 = new File(fakePath2, "w");
var buffer2 = Memory.alloc(512);

Interceptor.replace(openPtr, new NativeCallback(function (pathnameptr, flag) {
    var pathname = Memory.readUtf8String(pathnameptr);
    var realFd = open(pathnameptr, flag);
    //console.log("open:", pathname)
    //路径是否包含maps 和task
    if (pathname.indexOf("maps") >= 0 || pathname.indexOf("task") >= 0) {
        var temp = pathname.indexOf("maps") >= 0 ? 1:2;
        //包含maps则map为1 task为2
        switch (temp) {
            case 1://maps
            {
                //console.log("open maps:", pathname);
                while (parseInt(read(realFd, buffer, 512)) !== 0) {
                    var oneLine = Memory.readCString(buffer);
                    if (oneLine.indexOf("tmp") === -1) {
                        // === 比== 更加严格 ==类型不匹配再转化匹配值 ===类型不匹配就是false
                        // 就是online 不包含tmp 则写入/data/data/com.wujie.chengxin/maps中
                        // 因为Frida在运行时会先确定/data/local/tmp路径下是否有re.frida.server文件夹，
                        // 若没有则创建该文件夹并存放fridaagent.so等文件
                        //console.log("write :",oneLine);
                        file.write(oneLine);
                    } else {
                        //console.log(oneLine);
                    }
                }
                var filename = Memory.allocUtf8String(fakePath);
                return open(filename, flag);
                break;
            }
            case 2://task
            {
                //console.log("open task:", pathname);
                while(parseInt(read(realFd, buffer2, 512)) !== 0){
                    var oneLine = Memory.readCString(buffer2);
                    //console.log("task buffer: ",oneLine)

                    if(oneLine.indexOf("gum-js-loop")!=-1){
                        var replaceStr = "AAAAAAAAAA"
                        oneLine = oneLine.replace("gum-js-loop", replaceStr)
                        //console.log(oneLine)
                    }
                    if(oneLine.indexOf("pool-frida")!=-1){
                         var replaceStr = "BBBBBBB"
                        oneLine = oneLine.replace("pool-frida", replaceStr)
                        //console.log(oneLine)
                    }
                    if(oneLine.indexOf("gmain")!=-1){
                         var replaceStr = "CCCCCCC"  //最终只有这里匹配上了
                        oneLine = oneLine.replace("gmain", replaceStr)
                        //console.log(oneLine)
                    }


                    file2.write(oneLine);

                }
                var filename = Memory.allocUtf8String(fakePath2);
                return open(filename, flag);//把伪造的路径打开返回
                break;
            }
        }
    }
    var fd = open(pathnameptr, flag);
    // Thread.sleep(1)
    return fd;
    }, 'int', ['pointer', 'int']));



// 执行后的输出如下：
// 通过观察log可以发现，之前maps中frida相关的字符串没有出现在strstr的参数中，说明我们已经过掉
// 了这个检测点，但是frida仍然被杀掉了，并且被杀掉之前app打开了 /proc/self/task/pid/status 文
// 件，所以我们需要再去观察一下这些status文件。


var aaa,bbb,ccc;
var ss = false
Interceptor.attach(Module.findExportByName(null, "readlink"),{
    onEnter: function(args){
        aaa = args[0];
        bbb = args[1];
        ccc = args[2];
        },
    onLeave: function(retval){
        if(bbb.readCString().indexOf("frida")!==-1 ||
            bbb.readCString().indexOf("gum-js-loop")!==-1||
            bbb.readCString().indexOf("gmain")!==-1 ||
            bbb.readCString().indexOf("linjector")!==-1){
            //console.log('\nreadlink(' + 's1="' + aaa.readCString() + '"' + ', s2="' + bbb.readCString() + '"' + ', s3="' + ccc + '"' + ')');
            bbb.writeUtf8String("/system/framework/boot.art")
            //console.log("replce with: "+bbb.readCString())
            retval.replace(0x1A)
            //console.log("retval: "+retval)
        }
    }
});


Interceptor.attach(Module.findExportByName(null, "strstr"),{
    onEnter: function(args){
        if(args[0].readCString().indexOf("frida")!==-1
        ||args[1].readCString().indexOf("frida")!==-1 ||
        args[0].readCString().indexOf("gum-jsloop")!==-1||args[1].readCString().indexOf("gum-js-loop")!==-1||
        args[0].readCString().indexOf("gmain")!==-1
        ||args[1].readCString().indexOf("gmain")!==-1 ||
        args[0].readCString().indexOf("linjector")!==-1
        ||args[1].readCString().indexOf("linjector")!==-1){
            //console.log("\nlibDexHelper.so base address:"+Module.findBaseAddress("libDexHelper.so"))
            //console.log('\nstrstr(' + 's1="' + args[0].readCString() + '"' + ', s2="' + args[1].readCString() + '"' + ')');
            //console.log(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
            this.frida = Boolean(1);
            //console.log("this.frida: ",this.frida);
        }
    },
    onLeave: function(retval){
        if (this.frida) {
            retval.replace(ptr("0x0"));
        }
    }
});




function getAllcls() {
    Java.perform(function(){
        Java.enumerateLoadedClasses({
            onMatch: function(className) {
                console.log(className);},
            onComplete:function(){
                console.log("done");
            }
        });
});
}




//Java.perform(function() {

var RootPackages = ["com.noshufou.android.su", "com.noshufou.android.su.elite", "eu.chainfire.supersu",
    "com.koushikdutta.superuser", "com.thirdparty.superuser", "com.yellowes.su", "com.koushikdutta.rommanager",
    "com.koushikdutta.rommanager.license", "com.dimonvideo.luckypatcher", "com.chelpus.lackypatch",
    "com.ramdroid.appquarantine", "com.ramdroid.appquarantinepro", "com.devadvance.rootcloak", "com.devadvance.rootcloakplus",
    "de.robv.android.xposed.installer", "com.saurik.substrate", "com.zachspong.temprootremovejb", "com.amphoras.hidemyroot",
    "com.amphoras.hidemyrootadfree", "com.formyhm.hiderootPremium", "com.formyhm.hideroot", "me.phh.superuser",
    "eu.chainfire.supersu.pro", "com.kingouser.com", "com.android.vending.billing.InAppBillingService.COIN","com.topjohnwu.magisk"
];

var RootBinaries = ["su", "busybox", "supersu", "Superuser.apk", "KingoUser.apk", "SuperSu.apk","magisk"];

var RootProperties = {
    "ro.build.selinux": "1",
    "ro.debuggable": "0",
    "service.adb.root": "0",
    "ro.secure": "1"
};

var RootPropertiesKeys = [];

for (var k in RootProperties) RootPropertiesKeys.push(k);

var PackageManager = Java.use("android.app.ApplicationPackageManager");

var Runtime = Java.use('java.lang.Runtime');

var NativeFile = Java.use('java.io.File');

var String = Java.use('java.lang.String');

var SystemProperties = Java.use('android.os.SystemProperties');

var BufferedReader = Java.use('java.io.BufferedReader');

var ProcessBuilder = Java.use('java.lang.ProcessBuilder');

var StringBuffer = Java.use('java.lang.StringBuffer');

var loaded_classes = Java.enumerateLoadedClassesSync();

send("Loaded " + loaded_classes.length + " classes!");

var useKeyInfo = false;

var useProcessManager = false;

send("loaded: " + loaded_classes.indexOf('java.lang.ProcessManager'));

if (loaded_classes.indexOf('java.lang.ProcessManager') != -1) {
    try {
        //useProcessManager = true;
        //var ProcessManager = Java.use('java.lang.ProcessManager');
    } catch (err) {
        send("ProcessManager Hook failed: " + err);
    }
} else {
    send("ProcessManager hook not loaded");
}

var KeyInfo = null;

if (loaded_classes.indexOf('android.security.keystore.KeyInfo') != -1) {
    try {
        //useKeyInfo = true;
        //var KeyInfo = Java.use('android.security.keystore.KeyInfo');
    } catch (err) {
        send("KeyInfo Hook failed: " + err);
    }
} else {
    send("KeyInfo hook not loaded");
}

PackageManager.getPackageInfo.overload('java.lang.String', 'int').implementation = function(pname, flags) {
    var shouldFakePackage = (RootPackages.indexOf(pname) > -1);
    if (shouldFakePackage) {
        send("Bypass root check for package: " + pname);
        pname = "set.package.name.to.a.fake.one.so.we.can.bypass.it";
    }
    return this.getPackageInfo.call(this, pname, flags);
};

NativeFile.exists.implementation = function() {
    var name = NativeFile.getName.call(this);
    var shouldFakeReturn = (RootBinaries.indexOf(name) > -1);
    if (shouldFakeReturn) {
        send("Bypass return value for binary: " + name);
        return false;
    } else {
        return this.exists.call(this);
    }
};

var exec = Runtime.exec.overload('[Ljava.lang.String;');
var exec1 = Runtime.exec.overload('java.lang.String');
var exec2 = Runtime.exec.overload('java.lang.String', '[Ljava.lang.String;');
var exec3 = Runtime.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;');
var exec4 = Runtime.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;', 'java.io.File');
var exec5 = Runtime.exec.overload('java.lang.String', '[Ljava.lang.String;', 'java.io.File');

exec5.implementation = function(cmd, env, dir) {
    if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id" || cmd == "sh") {
        var fakeCmd = "grep";
        send("Bypass " + cmd + " command");
        return exec1.call(this, fakeCmd);
    }
    if (cmd == "su") {
        var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
        send("Bypass " + cmd + " command");
        return exec1.call(this, fakeCmd);
    }
    if (cmd == "which") {
        var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
        send("Bypass which command");
        return exec1.call(this, fakeCmd);
    }
    return exec5.call(this, cmd, env, dir);
};

exec4.implementation = function(cmdarr, env, file) {
    for (var i = 0; i < cmdarr.length; i = i + 1) {
        var tmp_cmd = cmdarr[i];
        if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id" || tmp_cmd == "sh") {
            var fakeCmd = "grep";
            send("Bypass " + cmdarr + " command");
            return exec1.call(this, fakeCmd);
        }

        if (tmp_cmd == "su") {
            var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
            send("Bypass " + cmdarr + " command");
            return exec1.call(this, fakeCmd);
        }
    }
    return exec4.call(this, cmdarr, env, file);
};

exec3.implementation = function(cmdarr, envp) {
    for (var i = 0; i < cmdarr.length; i = i + 1) {
        var tmp_cmd = cmdarr[i];
        if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id" || tmp_cmd == "sh") {
            var fakeCmd = "grep";
            send("Bypass " + cmdarr + " command");
            return exec1.call(this, fakeCmd);
        }

        if (tmp_cmd == "su") {
            var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
            send("Bypass " + cmdarr + " command");
            return exec1.call(this, fakeCmd);
        }
    }
    return exec3.call(this, cmdarr, envp);
};

exec2.implementation = function(cmd, env) {
    if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id" || cmd == "sh") {
        var fakeCmd = "grep";
        send("Bypass " + cmd + " command");
        return exec1.call(this, fakeCmd);
    }
    if (cmd == "su") {
        var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
        send("Bypass " + cmd + " command");
        return exec1.call(this, fakeCmd);
    }
    return exec2.call(this, cmd, env);
};

exec.implementation = function(cmd) {
    for (var i = 0; i < cmd.length; i = i + 1) {
        var tmp_cmd = cmd[i];
        if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id" || tmp_cmd == "sh") {
            var fakeCmd = "grep";
            send("Bypass " + cmd + " command");
            return exec1.call(this, fakeCmd);
        }

        if (tmp_cmd == "su") {
            var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
            send("Bypass " + cmd + " command");
            return exec1.call(this, fakeCmd);
        }
    }

    return exec.call(this, cmd);
};

exec1.implementation = function(cmd) {
    if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id" || cmd == "sh") {
        var fakeCmd = "grep";
        send("Bypass " + cmd + " command");
        return exec1.call(this, fakeCmd);
    }
    if (cmd == "su") {
        var fakeCmd = "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled";
        send("Bypass " + cmd + " command");
        return exec1.call(this, fakeCmd);
    }
    return exec1.call(this, cmd);
};

String.contains.implementation = function(name) {
    if (name == "test-keys") {
        send("Bypass test-keys check");
        return false;
    }
    return this.contains.call(this, name);
};

var get = SystemProperties.get.overload('java.lang.String');

get.implementation = function(name) {
    if (RootPropertiesKeys.indexOf(name) != -1) {
        send("Bypass " + name);
        return RootProperties[name];
    }
    return this.get.call(this, name);
};

Interceptor.attach(Module.findExportByName("libc.so", "fopen"), {
    onEnter: function(args) {
        var path1 = Memory.readCString(args[0]);
        var path = path1.split("/");
        var executable = path[path.length - 1];
        var shouldFakeReturn = (RootBinaries.indexOf(executable) > -1)
        if (shouldFakeReturn) {
            Memory.writeUtf8String(args[0], "/ggezxxx");
            send("Bypass native fopen >> "+path1);
        }
    },
    onLeave: function(retval) {

    }
});

Interceptor.attach(Module.findExportByName("libc.so", "fopen"), {
    onEnter: function(args) {
        var path1 = Memory.readCString(args[0]);
        var path = path1.split("/");
        var executable = path[path.length - 1];
        var shouldFakeReturn = (RootBinaries.indexOf(executable) > -1)
        if (shouldFakeReturn) {
            Memory.writeUtf8String(args[0], "/ggezxxx");
            send("Bypass native fopen >> "+path1);
        }
    },
    onLeave: function(retval) {

    }
});

Interceptor.attach(Module.findExportByName("libc.so", "system"), {
    onEnter: function(args) {
        var cmd = Memory.readCString(args[0]);
        send("SYSTEM CMD: " + cmd);
        if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id") {
            send("Bypass native system: " + cmd);
            Memory.writeUtf8String(args[0], "grep");
        }
        if (cmd == "su") {
            send("Bypass native system: " + cmd);
            Memory.writeUtf8String(args[0], "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled");
        }
    },
    onLeave: function(retval) {

    }
});

/*
TO IMPLEMENT:
Exec Family
int execl(const char *path, const char *arg0, ..., const char *argn, (char *)0);
int execle(const char *path, const char *arg0, ..., const char *argn, (char *)0, char *const envp[]);
int execlp(const char *file, const char *arg0, ..., const char *argn, (char *)0);
int execlpe(const char *file, const char *arg0, ..., const char *argn, (char *)0, char *const envp[]);
int execv(const char *path, char *const argv[]);
int execve(const char *path, char *const argv[], char *const envp[]);
int execvp(const char *file, char *const argv[]);
int execvpe(const char *file, char *const argv[], char *const envp[]);
*/


BufferedReader.readLine.overload().implementation = function() {
    var text = this.readLine.call(this);
    if (text === null) {
        // just pass , i know it's ugly as hell but test != null won't work :(
    } else {
        var shouldFakeRead = (text.indexOf("ro.build.tags=test-keys") > -1);
        if (shouldFakeRead) {
            send("Bypass build.prop file read");
            text = text.replace("ro.build.tags=test-keys", "ro.build.tags=release-keys");
        }
    }
    return text;
};

var executeCommand = ProcessBuilder.command.overload('java.util.List');

ProcessBuilder.start.implementation = function() {
    var cmd = this.command.call(this);
    var shouldModifyCommand = false;
    for (var i = 0; i < cmd.size(); i = i + 1) {
        var tmp_cmd = cmd.get(i).toString();
        if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd.indexOf("mount") != -1 || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd.indexOf("id") != -1) {
            shouldModifyCommand = true;
        }
    }
    if (shouldModifyCommand) {
        send("Bypass ProcessBuilder " + cmd);
        this.command.call(this, ["grep"]);
        return this.start.call(this);
    }
    if (cmd.indexOf("su") != -1) {
        send("Bypass ProcessBuilder " + cmd);
        this.command.call(this, ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"]);
        return this.start.call(this);
    }

    return this.start.call(this);
};

if (useProcessManager) {
    var ProcManExec = ProcessManager.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;', 'java.io.File', 'boolean');
    var ProcManExecVariant = ProcessManager.exec.overload('[Ljava.lang.String;', '[Ljava.lang.String;', 'java.lang.String', 'java.io.FileDescriptor', 'java.io.FileDescriptor', 'java.io.FileDescriptor', 'boolean');

    ProcManExec.implementation = function(cmd, env, workdir, redirectstderr) {
        var fake_cmd = cmd;
        for (var i = 0; i < cmd.length; i = i + 1) {
            var tmp_cmd = cmd[i];
            if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id") {
                var fake_cmd = ["grep"];
                send("Bypass " + cmdarr + " command");
            }

            if (tmp_cmd == "su") {
                var fake_cmd = ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"];
                send("Bypass " + cmdarr + " command");
            }
        }
        return ProcManExec.call(this, fake_cmd, env, workdir, redirectstderr);
    };

    ProcManExecVariant.implementation = function(cmd, env, directory, stdin, stdout, stderr, redirect) {
        var fake_cmd = cmd;
        for (var i = 0; i < cmd.length; i = i + 1) {
            var tmp_cmd = cmd[i];
            if (tmp_cmd.indexOf("getprop") != -1 || tmp_cmd == "mount" || tmp_cmd.indexOf("build.prop") != -1 || tmp_cmd == "id") {
                var fake_cmd = ["grep"];
                send("Bypass " + cmdarr + " command");
            }

            if (tmp_cmd == "su") {
                var fake_cmd = ["justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled"];
                send("Bypass " + cmdarr + " command");
            }
        }
        return ProcManExecVariant.call(this, fake_cmd, env, directory, stdin, stdout, stderr, redirect);
    };
}

if (useKeyInfo) {
    KeyInfo.isInsideSecureHardware.implementation = function() {
        send("Bypass isInsideSecureHardware");
        return true;
    }
}

//});
