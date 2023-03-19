import ctypes
import execjs
import json
import random
import requests
import time
# from loguru import logger
from urllib.parse import urlparse, parse_qs, urlencode

import websdk


def left_shift(x, y):
    return ctypes.c_int(x << y).value


def get_time():
    return str(int(time.time() * 1000))


class DouYinEncrypt:
    def __init__(self, user_agent):
        self.ua = user_agent
        self.href_hash = ""
        self.ua_hash = ""
        self.params_hash = ""
        self.fix_hash = 65599
        self.fix_bin = 8240
        self.fix_seq = 65521
        self.canvas_hash = 536919696
        # self.ctx = self.load_js()

    # def load_js(self):
    #     # with open("./DouyinRegisterDevice/app/jsFiles/websdk.js", mode="r", encoding="utf-8") as f:
    #     with open("./websdk.js", mode="r", encoding="utf-8") as f:
    #         ctx = execjs.compile(f.read())
    #     # 本地
    #     # with open("./jsFiles/websdk.js", mode="r", encoding="utf-8") as f:
    #     #     ctx = execjs.compile(f.read())
    #
    #     return ctx

    @staticmethod
    def move_char_calc(nor):
        if 0 <= nor < 26:
            char_at = nor + 65
        elif 26 <= nor < 52:
            char_at = nor + 71
        elif nor == 62 or nor == 63:
            char_at = nor - 17
        else:
            char_at = nor - 4
        return chr(char_at)

    @staticmethod
    def unsigned_right_shift(signed, i=0):
        shift = signed % 0x100000000
        return shift >> i

    def sdb_hash(self, string=None, sdb_value=0):
        for index, char in enumerate(string):
            if string.startswith("_02B4Z6wo00"):
                sdb_value = self.unsigned_right_shift((sdb_value * self.fix_hash) + ord(char))
            elif string.startswith("{"):
                if index in [0, 1]:
                    sdb_value = self.unsigned_right_shift((sdb_value * self.fix_hash) ^ ord(char))
                else:
                    sdb_value = self.unsigned_right_shift((sdb_value * self.fix_hash) + ord(char))
            else:
                sdb_value = self.unsigned_right_shift((sdb_value ^ ord(char)) * self.fix_hash)
        return sdb_value

    def char_to_signature(self, sequence_num):
        offsets = [24, 18, 12, 6, 0]
        string = ""
        for offset in offsets:
            nor = sequence_num >> offset & 63
            string += self.move_char_calc(nor)
        return string

    def href_sequence(self, url):
        timestamp = int(time.time())
        timestamp_hash = self.sdb_hash(str(timestamp))
        self.href_hash = self.sdb_hash(url.split("//")[-1], sdb_value=timestamp_hash)
        sequence = timestamp ^ (self.href_hash % self.fix_seq * self.fix_seq)
        sequence = self.unsigned_right_shift(sequence)
        str_bin_sequence = str(bin(sequence)).replace("0b", "")
        fix_zero = "0" * (32 - len(str_bin_sequence))
        binary = f"{bin(self.fix_bin)}{fix_zero}{str_bin_sequence}".replace("0b", "")
        sequence_number = int(binary, 2)
        return sequence_number

    def char_to_signature1(self, sequence):
        sequence_first = sequence >> 2
        signature_one = self.char_to_signature(sequence_first)
        return signature_one

    def char_to_signature2(self, sequence):
        sequence_second = (sequence << 28) ^ (self.fix_bin >> 4)
        signature_two = self.char_to_signature(sequence_second)
        return signature_two

    def char_to_signature3(self, sequence):
        timestamp_sequence = sequence ^ self.canvas_hash
        sequence_three = left_shift(self.fix_bin, 26) ^ self.unsigned_right_shift(timestamp_sequence, i=6)
        signature_three = self.char_to_signature(sequence_three)
        return signature_three

    def char_to_signature4(self, sequence):
        timestamp_sequence = sequence ^ self.canvas_hash
        signature_four = self.move_char_calc(timestamp_sequence & 63)
        return signature_four

    def char_to_signature5(self, sequence, params, body=None):
        if body:
            new_body = dict()
            for key in sorted(body):
                new_body[key] = body[key]
            body_str = json.dumps(new_body, ensure_ascii=False).replace(" ", "")
            body_hash = self.sdb_hash(body_str)
            params = f"body_hash={body_hash}&{params}"
        sdb_sequence = self.sdb_hash(str(sequence))
        self.ua_hash = self.sdb_hash(self.ua, sdb_sequence)
        self.params_hash = self.sdb_hash(params, sdb_sequence)
        sequence_five = (((self.ua_hash % self.fix_seq) << 16) ^ (self.params_hash % self.fix_seq)) >> 2
        signature_five = self.char_to_signature(sequence_five)
        return signature_five

    def char_to_signature6(self, sequence):
        ua_remainder = self.ua_hash % self.fix_seq
        data_remainder = self.params_hash % self.fix_seq
        ua_data_number = ((int(ua_remainder) << 16) ^ int(data_remainder)) << 28
        sequence_six = ua_data_number ^ self.unsigned_right_shift((288 ^ sequence), 4)
        signature_six = self.char_to_signature(sequence_six)
        return signature_six

    def char_to_signature7(self):
        sequence_seven = self.href_hash % self.fix_seq
        signature_seven = self.char_to_signature(int(sequence_seven))
        return signature_seven

    def char_to_signature_hex(self, signature):
        sdb_signature = self.sdb_hash(signature)
        hex_signature = hex(sdb_signature).replace("0x", "")
        return hex_signature[-2:]

    def get_x_bogus(self, params, body=None, content_type=None):
        body_str = ""
        if content_type == "data":
            body_str = urlencode(body)
        elif content_type == "json":
            body_str = json.dumps(body, ensure_ascii=False).replace(" ", "")
        # x_bogus = self.ctx.call("get_xb", params, body_str, self.ua, self.canvas_hash)
        x_bogus = websdk.get_x_bogus(params, body_str, self.ua)
        return x_bogus

    def sign_100(self, ttscid):
        # sign = self.ctx.call("tiktok_mssdk_encode", ttscid)
        sign = websdk.tiktok_mssdk_encode(ttscid)
        return sign

    def generate_signature(self, href, api, body=None, content_type=None, ttscid="", prefix="_02B4Z6wo00001"):
        params = api.split("?")[1]
        params_str = str()
        if urlparse(api).query.split("&"):
            params_dict = {item.split("=")[0]: item.split("=")[1] for item in urlparse(api).query.split("&")}
            sort_dict = dict(sorted(params_dict.items(), key=lambda item: item[0]))
            for key, value in sort_dict.items():
                params_str += f"{key}={value}&"
        params_str += f"pathname={urlparse(api).path}&tt_webid=&uuid="
        x_bogus = self.get_x_bogus(params, body, content_type)
        params_str = f"X-Bogus={x_bogus}&{params_str}"
        sequence = self.href_sequence(href)
        sign1 = self.char_to_signature1(sequence)
        sign2 = self.char_to_signature2(sequence)
        sign3 = self.char_to_signature3(sequence)
        sign4 = self.char_to_signature4(sequence)
        sign5 = self.char_to_signature5(sequence, params_str, body)
        sign6 = self.char_to_signature6(sequence)
        sign7 = self.char_to_signature7()
        signature = f"{prefix}{sign1}{sign2}{sign3}{sign4}{sign5}{sign6}{sign7}"
        if ttscid:
            signature = f"{signature}{self.sign_100(ttscid)}"
        sign8 = self.char_to_signature_hex(signature)
        _signature = f"{signature}{sign8}"
        return x_bogus, _signature

    def cookie_signature(self, href, ac_nonce, ttscid="", prefix="_02B4Z6wo00f01"):
        sequence = self.href_sequence(href)
        sign1 = self.char_to_signature1(sequence)
        sign2 = self.char_to_signature2(sequence)
        sign3 = self.char_to_signature3(sequence)
        sign4 = self.char_to_signature4(sequence)
        sign5 = self.char_to_signature5(sequence, ac_nonce)
        sign6 = self.char_to_signature6(sequence)
        sign7 = self.char_to_signature7()
        signature = f"{prefix}{sign1}{sign2}{sign3}{sign4}{sign5}{sign6}{sign7}"
        sign8 = self.char_to_signature_hex(signature)
        if ttscid:
            _signature = f"{signature}{self.sign_100(ttscid)}{sign8}"
        else:
            _signature = f"{signature}{sign8}"
        return _signature

    def encrypt_strData(self, canvas_chrome_str):
        # strData = self.ctx.call("encrypt_strData", canvas_chrome_str)
        strData =websdk.encrypt_strData(canvas_chrome_str)
        return strData

    def ms_token(self, href):
        url = "https://mssdk.snssdk.com/web/report?msToken="
        canvas_chrome = {
            "tokenList": [],
            "navigator": {
                "appCodeName": self.ua.split("/")[0],
                "appMinorVersion": "undefined",
                "appName": "Netscape",
                "appVersion": self.ua.replace("Mozilla/", ""),
                "buildID": "undefined",
                "doNotTrack": "null",
                "msDoNotTrack": "undefined",
                "oscpu": "undefined",
                "platform": "Win32",
                "product": "Gecko",
                "productSub": "20030107",
                "cpuClass": "undefined",
                "vendor": "Google Inc.",
                "vendorSub": "",
                "deviceMemory": "8",
                "language": "zh-CN",
                "systemLanguage": "undefined",
                "userLanguage": "undefined",
                "webdriver": "false",
                "cookieEnabled": 1,
                "vibrate": 3,
                "credentials": 99,
                "storage": 99,
                "requestMediaKeySystemAccess": 3,
                "bluetooth": 99,
                "hardwareConcurrency": 4,
                "maxTouchPoints": -1,
                "languages": "zh-CN",
                "touchEvent": 2,
                "touchstart": 2,
            },
            "wID": {
                "load": 0,
                "nativeLength": 33,
                "jsFontsList": "17f",
                "syntaxError": "Failed to construct WebSocket: The URL Create WebSocket is invalid.",
                "timestamp": get_time(),
                "timezone": 8,
                "magic": 3,
                "canvas": str(self.canvas_hash),
                "wProps": 374198,
                "dProps": 2,
                "jsv": "1.7",
                "browserType": 16,
                "iframe": 2,
                "aid": 6383,
                "msgType": 1,
                "privacyMode": 0,
                "aidList": [6383, 6383, 6383],
                "index": 1,
            },
            "window": {
                "Image": 3,
                "isSecureContext": 1,
                "ActiveXObject": 4,
                "toolbar": 99,
                "locationbar": 99,
                "external": 99,
                "mozRTCPeerConnection": 4,
                "postMessage": 3,
                "webkitRequestAnimationFrame": 3,
                "BluetoothUUID": 3,
                "netscape": 4,
                "localStorage": 99,
                "sessionStorage": 99,
                "indexDB": 4,
                "devicePixelRatio": 1,
                "location": href,
            },
            "webgl": {
                "antialias": 1,
                "blueBits": 8,
                "depthBits": 24,
                "greenBits": 8,
                "maxAnisotropy": 16,
                "maxCombinedTextureImageUnits": 32,
                "maxCubeMapTextureSize": 16384,
                "maxFragmentUniformVectors": 1024,
                "maxRenderbufferSize": 16384,
                "maxTextureImageUnits": 16,
                "maxTextureSize": 16384,
                "maxVaryingVectors": 30,
                "maxVertexAttribs": 16,
                "maxVertexTextureImageUnits": 16,
                "maxVertexUniformVectors": 4096,
                "shadingLanguageVersion": "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
                "stencilBits": 0,
                "version": "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
                "vendor": "Google Inc. (Intel)",
                "renderer": "ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
            },
            "document": {
                "characterSet": "UTF-8",
                "compatMode": "CSS1Compat",
                "documentMode": "undefined",
                "layers": 4,
                "all": 12,
                "images": 99,
            },
            "screen": {
                "innerWidth": random.randint(1200, 1600),
                "innerHeight": random.randint(600, 800),
                "outerWidth": random.randint(1200, 1600),
                "outerHeight": random.randint(600, 800),
                "screenX": 0,
                "screenY": 0,
                "pageXOffset": 0,
                "pageYOffset": 0,
                "availWidth": random.randint(1200, 1600),
                "availHeight": random.randint(600, 800),
                "sizeWidth": random.randint(1200, 1600),
                "sizeHeight": random.randint(600, 800),
                "clientWidth": random.randint(1200, 1600),
                "clientHeight": random.randint(600, 800),
                "colorDepth": 24,
                "pixelDepth": 24,
            },
            "plugins": {
                "plugin": [
                    "internal-pdf-viewer|application/pdf|pdf",
                    "internal-pdf-viewer|text/pdf|pdf",
                    "internal-pdf-viewer|application/pdf|pdf",
                    "internal-pdf-viewer|text/pdf|pdf",
                    "internal-pdf-viewer|application/pdf|pdf",
                    "internal-pdf-viewer|text/pdf|pdf",
                    "internal-pdf-viewer|application/pdf|pdf",
                    "internal-pdf-viewer|text/pdf|pdf",
                    "internal-pdf-viewer|application/pdf|pdf",
                    "internal-pdf-viewer|text/pdf|pdf",
                ],
                "pv": "0",
            },
            "custom": {},
        }
        str_data = self.encrypt_strData(json.dumps(canvas_chrome).replace(" ", ""))
        payload = {
            "dataType": 8,
            "magic": 538969122,
            "strData": str_data,
            "tspFromClient": int(get_time()),
            "version": 1,
        }
        x_bogus = self.get_x_bogus(url.split("?")[-1], payload, content_type="json")
        url = url + "&X-Bogus=" + x_bogus
        headers = {"user-agent": self.ua}
        response = requests.post(url, json=payload, headers=headers)
        return response.cookies.get("msToken")

    def get_info(self, url):
        api = "https://xxbg.snssdk.com/websdk/v1/getInfo?"
        startTime = int(time.time() * 1000)
        timestamp1 = startTime + random.randint(1, 3)
        timestamp2 = timestamp1 + random.randint(10, 15)
        timestamp3 = timestamp2 + random.randint(100, 150)
        timestamp4 = timestamp3 + random.randint(1, 10)
        plain_arr_1 = [
            {"n": "aid", "f": 4, "r": 6383},
            {"n": "startTime", "f": 3, "r": startTime},
            {"n": "abilities", "f": 3, "r": "111"},
            {"n": "canvas", "f": 3, "r": self.canvas_hash},
            {"n": "timestamp1", "f": 3, "r": timestamp1},
            {"n": "platform", "f": 0, "r": "Win32"},
            {"n": "hardwareConcurrency", "f": 0, "r": 4},
            {"n": "deviceMemory", "f": 0, "r": 8},
            {"n": "language", "f": 0, "r": "zh-CN"},
            {"n": "languages", "f": 0,
             "r": random.sample(['zh-CN', 'zh-TW', 'zh', 'en-US', 'en', 'zh-HK', 'ja'], random.randint(1, 7))},
            {"n": "resolution", "f": 3, "r": f"{random.randint(1200, 1600)}_{random.randint(600, 800)}_24"},
            {"n": "availResolution", "f": 3, "r": f"{random.randint(1200, 1600)}_{random.randint(600, 800)}"},
            {"n": "screenTop", "f": 1, "r": 0},
            {"n": "screenLeft", "f": 1, "r": 0},
            {"n": "devicePixelRatio", "f": 1, "r": 1.25},
            {"n": "productSub", "f": 0, "r": "20030107"},
            {"n": "battery", "f": 3, "p": 1, "r": "true_0_Infinity_1"},
            {"n": "touchInfo", "f": 3, "r": "0_false_false"},
            {"n": "timezone", "f": 3, "r": 480},
            {"n": "timestamp2", "f": 3, "r": timestamp2},
            {
                "n": "gpuInfo",
                "f": 3,
                "r": "Google Inc. (Intel)/ANGLE (Intel, Intel(R) HD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)",
            },
            {"n": "jsFontsList", "f": 3, "r": "17f"},
            {
                "n": "pluginsList",
                "f": 3,
                "r": "PDF Viewerinternal-pdf-viewerapplication/pdftext/pdf##Chrome PDF Viewerinternal-pdf-viewerapplication/pdftext/pdf##Chromium PDF Viewerinternal-pdf-viewerapplication/pdftext/pdf##Microsoft Edge PDF Viewerinternal-pdf-viewerapplication/pdftext/pdf##WebKit built-in PDFinternal-pdf-viewerapplication/pdftext/pdf",
            },
            {"n": "timestamp3", "f": 3, "r": timestamp3},
            {"n": "userAgent", "f": 0, "r": self.ua},
            {"n": "everCookie", "f": 3, "m": "tt_scid"},
            {
                "n": "syntaxError",
                "f": 3,
                "r": "Failed to construct 'WebSocket': The URL 'Create WebSocket' is invalid.",
            },
            {"n": "nativeLength", "f": 3, "r": 33},
            {"n": "rtcIP", "f": 3, "p": 1, "r": "58.19.72.31"},
            {"n": "location", "f": 1, "r": url},
            {"n": "fpVersion", "f": 4, "r": "2.11.0"},
            # {"n": "clientId", "f": 3, "r": self.ctx.call("random_32")},
            {"n": "clientId", "f": 3, "r": websdk.random_32()},
            {"n": "timestamp4", "f": 3, "r": timestamp4},
            {"n": "extendField", "f": 4},
        ]
        plain_arr_2 = ["true_0_Infinity_1", "58.19.72.31"]
        # q = self.ctx.call("douyin_xxbg_q_encrypt", plain_arr_1, plain_arr_2)
        q = websdk.douyin_xxbg_q_encrypt(plain_arr_1, plain_arr_2)

        headers = {"user-agent": self.ua}
        params = {"q": q, "callback": f"_7013_{get_time()}"}
        response = requests.get(api, headers=headers, params=params)
        return response.cookies


if __name__ == "__main__":
    ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    url = "https://trendinsight.oceanengine.com/arithmetic-index/analysis?keyword=%E5%8F%A3%E7%BA%A2&appName=aweme"
    api = "https://trendinsight.oceanengine.com/api/open/index/get_multi_keyword_hot_trend?msToken="
    body = {"keyword_list": ["口红"], "start_date": "20220529", "end_date": "20220629", "app_name": "aweme"}
    print(
        DouYinEncrypt(ua).generate_signature(
            url, api, body, "json"
        ))

