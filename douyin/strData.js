
function _0x38c0c8(b, d, a) {

        let e = "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe", c = "=";
        a && (c = "");
        d && (e = d);
        let f, t = "", n = 0;
        for (;b.length >= n + 3; ) {
            f = (255 & b.charCodeAt(n++)) << 16 | (255 & b.charCodeAt(n++)) << 8 | 255 & b.charCodeAt(n++);
            t += e.charAt((16515072 & f) >> 18);
            t += e.charAt((258048 & f) >> 12);
            t += e.charAt((4032 & f) >> 6);
            t += e.charAt(63 & f);
        }
        b.length - n > 0 && (f = (255 & b.charCodeAt(n++)) << 16 | (b.length > n ? (255 & b.charCodeAt(n)) << 8 : 0),
        t += e.charAt((16515072 & f) >> 18), t += e.charAt((258048 & f) >> 12), t += b.length > n ? e.charAt((4032 & f) >> 6) : c,
        t += c);
        return t;
    }
function _0x238632(b, d) {

    let a, e = [], c = 0, f = "";
    for (let b = 0; b < 256; b++) {
        e[b] = b;
    }
    for (let d = 0; d < 256; d++) {
        c = (c + e[d] + b.charCodeAt(d % b.length)) % 256;
        a = e[d];
        e[d] = e[c];
        e[c] = a;
    }
    let t = 0;
    c = 0;
    for (let b = 0; b < d.length; b++) {
        t = (t + 1) % 256;
        c = (c + e[t]) % 256;
        a = e[t];
        e[t] = e[c];
        e[c] = a;
        f += String.fromCharCode(d.charCodeAt(b) ^ e[(e[t] + e[c]) % 256]);
    }
    return "A" + b + f;
}


