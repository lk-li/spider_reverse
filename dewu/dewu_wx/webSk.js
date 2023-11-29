const {RSA_Public_Encrypt} = require("./RSA");
const {CryptoJS} = require("./CryptoJS");

function get_SK(e) {
    var i = {
        "errMsg": "getSystemInfo:ok",
        "albumAuthorized": true,
        "benchmarkLevel": e.dcic, //设备性能等级
        "bluetoothEnabled": false,//蓝牙的系统开关（iOS 需要集成 FinAppletBLE SDK 后有效）
        "brand": "microsoft",//设备品牌px
        "cameraAuthorized": true,
        "fontSizeSetting": e.dfs,// 字体
        "language": e.dla, //设备系统设置的语言
        "locationAuthorized": true,
        "locationEnabled": true,// 地理位置的系统开关
        "microphoneAuthorized": true,
        "model": "microsoft",
        "notificationAuthorized": true,
        "notificationSoundEnabled": true,
        "pixelRatio": e.dpr,//设备像素比
        "platform": e.dpl,
        "power": 100,
        "safeArea": {
            "bottom": e.dsh,
            "height": e.dsh,
            "left": 0,
            "right": e.dsw,
            "top": 0,
            "width": e.dww
        },
        "screenHeight": e.dsh,//屏幕高度
        "screenWidth": e.dsw,
        "statusBarHeight": 0,
        "system": e.dsys,//操作系统及版本
        "theme": "light",
        "version": e.dv,
        "wifiEnabled": true,
        "windowHeight": e.dsh,
        "windowWidth": e.dww,
        "SDKVersion": e.dsv,
        "enableDebug": true,
        "devicePixelRatio": 2,
        "host": {
            "appId": "",
            "env": "WeChat"
        }
    };
    var h = "0E4AC3F35E1A062077AD10BDEB5B9AEBF2DF0F6CC766E8C9";
    var St = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    var s = function (t, e) {
        return t + e
    }
        , u = function (t, e, n) {
        return t(e, n)
    }
        , f = function (t, e) {
        return t + e
    }
        , l = function (t, e) {
        return t + e
    }
        , p = function (t, e) {
        return t >> e
    }
        , d = function (t, e) {
        return t > e
    }
    var _ = JSON.stringify(e)
    var m, b,
        w = RSA_Public_Encrypt(h, "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAK0VSwHBh+7cpRC8c2u9rpB0sCIFo/3P6H2QjmMnslX3rD8RB/hN6g3VdX94eH5p/FYCfUdr9R2ZjoIHcoCz/LMCAwEAAQ=="),
        x = "";
    for (m = 0; s(m, 3) <= w.length; m += 3)
        b = u(parseInt, w.substring(m, m + 3), 16),
            x += St.charAt(i.model || i.brand ? b >> 6 : b >> 4) + St.charAt(63 & b);
    for (m + 1 == w.length ? (b = parseInt(w.substring(m, f(m, 1)), 16),
        x += St.charAt(i.screenWidth || i.windowHeight ? b << 2 : b << 1)) : m + 2 == w.length && (b = parseInt(w.substring(m, l(m, 2)), 16),
        x += St.charAt(i.windowWidth || i.screenHeight ? b >> 2 : p(b, 3)) + St.charAt((3 & b) << 4)),
             "="; d(3 & x.length, 0);)
        x += "=";
    if (g = x,
        _) {
        var S = CryptoJS.enc.Utf8.parse(_);
        v = CryptoJS.AES.encrypt(S, CryptoJS.enc.Utf8.parse(h.substr(10, 16)), {
            iv: CryptoJS.enc.Utf8.parse(h.substr(20, 16)),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
    }

    return {
        data: g + "##$" + (v ? v.ciphertext ? v.ciphertext.toString().toUpperCase() : v : "".split("").reverse().join(""))
    };

}

//  var e = {
//             "iod": 2090480052,
//             "dcic": -1,
//             "dbr": "microsoft",
//             "dmo": "microsoft",
//             "dpr": 2,
//             "dsw": 414,
//             "dsh": 695,
//             "dww": 414,
//             "dwh": 695,
//             "dbh": "-1",
//             "dla": "zh_CN",
//             "dv": "3.9.7",
//             "dsys": "Windows 10 x64",
//             "dpl": "windows",
//             "dsv": "3.0.0",
//             "dfs": 15,
//             "dor": "-1",
//             "bcn": "dewu",
//             "src": "wx",
//             "iud": "oy8VMjWPbX5iwFNSgdyITWN9Egjddmkg",
//             "sk": "",
//             "bcv": "1.0.0.231109",
//             "dje": "11111111111",
//             "ddt": 50,
//             "dnt": "wifi",
//             "dpf": "{\"errMsg\":\"getConnectedWifi:fail:not supported\"}",
//             "dua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/8447",
//             "dhc": "100,1",
//             "dft": 327
//         };
// var ii = {
//         "errMsg": "getSystemInfo:ok",
//         "albumAuthorized": true,
//         "benchmarkLevel": -1,
//         "bluetoothEnabled": false,
//         "brand": "microsoft",
//         "cameraAuthorized": true,
//         "fontSizeSetting": 15,
//         "language": "zh_CN",
//         "locationAuthorized": true,
//         "locationEnabled": true,
//         "microphoneAuthorized": true,
//         "model": "microsoft",
//         "notificationAuthorized": true,
//         "notificationSoundEnabled": true,
//         "pixelRatio": 2,
//         "platform": "windows",
//         "power": 100,
//         "safeArea": {
//             "bottom": 695,
//             "height": 695,
//             "left": 0,
//             "right": 414,
//             "top": 0,
//             "width": 414
//         },
//         "screenHeight": 695,
//         "screenWidth": 414,
//         "statusBarHeight": 0,
//         "system": "Windows 10 x64",
//         "theme": "light",
//         "version": "3.9.7",
//         "wifiEnabled": true,
//         "windowHeight": 695,
//         "windowWidth": 414,
//         "SDKVersion": "3.0.0",
//         "enableDebug": true,
//         "devicePixelRatio": 2,
//         "host": {
//             "appId": "",
//             "env": "WeChat"
//         }
//     };

// console.log(get_SK())

