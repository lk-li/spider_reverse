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

function AddObjPro(path) {
    if (t.isBinaryExpression(path.node.value)) {
        let BinNode = path.node.value;//属性节点
        if (!t.isBinaryExpression(BinNode)) return;//二相式表达式验证
        try {
            path.node.value = t.StringLiteral(eval(generator(BinNode).code));      // 值替换节点
        } catch (e) {
        }
    }
}
traverse(ast, {ObjectProperty: {exit: [AddObjPro]},});  //对象属性字符合并

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});