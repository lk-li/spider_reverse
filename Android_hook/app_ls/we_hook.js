function calculateS() {
    // java类
    Java.perform(function () {
        var targetClass = 'com.sina.weibo.security.WeiboSecurityUtils';
        var methodName = 'calculateS';
        var gclass = Java.use(targetClass);
        gclass[methodName].overload('android.content.Context', 'java.lang.String', 'java.lang.String').implementation = function (arg0, arg1, arg2) {
            console.log('\nGDA[Hook calculateS(android.content.Context,java.lang.String,java.lang.String)]' + '\n\targ0 = ' + arg0 + '\n\targ1 = ' + arg1 + '\n\targ2 = ' + arg2);
            var i = this[methodName](arg0, arg1, arg2);
            console.log('\treturn ' + i);
            return i;
        }
    })
}

// hook so md5 updata
function hookTestso() {
    var soAddr = Module.findBaseAddress("libutility.so");//要hook的so名
    //console.log(soAddr);
    var funcAddr = soAddr.add(0x1A44 + 1);//要hook的函数在函数里的偏移
    //console.log(funcAddr);

    if (funcAddr != null) {
        Interceptor.attach(funcAddr, {
            onEnter: function (args) {
                console.log('args2--->', Memory.readCString(args[1]));
                this.buffers = args[0]

            },
            onLeave: function (retval) {
                console.log('buffers', hexdump(soAddr.add(this.buffers)));
                //console.log(hexdump(retval));
            }
        });
    }
}


// hook so md5_data
function hookTestso2() {
    var soAddr = Module.findBaseAddress("libutility.so");//要hook的so名
    //console.log(soAddr);
    var funcAddr = soAddr.add(0x1BD0 + 1);//要hook的函数在函数里的偏移
    //console.log(funcAddr);

    if (funcAddr != null) {
        Interceptor.attach(funcAddr, {
            onEnter: function (args) {
                console.log('md5_args--->', Memory.readCString(args[0]));

            },
            onLeave: function (retval) {
                //console.log('buffers',hexdump(soAddr.add(this.buffers)));
                console.log('md5_txt', Memory.readCString(retval));
                var v10 = Memory.readCString(retval).split("");
                var v11 = [];
                var s =''
                // s 的后续处理
                v11[0] = v10[1];
                v11[1] = v10[5];
                v11[2] = v10[2];
                v11[3] = v10[10];
                v11[4] = v10[17];
                v11[5] = v10[9];
                v11[6] = v10[25];
                v11[7] = v10[27];
                s = v11.join("");
                console.log('s---->',s)
            }
        });
    }
}

function showBytes(ptr, len) {
    var buffer = Memory.readByteArray(ptr, len);
    console.log(hexdump(buffer, {
        offset: 0,
        length: len,
        header: true,
        ansi: false
    }))
}

function main() {
    calculateS()
    hookTestso()
    hookTestso2()

}

setImmediate(main)
// 微博国际版 登录 s参数