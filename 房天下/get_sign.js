var r = 0, n = "";

function t(r) {
    return f(g(u(r), 8 * r.length));
}

function e(r, n) {
    var t = u(r);
    t.length > 16 && (t = g(t, 8 * r.length));
    for (var e = Array(16), o = Array(16), a = 0; a < 16; a++) e[a] = 909522486 ^ t[a],
        o[a] = 1549556828 ^ t[a];
    var h = g(e.concat(u(n)), 512 + 8 * n.length);
    return f(g(o.concat(h), 640));
}

function o(n) {
    for (var t, e = r ? "0123456789ABCDEF" : "0123456789abcdef", o = "", a = 0; a < n.length; a++) t = n.charCodeAt(a),
        o += e.charAt(t >>> 4 & 15) + e.charAt(15 & t);
    return o;
}

function a(r) {
    for (var t = "", e = r.length, o = 0; o < e; o += 3) for (var a = r.charCodeAt(o) << 16 | (o + 1 < e ? r.charCodeAt(o + 1) << 8 : 0) | (o + 2 < e ? r.charCodeAt(o + 2) : 0), h = 0; h < 4; h++) 8 * o + 6 * h > 8 * r.length ? t += n : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 6 * (3 - h) & 63);
    return t;
}

function h(r, n) {
    var t, e, o, a, h, c = n.length, u = Array(Math.ceil(r.length / 2));
    for (t = 0; t < u.length; t++) u[t] = r.charCodeAt(2 * t) << 8 | r.charCodeAt(2 * t + 1);
    var f = Math.ceil(8 * r.length / (Math.log(n.length) / Math.log(2))), g = Array(f);
    for (e = 0; e < f; e++) {
        for (h = Array(), a = 0, t = 0; t < u.length; t++) a = (a << 16) + u[t], a -= (o = Math.floor(a / c)) * c,
        (h.length > 0 || o > 0) && (h[h.length] = o);
        g[e] = a, u = h;
    }
    var i = "";
    for (t = g.length - 1; t >= 0; t--) i += n.charAt(g[t]);
    return i;
}

function c(r) {
    for (var n, t, e = "", o = -1; ++o < r.length;) n = r.charCodeAt(o), t = o + 1 < r.length ? r.charCodeAt(o + 1) : 0,
    55296 <= n && n <= 56319 && 56320 <= t && t <= 57343 && (n = 65536 + ((1023 & n) << 10) + (1023 & t),
        o++), n <= 127 ? e += String.fromCharCode(n) : n <= 2047 ? e += String.fromCharCode(192 | n >>> 6 & 31, 128 | 63 & n) : n <= 65535 ? e += String.fromCharCode(224 | n >>> 12 & 15, 128 | n >>> 6 & 63, 128 | 63 & n) : n <= 2097151 && (e += String.fromCharCode(240 | n >>> 18 & 7, 128 | n >>> 12 & 63, 128 | n >>> 6 & 63, 128 | 63 & n));
    return e;
}

function u(r) {
    for (var n = Array(r.length >> 2), t = 0; t < n.length; t++) n[t] = 0;
    for (t = 0; t < 8 * r.length; t += 8) n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << t % 32;
    return n;
}

function f(r) {
    for (var n = "", t = 0; t < 32 * r.length; t += 8) n += String.fromCharCode(r[t >> 5] >>> t % 32 & 255);
    return n;
}

