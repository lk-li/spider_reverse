import frida, sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)
# OooO0O0.OooO.OooO00o.OooOOOo.OooOOO0.OooO0OO.OooO00o
test_sig = '''
Java.perform(function(){
    console.log('------a')
    var treemap = Java.use('com.yuanrenxue.challenge.fragment.challenge.ChallengeOneFragment')
    var stringBuilder = Java.use('java.lang.StringBuilder').$new()
    console.log('------b')
    treemap.o00oO0o.implementation = function(p) {
        console.log('enter a')
        console.log('this.f6052OooO0oo:',this.f6052OooO0oo)
    } 
    
    //var DD = Java.use('OooO0o.OooOO0O.OooO00o.OooOo0.OooO00o')
    //DD.OooO.implementation = function(p) {
    //console.log('------p',p)
    //var res = this.OooO(p)
    //console.log('res:',res)
    //return res
    //}
})
'''

test_sig1 = '''
Java.perform(function(){
    console.log('------a') 
    //var DD = Java.use('com.iCitySuzhou.suzhou001.d.d')
    //DD.a.overload('a.u$a').implementation = function(p) {
    //    console.log('enter a') 
    //    return this.a(p)
    //}
        console.log('111')
        var str = Java.use('java.lang.String').$new('IMEI867980020143793-IMSI460NNNNNNNNNNNN&&1641808776&&f1190aca-d08e-4041-8666-29931cd89dde')

        var AA= Java.use('com.hualong.framework.b.a')
        var stringbuffer = Java.use('java.lang.StringBuffer').$new()

        var Integer = Java.use('java.lang.Integer')

        var instance = Java.use('java.security.MessageDigest').getInstance("MD5")
        instance.update(str.getBytes())
        var digest = instance.digest()
        var len = digest.length
        for (var i = 0; i < len; ++i){
            stringbuffer.append(Integer.toString((digest[i]>>>4)&15,16)).append(Integer.toString(digest[i] & 15, 16));
        }
        console.log('signature:',stringbuffer.toString())


        /*
        AA.a.implementation = function(p) {
            console.log('param:',p)
            var ret = this.a(p)
            console.log('ret:',ret)
            return ret
        }*/

})

'''

# 两种启动方式

# 启动方式1


process = frida.get_usb_device(-1).attach('猿人学APP')
script = process.create_script(test_sig)
script.on('message', on_message)
script.load()
# script.exports.gett('IMEI867980020143793-IMSI460NNNNNNNNNNNN&&1641808776&&f1190aca-d08e-4041-8666-29931cd89dde')
sys.stdin.read()

# 启动方式2 spawn 重启APP 可以hook APP启动阶段
# device = frida.get_usb_device(-1)
# pid = device.spawn(['com.iCitySuzhou.suzhou001'])
# process = device.attach(pid)

# script = process.create_script(test_context)
# script.on('message', on_message)
# print('[*] Running')
# script.load()
# device.resume(pid)
# sys.stdin.read()
