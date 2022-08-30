import frida,sys

def on_message(message,data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


jscode = '''
Java.perform(function(){
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
})'''

# AES -ECB-pkcs5padding key:d245a0ba8d678a61  -->md5
process = frida.get_device_manager().add_remote_device('127.0.0.1:6666').attach('得物')
# process = frida.get_usb_device(timeout=1000).attach('19688')
script = process.create_script(jscode)
script.on('message',on_message)
print('[*] Running CTF')
script.load()
sys.stdin.read()


#启动方式2 spawn 重启APP 可以hook APP启动阶段
# device = frida.get_usb_device(-1)
# device = frida.get_device_manager().add_remote_device('127.0.0.1:6666')
# pid = device.spawn(['com.to8to.housekeeper'])
# process = device.attach(pid)
#
# script = process.create_script(jscode)
# script.on('message', on_message)
# print('[*] Running')
# script.load()
# device.resume(pid)
# sys.stdin.read()