const fs = require("fs");//文件读写
const parse = require("@babel/parser"); //解析为ast
const traverse = require('@babel/traverse').default;//遍历节点
const t = require('@babel/types');//类型
const generator = require('@babel/generator').default;//ast解析为代码


//读取js文件
const jscode = fs.readFileSync(
    './demo.js', {
        encoding: 'utf-8'
    }
);
let ast = parse.parse(jscode);//js转ast

try {
    //TODO 1 多级return回调还原
    var Rerurn_sum = 5;//return简化执行的次数-函数花指令嵌套几层，这里设置几层
    var delete_return = false;//return删除标志符
    ast = parse.parse(generator(ast).code);//刷新ast
    for (var a = 1; a < Rerurn_sum; a++) {
        if (a == Rerurn_sum - 1) delete_return = true;//return删除标志符
        traverse(ast, {FunctionDeclaration: {exit: [FunToRetu]},});
        ast = parse.parse(generator(ast).code);//刷新ast
    }
    console.log('第一步：多级return回调还原已完成')
    //TODO 2 大数组解密
    ast = parse.parse(generator(ast).code);//刷新ast
    ast = decrypt_arr(ast)//大数组还原
    console.log('第二步：大数组解密已完成')

// //TODO 3 拆分对象合并
    traverse(ast, {VariableDeclarator: {exit: [merge_obj]},});  // 将拆分的对象重新合并-花指令还原准备工作
    console.log('第三步：拆分对象合并已完成')

// //TODO 4 对象表达式字符串合并

    traverse(ast, {ObjectProperty: {exit: [AddObjPro]},});  //

    console.log('第四步：对象表达式字符串合并已完成')
    //TODO 5 花指令函数处理
    ast = parse.parse(generator(ast).code);//刷新ast
    traverse(ast, {VariableDeclarator: {exit: [callToStr]},});  // 对象替换
    console.log('第五步：花指令处理已完成')

    // //TODO 6 禁用console删减
    ast = parse.parse(generator(ast).code)//刷新ast
    traverse(ast, {VariableDeclarator: {exit: [DelConsole_one]},});
    ast = parse.parse(generator(ast).code)//刷新ast
    traverse(ast, {VariableDeclarator: {exit: [DelConsole_two]},});
    console.log('第六步：禁用console删减已完成')

    //TODO 7 去除逗号表达式
    traverse(ast, {ExpressionStatement: remove_comma,});        // 去除逗号表达式
    console.log('第七步：去除逗号表达式已完成')
    // //TODO 8 删除定时器部分
    traverse(ast, {CallExpression: {exit: [del_setInterval]},});  // 删减定时器
    console.log('第八步：删除定时器部分已完成')
    //
    // //TODO 9 删减debugger部分
    traverse(ast, {VariableDeclarator: {exit: [DelDebuger_one]}});  //禁用debugger删减
    ast = parse.parse(generator(ast).code)
    traverse(ast, {FunctionDeclaration: {enter: [DelDebuger_two]}});  //禁用debugger删减
    console.log('第九步：删减debugger部分已完成')


    //TODO  附加功能--开启可能会出错
    //TODO  替换空参数的自执行方法为顺序语句-慎用！可能涉及到作用域的问题。
    //TODO  常量计算
    //TODO  删除if语句块中假的部分-依赖常量计算
    //TODO  反控制流平坦化
    //TODO  自执行实参替换形参
    //TODO  数组函数简化
    //TODO  未修改常量替换
    //TODO  标识符简化
    //TODO  正则检测替换
    //TODO  删减未引用的标识符
    //TODO  内存爆破检测

} catch (e) {
    console.log(e);
} finally {
    //TODO Finally ast还原js
    code = generator(ast, opts = {jsescOption: {"minimal": true}}).code// 处理中文Unicode
//文件保存
    fs.writeFile('./demoNew.js', code, (err) => {
    });
}

