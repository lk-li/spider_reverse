import random
from subprocess import Popen
from urllib import parse

import execjs
import requests

Popen.__init__.__kwdefaults__['encoding'] = "utf-8"

class BossCookieSpider:
    def __init__(self):
        self.core = """
        Function.prototype.toString = function () {
            console.log("Function.prototype.toString", this.name)
            return "";
        }
        
        let location = {
            "hostname": "www.zhipin.com",
            "href": "https://www.zhipin.com/web/common/security-check.html?seed=fngF9gcPr%2Buu99%2F8Jl37qOXVRgblPTzo6TZhNsG5MUQ%3D&name=889af591&ts=1621734827161&callbackUrl=%2Fc101010100-p140104%2F&srcReferer="
        }
        
        let document = {
            "location": location ,
            "cookie": "",
            "createElement": function (a, b, c, d, e, f, g) {
                if (a == 'canvas') {
                    return {
                        "getContext": function (a, b, c, d, e, f, g) {
                            if (a == "2d") {
                                return {
                                    "fillRect": function (a, b, c, d, e, f, g) {
        
                                    }, "fillText": function (a, b, c, d, e, f, g) {
        
                                    }
                                }
                            }
                        },
                        "toDataURL": function () {
                            return "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"
                        }
                    }
                } else {
                    debugger;
                }
            },
            "getElementById": function (a, b, c, d, e, f, g) {
        
            }
        }
        
        let navigator = {
            "cookieEnabled": true,
            "language": "zh-CN",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "webdriver": false,
            "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
        }
        
        let localStorageObj = {}
        let localStorage = {
            "setItem": function (a, b, c, d, e, f, g) {
                localStorageObj[a] = b;
            },
            "getItem": function (a, b, c, d, e, f, g) {
                return localStorageObj[a];
            },
        }
        
        let sessionStorage = {}
        
        let window = {
            "closed": false,
            "sessionStorage": sessionStorage,
            "localStorage": localStorage,
            "setInterval": function (a, b, c, d, e, f, g) {
                debugger;
            },
            "document": document,
            "navigator": navigator,
            "length": 0,
            "decodeURI": decodeURI,
            "history": {
                "length": "2",
                "scrollRestoration": "auto",
                "state": null
            },
            "location": location,
            "eval": function (a, b, c, d, e, f, g) {
                console.log("eval", a)
                return eval(a);
            },
            "outerHeight": 28,
            "innerHeight": 0,
            "outerWidth": 160,
            "innerWidth": 0,
            "Math": Math,
            "Date": Date,
            "OfflineAudioContext": function (a, b, c, d, e, f, g) {
                return {
                    "createOscillator": function (a, b, c, d, e, f, g) {
                        return {
                            "frequency": {
                                "setValueAtTime": function (a, b, c, d, e, f, g) {
        
                                }
                            }
                        };
                    },
                    "createDynamicsCompressor": function (a, b, c, d, e, f, g) {
        
                    }
                }
            },
            "Function": Function,
            "top": {
                "location": location
            },
            "atob": function (a, b, c, d, e, f, g) {
                return Buffer.from(a, 'base64').toString("binary");
            },
            "toString": function () {
                return "[object Window]";
            }
        }
        window.window = window;
        
        Object.keys(window).forEach(property => {
            try {
                if (typeof global[property] === 'undefined') {
                    global[property] = window[property];
                }
            } catch (e) {
                // console.log(e);
            }
        });
        
        global = undefined;
        process.argv = undefined;"""

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
        js_url = f"https://www.zhipin.com/web/common/security-js/{js_name}.js"
        js_res = requests.get(js_url, )
        js_text = js_res.text
        js_text = js_text.replace("typeof process", "typeof child_process")
        seed = parse.unquote(query_dict.get("seed"))
        ts = query_dict.get("ts")
        new_js_text = self.core + js_text+"""function encryption(seed, ts) {
    var code = new window.ABC().z(seed, parseInt(ts) + (480 + new Date().getTimezoneOffset()) * 60 * 1000);
    return encodeURIComponent(code)
}"""
        new_js = execjs.compile(new_js_text)
        code = new_js.call("encryption", seed, ts)
        print(code)
        headers = {
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
            "cookie": f"__zp_stoken__={code};"
        }
        url = "https://www.zhipin.com/c101280600-p100120/"
        response = requests.get(url, headers=headers, )
        print(response.text)
        pass

if __name__ == '__main__':
    boss_zhipin_cookie = BossCookieSpider()
    boss_zhipin_cookie.main()