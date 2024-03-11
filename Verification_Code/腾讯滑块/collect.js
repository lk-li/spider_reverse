function Base64() {
    this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
}

Base64.prototype.encode = function (input) {
    var output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
    //input = this._utf8_encode(input);
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }
    return output;
}

Base64.prototype.decode = function (input) {
    var output = [], chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output.push(String.fromCharCode(chr1));
        if (enc3 != 64) {
            output.push(String.fromCharCode(chr2));
        }
        if (enc4 != 64) {
            output.push(String.fromCharCode(chr3));
        }
    }
    //output = this._utf8_decode(output);
    return output.join("");
}

// 加密
function LongNumToCode(long_num) {
    var offsets = [0, 8, 16, 24];
    var codes = [];
    for (var a of offsets) {
        codes.push(long_num >> a & 255);
    }
    return String.fromCharCode.apply(String, codes);
}

function StrToLongNum(str) {
    var offsets = [0, 8, 16, 24];
    var long_num = 0;
    for (let i = 0; i < 4; i++) {
        long_num = long_num | (str.charCodeAt(i) << offsets[i]);
    }
    return long_num
}

function teaEncryptBlock(num_lis, key) {
    var num1 = num_lis[0];
    var num2 = num_lis[1];
    var sum = 0;
    key = [1466852942, 1768312662, 1715955288, 1498245202];
    var delta = 2654435769;
    for (var i = 0; i < 32; i++) {
        num1 += (((num2 << 4) ^ (num2 >>> 5)) + num2) ^ (sum + key[sum & 3]);
        sum += delta;
        num2 += (((num1 << 4) ^ (num1 >>> 5)) + num1) ^ (sum + key[(sum >>> 11) & 3]);
    }
    return [num1, num2];
}

function get_finalstr(atr, flag) {
    finla_lstr = ''
    if (flag === 1) {
       atr = atr.padEnd(Math.ceil(atr.length/24)*24,' ')
    }else{
       atr = atr.padEnd(Math.ceil(atr.length/24)*24,'')
    }
    for (var i = 0; i < atr.length; i += 8) {
        str1 = atr.slice(i, i + 4);
        str2 = atr.slice(i + 4, i + 8);

        num_final = teaEncryptBlock([StrToLongNum(str1), StrToLongNum(str2)])
        finla_lstr += (LongNumToCode(num_final[0]) + LongNumToCode(num_final[1]))
    }
    result = new Base64().encode((finla_lstr))
    console.log("finla_str-->", result)
    return result
}

atr1 = '{"cd":["",'

atr2 = '[[3,8,8,1704958512658,0],[1,61,229,1007,0],[1,0,-4,34,0],[1,-2,-8,38,0],[1,0,-3,40,0],[1,0,-1,136,0],[1,0,-1,32,0],[1,0,-1,40,0],[1,-1,-3,39,0],[1,-1,-2,32,0],[2,-1,-1,197,0],[1,2,0,123,0],[1,48,0,33,0],[1,78,0,31,0],[1,50,0,33,0],[1,16,0,33,0],[1,5,0,38,0],[1,11,0,33,0],[1,12,0,40,0],[1,1,0,207,0],[1,-6,0,33,0],[1,-13,-2,32,0],[1,-9,-1,32,0],[1,-2,0,111,0],[1,-2,0,170,0],[1,-2,0,47,0],[1,-1,0,33,0],[1,-3,0,32,0],[1,-3,-1,97,0],[1,-1,0,93,0],[1,-1,0,82,0],[1,-1,0,47,0],[1,-1,-1,112,0],[3,0,0,360,0],[1,0,0,1,0]]'

atr3 = ',0,1,"https://ssl.captcha.qq.com/template/pc_qq_captcha.html?aid=2028665724",1704958512,[],"Win32",6,[300,230],"iframe",0,"GgoAAAANSUhEUgAAASwAAACWCAYAAAdYcZnC7u/EL/PH0ZK46nKuiid4BiG/8D0X2eD5sOjPUAAAAASUVORK5CYII=",1023,1,"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",24,"1920-1080-1040-24-*-*-|-*","98k",1920,0,1704958518,2,0,["zh-CN","zh"],"+08",0,"","ANGLE (Intel, Intel(R) UHD Graphics 630 (0x00003E92) Direct3D11 vs_5_0 ps_5_0, D3D11)",1080,700702062,1704939087,0.690000057220459,"","https://captcha.gtimg.com/1/template/drag_ele.html?rand=1519713624347","UTF-8",1219011519,"Google Inc. (Intel)"],'

