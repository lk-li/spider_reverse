a=1;
b=2;

//4.新建dec_main.js，内容如下，然后运行
const fs = require("fs");//文件读写
const parse = require("@babel/parser"); //解析为ast
const traverse = require('@babel/traverse').default;//遍历节点
const t = require('@babel/types');//类型
const generator = require('@babel/generator').default;//ast解析为代码


//读取js文件
const jscode = fs.readFileSync(
    './1_demo.js', {
        encoding: 'utf-8'
    }
);
let ast = parse.parse(jscode);//js转ast

//将标识符全部修改为x
traverse(ast, {
    Identifier(path) {
        path.node.name = 'x';

    }
})

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});

/*5.查看运行生成的demoNew.js，查看是否达到预期目的
demoNew.js
x = 1;
x = 2;
 */