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


var Rerurn_sum=3;//return简化执行的次数-函数花指令嵌套几层，这里设置几层
let delete_return=false;//return删除标志符

function FunToRetu(path) {
    // return函数简化
    let node = path.node;//获取路径节点

    if (!t.isBlockStatement(node.body)) return;//块语句判定
    if (!t.isReturnStatement(node.body.body[0])) return;//return 语句判定
    let funName = node.id.name;//函数名称

    let retStmt = node.body.body[0];//定位到returnStatement
    let paramsName = node.params //函数参数列表

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(funName);//获取绑定

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    let paths_sums=0;//路径计数

    paths.map(function (refer_path) {
        let bindpath = refer_path.parentPath;//父路径

        let binnode=bindpath.node;//父路径的节点

        if(!t.isCallExpression(binnode))return;//回调表达式判断

        if (!t.isIdentifier(binnode.callee)) return;//不是标识符则退出
        if (funName != binnode.callee.name) return;//函数名不等于回调函数名称则退出
        let args = bindpath.node.arguments;//获取节点的参数

        if (paramsName.length != args.length) return;//形参与实参数目不等，退出
        let strA = generator(retStmt.argument).code//return ast语句转js语句

        let tmpAst = parse.parse(strA);//重新解析为ast
        for (var a = 0; a < args.length; a++) {//遍历所有的实参
            let name = paramsName[a].name;//形参
            let strB = generator(args[a]).code//实参
            traverse(tmpAst, {//函数内部
                    Identifier: function (_p) {//调用表达式匹配
                        if (_p.node.name == name) {//return中的形参与传入的形参一致
                            _p.node.name=strB;//实参替换形参
                            }}
                })
            }

        //bindpath.replaceWith(t.Identifier(generator(tmpAst).code.replaceAll(';','')))//子节点信息替换

        tmpAst=parse.parse(generator(tmpAst).code)
        bindpath.replaceExpressionWithStatements([tmpAst.program.body[0]])
        paths_sums+=1;//路径+1
    });

    if (paths_sums==paths.length&&delete_return){//若绑定的每个路径都已处理 ，则移除当前路径
         path.remove();//删除路径
    }
}
ast=parse.parse(generator(ast).code);//刷新ast
for (var a=1;a<Rerurn_sum;a++){
    if(a==Rerurn_sum-1)delete_return=true;//return删除标志符
    traverse(ast, {FunctionDeclaration: {exit: [FunToRetu]},});
    ast=parse.parse(generator(ast).code);//刷新ast
}


code = generator(ast).code;
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});