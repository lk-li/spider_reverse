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

function add_Mem_str(path) {
    let node = path.node;
    if (node.computed && t.isBinaryExpression(node.property) && node.property.operator == '+') {
        let BinNode = node.property;//属性节点
        let tmpast = parse.parse(generator(BinNode).code);
        let addstr='';
        traverse(tmpast, {
            BinaryExpression: {
                exit: function (_p) {
                    if (t.isStringLiteral(_p.node.right) && t.isStringLiteral(_p.node.left)) {//二进制表达式左右有一个类型为字符型
                        _p.replaceWith(t.StringLiteral(eval(generator(_p.node).code)))      // 值替换节点
                    }
                    addstr=_p.toString();
                }

            }
        })
        node.property=t.Identifier(addstr);
    }
}

traverse(ast, {MemberExpression: {exit: [add_Mem_str]},});  // 成员表达式字符串合并

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});