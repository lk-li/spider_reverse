const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
const types = require("@babel/types");

const fs = require("fs");
var AST_code = fs.readFileSync('match2ob.js', {encoding: 'utf-8'});



let AST_parse = parse(AST_code);

// 获取解密函数，并写入内存
let member_decode_js = '';

for(let i=0;i<=2;i++){
    member_decode_js += generator(AST_parse.program.body[i], {compact:true}).code
}

eval(member_decode_js);

traverse(AST_parse,{
    //解密函数还原
    CallExpression(path){
        if (path.node.callee.name==='$b' && path.node.arguments[0].type==='StringLiteral' && path.node.arguments[1].type==='StringLiteral'){
           path.replaceInline(types.valueToNode(eval(path.toString())));
        }
    },
    // 字符串美化，便于观察
    StringLiteral(path){
        if(path.node.extra && path.node.extra.raw.indexOf('\\') !== -1){
            delete path.node.extra;
        }
    },
    //字符串合并
    BinaryExpression:
    {
        exit: function (path){
            if(path.node.left.type === 'StringLiteral' && path.node.right.type === 'StringLiteral' && path.node.operator === '+'){
                path.replaceInline(types.valueToNode(path.node.left.value + path.node.right.value));
            }
        }
    },
})



console.log(generator(AST_parse,{compact:true}).code)