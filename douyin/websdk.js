// ============================ strData ============================
KEY = 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=';

function bytes_to_string (a, b, c) {
    let d = KEY
        , e = '=';
    c && (e = '');
    b && (d = b);
    let g = '', h = 0;
    for (; a['length'] >= h + 3; ){
        let f = 0;
        f = f | a['charCodeAt'](h++) << 16
        f = f | a['charCodeAt'](h++) << 8
        f = f | a['charCodeAt'](h++) << 0;
        g += d[(16515072 & f) >> 18];
        g += d[(258048 & f) >> 12];
        g += d[(4032 & f) >> 6];
        g += d[63 & f];
    }
    return a['length'] - h > 0 && (f = (255 & a['charCodeAt'](h++)) << 16 | (a['length'] > h ? (255 & a['charCodeAt'](h)) << 8 : 0),
        g += d['charAt']((16515072 & f) >> 18),
        g += d['charAt']((258048 & f) >> 12),
        g += a['length'] > h ? d['charAt']((4032 & f) >> 6) : e,
        g += e),
        g;
}

function strData (x, y) {
    let  b = [], c = 0, d = "";
    for (let i = 0; i < 256; i++) {
        b[i] = i;
    }
    for (let i = 0; i < 256; i++) {
        c = (c + b[i] + x["charCodeAt"](i % x["length"])) % 256;
        a = b[i];
        b[i] = b[c];
        b[c] = a;
    }
    let e = 0;
    c = 0;
    for (let i = 0; i < y["length"]; i++) {
        e = (e + 1) % 256;
        c = (c + b[e]) % 256;
        a = b[e];
        b[e] = b[c];
        b[c] = a;
        d += String["fromCharCode"](y["charCodeAt"](i) ^ b[(b[e] + b[c]) % 256]);
    }
    return d;
}

function randomNum (minNum, maxNum) {
    switch (arguments.length){
        case 1:
            return parseInt(Math.random() * minNum + 1,10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum,10);
            break;
        default:
            return 0;
            break;
    }
}

function encrypt_strData (text) {
    if (typeof(text) == 'object')
        text = JSON.stringify(text)
    let key_num = randomNum(200, 256)
    let temp = String.fromCharCode.apply(null, [65, key_num]) + strData(String.fromCharCode(key_num), text);
    return bytes_to_string(temp)
}

// ============================ X-Bogus ============================
var _0x3c6322 = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
var _0x50ff23 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 10, 11, 12, 13, 14, 15];

var _0x1f3d3b = function (_0x5ac7ec) {
        for (var _0x34905b = _0x5ac7ec['length'], _0x44b5b7 = '', _0x68d4f2 = 0; _0x68d4f2 < _0x34905b; )
            _0x44b5b7 += _0x3c6322[_0x5ac7ec[_0x68d4f2++]];
        return _0x44b5b7;
    },
    _0x237a87 = function (_0x5c3d2a) {
        for (var _0x1204d6 = _0x5c3d2a['length'] >> 1, _0x700552 = _0x1204d6 << 1, _0x1673dd = new Uint8Array(_0x1204d6), _0x19eb71 = 0, _0x249396 = 0; _0x249396 < _0x700552; )
            _0x1673dd[_0x19eb71++] = _0x50ff23[_0x5c3d2a['charCodeAt'](_0x249396++)] << 4 | _0x50ff23[_0x5c3d2a['charCodeAt'](_0x249396++)];
        return _0x1673dd;
    },
    Hex = {
        'encode': _0x1f3d3b,
        'decode': _0x237a87
    };

function _0x2b1419(_0x1a3c83) {
    var _0x408a74 = {
        'exports': {}
    };
    return _0x1a3c83(_0x408a74, _0x408a74['exports']),
        _0x408a74['exports'];
}

