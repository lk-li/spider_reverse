
/*
实现目的：字符花指令与函数花指令的处理
处理前：
var _0xb28de8 = {
  "abcd": function (_0x22293f, _0x5a165e) {
    return _0x22293f == _0x5a165e;
  },
  "dbca": function (_0xfbac1e, _0x23462f, _0x556555) {
    return _0xfbac1e(_0x23462f, _0x556555);
  },
  "aaa": function (_0x57e640) {
    return _0x57e640();
  },
  "bbb": "eee"
};
var aa = _0xb28de8["abcd"](123, 456);
var bb = _0xb28de8["dbca"](bcd, 11, 22);
var cc = _0xb28de8["aaa"](dcb);
处理后：
var aa = 123 == 456;
var bb = bcd(11, 22);
var cc = dcb();
 */


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
    let paths_sums=0;//路径计数

    objPropertiesList.forEach(prop => {
        var key = prop.key.value;//属性名

        if (t.isFunctionExpression(prop.value))//属性值为函数表达式
        {
            var retStmt = prop.value.body.body[0];//定位到ReturnStatement

            path.scope.traverse(path.scope.block, {
                CallExpression: function (_path) {//调用表达式匹配
                    let _path_binding = _path.scope.getBinding(objName);//当前作用域获取绑定
                    if(_path_binding!=binding)return;//两者绑定对比
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
                    paths_sums+=1;//删除计数标志
                }
            })
        } else if (t.isStringLiteral(prop.value)) {//属性值为可迭代字符类型
            var retStmt = prop.value.value;//属性值的值即A:B中的B部分
            path.scope.traverse(path.scope.block, {
                MemberExpression: function (_path) {//成员表达式
                    let _path_binding = _path.scope.getBinding(objName);//当前作用域获取绑定
                    if(_path_binding!=binding)return;//两者绑定对比
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
                    paths_sums+=1;//删除计数标志
                }
            })
        }
    });
    if (paths_sums == paths.length) {//若绑定的每个路径都已处理 ，则移除当前路径
        path.remove();//删除路径
    }
}
traverse(ast, {VariableDeclarator: {exit: [callToStr]},});  // 对象替换

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});