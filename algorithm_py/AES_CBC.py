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
    exit()

    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=UTF-8",
        "Origin": "https://v.vcinema.cn",
        "Referer": "https://v.vcinema.cn/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
        "api_version": "5.1.9",
        "app_version": "2.4.8",
        "channel": "PC02",
        "cid": "2318393042-9uitllfrwzc0",
        "credentials": "include",
        "device_id": "2318393042-9uitllfrwzc0",
        "device_info": "Windows_Chrome(107.0.0.0)",
        "format": "JSON",
        "platform": "6",
        "platform_name": "tv-pc",
        "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "session_id": "0",
        "signature_nonce": "f15dd32044b968a7f869180f568cf9170edd4944d552ce71f89d20fbffe090af",
        "signature_secret": "X5%2FOadwVpnCdNBdODeuvLpwv9t4%3D",
        "timestamp": "1671503510810",
        "user_id": "0",
        "verify_info": "d7b217b60a946f9aac05e33e99ce2a2c"
    }
    url = "https://open-web-api-v2.vcinema.cn/v5.0/user/18282112889/send_code"
    response = requests.get(url, headers=headers)

    print(response.text)
    print(response)
