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

function NumListReduce(path) {
    // 数组函数简化
    let node = path.node;//获取路径节点
    if(!t.isIdentifier(node.id))return;//不是标识符则退出
    if(!t.isArrayExpression(node.init))return;//不是数组表达式则退出
    let name=node.id.name;//数组的名称
    let init_obj=node.init.elements;//数组元素
    if (init_obj.length==0)return;//数组元素为空则退出

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(name);//获取绑定

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    let paths_sums=0;//路径计数
    paths.map(function (refer_path) {
        let bindpath = refer_path.parentPath;//父路径
        let binnode=bindpath.node;//父路径的节点
        if(!t.isMemberExpression(bindpath.node))return;//数字表达式判断
        if (binnode.object.name!=name)return;//标识符判定
        if(!t.isNumericLiteral(binnode.property))return;//数字类型判断
        bindpath.replaceInline(init_obj[binnode.property.value])//子节点信息替换
        paths_sums+=1;//路径+1
    });
    if (paths_sums==paths.length){//若绑定的每个路径都已处理 ，则移除当前路径
         path.remove();//删除路径
    }

}
traverse(ast, {VariableDeclarator: {exit: [NumListReduce]},});

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});