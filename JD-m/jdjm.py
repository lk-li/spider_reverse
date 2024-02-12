from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Hash import HMAC, SHA256

import base64
import hashlib
from datetime import datetime, timezone

# 请求携带的数据
bodyinfo = '{"giftCardPwd":"ADAF-FGFD-SHDF-GSDF","verifyCode":"I7gVNQABAAABjRXF4agAgEpVrYfryfhljZEgDSAUT4Sf40ybnqV74GLe-LXTuw4l4vy4ASaHVQsDqar3uGfWDY3EkSrO_5FrIKy8_D3csI2dNQ13m7DhIMcNc-J_-94muDm1OcmcZEDKJBOHIIr8XxKPl-jz6f7L7P1G3yQmdDjhnCOc8R_LQCIRmtod4MeF","sessionId":"eRMvIgABAAAD9B-wrZMAMARIFrvAsrAp1NvQ7hhFb5UAlgdsKUNwIXcVF3T3V-bskr1L6gGO9TIoaTEJQNI2CgAAAAA","doBindFlag":"0","queryGiftCardType":"0","eid":"D7LCNGT6WARNJDDQ5TZBGUADJQZ2OBW3B7BKIJ2KM6LGB4N3WXP5FQ3AYGWOHATMKT7ED6QVOIZ2SDGHYZJ54APQN4"}'

fp = "htf6qnnyfqult118" # 设备指纹
vTime = "20240117125653783" # 请求时间
_appId = '42e80' # 固定值
tk = "tk03w95c21c2918nMI5yCJ2i2hkS8D73zLTmedNj1hkejKpBpNy6njbh_t1VE8T32rSsSD33Yxnv02zLuSmyDVOGHojf" # 固定值

drsj = 1705465047700  # 登入账号的时间

zwtz = {"client": "h5", "clientVersion": "", "t": drsj, "appid": "mygiftcard",
        "functionId": "queryBindGiftCardComApp",
        "body": hashlib.sha256(bodyinfo.encode()).hexdigest()}

# 生成指纹
text_to_encrypt = """{
  "sua": "Windows NT 10.0; Win64; x64",
  "pp": {
    "p1": "jd_tlYhdYzIuWEW"
  },
  "extend": {
    "wd": 0,
    "l": 0,
    "ls": 5,
    "wk": 0,
    "bu1": "0.1.4",
    "bu2": -1,
    "bu3": 38,
    "bu4": 0
  },
  "random": "mKCl0c_dxBP",
  "v": "h5_file_v4.3.3",
  "fp": "{fp}"
}"""
text_to_encrypt = text_to_encrypt.replace('{fp}', fp)


# AES CBC mode encryption
def aes_encrypt_cbc_pkcs7(text):
    key = b"&d74&yWoV.EYbWbZ"
    iv = b"0102030405060708"
    # Create a new AES cipher object in CBC mode
    cipher = AES.new(key, AES.MODE_CBC, iv)
    # Pad the input text and then encrypt
    padded_text = pad(text.encode(), AES.block_size)
    encrypted_bytes = cipher.encrypt(padded_text)
    # return encrypted_bytes
    return encrypted_bytes.hex()


def test_sha512(tk, fp, ts, ai):
    ts += '22'
    rd = '3EHzxdCrAjCD'
    str_to_hash = f"{tk}{fp}{ts}{ai}{rd}"
    return hashlib.sha512(str_to_hash.encode()).hexdigest()


def hmac_sha256(r, key):
    hmac = HMAC.new(key.encode(), digestmod=SHA256)
    hmac.update(r.encode())
    return hmac.hexdigest()


def getsign(tk, fp, vTime, _appId, zwtz):
    dinf = test_sha512(tk, fp, vTime, _appId)

    d = f"appid:{zwtz['appid']}&body:{zwtz['body']}&client:{zwtz['client']}&clientVersion:{zwtz['clientVersion']}&functionId:{zwtz['functionId']}&t:{zwtz['t']}"
    hmac = hmac_sha256(d, dinf)
    return hmac


def convert_to_timestamp(date_str):
    # Assuming the format is "YYYYMMDDHHMMSSmmm" where 'mmm' is milliseconds
    date_format = "%Y%m%d%H%M%S%f"
    # Parse the string to a datetime object
    date_obj = datetime.strptime(date_str, date_format)
    # Convert to a timestamp (in milliseconds)
    timestamp = int(date_obj.replace(tzinfo=timezone.utc).timestamp() * 1000)
    return str(timestamp)


def getH5st(text_to_encrypt, tk, fp, vTime, _appId, zwtz):
    # Perform encryption
    encrypted_hex = aes_encrypt_cbc_pkcs7(text_to_encrypt)
    can2 = getsign(tk, fp, vTime, _appId, zwtz)
    sjc = convert_to_timestamp(vTime)
    h5st = ';'.join([vTime, fp, _appId, tk, can2, '4.3', sjc, encrypted_hex])
    return h5st


h5st = getH5st(text_to_encrypt, tk, fp, vTime, _appId, zwtz)
print(h5st)

