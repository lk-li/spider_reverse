
/*
实现目的：将js中if语句中不执行的代码删除
处理前：
var _0x355406 = function () {
    let m;
    if (false) {
        m = 1;
    } else {
        m = 2;
    }
    return m;
};
处理后：
var _0x355406 = function () {
  let m;
  m = 2;
  return m;
};
 */


const fs = require("fs");//文件读写
const parse = require("@babel/parser"); //解析为ast
const traverse = require('@babel/traverse').default;//遍历节点
const t = require('@babel/types');//类型
const generator = require('@babel/generator').default;//ast解析为代码


//读取js文件
const jscode = fs.readFileSync(
    './demo.js', {
        encoding: 'utf-8'
    }
);
let ast = parse.parse(jscode);//js转ast

function delete_false(path) {
//删除if语句不执行的代码
    let Ifnode = path.node;//路径的节点
    if (!t.isBooleanLiteral(Ifnode.test)) {//布尔类型判断
        return;
    }
    if (Ifnode.test.value) {//布尔值为真
        path.replaceInline(Ifnode.consequent.body);
    } else {//布尔值为假
        path.replaceInline(Ifnode.alternate.body);
    }

}
traverse(ast, {IfStatement: {exit: [delete_false]},});  // 删除if语句中的假

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});