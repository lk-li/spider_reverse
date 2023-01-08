window = this ;

//代理模版

function vmProxy(o) {
        return new Proxy(o, {
            get: function (target, property, receiver) {
                console.table([{"<----获取":target,"属性/方法":property,"值":target[property]}][0]);
                return target[property];
            },
            set: function (target, property, value) {
                console.table([{"设置---->":target,"属性/方法":property,"值":value}][0]);
                return Reflect.set(...arguments);
            }
        });
}
// function vmProxy(o){
//     return new Proxy(o,{
//         set(target, property, value) {
//             console.log("set----",target,property,value);
//             return Reflect.set(...arguments);
//         },
//         get(target,property, receiver) {
//             console.log("get-----",target,property,receiver);
//             return target[property];
//         }
//     });
// }

//主要用来保护伪造的函数 让其更难被识破
(()=>{
    "use strict";
    const $toString = Function.toString();
    const myFunction_toString_symbol = Symbol('('.concat('',')_',(Math.random() +'').toString(36)));
    const myToString = function(){
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };
    function set_native(func,key,value){
        Object.defineProperty(func,key,{
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value": value
        })
    };
    delete Function.prototype['toString'];//删除原型链上的toString
    set_native(Function.prototype,"toString",myToString);//自己定义个getter方法
    set_native(Function.prototype.toString,myFunction_toString_symbol,"function toString() { [native code] }");//套个娃 保护一下我们定义的toString 否则就暴露了
    this.func_set_natvie = (func) => {
        set_native(func,myFunction_toString_symbol,`function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);
    };//导出函数到globalThis
}).call(this);


Object.defineProperties(window,{
    [Symbol.toStringTag]: {
        value:"window",
        configurable: true
    }
});
window = vmProxy(window);

navigator = vmProxy(window);
document = vmProxy(class document{});
location = class location{};
location.reload = function reload(){

};
this.func_set_natvie(location.reload)

location = vmProxy(location)

screen = vmProxy(class screen{})

//后代理的检测不到先代理的

//{} Object.create({}) Class window{} function window(){}; new window