function g(r, n) {
    r[n >> 5] |= 128 << n % 32, r[14 + (n + 64 >>> 9 << 4)] = n;
    for (var t = 1732584193, e = -271733879, o = -1732584194, a = 271733878, h = 0; h < r.length; h += 16) {
        var c = t, u = e, f = o, g = a;
        t = l(t, e, o, a, r[h + 0], 7, -680876936), a = l(a, t, e, o, r[h + 1], 12, -389564586),
            o = l(o, a, t, e, r[h + 2], 17, 606105819), e = l(e, o, a, t, r[h + 3], 22, -1044525330),
            t = l(t, e, o, a, r[h + 4], 7, -176418897), a = l(a, t, e, o, r[h + 5], 12, 1200080426),
            o = l(o, a, t, e, r[h + 6], 17, -1473231341), e = l(e, o, a, t, r[h + 7], 22, -45705983),
            t = l(t, e, o, a, r[h + 8], 7, 1770035416), a = l(a, t, e, o, r[h + 9], 12, -1958414417),
            o = l(o, a, t, e, r[h + 10], 17, -42063), e = l(e, o, a, t, r[h + 11], 22, -1990404162),
            t = l(t, e, o, a, r[h + 12], 7, 1804603682), a = l(a, t, e, o, r[h + 13], 12, -40341101),
            o = l(o, a, t, e, r[h + 14], 17, -1502002290), t = d(t, e = l(e, o, a, t, r[h + 15], 22, 1236535329), o, a, r[h + 1], 5, -165796510),
            a = d(a, t, e, o, r[h + 6], 9, -1069501632), o = d(o, a, t, e, r[h + 11], 14, 643717713),
            e = d(e, o, a, t, r[h + 0], 20, -373897302), t = d(t, e, o, a, r[h + 5], 5, -701558691),
            a = d(a, t, e, o, r[h + 10], 9, 38016083), o = d(o, a, t, e, r[h + 15], 14, -660478335),
            e = d(e, o, a, t, r[h + 4], 20, -405537848), t = d(t, e, o, a, r[h + 9], 5, 568446438),
            a = d(a, t, e, o, r[h + 14], 9, -1019803690), o = d(o, a, t, e, r[h + 3], 14, -187363961),
            e = d(e, o, a, t, r[h + 8], 20, 1163531501), t = d(t, e, o, a, r[h + 13], 5, -1444681467),
            a = d(a, t, e, o, r[h + 2], 9, -51403784), o = d(o, a, t, e, r[h + 7], 14, 1735328473),
            t = A(t, e = d(e, o, a, t, r[h + 12], 20, -1926607734), o, a, r[h + 5], 4, -378558),
            a = A(a, t, e, o, r[h + 8], 11, -2022574463), o = A(o, a, t, e, r[h + 11], 16, 1839030562),
            e = A(e, o, a, t, r[h + 14], 23, -35309556), t = A(t, e, o, a, r[h + 1], 4, -1530992060),
            a = A(a, t, e, o, r[h + 4], 11, 1272893353), o = A(o, a, t, e, r[h + 7], 16, -155497632),
            e = A(e, o, a, t, r[h + 10], 23, -1094730640), t = A(t, e, o, a, r[h + 13], 4, 681279174),
            a = A(a, t, e, o, r[h + 0], 11, -358537222), o = A(o, a, t, e, r[h + 3], 16, -722521979),
            e = A(e, o, a, t, r[h + 6], 23, 76029189), t = A(t, e, o, a, r[h + 9], 4, -640364487),
            a = A(a, t, e, o, r[h + 12], 11, -421815835), o = A(o, a, t, e, r[h + 15], 16, 530742520),
            t = C(t, e = A(e, o, a, t, r[h + 2], 23, -995338651), o, a, r[h + 0], 6, -198630844),
            a = C(a, t, e, o, r[h + 7], 10, 1126891415), o = C(o, a, t, e, r[h + 14], 15, -1416354905),
            e = C(e, o, a, t, r[h + 5], 21, -57434055), t = C(t, e, o, a, r[h + 12], 6, 1700485571),
            a = C(a, t, e, o, r[h + 3], 10, -1894986606), o = C(o, a, t, e, r[h + 10], 15, -1051523),
            e = C(e, o, a, t, r[h + 1], 21, -2054922799), t = C(t, e, o, a, r[h + 8], 6, 1873313359),
            a = C(a, t, e, o, r[h + 15], 10, -30611744), o = C(o, a, t, e, r[h + 6], 15, -1560198380),
            e = C(e, o, a, t, r[h + 13], 21, 1309151649), t = C(t, e, o, a, r[h + 4], 6, -145523070),
            a = C(a, t, e, o, r[h + 11], 10, -1120210379), o = C(o, a, t, e, r[h + 2], 15, 718787259),
            e = C(e, o, a, t, r[h + 9], 21, -343485551), t = v(t, c), e = v(e, u), o = v(o, f),
            a = v(a, g);
    }
    return Array(t, e, o, a);
}


