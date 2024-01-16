function hook_ssl_verify_result(address)
{
 Interceptor.attach(address, {
  onEnter: function(args) {
   console.log("Disabling SSL validation")
  },
  onLeave: function(retval)
  {
   console.log("Retval: " + retval)
   retval.replace(0x1); 
  }
 });
}
function hookFlutter() {

    var m = Process.findModuleByName("libflutter.so");
    var pattern = "FF C3 01 D1 FD 7B 01 A9 FC 6F 02 A9 FA 67 03 A9 F8 5F 04 A9 F6 57 05 A9 F4 4F 06 A9 08 0A 80 52 48 00 00 39"

    var res = Memory.scan(m.base, m.size, pattern, {

            onMatch: function(address, size){

                console.log('[+] ssl_verify_result found at: ' + address.toString());

                hook_ssl_verify_result(address);

            },

            onError: function(reason){

                console.log('[!] There was an error scanning memory');

            },

            onComplete: function() {

                console.log("All done")

            }

        });

}
function disablePinning(){
  // Change the offset on the line below with the binwalk result
  // If you are on 32 bit, add 1 to the offset to indicate it is a THUMB function: .add(0x1)
  // Otherwise, you will get 'Error: unable to intercept function at ......; please file a bug'
  var address = Module.findBaseAddress('libflutter.so').add(0x7CAA7C)
  hook_ssl_verify_result(address);
}
setTimeout(hookFlutter, 1000)
// source：https://bbs.pediy.com/thread-261941.htm
// other：见上文评论，替换libflutter.so