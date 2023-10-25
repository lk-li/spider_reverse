#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
@Author     : 不愿
@Contact    : 1119035003@qq.com
@Software   : PyCharm
@File       : AES_CBC_B_H 
@ Time      : 2023-10-25 14:45
"""
import base64
import binascii
import re
from Crypto.Cipher import AES


class AESCBC:
    def __init__(self):
        self.key = b"LuxuryAdmin12345"
        self.IV = b"12345LuxuryAdmin"
        self.mode = AES.MODE_CBC
        self.bs = 16  # block size
        self.PADDING = lambda s: s + (self.bs - len(s) % self.bs) * chr(self.bs - len(s) % self.bs)

    def encrypt(self, text):
        generator = AES.new(self.key, self.mode, self.IV)
        crypt = generator.encrypt(self.PADDING(text).encode('utf-8'))
        # crypted_str = base64.b64encode(crypt)  # 输出Base64
        crypted_str =binascii.b2a_hex(crypt)       #输出Hex
        result = crypted_str.decode()
        return result

    def decrypt(self, text):
        generator = AES.new(self.key, self.mode, self.IV)
        text += (len(text) % 4) * '='
        # decrpyt_bytes = base64.b64decode(text)  # 输出Base64
        decrpyt_bytes = binascii.a2b_hex(text)  # 输出Hex
        meg = generator.decrypt(decrpyt_bytes)
        # 去除解码后的非法字符
        try:
            result = re.compile('[\\x00-\\x08\\x0b-\\x0c\\x0e-\\x1f\n\r\t]').sub('', meg.decode())
        except Exception:
            result = '解码失败，请重试!'
        return result


aes = AESCBC()
to_encrypt = 'xgpython'
str1 = aes.encrypt(to_encrypt)
str2 = aes.decrypt(str1)
print('加密密文：', str1)
print('解密明文：', str2)