function FunToRetu(path) {
    // return函数简化
    let node = path.node;//获取路径节点

    if (!t.isBlockStatement(node.body)) return;//块语句判定
    if (!t.isReturnStatement(node.body.body[0])) return;//return 语句判定
    let funName = node.id.name;//函数名称

    let retStmt = node.body.body[0];//定位到returnStatement
    let paramsName = node.params //函数参数列表

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(funName);//获取绑定

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    let paths_sums = 0;//路径计数

    paths.map(function (refer_path) {
        let bindpath = refer_path.parentPath;//父路径

        let binnode = bindpath.node;//父路径的节点

        if (!t.isCallExpression(binnode)) return;//回调表达式判断

        if (!t.isIdentifier(binnode.callee)) return;//不是标识符则退出
        if (funName != binnode.callee.name) return;//函数名不等于回调函数名称则退出
        let args = bindpath.node.arguments;//获取节点的参数

        if (paramsName.length != args.length) return;//形参与实参数目不等，退出
        let strA = generator(retStmt.argument).code//return ast语句转js语句

        let tmpAst = parse.parse(strA);//重新解析为ast
        for (var a = 0; a < args.length; a++) {//遍历所有的实参
            let name = paramsName[a].name;//形参
            let strB = generator(args[a]).code//实参
            traverse(tmpAst, {//函数内部
                Identifier: function (_p) {//调用表达式匹配
                    if (_p.node.name == name) {//return中的形参与传入的形参一致
                        _p.node.name = strB;//实参替换形参
                    }
                }
            })
        }

        //bindpath.replaceWith(t.Identifier(generator(tmpAst).code.replaceAll(';', '')))//子节点信息替换

        tmpAst=parse.parse(generator(tmpAst).code)
        bindpath.replaceExpressionWithStatements([tmpAst.program.body[0]])
        paths_sums += 1;//路径+1
    });

    if (paths_sums == paths.length && delete_return) {//若绑定的每个路径都已处理 ，则移除当前路径
        path.remove();//删除路径
    }
}

function add_Mem_str(path) {
    let node = path.node;
    if (node.computed && t.isBinaryExpression(node.property) && node.property.operator == '+') {
        let BinNode = node.property;//属性节点
        let tmpast = parse.parse(generator(BinNode).code);
        let addstr = '';
        traverse(tmpast, {
            BinaryExpression: {
                exit: function (_p) {
                    if (t.isStringLiteral(_p.node.right) && t.isStringLiteral(_p.node.left)) {//二进制表达式左右有一个类型为字符型
                        _p.replaceWith(t.StringLiteral(eval(generator(_p.node).code)))      // 值替换节点
                    }
                    addstr = _p.toString();
                }

            }
        })
        node.property = t.Identifier(addstr);
    }
}

function decrypt_arr(ast) {
    //TODO 1 解密三部分的代码执行
    let end = 3;//切片需要处理的代码块
    let newAst = parse.parse('');//新建ast
    let decrypt_code = ast.program.body.slice(0, end);//切片
    newAst.program.body = decrypt_code// 将前3个节点替换进新建ast
    let stringDecryptFunc = generator(newAst, {compact: true},).code;//转为js，由于存在格式化检测，需要指定选项，来压缩代码// 自动转义
    eval(stringDecryptFunc);//执行三部分的代码


    //TODO 2 准备工作及对解密三部分节点删除
    let stringDecryptFuncAst = ast.program.body[end - 1];// 拿到解密函数所在的节点

    let DecryptFuncName = stringDecryptFuncAst.id.name;//拿到解密函数的名字
    var rest_code = ast.program.body.slice(end); // 剩下的节点
    ast.program.body = rest_code;//剩下的节点替换


    //TODO 3 加密数组还原
    traverse(ast, {
        CallExpression(path) {//回调表达式匹配--替换加密数组为对应的值
            if (t.isIdentifier(path.node.callee, {name: DecryptFuncName})) {       //当变量名与解密函数名相同时，就执行相应操作
                // console.log(path.toString());
                // console.log(eval(path.toString()));
                path.replaceWith(t.valueToNode(eval(path.toString())));      // 值替换节点
            }
        },
    });
    traverse(ast, {MemberExpression: {exit: [add_Mem_str]},});  // 成员表达式字符串合并

    return ast;

}

function merge_obj(path) {
    // 将拆分的对象重新合并
    const {id, init} = path.node;//提取节点指定的值
    if (!t.isObjectExpression(init))//如果指定属性不是对象表达式，退出
        return;

    let name = id.name;//获取id的名称
    let properties = init.properties;//获取初始属性数组
    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(name);//

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    paths.map(function (refer_path) {
        let bindpath = refer_path.parentPath;//父路径
        if (!t.isVariableDeclarator(bindpath.node)) return;//变量声明
        let bindname = bindpath.node.id.name;//获取变量节点声明的值
        bindpath.scope.rename(bindname, name, bindpath.scope.block);//变量名重命名，传作用域参数
        bindpath.remove();//删除节点
    });

    scope.traverse(scope.block, {
        AssignmentExpression: function (_path) {//赋值表达式
            const left = _path.get("left");//节点路径左侧信息
            const right = _path.get("right");//节点路径右侧信息
            if (!left.isMemberExpression())//左侧是否为成员表达式
                return;
            const object = left.get("object");//获取左侧信息的对象
            const property = left.get("property");//获取左侧信息的属性
            //a={},a['b']=5；合并后a={'b':5}
            if (object.isIdentifier({name: name}) && property.isStringLiteral() && _path.scope == scope) {
                properties.push(t.ObjectProperty(t.valueToNode(property.node.value), right.node));
                _path.remove();
            }
            //a={},a.b=5；合并后a={'b':5}
            if (object.isIdentifier({name: name}) && property.isIdentifier() && _path.scope == scope) {
                properties.push(t.ObjectProperty(t.valueToNode(property.node.name), right.node));
                _path.remove();
            }
        }
    })
}

