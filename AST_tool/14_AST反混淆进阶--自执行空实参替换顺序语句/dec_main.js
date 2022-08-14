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
function delConvParam(path) {
    // 替换空参数的自执行方法为顺序语句
    let node = path.node;//路径节点
    let node_exp = node.expression;//节点表达式

    //回调表达式|一元表达式
    if (!t.isCallExpression(node_exp) && !t.isUnaryExpression(node_exp))
        return;
    //实参列表为空且长度不大于0
    if (node.expression.arguments !== undefined && node.expression.arguments.length > 0)
        return;
    if(t.isUnaryExpression(node_exp)&&node_exp.operator=='!'){//第二种自执行修改为第一种类型
        node_exp=node_exp.argument;
    }
    if (t.isCallExpression(node_exp)) {//第一种自执行
        if (!t.isFunctionExpression(node_exp.callee))//函数表达式判断
            return;
        let paramsList=node_exp.callee.params//形参列表
        if(paramsList.length>0){
            paramsList.map(function (letname){
                if(t.isIdentifier(letname)){
                    //定义一个变量，并添加到结构体中
                    let varDec = t.VariableDeclarator(t.identifier(letname.name))//
                    let localAST = t.VariableDeclaration('var', [varDec]);//
                    node_exp.callee.body.body.unshift(localAST);//添加
                }
            })
        }
        // 替换节点
        path.replaceInline(node_exp.callee.body.body);
    }

}
traverse(ast, {ExpressionStatement: delConvParam,})      // 替换空参数的自执行方法为顺序语句

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});