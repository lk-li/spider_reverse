from pyDes import des, CBC, PAD_PKCS5
import binascii,base64
from Crypto.Cipher import DES3
"""
加密模式：DES/CBC/pkcs5padding
需pip先安装依赖包
> pip install pyDes
"""
def des3encode(text, key=b"@xi'an%lvdian#xitongbu~&", iv=b'01234567'):
    # desede/CBC/PKCS5Padding加密
    # PKCS5Padding
    # 字符串长度需要是8的倍数
    BS = 8
    pad = lambda s: s + (BS - len(s.encode()) % BS) * chr(BS - len(s.encode()) % BS)
    unpad = lambda s: s[0:-ord(s[-1])]

    # text也需要encode成bytearray
    plaintext = pad(text).encode()

    # 使用MODE_CBC创建cipher
    cipher = DES3.new(key, DES3.MODE_CBC, iv)

    # 加密
    result = cipher.encrypt(plaintext)

    # base64 encode
    result = (base64.b64encode(result)).decode()

    return result


def des3decode(text, key=b"@xi'an%lvdian#xitongbu~&", iv=b'01234567'):
    # desede/CBC/PKCS5Padding解密
    # PKCS5Padding
    # 字符串长度需要是8的倍数
    BS = 8
    pad = lambda s: s + (BS - len(s) % BS) * chr(BS - len(s) % BS)
    unpad = lambda s: s[0:-ord(s[-1])]

    # text也需要encode成bytearray
    # plaintext = pad(text).encode()

    # 使用MODE_CBC创建cipher
    cipher = DES3.new(key, DES3.MODE_CBC, iv)

    # base64 decode
    plain_base64 = base64.b64decode(text)

    # 解密
    decrypt_text = cipher.decrypt(plain_base64)

    # 截取
    result = unpad(decrypt_text.decode("utf-8"))

    return result


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

