const {parse} = require("@babel/parser");
const generator = require("@babel/generator").default;
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");

let js_code = `
var f = function a(a, b){
    return a + b + '嘿嘿嘿'
}
a('你爸爸','***')

`;
traverse(parse(js_code),{
    BinaryExpression(path){
        // console.log(path)
    }
});
// 增删查改

// path.stop() 停止本次的path遍历，我个人建议，在操作的时候如果只想操作当前的path，而不是想继续对操作之后的操作进行操作
// ，就把这句话写在后面（当成一种习惯）。

// path中的节点替换    replaceWith  替换的是节点  1对1
//                     replaceWithMultiple   替换的是节点  1对多
//                     replaceInline  自动识别，包含了以上两种方法。~  所以直接用这个吧
//                     replaceWithSourceString   节点替换成源码的字符串【也蛮常用。相当于强制替换一波】

// 删除节点  path.remove()

// 插入节点 insertBefore insertAfter

// parent 与 parentPath 的区别
// path.findParent 向上遍历父节点，直到找到，满足回调函数要求为止
traverse(parse(js_code),{
    BinaryExpression(path){
        result = path.findParent(function (result) {return result.isVariableDeclaration()});
        console.log(result);  // 返回的是 NodePath
    }
});
// path.find 也是向上遍历，但是包含当前节点
// path.getFunctionParent()  向上找函数
// path.getStatementParent()  向上遍历语法树，找到父节点为止（包含当前节点）


// path.container 容器  listkey【容器的名字】 key 是当前节点在容器中的索引。 容器其实可以理解为js中的数组。
//   如果 container 是一个对象。那么 listkey就会是 一个 undefined，key变成了名字。也就相当于没有容器了 = =

// inList 判断容器是否为数组
// path.getSibling(index) 获取同级节点的第几个key 的 path 。 获取下一个同级节点 path.getSibling(path.key+1)
// unshiftContainer 与 pushContainer，在容器的前/后插入节点，可以是数组。 不太常用

// path.evaluate()  获取它的当前作用于的引用值