var _0x522be9 = _0x2b1419(function (_0x5338f3) {
        !function () {
            var _0x10d7cc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                _0x485084 = {
                    'rotl': function (_0x399d32, _0xbcfbfb) {
                        return _0x399d32 << _0xbcfbfb | _0x399d32 >>> 32 - _0xbcfbfb;
                    },
                    'rotr': function (_0x34bbe0, _0x39326b) {
                        return _0x34bbe0 << 32 - _0x39326b | _0x34bbe0 >>> _0x39326b;
                    },
                    'endian': function (_0x18b9a6) {
                        if (_0x18b9a6['constructor'] == Number)
                            return 16711935 & _0x485084['rotl'](_0x18b9a6, 8) | 4278255360 & _0x485084['rotl'](_0x18b9a6, 24);

                        for (var _0x2b9dac = 0; _0x2b9dac < _0x18b9a6['length']; _0x2b9dac++)
                            _0x18b9a6[_0x2b9dac] = _0x485084['endian'](_0x18b9a6[_0x2b9dac]);

                        return _0x18b9a6;
                    },
                    'randomBytes': function (_0x243867) {
                        for (var _0x53efd7 = []; _0x243867 > 0; _0x243867--)
                            _0x53efd7['push'](Math['floor'](256 * Math['random']()));

                        return _0x53efd7;
                    },
                    'bytesToWords': function (_0x4b67bc) {
                        for (var _0x52088d = [], _0x414454 = 0, _0x1ccc46 = 0; _0x414454 < _0x4b67bc['length']; _0x414454++, _0x1ccc46 += 8)
                            _0x52088d[_0x1ccc46 >>> 5] |= _0x4b67bc[_0x414454] << 24 - _0x1ccc46 % 32;

                        return _0x52088d;
                    },
                    'wordsToBytes': function (_0x389d89) {
                        for (var _0x533c36 = [], _0x1d361a = 0; _0x1d361a < 32 * _0x389d89['length']; _0x1d361a += 8)
                            _0x533c36['push'](_0x389d89[_0x1d361a >>> 5] >>> 24 - _0x1d361a % 32 & 255);

                        return _0x533c36;
                    },
                    'bytesToHex': function (_0x563df3) {
                        for (var _0x1ff846 = [], _0x1b16d2 = 0; _0x1b16d2 < _0x563df3['length']; _0x1b16d2++)
                            _0x1ff846['push']((_0x563df3[_0x1b16d2] >>> 4)['toString'](16)), _0x1ff846['push']((15 & _0x563df3[_0x1b16d2])['toString'](16));

                        return _0x1ff846['join']('');
                    },
                    'hexToBytes': function (_0x18dd40) {
                        for (var _0x283d66 = [], _0x447560 = 0; _0x447560 < _0x18dd40['length']; _0x447560 += 2)
                            _0x283d66['push'](parseInt(_0x18dd40['substr'](_0x447560, 2), 16));

                        return _0x283d66;
                    },
                    'bytesToBase64': function (_0x5c9156) {
                        for (var _0x4571f8 = [], _0x3d51bf = 0; _0x3d51bf < _0x5c9156['length']; _0x3d51bf += 3)
                            for (var _0xe1b6c2 = _0x5c9156[_0x3d51bf] << 16 | _0x5c9156[_0x3d51bf + 1] << 8 | _0x5c9156[_0x3d51bf + 2], _0x3aa643 = 0; _0x3aa643 < 4; _0x3aa643++)
                                8 * _0x3d51bf + 6 * _0x3aa643 <= 8 * _0x5c9156['length'] ? _0x4571f8['push'](_0x10d7cc['charAt'](_0xe1b6c2 >>> 6 * (3 - _0x3aa643) & 63)) : _0x4571f8['push']('=');

                        return _0x4571f8['join']('');
                    },
                    'base64ToBytes': function (_0x4f0ceb) {
                        _0x4f0ceb = _0x4f0ceb['replace'](/[^A-Z0-9+\/]/gi, '');

                        for (var _0x953172 = [], _0x19d29a = 0, _0x5bec73 = 0; _0x19d29a < _0x4f0ceb['length']; _0x5bec73 = ++_0x19d29a % 4)
                            0 != _0x5bec73 && _0x953172['push']((_0x10d7cc['indexOf'](_0x4f0ceb['charAt'](_0x19d29a - 1)) & Math['pow'](2, -2 * _0x5bec73 + 8) - 1) << 2 * _0x5bec73 | _0x10d7cc['indexOf'](_0x4f0ceb['charAt'](_0x19d29a)) >>> 6 - 2 * _0x5bec73);

                        return _0x953172;
                    }
                };
            _0x5338f3['exports'] = _0x485084;
        }
        ();
    }),
    _0x43f7d5 = {
        'utf8': {
            'stringToBytes': function (_0x3ecb9e) {
                return _0x43f7d5['bin']['stringToBytes'](unescape(encodeURIComponent(_0x3ecb9e)));
            },
            'bytesToString': function (_0x577703) {
                return decodeURIComponent(escape(_0x43f7d5['bin']['bytesToString'](_0x577703)));
            }
        },
        'bin': {
            'stringToBytes': function (_0x2b796a) {
                for (var _0x83a3c1 = [], _0x2b558b = 0; _0x2b558b < _0x2b796a['length']; _0x2b558b++)
                    _0x83a3c1['push'](255 & _0x2b796a['charCodeAt'](_0x2b558b));

                return _0x83a3c1;
            },
            'bytesToString': function (_0x2f2515) {
                for (var _0x56610e = [], _0x3415a9 = 0; _0x3415a9 < _0x2f2515['length']; _0x3415a9++)
                    _0x56610e['push'](String['fromCharCode'](_0x2f2515[_0x3415a9]));

                return _0x56610e['join']('');
            }
        }
    },
    _0x34cd71 = function (_0x51f280) {
        return null != _0x51f280 && (_0x1b5b56(_0x51f280) || _0x16238e(_0x51f280) || !!_0x51f280['_isBuffer']);
    };

