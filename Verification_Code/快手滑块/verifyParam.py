#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
@Author     : 不愿
@Contact    : 1119035003@qq.com
@Software   : PyCharm
@File       : verifyParam 
@ Time      : 2023-01-17 9:23
"""
import subprocess
from urllib import parse
import cv2
import ddddocr
import requests
import logging
import random

logging.basicConfig(format='[%(asctime)s] %(message)s', level=logging.INFO)


def ddddocr_xy():
    slide = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

    # 滑块缝合的图片
    with open('./cutPic.png', 'rb') as f:
        target_bytes = f.read()

    # 有缺口的图片
    with open('./bgPic.png', 'rb') as f:
        background_bytes = f.read()

    # 滑块缝合的图片
    res = slide.slide_match(target_bytes, background_bytes, simple_target=True)

    return res['target'][0]


def encrypt(data):
    # "captchaSn=Cgp6dC5jYXB0Y2hhEuACb2C-j-M4c7cvJ_SxbcJJTjl6UuRBlW_eOgynH3k2tIyN7IxoCfnCvoTF-BNMIvr2F_JYlMdmv_AFbLZ8RHEt7VN3DeMgz-rOJSibYLbhBATnRY9dgXiRzb_DGPHJZrEykd7_YI_dgxYbounfh0SZfB-Vguix4kbNbdUJUlOg_6p_ZcvL-0wwongdWjlUjZFfb3LSvXBjBCuEB5DcwGM6Oy2ZyT4Ke2D7BJ_hIdA9Kic3FyUt7_gXbtg-ouhY0ZtuVLIqF3s3IF-VlMOqvR0qc4k9QDirPyAuhNBYYIByJ9E0TQX0q8h7ymiA-10NFIYVxd8CmmuODFxI0TbwnqXN3PAswpdFfn96ARhwiFZeKxYIeWrbDZ87BKXDHo8uAD2jH3-Vk1JLzIhyrzml_0jn-VcqTqPuuNWpvbo9nYhtJudFHdf_NGowLGHbnUJvBQC-nJ1E-680nZ07KzM4MCub8BoSBZuF2zdR0gmeen4zqjPJVJmTKAUwAg&bgDisWidth=316&bgDisHeight=184&cutDisWidth=56&cutDisHeight=56&relativeX=65&relativeY=60&trajectory=0%7C12%7C0%2C7%7C12%7C60%2C14%7C12%7C68%2C21%7C12%7C76%2C28%7C14%7C84%2C36%7C14%7C93%2C43%7C14%7C101%2C50%7C14%7C108%2C57%7C14%7C117%2C61%7C14%7C124%2C68%7C14%7C134%2C143%7C117%7C140%2C90%7C14%7C150%2C164%7C117%7C156%2C108%7C14%7C164%2C115%7C14%7C172%2C190%7C117%7C180%2C130%7C14%7C188%2C137%7C14%7C196%2C144%7C14%7C204%2C159%7C14%7C212%2C240%7C117%7C220%2C192%7C14%7C228%2C199%7C14%7C236%2C206%7C14%7C245&gpuInfo=%7B%22glRenderer%22%3A%22WebKit%20WebGL%22%2C%22glVendor%22%3A%22WebKit%22%2C%22unmaskRenderer%22%3A%22ANGLE%20%28Intel%2C%20Intel%28R%29%20HD%20Graphics%20630%20Direct3D11%20vs_5_0%20ps_5_0%2C%20D3D11-31.0.101.2111%29%22%2C%22unmaskVendor%22%3A%22Google%20Inc.%20%28Intel%29%22%7D&captchaExtraParam=%7B%22ua%22%3A%22Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F95.0.4638.69%20Safari%2F537.36%22%2C%22userAgent%22%3A%22Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F95.0.4638.69%20Safari%2F537.36%22%2C%22timeZone%22%3A%22UTC%2B8%22%2C%22language%22%3A%22zh-CN%22%2C%22cpuCoreCnt%22%3A%224%22%2C%22platform%22%3A%22Win32%22%2C%22riskBrowser%22%3A%22false%22%2C%22webDriver%22%3A%22false%22%2C%22exactRiskBrowser%22%3A%22false%22%2C%22webDriverDeep%22%3A%22false%22%2C%22exactRiskBrowser2%22%3A%22false%22%2C%22webDriverDeep2%22%3A%22false%22%2C%22battery%22%3A%221%22%2C%22plugins%22%3A%22170b76c0d6cbaed3cb42746b06cae5eae%22%2C%22resolution%22%3A%221920x1080%22%2C%22pixelDepth%22%3A%2224%22%2C%22colorDepth%22%3A%2224%22%2C%22canvasGraphFingerPrint%22%3A%22184d2a5cb7dd0dbef53dd603e607d58f8%22%2C%22canvasGraph%22%3A%22184d2a5cb7dd0dbef53dd603e607d58f8%22%2C%22canvasTextFingerPrintEn%22%3A%2210988b111dee10a3ace1f10536e3a0eee%22%2C%22canvasTextEn%22%3A%2210988b111dee10a3ace1f10536e3a0eee%22%2C%22canvasTextFingerPrintZh%22%3A%2213ffb1298cbb06fbd4cbf7a29b627d240%22%2C%22canvasTextZh%22%3A%2213ffb1298cbb06fbd4cbf7a29b627d240%22%2C%22webglGraphFingerPrint%22%3A%2214dc51ccd006f78c818999c374ac62402%22%2C%22webglGraph%22%3A%2214dc51ccd006f78c818999c374ac62402%22%2C%22webglGPUFingerPrint%22%3A%221108f3efe4bed369a31b6475af6c38f30%22%2C%22webglGpu%22%3A%221108f3efe4bed369a31b6475af6c38f30%22%2C%22cssFontFingerPrintEn%22%3A%2210a344f5534d5b367655c7f90f04de717%22%2C%22fontListEn%22%3A%2210a344f5534d5b367655c7f90f04de717%22%2C%22cssFontFingerPrintZh%22%3A%2216c1334aeae228bca19e18632c8472a52%22%2C%22fontListZh%22%3A%2216c1334aeae228bca19e18632c8472a52%22%2C%22voiceFingerPrint%22%3A%221dd96cac4e826abdbbe261dc4f3a08292%22%2C%22audioTriangle%22%3A%221dd96cac4e826abdbbe261dc4f3a08292%22%2C%22nativeFunc%22%3A%221973dcbb27a04c3a2ee240d9d2549e105%22%2C%22key1%22%3A%22web_7721346c62c20a0b%22%2C%22key2%22%3A1673853459961%2C%22key3%22%3A%22Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F95.0.4638.69%20Safari%2F537.36%22%2C%22key4%22%3A%2220030107%22%2C%22key5%22%3A%22zh-CN%22%2C%22key6%22%3A%22Gecko%22%2C%22key7%22%3A1920%2C%22key8%22%3A1080%2C%22key9%22%3A1920%2C%22key10%22%3A1040%2C%22key11%22%3A360%2C%22key12%22%3A360%2C%22key13%22%3A1040%2C%22key14%22%3A1920%2C%22key15%22%3A%2200000111%22%2C%22key16%22%3A1%2C%22key17%22%3A1%2C%22key18%22%3A%5B%5D%2C%22key19%22%3A%7B%7D%2C%22key20%22%3A%5B%5D%2C%22key21%22%3A%7B%7D%2C%22key22%22%3A%5B%5D%2C%22key23%22%3A%7B%7D%2C%22key24%22%3A%5B%5D%2C%22key25%22%3A%7B%7D%2C%22key26%22%3A%7B%22key27%22%3A%5B%220%2C1%2C2887%2C51%2C306%2Cprepare1%22%2C%221%2C1%2C2888%2C51%2C306%2Cprepare1%22%2C%222%2C1%2C2891%2C51%2C305%2Cprepare1%22%2C%223%2C1%2C2907%2C51%2C304%2Cprepare1%22%2C%224%2C1%2C3139%2C51%2C303%2Cprepare1%22%2C%225%2C1%2C3147%2C50%2C302%2Cprepare1%22%2C%226%2C1%2C3155%2C48%2C301%2Cprepare1%22%2C%227%2C1%2C3162%2C47%2C299%2Cprepare1%22%2C%228%2C1%2C3171%2C46%2C299%2Cprepare1%22%2C%229%2C1%2C3179%2C43%2C296%2Cprepare1%22%2C%2210%2C1%2C3195%2C42%2C295%22%2C%2211%2C3%2C3373%2C42%2C295%22%2C%2212%2C1%2C3382%2C42%2C295%2Cprepare2%22%2C%2213%2C1%2C3442%2C44%2C295%2Cprepare2%22%2C%2214%2C1%2C3451%2C46%2C295%2Cprepare2%22%2C%2215%2C1%2C3459%2C48%2C295%2Cprepare2%22%2C%2216%2C1%2C3467%2C50%2C297%2Cprepare2%22%2C%2217%2C1%2C3475%2C52%2C297%2Cprepare2%22%2C%2218%2C1%2C3483%2C54%2C297%2Cprepare2%22%2C%2219%2C1%2C3491%2C56%2C297%2Cprepare2%22%2C%2220%2C1%2C3499%2C58%2C297%2Cprepare2%22%2C%2221%2C1%2C3507%2C59%2C297%2Cprepare2%22%2C%2222%2C4%2C4003%2C99%2C297%22%2C%2223%2C2%2C4139%2C99%2C297%2Cprepare3%22%2C%2224%2C1%2C4140%2C99%2C297%2Cprepare3%22%2C%2225%2C1%2C4453%2C100%2C306%2Cprepare3%22%5D%2C%22key28%22%3A%5B%5D%2C%22key29%22%3A%5B%5D%2C%22key30%22%3A%5B%5D%2C%22key31%22%3A%7B%22prepare1%22%3A%229%2C1%2C3179%2C43%2C296%22%2C%22prepare2%22%3A%2221%2C1%2C3507%2C59%2C297%22%2C%22prepare3%22%3A%2225%2C1%2C4453%2C100%2C306%22%7D%2C%22key32%22%3A%7B%7D%2C%22key33%22%3A%7B%7D%2C%22key34%22%3A%7B%7D%7D%2C%22key35%22%3A%227ebc4735321e3b0c225c1e489d2adb1b%22%2C%22key36%22%3A%22f22a94013fc94e90e2af2798023a1985%22%2C%22key37%22%3A1%2C%22key38%22%3A%22not%20support%22%2C%22key39%22%3A4%7D"
    # 使用subprocess模块的Popen方法时，参数可以以数组的形式传递，逻辑比较清晰
    # p = subprocess.Popen('node os_popen_use {0} {1}'.format(a,b), stdout=subprocess.PIPE)#也可以设置传递一个长字符串的形式传递参数
    p = subprocess.Popen(['node', './encrypt.js', data], stdout=subprocess.PIPE)
    out = p.stdout.read()
    # print('out:', out.strip())
    return out.strip()


def get_x_y(bg_url, cut_url):
    bg = cv2.cvtColor(cv2.Canny(cv2.imread(bg_url), 100, 200), cv2.COLOR_GRAY2RGB)
    cut = cv2.cvtColor(cv2.Canny(cv2.imread(cut_url), 100, 200), cv2.COLOR_GRAY2RGB)

    # 缺口匹配
    res = cv2.matchTemplate(bg, cut, cv2.TM_CCOEFF_NORMED)
    # 寻找最优匹配
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)

    # 返回缺口坐标
    return max_loc[0], max_loc[1]


def get_Captchasession():
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Origin': 'https://passport.kuaishou.com',
        'Referer': 'https://passport.kuaishou.com/pc/account/login/?sid=kuaishou.web.cp.api&callback=https%3A%2F%2Fcp.kuaishou.com%2Frest%2Finfra%2Fsts%3FfollowUrl%3Dhttps%253A%252F%252Fcp.kuaishou.com%252Farticle%252Fpublish%252Fvideo%253Forigin%253Dwww.kuaishou.com%26setRootDomain%3Dtrue',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    data = {
        'sid': 'kuaishou.web.cp.api',
        'type': '53',
        'countryCode': '+86',
        'phone': '18282112287',
        'account': '',
        'ztIdentityVerificationType': '',
        'ztIdentityVerificationCheckToken': '',
        'channelType': 'PC_PAGE',
        'encryptHeaders': '',
    }

    response = requests.post('https://id.kuaishou.com/pass/kuaishou/sms/requestMobileCode', headers=headers, data=data)
    return response.json()


def get_config(captchaSession):
    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Chromium";v="21", " Not;A Brand";v="99"',
        'Accept': 'application/json, text/plain, */*',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://captcha.zt.kuaishou.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://captcha.zt.kuaishou.com/iframe/index.html?captchaSession=Cgp6dC5jYXB0Y2hhEqQCZbDdx7vzJS5Ce0k9lVwKhEFXiMWyenp066WG2SCE1GLHN88j5_LSesgT7BU22kZQ6Cu1ZwGkS4Bd_LJfYdhp6eqKJK3ZY4DnjSUP7HNoCRUdPfKNxUMTWijn-eDHGcxtMpIt4GYW5-x_dqNOENsHcc0QDOs6OyHUkUrsDVlZqaDsFtM7p0IwYCe2zx_Yl4ss1KWeFHojlLPwrD-x9ivRjsjfJCsC2mD0l-guwsGXrNq5aBh_8Qgt3kHSEMVJ5OLaxb3V9Pnt32Za84PqL8wtZx7SxOGXJ_s6Rdf03Sr67GdVtM8oGynW1sRHRQ9uf4PVKpsJ70Ox4kx2SNR8VH9jD6IyBC2h8b8OTcrPjUANNmm-bHg77c7dP_yrqTp-sxZtOE4DFxoSHzu-JyybXJ56fSg-i-K_agFkKAUwAg&type=1&configUrl=https%3A%2F%2Fcaptcha.zt.kuaishou.com%2Frest%2Fzt%2Fcaptcha%2Fsliding%2Fconfig&bizName=DOWNSTREAM_SMS_V2&displayType=popup',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    data = {
        'captchaSession': captchaSession,
    }
    response = requests.post('https://captcha.zt.kuaishou.com/rest/zt/captcha/sliding/config', headers=headers,
                             data=data)
    das = response.json()
    bgPic = requests.get(das['bgPicUrl'] + '?captchaSn=%s' % (das['captchaSn']), headers=headers)
    cutPic = requests.get(das['cutPicUrl'] + '?captchaSn=%s' % (das['captchaSn']), headers=headers)
    with open('./cutPic.png', 'wb') as f:
        f.write(cutPic.content)
    with open('./bgPic.png', 'wb') as f:
        f.write(bgPic.content)
    return das


def __ease_out_expo(x):
    if x == 1:
        return 1
    else:
        return 1 - pow(2, -10 * x)


def __ease_out_quart(x):
    return 1 - pow(1 - x, 4)


def get_slide_track(distance):
    """
    根据滑动距离生成滑动轨迹
    :param distance: 需要滑动的距离
    :return: 滑动轨迹<type 'list'>: [[x,y,t], ...]
        x: 已滑动的横向距离
        y: 已滑动的纵向距离, 除起点外, 均为0
        t: 滑动过程消耗的时间, 单位: 毫秒
    """

    if not isinstance(distance, int) or distance < 0:
        raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
    # 初始化轨迹列表
    slide_track = [
        [random.randint(20, 60), random.randint(10, 40), 0]
    ]
    # 共记录count次滑块位置信息
    count = 14 + int(distance / 20)
    # 初始化滑动时间
    t = random.randint(50, 100)
    # 记录上一次滑动的距离
    _y = 0
    sum_t = 0
    sum_x = 0
    for i in range(count):
        # 已滑动的横向距离
        x = round(__ease_out_expo(i / count) * distance)
        # 滑动过程消耗的时间
        t = random.randint(10, 20)
        _y = random.randint(8, 16)
        sum_t += t
        sum_x += x
        slide_track.append([x, _y, sum_t])
    # 最好取值
    # slide_track.append([0, 0, random.randint(200, 300)])

    return slide_track


def get_trajectory(distance):
    distancez =int((distance * 316 / 686) - (30 - int(20 * 316 / 686)))
    slide_track = []
    for _ in get_slide_track(distancez):
        _ = [str(i) for i in _]
        slide_track.append('|'.join(_))

    return ','.join(slide_track)


def kSecretApiVerify(verifyParam):
    cookies = {
        '_did': 'web_264285873EAC6E44',
    }

    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '"Chromium";v="21", " Not;A Brand";v="99"',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Origin': 'https://captcha.zt.kuaishou.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://captcha.zt.kuaishou.com/iframe/index.html?captchaSession=Cgp6dC5jYXB0Y2hhEocC3mBQ4mfatfzqqnfSigyzmdta0ayGg10us9m2LWHiwURB2liPuAE19f6VqzrtlvksLYubafbwpEr7L9JELNvvfGAnUUG9XT7asi9ps1TMA04YW5oyK4Nvkjfij87Ffpa6heFLx9z4x8lzQPJ8mTqfMMU80vhMggNJJo3ULDBk0bCI8EM7wtPkFBElshonitro0iD-39aCDw7kQ_UtrWNqzW1GNw3xBZURJWo9SuHQK5ughfHauFBcaeHOLcrR599L2wt6xrnK7GMI_dGUQrwToDc_9lWvJNvaBPAg9Mi7Ik2luTGbwjcy7rtE4VJ7xPoJAZyJia5xhiX6K39lL7sNMqNK-luXDf4aEmICSWngwYQ00Eyk0vg6L4AiHygFMAI&type=1&configUrl=https%3A%2F%2Fcaptcha.zt.kuaishou.com%2Frest%2Fzt%2Fcaptcha%2Fsliding%2Fconfig&bizName=DOWNSTREAM_SMS_V2&displayType=popup',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        # 'Cookie': '_did=web_264285873EAC6E44',
    }

    json_data = {
        'verifyParam': verifyParam,
    }

    response = requests.post(
        'https://captcha.zt.kuaishou.com/rest/zt/captcha/sliding/kSecretApiVerify', cookies=cookies, headers=headers,
        json=json_data)
    print(response.text)


if __name__ == '__main__':
    # 轨迹有问题 缩放比例不一致
    MobileCode = get_Captchasession()
    logging.info('获取到验证码url：%s' % (MobileCode['url']))

    captchaSession = MobileCode['url'].split('captchaSession=')[-1].split('&')[0]
    config = get_config(captchaSession)

    logging.info('获取到config：%s' % (config))
    distance = ddddocr_xy()
    trajectory = get_trajectory(distance)
    logging.info('计算轨迹为：%s' % (trajectory))
    txt = 'captchaSn=' + config[
        'captchaSn'] + '&bgDisWidth=316&bgDisHeight=184&cutDisWidth=56&cutDisHeight=56&relativeX=65&relativeY=' + str(
        config[
            'disY'] * 0.46) + '&trajectory=' + trajectory + '&gpuInfo={"glRenderer":"WebKit WebGL","glVendor":"WebKit","unmaskRenderer":"ANGLE (Intel, Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11-31.0.101.2111)","unmaskVendor":"Google Inc. (Intel)"}&captchaExtraParam={"ua":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36","timeZone":"UTC+8","language":"zh-CN","cpuCoreCnt":"4","platform":"Win32","riskBrowser":"false","webDriver":"false","exactRiskBrowser":"false","webDriverDeep":"false","exactRiskBrowser2":"false","webDriverDeep2":"false","battery":"1","plugins":"170b76c0d6cbaed3cb42746b06cae5eae","resolution":"1920x1080","pixelDepth":"24","colorDepth":"24","canvasGraphFingerPrint":"184d2a5cb7dd0dbef53dd603e607d58f8","canvasGraph":"184d2a5cb7dd0dbef53dd603e607d58f8","canvasTextFingerPrintEn":"10988b111dee10a3ace1f10536e3a0eee","canvasTextEn":"10988b111dee10a3ace1f10536e3a0eee","canvasTextFingerPrintZh":"13ffb1298cbb06fbd4cbf7a29b627d240","canvasTextZh":"13ffb1298cbb06fbd4cbf7a29b627d240","webglGraphFingerPrint":"14dc51ccd006f78c818999c374ac62402","webglGraph":"14dc51ccd006f78c818999c374ac62402","webglGPUFingerPrint":"1108f3efe4bed369a31b6475af6c38f30","webglGpu":"1108f3efe4bed369a31b6475af6c38f30","cssFontFingerPrintEn":"10a344f5534d5b367655c7f90f04de717","fontListEn":"10a344f5534d5b367655c7f90f04de717","cssFontFingerPrintZh":"16c1334aeae228bca19e18632c8472a52","fontListZh":"16c1334aeae228bca19e18632c8472a52","voiceFingerPrint":"1dd96cac4e826abdbbe261dc4f3a08292","audioTriangle":"1dd96cac4e826abdbbe261dc4f3a08292","nativeFunc":"1973dcbb27a04c3a2ee240d9d2549e105","key1":"web_7721346c62c20a0b","key2":1673853459961,"key3":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36","key4":"20030107","key5":"zh-CN","key6":"Gecko","key7":1920,"key8":1080,"key9":1920,"key10":1040,"key11":360,"key12":360,"key13":1040,"key14":1920,"key15":"00000111","key16":1,"key17":1,"key18":[],"key19":{},"key20":[],"key21":{},"key22":[],"key23":{},"key24":[],"key25":{},"key26":{"key27":["0,1,2887,51,306,prepare1","1,1,2888,51,306,prepare1","2,1,2891,51,305,prepare1","3,1,2907,51,304,prepare1","4,1,3139,51,303,prepare1","5,1,3147,50,302,prepare1","6,1,3155,48,301,prepare1","7,1,3162,47,299,prepare1","8,1,3171,46,299,prepare1","9,1,3179,43,296,prepare1","10,1,3195,42,295","11,3,3373,42,295","12,1,3382,42,295,prepare2","13,1,3442,44,295,prepare2","14,1,3451,46,295,prepare2","15,1,3459,48,295,prepare2","16,1,3467,50,297,prepare2","17,1,3475,52,297,prepare2","18,1,3483,54,297,prepare2","19,1,3491,56,297,prepare2","20,1,3499,58,297,prepare2","21,1,3507,59,297,prepare2","22,4,4003,99,297","23,2,4139,99,297,prepare3","24,1,4140,99,297,prepare3","25,1,4453,100,306,prepare3"],"key28":[],"key29":[],"key30":[],"key31":{"prepare1":"9,1,3179,43,296","prepare2":"21,1,3507,59,297","prepare3":"25,1,4453,100,306"},"key32":{},"key33":{},"key34":{}},"key35":"7ebc4735321e3b0c225c1e489d2adb1b","key36":"f22a94013fc94e90e2af2798023a1985","key37":1,"key38":"not support","key39":4}'
    verifyParam = encrypt(parse.quote(txt))
    logging.info('计算得到verifyParam：%s' % (verifyParam))
    kSecretApiVerify(verifyParam)