function callToStr(path) {
    // 将对象进行替换
    var node = path.node;//获取路径节点
    if (!t.isObjectExpression(node.init))//不是对象表达式则退出
        return;
    var objPropertiesList = node.init.properties;    // 获取对象内所有属性
    if (objPropertiesList.length == 0) // 对象内属性列表为0则退出
        return;
    var objName = node.id.name;   // 对象名
    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(objName);//

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    let paths_sums = 0;//路径计数

    objPropertiesList.forEach(prop => {
        var key = prop.key.value;//属性名

        if (t.isFunctionExpression(prop.value))//属性值为函数表达式
        {
            var retStmt = prop.value.body.body[0];//定位到ReturnStatement

            path.scope.traverse(path.scope.block, {
                CallExpression: function (_path) {//调用表达式匹配
                    let _path_binding = _path.scope.getBinding(objName);//当前作用域获取绑定
                    if (_path_binding != binding) return;//两者绑定对比
                    if (!t.isMemberExpression(_path.node.callee))//成员表达式判定
                        return;
                    var _node = _path.node.callee;//回调函数节点
                    if (!t.isIdentifier(_node.object) || _node.object.name !== objName)//非标识符检测||节点对象名全等验证
                        return;
                    if (!(t.isStringLiteral(_node.property) || t.isIdentifier(_node.property)))//节点属性非可迭代字符验证||节点属性标识符验证
                        return;
                    if (!(_node.property.value == key || _node.property.name == key))//节点属性值与名称等于指定值验证
                        return;
                    if (!t.isStringLiteral(_node.property) || _node.property.value != key)//节点属性可迭代字符验证与节点属性值与指定值等于验证
                        return;

                    var args = _path.node.arguments;//获取节点的参数

                    // 二元运算
                    if (t.isBinaryExpression(retStmt.argument) && args.length === 2)//二进制表达式判定且参数为两个
                    {
                        _path.replaceWith(t.binaryExpression(retStmt.argument.operator, args[0], args[1]));//二进制表达式替换当前节点
                    }
                    // 逻辑运算
                    else if (t.isLogicalExpression(retStmt.argument) && args.length == 2)//与二元运算一样
                    {
                        _path.replaceWith(t.logicalExpression(retStmt.argument.operator, args[0], args[1]));
                    }
                    // 函数调用
                    else if (t.isCallExpression(retStmt.argument) && t.isIdentifier(retStmt.argument.callee))//回调函数表达式判定及回调参数部分判定
                    {
                        _path.replaceWith(t.callExpression(args[0], args.slice(1)))
                    }
                    paths_sums += 1;//删除计数标志
                }
            })
        } else if (t.isStringLiteral(prop.value)) {//属性值为可迭代字符类型
            var retStmt = prop.value.value;//属性值的值即A:B中的B部分
            path.scope.traverse(path.scope.block, {
                MemberExpression: function (_path) {//成员表达式
                    let _path_binding = _path.scope.getBinding(objName);//当前作用域获取绑定
                    if (_path_binding != binding) return;//两者绑定对比
                    var _node = _path.node;
                    if (!t.isIdentifier(_node.object) || _node.object.name !== objName)//节点对象标识符验证|节点对象名验证
                        return;
                    if (!(t.isStringLiteral(_node.property) || t.isIdentifier(_node.property)))//节点属性可迭代字符验证|标识符验证
                        return;
                    if (!(_node.property.value == key || _node.property.name == key))//节点属性值与名称等于指定值验证
                        return;
                    if (!t.isStringLiteral(_node.property) || _node.property.value != key)//节点属性可迭代字符判定|节点属性值等于指定值验证
                        return;
                    _path.replaceWith(t.stringLiteral(retStmt))//节点替换
                    paths_sums += 1;//删除计数标志
                }
            })
        }
    });
    if (paths_sums == paths.length) {//若绑定的每个路径都已处理 ，则移除当前路径
        path.remove();//删除路径
    }
}