atr4 = '"sd":{"od":"C","slideValue":[[3,0,0,1704958512075,0],[1,179,287,1263,0],[1,-18,-9,39,0],[1,-10,-3,32,0],[1,-18,-4,41,0],[1,-23,-5,33,0],[1,-25,-6,39,0],[1,-9,-3,32,0],[1,0,-3,40,0],[1,-4,-8,34,0],[1,-3,-9,38,0]],"ft":"qf_7Pf__H"}}'

// get_finalstr(atr1,1)
// get_finalstr(atr2,1)
// get_finalstr(atr3,1)
// get_finalstr(atr4,0)

// collect = get_finalstr(atr1,1) + get_finalstr(atr2,1) + get_finalstr(atr3,1) + get_finalstr(atr4,0)
// console.log(collect)



// 解密
function strToLongs(s) {
    var l = new Array(Math.ceil(s.length/4));
    for (var i=0; i<l.length; i++) {
        l[i] = s.charCodeAt(i*4) + (s.charCodeAt(i*4+1)<<8) + (s.charCodeAt(i*4+2)<<16) + (s.charCodeAt(i*4+3)<<24);
    }
    return l;
}

function longsToStr(l) {
    var a = new Array(l.length);
    for (var i = 0; i < l.length; i++) {
        a[i] = String.fromCharCode(l[i] & 0xFF, l[i] >>> 8 & 0xFF, l[i] >>> 16 & 0xFF, l[i] >>> 24 & 0xFF);
    }
    return a.join('');
}

function DecryptBlock (DecryData) {
    var x = DecryData[0];
    var y = DecryData[1];
    var sum = 0x9E3779B9 * 32;
    key = [1313227334 + 1315858, 1414685541, 1380859453 + 657965, 1313236307];//[1466852942, 1768312662, 1715955288, 1498245202];
    var delta = 0x9E3779B9;
    for (var i = 0; i < 32; i++) {
        y -= (((x << 4) ^ (x >>> 5)) + x) ^ (sum + key[(sum >>> 11) & 3]);
        sum -= delta;
        x -= (((y << 4) ^ (y >>> 5)) + y) ^ (sum + key[sum & 3]);
    }
    return [x, y];
}

var teaDecrypt = function (msg){
    var res = new Base64().decode(msg);
    var rounds = res.length >> 3;
    var tmp;
    var final = "";
    for(var i = 0; i < rounds; i++){
        tmp = DecryptBlock(strToLongs(res.slice(i*8, i*8 + 8)));
        final += longsToStr(tmp);
    }
    return final;
}