function _0x1b5b56(_0x1b9428) {
    return !!_0x1b9428['constructor'] && 'function' == typeof _0x1b9428['constructor']['isBuffer'] && _0x1b9428['constructor']['isBuffer'](_0x1b9428);
}

function _0x16238e(_0x23735f) {
    return 'function' == typeof _0x23735f['readFloatLE'] && 'function' == typeof _0x23735f['slice'] && _0x1b5b56(_0x23735f['slice'](0, 0));
}

var _0xf220d2 = _0x2b1419(function (_0x18e32f) {
    !function () {
        var _0x5e1216 = _0x43f7d5['utf8'],
            _0x37dba4 = _0x43f7d5['bin'],
            _0x3c1bff = function (_0x3481d8, _0x53f008) {
                _0x3481d8['constructor'] == String ? _0x3481d8 = _0x53f008 && 'binary' === _0x53f008['encoding'] ? _0x37dba4['stringToBytes'](_0x3481d8) : _0x5e1216['stringToBytes'](_0x3481d8) : _0x34cd71(_0x3481d8) ? _0x3481d8 = Array['prototype']['slice']['call'](_0x3481d8, 0) : Array['isArray'](_0x3481d8) || _0x3481d8['constructor'] === Uint8Array || (_0x3481d8 = _0x3481d8['toString']());

                for (var _0x14f8b4 = _0x522be9['bytesToWords'](_0x3481d8), _0x500746 = 8 * _0x3481d8['length'], _0x58fa30 = 1732584193, _0x5a63d0 = -271733879, _0xfa952 = -1732584194, _0x38d239 = 271733878, _0x474622 = 0; _0x474622 < _0x14f8b4['length']; _0x474622++)
                    _0x14f8b4[_0x474622] = 16711935 & (_0x14f8b4[_0x474622] << 8 | _0x14f8b4[_0x474622] >>> 24) | 4278255360 & (_0x14f8b4[_0x474622] << 24 | _0x14f8b4[_0x474622] >>> 8);

                _0x14f8b4[_0x500746 >>> 5] |= 128 << _0x500746 % 32,
                    _0x14f8b4[14 + (_0x500746 + 64 >>> 9 << 4)] = _0x500746;
                var _0x140544 = _0x3c1bff['_ff'],
                    _0x25553e = _0x3c1bff['_gg'],
                    _0x236490 = _0x3c1bff['_hh'],
                    _0x45bb0a = _0x3c1bff['_ii'];

                for (_0x474622 = 0; _0x474622 < _0x14f8b4['length']; _0x474622 += 16) {
                    var _0x235199 = _0x58fa30,
                        _0x365440 = _0x5a63d0,
                        _0x56f863 = _0xfa952,
                        _0x54bd03 = _0x38d239;
                    _0x58fa30 = _0x140544(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 0], 7, -680876936),
                        _0x38d239 = _0x140544(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 1], 12, -389564586),
                        _0xfa952 = _0x140544(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 2], 17, 606105819),
                        _0x5a63d0 = _0x140544(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 3], 22, -1044525330),
                        _0x58fa30 = _0x140544(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 4], 7, -176418897),
                        _0x38d239 = _0x140544(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 5], 12, 1200080426),
                        _0xfa952 = _0x140544(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 6], 17, -1473231341),
                        _0x5a63d0 = _0x140544(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 7], 22, -45705983),
                        _0x58fa30 = _0x140544(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 8], 7, 1770035416),
                        _0x38d239 = _0x140544(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 9], 12, -1958414417),
                        _0xfa952 = _0x140544(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 10], 17, -42063),
                        _0x5a63d0 = _0x140544(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 11], 22, -1990404162),
                        _0x58fa30 = _0x140544(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 12], 7, 1804603682),
                        _0x38d239 = _0x140544(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 13], 12, -40341101),
                        _0xfa952 = _0x140544(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 14], 17, -1502002290),
                        _0x58fa30 = _0x25553e(_0x58fa30, _0x5a63d0 = _0x140544(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 15], 22, 1236535329), _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 1], 5, -165796510),
                        _0x38d239 = _0x25553e(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 6], 9, -1069501632),
                        _0xfa952 = _0x25553e(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 11], 14, 643717713),
                        _0x5a63d0 = _0x25553e(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 0], 20, -373897302),
                        _0x58fa30 = _0x25553e(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 5], 5, -701558691),
                        _0x38d239 = _0x25553e(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 10], 9, 38016083),
                        _0xfa952 = _0x25553e(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 15], 14, -660478335),
                        _0x5a63d0 = _0x25553e(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 4], 20, -405537848),
                        _0x58fa30 = _0x25553e(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 9], 5, 568446438),
                        _0x38d239 = _0x25553e(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 14], 9, -1019803690),
                        _0xfa952 = _0x25553e(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 3], 14, -187363961),
                        _0x5a63d0 = _0x25553e(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 8], 20, 1163531501),
                        _0x58fa30 = _0x25553e(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 13], 5, -1444681467),
                        _0x38d239 = _0x25553e(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 2], 9, -51403784),
                        _0xfa952 = _0x25553e(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 7], 14, 1735328473),
                        _0x58fa30 = _0x236490(_0x58fa30, _0x5a63d0 = _0x25553e(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 12], 20, -1926607734), _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 5], 4, -378558),
                        _0x38d239 = _0x236490(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 8], 11, -2022574463),
                        _0xfa952 = _0x236490(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 11], 16, 1839030562),
                        _0x5a63d0 = _0x236490(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 14], 23, -35309556),
                        _0x58fa30 = _0x236490(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 1], 4, -1530992060),
                        _0x38d239 = _0x236490(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 4], 11, 1272893353),
                        _0xfa952 = _0x236490(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 7], 16, -155497632),
                        _0x5a63d0 = _0x236490(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 10], 23, -1094730640),
                        _0x58fa30 = _0x236490(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 13], 4, 681279174),
                        _0x38d239 = _0x236490(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 0], 11, -358537222),
                        _0xfa952 = _0x236490(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 3], 16, -722521979),
                        _0x5a63d0 = _0x236490(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 6], 23, 76029189),
                        _0x58fa30 = _0x236490(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 9], 4, -640364487),
                        _0x38d239 = _0x236490(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 12], 11, -421815835),
                        _0xfa952 = _0x236490(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 15], 16, 530742520),
                        _0x58fa30 = _0x45bb0a(_0x58fa30, _0x5a63d0 = _0x236490(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 2], 23, -995338651), _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 0], 6, -198630844),
                        _0x38d239 = _0x45bb0a(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 7], 10, 1126891415),
                        _0xfa952 = _0x45bb0a(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 14], 15, -1416354905),
                        _0x5a63d0 = _0x45bb0a(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 5], 21, -57434055),
                        _0x58fa30 = _0x45bb0a(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 12], 6, 1700485571),
                        _0x38d239 = _0x45bb0a(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 3], 10, -1894986606),
                        _0xfa952 = _0x45bb0a(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 10], 15, -1051523),
                        _0x5a63d0 = _0x45bb0a(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 1], 21, -2054922799),
                        _0x58fa30 = _0x45bb0a(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 8], 6, 1873313359),
                        _0x38d239 = _0x45bb0a(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 15], 10, -30611744),
                        _0xfa952 = _0x45bb0a(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 6], 15, -1560198380),
                        _0x5a63d0 = _0x45bb0a(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 13], 21, 1309151649),
                        _0x58fa30 = _0x45bb0a(_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239, _0x14f8b4[_0x474622 + 4], 6, -145523070),
                        _0x38d239 = _0x45bb0a(_0x38d239, _0x58fa30, _0x5a63d0, _0xfa952, _0x14f8b4[_0x474622 + 11], 10, -1120210379),
                        _0xfa952 = _0x45bb0a(_0xfa952, _0x38d239, _0x58fa30, _0x5a63d0, _0x14f8b4[_0x474622 + 2], 15, 718787259),
                        _0x5a63d0 = _0x45bb0a(_0x5a63d0, _0xfa952, _0x38d239, _0x58fa30, _0x14f8b4[_0x474622 + 9], 21, -343485551),
                        _0x58fa30 = _0x58fa30 + _0x235199 >>> 0,
                        _0x5a63d0 = _0x5a63d0 + _0x365440 >>> 0,
                        _0xfa952 = _0xfa952 + _0x56f863 >>> 0,
                        _0x38d239 = _0x38d239 + _0x54bd03 >>> 0;
                }

                return _0x522be9['endian']([_0x58fa30, _0x5a63d0, _0xfa952, _0x38d239]);
            };
        _0x3c1bff['_ff'] = function (_0x39d6ff, _0xf44b81, _0x6e1fd8, _0x537a5d, _0x473a43, _0x1d47fe, _0x396c93) {
            var _0x20d237 = _0x39d6ff + (_0xf44b81 & _0x6e1fd8 | ~_0xf44b81 & _0x537a5d) + (_0x473a43 >>> 0) + _0x396c93;
            return (_0x20d237 << _0x1d47fe | _0x20d237 >>> 32 - _0x1d47fe) + _0xf44b81;
        },
            _0x3c1bff['_gg'] = function (_0x38be71, _0x46f056, _0xcdfe0b, _0x28f534, _0x15caff, _0x2e1b18, _0x2b54bf) {
                var _0xe03481 = _0x38be71 + (_0x46f056 & _0x28f534 | _0xcdfe0b & ~_0x28f534) + (_0x15caff >>> 0) + _0x2b54bf;
                return (_0xe03481 << _0x2e1b18 | _0xe03481 >>> 32 - _0x2e1b18) + _0x46f056;
            },
            _0x3c1bff['_hh'] = function (_0x47b307, _0x45f56f, _0x277ce6, _0x483b1b, _0xd50cbf, _0x164d53, _0x459b9f) {
                var _0x9e8d61 = _0x47b307 + (_0x45f56f ^ _0x277ce6 ^ _0x483b1b) + (_0xd50cbf >>> 0) + _0x459b9f;
                return (_0x9e8d61 << _0x164d53 | _0x9e8d61 >>> 32 - _0x164d53) + _0x45f56f;
            },
            _0x3c1bff['_ii'] = function (_0x17a9fb, _0x5a4323, _0x49d45d, _0x3cbe9a, _0x301e85, _0x19e288, _0x53cfd0) {
                var _0x5a8ab2 = _0x17a9fb + (_0x49d45d ^ (_0x5a4323 | ~_0x3cbe9a)) + (_0x301e85 >>> 0) + _0x53cfd0;
                return (_0x5a8ab2 << _0x19e288 | _0x5a8ab2 >>> 32 - _0x19e288) + _0x5a4323;
            },
            _0x3c1bff['_blocksize'] = 16,
            _0x3c1bff['_digestsize'] = 16,
            _0x18e32f['exports'] = function (_0x369546, _0x237ff3) {
                if (null == _0x369546)
                    throw new Error("Illegal argument " + _0x369546);

                var _0x1869a2 = _0x522be9['wordsToBytes'](_0x3c1bff(_0x369546, _0x237ff3));
                return _0x237ff3 && _0x237ff3['asBytes'] ? _0x1869a2 : _0x237ff3 && _0x237ff3['asString'] ? _0x37dba4['bytesToString'](_0x1869a2) : _0x522be9['bytesToHex'](_0x1869a2);
            };
    }();
});

