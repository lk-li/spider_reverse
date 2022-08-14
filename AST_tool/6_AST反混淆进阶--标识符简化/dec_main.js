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

function DelIdent(path) {
    // 标识符简化
    let node = path.node;//获取路径节点
    let funName = node.name;//函数名称
    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(funName);//获取绑定
    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    if(paths.length==0){//被使用的次数为0，删除
        path.parentPath.remove();
    }
}
traverse(ast, {Identifier: {exit: [DelIdent]},});

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});