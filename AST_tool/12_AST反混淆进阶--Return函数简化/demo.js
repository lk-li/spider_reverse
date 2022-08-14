//开发任务5-return多级回调
function bD1(cu, cv) {
  return cu+cv+cu['a'](cu,cv);
}
function bD2(cu, cv) {
  return cu||cv;
}
function bD3(cu, cv) {
  return cu['a'](cv);
}
function bD4(cu,cv){//一级回调
  return bD2(cu,cv);
}
function bD5(cu,cv){//二级回调
  return bD2(cu,bD1(cu,cv));
}
let a=bD1(1,2);
let b=bD2(1,2);
let c=bD3(1,2);
let d=bD4(1,2);
let e=bD5(1,2);
let f=bD2(2,2);

function _0x1d67c2(_0x15c06f) {
    _0x3cf847(0x1a1, 0x12b, 0x167, 0x1a5, 'V5G*');

    function _0x3cf847(_0x4b1750, _0x4b1446, _0x52f9ec, _0x3ca602, _0x337a1a) {
        return _0x5f51f1(_0x4b1750 - 0x59, _0x4b1446 - 0x18, _0x4b1750 - -0x4b9, _0x3ca602 - 0x13f, _0x337a1a);
    }

    function _0x5f51f1(_0x22c9c3, _0xf343c3, _0xbba8e9, _0x547f99, _0x492858) {
        return _0x21c1(_0xbba8e9 - 0x3aa, _0x492858);
    }

}