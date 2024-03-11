// 判断字符串长度补齐24的倍数
function w_4159(lbl3_22) {
    var cbbbl_245 = lbl3_22["length"];
    var cbbbl_246 = cbbbl_245 % 24;
    var lbl5_22 = cbbbl_246;
    var cbbbl_247 = lbl5_22 > 14;
    var cbbbl_248 = cbbbl_247;
    if (!cbbbl_247) {
        cbbbl_248 = true;
    }
    if (cbbbl_248) {
        var cbbbl_249 = 24 - lbl5_22;
        lbl5_22 = cbbbl_249;
        var lbl6_22 = 0;
        var cbbbl_250 = lbl6_22;
        var cbbbl_251 = cbbbl_250 >= lbl5_22;
        while (!cbbbl_251) {
            var cbbbl_252 = lbl3_22 + " ";
            lbl3_22 = cbbbl_252;
            var cbbbl_253 = lbl6_22;
            var cbbbl_254 = cbbbl_253 + 1;
            lbl6_22 = cbbbl_254;
            var cbbbl_255 = 0 | cbbbl_253;
            var cbbbl_256 = lbl6_22;
            cbbbl_251 = cbbbl_256 >= lbl5_22;
        }
        var cbbbl_258 = lbl3_22;
        return cbbbl_258;
    }
    return false;
}


// 取四个字符串进行hex处理
function str_byt(lbl3_36) {
    var lbl4_36 = 0;
    var cbbbl_395 = 0;
    var cbbbl_405 = cbbbl_395 >= 4;
    while (!cbbbl_405) {
        var cbbbl_406 = lbl4_36;
        var cbbbl_407 = lbl3_36["charCodeAt"].apply(lbl3_36, [cbbbl_395]);
        var cbbbl_408 = 8 * cbbbl_395;
        var cbbbl_409 = cbbbl_407 << cbbbl_408;
        lbl4_36 = cbbbl_406 | cbbbl_409;
        cbbbl_395 = cbbbl_395 + 1;
        cbbbl_405 = cbbbl_395 >= 4;
    }
    return lbl4_36;
};


// 编码 用于后续的 ba64
function Char_Code(lbl3_53) {
    var cbbbl_664 = 255 & lbl3_53;
    var cbbbl_665 = lbl3_53 >> 8;
    var cbbbl_666 = cbbbl_665 & 255;
    var cbbbl_667 = lbl3_53 >> 16;
    var cbbbl_668 = cbbbl_667 & 255;
    var cbbbl_669 = lbl3_53 >> 24;
    var cbbbl_670 = cbbbl_669 & 255;
    return String.fromCharCode.apply(String, [cbbbl_664, cbbbl_666, cbbbl_668, cbbbl_670]);

}

function teaEncrypt(v, k) {
    const delta = 0x9e3779b9;
    var sum = 0;

    let v0 = v[0];
    let v1 = v[1];

    for (let i = 0; i < 32; i++) {
        var nu = 3 & sum
        var nu_ = 0 == nu;
        if (!nu_) {
            var nu_1 = 2 == nu;
            if (!nu_1) {
                v1_ = ((v1 << 4) ^ (v1 >>> 5)) + v1;
                v0 += (v1_ ^ sum + k[nu]);
            } else {
                v1_ = ((v1 << 4) ^ (v1 >>> 5)) + v1;
                v0 += (v1_ ^ (sum + k[nu] + 657965));
            }
        } else {
            v1_ = ((v1 << 4) ^ (v1 >>> 5)) + v1;
            v0 += (v1_ ^ (sum + k[nu] + 1315858));
        }
        sum += delta;

        var nu1 = sum >>> 11;
        var nu1_ = nu1 & 3
        var nu1_1 = 0 == nu1_;
        if (!nu1_1) {
            var nu1_11 = 2 == nu1_;
            if (!nu1_11) {
                v0_ = ((v0 << 4) ^ (v0 >>> 5)) + v0;
                v1 += (v0_ ^ (sum + k[nu1_]));
            } else {
                v0_ = ((v0 << 4) ^ (v0 >>> 5)) + v0;
                v1 += (v0_ ^ (sum + k[nu1_] + 657965));
            }
        } else {
            v0_ = ((v0 << 4) ^ (v0 >>> 5)) + v0;
            v1 += (v0_ ^ (sum + k[nu1_] + 1315858));
        }
    }
    return [v0, v1];
}

