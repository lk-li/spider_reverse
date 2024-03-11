#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
@Author     : 不愿
@Contact    : 1119035003@qq.com
@Software   : PyCharm
@File       : chaosvmt 
@ Time      : 2024-01-16 14:59
"""
import hashlib
import time

from chaosvm import prepare
from urllib.parse import unquote

import PIL
import cv2
import numpy as np
from PIL.ImagePath import Path
import json
import execjs
import random
import requests


def __ease_out_expoone(sep):
    if sep == 1:
        return 1
    else:
        return 1 - pow(2, -10 * sep)


def get_slide_trackone(distance):
    if not isinstance(distance, int) or distance < 0:
        raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
    slide_track = [
        (5, 1)
    ]
    # 共记录count次滑块位置信息
    count = 20 + int(distance / 3)
    # 初始化滑动时间
    t = random.randint(50, 100)
    # 记录上一次滑动的距离
    _x = 0
    _y = -12
    for i in range(count):
        # 已滑动的横向距离
        xx = __ease_out_expoone(i / count) * distance
        x = round(xx)
        # 滑动过程消耗的时间
        t = random.randint(10, 20)
        if x == _x:
            continue
        slide_track.append((x - _x, _y))
        _x = x
    slide_track.append((1, 1))
    # n = 0
    # for __ in slide_track[1:]:
    #     n += __[2]
    return slide_track


def imshow(img, winname='test', delay=0):
    """cv2展示图片"""
    cv2.imshow(winname, img)
    cv2.waitKey(delay)
    cv2.destroyAllWindows()


def pil_to_cv2(img):
    """
    pil转cv2图片
    :param img: pil图像, <type 'PIL.JpegImagePlugin.JpegImageFile'>
    :return: cv2图像, <type 'numpy.ndarray'>
    """
    img = cv2.cvtColor(np.asarray(img), cv2.COLOR_RGB2BGR)
    return img


def bytes_to_cv2(img):
    """
    二进制图片转cv2
    :param img: 二进制图片数据, <type 'bytes'>
    :return: cv2图像, <type 'numpy.ndarray'>
    """
    # 将图片字节码bytes, 转换成一维的numpy数组到缓存中
    img_buffer_np = np.frombuffer(img, dtype=np.uint8)
    # 从指定的内存缓存中读取一维numpy数据, 并把数据转换(解码)成图像矩阵格式
    img_np = cv2.imdecode(img_buffer_np, 1)
    return img_np


def cv2_open(img, flag=None):
    """
    统一输出图片格式为cv2图像, <type 'numpy.ndarray'>
    :param img: <type 'bytes'/'numpy.ndarray'/'str'/'Path'/'PIL.JpegImagePlugin.JpegImageFile'>
    :param flag: 颜色空间转换类型, default: None
        eg: cv2.COLOR_BGR2GRAY（灰度图）
    :return: cv2图像, <numpy.ndarray>
    """
    if isinstance(img, bytes):
        img = bytes_to_cv2(img)
    elif isinstance(img, (str, Path)):
        img = cv2.imread(str(img))
    elif isinstance(img, np.ndarray):
        img = img
    elif isinstance(img, PIL.Image):
        img = pil_to_cv2(img)
    else:
        raise ValueError(f'输入的图片类型无法解析: {type(img)}')
    if flag is not None:
        img = cv2.cvtColor(img, flag)
    return img


def get_distance(bg, tp, im_show=False, save_path=None):
    """
    :param bg: 背景图路径或Path对象或图片二进制
        eg: 'assets/bg.jpg'
            Path('assets/bg.jpg')
    :param tp: 缺口图路径或Path对象或图片二进制
        eg: 'assets/tp.jpg'
            Path('assets/tp.jpg')
    :param im_show: 是否显示结果, <type 'bool'>; default: False
    :param save_path: 保存路径, <type 'str'/'Path'>; default: None
    :return: 缺口位置
    """
    # 读取图片
    bg_img = cv2_open(bg)
    tp_gray = cv2_open(tp, flag=cv2.COLOR_BGR2GRAY)[490:610, 140:260]

    # 金字塔均值漂移
    bg_shift = cv2.pyrMeanShiftFiltering(bg_img, 5, 50)

    # 边缘检测
    tp_gray = cv2.Canny(tp_gray, 255, 255)
    bg_gray = cv2.Canny(bg_shift, 255, 255)

    # 目标匹配
    result = cv2.matchTemplate(bg_gray, tp_gray, cv2.TM_CCOEFF_NORMED)
    # 解析匹配结果
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)

    # distance = max_loc[0]
    # if save_path or im_show:
    #     # 需要绘制的方框高度和宽度
    #     tp_height, tp_width = tp_gray.shape[:2]
    #     # 矩形左上角点位置
    #     x, y = max_loc
    #     # 矩形右下角点位置
    #     _x, _y = x + tp_width, y + tp_height
    #     # 绘制矩形
    #     bg_img = cv2_open(bg)
    #     cv2.rectangle(bg_img, (x, y), (_x, _y), (0, 0, 255), 2)
    #     # 保存缺口识别结果到背景图
    #     if save_path:
    #         save_path = Path(save_path).resolve()
    #         save_path = save_path.parent / f"{save_path.stem}.{distance}{save_path.suffix}"
    #         save_path = save_path.__str__()
    #         cv2.imwrite(save_path, bg_img)
    #     # 显示缺口识别结果
    #     if im_show:
    #         imshow(bg_img)
    print(max_loc)
    # return distance
    return max_loc


def prehandle():
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://cloud.tencent.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    url = "https://turing.captcha.qcloud.com/cap_union_prehandle"
    params = {
        "aid": "199999861",
        "protocol": "https",
        "accver": "1",
        "showtype": "popup",
        "ua": "TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyMS4wLjAuMCBTYWZhcmkvNTM3LjM2",
        "noheader": "1",
        "fb": "1",
        "aged": "0",
        "enableAged": "0",
        "enableDarkMode": "0",
        "grayscale": "1",
        "clientype": "2",
        "cap_cd": "",
        "uid": "",
        "lang": "zh-cn",
        "entry_url": "https://cloud.tencent.com/product/captcha",
        "elder_captcha": "0",
        "js": "/tcaptcha-frame.5b9523a5.js",
        "login_appid": "",
        "wb": "2",
        "subsid": "15",
        "callback": "_aq_751786",
        "sess": ""
    }
    response = requests.get(url, headers=headers, params=params)
    response = json.loads(response.text[11:-1])
    data = response.get("data")
    img_url = data['dyn_show_info']['bg_elem_cfg']['img_url']
    sprite_url = data['dyn_show_info']['sprite_url']
    pow_answer = data['comm_captcha_cfg']['pow_cfg']['prefix']
    nonce = data['comm_captcha_cfg']['pow_cfg']['md5']
    tdc_path = data['comm_captcha_cfg']['tdc_path']
    # tdc_path = response['data']['comm_captcha_cfg']['tdc_path']
    sess = response['sess']
    bg = requests.get('https://turing.captcha.qcloud.com' + img_url).content
    tp = requests.get('https://turing.captcha.qcloud.com' + sprite_url).content
    with open('cap_union_new_getcapbysig.png', 'wb') as f:
        f.write(bg)

    with open('tp.png', 'wb') as f:
        f.write(tp)

    return sess, pow_answer, nonce, tdc_path


def get_pow(work):
    tim = int(time.time() * 1000)
    ans = 0
    target = work["target"]
    while True:
        ans += 1
        in_string = work["nonce"] + str(ans)
        md5_hash = hashlib.md5(in_string.encode()).hexdigest()
        if target == md5_hash or (int(time.time() * 1000) - tim) > 30000:
            break
    return {
        "ans": ans,
        "duration": int(time.time() * 1000) - tim
    }


def chaos_vm_tdc(tdc_path, track):
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://turing.captcha.gtimg.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    url = "https://turing.captcha.qcloud.com" + tdc_path
    response = requests.get(url, headers=headers)

    # print(response.text)
    vmjs = response.text
    tdc = prepare(vmjs, ip="218.88.20.38", referer="https://turing.captcha.gtimg.com/1/template/drag_ele.html",
                  href="https://turing.captcha.gtimg.com/",
                  ua="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
                  mouse_track=track)
    # print(tdc.getInfo().__dict__)  # a python dict
    info = tdc.getInfo().__dict__
    info.update({"collect": unquote(tdc.getData(None, True))})
    # print(unquote(tdc.getData(None, True)))  # a python str
    return info


def mian():
    sess, pow_answer, nonce, tdc_path = prehandle()

    with open('cap_union_new_getcapbysig.png', 'rb') as f:
        bg = f.read()

    with open('tp.png', 'rb') as f:
        tp = f.read()

    tl = get_distance(bg, tp, im_show=False, save_path=None)

    track = get_slide_trackone(tl[0] - 2)

    tdc_da = chaos_vm_tdc(tdc_path, track)

    ts_1 = get_pow({"target": nonce, "nonce": pow_answer})
    # print(ts_1)
    data = {
        'collect': tdc_da["collect"],
        'tlg': len(tdc_da["collect"]),
        'eks': tdc_da["info"],
        'sess': sess,
        'ans': json.dumps([{"elem_id": 1, "type": "DynAnswerType_POS", "data": f"{tl[0] - 2},{tl[1]}"}]),
        'pow_answer': f"{pow_answer}{ts_1['ans']}",
        'pow_calc_time': ts_1['duration']
    }
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://turing.captcha.gtimg.com",
        "Pragma": "no-cache",
        "Referer": "https://turing.captcha.gtimg.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    url = "https://turing.captcha.qcloud.com/cap_union_new_verify"

    # time.sleep(1)
    response = requests.post(url, headers=headers, data=data)
    print(response.text)


if __name__ == '__main__':
    mian()
