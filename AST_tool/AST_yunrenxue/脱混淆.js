const {parse} = require("@babel/parser");
const generator = require("@babel/generator").default;
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const fs = require("fs");
var AST_code = fs.readFileSync('match2ob.js', {encoding: 'utf-8'});


let AST_parse = parse(AST_code);

// 获取解密函数，并写入内存
let member_decode_js = '';

for(let i=0;i<=2;i++){
    member_decode_js += generator(AST_parse.program.body[i], {compact:true}).code
    delete AST_parse.program.body[i]
}
eval(member_decode_js);

traverse(AST_parse, {
    // 解密函数还原
    CallExpression(path){
        if(path.node.callee.name === '$b' && path.node.arguments[0].type === 'StringLiteral' && path.node.arguments[1].type === 'StringLiteral'){
            path.replaceInline(types.valueToNode(eval(path.toString())));
        }
    },

    //  字符串美化，便于观察
    "StringLiteral|NumericLiteral"(path){
        path.node.extra && delete path.node.extra;


    },
    // 进行字符串合并
    BinaryExpression:
    {
        exit: function (path) {
            if (path.node.left.type === 'StringLiteral' && path.node.right.type === 'StringLiteral'){
                path.replaceInline(types.valueToNode(path.node.left.value + path.node.right.value))
            }
        }
    },
});


// 将 y 写入对象
const y = {};
traverse(AST_parse, {
    AssignmentExpression(path){
      if((path.node.right.type === 'FunctionExpression' || path.node.right.type === 'StringLiteral')){
            if(path.node.left.object.name === 'y'){
            y[path.node.left.property.value] = path.node.right;
            path.remove();
          }
      }
    },
});



//字符串还原
const js_code = generator(AST_parse, {compact:true}).code;
AST_code = parse(js_code);
traverse(AST_code, {
    MemberExpression(path){
        if(path.node.object.name === 'A' && (path.inList || path.parent.type === 'AssignmentExpression' || path.parent.type === 'VariableDeclarator' || path.parent.type === 'BinaryExpression')){

            path.replaceInline(y[path.node.property.value])
        }
    },
    CallExpression(path){
        if(path.node.callee.object && path.node.callee.object.name === 'A'){
            const y_node = y[path.node.callee.property.value];
            if (y_node && y_node.body.body[0].argument.type === 'BinaryExpression'){
                const operator = y_node.body.body[0].argument.operator;
                path.replaceInline(types.binaryExpression(operator, path.node.arguments[0], path.node.arguments[1]))
            }
            else if(y_node && y_node.body.body[0].argument.type === 'CallExpression'){
                const arg = path.node.arguments.slice(1);
                path.replaceInline(types.callExpression(path.node.arguments[0], arg))
            }
        }

    },
});

traverse(AST_code,{
    MemberExpression:{
        exit:function (path) {
            if (path.node.property.type === 'StringLiteral'){
                path.node.computed = false;
                path.node.property.type = 'Identifier';
                path.node.property.name = path.node.property.value;
                delete path.node.property.value;
            }
        }
    },
});


console.log(generator(AST_code, {compact:true}).code);