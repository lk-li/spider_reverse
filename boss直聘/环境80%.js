Date.now = function now() { return 1661986251253 };
Date.parse = function () { return 1661986251253 };
Date.prototype.valueOf = function () { return 1661986251253 };
Date.prototype.getTime = function () { return 1661986251253 };
Date.prototype.toString = function () { return 1661986251253 };
Math.random = function random() { return 0.08636862211354912 };

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
    window.safefunction = (func, func_name, user_defined_func_name) => {
        if (func_name !== undefined && user_defined_func_name === true) {
            set_native(func, myFunction_toString_symbol, `function ${func_name || ''}() { [native code] }`);
        } else {
            set_native(func, myFunction_toString_symbol, `function ${func.name || func_name || ''}() { [native code] }`);
        }

    };
}).call(this);

rename = (function () {
    function buffer_memory(value) {
        let d = buffer_memory.d || (
            buffer_memory.d = {
                configurable: true, enumerable: false, writable: false
            }
        );
        d.value = value;
        return d;
    };

    /**
     * 保护伪造Object (Object[Symbol.toStringTag])  让其更难被识破
     * @param { Object } Obj
     * @param { String } Objname - 可显示的名称
     * @returns { undefined }
     */
    return function (Obj, Objname) {
        Object.defineProperties(Obj, {
            [Symbol.toStringTag]: buffer_memory(Objname)
        })
    };
})();


myproxy = function (obj) {
    return new Proxy(obj, {
        set(target, property, value) {
            return Reflect.set(...arguments);
        },
        get(target, property, receiver) {
            return target[property];
        }
    });
};


window =  global;



var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function atob(input) {
    var str = (String(input)).replace(/[=]+$/, ''); // #31: ExtendScript bad parse of /=
    if (str.length % 4 === 1) {
        throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
        var bc = 0, bs, buffer, idx = 0, output = '';
        buffer = str.charAt(idx++);
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
        buffer = chars.indexOf(buffer);
    }
    return output;
};

HTMLCanvasElement = function HTMLCanvasElement() { };
rename(HTMLCanvasElement, 'HTMLCanvasElement')
window.safefunction(HTMLCanvasElement, 'HTMLCanvasElement');
HTMLCanvasElement.prototype = {
    getContext() {
        return {
            textBaseline: "",
            'font': '',
            'fillStyle': '',
            'fillRect': function (a, b, c, d) { },
            'fillText': function (a, b, c) { },
        }
    },
    toDataURL() {
        return "data:image/png;base64,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"
    }
};
window.HTMLCanvasElement = HTMLCanvasElement;


// setTimeout = function () { };
// clearTimeout = function () { };
screenTop = 0
Array.prototype.setAttribute = {}


Document = function Document(){};
rename(Document, 'Document')
window.safefunction(Document, 'Document');
window.Document = Document;
Document.body = {};
HTMLDocument = function HTMLDocument() { };
rename(HTMLDocument, 'HTMLDocument')
HTMLDocument.prototype = {
    createElement(a) {
        console.log(a)
        switch (a) {
            case 'canvas':
                return new HTMLCanvasElement()
        }
    }
}
window.HTMLDocument = HTMLDocument;
window.safefunction(HTMLDocument, 'HTMLDocument');
rename(HTMLDocument, 'HTMLDocument')
document = new HTMLDocument();
document.isExtensible = true;
document.referrer  ='https://www.zhipin.com/web/common/security-check.html?seed=35RlLUuTTh6g26lBz1cBplZdepbJ6vQzb507t%2Fo7JZ8%3D&name=4672dc2c&ts=1664246307766&callbackUrl=https%3A%2F%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjob%3Fquery%3D%26city%3D101210100%26position%3D100101%26page%3D1'
document.cookie = 'lastCity=101210100; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1662443756; wd_guid=86a84d99-3d6e-4b15-8df8-3c08239470b4; historyState=state; _bl_uid=kXl637tmpvts9F3XqjkjmwaekhhO; __zp_seo_uuid__=9b4caed5-bd47-401f-99d4-e9860622005d; __g=-; __l=r=https%3A%2F%2Fcn.bing.com%2F&l=%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjob%3Fquery%3D%26city%3D101210100%26position%3D100101&s=3&g=&friend_source=0&s=3&friend_source=0; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1664246308; __c=1662443756; __a=96096595.1653529792.1655263172.1662443756.39.3.11.23; __zp_stoken__=e468eGiBFYQ49fFUyBAAnN2gUUHZBAi9RP1ZBPBURdxpgSnx8awd3JWh6PXsEejZlQR9SdDA6IjZ3ZkANAiEHNVs%2FawdQEwR6Kw9%2FQjJ1KH9ieE9%2BSi0STSA1CxQpTFx3AyZgfT88XTxpVkU%3D; __zp_sseed__=35RlLUuTTh6g26lBz1cBphl7k9O9tSGHKruxK+FxGYs=; __zp_sname__=4672dc2c; __zp_sts__=1664246323419'
window.document = document;

