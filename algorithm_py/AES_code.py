

from Crypto.Cipher import AES  
from base64 import b64decode, b64encode

BLOCK_SIZE = AES.block_size
# 不足BLOCK_SIZE的补位(s可能是含中文，而中文字符utf-8编码占3个位置,gbk是2，所以需要以len(s.encode())，而不是len(s)计算补码)
pad = lambda s: s + (BLOCK_SIZE - len(s.encode()) % BLOCK_SIZE) * chr(BLOCK_SIZE - len(s.encode()) % BLOCK_SIZE)
# 去除补位
unpad = lambda s: s[:-ord(s[len(s) - 1:])]


class AESCipher:
    def __init__(self, secretkey: str,iv:str):
        self.key = secretkey  # 密钥
        self.iv = iv  # 偏移量

    def encrypt(self, text):
        """
        加密 ：先补位，再AES加密，后base64编码
        :param text: 需加密的明文
        :return:
        """
        # text = pad(text) 包pycrypto的写法，加密函数可以接受str也可以接受bytess
        text = pad(text).encode()  # 包pycryptodome 的加密函数不接受str
        cipher = AES.new(key=self.key.encode(), mode=AES.MODE_CBC, IV=self.iv.encode())
        encrypted_text = cipher.encrypt(text)
        # 进行64位的编码,返回得到加密后的bytes，decode成字符串
        return b64encode(encrypted_text).decode('utf-8')

    def decrypt(self, encrypted_text):
        """
        解密 ：偏移量为key[0:16]；先base64解，再AES解密，后取消补位
        :param encrypted_text : 已经加密的密文
        :return:
        """
        encrypted_text = b64decode(encrypted_text)
        cipher = AES.new(key=self.key.encode(), mode=AES.MODE_CBC, IV=self.iv.encode())
        decrypted_text = cipher.decrypt(encrypted_text)
        return unpad(decrypted_text).decode('utf-8')

if __name__ == '__main__':
    # AES_CBC 能加解密中文
    key = "u7ygtru2832189iu"
    iv = "jfldldurww482hjf"
    print(AESCipher(key,iv).encrypt('其他'))