// 精简上面算法
function encryptTeaAlgorithm(v) {
    var key = [1313227334 + 1315858, 1414685541, 1380859453 + 657965, 1313236307]; // 密钥
    var v0 = v[0], v1 = v[1]
    var sum = 0;
    var delta = 0x9E3779B9;
    for (var i = 0; i < 32; i++) {
        v0 += (((v1 << 4) ^ (v1 >>> 5)) + v1) ^ (sum + key[sum & 3]);
        sum += delta;
        v1 += (((v0 << 4) ^ (v0 >>> 5)) + v0) ^ (sum + key[(sum >> 11) & 3]);
    }
    return [v0, v1];
}


// 切割字符并加密运算
function tex(txt) {
    // var key = [1313227334, 1414685541, 1380859453, 1313236307]; // 密钥
    var encryptedText = "";
    var txt_ = "";
    if (txt.includes("qf_7Pf")) {
        txt_ = txt;
    } else {
        txt_ = w_4159(txt);
    }
    for (var i = 0; i < txt_.length; i += 8) {
        var bytes = [];
        bytes.push(str_byt(txt_.slice(i, i + 4)));
        bytes.push(str_byt(txt_.slice(i + 4, i + 8)));
        var tea_arry = encryptTeaAlgorithm(bytes);
        encryptedText += Char_Code(tea_arry[0]) + Char_Code(tea_arry[1]);
    }
    return encryptedText;
}