function encodeWithKey(Key, Data) {
    let Temp1,
        Result = [],
        Temp = 0,
        Output = '';

    for (let i = 0; i < 256; i++)
        Result[i] = i;

    for (let i = 0; i < 256; i++)
        //Temp = (Temp + Result[i] + Key['charCodeAt'](i % Key['length'])) % 256, Temp1 = Result[i], Result[i] = Result[Temp], Result[Temp] = Temp1;
        Temp = (Temp + Result[i] + Key[(i % Key['length'])]) % 256, Temp1 = Result[i], Result[i] = Result[Temp], Result[Temp] = Temp1;

    let Temp2 = 0;
    Temp = 0;

    for (let _0x1b288d = 0; _0x1b288d < Data['length']; _0x1b288d++)
        Temp2 = (Temp2 + 1) % 256, Temp = (Temp + Result[Temp2]) % 256, Temp1 = Result[Temp2], Result[Temp2] = Result[Temp], Result[Temp] = Temp1, Output += String['fromCharCode'](Data['charCodeAt'](_0x1b288d) ^ Result[(Result[Temp2] + Result[Temp]) % 256]);

    return Output;
};

function Base64Encode(Data, Map, E) {
    let Map1 = 'Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=',
        End = '=';
    E && (End = ''),
    Map && (Map1 = Map);
    let Temp,
        Result = '',
        i = 0;
    for (; Data['length'] >= i + 3; )
        Temp = (255 & Data['charCodeAt'](i++)) << 16 | (255 & Data['charCodeAt'](i++)) << 8 | 255 & Data['charCodeAt'](i++), Result += Map1['charAt']((16515072 & Temp) >> 18), Result += Map1['charAt']((258048 & Temp) >> 12), Result += Map1['charAt']((4032 & Temp) >> 6), Result += Map1['charAt'](63 & Temp);
    return Data['length'] - i > 0 && (Temp = (255 & Data['charCodeAt'](i++)) << 16 | (Data['length'] > i ? (255 & Data['charCodeAt'](i)) << 8 : 0), Result += Map1['charAt']((16515072 & Temp) >> 18), Result += Map1['charAt']((258048 & Temp) >> 12), Result += Data['length'] > i ? Map1['charAt']((4032 & Temp) >> 6) : End, Result += End),
        Result;
};

