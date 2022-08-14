function i(e, t, n) {
    t[n] = 255 & e >>> 24,
        t[n + 1] = 255 & e >>> 16,
        t[n + 2] = 255 & e >>> 8,
        t[n + 3] = 255 & e
}

function B(e, t) {
    return (255 & e[t]) << 24 | (255 & e[t + 1]) << 16 | (255 & e[t + 2]) << 8 | 255 & e[t + 3]
}

function Q(e, t) {
    return (4294967295 & e) << t | e >>> 32 - t
}

function G(e) {
    var t = new Array(4),
        n = new Array(4);
    i(e, t, 0),
        n[0] = h.zb[255 & t[0]],
        n[1] = h.zb[255 & t[1]],
        n[2] = h.zb[255 & t[2]],
        n[3] = h.zb[255 & t[3]];
    var r = B(n, 0);
    return r ^ Q(r, 2) ^ Q(r, 10) ^ Q(r, 18) ^ Q(r, 24)
}

var __g = {
    x: function (e, t) {
        for (var n = [], r = e.length, i = 0; 0 < r; r -= 16) {
            for (var o = e.slice(16 * i, 16 * (i + 1)), a = new Array(16), c = 0; c < 16; c++) a[c] = o[c] ^ t[c];
            t = __g.r(a),
                n = n.concat(t),
                i++
        }
        return n
    },
    r: function (e) {
        var t = new Array(16),
            n = new Array(36);
        n[0] = B(e, 0),
            n[1] = B(e, 4),
            n[2] = B(e, 8),
            n[3] = B(e, 12);
        for (var r = 0; r < 32; r++) {
            var o = G(n[r + 1] ^ n[r + 2] ^ n[r + 3] ^ h.zk[r]);
            n[r + 4] = n[r] ^ o
        }
        return i(n[35], t, 0),
            i(n[34], t, 4),
            i(n[33], t, 8),
            i(n[32], t, 12),
            t
    }
};

function l48_arrt(e, t) {
    for (var n = [], r = e.length, i = 0; 0 < r; r -= 16) {
        for (var o = e.slice(16 * i, 16 * (i + 1)), a = new Array(16), c = 0; c < 16; c++) a[c] = o[c] ^ t[c];
        t = __g.r(a),
            n = n.concat(t),
            i++
    }
    return n
}

function getx_16(e) {
    var t = new Array(16),
        n = new Array(36);
    n[0] = B(e, 0),
        n[1] = B(e, 4),
        n[2] = B(e, 8),
        n[3] = B(e, 12);
    for (var r = 0; r < 32; r++) {
        var o = G(n[r + 1] ^ n[r + 2] ^ n[r + 3] ^ h.zk[r]);
        n[r + 4] = n[r] ^ o
    }
    return i(n[35], t, 0),
        i(n[34], t, 4),
        i(n[33], t, 8),
        i(n[32], t, 12),
        t
}

var h = {
    "zk": [1170614578, 1024848638, 1413669199, -343334464, -766094290, -1373058082, -143119608, -297228157, 1933479194, -971186181, -406453910, 460404854, -547427574, -1891326262, -1679095901, 2119585428, -2029270069, 2035090028, -1521520070, -5587175, -77751101, -2094365853, -1243052806, 1579901135, 1321810770, 456816404, -1391643889, -229302305, 330002838, -788960546, 363569021, -1947871109],
    "zb": [20, 223, 245, 7, 248, 2, 194, 209, 87, 6, 227, 253, 240, 128, 222, 91, 237, 9, 125, 157, 230, 93, 252, 205, 90, 79, 144, 199, 159, 197, 186, 167, 39, 37, 156, 198, 38, 42, 43, 168, 217, 153, 15, 103, 80, 189, 71, 191, 97, 84, 247, 95, 36, 69, 14, 35, 12, 171, 28, 114, 178, 148, 86, 182, 32, 83, 158, 109, 22, 255, 94, 238, 151, 85, 77, 124, 254, 18, 4, 26, 123, 176, 232, 193, 131, 172, 143, 142, 150, 30, 10, 146, 162, 62, 224, 218, 196, 229, 1, 192, 213, 27, 110, 56, 231, 180, 138, 107, 242, 187, 54, 120, 19, 44, 117, 228, 215, 203, 53, 239, 251, 127, 81, 11, 133, 96, 204, 132, 41, 115, 73, 55, 249, 147, 102, 48, 122, 145, 106, 118, 74, 190, 29, 16, 174, 5, 177, 129, 63, 113, 99, 31, 161, 76, 246, 34, 211, 13, 60, 68, 207, 160, 65, 111, 82, 165, 67, 169, 225, 57, 112, 244, 155, 51, 236, 200, 233, 58, 61, 47, 100, 137, 185, 64, 17, 70, 234, 163, 219, 108, 170, 166, 59, 149, 52, 105, 24, 212, 78, 173, 45, 0, 116, 226, 119, 136, 206, 135, 175, 195, 25, 92, 121, 208, 126, 139, 3, 75, 141, 21, 130, 98, 241, 40, 154, 66, 184, 49, 181, 46, 243, 88, 101, 183, 8, 23, 72, 188, 104, 179, 210, 134, 250, 201, 164, 89, 216, 202, 220, 50, 221, 152, 140, 33, 235, 214],
    "zm": [120, 50, 98, 101, 99, 98, 119, 100, 103, 107, 99, 119, 97, 99, 110, 111]
}
var inds = [48, 53, 57, 48, 53, 51, 102, 55, 100, 49, 53, 101, 48, 49, 100, 55]