function ioo(r, n, t, e, o, a) {
    return v((h = v(v(n, r), v(e, a))) << (c = o) | h >>> 32 - c, t);
    var h, c;
}
function l(r, n, t, e, o, a, h) {
    return ioo(n & t | ~n & e, r, n, o, a, h);
}

function d(r, n, t, e, o, a, h) {
    return ioo(n & e | t & ~e, r, n, o, a, h);
}

function A(r, n, t, e, o, a, h) {
    return ioo(n ^ t ^ e, r, n, o, a, h);
}

function C(r, n, t, e, o, a, h) {
    return ioo(t ^ (n | ~e), r, n, o, a, h);
}

function v(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function hex_md5(r) {
    return o(t(c(r)));
};

//console.log(hex_md5("&calltime=2022-03-15 19:14:15&city=北京&key=xfactivityapi"))
 P = (e,t)=>function(...r) {
            try {
                return e.apply(e, r)
            } catch (e) {
                return A(e, t),
                ()=>{}
            }
        };
function defineProperty(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = n, e;
}

function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}

function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function get_pseusign(e, n) {
    var o = ""
        , a = 'dsdad';
    if (a) {
        var dd = {
              "encodeNumber": "101",
              "password": "4f0c6725d917f8fe4e2791921187fd7d",
              "miversgin": "p"
            };
            if (!n)
                return "";
            var c = {};
            if ("string" == typeof n)
                n.split("&").forEach(function (e) {
                    var t = e.split("=");
                    2 === t.length && (c[t[0]] = t[1]);
                });
            else
                c = n;
            if (e.includes("?"))
                e.substr(e.indexOf("?") + 1).split("&").forEach(function (e) {
                    var t = e.split("=");
                    2 === t.length && (c[t[0]] = t[1]);
                });
            var u = dd.encodeNumber
                , s = dd.password
                , g = function (e, t) {
                var n = new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds())
                    , r = new Date(n.setHours(e.getUTCHours() + 8))
                    , o = {
                    "M+": r.getMonth() + 1,
                    "d+": r.getDate(),
                    "h+": r.getHours(),
                    "m+": r.getMinutes(),
                    "s+": r.getSeconds(),
                    "q+": Math.floor((r.getMonth() + 3) / 3),
                    S: r.getMilliseconds()
                };
                for (var a in /(y+)/.test(t) && (t = t.replace(RegExp.$1, String(r.getFullYear()).substr(4 - RegExp.$1.length))),
                    o)
                    new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? o[a] : ("00" + o[a]).substr(String(o[a]).length)));
                return t;
            }(new Date(), "yyyyMMddhhmmss")
                , l = "p".concat(u).concat(g)
                , f = _objectSpread2(_objectSpread2({}, c), {}, {
                micalltime: g,
                miversion: dd.miversgin,
                misource: u
            })
                , h = Object.keys(f);
            h.sort(function (e, t) {
                return e.toLowerCase().localeCompare(t.toLowerCase());
            });
            var d = "";
            h.forEach(function (e) {
                d += "&".concat(e, "=").concat(f[e]);
            }),
                d = d.substr(1);
            var p = hex_md5("".concat(d).concat(s));
            o = "".concat(l).concat(p);
    }
    return o;
}


// daadaa = {
//     "appname": "fangx",
//     "v": "1.3.4",
//     "miniplat": "weixin",
//     "scene": 1001,
//     "type": "0",
//     "listposition": "all",
//     "city": "北京",
//     "pagesize": 20,
//     "page": 12,
//     "sign": "3681642eb0201404623da7cb674c9816",
//     "calltime": "2022-03-15 19:21:52",
//     "orderby": "41"
// }
// console.log(get_pseusign("https://miniapp.fang.com/esf/searchList",daadaa))