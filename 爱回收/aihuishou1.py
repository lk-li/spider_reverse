import requests
import hashlib
import time


def encrpymd5(txt):
    m = hashlib.md5()
    b = txt.encode(encoding='utf-8')
    m.update(b)
    str_md5 = m.hexdigest()
    return str_md5


def get_once_token():
    url = "https://dubai-app.aihuishou.com/dubai-gateway/recycle-products/quick-inquiry/36045?queryType=1"

    Ahs_Token = 'e98ecc5876cd4952b1f954449a949a72'
    Ahs_Timestamp = str(int(time.time() * 1000))
    headers = {
        'appversion': '5.13.1',
        'Ahs-Token': Ahs_Token,
        'Ahs-App-Id': '10003',
        'Ahs-Timestamp': Ahs_Timestamp,
        'Ahs-Sign': encrpymd5(Ahs_Timestamp + '34694d9d74954784'),
        'Ahs-App-Version': '5.13.1',
        'Host': 'dubai-app.aihuishou.com',
        'User-Agent': 'okhttp/3.12.1',
        # 'Cookie': 'acw_tc=76b20fee16635675730682358e138ad7bb944fef370f3fac41af07788f1427'
    }

    response = requests.request("GET", url, headers=headers)

    print(response.text)
    print(response.headers)

if __name__ == '__main__':
    get_once_token()
