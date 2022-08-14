# -*- coding: utf-8 -*-
# @Time    : 2021/3/24 15:34
import logging
import frida
import requests
import time
import sys

logging.basicConfig(level=logging.DEBUG)


def on_message(message, data):
    print(message)


def frida_rpc(session):
    # hook相关js代码
    # rpc_hook_js = """
    #        上述展示代码
    # """
    with open('01.js', 'r') as f:
        rpc_hook_js = f.read()
    # 固定写法
    script = session.create_script(rpc_hook_js)
    script.on('message', on_message)
    script.load()
    return script


def session_frida():
    rdev = frida.get_usb_device(10)
    processes = rdev.enumerate_processes()  # 安卓手机中的所有进程
    session = rdev.attach("com.yuanrenxue.challenge")  # hook的包名
    script = frida_rpc(session)
    return script
    # # 调用
    # user_info1 = script.exports.invokesign('page=41655878901748')
    # print(user_info1)


def get_page(page, datas):
    url = "https://www.python-spider.com/api/app1"
    tt = int(time.time() * 1000)
    da = str(page) + str(tt)
    sign = session_frida().exports.invokesign(f'page={da}')
    payload = f"page={page}&sign={sign}&t={tt}"
    headers = {
        'Host': 'www.python-spider.com',
        'accept-language': 'zh-CN,zh;q=0.8',
        'user-agent': 'Mozilla/5.0 (Linux; U; Android 8.1.0; zh-cn; Nexus 6P Build/OPM7.181005.003) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
        'content-type': 'application/x-www-form-urlencoded',
        'cache-control': 'no-cache'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.json())
    dasss = 0
    for num in response.json()['data']:
        dasss += int(num['value'].strip())
    return dasss


if __name__ == '__main__':
    datas = 0
    for da in range(1, 101):
        datas += get_page(da, datas)
    print(datas)
