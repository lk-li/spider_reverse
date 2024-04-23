import json
import random
import ddddocr
import execjs
import requests
from PIL import Image
from io import BytesIO
from loguru import logger


class bebd:
    def __init__(self):
        # 产品id
        self.hk_id = "e5a3036bbb8d480cbf26ad85c35b7a86"
        self.ocr = ddddocr.DdddOcr(show_ad=False, det=False, ocr=False)
        self.get_getconf = "https://c.dun.163.com/api/v2/getconf"
        self.get_url = "https://c.dun.163.com/api/v3/get"
        self.check_url = "https://c.dun.163.com/api/v3/check"
        self.referer = "https://bebd.bevol.com/main.html#/login"
        with open("dun163.js", "r", encoding="utf8") as f:
            dun = f.read()
        self.dun = execjs.compile(dun)
        with open("get_fp.js", "r", encoding="utf8") as f:
            cp = f.read()
        self.fp = execjs.compile(cp)

    def _track(self, distance: int):
        """
        轨迹算法
        """
        X = 0
        Time = 0
        track_list = []
        i = 0
        while X < distance:
            dX = random.randint(1, 5)
            dY = random.randint(2, 6)
            dTime = random.randint(20, 100)
            if i == 0:
                dX = 4
                dTime = 42
                i += 1
            X += dX
            Time += dTime
            if X > distance:
                track_list.append([
                    distance,
                    dY,
                    Time
                ])
                break
            else:
                track_list.append([
                    X,
                    dY,
                    Time
                ])
        return track_list

    def _notch_position(self):
        """
        切口位置
        """
        bg = open("./img/bg.jpg", 'rb').read()
        front = open("./img/front.png", 'rb').read()
        slide = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
        res = slide.slide_match(bg, front, simple_target=True)

        return res["target"][0]

    def _write_img(self, url, width, name):
        """
        固定图片大小
        """
        r = requests.get(url).content
        ori_pic = Image.open(BytesIO(r))
        new_pic = ori_pic.resize((width, 158))
        new_pic.save(name)

    def get(self):
        headers = {
            "Accept": "*/*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Referer": "https://bebd.bevol.com/main.html",
            "Sec-Fetch-Dest": "script",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36",
            "sec-ch-ua": "\"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\""
        }

        params = {
            "referer": self.referer,
            "zoneId": "",
            "id": self.hk_id,
            "ipv6": "false",
            "runEnv": "10",
            "iv": "4",
            "loadVersion": "2.4.0",
            "lang": "zh-CN",
            "callback": "__JSONP_ga3ckci_0"
        }
        response = requests.get(self.get_getconf, headers=headers, params=params)
        res = json.loads(response.text[18:-2])
        dt_r = res.get("data").get("dt")
        logger.success(f'拿到生成dt的参数: {dt_r}')
        fp = self.fp.call("getfp")
        cb = self.dun.call("generate_cb")
        params_get = {
            "referer": self.referer,
            "zoneId": "CN31",
            "dt": dt_r,
            "acToken": "",
            "id": self.hk_id,
            "fp": fp,
            "https": "true",
            "type": "undefined",
            "version": "2.26.1",
            "dpr": "2",
            "dev": "1",
            "cb": cb,
            "ipv6": "false",
            "runEnv": "10",
            "group": "",
            "scene": "",
            "lang": "zh-CN",
            "sdkVersion": "undefined",
            "iv": "3",
            "width": "320",
            "audio": "false",
            "sizeType": "10",
            "smsVersion": "v3",
            "token": "",
            "callback": "__JSONP_dh5s4oh_0"
        }
        response = requests.get(self.get_url, headers=headers, params=params_get).text[18:-2]
        # print(response)
        json_data = json.loads(response)

        token = json_data["data"].get('token')
        self._write_img(json_data["data"]['bg'][0], 320, "./img/bg.jpg")
        self._write_img(json_data["data"]['front'][0], 60, './img/front.png')

        # 获取缺口位置
        distance = self._notch_position()

        logger.info(f'滑动距离为: {distance}')
        return distance, token, fp, dt_r

    def verify(self, distance, token, fp, dt):
        headers = {
            "Accept": "*/*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Referer": "https://bebd.bevol.com/main.html",
            "Sec-Fetch-Dest": "script",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36",
            "sec-ch-ua": "\"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\""
        }
        track = self._track(distance + 11)
        # track = self.get_track(x)
        data = self.dun.call("onVerifyCaptcha", track, token, distance)
        params = {
            "referer": self.referer,
            "zoneId": "CN31",
            "dt": dt,
            "id": self.hk_id,
            "token": token,
            "acToken": "undefined",
            "data": data,
            "width": "320",
            "type": "2",
            "version": "2.26.1",
            "cb": self.dun.call("generate_cb"),
            "extraData": "",
            "bf": "0",
            "runEnv": "10",
            "sdkVersion": "undefined",
            "iv": "3",
            "callback": "__JSONP_5jws1ut_1"
        }
        response = requests.get(self.check_url, headers=headers, params=params).text[18:-2]
        logger.info(response)
        data = json.loads(response).get('data')
        zone_id = data.get('zoneId')
        # _token = data.get('token')
        validate = data.get('validate')
        logger.info(f"validate==>{validate}")
        if validate:
            validate_en = self.dun.call('validate', validate, fp, zone_id)
            logger.info(f"validate_en==>{validate_en}")
            return validate_en

    def run(self):
        x, token, fp, dt = self.get()
        return self.verify(x, token, fp, dt)


if __name__ == '__main__':
    for i in range(3):
        bebd().run()
