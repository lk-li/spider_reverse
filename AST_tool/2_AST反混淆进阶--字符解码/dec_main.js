
/*实现目的：将js中字符解码为可读行较高的字符
处理前：
	var a='\x73\x70\x6c' + '\x69\x74';
处理后：
	var a = "spl" + "it";
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

function decry_str(ast) {
    //数字与字符还原
    traverse(ast, {
        'StringLiteral|NumericLiteral|DirectiveLiteral'(path) {//迭代字符串|迭代数组匹配--16进制文本还原
            delete path.node.extra; //删除节点的额外部分-触发原始值处理
        },
    });
    return ast;
}
ast = decry_str(ast)//进制数字还原与字符还原

/*
traverse(ast, {
    StringLiteral(path) {
        if (path.node.extra && path.node.extra.raw.indexOf('\\') !== -1) {
            delete path.node.extra;
        }
    },
    NumericLiteral(path){
        if (path.node.extra !==-1){
            delete path.node.extra;
        }

    }

})

 */

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});

/*查看运行生成的demoNew.js，查看是否达到预期目的
demoNew.js
还原后的字符
var a = "spl" + "it";
var b = 16;
var c = "人生苦短，何必python？";
 */