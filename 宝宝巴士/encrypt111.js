function d(iArr, iArr2) {
    var length = iArr.length - 1;
    // if (length < 1) {
    //     return iArr;
    // }
    // if (iArr2.length < 4) {
    //     int[] iArr3 = new int[4];
    //     System.arraycopy(iArr2, 0, iArr3, 0, iArr2.length);
    //     iArr2 = iArr3;
    // }
    var i2 = iArr[length];
    var i3 = iArr[0];
    var i4 = ifisin(Math.round((52 / (length + 1)) + 6));
    var i5 = 0;
    while (true) {
        i6 = i4 - 1;
        if (i4 <= 0) {
            return iArr;
        }
        i5 -= 1640531527;
        i5 = ifisin(i5);
        i7 = Math.round((i5 >>> 2) & 3);
        i8 = 0;
        while (i8 < length) {
            i9 = i8 + 1;
            i10 = iArr[i9];
            i2 = ifisin(Math.round(((((i2 >>> 5) ^ (i10 << 2)) + ((i10 >>> 3) ^ (i2 << 4))) ^ ((i10 ^ i5) + (i2 ^ iArr2[(i8 & 3) ^ i7]))) + iArr[i8]));
            iArr[i8] = i2;
            i8 = i9;
        }
        i11 = iArr[0];
        i2 = ifisin(Math.round(((((i2 >>> 5) ^ (i11 << 2)) + ((i11 >>> 3) ^ (i2 << 4))) ^ ((i11 ^ i5) + (i2 ^ iArr2[i7 ^ (i8 & 3)]))) + iArr[length]));
        iArr[length] = i2;
        i4 = i6;
    }


}

function b(iArr, iArr2) {
    length = iArr.length - 1;
    // if (length < 1) {
    //     return iArr;
    // }
    // if (iArr2.length < 4) {
    //     iArr3 = new Array(4);
    //     System.arraycopy(iArr2, 0, iArr3, 0, iArr2.length);
    //     iArr2 = iArr3;
    // }
    i2 = iArr[length];
    i3 = iArr[0];
    i4 = ifisin(Math.round(((52 / (length + 1)) + 6) * (-1640531527)))
    while (true) {
        if (i4 != 0) {
            i4 -= -1640531527
            i4 = ifisin(i4);
            i5 = ifisin(Math.round((i4 >>> 2) & 3));
            i6 = length;
            while (i6 > 0) {
                i7 = iArr[i6 - 1];
                i3 = ifisin(Math.round(iArr[i6] - (((i3 ^ i4) + (i7 ^ iArr2[(i6 & 3) ^ i5])) ^ (((i7 >>> 5) ^ (i3 << 2)) + ((i3 >>> 3) ^ (i7 << 4))))));
                iArr[i6] = i3;
                i6--;
            }
            i8 = iArr[length];
            i3 = ifisin(Math.round(iArr[0] - (((i3 ^ i4) + (iArr2[i5 ^ (i6 & 3)] ^ i8)) ^ (((i8 >>> 5) ^ (i3 << 2)) + ((i3 >>> 3) ^ (i8 << 4))))));
            iArr[0] = i3;
        } else {
            return iArr;
        }

    }
}

function f(bArr, z) {
    var iArr = []
    length1 = (bArr.length & 3) == 0 ? bArr.length >>> 2 : (bArr.length >>> 2) + 1;
    if (z) {
        iArr = new Array(length1 + 1);
        iArr[length1] = bArr.length;
    } else {
        iArr = new Array(length1);
    }

    for (var i2 = 0; i2 < bArr.length; i2++) {
        i3 = ifisin(i2 >>> 2);
        iArr[i3] = ifisin(iArr[i3] | ((bArr[i2] & 255) << ((i2 & 3) << 3)));
    }
    return iArr;
}


function e(iArr, z) {
    length = iArr.length << 2;
    if (z) {
        i2 = iArr[iArr.length - 1];
        if (i2 > length) {
            return null;
        }
        length = i2;
    }
    bArr = new Array(length);
    for (var i3 = 0; i3 < length; i3++) {
        bArr[i3] = ifistyte((iArr[i3 >>> 2] >>> ((i3 & 3) << 3)) & 255);
    }
    return bArr;
}

function c(bArr, bArr2) {
    // return d(f(bArr, true), f(bArr2, false));
    return e(d(f(bArr, true), f(bArr2, false)), false);
}

function ifisin(a) {
    if (a < -2147483648) {
        a = 2147483648 + a + 2147483648;
        return a
    } else if (a > 2147483647) {
        a = -2147483648 + a - 2147483648;
        return a
    } else {
        return a
    }

}

function ifistyte(a) {
    if (a < -128) {
        a = 128 + a + 128;
        return a
    } else if (a > 127) {
        a = -128 + a - 128;
        return a
    } else {
        return a
    }

}

