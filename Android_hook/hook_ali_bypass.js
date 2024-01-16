// 闲鱼: frida -U -f com.taobao.idlefish -l hook_ali_bypass.js --no-pause
function hook_idlefish_config() {
    Java.perform(function () {
        console.log("############################ Frida 开启 ############################");
        var session = Java.use("mtopsdk.mtop.global.SwitchConfig");
        if (session != undefined) {
            console.log(`------>定位到类名: ${session}`);
            session.A.implementation = function () {
                console.log(`------>定位到函数: is_enableSpdy`);
                return false;
            }
        }

    })
}

// 淘宝: frida -U -f com.taobao.taobao -l hook_ali_bypass.js --no-pause
function hook_taobao_config() {
    Java.perform(function () {
        console.log("############################ Frida 开启 ############################");
        var SwitchConfig = Java.use("mtopsdk.mtop.global.SwitchConfig");
        if (SwitchConfig != undefined) {
            console.log(`------>定位到类名: ${SwitchConfig}`);
            SwitchConfig.isGlobalSpdySwitchOpen.implementation = function () {
                console.log(`------>定位到函数: isGlobalSpdySwitchOpen`);
                return false;
            }
        }

    })
}

// 饿了么: frida -U -f me.ele -l hook_ali_bypass.js --no-pause
function hook_eleme_config() {
    Java.perform(function () {
        console.log("############################ Frida 开启 ############################");
        var SwitchConfig = Java.use("mtopsdk.mtop.global.SwitchConfig");
        if (SwitchConfig != undefined) {
            console.log(`------>定位到类名: ${SwitchConfig}`);
            SwitchConfig.isGlobalSpdySslSwitchOpen.implementation = function () {
                console.log(`------>定位到函数: isGlobalSpdySslSwitchOpen`);
                return false;
            }
        }

    })
}

setImmediate(hook_idlefish_config);