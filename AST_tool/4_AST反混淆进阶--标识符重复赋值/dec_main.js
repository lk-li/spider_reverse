
/*
实现目的：将重复赋值的标识符进行替换，删减
处理前：
	let a=3;
	let b=a;
	let c=b;
	let d=c;
处理后：
	let a = 3;
	let d = a;
 */


//新建dec_main.js，内容如下，然后运行
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

function ReIdent(path) {
    // 标识符简化
    let node = path.node;//获取路径节点
    if(!t.isIdentifier(node.id)||!t.isIdentifier(node.init))return;

    let leftName = node.id.name;//函数名称
    let rightName = node.init.name;//函数名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(leftName);//获取绑定
    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    let paths_sums=0;
    paths.map(function (refer_path) {
        refer_path.node.name=rightName;//标识符重命名
        paths_sums+=1;//路径+1
    });
    if (paths_sums==paths.length&&paths_sums!=0){//若绑定的每个路径都已处理 ，则移除当前路径
         path.remove();//删除路径
    }
}


//标识符-重复赋值
traverse(ast, {VariableDeclarator: {exit: [ReIdent]},});

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});

/*
查看运行生成的demoNew.js，查看是否达到预期目的
 */