
/*
执行步骤：
1.存在序列化表达式-先进行序列化还原
AST反混淆进阶-序列表达式
https://jia666666.blog.csdn.net/article/details/120367680
2.存在定时器-删减定时器
3.删减debugger部分
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
function remove_comma(path) {
    // 去除逗号表达式
    let {expression} = path.node
    if (!t.isSequenceExpression(expression))
        return;
    let body = []
    expression.expressions.forEach(
        express => {
            body.push(t.expressionStatement(express))
        }
    )
    path.replaceInline(body)
}
traverse(ast, {ExpressionStatement: remove_comma,});        // 序列表达式还原

function del_setInterval(path) {
    // 将对象进行替换
    var node = path.node;//获取路径节点

    if (!t.isIdentifier(node.callee))//不是标识符则退出
        return;
    if (node.callee.name != 'setInterval') return;//不是定时器退出
    path.remove();

}
traverse(ast, {CallExpression: {exit: [del_setInterval]},});  // 删减定时器

function CheckConv(bindpath) {
    //自执行函数检测
    BinNode = bindpath.node;
    let node_exp = BinNode.expression;//节点表达式
    //回调表达式
    if (!t.isCallExpression(node_exp)) return ;
    //实参列表为空且长度不大于0
    if (BinNode.expression.arguments.length !== 0) return ;
    //函数表达式判断
    if (!t.isFunctionExpression(node_exp.callee)) return ;
    let paramsList = node_exp.callee.params//形参列表
    if (paramsList.length !== 0)return ;
    if (!t.isBlockStatement(node_exp.callee.body)) return ;
    return true;
}
function DelDebuger_one(path) {
    // 将对象进行替换
    var node = path.node;//获取路径节点
    if(!t.isCallExpression(node.init))return;//回调表达式过滤
    if(node.init.arguments.length!==0)return;//实参个数为0
    if(!t.isFunctionExpression(node.init.callee))return;//函数表达式过滤
    if(node.init.callee.params.length!==0)return;//形参个数过滤
    let varName=node.id.name;//定义的变量名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(varName);//

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }

    let paths = binding.referencePaths;//绑定引用的路径
    if(paths.length!==1)return;//引用路径必须等于1
    let paths_sums = 0;//路径计数

    paths.map(function (refer_path) {
        let bindpath = refer_path.parentPath;//父路径
        let BinNode = bindpath.node;//获取路径节点
        if (!t.isCallExpression(BinNode)) return;//不是回调表达式，退出
        if (BinNode.arguments.length !== 2) return;//形参不等于2个
        if (!t.isThisExpression(BinNode.arguments[0])) return;//this表达式
        let thisname = BinNode.callee.name;//节点名称
        if(thisname!==varName)return;//二次确认，名称不等退出
        let break_sign=true;//while循环控制
        while(break_sign){
            if (!t.isExpressionStatement(bindpath.node)) {
                bindpath = bindpath.parentPath;
            } else {
                let tmpBool=CheckConv(bindpath);
                if (tmpBool) {
                    bindpath.remove();//路径删除
                    paths_sums += 1;//处理数+1
                    break_sign = false;//while循环终止
                }else{
                    bindpath = bindpath.parentPath;
                }

            }
        }
    });
    if (paths_sums==paths.length){//若绑定的每个路径都已处理 ，则移除当前路径
         path.remove();//删除路径
    }
}
traverse(ast, {VariableDeclarator: {exit: [DelDebuger_one]}});  //禁用debugger删减

function DelDebuger_two(path) {
    //删减deugger未引用的函数
    var node = path.node;//获取路径节点

    let varName=node.id.name;//定义的变量名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(varName);//

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    if(paths.length!==0)return;//引用路径必须等于1

    path.remove();//删除路径



}
ast=parse.parse(generator(ast).code);
traverse(ast, {FunctionDeclaration: {enter: [DelDebuger_two]}});  //禁用debugger删减



let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});