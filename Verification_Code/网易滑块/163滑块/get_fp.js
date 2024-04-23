window = global;
var gV = [-9, -84, -50, 59, 115, 102, 57, 125, 94, -15, 15, 2, -72, -98, -79, 38, -56, -49, 76, -26, -117, 60, 90, 9, -107, -12, -71, -100, 63, 42, -18, 28, -120, -11, 33, 45, 79, 92, 37, 97, 4, 58, 98, 84, -97, -88, 95, -104, -13, -89, 78, -90, 119, -66, 13, -5, 29, -116, -4, -81, 27, 40, -59, -43, 85, 48, -74, 109, -64, 26, 67, -33, -115, 0, -37, -102, 88, -48, 127, -86, 41, 105, -2, 122, -42, 112, -94, 81, -31, -65, -101, -14, 65, 49, -67, -114, -103, -87, -19, 104, 66, -73, -34, -78, -45, -27, -109, -108, 47, 61, 86, 43, -54, 25, 64, -35, -44, 53, -112, 36, 73, 89, -82, 51, -32, 39, -83, 80, -85, -111, 12, -58, 103, -76, -46, -127, 34, 1, -99, 14, -57, 110, 106, 93, -52, 11, 113, 20, -106, 75, 62, -69, -39, -55, -119, 126, 114, 123, 10, 77, -121, -8, 74, 21, -93, 17, -61, -21, -105, -126, 18, 124, -17, 52, -10, -77, -24, -22, 120, -95, -25, 96, -110, 22, -23, 69, -125, -128, -47, -38, -1, 3, -20, 100, 68, 101, 5, 117, -122, 44, -51, -36, -41, 24, -80, 30, 82, -63, -40, -92, 91, -6, -53, -124, -62, -28, 111, 19, 50, 108, 70, -68, -29, -75, 99, -91, -60, -70, 71, -118, -3, 83, 87, -7, 32, 55, 31, -123, 121, 107, -113, 46, -30, 118, 54, 23, 116, -16, 7, 6, 35, 16, -96, 56, 72, 8];

function g0(gc) {
    if (null == gc) {
        return null;
    }

    for (var gJ = [], gy = 0, T0 = gc["length"]; gy < T0; gy++) {
        var T1 = gc[gy];
        gJ[gy] = gV[(T1 >>> 4 & 15) * 16 + (T1 & 15)];
    }

    return gJ;
}

function g1(gc) {
    var gJ = [];

    if (null == gc || void 0 == gc || gc["length"] == 0) {
        return g4(64);
    }

    if (gc['length'] >= 64) {
        gJ = 0;
        var gy = [];

        if (null != gc && gc["length"] != 0) {
            if (gc["length"] < 64) {
                throw Error("1003");
            }

            for (var T0 = 0; T0 < 64; T0++) {
                gy[T0] = gc[gJ + T0];
            }
        }

        return gy;
    }

    for (gy = 0; gy < 64; gy++) {
        gJ[gy] = gc[gy % gc["length"]];
    }

    return gJ;
}

function g3(gc, gJ, gy) {
    var T0 = ["2", "4", "0", "a", "Y", "H", "i", "Q", "x", "L", "\\", "Z", "u", "f", "V", "l", "g", "8", "s", "P", "M", "R", "6", "d", "G", "k", "X", "v", "O", "/", "C", "b", "w", "9", "W", "D", "j", "1", "E", "T", "y", "I", "S", "c", "m", "e", "o", "J", "z", "3", "7", "q", "t", "h", "B", "r", "U", "+", "K", "N", "A", "5", "p", "n"],
        T1 = "F",
        T2 = [];

    if (gy == 1) {
        gy = gc[gJ];
        var T3 = 0;
        T2['push'](T0[gy >>> 2 & 63]);
        T2['push'](T0[(gy << 4 & 48) + (T3 >>> 4 & 15)]);
        T2['push'](T1);
        T2["push"](T1);
    } else {
        if (gy == 2) {
            gy = gc[gJ];
            T3 = gc[gJ + 1];
            gc = 0;
            T2["push"](T0[gy >>> 2 & 63]);
            T2["push"](T0[(gy << 4 & 48) + (T3 >>> 4 & 15)]);
            T2["push"](T0[(T3 << 2 & 60) + (gc >>> 6 & 3)]);
            T2['push'](T1);
        } else {
            if (gy != 3) {
                throw Error("1010");
            }

            gy = gc[gJ];
            T3 = gc[gJ + 1];
            gc = gc[gJ + 2];
            T2['push'](T0[gy >>> 2 & 63]);
            T2["push"](T0[(gy << 4 & 48) + (T3 >>> 4 & 15)]);
            T2["push"](T0[(T3 << 2 & 60) + (gc >>> 6 & 3)]);
            T2["push"](T0[gc & 63]);
        }
    }

    return T2["join"]("");
}

