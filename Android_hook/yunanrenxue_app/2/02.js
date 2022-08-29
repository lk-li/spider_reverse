
function charcode(arry){
    // console.log(arry);
    var txt = ''
    for (var i=0;i<arry.length;i++){
        txt+=String.fromCharCode(arry[i])
    }
    return txt
}
/** UTF8 转化为字符串 */
function UTF8ToStr(arr) {
    let val = ''
    arr.forEach(item => {
        if (item < 127) {
            val += String.fromCharCode(item)
        } else {
            val += '%' + item.toString(16).toUpperCase()
        }
    })
    console.log(val)
    try {
        return decodeURI(val)
    } catch (err) {
        return val
    }
}

//JSON.stringify object-->str
function encrypt() {
    Java.perform(function () {
        var utils = Java.use('com.yuanrenxue.challenge.two.NativeLib');
        utils.encrypt.implementation = function (a, b) {
            var retval = this.encrypt(a, b);
            console.log('bArr--->',JSON.stringify(a));
            console.log('bArr---str>',charcode(a));
            console.log('long j--->',b);
            console.log('resopn-->', JSON.stringify(retval));

            return retval;
        }

    })
}

function main(){
     encrypt()
}

setImmediate(main)