// md5 值 指定位置的字符的 Unicode 编码
var md5_charCodeAt_arr = [];

function charCodeAt_arr_md5(md5_str) {
    for (var i = 0; i < md5_str.length; i++) {
        md5_charCodeAt_arr.push(md5_str.charCodeAt(i));
    }
    return md5_charCodeAt_arr;
}

// 存放新生成的 16位数组
function ste16(len_16, inds) {
    dtas = [];
    for (var i = 0; i < inds.length; i++) {
        dtas.push(len_16[i] ^ inds[i] ^ 42);
    }
    return dtas
}

// 生成48位数组
function generate_48_arry(md5_str) {

    md5_charCodeAt_arr = charCodeAt_arr_md5(md5_str);
//向数组开头添加添加一个元素0
    md5_charCodeAt_arr.unshift(0);
// //向数组开头添加一个新元素34 ，也就是上面计算出来的随机值
//     md5_charCodeAt_arr.unshift(34);
    md5_charCodeAt_arr.unshift(Math.floor((Math.random()*127)));
    for (var i = 0; i < 15; i++) {
        md5_charCodeAt_arr.push(14)
    }
    len_16 = md5_charCodeAt_arr.slice(0, 16);
// 新生成的16位数组
    set_x16_arry = getx_16(ste16(len_16, inds));
//取md5_charCodeAt_arr中的16-48位 ,也就是之前前面得到的48位数组
    _16_48_arry = md5_charCodeAt_arr.slice(16, 48);
    l_arry_48 = set_x16_arry.concat(l48_arrt(_16_48_arry, set_x16_arry));
    return l_arry_48
}

function x_zse_96(md5_str) {
    var arret_48 = generate_48_arry(md5_str)
    var zse_96 = '';
    var loop_58 = [[58, 0, 0], [0, 58, 0], [0, 0, 58], [0, 0, 0], [58, 0, 0], [0, 58, 0], [0, 0, 58], [0, 0, 0], [58, 0, 0], [0, 58, 0], [0, 0, 58], [0, 0, 0], [58, 0, 0], [0, 58, 0], [0, 0, 58], [0, 0, 0]];
    var txt = '6fpLRqJO8M/c3jnYxFkUVC4ZIG12SiH=5v0mXDazWBTsuw7QetbKdoPyAl+hN9rgE';
    var reverse_arret_48 = arret_48.reverse();
    for (var i = 0; i < arret_48.length / 3; i++) {
        nubes = ((reverse_arret_48[3 * i] ^ loop_58[i][0]) | ((reverse_arret_48[3 * i + 1] ^ loop_58[i][1]) << 8)) | ((reverse_arret_48[3 * i + 2] ^ loop_58[i][2]) << 16);
        for (var j = 0; j < 4; j++) {
            zse_96 += txt.charAt((nubes >>> 6 * j) & 63)
        }
    }
    return "2.0_" + zse_96;
}

// d_c0="APCd9cpAmRSPTrHmXG41PbRw1HwMaqz-Smg=|1646662024";
// sear_D = '101_3_3.0+/api/v4/search_v3?gk_version=gz-gaokao&t=general&q=%E4%BD%A9%E6%B4%9B%E8%A5%BF%E7%AA%9C%E5%8F%B0+8+%E9%A1%B9%E5%8F%8D%E5%88%B6%E6%8E%AA%E6%96%BD&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal+"AJARvSY0fhSPTjIGF6x8TJrqqNNVaJ1zi-c=|1644846771"'
//sear_D = '101_3_3.0+/api/v4/search_v3?gk_version=gz-gaokao&t=general&q=%E4%BD%A9%E6%B4%9B%E8%A5%BF%E7%AA%9C%E5%8F%B0+8+%E9%A1%B9%E5%8F%8D%E5%88%B6%E6%8E%AA%E6%96%BD&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal+"APCd9cpAmRSPTrHmXG41PbRw1HwMaqz-Smg=|1646662024"'
// md5_str = "dde77ad1bfeafca7fa2d50122621f579";
md5_str =  "87637fa3f164d472edac4aa46a57458c"



//console.log(x_zse_96(md5_str))