function getsData(appVersion) {
    timestamp = new Date().getTime()
    // 浏览器指纹
    //var uat = `{"tokenList":[],"navigator":{"appCodeName":"Mozilla","appMinorVersion":"undefined","appName":"Netscape","appVersion":"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36","buildID":"undefined","doNotTrack":"null","msDoNotTrack":"undefined","oscpu":"undefined","platform":"Win32","product":"Gecko","productSub":"20030107","cpuClass":"undefined","vendor":"Google Inc.","vendorSub":"","deviceMemory":"8","language":"zh-CN","systemLanguage":"undefined","userLanguage":"undefined","webdriver":"false","cookieEnabled":1,"vibrate":3,"credentials":99,"storage":99,"requestMediaKeySystemAccess":3,"bluetooth":99,"hardwareConcurrency":4,"maxTouchPoints":-1,"languages":"zh-CN","touchEvent":2,"touchstart":2},"wID":{"load":0,"nap":"7","nativeLength":33,"jsFontsList":"83f017f","syntaxError":"Failed to construct 'WebSocket': The URL 'Create WebSocket' is invalid.","timestamp":"` + timestamp + `","timezone":8,"magic":3,"cvsHash":536919696,"wProps":374198,"dProps":2,"jsv":"1.5","browserType":16,"aid":6383,"index":1},"window":{"Image":3,"isSecureContext":1,"ActiveXObject":4,"toolbar":99,"locationbar":99,"external":99,"mozRTCPeerConnection":4,"postMessage":3,"webkitRequestAnimationFrame":3,"BluetoothUUID":3,"netscape":4,"localStorage":99,"sessionStorage":99,"indexDB":4,"devicePixelRatio":1,"location":"https://www.douyin.com/search/%E5%8D%A1%E5%A1%94%E5%B0%94%E4%B8%96%E7%95%8C%E6%9D%AF?source=switch_tab&type=user"},"webgl":{"antialias":1,"blueBits":8,"depthBits":24,"greenBits":8,"maxAnisotropy":16,"maxCombinedTextureImageUnits":32,"maxCubeMapTextureSize":16384,"maxFragmentUniformVectors":1024,"maxRenderbufferSize":16384,"maxTextureImageUnits":16,"maxTextureSize":16384,"maxVaryingVectors":30,"maxVertexAttribs":16,"maxVertexTextureImageUnits":16,"maxVertexUniformVectors":4096,"shadingLanguageVersion":"WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)","stencilBits":0,"version":"WebGL 1.0 (OpenGL ES 2.0 Chromium)","vendor":"Google Inc. (Intel)","renderer":"ANGLE (Intel, Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11)"},"document":{"characterSet":"UTF-8","compatMode":"CSS1Compat","documentMode":"undefined","layers":4,"all":12,"images":99},"screen":{"innerWidth":1853,"innerHeight":150,"outerWidth":1869,"outerHeight":955,"screenX":33,"screenY":29,"pageXOffset":0,"pageYOffset":0,"availWidth":1920,"availHeight":1040,"sizeWidth":1920,"sizeHeight":1080,"clientWidth":1853,"clientHeight":150,"colorDepth":24,"pixelDepth":24},"plugins":{"plugin":["PDF Viewer|internal-pdf-viewer|application/pdf|pdf","PDF Viewer|internal-pdf-viewer|text/pdf|pdf","Chrome PDF Viewer|internal-pdf-viewer|application/pdf|pdf","Chrome PDF Viewer|internal-pdf-viewer|text/pdf|pdf","Chromium PDF Viewer|internal-pdf-viewer|application/pdf|pdf","Chromium PDF Viewer|internal-pdf-viewer|text/pdf|pdf","Microsoft Edge PDF Viewer|internal-pdf-viewer|application/pdf|pdf","Microsoft Edge PDF Viewer|internal-pdf-viewer|text/pdf|pdf","WebKit built-in PDF|internal-pdf-viewer|application/pdf|pdf","WebKit built-in PDF|internal-pdf-viewer|text/pdf|pdf"],"pv":"0"}}`
    uat =`{"tokenList":[],"navigator":{"appCodeName":"Mozilla","appMinorVersion":"undefined","appName":"Netscape","appVersion":"`+appVersion+`","buildID":"undefined","doNotTrack":"null","msDoNotTrack":"undefined","oscpu":"undefined","platform":"Win32","product":"Gecko","productSub":"20030107","cpuClass":"undefined","vendor":"Google Inc.","vendorSub":"","deviceMemory":"8","language":"zh-CN","systemLanguage":"undefined","userLanguage":"undefined","webdriver":"false","cookieEnabled":1,"vibrate":3,"credentials":99,"storage":99,"requestMediaKeySystemAccess":3,"bluetooth":99,"hardwareConcurrency":4,"maxTouchPoints":-1,"languages":"zh-CN","touchEvent":2,"touchstart":2},"wID":{"load":0,"nativeLength":33,"jsFontsList":"83f017f","syntaxError":"Failed to construct 'WebSocket': The URL 'Create WebSocket' is invalid.","timestamp":"`+timestamp+`","timezone":8,"magic":3,"cvsHash":536919696,"wProps":374198,"dProps":2,"jsv":"1.5","browserType":16,"aid":6383,"index":1},"window":{"Image":3,"isSecureContext":1,"ActiveXObject":4,"toolbar":99,"locationbar":99,"external":99,"mozRTCPeerConnection":4,"postMessage":3,"webkitRequestAnimationFrame":3,"BluetoothUUID":3,"netscape":4,"localStorage":99,"sessionStorage":99,"indexDB":4,"devicePixelRatio":1,"location":"https://www.douyin.com/search/%E5%88%98%E7%95%8A%E5%AE%8F%E6%9C%AC%E8%8D%89%E7%BA%B2%E7%9B%AE%E8%88%9E%E8%B9%88?source=switch_tab&type=user"},"webgl":{"antialias":1,"blueBits":8,"depthBits":24,"greenBits":8,"maxAnisotropy":16,"maxCombinedTextureImageUnits":32,"maxCubeMapTextureSize":16384,"maxFragmentUniformVectors":1024,"maxRenderbufferSize":16384,"maxTextureImageUnits":16,"maxTextureSize":16384,"maxVaryingVectors":30,"maxVertexAttribs":16,"maxVertexTextureImageUnits":16,"maxVertexUniformVectors":4096,"shadingLanguageVersion":"WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)","stencilBits":0,"version":"WebGL 1.0 (OpenGL ES 2.0 Chromium)","vendor":"Google Inc. (Intel)","renderer":"ANGLE (Intel, Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11)"},"document":{"characterSet":"UTF-8","compatMode":"CSS1Compat","documentMode":"undefined","layers":4,"all":12,"images":99},"screen":{"innerWidth":1853,"innerHeight":150,"outerWidth":1869,"outerHeight":955,"screenX":33,"screenY":29,"pageXOffset":0,"pageYOffset":0,"availWidth":1920,"availHeight":1040,"sizeWidth":1920,"sizeHeight":1080,"clientWidth":1853,"clientHeight":150,"colorDepth":24,"pixelDepth":24},"plugins":{"plugin":["PDF Viewer|internal-pdf-viewer|application/pdf|pdf","PDF Viewer|internal-pdf-viewer|text/pdf|pdf","Chrome PDF Viewer|internal-pdf-viewer|application/pdf|pdf","Chrome PDF Viewer|internal-pdf-viewer|text/pdf|pdf","Chromium PDF Viewer|internal-pdf-viewer|application/pdf|pdf","Chromium PDF Viewer|internal-pdf-viewer|text/pdf|pdf","Microsoft Edge PDF Viewer|internal-pdf-viewer|application/pdf|pdf","Microsoft Edge PDF Viewer|internal-pdf-viewer|text/pdf|pdf","WebKit built-in PDF|internal-pdf-viewer|application/pdf|pdf","WebKit built-in PDF|internal-pdf-viewer|text/pdf|pdf"],"pv":"0"}}`
    // 随机生成的字符包括特殊符号 @等等
    sea ='\x88';
    Datas = _0x38c0c8(_0x238632(sea, uat));
    return Datas
}
