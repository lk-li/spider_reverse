# -*- coding: UTF-8 -*-

import hashlib
import json
import random
import re

import execjs
import requests
import urllib3
from loguru import logger

urllib3.disable_warnings()


def myhash(data, flag="md5"):
    """
    hash 函数 默认 md5 可以使用 sha1 等
    :param data: 待加密的文本
    :param flag: md5/sha1/sha256等
    :return:
    """
    if hasattr(hashlib, flag):
        my_hash = getattr(hashlib, flag)()
    else:
        logger.warning(f"未定义hash类型:{flag}")
        return
    my_hash.update(data.encode("utf8"))
    hash_data = my_hash.hexdigest()
    return hash_data


def dict2str(d: dict) -> str:
    """字典格式 cookies 改成 xxx=xxx; 的格式"""
    result = ""
    for k, v in d.items():
        if k and v:
            result += k + "=" + v + "; "
    return result.strip()


def random_ua():
    """随机ua 按需添加就好了"""
    return random.choice([
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
    ])


class GenJslEncrypt:

    def __init__(self, ip=None, ua=None):
        self.session = requests.session()
        self.session.headers = {
            "Accept": "*/*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Origin": "https://www.gsxt.gov.cn",
            "Referer": "https://www.gsxt.gov.cn/socialuser-use-login.html",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": ua or random_ua(),
            "X-Requested-With": "XMLHttpRequest",
        }
        self.proxies = {}
        if ip:
            self.proxies = {
                "http": ip,
                "https": ip
            }
        self.session.proxies = self.proxies

    def get_jsl_result(self, url):
        """
        获取加速乐的结果, ua 和代理使用时需要和生成的保持一致
        :param url:
        :return:
        """
        jsl_result = {
            "headers": None,
            "proxies": self.proxies
        }
        response = self.session.get(url, timeout=10, verify=False)
        js_code = re.findall('<script>(.*?)</script>', response.text)[0]
        js_code = "function get_cookie() {" + js_code.replace('document.', '').replace(
            'location.href=location.pathname+location.search', '') + ";return cookie}"
        ctx = execjs.compile(js_code)
        jsl_cookie = ctx.call('get_cookie')
        jsl_cookie = re.sub("max-age.*", "", jsl_cookie)
        self.session.cookies.update({jsl_cookie.split("=")[0]: jsl_cookie.split("=")[1]})
        response = self.session.get(url, timeout=10, verify=False)
        js_code = re.findall('<script>(.*?)</script>', response.text)[0]
        args = re.findall(r"go\(({.*?})\)", js_code)[0]
        args = json.loads(args)
        bts = args["bts"]
        l = len(args["chars"])
        for i in range(l):
            for j in range(l):
                temp = bts[0] + args["chars"][i] + args["chars"][j] + bts[1]
                flagg = args["ha"]
                if myhash(temp, flagg) == args["ct"]:
                    self.session.cookies.update({args["tn"]: temp})
                    self.session.headers.update({"Cookie": dict2str(self.session.cookies.get_dict())})
                    jsl_result["headers"] = self.session.headers
        return jsl_result


if __name__ == '__main__':
    test_url = "https://xz.gsxt.gov.cn/index.html"
    jsl_headers = GenJslEncrypt().get_jsl_result(test_url)
    r = requests.get(test_url, headers=jsl_headers["headers"], verify=False)
    print(r.text)