function GetCharCode(str) {
    var result = [];

    for (var i = 0; i < str["length"]; i++) {
        result["push"](str["charCodeAt"](i));
    }
    return result;
};

function GetStr(arr) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        result += String.fromCharCode(arr[i]);
    }
    return result;
};

function Int2Bytes(e) {
    var arr = [24, 16, 8, 0]
    for (var t = [], r = e, n = 0; n < 4; n++)
        t.push(r >> arr[n] & 255);
    return t
};

function Check(Code) {
    var result = 0;
    for (let i = 0; i < Code.length; i++) {
        result ^= Code[i];
    };
    return result;
};

function get_xb(Data, Parame, UA, canvas_hash) {
    var time = 1679135956//new Date().getTime() / 1000;
    var Bytes_Data = Hex.decode(_0xf220d2(Hex.decode(_0xf220d2(Data))));
    var Bytes_Parame = Hex.decode(_0xf220d2(Hex.decode(_0xf220d2(Parame))));
    var Bytes_Ua = encodeWithKey([0, 1, 12], UA);
    Bytes_Ua = Base64Encode(Bytes_Ua, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
    Bytes_Ua = Hex.decode(_0xf220d2(Bytes_Ua));
    time = Int2Bytes(time);
    var CanvasCode = Int2Bytes(canvas_hash);
    var OutPut = [64, 0, 1, 12].concat(Bytes_Data[14]).concat(Bytes_Data[15]).concat(Bytes_Parame[14]).concat(Bytes_Parame[15]).concat(Bytes_Ua[14]).concat(Bytes_Ua[15]);
    OutPut = OutPut.concat(time).concat(CanvasCode);
    OutPut = OutPut.concat(Check(OutPut));
    OutPut = encodeWithKey([255], GetStr(OutPut));
    OutPut = [2, 255].concat(GetCharCode(OutPut));
    return Base64Encode(GetStr(OutPut));
};

// ============================ getInfo q + long signature ============================
DELTA = 2654435769;

function bytes2string_1(a, b, c) {
    let d = 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe'
        , e = '=';
    c && (e = '');
    b && (d = b);
    let g = '', h = 0;
    for (; a['length'] >= h + 3; ){
        let f = 0;
        f = f | a['charCodeAt'](h++) << 16
        f = f | a['charCodeAt'](h++) << 8
        f = f | a['charCodeAt'](h++) << 0;
        g += d[(16515072 & f) >> 18];
        g += d[(258048 & f) >> 12];
        g += d[(4032 & f) >> 6];
        g += d[63 & f];
    }
    return a['length'] - h > 0 && (f = (255 & a['charCodeAt'](h++)) << 16 | (a['length'] > h ? (255 & a['charCodeAt'](h)) << 8 : 0),
        g += d['charAt']((16515072 & f) >> 18),
        g += d['charAt']((258048 & f) >> 12),
        g += a['length'] > h ? d['charAt']((4032 & f) >> 6) : e,
        g += e),
        g;
}

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function toBinaryString(v, includeLength) {
    var length = v.length;
    var n = length << 2;
    if (includeLength) {
        var m = v[length - 1];
        n -= 4;
        if ((m < n - 3) || (m > n)) {
            return null;
        }
        n = m;
    }
    for (var i = 0; i < length; i++) {
        v[i] = String.fromCharCode(
            v[i] & 0xFF,
            v[i] >>> 8 & 0xFF,
            v[i] >>> 16 & 0xFF,
            v[i] >>> 24 & 0xFF
        );
    }
    var result = v.join('');
    if (includeLength) {
        return result.substring(0, n);
    }
    return result;
}

function toUint32Array(bs, includeLength) {
    var length = bs.length;
    var n = length >> 2;
    if ((length & 3) !== 0) {
        ++n;
    }
    var v;
    if (includeLength) {
        v = new Array(n + 1);
        v[n] = length;
    }
    else {
        v = new Array(n);
    }
    for (var i = 0; i < length; ++i) {
        v[i >> 2] |= bs.charCodeAt(i) << ((i & 3) << 3);
    }
    return v;
}

function int32(i) {
    return i & 0xFFFFFFFF;
}

function mx(sum, y, z, p, e, k) {
    return ((z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4)) ^ ((sum ^ y) + (k[p & 3 ^ e] ^ z));
}

function fixk(k) {
    if (k.length < 4) k.length = 4;
    return k;
}

function encryptUint32Array(v, k) {
    var length = v.length;
    var n = length - 1;
    var y, z, sum, e, p, q;
    z = v[n];
    sum = 0;
    for (q = Math.floor(6 + 52 / length) | 0; q > 0; --q) {
        sum = int32(sum + DELTA);
        e = sum >>> 2 & 3;
        for (p = 0; p < n; ++p) {
            y = v[p + 1];
            z = v[p] = int32(v[p] + mx(sum, y, z, p, e, k));
        }
        y = v[0];
        z = v[n] = int32(v[n] + mx(sum, y, z, n, e, k));
    }
    return v;
}

function decryptUint32Array(v, k) {
    var length = v.length;
    var n = length - 1;
    var y, z, sum, e, p, q;
    y = v[0];
    q = Math.floor(6 + 52 / length);
    for (sum = int32(q * DELTA); sum !== 0; sum = int32(sum - DELTA)) {
        e = sum >>> 2 & 3;
        for (p = n; p > 0; --p) {
            z = v[p - 1];
            y = v[p] = int32(v[p] - mx(sum, y, z, p, e, k));
        }
        z = v[n];
        y = v[0] = int32(v[0] - mx(sum, y, z, 0, e, k));
    }
    return v;
}

function utf8Encode(str) {
    if (/^[\x00-\x7f]*$/.test(str)) {
        return str;
    }
    var buf = [];
    var n = str.length;
    for (var i = 0, j = 0; i < n; ++i, ++j) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit < 0x80) {
            buf[j] = str.charAt(i);
        }
        else if (codeUnit < 0x800) {
            buf[j] = String.fromCharCode(0xC0 | (codeUnit >> 6),
                0x80 | (codeUnit & 0x3F));
        }
        else if (codeUnit < 0xD800 || codeUnit > 0xDFFF) {
            buf[j] = String.fromCharCode(0xE0 | (codeUnit >> 12),
                0x80 | ((codeUnit >> 6) & 0x3F),
                0x80 | (codeUnit & 0x3F));
        }
        else {
            if (i + 1 < n) {
                var nextCodeUnit = str.charCodeAt(i + 1);
                if (codeUnit < 0xDC00 && 0xDC00 <= nextCodeUnit && nextCodeUnit <= 0xDFFF) {
                    var rune = (((codeUnit & 0x03FF) << 10) | (nextCodeUnit & 0x03FF)) + 0x010000;
                    buf[j] = String.fromCharCode(0xF0 | ((rune >> 18) & 0x3F),
                        0x80 | ((rune >> 12) & 0x3F),
                        0x80 | ((rune >> 6) & 0x3F),
                        0x80 | (rune & 0x3F));
                    ++i;
                    continue;
                }
            }
            throw new Error('Malformed string');
        }
    }
    return buf.join('');
}

