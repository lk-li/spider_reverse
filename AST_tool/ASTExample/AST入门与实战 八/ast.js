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
        VariableDeclarator(path){
            const {id, init} = path.node;
            if(t.isIdentifier(init, {name: 'i700'})){
                let name = id.name;
                path.scope.rename(name, 'i700');
                path.remove();
            }
        },
        "StringLiteral"(path)
        {
            delete path.node.extra;
        }
    }

const visitor2 =
    {
        "ConditionalExpression|SequenceExpression|UnaryExpression"(path)
        {
            if (path.isUnaryExpression())
            {
                if (path.node.operator === '-')
                {
                    return;
                }
            }
            const {confident,value} = path.evaluate();
            confident && path.replaceInline(t.valueToNode(value));
        }
    }

const visitor3 = {
    "CallExpression"(path)
    {
        let {callee} = path.node;
        if (!t.isMemberExpression(callee)) return;
        let object = callee.object;
        if (!t.isIdentifier(object,{name:"i700"})) return;

        try
        {
            let value = eval(path.toString());
            if (typeof value == "string" || typeof value == "number")
            {
                //console.log(value);
                path.replaceWith(t.valueToNode(value));
            }
        }catch(e){}
    },
}

const visitor4 = {
        "CallExpression"(path)
        {
            if (!path.parentPath.isExpressionStatement()) return;

            let {callee,arguments} = path.node;
            if (!t.isMemberExpression(callee) || arguments.length !== 1) return;

            let object = callee.object;
            if (!t.isIdentifier(object,{name:"i700"})) return;

            // console.log(path.toString());
            path.remove();
        },
    }


traverse(ast, visitor1);
traverse(ast, visitor2);
traverse(ast, visitor3);
traverse(ast, visitor4);


let {code} = generator(ast);
//console.log(code);
fs.writeFileSync('./after.js', code,{
    encoding :'utf-8'
})

/*
练手二实战解析：

1.观察代码，可以看到有很多这样的函数调用，比如k60.X70("188" * 1)，或者k60.X70(+"532")、k60.L70("408" - 0)，都有个很明显的特点，调用的都是k60对象里面的方法，其实参只有一个，而且都是字面量，因此，可以直接计算出它的结果。
然后看到这样的一个声明语句:

var k60 = i700;

因此归根结底，还是调用的是 i700对象里面的方法。

所以首先要做的就是 将所有的k60，变成i700.使用 scope.rename即可,因此，第一个插件的代码是这样的:
const visitor = {
	VariableDeclarator(path)
	{//还原var、let、const 定义的变量
		const {id,init} = path.node;
		if (t.isIdentifier(init,{name:"i700"}))
		{
			let name = id.name;
			path.scope.rename(name,"i700");
			path.remove();
		}
	},
}

再就是处理实参和十六进制的字符串，实参有着不同的节点类型，比如
BinaryExpression 或者 UnaryExpression表达式。这个多次讲过，直接上代码:

const myvisitor1 = {
	"ConditionalExpression|SequenceExpression|UnaryExpression|BinaryExpression"(path)
	{
		if (path.isUnaryExpression())
		{
			if (path.node.operator == '-')
			{
				return;
			}
		}
		const {confident,value} = path.evaluate();
    confident && path.replaceInline(t.valueToNode(value));
	},
	"StringLiteral"(path)
	{
		delete path.node.extra;
	}
}

再就是判断i700.L70(408) 能否直接在node下面得出结果，尝试之后发现是可以的，因此我们把i700的定义加入到处理代码中，方便直接调用，这里给出函数调用并进行替换的插件:

const myvisitor2 = {
	"CallExpression"(path)
	{
		let {callee} = path.node;
		if (!t.isMemberExpression(callee)) return;
		let object = callee.object;
		if (!t.isIdentifier(object,{name:"i700"})) return;

		try
		{
			let value = eval(path.toString());
			if (typeof value == "string" || typeof value == "number")
			{
				//console.log(value);
				path.replaceWith(t.valueToNode(value));
			}
		}catch(e){}
	},
}

处理到这里就基本差不多了，但是也有很多类似这样的代码:
k60.n20(k60.e60()[3][37]);
这个貌似没有什么用。如果没有强迫症，放着也不碍事。我的话有代码洁癖，垃圾的代码一定要删除，因此写了个判断特征并删除的插件，代码如下:
const myvisitor3 = {
	"CallExpression"(path)
	{
		if (!path.parentPath.isExpressionStatement()) return;



		let {callee,arguments} = path.node;
		if (!t.isMemberExpression(callee) || arguments.length !== 1) return;

		let object = callee.object;
		if (!t.isIdentifier(object,{name:"i700"})) return;

		console.log(path.toString());
		path.remove();


	},
}


经过这个操作后，能还原的地方基本都差不多了，大家可以先试试，再来看看我的思路。
 */