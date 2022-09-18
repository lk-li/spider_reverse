import json

import requests


def getToken(uid):
    # 获取Openid
    try:
        headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip,compress,br,deflate',
            'Connection': 'keep-alive',
            'content-type': 'application/json',
            'Referer': 'https://servicewechat.com/wx141bfb9b73c970a9/16/page-frame.html',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 12; M2012K11C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4313 MMWEBSDK/20220805 Mobile Safari/537.36 MMWEBID/4629 MicroMessenger/8.0.27.2220(0x28001B37) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
            't': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1MDI0NDUsIm5iZiI6MTY2MzQwMDI0NSwiaWF0IjoxNjYzMzk4NDQ1LCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjo0NTk0MjYwMiwiZGVidWciOiIiLCJsYW5nIjoiIn0.1lXIcb1WL_SdsXG5N_i1drjjACRhRZUS2uadHlT6zIY'
        }
        resp = requests.get(f"https://cat-match.easygame2021.com/sheep/v1/game/user_info?uid={uid}", headers=headers)
        if resp.status_code == 200 and 'wx_open_id' in resp.text:
            res = resp.json()
            openid = res['data']['wx_open_id']
            data = {
                "uuid": openid
            }
            resp = requests.post("https://cat-match.easygame2021.com/sheep/v1/user/login_tourist", data=json.dumps(data),
                                 headers=headers)
            print(resp.text)
        else:
            return False
    except Exception as e:
        return False


if __name__ == '__main__':

    getToken("211723564")