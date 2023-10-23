# -*- encoding: utf-8 -*-
# @Author : qiang
# @File : run.py
# @Time : 2022/4/21 14:48

import requests
import time
from hashlib import md5
from loguru import logger
import urllib3
urllib3.disable_warnings()


def get_auth(timestamp, page):
    # string = f"aid=android1&client_sys=android&time={timestamp}vq47Hd9JUgfDCytC"
    string = f"gv2api/rkc/roomlistV1/2_181/{page}/20/android?aid=android1&client_sys=android&time={timestamp}vq47Hd9JUgfDCytC"
    # string = f"aid=android1&client_sys=android&time=1638452332vq47Hd9JUgfDCytC"
    m = md5()
    m.update(bytes(string, encoding='utf8'))
    result = m.hexdigest()
    logger.debug(f"auth: {result}")
    return result


def get_time_stamp():
    return str(int(time.time()))


def run():

    for page in range(0, 10):
        url = f"https://apiv2.douyucdn.cn/gv2api/rkc/roomlistV1/2_181/{page}/20/android"
        timestamp = get_time_stamp()
        auth = get_auth(timestamp, page)
        headers = {
            # 'User-Device': 'Y2E3MDQwODEwMGFiOTJmODZkYzY4ZTFhMjA2MDYxMTF8djYuMC4x',
            'aid': 'android1',
            # 'aid': 'ios',
            'time': timestamp,
            'auth': auth,
            'User-Agent': 'android/6.0.1 (android 8.1.0; ; Nexus+6P)',
            'Host': 'apiv2.douyucdn.cn',
            # 'Cookie': 'acf_did=ca70408100ab92f86dc68e1a20606111',
            'If-Modified-Since': 'Tue, 19 Apr 2022 04:21:00 GMT',
        }

        params = {
            'client_sys': 'android',
            # 'client_sys': 'ios',
        }

        response = requests.get(url, headers=headers, params=params, verify=False)

        logger.debug(response.text)


if __name__ == '__main__':
    run()
