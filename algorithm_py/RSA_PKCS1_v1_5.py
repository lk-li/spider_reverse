#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
@Author     : 不愿
@Contact    : 1119035003@qq.com
@Software   : PyCharm
@File       : RSA_ 
@ Time      : 2023-11-17 9:51
"""
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
import base64
# 自定义公钥字符串
custom_public_key = "-----BEGIN PUBLIC KEY-----\n"+\
                    "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0AmFjrEQWFW0leINKLV/\n"+\
                    "jg0c5R9OJIENGs2NnVq+VYoiW+DjZD8oxaTRAXc02r1V0F2xYMVZZLh3bWLGMw86\n"+\
                    "VwJyzZTPhKoJIKuKUzJwya1Zcb/uY1E6hX9y0S8O0fTY0H4uGvWOB4jzH1wy+1jj\n"+\
                    "/MTI8Vem6jxCkGsdTbLz+J7dWN/WpAs8XmtwCAE0kDLBw/cYAuXwyuvhPtStR3sR\n"+\
                    "wUgkV3drz8Yt/o5Qx1717wgy/ylQTBrI9LVoGDCM9o8+9ZudtN+Ht0A4vkDR8pF5\n"+\
                    "r5Ic2IjDmoW2HWTFV1PX8wJklNrGX7y6a+4bASwwPA97yC7praWz8gWX3YlPMUMV\n"+\
                    "sR1TymNMT0p5gmWkVt7WMMH3Zx+fNpd1xdy5y1YQAAI46BE3wxlSl2lzwOI2MScy\n"+\
                    "Wv8BVYgMR3t1rp6CNK0tnmX97xVKvbzRsevhRdzhOdpEYy8eqU539/qCDUyaFV6L\n"+\
                    "hctpx2t/O6lAhh/GR/Y+b0DDbqC3po/+MYtkZ7qsU+eOlECyeTSSYOInxGJ0rQb0\n"+\
                    "JJC94x1FTp30o3L4+6EBfyKfLXxK81osztcFU7MjyEChpFAB3/RvgcbZZnvYuygf\n"+\
                    "jjLZOZrFvIfxnfqZHpwgV6BtryrFgrviTPKt+khuh0GfHTB0OUjYPw3ufARW8s7/\n"+\
                    "v9xC7R5Ue3LGDRnf44uA8lECAwEAAQ==\n"+\
                    "-----END PUBLIC KEY-----"


# 加载自定义公钥
custom_public_key = RSA.import_key(custom_public_key)

# 使用公钥进行加密
cipher = PKCS1_v1_5.new(custom_public_key)
plaintext = b"Hello, World!"
ciphertext = cipher.encrypt(plaintext)

# 打印加密结果
print("Ciphertext:",base64.b64encode(ciphertext).decode())