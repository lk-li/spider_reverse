import requests
from Crypto.Cipher import AES  # 需要安装 pycryptodome


def bytesToHexString(bs):
    '''
    bytes转16进制
    '''
    return ''.join(['%02X ' % b for b in bs])


def hexStringTobytes(str):
    '''
   16进制转bytes
   '''

    str = str.replace(" ", "")
    return bytes.fromhex(str)


def cbc_encrypt(plaintext: str, key: str, iv: str):
    """
    AES-CBC 加密
    key 必须是 16(AES-128)、24(AES-192) 或 32(AES-256) 字节的 AES 密钥；
    初始化向量 iv 为随机的 16 位字符串 (必须是16位)，
    解密需要用到这个相同的 iv，因此将它包含在密文的开头。
    """
    block_size = len(key)
    padding = (block_size - len(plaintext) % block_size) or block_size  # 填充字节

    # iv = reduce(lambda x, y: x + choice(digits + ascii_letters + punctuation), range(16), "")
    mode = AES.new(key.encode(), AES.MODE_CBC, iv.encode())
    ciphertext = mode.encrypt((plaintext + padding * chr(padding)).encode())
    hextxt = bytesToHexString(ciphertext).replace(' ', '')
    # base64.b64encode(ciphertext).decode()
    return hextxt


def cbc_decrypt(ciphertext: str, key: str, iv: str):
    """
    AES-CBC 解密
    密文的前 16 个字节为 iv
    """
    # ciphertext = base64.b64decode(ciphertext)
    ciphertext = hexStringTobytes(ciphertext)
    mode = AES.new(key.encode(), AES.MODE_CBC, iv.encode())
    plaintext = mode.decrypt(ciphertext).decode()

    return plaintext[:-ord(plaintext[-1])]


if __name__ == '__main__':
    key = "QWRYI96347mnbvcx"
    iv = "85201ACDEFHjklpx"
    ciphertext = cbc_encrypt('548941671503510810', key, iv)
    print(ciphertext)

    plaintext = cbc_decrypt(ciphertext, key, iv)
    print(plaintext)