Navigator = function Navigator() { };
window.safefunction(Navigator, 'Navigator');
rename(Navigator, 'Navigator')
window.Navigator = Navigator    ;
navigator = new Navigator();
navigator.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.44";
navigator.cookieEnabled = true;
navigator.language = 'zh-CN';
navigator.languages = ['zh-CN', 'zh'];
window.navigator = navigator;

DOMParser = function DOMParser() { };
rename(DOMParser, 'DOMParser')
window.safefunction(DOMParser, 'DOMParser');
window.DOMParser = DOMParser;

performance = {};
window.performance = performance;

HTMLFrameSetElement = function HTMLFrameSetElement() { };
window.safefunction(HTMLFrameSetElement, 'HTMLFrameSetElement');
window.HTMLFrameSetElement = HTMLFrameSetElement;

isFinite = function isFinite() { };
window.safefunction(isFinite, 'isFinite');
window.isFinite = isFinite;

// 这个地方没补全，自己补，需要成品私我
OfflineAudioContext = function () {
    var h = {
        createOscillator: function () {
            return {
                'type': '',
                'frequency': {
                    'setValueAtTime': function () { }
                },
                'connect': function () { },
                'disconnect': function () { },
                'start': function () { },
            }
        },
        currentTime: '',
        destination: '',
        startRendering: function () { },
        oncomplete: function () { },
        createDynamicsCompressor: function () {
            return {
                'threshold': {
                    'setValueAtTime': function (a, b) { }
                },
                'connect': function () { },
                'disconnect': function () { }
            }
        }
    }
    Object.defineProperty(h, 'oncomplete', {
        get: function () {
            return window['oncomplete']
        },
        set: function (newValue) {
            window['oncomplete'] = newValue
            window['oncomplete'](window)
        }
    })
    return h
};;
window.safefunction(OfflineAudioContext, 'OfflineAudioContext');
window.OfflineAudioContext = OfflineAudioContext;

SpeechSynthesisUtterance = function SpeechSynthesisUtterance() { };
window.safefunction(SpeechSynthesisUtterance, 'SpeechSynthesisUtterance');
window.SpeechSynthesisUtterance = SpeechSynthesisUtterance;

SourceBuffer = function SourceBuffer() { }
window.safefunction(SourceBuffer, 'SourceBuffer');
window.SourceBuffer = SourceBuffer;

ScreenOrientation = function ScreenOrientation() { }
window.safefunction(ScreenOrientation, 'ScreenOrientation');
window.ScreenOrientation = ScreenOrientation;

MediaEncryptedEvent = function MediaEncryptedEvent() { };
window.safefunction(MediaEncryptedEvent, 'MediaEncryptedEvent');
window.MediaEncryptedEvent = MediaEncryptedEvent;

XMLHttpRequest = function XMLHttpRequest() { };
window.safefunction(XMLHttpRequest, 'XMLHttpRequest');
window.XMLHttpRequest = XMLHttpRequest;

Path2D = function Path2D() { };
window.safefunction(Path2D, 'Path2D');
window.Path2D = Path2D;

CDATASection = function CDATASection() { };
window.safefunction(CDATASection, 'CDATASection');
window.CDATASection = CDATASection;

SVGGraphicsElement = function SVGGraphicsElement() { };
window.safefunction(SVGGraphicsElement, 'SVGGraphicsElement');
window.SVGGraphicsElement = SVGGraphicsElement;

PerformancePaintTiming = function PerformancePaintTiming() { };
window.safefunction(PerformancePaintTiming, 'PerformancePaintTiming');
window.PerformancePaintTiming = PerformancePaintTiming;

setInterval = function setInterval() { };
window.safefunction(setInterval, 'setInterval');
window.setInterval = setInterval;


window.scrollBy = function () { };
window.scrollTo = function () { };
window.alert = function () { };

localStorage = {};
window.localStorage = localStorage;
sessionStorage = {};
window.sessionStorage = sessionStorage;
window.safefunction(localStorage, 'localStorage');
history = function history() { };
window.history = history;
window.safefunction(history, 'history');

