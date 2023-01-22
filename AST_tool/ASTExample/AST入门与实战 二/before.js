/*
author  : 寒菱
date    : 2020/8/18
desc    : 
*/

var _0x3f95 = ['woETwpQUwpx4Wg==', 'w4rCnT/CgSxbYMOew77Dl8K5wofCicKCw6EOCUw+b8OXw6pZwpY=', 'JjbDnsK6', 'VsKpw4M=', 'w71AbcKcw5BowooaZcK0wqZu', 'fR9uw6ML', 'Ox7CmjMA', 'YVNXc2w=', 'YcKlwqwvKcO5w7fCsQdtJA==', 'YFvCiybClBMlG8K7e8OAYDnCmHUqOsKBwrpzPw==', 'DsKxOnDDrGbCgA==', 'w4PCg8ODLmfDqXQaQnNDWMOlXsKSwo1Dw7PDncKYN8K5AVM=', 'dsKvwrEo', 'PTDCo8KDwrHCv8OzwoZdwrBf', 'S1kmAmTCs2TCosKhw6fDum7DqGhxw7HChsOfwofDkjk='];
(function(_0x49d7a5, _0x3f9502) {
    var _0x26af01 = function(_0xada512) {
        while (--_0xada512) {
            _0x49d7a5['push'](_0x49d7a5['shift']());
        }
    };
    var _0x114f5b = function() {
        var _0x1d72ec = {
            'data': {
                'key': 'cookie',
                'value': 'timeout'
            },
            'setCookie': function(_0x1e5a52, _0x2aa4db, _0x4fbf33, _0x124dd1) {
                _0x124dd1 = _0x124dd1 || {};
                var _0x34a6bd = _0x2aa4db + '=' + _0x4fbf33;
                var _0x2cb720 = 0x0;
                for (var _0x5bd4ef = 0x0, _0x48a625 = _0x1e5a52['length']; _0x5bd4ef < _0x48a625; _0x5bd4ef++) {
                    var _0xd0d844 = _0x1e5a52[_0x5bd4ef];
                    _0x34a6bd += ';\x20' + _0xd0d844;
                    var _0x51f264 = _0x1e5a52[_0xd0d844];
                    _0x1e5a52['push'](_0x51f264);
                    _0x48a625 = _0x1e5a52['length'];
                    if (_0x51f264 !== !![]) {
                        _0x34a6bd += '=' + _0x51f264;
                    }
                }
                _0x124dd1['cookie'] = _0x34a6bd;
            },
            'removeCookie': function() {
                return 'dev';
            },
            'getCookie': function(_0x1b30c8, _0x49d795) {
                _0x1b30c8 = _0x1b30c8 || function(_0x46935c) {
                    return _0x46935c;
                }
                ;
                var _0x2a79c3 = _0x1b30c8(new RegExp('(?:^|;\x20)' + _0x49d795['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                var _0x44a62d = function(_0x2bceea, _0x13f8ee) {
                    _0x2bceea(++_0x13f8ee);
                };
                _0x44a62d(_0x26af01, _0x3f9502);
                return _0x2a79c3 ? decodeURIComponent(_0x2a79c3[0x1]) : undefined;
            }
        };
        var _0x3a130d = function() {
            var _0x50b7e2 = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');
            return _0x50b7e2['test'](_0x1d72ec['removeCookie']['toString']());
        };
        _0x1d72ec['updateCookie'] = _0x3a130d;
        var _0x33eb04 = '';
        var _0x54c310 = _0x1d72ec['updateCookie']();
        if (!_0x54c310) {
            _0x1d72ec['setCookie'](['*'], 'counter', 0x1);
        } else if (_0x54c310) {
            _0x33eb04 = _0x1d72ec['getCookie'](null, 'counter');
        } else {
            _0x1d72ec['removeCookie']();
        }
    };
    _0x114f5b();
}(_0x3f95, 0x19a));
var _0x26af = function(_0x49d7a5, _0x3f9502) {
    _0x49d7a5 = _0x49d7a5 - 0x0;
    var _0x26af01 = _0x3f95[_0x49d7a5];
    if (_0x26af['CvjJUO'] === undefined) {
        (function() {
            var _0x1d72ec = function() {
                var _0x54c310;
                try {
                    _0x54c310 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (_0x1e5a52) {
                    _0x54c310 = window;
                }
                return _0x54c310;
            };
            var _0x3a130d = _0x1d72ec();
            var _0x33eb04 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x3a130d['atob'] || (_0x3a130d['atob'] = function(_0x2aa4db) {
                    var _0x4fbf33 = String(_0x2aa4db)['replace'](/=+$/, '');
                    var _0x124dd1 = '';
                    for (var _0x34a6bd = 0x0, _0x2cb720, _0x5bd4ef, _0x48a625 = 0x0; _0x5bd4ef = _0x4fbf33['charAt'](_0x48a625++); ~_0x5bd4ef && (_0x2cb720 = _0x34a6bd % 0x4 ? _0x2cb720 * 0x40 + _0x5bd4ef : _0x5bd4ef,
                    _0x34a6bd++ % 0x4) ? _0x124dd1 += String['fromCharCode'](0xff & _0x2cb720 >> (-0x2 * _0x34a6bd & 0x6)) : 0x0) {
                        _0x5bd4ef = _0x33eb04['indexOf'](_0x5bd4ef);
                    }
                    return _0x124dd1;
                }
            );
        }());
        var _0xada512 = function(_0xd0d844, _0x51f264) {
            var _0x1b30c8 = [], _0x49d795 = 0x0, _0x2a79c3, _0x44a62d = '', _0x46935c = '';
            _0xd0d844 = atob(_0xd0d844);
            for (var _0x13f8ee = 0x0, _0x50b7e2 = _0xd0d844['length']; _0x13f8ee < _0x50b7e2; _0x13f8ee++) {
                _0x46935c += '%' + ('00' + _0xd0d844['charCodeAt'](_0x13f8ee)['toString'](0x10))['slice'](-0x2);
            }
            _0xd0d844 = decodeURIComponent(_0x46935c);
            var _0x2bceea;
            for (_0x2bceea = 0x0; _0x2bceea < 0x100; _0x2bceea++) {
                _0x1b30c8[_0x2bceea] = _0x2bceea;
            }
            for (_0x2bceea = 0x0; _0x2bceea < 0x100; _0x2bceea++) {
                _0x49d795 = (_0x49d795 + _0x1b30c8[_0x2bceea] + _0x51f264['charCodeAt'](_0x2bceea % _0x51f264['length'])) % 0x100;
                _0x2a79c3 = _0x1b30c8[_0x2bceea];
                _0x1b30c8[_0x2bceea] = _0x1b30c8[_0x49d795];
                _0x1b30c8[_0x49d795] = _0x2a79c3;
            }
            _0x2bceea = 0x0;
            _0x49d795 = 0x0;
            for (var _0x2c97c0 = 0x0; _0x2c97c0 < _0xd0d844['length']; _0x2c97c0++) {
                _0x2bceea = (_0x2bceea + 0x1) % 0x100;
                _0x49d795 = (_0x49d795 + _0x1b30c8[_0x2bceea]) % 0x100;
                _0x2a79c3 = _0x1b30c8[_0x2bceea];
                _0x1b30c8[_0x2bceea] = _0x1b30c8[_0x49d795];
                _0x1b30c8[_0x49d795] = _0x2a79c3;
                _0x44a62d += String['fromCharCode'](_0xd0d844['charCodeAt'](_0x2c97c0) ^ _0x1b30c8[(_0x1b30c8[_0x2bceea] + _0x1b30c8[_0x49d795]) % 0x100]);
            }
            return _0x44a62d;
        };
        _0x26af['LXXqBe'] = _0xada512;
        _0x26af['hBnvkT'] = {};
        _0x26af['CvjJUO'] = !![];
    }
    var _0x114f5b = _0x26af['hBnvkT'][_0x49d7a5];
    if (_0x114f5b === undefined) {
        if (_0x26af['ANfWqx'] === undefined) {
            var _0x35f927 = function(_0x3c4b3d) {
                this['FZaFcz'] = _0x3c4b3d;
                this['ySGvFb'] = [0x1, 0x0, 0x0];
                this['ALNSas'] = function() {
                    return 'newState';
                }
                ;
                this['gMYokd'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';
                this['vCZqXl'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
            };
            _0x35f927['prototype']['cUMObx'] = function() {
                var _0x302a2b = new RegExp(this['gMYokd'] + this['vCZqXl']);
                var _0x393414 = _0x302a2b['test'](this['ALNSas']['toString']()) ? --this['ySGvFb'][0x1] : --this['ySGvFb'][0x0];
                return this['MwApZJ'](_0x393414);
            }
            ;
            _0x35f927['prototype']['MwApZJ'] = function(_0x5abe33) {
                if (!Boolean(~_0x5abe33)) {
                    return _0x5abe33;
                }
                return this['CApMUL'](this['FZaFcz']);
            }
            ;
            _0x35f927['prototype']['CApMUL'] = function(_0x2103b6) {
                for (var _0x43da8f = 0x0, _0x46dca2 = this['ySGvFb']['length']; _0x43da8f < _0x46dca2; _0x43da8f++) {
                    this['ySGvFb']['push'](Math['round'](Math['random']()));
                    _0x46dca2 = this['ySGvFb']['length'];
                }
                return _0x2103b6(this['ySGvFb'][0x0]);
            }
            ;
            new _0x35f927(_0x26af)['cUMObx']();
            _0x26af['ANfWqx'] = !![];
        }
        _0x26af01 = _0x26af['LXXqBe'](_0x26af01, _0x3f9502);
        _0x26af['hBnvkT'][_0x49d7a5] = _0x26af01;
    } else {
        _0x26af01 = _0x114f5b;
    }
    return _0x26af01;
};
function hi() {
    var _0xdc8733 = function() {
        if (_0x26af('0x0', '*iT6') !== _0x26af('0x1', 'fFAN')) {
            var _0x5933a1 = !![];
            return function(_0x47c8d1, _0x141fcf) {
                var _0x201df7 = _0x5933a1 ? function() {
                        if (_0x141fcf) {
                            var _0x146fea = _0x141fcf[_0x26af('0x2', 'qzm]')](_0x47c8d1, arguments);
                            _0x141fcf = null;
                            return _0x146fea;
                        }
                    }
                    : function() {}
                ;
                _0x5933a1 = ![];
                return _0x201df7;
            }
                ;
        } else {
            var _0x49921d = test[_0x26af('0x3', '4IK)')](_0x26af('0x4', 'lWtq'))()[_0x26af('0x5', 'j29b')](_0x26af('0x6', 'BKQ7'));
            return !_0x49921d[_0x26af('0x7', '4IK)')](_0xada512);
        }
    }();
    var _0x4da061 = _0xdc8733(this, function() {
        var _0x31526b = function() {
            var _0x52cc2f = _0x31526b[_0x26af('0x8', '#xMo')](_0x26af('0x9', 'MMom'))()[_0x26af('0xa', 'loIo')](_0x26af('0xb', 'SDi9'));
            return !_0x52cc2f[_0x26af('0xc', 'nhOF')](_0x4da061);
        };
        return _0x31526b();
    });
    _0x4da061();
    console[_0x26af('0xd', 'wx@V')](_0x26af('0xe', 'nDmd'));
}
hi();