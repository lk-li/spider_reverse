import requests
from Crypto.Cipher import DES3
import base64
import json


# key = b'ED^QcS0j7j@I6UQMQBupjrgD'
iv = b'01234567'

key = b'ZeYw3vSZhVcG6mTxNZqG2Pb8'

def des3encode(text):
    #desede/CBC/PKCS5Padding加密
    #PKCS5Padding
    #字符串长度需要是8的倍数
    BS = 8
    pad = lambda s: s + (BS - len(s.encode()) % BS) * chr(BS - len(s.encode()) % BS)
    unpad = lambda s : s[0:-ord(s[-1])]

    #text也需要encode成bytearray
    plaintext = pad(text).encode()

    #使用MODE_CBC创建cipher
    cipher = DES3.new(key, DES3.MODE_CBC, iv)

    #加密
    result = cipher.encrypt(plaintext)

    #base64 encode
    result = (base64.b64encode(result)).decode()

    return result

def des3decode(text):
    #desede/CBC/PKCS5Padding解密
    #PKCS5Padding
    #字符串长度需要是8的倍数
    BS = 8
    pad = lambda s: s + (BS - len(s) % BS) * chr(BS - len(s) % BS)
    unpad = lambda s : s[0:-ord(s[-1])]

    #text也需要encode成bytearray
    plaintext = pad(text).encode()

    #使用MODE_CBC创建cipher
    cipher = DES3.new(key, DES3.MODE_CBC, iv)

    #base64 decode
    plain_base64 = base64.b64decode(text)

    #解密
    decrypt_text = cipher.decrypt(plain_base64)

    #截取
    result = unpad(decrypt_text.decode("utf-8"))

    return result


# s = 's1peBzmuena1NUQIus_LEs-OWooCUUja56hOLgRLttgTqUAOXHd2GIkJOxCy gMwk3G2Wki9evLGkNmJpUNVLvP13hzc5zM9Du4-T0pzzHrOADAyCa_K_tNOG fIszyRXoPE8MW8oo0xEwOMiJVkaraB770BVCDMBY0V-y9L3XsGvnZ47NeafC JGqzpRfVdw1zl7CbWuLrHTTFJv0wDJkLuVgaliiRHB0kQtpXlsYg2jGxX4dM 0wpQmALc_wjn3hMVC_3Ut2tAPRSw7tpbcIJ5Mb0YlpFAN3atumUCkgaZ5a-E Uu7xgmUfOAZWwItmVniQzabIm1Nd5-Ksgtz73xQkHugCqXzDZMNrWfG2k3te fiIrdSfGML2GMApXrryVBaVv_HFAlpWXeT36X-hACvPOoTzMlJRYGts0vYYE t7uP7126c8l7DeBylw=='
# destr = des3decode(s.replace('-','+').replace('_','/'))
# print(destr)

s2 = 'utWohEHQ11auJZeVVtDZmjkoPMopgCU1uscE+/J/uUozAcxc77Vg4rgKLnBttaFG/vTIrbVGpJk='
destr = des3decode(s2.replace('-','+').replace('_','/'))
print(destr)

# desede/CBC/PKCS5Padding