function utf8DecodeShortString(bs, n) {
    var charCodes = new Array(n);
    var i = 0, off = 0;
    for (var len = bs.length; i < n && off < len; i++) {
        var unit = bs.charCodeAt(off++);
        switch (unit >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                charCodes[i] = unit;
                break;
            case 12:
            case 13:
                if (off < len) {
                    charCodes[i] = ((unit & 0x1F) << 6) |
                        (bs.charCodeAt(off++) & 0x3F);
                }
                else {
                    throw new Error('Unfinished UTF-8 octet sequence');
                }
                break;
            case 14:
                if (off + 1 < len) {
                    charCodes[i] = ((unit & 0x0F) << 12) |
                        ((bs.charCodeAt(off++) & 0x3F) << 6) |
                        (bs.charCodeAt(off++) & 0x3F);
                }
                else {
                    throw new Error('Unfinished UTF-8 octet sequence');
                }
                break;
            case 15:
                if (off + 2 < len) {
                    var rune = (((unit & 0x07) << 18) |
                        ((bs.charCodeAt(off++) & 0x3F) << 12) |
                        ((bs.charCodeAt(off++) & 0x3F) << 6) |
                        (bs.charCodeAt(off++) & 0x3F)) - 0x10000;
                    if (0 <= rune && rune <= 0xFFFFF) {
                        charCodes[i++] = (((rune >> 10) & 0x03FF) | 0xD800);
                        charCodes[i] = ((rune & 0x03FF) | 0xDC00);
                    }
                    else {
                        throw new Error('Character outside valid Unicode range: 0x' + rune.toString(16));
                    }
                }
                else {
                    throw new Error('Unfinished UTF-8 octet sequence');
                }
                break;
            default:
                throw new Error('Bad UTF-8 encoding 0x' + unit.toString(16));
        }
    }
    if (i < n) {
        charCodes.length = i;
    }
    return String.fromCharCode.apply(String, charCodes);
}

