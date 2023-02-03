_0x5eb4cb = {
    "bogusIndex": 0,
    "msNewTokenList": [],
    "moveList": [],
    "clickList": [],
    "keyboardList": [],
    "activeState": [],
    "aidList": [
        6383
    ],
    "envcode": 1,
    "msToken": "hvJI8q2I5-RRvKaYXxslQgkPzNQ235NCCsoNy11xN2HrxJADrGkidh38N5RtELPRY_9Kdjg2nJugdGKq8GChQcEKKIROqHuOHviGaeUX9IpruVN42scS-nemEgKQ-g==",
    "msStatus": 9,
    "__ac_testid": "",
    "ttwid": "",
    "tt_webid": "",
    "tt_webid_v2": "",
    "PLUGIN": "AliSSOLogin pluginnpalissologin.dllapplication/npalissologin##Alipay Security Control 3npAliSecCtrl.dllapplication/x-alisecctrl-plugin##Alipay security controlnpaliedit.dllapplication/aliedit##BaiduYunGuanjia ApplicationnpYunWebDetect.dllapplication/bd-npyunwebdetect-plugin##Chromium PDF Plugininternal-pdf-viewerapplication/x-google-chrome-pdf",
    "GPUINFO": "Google Inc. (Intel)/ANGLE (Intel, Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11-31.0.101.2111)"
}
_0x4afdd8 = "0123456789abcdef".split(""), _0x5e7525 = [128, 32768, 8388608, -2147483648], _0x4c607c = [0, 8, 16, 24], _0x1a347c = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], _0x95df16 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
var _0x5dd3f6 = new ArrayBuffer(68);
_0x4047c4 = true;
_0x13364a = new Uint8Array(_0x5dd3f6), _0x576fda = new Uint32Array(_0x5dd3f6);

var _0x2c9f28 = function (d) {
    return new _0x2990c1(!0).update(d)["hex"]();
}


function _0x2990c1(d) {
    if (d) {
        _0x576fda[0] = _0x576fda[16] = _0x576fda[1] = _0x576fda[2] = _0x576fda[3] = _0x576fda[4] = _0x576fda[5] = _0x576fda[6] = _0x576fda[7] = _0x576fda[8] = _0x576fda[9] = _0x576fda[10] = _0x576fda[11] = _0x576fda[12] = _0x576fda[13] = _0x576fda[14] = _0x576fda[15] = 0,
            this.blocks = _0x576fda, this.buffer8 = _0x13364a;
    } else if (_0x4047c4) {
        var b = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(b), this.blocks = new Uint32Array(b);
    } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
        this.finalized = this.hashed = !1, this.first = !0;
}

