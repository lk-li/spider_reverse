/*
author  : 寒菱
date    : 2020/8/19
desc    : 
*/

const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode =
`
var h = {};
k.aBjoq = "hello AST!";
k.wrOjg = function(P, Q) {
    return P | Q;
};
var k = h;
`;

let ast = parse(jscode);

const visitor =
    {
        VariableDeclarator (path) {
            const {id, init} = path.node;
            if(!t.isObjectExpression(init)){
                return;
            }

            let name = id.name;
            let properties = init.properties;
            // console.log({name, properties});

            let scope = path.scope;
            let binding = scope.getBinding(name);
            // console.log(binding);
            if (!binding || binding.constantViolations.length > 0){
                return;
            }

            let paths = binding.referencePaths;
            // console.log(paths);

            for (let refer_path of paths) {
                let bindpath = refer_path.findParent(p=>p.isVariableDeclarator())
                let bindname = bindpath.node.id.name;
                // console.log(bindname);

                bindpath.scope.rename(bindname, name, scope.block);
                bindpath.remove();
            }

            scope.traverse(scope.block, {
                AssignmentExpression(_path){
                    const left = _path.get('left');
                    const right = _path.get('right');
                    if(!left.isMemberExpression()){
                        return;
                    }
                    const object = left.get('object');
                    const property = left.get('property');
                    if(object.isIdentifier({
                        name: name
                    }) && property.isIdentifier()){
                        properties.push(t.objectProperty(t.valueToNode(property.node.name),right.node));
                        _path.remove();
                    }
                }
            })
        }
    }


//some function code


traverse(ast,visitor);
let {code} = generator(ast);
console.log(code);

/*
结果:
var h = {
    "aBjoq":"hello AST!",
    "wrOjg":function(P, Q) {
    return P | Q;
    },
}
 */