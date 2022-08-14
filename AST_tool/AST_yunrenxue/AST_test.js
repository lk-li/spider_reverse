const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
const types = require("@babel/types");

const fs = require("fs");
var js_code = fs.readFileSync('AST_1.js', {encoding: 'utf-8'});

const ast_code = parse(js_code);



const visitor = {
    StringLiteral(path){
        delete path.node.extra
    },
    BinaryExpression(path){
        if(path.node.left.type === "StringLiteral" && path.node.right.type === "StringLiteral" && path.node.operator === "+")
        {
            path.replaceInline(types.valueToNode(path.node.left.value + path.node.right.value))
        }
    },
    MemberExpression:{
        exit(path){
            if (path.node.computed && path.node.property.type === 'StringLiteral'){
            path.node.computed = false;
            path.node.property.type = 'Identifier';
            path.node.property.name = path.node.property.value;
            delete path.node.property.value;
            console.log(path+'');
            }
        }
    }
};

traverse(ast_code, visitor);
const result_js_code = generator(ast_code).code;
console.log(result_js_code);

// Y["len" + "gth"])