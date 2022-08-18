import random
from subprocess import Popen
from urllib import parse

import execjs
import requests

Popen.__init__.__kwdefaults__['encoding'] = "utf-8"


class BossCookieSpider:

    def __init__(self):
        self.core = """
        Math.random=function() {
    return 0.7240567752446443
}
Date.prototype.getTime=function() {
    return 1632803044596
}
    window = {
    document: {
        cookie: "",
        createElement: function (tag) {
            if (tag == "canvas") {
                return canvas
            } else if (tag == "caption") {
                return {
                    tagName: "CAPTION"
                }
            }

        },
        getElementById: function (a, b, c, d) {
            return false
        },
        getElementsByName: function (a, b, c, d) {
            return false
        },
        getElementsByTagName: function (a, b, c, d) {
            return false
        },
        getElementsByClassName: function (a, b, c, d) {
            return false
        },
        title: ""
    },
    moveBy: function () {
    },
    moveTo: function () {
    },
    open: function () {
    },
    dispatchEvent: function () {
        return true
    },
    screen: {
        availHeight: 824,
        availWidth: 1536
    },
    location: {
        host: "www.zhipin.com",
        hostname: "www.zhipin.com",
        href: "https://www.zhipin.com/c101280100-p100101/",
        origin: "https://www.zhipin.com",
        pathname: "/c101280100-p100101/",
        toString: function () {
            return "https://www.zhipin.com/"
        }
    },
    decodeURI: decodeURI,
    OfflineAudioContext: function () {
        this.createOscillator = function () {
            return {
                frequency: {
                    setValueAtTime: function () {
                    }
                },
                connect: function () {
                },
                start: function () {
                },
            }
        },
            this.createDynamicsCompressor = function () {
                return {
                    threshold: {
                        setValueAtTime: function () {
                        },
                    },
                    setValueAtTime: function () {
                    },
                    knee: {
                        setValueAtTime: function () {
                        },
                    },
                    ratio: {
                        setValueAtTime: function () {
                        },
                    },
                    reduction: {
                        setValueAtTime: function () {
                        },
                    },
                    attack: {
                        setValueAtTime: function () {
                        },
                    },
                    release: {
                        setValueAtTime: function () {
                        },
                    },
                    connect: function () {
                    },
                }
            },
            this.startRendering = function () {
            }
    },
    history: {
        "length": 2,
        "scrollRestoration": "auto",
        "state": null
    },
    // outerHeight: 824,
    // innerHeight: 150,
    // outerWidth: 1536,
    // innerWidth: 0,
    outerHeight: 28,
    innerHeight: 0,
    outerWidth: 160,
    innerWidth: 0,
    Math: Math,
    Date: Date,
    encodeURIComponent: encodeURIComponent,
    RegExp: RegExp,
    length: 0,
    ScreenOrientation: function () {
    },
    onmessage: null,
    performance: {},
    speechSynthesis: {
        paused: false,
        pending: false,
        speaking: false,
        getVoices: function () {
        },
        speak: function () {
        }
    },
    SourceBuffer: function () {
        return {
            mode: "",
            appendWindowStart: "",
            audioTracks: "",
            buffered: "",
            textTracks: "",
            toString: function () {
                return "function SourceBuffer() { [native code] }"
            }
        }
    },

    XMLHttpRequest: function () {
        return {
            readyState: "",
            response: "",
            responseText: "",
            responseURL: "",
            responseXML: "",
            statusText: "",
            toString: function () {
                return "function XMLHttpRequest() { [native code] }"
            }
        }
    },
    SpeechSynthesisUtterance: function () {

    },
    toString: function () {
        return "[object Window]"
    },

}
scrollBy = function () {

}
scrollBy.toString=function(){
    return "function scrollBy() { [native code] }"
}
window.scrollBy=scrollBy
scrollTo = function () {

}
scrollTo.toString=function(){
    return "function scrollTo() { [native code] }"
}
window.scrollTo=scrollTo
window.open.toString = function () {
    return "function open() { [native code] }"
}

OfflineAudioContext = window.OfflineAudioContext
canvas = {
    getContext: function () {
        return CanvasRenderingContext2D
    },
    toDataURL: function () {
        // 实际为canvas画布填充了图片
        return "data:image/png;base64,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"
    },
}
CanvasRenderingContext2D = {
    fillRect: function () {
    },
    fillText: function () {
    }
}
localStorage = {
    removeItem: function (key) {
        delete this[key]
    },
    getItem: function (key) {
        return this[key] ? this[key] : null;
    },
    setItem: function (key, value) {
        this[key] = "" + value;
    },
};
sessionStorage = {}
document = window.document
window.navigator = navigator = {
    cookieEnabled: true,
    language: "zh-CN",
    appCodeName: "Mozilla",
    appName: "Netscape",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"

}

window.sessionStorage = sessionStorage
window.localStorage = localStorage
setInterval = window.setInterval = function () {
    debugger;
}
setInterval.toString = function () {
    return "function setInterval() { [native code] }"
}
setTimeout = window.setTimeout = function () {

}
setTimeout.toString = function () {
    return "function setTimeout() { [native code] }"
}
clearTimeout = window.clearTimeout = function () {

}
clearTimeout.toString = function () {
    return "function clearTimeout() { [native code] }"
}
top = window.top = window
self = window.self = window
window.window = window
child_process = undefined;
closed = {
    __proto__: (1 >> 3 > 4)["__proto__"]
}
screenTop = {
    __proto__: (2)["__proto__"]
}
Function.prototype.toString = function () {
    return "function () { [native code] }";
}
Object.keys(window).forEach(property => {
    try {
        if (typeof global[property] === 'undefined') {
            global[property] = window[property];
        }
    } catch (e) {
        // console.log(e);
    }
});
global.window = window;
global = undefined;
global = window
process.argv = undefined;
        """

    def main(self):
        headers = {
            "user-agent": f"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/{random.randint(1, 999)}.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
        }
        url = f"https://www.zhipin.com/job_detail/"
        response = requests.get(url, headers=headers, )
        self.cookies_generate(response)

    def cookies_generate(self, response):
        query_str = parse.urlparse(response.url).query
        query_dict = {i.split("=")[0]: i.split("=")[1] for i in query_str.split("&")}
        js_name = query_dict.get("name")
        # print(js_name)
        js_url = f"https://www.zhipin.com/web/common/security-js/{js_name}.js"
        js_res = requests.get(js_url)
        js_text = '!' + js_res.text
        js_text = js_text.replace("typeof process", "typeof child_process")
        seed = parse.unquote(query_dict.get("seed"))
        ts = query_dict.get("ts")

        new_js_text = self.core + js_text + """function get_zp_token_(seed, ts) {
        debugger;
         var code = (new window.ABC()).z(seed, parseInt(ts) + (480 + new Date().getTimezoneOffset()) * 60 * 1000);
        return encodeURIComponent(code);}"""

        new_js = execjs.compile(new_js_text)
        code = new_js.call("get_zp_token_", seed, ts)
        print(code)

        headers = {
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Referer': 'https://www.zhipin.com/job_detail/?query=&city=101270100&industry=100005&position=',
            'Accept-Language': 'zh-CN,zh;q=0.9',
        }
        cookies = {
            '__zp_stoken__': code}
        url = "https://www.zhipin.com/i100005-c101270100/"
        response = requests.get(url, headers=headers, cookies=cookies)
        print(response.text)
        pass


