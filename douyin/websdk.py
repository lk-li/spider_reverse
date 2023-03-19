import ctypes
import hashlib
import math
import random
import time


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
    s0 = md5_string(data)
    s1 = md5_string(params)
    s0_1 = md5_arry(decode(s0))
    s1_1 = md5_arry(decode(s1))
    d = encodeWithKey([0, 1, 12], user_agent)
    ua_str = b64_encode(d)
    ua_str_md5 = md5_string(ua_str)
    timestamp = int(time.time())
    canvas = 536919696
    salt_list = [timestamp, canvas, 64, 0, 1, 12, decode(s1_1)[-2], decode(s1_1)[-1], decode(s0_1)[-2],
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


def random_k(unm):
    y = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    z = []
    for i in range(unm):
        z.append(random.choice(y))

    return ''.join(z)


def random_32():
    reut = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
    hex_t = '0123456789abcdef'
    reut_li = []
    for i in reut:
        if i == 'x':
            reut_li.append(random.choice(hex_t))
        else:
            reut_li.append(i)
    return ''.join(reut_li)


def int32(i):
    return int(0xFFFFFFFF & i)


def fixk(k):
    if len(k) < 4:
        k += '\0' * (4 - len(k))
    return k


def mx(sum, y, z, p, e, k):
    tmp = (((z >> 5) ^ (y << 2)) + ((y >> 3) ^ (z << 4)))
    tmp ^= ((sum ^ y) + (k[p & 3 ^ e] ^ z))
    return tmp


def toBinaryString(v, includeLength):
    length = len(v)
    n = length << 2
    if includeLength:
        m = v[length - 1]
        n -= 4
        if m < n - 3 or m > n:
            return None
        n = m
    for i in range(length):
        v[i] = chr(v[i] & 0xFF) + chr((v[i] >> 8) & 0xFF) + chr((v[i] >> 16) & 0xFF) + chr((v[i] >> 24) & 0xFF)
    result = ''.join(v)
    if includeLength:
        return result[:n]
    return result


def encryptUint32Array(v, k):
    DELTA = 2654435769
    length = len(v)
    n = length - 1
    y, z, sum, e, p, q = 0, 0, 0, 0, 0, 0
    z = v[n]
    sum = 0
    for q in range((6 + 52 // length) | 0, 0, -1):
        sum = int32(sum + DELTA)
        e = sum >> 2 & 3
        for p in range(n):
            y = v[p + 1]
            z = v[p] = int32(v[p] + mx(sum, y, z, p, e, k))
        y = v[0]
        z = v[n] = int32(v[n] + mx(sum, y, z, n, e, k))
    return v


def decryptUint32Array(v, k):
    DELTA = 2654435769
    length = len(v)
    n = length - 1
    y, z, sum, e, p, q = 0, 0, int32(0), 0, 0, 0
    y = v[0]
    q = math.floor(6 + 52 / length)
    sum = int32(q * DELTA)
    while sum != 0:
        e = int32(sum >> 2 & 3)
        p = n
        while p > 0:
            z = v[p - 1]
            y = v[p] = int32(v[p] - mx(sum, y, z, p, e, k))
            p -= 1
        z = v[n]
        y = v[0] = int32(v[0] - mx(sum, y, z, 0, e, k))
        sum = int32(sum - DELTA)
    return v


def utf8DecodeShortString(bs, n):
    charCodes = []
    i = 0
    off = 0
    len_ = len(bs)
    while i < n and off < len_:
        unit = ord(bs[off])
        off += 1
        if unit < 0x80:
            charCodes.append(unit)
        elif 0xc2 <= unit < 0xe0 and off < len_:
            charCodes.append(((unit & 0x1F) << 6) | (ord(bs[off]) & 0x3F))
            off += 1
        elif 0xe0 <= unit < 0xf0 and off + 1 < len_:
            charCodes.append(((unit & 0x0F) << 12) |
                             ((ord(bs[off]) & 0x3F) << 6) |
                             (ord(bs[off + 1]) & 0x3F))
            off += 2
        elif 0xf0 <= unit < 0xf8 and off + 2 < len_:
            rune = (((unit & 0x07) << 18) |
                    ((ord(bs[off]) & 0x3F) << 12) |
                    ((ord(bs[off + 1]) & 0x3F) << 6) |
                    (ord(bs[off + 2]) & 0x3F)) - 0x10000
            if 0 <= rune <= 0xFFFFF:
                charCodes.append(((rune >> 10) & 0x03FF) | 0xD800)
                charCodes.append((rune & 0x03FF) | 0xDC00)
            else:
                raise ValueError('Character outside valid Unicode range: '
                                 + hex(rune))
            off += 3
        else:
            raise ValueError('Bad UTF-8 encoding 0x' + hex(unit))
        i += 1
    return ''.join(chr(code) for code in charCodes)


def utf8DecodeLongString(bs, n):
    buf = []
    char_codes = [0] * 0x8000
    i = off = 0
    len_bs = len(bs)
    while i < n and off < len_bs:
        unit = ord(bs[off])
        off += 1
        divide = unit >> 4
        if divide < 8:
            char_codes[i] = unit
        elif divide == 12 or divide == 13:
            if off < len_bs:
                char_codes[i] = ((unit & 0x1F) << 6) | (ord(bs[off]) & 0x3F)
                off += 1
            else:
                raise ValueError('Unfinished UTF-8 octet sequence')
        elif divide == 14:
            if off + 1 < len_bs:
                char_codes[i] = ((unit & 0x0F) << 12) | ((ord(bs[off]) & 0x3F) << 6) | (ord(bs[off + 1]) & 0x3F)
                off += 2
            else:
                raise ValueError('Unfinished UTF-8 octet sequence')
        elif divide == 15:
            if off + 2 < len_bs:
                rune = (((unit & 0x07) << 18) | ((ord(bs[off]) & 0x3F) << 12) | ((ord(bs[off + 1]) & 0x3F) << 6) | (
                            ord(bs[off + 2]) & 0x3F)) - 0x10000
                off += 3
                if 0 <= rune <= 0xFFFFF:
                    char_codes[i] = (((rune >> 10) & 0x03FF) | 0xD800)
                    i += 1
                    char_codes[i] = ((rune & 0x03FF) | 0xDC00)
                else:
                    raise ValueError('Character outside valid Unicode range: 0x' + hex(rune))
            else:
                raise ValueError('Unfinished UTF-8 octet sequence')
        else:
            raise ValueError('Bad UTF-8 encoding 0x' + hex(unit))
        if i >= 0x7FFF - 1:
            size = i + 1
            char_codes = char_codes[:size]
            buf.append(''.join([chr(c) for c in char_codes]))
            n -= size
            i = -1
        i += 1
    if i > 0:
        char_codes = char_codes[:i]
        buf.append(''.join([chr(c) for c in char_codes]))
    return ''.join(buf)


def utf8Decode(bs, n=None):
    if n is None or n < 0:
        n = len(bs)
    if n == 0:
        return ''
    if all(0 <= ord(c) <= 127 for c in bs) or not all(0 <= ord(c) <= 255 for c in bs):
        if n == len(bs):
            return bs
        return bs[:n]
    return utf8DecodeShortString(bs, n) if n < 0x7FFF else utf8DecodeLongString(bs, n)


def decrypt(data, key):
    if data is None or len(data) == 0:
        return data

    key = utf8Encode(key)

    return utf8Decode(
        toBinaryString(decryptUint32Array(toUint32Array(data, False), fixk(toUint32Array(key, False))), True))


def encrypt(data, key):
    if (data is None) or (len(data) == 0):
        return data
    data = utf8Encode(data)
    key = utf8Encode(key)
    return toBinaryString(
        encryptUint32Array(
            toUint32Array(data, True),
            fixk(toUint32Array(key, False))
        ),
        False
    )


def strData(x, y):
    b = [i for i in range(256)]
    c = 0
    d = ""
    for i in range(256):
        c = (c + b[i] + ord(x[i % len(x)])) % 256
        a = b[i]
        b[i] = b[c]
        b[c] = a
    e = 0
    c = 0
    for i in range(len(y)):
        e = (e + 1) % 256
        c = (c + b[e]) % 256
        a = b[e]
        b[e] = b[c]
        b[c] = a
        d += chr(ord(y[i]) ^ b[(b[e] + b[c]) % 256])
    return d


def bytes_to_string(a, b=None, c=None):
    d = 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe='
    e = '='
    if c:
        e = ''
    if b:
        d = b
    g = ''
    h = 0
    while len(a) >= h + 3:
        f = 0
        f = f | ord(a[h]) << 16
        f = f | ord(a[h + 1]) << 8
        f = f | ord(a[h + 2]) << 0
        g += d[(16515072 & f) >> 18]
        g += d[(258048 & f) >> 12]
        g += d[(4032 & f) >> 6]
        g += d[63 & f]
        h += 3
    if len(a) - h > 0:
        f = (255 & ord(a[h])) << 16 | (ord(a[h + 1]) << 8 if len(a) > h + 1 else 0)
        g += d[(16515072 & f) >> 18]
        g += d[(258048 & f) >> 12]
        g += d[(4032 & f) >> 6] if len(a) > h + 1 else e
        g += e
    return g


def bool_0_1(x):
    if x is None:
        return ''
    elif isinstance(x, bool):
        return '1' if x else '0'
    else:
        return x


def fromCharCode(value_typ):
    unc = ''
    for c in value_typ:
        unc += chr(c & 0xffff)

    return unc


def utf8Encode(str):
    if all(ord(c) < 128 for c in str):
        return str
    buf = []
    n = len(str)
    i = 0
    while i < n:
        codeUnit = ord(str[i])
        if codeUnit < 0x80:
            buf.append(str[i])
            i += 1
        elif codeUnit < 0x800:
            buf.append(chr(0xC0 | (codeUnit >> 6)))
            buf.append(chr(0x80 | (codeUnit & 0x3F)))
            i += 1
        elif codeUnit < 0xD800 or codeUnit > 0xDFFF:
            buf.append(chr(0xE0 | (codeUnit >> 12)))
            buf.append(chr(0x80 | ((codeUnit >> 6) & 0x3F)))
            buf.append(chr(0x80 | (codeUnit & 0x3F)))
            i += 1
        else:
            if i + 1 < n:
                nextCodeUnit = ord(str[i + 1])
                if codeUnit < 0xDC00 and 0xDC00 <= nextCodeUnit and nextCodeUnit <= 0xDFFF:
                    rune = (((codeUnit & 0x03FF) << 10) | (nextCodeUnit & 0x03FF)) + 0x010000
                    buf.append(chr(0xF0 | ((rune >> 18) & 0x3F)))
                    buf.append(chr(0x80 | ((rune >> 12) & 0x3F)))
                    buf.append(chr(0x80 | ((rune >> 6) & 0x3F)))
                    buf.append(chr(0x80 | (rune & 0x3F)))
                    i += 2
                    continue
            raise ValueError('Malformed string')
    return ''.join(buf)


def toUint32Array(bs, includeLength):
    length = len(bs)
    n = length >> 2
    if (length & 3) != 0:
        n += 1
    if includeLength:
        v = [0] * (n + 1)
        v[n] = length
    else:
        v = [0] * n
    for i in range(length):
        v[i >> 2] |= ord(bs[i]) << ((i & 3) << 3)
    return v


def bytes2string_1(a, b="", c=False):
    d = 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe'
    e = ''
    if c:
        e = ''
    if b:
        d = b
    g = ''
    h = 0
    while len(a) >= h + 3:
        f = 0
        f |= ord(a[h]) << 16
        f |= ord(a[h + 1]) << 8
        f |= ord(a[h + 2]) << 0
        g += d[(16515072 & f) >> 18]
        g += d[(258048 & f) >> 12]
        g += d[(4032 & f) >> 6]
        g += d[63 & f]
        h += 3
    if len(a) - h > 0:
        f = (255 & ord(a[h])) << 16
        if len(a) > h + 1:
            f |= (255 & ord(a[h + 1])) << 8
        g += d[(16515072 & f) >> 18]
        g += d[(258048 & f) >> 12]
        if len(a) > h + 1:
            g += d[(4032 & f) >> 6]
        else:
            g += e
        g += e
    return g


def douyin_xxbg_q_encrypt(obj, obj_2=None):
    if obj_2:
        j = 0
        for i in range(len(obj)):
            if obj[j]['p']:
                obj[j]['r'] = obj_2[j]
                j += 1
    temp_text = ''
    for arg in obj:
        temp_text += bool_0_1(arg['r']) + '^^'
    temp_text += str(int(time.time() * 1000))
    salt = random_32()
    temp_num = math.floor(ord(salt[3]) / 8) + ord(salt[3]) % 8
    key = salt[4:4 + temp_num]
    entrypt_byte = encrypt(temp_text, key) + salt
    res = bytes2string_1(entrypt_byte, 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe==')
    return res


def tiktok_mssdk_encode(value):
    b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-."
    k = random_k(4)
    q = encrypt(value, k)
    result = k + bytes2string_1(q, b64)
    return result


def encrypt_strData(text):
    key_num = random.randint(200, 256)
    temp = fromCharCode([65, key_num]) + strData(fromCharCode([key_num]), text)
    return bytes_to_string(temp)


if __name__ == '__main__':
    # DFSzswVYQDaDIacCtchfme9WX7rh
    # print(get_x_bogus(
    #     "msToken=",
    #     '{"keyword_list":["口红"],"start_date":"20220529","end_date":"20220629","app_name":"aweme"}',
    #     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
    # ))
    print(encrypt_strData(
        '{"tokenList":[],"navigator":{"appCodeName":"Mozilla","appMinorVersion":"undefined","appName":"Netscape","appVersion":"5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/102.0.0.0Safari/537.36","buildID":"undefined","doNotTrack":"null","msDoNotTrack":"undefined","oscpu":"undefined","platform":"Win32","product":"Gecko","productSub":"20030107","cpuClass":"undefined","vendor":"GoogleInc.","vendorSub":"","deviceMemory":"8","language":"zh-CN","systemLanguage":"undefined","userLanguage":"undefined","webdriver":"false","cookieEnabled":1,"vibrate":3,"credentials":99,"storage":99,"requestMediaKeySystemAccess":3,"bluetooth":99,"hardwareConcurrency":4,"maxTouchPoints":-1,"languages":"zh-CN","touchEvent":2,"touchstart":2},"wID":{"load":0,"nativeLength":33,"jsFontsList":"17f","syntaxError":"Failedtoconstruct WebSocket:TheURL CreateWebSocket isinvalid.","timestamp":"1679197668094","timezone":8,"magic":3,"canvas":"536919696","wProps":374198,"dProps":2,"jsv":"1.7","browserType":16,"iframe":2,"aid":6383,"msgType":1,"privacyMode":0,"aidList":[6383,6383,6383],"index":1},"window":{"Image":3,"isSecureContext":1,"ActiveXObject":4,"toolbar":99,"locationbar":99,"external":99,"mozRTCPeerConnection":4,"postMessage":3,"webkitRequestAnimationFrame":3,"BluetoothUUID":3,"netscape":4,"localStorage":99,"sessionStorage":99,"indexDB":4,"devicePixelRatio":1,"location":"https://trendinsight.oceanengine.com/api/open/index/get_multi_keyword_hot_trend?msToken="},"webgl":{"antialias":1,"blueBits":8,"depthBits":24,"greenBits":8,"maxAnisotropy":16,"maxCombinedTextureImageUnits":32,"maxCubeMapTextureSize":16384,"maxFragmentUniformVectors":1024,"maxRenderbufferSize":16384,"maxTextureImageUnits":16,"maxTextureSize":16384,"maxVaryingVectors":30,"maxVertexAttribs":16,"maxVertexTextureImageUnits":16,"maxVertexUniformVectors":4096,"shadingLanguageVersion":"WebGLGLSLES1.0(OpenGLESGLSLES1.0Chromium)","stencilBits":0,"version":"WebGL1.0(OpenGLES2.0Chromium)","vendor":"GoogleInc.(Intel)","renderer":"ANGLE(Intel,Intel(R)HDGraphics620Direct3D11vs_5_0ps_5_0,D3D11)"},"document":{"characterSet":"UTF-8","compatMode":"CSS1Compat","documentMode":"undefined","layers":4,"all":12,"images":99},"screen":{"innerWidth":1508,"innerHeight":709,"outerWidth":1357,"outerHeight":758,"screenX":0,"screenY":0,"pageXOffset":0,"pageYOffset":0,"availWidth":1468,"availHeight":783,"sizeWidth":1311,"sizeHeight":759,"clientWidth":1277,"clientHeight":706,"colorDepth":24,"pixelDepth":24},"plugins":{"plugin":["internal-pdf-viewer|application/pdf|pdf","internal-pdf-viewer|text/pdf|pdf","internal-pdf-viewer|application/pdf|pdf","internal-pdf-viewer|text/pdf|pdf","internal-pdf-viewer|application/pdf|pdf","internal-pdf-viewer|text/pdf|pdf","internal-pdf-viewer|application/pdf|pdf","internal-pdf-viewer|text/pdf|pdf","internal-pdf-viewer|application/pdf|pdf","internal-pdf-viewer|text/pdf|pdf"],"pv":"0"},"custom":{}}'))
    # fUiXawkBHS6PDDTC3l6o5CzLUiALifl9VNTwH7gqiueX3q3nCkQWcUeaZlInTqEidmlFgxCFqY7iftv1CWeErb31XC5n9BzYgtWs85vooqIZ4ViYvxW/RISstu7DcsMgcgJHsuhRegUldbY56T4kN/N0vOESiH1Y5fN9DRVeERRODxPjQqctZUs63DcGM2w0oP64LjSffvsr39tBqivWty+fSDSVN0mscqvjxxOkp+aMjwrI6mhMldTpJIiAeHfB/d4NYjLH1VgMkGEwbNfuLIXTgv2qAPL4zSLA0Z8eBR5prQrAUQEzLuWlRfCFLf3grR4oxG8VCZzEKdZSSJg3EqO8ZM4oXGU6y8H+zID+cqKoGe2/iC4J/ZZejkQEuC8Hs95umhb4PTwSy0IIePE3XF+tvj1hXxr27f1YsRzhDcJvSlppH6Qf+O5QMJLFUuMVLwwEGMjIH/tVgGKPKwF0mTqCtRDj1L8WTbbBDFIoV7X8gYcIH+xWU9mk8ASqzJyfCOGfAZmqxstQAvQ5iwCPVlpyvZHJYLJpcPK89/nYOpFHrG+vX0y1xtZkhaFPe2ENn4nlmv/G4QbfcquugSpUh4PZTOuWTqDHnautFdchaGGF+gxI44bCHhD2qZGTaatF2RlnT6HN5MqMLKQ5+YfRsBvxv1cA+W6c1isqYCy9kWIjOjISTkrl4QEt0VqKcvkR8v3mgNEBBCJZoehBsNCp4zjwPv71RiNs5tbp4Q2hDrFSYZ8IbLIHdKGooqeYv3RzLTgoW2jyQt8turhWunEcKTjchiYqeCqHnI1oPqVB3bh9FYfMj3lGuY+GxpeHkkEBfReJL5IgkTC2+VqTuy/2mv2Qxmc9AqBSayRCm2Tt+n9X3qUuG6xQEqpLzkSdWe7zcDGM8aWgaQQYv5mNBmgjm3jAH1BfRSwB2w3ODPJGLZ+bxG5PaewoSRcauvqnwWLpwXMuyfdHMe8KvJRc6VV8gXCDPnDSGTirZ4HWD6EwCctdT5IfBED0vYhTndrKQ7WY0KNvCpoEx2kU1xv4MMwpZMawouCmV+t2Zf6jfWduAoDut3X/bzIjXjo31xLoR8S0YkulxWzRAWlFqAa2LeccDT/Re1xS+eGgek56DCFhKuJzCjV4CZ89w2ebSBayUurY3C2dFLiwUvJct2ko281m+O+2mYRYfA7yjx4SDYyCtU/xEjw+8N9QFrwy5qY2WT7mTVm2HDXXLfl71H38yOmuon4rfWaEA8G9GrWGA/PQzeD4FEPK0FmZ3q8w0t/4Zt1K035g3qlwgXp2UKihK0vt8MY59JuNS5FaaAPyqJJ+mRRkTLCcVzGe1O7YxJCdCtj0kdqycNaopSDoajTZmJDnattPCYteCBbLGV7vIClszpyZgeLr0AS7hcm3qJyK6ZEwtzAMf742xLN6Hu5ZKZlprlCyZf+ieoZnnuWyYJaLhg9/cz8+lvmsMLquNWVBAnpxYTGxFULIkGxiuAaUGfGSC7hDu0W6Z8ruN16hX9yxvnaY2+4sGZOro+Jm4UVfZkZ5DcTAmuPOjT/Z+N31kwVJUuVf8gzWYA0/499rKIaf5CyxB57jSPz2AJRKFZSixnYBJBvucnBKamaqsQilGkFGMYxHN1v+/6eow3aFrKsqQ1maxl4fecR5mAPGYtnVxduB17p1vTZuJgLi3xJoq9mpoT3A/5ypKmRbUoEqvWzaydgaGlnSxZdsoKDJrPeVa8iGInlSgl5YZ2BFY06jldo4kcn6LX80uYJWgN+35iyc212a3tzJs/RLuLRkN8mvSBl1TUpkS/6UdX3bryjIdRY+uDFInBFuvYzDdQIPp4YHINHEgTHgZFfBBDErxZ931kIvDZWs4VbioGfwkBYNoN2lF3/yQ9hISTd2uqP4z2/MTRwR2fWM/qW+WkVwz5ztDPRQGT90239YzdKgOoIZAFM6/bmZJtMFbhJwQMBj40yjxKHdyjtf4v6pp7cGGScZg6anXlf97EgUA8Sv9+oTtWT3msN3bcAxr96L2rgakI6G1lhsaVY775qWyZlx8mdThy56sh6g3FHmN4uJeB6/moGeMXo1ZNMhxi2j/VSoCt5ut2ArcM9SgH6SB8ks9WuMOxJAvwwiUBHz28XEonnrdZYbcMf8myaCe+CYsTuzghhaWkvhrXIEJzfrQQ7UHmU2WRuHJtd4ZOhP/SpkUKjGFdPf0PX47azox+5QCaumbVAayfWStfQ5UtMt5Se+uPoc1SSSlRcaHAh1N52y7CkZdLgnxZ6FzsI4MhQ4MrcIG6CxuZQyiD6I/TUy9ka7XNs7s0AdF06w7ErC50iG7gzaZMa9gu4Qv6bQHHciyaLLk0+lsT/EKjbEZps1K3qq5TbpMkgk3Ih1sbkVjPKgDNk72bGggdhhB6lShYPWaCFbD0ficPdiqDhS0Iu2KejrZdUKKRfNxSnUPzcOcDSC806RxNW1UNt5D9ngIRbPsxK9TXWrtMPNfSq8XT2ievQONeAnsV/gG6qlJcIKoRYr70Hh083knjW6xSXVg5k39acn9LQTm5lsScW7TKux+iwc3ocSPwcX7WWf4McNY3YA6raNbeY7QzutCDVAVSY6oQvnMz+zaPZAYM0hO37oZOXWjpin7TImRr+KsrXPE6NaHosnsPrIpOwqYcSeYdFn4GRUNqQxa7qoGnw+Dhl3inRgX+wXt9HK/L0YNpApVyUr1b21c1HR9EtgpbbZXLNyo/UaDiJIk5mtEQGtiPcFmn7NwTMy7LJODKSPSFmzcwnUALHehQm1uORKUnohfgrAPI6mr0D9uILioE0KVtsCW0ror3k2yNDOwVJCy6msj9TYWRotwK4Zu7F4vd5CQ/vN5vKKYVRjqbXazvECft0vbFo/qVdm6wCzIICz1LctM/JeiD74MPqekK4cTv9SyI7+pZ5zVuuZTjpS8eGvZMTWIdHMEa47GI6ULoCv0tzzEkyLqhGfIZojsk61IRHmIsFdRTY4tzyr73muIcHybcswnZXejpACtXZGS8RzT0VWKBoqIuWGxDYFT3czFRwciz8lf3PokS8pFZ2EziStvMndz1PO88+O+Cfjz2/TDIJN9KsIYcenKLUk6bqljq6+zwHqkoqsbcGBzjec/1keTzjdFuesNfiAW9Iwhc/JmpP8EVhfRPjG4RrVExwE4FoIJH8gkoLE4TI2KFQbR+YpwfSmjn0QnJbpemvRJLGJBSqi6U2hnV6o/F+xD1Mvp1bPeInq4U0/d4fQYiUqRyZYShOb+XyJxh1ODQnrhVveMQXxdeBOCxJfUvyY0/qCcW/kdnAy7YKiGn6YU1oBEdcP0Z9sYXSAxE7HoOlykR+lvEvLXPHSW4D3DpvPpBgGcyJAO4jmEhTTYjMk1L5e7JLhrl2r4/ZhGVEHOR6nkkaufXHHliYHKpg5HeSHuakzopS5wTQoLB2+X9KFIM2aGX9ZI4oMqGzFAmasCz6ESh5JIsXy8ZmMVnSgY8HbNxxGwGMkV4cX6fKH+86Pe7MaaK2P1+2cZ3FnFgH5qYB/Ip1lqFgfUsgussqkYZdOVvmL8xC+vHoAKWE0WkMFxgBXCjLnPs/El+LwqPYlGFeKofRUbhuhTv9EgmftShQx62oxgwzQNBMvSibCMZdTeDKWMFoaNpoe0S+U3na7+QEFGbsMdGuUUC3lGAfwrZ7sTaprGyDL3tiCnr9DQSABEEopvKMmCv4jgO91PjZskkCdkaNB+C7a5JMlQbw8CsQs6UZj4rLjK1p3Q8XdiTCExYn6qyMDou/XqaMG+icy5wCxkEAFXqi7vwy0z8kvAzxjwERCLX/lZgsv2N2bysA+k6YpXf7uP4/XNohaoQEdFX5MlHjfBTOB0ZkvbJ8j6D==
