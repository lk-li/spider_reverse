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
function disablePinning(){
  // Change the offset on the line below with the binwalk result
  // If you are on 32 bit, add 1 to the offset to indicate it is a THUMB function: .add(0x1)
  // Otherwise, you will get 'Error: unable to intercept function at ......; please file a bug'
  var address = Module.findBaseAddress('libflutter.so').add(0x393E08)
  hook_ssl_verify_result(address);
}
setTimeout(disablePinning, 1000)
// source：https://bbs.pediy.com/thread-261941.htm
// other：见上文评论，替换libflutter.so