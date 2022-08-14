
/*
实现目的：成员表达式连接符变更
处理前：
	console.log('12');
处理后：
	console['log']('12');
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

traverse(ast, {
    MemberExpression(path) {//成员表达式
        //将l.o变更为l['o']类型
        if (t.isIdentifier(path.node.property)) {//标识符类型判断
            let name = path.node.property.name;//节点属性名称
            path.node.property = t.StringLiteral(name);
        }
        path.node.computed = true;//布尔类型修改
    },
});



let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});

/*
demoNew.js
还原后的字符
console["log"]('12');
window["s"] = 1;
console["log"](new Date()["format"]('yyyy-MM-dd'));
 */