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
function convParam(path) {
    // 自执行函数实参替换形参
    var node = path.node;
    if (!t.isCallExpression(node.expression))//回调表达式判断
        return;
    //实参未定义|形参未定义|实参数大于形参数
    if (node.expression.arguments == undefined || node.expression.callee.params == undefined || node.expression.arguments.length > node.expression.callee.params.length)
        return;
    var argumentList = node.expression.arguments;//实参列表
    var paramList = node.expression.callee.params;//形参列表

    for (var i = 0; i < argumentList.length; i++) {//遍历实参
        var paramName = paramList[i].name;//形参
        let argumentName = generator(argumentList[i]).code//实参
        path.traverse({
            Identifier: function (_path) {
                if(_path.node.name.length!=paramName.length)return;//长度不等
                if (_path.node.name!==paramName)return;//名称不等
                _path.node.name=argumentName;//更改形参为实参名称
            }
        });
    }
     node.expression.arguments = [];//实参列表置空
     node.expression.callee.params = paramList.slice(argumentList.length,);//形参列表设置

}
traverse(ast, {ExpressionStatement: convParam,});           // 自执行实参替换形参

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});