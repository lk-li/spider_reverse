function hook_strstr() {
    var pfn_strstr = Module.findExportByName("libc.so", "strstr");
    Interceptor.attach(pfn_strstr, {
        onEnter: function (args) {
            var str1 = Memory.readCString(args[0]);
            var str2 = Memory.readCString(args[1]);
            if (str2.indexOf("SigBlk") !== -1 ||
                str2.indexOf("gdbus") !== -1 ||
                str2.indexOf("frida") !== -1 ||
                str2.indexOf("gum-js-loop") !== -1 ||
                str2.indexOf("gmain") !== -1 ||
                str2.indexOf("linjector") !== -1
            ) {
                console.log("str1:%s - str2:%s\n", str1, str2);
                this.hook = true;
            }
        },
        onLeave: function (retval) {
            if (this.hook) {
                retval.replace(0x0);
            }
        }
    });
}

function hook_pthread() {

	var pthread_create_addr = Module.findExportByName(null, 'pthread_create');
	console.log("pthread_create_addr,", pthread_create_addr);

	var pthread_create = new NativeFunction(pthread_create_addr, "int", ["pointer", "pointer", "pointer", "pointer"]);

	Interceptor.replace(pthread_create_addr, new NativeCallback(function (parg0, parg1, parg2, parg3) {
		var so_name = Process.findModuleByAddress(parg2).name;
		var so_path = Process.findModuleByAddress(parg2).path;
		var so_base = Module.getBaseAddress(so_name);
		var offset = parg2 - so_base;
		console.log("so_name", so_name, "offset", offset, "path", so_path, "parg2", parg2);
		var PC = 0;
		if ((so_name.indexOf("libxcrash.so") > -1) || (so_name.indexOf("xxxx") > -1)) {
			console.log("find thread func offset", so_name, offset);
			if ((11628 === offset)) {
				console.log("anti bypass");
			} else if (23108 === offset) {
				console.log("anti bypass");
			} else if (23108 === offset) {
				console.log("anti bypass");
			} else {
				PC = pthread_create(parg0, parg1, parg2, parg3);
				console.log("ordinary sequence", PC)
			}
		} else {
			PC = pthread_create(parg0, parg1, parg2, parg3);
			// console.log("ordinary sequence", PC)
		}
		return PC;
	}, "int", ["pointer", "pointer", "pointer", "pointer"]))

}

// hook_strstr();
hook_pthread();
//--no-pause
// adb forward tcp:6666 tcp:6666