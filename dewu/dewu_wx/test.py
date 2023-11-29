#!/usr/bin/env/ python
# -*- coding: utf-8 -*-

import json
import requests
import hashlib
import execjs
import base64

import AES

with open("dewu_fun.js", 'r', encoding="utf-8") as f:
    dd = f.read()

js_ce = execjs.compile(dd)


def md5_encrypt(str_):
    # 创建MD5对象
    md5 = hashlib.md5()
    # 更新哈希对象以编码指定的字符串
    md5.update(str_.encode("utf8"))
    psw = md5.hexdigest()
    return psw


def decrypt_d(ciphertext):
    e = "0E4AC3F35E1A062077AD10BDEB5B9AEBF2DF0F6CC766E8C9"
    key = e[10:26]
    iv = e[20:36]

    plaintext = AES.cbc_decrypt(ciphertext, key, iv)

    return plaintext


def encrypt_e(text):
    e = "0E4AC3F35E1A062077AD10BDEB5B9AEBF2DF0F6CC766E8C9"
    key = e[10:26]
    iv = e[20:36]
    ciphertext = AES.cbc_encrypt(text, key, iv)
    return ciphertext


def lxl_resop(response):
    re_data = response.text
    if response.status_code == 200:
        if "请登录后继续访问" not in re_data:
            res = decrypt_d(re_data)
            re_su = json.loads(res)
            print(re_su)
            return re_su

        else:
            print(re_data)
            return False
    else:
        print(re_data)
        return False


def sort_dict_dump_str(par_dic=None, key=""):
    if par_dic:
        json_dict = par_dic
        txt_li = []
        sorted_dict = dict(sorted(json_dict.items()))
        for item in sorted_dict:
            if type(sorted_dict.get(item)) == list:
                str_tx = item
                ind_di = []
                for ii in sorted_dict.get(item):
                    ind_di.append(str(ii))
                str_tx += ",".join(ind_di)
                txt_li.append(str_tx.replace(" ", "").replace("'", '"'))
            else:
                txt_li.append(item + str(sorted_dict.get(item)))

        str_ = "".join(txt_li)
        return str_ + key
    else:
        print("缺少传入参数")
        return key


headers = {
    "Host": "app.dewu.com",
    "wxapp-route-id": "[object Undefined]",
    "Wxapp-Login-Token": "",
    "ltk": "KcKQwrrDn8O1C8KLwpDCh8KnH8KGwrnChsOJUsOmwpbCmcKjNT/CkXvDn8OjWcOHKQjCuAbDm13Dh8OHw5xodcOoNGzDrMKtwoHDmMKqwqPCiMKdw6c=",
    "SK": "9MPxIemixYHZGDTC0YogmFMBX3aSFgqiBLIz14rclv9C3HkpGs79Gml5vAvrY8uMI7VRQtFYnE9GBZWL85XJ5PSBzd1s",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309080f)XWEB/8461",
    "xweb_xhr": "1",
    "sks": "1,xdw2",
    "AppId": "wxapp",
    "platform": "h5",
    "appVersion": "5.19.0",
    "Accept": "*/*",
    "Sec-Fetch-Site": "cross-site",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://servicewechat.com/wx3c12cdd0ae8b1a7b/423/page-frame.html",
    "Accept-Language": "zh-CN,zh;q=0.9"
}


