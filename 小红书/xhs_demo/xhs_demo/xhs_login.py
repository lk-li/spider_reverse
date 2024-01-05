import execjs
import requests
import time
import json
import base64
import random
import string
import hashlib


class CookieA1:
    def random_string(self, length):
        return ''.join(random.sample(string.ascii_letters + string.digits, length))

    def crc32(self, data):
        table = []
        for num in range(256):
            temp = num
            for _ in range(8):
                temp = (temp >> 1) ^ 0XEDB88320 if temp & 1 else temp >> 1
                table.append(temp)
        result = 0xFFFFFFFF
        for ch in data:
            result = (result >> 8) ^ table[(result ^ ord(ch)) & 0xFF]
            return result ^ 0xFFFFFFFF

    def get_a1(self):
        timestamp_hex = str(hex(int(time.time()))[2:])
        random_str = self.random_string(30)
        I = timestamp_hex + random_str + "00000"
        N = self.crc32(I)
        M = (I + str(N))[:52]
        md = hashlib.md5()
        md.update(M.encode('utf-8'))
        return M, md.hexdigest()


def Des_encrypt(key, key_46_base64):
    arr64_1 = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244,
               16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540,
               16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216,
               16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752,
               16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756]
    arr64_2 = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616,
               -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608,
               -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800,
               -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304,
               32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304,
               1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800,
               -2147483648, -2146435040, -2146402272, 1081344]
    arr64_3 = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072,
               134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592,
               134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520,
               131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808,
               134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520,
               134348800, 131592, 8, 134348808, 131584]
    arr64_4 = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736,
               8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928,
               8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801,
               8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801,
               128, 8388608, 8192, 8396928]
    arr64_5 = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688,
               1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080,
               1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256,
               524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688,
               1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256,
               1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112,
               34078976, 1073742080]
    arr64_6 = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304,
               536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16,
               541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16,
               541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400,
               536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216,
               4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312]
    arr64_7 = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2,
               67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154,
               69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914,
               67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064,
               2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866,
               67110912, 2048, 2097154]
    arr64_8 = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760,
               266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664,
               268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096,
               64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144,
               268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240,
               266240, 4160, 4160, 262208, 268435456, 268701696]

    arr32 = key
    arr64_group_1 = [arr64_2, arr64_4, arr64_6, arr64_8]
    arr64_group_2 = [arr64_1, arr64_3, arr64_5, arr64_7]

    def int32(value):
        return value & 0xFFFFFFFF

    def int32_signed(value):
        value = int32(value)
        if value & (1 << (32 - 1)) != 0:
            value = value - (1 << 32)
        return value

    def merge_integers(arr):
        result = 0
        for i in range(len(arr)):
            result = result | (arr[i] << (24 - (i % 4) * 8))
        return result

    def calc_32_arr(arr64_group, init_value, last_value, ccc=True):
        calc_32_4 = init_value >> 24
        calc_32_5 = calc_32_4 & 63
        calc_32_6 = arr64_group[0][calc_32_5]
        calc_32_6_2 = last_value | calc_32_6
        calc_32_7 = init_value >> 16
        calc_32_8 = calc_32_7 & 63
        calc_32_9 = arr64_group[1][calc_32_8]
        if ccc:
            calc_32_10 = calc_32_6 | calc_32_9
        else:
            calc_32_10 = calc_32_6_2 | calc_32_9
        calc_32_11 = init_value >> 8
        calc_32_12 = calc_32_11 & 63
        calc_32_13 = arr64_group[2][calc_32_12]
        calc_32_14 = calc_32_10 | calc_32_13
        calc_32_15 = init_value & 63
        calc_32_16 = arr64_group[3][calc_32_15]
        calc_32_17 = calc_32_14 | calc_32_16
        return calc_32_17

    def get_temp_res(init_value_list, exist_value, operation_number):
        def int32(value):
            return value & 0xFFFFFFFF

        def int32_signed(value):
            value = int32(value)
            if value & (1 << (32 - 1)) != 0:
                value = value - (1 << 32)
            return value

        temp_3 = int32(init_value_list[0]) >> operation_number
        temp_4 = temp_3 ^ int32(init_value_list[1])
        temp_5 = temp_4 & exist_value
        temp_6 = int32(init_value_list[1]) ^ temp_5
        temp_7 = int32((temp_5 << operation_number) & 0xFFFFFFFF)
        temp_8 = int32(init_value_list[0]) ^ temp_7

        return [int32_signed(temp_8), temp_6]

    def arr_8_generate(x):
        arr = []
        arr.append((x >> 24) & 0xff)
        arr.append((x >> 16) & 0xff)
        arr.append((x >> 8) & 0xff)
        arr.append(x & 0xff)
        return arr

    def calc_64(init_value_64, arr_32_index):
        init_value_64 = int32_signed(init_value_64)
        ccc_0 = init_value_64 ^ arr32[arr_32_index]
        # ccc_1 = (init_value_64 >> 4) | (init_value_64 << 28)
        ccc_1 = rotate(init_value_64, 'right', 4)
        ccc_2 = int32(ccc_1 ^ arr32[arr_32_index + 1])
        ccc_3 = calc_32_arr(arr64_group_1, ccc_0, ccc_0)
        ccc_4 = calc_32_arr(arr64_group_2, ccc_2, ccc_3, False)
        return int32_signed(ccc_4)

    def get_enc_arr(base_64_str):
        calc_arr = []
        for i in range(len(base_64_str)):
            calc_arr.append(ord(base_64_str[i]))
        return calc_arr

    def rotate(num, direction='left', shift_bits=1):
        num = int32(num)  # Convert to unsigned int

        if direction == 'left':
            result = int32(((num << shift_bits) | (num >> (32 - shift_bits))) & 0xFFFFFFFF)
        elif direction == 'right':
            result = int32(((num >> shift_bits) | (num << (32 - shift_bits))) & 0xFFFFFFFF)
        else:
            raise ValueError("Invalid direction: choose 'left' or 'right'")

        return int32_signed(result)

    def calc(init_arr):
        op_4 = get_temp_res(init_arr, 252645135, 4)
        op_16 = list(reversed(get_temp_res(op_4, 65535, 16)))
        op_2 = get_temp_res(op_16, 858993459, 2)
        op_8 = list(reversed(get_temp_res(op_2, 16711935, 8)))
        op_1 = get_temp_res(op_8, 1431655765, 1)

        op_1_1 = rotate(op_1[0], 'left')
        op_1_2 = rotate(op_1[1], 'left')
        for i in range(0, 32, 2):
            if i % 4 == 2:
                value = calc_64(op_1_1, i)
                op_1_2 = op_1_2 ^ value
            else:
                value = calc_64(op_1_2, i)
                op_1_1 = op_1_1 ^ value
        res1 = rotate(op_1_1, 'right')
        res2 = rotate(op_1_2, 'right')
        res3 = list(reversed(get_temp_res([res2, res1], 1431655765, 1)))
        res4 = get_temp_res(res3, 16711935, 8)
        res5 = list(reversed(get_temp_res(res4, 858993459, 2)))
        res6 = get_temp_res(res5, 65535, 16)
        res7 = get_temp_res(res6, 252645135, 4)
        return res7

    def string_to_hex(str):
        hex_str = ""
        for i in range(len(str)):
            char_code = format(ord(str[i]), 'x')
            hex_str += char_code.zfill(2)
        return hex_str

    def get_encrypt_str(enc_arr):
        encrypt_str = ""
        for i in range(0, len(enc_arr), 8):
            group = enc_arr[i:i + 4]
            group2 = enc_arr[i + 4:i + 8]
            init_arr = [merge_integers(group), merge_integers(group2)]
            calc_arr = calc(init_arr)
            new_8_arr = arr_8_generate(calc_arr[0]) + arr_8_generate(calc_arr[1])
            encrypt_str += ''.join([chr(i) for i in new_8_arr])

        return encrypt_str

    def des_encrypt_call(key_46_base64):
        enc_arr = get_enc_arr(key_46_base64)
        garbage_str = get_encrypt_str(enc_arr)
        result = string_to_hex(garbage_str)
        return result

    return des_encrypt_call(key_46_base64)


