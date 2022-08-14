const {parse} = require("@babel/parser");
const generator = require("@babel/generator").default;
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");

// scope 就可以操作作用域了。会更方便的操作节点
// scope.block  获取标识符作用域，返回node对象
const js_code = `
a = 1000;
let obj = {
    name: a,
    a: function (a) {
        function u() {
            let a = 600;
            return a;
        }
        return u()
    }
};
`;
const ast_code = parse(js_code);
// 我们可以用 scope.block  提取作用域的node。 但是不适用于函数，函数需要 path.scope.parent.block 父级作用域
traverse(ast_code,{
    Identifier(path){
        if(path.node.name === 'a'){
            // console.log(path.toString());
            // console.log(generator(path.scope.block).code);
            // console.log('--------------------------');
        }
    }
    }
);

// 获取标识符的绑定 Binding  path.scope.getBinding(标识符); 局部变量与全局变量重名时优先使用局部变量。
traverse(ast_code,{
        ObjectProperty(path){
            if (path.node.key.name === 'a'){
                path.traverse({FunctionExpression(path_2){
                        if (!path_2.node.id){
                            console.log( path_2.scope.getBinding('a'))
                        }
                        }
                    }
                )
            }
        }
    }
);




// 一般对标识符修改都是从 Binding走的。其中一些参数：referenced 表示标识符是否在其他的地方被引用 references 表示被引用的次数
// referencesPaths 被引用的path会放到这个里面 constantViolations:[]

// scope.getOwnBinding 获取当前节点自己的绑定 ，不包含父级作用域中个标识符。

// referencePaths 变量被引用的地方。  constantViolations是变量被赋值的地方【被赋值，且非声明。也就是被修改了】
// 例子
// let a = 500;
// a = 600;
// let b = a + a;
// let c = b + a;
// console.log(c);

// 作用域的遍历
// binding.scope.traverse()



// scope.rename  会同时修改引用标识符的位置。  生成唯一标识符的方法：path.scope.generateUidIdentifier('') 可以防止冲突

// scope的一些其他方法
// scope.dump() 打印当前作用域
//  scope.hasBinding('a') 查询是否有 标识符a的绑定。一般可以用 getBinding代替啦
// scope.getAllBindings 获取当前节点所有绑定，返回一个对象。
// scope.hasReference('a') 查询节点是否有a标识符的引用
// scope.getBindingIdentifier('a') 获取Identifier 本身