
/*
实现目的：将未修改的常量进行替换，删减
处理前：
	let a=1;
	let b=2;
	let c=a+b;
处理后：
	let c=1+2;
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

function VarReplace(path) {
    // 常量替换
    let node = path.node;//路径节点
    if(!t.isIdentifier(node.id))return;//标识符判定
    //过滤条件
    if(!t.isStringLiteral(node.init)&&!t.isNumericLiteral(node.init)&&!t.isUnaryExpression(node.init)&&!t.isIdentifier(node.init)&&!t.isCallExpression(node.init)&&!t.isBinaryExpression(node.init))return;

    let name=node.id.name//变量名称
    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(name);//

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    let path_sum=0;// 路径处理计数
    paths.map(function (refer_path) {
        if(!t.isIdentifier(refer_path))return; //标识符判定
        refer_path.node.name=generator(node.init).code;     //标识符重命名
        path_sum+=1;                                             //路径计数+1
    });
    if(path_sum==paths.length){         //所有相关路径都处理，删除路径
        path.remove();
    }

}
traverse(ast, {VariableDeclarator: VarReplace,})      // 未修改常量替换

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});