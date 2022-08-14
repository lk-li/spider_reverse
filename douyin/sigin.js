// https://xxbg.snssdk.com/websdk/v1/getInfo 响应 cookies tt_scid 或 返回值中的fp
tt_scid = 'x9JMxHqglXw2GAoRWsHsU0pd0STAmSox7sckI85G1JCP9ym2v5MAHxYKHL8OeT3V6db6'

function _0x2678e4(a, c) {
    c || (c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let e = "";
    for (let b = a; b > 0; --b) {
        e += c[Math.floor(Math.random() * c.length)];
    }
    return e;
}

// 生成长度为4的随机字符
random_str = _0x2678e4(4)
console.log('random_str: ', random_str)


function _0x5d3573(a) {
    if (/^[\x00-\x7f]*$/.test(a)) {
        return a;
    }
    for (var c = [], e = a.length, b = 0, d = 0; b < e; ++b, ++d) {
        var f = a.charCodeAt(b);
        if (f < 128) {
            c[d] = a.charAt(b);
        } else if (f < 2048) {
            c[d] = String.fromCharCode(192 | f >> 6, 128 | 63 & f);
        } else {
            if (!(f < 55296 || f > 57343)) {
                if (b + 1 < e) {
                    var t = a.charCodeAt(b + 1);
                    if (f < 56320 && 56320 <= t && t <= 57343) {
                        var n = 65536 + ((1023 & f) << 10 | 1023 & t);
                        c[d] = String.fromCharCode(240 | n >> 18 & 63, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n),
                            ++b;
                        continue;
                    }
                }
                throw new Error("Malformed string");
            }
            c[d] = String.fromCharCode(224 | f >> 12, 128 | f >> 6 & 63, 128 | 63 & f);
        }
    }
    return c.join("");
}

function _0x296df3(a, c) {
    var e = a.length, b = e << 2;
    if (c) {
        var d = a[e - 1];
        if (d < (b -= 4) - 3 || d > b) {
            return null;
        }
        b = d;
    }
    for (var f = 0; f < e; f++) {
        a[f] = String.fromCharCode(255 & a[f], a[f] >>> 8 & 255, a[f] >>> 16 & 255, a[f] >>> 24 & 255);
    }
    var t = a.join("");
    return c ? t.substring(0, b) : t;
}

function _0x35e722(a, c) {
    var e, b, d, f, t, n, o = a.length, i = o - 1;
    for (b = a[i], d = 0, n = 0 | Math.floor(6 + 52 / o); n > 0; --n) {
        for (f = (d = _0x1f8d5b(d + _0x454566)) >>> 2 & 3, t = 0; t < i; ++t) {
            e = a[t + 1], b = a[t] = _0x1f8d5b(a[t] + _0x26c9fe(d, e, b, t, f, c));
        }
        e = a[0], b = a[i] = _0x1f8d5b(a[i] + _0x26c9fe(d, e, b, i, f, c));
    }
    return a;
}

function _0x215dbe(a, c) {
    var e, b = a.length, d = b >> 2;
    0 != (3 & b) && ++d, c ? (e = new Array(d + 1))[d] = b : e = new Array(d);
    for (let c = 0; c < b; ++c) {
        e[c >> 2] |= a.charCodeAt(c) << ((3 & c) << 3);
    }
    return e;
}

function _0x315334(a) {
    return a.length < 4 && (a.length = 4), a;
}

function _0x1f8d5b(a) {
    return 4294967295 & a;
}

var _0x454566 = 2654435769;

function _0x26c9fe(a, c, e, b, d, f) {
    return (e >>> 5 ^ c << 2) + (c >>> 3 ^ e << 4) ^ (a ^ c) + (f[3 & b ^ d] ^ e);
}

// 将tt_scid 和 random_str 转为乱码字符
function _0x29bf2a(a, c) {
    return null == a || 0 === a.length ? a : (a = _0x5d3573(a), c = _0x5d3573(c), _0x296df3(_0x35e722(_0x215dbe(a, !0), _0x315334(_0x215dbe(c, !1))), !1));
}

messy_code = _0x29bf2a(tt_scid, random_str)
console.log('messy_code: ', messy_code)

// 将乱码字符转为明文字符
function _0x4204bf(a, c, e) {
    let b = "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe", d = "=";
    e && (d = ""), c && (b = c);
    let f, t = "", n = 0;
    for (; a.length >= n + 3;) {
        f = (255 & a.charCodeAt(n++)) << 16 | (255 & a.charCodeAt(n++)) << 8 | 255 & a.charCodeAt(n++),
            t += b.charAt((16515072 & f) >> 18), t += b.charAt((258048 & f) >> 12), t += b.charAt((4032 & f) >> 6),
            t += b.charAt(63 & f);
    }
    return a.length - n > 0 && (f = (255 & a.charCodeAt(n++)) << 16 | (a.length > n ? (255 & a.charCodeAt(n)) << 8 : 0),
        t += b.charAt((16515072 & f) >> 18), t += b.charAt((258048 & f) >> 12), t += a.length > n ? b.charAt((4032 & f) >> 6) : d,
        t += d), t;
}

var fixed_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-."

plaintext = _0x4204bf(messy_code,fixed_str)
console.log('plaintext: ',plaintext)

// 将随机字符与明文字符拼接
signature = random_str.concat(plaintext)
console.log('signature: ',signature)