def get_profileData(zhiwen):
    key = [187567141, 875696391, 170266120, 876222754, 188089115, 1010309137, 187054378, 957950720, 758514978,
           941162813, 221382708, 990709537, 758848528, 688730163, 890444313, 722272792, 890962233, 252521496, 890843430,
           185009704, 874317360, 119997734, 907612693, 119932961, 841824786, 120993794, 839716879, 909248796, 439099654,
           372901635, 439091750, 1009915397]
    zhiwen_str = json.dumps(zhiwen, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
    key_46_base64 = base64.b64encode(zhiwen_str).decode('utf-8')
    return Des_encrypt(key, key_46_base64)


def get_xs(u, i, a1):
    key = [187050025, 472920585, 186915882, 876157969, 255199502, 806945584, 220596020, 958210835, 757275681, 940378667,
           489892883, 705504304, 354103316, 688857884, 890312192, 219096591, 622400037, 254088489, 907618332, 52759587,
           907877143, 53870614, 839463457, 389417746, 975774727, 372382245, 437136414, 909246726, 168694017, 473575703,
           52697872, 1010440969]
    md5_str = "url=" + u
    if i is not None:
        md5_str += json.dumps(i, ensure_ascii=False, separators=(',', ':'))
    x1 = hashlib.md5(md5_str.encode('utf-8')).hexdigest()
    now_time = int(time.time() * 1000)
    info = 'x1=' + x1 + ';x2=0|0|0|1|0|0|1|0|0|0|1|0|0|0|0;x3=' + a1 + ';x4=' + str(now_time) + ';'
    key_46_base64 = base64.b64encode(info.encode('utf-8')).decode('utf-8')
    payload = Des_encrypt(key, key_46_base64)
    xs_base_str = {
        "signSvn": "51",
        "signType": "x1",
        "appId": "xhs-pc-web",
        "signVersion": "1",
        "payload": payload
    }
    xs = "XYW_" + base64.b64encode(
        json.dumps(xs_base_str, ensure_ascii=False, separators=(',', ':')).encode('utf-8')).decode('utf-8')
    return {"X-s": xs, "X-t": now_time}


session = requests.session()


def getParams(url):
    a1, k = CookieA1().get_a1()

    xst = get_xs(url, None, a1)
    xs = xst['X-s']
    xt = xst['X-t']
    xc = execjs.compile(open('xs-commen.js', 'r', encoding='utf8').read()).call('getCommon', a1, xs, xt)
    return a1, xs, xt, xc


def getSession(session_a1, session_xs, session_xt, session_xc, data):
    headers = {
        'authority': 'edith.xiaohongshu.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        'content-type': 'application/json;charset=UTF-8',
        'cookie': f'xsecappid=xhs-pc-web; a1={session_a1}; webId=ec087dcd0aacd4e32dd0f31cae76eace; gid=yYYiDfySy4kfyYYiDfyDS6E2jyf9ATV8M40JlDq0dVfi3628q2KvV0888q4j4jW8y4jS2j0y; webBuild=2.11.7; cache_feeds=[]; sec_poison_id=b8d8814f-548e-4220-bf6a-f0458e67f7e5',
        'origin': 'https://www.xiaohongshu.com',
        'pragma': 'no-cache',
        'referer': 'https://www.xiaohongshu.com/',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58',
        'x-b3-traceid': '2f70d30477fae727',
        'x-s': session_xs,
        'x-s-common': session_xc,
        'x-t': str(session_xt),
    }

    response = session.post('https://edith.xiaohongshu.com/api/sns/web/v1/login/code', headers=headers, data=data)

    return response


def get_yzm(phone):
    phone_url = '/api/sns/web/v1/login/send_code?phone=' + phone + '&zone=86'

    phone_a1, phone_xs, phone_xt, phone_xc = getParams(phone_url)

    phone_headers = {
        'authority': 'edith.xiaohongshu.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        'cookie': f'xsecappid=xhs-pc-web; web_session=030037a3a0af7737bd384fbdeb234a7a797738; a1={phone_a1}; webId=9f7054b4b731d5909287879d0b18ce4f; gid=yYYi2YD84fY8yYYi2WWf8CMSqKAvdiDIFy0kTqD2A6T0d8283DyA4S888q8KK82880d4fKY2; gid.sign=sOjBhYCQ9zSK96fNJaZvCTlJ3NA=; webBuild=2.11.7; websectiga=82e85efc5500b609ac1166aaf086ff8aa4261153a448ef0be5b17417e4512f28; sec_poison_id=99b27ae5-b7d6-4740-86bb-49b673df12c1',
        'origin': 'https://www.xiaohongshu.com',
        'pragma': 'no-cache',
        'referer': 'https://www.xiaohongshu.com/',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58',
        'x-b3-traceid': '31ff71930b4371d2',
        'x-s': phone_xs,
        'x-s-common': phone_xc,
        'x-t': str(phone_xt),
    }

    phone_params = (
        ('phone', phone),
        ('zone', '86'),
    )

    # response = session.get('https://edith.xiaohongshu.com/api/sns/web/v2/comment/page', headers=headers, params=params)
    response = session.get('https://edith.xiaohongshu.com/api/sns/web/v1/login/send_code', headers=phone_headers,
                           params=phone_params)

    print(response.json())


def get_session(phone):
    get_yzm(phone)
    verify_code = input('输入验证码：')
    verify_url = 'https://edith.xiaohongshu.com/api/sns/web/v1/login/check_code'
    verify_encrypt_url = f'/api/sns/web/v1/login/check_code?phone=' + phone + f'&zone=86&code={verify_code}'

    verify_a1, verify_xs, verify_xt, verify_xc = getParams(verify_encrypt_url)

    verify_headers = {
        'authority': 'edith.xiaohongshu.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'cache-control': 'no-cache',
        'cookie': f'xsecappid=xhs-pc-web; a1={verify_a1}; webId=ec087dcd0aacd4e32dd0f31cae76eace; gid=yYYiDfySy4kfyYYiDfyDS6E2jyf9ATV8M40JlDq0dVfi3628q2KvV0888q4j4jW8y4jS2j0y; gid.sign=SNR7H/7KOiybQ0KFLRSGffv5ocQ=; webBuild=2.11.7; acw_tc=a4c3aa9cf4901d24007b73178498fa597bb1a85c1368fb36310ad072bc9736bb; web_session=030037a3a9c79d37f88b9496e2234ab15f818b; websectiga=9730ffafd96f2d09dc024760e253af6ab1feb0002827740b95a255ddf6847fc8; sec_poison_id=7c5021c6-224c-47fb-8577-bed676ea1682',
        'origin': 'https://www.xiaohongshu.com',
        'pragma': 'no-cache',
        'referer': 'https://www.xiaohongshu.com/',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58',
        'x-b3-traceid': 'd39153312bd37657',
        'x-s': verify_xs,
        'x-s-common': verify_xc,
        'x-t': str(verify_xt),
    }

    verify_params = (
        ('phone', phone),
        ('zone', '86'),
        ('code', verify_code),
    )

    verify_res = session.get(verify_url, headers=verify_headers, params=verify_params)
    print(verify_res.json())
    if verify_res.json()['code'] != 0:
        return False

    mobile_token = verify_res.json()['data']['mobile_token']
    data = '{"mobile_token":"%s","zone":"86","phone":"%s"}' % (mobile_token, phone)
    session_url = '/api/sns/web/v1/login/code' + data

    session_a1, session_xs, session_xt, session_xc = getParams(session_url)
    result = getSession(session_a1, session_xs, session_xt, session_xc, data)

    return result.json()['data']['session']



if __name__ == '__main__':
   aaaa =  get_session("19173916455")
   print(aaaa)
