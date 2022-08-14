import execjs
import requests
import time





with open('get_sign.js', 'r', encoding='utf-8') as f:
    txt = f.read()
# "&calltime=2022-03-15 18:46:05&city=北京&key=xfactivityapi"

# key=xfactivityapi  二手房的key
calltime = str(time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time())))

city = "上海"
key = "xfactivityapi"
sid = "&calltime="+calltime+"&city="+city+"&key="+key
print(sid)
sign = execjs.compile(txt).call('hex_md5', sid)
print(sign)
for page in range(2,10):
    params = {
        "appname": "fangx",
        "v": "1.3.4",
        "miniplat": "weixin",
        "scene": "1001",
        "type": "0",
        "listposition": "all",
        "city": city,
        "pagesize": "20",
        "page": str(page),
        "sign": sign,
        "calltime": calltime,
        "orderby": "41"
    }

    url = "https://miniapp.fang.com/esf/searchList"
    pseusign = execjs.compile(txt).call('get_pseusign', url,params)
    headers = {
        "Connection": "keep-alive",
        "openid": "",
        "pseusign": pseusign,#"p10120220315185119a3fded1c17fdde98c898504e754962ef",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.3 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1 wechatdevtools/1.05.2111300 MicroMessenger/8.0.5 Language/zh_CN webview/",
        "content-type": "application/json",
        "Accept": "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://servicewechat.com/touristappid/devtools/page-frame.html"
    }
    response = requests.get(url, headers=headers, params=params)
    print(response.text)