def webSk():
    with open("webSk.js", "r", encoding="utf-8") as f:
        sk = f.read()
    with open("ltk.js", "r", encoding="utf-8") as f:
        ltk = f.read()
    headersz = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Referer": "https://servicewechat.com/wx3c12cdd0ae8b1a7b/423/page-frame.html",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/8447",
        "dsn": "p=w&bcn=dewu&bcv=1.0.0.231109",
        "xweb_xhr": "1"
    }
    url = "https://dav.dewu.com/webSk"
    # ee 设备指纹 生成SK ltk
    ee = {
        "iod": "",
        "dcic": 1,
        "dbr": "microsoft",
        "dmo": "microsoft",
        "dpr": 2,
        "dsw": 415,
        "dsh": 695,
        "dww": 415,
        "dwh": 695,
        "dbh": 1,
        "dla": "zh_CN",
        "dv": "3.9.7",
        "dsys": "Windows 10 x64",
        "dpl": "windows",
        "dsv": "3.0.0",
        "dfs": 15,
        "dor": "-1",
        "bcn": "dewu",
        "src": "wx",
        "iud": "oy8VMjWPbX3iwFNSgdyITWN2Egjddmkg",
        "sk": "",
        "bcv": "1.0.0.231109",
        "dje": "11111111111",
        "ddt": 50,
        "dnt": "Wifi",
        "dpf": "{\"errMsg\":\"getConnectedWifi:fail:not supported\"}",
        "dua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309080f)XWEB/8461",
        "dhc": "100,1",
        "dft": 1257
    }
    ltk_data = {
        "model": ee["dsys"],
        "windowWidth": ee["dww"],
        "mt": ee["iud"]
    }
    data = execjs.compile(sk).call("get_SK", ee)
    ltk_ = execjs.compile(ltk).call("get_ltk", ltk_data)
    data = {
        "data": data["data"].replace("##$", "​")
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headersz, data=data)

    re_su = lxl_resop(response)
    if re_su:
        sk = re_su.get("k")
        heaer_ = {"SK": base64.b64decode(sk).decode(), "ltk": ltk_}
        print(heaer_)
        return heaer_


def search():
    url = "https://app.dewu.com/api/v1/h5/search/fire/search/list"

    da_pt = {
        "title": "珍珠",
        "page": 0,
        "sortType": 0,
        "sortMode": 1,
        "limit": 20,
        "showHot": 1,
        "enhancedSearch": 0
    }
    str_ = sort_dict_dump_str(par_dic=da_pt, key="19bc545a393a25177083d4a748807cc0")
    sign = md5_encrypt(str_)

    da_pt.update({"sign": sign})

    data = js_ce.call("Fun110", da_pt, "GET", "wx")

    params = {
        "data": data["data"].replace("##$", "​")
    }
    response = requests.get(url, headers=headers, params=params)

    lxl_resop(response)


def last_sold_list():
    # 穿搭精选
    url = "https://app.dewu.com/api/v1/h5/commodity/fire/last-sold-list"
    da_pt = {
        "spuId": 1139812,
        "limit": 30,
        "lastId": "",
        "sourceApp": "app"
    }
    str_ = sort_dict_dump_str(par_dic=da_pt, key="19bc545a393a25177083d4a748807cc0")
    sign = md5_encrypt(str_)

    da_pt.update({"sign": sign})
    js_ce = execjs.compile(dd)
    data = js_ce.call("Fun110", da_pt, "POST", "wx")

    data = {
        "data": data["data"].replace("##$", "​")
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url=url, headers=headers, data=data)

    lxl_resop(response)


def detailV3():
    # 详情
    url = "https://app.dewu.com/api/v1/h5/index/fire/flow/product/detailV3"

    da_pt = {
        "spuId": 1139812,
        "propertyValueId": 25007165,
        "sourceName": "search_result_source",
        "skuId": 0,
        "abTests": [
            {
                "name": "newsr",
                "value": "2"
            },
            {
                "name": "5.16_certificate",
                "value": "1"
            }
        ],
        "extDatas": [
            {
                "name": "CUSTOM_RECOMMEND_SWITCH",
                "value": "0"
            }
        ]
    }
    str_ = sort_dict_dump_str(par_dic=da_pt, key="19bc545a393a25177083d4a748807cc0")
    sign = md5_encrypt(str_)

    da_pt.update({"sign": sign})
    js_ce = execjs.compile(dd)
    data = js_ce.call("Fun110", da_pt, "POST", "wx")

    data = {
        "data": data["data"].replace("##$", "​")
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, data=data)
    lxl_resop(response)


if __name__ == '__main__':
    # webSk()
    search()
    # last_sold_list()
    # detailV3()
