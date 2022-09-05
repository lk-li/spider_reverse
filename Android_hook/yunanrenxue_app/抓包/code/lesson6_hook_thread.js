function printJavaStack(tag) {
    Java.perform(function () {
        console.log(tag + "\n" + Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
    });
}



var hook_thread = function(){
    Java.perform(function(){
        var Thread = Java.use("java.lang.Thread");
        Thread.init.implementation = function(arg0, arg1, arg2, arg3){
            var res = this.init(arg0, arg1, arg2, arg3);
            var threadid = this.getId();

            var target = this.target.value;
            if (target){
                var className = target.$className;
                console.log("\nRunnable classname ==>", className, threadid);
                printJavaStack("Runnable " + threadid);
            }else{
                var className = this.$className;
                console.log("\nThe Thread classname ==>", className, threadid);
                printJavaStack("The Thread " + threadid);
            }
            
            return res;
        }

        Thread.run.implementation = function(){
            var threadid = this.getId();
            var className = this.$className;
            console.log("The Thread run classname ==>", className, threadid);
            return this.run();
        }
    });
}


function main() {
    hook_thread();
}

setImmediate(main);
