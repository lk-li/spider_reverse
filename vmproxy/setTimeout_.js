QxVm = {
    node_func: {
        setTimeout: setTimeout,
        setInterval: setInterval,
        clearTimeout: clearTimeout,
        clearInterval: clearInterval
    },
    timer_map: { 0: null }
};

; (() => {
    "use strict";
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToString = function () {
        return typeof this === 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };
    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            value: value,
            configurable: true,
            enumerable: false,
            writable: true
        })
    };
    delete Function.prototype['toString']; //删除原型链上的toString
    set_native(Function.prototype, "toString", myToString); //自己定义个getter方法
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }"); //套个娃 保护一下我们定义的toString 否则就暴露了
    QxVm.safefunction = (func, func_name, user_defined_func_name) => {
        if (func_name !== undefined && user_defined_func_name === true) {
            set_native(func, myFunction_toString_symbol, `function ${func_name || ''}() { [native code] }`);
        } else {
            set_native(func, myFunction_toString_symbol, `function ${func.name || func_name || ''}() { [native code] }`);
        }

    };
}).call(this);

; (function () {
    let timer = {  // 这样写没有 prototype
        setTimeout(callback, ...arg) {
            const timer_obj = QxVm.node_func.setTimeout(callback, ...arg);
            const timer_id = parseInt(Object.keys(QxVm.timer_map).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            QxVm.timer_map[timer_id] = timer_obj
            return timer_id;
        },
        setInterval() {
            const timer_obj = QxVm.node_func.setInterval(callback, ...arg);
            const timer_id = parseInt(Object.keys(QxVm.timer_map).sort((a, b) => {
                return a - b;
            }).pop()) + 1;
            QxVm.timer_map[timer_id] = timer_obj
            return timer_id;
        },
        clearTimeout(timer_id) {
            const timer_obj = QxVm.timer_map[timer_id];
            return QxVm.node_func.clearTimeout(timer_obj)
        },
        clearInterval(timer_id) {
            const timer_obj = QxVm.timer_map[timer_id];
            return QxVm.node_func.clearInterval(timer_obj)
        }
    };
    for (const key in timer) {
        if (Object.hasOwnProperty.call(timer, key)) {
            const element = timer[key];
            QxVm.safefunction(element, element.name);

            QxVm[element.name] = element;
        }
    };

})();