function UTF8ToStr(arr) {
    let val = ''
    arr.forEach(item => {
        if (item < 127) {
            val += String.fromCharCode(item)
        } else {
            val += '%' + item.toString(16).toUpperCase()
        }
    })
    // console.log(val)
    try {
        return decodeURI(val)
    } catch (err) {
        return val
    }
}

var BASE64C = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47];
var BASE64B = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]; //'A'=65,'a'=97,'0'=48,'+'=43,'/'=47 统一减43
function encode(params, ascii) { //将byte数组(或字符串)转换成base64
    if (params == null) return null;
    if (typeof params === "string") params = stringToBytes(params, ascii); //该方法只适用于utf-8编码和ascii编码
    var result = new Array(); //每3个字节一组,重组为4个字节一组
    var index = 0;
    for (var i = 0; i < parseInt(params.length / 3) * 3; i += 3) { //除3取整再乘3可以取到最后面的3的倍数个
        var bits = (params[i] & 0xff) << 16 | (params[i + 1] & 0xff) << 8 | (params[i + 2] & 0xff); //&0xff表示由byte转int,<<表示向左移多少位,高位会被丢弃,低位会补0
        result[index++] = BASE64C[(bits >>> 18) & 0x3f]; //&0x3f表示保留6位数(类似对64求余),>>表示向右移多少位,低位会被丢弃,高位补0(无符号)或1(有符号),>>>表示向右移多少位,高位补0(无符号)
        result[index++] = BASE64C[(bits >>> 12) & 0x3f];
        result[index++] = BASE64C[(bits >>> 6) & 0x3f];
        result[index++] = BASE64C[bits & 0x3f];
    }
    if (params.length % 3 == 1) { //多余1个加两个=号
        var bits = (params[params.length - 1] & 0xff) << 4;
        result[index++] = BASE64C[(bits >>> 6) & 0x3f];
        result[index++] = BASE64C[bits & 0x3f];
        result[index++] = 61; //stringToBytes('=')
        result[index] = 61;
    } else if (params.length % 3 == 2) { //多余2个加一个=号
        var bits = (params[params.length - 2] & 0xff) << 10 | (params[params.length - 1] & 0xff) << 2;
        result[index++] = BASE64C[(bits >>> 12) & 0x3f];
        result[index++] = BASE64C[(bits >>> 6) & 0x3f];
        result[index++] = BASE64C[bits & 0x3f];
        result[index] = 61;
    }
    return bytesToString(result);
}

function decode(params, ascii) { //将base64转换成byte数组再转换成字符串
    if (params == null) return null;
    if (typeof params === "string") params = stringToBytes(params, ascii); //该方法只适用于utf-8编码和ascii编码
    if (params.length % 4 != 0) return null;
    var length = params.length / 4 * 3;
    if (params[params.length - 2] == 61) length -= 2; else if (params[params.length - 1] == 61) length -= 1;
    var result = new Array();
    var index = 0;
    for (var i = 0; i < params.length - 4; i += 4) {
        var bits = (BASE64B[params[i] - 43] & 0xff) << 18 | (BASE64B[params[i + 1] - 43] & 0xff) << 12 | (BASE64B[params[i + 2] - 43] & 0xff) << 6 | (BASE64B[params[i + 3] - 43] & 0xff); //通过BASE64B[params[i]-43]将原始数值进行还原,然后再向左移位
        result[index++] = ((bits >>> 16) & 0xff); //&0xff表示保留8位数(类似求余),>>表示向右移多少位,低位会被丢弃,高位补0(无符号)或1(有符号),>>>表示向右移多少位,高位补0(无符号)
        result[index++] = ((bits >>> 8) & 0xff);
        result[index++] = (bits & 0xff);
    }
    if (params[params.length - 2] == 61) {
        var bits = (BASE64B[params[params.length - 4] - 43] & 0xff) << 6 | (BASE64B[params[params.length - 3] - 43] & 0xff);
        result[index] = ((bits >>> 4) & 0xff);
    } else if (params[params.length - 1] == 61) {
        var bits = (BASE64B[params[params.length - 4] - 43] & 0xff) << 12 | (BASE64B[params[params.length - 3] - 43] & 0xff) << 6 | (BASE64B[params[params.length - 2] - 43] & 0xff);
        result[index++] = ((bits >>> 10) & 0xff);
        result[index] = ((bits >>> 2) & 0xff);
    } else {
        var bits = (BASE64B[params[params.length - 4] - 43] & 0xff) << 18 | (BASE64B[params[params.length - 3] - 43] & 0xff) << 12 | (BASE64B[params[params.length - 2] - 43] & 0xff) << 6 | (BASE64B[params[params.length - 1] - 43] & 0xff);
        result[index++] = ((bits >>> 16) & 0xff);
        result[index++] = ((bits >>> 8) & 0xff);
        result[index] = (bits & 0xff);
    }
    return bytesToString(result, ascii);
}

