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
var s = {
    'hello': function(_0x4c52de) {
        (function(_0xea7649, _0x55a64b) {
            return function(_0x46f67a, _0x29dec9) {
                return function(_0x56ee68, _0x1607ce) {
                    return _0x56ee68(_0x1607ce);
                }(_0x46f67a, _0x29dec9);
            }(_0xea7649, _0x55a64b);
        }
        )(alert, "Hello AST");
    },
}
`;

let ast = parse(jscode);

function reduce_call_express(path) {
    let callee = path.get('callee');
    let arguments = path.get('arguments');
    if (!callee.isFunctionExpression() || arguments.length === 0) {
        //这里实参的长度判断可以写死。
        return;
    }

    //对着网站解析，获取形参
    let params = callee.get('params');
    let scope = callee.scope;

    for (var i = 0; i < arguments.length; i++) {
        //遍历实参，因为形参可能比实参长。
        let arg = params[i];
        let {name} = arg.node;

        const binding = scope.getBinding(name);

        if (!binding || binding.constantViolations.length > 0) {
            //形参有被改变，不能被还原
            continue;
        }

        for (refer_path of binding.referencePaths) {
            //因为是字面量，所以直接替换，但是遇到Array类型的需要另外处理
            //也无非获取父节点，然后判断索引
            refer_path.replaceWith(arguments[i]);
            //上面的参数可以是path，也可以是node。但是我遇到过path报错，node可以的情况。
        }
        arg.remove();
        arguments[i].remove();
    }
}

function delete_empty_params(path) {
    let callee = path.get('callee');
    let arguments = path.get('arguments');
    if (!callee.isFunctionExpression() || arguments.length !== 0)
    {
        return;
    }

    let {body,params} = callee.node;
    body = body.body;
    if (body.length !== 1 || params.length !== 0) return;

    if (!t.isReturnStatement(body[0])) return;
    path.replaceWith(body[0].argument);
}


traverse(ast, {
    CallExpression:
        {
            enter: [reduce_call_express,delete_empty_params]
        },
});


let {code} = generator(ast);
console.log(code);

/*
将下面的代码还原:
还原前:

var s = {
    'hello': function(_0x4c52de) {
        (function(_0xea7649, _0x55a64b) {
            return function(_0x46f67a, _0x29dec9) {
                return function(_0x56ee68, _0x1607ce) {
                    return _0x56ee68(_0x1607ce);
                }(_0x46f67a, _0x29dec9);
            }(_0xea7649, _0x55a64b);
        }
        )(alert, "Hello AST");
    },
}

还原后：

var s = {
  'hello': function (_0x4c52de) {
    alert("Hello AST");
  }
};
 */


