import ctypes
import hashlib
import time
import requests
import json
import execjs


def int_overflow(val):
    maxint = 2147483647
    if not -maxint - 1 <= val <= maxint:
        val = (val + (maxint + 1)) % (2 * (maxint + 1)) - maxint - 1
    return val


def unsigned_right_shitf(n, i):
    if n < 0:
        n = ctypes.c_uint32(n).value
    if i < 0:
        return -int_overflow(n << abs(i))
    return int_overflow(n >> i)


def decode(string):
    _0x50ff23 = {
        48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5,
        54: 6, 55: 7, 56: 8, 57: 9, 97: 10, 98: 11,
        99: 12, 100: 13, 101: 14, 102: 15
    }
    arr = []
    for i in range(0, 32, 2):
        arr.append(_0x50ff23[ord(string[i])] << 4 | _0x50ff23[ord(string[i + 1])])
    return arr


def md5_arry(arry):
    m = hashlib.md5()
    m.update(bytearray(arry))
    return m.hexdigest()


def md5_string(s):
    m = hashlib.md5()
    m.update(s.encode())
    return m.hexdigest()


def encodeWithKey(key, data):
    result = [None] * 256
    temp = 0
    output = ""
    for i in range(256):
        result[i] = i
    for i in range(256):
        temp = (temp + result[i] + key[i % len(key)]) % 256
        temp1 = result[i]
        result[i] = result[temp]
        result[temp] = temp1
    temp2 = 0
    temp = 0
    for i in range(len(data)):
        temp2 = (temp2 + 1) % 256
        temp = (temp + result[temp2]) % 256
        temp1 = result[temp2]
        result[temp2] = result[temp]
        result[temp] = temp1
        output += chr(ord(data[i]) ^ result[(result[temp2] + result[temp]) % 256])
    return output


def b64_encode(string, key_table="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="):
    last_list = list()
    for i in range(0, len(string), 3):
        try:
            num_1 = ord(string[i])
            num_2 = ord(string[i + 1])
            num_3 = ord(string[i + 2])
            arr_1 = num_1 >> 2
            arr_2 = ((3 & num_1) << 4 | (num_2 >> 4))
            arr_3 = ((15 & num_2) << 2) | (num_3 >> 6)
            arr_4 = 63 & num_3
        except IndexError:
            arr_1 = num_1 >> 2
            arr_2 = ((3 & num_1) << 4) | 0
            arr_3 = 64
            arr_4 = 64
        last_list.append(arr_1)
        last_list.append(arr_2)
        last_list.append(arr_3)
        last_list.append(arr_4)
    return "".join([key_table[value] for value in last_list])


def cal_num_list(_num_list):
    new_num_list = []
    for x in [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 4, 6, 8, 10, 12, 14, 16, 18, 20]:
        new_num_list.append(_num_list[x - 1])
    return new_num_list


def _0x22a2b6(_0x59d7ab, _0x151cde, _0x1e0c94, _0x54aa83, _0x76d8ab, _0x550bdb, _0xb90041, _0x44b16d, _0x28659f,
              _0x252c2c, _0x365218, _0x48af11, _0x25e3db, _0x34084f, _0x4f0729, _0x46a34c, _0x1f67f1, _0x5cd529,
              _0x53097b):
    _0xa0a6ac = [0] * 19
    _0xa0a6ac[-0x1 * -0x2192 + 0x11b * 0x5 + -0x2719 * 0x1] = _0x59d7ab
    _0xa0a6ac[0x4a * 0x3 + -0x6d * 0xb + -0x1e9 * -0x2] = _0x365218
    _0xa0a6ac[-0x59f * -0x3 + -0x46c * -0x4 + -0x228b] = _0x151cde
    _0xa0a6ac[0x11a1 + 0xf3d * -0x1 + 0x3 * -0xcb] = _0x48af11
    _0xa0a6ac[-0x1 * -0xa37 + 0x13 * 0x173 + -0x25bc] = _0x1e0c94
    _0xa0a6ac[-0x4 * -0x59f + -0x669 * 0x4 + 0x32d] = _0x25e3db
    _0xa0a6ac[-0x1b42 + 0x10 * -0x24 + 0x1d88] = _0x54aa83
    _0xa0a6ac[0x2245 + 0x335 * 0x6 + -0x357c] = _0x34084f
    _0xa0a6ac[0x3fb + 0x18e1 + -0x1cd4] = _0x76d8ab
    _0xa0a6ac[0x3 * 0x7a + 0x1 * 0x53f + 0x154 * -0x5] = _0x4f0729
    _0xa0a6ac[0x25a * -0x9 + 0x11f6 + 0xa6 * 0x5] = _0x550bdb
    _0xa0a6ac[-0x1b * -0x147 + -0x21e9 * -0x1 + 0x445b * -0x1] = _0x46a34c
    _0xa0a6ac[-0x2f * 0xaf + 0x22f0 + -0x2c3] = _0xb90041
    _0xa0a6ac[0x2f * 0x16 + 0x17 * 0x19 + -0x63c] = _0x1f67f1
    _0xa0a6ac[-0x46a * 0x1 + 0xb * -0x97 + 0xaf5] = _0x44b16d
    _0xa0a6ac[0x47 * 0x4f + -0x8cb * -0x4 + -0x3906] = _0x5cd529
    _0xa0a6ac[-0x7 * 0x40e + 0xb8b + 0x10e7] = _0x28659f
    _0xa0a6ac[0x6f9 + 0x196b + 0x5 * -0x677] = _0x53097b
    _0xa0a6ac[-0xa78 + 0x1b89 + 0xe5 * -0x13] = _0x252c2c
    return ''.join([chr(x) for x in _0xa0a6ac])