function DelConsole_one(path) {
    // 删除console
    let node = path.node;//获取路径节点
    if (!t.isCallExpression(node.init)) return;//不是回调表达式，退出
    if (node.init.arguments.length !== 2) return;//形参不等于2个
    if (!t.isThisExpression(node.init.arguments[0])) return;//this表达式
    let thisname = node.id.name;//节点名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(thisname);//获取绑定
    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    paths.map(function (refer_path) {
        let bindpath = refer_path.parentPath;//父路径
        if (!t.isCallExpression(bindpath)) return;//回调表达式判断
        if (!t.isIdentifier(bindpath.node.callee)) return;//标识符判定
        bindpath.remove();//删除路径
    });
    path.remove();//删除路径
}

function DelConsole_two(path) {
    // 删除console遗留下列未使用的定义变量
    let node = path.node;//获取路径节点
    if (!t.isCallExpression(node.init)) return;//不是回调表达式，退出
    if (node.init.arguments.length !== 0) return;//形参不等于0个
    if (!t.isFunctionExpression(node.init.callee)) return;//this表达式
    let thisname = node.id.name;//节点名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(thisname);//获取绑定
    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    if (paths.length !== 0) return;

    path.remove();//删除路径
}

function remove_comma(path) {
    // 去除逗号表达式
    let {expression} = path.node
    if (!t.isSequenceExpression(expression))
        return;
    let body = []
    expression.expressions.forEach(
        express => {
            body.push(t.expressionStatement(express))
        }
    )
    path.replaceInline(body)
}

function del_setInterval(path) {
    // 将对象进行替换
    var node = path.node;//获取路径节点

    if (!t.isIdentifier(node.callee))//不是标识符则退出
        return;
    if (node.callee.name != 'setInterval') return;//不是定时器退出
    path.remove();

}

function CheckConv(bindpath) {
    //自执行函数检测
    BinNode = bindpath.node;
    let node_exp = BinNode.expression;//节点表达式
    //回调表达式
    if (!t.isCallExpression(node_exp)) return;
    //实参列表为空且长度不大于0
    if (BinNode.expression.arguments.length !== 0) return;
    //函数表达式判断
    if (!t.isFunctionExpression(node_exp.callee)) return;
    let paramsList = node_exp.callee.params//形参列表
    if (paramsList.length !== 0) return;
    if (!t.isBlockStatement(node_exp.callee.body)) return;
    return true;
}

function DelDebuger_one(path) {
    // 将对象进行替换
    var node = path.node;//获取路径节点
    if (!t.isCallExpression(node.init)) return;//回调表达式过滤
    if (node.init.arguments.length !== 0) return;//实参个数为0
    if (!t.isFunctionExpression(node.init.callee)) return;//函数表达式过滤
    if (node.init.callee.params.length !== 0) return;//形参个数过滤
    let varName = node.id.name;//定义的变量名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(varName);//

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }

    let paths = binding.referencePaths;//绑定引用的路径
    if (paths.length !== 1) return;//引用路径必须等于1
    let paths_sums = 0;//路径计数

    paths.map(function (refer_path) {
        let bindpath = refer_path.parentPath;//父路径
        let BinNode = bindpath.node;//获取路径节点
        if (!t.isCallExpression(BinNode)) return;//不是回调表达式，退出
        if (BinNode.arguments.length !== 2) return;//形参不等于2个
        if (!t.isThisExpression(BinNode.arguments[0])) return;//this表达式
        let thisname = BinNode.callee.name;//节点名称
        if (thisname !== varName) return;//二次确认，名称不等退出
        let break_sign = true;//while循环控制
        while (break_sign) {
            if (!t.isExpressionStatement(bindpath.node)) {
                bindpath = bindpath.parentPath;
            } else {
                let tmpBool = CheckConv(bindpath);
                if (tmpBool) {
                    bindpath.remove();//路径删除
                    paths_sums += 1;//处理数+1
                    break_sign = false;//while循环终止
                } else {
                    bindpath = bindpath.parentPath;
                }

            }
        }
    });
    if (paths_sums == paths.length) {//若绑定的每个路径都已处理 ，则移除当前路径
        path.remove();//删除路径
    }
    // path.remove();//删除路径


}

function DelDebuger_two(path) {
    //删减deugger未引用的函数
    var node = path.node;//获取路径节点

    let varName = node.id.name;//定义的变量名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(varName);//

    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    if (paths.length !== 0) return;//引用路径必须等于1

    path.remove();//删除路径


}

function AddObjPro(path) {
    if (t.isBinaryExpression(path.node.value)) {
        let BinNode = path.node.value;//属性节点
        if (!t.isBinaryExpression(BinNode)) return;//二相式表达式验证
        try {
            path.node.value = t.StringLiteral(eval(generator(BinNode).code));      // 值替换节点
        } catch (e) {
        }
    }
}