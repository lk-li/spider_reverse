import requests
import execjs
import re, json, cv2
import numpy as np
import random
import ddddocr

'''
#https://dun.163.com/trial/jigsaw
'''

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'Accept': '*/*',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Dest': 'script',
    'Referer': 'https://dun.163.com/',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'cookie': '_gid=GA.0076316599.42114779547837; Hm_lvt_4671c5d502135636b837050ec6d716ce=1643777448; Hm_lpvt_4671c5d502135636b837050ec6d716ce=1643777448; __root_domain_v=.163.com; _qddaz=QD.khsqll.e64nac.kz52njtb'
}
with open('./1.js', 'r', encoding='utf-8') as f:
    datas = f.read()


def slide_match(name1, name2):
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open(name1, 'rb') as f:
        target_bytes = f.read()

    with open(name2, 'rb') as f:
        background_bytes = f.read()

    res = det.slide_match(target_bytes, background_bytes, simple_target=True)

    return res


def get_img():
    cb = execjs.compile(datas).call('get_cb', )
    fp = execjs.compile(datas).call('get_fb', )
    callback = execjs.compile(datas).call('callback', )
    params = {
        "referer": "https://dun.163.com/trial/jigsaw",
        "zoneId": "CN31",
        "acToken": "",
        "id": "07e2387ab53a4d6f930b8d9a9be71bdf",
        "fp": fp,
        "https": "true",
        "type": "2",
        "version": "2.21.3",
        "dpr": "1",
        "dev": "1",
        "cb": cb,
        "ipv6": "false",
        "runEnv": "10",
        "group": "",
        "scene": "",
        "lang": "zh-CN",
        "sdkVersion": "undefined",
        "width": "320",
        "audio": "false",
        "sizeType": "10",
        "smsVersion": "v2",
        "token": "",
        "callback": callback
    }

    response = requests.get('https://c.dun.163.com/api/v3/get', headers=headers, params=params)
    data = re.findall(callback + r'\((.*)\);', response.text)[0]
    data = json.loads(data)
    print("验证码图片信息:", data)

    img_bg = requests.get(data['data']['bg'][0]).content

    with open('img_bg.jpg', 'wb') as f:
        f.write(img_bg)

    img_fg = requests.get(data['data']['front'][0]).content
    with open('img_fg.jpg', 'wb') as f:
        f.write(img_fg)
    return data['data']['token']


def ques_verify(token, distance):
    cb = execjs.compile(datas).call('get_cb')
    callback = execjs.compile(datas).call('callback', )
    data_te = execjs.compile(datas).call('get_data', token, distance)
    url = "https://c.dun.163.com/api/v3/check"
    params = {
        "referer": "https://dun.163.com/trial/jigsaw",
        "zoneId": "CN31",
        "id": "07e2387ab53a4d6f930b8d9a9be71bdf",
        "token": token,
        "acToken": "undefined",
        "data": data_te,
        "width": "320",
        "type": "2",
        "version": "2.21.3",
        "cb": cb,
        "extraData": "",
        "bf": "0",
        "runEnv": "10",
        "sdkVersion": "undefined",
        "callback": callback
    }
    response = requests.get(url, headers=headers, params=params)

    print(response.text)


if __name__ == '__main__':
    token = get_img()
    side = slide_match('img_bg.jpg', 'img_fg.jpg')
    distance = side['target'][0]
    ques_verify(token, distance)
