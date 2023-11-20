#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
@Author     : 不愿
@Contact    : 1119035003@qq.com
@Software   : PyCharm
@File       : RSASS 
@ Time      : 2023-11-17 10:41
"""
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
import binascii


def rsa_encrypt(plaintext):
    # 公钥参数
    hex_public_key = "00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81"
    exponent = 10001

    # 将十六进制公钥转换为RSA公钥对象
    n = int(hex_public_key, 16)
    e = exponent
    public_key = RSA.construct((n, e))

    # 使用公钥进行加密等操作...
    # 使用公钥进行加密
    cipher = PKCS1_v1_5.new(public_key)
    plaintext = plaintext.encode()
    ciphertext = cipher.encrypt(plaintext)

    # 打印加密结果
    # print("Ciphertext:",binascii.hexlify(ciphertext).decode())
    return binascii.hexlify(ciphertext).decode()


if __name__ == '__main__':
    rsa_encrypt("dsdsdds")
