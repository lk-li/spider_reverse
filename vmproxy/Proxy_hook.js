window = new function monitorWindow() {
  // 设置打印字符串长度
  const MAX_VALUE_LENGTH = 70;
  /**
   截取 value 值，用于在日志中输出时限制字符串长度，避免日志过长。
   @param {Object} value - 需要被截取的值。
   @returns {Object} 返回截取后的字符串值。
   */
  function truncateValue(value) {
    const MAX_VALUE_LENGTH = 60;

    if (typeof value === "string" && value.length > MAX_VALUE_LENGTH) {
      return value.substring(0, MAX_VALUE_LENGTH) + "...";
    }

    if (typeof value !== "object") {
      return value;
    }

    const keys = Object.keys(value);
    const result = {};

    if (keys.length > 2) {
      result[keys[0]] = value[keys[0]].toString().substring(0,MAX_VALUE_LENGTH) + "...";
    }

    return "{" + Object.entries(result).map(([k, v]) => `${k}: ${v}`).join(", ") + "}";
  }

  /**
   序列化 value 值，用于在日志中输出时处理对象或方法。
   @param {Object} value - 需要被序列化的值。
   @returns {Object} 返回序列化后的字符串值。
   */
  function serializeValue(value) {
    if (typeof value === "object") {
      try {
        return JSON.stringify(value);
      } catch {
        return value;
      }
    }
    return value;
  }

  /**
   * 创建代理处理程序，用于对被代理对象的属性访问、属性设置、方法调用等进行监听并打印操作日志。
   * @param {Object} name - 对象名。
   * @returns {Object} 返回代理处理程序。
   */
  function createHandler(name) {

    function shouldSkipKey(key, name) {

      if (key === 'window' || key === 'self' || key === 'globalThis' || key === name || key === "_globalObject") {
        return true;
      }

      if (typeof key === 'string' && (key.startsWith('__') || key.endsWith('__'))) {
        return true;
      }

      return String(key) === "Symbol(impl)" || String(key) === "Element" || String(key) === "prototype" || truncateValue(serializeValue(name)).includes("Symbol(impl)");


    }
    return {
      get(target, key, receiver) {
        // 打印调用栈
        // console.log(new Error().stack);
        // target=Object.defineProperty(target)
        // 获取属性值

        const value = target[key];

        // 不打印toString和valueOf特定的信息
        if (key === Symbol.unscopables || key === 'toString' || key === 'valueOf') {
          return Reflect.get(target, key, receiver);
        }

        // 内部属性
        if (shouldSkipKey(key, name)) {
          console.log(`访问: "${(String(key) + "\"内部属性").padEnd(28, " ")}|"${(truncateValue(serializeValue(name)) + "\"对象").padEnd(50, " ")}|值=`,truncateValue(serializeValue(value)));
          return value;
        }

        // 处理代理函数的构造函数
        if (typeof value === 'function' && value.hasOwnProperty('prototype')) {
          try{
            new value
            // console.log(`调用了构造函数: ${String(key).padEnd(22, " ")} |"参数": ${JSON.stringify(value)}`);
            return new Proxy(value,createHandler(`${String(name)}.${String(key)}`))
          }catch (e) {
          }
        }

        // 处理代理对象的属性访问和设置()
        if (typeof value === 'function' && !value.hasOwnProperty('prototype')) {
          return function (...args) {
            console.log(`调用了函数: ${(String(key)).padEnd(27, " ")}|"${(truncateValue(serializeValue(name)) + "\"对象").padEnd(50, " ")}|参数= ${truncateValue(serializeValue(args))}`);
            return Reflect.apply(value, target, args);
          }
        }

        // 处理代理对象的属性访问和设置(递归调用)
        if (value != null && (typeof value === 'object')) {
          console.log(`访问: "${(String(key) + "\"属性").padEnd(30, " ")}|"${(truncateValue(serializeValue(name)) + "\"对象").padEnd(50, " ")}|值=`, truncateValue(serializeValue(value)));
          return new Proxy(value,createHandler(`${String(name)}.${String(key)}`));
        }

        if (typeof value === 'function'){
          // 在Node上和windows有些差异,node有函数也有prototype,所以需要继续回调
          return new Proxy(value,createHandler(`${String(name)}.${String(key)}`));
        }else{
          // 不进行代理的属性或方法
          console.log(`获取: "${(String(key) + "\"属性").padEnd(30, " ")}|"${(truncateValue(serializeValue(name)) + "\"对象").padEnd(50, " ")}|值=`, truncateValue(serializeValue(value)));
        }
        return value;
      },
      set(target, key, value, receiver) {
        // 打印调用栈
        // console.log(new Error().stack);
        console.log(`设置对象: "${(String(key) + "\"").padEnd(28, " ")}|"${(truncateValue(serializeValue(name)) + "\"对象").padEnd(50, " ")}|值=`, truncateValue(serializeValue(value)));
        return Reflect.set(target, key, value, receiver);
      },
      apply(target, thisArg, args) {
        // 打印调用栈
        // console.log(new Error().stack);
        console.log(`调用了函数: ${(String(name)).padEnd(27, " ")}|"${(truncateValue(serializeValue(name)) + "\"对象").padEnd(50, " ")}|参数= ${truncateValue(serializeValue(args))}`);
        return Reflect.apply(target, thisArg, args);
      },
      construct(target, args, newTarget) {
        // 打印调用栈
        // console.log(new Error().stack);
        console.log(`调用了构造函数: ${String(target.name).padEnd(23, " ")}|"${(truncateValue(serializeValue(name)) + "\"对象").padEnd(50, " ")}|参数= ${JSON.stringify(args)}`);
        return Reflect.construct(target, args, newTarget);
      },
    };
  }
  return new Proxy(window,createHandler('window'));
}
