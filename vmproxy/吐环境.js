
function proxy1 (proxy_array) {
    for (let i=0;i<proxy_array.length;i++){
        eval(proxy_array[i] +`= new Proxy(` + proxy_array[i] +`,{
            get(target,key){
                debugger;
                console.log('---------------')
                console.log('获取了： ` + proxy_array[i]+ `'+'的' + key + '属性,详细位置可以在debugger查看');
                console.log('---------------')
                return target[key];
            }

        });`)
    }
}

window = global;
//返回函数传入什么
null_function = function (){
    console.log(arguments)
}
document = {ce:{},de:{}};
location={};
navigator = {};
var proxy_array = ['window','document','location','navigator'];
proxy1(proxy_array)

console.log(document.ce.a)
console.log(document.de.bb)
console.log(window.a)
window.a=2;