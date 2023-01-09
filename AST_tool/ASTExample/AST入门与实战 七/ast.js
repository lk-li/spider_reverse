/*
author  : 寒菱
date    : 2020/8/24
desc    : 
*/

const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode = fs.readFileSync("./before.js", {
    encoding: "utf-8"
});


let ast = parse(jscode);

const Identifier2value =
    {
        "Identifier"(path)
        {
            const {confident,value} = path.evaluate();
            confident && path.replaceInline(t.valueToNode(value));
        },

        // 替换完了就没用了，将其删除
        VariableDeclarator(path)
        {
            const {id,init} = path.node;

            if (!t.isLiteral(init)) return;//只处理字面量

            const binding = path.scope.getBinding(id.name);

            if (!binding || binding.constantViolations.length > 0)
            {//如果该变量的值被修改则不能处理
                return;
            }

            for (const refer_path of binding.referencePaths)
            {
                refer_path.replaceWith(init);
            }
            path.remove();
        },
    }

const Function2value =
    {
        FunctionDeclaration(path)
        {
            let {id} = path.node;
            let code = path.toString();
            if (code.indexOf("try") !== -1 || code.indexOf('random') !== -1 || code.indexOf('Date') !== -1)
            {//返回值不唯一不做处理
                return;
            }
            eval(code);

            let scope = path.scope;
            const binding = path.scope.parent.getBinding(id.name);

            if (!binding || binding.constantViolations.length > 0)
            {
                return;
            }

            for (const refer_path of binding.referencePaths)
            {
                let call_express = refer_path.findParent(p=>p.isCallExpression());

                let arguments = call_express.get('arguments');
                let args = [];

                arguments.forEach(arg=>{args.push(arg.isLiteral())})

                if (args.length === 0 || args.indexOf(false) !== -1)
                {//判断条件可自己写
                    continue;
                }

                try
                {
                    let value = eval(call_express.toString());
                    // console.log(call_express.toString(),value);
                    value !== undefined && call_express.replaceWith(t.valueToNode(value));

                }catch(e){}
            }
        },
    }

const node2value =
    {
        "ConditionalExpression|SequenceExpression|UnaryExpression"(path)
        {
            if (path.isUnaryExpression())
            {
                if (path.node.operator === '-')
                {
                    return;
                }
            }
            const {confident,value} = path.evaluate();
            confident && path.replaceInline(t.valueToNode(value));
        },
        "StringLiteral"(path)
        {
            delete path.node.extra;
        }

    }

traverse(ast, Identifier2value)
traverse(ast, Function2value)
traverse(ast, node2value)

let {code} = generator(ast);
//console.log(code);
fs.writeFileSync('./after.js', code,{
    encoding :'utf-8'
})
