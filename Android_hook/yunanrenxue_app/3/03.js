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
        var Sign = Java.use("com.yuanrenxue.challenge.three.ChallengeThreeNativeLib");
        Sign.sign.implementation = function (age1){
            var result = this.sign(age1);
            console.log("age1-->",age1);
            console.log("result-->",codestr(result))
            return  result;
        }

        var bytestr = Java.use("com.yuanrenxue.challenge.fragment.challenge.ChallengeThreeFragment");
        bytestr.Oooo00o.implementation=function (bypt){
             var result1 = this.Oooo00o(bypt);
            console.log("age1-->",bypt);
            console.log("result1-->",result1)
            return  result1;
        }

    })
}

function main(){
    sign()
}

setImmediate(main)

//console.log(codestr([36,79,-48,-84,-100,-24,-40,0,28,-13,-113,65,40,-15,91,9,-67,70,-58,-53]))
//"244FD0AC9CE8D8001CF38F4128F15B09BD46C6CB"