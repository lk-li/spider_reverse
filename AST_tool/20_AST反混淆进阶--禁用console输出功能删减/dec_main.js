
/*
目的：删除ob混淆中禁用console输出功能的代码
['log', "warn", "info", 'error', "exception", "table", "trace"]
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

function DelConsole_one(path) {
    // 删除console
    let node = path.node;//获取路径节点
    if (!t.isCallExpression(node.init)) return;//不是回调表达式，退出
    if (node.init.arguments.length !== 2) return;//形参不等于2个
    if (!t.isThisExpression(node.init.arguments[0])) return;//this表达式
    let thisname = node.id.name;//节点名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(thisname);//获取绑定
    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    paths.map(function (refer_path) {
        let bindpath = refer_path.parentPath;//父路径
        if (!t.isCallExpression(bindpath)) return;//回调表达式判断
        if (!t.isIdentifier(bindpath.node.callee)) return;//标识符判定
        bindpath.remove();//删除路径
    });
    path.remove();//删除路径
}
function DelConsole_two(path) {
    // 删除console遗留下列未使用的定义变量
    let node = path.node;//获取路径节点
    if (!t.isCallExpression(node.init)) return;//不是回调表达式，退出
    if (node.init.arguments.length !== 0) return;//形参不等于0个
    if (!t.isFunctionExpression(node.init.callee)) return;//this表达式
    let thisname = node.id.name;//节点名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(thisname);//获取绑定
    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    if(paths.length!==0)return;

    path.remove();//删除路径
}
ast=parse.parse(generator(ast).code)//刷新ast
traverse(ast, {VariableDeclarator: {exit: [DelConsole_one]},});
ast=parse.parse(generator(ast).code)//刷新ast
traverse(ast, {VariableDeclarator: {exit: [DelConsole_two]},});

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});
