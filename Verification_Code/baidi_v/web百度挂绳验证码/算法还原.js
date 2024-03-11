const tools = require('./Crypto加密.js');
//魔改base64编码
function base64Encode(str, midd) {
    let base64 = midd;
    let out = "", i = 0, len = str.length;
    while (i < len) {
      let c1 = str.charCodeAt(i++) & 0xff;
      if (i == len) {
        out += base64.charAt(c1 >> 2);
        out += base64.charAt((c1 & 0x3) << 4);
        out += "==";
        break;
      }
      let c2 = str.charCodeAt(i++);
      if (i == len) {
        out += base64.charAt(c1 >> 2);
        out += base64.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64.charAt((c2 & 0xF) << 2);
        out += "=";
        break;
      }
      let c3 = str.charCodeAt(i++);
      out += base64.charAt(c1 >> 2);
      out += base64.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += base64.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
      out += base64.charAt(c3 & 0x3F);
    }
    return out;
}

//魔改Base64解码
function base64Decode(str) {
    let midd_index = 0;
    let midd_char = str.charAt(0);
    str = str.substring(1);
    let base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    if (midd_char !== "A") {
        midd_index = base64.indexOf(midd_char);
        let midd = base64.substring(0, midd_index);
        base64 = base64.split(midd)[1] + midd;
    }
    if (midd_index == -1){
            console.log("检查输入字符串！")
            return;
    }
    else{
        let out = "", i = 0, len = str.length;
        while (i < len) {
            let c1 = base64.indexOf(str.charAt(i++));
            let c2 = base64.indexOf(str.charAt(i++));
            let c3 = base64.indexOf(str.charAt(i++));
            let c4 = base64.indexOf(str.charAt(i++));
            let n = ((c1 & 0x3F) << 2) | ((c2 & 0x30) >> 4);
            out += String.fromCharCode(n);
            if (c3 != 64) {
            n = ((c2 & 0xF) << 4) | ((c3 & 0x3C) >> 2);
            out += String.fromCharCode(n);
            }
            if (c4 != 64) {
            n = ((c3 & 0x3) << 6) | (c4 & 0x3F);
            out += String.fromCharCode(n);
            }
        }
        return out;
    }
}


// 轨迹编码
function encode(轨迹, init_64_str, midd_char){
    var arg1 = [
        轨迹,
        init_64_str
    ]
    var result = midd_char + base64Encode(arg1[0], arg1[1]);
    return result;
}

// 轨迹解码
function decode(params) {
    return base64Decode(params);
}


//key实现
function getkey() {
    let salt_1 = "50ab426dd3929d11f076517a7990d8a4f00e3543";
    let salt_2 = "6ab9fbe8afcfec88";
    let midd_index = Math.random().toString(36);
    let long_str_1 = midd_index.substring(2, 12);
    let long_str_2 = Date.now().toString();
    console.log(long_str_2);

    let long_str = long_str_1.concat('_', long_str_2).concat('_', salt_1).concat('_',salt_2);

    let aeskey = tools.SHA1_Encrypt(long_str).substring(0, 16);
    let aesiv = "e6fdeb13ca5ccef4";

    return {
        key: aeskey,
        iv: aesiv,
        old_time: long_str_2,
        midd_str: long_str_1,
    }
}


function encrypt(轨迹) {
    let now_time = Date.now().toString();
    console.log(now_time);
    /**
     * 处理魔改的base64编码
     */
    var init_64_str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var midd_index = Math.floor(Math.random() * 64);
    if (midd_index !== 0) {
        var midd_char = init_64_str.charAt(midd_index);
        var midd = init_64_str.substring(0, midd_index);
        init_64_str = init_64_str.split(midd)[1] + midd;
    }
    let 明文编码 = encode(JSON.stringify(轨迹), init_64_str, midd_char);

    /**
     * 生成动态key, iv
     */
    let 加密双参 = getkey();
    let 密文 = tools.AES_Encrypt(明文编码, 加密双参.key, 加密双参.iv);

    //ext应该是固定
    return {
        "r": 加密双参.midd_str,
        "ts": now_time + "_" + 加密双参.old_time,
        "c": 密文,
        "ext": "ih2lW9VV3PmxmO++x8wZgk9i1xGx9WH05J9hI74kTEVkpokzRQ8QxLB082MG2VoQUUT15llYBwsC+AaysNoPxpuKg0Hkpo4qMzBjXDEGhuQ=" 
    };
}


