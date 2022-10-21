function int32(e) {
    return 4294967295 & e;
}

function mx(e, r, t, n, a, o) {
    return (t >>> 5 ^ r << 2) + (r >>> 3 ^ t << 4) ^ (e ^ r) + (o[3 & n ^ a] ^ t);
}

function decryptUint32Array(e, r) {
    var t, n, a, o, i, h, c = e.length, u = c - 1;
    for (t = e[0], h = Math.floor(6 + 52 / c), a = int32(2654435769 * h); 0 !== a; a = int32(a - 2654435769)) {
        for (o = a >>> 2 & 3, i = u; i > 0; --i) n = e[i - 1], t = e[i] = int32(e[i] - mx(a, t, n, i, o, r));
        n = e[u], t = e[0] = int32(e[0] - mx(a, t, n, 0, o, r));
    }
    return e;
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

function toUint32Array(e, r) {
    var t, n = e.length, a = n >> 2;
    0 != (3 & n) && ++a, r ? (t = new Array(a + 1))[a] = n : t = new Array(a);
    for (var o = 0; o < n; ++o) t[o >> 2] |= e.charCodeAt(o) << ((3 & o) << 3);
    return t;
}

function fixk(e) {
    return e.length < 4 && (e.length = 4), e;
}
function utf8DecodeShortString(e, r) {
            for (var t = new Array(r), n = 0, a = 0, o = e.length; n < r && a < o; n++) {
                var i = e.charCodeAt(a++);
                switch (i >> 4) {
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                    t[n] = i;
                    break;

                  case 12:
                  case 13:
                    if (!(a < o)) throw new Error("Unfinished UTF-8 octet sequence");
                    t[n] = (31 & i) << 6 | 63 & e.charCodeAt(a++);
                    break;

                  case 14:
                    if (!(a + 1 < o)) throw new Error("Unfinished UTF-8 octet sequence");
                    t[n] = (15 & i) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++);
                    break;

                  case 15:
                    if (!(a + 2 < o)) throw new Error("Unfinished UTF-8 octet sequence");
                    var h = ((7 & i) << 18 | (63 & e.charCodeAt(a++)) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++)) - 65536;
                    if (!(0 <= h && h <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + h.toString(16));
                    t[n++] = h >> 10 & 1023 | 55296, t[n] = 1023 & h | 56320;
                    break;

                  default:
                    throw new Error("Bad UTF-8 encoding 0x" + i.toString(16));
                }
            }
            return n < r && (t.length = n), String.fromCharCode.apply(String, t);
        }
function utf8Decode(e, r) {
    if ((null == r || r < 0) && (r = e.length), 0 === r) return "";
    if (/^[\x00-\x7f]*$/.test(e) || !/^[\x00-\xff]*$/.test(e)) return r === e.length ? e : e.substr(0, r);
    if (r >= 65535) return this.utf8DecodeLongString(e, r);
    var t = "", n = [0];
    if (e.length < 1e4) return utf8DecodeShortString(e, e.length);
    for (var a = Math.ceil(e.length / 1e4), o = 1; o < a; o += 1) if (o === a - 1) n.push(e.length); else {
        var i = n[o - 1] + 1e4;
        if (i > e.length) n.push(e.length); else if (e[i].charCodeAt(0) >> 4 < 8) n.push(i); else {
            var h = c(e.slice(i, e.length), 0);
            n.push(i + h);
        }
    }

    function c(e, r) {
        return e.charCodeAt(r) >> 4 < 8 ? r : c(e, r + 1);
    }

    for (var u = 0; u < n.length - 1; u += 1) try {
        t += utf8DecodeShortString(e.slice(n[u], n[u + 1]), n[u + 1] - n[u]);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        console.log(e);
    }
    return t;
}

function decrypt(e, r) {
    if (null == e || 0 === e.length) return e;
    r = utf8Encode(r);
    var t = toBinaryString(decryptUint32Array(toUint32Array(e, !1), fixk(toUint32Array(r, !1))), !0);
    return utf8Decode(t);
}

function atobDecode(e) {
    var r, t, n, a, o, i, h, c, u, s,
        f = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
    if ((h = e.length) % 4 != 0) return "";
    if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e)) return "";
    for (u = h, (c = "=" == e.charAt(h - 2) ? 1 : "=" == e.charAt(h - 1) ? 2 : 0) > 0 && (u -= 4),
             u = 3 * (u >> 2) + c, s = new Array(u), o = i = 0; o < h && -1 != (r = f[e.charCodeAt(o++)]) && -1 != (t = f[e.charCodeAt(o++)]) && (s[i++] = String.fromCharCode(r << 2 | (48 & t) >> 4),
    -1 != (n = f[e.charCodeAt(o++)])) && (s[i++] = String.fromCharCode((15 & t) << 4 | (60 & n) >> 2),
    -1 != (a = f[e.charCodeAt(o++)]));) s[i++] = String.fromCharCode((3 & n) << 6 | a);
    return s.join("");
}


function decryptFromBase64(e, r) {
    return null == e || 0 === e.length ? e : decrypt(atobDecode(e), r);
}

function decryptXxTea(e) {
    return decryptFromBase64(e, "2dac951c30d041309e915a6468e4359a")
}
//{"resultCode":"0","resultMessage":"调用成功","data":{"shareVipID":9153,"vipDays":7,"shareCount":1,"shareType":1}}

// console.log(decryptXxTea("cMRNTTDvTwEqlD9sfCzxo5anMh/zryjnUt4giRfV2iXL8QfSZUz2gcTy6aREVd0mZLPRKgVmCt47thVllkQII7Dw9JxYo0YS"))
// console.log(decryptXxTea("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"))