function coollect1(slideValue) {
    var coollect_t = "";
    // 滑动轨迹
    slideValue = JSON.stringify(slideValue);
    var trajectory = "[[152,326,571320],[0,-7,9],[0,-8,9],[-1,-4,9],[-1,-5,9],[-1,-4,9],[-3,-4,9],[-2,-2,9],[-5,-5,9],[-4,-4,9],[-1,-1,9],[-4,-3,9],[-2,-3,9],[-1,-2,9],[-1,-1,9],[-2,-2,9],[-1,-2,16],[-2,0,24],[-1,0,9],[-3,0,9],[-2,0,9],[-3,0,9],[-2,0,9],[-4,-1,9],[-3,-1,9],[-4,-2,9],[-2,0,9],[-2,0,9],[-3,-2,9],[-3,-1,9],[-1,0,9],[-3,0,9],[-2,-1,9],[-1,0,9],[-1,-1,9],[-3,0,9],[-2,-1,7],[-2,-1,9],[-2,0,9],[-3,-1,9],[-1,-1,9],[-1,0,9],[-1,0,9],[-2,0,49],[-1,0,40],[-1,-1,24],[3,2,144],[5,3,9],[8,3,9],[6,3,9],[9,2,9],[4,1,9],[4,0,9],[3,0,9],[3,0,9],[3,0,9],[1,0,103],[1,1,12]]";
    // let myObj = [[162,355,571380],[0,-7,9],[0,-8,9],[-1,-4,9],[-1,-5,9],[-1,-4,9],[-3,-4,9],[-2,-2,9],[-5,-5,9],[-4,-4,9],[-1,-1,9],[-4,-3,9],[-2,-3,9],[-1,-2,9],[-1,-1,9],[-2,-2,9],[-1,-2,16],[-2,0,24],[-1,0,9],[-3,0,9],[-2,0,9],[-3,0,9],[-2,0,9],[-4,-1,9],[-3,-1,9],[-4,-2,9],[-2,0,9],[-2,0,9],[-3,-2,9],[-3,-1,9],[-1,0,9],[-3,0,9],[-2,-1,9],[-1,0,9],[-1,-1,9],[-3,0,9],[-2,-1,7],[-2,-1,9],[-2,0,9],[-3,-1,9],[-1,-1,9],[-1,0,9],[-1,0,9],[-2,0,49],[-1,0,40],[-1,-1,24],[3,2,144],[5,3,9],[8,3,9],[6,3,9],[9,2,9],[4,1,9],[4,0,9],[3,0,9],[3,0,9],[3,0,9],[1,0,104],[1,1,12]];
    // let jsonString = JSON.stringify(myObj);
    // console.log(jsonString);
    var Chrome_env = '{"cd":[0,"iframe","",887811345,1696842343,"ANGLE (Intel, Intel(R) HD Graphics 630 (0x00005912) Direct3D11 vs_5_0 ps_5_0, D3D11)","1920-1080-1040-24-*-*-|-*",[360,360],"UTF-8",1023,"",1080,[],"https://new.qq.com/search?query=cctv5%E8%8A%82%E7%9B%AE%E8%A1%A8&page=2","98k",4,2,' + Math.floor(new Date().getTime() / 1000) + ',"Win32","+08","Google Inc. (Intel)",0,"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",1477091468,1920,' + Math.floor(new Date().getTime() / 1000) + 72 + ',"",24,0,';
    //                {"cd":[0,"iframe","",887811345,1696842343,"ANGLE (Intel, Intel(R) HD Graphics 630 (0x00005912) Direct3D11 vs_5_0 ps_5_0, D3D11)","1920-1080-1040-24-*-*-|-*",[360,360],"UTF-8",1023,"",1080,[],"https://new.qq.com/search?query=cctv5%E8%8A%82%E7%9B%AE%E8%A1%A8&page=1","98k",4,2,1704383963,"Win32","+08","Google Inc. (Intel)",0,"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",1477091468,1920,1704384314,"",24,0,
    //                {"cd":[0,"iframe","",887811345,1696842343,"ANGLE (Intel, Intel(R) HD Graphics 630 (0x00005912) Direct3D11 vs_5_0 ps_5_0, D3D11)","1920-1080-1040-24-*-*-|-*",[360,360],"UTF-8",1023,"",1080,[],"https://new.qq.com/search?query=%E4%B8%9C%E6%96%B9%E8%B4%A2%E5%AF%8C%E7","98k",4,2,1704417483,"Win32","+08","Google Inc. (Intel)",0,"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",1477091468,1920,1704417553,"",24,0,
    var Chrome_canvas = ',"GgoAAAANSUhEUgAAASwAAACWCAYAAA3WEGp4s7r8A/V1/GiuOpCrroHaDYRv/RcZ4PPcPe3QAAAABJRU5ErkJggg==","https://captcha.gtimg.com/1/template/drag_ele.html?rand=1519713624347",["zh-CN","en-US","zh"],0,1,0,2,0],';
    //                   ","GgoAAAANSUhEUgAAASwAAACWCAYAAA3WEGp4s7r8A/V1/GiuOpCrroHaDYRv/RcZ4PPcPe3QAAAABJRU5ErkJggg==","https://captcha.gtimg.com/1/template/drag_ele.html?rand=1519713624347",["zh-CN","en-US","zh"],0.8949999809265137,1,0,2,0],                       "
    //                    ","GgoAAAANSUhEUgAAASwAAACWCAYAAA3WEGp4s7r8A/V1/GiuOpCrroHaDYRv/RcZ4PPcPe3QAAAABJRU5ErkJggg==","https://captcha.gtimg.com/1/template/drag_ele.html?rand=1519713624347",["zh-CN","en-US","zh"],0.24399995803833008,1,0,2,0],                      "
    var slide = '"sd":{"od":"C","slideValue":' + slideValue + ',"ft":"qf_7Pf__H"}}';
    // var slide = '"sd":{"od":"C","slideValue":[[3,0,0,'+(+new Date-118250)+',0],[1,952,430,565,0],[1,205,-28,39,0],[1,153,-5,41,0],[1,2,0,233,0],[1,28,5,41,0],[1,-753,-270,25549,0],[1,59,-78,38,0],[1,0,1,315,0],[1,-2,5,43,0],[1,0,3,40,0],[1,1,0,40,0],[2,0,0,11,0],[3,0,0,70,0],[1,-1,1,231,0],[1,-23,89,41,0],[1,-132,411,374,0],[1,-8,27,41,0],[1,-1,3,39,0],[1,2,0,39,0],[1,12,-8,41,0]],"ft":"qf_7Pf__H"}}"';
    //           ""sd":{"od":"C","slideValue":[[3,0,0,1704417490285,0],[1,829,171,13117,0],[1,-21,-10,32,0],[1,-31,-3,32,0],[1,-29,0,32,0],[1,-16,-4,32,0],[1,-13,-7,32,0],[1,-12,-8,32,0],[2,-1,-1,153,0],[1,0,0,6,0],[3,0,0,57,0],[1,2,3,72,0],[1,7,34,32,0],[1,137,337,832,0],[1,10,-2,40,0],[1,7,0,32,0],[3,1,0,40,0],[1,0,0,17,0],[1,2,-3,39,0],[1,1,0,32,0],[1,13,3,32,0],[1,27,9,32,0],[1,37,6,40,0],[1,10,1,32,0],[1,5,0,32,0],[1,4,0,40,0],[1,4,0,40,0],[1,2,0,32,0],[1,3,1,80,0],[1,0,6,32,0],[1,4,8,32,0],[1,7,10,32,0],[1,24,12,32,0],[1,62,7,32,0],[1,59,0,32,0],[1,36,-22,32,0],[1,12,-33,32,0],[1,15,-35,32,0],[1,20,-25,32,0],[1,19,-10,32,0],[1,18,0,32,0],[1,27,0,32,0],[1,15,0,32,0],[1,27,0,32,0],[1,-371,-276,1592,0],[1,0,-9,32,0],[1,0,-7,32,0],[1,-4,-17,32,0],[1,-2,-11,32,0],[2,0,0,92,0],[1,0,0,17,0],[3,0,0,91,0],[1,-1,0,40,0],[1,-6,15,32,0],[1,-38,80,32,0],[1,-53,131,32,0]],"ft":"qf_7Pf__H"}}"
    //            ""sd":{"od":"C","slideValue":[[3,0,0,1704417508716,0],[1,38,458,248185,0],[1,-16,-12,173,0],[1,-1,0,40,0],[1,0,2,56,0],[2,0,0,75,0],[1,0,0,22,0],[3,1,0,55,0],[1,0,0,11,0],[1,1,1,53,0],[1,2,1,32,0],[1,5,3,32,0],[1,14,6,32,0],[1,48,23,40,0],[1,87,40,32,0],[1,115,45,32,0],[1,119,23,32,0],[1,94,11,32,0],[1,50,0,32,0],[1,16,0,32,0],[1,224,3,1408,0],[1,292,45,32,0],[1,197,36,32,0],[1,35,12,32,0],[1,7,2,33,0],[1,-1274,18,2440,0],[1,-5,0,31,0],[1,-6,0,32,0],[1,-7,0,32,0],[1,-4,0,40,0],[1,-3,0,32,0],[2,0,0,123,0],[1,0,0,10,0],[1,2,0,67,0],[3,0,0,24,0],[1,2,1,9,0],[1,7,1,32,0],[1,27,0,32,0],[1,90,14,32,0],[1,161,3,32,0],[1,165,0,32,0],[1,85,-23,39,0],[1,2,-19,40,0],[1,0,-39,40,0],[1,0,-28,32,0],[1,0,-13,32,0],[1,-3,-7,32,0],[1,-1,-6,40,0]],"ft":"qf_7Pf__H"}}"
    coollect_t = btoa(tex(Chrome_env)) + btoa(tex(trajectory)) + btoa(tex(Chrome_canvas)) + btoa(tex(slide));
    return coollect_t;
}

