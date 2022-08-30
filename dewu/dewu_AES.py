#
# -*- coding:utf-8 -*-
import hashlib
import json
import os, sys, time, base64
# pip install pycryptodome
import random
import requests
from Crypto.Cipher import AES


# AES_128_ECB_PKCS5Padding算法。
class EncryptDate:
    def __init__(self, key):
        self.key = key.encode("utf-8")  # 初始化密钥
        self.length = AES.block_size  # 初始化数据块大小
        self.aes = AES.new(self.key, AES.MODE_ECB)  # 初始化AES,ECB模式的实例
        # 截断函数，去除填充的字符
        self.unpad = lambda date: date[0:-ord(date[-1])]

    def pad(self, text):
        """
        #填充函数，使被加密数据的字节码长度是block_size的整数倍
        """
        count = len(text.encode('utf-8'))
        add = self.length - (count % self.length)
        entext = text + (chr(add) * add)
        return entext

    def encrypt(self, encrData):  # 加密函数
        res = self.aes.encrypt(self.pad(encrData).encode("utf8"))
        msg = str(base64.b64encode(res), encoding="utf8")
        return msg

    def decrypt(self, decrData):  # 解密函数
        res = base64.decodebytes(decrData.encode("utf8"))
        msg = self.aes.decrypt(res).decode("utf8")
        return self.unpad(msg)


def aes_ecb_pk5padding(sign_string, key="d245a0ba8d678a61"):
    # 这里密钥的长度必须是16的倍数
    eg = EncryptDate(key)
    result = eg.encrypt(str(sign_string))
    return result


def get_sign_string(params: dict):
    """
        ::param {recommendId: "73", lastId: ""}
    """
    sign_string = ''
    sort_params = {k: params[k] for k in sorted(params.keys())}
    for k, v in sort_params.items():
        if "newSign" == k:
            continue
        if "sign" == k:
            continue
        sign_string += k + v
    sign_string += "048a9c4943398714b356a696503d2d36"
    return sign_string


def get_sign_string_v2(params: dict):
    """
        ::param {recommendId: "73", lastId: ""}
    """
    sign_string = ''
    sort_params = {k: params[k] for k in sorted(params.keys())}
    for k, v in sort_params.items():
        if "newSign" == k:
            continue
        if "sign" == k:
            continue
        sign_string += k + v
    sign_string += ""
    return sign_string


def dewu_newsign(post_data: dict):
    sign_step1 = get_sign_string_v2(post_data)
    sign_step2 = aes_ecb_pk5padding(sign_step1)
    sign_step3 = sign_step2 + ""
    sign_step4 = hashlib.md5(sign_step3.encode()).hexdigest()
    return sign_step4


# dewu 签名方法验证
post_data = {"loginToken": "ed834540|1763500000|5f1e6dc97d8300000", "newSign": "d46c59af3079feb490bc14d09d18bf47",
             "platform": "android", "timestamp": "1638231836503", "uuid": "d000356a5a000000", "v": "4.80.5"}

sign = get_sign_string(post_data)
sign_md5 = hashlib.md5(sign.encode()).hexdigest()
print("sign=", sign_md5)

# post_data.update({"sign": sign_md5})
# post_data.update(post_data)

timestamp = int(round(time.time()) * 1000) + 1000
duuuid = "d000356a5a000000"
post_data.update({"timestamp": str(timestamp), "uuid": duuuid})

new_sign = dewu_newsign(post_data)
print("新Sign=", new_sign)
post_data.update({"newSign": new_sign})
print(json.dumps(post_data))

print('End')