location = {
    hash: "",
    host: "www.zhipin.com",
    hostname: "www.zhipin.com",
    href: "https://www.zhipin.com/web/geek/job?query=&city=101210100&position=100101&page=2",
    origin: "https://www.zhipin.com",
    pathname: "/web/geek/job",
    port: "",
    protocol: "https:"
};
location.toString = function () { return location.href };
window.safefunction(location, 'location');
window.location = location;

onmessage = null;
window.outerHeight = 1067;
window.innerHeight = 963;
window.outerWidth = 1707;
window.innerWidth = 1707;
window.onmessage = onmessage;
window.RegExp = RegExp;
window.Date = Date;
window.Math = Math;
window.decodeURI = decodeURI;
window.length = 0;
window.scrollX = 0;
window.screenY = 0;
window.pageXOffset = 0;
window.pageYOffset = 0;
window.visualViewport = {};
window.screenX = 0;
window.screenY = 0;
window.devicePixelRatio = 1;
window.screenLeft = 0;
window.screenTop = 0;
window.defaultStatus = "";
window.styleMedia = {};
window.onsearch = null;
window.isSecureContext = true;
window.performance = {};
window.onappinstalled = null;
window.onbeforeinstallprompt = null;
window.originAgentCluster = false;
window.crypto = {};
window.indexedDB = {};
window.webkitStorageInfo = {};
window.onbeforexrselect = null;
window.webkitStorageInfo = {};
window.onbeforexrselect = null;
window.onabort = null;
window.onblur = null;
window.oncancel = null;
window.oncanplay = null;
window.oncanplaythrough = null;
window.onchange = null;
window.onclick = null;
window.onclose = null;
window.oncontextmenu = null;
window.oncuechange = null;
window.ondblclick = null;
window.ondrag = null;
window.ondragend = null;
window.ondragenter = null;
window.ondragleave = null;
window.ondragover = null;
window.ondragstart = null;
window.ondrop = null;
window.ondurationchange = null;
window.onemptied = null;
window.onended = null;
window.onerror = null;
window.onfocus = null;
window.onformdata = null;
window.oninput = null;
window.oninvalid = null;
window.onkeydown = null;
window.onkeypress = null;
window.onkeyup = null;
window.onload = null;
window.onloadeddata = null;
window.onloadedmetadata = null;
window.onloadstart = null;
window.onmousedown = null;
window.onmouseenter = null;
window.onmouseleave = null;
window.onmousemove = null;
window.onmouseout = null;
window.onmouseover = null;
window.onmouseup = null;
window.onmousewheel = null;
window.onpause = null;
window.onplay = null;
window.onplaying = null;
window.onprogress = null;
window.onratechange = null;
window.onreset = null;
window.onresize = null;
window.onscroll = null;
window.onseeked = null;
window.onseeking = null;
window.onselect = null;
window.onstalled = null;
window.onsubmit = null;
window.onsuspend = null;
window.ontimeupdate = null;
window.ontoggle = null;
window.onvolumechange = null;
window.onwaiting = null;
window.onwebkitanimationend = null;
window.onwebkitanimationiteration = null;
window.onwebkitanimationstart = null;
window.onwebkittransitionend = null;
window.onwheel = null;
window.onauxclick = null;
window.ongotpointercapture = null;
window.onlostpointercapture = null;
window.onpointerdown = null;
window.onpointermove = null;
window.onpointerup = null;
window.onpointercancel = null;
window.onpointerover = null;
window.onpointerout = null;
window.onpointerleave = null;
window.onselectstart = null;
window.onselectionchange = null;
window.onanimationend = null;
window.onanimationiteration = null;
window.onanimationstart = null;
window.ontransitionrun = null;
window.ontransitionstart = null;
window.ontransitionend = null;
window.ontransitioncancel = null;
window.onafterprint = null;
window.onafterprint = null;
window.onbeforeprint = null;
window.onbeforeunload = null;
window.onhashchange = null;
window.onlanguagechange = null;
window.onmessage = null;
window.onmessageerror = null;
window.onoffline = null;
window.ononline = null;
window.onpagehide = null;
window.onpageshow = null;
window.onpopstate = null;
window.onrejectionhandled = null;
window.onstorage = null;
window.onunhandledrejection = null;
window.onunload = null;
window.toString = function () {
    return '[object Window]'
}

delete module;
delete process;
delete __filename;
delete Buffer;
delete Thread
delete SharedArrayBuffer
delete GLOBAL
delete root
delete VMError
delete KNBCore

// 需要注意的地方
top = myproxy(window);
parent = top;
window.top = top;
window.parent = parent;

setTimeout = function setTimeout(){};