// 生成随机的9位数字
function generateRandomNumber() {
    var min = 300000000; // 最小值为100000000
    var max = 999999999; // 最大值为999999999
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 随机轨迹
function generateMouseTrace() {
    // 生成一个10到30之间的随机整数
    var randomNumber = Math.floor(Math.random() * 21) + 15;
    var trace = [];
    var time = 0, x1 = 0, y1 = 0;
    for (var i = 0; i < randomNumber; i++) { // 生成10个坐标点作为示例
        var x = Math.floor(Math.random() * 20); // 假设屏幕宽度为500
        var y = Math.floor(Math.random() * 20); // 假设屏幕高度为500
        time = Math.floor(Math.random() * 20); // 随机增加时间间隔
        if (i === 0) {
            x1 = x;
            y1 = y;
            trace.push([x + 255, y + 255, time + 88]);
        } else {
            trace.push([x - x1, y - y1, time]);
        }

    }
    trace.push(1, 1, 12);
    return JSON.stringify(trace);
}

function coollect(slideValue) {
    var coollect_t = "";
    // 滑动轨迹
    slideValue = JSON.stringify(slideValue);
    // var trajectory = generateMouseTrace();
    var trajectory = slideValue;
    var Chrome_env = '{"cd":[0,"iframe","",' + generateRandomNumber() + ',' + 1704371100 + ',"ANGLE (Intel, Intel(R) HD Graphics 630 (0x00005912) Direct3D11 vs_5_0 ps_5_0, D3D11)","1920-1080-1040-24-*-*-|-*",[360,360],"UTF-8",1023,"",1080,[],"https://new.qq.com/","98k",4,2,' + Math.floor(new Date().getTime() / 1000) + ',"Win32","+08","Google Inc. (Intel)",0,"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",1477091468,1920,' + Math.floor(new Date().getTime() / 1000) + 72 + ',"",24,0,';
    var Chrome_canvas = ',"GgoAAAANSUhEUgAAASwAAACWCAYAAA3WEGp4s7r8A/V1/GiuOpCrroHaDYRv/RcZ4PPcPe3QAAAABJRU5ErkJggg==","https://captcha.gtimg.com/1/template/drag_ele.html?rand=1519713624347",["zh-CN","en-US","zh"],0,1,0,2,0],';
    // var slide = '"sd":{"od":"C","slideValue":' + slideValue + ',"ft":"qf_7Pf__H"}}';
    var slide = '"sd":{"od":"C","ft":"qf_7Pf__H"}}';

    coollect_t = btoa(tex(Chrome_env)) + btoa(tex(trajectory)) + btoa(tex(Chrome_canvas)) + btoa(tex(slide));
    return coollect_t;
}


// https://mp.weixin.qq.com/s/SSlZEMQhNxOlA3rzSNY37w
//实战网站 https://y.qq.com/portal/pop_login.html