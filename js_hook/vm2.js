var catvm = {}
catvm.menory = {

    config: {
        print: false,
        proxy: false
    }
};
catvm.menory.htmlelement = {};

catvm.menory.listeners = {};
catvm.menory.PluginArray={};
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(() => {
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToString = function () {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };


    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value": value
        })
    }

    delete Function.prototype['toString'];

    set_native(Function.prototype,"toString",myToString);

    set_native(Function.prototype.toString,myFunction_toString_symbol,"function toString() { [native code] }");

    this.catvm.safeFunction = (func) => {
        set_native(func,myFunction_toString_symbol,`function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);
    };
}).call(this);






catvm.print = {}

catvm.print.print = []
catvm.print.log = function () {

    debugger
    if (catvm.print.print) {


    }



}
catvm.print.getall = function () {

}


catvm.proxy=function(o) {
    //if(catvm.memory.config.proxy==false){return o};

    return new Proxy(o, {
        set(Target, prop, value) {
            console.log(Target, prop, value)
            return Reflect.set(...arguments)
        },

        get(target, prop1, value) {
            console.log(target, prop1, target[prop1])
            return target[prop1]
        }
    });
}

//

catvm.addPlugin = function (data) {

    //{description: "Portable Document Format",filename: "internal-pdf-viewer",name: "Chrome PDF Plugin",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/x-google-chrome-pdf"},{description: "Portable Document Format1",suffixes: "pdf",type: "application1/x-google-chrome-pdf"}]}


    if (catvm.menory.PluginArray.temp == undefined)


    {
        catvm.menory.PluginArray.temp = [];
    }

    catvm.menory.PluginArray.temp.push(data);

}


      catvm.addPlugin({description: "Portable Document Format",filename: "internal-pdf-viewer",name: "Chrome PDF Plugin",MimeTypes:[{description: "Portable Document Format",suffixes: "pdf",type: "application/x-google-chrome-pdf"},{description: "Portable Document Format1",suffixes: "pdf",type: "application1/x-google-chrome-pdf"}]})
    
;
var EventTarget = function EventTarget() {};
catvm.safeFunction(EventTarget);

Object.defineProperties(EventTarget.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
});

EventTarget.prototype.addEventListener = function addEventListener(type, callback) {
    debugger;
    if (!(type in catvm.menory.listeners)) {

        catvm.menory.listeners[type] = []

    };
    catvm.menory.listeners[type].push(callback);

};
catvm.safeFunction(EventTarget.prototype.addEventListener);



EventTarget.prototype.dispatchEvent = function dispatchEvent() {
    debugger;

};
catvm.safeFunction(EventTarget.prototype.dispatchEvent);

debugger;


EventTarget.prototype.removeEventListener = function removeEventListener() {
    debugger;

};
catvm.safeFunction(EventTarget.prototype.removeEventListener);

EventTarget = catvm.proxy(EventTarget)
var  Windowproperties=function Windowproperties(){};catvm.safeFunction(Windowproperties)



Object.defineProperties(Windowproperties.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true

    },
    [Symbol.toStringTag]: {
        value: "Windowproperties",
        configurable: true
    }
});
Windowproperties.prototype.__proto__=EventTarget.prototype;



var window = {};

window.String = String;
window.decodeURIComponent = decodeURIComponent;
window.encodeURIComponent = encodeURIComponent;
window.ReferenceError = ReferenceError;
window.parseFloat = parseFloat;

window.parseInt = parseInt;
window.Math = Math;
window.RegExp = RegExp;


window.Array = Array;
debugger

window.Number = Number;

window.Function = Function;
window.BigInt = BigInt;
window.Date = Date;

window.encodeURI = encodeURI;
window.eval = eval;
window.Boolean = Boolean;

window.isNaN = isNaN;
window["window"] = window;

window["chrome"] = new (class object { });




window["floor"] = function floor() { debugger; }; catvm.safeFunction(window["floor"]);
window["slice"] = function slice() { debugger; }; catvm.safeFunction(window["slice"]);
window["alert"] = function alert() { debugger; }; catvm.safeFunction(window["alert"]);

window["blur"] = function blur() { debugger; }; catvm.safeFunction(window["blur"]);
window["btoa"] = function btoa() { debugger; }; catvm.safeFunction(window["btoa"]);
window["cancelAnimationFrame"] = function cancelAnimationFrame() { debugger; }; catvm.safeFunction(window["cancelAnimationFrame"]);
window["cancelIdleCallback"] = function cancelIdleCallback() { debugger; }; catvm.safeFunction(window["cancelIdleCallback"]);
window["captureEvents"] = function captureEvents() { debugger; }; catvm.safeFunction(window["captureEvents"]);
window["clearInterval"] = function clearInterval() { debugger; }; catvm.safeFunction(window["clearInterval"]);
window["clearTimeout"] = function clearTimeout() { debugger; }; catvm.safeFunction(window["clearTimeout"]);
window["close"] = function close() { debugger; }; catvm.safeFunction(window["close"]);
window["closed"] = function closed() { debugger; }; catvm.safeFunction(window["closed"]);
window["confirm"] = function confirm() { debugger; }; catvm.safeFunction(window["confirm"]);
window["scroll"] = function scroll() { debugger; }; catvm.safeFunction(window["scroll"]);
window["scrollBy"] = function scrollBy() { debugger; }; catvm.safeFunction(window["scrollBy"]);
window["scrollTo"] = function scrollTo() { debugger; }; catvm.safeFunction(window["scrollTo"]);
window["setInterval"] = function setInterval() { debugger; }; catvm.safeFunction(window["setInterval"]);
window["setTimeout"] = function setTimeout() { debugger; }; catvm.safeFunction(window["setTimeout"]);
window["showDirectoryPicker"] = function showDirectoryPicker() { debugger; }; catvm.safeFunction(window["showDirectoryPicker"]);
window["showOpenFilePicker"] = function showOpenFilePicker() { debugger; }; catvm.safeFunction(window["showOpenFilePicker"]);
window["showSaveFilePicker"] = function showSaveFilePicker() { debugger; }; catvm.safeFunction(window["showSaveFilePicker"]);
window["stop"] = function stop() { debugger; }; catvm.safeFunction(window["stop"]);
window["webkitCancelAnimationFrame"] = function webkitCancelAnimationFrame() { debugger; }; catvm.safeFunction(window["webkitCancelAnimationFrame"]);
window["webkitRequestAnimationFrame"] = function webkitRequestAnimationFrame() { debugger; }; catvm.safeFunction(window["webkitRequestAnimationFrame"]);
window["webkitRequestFileSystem"] = function webkitRequestFileSystem() { debugger; }; catvm.safeFunction(window["webkitRequestFileSystem"]);
window["webkitResolveLocalFileSystemURL"] = function webkitResolveLocalFileSystemURL() { debugger; }; catvm.safeFunction(window["webkitResolveLocalFileSystemURL"]);
window["AbortController"] = function AbortController() { debugger; }; catvm.safeFunction(window["AbortController"]);
window["AbortSignal"] = function AbortSignal() { debugger; }; catvm.safeFunction(window["AbortSignal"]);
window["AbsoluteOrientationSensor"] = function AbsoluteOrientationSensor() { debugger; }; catvm.safeFunction(window["AbsoluteOrientationSensor"]);
window["Accelerometer"] = function Accelerometer() { debugger; }; catvm.safeFunction(window["Accelerometer"]);
window["AggregateError"] = function AggregateError() { debugger; }; catvm.safeFunction(window["AggregateError"]);
window["AnalyserNode"] = function AnalyserNode() { debugger; }; catvm.safeFunction(window["AnalyserNode"]);
window["Animation"] = function Animation() { debugger; }; catvm.safeFunction(window["Animation"]);
window["AnimationEffect"] = function AnimationEffect() { debugger; }; catvm.safeFunction(window["AnimationEffect"]);
window["AnimationEvent"] = function AnimationEvent() { debugger; }; catvm.safeFunction(window["AnimationEvent"]);
window["AnimationPlaybackEvent"] = function AnimationPlaybackEvent() { debugger; }; catvm.safeFunction(window["AnimationPlaybackEvent"]);
window["AnimationTimeline"] = function AnimationTimeline() { debugger; }; catvm.safeFunction(window["AnimationTimeline"]);

window["ArrayBuffer"] = ArrayBuffer;
window["Attr"] = function Attr() { debugger; }; catvm.safeFunction(window["Attr"]);
window["Audio"] = function Audio() { debugger; }; catvm.safeFunction(window["Audio"]);
window["AudioBuffer"] = function AudioBuffer() { debugger; }; catvm.safeFunction(window["AudioBuffer"]);
window["AudioBufferSourceNode"] = function AudioBufferSourceNode() { debugger; }; catvm.safeFunction(window["AudioBufferSourceNode"]);
window["AudioContext"] = function AudioContext() { debugger; }; catvm.safeFunction(window["AudioContext"]);
window["AudioDestinationNode"] = function AudioDestinationNode() { debugger; }; catvm.safeFunction(window["AudioDestinationNode"]);
window["AudioListener"] = function AudioListener() { debugger; }; catvm.safeFunction(window["AudioListener"]);
window["AudioNode"] = function AudioNode() { debugger; }; catvm.safeFunction(window["AudioNode"]);
window["AudioParam"] = function AudioParam() { debugger; }; catvm.safeFunction(window["AudioParam"]);
window["AudioParamMap"] = function AudioParamMap() { debugger; }; catvm.safeFunction(window["AudioParamMap"]);
window["AudioProcessingEvent"] = function AudioProcessingEvent() { debugger; }; catvm.safeFunction(window["AudioProcessingEvent"]);
window["AudioScheduledSourceNode"] = function AudioScheduledSourceNode() { debugger; }; catvm.safeFunction(window["AudioScheduledSourceNode"]);
window["AudioWorklet"] = function AudioWorklet() { debugger; }; catvm.safeFunction(window["AudioWorklet"]);
window["AudioWorkletNode"] = function AudioWorkletNode() { debugger; }; catvm.safeFunction(window["AudioWorkletNode"]);
window["AuthenticatorAssertionResponse"] = function AuthenticatorAssertionResponse() { debugger; }; catvm.safeFunction(window["AuthenticatorAssertionResponse"]);
window["AuthenticatorAttestationResponse"] = function AuthenticatorAttestationResponse() { debugger; }; catvm.safeFunction(window["AuthenticatorAttestationResponse"]);
window["AuthenticatorResponse"] = function AuthenticatorResponse() { debugger; }; catvm.safeFunction(window["AuthenticatorResponse"]);
window["BackgroundFetchManager"] = function BackgroundFetchManager() { debugger; }; catvm.safeFunction(window["BackgroundFetchManager"]);
window["BackgroundFetchRecord"] = function BackgroundFetchRecord() { debugger; }; catvm.safeFunction(window["BackgroundFetchRecord"]);
window["BackgroundFetchRegistration"] = function BackgroundFetchRegistration() { debugger; }; catvm.safeFunction(window["BackgroundFetchRegistration"]);
window["BarProp"] = function BarProp() { debugger; }; catvm.safeFunction(window["BarProp"]);
window["BarcodeDetector"] = function BarcodeDetector() { debugger; }; catvm.safeFunction(window["BarcodeDetector"]);

window["BatteryManager"] = function BatteryManager() { debugger; }; catvm.safeFunction(window["BatteryManager"]);
window["BeforeInstallPromptEvent"] = function BeforeInstallPromptEvent() { debugger; }; catvm.safeFunction(window["BeforeInstallPromptEvent"]);
window["BeforeUnloadEvent"] = function BeforeUnloadEvent() { debugger; }; catvm.safeFunction(window["BeforeUnloadEvent"]);
window["BigInt"] = function BigInt() { debugger; }; catvm.safeFunction(window["BigInt"]);
window["BigInt64Array"] = function BigInt64Array() { debugger; }; catvm.safeFunction(window["BigInt64Array"]);
window["BigUint64Array"] = function BigUint64Array() { debugger; }; catvm.safeFunction(window["BigUint64Array"]);
window["BiquadFilterNode"] = function BiquadFilterNode() { debugger; }; catvm.safeFunction(window["BiquadFilterNode"]);
window["Blob"] = function Blob() { debugger; }; catvm.safeFunction(window["Blob"]);
window["BlobEvent"] = function BlobEvent() { debugger; }; catvm.safeFunction(window["BlobEvent"]);
window["Boolean"] = function Boolean() { debugger; }; catvm.safeFunction(window["Boolean"]);
window["BroadcastChannel"] = function BroadcastChannel() { debugger; }; catvm.safeFunction(window["BroadcastChannel"]);
window["ByteLengthQueuingStrategy"] = function ByteLengthQueuingStrategy() { debugger; }; catvm.safeFunction(window["ByteLengthQueuingStrategy"]);
window["CDATASection"] = function CDATASection() { debugger; }; catvm.safeFunction(window["CDATASection"]);
window["CSS"] = function CSS() { debugger; }; catvm.safeFunction(window["CSS"]);
window["CSSAnimation"] = function CSSAnimation() { debugger; }; catvm.safeFunction(window["CSSAnimation"]);
window["CSSConditionRule"] = function CSSConditionRule() { debugger; }; catvm.safeFunction(window["CSSConditionRule"]);
window["CSSFontFaceRule"] = function CSSFontFaceRule() { debugger; }; catvm.safeFunction(window["CSSFontFaceRule"]);
window["CSSGroupingRule"] = function CSSGroupingRule() { debugger; }; catvm.safeFunction(window["CSSGroupingRule"]);
window["CSSImageValue"] = function CSSImageValue() { debugger; }; catvm.safeFunction(window["CSSImageValue"]);
window["CSSImportRule"] = function CSSImportRule() { debugger; }; catvm.safeFunction(window["CSSImportRule"]);
window["CSSKeyframeRule"] = function CSSKeyframeRule() { debugger; }; catvm.safeFunction(window["CSSKeyframeRule"]);
window["CSSKeyframesRule"] = function CSSKeyframesRule() { debugger; }; catvm.safeFunction(window["CSSKeyframesRule"]);
window["CSSKeywordValue"] = function CSSKeywordValue() { debugger; }; catvm.safeFunction(window["CSSKeywordValue"]);
window["CSSMathInvert"] = function CSSMathInvert() { debugger; }; catvm.safeFunction(window["CSSMathInvert"]);
window["CSSMathMax"] = function CSSMathMax() { debugger; }; catvm.safeFunction(window["CSSMathMax"]);
window["CSSMathMin"] = function CSSMathMin() { debugger; }; catvm.safeFunction(window["CSSMathMin"]);
window["CSSMathNegate"] = function CSSMathNegate() { debugger; }; catvm.safeFunction(window["CSSMathNegate"]);
window["CSSMathProduct"] = function CSSMathProduct() { debugger; }; catvm.safeFunction(window["CSSMathProduct"]);
window["CSSMathSum"] = function CSSMathSum() { debugger; }; catvm.safeFunction(window["CSSMathSum"]);
window["CSSMathValue"] = function CSSMathValue() { debugger; }; catvm.safeFunction(window["CSSMathValue"]);
window["CSSMatrixComponent"] = function CSSMatrixComponent() { debugger; }; catvm.safeFunction(window["CSSMatrixComponent"]);
window["CSSMediaRule"] = function CSSMediaRule() { debugger; }; catvm.safeFunction(window["CSSMediaRule"]);
window["CSSNamespaceRule"] = function CSSNamespaceRule() { debugger; }; catvm.safeFunction(window["CSSNamespaceRule"]);
window["CSSNumericArray"] = function CSSNumericArray() { debugger; }; catvm.safeFunction(window["CSSNumericArray"]);
window["CSSNumericValue"] = function CSSNumericValue() { debugger; }; catvm.safeFunction(window["CSSNumericValue"]);
window["CSSPageRule"] = function CSSPageRule() { debugger; }; catvm.safeFunction(window["CSSPageRule"]);
window["CSSPerspective"] = function CSSPerspective() { debugger; }; catvm.safeFunction(window["CSSPerspective"]);
window["CSSPositionValue"] = function CSSPositionValue() { debugger; }; catvm.safeFunction(window["CSSPositionValue"]);
window["CSSPropertyRule"] = function CSSPropertyRule() { debugger; }; catvm.safeFunction(window["CSSPropertyRule"]);
window["CSSRotate"] = function CSSRotate() { debugger; }; catvm.safeFunction(window["CSSRotate"]);
window["CSSRule"] = function CSSRule() { debugger; }; catvm.safeFunction(window["CSSRule"]);
window["CSSRuleList"] = function CSSRuleList() { debugger; }; catvm.safeFunction(window["CSSRuleList"]);
window["CSSScale"] = function CSSScale() { debugger; }; catvm.safeFunction(window["CSSScale"]);
window["CSSSkew"] = function CSSSkew() { debugger; }; catvm.safeFunction(window["CSSSkew"]);
window["CSSSkewX"] = function CSSSkewX() { debugger; }; catvm.safeFunction(window["CSSSkewX"]);
window["CSSSkewY"] = function CSSSkewY() { debugger; }; catvm.safeFunction(window["CSSSkewY"]);
window["CSSStyleDeclaration"] = function CSSStyleDeclaration() { debugger; }; catvm.safeFunction(window["CSSStyleDeclaration"]);
window["CSSStyleRule"] = function CSSStyleRule() { debugger; }; catvm.safeFunction(window["CSSStyleRule"]);
window["CSSStyleSheet"] = function CSSStyleSheet() { debugger; }; catvm.safeFunction(window["CSSStyleSheet"]);
window["CSSStyleValue"] = function CSSStyleValue() { debugger; }; catvm.safeFunction(window["CSSStyleValue"]);
window["CSSSupportsRule"] = function CSSSupportsRule() { debugger; }; catvm.safeFunction(window["CSSSupportsRule"]);
window["CSSTransformComponent"] = function CSSTransformComponent() { debugger; }; catvm.safeFunction(window["CSSTransformComponent"]);
window["CSSTransformValue"] = function CSSTransformValue() { debugger; }; catvm.safeFunction(window["CSSTransformValue"]);
window["CSSTransition"] = function CSSTransition() { debugger; }; catvm.safeFunction(window["CSSTransition"]);
window["CSSTranslate"] = function CSSTranslate() { debugger; }; catvm.safeFunction(window["CSSTranslate"]);
window["CSSUnitValue"] = function CSSUnitValue() { debugger; }; catvm.safeFunction(window["CSSUnitValue"]);
window["CSSUnparsedValue"] = function CSSUnparsedValue() { debugger; }; catvm.safeFunction(window["CSSUnparsedValue"]);
window["CSSVariableReferenceValue"] = function CSSVariableReferenceValue() { debugger; }; catvm.safeFunction(window["CSSVariableReferenceValue"]);
window["Cache"] = function Cache() { debugger; }; catvm.safeFunction(window["Cache"]);
window["CacheStorage"] = function CacheStorage() { debugger; }; catvm.safeFunction(window["CacheStorage"]);
window["CanvasCaptureMediaStreamTrack"] = function CanvasCaptureMediaStreamTrack() { debugger; }; catvm.safeFunction(window["CanvasCaptureMediaStreamTrack"]);
window["CanvasGradient"] = function CanvasGradient() { debugger; }; catvm.safeFunction(window["CanvasGradient"]);
window["CanvasPattern"] = function CanvasPattern() { debugger; }; catvm.safeFunction(window["CanvasPattern"]);
window["CanvasRenderingContext2D"] = function CanvasRenderingContext2D() { debugger; }; catvm.safeFunction(window["CanvasRenderingContext2D"]);
window["ChannelMergerNode"] = function ChannelMergerNode() { debugger; }; catvm.safeFunction(window["ChannelMergerNode"]);
window["ChannelSplitterNode"] = function ChannelSplitterNode() { debugger; }; catvm.safeFunction(window["ChannelSplitterNode"]);
window["CharacterData"] = function CharacterData() { debugger; }; catvm.safeFunction(window["CharacterData"]);
window["Clipboard"] = function Clipboard() { debugger; }; catvm.safeFunction(window["Clipboard"]);
window["ClipboardEvent"] = function ClipboardEvent() { debugger; }; catvm.safeFunction(window["ClipboardEvent"]);
window["ClipboardItem"] = function ClipboardItem() { debugger; }; catvm.safeFunction(window["ClipboardItem"]);
window["CloseEvent"] = function CloseEvent() { debugger; }; catvm.safeFunction(window["CloseEvent"]);
window["Comment"] = function Comment() { debugger; }; catvm.safeFunction(window["Comment"]);
window["CompositionEvent"] = function CompositionEvent() { debugger; }; catvm.safeFunction(window["CompositionEvent"]);
window["CompressionStream"] = function CompressionStream() { debugger; }; catvm.safeFunction(window["CompressionStream"]);
window["ConstantSourceNode"] = function ConstantSourceNode() { debugger; }; catvm.safeFunction(window["ConstantSourceNode"]);
window["ConvolverNode"] = function ConvolverNode() { debugger; }; catvm.safeFunction(window["ConvolverNode"]);
window["CountQueuingStrategy"] = function CountQueuingStrategy() { debugger; }; catvm.safeFunction(window["CountQueuingStrategy"]);
window["Credential"] = function Credential() { debugger; }; catvm.safeFunction(window["Credential"]);
window["CredentialsContainer"] = function CredentialsContainer() { debugger; }; catvm.safeFunction(window["CredentialsContainer"]);
window["Crypto"] = function Crypto() { debugger; }; catvm.safeFunction(window["Crypto"]);
window["CryptoKey"] = function CryptoKey() { debugger; }; catvm.safeFunction(window["CryptoKey"]);
window["CustomElementRegistry"] = function CustomElementRegistry() { debugger; }; catvm.safeFunction(window["CustomElementRegistry"]);
window["CustomEvent"] = function CustomEvent() { debugger; }; catvm.safeFunction(window["CustomEvent"]);
window["DOMError"] = function DOMError() { debugger; }; catvm.safeFunction(window["DOMError"]);
window["DOMException"] = function DOMException() { debugger; }; catvm.safeFunction(window["DOMException"]);
window["DOMImplementation"] = function DOMImplementation() { debugger; }; catvm.safeFunction(window["DOMImplementation"]);
window["DOMMatrix"] = function DOMMatrix() { debugger; }; catvm.safeFunction(window["DOMMatrix"]);
window["DOMMatrixReadOnly"] = function DOMMatrixReadOnly() { debugger; }; catvm.safeFunction(window["DOMMatrixReadOnly"]);
window["DOMParser"] = function DOMParser() { debugger; }; catvm.safeFunction(window["DOMParser"]);
window["DOMPoint"] = function DOMPoint() { debugger; }; catvm.safeFunction(window["DOMPoint"]);
debugger

window["DOMPointReadOnly"] = function DOMPointReadOnly() { debugger; }; catvm.safeFunction(window["DOMPointReadOnly"]);
window["DOMQuad"] = function DOMQuad() { debugger; }; catvm.safeFunction(window["DOMQuad"]);
window["DOMRect"] = function DOMRect() { debugger; }; catvm.safeFunction(window["DOMRect"]);
window["DOMRectList"] = function DOMRectList() { debugger; }; catvm.safeFunction(window["DOMRectList"]);
window["DOMRectReadOnly"] = function DOMRectReadOnly() { debugger; }; catvm.safeFunction(window["DOMRectReadOnly"]);
window["DOMStringList"] = function DOMStringList() { debugger; }; catvm.safeFunction(window["DOMStringList"]);
window["DOMStringMap"] = function DOMStringMap() { debugger; }; catvm.safeFunction(window["DOMStringMap"]);
window["DOMTokenList"] = function DOMTokenList() { debugger; }; catvm.safeFunction(window["DOMTokenList"]);
window["DataTransfer"] = function DataTransfer() { debugger; }; catvm.safeFunction(window["DataTransfer"]);
window["DataTransferItem"] = function DataTransferItem() { debugger; }; catvm.safeFunction(window["DataTransferItem"]);
window["DataTransferItemList"] = function DataTransferItemList() { debugger; }; catvm.safeFunction(window["DataTransferItemList"]);
window["DataView"] = function DataView() { debugger; }; catvm.safeFunction(window["DataView"]);

window["DecompressionStream"] = function DecompressionStream() { debugger; }; catvm.safeFunction(window["DecompressionStream"]);
window["DelayNode"] = function DelayNode() { debugger; }; catvm.safeFunction(window["DelayNode"]);
window["DeviceMotionEvent"] = function DeviceMotionEvent() { debugger; }; catvm.safeFunction(window["DeviceMotionEvent"]);
window["DeviceMotionEventAcceleration"] = function DeviceMotionEventAcceleration() { debugger; }; catvm.safeFunction(window["DeviceMotionEventAcceleration"]);
window["DeviceMotionEventRotationRate"] = function DeviceMotionEventRotationRate() { debugger; }; catvm.safeFunction(window["DeviceMotionEventRotationRate"]);
window["DeviceOrientationEvent"] = function DeviceOrientationEvent() { debugger; }; catvm.safeFunction(window["DeviceOrientationEvent"]);


window["DragEvent"] = function DragEvent() { debugger; }; catvm.safeFunction(window["DragEvent"]);
window["DynamicsCompressorNode"] = function DynamicsCompressorNode() { debugger; }; catvm.safeFunction(window["DynamicsCompressorNode"]);
window["Element"] = function Element() { debugger; }; catvm.safeFunction(window["Element"]);
window["ElementInternals"] = function ElementInternals() { debugger; }; catvm.safeFunction(window["ElementInternals"]);
window["Error"] = function Error() { debugger; }; catvm.safeFunction(window["Error"]);
window["ErrorEvent"] = function ErrorEvent() { debugger; }; catvm.safeFunction(window["ErrorEvent"]);
window["EvalError"] = function EvalError() { debugger; }; catvm.safeFunction(window["EvalError"]);
window["Event"] = function Event() { debugger; }; catvm.safeFunction(window["Event"]);
debugger
window["EventCounts"] = function EventCounts() { debugger; }; catvm.safeFunction(window["EventCounts"]);
window["EventSource"] = function EventSource() { debugger; }; catvm.safeFunction(window["EventSource"]);

window["External"] = function External() { debugger; }; catvm.safeFunction(window["External"]);
window["FeaturePolicy"] = function FeaturePolicy() { debugger; }; catvm.safeFunction(window["FeaturePolicy"]);
window["FederatedCredential"] = function FederatedCredential() { debugger; }; catvm.safeFunction(window["FederatedCredential"]);
window["File"] = function File() { debugger; }; catvm.safeFunction(window["File"]);
window["FileList"] = function FileList() { debugger; }; catvm.safeFunction(window["FileList"]);
window["FileReader"] = function FileReader() { debugger; }; catvm.safeFunction(window["FileReader"]);
window["FileSystemDirectoryHandle"] = function FileSystemDirectoryHandle() { debugger; }; catvm.safeFunction(window["FileSystemDirectoryHandle"]);
window["FileSystemFileHandle"] = function FileSystemFileHandle() { debugger; }; catvm.safeFunction(window["FileSystemFileHandle"]);
window["FileSystemHandle"] = function FileSystemHandle() { debugger; }; catvm.safeFunction(window["FileSystemHandle"]);
window["FileSystemWritableFileStream"] = function FileSystemWritableFileStream() { debugger; }; catvm.safeFunction(window["FileSystemWritableFileStream"]);
window["FinalizationRegistry"] = function FinalizationRegistry() { debugger; }; catvm.safeFunction(window["FinalizationRegistry"]);
window["Float32Array"] = Float32Array;
window["Float64Array"] = Float64Array;
window["FocusEvent"] = function FocusEvent() { debugger; }; catvm.safeFunction(window["FocusEvent"]);
window["FontFace"] = function FontFace() { debugger; }; catvm.safeFunction(window["FontFace"]);
window["FontFaceSetLoadEvent"] = function FontFaceSetLoadEvent() { debugger; }; catvm.safeFunction(window["FontFaceSetLoadEvent"]);
window["FormData"] = function FormData() { debugger; }; catvm.safeFunction(window["FormData"]);
window["FormDataEvent"] = function FormDataEvent() { debugger; }; catvm.safeFunction(window["FormDataEvent"]);
window["FragmentDirective"] = function FragmentDirective() { debugger; }; catvm.safeFunction(window["FragmentDirective"]);
window["Function"] = Function;
window["GainNode"] = function GainNode() { debugger; }; catvm.safeFunction(window["GainNode"]);
window["Gamepad"] = function Gamepad() { debugger; }; catvm.safeFunction(window["Gamepad"]);
window["GamepadButton"] = function GamepadButton() { debugger; }; catvm.safeFunction(window["GamepadButton"]);
window["GamepadEvent"] = function GamepadEvent() { debugger; }; catvm.safeFunction(window["GamepadEvent"]);
window["GamepadHapticActuator"] = function GamepadHapticActuator() { debugger; }; catvm.safeFunction(window["GamepadHapticActuator"]);
window["Geolocation"] = undefined;
window["GeolocationCoordinates"] = function GeolocationCoordinates() { debugger; }; catvm.safeFunction(window["GeolocationCoordinates"]);
window["GeolocationPosition"] = function GeolocationPosition() { debugger; }; catvm.safeFunction(window["GeolocationPosition"]);
window["GeolocationPositionError"] = function GeolocationPositionError() { debugger; }; catvm.safeFunction(window["GeolocationPositionError"]);
window["Gyroscope"] = function Gyroscope() { debugger; }; catvm.safeFunction(window["Gyroscope"]);
window["HTMLAllCollection"] = function HTMLAllCollection() { debugger; }; catvm.safeFunction(window["HTMLAllCollection"]);
window["HTMLAnchorElement"] = function HTMLAnchorElement() { debugger; }; catvm.safeFunction(window["HTMLAnchorElement"]);
window["HTMLAreaElement"] = function HTMLAreaElement() { debugger; }; catvm.safeFunction(window["HTMLAreaElement"]);
window["HTMLAudioElement"] = function HTMLAudioElement() { debugger; }; catvm.safeFunction(window["HTMLAudioElement"]);
window["HTMLBRElement"] = function HTMLBRElement() { debugger; }; catvm.safeFunction(window["HTMLBRElement"]);
window["HTMLBaseElement"] = function HTMLBaseElement() { debugger; }; catvm.safeFunction(window["HTMLBaseElement"]);
window["HTMLBodyElement"] = function HTMLBodyElement() { debugger; }; catvm.safeFunction(window["HTMLBodyElement"]);
window["HTMLButtonElement"] = function HTMLButtonElement() { debugger; }; catvm.safeFunction(window["HTMLButtonElement"]);

window["HTMLCollection"] = function HTMLCollection() { debugger; }; catvm.safeFunction(window["HTMLCollection"]);
window["HTMLContentElement"] = function HTMLContentElement() { debugger; }; catvm.safeFunction(window["HTMLContentElement"]);
window["HTMLDListElement"] = function HTMLDListElement() { debugger; }; catvm.safeFunction(window["HTMLDListElement"]);
window["HTMLDataElement"] = function HTMLDataElement() { debugger; }; catvm.safeFunction(window["HTMLDataElement"]);
debugger

window["HTMLDataListElement"] = function HTMLDataListElement() { debugger; }; catvm.safeFunction(window["HTMLDataListElement"]);
window["HTMLDetailsElement"] = function HTMLDetailsElement() { debugger; }; catvm.safeFunction(window["HTMLDetailsElement"]);
window["HTMLDialogElement"] = function HTMLDialogElement() { debugger; }; catvm.safeFunction(window["HTMLDialogElement"]);
window["HTMLDirectoryElement"] = function HTMLDirectoryElement() { debugger; }; catvm.safeFunction(window["HTMLDirectoryElement"]);
window["HTMLDivElement"] = function HTMLDivElement() { debugger; }; catvm.safeFunction(window["HTMLDivElement"]);


window["HTMLEmbedElement"] = function HTMLEmbedElement() { debugger; }; catvm.safeFunction(window["HTMLEmbedElement"]);
window["HTMLFieldSetElement"] = function HTMLFieldSetElement() { debugger; }; catvm.safeFunction(window["HTMLFieldSetElement"]);
window["HTMLFontElement"] = function HTMLFontElement() { debugger; }; catvm.safeFunction(window["HTMLFontElement"]);
window["HTMLFormControlsCollection"] = function HTMLFormControlsCollection() { debugger; }; catvm.safeFunction(window["HTMLFormControlsCollection"]);
window["HTMLFormElement"] = function HTMLFormElement() { debugger; }; catvm.safeFunction(window["HTMLFormElement"]);
window["HTMLFrameElement"] = function HTMLFrameElement() { debugger; }; catvm.safeFunction(window["HTMLFrameElement"]);
window["HTMLFrameSetElement"] = function HTMLFrameSetElement() { debugger; }; catvm.safeFunction(window["HTMLFrameSetElement"]);
window["HTMLHRElement"] = function HTMLHRElement() { debugger; }; catvm.safeFunction(window["HTMLHRElement"]);
window["HTMLHeadElement"] = function HTMLHeadElement() { debugger; }; catvm.safeFunction(window["HTMLHeadElement"]);
window["HTMLHeadingElement"] = function HTMLHeadingElement() { debugger; }; catvm.safeFunction(window["HTMLHeadingElement"]);
window["HTMLHtmlElement"] = function HTMLHtmlElement() { debugger; }; catvm.safeFunction(window["HTMLHtmlElement"]);
window["HTMLIFrameElement"] = function HTMLIFrameElement() { debugger; }; catvm.safeFunction(window["HTMLIFrameElement"]);
window["HTMLImageElement"] = function HTMLImageElement() { debugger; }; catvm.safeFunction(window["HTMLImageElement"]);
window["HTMLInputElement"] = function HTMLInputElement() { debugger; }; catvm.safeFunction(window["HTMLInputElement"]);
window["HTMLLIElement"] = function HTMLLIElement() { debugger; }; catvm.safeFunction(window["HTMLLIElement"]);
window["HTMLLabelElement"] = function HTMLLabelElement() { debugger; }; catvm.safeFunction(window["HTMLLabelElement"]);
window["HTMLLegendElement"] = function HTMLLegendElement() { debugger; }; catvm.safeFunction(window["HTMLLegendElement"]);
window["HTMLLinkElement"] = function HTMLLinkElement() { debugger; }; catvm.safeFunction(window["HTMLLinkElement"]);
window["HTMLMapElement"] = function HTMLMapElement() { debugger; }; catvm.safeFunction(window["HTMLMapElement"]);
window["HTMLMarqueeElement"] = function HTMLMarqueeElement() { debugger; }; catvm.safeFunction(window["HTMLMarqueeElement"]);
window["HTMLMediaElement"] = function HTMLMediaElement() { debugger; }; catvm.safeFunction(window["HTMLMediaElement"]);
window["HTMLMenuElement"] = function HTMLMenuElement() { debugger; }; catvm.safeFunction(window["HTMLMenuElement"]);
window["HTMLMetaElement"] = function HTMLMetaElement() { debugger; }; catvm.safeFunction(window["HTMLMetaElement"]);
window["HTMLMeterElement"] = function HTMLMeterElement() { debugger; }; catvm.safeFunction(window["HTMLMeterElement"]);
window["HTMLModElement"] = function HTMLModElement() { debugger; }; catvm.safeFunction(window["HTMLModElement"]);
debugger

window["HTMLOListElement"] = function HTMLOListElement() { debugger; }; catvm.safeFunction(window["HTMLOListElement"]);
window["HTMLObjectElement"] = function HTMLObjectElement() { debugger; }; catvm.safeFunction(window["HTMLObjectElement"]);
window["HTMLOptGroupElement"] = function HTMLOptGroupElement() { debugger; }; catvm.safeFunction(window["HTMLOptGroupElement"]);
window["HTMLOptionElement"] = function HTMLOptionElement() { debugger; }; catvm.safeFunction(window["HTMLOptionElement"]);
window["HTMLOptionsCollection"] = function HTMLOptionsCollection() { debugger; }; catvm.safeFunction(window["HTMLOptionsCollection"]);
window["HTMLOutputElement"] = function HTMLOutputElement() { debugger; }; catvm.safeFunction(window["HTMLOutputElement"]);
window["HTMLParagraphElement"] = function HTMLParagraphElement() { debugger; }; catvm.safeFunction(window["HTMLParagraphElement"]);
window["HTMLParamElement"] = function HTMLParamElement() { debugger; }; catvm.safeFunction(window["HTMLParamElement"]);
window["HTMLPictureElement"] = function HTMLPictureElement() { debugger; }; catvm.safeFunction(window["HTMLPictureElement"]);
window["HTMLPreElement"] = function HTMLPreElement() { debugger; }; catvm.safeFunction(window["HTMLPreElement"]);
window["HTMLProgressElement"] = function HTMLProgressElement() { debugger; }; catvm.safeFunction(window["HTMLProgressElement"]);
window["HTMLQuoteElement"] = function HTMLQuoteElement() { debugger; }; catvm.safeFunction(window["HTMLQuoteElement"]);
window["HTMLScriptElement"] = function HTMLScriptElement() { debugger; }; catvm.safeFunction(window["HTMLScriptElement"]);
window["HTMLSelectElement"] = function HTMLSelectElement() { debugger; }; catvm.safeFunction(window["HTMLSelectElement"]);
window["HTMLShadowElement"] = function HTMLShadowElement() { debugger; }; catvm.safeFunction(window["HTMLShadowElement"]);
window["HTMLSlotElement"] = function HTMLSlotElement() { debugger; }; catvm.safeFunction(window["HTMLSlotElement"]);
window["HTMLSourceElement"] = function HTMLSourceElement() { debugger; }; catvm.safeFunction(window["HTMLSourceElement"]);
window["HTMLSpanElement"] = function HTMLSpanElement() { debugger; }; catvm.safeFunction(window["HTMLSpanElement"]);
window["HTMLStyleElement"] = function HTMLStyleElement() { debugger; }; catvm.safeFunction(window["HTMLStyleElement"]);
window["HTMLTableCaptionElement"] = function HTMLTableCaptionElement() { debugger; }; catvm.safeFunction(window["HTMLTableCaptionElement"]);
window["HTMLTableCellElement"] = function HTMLTableCellElement() { debugger; }; catvm.safeFunction(window["HTMLTableCellElement"]);
window["HTMLTableColElement"] = function HTMLTableColElement() { debugger; }; catvm.safeFunction(window["HTMLTableColElement"]);
window["HTMLTableElement"] = function HTMLTableElement() { debugger; }; catvm.safeFunction(window["HTMLTableElement"]);
window["HTMLTableRowElement"] = function HTMLTableRowElement() { debugger; }; catvm.safeFunction(window["HTMLTableRowElement"]);
window["HTMLTableSectionElement"] = function HTMLTableSectionElement() { debugger; }; catvm.safeFunction(window["HTMLTableSectionElement"]);
window["HTMLTemplateElement"] = function HTMLTemplateElement() { debugger; }; catvm.safeFunction(window["HTMLTemplateElement"]);
window["HTMLTextAreaElement"] = function HTMLTextAreaElement() { debugger; }; catvm.safeFunction(window["HTMLTextAreaElement"]);
window["HTMLTimeElement"] = function HTMLTimeElement() { debugger; }; catvm.safeFunction(window["HTMLTimeElement"]);
window["HTMLTitleElement"] = function HTMLTitleElement() { debugger; }; catvm.safeFunction(window["HTMLTitleElement"]);
window["HTMLTrackElement"] = function HTMLTrackElement() { debugger; }; catvm.safeFunction(window["HTMLTrackElement"]);
window["HTMLUListElement"] = function HTMLUListElement() { debugger; }; catvm.safeFunction(window["HTMLUListElement"]);
window["HTMLUnknownElement"] = function HTMLUnknownElement() { debugger; }; catvm.safeFunction(window["HTMLUnknownElement"]);
window["HTMLVideoElement"] = function HTMLVideoElement() { debugger; }; catvm.safeFunction(window["HTMLVideoElement"]);
window["HashChangeEvent"] = function HashChangeEvent() { debugger; }; catvm.safeFunction(window["HashChangeEvent"]);
window["createImageBitmap"] = function createImageBitmap() { debugger; }; catvm.safeFunction(window["createImageBitmap"]);
window["fetch"] = function fetch() { debugger; }; catvm.safeFunction(window["fetch"]);
window["find"] = function find() { debugger; }; catvm.safeFunction(window["find"]);
window["focus"] = function focus() { debugger; }; catvm.safeFunction(window["focus"]);
window["getComputedStyle"] = function getComputedStyle() { debugger; }; catvm.safeFunction(window["getComputedStyle"]);
window["getSelection"] = function getSelection() { debugger; }; catvm.safeFunction(window["getSelection"]);
window["matchMedia"] = function matchMedia() { debugger; }; catvm.safeFunction(window["matchMedia"]);
window["moveBy"] = function moveBy() { debugger; }; catvm.safeFunction(window["moveBy"]);
window["moveTo"] = function moveTo() { debugger; }; catvm.safeFunction(window["moveTo"]);
window["open"] = function open() { debugger; }; catvm.safeFunction(window["open"]);
window["openDatabase"] = function openDatabase() { debugger; }; catvm.safeFunction(window["openDatabase"]);
window["postMessage"] = function postMessage() { debugger; }; catvm.safeFunction(window["postMessage"]);
window["print"] = function print() { debugger; }; catvm.safeFunction(window["print"]);
window["prompt"] = function prompt() { debugger; }; catvm.safeFunction(window["prompt"]);
window["queueMicrotask"] = function queueMicrotask() { debugger; }; catvm.safeFunction(window["queueMicrotask"]);
window["releaseEvents"] = function releaseEvents() { debugger; }; catvm.safeFunction(window["releaseEvents"]);
window["requestAnimationFrame"] = function requestAnimationFrame() { debugger; }; catvm.safeFunction(window["requestAnimationFrame"]);
window["requestIdleCallback"] = function requestIdleCallback() { debugger; }; catvm.safeFunction(window["requestIdleCallback"]);
window["resizeBy"] = function resizeBy() { debugger; }; catvm.safeFunction(window["resizeBy"]);
window["resizeTo"] = function resizeTo() { debugger; }; catvm.safeFunction(window["resizeTo"]);
window["Headers"] = function Headers() { debugger; }; catvm.safeFunction(window["Headers"]);
window["History"] = function History() { debugger; }; catvm.safeFunction(window["History"]);
window["IDBCursor"] = function IDBCursor() { debugger; }; catvm.safeFunction(window["IDBCursor"]);
window["IDBCursorWithValue"] = function IDBCursorWithValue() { debugger; }; catvm.safeFunction(window["IDBCursorWithValue"]);
window["IDBDatabase"] = function IDBDatabase() { debugger; }; catvm.safeFunction(window["IDBDatabase"]);
window["IDBFactory"] = function IDBFactory() { debugger; }; catvm.safeFunction(window["IDBFactory"]);
window["IDBIndex"] = function IDBIndex() { debugger; }; catvm.safeFunction(window["IDBIndex"]);
window["IDBKeyRange"] = function IDBKeyRange() { debugger; }; catvm.safeFunction(window["IDBKeyRange"]);
window["IDBObjectStore"] = function IDBObjectStore() { debugger; }; catvm.safeFunction(window["IDBObjectStore"]);
window["IDBOpenDBRequest"] = function IDBOpenDBRequest() { debugger; }; catvm.safeFunction(window["IDBOpenDBRequest"]);
window["IDBRequest"] = function IDBRequest() { debugger; }; catvm.safeFunction(window["IDBRequest"]);
window["IDBTransaction"] = function IDBTransaction() { debugger; }; catvm.safeFunction(window["IDBTransaction"]);
window["IDBVersionChangeEvent"] = function IDBVersionChangeEvent() { debugger; }; catvm.safeFunction(window["IDBVersionChangeEvent"]);
window["IIRFilterNode"] = function IIRFilterNode() { debugger; }; catvm.safeFunction(window["IIRFilterNode"]);
window["IdleDeadline"] = function IdleDeadline() { debugger; }; catvm.safeFunction(window["IdleDeadline"]);
window["Image"] = function Image() { debugger; }; catvm.safeFunction(window["Image"]);
window["ImageBitmap"] = function ImageBitmap() { debugger; }; catvm.safeFunction(window["ImageBitmap"]);
window["ImageBitmapRenderingContext"] = function ImageBitmapRenderingContext() { debugger; }; catvm.safeFunction(window["ImageBitmapRenderingContext"]);
window["ImageCapture"] = function ImageCapture() { debugger; }; catvm.safeFunction(window["ImageCapture"]);
window["ImageData"] = function ImageData() { debugger; }; catvm.safeFunction(window["ImageData"]);
window["InputDeviceCapabilities"] = function InputDeviceCapabilities() { debugger; }; catvm.safeFunction(window["InputDeviceCapabilities"]);
window["InputDeviceInfo"] = function InputDeviceInfo() { debugger; }; catvm.safeFunction(window["InputDeviceInfo"]);
window["InputEvent"] = function InputEvent() { debugger; }; catvm.safeFunction(window["InputEvent"]);
window["Int8Array"] = Int8Array;
window["Int16Array"] = Int16Array;
window["Int32Array"] =Int32Array;
window["IntersectionObserver"] = function IntersectionObserver() { debugger; }; catvm.safeFunction(window["IntersectionObserver"]);
window["IntersectionObserverEntry"] = function IntersectionObserverEntry() { debugger; }; catvm.safeFunction(window["IntersectionObserverEntry"]);
window["Keyboard"] = function Keyboard() { debugger; }; catvm.safeFunction(window["Keyboard"]);
window["KeyboardEvent"] = function KeyboardEvent() { debugger; }; catvm.safeFunction(window["KeyboardEvent"]);
window["KeyboardLayoutMap"] = function KeyboardLayoutMap() { debugger; }; catvm.safeFunction(window["KeyboardLayoutMap"]);
window["KeyframeEffect"] = function KeyframeEffect() { debugger; }; catvm.safeFunction(window["KeyframeEffect"]);
window["LargestContentfulPaint"] = function LargestContentfulPaint() { debugger; }; catvm.safeFunction(window["LargestContentfulPaint"]);
window["LayoutShift"] = function LayoutShift() { debugger; }; catvm.safeFunction(window["LayoutShift"]);
window["LayoutShiftAttribution"] = function LayoutShiftAttribution() { debugger; }; catvm.safeFunction(window["LayoutShiftAttribution"]);


window["LinearAccelerationSensor"] = function LinearAccelerationSensor() { debugger; }; catvm.safeFunction(window["LinearAccelerationSensor"]);
window["Lock"] = function Lock() { debugger; }; catvm.safeFunction(window["Lock"]);
window["LockManager"] = function LockManager() { debugger; }; catvm.safeFunction(window["LockManager"]);
window["MIDIAccess"] = function MIDIAccess() { debugger; }; catvm.safeFunction(window["MIDIAccess"]);
window["MIDIConnectionEvent"] = function MIDIConnectionEvent() { debugger; }; catvm.safeFunction(window["MIDIConnectionEvent"]);
window["MIDIInput"] = function MIDIInput() { debugger; }; catvm.safeFunction(window["MIDIInput"]);
window["MIDIInputMap"] = function MIDIInputMap() { debugger; }; catvm.safeFunction(window["MIDIInputMap"]);








window["MIDIMessageEvent"] = function MIDIMessageEvent() { debugger; }; catvm.safeFunction(window["MIDIMessageEvent"]);
window["MIDIOutput"] = function MIDIOutput() { debugger; }; catvm.safeFunction(window["MIDIOutput"]);
window["MIDIOutputMap"] = function MIDIOutputMap() { debugger; }; catvm.safeFunction(window["MIDIOutputMap"]);
window["MIDIPort"] = function MIDIPort() { debugger; }; catvm.safeFunction(window["MIDIPort"]);
window["Map"] = function Map() { debugger; }; catvm.safeFunction(window["Map"]);
window["MediaCapabilities"] = function MediaCapabilities() { debugger; }; catvm.safeFunction(window["MediaCapabilities"]);
window["MediaDeviceInfo"] = function MediaDeviceInfo() { debugger; }; catvm.safeFunction(window["MediaDeviceInfo"]);
window["MediaDevices"] = function MediaDevices() { debugger; }; catvm.safeFunction(window["MediaDevices"]);
window["MediaElementAudioSourceNode"] = function MediaElementAudioSourceNode() { debugger; }; catvm.safeFunction(window["MediaElementAudioSourceNode"]);
window["MediaEncryptedEvent"] = function MediaEncryptedEvent() { debugger; }; catvm.safeFunction(window["MediaEncryptedEvent"]);
window["MediaError"] = function MediaError() { debugger; }; catvm.safeFunction(window["MediaError"]);
window["MediaKeyMessageEvent"] = function MediaKeyMessageEvent() { debugger; }; catvm.safeFunction(window["MediaKeyMessageEvent"]);
window["MediaKeySession"] = function MediaKeySession() { debugger; }; catvm.safeFunction(window["MediaKeySession"]);
window["MediaKeyStatusMap"] = function MediaKeyStatusMap() { debugger; }; catvm.safeFunction(window["MediaKeyStatusMap"]);
window["MediaKeySystemAccess"] = function MediaKeySystemAccess() { debugger; }; catvm.safeFunction(window["MediaKeySystemAccess"]);
window["MediaKeys"] = function MediaKeys() { debugger; }; catvm.safeFunction(window["MediaKeys"]);
window["MediaList"] = function MediaList() { debugger; }; catvm.safeFunction(window["MediaList"]);
window["MediaMetadata"] = function MediaMetadata() { debugger; }; catvm.safeFunction(window["MediaMetadata"]);
window["MediaQueryList"] = function MediaQueryList() { debugger; }; catvm.safeFunction(window["MediaQueryList"]);
window["MediaQueryListEvent"] = function MediaQueryListEvent() { debugger; }; catvm.safeFunction(window["MediaQueryListEvent"]);
window["MediaRecorder"] = function MediaRecorder() { debugger; }; catvm.safeFunction(window["MediaRecorder"]);
window["MediaSession"] = function MediaSession() { debugger; }; catvm.safeFunction(window["MediaSession"]);
window["MediaSource"] = function MediaSource() { debugger; }; catvm.safeFunction(window["MediaSource"]);
window["MediaStream"] = function MediaStream() { debugger; }; catvm.safeFunction(window["MediaStream"]);
window["MediaStreamAudioDestinationNode"] = function MediaStreamAudioDestinationNode() { debugger; }; catvm.safeFunction(window["MediaStreamAudioDestinationNode"]);
window["MediaStreamAudioSourceNode"] = function MediaStreamAudioSourceNode() { debugger; }; catvm.safeFunction(window["MediaStreamAudioSourceNode"]);
window["MediaStreamEvent"] = function MediaStreamEvent() { debugger; }; catvm.safeFunction(window["MediaStreamEvent"]);
window["MediaStreamTrack"] = function MediaStreamTrack() { debugger; }; catvm.safeFunction(window["MediaStreamTrack"]);
window["MIDIMessageEvent"] = function MIDIMessageEvent() { debugger; }; catvm.safeFunction(window["MIDIMessageEvent"]);
window["MIDIOutput"] = function MIDIOutput() { debugger; }; catvm.safeFunction(window["MIDIOutput"]);
window["MIDIOutputMap"] = function MIDIOutputMap() { debugger; }; catvm.safeFunction(window["MIDIOutputMap"]);
window["MIDIPort"] = function MIDIPort() { debugger; }; catvm.safeFunction(window["MIDIPort"]);
window["Map"] = function Map() { debugger; }; catvm.safeFunction(window["Map"]);
window["MediaCapabilities"] = function MediaCapabilities() { debugger; }; catvm.safeFunction(window["MediaCapabilities"]);
window["MediaDeviceInfo"] = function MediaDeviceInfo() { debugger; }; catvm.safeFunction(window["MediaDeviceInfo"]);
window["MediaDevices"] = function MediaDevices() { debugger; }; catvm.safeFunction(window["MediaDevices"]);
window["MediaElementAudioSourceNode"] = function MediaElementAudioSourceNode() { debugger; }; catvm.safeFunction(window["MediaElementAudioSourceNode"]);
window["MediaEncryptedEvent"] = function MediaEncryptedEvent() { debugger; }; catvm.safeFunction(window["MediaEncryptedEvent"]);
window["MediaError"] = function MediaError() { debugger; }; catvm.safeFunction(window["MediaError"]);
window["MediaKeyMessageEvent"] = function MediaKeyMessageEvent() { debugger; }; catvm.safeFunction(window["MediaKeyMessageEvent"]);
window["MediaKeySession"] = function MediaKeySession() { debugger; }; catvm.safeFunction(window["MediaKeySession"]);
window["MediaKeyStatusMap"] = function MediaKeyStatusMap() { debugger; }; catvm.safeFunction(window["MediaKeyStatusMap"]);
window["MediaKeySystemAccess"] = function MediaKeySystemAccess() { debugger; }; catvm.safeFunction(window["MediaKeySystemAccess"]);
window["MediaKeys"] = function MediaKeys() { debugger; }; catvm.safeFunction(window["MediaKeys"]);
window["MediaList"] = function MediaList() { debugger; }; catvm.safeFunction(window["MediaList"]);
window["MediaMetadata"] = function MediaMetadata() { debugger; }; catvm.safeFunction(window["MediaMetadata"]);
window["MediaQueryList"] = function MediaQueryList() { debugger; }; catvm.safeFunction(window["MediaQueryList"]);
window["MediaQueryListEvent"] = function MediaQueryListEvent() { debugger; }; catvm.safeFunction(window["MediaQueryListEvent"]);
window["MediaRecorder"] = function MediaRecorder() { debugger; }; catvm.safeFunction(window["MediaRecorder"]);
window["MediaSession"] = function MediaSession() { debugger; }; catvm.safeFunction(window["MediaSession"]);
window["MediaSource"] = function MediaSource() { debugger; }; catvm.safeFunction(window["MediaSource"]);
window["MediaStream"] = function MediaStream() { debugger; }; catvm.safeFunction(window["MediaStream"]);
window["MediaStreamAudioDestinationNode"] = function MediaStreamAudioDestinationNode() { debugger; }; catvm.safeFunction(window["MediaStreamAudioDestinationNode"]);
window["MediaStreamAudioSourceNode"] = function MediaStreamAudioSourceNode() { debugger; }; catvm.safeFunction(window["MediaStreamAudioSourceNode"]);
window["MediaStreamEvent"] = function MediaStreamEvent() { debugger; }; catvm.safeFunction(window["MediaStreamEvent"]);
window["MediaStreamTrack"] = function MediaStreamTrack() { debugger; }; catvm.safeFunction(window["MediaStreamTrack"]);
window["MediaStreamTrackEvent"] = function MediaStreamTrackEvent() { debugger; }; catvm.safeFunction(window["MediaStreamTrackEvent"]);
window["MessageChannel"] = function MessageChannel() { debugger; }; catvm.safeFunction(window["MessageChannel"]);
window["MessageEvent"] = function MessageEvent() { debugger; }; catvm.safeFunction(window["MessageEvent"]);
window["MessagePort"] = function MessagePort() { debugger; }; catvm.safeFunction(window["MessagePort"]);
window["MimeType"] = MimeType;
window["MimeTypeArray"] = MimeTypeArray;
window["MouseEvent"] = function MouseEvent() { debugger; }; catvm.safeFunction(window["MouseEvent"]);




window["MutationEvent"] = function MutationEvent() { debugger; }; catvm.safeFunction(window["MutationEvent"]);
window["MutationObserver"] = function MutationObserver() { debugger; }; catvm.safeFunction(window["MutationObserver"]);
window["MutationRecord"] = function MutationRecord() { debugger; }; catvm.safeFunction(window["MutationRecord"]);
window["NamedNodeMap"] = function NamedNodeMap() { debugger; }; catvm.safeFunction(window["NamedNodeMap"]);
window["defaultStatus"] = "";
window["devicePixelRatio"] = function devicePixelRatio() { debugger; }; catvm.safeFunction(window["devicePixelRatio"]);
window["isSecureContext"] = function isSecureContext() { debugger; }; catvm.safeFunction(window["isSecureContext"]);
window["length"] = function length() { debugger; }; catvm.safeFunction(window["length"]);
window["scrollX"] = function scrollX() { debugger; }; catvm.safeFunction(window["scrollX"]);
window["scrollY"] = function scrollY() { debugger; }; catvm.safeFunction(window["scrollY"]);
window["screenLeft"] = function screenLeft() { debugger; }; catvm.safeFunction(window["screenLeft"]);
window["screenTop"] = function screenTop() { debugger; }; catvm.safeFunction(window["screenTop"]);



window["screenX"] = 0;
window["screenY"] = 0;


window["opener"] = null;
window["origin"] = "https://www.bilibili.com";



window["outerHeight"] = 1050;
window["outerWidth"] = 1920;
window["pageXOffset"] = 0;
window["pageYOffset"] = 0;
window["innerHeight"] = 947;


window["innerWidth"] = function innerWidth() { debugger; }; catvm.safeFunction(window["innerWidth"]);
window["onabort"] = function onabort() { debugger; }; catvm.safeFunction(window["onabort"]);
window["onafterprint"] = function onafterprint() { debugger; }; catvm.safeFunction(window["onafterprint"]);
window["onanimationend"] = function onanimationend() { debugger; }; catvm.safeFunction(window["onanimationend"]);
window["onanimationiteration"] = function onanimationiteration() { debugger; }; catvm.safeFunction(window["onanimationiteration"]);
window["onanimationstart"] = function onanimationstart() { debugger; }; catvm.safeFunction(window["onanimationstart"]);
window["onappinstalled"] = function onappinstalled() { debugger; }; catvm.safeFunction(window["onappinstalled"]);
window["onauxclick"] = function onauxclick() { debugger; }; catvm.safeFunction(window["onauxclick"]);
window["onbeforeinstallprompt"] = function onbeforeinstallprompt() { debugger; }; catvm.safeFunction(window["onbeforeinstallprompt"]);
window["onbeforeprint"] = function onbeforeprint() { debugger; }; catvm.safeFunction(window["onbeforeprint"]);
window["onbeforeunload"] = function onbeforeunload() { debugger; }; catvm.safeFunction(window["onbeforeunload"]);
window["onblur"] = function onblur() { debugger; }; catvm.safeFunction(window["onblur"]);
window["oncancel"] = function oncancel() { debugger; }; catvm.safeFunction(window["oncancel"]);


window["oncanplay"] = function oncanplay() { debugger; }; catvm.safeFunction(window["oncanplay"]);
window["oncanplaythrough"] = function oncanplaythrough() { debugger; }; catvm.safeFunction(window["oncanplaythrough"]);
window["onchange"] = function onchange() { debugger; }; catvm.safeFunction(window["onchange"]);
window["onclick"] = function onclick() { debugger; }; catvm.safeFunction(window["onclick"]);
window["onclose"] = function onclose() { debugger; }; catvm.safeFunction(window["onclose"]);


window["oncontextmenu"] = function oncontextmenu() { debugger; }; catvm.safeFunction(window["oncontextmenu"]);
window["oncuechange"] = function oncuechange() { debugger; }; catvm.safeFunction(window["oncuechange"]);
window["ondblclick"] = function ondblclick() { debugger; }; catvm.safeFunction(window["ondblclick"]);
window["ondevicemotion"] = function ondevicemotion() { debugger; }; catvm.safeFunction(window["ondevicemotion"]);
window["ondeviceorientation"] = function ondeviceorientation() { debugger; }; catvm.safeFunction(window["ondeviceorientation"]);
window["ondeviceorientationabsolute"] = function ondeviceorientationabsolute() { debugger; }; catvm.safeFunction(window["ondeviceorientationabsolute"]);
window["ondrag"] = function ondrag() { debugger; }; catvm.safeFunction(window["ondrag"]);
window["ondragend"] = function ondragend() { debugger; }; catvm.safeFunction(window["ondragend"]);
window["ondragenter"] = function ondragenter() { debugger; }; catvm.safeFunction(window["ondragenter"]);
window["ondragleave"] = function ondragleave() { debugger; }; catvm.safeFunction(window["ondragleave"]);
window["ondragover"] = function ondragover() { debugger; }; catvm.safeFunction(window["ondragover"]);
window["ondragstart"] = function ondragstart() { debugger; }; catvm.safeFunction(window["ondragstart"]);
window["ondrop"] = function ondrop() { debugger; }; catvm.safeFunction(window["ondrop"]);
window["ondurationchange"] = function ondurationchange() { debugger; }; catvm.safeFunction(window["ondurationchange"]);
window["onemptied"] = function onemptied() { debugger; }; catvm.safeFunction(window["onemptied"]);
window["onended"] = function onended() { debugger; }; catvm.safeFunction(window["onended"]);
window["onerror"] = function onerror() { debugger; }; catvm.safeFunction(window["onerror"]);
window["onfocus"] = function onfocus() { debugger; }; catvm.safeFunction(window["onfocus"]);
window["onformdata"] = function onformdata() { debugger; }; catvm.safeFunction(window["onformdata"]);
window["ongotpointercapture"] = function ongotpointercapture() { debugger; }; catvm.safeFunction(window["ongotpointercapture"]);
window["onhashchange"] = function onhashchange() { debugger; }; catvm.safeFunction(window["onhashchange"]);
window["oninput"] = function oninput() { debugger; }; catvm.safeFunction(window["oninput"]);
window["oninvalid"] = function oninvalid() { debugger; }; catvm.safeFunction(window["oninvalid"]);
window["onkeydown"] = function onkeydown() { debugger; }; catvm.safeFunction(window["onkeydown"]);
window["onkeypress"] = function onkeypress() { debugger; }; catvm.safeFunction(window["onkeypress"]);
window["onkeyup"] = function onkeyup() { debugger; }; catvm.safeFunction(window["onkeyup"]);
window["onlanguagechange"] = function onlanguagechange() { debugger; }; catvm.safeFunction(window["onlanguagechange"]);
window["onload"] = function onload() { debugger; }; catvm.safeFunction(window["onload"]);
window["onloadeddata"] = function onloadeddata() { debugger; }; catvm.safeFunction(window["onloadeddata"]);
window["onloadedmetadata"] = function onloadedmetadata() { debugger; }; catvm.safeFunction(window["onloadedmetadata"]);
window["onloadstart"] = function onloadstart() { debugger; }; catvm.safeFunction(window["onloadstart"]);
window["onlostpointercapture"] = function onlostpointercapture() { debugger; }; catvm.safeFunction(window["onlostpointercapture"]);
window["onmessage"] = function onmessage() { debugger; }; catvm.safeFunction(window["onmessage"]);
window["onmessageerror"] = function onmessageerror() { debugger; }; catvm.safeFunction(window["onmessageerror"]);
window["onmousedown"] = function onmousedown() { debugger; }; catvm.safeFunction(window["onmousedown"]);
window["onmouseenter"] = function onmouseenter() { debugger; }; catvm.safeFunction(window["onmouseenter"]);
window["onmouseleave"] = function onmouseleave() { debugger; }; catvm.safeFunction(window["onmouseleave"]);
window["onmousemove"] = function onmousemove() { debugger; }; catvm.safeFunction(window["onmousemove"]);
window["onmouseout"] = function onmouseout() { debugger; }; catvm.safeFunction(window["onmouseout"]);
window["onmouseover"] = function onmouseover() { debugger; }; catvm.safeFunction(window["onmouseover"]);
window["onmouseup"] = function onmouseup() { debugger; }; catvm.safeFunction(window["onmouseup"]);
window["onmousewheel"] = function onmousewheel() { debugger; }; catvm.safeFunction(window["onmousewheel"]);
window["onoffline"] = function onoffline() { debugger; }; catvm.safeFunction(window["onoffline"]);
window["ononline"] = function ononline() { debugger; }; catvm.safeFunction(window["ononline"]);
window["onpagehide"] = function onpagehide() { debugger; }; catvm.safeFunction(window["onpagehide"]);
window["onpageshow"] = function onpageshow() { debugger; }; catvm.safeFunction(window["onpageshow"]);
window["onpause"] = function onpause() { debugger; }; catvm.safeFunction(window["onpause"]);
window["onplay"] = function onplay() { debugger; }; catvm.safeFunction(window["onplay"]);
window["onplaying"] = function onplaying() { debugger; }; catvm.safeFunction(window["onplaying"]);
window["onpointercancel"] = function onpointercancel() { debugger; }; catvm.safeFunction(window["onpointercancel"]);
window["onpointerdown"] = function onpointerdown() { debugger; }; catvm.safeFunction(window["onpointerdown"]);
window["onpointerenter"] = function onpointerenter() { debugger; }; catvm.safeFunction(window["onpointerenter"]);
window["onpointerleave"] = function onpointerleave() { debugger; }; catvm.safeFunction(window["onpointerleave"]);
window["onpointermove"] = function onpointermove() { debugger; }; catvm.safeFunction(window["onpointermove"]);
window["onpointerout"] = function onpointerout() { debugger; }; catvm.safeFunction(window["onpointerout"]);
window["onpointerover"] = function onpointerover() { debugger; }; catvm.safeFunction(window["onpointerover"]);
window["onpointerrawupdate"] = function onpointerrawupdate() { debugger; }; catvm.safeFunction(window["onpointerrawupdate"]);
window["onpointerup"] = function onpointerup() { debugger; }; catvm.safeFunction(window["onpointerup"]);
window["onpopstate"] = function onpopstate() { debugger; }; catvm.safeFunction(window["onpopstate"]);
window["onprogress"] = function onprogress() { debugger; }; catvm.safeFunction(window["onprogress"]);
window["onratechange"] = function onratechange() { debugger; }; catvm.safeFunction(window["onratechange"]);
window["onrejectionhandled"] = function onrejectionhandled() { debugger; }; catvm.safeFunction(window["onrejectionhandled"]);
window["onreset"] = function onreset() { debugger; }; catvm.safeFunction(window["onreset"]);
window["onresize"] = function onresize() { debugger; }; catvm.safeFunction(window["onresize"]);
window["onscroll"] = function onscroll() { debugger; }; catvm.safeFunction(window["onscroll"]);
window["onsearch"] = function onsearch() { debugger; }; catvm.safeFunction(window["onsearch"]);
window["onseeked"] = function onseeked() { debugger; }; catvm.safeFunction(window["onseeked"]);


window["onseeking"] = function onseeking() { debugger; }; catvm.safeFunction(window["onseeking"]);
window["onselect"] = function onselect() { debugger; }; catvm.safeFunction(window["onselect"]);
window["onselectionchange"] = function onselectionchange() { debugger; }; catvm.safeFunction(window["onselectionchange"]);
window["onselectstart"] = function onselectstart() { debugger; }; catvm.safeFunction(window["onselectstart"]);
window["onstalled"] = function onstalled() { debugger; }; catvm.safeFunction(window["onstalled"]);
window["onstorage"] = function onstorage() { debugger; }; catvm.safeFunction(window["onstorage"]);
window["onsubmit"] = function onsubmit() { debugger; }; catvm.safeFunction(window["onsubmit"]);


window["onsuspend"] = function onsuspend() { debugger; }; catvm.safeFunction(window["onsuspend"]);
window["ontimeupdate"] = function ontimeupdate() { debugger; }; catvm.safeFunction(window["ontimeupdate"]);
window["ontoggle"] = function ontoggle() { debugger; }; catvm.safeFunction(window["ontoggle"]);
window["ontransitionend"] = function ontransitionend() { debugger; }; catvm.safeFunction(window["ontransitionend"]);
window["onunhandledrejection"] = function onunhandledrejection() { debugger; }; catvm.safeFunction(window["onunhandledrejection"]);
window["onunload"] = function onunload() { debugger; }; catvm.safeFunction(window["onunload"]);
window["USB"] = function USB() { debugger; }; catvm.safeFunction(window["USB"]);
window["USBAlternateInterface"] = function USBAlternateInterface() { debugger; }; catvm.safeFunction(window["USBAlternateInterface"]);
window["USBConfiguration"] = function USBConfiguration() { debugger; }; catvm.safeFunction(window["USBConfiguration"]);
window["USBConnectionEvent"] = function USBConnectionEvent() { debugger; }; catvm.safeFunction(window["USBConnectionEvent"]);
window["USBDevice"] = function USBDevice() { debugger; }; catvm.safeFunction(window["USBDevice"]);
window["USBEndpoint"] = function USBEndpoint() { debugger; }; catvm.safeFunction(window["USBEndpoint"]);
window["USBInTransferResult"] = function USBInTransferResult() { debugger; }; catvm.safeFunction(window["USBInTransferResult"]);
window["USBInterface"] = function USBInterface() { debugger; }; catvm.safeFunction(window["USBInterface"]);
window["USBIsochronousInTransferPacket"] = function USBIsochronousInTransferPacket() { debugger; }; catvm.safeFunction(window["USBIsochronousInTransferPacket"]);
window["USBIsochronousInTransferResult"] = function USBIsochronousInTransferResult() { debugger; }; catvm.safeFunction(window["USBIsochronousInTransferResult"]);
window["USBIsochronousOutTransferPacket"] = function USBIsochronousOutTransferPacket() { debugger; }; catvm.safeFunction(window["USBIsochronousOutTransferPacket"]);
window["USBIsochronousOutTransferResult"] = function USBIsochronousOutTransferResult() { debugger; }; catvm.safeFunction(window["USBIsochronousOutTransferResult"]);
window["USBOutTransferResult"] = function USBOutTransferResult() { debugger; }; catvm.safeFunction(window["USBOutTransferResult"]);
window["Uint8Array"] = Uint8Array;
window["Uint8ClampedArray"] = function Uint8ClampedArray() { debugger; }; catvm.safeFunction(window["Uint8ClampedArray"]);
window["Uint16Array"] = Uint16Array;
window["Uint32Array"] = Uint32Array;
window["UserActivation"] = function UserActivation() { debugger; }; catvm.safeFunction(window["UserActivation"]);
window["VTTCue"] = function VTTCue() { debugger; }; catvm.safeFunction(window["VTTCue"]);
window["ValidityState"] = function ValidityState() { debugger; }; catvm.safeFunction(window["ValidityState"]);
window["VideoPlaybackQuality"] = function VideoPlaybackQuality() { debugger; }; catvm.safeFunction(window["VideoPlaybackQuality"]);
window["VisualViewport"] = function VisualViewport() { debugger; }; catvm.safeFunction(window["VisualViewport"]);
window["WakeLock"] = function WakeLock() { debugger; }; catvm.safeFunction(window["WakeLock"]);
window["WakeLockSentinel"] = function WakeLockSentinel() { debugger; }; catvm.safeFunction(window["WakeLockSentinel"]);
window["WaveShaperNode"] = function WaveShaperNode() { debugger; }; catvm.safeFunction(window["WaveShaperNode"]);
window["WeakMap"] = function WeakMap() { debugger; }; catvm.safeFunction(window["WeakMap"]);
window["WeakRef"] = function WeakRef() { debugger; }; catvm.safeFunction(window["WeakRef"]);
window["WeakSet"] = function WeakSet() { debugger; }; catvm.safeFunction(window["WeakSet"]);
window["WebGL2RenderingContext"] = function WebGL2RenderingContext() { debugger; }; catvm.safeFunction(window["WebGL2RenderingContext"]);
window["WebGLActiveInfo"] = function WebGLActiveInfo() { debugger; }; catvm.safeFunction(window["WebGLActiveInfo"]);
window["WebGLBuffer"] = function WebGLBuffer() { debugger; }; catvm.safeFunction(window["WebGLBuffer"]);
window["WebGLContextEvent"] = function WebGLContextEvent() { debugger; }; catvm.safeFunction(window["WebGLContextEvent"]);
window["WebGLFramebuffer"] = function WebGLFramebuffer() { debugger; }; catvm.safeFunction(window["WebGLFramebuffer"]);
window["WebGLProgram"] = function WebGLProgram() { debugger; }; catvm.safeFunction(window["WebGLProgram"]);
window["WebGLQuery"] = function WebGLQuery() { debugger; }; catvm.safeFunction(window["WebGLQuery"]);
window["WebGLRenderbuffer"] = function WebGLRenderbuffer() { debugger; }; catvm.safeFunction(window["WebGLRenderbuffer"]);
window["WebGLRenderingContext"] = function WebGLRenderingContext() { debugger; }; catvm.safeFunction(window["WebGLRenderingContext"]);
window["WebGLSampler"] = function WebGLSampler() { debugger; }; catvm.safeFunction(window["WebGLSampler"]);
window["WebGLShader"] = function WebGLShader() { debugger; }; catvm.safeFunction(window["WebGLShader"]);
window["WebGLShaderPrecisionFormat"] = function WebGLShaderPrecisionFormat() { debugger; }; catvm.safeFunction(window["WebGLShaderPrecisionFormat"]);
window["WebGLSync"] = function WebGLSync() { debugger; }; catvm.safeFunction(window["WebGLSync"]);
window["WebGLTexture"] = function WebGLTexture() { debugger; }; catvm.safeFunction(window["WebGLTexture"]);
window["WebGLTransformFeedback"] = function WebGLTransformFeedback() { debugger; }; catvm.safeFunction(window["WebGLTransformFeedback"]);
window["WebGLUniformLocation"] = function WebGLUniformLocation() { debugger; }; catvm.safeFunction(window["WebGLUniformLocation"]);
window["WebGLVertexArrayObject"] = function WebGLVertexArrayObject() { debugger; }; catvm.safeFunction(window["WebGLVertexArrayObject"]);
window["WebKitCSSMatrix"] = function WebKitCSSMatrix() { debugger; }; catvm.safeFunction(window["WebKitCSSMatrix"]);
window["WebKitMutationObserver"] = function WebKitMutationObserver() { debugger; }; catvm.safeFunction(window["WebKitMutationObserver"]);
window["WebSocket"] = function WebSocket() { debugger; }; catvm.safeFunction(window["WebSocket"]);
window["WheelEvent"] = function WheelEvent() { debugger; }; catvm.safeFunction(window["WheelEvent"]);
window["Window"] = function Window() { debugger; }; catvm.safeFunction(window["Window"]);
window["Worker"] = function Worker() { debugger; }; catvm.safeFunction(window["Worker"]);
window["Worklet"] = function Worklet() { debugger; }; catvm.safeFunction(window["Worklet"]);
window["WritableStream"] = function WritableStream() { debugger; }; catvm.safeFunction(window["WritableStream"]);
window["WritableStreamDefaultWriter"] = function WritableStreamDefaultWriter() { debugger; }; catvm.safeFunction(window["WritableStreamDefaultWriter"]);
window["XMLDocument"] = function XMLDocument() { debugger; }; catvm.safeFunction(window["XMLDocument"]);
window["XMLHttpRequest"] = function XMLHttpRequest() { debugger; }; catvm.safeFunction(window["XMLHttpRequest"]);
window["XMLHttpRequestEventTarget"] = function XMLHttpRequestEventTarget() { debugger; }; catvm.safeFunction(window["XMLHttpRequestEventTarget"]);
window["XMLHttpRequestUpload"] = function XMLHttpRequestUpload() { debugger; }; catvm.safeFunction(window["XMLHttpRequestUpload"]);
window["XMLSerializer"] = function XMLSerializer() { debugger; }; catvm.safeFunction(window["XMLSerializer"]);
window["XPathEvaluator"] = function XPathEvaluator() { debugger; }; catvm.safeFunction(window["XPathEvaluator"]);
window["XPathExpression"] = function XPathExpression() { debugger; }; catvm.safeFunction(window["XPathExpression"]);
window["XPathResult"] = function XPathResult() { debugger; }; catvm.safeFunction(window["XPathResult"]);
window["XRAnchor"] = function XRAnchor() { debugger; }; catvm.safeFunction(window["XRAnchor"]);
window["XRAnchorSet"] = function XRAnchorSet() { debugger; }; catvm.safeFunction(window["XRAnchorSet"]);
window["XRBoundedReferenceSpace"] = function XRBoundedReferenceSpace() { debugger; }; catvm.safeFunction(window["XRBoundedReferenceSpace"]);
window["XRDOMOverlayState"] = function XRDOMOverlayState() { debugger; }; catvm.safeFunction(window["XRDOMOverlayState"]);
window["XRFrame"] = function XRFrame() { debugger; }; catvm.safeFunction(window["XRFrame"]);

window["XRHitTestResult"] = function XRHitTestResult() { debugger; }; catvm.safeFunction(window["XRHitTestResult"]);
window["XRHitTestSource"] = function XRHitTestSource() { debugger; }; catvm.safeFunction(window["XRHitTestSource"]);
window["XRInputSource"] = function XRInputSource() { debugger; }; catvm.safeFunction(window["XRInputSource"]);
window["XRInputSourceArray"] = function XRInputSourceArray() { debugger; }; catvm.safeFunction(window["XRInputSourceArray"]);
window["XRInputSourceEvent"] = function XRInputSourceEvent() { debugger; }; catvm.safeFunction(window["XRInputSourceEvent"]);
window["XRInputSourcesChangeEvent"] = function XRInputSourcesChangeEvent() { debugger; }; catvm.safeFunction(window["XRInputSourcesChangeEvent"]);
window["XRLayer"] = function XRLayer() { debugger; }; catvm.safeFunction(window["XRLayer"]);
window["XRPose"] = function XRPose() { debugger; }; catvm.safeFunction(window["XRPose"]);
window["XRRay"] = function XRRay() { debugger; }; catvm.safeFunction(window["XRRay"]);
window["XRReferenceSpace"] = function XRReferenceSpace() { debugger; }; catvm.safeFunction(window["XRReferenceSpace"]);
window["XRReferenceSpaceEvent"] = function XRReferenceSpaceEvent() { debugger; }; catvm.safeFunction(window["XRReferenceSpaceEvent"]);
window["XRRenderState"] = function XRRenderState() { debugger; }; catvm.safeFunction(window["XRRenderState"]);
window["XRRigidTransform"] = function XRRigidTransform() { debugger; }; catvm.safeFunction(window["XRRigidTransform"]);
window["XRSession"] = function XRSession() { debugger; }; catvm.safeFunction(window["XRSession"]);
window["XRSessionEvent"] = function XRSessionEvent() { debugger; }; catvm.safeFunction(window["XRSessionEvent"]);
window["XRSpace"] = function XRSpace() { debugger; }; catvm.safeFunction(window["XRSpace"]);
window["XRSystem"] = function XRSystem() { debugger; }; catvm.safeFunction(window["XRSystem"]);
window["XRTransientInputHitTestResult"] = function XRTransientInputHitTestResult() { debugger; }; catvm.safeFunction(window["XRTransientInputHitTestResult"]);
window["XRTransientInputHitTestSource"] = function XRTransientInputHitTestSource() { debugger; }; catvm.safeFunction(window["XRTransientInputHitTestSource"]);
window["XRView"] = function XRView() { debugger; }; catvm.safeFunction(window["XRView"]);
window["XRViewerPose"] = function XRViewerPose() { debugger; }; catvm.safeFunction(window["XRViewerPose"]);
window["XRViewport"] = function XRViewport() { debugger; }; catvm.safeFunction(window["XRViewport"]);
window["XRWebGLLayer"] = function XRWebGLLayer() { debugger; }; catvm.safeFunction(window["XRWebGLLayer"]);
window["XSLTProcessor"] = function XSLTProcessor() { debugger; }; catvm.safeFunction(window["XSLTProcessor"]);
window["decodeURI"] = decodeURI;


window["decodeURIComponent"] = decodeURIComponent
window["encodeURI"] = function encodeURI() { debugger; }; catvm.safeFunction(window["encodeURI"]);

window["escape"] = function escape() { debugger; }; catvm.safeFunction(window["escape"]);

window["SVGAnimatedNumber"] = function SVGAnimatedNumber() { debugger; }; catvm.safeFunction(window["SVGAnimatedNumber"]);
window["SVGAnimatedNumberList"] = function SVGAnimatedNumberList() { debugger; }; catvm.safeFunction(window["SVGAnimatedNumberList"]);
window["SVGAnimatedPreserveAspectRatio"] = function SVGAnimatedPreserveAspectRatio() { debugger; }; catvm.safeFunction(window["SVGAnimatedPreserveAspectRatio"]);
window["SVGAnimatedRect"] = function SVGAnimatedRect() { debugger; }; catvm.safeFunction(window["SVGAnimatedRect"]);
window["SVGAnimatedString"] = function SVGAnimatedString() { debugger; }; catvm.safeFunction(window["SVGAnimatedString"]);
window["SVGAnimatedTransformList"] = function SVGAnimatedTransformList() { debugger; }; catvm.safeFunction(window["SVGAnimatedTransformList"]);
window["SVGAnimationElement"] = function SVGAnimationElement() { debugger; }; catvm.safeFunction(window["SVGAnimationElement"]);
window["SVGCircleElement"] = function SVGCircleElement() { debugger; }; catvm.safeFunction(window["SVGCircleElement"]);
window["SVGClipPathElement"] = function SVGClipPathElement() { debugger; }; catvm.safeFunction(window["SVGClipPathElement"]);
window["SVGComponentTransferFunctionElement"] = function SVGComponentTransferFunctionElement() { debugger; }; catvm.safeFunction(window["SVGComponentTransferFunctionElement"]);
window["SVGDefsElement"] = function SVGDefsElement() { debugger; }; catvm.safeFunction(window["SVGDefsElement"]);
window["SVGDescElement"] = function SVGDescElement() { debugger; }; catvm.safeFunction(window["SVGDescElement"]);
window["SVGElement"] = function SVGElement() { debugger; }; catvm.safeFunction(window["SVGElement"]);
window["SVGEllipseElement"] = function SVGEllipseElement() { debugger; }; catvm.safeFunction(window["SVGEllipseElement"]);
window["SVGFEBlendElement"] = function SVGFEBlendElement() { debugger; }; catvm.safeFunction(window["SVGFEBlendElement"]);
window["SVGFEColorMatrixElement"] = function SVGFEColorMatrixElement() { debugger; }; catvm.safeFunction(window["SVGFEColorMatrixElement"]);
window["SVGFEComponentTransferElement"] = function SVGFEComponentTransferElement() { debugger; }; catvm.safeFunction(window["SVGFEComponentTransferElement"]);
window["SVGFECompositeElement"] = function SVGFECompositeElement() { debugger; }; catvm.safeFunction(window["SVGFECompositeElement"]);
window["SVGFEConvolveMatrixElement"] = function SVGFEConvolveMatrixElement() { debugger; }; catvm.safeFunction(window["SVGFEConvolveMatrixElement"]);
window["SVGFEDiffuseLightingElement"] = function SVGFEDiffuseLightingElement() { debugger; }; catvm.safeFunction(window["SVGFEDiffuseLightingElement"]);
window["SVGFEDisplacementMapElement"] = function SVGFEDisplacementMapElement() { debugger; }; catvm.safeFunction(window["SVGFEDisplacementMapElement"]);
window["SVGFEDistantLightElement"] = function SVGFEDistantLightElement() { debugger; }; catvm.safeFunction(window["SVGFEDistantLightElement"]);
window["SVGFEDropShadowElement"] = function SVGFEDropShadowElement() { debugger; }; catvm.safeFunction(window["SVGFEDropShadowElement"]);
window["SVGFEFloodElement"] = function SVGFEFloodElement() { debugger; }; catvm.safeFunction(window["SVGFEFloodElement"]);
window["SVGFEFuncAElement"] = function SVGFEFuncAElement() { debugger; }; catvm.safeFunction(window["SVGFEFuncAElement"]);
window["SVGFEFuncBElement"] = function SVGFEFuncBElement() { debugger; }; catvm.safeFunction(window["SVGFEFuncBElement"]);
window["SVGFEFuncGElement"] = function SVGFEFuncGElement() { debugger; }; catvm.safeFunction(window["SVGFEFuncGElement"]);
window["SVGFEFuncRElement"] = function SVGFEFuncRElement() { debugger; }; catvm.safeFunction(window["SVGFEFuncRElement"]);
window["SVGFEGaussianBlurElement"] = function SVGFEGaussianBlurElement() { debugger; }; catvm.safeFunction(window["SVGFEGaussianBlurElement"]);
window["SVGFEImageElement"] = function SVGFEImageElement() { debugger; }; catvm.safeFunction(window["SVGFEImageElement"]);
window["SVGFEMergeElement"] = function SVGFEMergeElement() { debugger; }; catvm.safeFunction(window["SVGFEMergeElement"]);
window["SVGFEMergeNodeElement"] = function SVGFEMergeNodeElement() { debugger; }; catvm.safeFunction(window["SVGFEMergeNodeElement"]);
window["SVGFEMorphologyElement"] = function SVGFEMorphologyElement() { debugger; }; catvm.safeFunction(window["SVGFEMorphologyElement"]);
window["SVGFEOffsetElement"] = function SVGFEOffsetElement() { debugger; }; catvm.safeFunction(window["SVGFEOffsetElement"]);
window["SVGFEPointLightElement"] = function SVGFEPointLightElement() { debugger; }; catvm.safeFunction(window["SVGFEPointLightElement"]);
window["SVGFESpecularLightingElement"] = function SVGFESpecularLightingElement() { debugger; }; catvm.safeFunction(window["SVGFESpecularLightingElement"]);
window["SVGFESpotLightElement"] = function SVGFESpotLightElement() { debugger; }; catvm.safeFunction(window["SVGFESpotLightElement"]);
window["SVGFETileElement"] = function SVGFETileElement() { debugger; }; catvm.safeFunction(window["SVGFETileElement"]);
window["SVGFETurbulenceElement"] = function SVGFETurbulenceElement() { debugger; }; catvm.safeFunction(window["SVGFETurbulenceElement"]);
window["SVGFilterElement"] = function SVGFilterElement() { debugger; }; catvm.safeFunction(window["SVGFilterElement"]);
window["SVGForeignObjectElement"] = function SVGForeignObjectElement() { debugger; }; catvm.safeFunction(window["SVGForeignObjectElement"]);
window["SVGGElement"] = function SVGGElement() { debugger; }; catvm.safeFunction(window["SVGGElement"]);
window["SVGGeometryElement"] = function SVGGeometryElement() { debugger; }; catvm.safeFunction(window["SVGGeometryElement"]);
window["SVGGradientElement"] = function SVGGradientElement() { debugger; }; catvm.safeFunction(window["SVGGradientElement"]);
window["SVGGraphicsElement"] = function SVGGraphicsElement() { debugger; }; catvm.safeFunction(window["SVGGraphicsElement"]);
window["SVGImageElement"] = function SVGImageElement() { debugger; }; catvm.safeFunction(window["SVGImageElement"]);
window["SVGLength"] = function SVGLength() { debugger; }; catvm.safeFunction(window["SVGLength"]);
window["SVGLengthList"] = function SVGLengthList() { debugger; }; catvm.safeFunction(window["SVGLengthList"]);
window["SVGLineElement"] = function SVGLineElement() { debugger; }; catvm.safeFunction(window["SVGLineElement"]);
window["SVGLinearGradientElement"] = function SVGLinearGradientElement() { debugger; }; catvm.safeFunction(window["SVGLinearGradientElement"]);
window["SVGMPathElement"] = function SVGMPathElement() { debugger; }; catvm.safeFunction(window["SVGMPathElement"]);
window["SVGMarkerElement"] = function SVGMarkerElement() { debugger; }; catvm.safeFunction(window["SVGMarkerElement"]);
window["SVGMaskElement"] = function SVGMaskElement() { debugger; }; catvm.safeFunction(window["SVGMaskElement"]);
window["SVGMatrix"] = function SVGMatrix() { debugger; }; catvm.safeFunction(window["SVGMatrix"]);
window["SVGMetadataElement"] = function SVGMetadataElement() { debugger; }; catvm.safeFunction(window["SVGMetadataElement"]);
window["SVGNumber"] = function SVGNumber() { debugger; }; catvm.safeFunction(window["SVGNumber"]);
window["SVGNumberList"] = function SVGNumberList() { debugger; }; catvm.safeFunction(window["SVGNumberList"]);
window["SVGPathElement"] = function SVGPathElement() { debugger; }; catvm.safeFunction(window["SVGPathElement"]);
window["SVGPatternElement"] = function SVGPatternElement() { debugger; }; catvm.safeFunction(window["SVGPatternElement"]);
window["SVGPoint"] = function SVGPoint() { debugger; }; catvm.safeFunction(window["SVGPoint"]);
window["SVGPointList"] = function SVGPointList() { debugger; }; catvm.safeFunction(window["SVGPointList"]);
window["SVGPolygonElement"] = function SVGPolygonElement() { debugger; }; catvm.safeFunction(window["SVGPolygonElement"]);
window["SVGPolylineElement"] = function SVGPolylineElement() { debugger; }; catvm.safeFunction(window["SVGPolylineElement"]);
window["SVGPreserveAspectRatio"] = function SVGPreserveAspectRatio() { debugger; }; catvm.safeFunction(window["SVGPreserveAspectRatio"]);
window["SVGRadialGradientElement"] = function SVGRadialGradientElement() { debugger; }; catvm.safeFunction(window["SVGRadialGradientElement"]);
window["SVGRect"] = function SVGRect() { debugger; }; catvm.safeFunction(window["SVGRect"]);
window["SVGRectElement"] = function SVGRectElement() { debugger; }; catvm.safeFunction(window["SVGRectElement"]);
window["SVGSVGElement"] = function SVGSVGElement() { debugger; }; catvm.safeFunction(window["SVGSVGElement"]);
window["SVGScriptElement"] = function SVGScriptElement() { debugger; }; catvm.safeFunction(window["SVGScriptElement"]);
window["SVGSetElement"] = function SVGSetElement() { debugger; }; catvm.safeFunction(window["SVGSetElement"]);
window["SVGStopElement"] = function SVGStopElement() { debugger; }; catvm.safeFunction(window["SVGStopElement"]);
window["SVGStringList"] = function SVGStringList() { debugger; }; catvm.safeFunction(window["SVGStringList"]);
window["SVGStyleElement"] = function SVGStyleElement() { debugger; }; catvm.safeFunction(window["SVGStyleElement"]);
window["SVGSwitchElement"] = function SVGSwitchElement() { debugger; }; catvm.safeFunction(window["SVGSwitchElement"]);
window["SVGSymbolElement"] = function SVGSymbolElement() { debugger; }; catvm.safeFunction(window["SVGSymbolElement"]);
window["SVGTSpanElement"] = function SVGTSpanElement() { debugger; }; catvm.safeFunction(window["SVGTSpanElement"]);
window["SVGTextContentElement"] = function SVGTextContentElement() { debugger; }; catvm.safeFunction(window["SVGTextContentElement"]);
window["SVGTextElement"] = function SVGTextElement() { debugger; }; catvm.safeFunction(window["SVGTextElement"]);
window["SVGTextPathElement"] = function SVGTextPathElement() { debugger; }; catvm.safeFunction(window["SVGTextPathElement"]);
window["SVGTextPositioningElement"] = function SVGTextPositioningElement() { debugger; }; catvm.safeFunction(window["SVGTextPositioningElement"]);
window["SVGTitleElement"] = function SVGTitleElement() { debugger; }; catvm.safeFunction(window["SVGTitleElement"]);
window["SVGTransform"] = function SVGTransform() { debugger; }; catvm.safeFunction(window["SVGTransform"]);
window["SVGTransformList"] = function SVGTransformList() { debugger; }; catvm.safeFunction(window["SVGTransformList"]);
window["SVGUnitTypes"] = function SVGUnitTypes() { debugger; }; catvm.safeFunction(window["SVGUnitTypes"]);
window["SVGUseElement"] = function SVGUseElement() { debugger; }; catvm.safeFunction(window["SVGUseElement"]);
window["SVGViewElement"] = function SVGViewElement() { debugger; }; catvm.safeFunction(window["SVGViewElement"]);
window["Screen"] = function Screen() { debugger; }; catvm.safeFunction(window["Screen"]);
window["ScreenOrientation"] = function ScreenOrientation() { debugger; }; catvm.safeFunction(window["ScreenOrientation"]);
window["ScriptProcessorNode"] = function ScriptProcessorNode() { debugger; }; catvm.safeFunction(window["ScriptProcessorNode"]);
window["SecurityPolicyViolationEvent"] = function SecurityPolicyViolationEvent() { debugger; }; catvm.safeFunction(window["SecurityPolicyViolationEvent"]);
window["Selection"] = function Selection() { debugger; }; catvm.safeFunction(window["Selection"]);
window["Sensor"] = function Sensor() { debugger; }; catvm.safeFunction(window["Sensor"]);
window["SensorErrorEvent"] = function SensorErrorEvent() { debugger; }; catvm.safeFunction(window["SensorErrorEvent"]);
window["ServiceWorker"] = function ServiceWorker() { debugger; }; catvm.safeFunction(window["ServiceWorker"]);
window["ServiceWorkerContainer"] = function ServiceWorkerContainer() { debugger; }; catvm.safeFunction(window["ServiceWorkerContainer"]);
window["ServiceWorkerRegistration"] = function ServiceWorkerRegistration() { debugger; }; catvm.safeFunction(window["ServiceWorkerRegistration"]);
window["Set"] = function Set() { debugger; }; catvm.safeFunction(window["Set"]);
window["ShadowRoot"] = function ShadowRoot() { debugger; }; catvm.safeFunction(window["ShadowRoot"]);
window["SharedArrayBuffer"] = function SharedArrayBuffer() { debugger; }; catvm.safeFunction(window["SharedArrayBuffer"]);
window["SharedWorker"] = function SharedWorker() { debugger; }; catvm.safeFunction(window["SharedWorker"]);
window["SourceBuffer"] = function SourceBuffer() { debugger; }; catvm.safeFunction(window["SourceBuffer"]);
window["SourceBufferList"] = function SourceBufferList() { debugger; }; catvm.safeFunction(window["SourceBufferList"]);
window["SpeechSynthesisErrorEvent"] = function SpeechSynthesisErrorEvent() { debugger; }; catvm.safeFunction(window["SpeechSynthesisErrorEvent"]);
window["SpeechSynthesisEvent"] = function SpeechSynthesisEvent() { debugger; }; catvm.safeFunction(window["SpeechSynthesisEvent"]);
window["SpeechSynthesisUtterance"] = function SpeechSynthesisUtterance() { debugger; }; catvm.safeFunction(window["SpeechSynthesisUtterance"]);
window["StaticRange"] = function StaticRange() { debugger; }; catvm.safeFunction(window["StaticRange"]);
window["StereoPannerNode"] = function StereoPannerNode() { debugger; }; catvm.safeFunction(window["StereoPannerNode"]);
window["Storage"] = function Storage() { debugger; }; catvm.safeFunction(window["Storage"]);
window["StorageEvent"] = function StorageEvent() { debugger; }; catvm.safeFunction(window["StorageEvent"]);
window["StorageManager"] = function StorageManager() { debugger; }; catvm.safeFunction(window["StorageManager"]);

window["StylePropertyMap"] = function StylePropertyMap() { debugger; }; catvm.safeFunction(window["StylePropertyMap"]);
window["StylePropertyMapReadOnly"] = function StylePropertyMapReadOnly() { debugger; }; catvm.safeFunction(window["StylePropertyMapReadOnly"]);
window["StyleSheet"] = function StyleSheet() { debugger; }; catvm.safeFunction(window["StyleSheet"]);
window["StyleSheetList"] = function StyleSheetList() { debugger; }; catvm.safeFunction(window["StyleSheetList"]);
window["SubmitEvent"] = function SubmitEvent() { debugger; }; catvm.safeFunction(window["SubmitEvent"]);
window["SubtleCrypto"] = function SubtleCrypto() { debugger; }; catvm.safeFunction(window["SubtleCrypto"]);
window["Symbol"] = function Symbol() { debugger; }; catvm.safeFunction(window["Symbol"]);
window["SyncManager"] = function SyncManager() { debugger; }; catvm.safeFunction(window["SyncManager"]);
window["SyntaxError"] = function SyntaxError() { debugger; }; catvm.safeFunction(window["SyntaxError"]);
window["TaskAttributionTiming"] = function TaskAttributionTiming() { debugger; }; catvm.safeFunction(window["TaskAttributionTiming"]);
window["Text"] = function Text() { debugger; }; catvm.safeFunction(window["Text"]);

window["TextDecoderStream"] = function TextDecoderStream() { debugger; }; catvm.safeFunction(window["TextDecoderStream"]);
window["TextEncoder"] = function TextEncoder() { debugger; }; catvm.safeFunction(window["TextEncoder"]);
window["TextEncoderStream"] = function TextEncoderStream() { debugger; }; catvm.safeFunction(window["TextEncoderStream"]);
window["TextEvent"] = function TextEvent() { debugger; }; catvm.safeFunction(window["TextEvent"]);
window["TextMetrics"] = function TextMetrics() { debugger; }; catvm.safeFunction(window["TextMetrics"]);
window["TextTrack"] = function TextTrack() { debugger; }; catvm.safeFunction(window["TextTrack"]);
window["TextTrackCue"] = function TextTrackCue() { debugger; }; catvm.safeFunction(window["TextTrackCue"]);
window["TextTrackCueList"] = function TextTrackCueList() { debugger; }; catvm.safeFunction(window["TextTrackCueList"]);
window["TextTrackList"] = function TextTrackList() { debugger; }; catvm.safeFunction(window["TextTrackList"]);
window["TimeRanges"] = function TimeRanges() { debugger; }; catvm.safeFunction(window["TimeRanges"]);
window["Touch"] = function Touch() { debugger; }; catvm.safeFunction(window["Touch"]);
window["RemotePlayback"] = function RemotePlayback() { debugger; }; catvm.safeFunction(window["RemotePlayback"]);
window["ReportingObserver"] = function ReportingObserver() { debugger; }; catvm.safeFunction(window["ReportingObserver"]);
window["Request"] = function Request() { debugger; }; catvm.safeFunction(window["Request"]);
window["ResizeObserver"] = function ResizeObserver() { debugger; }; catvm.safeFunction(window["ResizeObserver"]);
window["ResizeObserverEntry"] = function ResizeObserverEntry() { debugger; }; catvm.safeFunction(window["ResizeObserverEntry"]);
window["ResizeObserverSize"] = function ResizeObserverSize() { debugger; }; catvm.safeFunction(window["ResizeObserverSize"]);
window["Response"] = function Response() { debugger; }; catvm.safeFunction(window["Response"]);
window["SVGAElement"] = function SVGAElement() { debugger; }; catvm.safeFunction(window["SVGAElement"]);
window["SVGAngle"] = function SVGAngle() { debugger; }; catvm.safeFunction(window["SVGAngle"]);
window["SVGAnimateElement"] = function SVGAnimateElement() { debugger; }; catvm.safeFunction(window["SVGAnimateElement"]);
window["SVGAnimateMotionElement"] = function SVGAnimateMotionElement() { debugger; }; catvm.safeFunction(window["SVGAnimateMotionElement"]);
window["SVGAnimateTransformElement"] = function SVGAnimateTransformElement() { debugger; }; catvm.safeFunction(window["SVGAnimateTransformElement"]);
window["SVGAnimatedAngle"] = function SVGAnimatedAngle() { debugger; }; catvm.safeFunction(window["SVGAnimatedAngle"]);
window["PermissionStatus"] = function PermissionStatus() { debugger; }; catvm.safeFunction(window["PermissionStatus"]);
window["Permissions"] = function Permissions() { debugger; }; catvm.safeFunction(window["Permissions"]);
window["PictureInPictureEvent"] = function PictureInPictureEvent() { debugger; }; catvm.safeFunction(window["PictureInPictureEvent"]);
window["PictureInPictureWindow"] = function PictureInPictureWindow() { debugger; }; catvm.safeFunction(window["PictureInPictureWindow"]);
window["Plugin"] = function Plugin() { debugger; }; catvm.safeFunction(window["Plugin"]);
window["PluginArray"] = function PluginArray() { debugger; }; catvm.safeFunction(window["PluginArray"]);
window["PointerEvent"] = function PointerEvent() { debugger; }; catvm.safeFunction(window["PointerEvent"]);
window["PopStateEvent"] = function PopStateEvent() { debugger; }; catvm.safeFunction(window["PopStateEvent"]);
window["Presentation"] = function Presentation() { debugger; }; catvm.safeFunction(window["Presentation"]);
window["PresentationAvailability"] = function PresentationAvailability() { debugger; }; catvm.safeFunction(window["PresentationAvailability"]);
window["PresentationConnection"] = function PresentationConnection() { debugger; }; catvm.safeFunction(window["PresentationConnection"]);
window["PresentationConnectionAvailableEvent"] = function PresentationConnectionAvailableEvent() { debugger; }; catvm.safeFunction(window["PresentationConnectionAvailableEvent"]);
window["PresentationConnectionCloseEvent"] = function PresentationConnectionCloseEvent() { debugger; }; catvm.safeFunction(window["PresentationConnectionCloseEvent"]);
window["PresentationConnectionList"] = function PresentationConnectionList() { debugger; }; catvm.safeFunction(window["PresentationConnectionList"]);
window["PresentationReceiver"] = function PresentationReceiver() { debugger; }; catvm.safeFunction(window["PresentationReceiver"]);
window["PresentationRequest"] = function PresentationRequest() { debugger; }; catvm.safeFunction(window["PresentationRequest"]);
window["ProcessingInstruction"] = function ProcessingInstruction() { debugger; }; catvm.safeFunction(window["ProcessingInstruction"]);
window["ProgressEvent"] = function ProgressEvent() { debugger; }; catvm.safeFunction(window["ProgressEvent"]);
window["Promise"] = function Promise() { debugger; }; catvm.safeFunction(window["Promise"]);
window["PromiseRejectionEvent"] = function PromiseRejectionEvent() { debugger; }; catvm.safeFunction(window["PromiseRejectionEvent"]);
window["Proxy"] = function Proxy(xxx) { return xxx }; catvm.safeFunction(window["Proxy"]);
window["PublicKeyCredential"] = function PublicKeyCredential() { debugger; }; catvm.safeFunction(window["PublicKeyCredential"]);
window["PushManager"] = function PushManager() { debugger; }; catvm.safeFunction(window["PushManager"]);
window["PushSubscription"] = function PushSubscription() { debugger; }; catvm.safeFunction(window["PushSubscription"]);
window["PushSubscriptionOptions"] = function PushSubscriptionOptions() { debugger; }; catvm.safeFunction(window["PushSubscriptionOptions"]);
window["RTCCertificate"] = function RTCCertificate() { debugger; }; catvm.safeFunction(window["RTCCertificate"]);
window["RTCDTMFSender"] = function RTCDTMFSender() { debugger; }; catvm.safeFunction(window["RTCDTMFSender"]);
window["RTCDTMFToneChangeEvent"] = function RTCDTMFToneChangeEvent() { debugger; }; catvm.safeFunction(window["RTCDTMFToneChangeEvent"]);
window["RTCDataChannel"] = function RTCDataChannel() { debugger; }; catvm.safeFunction(window["RTCDataChannel"]);
window["RTCDataChannelEvent"] = function RTCDataChannelEvent() { debugger; }; catvm.safeFunction(window["RTCDataChannelEvent"]);
window["RTCDtlsTransport"] = function RTCDtlsTransport() { debugger; }; catvm.safeFunction(window["RTCDtlsTransport"]);
window["RTCEncodedAudioFrame"] = function RTCEncodedAudioFrame() { debugger; }; catvm.safeFunction(window["RTCEncodedAudioFrame"]);
window["RTCEncodedVideoFrame"] = function RTCEncodedVideoFrame() { debugger; }; catvm.safeFunction(window["RTCEncodedVideoFrame"]);
window["RTCError"] = function RTCError() { debugger; }; catvm.safeFunction(window["RTCError"]);
window["RTCErrorEvent"] = function RTCErrorEvent() { debugger; }; catvm.safeFunction(window["RTCErrorEvent"]);
window["RTCIceCandidate"] = function RTCIceCandidate() { debugger; }; catvm.safeFunction(window["RTCIceCandidate"]);
window["RTCIceTransport"] = function RTCIceTransport() { debugger; }; catvm.safeFunction(window["RTCIceTransport"]);
window["RTCPeerConnection"] = function RTCPeerConnection() { debugger; }; catvm.safeFunction(window["RTCPeerConnection"]);
window["RTCPeerConnectionIceErrorEvent"] = function RTCPeerConnectionIceErrorEvent() { debugger; }; catvm.safeFunction(window["RTCPeerConnectionIceErrorEvent"]);
window["RTCPeerConnectionIceEvent"] = function RTCPeerConnectionIceEvent() { debugger; }; catvm.safeFunction(window["RTCPeerConnectionIceEvent"]);
window["RTCRtpReceiver"] = function RTCRtpReceiver() { debugger; }; catvm.safeFunction(window["RTCRtpReceiver"]);
window["RTCRtpSender"] = function RTCRtpSender() { debugger; }; catvm.safeFunction(window["RTCRtpSender"]);
window["RTCRtpTransceiver"] = function RTCRtpTransceiver() { debugger; }; catvm.safeFunction(window["RTCRtpTransceiver"]);
window["RTCSctpTransport"] = function RTCSctpTransport() { debugger; }; catvm.safeFunction(window["RTCSctpTransport"]);
window["RTCSessionDescription"] = function RTCSessionDescription() { debugger; }; catvm.safeFunction(window["RTCSessionDescription"]);
window["RTCStatsReport"] = function RTCStatsReport() { debugger; }; catvm.safeFunction(window["RTCStatsReport"]);
window["RTCTrackEvent"] = function RTCTrackEvent() { debugger; }; catvm.safeFunction(window["RTCTrackEvent"]);
window["RadioNodeList"] = function RadioNodeList() { debugger; }; catvm.safeFunction(window["RadioNodeList"]);
window["Range"] = function Range() { debugger; }; catvm.safeFunction(window["Range"]);
window["RangeError"] = function RangeError() { debugger; }; catvm.safeFunction(window["RangeError"]);
window["ReadableStream"] = function ReadableStream() { debugger; }; catvm.safeFunction(window["ReadableStream"]);
window["ReadableStreamDefaultReader"] = function ReadableStreamDefaultReader() { debugger; }; catvm.safeFunction(window["ReadableStreamDefaultReader"]);
window["ReferenceError"] = function ReferenceError() { debugger; }; catvm.safeFunction(window["ReferenceError"]);

window["RelativeOrientationSensor"] = function RelativeOrientationSensor() { debugger; }; catvm.safeFunction(window["RelativeOrientationSensor"]);

window["SVGAnimatedBoolean"] = function SVGAnimatedBoolean() { debugger; }; catvm.safeFunction(window["SVGAnimatedBoolean"]);
window["SVGAnimatedEnumeration"] = function SVGAnimatedEnumeration() { debugger; }; catvm.safeFunction(window["SVGAnimatedEnumeration"]);
window["SVGAnimatedInteger"] = function SVGAnimatedInteger() { debugger; }; catvm.safeFunction(window["SVGAnimatedInteger"]);
window["SVGAnimatedLength"] = function SVGAnimatedLength() { debugger; }; catvm.safeFunction(window["SVGAnimatedLength"]);
window["SVGAnimatedLengthList"] = function SVGAnimatedLengthList() { debugger; }; catvm.safeFunction(window["SVGAnimatedLengthList"]);
window["Path2D"] = function Path2D() { debugger; }; catvm.safeFunction(window["Path2D"]);
window["PaymentAddress"] = function PaymentAddress() { debugger; }; catvm.safeFunction(window["PaymentAddress"]);
window["PaymentInstruments"] = function PaymentInstruments() { debugger; }; catvm.safeFunction(window["PaymentInstruments"]);
window["PaymentManager"] = function PaymentManager() { debugger; }; catvm.safeFunction(window["PaymentManager"]);
window["PaymentMethodChangeEvent"] = function PaymentMethodChangeEvent() { debugger; }; catvm.safeFunction(window["PaymentMethodChangeEvent"]);
window["PaymentRequest"] = function PaymentRequest() { debugger; }; catvm.safeFunction(window["PaymentRequest"]);
window["PaymentRequestUpdateEvent"] = function PaymentRequestUpdateEvent() { debugger; }; catvm.safeFunction(window["PaymentRequestUpdateEvent"]);
window["PaymentResponse"] = function PaymentResponse() { debugger; }; catvm.safeFunction(window["PaymentResponse"]);
var Performance = new (class Performance { });



Performance.__proto__ = EventTarget.prototype;

window.Performance = Performance;












window["PerformanceElementTiming"] = function PerformanceElementTiming() { debugger; }; catvm.safeFunction(window["PerformanceElementTiming"]);
window["PerformanceEntry"] = function PerformanceEntry() { debugger; }; catvm.safeFunction(window["PerformanceEntry"]);
window["PerformanceEventTiming"] = function PerformanceEventTiming() { debugger; }; catvm.safeFunction(window["PerformanceEventTiming"]);
window["PerformanceLongTaskTiming"] = function PerformanceLongTaskTiming() { debugger; }; catvm.safeFunction(window["PerformanceLongTaskTiming"]);
window["PerformanceMark"] = function PerformanceMark() { debugger; }; catvm.safeFunction(window["PerformanceMark"]);
window["PerformanceMeasure"] = function PerformanceMeasure() { debugger; }; catvm.safeFunction(window["PerformanceMeasure"]);
window["PerformanceNavigation"] = function PerformanceNavigation() { debugger; }; catvm.safeFunction(window["PerformanceNavigation"]);
window["PerformanceNavigationTiming"] = function PerformanceNavigationTiming() { debugger; }; catvm.safeFunction(window["PerformanceNavigationTiming"]);
window["PerformanceObserver"] = function PerformanceObserver() { debugger; }; catvm.safeFunction(window["PerformanceObserver"]);
window["Option"] = function Option() { debugger; }; catvm.safeFunction(window["Option"]);
window["OrientationSensor"] = function OrientationSensor() { debugger; }; catvm.safeFunction(window["OrientationSensor"]);
window["OscillatorNode"] = function OscillatorNode() { debugger; }; catvm.safeFunction(window["OscillatorNode"]);
window["Node"] = function Node() { debugger; }; catvm.safeFunction(window["Node"]);
window["NodeFilter"] = function NodeFilter() { debugger; }; catvm.safeFunction(window["NodeFilter"]);
window["NodeIterator"] = function NodeIterator() { debugger; }; catvm.safeFunction(window["NodeIterator"]);
window["NodeList"] = function NodeList() { debugger; }; catvm.safeFunction(window["NodeList"]);
window["Notification"] = function Notification() { debugger; }; catvm.safeFunction(window["Notification"]);
window["Number"] = function Number() { debugger; }; catvm.safeFunction(window["Number"]);
window["OverconstrainedError"] = function OverconstrainedError() { debugger; }; catvm.safeFunction(window["OverconstrainedError"]);
window["PageTransitionEvent"] = function PageTransitionEvent() { debugger; }; catvm.safeFunction(window["PageTransitionEvent"]);
window["PannerNode"] = function PannerNode() { debugger; }; catvm.safeFunction(window["PannerNode"]);
window["PasswordCredential"] = function PasswordCredential() { debugger; }; catvm.safeFunction(window["PasswordCredential"]);

window["PerformanceObserverEntryList"] = function PerformanceObserverEntryList() { debugger; }; catvm.safeFunction(window["PerformanceObserverEntryList"]);
window["PerformancePaintTiming"] = function PerformancePaintTiming() { debugger; }; catvm.safeFunction(window["PerformancePaintTiming"]);
window["PerformanceResourceTiming"] = function PerformanceResourceTiming() { debugger; }; catvm.safeFunction(window["PerformanceResourceTiming"]);
window["PerformanceServerTiming"] = function PerformanceServerTiming() { debugger; }; catvm.safeFunction(window["PerformanceServerTiming"]);
window["PerformanceTiming"] = function PerformanceTiming() { debugger; }; catvm.safeFunction(window["PerformanceTiming"]);
window["PeriodicSyncManager"] = function PeriodicSyncManager() { debugger; }; catvm.safeFunction(window["PeriodicSyncManager"]);
window["PeriodicWave"] = function PeriodicWave() { debugger; }; catvm.safeFunction(window["PeriodicWave"]);
window["TouchEvent"] = function TouchEvent() { debugger; }; catvm.safeFunction(window["TouchEvent"]);
window["TouchList"] = function TouchList() { debugger; }; catvm.safeFunction(window["TouchList"]);
window["TrackEvent"] = function TrackEvent() { debugger; }; catvm.safeFunction(window["TrackEvent"]);
window["TransformStream"] = function TransformStream() { debugger; }; catvm.safeFunction(window["TransformStream"]);
window["TransitionEvent"] = function TransitionEvent() { debugger; }; catvm.safeFunction(window["TransitionEvent"]);
window["TreeWalker"] = function TreeWalker() { debugger; }; catvm.safeFunction(window["TreeWalker"]);
window["TrustedHTML"] = function TrustedHTML() { debugger; }; catvm.safeFunction(window["TrustedHTML"]);
window["TrustedScript"] = function TrustedScript() { debugger; }; catvm.safeFunction(window["TrustedScript"]);
window["TrustedScriptURL"] = function TrustedScriptURL() { debugger; }; catvm.safeFunction(window["TrustedScriptURL"]);
window["TrustedTypePolicy"] = function TrustedTypePolicy() { debugger; }; catvm.safeFunction(window["TrustedTypePolicy"]);
window["TrustedTypePolicyFactory"] = function TrustedTypePolicyFactory() { debugger; }; catvm.safeFunction(window["TrustedTypePolicyFactory"]);
window["TypeError"] = function TypeError() { debugger; }; catvm.safeFunction(window["TypeError"]);
window["UIEvent"] = function UIEvent() { debugger; }; catvm.safeFunction(window["UIEvent"]);
window["URIError"] = function URIError() { debugger; }; catvm.safeFunction(window["URIError"]);
window["URL"] = function URL() { debugger; }; catvm.safeFunction(window["URL"]);
window["URLSearchParams"] = function URLSearchParams() { debugger; }; catvm.safeFunction(window["URLSearchParams"]);
OfflineAudioContext= function OfflineAudioContext() {}; 
Object.defineProperties(OfflineAudioContext.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true

    },
    [Symbol.toStringTag]: {
        value: "OfflineAudioContext",
        configurable: true
    }
});


BaseAudioContext = function BaseAudioContext() {};
debugger



Object.defineProperties(BaseAudioContext.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true

    },
    [Symbol.toStringTag]: {
        value: "BaseAudioContext",
        configurable: true
    }
});



debugger



BaseAudioContext.prototype.audioWorklet = new (class AudioWorklet { });
BaseAudioContext.prototype.currentTime = 0;
BaseAudioContext.prototype.destination = new (class AudioDestinationNode { });

BaseAudioContext.prototype.listener = new (class AudioListener { });
BaseAudioContext.prototype.oncomplete = null;
BaseAudioContext.prototype.onstatechange = null;

BaseAudioContext.prototype.state = "suspended";

BaseAudioContext.prototype
//BaseAudioContext.prototype.__proto__.__proto__=EventTarget.prototype;

OfflineAudioContext.__proto__=BaseAudioContext.prototype;






window["isFinite"] = function isFinite() { debugger; }; catvm.safeFunction(window["isFinite"]);

window["parseFloat"] = function parseFloat() { debugger; }; catvm.safeFunction(window["parseFloat"]);
window["parseInt"] = function parseInt(xxx) { return xxx }; catvm.safeFunction(window["parseInt"]);
window["unescape"] = function unescape() { debugger; }; catvm.safeFunction(window["unescape"]);


window["webkitMediaStream"] = function webkitMediaStream() { debugger; }; catvm.safeFunction(window["webkitMediaStream"]);
window["webkitRTCPeerConnection"] = function webkitRTCPeerConnection() { debugger; }; catvm.safeFunction(window["webkitRTCPeerConnection"]);
window["webkitSpeechGrammar"] = function webkitSpeechGrammar() { debugger; }; catvm.safeFunction(window["webkitSpeechGrammar"]);
window["webkitSpeechGrammarList"] = function webkitSpeechGrammarList() { debugger; }; catvm.safeFunction(window["webkitSpeechGrammarList"]);
window["webkitSpeechRecognition"] = function webkitSpeechRecognition() { debugger; }; catvm.safeFunction(window["webkitSpeechRecognition"]);
window["webkitSpeechRecognitionError"] = function webkitSpeechRecognitionError() { debugger; }; catvm.safeFunction(window["webkitSpeechRecognitionError"]);
window["webkitSpeechRecognitionEvent"] = function webkitSpeechRecognitionEvent() { debugger; }; catvm.safeFunction(window["webkitSpeechRecognitionEvent"]);
window["webkitURL"] = function webkitURL() { debugger; }; catvm.safeFunction(window["webkitURL"]);

window["onvolumechange"] = null;
window["onwaiting"] = null;
window["onwebkitanimationend"] = null;
window["onwebkitanimationiteration"] = null;
window["onwebkitanimationstart"] = null;
window[" onwebkittransitionend"] = undefined;

////////////////////////


var Window = function Window() {
    throw new TypeError("Illegal constructor")
};
catvm.safeFunction(Window)

Object.defineProperties(Window.prototype, {

    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
});
for (var pr in Window.prototype) {
    debugger

    if (typeof (Window.prototype[pr]) != "function") {
        Window.prototype.__defineGetter__(pr, function () {
            throw new TypeError("Illegal constructor");
        });

    };



};
window.setTimeout = function setTimeout(x, d) {
    typeof (X) == "function" ? x() : undefined;

    typeof (X) == "string" ? eval(x) : undefined;

    return 0;


};
catvm.safeFunction(window.setTimeout)
Window.prototype.PERSISTENT = 1
Window.prototype.TEMPORARY = 0

window.open = function open() {
    debugger
};
catvm.safeFunction(window.open)

window.chrome = class chrome { }









alert = function alert() {



};
catvm.safeFunction(alert)


























window.DeviceOrientationEvent = function DeviceOrientationEvent() {
    debugger;
};
catvm.safeFunction(window.DeviceOrientationEvent)


window.DeviceMotionEvent = function DeviceMotionEvent() {
    debugger;
};
catvm.safeFunction(window.DeviceMotionEvent)



Window.prototype.__proto__ = Windowproperties.prototype

window.localStorage = class localStorage { };
window.localStorage.getItem = function getItem(x, x1) {

};
debugger

catvm.safeFunction(window.localStorage.getItem)
debugger

window.localStorage.setItem = function setItem() {
    debugger
};
catvm.safeFunction(window.localStorage.setItem)

window.sessionStorage = window.localStorage





window.__proto__ = Window.prototype;
window.parent = window;
window.top = window;
window.self = window;
window.constructor = function () { };
catvm.safeFunction(window.constructor)
window.name = "";

function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
window._data = get_data();

function get_data() {
    var data = [];
    var timest = 46192 + random(300, 600);
    for (var i = 0; i < 3; i++) {
        data.push({
            "scrollTop": gettop(),
            "timestamp": timest + random(70, 120)
        })
    }
    return data
}

function gettop() {
    window.top0 = random(100, 200);
    return window.top0
}
debugger
ReferenceError = function ReferenceError() { };
catvm.safeFunction(ReferenceError)
var base64hash = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
window.base64hash = base64hash

function atob(s) {
    s = s.replace(/\s|=/g, '');
    var cur, prev, mod, i = 0,
        result = [];
    while (i < s.length) {
        cur = base64hash.indexOf(s.charAt(i));
        mod = i % 4;
        switch (mod) {
            case 0:
                //TODO
                break;
            case 1:
                result.push(String.fromCharCode(prev << 2 | cur >> 4));
                break;
            case 2:
                result.push(String.fromCharCode((prev & 0x0f) << 4 | cur >> 2));
                break;
            case 3:
                result.push(String.fromCharCode((prev & 3) << 6 | cur));
                break;
        }
        prev = cur;
        i++;
    }
    return result.join('');
};
catvm.safeFunction(atob)
window.atob = atob
window = catvm.proxy(window);
Window = catvm.proxy(Window);
function getdates() {
    var w_array = new Array("星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");

    var d = new Date();

    var year = d.getFullYear();

    var month = d.getMonth() + 1;

    var day = d.getDate();

    var week = d.getDay();

    var h = d.getHours();

    var mins = d.getMinutes();

    var s = d.getSeconds();

    if (month < 10)
        month = "0" + month

    if (day < 10)
        month = "0" + day

    if (h < 10)
        h = "0" + h

    if (mins < 10)
        mins = "0" + mins

    if (s < 10)
        s = "0" + s

    var shows = month + "/" + day + "/" + year + " " + +h + ":" + mins + ":" + s;

    return shows

    setTimeout("getdates()", 1000);

}



var Document = function Document() { };
catvm.safeFunction(Document);

Object.defineProperties(Document.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});


var document = {};

HTMLDocument = function HTMLDocument() { };
catvm.safeFunction(HTMLDocument);

Object.defineProperties(HTMLDocument.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "HTMLDocument",
        configurable: true
    }
});

Node = function Node() { };
catvm.safeFunction(Node);;

Object.defineProperties(Node.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "Node ",
        configurable: true
    }
});

Node.prototype.ATTRIBUTE_NODE = 2
Node.prototype.CDATA_SECTION_NODE = 4
Node.prototype.COMMENT_NODE = 8
Node.prototype.DOCUMENT_FRAGMENT_NODE = 11
Node.prototype.DOCUMENT_NODE = 9
Node.prototype.DOCUMENT_POSITION_CONTAINED_BY = 16
Node.prototype.DOCUMENT_POSITION_CONTAINS = 8
Node.prototype.DOCUMENT_POSITION_DISCONNECTED = 1
Node.prototype.DOCUMENT_POSITION_FOLLOWING = 4
Node.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32
Node.prototype.DOCUMENT_POSITION_PRECEDING = 2
Node.prototype.DOCUMENT_TYPE_NODE = 10
Node.prototype.ELEMENT_NODE = 1
Node.prototype.ENTITY_NODE = 6
Node.prototype.ENTITY_REFERENCE_NODE = 5
Node.prototype.NOTATION_NODE = 12
Node.prototype.PROCESSING_INSTRUCTION_NODE = 7
Node.prototype.TEXT_NODE = 3
Node.__proto__ = EventTarget.prototype;
debugger




Document.prototype.cookie = ""
Document.prototype.forms = [],
    Document.prototype.fullscreen = false,
    Document.prototype.fullscreenElement = null,
    Document.prototype.fullscreenEnabled = true,
    Document.prototype.head = window.document,
    Document.prototype.hidden = true,
    Document.prototype.images = [],
    Document.prototype.implementation = {},
    Document.prototype.inputEncoding = "GBK",
    Document.prototype.isConnected = true,
    Document.prototype.lastChild = window.document,
    Document.prototype.lastElementChild = window.document,


    Document.prototype.lastModified = getdates(),
    Document.prototype.linkColor = "",
    Document.prototype.links = [],
    Document.prototype.location = window.location,
    Document.prototype.nextSibling = null,
    Document.prototype.nodeName = "#document",
    Document.prototype.nodeType = 9,
    Document.prototype.nodeValue = null,
    Document.prototype.onabort = null,
    Document.prototype.onauxclick = null,
    Document.prototype.onbeforecopy = null,
    Document.prototype.onbeforecut = null,
    Document.prototype.onbeforepaste = null,
    Document.prototype.onblur = null,
    Document.prototype.oncancel = null,
    Document.prototype.oncanplay = null,
    Document.prototype.oncanplaythrough = null,
    Document.prototype.onchange = null,
    Document.prototype.onclick = null,
    Document.prototype.onclose = null,
    Document.prototype.oncontextmenu = null,
    Document.prototype.oncopy = null,
    Document.prototype.oncuechange = null,
    Document.prototype.oncut = null,
    Document.prototype.ondblclick = null,
    Document.prototype.ondrag = null,
    Document.prototype.ondragend = null,
    Document.prototype.ondragenter = null,
    Document.prototype.ondragleave = null,
    Document.prototype.ondragover = null,
    Document.prototype.ondragstart = null,
    Document.prototype.ondrop = null,
    Document.prototype.ondurationchange = null,
    Document.prototype.onemptied = null,
    Document.prototype.onended = null,
    Document.prototype.onerror = null,
    Document.prototype.onfocus = null,
    Document.prototype.onformdata = null,
    Document.prototype.onfreeze = null,
    Document.prototype.onfullscreenchange = null,
    Document.prototype.onfullscreenerror = null,
    Document.prototype.ongotpointercapture = null,
    Document.prototype.oninput = null,
    Document.prototype.oninvalid = null,
    Document.prototype.onkeydown = null,
    Document.prototype.onkeypress = null,
    Document.prototype.onkeyup = null,
    Document.prototype.onload = null,
    Document.prototype.onloadeddata = null,
    Document.prototype.onloadedmetadata = null,
    Document.prototype.onloadstart = null,
    Document.prototype.onlostpointercapture = null,
    Document.prototype.onmousedown = null,
    Document.prototype.onmouseenter = null,
    Document.prototype.onmouseleave = null,
    Document.prototype.onmousemove = null,
    Document.prototype.onmouseout = null,
    Document.prototype.onmouseover = null,
    Document.prototype.onmouseup = null,
    Document.prototype.onmousewheel = null,
    Document.prototype.onpaste = null,
    Document.prototype.onpause = null,
    Document.prototype.onplay = null,
    Document.prototype.onplaying = null,
    Document.prototype.onpointercancel = null,
    Document.prototype.onpointerdown = null,

    Document.prototype.onpointerenter = null,
    Document.prototype.onpointerleave = null,
    Document.prototype.onpointerlockchange = null,
    Document.prototype.onpointerlockerror = null,
    Document.prototype.onpointermove = null,
    Document.prototype.onpointerout = null,
    Document.prototype.onpointerover = null,
    Document.prototype.onpointerrawupdate = null,
    Document.prototype.onpointerup = null,
    Document.prototype.onprogress = null,
    Document.prototype.onratechange = null,
    Document.prototype.onreadystatechange = null,
    Document.prototype.onreset = null,
    Document.prototype.onresize = null,
    Document.prototype.onresume = null,
    Document.prototype.onscroll = null,
    Document.prototype.onsearch = null,
    Document.prototype.onsecuritypolicyviolation = null,
    Document.prototype.onseeked = null,
    Document.prototype.onseeking = null,
    Document.prototype.onselect = null,
    Document.prototype.onselectionchange = null,
    Document.prototype.onselectstart = null,
    Document.prototype.onstalled = null,
    Document.prototype.onsubmit = null,
    Document.prototype.onsuspend = null,
    Document.prototype.ontimeupdate = null,
    Document.prototype.ontoggle = null,
    Document.prototype.onvisibilitychange = null,
    Document.prototype.onvolumechange = null,
    Document.prototype.onwaiting = null,
    Document.prototype.onwebkitfullscreenchange = null,
    Document.prototype.onwebkitfullscreenerror = null,
    Document.prototype.onwheel = null,
    Document.prototype.ownerDocument = null,
    Document.prototype.parentElement = null,
    Document.prototype.parentNode = null,
    Document.prototype.pictureInPictureElement = null,
    Document.prototype.pictureInPictureEnabled = true,
    Document.prototype.plugins = [],
    Document.prototype.pointerLockElement = null,
    Document.prototype.previousSibling = null,
    Document.prototype.readyState = "loading",
    Document.prototype.referrer = "",
    Document.prototype.style = {},
    Document.prototype.rootElement = null,
    Document.prototype.scripts = [window.document],
    Document.prototype.scrollingElement = window.document,
    Document.prototype.styleSheets = {},
    Document.prototype.textContent = null,
    Document.prototype.title = "",
    Document.prototype.visibilityState = "visible",
    Document.prototype.vlinkColor = "",
    Document.prototype.wasDiscarded = false,
    Document.prototype.webkitCurrentFullScreenElement = null,
    Document.prototype.webkitFullscreenElement = null,
    Document.prototype.webkitFullscreenEnabled = true,
    Document.prototype.webkitHidden = false,
    Document.prototype.webkitIsFullScreen = false,
    Document.prototype.webkitVisibilityState = "visible",
    Document.prototype.xmlEncoding = null,
    Document.prototype.xmlStandalone = false,
    Document.prototype.xmlVersion = null,


    Document.prototype.clientHeight = 952,
    Document.prototype.clientWidth = 1937,
    Document.prototype.getAttribute = function () {
        return null
    };
Document.prototype.createElement = function createElement(xxx) {
    debugger;
    return xxx
};


HTMLCanvasElement = function HTMLCanvasElement() {
    debugger;


}; catvm.safeFunction(HTMLCanvasElement)



Object.defineProperties(HTMLCanvasElement.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement",
        configurable: true
    }
});
HTMLCanvasElement.Prototype={
    captureStream : function captureStream() {
        debugger;
    
    
    },

    toBlob: function toBlob() {
        debugger;
    
    
    },
    toDataURL : function toDataURL() {
        debugger;
    
    
    },
    
    
    
    transferControlToOffscreen : function transferControlToOffscreen() {
        debugger;
    
    
    },
    
    
    
    constructor : function constructor() {
        debugger;
    
    
    }
    

};catvm.safeFunction(HTMLCanvasElement.Prototype.captureStream);
catvm.safeFunction(HTMLCanvasElement.Prototype.toBlob);



catvm.safeFunction(HTMLCanvasElement.Prototype.toDataURL);
catvm.safeFunction(HTMLCanvasElement.Prototype.constructor);
catvm.safeFunction(HTMLCanvasElement.Prototype.transferControlToOffscreen);
debugger










HTMLElement = function HTMLElement() {
    debugger;


}; catvm.safeFunction(HTMLElement)



Object.defineProperties(HTMLElement.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "HTMLElement",
        configurable: true
    }
});






Element = function Element() { debugger; }; catvm.safeFunction(Element);



Object.defineProperties(Element.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "Element",
        configurable: true
    }
});

Element.prototype.after = function after() { debugger; }; catvm.safeFunction(Element.prototype.after);

Element.prototype.animate = function animate() { debugger; }; catvm.safeFunction(Element.prototype.animate);

Element.prototype.append = function append() { debugger; }; catvm.safeFunction(Element.prototype.append);


Element.prototype.attachShadow = function attachShadow() { debugger; }; catvm.safeFunction(Element.prototype.attachShadow );


Element.prototype.closest = function closest() { debugger; }; catvm.safeFunction(Element.prototype.closest);

Element.prototype.computedStyleMap = function computedStyleMap() { debugger; }; catvm.safeFunction(Element.prototype.computedStyleMap );

Element.prototype.createShadowRoot = function createShadowRoot() { debugger; }; catvm.safeFunction(Element.prototype.createShadowRoot);


Element.prototype.getAttribute = function getAttribute() { debugger; }; catvm.safeFunction(Element.prototype.getAttribute );



Element.prototype.getAttributeNS = function getAttributeNS() { debugger; }; catvm.safeFunction(Element.prototype.getAttributeNS);

Element.prototype.getAttributeNames = function getAttributeNames() { debugger; }; catvm.safeFunction(Element.prototype.getAttributeNames );


Element.prototype.getAttributeNode = function getAttributeNode() { debugger; }; catvm.safeFunction(Element.prototype.getAttributeNode );

Element.prototype.getAttributeNodeNS = function getAttributeNodeNS() { debugger; }; catvm.safeFunction(Element.prototype.getAttributeNodeNS);

Element.prototype.getBoundingClientRect = function getBoundingClientRect() { debugger; }; catvm.safeFunction(Element.prototype.getBoundingClientRect);

Element.prototype.getClientRects = function getClientRects() { debugger; }; catvm.safeFunction(Element.prototype.getClientRects);

Element.prototype.getDestinationInsertionPoints = function getDestinationInsertionPoints() { debugger; }; catvm.safeFunction(Element.prototype.getDestinationInsertionPoints);

Element.prototype.getElementsByClassName = function getElementsByClassName() { debugger; }; catvm.safeFunction(Element.prototype.getElementsByClassName );

Element.prototype.getElementsByTagName = function getElementsByTagName() { debugger; }; catvm.safeFunction(Element.prototype.getElementsByTagName);

Element.prototype.getElementsByTagNameNS = function getElementsByTagNameNS() { debugger; }; catvm.safeFunction(Element.prototype.getElementsByTagNameNS);

Element.prototype.hasAttribute = function hasAttribute() { debugger; }; catvm.safeFunction(Element.prototype.hasAttribute);


Element.prototype.hasAttributeNS = function hasAttributeNS() { debugger; }; catvm.safeFunction(Element.prototype.hasAttributeNS );

Element.prototype.hasAttributes = function hasAttributes() { debugger; }; catvm.safeFunction(Element.prototype.hasAttributes );

Element.prototype.hasPointerCapture = function hasPointerCapture() { debugger; }; catvm.safeFunction(Element.prototype.hasPointerCapture );

Element.prototype.insertAdjacentElement = function insertAdjacentElement() { debugger; }; catvm.safeFunction(Element.prototype.insertAdjacentElement);



Element.prototype.insertAdjacentHTML = function insertAdjacentHTML() { debugger; }; catvm.safeFunction(Element.prototype.insertAdjacentHTML);

Element.prototype.insertAdjacentText = function insertAdjacentText() { debugger; }; catvm.safeFunction(Element.prototype.insertAdjacentText);

Element.prototype.querySelector = function querySelector() { debugger; }; catvm.safeFunction(Element.prototype.querySelector);

Element.prototype.querySelectorAll = function querySelectorAll() { debugger; }; catvm.safeFunction(Element.prototype.querySelectorAll);


Element.prototype.releasePointerCapture = function releasePointerCapture() { debugger; }; catvm.safeFunction(Element.prototype.releasePointerCapture);


Element.prototype.remove = function remove() { debugger; }; catvm.safeFunction(Element.prototype.remove);

Element.prototype.removeAttribute = function removeAttribute() { debugger; }; catvm.safeFunction(Element.prototype.removeAttribute );

Element.prototype.removeAttributeNS = function removeAttributeNS() { debugger; }; catvm.safeFunction(Element.prototype.removeAttributeNS );

Element.prototype.removeAttributeNode = function removeAttributeNode() { debugger; }; catvm.safeFunction(Element.prototype.removeAttributeNode);

Element.prototype.replaceWith = function replaceWith() { debugger; }; catvm.safeFunction(Element.prototype.replaceWith);

Element.prototype.requestPointerLock = function requestPointerLock() { debugger; }; catvm.safeFunction(Element.prototype.requestPointerLock);



Element.prototype.scroll = function scroll() { debugger; }; catvm.safeFunction(Element.prototype.scroll);

Element.prototype.scrollBy = function scrollBy() { debugger; }; catvm.safeFunction(Element.prototype.scrollBy );

Element.prototype.scrollIntoView = function scrollIntoView() { debugger; }; catvm.safeFunction(Element.prototype.scrollIntoView);

Element.prototype.scrollIntoViewIfNeeded = function scrollIntoViewIfNeeded() { debugger; }; catvm.safeFunction(Element.prototype.scrollIntoViewIfNeeded);


Element.prototype.scrollTo = function scrollTo() { debugger; }; catvm.safeFunction(Element.prototype.scrollTo);


Element.prototype.setAttribute = function setAttribute() { debugger; }; catvm.safeFunction(Element.prototype.setAttribute );

Element.prototype.setAttributeNS = function setAttributeNS() { debugger; }; catvm.safeFunction(Element.prototype.setAttributeNS);

Element.prototype.setAttributeNode = function setAttributeNode() { debugger; }; catvm.safeFunction(Element.prototype.setAttributeNode);

Element.prototype.setAttributeNodeNS = function setAttributeNodeNS() { debugger; }; catvm.safeFunction(Element.prototype.setAttributeNodeNS);

Element.prototype.setPointerCapture = function setPointerCapture() { debugger; }; catvm.safeFunction(Element.prototype.setPointerCapture );


Element.prototype.toggleAttribute = function toggleAttribute() { debugger; }; catvm.safeFunction(Element.prototype.toggleAttribute);



Element.prototype.webkitMatchesSelector = function webkitMatchesSelector() { debugger; }; catvm.safeFunction(Element.prototype.webkitMatchesSelector);

Element.prototype.webkitRequestFullScreen = function webkitRequestFullScreen() { debugger; }; catvm.safeFunction(Element.prototype.webkitRequestFullScreen );

Element.prototype.webkitRequestFullscreen = function webkitRequestFullscreen() { debugger; }; catvm.safeFunction(Element.prototype.webkitRequestFullscreen);























Element.prototype.__proto__=Node.prototype;

Element.prototype.__proto__.__proto__=EventTarget.prototype;
HTMLElement.prototype.__proto__=Element.prototype;
HTMLCanvasElement.prototype=HTMLCanvasElement;
HTMLCanvasElement.prototype.__proto__=HTMLElement.prototype;

window.HTMLCanvasElement=HTMLCanvasElement;
debugger












document.createElement = function () {
    debugger

    return canvas
}

canvas = {
    getContext: function getContext() {
        return CanvasRenderingContext2D
    },
    toDataURL: function toDataURL() {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAH7UlEQVR4Xu3csYukBx3G8WfXMxBzIEFyCQERUkoqbSwsUlil0kBCiqQRrCwtxEr/AyGFheKhoJBGJEUg6YQUtkIsNE2SIoTEcKgpwgX3VmZ3B2fndnZnvLvNPfl9Fpbbu5udfZ7v7zdf3vedl92LDwQQQKCEwF5JTjERQACBENbdW4LDBM+7h9MzIXA7gVVhLV5wy4/Fv6///Tx+5z12l+fZZkbL51tmXM16JwLeNufqz1/NS1jbTM9jELgDAusv8PUX3a4vwvMev+tzXSTIdWHdiax2Fc9ZXe5mvzsYqW9F4PNLgLBun+024iGsz+9rQrP7mMCuwjp92nSY/SRfODl9vJW9HJxzHWeTCLY9FTvrKGj5nGcdGa6e3i6+3nTKexGD5fOsfv/i37b9vvt4/KIh0EXgrBfdeoPlY05LYT+HOchDSb6c5D9JPs5+PsnhxgvP2xyVbHN0s5TPplPCi05rN12DWhXTRTLapkvXJkiLQAGBXV6Yp48wHkjylfw8X8u1/Dm/SPJWruQfObg0YS2PctYFtI2wzrvetY2MthVrwQqIiEAPgV2F9b/HH+ahPJaX83Ru5Hp+k+SvuZIPL0lYZx1lbTpCukhg69MirJ79lXQYgf9PWItrV4/kIP/Ojfwuv86z+UOSv2U//7ykU8L7TVgXnWYOWyt1Ebg3BHa9D+v4CtWXknwjP867eTHv5qV8Pb/MO0k+ORVy9drXputiZ10M37bppgvum55z/aL58pRy9chs25zLx613vFu3VmzLwOMQGEVgtxfY4dE7gg/mtTyR7+ZP+Ul+n5/mj0neTHLj5F3CUQCVRQCByyNwu7COb1W4cnK7wiLJrZO38I9l9UaeyDP5bb6Zv+e1XD+R1ftJbmbv1K0Dl9fCT0IAgREETgtrccJ3PVfz/Vw9uV1h8f+LWxYWfz6YZ/JcXs8P81TeyKv51dF1q+S9o5PBvSOx+UAAAQTuGYF1Ye3nq3k+N/ODPJ7DXMvHuZWDfJBH83aezGN5Py/k9fwsryR5O8mHZHXPZuOJEUBgjcDtR1jJA/levp0P8p1czcO5mYdzLR/lW3kzP8pfkvwryUdHN4omnzqyslMIIHBZBDZdw/ri0Sng8efi68U7bDdPPj89EtXi2pZrVpc1Jz8HAQTO/f1Nxxffl58LYS2uUZGUtUEAgc+MwG63NXxmMf1gBBBAwG/ItAMIIFBEwBFW0bBERWA6AcKavgH6I1BEgLCKhiUqAtMJENb0DdAfgSIChFU0LFERmE6AsKZvgP4IFBEgrKJhiYrAdAKENX0D9EegiABhFQ1LVASmEyCs6RugPwJFBAiraFiiIjCdAGFN3wD9ESgiQFhFwxIVgekECGv6BuiPQBEBwioalqgITCdAWNM3QH8EiggQVtGwREVgOgHCmr4B+iNQRICwioYlKgLTCRDW9A3QH4EiAoRVNCxREZhOgLCmb4D+CBQRIKyiYYmKwHQChDV9A/RHoIgAYRUNS1QEphMgrOkboD8CRQQIq2hYoiIwnQBhTd8A/REoIkBYRcMSFYHpBAhr+gboj0ARAcIqGpaoCEwnQFjTN0B/BIoIEFbRsERFYDoBwpq+AfojUESAsIqGJSoC0wkQ1vQN0B+BIgKEVTQsURGYToCwpm+A/ggUESCsomGJisB0AoQ1fQP0R6CIAGEVDUtUBKYTIKzpG6A/AkUECKtoWKIiMJ0AYU3fAP0RKCJAWEXDEhWB6QQIa/oG6I9AEQHCKhqWqAhMJ0BY0zdAfwSKCBBW0bBERWA6AcKavgH6I1BEgLCKhiUqAtMJENb0DdAfgSIChFU0LFERmE6AsKZvgP4IFBEgrKJhiYrAdAKENX0D9EegiABhFQ1LVASmEyCs6RugPwJFBAiraFiiIjCdAGFN3wD9ESgiQFhFwxIVgekECGv6BuiPQBEBwioalqgITCdAWNM3QH8EiggQVtGwREVgOgHCmr4B+iNQRICwioYlKgLTCRDW9A3QH4EiAoRVNCxREZhOgLCmb4D+CBQRIKyiYYmKwHQChDV9A/RHoIgAYRUNS1QEphMgrOkboD8CRQQIq2hYoiIwnQBhTd8A/REoIkBYRcMSFYHpBAhr+gboj0ARAcIqGpaoCEwnQFjTN0B/BIoIEFbRsERFYDoBwpq+AfojUESAsIqGJSoC0wkQ1vQN0B+BIgKEVTQsURGYToCwpm+A/ggUESCsomGJisB0AoQ1fQP0R6CIAGEVDUtUBKYTIKzpG6A/AkUECKtoWKIiMJ0AYU3fAP0RKCJAWEXDEhWB6QQIa/oG6I9AEQHCKhqWqAhMJ0BY0zdAfwSKCBBW0bBERWA6AcKavgH6I1BEgLCKhiUqAtMJENb0DdAfgSIChFU0LFERmE6AsKZvgP4IFBEgrKJhiYrAdAKENX0D9EegiABhFQ1LVASmEyCs6RugPwJFBAiraFiiIjCdAGFN3wD9ESgiQFhFwxIVgekECGv6BuiPQBEBwioalqgITCdAWNM3QH8EiggQVtGwREVgOgHCmr4B+iNQRICwioYlKgLTCRDW9A3QH4EiAoRVNCxREZhOgLCmb4D+CBQRIKyiYYmKwHQChDV9A/RHoIgAYRUNS1QEphMgrOkboD8CRQQIq2hYoiIwnQBhTd8A/REoIkBYRcMSFYHpBAhr+gboj0ARAcIqGpaoCEwnQFjTN0B/BIoIEFbRsERFYDqB/wKBMd6XOnsDqQAAAABJRU5ErkJggg=="
    },
};








Document.prototype.getElementById = function (id) {
    debugger;
    return id
    return null;
};
catvm.safeFunction(Document.prototype.getElementById)

Document.prototype.addEventListener = function addEventListener(type, listener, options, useCapture) {




};
catvm.safeFunction(Document.prototype.addEventListener)

/*
document.createElement = function createElement(tagName) {

    var tagname = tagName.toLowerCase() + "";


    debugger;


    if (catvm.menory.htmlelement[tagname] == undefined) {

        debugger;

    };


    return catvm.proxy(catvm.menory.htmlelement[tagname]());

};
catvm.safeFunction(document.createElement)
*/


Document.prototype.createEvent = function createEvent(event) {


};
catvm.safeFunction(Document.prototype.createEvent)
Audio = function () {


    //elem.dispatchEvent(event);
};
catvm.safeFunction(Audio)

Document.prototype.addEventListener = function createEvent() {


    //elem.dispatchEvent(event);
};
catvm.safeFunction(Document.prototype.addEventListener)




addEventListener = function addEventListener() {
    debugger
};
catvm.safeFunction(addEventListener);
removeEventListener = function removeEventListener() {
    debugger
};
catvm.safeFunction(removeEventListener);

window.addEventListener = addEventListener;
window.removeEventListener = removeEventListener;
debugger


HTMLDocument.prototype.__proto__ = Document.prototype;
HTMLDocument.prototype.__proto__.__proto__ = Node.prototype;
HTMLDocument.prototype.__proto__.__proto__.__proto__ = EventTarget.prototype;


document.__proto__ = HTMLDocument.prototype;
window.document = document;



var CanvasRenderingContext2D = function CanvasRenderingContext2D() { debugger }; catvm.safeFunction(CanvasRenderingContext2D);
Object.defineProperties(CanvasRenderingContext2D.prototype, {
    [Symbol.toStringTag]: {
        value: "CanvasRenderingContext2D",
        configurable: true

    }

});



CanvasRenderingContext2D.prototype.arc = function arc() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.arc);
CanvasRenderingContext2D.prototype.stroke = function stroke() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.stroke);
CanvasRenderingContext2D.prototype.fillText = function fillText() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.fillText);
CanvasRenderingContext2D.prototype.beginPath = function beginPath() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.beginPath);
CanvasRenderingContext2D.prototype.bezierCurveTo = function bezierCurveTo() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.bezierCurveTo);
CanvasRenderingContext2D.prototype.canvas = canvas
CanvasRenderingContext2D.prototype.clearRect = function clearRect() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.clearRect);
CanvasRenderingContext2D.prototype.clip = function clip() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.clip);
CanvasRenderingContext2D.prototype.closePath = function closePath() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.closePath);
CanvasRenderingContext2D.prototype.createImageData = function createImageData() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.createImageData);
CanvasRenderingContext2D.prototype.createLinearGradient = function createLinearGradient() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.createLinearGradient);
CanvasRenderingContext2D.prototype.createPattern = function createPattern() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.createPattern);

CanvasRenderingContext2D.prototype.createRadialGradient = function createRadialGradient() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.createRadialGradient);

CanvasRenderingContext2D.prototype.drawFocusIfNeeded = function drawFocusIfNeeded() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.drawFocusIfNeeded);




CanvasRenderingContext2D.prototype.drawImage = function drawImage() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.drawImage);
CanvasRenderingContext2D.prototype.ellipse = function ellipse() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.ellipse);
CanvasRenderingContext2D.prototype.fill = function fill() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.fill);
CanvasRenderingContext2D.prototype.fillRect = function fillRect() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.fillRect);

CanvasRenderingContext2D.prototype.fillText = function fillText() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.fillText);

CanvasRenderingContext2D.prototype.getImageData = function getImageData() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.getImageData);
CanvasRenderingContext2D.prototype.getLineDash = function getLineDash() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.getLineDash);
CanvasRenderingContext2D.prototype.getTransform = function getTransform() { }; catvm.safeFunction(CanvasRenderingContext2D.prototype.getTransform);
CanvasRenderingContext2D.__proto__ = CanvasRenderingContext2D.prototype






CanvasRenderingContext2D = catvm.proxy(CanvasRenderingContext2D);
document = catvm.proxy(document);
Document = catvm.proxy(Document);


var Location=function Location(){

};catvm.safeFunction(Location);
Object.defineProperties(Location.prototype, {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true
    },
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});




Location.prototype.hash= "";
Location.prototype.host= "yangkeduo.com";
Location.prototype.hostname= "yangkeduo.com";
Location.prototype.href= "http://yangkeduo.com/login.html?from=http%3A%2F%2Fyangkeduo.com%2Fsearch_result.html%3Fsearch_key%3D%25E7%25BD%2591%25E7%25BA%25A2%25E9%259B%25B6%25E9%25A3%259F%26search_type%3Dgoods%26search_met_track%3Dshade%26options%3D3%26source%3Dindex%26refer_page_el_sn%3D99885%26refer_page_name%3Dsearch_result%26refer_page_id%3D10015_1633581935422_t2fkgnn6s4%26refer_page_sn%3D10015&refer_page_name=search_result&refer_page_id=10015_1633586008102_fuzbs1ydhd&refer_page_sn=10015";

Location.prototype.origin= "http://yangkeduo.com";
Location.prototype.pathname= "/login.html";
Location.prototype.port= "";
Location.prototype.protocol= "http:";

Location.prototype.search="?from=http%3A%2F%2Fyangkeduo.com%2Fsearch_result.html%3Fsearch_key%3D%25E7%25BD%2591%25E7%25BA%25A2%25E9%259B%25B6%25E9%25A3%259F%26search_type%3Dgoods%26search_met_track%3Dshade%26options%3D3%26source%3Dindex%26refer_page_el_sn%3D99885%26refer_page_name%3Dsearch_result%26refer_page_id%3D10015_1633581935422_t2fkgnn6s4%26refer_page_sn%3D10015&refer_page_name=search_result&refer_page_id=10015_1633586008102_fuzbs1ydhd&refer_page_sn=10015";

var  location={};

 

location.__proto__=Location.prototype;





window.location=location.__proto__
window.origin=location.origin
location=catvm.proxy(location);

var navigatorConstructor = function Navigator() {

    throw new TypeError("Illegal constructor");
};
catvm.safeFunction(navigatorConstructor);
var navigatorPrototype = {};



Object.defineProperties(navigatorConstructor.prototype , {
    constructor: {
        value: constructor,
        writable: true,
        configurable: true

    },
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true

    }


});
navigatorConstructor.prototype = navigatorPrototype;
var Navigator = function Navigator() {

};
catvm.safeFunction(Navigator);



var navigator = {};
navigator.__proto__ = navigatorPrototype;
navigator.__proto__["appCodeName"] = "Mozilla";
navigator.__proto__["appName"] = "Netscape";
navigator.__proto__["appVersion"] = "5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36";
navigator.__proto__["clipboard"] = new (class Clipboard { });



navigator.__proto__["userAgent"] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36";
navigator.__proto__["vendor"] = "Google Inc.";
navigator.__proto__["doNotTrack"] = 8;
navigator.__proto__["deviceMemory"] = null;
navigator.__proto__["hardwareConcurrency"] = 8;
navigator.__proto__["language"] = 8;
navigator.__proto__["deviceMemory"] = "zh-CN";
navigator.__proto__["maxTouchPoints"] = 0;
navigator.__proto__["onLine"] = true;
navigator.__proto__["platform"] = "Win32";
navigator.__proto__["product"] = "Gecko";
navigator.__proto__["productSub"] = "20030107";


navigator.__proto__["clearAppBadge"] = function clearAppBadge() { debugger; }; catvm.safeFunction(navigator.__proto__.clearAppBadge);

debugger

for (let key in navigator.__proto__) {
    navigator[key] = navigator.__proto__[key];
    if (typeof (navigator.__proto__[key]) != "function") {
        navigator.__proto__.__defineGetter__(key, function () {
            debugger;
            var e = new Error();
            e.name = "TypeError";
            e.message = "Illegal invocation";

            e.stack = "TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.o (<anonymous>:1:83)"
            throw e;

        });

    }
}




//检测getOwnPropertyDescriptor 

Object.getOwnPropertyDescriptor = function (x, x1) {
    if (x == navigator) {
        return undefined
    }
    return Object.getOwnPropertyDescriptor(x, x1);
}; catvm.safeFunction(Object.getOwnPropertyDescriptor);
var windowConstructor = function Window() { debugger; throw new TypeError("Illegal constructor"); }; catvm.safeFunction(windowConstructor);

Object.defineProperty(window, "Navigator", {
    configurable: true,
    writable: true,
    value: Navigator
});


window["navigator"] = navigator;
;;;;;;;;;;;;;;
debugger;


var History=function History(){
 throw new  TypeError("Illegal constructor")
};catvm.safeFunction(History);


Object.defineProperties(History.prototype, {
    
    [Symbol.toStringTag]: {
        value: "History",
        configurable: true
    }
});
History.prototype.back=function back() {debugger;};catvm.safeFunction(History.prototype.back);

History = function() {};
History.prototype.length = 3;
History.prototype.replaceState = function() {};
History.prototype.scrollRestoration = "auto";
History.prototype.state = null;
History.prototype.back = function() {};

history = new History;
History.prototype.back.toString = function() {
    return "function back() { [native code] }"
};

history={};
history.__proto__=History.prototype;
window.history=history.__proto__
history=catvm.proxy(history);
;;;;;;;;;;;;
debugger

var Screen=function Screen(){throw new  TypeError("Illegal constructor")};catvm.safeFunction(Screen)
Object.defineProperties(Screen.prototype, {
   
    [Symbol.toStringTag]: {
        value: "Screen",
        configurable: true
    }
});


Screen.prototype.availHeight= 1040
Screen.prototype.availLeft= 0
Screen.prototype.availTop= 0
Screen.prototype.availWidth= 1920
Screen.prototype.colorDepth= 24
Screen.prototype.height= 1080
Screen.prototype.orientation={angle: 0, type: 'landscape-primary', onchange: null}
Screen.prototype.pixelDepth= 24
Screen.prototype.width= 1920


screen={}
screen.__proto__=Screen.prototype
window.screen=screen.__proto__

screen=catvm.proxy(screen)
catvm.menory.MimeType={};

var MimeType=function MimeType(){

    throw new  TypeError("Illegal constructor")
};catvm.safeFunction(MimeType);


Object.defineProperties(MimeType.prototype, {
   
    [Symbol.toStringTag]: {
        value: "MimeType",
        configurable: true
    }

});
/////////////////////////////////////

MimeType.prototype.description="";

MimeType.prototype.enabledPlugin=null;
MimeType.prototype.suffixes="";
MimeType.prototype.type="";

for(var pr in MimeType.prototype){
    if(typeof(MimeType.prototype[pr]) != "function"){
        MimeType.prototype.__defineGetter__(pr,function(){
            throw new  MimeType("Illegal constructor");
        });

    };

   

};


////////////////////////////////




catvm.menory.MimeType.new=function(data,initPlugin){
var mimeType={};

if(data!=undefined)
{
    mimeType.description=data.description;
    
    mimeType.suffixes=data.suffixes;
    mimeType.type=data.type;
    mimeType.enabledPlugin=initPlugin;

};





mimeType.__proto__=MimeType.prototype;

return mimeType;


}
debugger



catvm.menory.Plugin={};

var Plugin=function Plugin(){

    throw new  TypeError("Illegal constructor")
};catvm.safeFunction(Plugin);


catvm.menory.Plugin.iterator=function values(){
debugger;
return {
    naxt:function(){
    if (this.index_==undefined)
    
    {

        this.index_=0;
    }
    var temp=this.self_[this.index_];
    this.index_++;
if (temp!=undefined)

{
    return  {done:false,falvalue:tmp}; 
}
else
{
    return  {done:true,falvalue:tmp};

}

 },
    self_:this


}


};catvm.safeFunction(catvm.menory.Plugin.iterator);


Object.defineProperties(Plugin.prototype, {
   
    [Symbol.toStringTag]: {
        value: "Plugin",
        configurable: true
    },
    [Symbol.iterator]: {
        value: catvm.menory.Plugin.iterator,
        configurable: true
    }

});

//////////////////////////////////////////

Plugin.prototype.description="";
Plugin.prototype.filename="";
Plugin.prototype.name="";
Plugin.prototype.length=0;







Plugin.prototype.item=function item(index) {


return this[index];

};catvm.safeFunction(Plugin.prototype.item);
Plugin.prototype.namedItem=function namedItem(key) {

    return this[key];


};catvm.safeFunction(Plugin.prototype.namedItem);
for(var pr in Plugin.prototype){
    if(typeof(Plugin.prototype[pr]) != "function"){
        Plugin.prototype.__defineGetter__(pr,function(){
            throw new  TypeError("Illegal constructor");
        });

    };

   

};


////////////////////
catvm.menory.Plugin.new=function (data) {

var  plugin =  {};

if(data!=undefined)

{
    plugin.description=data.description;
    plugin.filename=data.filename;
    plugin.name = data.name;
/////////////////// MimeType


if(data!=undefined){
    for (let mtindex = 0; mtindex  < data.MimeTypes.length; mtindex ++) {
        var  mimeTypedata = data.MimeTypes[mtindex];

      var mimeType=catvm.menory.MimeType.new(mimeTypedata,plugin);

      plugin[mtindex]=mimeType;

      //plugin[mimeType.type]=mimeType;
////////////////////////////////////
      Object.defineProperty(plugin,mimeType.type, {
   
        
            value: mimeType
            
        
    
    });


         
     }
     plugin.length=data.MimeTypes.length;
}

};
plugin.__proto__=Plugin.prototype;

return plugin;

};



var PluginArray=function PluginArray(){

    throw new  TypeError("Illegal constructor")
};catvm.safeFunction(PluginArray);

catvm.menory.PluginArray.iterator=function values(){

    
    
    };catvm.safeFunction(catvm.menory.PluginArray.iterator);

    Object.defineProperties(PluginArray.prototype, {
   
        [Symbol.toStringTag]: {
            value: "PluginArray",
            configurable: true
        },
        [Symbol.iterator]: {
            value: catvm.menory.PluginArray.iterator,
            configurable: true
        }
    
    });

//////////////////////////////
debugger


PluginArray.prototype.item = function item(index) {

debugger

    return this[index];

};catvm.safeFunction(PluginArray.prototype.item);


PluginArray.prototype.namedItem = function namedItem(key) {

    return this[key];


};catvm.safeFunction(PluginArray.prototype.namedItem);

PluginArray.prototype.refresh=function refresh(){debugger;};catvm.safeFunction(PluginArray.prototype.refresh);


PluginArray.prototype.length=0;

for(var pr in PluginArray.prototype){
    if(typeof(PluginArray.prototype[pr]) != "function"){
        PluginArray.prototype.__defineGetter__(pr,function(){
            throw new  TypeError("Illegal constructor");
        });

    };

   

};




////////////////////////

    catvm.menory.PluginArray._={};

    if (catvm.menory.PluginArray.temp!=undefined) {
        
     for (let index = 0; index < catvm.menory.PluginArray.temp.length; index++) {
        

         var plugintemp=catvm.menory.Plugin.new(catvm.menory.PluginArray.temp[index]);
        catvm.menory.PluginArray._[index]=plugintemp;

        
        Object.defineProperty(catvm.menory.PluginArray, catvm.menory.PluginArray._[index].name, {

            value:catvm.menory.PluginArray[index]

    });
     }
     catvm.menory.PluginArray._.length=catvm.menory.PluginArray.temp.length;



     

    }
   



    catvm.menory.PluginArray._.__proto__=PluginArray.prototype;
   

    catvm.menory.PluginArray._=catvm.menory.PluginArray._;
    navigator.plugins= catvm.menory.PluginArray._;
    

catvm.menory.MimeTypeArray={}

var MimeTypeArray = function MimeTypeArray() {

    throw new TypeError("Illegal constructor")
};
catvm.safeFunction(MimeTypeArray);

catvm.menory.MimeTypeArray.iterator = function values() {



};
catvm.safeFunction(catvm.menory.MimeTypeArray.iterator);

Object.defineProperties(MimeTypeArray.prototype, {

    [Symbol.toStringTag]: {
        value: "MimeTypeArray",
        configurable: true
    },
    [Symbol.iterator]: {
        value: catvm.menory.MimeTypeArray.iterator,
        configurable: true
    }

});


MimeTypeArray.prototype.item = function item(index) {


    return this[index];

};
catvm.safeFunction(MimeTypeArray.prototype.item);


MimeTypeArray.prototype.namedItem = function namedItem(key) {

    return this[key];


};
catvm.safeFunction(MimeTypeArray.prototype.namedItem);




MimeTypeArray.prototype.length = 0;

for (var pr in MimeTypeArray.prototype) {
    if (typeof (MimeTypeArray.prototype[pr]) != "function") {
        MimeTypeArray.prototype.__defineGetter__(pr, function () {
            throw new TypeError("Illegal constructor");
        });

    };



};


navigator.mimeTypes = {};
navigator.mimeTypes.temp=0;
for (let pindex = 0; pindex < navigator.plugins.length; pindex++) {

    var   plugins_= navigator.plugins.item(pindex);

    for (let mindex = 0; mindex < plugins_.length; mindex++) {
        var  mimeType_=plugins_.item(mindex);

       if (navigator.mimeTypes[mimeType_.type]==undefined) 
       
       {
        navigator.mimeTypes[navigator.mimeTypes.temp]=mimeType_;
        Object.defineProperty(navigator.mimeTypes, mimeType_.type, {

            value:mimeType_

    });
        navigator.mimeTypes.temp++;
       }





        

    }





}

delete navigator.mimeTypes.temp;

navigator.mimeTypes.__proto__ = MimeTypeArray.prototype;

navigator.mimeTypes = navigator.mimeTypes
var HTMLDivElement=function HTMLDivElement(){

    throw new  TypeError("Illegal constructor")
};catvm.safeFunction(HTMLDivElement)



Object.defineProperties(HTMLDivElement.prototype, {
   
    [Symbol.toStringTag]: {
        value: "HTMLDivElement",
        configurable: true
    }
});



catvm.menory.htmlelement["div"]=function () {

var div= new (function (){});


div.align = ''

div.__proto__=  HTMLDivElement.prototype;
document.getElementsByClassName=HTMLDivElement.prototype
return div

}







//document=catvm.proxy(document)

NaN;;;;;;;;;;;;;;
debugger
