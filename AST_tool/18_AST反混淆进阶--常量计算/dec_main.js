
/*
实现目的：常量计算
处理前：
	var a = !![];
	var b = "abc" == "bcd";
	var c = 1 << 3 | 2;
	var d = parseInt("5" + "0")
处理后：
	var a = true;
	var b = false;
	var c = 10;
	var d = 50;
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


function eval_constant(path) {
    // 常量计算
    if (path.type == "UnaryExpression") {
        const {operator, argument} = path.node;
        if (operator == "-" && t.isLiteral(argument)) {
            return;
        }
    }
    const {confident, value} = path.evaluate();
    // 无限计算则退出，如1/0与-(1/0)
    if (value == Infinity || value == -Infinity)
        return;
    confident && path.replaceWith(t.valueToNode(value));

}
traverse(ast, {                                         // 常量计算，慎用！
        "UnaryExpression|BinaryExpression|ConditionalExpression|CallExpression": eval_constant,
    });



code = generator(ast).code;
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});
