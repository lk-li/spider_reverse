window = this;
// "X-MS-STUB"生成
!function(u){
	_ = {};
    function m(e) {
        var t = _[e];
        if (void 0 !== t)
            return t.exports;
        var n = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return u[e].call(n.exports, n, n.exports, m),
        n.loaded = !0,
        n.exports
    }
    m.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return m.d(t, {
            a: t
        }),
        t
    },
    m.d = (e,t)=>{
        for (var n in t)
            m.o(t, n) && !m.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    },
    m.O = (t,n,i,a)=>{
        if (!n) {
            var o = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [n,i,a] = e[c], r = !0, l = 0; l < n.length; l++)
                    (!1 & a || o >= a) && Object.keys(h.O).every((e=>h.O[e](n[l]))) ? n.splice(l--, 1) : (r = !1,
                    a < o && (o = a));
                if (r) {
                    e.splice(c--, 1);
                    var s = i();
                    void 0 !== s && (t = s)
                }
            }
            return t
        }
        a = a || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > a; c--)
            e[c] = e[c - 1];
        e[c] = [n, i, a]
    },
    m.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
	window.kkk = m;
}({
	4488: t=>{
        var e = {
            utf8: {
                stringToBytes: function(t) {
                    return e.bin.stringToBytes(unescape(encodeURIComponent(t)))
                },
                bytesToString: function(t) {
                    return decodeURIComponent(escape(e.bin.bytesToString(t)))
                }
            },
            bin: {
                stringToBytes: function(t) {
                    for (var e = [], r = 0; r < t.length; r++)
                        e.push(255 & t.charCodeAt(r));
                    return e
                },
                bytesToString: function(t) {
                    for (var e = [], r = 0; r < t.length; r++)
                        e.push(String.fromCharCode(t[r]));
                    return e.join("")
                }
            }
        };
        t.exports = e
    },
	15353: t=>{
        function e(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
        t.exports = function(t) {
            return null != t && (e(t) || function(t) {
                return "function" == typeof t.readFloatLE && "function" == typeof t.slice && e(t.slice(0, 0))
            }(t) || !!t._isBuffer)
        }
    },
	55535: t=>{
        var e, r;
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        r = {
            rotl: function(t, e) {
                return t << e | t >>> 32 - e
            },
            rotr: function(t, e) {
                return t << 32 - e | t >>> e
            },
            endian: function(t) {
                if (t.constructor == Number)
                    return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
                for (var e = 0; e < t.length; e++)
                    t[e] = r.endian(t[e]);
                return t
            },
            randomBytes: function(t) {
                for (var e = []; t > 0; t--)
                    e.push(Math.floor(256 * Math.random()));
                return e
            },
            bytesToWords: function(t) {
                for (var e = [], r = 0, n = 0; r < t.length; r++,
                n += 8)
                    e[n >>> 5] |= t[r] << 24 - n % 32;
                return e
            },
            wordsToBytes: function(t) {
                for (var e = [], r = 0; r < 32 * t.length; r += 8)
                    e.push(t[r >>> 5] >>> 24 - r % 32 & 255);
                return e
            },
            bytesToHex: function(t) {
                for (var e = [], r = 0; r < t.length; r++)
                    e.push((t[r] >>> 4).toString(16)),
                    e.push((15 & t[r]).toString(16));
                return e.join("")
            },
            hexToBytes: function(t) {
                for (var e = [], r = 0; r < t.length; r += 2)
                    e.push(parseInt(t.substr(r, 2), 16));
                return e
            },
            bytesToBase64: function(t) {
                for (var r = [], n = 0; n < t.length; n += 3)
                    for (var o = t[n] << 16 | t[n + 1] << 8 | t[n + 2], i = 0; i < 4; i++)
                        8 * n + 6 * i <= 8 * t.length ? r.push(e.charAt(o >>> 6 * (3 - i) & 63)) : r.push("=");
                return r.join("")
            },
            base64ToBytes: function(t) {
                t = t.replace(/[^A-Z0-9+\/]/gi, "");
                for (var r = [], n = 0, o = 0; n < t.length; o = ++n % 4)
                    0 != o && r.push((e.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | e.indexOf(t.charAt(n)) >>> 6 - 2 * o);
                return r
            }
        },
        t.exports = r
    },
	84465: (e,t,n)=>{
        var r, i, o, a, u;
        r = n(55535),
        i = n(4488).utf8,
        o = n(15353),
        a = n(4488).bin,
        (u = function(e, t) {
            e.constructor == String ? e = t && "binary" === t.encoding ? a.stringToBytes(e) : i.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
            for (var n = r.bytesToWords(e), l = 8 * e.length, s = 1732584193, c = -271733879, f = -1732584194, d = 271733878, p = 0; p < n.length; p++)
                n[p] = 16711935 & (n[p] << 8 | n[p] >>> 24) | 4278255360 & (n[p] << 24 | n[p] >>> 8);
            n[l >>> 5] |= 128 << l % 32,
            n[14 + (l + 64 >>> 9 << 4)] = l;
            var h = u._ff
              , v = u._gg
              , m = u._hh
              , b = u._ii;
            for (p = 0; p < n.length; p += 16) {
                var g = s
                  , y = c
                  , w = f
                  , _ = d;
                s = h(s, c, f, d, n[p + 0], 7, -680876936),
                d = h(d, s, c, f, n[p + 1], 12, -389564586),
                f = h(f, d, s, c, n[p + 2], 17, 606105819),
                c = h(c, f, d, s, n[p + 3], 22, -1044525330),
                s = h(s, c, f, d, n[p + 4], 7, -176418897),
                d = h(d, s, c, f, n[p + 5], 12, 1200080426),
                f = h(f, d, s, c, n[p + 6], 17, -1473231341),
                c = h(c, f, d, s, n[p + 7], 22, -45705983),
                s = h(s, c, f, d, n[p + 8], 7, 1770035416),
                d = h(d, s, c, f, n[p + 9], 12, -1958414417),
                f = h(f, d, s, c, n[p + 10], 17, -42063),
                c = h(c, f, d, s, n[p + 11], 22, -1990404162),
                s = h(s, c, f, d, n[p + 12], 7, 1804603682),
                d = h(d, s, c, f, n[p + 13], 12, -40341101),
                f = h(f, d, s, c, n[p + 14], 17, -1502002290),
                s = v(s, c = h(c, f, d, s, n[p + 15], 22, 1236535329), f, d, n[p + 1], 5, -165796510),
                d = v(d, s, c, f, n[p + 6], 9, -1069501632),
                f = v(f, d, s, c, n[p + 11], 14, 643717713),
                c = v(c, f, d, s, n[p + 0], 20, -373897302),
                s = v(s, c, f, d, n[p + 5], 5, -701558691),
                d = v(d, s, c, f, n[p + 10], 9, 38016083),
                f = v(f, d, s, c, n[p + 15], 14, -660478335),
                c = v(c, f, d, s, n[p + 4], 20, -405537848),
                s = v(s, c, f, d, n[p + 9], 5, 568446438),
                d = v(d, s, c, f, n[p + 14], 9, -1019803690),
                f = v(f, d, s, c, n[p + 3], 14, -187363961),
                c = v(c, f, d, s, n[p + 8], 20, 1163531501),
                s = v(s, c, f, d, n[p + 13], 5, -1444681467),
                d = v(d, s, c, f, n[p + 2], 9, -51403784),
                f = v(f, d, s, c, n[p + 7], 14, 1735328473),
                s = m(s, c = v(c, f, d, s, n[p + 12], 20, -1926607734), f, d, n[p + 5], 4, -378558),
                d = m(d, s, c, f, n[p + 8], 11, -2022574463),
                f = m(f, d, s, c, n[p + 11], 16, 1839030562),
                c = m(c, f, d, s, n[p + 14], 23, -35309556),
                s = m(s, c, f, d, n[p + 1], 4, -1530992060),
                d = m(d, s, c, f, n[p + 4], 11, 1272893353),
                f = m(f, d, s, c, n[p + 7], 16, -155497632),
                c = m(c, f, d, s, n[p + 10], 23, -1094730640),
                s = m(s, c, f, d, n[p + 13], 4, 681279174),
                d = m(d, s, c, f, n[p + 0], 11, -358537222),
                f = m(f, d, s, c, n[p + 3], 16, -722521979),
                c = m(c, f, d, s, n[p + 6], 23, 76029189),
                s = m(s, c, f, d, n[p + 9], 4, -640364487),
                d = m(d, s, c, f, n[p + 12], 11, -421815835),
                f = m(f, d, s, c, n[p + 15], 16, 530742520),
                s = b(s, c = m(c, f, d, s, n[p + 2], 23, -995338651), f, d, n[p + 0], 6, -198630844),
                d = b(d, s, c, f, n[p + 7], 10, 1126891415),
                f = b(f, d, s, c, n[p + 14], 15, -1416354905),
                c = b(c, f, d, s, n[p + 5], 21, -57434055),
                s = b(s, c, f, d, n[p + 12], 6, 1700485571),
                d = b(d, s, c, f, n[p + 3], 10, -1894986606),
                f = b(f, d, s, c, n[p + 10], 15, -1051523),
                c = b(c, f, d, s, n[p + 1], 21, -2054922799),
                s = b(s, c, f, d, n[p + 8], 6, 1873313359),
                d = b(d, s, c, f, n[p + 15], 10, -30611744),
                f = b(f, d, s, c, n[p + 6], 15, -1560198380),
                c = b(c, f, d, s, n[p + 13], 21, 1309151649),
                s = b(s, c, f, d, n[p + 4], 6, -145523070),
                d = b(d, s, c, f, n[p + 11], 10, -1120210379),
                f = b(f, d, s, c, n[p + 2], 15, 718787259),
                c = b(c, f, d, s, n[p + 9], 21, -343485551),
                s = s + g >>> 0,
                c = c + y >>> 0,
                f = f + w >>> 0,
                d = d + _ >>> 0
            }
            return r.endian([s, c, f, d])
        }
        )._ff = function(e, t, n, r, i, o, a) {
            var u = e + (t & n | ~t & r) + (i >>> 0) + a;
            return (u << o | u >>> 32 - o) + t
        }
        ,
        u._gg = function(e, t, n, r, i, o, a) {
            var u = e + (t & r | n & ~r) + (i >>> 0) + a;
            return (u << o | u >>> 32 - o) + t
        }
        ,
        u._hh = function(e, t, n, r, i, o, a) {
            var u = e + (t ^ n ^ r) + (i >>> 0) + a;
            return (u << o | u >>> 32 - o) + t
        }
        ,
        u._ii = function(e, t, n, r, i, o, a) {
            var u = e + (n ^ (t | ~r)) + (i >>> 0) + a;
            return (u << o | u >>> 32 - o) + t
        }
        ,
        u._blocksize = 16,
        u._digestsize = 16,
        e.exports = function(e, t) {
            if (null == e)
                throw new Error("Illegal argument " + e);
            var n = r.wordsToBytes(u(e, t));
            return t && t.asBytes ? n : t && t.asString ? a.bytesToString(n) : r.bytesToHex(n)
        }
    }
})


// 生成乱码字符串
function _0xf55c3f() {
    var _0x6f3306 = "input is invalid type"
      , _0x1cfbdc = true
      , _0x4fa7c3 = window;
    _0x4fa7c3.JS_MD5_NO_WINDOW && (_0x1cfbdc = !1);
    var _0x555c72 = false
      , _0x57a40f = false
     _0x4fa7c3 = _0x3b24b0 = window;
    var _0x1af098 = true , _0x4d3934 = !1, _0x4047c4 = true, _0x4afdd8 = "0123456789abcdef".split(""), _0x5e7525 = [128, 32768, 8388608, -2147483648], _0x4c607c = [0, 8, 16, 24], _0x1a347c = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], _0x95df16 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), _0x576fda = [], _0x13364a;
    if (_0x4047c4) {
        var _0x5dd3f6 = new ArrayBuffer(68);
        _0x13364a = new Uint8Array(_0x5dd3f6),
        _0x576fda = new Uint32Array(_0x5dd3f6);
    }
    true && Array.isArray || (Array.isArray = function(d) {
        return "[object Array]" === Object.prototype.toString.call(d);
    }),
    true && ArrayBuffer.isView || (ArrayBuffer.isView = function(d) {
        return false;
    }
    );
    var _0x2c9f28 = function(d,b) {
        return new _0x2990c1(!0).update(b)[d]();
    }
      , _0x24a40d = function() {
        var d = _0x2c9f28("hex");
        _0x57a40f && (d = _0x1ce057(d)),
        d.create = function() {
            return new _0x2990c1();
        }
        ,
        d.update = function(b) {
            return d.create().update(b);
        }
        ;
        for (var b = 0; b < _0x1a347c.length; ++b) {
            var c = _0x1a347c[b];
            d[c] = _0x2c9f28(c);
        }
        return d;
    }
      , _0x1ce057 = function(_0x2b6000) {
        var _0x3975af = eval("require('crypto');")
          , _0x560af1 = eval("require('buffer')['Buffer'];")
          , _0xb7cca7 = function(d) {
            if ("string" == typeof d) {
                return _0x3975af.createHash("md5").update(d, "utf8").digest("hex");
            }
            if (null == d) {
                throw _0x6f3306;
            }
            return d.constructor === ArrayBuffer && (d = new Uint8Array(d)),
            Array.isArray(d) || ArrayBuffer.isView(d) || d.constructor === _0x560af1 ? _0x3975af.createHash("md5").update(new _0x560af1(d)).digest("hex") : _0x2b6000(d);
        };
        return _0xb7cca7;
    };
    function _0x2990c1(d) {
        if (d) {
            _0x576fda[0] = _0x576fda[16] = _0x576fda[1] = _0x576fda[2] = _0x576fda[3] = _0x576fda[4] = _0x576fda[5] = _0x576fda[6] = _0x576fda[7] = _0x576fda[8] = _0x576fda[9] = _0x576fda[10] = _0x576fda[11] = _0x576fda[12] = _0x576fda[13] = _0x576fda[14] = _0x576fda[15] = 0,
            this.blocks = _0x576fda,
            this.buffer8 = _0x13364a;
        } else if (_0x4047c4) {
            var b = new ArrayBuffer(68);
            this.buffer8 = new Uint8Array(b),
            this.blocks = new Uint32Array(b);
        } else {
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
        this.finalized = this.hashed = !1,
        this.first = !0;
    }
    _0x2990c1.prototype.update = function(d) {
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
            for (var a, e, f = 0, t = d.length, n = this.blocks, o = this.buffer8; f < t; ) {
                if (this.hashed && (this.hashed = !1,
                n[0] = n[16],
                n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0),
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
                        (a = d.charCodeAt(f)) < 128 ? o[e++] = a : a < 2048 ? (o[e++] = 192 | a >> 6,
                        o[e++] = 128 | 63 & a) : a < 55296 || a >= 57344 ? (o[e++] = 224 | a >> 12,
                        o[e++] = 128 | a >> 6 & 63,
                        o[e++] = 128 | 63 & a) : (a = 65536 + ((1023 & a) << 10 | 1023 & d.charCodeAt(++f)),
                        o[e++] = 240 | a >> 18,
                        o[e++] = 128 | a >> 12 & 63,
                        o[e++] = 128 | a >> 6 & 63,
                        o[e++] = 128 | 63 & a);
                    }
                } else {
                    for (e = this.start; f < t && e < 64; ++f) {
                        (a = d.charCodeAt(f)) < 128 ? n[e >> 2] |= a << _0x4c607c[3 & e++] : a < 2048 ? (n[e >> 2] |= (192 | a >> 6) << _0x4c607c[3 & e++],
                        n[e >> 2] |= (128 | 63 & a) << _0x4c607c[3 & e++]) : a < 55296 || a >= 57344 ? (n[e >> 2] |= (224 | a >> 12) << _0x4c607c[3 & e++],
                        n[e >> 2] |= (128 | a >> 6 & 63) << _0x4c607c[3 & e++],
                        n[e >> 2] |= (128 | 63 & a) << _0x4c607c[3 & e++]) : (a = 65536 + ((1023 & a) << 10 | 1023 & d.charCodeAt(++f)),
                        n[e >> 2] |= (240 | a >> 18) << _0x4c607c[3 & e++],
                        n[e >> 2] |= (128 | a >> 12 & 63) << _0x4c607c[3 & e++],
                        n[e >> 2] |= (128 | a >> 6 & 63) << _0x4c607c[3 & e++],
                        n[e >> 2] |= (128 | 63 & a) << _0x4c607c[3 & e++]);
                    }
                }
                this.lastByteIndex = e,
                this.bytes += e - this.start,
                e >= 64 ? (this.start = e - 64,
                this.hash(),
                this.hashed = !0) : this.start = e;
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
            this.bytes = this.bytes % 4294967296),
            this;
        }
    }
    ,
    _0x2990c1.prototype.finalize = function() {
        if (!this.finalized) {
            this.finalized = !0;
            var d = this.blocks
              , b = this.lastByteIndex;
            d[b >> 2] |= _0x5e7525[3 & b],
            b >= 56 && (this.hashed || this.hash(),
            d[0] = d[16],
            d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0),
            d[14] = this.bytes << 3,
            d[15] = this.hBytes << 3 | this.bytes >>> 29,
            this.hash();
        }
    }
    ,
    _0x2990c1.prototype.hash = function() {
        var d, b, c, a, e, f, t = this.blocks;
        this.first ? b = ((b = ((d = ((d = t[0] - 680876937) << 7 | d >>> 25) - 271733879 << 0) ^ (c = ((c = (-271733879 ^ (a = ((a = (-1732584194 ^ 2004318071 & d) + t[1] - 117830708) << 12 | a >>> 20) + d << 0) & (-271733879 ^ d)) + t[2] - 1126478375) << 17 | c >>> 15) + a << 0) & (a ^ d)) + t[3] - 1316259209) << 22 | b >>> 10) + c << 0 : (d = this.h0,
        b = this.h1,
        c = this.h2,
        b = ((b += ((d = ((d += ((a = this.h3) ^ b & (c ^ a)) + t[0] - 680876936) << 7 | d >>> 25) + b << 0) ^ (c = ((c += (b ^ (a = ((a += (c ^ d & (b ^ c)) + t[1] - 389564586) << 12 | a >>> 20) + d << 0) & (d ^ b)) + t[2] + 606105819) << 17 | c >>> 15) + a << 0) & (a ^ d)) + t[3] - 1044525330) << 22 | b >>> 10) + c << 0),
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
        this.first ? (this.h0 = d + 1732584193 << 0,
        this.h1 = b - 271733879 << 0,
        this.h2 = c - 1732584194 << 0,
        this.h3 = a + 271733878 << 0,
        this.first = !1) : (this.h0 = this.h0 + d << 0,
        this.h1 = this.h1 + b << 0,
        this.h2 = this.h2 + c << 0,
        this.h3 = this.h3 + a << 0);
    }
    ,
    _0x2990c1.prototype.hex = function() {
        this.finalize();
        var d = this.h0
          , b = this.h1
          , c = this.h2
          , a = this.h3;
        return _0x4afdd8[d >> 4 & 15] + _0x4afdd8[15 & d] + _0x4afdd8[d >> 12 & 15] + _0x4afdd8[d >> 8 & 15] + _0x4afdd8[d >> 20 & 15] + _0x4afdd8[d >> 16 & 15] + _0x4afdd8[d >> 28 & 15] + _0x4afdd8[d >> 24 & 15] + _0x4afdd8[b >> 4 & 15] + _0x4afdd8[15 & b] + _0x4afdd8[b >> 12 & 15] + _0x4afdd8[b >> 8 & 15] + _0x4afdd8[b >> 20 & 15] + _0x4afdd8[b >> 16 & 15] + _0x4afdd8[b >> 28 & 15] + _0x4afdd8[b >> 24 & 15] + _0x4afdd8[c >> 4 & 15] + _0x4afdd8[15 & c] + _0x4afdd8[c >> 12 & 15] + _0x4afdd8[c >> 8 & 15] + _0x4afdd8[c >> 20 & 15] + _0x4afdd8[c >> 16 & 15] + _0x4afdd8[c >> 28 & 15] + _0x4afdd8[c >> 24 & 15] + _0x4afdd8[a >> 4 & 15] + _0x4afdd8[15 & a] + _0x4afdd8[a >> 12 & 15] + _0x4afdd8[a >> 8 & 15] + _0x4afdd8[a >> 20 & 15] + _0x4afdd8[a >> 16 & 15] + _0x4afdd8[a >> 28 & 15] + _0x4afdd8[a >> 24 & 15];
    }
    ,
    _0x2990c1.prototype.toString = _0x2990c1.prototype.hex,
    _0x2990c1.prototype.digest = function() {
        this.finalize();
        var d = this.h0
          , b = this.h1
          , c = this.h2
          , a = this.h3;
        return [255 & d, d >> 8 & 255, d >> 16 & 255, d >> 24 & 255, 255 & b, b >> 8 & 255, b >> 16 & 255, b >> 24 & 255, 255 & c, c >> 8 & 255, c >> 16 & 255, c >> 24 & 255, 255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255];
    }
    ,
    _0x2990c1.prototype.array = _0x2990c1.prototype.digest,
    _0x2990c1.prototype.arrayBuffer = function() {
        this.finalize();
        var d = new ArrayBuffer(16)
          , b = new Uint32Array(d);
        return b[0] = this.h0,
        b[1] = this.h1,
        b[2] = this.h2,
        b[3] = this.h3,
        d;
    }
    ,
    _0x2990c1.prototype.buffer = _0x2990c1.prototype.arrayBuffer,
    _0x2990c1.prototype.base64 = function() {
        for (var d, b, c, a = "", e = this.array(), f = 0; f < 15; ) {
            d = e[f++],
            b = e[f++],
            c = e[f++],
            a += _0x95df16[d >>> 2] + _0x95df16[63 & (d << 4 | b >>> 4)] + _0x95df16[63 & (b << 2 | c >>> 6)] + _0x95df16[63 & c];
        }
        return d = e[f],
        a + (_0x95df16[d >>> 2] + _0x95df16[d << 4 & 63] + "==");
    }
    ;
    return _0x2c9f28;
};
var _0x3f8b9d = function (){
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
        debug: function(d, b) {
            let c = !1;
            c = _0x4e609e.boe;
        }
    }, _0xa8e12c = "0123456789abcdef".split(""), _0x42094e = [], _0x4d169f = [], _0x23dbf4 = 0; _0x23dbf4 < 256; _0x23dbf4++) {
        _0x42094e[_0x23dbf4] = _0xa8e12c[_0x23dbf4 >> 4 & 15] + _0xa8e12c[15 & _0x23dbf4],
        _0x23dbf4 < 16 && (_0x23dbf4 < 10 ? _0x4d169f[48 + _0x23dbf4] = _0x23dbf4 : _0x4d169f[87 + _0x23dbf4] = _0x23dbf4);
    }
    var _0x1c1a22 = function(d) {
        for (var b = d.length, c = "", a = 0; a < b; ) {
            c += _0x42094e[d[a++]];
        }
        return c;
    }, _0x3e2bb3 = function(d) {
        for (var b = d.length >> 1, c = b << 1, a = new Uint8Array(b), e = 0, f = 0; f < c; ) {
            a[e++] = _0x4d169f[d.charCodeAt(f++)] << 4 | _0x4d169f[d.charCodeAt(f++)];
        }
        return a;
    }, _0x3f8b9d = {
        encode: _0x1c1a22,
        decode: _0x3e2bb3
    }
    return _0x3f8b9d;
}()
function _0x37c272(d, b, c, a, e) {
    _0x5eb4cb = {
        "bogusIndex": 6,
        "msNewTokenList": [],
        "moveList": [],
        "clickList": [],
        "keyboardList": [],
        "activeState": [],
        "aidList": [
            6383
        ],
        "envcode": 1,
        "msStatus": 5,
        "__ac_testid": "",
        "ttwid": "",
        "tt_webid": "",
        "tt_webid_v2": "",
        "PLUGIN": "PDF Viewerinternal-pdf-viewerapplication/pdftext/pdf##Chrome PDF Viewerinternal-pdf-viewerapplication/pdftext/pdf##Chromium PDF Viewerinternal-pdf-viewerapplication/pdftext/pdf##Microsoft Edge PDF Viewerinternal-pdf-viewerapplication/pdftext/pdf##WebKit built-in PDFinternal-pdf-viewerapplication/pdftext/pdf",
        "GPUINFO": "Google Inc. (Google)/ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)"
    };
    let _0x5d7e6e = {ubcode: 14};
    // _0x285152(), _0xb14de5(), void 0 !== a && "" !== a && (a = "");
    let f = "d41d8cd98f00b204e9800998ecf8427e";
    e || (e = "00000000000000000000000000000000");
    let t = new ArrayBuffer(9), n = new Uint8Array(t), o = 0 | d << 6 | b << 5 | (1 & Math.floor(100 * Math.random())) << 4 | 0;
    _0x5eb4cb.bogusIndex++;
    let i = 63 & _0x5eb4cb.bogusIndex;
    n[0] = c << 6 | i, n[1] = _0x5eb4cb.envcode >> 8 & 255, n[2] = 255 & _0x5eb4cb.envcode,
    n[3] = _0x5d7e6e.ubcode;
    let r = _0x3f8b9d.decode(_0xf55c3f()("hex", _0x3f8b9d.decode(f)));
    n[4] = r[14], n[5] = r[15];
    let _ = _0x3f8b9d.decode(_0xf55c3f()("hex", _0x3f8b9d.decode(e)));
    return n[6] = _[14], n[7] = _[15], n[8] = 255 & Math.floor(255 * Math.random()),
    _0x2f7b3a(o, n);
}
function _0x138914(d, b) {
    let c, a = [], e = 0, f = "";
    for (let d = 0; d < 256; d++) {
        a[d] = d;
    }
    for (let b = 0; b < 256; b++) {
        e = (e + a[b] + d.charCodeAt(b % d.length)) % 256,
        c = a[b],
        a[b] = a[e],
        a[e] = c;
    }
    let t = 0;
    e = 0;
    for (let d = 0; d < b.length; d++) {
        t = (t + 1) % 256,
        e = (e + a[t]) % 256,
        c = a[t],
        a[t] = a[e],
        a[e] = c,
        f += String.fromCharCode(b.charCodeAt(d) ^ a[(a[t] + a[e]) % 256]);
    }
    return f;
}
function _0x2f7b3a(d, b) {
    let c = b.length
      , a = new ArrayBuffer(c + 1)
      , e = new Uint8Array(a)
      , f = 0;
    for (let d = 0; d < c; d++) {
        e[d] = b[d],
        f ^= b[d];
    }
    e[c] = f;
    let t = 255 & Math.floor(255 * Math.random())
      , n = String.fromCharCode.apply(null, e)
      , o = _0x138914(String.fromCharCode(t), n);
      var i = "";
        return i += String.fromCharCode(d),
        i += String.fromCharCode(t),
        i += o;
}


// 乱码字符串生成XBogus
function getStr(key,number){
    str = "";
    str += key.charAt(number >> 18);
    str += key.charAt((number & 258048) >> 12);
    str += key.charAt((number & 4032) >> 6);
    str += key.charAt(number & 63);
    return str;
}
function get_number(t) {
    var pp = [];
    for (let index = 0; index < t.length; index++) {
        if (index % 3 == 0){
            debugger;
            temp_1 = t.charCodeAt(index) << 16;
            temp_2 = t.charCodeAt(index + 1) << 8;
            temp_3 = temp_1 + temp_2 + t.charCodeAt(index + 2);
            pp.push(temp_3);
        }
    }
    return pp;
}
function XBogus(Aas_str){
    let XBogus_ = "";
    let Key = "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=";
    let arr = get_number(Aas_str);
    for (let index = 0; index < arr.length; index++) {
        XBogus_ += getStr(Key, arr[index]);
    }
    return XBogus_;
}

// 测试
function test(n1){
    l = window.kkk(84465)
    , g = window.kkk.n(l);
    return XBogus(_0x37c272(1, true, 0, null, g()(n1.substring(1))))
}

// console.log(test('7212102135369009981'))