function decrypt(密文信息) {
    /**
     * 根据参数还原动态key, iv
     */
    let salt_1 = "50ab426dd3929d11f076517a7990d8a4f00e3543";
    let salt_2 = "6ab9fbe8afcfec88";
    let long_str = 密文信息["r"].concat('_', 密文信息["ts"].split('_')[1]).concat('_', salt_1).concat('_',salt_2);
    let aeskey = tools.SHA1_Encrypt(long_str).substring(0, 16);
    let aesiv = "e6fdeb13ca5ccef4";

    /**
     * aes解密
     */
    let result = tools.AES_Decrypt(密文信息["c"], aeskey, aesiv);

    /**
     * base64编码还原
     */
    result = decode(result);
    return result;

}

// 图片返回值
function image_decrypt(返回值) {
    var arg = [
        "YundZl6QjhBWTyaFC29lfX8BIk5DRNBIc2JgbQoMlVF4iqNtGCKi8ku8S7wb37JV2d7bB1R5qdqVftF9/548q82MFv+gGnmJiETWylJHq9PPu0DAaPUYE9k6uKW+Wsjm9wRd2c7RlswCSylYuOWpGSgqLphWtGPuPrw46Gl1G/PLbpvFgVPQpZRn0xJvxoYf0A1NhjygRJj7ke1wxvjPGwkxOu7PnwM9kdVP7EvvFGfDL+FnFnbRyk+6noc+O5tRAW7gtoIcZlWQqSUDtnI53QeGFo/ANSgUBZQ9y6zFcgxT79SHnm3bHHXmMzhpZ1NV7LEfNe5ziFyU0SeAchzmMPfPJzolJx3yeGQ1eY+pxYumhqdI7f+/6HOdzU6gAQuaxviYlo7m6RwhL9Cxz+OZu5k+02giRN5ONnLXuar60ESbKVcxOsPHsWAlRrzS/6OgCyJk/mhJLDQn6BUWKdPmfRT2/pC4YGGkayIeNxq5NFgT667zXPZuDSCifelw0LxmGZMIigJYu8tpLUHDk3fNYZjAhmXvmEmIf4qtNgzutSolNCN6AM8wTemCDB5iclQZrD7JpvJvTZ2A/h3RwO+APJP9q6g38HgI//It3aBUV++GSvg1BYAQtXLz390Ac2vk",
        "5802984500896880830",
        "M7bcdh2k6uqtYV5miaRiI8m8x6LIaONq",  //ak 固定
        "bi-01-fb18c3f38d01-bdc3a6a0-3138385f313036-854b"
    ]
    let sha1 = arg[1] + arg[2] + arg[3] +  "{bioc_slat}";
    let key = tools.SHA1_Encrypt(sha1).substring(0, 16);
    let iv = "16fe0555d0c6d15d";
    let image_info = JSON.parse(tools.AES_Decrypt(arg[0], key, iv));
    image_info["imgUrl"] = image_info["master"] + "/" + image_info["imgUrl"]
    return image_info;
}

///////////////////////////////////

// 加密
var a= encrypt({
    "cid": "ci-01-8491e4f28d01-aacba29b--3b29",
    "bid": "bi-01-58b8e9f28d01-3b40b202-3138385f353664-f982",
    "caid": "",
    "t": [
        [
            297,
            369,
            11
        ],
        [
            304,
            369,
            91
        ],
        [
            356,
            369,
            175
        ],
        [
            406,
            369,
            263
        ],
        [
            440,
            369,
            355
        ],
        [
            442,
            369,
            448
        ],
        [
            443,
            369,
            985
        ],
        [
            445,
            369,
            1093
        ],
        [
            446,
            369,
            1207
        ],
        [
            445,
            369,
            1507
        ],
        [
            430,
            369,
            1575
        ],
        [
            418,
            369,
            1647
        ],
        [
            409,
            369,
            1721
        ],
        [
            398,
            369,
            1798
        ],
        [
            392,
            369,
            1878
        ],
        [
            387,
            370,
            1965
        ],
        [
            384,
            370,
            2053
        ],
        [
            380,
            371,
            2153
        ]
    ],
    "it": 0,
    "x": 106,
    "ctype": "b_track_match"
});
console.log(a);
console.log("-----------------------------------------------------------------------------------------");
// 解密
console.log(decrypt(a))
console.log("获取真实图片地址:", image_decrypt());


