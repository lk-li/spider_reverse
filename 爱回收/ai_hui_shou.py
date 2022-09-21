# once-token
import hashlib
import requests
import time
import execjs
import ddddocr
from requests.cookies import cookiejar_from_dict


def ocr(img_byte_data):
    ress = None
    try:
        ocr = ddddocr.DdddOcr(use_gpu=False, show_ad=False)
        img_bytes = img_byte_data
        ress = ocr.classification(img_bytes)
        # print("identify_code: " + ress)
    except Exception as e:
        print(e)
    return str(ress)


# 拿chromosome
def get_data(Ahs_Token):
    with open('1.js', 'r', encoding='utf8') as f:
        read_js = f.read()

    return_js = execjs.compile(read_js)
    data = return_js.call('result', Ahs_Token)
    return data


def encrpymd5(txt):
    m = hashlib.md5()
    b = txt.encode(encoding='utf-8')
    m.update(b)
    str_md5 = m.hexdigest()
    return str_md5


def get_cont(Ahs_Token):
    # Ahs_Token = 'c39391c2751e4be98eb80e37695e226f'

    response = requests.get('https://dubai.aihuishou.com/dubai-gateway/auth/once-token')

    Ahs_once_token = response.headers['ahs-once-token']

    # 这个是为了拼接Ahs_sign2
    Timestamp = str(int(time.time() * 1000))

    data = '{"productId":36045,"ppvIds":[2026,9625,2045,13842,2100,2124,2118,2114,2134,2106,2108,2808,3168,5300,6947,6949,9507,11210,13455,6982,2067,2014,12648,2072,3987],"phenomenonItemIds":[],"isEnvironmentalRecycling":false,"autoFulfill":false,"cityId":55,"ahsAgent":"AHS_M","sensors":{"cityId":"55","sourcePlatform":"web_m","sourceAppName":"official","originalPlatform":"web_m","utmAhs":"","distinctId":"18359ffd12d3f8-06b36727552385-26021c51-2073600-18359ffd12e7cc","abtest":""}}'

    # "Ahs-App-Id=10002&body={"productId":36045,"ppvIds":[2026,9625,2045,13842,2100,2124,2118,2114,2134,2106,2108,2808,3168,5300,6947,6949,9507,11210,13455,6982,2067,2014,12648,2072,3987],"phenomenonItemIds":[],"isEnvironmentalRecycling":false,"autoFulfill":false,"cityId":55,"ahsAgent":"AHS_M","sensors":{"cityId":"55","sourcePlatform":"web_m","sourceAppName":"official","originalPlatform":"web_m","utmAhs":"","distinctId":"18359ffd12d3f8-06b36727552385-26021c51-2073600-18359ffd12e7cc","abtest":""}}&Ahs-Timestamp=1663667511542&Ahs-Once-Token=ZThiZDc0MjBjNjkzM2RhOWI3NGIzMThhNzNhYmFjZjAuMTU3MjE2MTM3NDc0NjExMjAwMA==&salt=34694d9d74954784"

    Ahs_Sign2 = 'Ahs-App-Id=10002&body=%s&Ahs-Timestamp=%s&Ahs-Once-Token=%s&salt=34694d9d74954784' % (
        data, Timestamp, Ahs_once_token)

    Ahs_Sign2 = encrpymd5(Ahs_Sign2)

    chromosome = get_data(Ahs_Token)

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Ahs-App-Id': '10002',
        'Ahs-Once-Token': Ahs_once_token,
        'Ahs-Sign2': Ahs_Sign2,
        'Ahs-Timestamp': Timestamp,
        'Ahs-Token': Ahs_Token,
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json;charset=UTF-8',
        'Origin': 'https://m.aihuishou.com',
        'Pragma': 'no-cache',
        'Referer': 'https://m.aihuishou.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        'X-Requested-With': 'axios',
        'chromosome': chromosome,
        'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"', }

    # session.headers = headers
    res = requests.post('https://dubai.aihuishou.com/dubai-gateway/inquiry/create-v3',headers=headers, data=data,cookies=cookies)
    try:
        if res.json()['code'] == 3001:

            captchaUrl = res.json()['data']['captchaUrl']

            headers = {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
            }

            respon1 = requests.request("GET", captchaUrl, headers=headers)

            Captcha = ocr(respon1.content)

            # Times = res.headers['sw-tid'].split(',')[-1].split('.')[-1][0:13]
            Ahs_Once_Token = res.headers['ahs-once-token']
            Com_Captcha(Ahs_Once_Token, Captcha,data)
        else:
            print(res.text)
    except Exception as e:
        print('触发滑块验证码')
        res.encoding = 'UTF-8'
        print(res.text)


