import json
import random
import re
import time

import ddddocr
import base64
import requests
from loguru import logger
from Crypto.Hash import SHA512
from Crypto.Cipher import AES

from track import get_trace


def captcha_encrypt(data):

    v8 = json.dumps(data, separators=(',', ':')).encode()
    v11 = SHA512.new(v8).digest() + v8
    slat = ''.join(random.choices("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", k=32))
    v12 = SHA512.new(bytes.fromhex(SHA512.new(
        slat.encode()).hexdigest() + '4dd4c2e6b83162090e52b3c7a6733ba41cb2462b829ab58a196b39db57177524f49baf7f08e8d68d26a72e37c1a95a2f1f05a51892aef2949732b62a38aadd58')).hexdigest()
    crypto = AES.new(key=bytes.fromhex(v12[:64]), mode=AES.MODE_GCM, nonce=bytes.fromhex(v12[64:88]))
    ciphertext, mac = crypto.encrypt_and_digest(v11)
    return base64.b64encode(bytes([116, 99, 6, 16, 0, 0]) + slat.encode() + ciphertext + mac).decode()


def get_cookie():
    response = requests.get('https://service.ipzan.com/core-extract?num=1&no=20230227648906140371&minute=1&format=json&protocol=1&pool=quality&mode=auth&secret=govge3feom8le3o').json()
    ip = response.get('data').get('list')[0].get('ip')
    port = response.get('data').get('list')[0].get('port')
    account = response.get('data').get('list')[0].get('account')
    password = response.get('data').get('list')[0].get('password')
    proxies = {
        "http": f"http://{account}:{password}@{ip}:{port}",
        "https": f"http://{account}:{password}@{ip}:{port}",
    }
    return proxies


class DyHk:
    def __init__(self):
        # self.proxies = get_cookie()
        self.proxies = None
        # self.proxies = proxy
        self.ocr = ddddocr.DdddOcr(show_ad=False, det=False, ocr=False)
        self.user_url = "https://www.douyin.com/user/MS4wLjABAAAAViovMw_TvOh5CvYZaEtj4th6nb8DiDakONVPWygGi4k"
        self.captcha_url = "https://verify.zijieapi.com/captcha/get"
        self.verify_captcha_url = 'https://verify.zijieapi.com/captcha/verify?'
        self.detail_fp_url = "https://www.douyin.com/search/%E4%B8%B4%E6%B2%82?source=switch_tab&type=user"


    def get_pic(self, detail, fp):
        headers = {
            "authority": "verify.zijieapi.com",
            "pragma": "no-cache",
            "cache-control": "no-cache",
            "sec-ch-ua": "^\\^",
            "accept": "application/json, text/plain, */*",
            "sec-ch-ua-mobile": "?0",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
            "sec-ch-ua-platform": "^\\^Windows^^",
            "origin": "https://www.douyin.com",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://www.douyin.com/",
            "accept-language": "zh-CN,zh;q=0.9"
        }
        params = {
            "lang": "zh",
            "app_name": "抖音 Web 站",
            "h5_sdk_version": "2.27.6",
            "h5_sdk_use_type": "cdn",
            "sdk_version": "3.8.6",
            "iid": "0",
            "did": "0",
            "device_id": "0",
            "ch": "web_text",
            "aid": "6383",
            "os_type": "2",
            "mode": "",
            "tmp": str(int(time.time() * 1000)),
            "platform": "pc",
            "webdriver": "false",
            "fp": fp,
            "type": "verify",
            "detail": detail,
            "server_sdk_env": '{"idc":"lf","region":"CN","server_type":"passport"}',
            "subtype": "slide",
            "challenge_code": "3058",
            "os_name": "windows",
            "h5_check_version": "3.8.6"
        }
        response = requests.get(self.captcha_url, headers=headers, params=params, proxies=self.proxies).json()
        if response.get('code') == 200:
            return response.get('data')

    def get_slide(self, fp, data):
        question = data.get('question')
        gap_pic_url = question.get('url2')
        main_pic_url = question.get('url1')
        # logger.success('成功拿到hk图')
        y = question.get('tip_y')
        gap_content = requests.get(gap_pic_url, proxies=self.proxies).content
        main_content = requests.get(main_pic_url, proxies=self.proxies).content
        x_track = self.ocr.slide_match(gap_content, main_content, simple_target=True).get("target")[0]
        x_track = int(x_track / 552 * 234.59)
        # logger.success(f'获取到滑动距离==>{x_track}, y==>{y}')
        track = get_trace(x_track, data['id'], fp, y)
        return track

    def get_detail(self):
        headers = {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36',
            'Cookie': 'passport_csrf_token=97a16966d9c2d3054ec3aa18b9a87230; passport_csrf_token_default=97a16966d9c2d3054ec3aa18b9a87230; ttwid=1%7CfV8zimFvKCs7bypgkFpMZphZoF1owp770CwKTkGYOfo%7C1671013020%7C5e8366be78bbb2e5929b41b2b4bb13a7d840db558b40ff78e17c6d83927b74cc; __ac_nonce=063d4b7d8003c7989ed9f'
        }
        response = requests.get(url=self.detail_fp_url, headers=headers, proxies=self.proxies)

        detail, fp = re.findall(r'"detail":"(.*?)".*?"fp":"(.*?)"', response.text, re.S)[0]
        # logger.success(f'拿到detail:{detail}, fp:{fp}')
        return detail, fp

    def verify(self, fp, detail, captcha_body):
        params = {
            "lang": "zh",
            "app_name": "抖音 Web 站",
            "h5_sdk_version": "2.27.6",
            "h5_sdk_use_type": "cdn",
            "sdk_version": "3.8.6",
            "iid": "0",
            "did": "0",
            "device_id": "0",
            "ch": "web_text",
            "aid": "6383",
            "os_type": "2",
            "mode": "",
            "tmp": str(int(time.time() * 1000)),
            "platform": "pc",
            "webdriver": "false",
            "fp": fp,
            "type": "verify",
            "detail": detail,
            "server_sdk_env": {"idc": "lf", "region": "CN", "server_type": "passport"},
            "subtype": "slide",
            "challenge_code": "3058",
            "os_name": "windows",
            "h5_check_version": "3.8.6",
            "xx-tt-dd": "qJI7ttpVdGKKbSBvYqmaf0aPo",
        }
        data = {
            "captchaBody": captcha_body
        }
        headers = {
            "authority": "verify.zijieapi.com",
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "origin": "https://www.douyin.com",
            "pragma": "no-cache",
            "referer": "https://www.douyin.com/",
            "sec-ch-ua": "^\\^Google",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "^\\^Windows^^",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        }
        response = requests.post(self.verify_captcha_url, headers=headers, json=data, params=params, proxies=self.proxies)
        print(response.text)
        if '通过' in response.text:
            return True

    def run(self):
        detail, fp = self.get_detail()
        data = self.get_pic(detail, fp)
        track = self.get_slide(fp, data)

        captcha_body = captcha_encrypt(track)
        time.sleep(1)
        result = self.verify(fp, detail, captcha_body)
        if result:
            return {
                's_v_web_id': fp,
            }


if __name__ == '__main__':
    for x in range(20):
        DyHk().run()
