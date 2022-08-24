import datetime
import random
import time
from base64 import b64decode, b64encode
from Crypto.Cipher import DES3



# 1.PageID
def uuid():
    guid = ""
    i = 1
    while i <= 32:
        n = str(hex(int(random.random() * 16.0))).replace('0x','')
        guid += n
        i += 1
    return guid


# function pageid(){
#     var guid = "";
#     for (var i = 1; i <= 32; i++) {
#         var n = Math.floor(Math.random() * 16.0).toString(16);
#         guid += n;
#         // if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) guid +=
#         // "-";
#     }
#     return guid;
# }
# console.log(pageid())


# 2.ciphertext
def my_random(size):
    str1 = ""
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    i = 0
    while i<size:
        str1 += arr[round(random.random() * (len(arr)-1))]
        i += 1
    return str1


class AESCipher:

    def __init__(self, key):
        self.key = key
        self.block_size = 8

    def pad(self, s):
        return s + (self.block_size - len(s) % self.block_size) * chr(self.block_size - len(s) % self.block_size)

    def unpad(self, s):
        return s[:-ord(s[len(s) - 1:])]

    def encrypt(self, raw, iv):
        raw = self.pad(raw)
        cipher = DES3.new(self.key, DES3.MODE_CBC, IV=iv)
        return b64encode(cipher.encrypt(raw.encode()))

    def decrypt(self, enc, iv):
        enc = b64decode(enc)
        cipher = DES3.new(self.key, DES3.MODE_CBC, iv=iv)
        return self.unpad(cipher.decrypt(enc)).decode('utf8')


def strTobinary(data):
    result = []
    list1 = list(data)
    i = 0
    while i < len(list1):
        if i != 0:
            result.append(" ")
        item = list1[i]
        binaryStr = str(bin(ord(item))[2:])
        result.append(binaryStr)
        i += 1
    return "".join(result)


def cipher():
    date = datetime.datetime.now()
    timestamp = str(time.time()).replace('.', '')[:13]
    salt = my_random(24)
    year = str(date.year)
    month = date.month
    month = "0" + str(month) if month < 10 else str(month)
    day = "0" + str(date.day) if date.day < 10 else str(date.day)

    iv = year + month + day
    enc = AESCipher(salt)
    enc = enc.encrypt(timestamp, iv=iv.encode()).decode()
    str1 = salt + iv + enc
    ciphertext = strTobinary(str1)
    return ciphertext


# 3.__RequestVerificationToken
verification_token =my_random(24)
print(verification_token)
