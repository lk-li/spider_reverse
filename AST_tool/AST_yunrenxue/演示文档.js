// parse  将js代码转为AST的方法
const {parse} = require("@babel/parser");
var js_code = `
var a = 1;

var b = 10;



`;


let ast_code = parse(js_code, {
    // sourceType: "module",   // 不加这句话的时候，如果解析的AST里面包含 import 等一些写法的话，就会报错。
});
// console.log(ast_code);





// generator  将AST代码转回js的方法,具体参数可以看官方文档  url：https://www.babeljs.cn/docs/babel-generator
const generator = require("@babel/generator").default;
const js_code_out = generator(ast_code,
    {
        // retainLines: false, // 是否保留行号
        // comment: false,     // 是否保留注释
        // compact: true,      //代码压缩 正常压，保留完整分号
        // minified: true,    //代码压缩 高压   删掉全部无用，硬压缩。混淆常用参数
        // concise: true,     //代码压缩 低压  一行，基本空格等基本会保留
        // jsescOption: {}    // 日后再议
    }
    ).code;

// console.log(js_code_out);
throw 'END';
// generator 可以在任何时候使用，看部分代码。不一定要只在最后才用


// traverse 是遍历操作， babel为我们提供了很多的API去处理类似的问题。使得我们不需要手写遍历即可实现目的。
const traverse = require("@babel/traverse").default;
const visitor = {
    enter: function (path) {
        // console.log(path)
    }
};

// 这个是 es6的写法，建议用这一种，因为网上教程推荐这样用。更方便
const visitor2 = {
    ExpressionStatement(path){
        console.log(path)
    }
};


// 这种规则，FunctionExpression 是一个对象了，指明 enter
const visitor3 = {
    FunctionExpression:{
        enter(path){
            // 进入节点
            console.log();
        },
        exit(path){
            // 退出节点
            console.log();
        }
    }
};
// 一般那情况下 enter 和 exit差不太多。但是当嵌套的时候，执行逻辑是不一样的。

// visitor 是过滤方式和规则

traverse(ast_code, visitor2);
// 这里 ast_code 要给整个节点，要不然可能会报错等一些意想不到的异常 visitor 这里要说的东西就比较多了

// path 对象里面有非常多的方法。
// 其中也有 traverse，用法是一样的。



const types = require("@babel/types");
// 最后一个组件了
// 如果说想要判断path中的 type，正常我们是可以使用 path.node.type 这种操作方案。但是我们也可以使用 type实现
// type.isIdentifier(node,  {param_name: param})
// 还可以有断言的方法： is 可以变成 assert******

// 主要用途：方便的生成新的节点，有时用 replaceline 去替换
// type的方法： 看 ts源码 1679行开始.我们简单的举个例子。
const test_a = types.identifier('a');
const test_b = types.identifier('b');
const binary = types.binaryExpression('+', test_a, test_b);

const test_c = types.identifier('c');
const vDeclarator = types.variableDeclarator(test_c, binary);
const vDeclaration = types.variableDeclaration("var", [vDeclarator]);
console.log(generator(vDeclaration).code);
// 下一个知识点
// types.valueToNode(); //可以用于自动生成字面量

a = {
    loveYou: 'yuanrenxue',
    Anlan: 'NB',
};
console.log(types.valueToNode(a));


const fs = require("fs");