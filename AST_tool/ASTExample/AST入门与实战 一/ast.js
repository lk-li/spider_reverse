/*
author  : 寒菱
date    : 2020/8/18
desc    : 
*/

const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode = fs.readFileSync('./before.js', {
    encoding: 'utf-8'
})

let ast = parse(jscode);

const visitor =
    {
        Program(path){
            // 获取大数组
            let arr_path = path.get("body.0");
            let code = arr_path.toString();
            // console.log(code)

            // 获取自执行函数
            let shift_path = path.get('body.1');
            code += '!' + shift_path.toString();

            // 获取解密函数
            let call_path = path.get('body.2');
            // 获取函数名
            let call_name = call_path.get('declarations.0.id').toString();
            code += call_path.toString();

            eval(code);

            let can_be_delete = true;

            path.traverse({
                CallExpression(_path) {
                    let callee = _path.get('callee');
                    if(callee.toString() !== call_name){
                        return;
                    }
                    try{
                        let value = eval(_path.toString());
                        _path.replaceWith(t.valueToNode(value));
                    }catch (e) {
                        can_be_delete = false;
                    }
                },
            })

            for (let i = 0; can_be_delete && i<3; i++){
                path.get('body.0').remove()
            }
        }

    }


//some function code


traverse(ast,visitor);
let {code} = generator(ast);
// console.log(code);
fs.writeFileSync('./after.js', code, {
    encoding: "utf-8"
})

/*
特点：
大数组
自执行移位
解密函数

目的:把解密函数运算出来进行替换
第一步：把前面提到的固定框架(大数组+自执行+解密函数)，添加到本地环境中，并确保它能正常运行。

第二步:处理CallExpression 节点。
1.遍历 CallExpression 节点，如果遍历的节点函数名不是 解密函数，则不用理会；
如果是 解密函数，则调用该函数及两个实参，计算出函数值，然后将 值 替换 这个 CallExpression 节点。

2.计算值的时候如果无法计算，则会抛出异常，这时捕获异常就行了。

第三步:如果第二步没有任何异常，则表示第一步的固定框架完成了它的使命，可以进行删除操作，否则不予删除。

 */