function utf8DecodeLongString(bs, n) {
    var buf = [];
    var charCodes = new Array(0x8000);
    var i = 0, off = 0;
    for (var len = bs.length; i < n && off < len; i++) {
        var unit = bs.charCodeAt(off++);
        switch (unit >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                charCodes[i] = unit;
                break;
            case 12:
            case 13:
                if (off < len) {
                    charCodes[i] = ((unit & 0x1F) << 6) |
                        (bs.charCodeAt(off++) & 0x3F);
                }
                else {
                    throw new Error('Unfinished UTF-8 octet sequence');
                }
                break;
            case 14:
                if (off + 1 < len) {
                    charCodes[i] = ((unit & 0x0F) << 12) |
                        ((bs.charCodeAt(off++) & 0x3F) << 6) |
                        (bs.charCodeAt(off++) & 0x3F);
                }
                else {
                    throw new Error('Unfinished UTF-8 octet sequence');
                }
                break;
            case 15:
                if (off + 2 < len) {
                    var rune = (((unit & 0x07) << 18) |
                        ((bs.charCodeAt(off++) & 0x3F) << 12) |
                        ((bs.charCodeAt(off++) & 0x3F) << 6) |
                        (bs.charCodeAt(off++) & 0x3F)) - 0x10000;
                    if (0 <= rune && rune <= 0xFFFFF) {
                        charCodes[i++] = (((rune >> 10) & 0x03FF) | 0xD800);
                        charCodes[i] = ((rune & 0x03FF) | 0xDC00);
                    }
                    else {
                        throw new Error('Character outside valid Unicode range: 0x' + rune.toString(16));
                    }
                }
                else {
                    throw new Error('Unfinished UTF-8 octet sequence');
                }
                break;
            default:
                throw new Error('Bad UTF-8 encoding 0x' + unit.toString(16));
        }
        if (i >= 0x7FFF - 1) {
            var size = i + 1;
            charCodes.length = size;
            buf[buf.length] = String.fromCharCode.apply(String, charCodes);
            n -= size;
            i = -1;
        }
    }
    if (i > 0) {
        charCodes.length = i;
        buf[buf.length] = String.fromCharCode.apply(String, charCodes);
    }
    return buf.join('');
}

