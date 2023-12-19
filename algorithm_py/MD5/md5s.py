import json
import math
import time


def magic_md5(message: str) -> str:
    h0 = 0x10325476
    h1 = 0x98badcfe
    h2 = 0xefcdab89
    h3 = 0x67452301
    R = (7, 12, 17, 22) * 4 + (5, 9, 14, 20) * 4 + \
        (4, 11, 16, 23) * 4 + (6, 10, 15, 21) * 4
    K = (0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee,
         0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501, 0x698098d8,
         0x8b44f7af, 0xffff5bb1, 0x895cd7be, 0x6b901122, 0xfd987193,
         0xa679438e, 0x49b40821, 0xf61e2562, 0xc040b340, 0x265e5a51,
         0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
         0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905,
         0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a, 0xfffa3942, 0x8771f681,
         0x6d9d6122, 0xfde5380c, 0xa4beea44, 0x4bdecfa9, 0xf6bb4b60,
         0xbebfbc70, 0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05,
         0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665, 0xf4292244,
         0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92,
         0xffeff47d, 0x85845dd1, 0x6fa87e4f, 0xfe2ce6e0, 0xa3014314,
         0x4e0811a1, 0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391)

    F = lambda x, y, z: ((x & y) | ((~x) & z))
    G = lambda x, y, z: ((x & z) | (y & (~z)))
    H = lambda x, y, z: (x ^ y ^ z)
    I = lambda x, y, z: (y ^ (x | (~z)))
    L = lambda x, n: ((x << n) | (x >> (32 - n))) & 0xffffffff
    W = lambda i4, i3, i2, i1: (i1 << 24) | (i2 << 16) | (i3 << 8) | i4
    reverse = lambda x: (x << 24) & 0xff000000 | (x << 8) & 0x00ff0000 | \
                        (x >> 8) & 0x0000ff00 | (x >> 24) & 0x000000ff
    ascii_list = list(map(lambda x: x, message.encode()))
    msg_length = len(ascii_list) * 8
    ascii_list.append(128)

    while (len(ascii_list) * 8 + 64) % 512 != 0:
        ascii_list.append(0)

    for i in range(8):
        ascii_list.append((msg_length >> (8 * i)) & 0xff)

    for i in range(len(ascii_list) // 64):
        a, b, c, d = h0, h1, h2, h3
        for j in range(64):
            if 0 <= j <= 15:
                f = F(b, c, d) & 0xffffffff
                g = j
            elif 16 <= j <= 31:
                f = G(b, c, d) & 0xffffffff
                g = ((5 * j) + 1) % 16
            elif 32 <= j <= 47:
                f = H(b, c, d) & 0xffffffff
                g = ((3 * j) + 5) % 16
            else:
                f = I(b, c, d) & 0xffffffff
                g = (7 * j) % 16
            aa, dd, cc = d, c, b
            s = i * 64 + g * 4
            w = W(ascii_list[s], ascii_list[s + 1], ascii_list[s + 2], ascii_list[s + 3])
            bb = (L((a + f + K[j] + w) & 0xffffffff, R[j]) + b) & 0xffffffff
            a, b, c, d = aa, bb, cc, dd

        h0 = (h0 + a) & 0xffffffff
        h1 = (h1 + b) & 0xffffffff
        h2 = (h2 + c) & 0xffffffff
        h3 = (h3 + d) & 0xffffffff
    h0, h1, h2, h3 = reverse(h0), reverse(h1), reverse(h2), reverse(h3)
    digest = (h0 << 96) | (h1 << 64) | (h2 << 32) | h3
    return hex(digest)[2:].rjust(32, '0')


def get_par():
    # 入参
    t = {
        "room_id": "nipuWse70C1_wJu1qYBpetpjqL1R4Srl",
        "monitorPlatform": 1,
        "monitorSessionID": "2f3dac36-3c2a-49e1-9f14-d095a562c989",
        "monitorDuration": 10649,
        "last": 0
    }
    # 获取当前时间的毫秒数
    current_time_milliseconds = int(round(time.time()))
    # 向下取整
    floored_time = math.floor(current_time_milliseconds)
    o = "1702638506"
    u = "a2cc7a2aed263c4a75a8929ea90c920e"
    a = floored_time
    c = json.dumps(t).replace(" ","")
    l = magic_md5(str(a) + u)
    d = magic_md5(c + l)
    return {"jsVer": o, "timestamp": a, "formDataStr": c, "formDataSign": d}


if __name__ == '__main__':
    zz = get_par()
    print(zz)