if __name__ == '__main__':
    boss_zhipin_cookie = BossCookieSpider()
    boss_zhipin_cookie.main()
    # SGcqzsg14tgJwBgsZ / HWElsHCsWmhDWcRe9cS1CJmoU =
    # SGcqzsg14tgJwBgsZ/HWEoNitRK+X0CGXLiP1uR9hRw=
    # 'SGcqzsg14tgJwBgsZ/HWEoNitRK+X0CGXLiP1uR9hRw='
    # f573dODsLLh4vbyp1Z3IGVypRRSgOaQ0LIk15cFwtYWwuKlUkVAkYbTsjAEVyYR5+HntHdzZhenpuShEAYmIuanJsSyc3OSFzaCZfTzgFO1gnHANhIgp5cEdYQy52AEk1XEJ1X0RnBRh4eWE=
    # f573dODsLLh4vbyQlFToSVypRRShRVmU%2FZjd5cFwtYSc0Zz90XAkYbTsjO0pQAjx%2BHntHdzZPBG86RTsAB3M2DTBmLEUNEXU2aTNJTzgFO1gnHANDQSh2S0dYQy52CEk1XEJ1X0RnBRh4eWE%3D
    # f573dODsLLh4vbwt1dGJ1VypRRSgjHCo+Ynx5cFwtYUZgQHJLVAkYbTsjdH8WMR5+HntHdzZPBGVEIhIASAoRQWJeDwMLEy15czVTTzgFO1gnHANhcm5DBEdYQy52AEk1XEJ1X0RnBRh4eWE=
    # f573dODsLLh4vbxZ2FRh7VypRRSg1CDB8UGN5cFwtYVQ8TWNVOgkYbTsjdjtYOi5+HntHdzZPBGVua3oAQmcePCUYCgprSiB+HiVKTzgFO1gnHANReSAHBkdYQy52bkk1XEJ1X0RnBRh4eWE=
    # f573dODsLLh4vbx83SnIMVypRRSgUSCYRPzp5cFwtYTFiQC1BOgkYbTsjbC0aZ2J+HntHdzZhdW9HPXoAUglqfxp5OyRlTRZ8NDNYTzgFO1gnHAMdJGIRHEdYQy52bkk1XEJ1X0RnBRh4eWE=
    # f573dODsLLh4vbx83SnIMVypRRSgUSCYRPzp5cFwtYTFiQC1BOgkYbTsjbC0aZ2J+HntHdzZhdW9HPXoAUglqfxp5OyRlTRZ8NDNYTzgFO1gnHAMdJGIRHEdYQy52bkk1XEJ1X0RnBRh4eWE=
