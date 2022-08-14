//对未修改的常量进行替换
//默认对没有引用的常量的常量进行删除
//对数组与字典不做处理，因为数组与字典经常增删元素
let dd = [1, 2];
let ee = {
  'k': '1'
}; //对修改的常量，不会进行替换

let hh = 5;
hh = 6;

function gg() {
  var s = dd[1];
  var t = ee['k'];
  return 4878 + -5 + 5 + global.console.log("hello,AST!") + 4878 + 2 + hh;
}