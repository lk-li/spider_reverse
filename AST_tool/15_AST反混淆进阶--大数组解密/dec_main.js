
/*
// 开头一个大数组
var _0xa441 = ['\x49\x63\x4b\x72\x77\x70\x2f\x44\x6c\x67\x3d\x3d', ···]
// 自执行函数对数组进行位移
(function (_0x56a234, _0xa44115) {
    var _0x532345 = function (_0x549d7c) {
        while (--_0x549d7c) {
            _0x56a234['push'](_0x56a234['shift']());
        }
    };
    _0x532345(++_0xa44115);
}(_0xa441, 0x1d0));
// 解密函数
var _0x5323 = function (_0x56a234, _0xa44115) {
    // 里面有段自执行函数生成atob函数
    ······
}
// 下方多处调用解密函数，如
var _0x239123 = _0x5323('\x30\x78\x32\x30', '\x70\x59\x48\x73');
思路分析
1.首先，需要从中提取以下信息，一个大数组+自执行偏移函数+解密函数
2.将1提取的信息eval执行
3.找出js中所有使用解密函数的部分，直接eval传值解密，替换原来的部分
var _0x239123 =xxxx;//比如此处解密函数部分直接用解密的值替换
4.删除1中提取的信息，简化代码量
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
    let DecryptFuncName = stringDecryptFuncAst.declarations[0].id.name;//拿到解密函数的名字
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
    // ast = add_Mem_str(ast)//成员表达式中字符合并
    return ast;

}
ast = decrypt_arr(ast)//大数组还原

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存
fs.writeFile('./demoNew.js', code, (err) => {
});