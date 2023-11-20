#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
@Author     : 不愿
@Contact    : 1119035003@qq.com
@Software   : PyCharm
@File       : jiyn3 
@ Time      : 2023-11-17 10:59
"""
import random
import execjs

import RSA_hex


def generate_uuid():
    def e():
        return hex(int(65536 * (1 + random.random())))[2:].zfill(4)

    return ''.join([e() for _ in range(4)])


def encrypt1(o_text, random_str):
    with open("AES_bys.js", 'r') as f:
        ad = f.read()
    result = execjs.compile(ad).call('encrypt1', o_text, random_str)
    return result


if __name__ == '__main__':
    aeskey = generate_uuid()

    rsa_str = RSA_hex.rsa_encrypt(aeskey)

    da = '{"gt":"3101554dd48afd3d07e93bd872d4492c","challenge":"6732dbbaefaf022c734bd4f5ca12fde0","offline":false,"new_captcha":true,"product":"embed","width":"300px","https":true,"protocol":"https://","type":"fullpage","static_servers":["static.geetest.com/","dn-staticdown.qbox.me/"],"beeline":"/static/js/beeline.1.0.1.js","voice":"/static/js/voice.1.2.3.js","click":"/static/js/click.3.0.9.js","fullpage":"/static/js/fullpage.9.1.8-bfget5.js","slide":"/static/js/slide.7.9.0.js","geetest":"/static/js/geetest.6.0.9.js","aspect_radio":{"slide":103,"click":128,"voice":128,"beeline":50},"cc":4,"ww":true,"i":"-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1"}'

    ase_str = encrypt1(da, aeskey)
    print(ase_str)