function g5(gc, gJ, gy, T0, T1) {
    if (null == gc || gc["length"] == 0) {
        return gy;
    }

    if (null == gy) {
        throw Error("1004");
    }

    if (gc['length'] < T1) {
        throw Error("1003");
    }

    for (var T2 = 0; T2 < T1; T2++) {
        gy[T0 + T2] = gc[gJ + T2];
    }

    return gy;
}

function g6(gc) {
    var gJ = [];
    gJ[0] = gc >>> 24 & 255;
    gJ[1] = gc >>> 16 & 255;
    gJ[2] = gc >>> 8 & 255;
    gJ[3] = gc & 255;
    return gJ;
}

function gg(gc, gJ) {
    if (null == gc || null == gJ || gc["length"] != gJ["length"]) {
        return gc;
    }

    for (var gy = [], T0 = 0, T1 = gc['length']; T0 < T1; T0++) {
        gy[T0] = gT(gc[T0], gJ[T0]);
    }

    return gy;
}

function gT(gc, gJ) {
    gc = gp(gc);
    gJ = gp(gJ);
    return gp(gc ^ gJ);
}

function gZ(gc) {
    var gx = "aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA";

    for (var gJ = [], gy = 0; gy < gc; gy++) {
        var T0 = Math["random"]() * 62;
        T0 = Math["floor"](T0);
        gJ["push"](gx['charAt'](T0));
    }

    return gJ["join"]("");
}

var m = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (v) {
    return typeof v;
} : function (v) {
    return v && "function" == typeof Symbol && v["constructor"] === Symbol && v !== Symbol["prototype"] ? "symbol" : typeof v;
};

function gS(gc) {
    var gJ = ['v', 'fp', 'u', 'h', 'ec', 'em', 'icp'],
        gy = "";

    if (null == gc || void 0 == gc) {
        return gc;
    }

    if (("undefined" == typeof gc ? 'undefined' : m(gc)) == ['ob', 'je', 'ct']["join"]("")) {
        gy += "{";

        for (var T0 = 0; T0 < gJ["length"]; T0++) {
            if (gc["hasOwnProperty"](gJ[T0])) {
                var T1 = "'" + gJ[T0] + "':'",
                    T2 = "" + gc[gJ[T0]];
                T2 = null == T2 || void 0 == T2 ? T2 : T2["replace"](/'/g, "\\'")["replace"](/"/g, '"');
                gy += T1 + T2 + "',";
            }
        }

        gy["charAt"](gy["length"] - 1) == "," && (gy = gy["substring"](0, gy["length"] - 1));
        return gy += "}";
    }

    return null;
}

function gR(gc, gJ, gy, T0) {
    if (gc = "" + gc, gc["length"] > gy) {
        throw Error("1111");
    }

    if (gc["length"] == gy) {
        return gc;
    }

    var T1 = [];
    gJ || T1["push"](gc);

    for (var T2 = gc['length']; T2 < gy; T2++) {
        T1["push"](T0);
    }

    gJ && T1["push"](gc);
    return T1["join"]("");
}

function ga(gc, gJ) {
    if (gc <= 0) {
        return [0];
    }

    for (var gy = [], T0 = 0; T0 < gc; T0++) {
        gy["push"](gJ);
    }

    return gy;
}

function gi(gc, gJ) {
    if (gc < 0 || gc >= 10) {
        throw Error("1110");
    }

    gJ = ga(gJ, "0");
    gc = "" + gc;

    for (var gy = 0, T0 = 0; gy < gJ["length"] && T0 < gc["length"]; T0++) {
        gc["charAt"](T0) != "." && (gJ[gy++] = gc["charAt"](T0));
    }

    return parseInt(gJ["join"](""));
}