function utf8Decode(bs, n) {
    if (n === undefined || n === null || (n < 0)) n = bs.length;
    if (n === 0) return '';
    if (/^[\x00-\x7f]*$/.test(bs) || !(/^[\x00-\xff]*$/.test(bs))) {
        if (n === bs.length) return bs;
        return bs.substr(0, n);
    }
    return ((n < 0x7FFF) ?
        utf8DecodeShortString(bs, n) :
        utf8DecodeLongString(bs, n));
}

function encrypt(data, key) {
    if (data === undefined || data === null || data.length === 0) {
        return data;
    }
    data = utf8Encode(data);
    key = utf8Encode(key);
    return toBinaryString(encryptUint32Array(toUint32Array(data, true), fixk(toUint32Array(key, false))), false);
}

function decrypt(data, key) {
    if (data === undefined || data === null || data.length === 0) {
        return data;
    }
    key = utf8Encode(key);
    return utf8Decode(toBinaryString(decryptUint32Array(toUint32Array(data, false), fixk(toUint32Array(key, false))), true));
}

function string2byte(string, key) {
    string = String(string).replace(/[\t\n\f\r ]+/g, "");
    string += "==".slice(2 - (string.length & 3));
    var bitmap, result = "", r1, r2, i = 0;
    for (; i < string.length;) {
        bitmap = key.indexOf(string.charAt(i++)) << 18 | key.indexOf(string.charAt(i++)) << 12
            | (r1 = key.indexOf(string.charAt(i++))) << 6 | (r2 = key.indexOf(string.charAt(i++)));

        result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255)
            : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255)
                : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
}

function random_k(x, y) {
    y || (y = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    let z = '';
    for (let w = x; w > 0; --w){
        z += y[Math['floor'](Math['random']() * y['length'])];
    }
    return z;
}

function random_32() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'['replace'](/[xy]/g, function(arg) {
        let num = (16) * Math['random']() | 0;
        return ('x' == arg ? num : 3 & num | 8)['toString'](16);
    });
}

function bool_0_1(x) {
    return null == x ? '' : 'boolean' == typeof x ? x ? '1' : '0' : x;
}

function time_13() {
    return new Date().getTime();
}

global.XXTEA = {
    utf8Encode: utf8Encode,
    utf8Decode: utf8Decode,
    encrypt: encrypt,
    decrypt: decrypt,
};

var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.";

function tiktok_mssdk_encode(value) {
    let k = random_k(4)
    let q = XXTEA.encrypt(value, k)
    let result = k + bytes2string_1(q, b64)
    return result
}

function tiktok_mssdk_decode(value) {
    let k = value.slice(0, 4)
    let v = value.slice(4)
    let x = string2byte(v, b64)
    return XXTEA.decrypt(x, k)
}

function douyin_xxbg_q_decrypt(text){
    text = decodeURIComponent(text)
    let temp_byte = string2byte(text, 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe==')
    let key = temp_byte.slice(-32)
    let temp_num = Math['floor'](key['charCodeAt'](3) / 8) + key['charCodeAt'](3) % 8;
    key = key.substring(4, 4 + temp_num)
    const temp_text = temp_byte.slice(0, -32)
    return XXTEA.decrypt(temp_text, key)
}

function douyin_xxbg_q_encrypt(obj, obj_2) {
    if (obj_2){
        let j = 0;
        for (let i = 0; i < obj.length; i++){
            obj[j]['p'] && (obj[j]['r'] = obj_2[j++]);
        }
    }
    let temp_text = '';
    obj.forEach(function(arg){
        temp_text += bool_0_1(arg['r']) + '^^';
    })
    temp_text += time_13();
    let salt = random_32();
    let temp_num = Math['floor'](salt['charCodeAt'](3) / 8) + salt['charCodeAt'](3) % 8;
    let key = salt.slice(4, 4 + temp_num);
    let entrypt_byte = XXTEA.encrypt(temp_text, key) + salt;
    let res = bytes2string_1(entrypt_byte, 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe==')
    return res
}
