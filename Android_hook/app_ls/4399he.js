setImmediate(function() {
Java.perform(function() {
	var targetClass='com.framework.helpers.AppNativeHelper';
	var methodName='desCbcEncrypt';
	var gclass = Java.use(targetClass);
	gclass[methodName].overload('java.lang.String').implementation = function(arg0) {
		console.log('\nGDA[Hook desCbcEncrypt(java.lang.String)]'+'\n\targ0 = '+arg0);
		var i=this[methodName](arg0);
		console.log('\treturn '+i);
		return i;
	}

	// hook_加载的so
	var soAddr = Module.findBaseAddress("libNativeHelper.so");//要hook的so名
    //console.log(soAddr); 0x46C0
    var funcAddr = soAddr.add(0x46C0);//要hook的函数在函数里的偏移
    //console.log(funcAddr);

    if (funcAddr != null) {
        Interceptor.attach(funcAddr, {
            onEnter: function (args) {
            	//console.log('des_args_1--->', Memory.readCString(args[0]));
				//console.log('des_args_2--->', hexdump(args[2]));
            	console.log('des_args_3--->',  hexdump(args[3]));
                console.log('des_args_iv--->', hexdump(args[4]));

            },
            onLeave: function (retval) {
                console.log('buffers',hexdump(retval));

            }
        });
    }


})
})
// password: 75217e23374077304b
// sign: jSONObject + "&4399analyze&" + valueOf-->md5
//frida -H 127.0.0.1:6666 4399游戏盒 -l 4399he.js