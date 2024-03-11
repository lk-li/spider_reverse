import base64
import io
import requests
import json
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import hashlib

from PIL import Image

ak = "M7bcdh2k6uqtYV5miaRiI8m8x6LIaONq"
ext = "ih2lW9VV3PmxmO++x8wZgk9i1xGx9WH05J9hI74kTEVkpokzRQ8QxLB082MG2VoQUUT15llYBwsC+AaysNoPxpuKg0Hkpo4qMzBjXDEGhuQ="

session = requests.Session()
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "text/plain;charset=UTF-8",
    "Origin": "https://seccaptcha.baidu.com",
    "Pragma": "no-cache",
    "Referer": "https://seccaptcha.baidu.com/v1/webapi/verint/svcp.html?ak=M7bcdh2k6uqtYV5miaRiI8m8x6LIaONq&backurl=https%3A%2F%2Fwenku.baidu.com%2F%3F_wkts_%3D1705066238641&ext=ih2lW9VV3PmxmO%2B%2Bx8wZgk9i1xGx9WH05J9hI74kTEVkpokzRQ8QxLB082MG2VoQUUT15llYBwsC%2BAaysNoPxpuKg0Hkpo4qMzBjXDEGhuQ%3D&subid=pc_home&ts=1705066239&sign=1cebe634245cd92fc9eca10d0850a36b&qq-pf-to=pcqq.group",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Microsoft Edge\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
session.headers.update(headers)


def restore_image(enc_png, pm):
    new_img = Image.new('RGB', (300, 200))
    block = pm[0].split('_')
    for i in range(1, len(pm)):
        xy = pm[i].split('_')
        x2, y2, x1, y1 = list(map(int, xy))
        block_img = enc_png.crop((x1, y1, x1 + int(block[0]), y1 + int(block[1])))
        new_img.paste(block_img, (x2, y2))
    return new_img


def draw_circle(img, x, y, r, color=(255, 0, 0)):
    for i in range(x - r, x + r):
        for j in range(y - r, y + r):
            if (i - x) ** 2 + (j - y) ** 2 <= r ** 2:
                img.putpixel((i, j), color)
    return img


def aes_decrypt(key: bytes, data: bytes, iv: bytes = b'16fe0555d0c6d15d'):
    cipher = AES.new(key, AES.MODE_CBC, iv)
    plaintext = unpad(cipher.decrypt(data), AES.block_size)
    return plaintext.decode()


def SHA1_str(s):
    m = hashlib.sha1()
    m.update(s.encode())
    return m.hexdigest()


def get_cid():
    url = "https://seccaptcha.baidu.com/v1/webapi/verint/load"
    params = {
        "ak": ak,
        "ctype": "",
        "version": "1.1.1",
        "subid": "pc_home",
        "ext": ext,
    }
    response = session.get(url, params=params)
    response_json = response.json()
    cid = response_json['data']['cid']
    return cid


def get_captcha():
    cid = get_cid()
    url = "https://seccaptcha.baidu.com/v1/webapi/verint/img"
    params = {
        "subid": "pc_home",
        "ext": ext,
    }
    data = {
        "ak": ak,
        "ctype": "b_track_match",
        "cid": cid,
    }
    data = json.dumps(data, separators=(',', ':'))
    response = session.post(url, params=params, data=data)
    response_json = response.json()
    response_data = response_json['data']
    r = response_data['r']
    bid = response_data['bid']
    sss = r + ak + bid + "{bioc_slat}"
    key = SHA1_str(sss)[:16].encode()
    encrypted_data = base64.b64decode(response_data['enc_data'])
    decrypted_data = json.loads(aes_decrypt(key, encrypted_data))
    imgUrl = decrypted_data['master'] + "/" + decrypted_data['imgUrl']
    response = session.get(imgUrl)
    img = Image.open(io.BytesIO(response.content))
    config = decrypted_data['config']
    pm = config['pm']
    new_img = restore_image(img, pm)
    start = config['start']
    end = config['end']
    height = config['height']
    draw_circle(new_img, start[0], start[1], 5)
    draw_circle(new_img, end[0], end[1], 5)
    new_img.show()
    print(start, end, height)
    img_name =str(start[0]) + "_" + str(start[1]) + "_" + str(end[0]) + "_" + str(end[1]) + "_" + str(height) + ".png"
    new_img.save("captcha/" + img_name)


if __name__ == '__main__':
    get_captcha()
