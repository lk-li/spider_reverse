import requests
import execjs
import re, json, cv2
import numpy as np
import random
import ddddocr
import urllib.parse
'''
#https://dun.163.com/trial/jigsaw
'''

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'Accept': '*/*',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Dest': 'script',
    'Referer': 'https://dun.163.com/',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'cookie':'_ga=GA.1.2efd0b3cba15b.c768cb960c20312b1fad; Hm_lvt_4671c5d502135636b837050ec6d716ce=1681895288,1681953430; __root_domain_v=.163.com; _qddaz=QD.633381895292739; Hm_lpvt_4671c5d502135636b837050ec6d716ce=1681976170'
}
with open('./1.js', 'r',encoding='utf-8') as f:
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
    cb = execjs.compile(datas).call('get_cb',)
    # print("参数cd:", cb)
    fp = execjs.compile(datas).call('get_fb',)
    # print("参数fp:", fp)
    callback = execjs.compile(datas).call('callback',)

    params = {
        "referer": "https://dun.163.com/trial/jigsaw",
        "zoneId": "CN31",
        "acToken": "",
        "id": "07e2387ab53a4d6f930b8d9a9be71bdf",
        "fp": fp,
        "https": "true",
        "type": "2",
        "version": "2.21.5",
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
    data = re.findall(callback+r'\((.*)\);', response.text)[0]
    data = json.loads(data)
    # print("验证码图片信息:", data)

    img_bg = requests.get(data['data']['bg'][0]).content

    with open('img_bg.jpg', 'wb') as f:
        f.write(img_bg)

    img_fg = requests.get(data['data']['front'][0]).content
    with open('img_fg.jpg', 'wb') as f:
        f.write(img_fg)
    return data['data']['token']

def __ease_out_expo(x):
    if x == 1:
        return 1
    else:
        return 1 - pow(2, -10 * x)


def __ease_out_quart(x):
    return 1 - pow(1 - x, 4)




def get_track(distance:int):
    def __ease_out_expo(sep):
        if sep == 1:
            return 1
        else:
            return 1 - pow(2, -10 * sep)
    if not isinstance(distance, int) or distance < 0:
        raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
    # # 初始化轨迹列表
    # slide_track = [
    #     [random.randint(-50, -10), random.randint(-50, -10), 0],
    #     [0, 0, 0],
    # ]
    slide_track = []
    # 共记录count次滑块位置信息
    count = random.randint(15, 30) + int(distance / 2)
    # 初始化滑动时间
    t = random.randint(50, 100)
    # 记录上一次滑动的距离
    _x = 0
    _y = 0
    for i in range(count):
        # 已滑动的横向距离
        x = round(__ease_out_expo(i / count) * distance)
        # 滑动过程消耗的时间
        t += random.randint(10, 30)
        if x == _x:
            continue
        slide_track.append([x, random.randint(0, 5), t])
        _x = x
    slide_track.append(slide_track[-1])
    # self.ptime=slide_track[-1][-1]
    return slide_track
def ques_verify(token, xyt_list,offset):

    cb = execjs.compile(datas).call('get_cb')
    callback = execjs.compile(datas).call('callback', )
    # acToken = execjs.compile(datas).call('get_actoken','VagJqN8ARPtFBVVVRUd7rJ+FvBmXbgBN')

    data_te = execjs.compile(datas).call('get_data', token, xyt_list,offset)

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
        "version": "2.21.5",
        "cb": cb,
        "extraData": "",
        "bf": "0",
        "runEnv": "10",
        "sdkVersion": "undefined",
        "callback": callback
    }
    response = requests.get(url, headers=headers, params=params)
    data = re.findall(callback + r'\((.*)\);', response.text)[0]
    data = json.loads(data)
    print(data)
    return data
if __name__ == '__main__':
    ''''
    轨迹算法有问题成功率较低
    '''
    inz = 0
    for i in range(10):
        token = get_img()
        side = slide_match('img_bg.jpg', 'img_fg.jpg')
        print(side)
        # exit()
        distance = side['target'][0] + 4 + 4
        print(distance)
        offset = str(distance - 9.5) + 'px'
        xyt_list = get_track(distance)
        print(xyt_list)
        verify_txt = ques_verify(token, xyt_list,offset)
        if verify_txt['data']['result']:
            print(verify_txt)
            inz+=1

    print('成功：%s次'%(inz))