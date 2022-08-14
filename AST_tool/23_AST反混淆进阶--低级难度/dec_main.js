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
    //TODO 1 标识符-重复赋值
    traverse(ast, {VariableDeclarator: {exit: [ReIdent]},});
    console.log('第一步：标识符-重复赋值已完成')

    //TODO 2 大数组解密
    ast = decrypt_arr(ast)//大数组还原
    console.log('第二步：大数组解密已完成')

    //TODO 3 禁用console删减
    ast = parse.parse(generator(ast).code)//刷新ast
    traverse(ast, {VariableDeclarator: {exit: [DelConsole_one]},});
    ast = parse.parse(generator(ast).code)//刷新ast
    traverse(ast, {VariableDeclarator: {exit: [DelConsole_two]},});

    console.log('第三步：禁用console删减已完成')

    //TODO  拆分对象合并
    //TODO  对象表达式字符串合并
    //TODO  花指令函数处理
    //TODO  反控制流平坦化
    //TODO  自执行实参替换形参
    //TODO  替换空参数的自执行方法为顺序语句-慎用！可能涉及到作用域的问题。
    //TODO  删减定时器
    //TODO  return函数简化
    //TODO  数组函数简化
    //TODO  常量计算
    //TODO  未修改常量替换
    //TODO  删除if语句块中假的部分-依赖常量计算
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
                path.replaceWith(t.valueToNode(eval(path.toString())));      // 值替换节点
            }
        },
    });
    return ast;

}


function ReIdent(path) {
    // 标识符简化
    let node = path.node;//获取路径节点
    if (!t.isIdentifier(node.id) || !t.isIdentifier(node.init)) return;

    let leftName = node.id.name;//函数名称
    let rightName = node.init.name;//函数名称

    let scope = path.scope;//获取路径的作用域
    let binding = scope.getBinding(leftName);//获取绑定
    if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
        return;
    }
    let paths = binding.referencePaths;//绑定引用的路径
    let paths_sums = 0;
    paths.map(function (refer_path) {
        refer_path.node.name = rightName;//标识符重命名
        paths_sums += 1;//路径+1
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