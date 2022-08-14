import requests
import execjs


with open('get_sign.js', 'r', encoding='utf-8') as f:
    txt = f.read()
url = "https://miniapp.fang.com/esfinfo"
params = {
    "appname": "fangx",
    "v": "1.3.4",
    "miniplat": "weixin",
    "scene": "1074",
    "city": "上海",
    "houseid": "412415958",
    "housetype": "AGT",
    "jkVersion": "2",
    "messagename": "esfinfo",
    "productsource": "49"
}

pseusign = execjs.compile(txt).call('get_pseusign', url,params)
headers = {
    "Host": "miniapp.fang.com",
    "openid": "",
    "accept": "*/*",
    "content-type": "application/json",
    "accept-language": "zh-cn",
    "pseusign": pseusign,#"p1012022031521365385a402da0078d4e14cc5f1d6c7c5b9b7",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac",
    "referer": "https://servicewechat.com/wxffbb41ec9b99a969/543/page-frame.html"
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