_0x2990c1.prototype.update = function (d) {
    if (!this.finalized) {
        var b, c = typeof d;
        if ("string" !== c) {
            if ("object" !== c) {
                throw _0x6f3306;
            }
            if (null === d) {
                throw _0x6f3306;
            }
            if (_0x4047c4 && d.constructor === ArrayBuffer) {
                d = new Uint8Array(d);
            } else if (!(Array.isArray(d) || _0x4047c4 && ArrayBuffer.isView(d))) {
                throw _0x6f3306;
            }
            b = !0;
        }
        for (var a, e, f = 0, t = d.length, n = this.blocks, o = this.buffer8; f < t;) {
            if (this.hashed && (this.hashed = !1, n[0] = n[16], n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0),
                b) {
                if (_0x4047c4) {
                    for (e = this.start; f < t && e < 64; ++f) {
                        o[e++] = d[f];
                    }
                } else {
                    for (e = this.start; f < t && e < 64; ++f) {
                        n[e >> 2] |= d[f] << _0x4c607c[3 & e++];
                    }
                }
            } else if (_0x4047c4) {
                for (e = this.start; f < t && e < 64; ++f) {
                    (a = d.charCodeAt(f)) < 128 ? o[e++] = a : a < 2048 ? (o[e++] = 192 | a >> 6, o[e++] = 128 | 63 & a) : a < 55296 || a >= 57344 ? (o[e++] = 224 | a >> 12,
                        o[e++] = 128 | a >> 6 & 63, o[e++] = 128 | 63 & a) : (a = 65536 + ((1023 & a) << 10 | 1023 & d.charCodeAt(++f)),
                        o[e++] = 240 | a >> 18, o[e++] = 128 | a >> 12 & 63, o[e++] = 128 | a >> 6 & 63,
                        o[e++] = 128 | 63 & a);
                }
            } else {
                for (e = this.start; f < t && e < 64; ++f) {
                    (a = d.charCodeAt(f)) < 128 ? n[e >> 2] |= a << _0x4c607c[3 & e++] : a < 2048 ? (n[e >> 2] |= (192 | a >> 6) << _0x4c607c[3 & e++],
                        n[e >> 2] |= (128 | 63 & a) << _0x4c607c[3 & e++]) : a < 55296 || a >= 57344 ? (n[e >> 2] |= (224 | a >> 12) << _0x4c607c[3 & e++],
                        n[e >> 2] |= (128 | a >> 6 & 63) << _0x4c607c[3 & e++], n[e >> 2] |= (128 | 63 & a) << _0x4c607c[3 & e++]) : (a = 65536 + ((1023 & a) << 10 | 1023 & d.charCodeAt(++f)),
                        n[e >> 2] |= (240 | a >> 18) << _0x4c607c[3 & e++], n[e >> 2] |= (128 | a >> 12 & 63) << _0x4c607c[3 & e++],
                        n[e >> 2] |= (128 | a >> 6 & 63) << _0x4c607c[3 & e++], n[e >> 2] |= (128 | 63 & a) << _0x4c607c[3 & e++]);
                }
            }
            this.lastByteIndex = e, this.bytes += e - this.start, e >= 64 ? (this.start = e - 64,
                this.hash(), this.hashed = !0) : this.start = e;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
            this.bytes = this.bytes % 4294967296), this;
    }
}, _0x2990c1.prototype.finalize = function () {
    if (!this.finalized) {
        this.finalized = !0;
        var d = this.blocks, b = this.lastByteIndex;
        d[b >> 2] |= _0x5e7525[3 & b], b >= 56 && (this.hashed || this.hash(), d[0] = d[16],
            d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0),
            d[14] = this.bytes << 3, d[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
    }
}, _0x2990c1.prototype.hash = function () {
    var d, b, c, a, e, f, t = this.blocks;
    this.first ? b = ((b = ((d = ((d = t[0] - 680876937) << 7 | d >>> 25) - 271733879 << 0) ^ (c = ((c = (-271733879 ^ (a = ((a = (-1732584194 ^ 2004318071 & d) + t[1] - 117830708) << 12 | a >>> 20) + d << 0) & (-271733879 ^ d)) + t[2] - 1126478375) << 17 | c >>> 15) + a << 0) & (a ^ d)) + t[3] - 1316259209) << 22 | b >>> 10) + c << 0 : (d = this.h0,
        b = this.h1, c = this.h2, b = ((b += ((d = ((d += ((a = this.h3) ^ b & (c ^ a)) + t[0] - 680876936) << 7 | d >>> 25) + b << 0) ^ (c = ((c += (b ^ (a = ((a += (c ^ d & (b ^ c)) + t[1] - 389564586) << 12 | a >>> 20) + d << 0) & (d ^ b)) + t[2] + 606105819) << 17 | c >>> 15) + a << 0) & (a ^ d)) + t[3] - 1044525330) << 22 | b >>> 10) + c << 0),
        b = ((b += ((d = ((d += (a ^ b & (c ^ a)) + t[4] - 176418897) << 7 | d >>> 25) + b << 0) ^ (c = ((c += (b ^ (a = ((a += (c ^ d & (b ^ c)) + t[5] + 1200080426) << 12 | a >>> 20) + d << 0) & (d ^ b)) + t[6] - 1473231341) << 17 | c >>> 15) + a << 0) & (a ^ d)) + t[7] - 45705983) << 22 | b >>> 10) + c << 0,
        b = ((b += ((d = ((d += (a ^ b & (c ^ a)) + t[8] + 1770035416) << 7 | d >>> 25) + b << 0) ^ (c = ((c += (b ^ (a = ((a += (c ^ d & (b ^ c)) + t[9] - 1958414417) << 12 | a >>> 20) + d << 0) & (d ^ b)) + t[10] - 42063) << 17 | c >>> 15) + a << 0) & (a ^ d)) + t[11] - 1990404162) << 22 | b >>> 10) + c << 0,
        b = ((b += ((d = ((d += (a ^ b & (c ^ a)) + t[12] + 1804603682) << 7 | d >>> 25) + b << 0) ^ (c = ((c += (b ^ (a = ((a += (c ^ d & (b ^ c)) + t[13] - 40341101) << 12 | a >>> 20) + d << 0) & (d ^ b)) + t[14] - 1502002290) << 17 | c >>> 15) + a << 0) & (a ^ d)) + t[15] + 1236535329) << 22 | b >>> 10) + c << 0,
        b = ((b += ((a = ((a += (b ^ c & ((d = ((d += (c ^ a & (b ^ c)) + t[1] - 165796510) << 5 | d >>> 27) + b << 0) ^ b)) + t[6] - 1069501632) << 9 | a >>> 23) + d << 0) ^ d & ((c = ((c += (d ^ b & (a ^ d)) + t[11] + 643717713) << 14 | c >>> 18) + a << 0) ^ a)) + t[0] - 373897302) << 20 | b >>> 12) + c << 0,
        b = ((b += ((a = ((a += (b ^ c & ((d = ((d += (c ^ a & (b ^ c)) + t[5] - 701558691) << 5 | d >>> 27) + b << 0) ^ b)) + t[10] + 38016083) << 9 | a >>> 23) + d << 0) ^ d & ((c = ((c += (d ^ b & (a ^ d)) + t[15] - 660478335) << 14 | c >>> 18) + a << 0) ^ a)) + t[4] - 405537848) << 20 | b >>> 12) + c << 0,
        b = ((b += ((a = ((a += (b ^ c & ((d = ((d += (c ^ a & (b ^ c)) + t[9] + 568446438) << 5 | d >>> 27) + b << 0) ^ b)) + t[14] - 1019803690) << 9 | a >>> 23) + d << 0) ^ d & ((c = ((c += (d ^ b & (a ^ d)) + t[3] - 187363961) << 14 | c >>> 18) + a << 0) ^ a)) + t[8] + 1163531501) << 20 | b >>> 12) + c << 0,
        b = ((b += ((a = ((a += (b ^ c & ((d = ((d += (c ^ a & (b ^ c)) + t[13] - 1444681467) << 5 | d >>> 27) + b << 0) ^ b)) + t[2] - 51403784) << 9 | a >>> 23) + d << 0) ^ d & ((c = ((c += (d ^ b & (a ^ d)) + t[7] + 1735328473) << 14 | c >>> 18) + a << 0) ^ a)) + t[12] - 1926607734) << 20 | b >>> 12) + c << 0,
        b = ((b += ((f = (a = ((a += ((e = b ^ c) ^ (d = ((d += (e ^ a) + t[5] - 378558) << 4 | d >>> 28) + b << 0)) + t[8] - 2022574463) << 11 | a >>> 21) + d << 0) ^ d) ^ (c = ((c += (f ^ b) + t[11] + 1839030562) << 16 | c >>> 16) + a << 0)) + t[14] - 35309556) << 23 | b >>> 9) + c << 0,
        b = ((b += ((f = (a = ((a += ((e = b ^ c) ^ (d = ((d += (e ^ a) + t[1] - 1530992060) << 4 | d >>> 28) + b << 0)) + t[4] + 1272893353) << 11 | a >>> 21) + d << 0) ^ d) ^ (c = ((c += (f ^ b) + t[7] - 155497632) << 16 | c >>> 16) + a << 0)) + t[10] - 1094730640) << 23 | b >>> 9) + c << 0,
        b = ((b += ((f = (a = ((a += ((e = b ^ c) ^ (d = ((d += (e ^ a) + t[13] + 681279174) << 4 | d >>> 28) + b << 0)) + t[0] - 358537222) << 11 | a >>> 21) + d << 0) ^ d) ^ (c = ((c += (f ^ b) + t[3] - 722521979) << 16 | c >>> 16) + a << 0)) + t[6] + 76029189) << 23 | b >>> 9) + c << 0,
        b = ((b += ((f = (a = ((a += ((e = b ^ c) ^ (d = ((d += (e ^ a) + t[9] - 640364487) << 4 | d >>> 28) + b << 0)) + t[12] - 421815835) << 11 | a >>> 21) + d << 0) ^ d) ^ (c = ((c += (f ^ b) + t[15] + 530742520) << 16 | c >>> 16) + a << 0)) + t[2] - 995338651) << 23 | b >>> 9) + c << 0,
        b = ((b += ((a = ((a += (b ^ ((d = ((d += (c ^ (b | ~a)) + t[0] - 198630844) << 6 | d >>> 26) + b << 0) | ~c)) + t[7] + 1126891415) << 10 | a >>> 22) + d << 0) ^ ((c = ((c += (d ^ (a | ~b)) + t[14] - 1416354905) << 15 | c >>> 17) + a << 0) | ~d)) + t[5] - 57434055) << 21 | b >>> 11) + c << 0,
        b = ((b += ((a = ((a += (b ^ ((d = ((d += (c ^ (b | ~a)) + t[12] + 1700485571) << 6 | d >>> 26) + b << 0) | ~c)) + t[3] - 1894986606) << 10 | a >>> 22) + d << 0) ^ ((c = ((c += (d ^ (a | ~b)) + t[10] - 1051523) << 15 | c >>> 17) + a << 0) | ~d)) + t[1] - 2054922799) << 21 | b >>> 11) + c << 0,
        b = ((b += ((a = ((a += (b ^ ((d = ((d += (c ^ (b | ~a)) + t[8] + 1873313359) << 6 | d >>> 26) + b << 0) | ~c)) + t[15] - 30611744) << 10 | a >>> 22) + d << 0) ^ ((c = ((c += (d ^ (a | ~b)) + t[6] - 1560198380) << 15 | c >>> 17) + a << 0) | ~d)) + t[13] + 1309151649) << 21 | b >>> 11) + c << 0,
        b = ((b += ((a = ((a += (b ^ ((d = ((d += (c ^ (b | ~a)) + t[4] - 145523070) << 6 | d >>> 26) + b << 0) | ~c)) + t[11] - 1120210379) << 10 | a >>> 22) + d << 0) ^ ((c = ((c += (d ^ (a | ~b)) + t[2] + 718787259) << 15 | c >>> 17) + a << 0) | ~d)) + t[9] - 343485551) << 21 | b >>> 11) + c << 0,
        this.first ? (this.h0 = d + 1732584193 << 0, this.h1 = b - 271733879 << 0, this.h2 = c - 1732584194 << 0,
            this.h3 = a + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + d << 0, this.h1 = this.h1 + b << 0,
            this.h2 = this.h2 + c << 0, this.h3 = this.h3 + a << 0);
}, _0x2990c1.prototype.hex = function () {
    this.finalize();
    var d = this.h0, b = this.h1, c = this.h2, a = this.h3;
    return _0x4afdd8[d >> 4 & 15] + _0x4afdd8[15 & d] + _0x4afdd8[d >> 12 & 15] + _0x4afdd8[d >> 8 & 15] + _0x4afdd8[d >> 20 & 15] + _0x4afdd8[d >> 16 & 15] + _0x4afdd8[d >> 28 & 15] + _0x4afdd8[d >> 24 & 15] + _0x4afdd8[b >> 4 & 15] + _0x4afdd8[15 & b] + _0x4afdd8[b >> 12 & 15] + _0x4afdd8[b >> 8 & 15] + _0x4afdd8[b >> 20 & 15] + _0x4afdd8[b >> 16 & 15] + _0x4afdd8[b >> 28 & 15] + _0x4afdd8[b >> 24 & 15] + _0x4afdd8[c >> 4 & 15] + _0x4afdd8[15 & c] + _0x4afdd8[c >> 12 & 15] + _0x4afdd8[c >> 8 & 15] + _0x4afdd8[c >> 20 & 15] + _0x4afdd8[c >> 16 & 15] + _0x4afdd8[c >> 28 & 15] + _0x4afdd8[c >> 24 & 15] + _0x4afdd8[a >> 4 & 15] + _0x4afdd8[15 & a] + _0x4afdd8[a >> 12 & 15] + _0x4afdd8[a >> 8 & 15] + _0x4afdd8[a >> 20 & 15] + _0x4afdd8[a >> 16 & 15] + _0x4afdd8[a >> 28 & 15] + _0x4afdd8[a >> 24 & 15];
}, _0x2990c1.prototype.toString = _0x2990c1.prototype.hex, _0x2990c1.prototype.digest = function () {
    this.finalize();
    var d = this.h0, b = this.h1, c = this.h2, a = this.h3;
    return [255 & d, d >> 8 & 255, d >> 16 & 255, d >> 24 & 255, 255 & b, b >> 8 & 255, b >> 16 & 255, b >> 24 & 255, 255 & c, c >> 8 & 255, c >> 16 & 255, c >> 24 & 255, 255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255];
}, _0x2990c1.prototype.array = _0x2990c1.prototype.digest, _0x2990c1.prototype.arrayBuffer = function () {
    this.finalize();
    var d = new ArrayBuffer(16), b = new Uint32Array(d);
    return b[0] = this.h0, b[1] = this.h1, b[2] = this.h2, b[3] = this.h3, d;
}, _0x2990c1.prototype.buffer = _0x2990c1.prototype.arrayBuffer, _0x2990c1.prototype.base64 = function () {
    for (var d, b, c, a = "", e = this.array(), f = 0; f < 15;) {
        d = e[f++], b = e[f++], c = e[f++], a += _0x95df16[d >>> 2] + _0x95df16[63 & (d << 4 | b >>> 4)] + _0x95df16[63 & (b << 2 | c >>> 6)] + _0x95df16[63 & c];
    }
    return d = e[f], a + (_0x95df16[d >>> 2] + _0x95df16[d << 4 & 63] + "==");
};


for (var _0x4e609e = {
    boe: !1,
    aid: 0,
    dfp: !1,
    sdi: !1,
    enablePathList: [],
    _enablePathListRegex: [],
    urlRewriteRules: [],
    _urlRewriteRules: [],
    initialized: !1,
    enableTrack: !1,
    track: {
        unitTime: 0,
        unitAmount: 0,
        fre: 0
    },
    triggerUnload: !1,
    region: "",
    regionConf: {},
    umode: 0,
    v: !1,
    perf: !1,
    xxbg: !0
}, _0x3151ad = {
    debug: function (d, b) {
        let c = !1;
        c = _0x4e609e.boe;
    }
}, _0xa8e12c = "0123456789abcdef".split(""), _0x42094e = [], _0x4d169f = [], _0x23dbf4 = 0; _0x23dbf4 < 256; _0x23dbf4++) {
    _0x42094e[_0x23dbf4] = _0xa8e12c[_0x23dbf4 >> 4 & 15] + _0xa8e12c[15 & _0x23dbf4],
    _0x23dbf4 < 16 && (_0x23dbf4 < 10 ? _0x4d169f[48 + _0x23dbf4] = _0x23dbf4 : _0x4d169f[87 + _0x23dbf4] = _0x23dbf4);
}
_decode = function (d) {
    for (var b = d.length >> 1, c = b << 1, a = new Uint8Array(b), e = 0, f = 0; f < c;) {
        a[e++] = _0x4d169f[d.charCodeAt(f++)] << 4 | _0x4d169f[d.charCodeAt(f++)];
    }
    return a;
}

function _0x138914(d, b) {
    let c, a = [], e = 0, f = "";
    for (let d = 0; d < 256; d++) {
        a[d] = d;
    }
    for (let b = 0; b < 256; b++) {
        e = (e + a[b] + d.charCodeAt(b % d.length)) % 256, c = a[b], a[b] = a[e], a[e] = c;
    }
    let t = 0;
    e = 0;
    for (let d = 0; d < b.length; d++) {
        t = (t + 1) % 256, e = (e + a[t]) % 256, c = a[t], a[t] = a[e], a[e] = c, f += String.fromCharCode(b.charCodeAt(d) ^ a[(a[t] + a[e]) % 256]);
    }
    return f;
}


function _0x4b60d4(b, d, a) {

    let e = "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe", c = "=";
    a && (c = "");
    d && (e = d);
    let f, t = "", n = 0;
    for (; b.length >= n + 3;) {
        f = (255 & b.charCodeAt(n++)) << 16 | (255 & b.charCodeAt(n++)) << 8 | 255 & b.charCodeAt(n++);
        t += e.charAt((16515072 & f) >> 18);
        t += e.charAt((258048 & f) >> 12);
        t += e.charAt((4032 & f) >> 6);
        t += e.charAt(63 & f);
    }
    b.length - n > 0 && (f = (255 & b.charCodeAt(n++)) << 16 | (b.length > n ? (255 & b.charCodeAt(n)) << 8 : 0),
        t += e.charAt((16515072 & f) >> 18), t += e.charAt((258048 & f) >> 12), t += b.length > n ? e.charAt((4032 & f) >> 6) : c,
        t += c);
    return t;
}

function _0x2f7b3a(d, b) {
    let c = b.length, a = new ArrayBuffer(c + 1), e = new Uint8Array(a), f = 0;
    for (let d = 0; d < c; d++) {
        e[d] = b[d], f ^= b[d];
    }
    e[c] = f;
    let t = 255 & Math.floor(255 * Math.random()), n = String.fromCharCode.apply(null, e),
        o = _0x138914(String.fromCharCode(t), n);
    var i = "";
    return i += String.fromCharCode(d), i += String.fromCharCode(t), _0x4b60d4(i += o);
}


function _0x37c272(d, b, c, a, e) {
    //_0x285152(), _0xb14de5(),
    void 0 !== a && "" !== a && (a = "");
    let f = _0x2c9f28(a);
    e || (e = "00000000000000000000000000000000");
    let t = new ArrayBuffer(9), n = new Uint8Array(t),
        o = 0 | d << 6 | b << 5 | (1 & Math.floor(100 * Math.random())) << 4 | 0;
    _0x5eb4cb.bogusIndex++;
    let i = 63 & _0x5eb4cb.bogusIndex;
    n[0] = c << 6 | i, n[1] = _0x5eb4cb.envcode >> 8 & 255, n[2] = 255 & _0x5eb4cb.envcode,
        n[3] = 12;
    let r = _decode(_0x2c9f28(_decode(f)));
    n[4] = r[14], n[5] = r[15];
    let _ = _decode(_0x2c9f28(_decode(e)));
    return n[6] = _[14], n[7] = _[15], n[8] = 255 & Math.floor(255 * Math.random()),
        _0x2f7b3a(o, n);
}


// "" ==》MD5 ===>d41d8cd98f00b204e9800998ecf8427e   他一直传入空值 网页定位位置 "X-MS-STUB": g()(n.substring(1))
console.log(_0x37c272(1, true, 0, "", "d41d8cd98f00b204e9800998ecf8427e"))

