/*
author  : 寒菱
date    : 2020/8/13
desc    : 
*/

const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode = "var a = 'a' + 'b' + 'c' + d + 'e' + 'f';";

let ast = parse(jscode);

const enter_visitor =
    {
        "BinaryExpression"(path)
        {
            console.log(path.toString())
            const {confident,value} = path.evaluate();
            confident && path.replaceWith(t.valueToNode(value));
        },
    }

const exit_visitor =
    {
        "BinaryExpression": {
            exit: function(path) {
                console.log(path.toString())
                const {confident, value} = path.evaluate();
                confident && path.replaceWith(t.valueToNode(value));
            }

        },
    }

//some function code


traverse(ast, enter_visitor);
traverse(ast, exit_visitor)
let {code} = generator(ast);
console.log(code);

/*

enter:
先计算整个BinaryExpression，发现无法进行计算，
就弹出 'f'(可以理解为'f'是这个表达式的最后一个，处理后最先弹出来，类似于栈的结构)，
继续计算，再弹出'e'，继续计算。。。。
一直到 'a' + 'b' + 'c' 计算成 'abc',并进行替换，
此时替换成了 StringLiteral，不再是 BinaryExpression节点，因此不再处理

exit:
同 enter 相比，先遍历'a' + 'b' ，是一个 BinaryExpression  节点，处理，得到结果 'ab'，并进行了替换;
然后遍历 'ab' + 'c',也是一个 BinaryExpression  节点，处理，得到'abc'，并进行了替换;
再遍历 "abc" + d，也是一个 BinaryExpression  节点，处理，无法直接计算出来，所以不能进行替换;
再遍历 "abc" + d + 'e'，也是一个 BinaryExpression  节点，无法直接计算出来，所以不能进行替换;
再遍历 "abc" + d + 'e' + 'f'，无法直接计算出来，所以不能进行替换;

*/