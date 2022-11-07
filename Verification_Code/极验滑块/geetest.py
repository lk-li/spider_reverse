# -*- coding: utf-8 -*-
"""
@Time ： 2022/3/9 15:55
@Auth ： 黑脸怪
@File ：geetest.py

"""
import json
import random
import urllib.parse

import ddddocr
from PIL import Image
import io
import requests
import time
import subprocess
from functools import partial
import execjs


subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")


class geetest():
    domin_url = "https://static.geetest.com"
    challenge = ""
    gt = ""

    bg_url = ""
    fullbg_url = ""
    slice_img_url = ""
    c = ""
    s = ""
    bg = None
    fullbg = None
    slice_img = None

    def __init__(self):
        self.r = requests.session()
        with open("1.js", encoding="utf-8")as f:
            js_code=f.read()
        self.js=execjs.compile(js_code)

    def _get_nowTime(self):
        return int(time.time() * 1000)

    def _One_Register(self):
        url = "https://www.geetest.com/demo/gt/register-slide?{}".format(self._get_nowTime())
        res = self.r.get(url).json()
        self.challenge = res["challenge"]
        self.gt = res["gt"]

    def _Two_check(self):
        url = "https://api.geetest.com/ajax.php"
        params = {
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "w": "",
            "callback": "geetest_{}".format(self._get_nowTime())
        }
        res = self.r.get(url, params=params).text
        # print(res)
        if "slide" in res:
            return True

    def _Get_bg_fg(self):
        url = "https://api.geetest.com/get.php"
        now_time = self._get_nowTime()
        params = {
            "is_next": "true",
            "type": "slide3",
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "https": "true",
            "protocol": "https://",
            "offline": "false",
            "product": "popup",
            "api_server": "api.geetest.com",
            "isPC": "true",
            "autoReset": "true",
            "width": "100%",
            "callback": "geetest_{}".format(now_time)
        }
        res = self.r.get(url, params=params).text
        res = res.replace(f"geetest_{now_time}(", "").replace(")", "")
        res_json = json.loads(res)
        print(res_json)
        self.challenge = res_json["challenge"]
        self.gt = res_json["gt"]
        self.bg_url = res_json["bg"]
        self.fullbg_url = res_json["fullbg"]
        self.slice_img_url = res_json["slice"]
        self.c = res_json["c"]
        self.s = res_json["s"]

    def _visit_img(self):
        # 获取背景图片 完整背景 缺口
        self._Get_bg_fg()

        self.bg = self.r.get(urllib.parse.urljoin(self.domin_url, self.bg_url)).content
        self.fullbg = self.r.get(urllib.parse.urljoin(self.domin_url, self.fullbg_url)).content
        self.slice_img = self.r.get(urllib.parse.urljoin(self.domin_url, self.slice_img_url)).content
        # with open("./bg.png","wb+")as f:
        #     f.write(self.bg)
        # with open("./fullbg.png","wb+")as f:
        #     f.write(self.fullbg)
        # with open("./slice.png","wb+")as f:
        #     f.write(self.slice_img)

    def _img_restore(self, img: bytes) -> bytes:
        image = Image.open(io.BytesIO(img))
        standard_img = Image.new("RGBA", (260, 160))
        position = [39, 38, 48, 49, 41, 40, 46, 47, 35, 34, 50, 51, 33, 32, 28, 29, 27, 26, 36, 37, 31, 30, 44, 45, 43,
                    42, 12, 13, 23, 22, 14, 15, 21, 20, 8, 9, 25, 24, 6, 7, 3, 2, 0, 1, 11, 10, 4, 5, 19, 18, 16, 17]
        s, u = 80, 10
        for c in range(52):
            a = position[c] % 26 * 12 + 1
            b = s if position[c] > 25 else 0
            im = image.crop(box=(a, b, a + 10, b + 80))
            standard_img.paste(im, box=(c % 26 * 10, 80 if c > 25 else 0))

        temp_io = io.BytesIO()
        standard_img.save(temp_io, format='png')
        return temp_io.getvalue()

        # ————————————————
        # 版权声明：乱序还原函数为CSDN博主「十一姐」的原创文章，遵循CC
        # 4.0
        # BY - SA版权协议，转载请附上原文出处链接及本声明。
        # 原文链接：https://blog.csdn.net/weixin_43411585/article/details/119839581

    def get_notch_position_x(self):
        slide = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
        res = slide.slide_comparison(self.bg, self.fullbg)
        return res["target"][0]

    def get_track(self, distance:int):
        def __ease_out_expo(sep):
            if sep == 1:
                return 1
            else:
                return 1 - pow(2, -10 * sep)
        if not isinstance(distance, int) or distance < 0:
            raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
            # 初始化轨迹列表
        slide_track = [
            [random.randint(-50, -10), random.randint(-50, -10), 0],
            [0, 0, 0],
        ]
        # 共记录count次滑块位置信息
        count = 30 + int(distance / 2)
        # 初始化滑动时间
        t = random.randint(50, 100)
        # 记录上一次滑动的距离
        _x = 0
        _y = 0
        for i in range(count):
            # 已滑动的横向距离
            x = round(__ease_out_expo(i / count) * distance)
            # 滑动过程消耗的时间
            t += random.randint(10, 20)
            if x == _x:
                continue
            slide_track.append([x, _y, t])
            _x = x
        slide_track.append(slide_track[-1])
        self.ptime=slide_track[-1][-1]
        return slide_track


    def get_slider_track(self,offset):
        with open("./tracks.json", "r") as f:
            tracks = json.load(f)
        slider_track = []
        for track in tracks:
            if offset == track[-1][0]:
                slider_track = track
                break
        # offset_track = []
        # for i in range(1, len(slider_track)):
        #     xyt = slider_track[i]
        #     xyt_b = slider_track[i - 1]
        #     offset_track.append([xyt[0] - xyt_b[0], xyt[1] - xyt_b[1], xyt[2] - xyt_b[2]])
        self.ptime=slider_track[-1][-1]
        return slider_track

    def ok(self,w):
        url="https://api.geetest.com/ajax.php"
        param={
            "gt":self.gt,
            "challenge":self.challenge,
            "lang": "zh-cn",
            "$_BBF": "0",
            "client_type": "web",
            "callback":"geetest_{}".format(self._get_nowTime()),
            "w":w
        }
        res=self.r.get(url,params=param)
        print(res.text)


    def main(self):
        # 访问极验获取验证码类型
        self._One_Register()
        # 完成 确认滑块
        if not self._Two_check():
            print("滑块验证失败")
            return

        # 访问并获取背景图片缺口图
        self._visit_img()
        # 乱序还原
        self.bg = self._img_restore(self.bg)
        self.fullbg = self._img_restore(self.fullbg)

        # with open("./bg.png","wb+")as f:
        #     f.write(self.bg)
        # with open("./fullbg.png","wb+")as f:
        #     f.write(self.fullbg)

        # 获取缺口位置
        juli = self.get_notch_position_x()-6
        guiji=self.get_track(juli)
        # guiji=self.get_slider_track(juli)

        print("距离：",juli)
        print("轨迹：",guiji)
        w=self.js.call("get_w",juli, self.challenge, self.ptime, str(guiji), str(self.c), self.s,"7.8.6",self.gt)
        print(w)
        self.ok(w)



gee = geetest()
gee.main()

