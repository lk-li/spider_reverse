function printJavaStack(tag) {
    Java.perform(function () {
        console.log(tag + "\n" + Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
    });
}


function ks_one(){
    Java.perform(function (){
        let Aegon = Java.use("com.kuaishou.aegon.Aegon");
        Aegon.nativeUpdateConfig.implementation = function(str, str2){
            console.log('nativeUpdateConfig is called str', str);
            console.log('nativeUpdateConfig is called str2', str2);
            str = '{"enable_quic": false, "congestion_control_frame_interval_sec": 0, "quic_max_v6_packet_size": 1232, "cdn_preresolver_ip_blacklist":["0.0.0.0","1.1.1.1","127.0.0.1"], "preconnect_num_streams": 1, "quic_idle_timeout_sec": 180, "quic_use_bbr": true, "altsvc_broken_time_max": 600, "altsvc_broken_time_base": 60, "proxy_host_blacklist": ["*"],"max_os_version_libdispatch_fix_enable":"15.3.1", "enable_mtrequest_by_header":true,"resolver_ip_blacklist":["0.0.0.0","1.1.1.1","127.0.0.1"], "enable_trace_id_report": true}'
            let ret = this.nativeUpdateConfig(str, str2);
            printJavaStack("enable_quic");
            return ret;
        };
    })
}


// ----------------


var hookCallBack = function(p){
    var fun = new NativeFunction(p, "int", ["pointer", "pointer"]);
    var self = new NativeCallback(function(arg1, arg2){
        console.log("cononono", fun(arg1, arg2));
        return 0;
    },"int", ["pointer", "pointer"]);
    Interceptor.replace(fun, self);
}


var dlopentodo = function(){
    var verify = Module.findExportByName("libsscronet.so", "SSL_CTX_set_custom_verify");
    var custom_verify = new NativeFunction(verify, "pointer", ["pointer", "int", "pointer"]);
    var self = new NativeCallback(function(arg1, arg2, arg3){
        hookCallBack(arg3);
        console.log("custom_verify called", arg2, arg3);
        return custom_verify(arg1, 0, arg3)
    }, "pointer", ["pointer", "int", "pointer"]);
    Interceptor.replace(verify, self);
}


function dy_one(){
    var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");
    console.log(android_dlopen_ext);
    if (android_dlopen_ext != null){
        Interceptor.attach(android_dlopen_ext, {
            onEnter: function(args){
                var soName = args[0].readCString();
                // console.log("soName", soName);
                if (soName.indexOf("libsscronet.so") != -1){
                    this.hook = true;
                }
            }, onLeave: function(retval){
                if(this.hook){
                    dlopentodo();
                }
            }
        })
    }
}


function dy_two(){
    Java.perform(function(){
        let CronetClient = Java.use("org.chromium.CronetClient");
        CronetClient.tryCreateCronetEngine.implementation = function(context, z, z2, z3, z4, str, executor, z5){
            console.log('tryCreateCronetEngine is called');
        };
    });
}


//ks_10.2.10.24303
//dy_19.8.0
// ----------------------------
// ks_one();
// dy_one();
// dy_two();