def _0x263a8b(_0x2a0483):
    return "\u0002" + "ÿ" + _0x2a0483


def get_x_bogus(params, data, user_agent):
    print(data)
    s0 = md5_string(data)
    s1 = md5_string(params)
    s0_1 = md5_arry(decode(s0))
    s1_1 = md5_arry(decode(s1))
    d = encodeWithKey([0, 1, 14], user_agent)
    ua_str = b64_encode(d)
    ua_str_md5 = md5_string(ua_str)
    timestamp = int(time.time())
    canvas = 536919696
    salt_list = [timestamp, canvas, 64, 0, 1, 14, decode(s1_1)[-2], decode(s1_1)[-1], decode(s0_1)[-2],
                 decode(s0_1)[-1], decode(ua_str_md5)[-2], decode(ua_str_md5)[-1]]
    for x in [24, 16, 8, 0]:
        salt_list.append(salt_list[0] >> x & 255)
    for x in [24, 16, 8, 0]:
        salt_list.append(salt_list[1] >> x & 255)
    _tem = 64
    for x in salt_list[3:]:
        _tem = _tem ^ x
    salt_list.append(_tem)
    salt_list.append(255)
    num_list = cal_num_list(salt_list)
    short_str_2 = encodeWithKey([255], _0x22a2b6(*num_list))
    short_str_3 = _0x263a8b(short_str_2)
    x_b = b64_encode(short_str_3, "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe")
    return x_b


def get_mstoken(X_Bogus, strData, tspFromClient):
    url = "https://mssdk.snssdk.com/web/report?msToken=&X-Bogus=" + X_Bogus

    payload = '{"magic":538969122,"version":1,"dataType":8,"strData":"' + strData + '","tspFromClient":' + str(
        tspFromClient) + '}'
    headers = {
        'authority': 'mssdk.snssdk.com',
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'text/plain;charset=UTF-8',
        'origin': 'https://www.douyin.com',
        'referer': 'https://www.douyin.com/',
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        #'Cookie': 'msToken=UuAUfLzgciUyHpgsgAwNBeK3eUM8Oz16uIqAmVO8F8DLL9GxVXPBPxNZzdr3qVEjwgP-HRuMyA8tju7ff0_a7muEpUwrjo-dljzXvMkxWMtJcOiuzWVs570CJXSU1w=='
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.headers)

if __name__ == '__main__':
    with open('strData.js', 'r', encoding='utf-8') as f:
        strD = f.read()
    strData = execjs.compile(strD).call('getsData')

    # strData = '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'
    tspFromClient = int(time.time() * 1000)

    X_Bogus = get_x_bogus(
        "msToken=",
        '{"magic":538969122,"version":1,"dataType":8,"strData":"' + strData + '","tspFromClient":' + str(tspFromClient) + '}',
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    )
    print(X_Bogus)
    # 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G0oYMWf5O+Er4Ddk3pnYWlkBoV4KTmm=AzY8nuHJX+PLHojyiqJGSxrhYcjAkRmWp2djNJotSIS7UOdYchRi7UjcVyook7wUj1dSiTVVM5FdPW57cp8jeKlUB0wV2TXO5l0WFgAU+CLQna8AErdZBpJ2Xqc3Ryytx7jqr5+ILlLjmLX6IEP3o3QvNsKTDxVNwAxzLdDsmPtVoXZyDiFCi9rxJJMl3XVPufBm3pM6o9hg0/Zww6b2k2uZ39LBE9Iurp2GXEtR09PaGitztueI5nl3CqjxfxfrHEsIOt6=
    # print(strData)
    print(tspFromClient)
    get_mstoken(X_Bogus, strData, tspFromClient)