function gv(gc) {
    var gJ,
        gy = 31,
        T0 = gc['length'] & 3,
        T1 = gc["length"] - T0,
        T2 = gy;
    gy = 3432918353;
    var T3 = 461845907;

    for (gJ = 0; gJ < T1;) {
        var T4 = gc["charCodeAt"](gJ) & 255 | (gc["charCodeAt"](++gJ) & 255) << 8 | (gc["charCodeAt"](++gJ) & 255) << 16 | (gc["charCodeAt"](++gJ) & 255) << 24;
        ++gJ;
        T4 = (T4 & 65535) * gy + (((T4 >>> 16) * gy & 65535) << 16) & 4294967295;
        T4 = T4 << 15 | T4 >>> 17;
        T4 = (T4 & 65535) * T3 + (((T4 >>> 16) * T3 & 65535) << 16) & 4294967295;
        T2 ^= T4;
        T2 = T2 << 13 | T2 >>> 19;
        T2 = (T2 & 65535) * 5 + (((T2 >>> 16) * 5 & 65535) << 16) & 4294967295;
        T2 = (T2 & 65535) + 27492 + (((T2 >>> 16) + 58964 & 65535) << 16);
    }

    switch (T4 = 0, T0) {
        case 3:
            T4 ^= (gc["charCodeAt"](gJ + 2) & 255) << 16;

        case 2:
            T4 ^= (gc["charCodeAt"](gJ + 1) & 255) << 8;

        case 1:
            T4 ^= gc["charCodeAt"](gJ) & 255;
            T4 = (T4 & 65535) * gy + (((T4 >>> 16) * gy & 65535) << 16) & 4294967295;
            T4 = T4 << 15 | T4 >>> 17;
            T4 = (T4 & 65535) * T3 + (((T4 >>> 16) * T3 & 65535) << 16) & 4294967295;
            T2 ^= T4;
    }

    T2 ^= gc["length"];
    T2 ^= T2 >>> 16;
    T2 = (T2 & 65535) * 2246822507 + (((T2 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
    T2 ^= T2 >>> 13;
    T2 = (T2 & 65535) * 3266489909 + (((T2 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
    T2 ^= T2 >>> 16;
    gc = T2 >>> 0;
    T0 = [];
    T0["push"](gc); // try {

    for (var T5, T6 = gc + "", T7 = 0, T8 = 0, T9 = 0; T9 < T6["length"]; T9++) {
        try {
            var Tg = parseInt(T6["charAt"](T9) + "");
            T7 = Tg || Tg === 0 ? T7 + Tg : T7 + 1;
            T8++;
        } catch (TX) {
            T7 += 1;
            T8++;
        }
    }

    T8 = T8 == 0 ? 1 : T8;
    T5 = gi(T7 * 1 / T8, 2);

    for (var TT, TB = Math['floor'](T5 / Math["pow"](10, 1)), Tp = gc + "", Tm = 0, Tv = 0, Ti = 0, TR = 0, Ta = 0; Ta < Tp["length"]; Ta++) {
        try {
            var TD = parseInt(Tp["charAt"](Ta) + "");
            TD || TD === 0 ? TD < TB ? (Tv++, Tm += TD) : (TR++, Ti += TD) : (TR++, Ti += TB);
        } catch (TO) {
            TR++;
            Ti += TB;
        }
    }

    TR = TR == 0 ? 1 : TR;
    Tv = Tv == 0 ? 1 : Tv;
    TT = gi(Ti * 1 / TR - Tm * 1 / Tv, 2);
    T0["push"](gR(T5, true, 2, "0"));
    T0["push"](gR(TT, true, 2, "0")); // } catch (Tr) {
    //     T0 = [], T0["push"](gc), T0["push"](ga(2, "-")["join"]("")), T0['push'](ga(2, "-")["join"](""));
    // }

    return T0["join"]("");
}

function gB(gc, gJ) {
    return gp(gc + gJ);
}

function gp(gc) {
    if (gc < -128) {
        return gp(128 - (-128 - gc));
    }

    if (gc >= -128 && gc <= 127) {
        return gc;
    }

    if (gc > 127) {
        return gp(-129 + gc - 127);
    }

    throw Error("1001");
}

function toByte(C) {
    return C < -128 ? toByte(256 + C) : C > 127 ? toByte(C - 256) : C;
}

function hex(V) {
    V = '' + V;

    for (var U = [], M = 0, C = 0, E = V["length"] / 2; M < E; M++) {
        var w = parseInt(V["charAt"](C++), 16) << 4,
            Q = parseInt(V["charAt"](C++), 16);
        U[M] = toByte(w + Q);
    }

    return U;
}

function stringToBytes(C) {
    C = window["encodeURIComponent"](C);

    for (var Q = [], I = 0, q = C['length']; I < q; I++) {
        if ('%' === C["charAt"](I)) {
            if (I + 2 < q) {
                Q["push"](hex('' + C["charAt"](++I) + C['charAt'](++I))[0]);
            }
        } else {
            Q["push"](toByte(C["charCodeAt"](I)));
        }
    }

    return Q;
}

function genCrc32(C) {
    for (var Q = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], I = 4294967295, q = 0, W = C['length']; q < W; q++) {
        I = I >>> 8 ^ Q[255 & (I ^ C[q])];
    }

    return j(4294967295 ^ I);
}

function intToBytes(C) {
    var Q = [];
    Q[0] = toByte(C >>> 24 & 255);
    Q[1] = toByte(C >>> 16 & 255);
    Q[2] = toByte(C >>> 8 & 255);
    Q[3] = toByte(255 & C);
    return Q;
}

function S(C) {
    return C['map'](function (Q) {
        return V(Q);
    })["join"]('');
}

function V(C) {
    var Q = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    return '' + Q[C >>> 4 & 15] + Q[15 & C];
}

function j(C) {
    return S(intToBytes(C));
}

function getfp() {
    // 检测
    var Tm = [true, // window.sessionStorage
        true, // window.localStorage
        true, //window.indexedDB
        "undefined", //document.body
        "undefined", //window.openDatabase
        null, //Navigator.cpuClass
        "Win32" //Navigator.platform
    ];
    Tm["push"]("data:image/png;base64,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");
    Tm["push"]("ActiveBorder:rgb(0, 0, 0):ActiveCaption:rgb(0, 0, 0):AppWorkspace:rgb(255, 255, 255):Background:rgb(255, 255, 255):ButtonFace:rgb(240, 240, 240):ButtonHighlight:rgb(240, 240, 240):ButtonShadow:rgb(240, 240, 240):ButtonText:rgb(0, 0, 0):CaptionText:rgb(0, 0, 0):GrayText:rgb(109, 109, 109):Highlight:rgb(0, 120, 215):HighlightText:rgb(255, 255, 255):InactiveBorder:rgb(0, 0, 0):InactiveCaption:rgb(255, 255, 255):InactiveCaptionText:rgb(128, 128, 128):InfoBackground:rgb(255, 255, 255):InfoText:rgb(0, 0, 0):Menu:rgb(255, 255, 255):MenuText:rgb(0, 0, 0):Scrollbar:rgb(255, 255, 255):ThreeDDarkShadow:rgb(0, 0, 0):ThreeDFace:rgb(240, 240, 240):ThreeDHighlight:rgb(0, 0, 0):ThreeDLightShadow:rgb(0, 0, 0):ThreeDShadow:rgb(0, 0, 0):Window:rgb(255, 255, 255):WindowFrame:rgb(0, 0, 0):WindowText:rgb(0, 0, 0)");
    var Tv = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36", "zh-CN", 24, "1080x1920", -480, null, "Alipay Security Control 3::Alipay Security Control::application/x-alisecctrl-plugin~*$Alipay security control::npaliedit::application/aliedit~$BaiduYunGuanjia Application::YunWebDetect::application/bd-npyunwebdetect-plugin~$Chromium PDF Plugin::Portable Document Format::application/x-google-chrome-pdf~pdf$Chromium PDF Viewer::::application/pdf~pdf$Microsoft Office::The plugin allows you to have a better experience with Microsoft SharePoint::application/x-sharepoint~,application/x-sharepoint-uc~$Microsoft® Windows Media Player Firefox Plugin::np-mswmp::application/x-ms-wmp~*,application/asx~*,video/x-ms-asf-plugin~*,application/x-mplayer2~*,video/x-ms-asf~asf,asx,*,video/x-ms-wm~wm,*,audio/x-ms-wma~wma,*,audio/x-ms-wax~wax,*,video/x-ms-wmv~wmv,*,video/x-ms-wvx~wvx,*$QQMail Plugin::QQMail plugin for WebKit #1.0.0.22::application/x-tencent-qmail-webkit~,application/x-tencent-qmail~$QQPCMgr Detector::QQPCMgr Mozilla Extenstion::application/qqpcmgr-extensions-mozilla~$QQÒôÀÖ²¥·Å¿Ø¼þ::QQÒôÀÖ²¥·Å¿Ø¼þ::application/tecent-qzonemusic-plugin~rts$iTrusChina iTrusPTA,XEnroll,iEnroll,hwPTA,UKeyInstalls Firefox Plugin::iTrusPTA&XEnroll hwPTA,IEnroll,UKeyInstalls for FireFox,version=1.0.0.2::application/pta.itruspta.version.1~*,application/cenroll.cenroll.version.1~,application/itrusenroll.certenroll.version.1~,application/hwpta.itrushwpta~,application/hwwdkey.installwdkey~,application/hwepass2001.installepass2001~$npQQPhotoDrawEx::npQQPhotoDrawEx Module::application/tencent-qqphotodrawex2-plugin~rts;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"];
    var Ti = [];
    Ti["push"](gv(Tm["join"]("###")));
    Ti["push"](gv(Tv["join"]("###")));
    var gJ = {
        "v": "v1.1",
        "h": "bebd.bevol.com"
    };
    var T0 = new Date()["getTime"]() + 900000;
    gJ["u"] = gZ(3) + T0 + gZ(3);
    gJ["fp"] = Ti["join"](",");
    var T2 = gS(gJ);
    var T5 = stringToBytes(T2 + genCrc32(stringToBytes(T2)));
    var T6 = stringToBytes("14731255234d414cF91356d684E4E8F5F56c8f1bc");
    var T4 = [];

    for (var T7 = 0; T7 < 4; T7++) {
        var T8 = Math["random"]() * 256;
        T8 = Math["floor"](T8);
        T4[T7] = gp(T8);
    }

    T6 = g1(T6);
    T6 = gg(T6, g1(T4));
    T7 = T6 = g1(T6);
    T8 = T5;
    var Tg = T8['length'],
        TT = Tg % 64 <= 60 ? 64 - Tg % 64 - 4 : 128 - Tg % 64 - 4;
    T5 = [];
    g5(T8, 0, T5, 0, Tg);

    for (var TB = 0; TB < TT; TB++) {
        T5[Tg + TB] = 0;
    }

    var Tp = g6(Tg);
    g5(Tp, 0, T5, Tg + TT, 4);
    Tg = T5;
    T9 = [];

    for (var Tm = 0, Tv = Tg['length'] / 64, Ti = 0; Ti < Tv; Ti++) {
        T9[Ti] = [];

        for (var TR = 0; TR < 64; TR++) {
            T9[Ti][TR] = Tg[Tm++];
        }
    }

    Tm = [];
    g5(T4, 0, Tm, 0, 4);

    for (var Ta = T9["length"], TD = 0; TD < Ta; TD++) {
        var TX = T9[TD];

        if (null == TX) {
            var TO = null;
        } else {
            var Tr = gp(37);
            Tv = [];

            for (var TK = TX["length"], TF = 0; TF < TK; TF++) {
                Tv["push"](gT(TX[TF], Tr));
            }

            TO = Tv;
        }

        if (Tv = TO, null == Tv) {
            var TZ = null;
        } else {
            var TH = gp(35);
            Ti = [];

            for (var TS = Tv["length"], Tz = 0; Tz < TS; Tz++) {
                Ti['push'](gT(Tv[Tz], TH--));
            }

            TZ = Ti;
        }

        if (Tv = TZ, null == Tv) {
            var Tl = null;
        } else {
            var TI = gp(-44);
            Ti = [];

            for (var TL = Tv["length"], Tk = 0; Tk < TL; Tk++) {
                Ti["push"](gB(Tv[Tk], TI++));
            }

            Tl = Ti;
        }

        var TN = gg(Tl, T6);

        if (Tv = TN, Ti = T7, null == Tv) {
            var TP = null;
        } else {
            if (null == Ti) {
                TP = Tv;
            } else {
                TR = [];

                for (var Th = Ti["length"], Tf = 0, Tq = Tv["length"]; Tf < Tq; Tf++) {
                    TR[Tf] = gp(Tv[Tf] + Ti[Tf % Th]);
                }

                TP = TR;
            }
        }

        TN = gg(TP, T7);
        var Te = g0(TN);
        Te = g0(Te);
        g5(Te, 0, Tm, TD * 64 + 4, 64);
        T7 = Te;
    }

    if (null == Tm || void 0 == Tm) {
        var Td = null;
    } else {
        if (Tm["length"] == 0) {
            Td = "";
        } else {
            var Tj = 3;
            Ta = [];

            for (var Tb = 0; Tb < Tm['length'];) {
                if (!(Tb + Tj <= Tm["length"])) {
                    Ta["push"](g3(Tm, Tb, Tm["length"] - Tb));
                    break;
                }

                Ta['push'](g3(Tm, Tb, Tj));
                Tb += Tj;
            }

            Td = Ta["join"]("");
        }
    }

    return Td + ":" + T0;
}


// console["log"](getcp());