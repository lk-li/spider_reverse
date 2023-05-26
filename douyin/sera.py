from urllib import parse
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


def sear():
    keyword = '斗罗大陆'

    url_para = 'device_platform=webapp&aid=6383&channel=channel_pc_web&search_channel=aweme_general&sort_type=0&publish_time=0&keyword=' + parse.quote(
        keyword) + '&search_source=normal_search&query_correct_type=1&is_filter_search=0&from_group_id=&offset=0&count=10&version_code=190600&version_name=19.6.0&cookie_enabled=true&screen_width=1680&screen_height=1050&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=104.0.0.0&browser_online=true&engine_name=Blink&engine_version=104.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=12&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7186950507671242301&msToken=9ruIJIoDx_cTQNJEkIHuWZtvOrSKRSw2PuSV8NobUdvWdhDiYSxG0FAuAmqrRDxfIyY6qNVTxs2g9cmCqbRgLurgqdsfPHg33Nf3NYdJadmlKsy8TOyomA=='
    user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"

    X_Bogus = get_x_bogus(url_para, '', user_agent)
    url = "https://www.douyin.com/aweme/v1/web/general/search/single/?device_platform=webapp&aid=6383&channel=channel_pc_web&search_channel=aweme_general&sort_type=0&publish_time=0&keyword=" + parse.quote(keyword) + "&search_source=normal_search&query_correct_type=1&is_filter_search=0&from_group_id=&offset=0&count=10&version_code=190600&version_name=19.6.0&cookie_enabled=true&screen_width=1680&screen_height=1050&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=104.0.0.0&browser_online=true&engine_name=Blink&engine_version=104.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=12&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7186950507671242301&msToken=9ruIJIoDx_cTQNJEkIHuWZtvOrSKRSw2PuSV8NobUdvWdhDiYSxG0FAuAmqrRDxfIyY6qNVTxs2g9cmCqbRgLurgqdsfPHg33Nf3NYdJadmlKsy8TOyomA==&X-Bogus=" + X_Bogus
    # "https://www.douyin.com/aweme/v1/web/general/search/single/?device_platform=webapp&aid=6383&channel=channel_pc_web&search_channel=aweme_general&sort_type=0&publish_time=0&keyword=                   &search_source=normal_search&query_correct_type=1&is_filter_search=0&from_group_id=&offset=0&count=10&pc_client_type=1&version_code=190600&version_name=19.6.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=112.0.0.0&browser_online=true&engine_name=Blink&engine_version=112.0.0.0&os_name=Windows&os_version=10&cpu_core_num=4&device_memory=8&platform=PC&downlink=5.95&effective_type=4g&round_trip_time=200&webid=7186950507671242301&msToken=9ruIJIoDx_cTQNJEkIHuWZtvOrSKRSw2PuSV8NobUdvWdhDiYSxG0FAuAmqrRDxfIyY6qNVTxs2g9cmCqbRgLurgqdsfPHg33Nf3NYdJadmlKsy8TOyomA==&X-Bogus=DFSzswVLyUsANc/StS3WNe9WX7JL"
    headers = {
        'authority': 'www.douyin.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': 'n_mh=AChSLFpz4Lnmtost7-bPGeitSQzXiy78U8-5FOWLeUo; my_rd=1; LOGIN_STATUS=1; store-region=cn-sc; store-region-src=uid; ttwid=1%7CHe0zDHDDPh4-h0kSlqvnlWyatru4k8xAmrAMZd5dhVk%7C1677484354%7Ca725df4e4c362176ebc8414c675a2f5a8a6300a4e13d89d47d6e9b1e6e2a75f4; s_v_web_id=verify_lgfwlhfq_giKdVcWg_fAJw_4nYd_BzCh_tjJYeBcIuwT3; passport_csrf_token=8cf6ac8bd2b6e4364fccb78106ced4ff; passport_csrf_token_default=8cf6ac8bd2b6e4364fccb78106ced4ff; douyin.com; xgplayer_user_id=554907076932; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtY2xpZW50LWNlcnQiOiItLS0tLUJFR0lOIENFUlRJRklDQVRFLS0tLS1cbk1JSUNGRENDQWJxZ0F3SUJBZ0lVUGhiQ3BJVGF1TzloNVk1U0YwZWZHOGhWUWNZd0NnWUlLb1pJemowRUF3SXdcbk1URUxNQWtHQTFVRUJoTUNRMDR4SWpBZ0JnTlZCQU1NR1hScFkydGxkRjluZFdGeVpGOWpZVjlsWTJSellWOHlcbk5UWXdIaGNOTWpNd01qSTNNRGMxTWpBM1doY05Nek13TWpJM01UVTFNakEzV2pBbk1Rc3dDUVlEVlFRR0V3SkRcblRqRVlNQllHQTFVRUF3d1BZbVJmZEdsamEyVjBYMmQxWVhKa01Ga3dFd1lIS29aSXpqMENBUVlJS29aSXpqMERcbkFRY0RRZ0FFOExXNHlqeWcxc1E4Zis5L2wwVFRkM3lqbk5YMS9ycFFURXJMV0tnNUxQK1hZcXNTY3YyRDFJVUxcbjBOM1V3aEtPNWdBcVRkZzUwL250alV1Z2YvbWlDNk9CdVRDQnRqQU9CZ05WSFE4QkFmOEVCQU1DQmFBd01RWURcblZSMGxCQ293S0FZSUt3WUJCUVVIQXdFR0NDc0dBUVVGQndNQ0JnZ3JCZ0VGQlFjREF3WUlLd1lCQlFVSEF3UXdcbktRWURWUjBPQkNJRUlFYStjQ04yZ1FrL1VyQmZRNy9rbEpmNHlQbklSQnJUWk5uSU1NOE01RHlUTUNzR0ExVWRcbkl3UWtNQ0tBSURLbForcU9aRWdTamN4T1RVQjdjeFNiUjIxVGVxVFJnTmQ1bEpkN0lrZURNQmtHQTFVZEVRUVNcbk1CQ0NEbmQzZHk1a2IzVjVhVzR1WTI5dE1Bb0dDQ3FHU000OUJBTUNBMGdBTUVVQ0lRREI4YkxITDd3bUF4MFBcbnlvcG0zSUI2eUY1Tk1nK3hyeXNWVWMzT3NHTXRrZ0lnS0I5M2pEMXE4alh4d2VXYkRoRkJCODEzUUpQVm5oNVJcblZmNUpFYW9FT2M4PVxuLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLVxuIn0=; __live_version__=%221.1.0.9614%22; live_can_add_dy_2_desktop=%220%22; odin_tt=7072e5b63091ed24d1b31fdd3b65c7bb14249da8935bf397abbd352f3ec4adf6063f3ab2de403a52c74a7d02af4579cba443fd6c88b135e43670e79a5a5b47c14a41240ebcbd06139206ae9660fcbc7c; download_guide=%223%2F20230525%22; pwa2=%223%7C0%22; __ac_nonce=0647018c8008a04e64c62; __ac_signature=_02B4Z6wo00f01PNPW0AAAIDAc02hAOw4Ijjzb1.AAFipAErAgGPj64Vo9S8xV.TsAaB-8WJ3n6G8ctyQDNaLE8FG75mx64-HfdjXtYIrd6XHQFB2qOOn8PepD0CwbQdnijlTTG0P1g9bCuZYf8; strategyABtestKey=%221685067979.346%22; VIDEO_FILTER_MEMO_SELECT=%7B%22expireTime%22%3A1685672779370%2C%22type%22%3A1%7D; SEARCH_RESULT_LIST_TYPE=%22single%22; msToken=vhghsnufSDS6gNGao9O4_nZMTHoP2IT7KkS1t8zdKd3e8HCBzqSULT3qdPNmMv6W6OIAMsV--DLsrw0i2Mut9BcaQkk01uzXcCAaPXBH3RAsMhwS_hap_A==; home_can_add_dy_2_desktop=%221%22; msToken=9ruIJIoDx_cTQNJEkIHuWZtvOrSKRSw2PuSV8NobUdvWdhDiYSxG0FAuAmqrRDxfIyY6qNVTxs2g9cmCqbRgLurgqdsfPHg33Nf3NYdJadmlKsy8TOyomA==; tt_scid=KEO5rgMDmiIjeGWYAOqMoFsjS56kU17p6-owJmGf.XdkPZfOZhWgSNCaZVibtX0k8996',
        'referer': 'https://www.douyin.com/search/%E6%96%97%E7%A0%B4%E8%8B%8D%E7%A9%B9%E6%9C%89%E5%A3%B0%E5%B0%8F%E8%AF%B4?aid=4cd4491d-b8bb-4002-97cf-5f2c88bcae0f&publish_time=0&sort_type=0&source=normal_search&type=general',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
    }

    response = requests.request("GET", url, headers=headers)

    print(response.text)


if __name__ == '__main__':
    sear()