// encrypt_data = 'Ihlw4b8QrAHgSkSrygJwSx5qxYcfixbhw8jYcStgPTRKwkTtOWrYscS0QtuBUJI/o0Wspjndn0oELLF89ahBRETdOClPPq6kHHh7tDwisON9ZM3GlygtuLuRgk1TknBtANe1+Kxi6LSbo7XdbQnw1f8dmxICr29WhN67LEZr5OvPYSNSyO2L5eYjrgGA5IWv1Xu2ef81g4+0oaXU7Ltg97Rwa9/rwp+ZdL3DYrWldN4+RjFYxf1qKySSAK/TPwmqjkLeCYFKXr7o/oR68asDWna1D8U3e9rIHq5NfMparM/eVJLoXs1pvz1Qn4zM7mQSnstUOiPYedCIFPWGBNuT8jPT0JOXcGJiJG8UynDIe+9/o0voNcg/sTdCnLhohkr9+wUdQwv7y65OlSvyO0dpxxE8GYJfiqtMWonfvzRIRquyvEnVEWwb++prNjsm0V5lCn1Hl2lVY3IQ8YRdcpA9nNnWCP3CQayNO3/xUVrWgGyjLWOl4JRF9K+TGQOJvWkz84LkOGCcfJjAJBoeey5Q7d+HeWm6PA/y/4Kzl4bvcnpTHjxPNPwDGm1jPnFDtgxxQdDG90vHyokz09CTl3BiYm/xKoBWVPEtBT7tynLAg1aZ0JapRsbvkpnQlqlGxu+Svsr/qW691IxVKtLebL4Z/ACGM8EttRZ/ZzNIDdFXvp1cpGgHqBuIGBpQ96qU5x8oSS+aQaNhv4afCL8pgk71jRTj8sKQwQd5XKRoB6gbiBhWvKlyq+Et5ofIEWwURYo9nwi/KYJO9Y3hoDhp3EsxsPdtm0MVEn4FlW93t5Fr2rFJL5pBo2G/hoWQOL06Ol6NpVOKuWj56TbTXWBHx6cK+84vt7L9VmPTSS+aQaNhv4Yz+Wwpjhf3Nm8KROUaKzAXL9j8GJidkDRma5R7aeAC5483OI+zvMf18z7KG+v9EApy59YRZz9fijP5bCmOF/c2oApSg263rgIv2PwYmJ2QNG0oiGFyM8vhj09So5MtRqzzPsob6/0QCnM4CsEqoQxU36kIFMAeo8Vp9oKSHMRDZpDq0cXexlFenehG8E64OiHn4NEfD0ZLkD/lMlLP0dTta1+NgN8CLbY/LMyXJyDY07gjyi3q+VfCqn26hyntx3ESsg30o3dTuwNlj1Rip7IGM8AgPomdrUoOTt8PHd2i/vShG3sb22jsczgKwSqhDFRn8T/4VTuErGZrlHtp4ALn2GC56cZHoUSd6EbwTrg6IbvcZED5bYmrVaYnU3nFvLlL+Lt3xrYTrxpQ96qU5x8oMfJiPoP5NyI45fWexR7CwsmWXRjS+wGJM8AgPomdrUoW8zYt769iPFUFYZwbMzRqqJamM3EagawKdxRKVcft0NhguenGR6FELDKX+Pnlig7tHOSf8l+ScKiWpjNxGoGsmdjYusNn0IwpX7g70VcCmcDfALLxMporw4hBW3mRub2Z0JapRsbvkpnQlqlGxu+SfYhzNQqzO/BUlsCa126rt5syiEj8vV7lNheQ9jlOWZNfUUtBxXPGCzqpXTTA2lf2AUTyIu5KgaPvWprLj0SefkKBKN8r/CV5snDIvpUfUWdcTL1Z/SluVu5jzkSpJdMncJAHZ/YcJHWNi5WAbQYmW4ZzKGeHlafN2OvN4ekwtV/g75MatyMgsLzZdGx9frUPH+Gs4xo2DlVxLzhqi/3wVNtKXEtY3g20bdMPL1/zrLCYeK73rfEtAlF+WZHafC9MVJOhQSNHSUyZ0JapRsbvkpnQlqlGxu+S0QiqKYOjoCDBVgFrSIALys/GmIDuTfq8YdW5txntli6xkXhlaA7bDA=='
// result = teaDecrypt(encrypt_data)
// console.log(result)
//{"cd":[0,"iframe","",598408489,1704371100,"ANGLE (Intel, Intel(R) HD Graphics 630 (0x00005912) Direct3D11 vs_5_0 ps_5_0, D3D11)","1920-1080-1040-24-*-*-|-*",[360,360],"UTF-8",1023,
// "",1080,[],"https://www.urbtix.hk/login","98k",4,1,1704961773,"Win32","+08","Google Inc. (Intel)",0,"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko
// ) Chrome/119.0.6045.160 Safari/537.36",1477091468,1920,1704961776,"",24,0,                      [[183,356,62],[0,-3,6],[0,-2,8],[0,-1,8],[0,-1,8],[0,-2,8],[0,-4,8],[0,-3,9],[0,-2,7
// ],[0,-3,9],[0,-2,7],[0,-2,9],[0,-2,7],[0,-2,10],[0,-2,6],[0,-1,16],[0,-1,13],[0,-1,3],[0,-1,11],[0,-1,5],[0,-2,12],[0,-1,4],[0,-1,8],[0,-2,8],[0,-2,17],[0,-2,7],[0,-2,9],[0,-1,15],
// [0,-3,8],[0,-3,16],[0,-1,9],[0,-2,7],[0,-4,9],[0,-2,7],[0,-2,9],[0,-3,7],[0,-1,10],[0,-1,6],[0,-1,10],[0,-3,6],[0,-2,9],[0,-2,15],[0,-2,8],[0,-2,8],[0,-3,8],[0,-2,8],[0,-1,8],[0,-1
// ,8],[-2,-2,8],[0,-1,8],[0,-1,8],[0,-2,8],[-2,-3,9],[0,-2,15],[0,-1,8],[0,-2,9],[-1,-2,7],[-1,0,9],[0,-1,7],[-1,-1,848],[1,1,12]]    ,"GgoAAAANSUhEUgAAASwAAACWCAYAAA3WEGp4s7r8A/V1/G
// iuOpCrroHaDYRv/RcZ4PPcPe3QAAAABJRU5ErkJggg==","https://turing.captcha.gtimg.com/1/template/drag_ele.html?rand=1519713624347",["zh-CN","zh"],0,1,0,2,0],                 "sd":{"od":"
// C","ft":"qf_7Pf__H"}}

