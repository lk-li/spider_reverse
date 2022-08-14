var _0xb28de8 = {
    "abcd": function (_0x22293f, _0x5a165e) {
        return _0x22293f == _0x5a165e;
    },
    "dbca": function (_0xfbac1e, _0x23462f, _0x556555) {
        return _0xfbac1e(_0x23462f, _0x556555);
    },
    "aaa": function (_0x57e640) {
        return _0x57e640();
    },
    "bbb": "eee"
};
var aa = _0xb28de8["abcd"](123, 456);
var bb = _0xb28de8["dbca"](bcd, 11, 22);
var cc = _0xb28de8["aaa"](dcb);


function dd() {
    var _0xb28de8 = {//局部变量同名验证
        "bbb": "eee45475"
    };
    var dd = _0xb28de8["bbb"];
}

var ddf = _0xb28de8["bbb"];//局部变量与全局变量同名验证
function dd() {
    //全局变量在函数体是否可用验证
    var dd = _0xb28de8["bbb"];
}

function kk(a) {//传值验证
    var ss = _0xb28de8[a];
}