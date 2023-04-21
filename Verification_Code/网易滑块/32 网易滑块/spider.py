import json
import re

import ddddocr
import execjs
import requests
from loguru import logger


class zhhk:
    def __init__(self, hk_id):
        self.hk_id = hk_id
        # 找了半天发现是固定的
        self.hk_id = "ffccaa537da544269b4c9c1dc84dcb73"
        self.ocr = ddddocr.DdddOcr(show_ad=False, det=False, ocr=False)
        self.get_url = "https://c.dun.163.com/api/v3/get"
        self.d_url = "https://ac.dun.163.com/v3/d"
        self.b_url = "https://ac.dun.163.com/v3/b"
        self.check_url = "https://c.dun.163.com/api/v3/check"
        self.ctx = execjs.compile(open('verify.js', encoding='utf8').read())
        self.cb_fp = execjs.compile(open('cb_fp.js', encoding='utf8').read())

    def get(self):
        get_d = self.cb_fp.call('get_dd')
        logger.success(f'拿到d值: {get_d}')
        data = {
            "d": get_d,
            "v": "af2952a4",
            "cb": "__wmjsonp_054ef53"
        }
        headers = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Content-Length": "2712",
            "Content-type": "application/x-www-form-urlencoded",
            "Host": "ac.dun.163.com",
            "Origin": "https://www.zhihu.com",
            "Pragma": "no-cache",
            "Referer": "https://www.zhihu.com/account/unhuman?type=unhuman&message=%E7%B3%BB%E7%BB%9F%E7%9B%91%E6%B5%8B%E5%88%B0%E6%82%A8%E7%9A%84%E7%BD%91%E7%BB%9C%E7%8E%AF%E5%A2%83%E5%AD%98%E5%9C%A8%E5%BC%82%E5%B8%B8%EF%BC%8C%E4%B8%BA%E4%BF%9D%E8%AF%81%E6%82%A8%E7%9A%84%E6%AD%A3%E5%B8%B8%E8%AE%BF%E9%97%AE%EF%BC%8C%E8%AF%B7%E7%82%B9%E5%87%BB%E4%B8%8B%E6%96%B9%E9%AA%8C%E8%AF%81%E6%8C%89%E9%92%AE%E8%BF%9B%E8%A1%8C%E9%AA%8C%E8%AF%81%E3%80%82%E5%9C%A8%E6%82%A8%E9%AA%8C%E8%AF%81%E5%AE%8C%E6%88%90%E5%89%8D%EF%BC%8C%E8%AF%A5%E6%8F%90%E7%A4%BA%E5%B0%86%E5%A4%9A%E6%AC%A1%E5%87%BA%E7%8E%B0&need_login=true",
            "sec-ch-ua": "\";Not A Brand\";v=\"99\", \"Chromium\";v=\"94\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Core/1.94.191.400 QQBrowser/11.5.5245.400"
        }
        response = requests.post(self.d_url, data=data, headers=headers)
        d_b = re.findall(',"(.*?)","(.*?)"', response.text)[0]
        logger.success(f'拿到生成b的参数: {d_b}')
        get_bd = self.cb_fp.call('get_bd', d_b[0], d_b[1])

        data = {
            "d": get_bd[0],
            "v": "af2952a4",
            "cb": "__wmjsonp_054ef53"
        }
        response = requests.post(self.b_url, data=data, headers=headers)
        get_params = self.cb_fp.call('get_params')
        ac_token = self.cb_fp.call('get_ac', d_b[1], get_bd[1])
        logger.info(f'拿到ac_token:{ac_token}')
        params = {
            "referer": "https://www.zhihu.com/signin",
            "zoneId": "CN31",
            "acToken": ac_token,
            "id": self.hk_id,
            "fp": get_params['fp'],
            "https": "true",
            "type": "undefined",
            "version": "2.21.2",
            "dpr": "1",
            "dev": "1",
            "cb": get_params['cb'],
            "ipv6": "false",
            "runEnv": "10",
            "group": "",
            "scene": "",
            "lang": "zh-CN",
            "sdkVersion": "undefined",
            "width": "0",
            "audio": "false",
            "sizeType": "10",
            "smsVersion": "v2",
            "token": "",
            "callback": "__JSONP_dq8h4cu_0"
        }
        response = requests.get(self.get_url, params=params).text[18:-2]
        data = json.loads(response).get('data')
        # 背景图片
        big_pic = data.get('bg')[0]
        # 缺口图片
        gap_pic = data.get('front')[0]
        token = data.get('token')
        big_content = requests.get(big_pic).content
        # with open('111.jpg', 'wb') as f:
        #     f.write(big_content)
        gap_content = requests.get(gap_pic).content
        # with open('222.jpg', 'wb') as f:
        #     f.write(big_content)
        slide = self.ocr.slide_match(big_content, gap_content, simple_target=True)
        x = int(slide["target"][0] / 1.4545454545454546)
        logger.info(f'滑动距离为: {x}')
        return x, token, get_params['fp']

    def verify(self, x, token, fp):
        get_data = self.cb_fp.call('stack', token, x)
        logger.info(get_data)
        params = {
            "referer": "https://www.zhihu.com/signin",
            "zoneId": "CN31",
            "id": self.hk_id,
            "token": token,
            "acToken": "undefined",
            "data": get_data[0],
            "width": "320",
            "type": "2",
            "version": "2.21.2",
            "cb": get_data[1],
            "extraData": "",
            "bf": "0",
            "runEnv": "10",
            "sdkVersion": "undefined",
            "callback": "__JSONP_9nnie5k_1"
        }
        headers = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Host": "c.dun.163.com",
            "Pragma": "no-cache",
            "Referer": "https://www.zhihu.com/account/unhuman?type=unhuman&message=%E7%B3%BB%E7%BB%9F%E7%9B%91%E6%B5%8B%E5%88%B0%E6%82%A8%E7%9A%84%E7%BD%91%E7%BB%9C%E7%8E%AF%E5%A2%83%E5%AD%98%E5%9C%A8%E5%BC%82%E5%B8%B8%EF%BC%8C%E4%B8%BA%E4%BF%9D%E8%AF%81%E6%82%A8%E7%9A%84%E6%AD%A3%E5%B8%B8%E8%AE%BF%E9%97%AE%EF%BC%8C%E8%AF%B7%E7%82%B9%E5%87%BB%E4%B8%8B%E6%96%B9%E9%AA%8C%E8%AF%81%E6%8C%89%E9%92%AE%E8%BF%9B%E8%A1%8C%E9%AA%8C%E8%AF%81%E3%80%82%E5%9C%A8%E6%82%A8%E9%AA%8C%E8%AF%81%E5%AE%8C%E6%88%90%E5%89%8D%EF%BC%8C%E8%AF%A5%E6%8F%90%E7%A4%BA%E5%B0%86%E5%A4%9A%E6%AC%A1%E5%87%BA%E7%8E%B0&need_login=true",
            "sec-ch-ua": "\";Not A Brand\";v=\"99\", \"Chromium\";v=\"94\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "Sec-Fetch-Dest": "script",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Core/1.94.191.400 QQBrowser/11.5.5245.400"
        }
        response = requests.get(self.check_url, params=params, headers=headers).text[18:-2]
        logger.info(response)
        data = json.loads(response).get('data')
        zone_id = data.get('zoneId')
        # _token = data.get('token')
        validate = data.get('validate')
        logger.info(f"validate==>{validate}")
        if validate:
            return self.ctx.call('get_validate', validate, fp, zone_id)


    def run(self):
        x, token, fp = self.get()
        return self.verify(x, token, fp)



if __name__ == '__main__':
    print(zhhk(None).run())