function stringToBytes(param, ascii) { //该方法只适用于utf-8编码和ascii编码(适用于生成文件),参数为string
    var bytes = new Array();
    if (ascii) {
        for (var i = 0; i < param.length; i++) {
            bytes.push(param.charCodeAt(i));
        }
        return bytes;
    }
    for (var i = 0; i < param.length; i++) {
        var c = param.charCodeAt(i);
        if (c == 0) { //兼容ascii编码向utf8转码,一般用不到
            bytes.push(0xe3); //0xe3=227
            bytes.push(0x84); //0x84=132
            bytes.push(0x80); //0x80=128
        } else if (c < 0x80) { //c < 128,首位为0,剩余7位
            bytes.push(c);
        } else if (c < 0x100) { //c < 256,兼容ascii编码向utf8转码,一般用不到
            bytes.push(0xc2); //0xc2=194
            bytes.push(c);
        } else if (c < 0x800) { //c < 2048,首位为110,表示该起始字节有1个后续字节,剩余5位
            bytes.push(((c >> 6) & 0x1f) | 0xc0); //0xC0=11000000,&0x1f表示取低5位(高位补0)
            bytes.push((c & 0x3f) | 0x80); //0x80=10000000,&0x3f表示取低6位(对64求余)
        } else if (c < 0x10000) { //c < 65536,首位为1110,表示该起始字节有2个后续字节,剩余4位
            bytes.push(((c >> 12) & 0x0f) | 0xe0); //0xE0=11100000,&0x0f表示取低4位(对16求余,高位补0)
            bytes.push(((c >> 6) & 0x3f) | 0x80);
            bytes.push((c & 0x3f) | 0x80);
        } else if (c < 0x10ffff) { //c < 2097152,首位为11110,表示该起始字节有3个后续字节,剩余3位
            bytes.push(((c >> 18) & 0x07) | 0xf0); //0xF0=11110000,&0x07表示取低3位(高位补0)
            bytes.push(((c >> 12) & 0x3f) | 0x80);
            bytes.push(((c >> 6) & 0x3f) | 0x80);
            bytes.push((c & 0x3f) | 0x80);
        } else return null; //超过0x10ffff,属于不合法字符
    }
    return bytes;
}

function bytesToString(params, ascii) { //该方法只适用于utf-8编码和ascii编码,参数为byte数组
    var result = "";
    if (ascii) {
        for (var i = 0; i < params.length; i++) {
            result += String.fromCharCode(params[i]);
        }
        return result;
    }
    for (var i = 0; i < params.length; i++) {
        if (params[i] >= 0xf8) { //超过0xf8=11111000,属于不合法字符
            result += String.fromCharCode(params[i]);
        } else if (params[i] >= 0xf0) { //0xf0=11110000,表示该起始字节有3个后续字节
            var bits = (params[i] & 0x07) << 18 | (params[i + 1] & 0x3f) << 12 | (params[i + 2] & 0x3f) << 6 | (params[i + 3] & 0x3f);
            result += String.fromCharCode(bits);
            i += 3;
        } else if (params[i] >= 0xe0) { //0xe0=11100000,表示该起始字节有2个后续字节
            var bits = (params[i] & 0x0f) << 12 | (params[i + 1] & 0x3f) << 6 | (params[i + 2] & 0x3f);
            result += String.fromCharCode(bits);
            i += 2;
        } else if (params[i] >= 0xc0) { //0xc0=11000000,表示该起始字节有1个后续字节
            var bits = (params[i] & 0x1f) << 6 | (params[i + 1] & 0x3f);
            result += String.fromCharCode(bits);
            i++;
        } else { //[227,132,128],[194,128]的情形已经融入到上面的判断语句中
            result += String.fromCharCode(params[i]);
        }
    }
    return result;
}

function ToUTF8(str) {
    var result = new Array();

    var k = 0;
    for (var i = 0; i < str.length; i++) {
        var j = encodeURI(str[i]);
        if (j.length==1) {
            // 未转换的字符
            result[k++] = j.charCodeAt(0);
        } else {
            // 转换成%XX形式的字符
            var bytes = j.split("%");
            for (var l = 1; l < bytes.length; l++) {
                result[k++] = parseInt("0x" + bytes[l]);
            }
        }
    }

    return result;
}

function encryption(str) {
    return encode(c(ToUTF8(str), ToUTF8('2dac951c30d041309e915a6468e4359a')), true)
}

// aap秘钥 HKqGu4X0dCRzxirZuHLVCJRhu2qqH7ro
// 小程序秘钥 2dac951c30d041309e915a6468e4359a
console.log(encryption('{"shareVipID":9153}'))