def Com_Captcha(Ahs_Once_Token, Captcha,data):
    url = "https://dubai.aihuishou.com/dubai-gateway/inquiry/create-v3?imgCaptcha=%s" % (Captcha)

    headers = {
        'Host': 'dubai.aihuishou.com',
        'Accept': '*/*',
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'ahs-app-id,ahs-once-token,ahs-sign2,ahs-timestamp,ahs-token,chromosome,content-type,x-requested-with',
        'Origin': 'https://m.aihuishou.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://m.aihuishou.com/',
        'Accept-Language': 'zh-CN,zh;q=0.9'
    }

    response = requests.request("OPTIONS", url, headers=headers)

    # Timestamp = '1663727850593'  # 1663724999064
    Timestamp = str(int(time.time() * 1000))

    # "Ahs-App-Id=10002&body={"productId":36045,"ppvIds":[2026,9625,2045,13842,2100,2124,2118,2114,2134,2106,2108,2808,3168,5300,6947,6949,9507,11210,13455,6982,2067,2014,12648,2072,3987],"phenomenonItemIds":[],"isEnvironmentalRecycling":false,"autoFulfill":false,"cityId":55,"ahsAgent":"AHS_M","sensors":{"cityId":"55","sourcePlatform":"web_m","sourceAppName":"official","originalPlatform":"web_m","utmAhs":"","distinctId":"18359ffd12d3f8-06b36727552385-26021c51-2073600-18359ffd12e7cc","abtest":""}}&Ahs-Timestamp=1663667511542&Ahs-Once-Token=ZThiZDc0MjBjNjkzM2RhOWI3NGIzMThhNzNhYmFjZjAuMTU3MjE2MTM3NDc0NjExMjAwMA==&salt=34694d9d74954784"

    Ahs_Sign2 = 'Ahs-App-Id=10002&imgCaptcha=%s&body=%s&Ahs-Timestamp=%s&Ahs-Once-Token=%s&salt=34694d9d74954784' % (
        Captcha, data, Timestamp, Ahs_Once_Token)

    Ahs_Sign2 = encrpymd5(Ahs_Sign2)

    chromosome = get_data(Ahs_Token)
    headers = {
        "Host": "dubai.aihuishou.com",
        "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
        "X-Requested-With": "axios",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        "Ahs-Once-Token": Ahs_Once_Token,
        "Accept": "application/json, text/plain, */*",
        "chromosome": chromosome,
        "Ahs-Token": Ahs_Token,
        "Ahs-Sign2": Ahs_Sign2,
        "Ahs-App-Id": "10002",
        "Content-Type": "application/json;charset=UTF-8",
        "Ahs-Timestamp": Timestamp,
        "sec-ch-ua-platform": "\"Windows\"",
        "Origin": "https://m.aihuishou.com",
        "Sec-Fetch-Site": "same-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://m.aihuishou.com/",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }

    response = requests.post(url, headers=headers, data=data,cookies=cookies)
    try:
        if response.json()['code'] == 3002:

            captchaUrl = response.json()['data']['captchaUrl']

            headers = {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
            }

            respon1 = requests.request("GET", captchaUrl, headers=headers)

            Captcha = ocr(respon1.content)
            # Times = res.headers['sw-tid'].split(',')[-1].split('.')[-1][0:13]
            Ahs_Once_Token = response.headers['ahs-once-token']
            Com_Captcha(Ahs_Once_Token, Captcha,data)
        else:
            print(response.text)
    except Exception as e:
        print('触发滑块验证码')
        response.encoding = 'UTF-8'
        print(response.text)


if __name__ == '__main__':
    # session = requests.session()
    Ahs_Token = 'a68f4b45690b4427ad3066ce07dfa6d4'
    cookies = {
        'Ahs-Token': Ahs_Token,
        # c'acw_tc': '76b20ffb16636644102307449e64921c86f12e978c2d4a2aee453c60c198c2',
        'acw_sc__v3': '632a92637baa5ed6f5faaf2c965c0a00a17490c5',
    }
    get_cont(Ahs_Token)
    # Com_Captcha('OTM5OGE4NjAyNWUwNDkxNDgzYTVhOTI1OTVmNDkyNmEuMTU3MjQzNzAxMTUwNzYwOTYwMA==', '7939')