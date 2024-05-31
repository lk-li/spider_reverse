function hook_dlopen(soName = '') {
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"),
        {
            onEnter: function (args) {
                var pathptr = args[0];
                if (pathptr !== undefined && pathptr != null) {
                    var path = ptr(pathptr).readCString();
                    // console.log("load " + path)
                    if (path.indexOf(soName) >= 0) {
                        // this.is_can_hook = true;
                        locate_init()
                    }
                }
            },
            onLeave: function (retval) {
                // if(this.is_can_hook){
                //     hook_JNI_OnLoad()
                // }

            }
        }
    );
}

function locate_init() {
    let secmodule = null
    Interceptor.attach(Module.findExportByName(null, "__system_property_get"),
        {
            // _system_property_get("ro.build.version.sdk", v1);
            onEnter: function (args) {
                secmodule = Process.findModuleByName("libmsaoaidsec.so")
                var name = args[0];
                if (name !== undefined && name != null) {
                    name = ptr(name).readCString();
                    if (name.indexOf("ro.build.version.sdk") >= 0) {
                        // 这是.init_proc刚开始执行的地方，是一个比较早的时机点
                        // do something

                        // hook_pthread_create()
                         bypass()
                    }
                }
            }
        }
    );
}

function hook_pthread_create() {
    console.log("libmsaoaidsec.so --- " + Process.findModuleByName("libmsaoaidsec.so").base)
    Interceptor.attach(Module.findExportByName("libc.so", "pthread_create"), {
        onEnter(args) {
            let func_addr = args[2]
            console.log("The thread function address is " + func_addr)
        }
    })
}

function nop(addr) {
    Memory.patchCode(ptr(addr), 4, code => {
        const cw = new ThumbWriter(code, { pc: ptr(addr) });
        cw.putNop();
        cw.putNop();
        cw.flush();
    });
}

function bypass(){
    let module = Process.findModuleByName("libmsaoaidsec.so")
    nop(module.base.add(0x10AE4))
    nop(module.base.add(0x113F8))
}
function hook_JNI_OnLoad(){
    let module = Process.findModuleByName("libmsaoaidsec.so")
    Interceptor.attach(module.base.add(0xC6DC + 1), {
        onEnter(args){
            console.log("call JNI_OnLoad")
        }
    })
}
// https://www.wandoujia.com/apps/281291/history_v7261100
setImmediate(hook_dlopen, "libmsaoaidsec.so")


