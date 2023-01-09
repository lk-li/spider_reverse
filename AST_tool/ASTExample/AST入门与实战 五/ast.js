/*
author  : 寒菱
date    : 2020/8/20
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

// 导入解混淆模块

window = {};
window.sessionStorage = [];

const visitor = {
    VariableDeclarator(path)
    {//还原var、let、const 定义的变量
        const {id,init} = path.node;
        if (!t.isLiteral(init)) return;//只处理字面量

        const binding = path.scope.getBinding(id.name);
        if (!binding || binding.constantViolations.length === 0)
        {//初始值没有被改变
            for (const refer_path of binding.referencePaths)
            {
                refer_path.replaceWith(init);
            }
            path.remove();
        }
    },
    "BinaryExpression"(path)
    {
        const {confident,value} = path.evaluate();
        confident && path.replaceInline(t.valueToNode(value));
    },
    "ConditionalExpression"(path)
    {
        let {test,consequent} = path.node;
        if (t.isStringLiteral(test))
        {
            path.replaceInline(consequent);
        }
    },
}



const myvisitor = {
    VariableDeclarator(path)
    {//删除未被使用的变量
        const {id} = path.node;

        const binding = path.scope.getBinding(id.name);
        if (!binding || binding.constantViolations.length > 0)
        {
            return;
        }

        if(binding.referencePaths.length === 0)
        {
            path.remove();
        }
    },
    WhileStatement(path)
    {
        let eval_code = "";
        let AllPrevSiblings = path.getAllPrevSiblings();

        AllPrevSiblings.forEach(prev_siblings =>{
            eval_code +=prev_siblings.toString();
        })

        //将while语句上面的所有节点eval到此环境
        eval(eval_code);

        let {body} = path.node;

        let {discriminant,cases} = body.body[0];

        //将while循环里面的值eval到此环境，也是switch的值
        let case_value = eval(discriminant.name);

        //走到 default 时退出while循环，防止死循环
        let stop_flag = false;

        while (void 0 != case_value)
        {

            for (let each_case of cases)
            {//获取每个case节点
                let {test,consequent} = each_case;

                if (test === null)
                {//如果是default节点，则计算result的值并跳出循环
                    stop_flag = true;
                    eval(generator(consequent[0]).code);
                    break;
                }

                if (test.value !== case_value)
                {//如果不是当前case则继续
                    continue;
                }



                let {code} = generator(consequent[0]);
                //将case块的语句以，号分隔
                let sequence_lists = code.split(',');

                for (let i = 0; i < sequence_lists.length; i++)
                {//遍历每个语句，检测是否包含undefined。
                    let sequence_code = sequence_lists[i];

                    if (sequence_code.indexOf('undefined') !== -1)
                    {//如果包含undefined，打印当前的object与key
                        let first_index = sequence_code.indexOf('=');
                        let next_index  = sequence_code.indexOf('[');
                        let last_index  = sequence_code.indexOf(']');
                        let object_name = sequence_code.slice(first_index + 2, next_index);
                        let object_key  = sequence_code.slice(next_index + 1,  last_index);

                        let name_value  = eval(object_name);
                        let key_value   = eval(object_key);
                        if (typeof name_value === "object")
                        {
                            if (name_value == window)
                            {
                                console.log("检测到对象:","window;","属性或方法:",key_value);
                            }
                            else
                            {
                                console.log("检测到对象:",name_value,";属性或方法:",key_value);
                            }
                        }
                    }

                    //将每一条语句eval到本环境
                    eval(sequence_code);

                }
                //更新switch里的值
                case_value = eval(discriminant.name);
                break;
            }

            if (stop_flag) break;
        }


        console.log('\n\n最终结果:',result);

    },
}

traverse(ast,visitor);
traverse(ast,myvisitor);
let {code} = generator(ast);
//console.log(code);
fs.writeFileSync('./after.js', code,{
    encoding :'utf-8'
})