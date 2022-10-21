function int32(e) {
    return 4294967295 & e;
}

function mx(e, r, t, n, a, o) {
    return (t >>> 5 ^ r << 2) + (r >>> 3 ^ t << 4) ^ (e ^ r) + (o[3 & n ^ a] ^ t);
}

function utf8Encode(e) {
    if (/^[\x00-\x7f]*$/.test(e)) return e;
    for (var r = [], t = e.length, n = 0, a = 0; n < t; ++n, ++a) {
        var o = e.charCodeAt(n);
        if (o < 128) r[a] = e.charAt(n); else if (o < 2048) r[a] = String.fromCharCode(192 | o >> 6, 128 | 63 & o); else {
            if (!(o < 55296 || o > 57343)) {
                if (n + 1 < t) {
                    var i = e.charCodeAt(n + 1);
                    if (o < 56320 && 56320 <= i && i <= 57343) {
                        var h = 65536 + ((1023 & o) << 10 | 1023 & i);
                        r[a] = String.fromCharCode(240 | h >> 18 & 63, 128 | h >> 12 & 63, 128 | h >> 6 & 63, 128 | 63 & h),
                            ++n;
                        continue;
                    }
                }
                throw new Error("Malformed string");
            }
            r[a] = String.fromCharCode(224 | o >> 12, 128 | o >> 6 & 63, 128 | 63 & o);
        }
    }
    return r.join("");
}

function toBinaryString(e, r) {
    var t = e.length, n = t << 2;
    if (r) {
        var a = e[t - 1];
        if (a < (n -= 4) - 3 || a > n) return null;
        n = a;
    }
    for (var o = 0; o < t; o++) e[o] = String.fromCharCode(255 & e[o], e[o] >>> 8 & 255, e[o] >>> 16 & 255, e[o] >>> 24 & 255);
    var i = e.join("");
    return r ? i.substring(0, n) : i;
}

function encryptUint32Array(e, r) {
    var t, n, a, o, i, h, c = e.length, u = c - 1;
    for (n = e[u], a = 0, h = 0 | Math.floor(6 + 52 / c); h > 0; --h) {
        for (o = (a = int32(a + 2654435769)) >>> 2 & 3, i = 0; i < u; ++i) t = e[i + 1],
            n = e[i] = int32(e[i] + mx(a, t, n, i, o, r));
        t = e[0], n = e[u] = int32(e[u] + mx(a, t, n, u, o, r));
    }
    return e;
}

function fixk(e) {
    return e.length < 4 && (e.length = 4), e;
}

function toUint32Array(e, r) {
    var t, n = e.length, a = n >> 2;
    0 != (3 & n) && ++a, r ? (t = new Array(a + 1))[a] = n : t = new Array(a);
    for (var o = 0; o < n; ++o) t[o >> 2] |= e.charCodeAt(o) << ((3 & o) << 3);
    return t;
}

function encrypt(e, r) {
    return null == e || 0 === e.length ? e : (e = utf8Encode(e), r = utf8Encode(r),
        toBinaryString(encryptUint32Array(toUint32Array(e, !0), fixk(toUint32Array(r, !1))), !1));
}

function btoaEncode(e) {
    var r, t, n, a, o, i, h, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    for (t = n = 0, a = e.length, i = (a -= o = a % 3) / 3 << 2, o > 0 && (i += 4),
             r = new Array(i); t < a;) h = e.charCodeAt(t++) << 16 | e.charCodeAt(t++) << 8 | e.charCodeAt(t++),
        r[n++] = c[h >> 18] + c[h >> 12 & 63] + c[h >> 6 & 63] + c[63 & h];
    return 1 == o ? (h = e.charCodeAt(t++), r[n++] = c[h >> 2] + c[(3 & h) << 4] + "==") : 2 == o && (h = e.charCodeAt(t++) << 8 | e.charCodeAt(t++),
        r[n++] = c[h >> 10] + c[h >> 4 & 63] + c[(15 & h) << 2] + "="), r.join("");
}

function encryptToBase64(e, r) {
    return btoaEncode(encrypt(e, r));
}

function encryptXxTea(e) {
    return encryptToBase64(e, "2dac951c30d041309e915a6468e4359a");
}


// aa = encryptXxTea('{"shareVipID":9153}')
//
// console.log(aa)
// aap秘钥 HKqGu4X0dCRzxirZuHLVCJRhu2qqH7ro
// 小程序秘钥 2dac951c30d041309e915a6468e4359a