from Crypto.Cipher import DES
import binascii
from Crypto.Util.Padding import pad, unpad

def des_ecb_encrypt_hex(key, plaintext):
    cipher = DES.new(key, DES.MODE_ECB)
    # 对明文进行填充，使其长度为8字节的倍数
    padded_plaintext = pad(plaintext, DES.block_size)
    ciphertext = cipher.encrypt(padded_plaintext)
    hex_ciphertext = binascii.hexlify(ciphertext)
    return hex_ciphertext

def des_ecb_decrypt_hex(key, hex_ciphertext):
    cipher = DES.new(key, DES.MODE_ECB)
    # 从十六进制字符串中恢复出密文
    ciphertext = binascii.unhexlify(hex_ciphertext)
    # 对密文进行解填充，恢复出原始明文
    # plaintext = unpad(ciphertext, DES.block_size)
    plain =cipher.decrypt(ciphertext)
    plaintext =unpad(plain, DES.block_size)
    return plaintext

key = b'20190301'  # 密钥 8位或16位,必须为bytes

# 加密
text = b'Life is short, You need Python'
encrypted_text = des_ecb_encrypt_hex(key,text)
print(encrypted_text)

# # 解密
plain_text = des_ecb_decrypt_hex(key,encrypted_text)
print(plain_text)