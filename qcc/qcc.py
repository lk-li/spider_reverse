import hashlib
import hmac
import requests
from urllib import parse


def jm_sha512(key, value):
    '''
    :param key: 明文密码
    :param value: 混淆字符串
    :return:混淆后的加密结果
    '''
    key = key.encode('utf8')
    value = value.encode('utf8')
    return hmac.new(key, value, hashlib.sha512).hexdigest()


def get_key(api):
    arguments = [api]
    e = arguments[0]
    t = e.lower()
    n = t + t
    i = ""
    codes = {0: 'W', 1: 'l', 2: 'k', 3: 'B', 4: 'Q', 5: 'g', 6: 'f', 7: 'i', 8: 'i', 9: 'r', 10: 'v', 11: '6', 12: 'A',
             13: 'K', 14: 'N', 15: 'k', 16: '4', 17: 'L', 18: '1', 19: '8'}
    _n = 20
    for o in range(len(n)):
        r = ord(n[o]) % _n
        i += codes[r]
    return i


def searchTrademark():
    searchKey = parse.quote('阿里巴巴')
    x_pid = "d61bab86d8195aa1d826eb7b27af85a6"
    dats = "/api/search/searchmind?mindkeywords=true&mindtype=9&pagesize=5&person=true&searchkey=%s&suggest=true" % (
        searchKey.lower())
    key = get_key(dats)
    value1 = dats + '{}'
    value2 = dats + "pathString" + "{}" + x_pid

    sha512_key = jm_sha512(key, value1).lower()
    sha512_va = jm_sha512(key, value2).lower()

    url = "https://www.qcc.com/api/search/searchMind?mindKeyWords=true&mindType=9&pageSize=5&person=true&searchKey=%s&suggest=true" % (
        searchKey)

    headers = {
        sha512_key[8:28]: sha512_va,
        'authority': 'www.qcc.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'referer': 'https://www.qcc.com/web/search?key=%E4%B8%87%E8%BE%BE%E9%9B%86%E5%9B%A2',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'x-pid': x_pid,
        'x-requested-with': 'XMLHttpRequest'
    }
    cookies = {
        "'acw_tc": "3d9f51ab16608858312514469e189c612b877377641dbdedb4d9494e38",
        "QCCSESSID": "5272c9e1547c79649ad3adb9bb",
        "qcc_did": "4d932bdf-d347-4604-8669-c15c1461e8a2",
        "UM_distinctid": "182b4829c3e5a-04737f9112ae08-26021a51-1fa400-182b4829c3f5a5",
        "CNZZDATA1254842228": "2038214334-1660884693-https%253A%252F%252Fwww.baidu.com%252F%7C1660884693",
        "_uab_collina": "166088585993231142829859'"
    }
    response = requests.request("GET", url, headers=headers,cookies=cookies)

    print(response.text)
    print(response)


if __name__ == '__main__':
    searchTrademark()
