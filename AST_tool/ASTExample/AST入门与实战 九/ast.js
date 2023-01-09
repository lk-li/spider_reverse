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

const visitor1 =
    {
        CallExpression: {
            exit(path) {
                let callee = path.get('callee');
                let arguments = path.get('arguments');

                if (!t.isFunctionExpression(callee) || arguments.length !== 6) {
                    // 实参的长度判断可以写死
                    return;
                }

                // 获取形参
                let params = callee.get('params');
                let scope = callee.scope;

                for (let i = 0; i < arguments.length; i++) {
                    // 遍历实参， 因为形参可能比实参长
                    let arg = params[i];
                    let {name} = arg.node;

                    const binding = scope.getBinding(name);

                    if (!binding || binding.constantViolations.length > 0) {
                        // 形参发生改变，不能被还原
                        continue;
                    }

                    for (refer_path of binding.referencePaths) {
                        // 字面量可以直接替换
                        refer_path.replaceWith(arguments[i]);
                    }

                    arg.remove();
                    arguments[i].remove();
                }
            }
        },
    }

const visitor2 =
    {
        MemberExpression(path) {
            const {object} = path.node;
            if (!t.isArrayExpression(object)) {
                return;
            }

            try {
                const value = eval(path.toString());
                path.replaceInline(t.valueToNode(value));
            } catch (e) {
            }
        },
    }

const visitor3 =
    {


        // 替换完了就没用了，将其删除
        VariableDeclarator(path) {
            const {id, init} = path.node;

            if (!t.isLiteral(init)) return;//只处理字面量

            const binding = path.scope.getBinding(id.name);

            if (!binding || binding.constantViolations.length > 0) {//如果该变量的值被修改则不能处理
                return;
            }

            for (const refer_path of binding.referencePaths) {
                refer_path.replaceInline(init);
            }
            path.remove();
        },
    }

const visitor4 =
    {
        FunctionDeclaration(path) {
            let {id} = path.node;
            let code = path.toString();
            if (code.indexOf("try") !== -1 || code.indexOf("random") !== -1 || code.indexOf("Date") !== -1) {
                // 不是纯函数，不处理
                return
            }

            eval(code);

            let scope = path.scope;
            const binding = path.scope.parent.getBinding(id.name);

            if (!binding || binding.constantViolations.length > 0) {
                return
            }

            for (const refer_path of binding.referencePaths) {
                // 查找父节点
                let call_express = refer_path.findParent(p => p.isCallExpression());

                let arguments = call_express.get("arguments");
                let args = [];

                // if(id.name==='A'){
                //     for(let arg of arguments){
                //
                //         if(arg.node.value===''){
                //             debugger
                //         }
                //         args.push(arg.isLiteral())
                //     }
                // }

                // 判断参数是否为 Literal 类型
                arguments.forEach(arg => {
                    args.push(arg.isLiteral())
                })

                // 自行编写判断条件，example
                // if (args.length === 0 || args.indexOf(false) !== -1) {
                //     continue
                // }

                try {
                    // 计算值
                    let value = eval(call_express.toString());
                    value !==undefined && call_express.replaceWith(t.valueToNode(value));
                } catch (e) {

                }
            }

        }
    }

const visitor5 =
    {
        "BinaryExpression|UnaryExpression"(path) {

            const {confident, value} = path.evaluate();
            confident && path.replaceInline(t.valueToNode(value))
        },
    }

const visitor6 =
    {
        CallExpression(path) {
            try {
                const {callee} = path.node;
                if(callee.name!=='parseInt')return
                const value = eval(path.toString());
                value && path.replaceInline(t.valueToNode(value));
            } catch (e) {}
        }
    }

traverse(ast, visitor1);
traverse(ast, visitor2);
traverse(ast, visitor3);
traverse(ast, visitor4);
traverse(ast, visitor5);
traverse(ast, visitor6);


let {code} = generator(ast);
//console.log(code);

fs.writeFileSync('./after.js', code, {
    encoding: 'utf-8'
})