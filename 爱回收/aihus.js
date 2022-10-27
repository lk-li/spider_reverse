//将so层生成的数组按照java改写js转换位字符
function codestr(barr){
    var cArr = []
    for (var i=0;i<barr.length;i++){
        var i2 = barr[i]&255;
        var i3 = i*2;
        var cArr2 =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        cArr[i3]=cArr2[i2 >>> 4];
        cArr[i3 + 1] = cArr2[i2 & 15];
    }
    return cArr.join("")
}
function sign(){
    Java.perform(function (){
        var Sign = Java.use("aihuishou.aihuishouapp.recycle.utils.AliSignUtils");
        Sign.a.implementation = function (age1){
            var result = this.a(age1);
            console.log("age_a-->",age1);
            console.log("result_a-->",result)
            return  result;
        };

        // Sign.b.overload().implementation = function (age1){
        //     var result = this.b(age1);
        //     console.log("age_b-->",age1);
        //     console.log("result_b-->",result)
        //     return  result;
        // };
        Sign.c.implementation = function (){
            var result = this.c();
            console.log("age_c-->",age1);
            console.log("result_c-->",result)
            return  result;
        }

    })
}

function main(){
    sign()
}

setImmediate(main)

//console.log(codestr([36,79,-48,-84,-100,-24,-40,0,28,-13,-113,65,40,-15,91,9,-67,70,-58,-53]))
//"244FD0AC9CE8D8001CF38F4128F15B09BD46C6CB"

//0002_8355
// E7F099314578CB6777A9CA7B3B92F13B3E7CF11F409184F0FF7D16526689ECAA1880F227078123055E81F0225A8BC9C6D391FD51
// 9SwFBknKMds4YT6VxHRhGeljdwfm2/qKg4SHnBE9acLp/p2Ou9Uc5s3iMZLx/t5SfM9zX14cRRkMRdzx6gaz/QisdxylDVRpNiBaTKagLEf51Kd0Tf7Y6Sxho+P2yS9/iNbj9OwUC6kMB7FVz7mCp08Ga86hGYoW1RkLbV+eWZDG6Jup3RIzE50El+Rwh7+z9332ZMjlfFgSM+rdAFyeuq7mnsN3FEHp1R7ltsdFrZCAGGffJszrCBUR5HWHGduPmG37f+O8Lfno8doypnmnQWZk9zfGq6ScKsadA1oUwZeknuF9fFwpKapMF9h6+1PPJ5SffzaptOieq2kAQXkCXdqfIPgKpLckYRuOuuqsw9UuyU40cpLaAp2kq/ae1xvf/ZaOManfydfUNLCCOiq34HDk62krMFuu4sF1bzCg2QogbdKejmOTwi6Eu/wRipOVd/FIqH5rsk3i9Mp6h0O9cw==
//0002_8355
// F08133306D40AB505017EF47E46CC1D63C22A6FCD85F349EEC4EF4FB2163B641EF3DCFC7CD38D6E0AA3A89BC351A8D7DFA52CE7A
// 9SwFBknKMds4YT6VxHRhGeljdwfm2/qKg4SHnBE9acLp/p2Ou9Uc5s3iMZLx/t5SfM9zX14cRRkMRdzx6gaz/QisdxylDVRpNiBaTKagLEf51Kd0Tf7Y6Sxho+P2yS9/iNbj9OwUC6kMB7FVz7mCp08Ga86hGYoW1RkLbV+eWZDG6Jup3RIzE50El+Rwh7+z9332ZMjlfFgSM+rdAFyeuq7mnsN3FEHp1R7ltsdFrZCAGGffJszrCBUR5HWHGduPmG37f+O8Lfno8doypnmnQWZk9zfGq6ScKsadA1oUwZeknuF9fFwpKapMF9h6+1PPJ5SffzaptOieq2kAQXkCXdqfIPgKpLckYRuOuuqsw9UuyU40cpLaAp2kq/ae1xvf/ZaOManfydfUNLCCOiq34HDk62krMFuu4sF1bzCg2QogbdKejmOTwi6Eu/wRipOVd/FIqH5rsk3i9Mp6h0O9cw==
//0002_835
// 60E7EF94603968F49931EE794A1FF15B9B6F911C82F65699B72BFA32E23868659C6286AED46EDE7BD7DC6DF0DEED41B9E6629D24E
// 9SwFBknKMds4YT6VxHRhGeljdwfm2/qKg4SHnBE9acLp/p2Ou9Uc5s3iMZLx/t5SfM9zX14cRRkMRdzx6gaz/QisdxylDVRpNiBaTKagLEf51Kd0Tf7Y6Sxho+P2yS9/iNbj9OwUC6kMB7FVz7mCp08Ga86hGYoW1RkLbV+eWZDG6Jup3RIzE50El+Rwh7+z9332ZMjlfFgSM+rdAFyeuq7mnsN3FEHp1R7ltsdFrZCAGGffJszrCBUR5HWHGduPmG37f+O8Lfno8doypnmnQWZk9zfGq6ScKsadA1oUwZeknuF9fFwpKapMF9h6+1PPJ5SffzaptOieq2kAQXkCXdqfIPgKpLckYRuOuuqsw9UuyU40cpLaAp2kq/ae1xvf/ZaOManfydfUNLCCOiq34HDk62krMFuu4sF1bzCg2QogbdKejmOTwi6Eu/wRipOVd/FIqH5rsk3i9Mp6h0O9cw==