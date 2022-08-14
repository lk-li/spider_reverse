//对未修改的常量进行替换
var aa = 4878;
const bb = 0;
let cc = global;
let ff = 4880;
let jj = "hello,AST!";
var f = cc.console.log(jj); //默认对没有引用的常量的常量进行删除

var ss = 0; //对数组与字典不做处理，因为数组与字典经常增删元素

let dd = [1, 2];
let ee = {
  'k': '1'
}; //对修改的常量，不会进行替换

let hh = 5;
hh = 6;

function gg() {
  var s = dd[1];
  var t = ee['k'];
  return 4878 + f + ff + hh;
}