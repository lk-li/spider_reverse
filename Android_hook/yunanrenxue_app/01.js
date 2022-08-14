function bin2String(array) {
    return String.fromCharCode.apply(String, array)
}

function StringToByte(str) {
    var re = [], idx;
    for (var i = 0; i < str.length; i++) {
        idx = str.charCodeAt(i);
        if (idx & 0xff00) {
            re.push(idx >> 8);
            re.push(idx & 0xff);
        } else {
            re.push(idx)
        }
    }
    return re
}


// function main() {
//     Java.perform(function () {
//         var utils = Java.use("o00oO00o.Oooo000")
//         utils.OooO.implementation = function (args) {
//             console.log("args==>", bin2String(args));
//             var result = this.OooO(args);
//             console.log("result==>", result)
//             return result
//         }
//     })
// }

function invokesign(data) {
    var result = null;
    Java.perform(function () {
        Java.choose("o00oO00o.Oooo000", {
            onMatch: function (instance) {
                //console.log(instance);
                result = instance.OooO(StringToByte(data));
            }, onComplete: function () {
            }
        })
    })
    return result
}
//
// setImmediate(main)

rpc.exports = {
    invokesign: invokesign
}