const {CryptoJS} = require("./CryptoJS");
const {RSA_Public_Encrypt} =require("./RSA")


function Fun110(t, e, n) {
    t = JSON.stringify(t);
    var i = function (t, e) {
        return t === e
    }
        , o = "get"
        , a = function (t, e) {
        return t <= e
    }
        , c = function (t, e) {
        return t << e
    }
        , s = function (t, e) {
        return t & e
    }
        , u = function (t, e, n) {
        return t(e, n)
    },
     r=function (t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++)
                    r[n] = t[n];
                return r
            };
    var f = "0E4AC3F35E1A062077AD10BDEB5B9AEBF2DF0F6CC766E8C9"
        ,St = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        , l = "".split("").reverse().join("")
        , p = ""
        , d = "0"
        , h = t;
    if (i((e || "post").toLocaleLowerCase(), o))
        try {
            var v = []
                , g = JSON.parse(t);
            Object.keys(g).map((function (t) {
                    return v.push(t + "=" + encodeURIComponent(g[t])),
                        t
                }
            )),
                h = v.join("&")
        } catch (t) {
        }
    if (h) {
        var _ = CryptoJS.enc.Utf8.parse(h);
        l = CryptoJS.AES.encrypt(_, CryptoJS.enc.Utf8.parse(f.substr(10, 16)), {
            iv: CryptoJS.enc.Utf8.parse(f.substr(20, 16)),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }),
            d = "1"
    }
    var y = f.split("")
        ,
        m = Number(((new Date).valueOf() / 1e3).toFixed(0)).toString(16).toUpperCase().split("".split("").reverse().join(""));
    y.splice.apply(y, [40, 8].concat(r(m)));
    var b = 0;
    m.forEach((function (t, e) {
            e > 3 && (b += t.charCodeAt())
        }
    )),
        y.splice(b % 10, 1, 2);
    var w, x, S = RSA_Public_Encrypt(y.join(""),"MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMqNmDC6U4iHpKGdiMHZOy9qIo3LYc+wVnLV79IMXuGzSSRY5LZQkTUPwM6HTW9ATJnibCgvh2XS7emyZhYOd2MCAwEAAQ=="), O = "".split("").reverse().join("");
    for (w = 0; a(w + 3, S.length); w += 3)
        x = parseInt(S.substring(w, w + 3), 16),
            O += "" + St.charAt(x >> 6) + St.charAt(63 & x);
    w + 1 == S.length ? (x = parseInt(S.substring(w, w + 1), 16),
        O += St.charAt(c(x, 2))) : w + 2 == S.length && (x = parseInt(S.substring(w, w + 2), 16),
        O += St.charAt(x >> 2) + St.charAt(s(x, 3) << 4)),
        p = O

    var k = l ? l.ciphertext ? l.ciphertext.toString().toUpperCase() : l : "".split("").reverse().join("");
    return {
            data: p + "##$" + k

        }
}


