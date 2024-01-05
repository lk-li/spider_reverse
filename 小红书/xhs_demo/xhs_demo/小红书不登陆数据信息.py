import json
import time

import requests
from loguru import logger
import execjs
from enum import Enum

from 小红书.Enum_ import FeedType


class XHS:
    def __init__(self):
        self.sess = requests.session()
        # 生成 x-s 的des密钥
        self.x_s_keys = [187050025, 472920585, 186915882, 876157969, 255199502, 806945584, 220596020, 958210835,
                         757275681, 940378667, 489892883, 705504304, 354103316, 688857884, 890312192, 219096591,
                         622400037, 254088489, 907618332, 52759587, 907877143, 53870614, 839463457, 389417746,
                         975774727, 372382245, 437136414, 909246726, 168694017, 473575703, 52697872, 1010440969]
        # 生成 profileDate 的des密钥
        self.profileData_keys = [187567141, 875696391, 170266120, 876222754, 188089115, 1010309137, 187054378,
                                 957950720, 758514978, 941162813, 221382708, 990709537, 758848528, 688730163, 890444313,
                                 722272792, 890962233, 252521496, 890843430, 185009704, 874317360, 119997734, 907612693,
                                 119932961, 841824786, 120993794, 839716879, 909248796, 439099654, 372901635, 439091750,
                                 1009915397]

        # 加载加密函数
        with open('des.js', 'r', encoding='utf8') as f:
            jsCode = f.read()
        self.encrypt_func = execjs.compile(jsCode)
        # 需要加密参数
        self.a1 = self.encrypt_func.call('get_a1')
        self.profileData = self.encrypt_func.call("get_profiledata", self.profileData_keys)

        self.encrypt_url = ""  # 网址
        self.x_s = ""
        self.x_t = ""
        self.x_s_common = ""
        self.headers = {
            "authority": "edith.xiaohongshu.com",
            "content-type": "application/json;charset=UTF-8",
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "origin": "https://www.xiaohongshu.com",
            "pragma": "no-cache",
            "referer": "https://www.xiaohongshu.com/",
            "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
            "x-b3-traceid": "31ff71930b4371d2",
        }
        self.sess.cookie = {
            "webBuild": "2.11.5",
            "webId": "6ee3bde5c75986803cda9eea2d4468ac",
            "xsecappid": "xhs-pc-web",
            "a1": self.a1,
            "web_session": "0400698c87e0475634aeb61412374b4b68bf06",
        }
        self.response = ""

    def post_url(self, url, data, x10):
        logger.debug(f'访问 {url.split("xiaohongshu.com")[1]} start')
        self.encrypt_url = f'url={url.split("xiaohongshu.com")[1]}{data}'

        self.x_t = int(round(time.time() * 1000))
        url_toMd5Hex = self.encrypt_func.call('toMd5Hex', self.encrypt_url)

        encrypt_str = f'x1={url_toMd5Hex};x2=0|0|0|1|0|0|1|0|0|0|1|0|0|0|0;x3={self.a1};x4={self.x_t};'

        payload = self.encrypt_func.call('get_argus', self.x_s_keys, encrypt_str)

        self.x_s = self.encrypt_func.call('get_x_s', payload)

        self.x_s_common = self.encrypt_func.call('get_x_s_common', self.a1, self.x_t, self.x_s, x10)
        logger.info(f"获取x_s：{self.x_s}")
        logger.info(f"获取x_s_common：{self.x_s_common}")
        logger.info(f"获取x-t：{self.x_t}")
        self.headers["x-s"] = self.x_s
        self.headers["x-s-common"] = self.x_s_common
        self.headers["x-t"] = str(self.x_t)

        self.response = self.sess.post(url, headers=self.headers, data=data, cookies=self.sess.cookie)

        print(self.response.text)
        logger.debug(f'{url.split("xiaohongshu.com")[1]} status :{self.response.status_code}')
        return

    def start(self, category):
        logger.debug("开始验证")
        post_url = "https://www.xiaohongshu.com/api/sec/v1/shield/webprofile"
        post_data = json.dumps({
            "platform": "Windows",
            "sdkVersion": "3.3.3",
            "svn": "2",
            "profileData": self.profileData
        }).strip()
        x_s_common_x10 = 3  # 不同网址生成x-s-common中x10 数值不一样
        self.post_url(url=post_url, data=post_data, x10=x_s_common_x10)

        post_url = "https://edith.xiaohongshu.com/api/sns/web/v1/login/activate"
        post_data = json.dumps({

        }).strip()
        x_s_common_x10 = 6  # 不同网址生成x-s-common中x10 数值不一样
        self.post_url(url=post_url, data=post_data, x10=x_s_common_x10)
        if self.response.status_code == 200:
            logger.success("验证成功")
        else:
            logger.error("验证失败")
        logger.info(f'{self.sess.cookies["gid"], self.sess.cookies["web_session"]}')

        post_url = "https://edith.xiaohongshu.com/api/sns/web/v1/homefeed"
        post_data = json.dumps({
            "cursor_score": "",
            "num": 39,
            "refresh_type": 1,
            "note_index": 0,
            "unread_begin_note_id": "",
            "unread_end_note_id": "",
            "unread_note_count": 0,
            "category": category,
            "search_key": ""
        }).strip()
        x_s_common_x10 = 8
        self.post_url(url=post_url, data=post_data, x10=x_s_common_x10)
        # if self.response.status_code == 200:
        logger.success(f'{self.response.text}')


if __name__ == '__main__':
    feed_type = FeedType.RECOMMEND.value
    print(feed_type)
    xhs = XHS()
    items = xhs.start(feed_type)

