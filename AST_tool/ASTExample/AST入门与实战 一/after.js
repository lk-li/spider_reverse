/*
author  : 寒菱
date    : 2020/8/18
desc    : 
*/
var _0x3447f1 = function () {
  var _0x4ea6ad = !![];

  return function (_0x4ea943, _0xdd159) {
    var _0x5b03a0 = _0x4ea6ad ? function () {
      if (_0xdd159) {
        var _0xa126e = _0xdd159["apply"](_0x4ea943, arguments);

        _0xdd159 = null;
        return _0xa126e;
      }
    } : function () {};

    _0x4ea6ad = ![];
    return _0x5b03a0;
  };
}();

(function () {
  _0x3447f1(this, function () {
    var _0x25809b = new RegExp("function *\\( *\\)");

    var _0x2d94bc = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');

    var _0x216f50 = _0x6e16b7('init');

    if (!_0x25809b["test"](_0x216f50 + "chain") || !_0x2d94bc['test'](_0x216f50 + 'input')) {
      _0x216f50('0');
    } else {
      _0x6e16b7();
    }
  })();
})();

window = {};

window["atob"] = function (_0x1dfc16) {
  e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  var _0x30565f = String(_0x1dfc16)["replace"](/=+$/, '');

  if (_0x30565f['length'] % 0x4 == 0x1) throw new t("'atob' failed: The string to be decoded is not correctly encoded.");

  for (var _0xbac2ef, _0x4e31ff, _0x49b881 = 0x0, _0x422860 = 0x0, _0x6b140 = ''; _0x4e31ff = _0x30565f['charAt'](_0x422860++); ~_0x4e31ff && (_0xbac2ef = _0x49b881 % 0x4 ? 0x40 * _0xbac2ef + _0x4e31ff : _0x4e31ff, _0x49b881++ % 0x4) ? _0x6b140 += String['fromCharCode'](0xff & _0xbac2ef >> (-0x2 * _0x49b881 & 0x6)) : 0x0) _0x4e31ff = e["indexOf"](_0x4e31ff);

  return _0x6b140;
};

window["btoa"] = function (_0x187ea0) {
  e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  for (var _0x24060a, _0x47c7ee, _0x1770dc = String(_0x187ea0), _0x59140b = 0x0, _0x148708 = e, _0x435f25 = ''; _0x1770dc["charAt"](0x0 | _0x59140b) || (_0x148708 = '=', _0x59140b % 0x1); _0x435f25 += _0x148708["charAt"](0x3f & _0x24060a >> 0x8 - _0x59140b % 0x1 * 0x8)) {
    if (_0x47c7ee = _0x1770dc["charCodeAt"](_0x59140b += 0.75), _0x47c7ee > 0xff) throw new t('\x27btoa\x27\x20failed:\x20The\x20string\x20to\x20be\x20encoded\x20contains\x20characters\x20outside\x20of\x20the\x20Latin1\x20range.');
    _0x24060a = _0x24060a << 0x8 | _0x47c7ee;
  }

  return _0x435f25;
};

function _0x6e16b7(_0xbf64d1) {
  function _0x670dd3(_0xaaacfa) {
    if (typeof _0xaaacfa === "string") {
      return function (_0xf0b012) {}["constructor"]('while\x20(true)\x20{}')['apply']("counter");
    } else {
      if (('' + _0xaaacfa / _0xaaacfa)["length"] !== 0x1 || _0xaaacfa % 0x14 === 0x0) {
        (function () {
          return !![];
        })["constructor"]("debu" + "gger")["call"]("action");
      } else {
        (function () {
          return ![];
        })["constructor"]("debu" + "gger")["apply"]('stateObject');
      }
    }

    _0x670dd3(++_0xaaacfa);
  }

  try {
    if (_0xbf64d1) {
      return _0x670dd3;
    } else {
      _0x670dd3(0x0);
    }
  } catch (_0x336524) {}
}