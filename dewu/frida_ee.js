function hook() {
    var javaString = Java.use('java.lang.String');
    var AESEncrypt = Java.use('com.duapp.aesjni.AESEncrypt');

    AESEncrypt.encode.overload('java.lang.String').implementation = function (a) {
        console.log('AESEncrypt.encode.a: ', a);

        var res = this.encode(a);

        console.log('AESEncrypt.encode.res: ', res);

        return res;
    }

    AESEncrypt.encodeByte.implementation = function (a, b) {
        console.log('AESEncrypt.encodeByte.a: ', a);
        console.log('AESEncrypt.encodeByte.a: ', javaString.$new(a));
        console.log('AESEncrypt.encodeByte.b: ', b);

        var res = this.encodeByte(a, b);
        console.log('AESEncrypt.encodeByte.res: ', res);

        return res;
    }
}

function hookSo1() {
    var AESBase = Module.findExportByName('libJNIEncrypt.so', 'AES_128_ECB_PKCS5Padding_Encrypt')
    console.log(AESBase);
    Interceptor.attach(AESBase, {
        onEnter: function (args) {
            console.log('-------------参数 1-------------');
            console.log(hexdump(args[0]));
            console.log('-------------参数 2-------------');
            console.log(hexdump(args[1]));
        },
        onLeave: function (retValue) {
            console.log('-------------返回-------------');
            console.log(hexdump(retValue));
        }
    })
}

function main() {
    Java.perform(function () {
        //hook();
        hookSo1();
    })
}
document = {}
//setImmediate(main);
console.log(document.toString())
// frida -UF -l hook.js