from pyDes import des, CBC, PAD_PKCS5
import binascii
"""
加密模式：DES/CBC/pkcs5padding
需pip先安装依赖包
> pip install pyDes
"""


def des_encrypt(s, key='yoyo1234'):
    """
    DES 加密
    :param s: 原始字符串
    :param key: 加密密钥8位
    :return: 加密后字符串，16进制
    """
    secret_key = key
    iv = '12345678'      # 偏移量8位
    k = des(secret_key, CBC, iv, pad=None, padmode=PAD_PKCS5)
    en = k.encrypt(s, padmode=PAD_PKCS5)
    return binascii.b2a_hex(en)


def des_descrypt(s, key='yoyo1234'):
    """
    DES 解密
    :param s: 加密后的字符串，16进制
    :return:  解密后的字符串
    """
    secret_key = key
    iv = '12345678'      # 偏移量8位
    k = des(secret_key, CBC, iv, pad=None, padmode=PAD_PKCS5)
    de = k.decrypt(binascii.a2b_hex(s), padmode=PAD_PKCS5)
    return de

if __name__ == '__main__':
    s = 'yoyo'
    encry_s = des_encrypt(s)
    print(encry_s)
    descry_s = des_descrypt(encry_s)
    print(descry_s)

