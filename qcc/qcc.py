import hashlib
import hmac
import requests


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
    codes = {
        0: "W",
        1: "l",
        2: "k",
        3: "B",
        4: "Q",
        5: "g",
        6: "f",
        7: "i",
        8: "i",
        9: "r",
        10: "v",
        11: "6",
        12: "A",
        13: "K",
        14: "N",
        15: "k",
        16: "4",
        17: "L",
        18: "1",
        19: "8",
    }
    _n = 20
    for o in range(len(n)):
        r = ord(n[o]) % _n
        i += codes[r]
    return i


def searchTrademark():
    dats = '/api/search/searchmind?mindkeywords=true&mindtype=9&pagesize=5&person=true&searchkey=%e4%b8%8a%e6%b5%b7%e5%8c%97%e4%ba%ac&suggest=true'
    key = get_key(dats)

    value1 = dats + '{}'
    value2 = dats + "pathString" + "{}" + "2cc2786d4a7a9eaa91f436e78114eaad"

    sha512_key = jm_sha512(key, value1)
    sha512_va = jm_sha512(key, value2)

    # 3080dbcecdc9f8a14ebe : c16f4001e9895b0431883db1fb579c06d79f3f87c066315b15c2302b36d0a251c3eee08d5d450b115b13f11015c55f47cab6176426a776a37ba1da4ffca9e847
    headers = {
        "authority": "www.qcc.com",
        sha512_key[8:28]: sha512_va,
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json",
        "origin": "https://www.qcc.com",
        "referer": "https://www.qcc.com/web/search/all?key=%E4%B8%8A%E6%B5%B7",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        "x-pid": "9ed43a8c6134b3092aec23f0b6dee5cd",
        "x-requested-with": "XMLHttpRequest"
    }

    cookies = {
        "QCCSESSID": "9fa13f86d749ca0d6ac0e2780b",
        "qcc_did": "b29fa4f2-1f16-4cd9-8761-8c7709203175",
        "UM_distinctid": "1822138d1cdaa5-0f1fb36287b62b-1c525635-1aeaa0-1822138d1ced7e",
        "_uab_collina": "165841479499709664744316",
        "CNZZDATA1254842228": "428036109-1658412847-%7C1658420397"
    }
    url = "https://www.qcc.com/api/search/searchMind"
    params = {
        "mindKeyWords": "true",
        "mindType": "9",
        "pageSize": "5",
        "person": "true",
        "searchKey": "上海北京",
        "suggest": "true"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)
    print(response)


if __name__ == '__main__':
    searchTrademark()
