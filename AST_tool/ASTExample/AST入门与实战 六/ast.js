/*
author  : 寒菱
date    : 2020/8/21
desc    : 
*/

const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode =
`
function test(u) {
    return function(n, r, t) {
        return (t = (r = n.B(0),
        n).B(1),
        u)(r, t)
    }
}
`;

let ast = parse(jscode);

const visitor =
    {
        SequenceExpression: {
            exit(path) {
                const {expressions} = path.node;
                path.replaceInline(expressions.pop())
                const return_node = path.findParent(p =>
                    p.isReturnStatement()
                )
                return_node && return_node.insertBefore(expressions)
                // if (return_node) {
                //     expressions.forEach(expression => {
                //         return_node.insertBefore(expression)
                //     })
                // }
            }
        }
    }


//some function code


traverse(ast,visitor);
let {code} = generator(ast);
console.log(code);


/*
处理前:

function test(u) {
    return function(n, r, t) {
        return (t = (r = n.B(0),
        n).B(1),
        u)(r, t)
    }
}

处理后:

function test(u) {
  return function (n, r, t) {
    (r = n.B(0), t = n.B(1))
    return u(r, t);
  };
}
 */