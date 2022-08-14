//https://blog.csdn.net/jia666666/category_11353500.html

/*ob混淆网址：了解即可
https://obfuscator.io/

ast解析网址
https://astexplorer.net/
非常重要！非常重要！！是进行插件开发与ast语法树分析的最重要工具，没有之一

帮助手册
babel中文文档
https://www.babeljs.cn/docs/babel-generator
babel插件手册
https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md
 */

//框架结构

//导入依赖模块
const fs = require("fs");//文件读写
const parse = require("@babel/parser"); //解析为ast
const traverse = require('@babel/traverse').default;//遍历节点
const t = require('@babel/types');//类型
const generator = require('@babel/generator').default;//ast解析为代码


//读取js文件-可自行修改读取的文件名
const jscode = fs.readFileSync(
    './demo.js', {
        encoding: 'utf-8'
    }
);
//将读取的js解析为ast语法树
let ast = parse.parse(jscode);

//这里是对语法树的增删改查等一系列操作

//将ast语法树转为js语句
let {code} = generator(ast,opts = {jsescOption:{"minimal":true}})
//文件保存到demoNew.js
fs.writeFile('./demoNew.js', code, (err) => {
});