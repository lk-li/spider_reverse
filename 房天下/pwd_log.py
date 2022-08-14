import requests
import execjs


with open('pwd_login.js','r',encoding='utf-8') as f:
    pwd_log = f.read()

pwd = execjs.compile(pwd_log).call('getEncryptePassword','1234567')


headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    'Accept': '*/*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'Origin': 'https://passport.fang.com',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://passport.fang.com/',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

data = {
  'uid': '18282112885',
  'pwd': pwd,
  'Service': 'soufun-passport-web',
  'AutoLogin': '1'
}

response = requests.post('https://passport.fang.com/login.api', headers=headers, data=data)
print(response.text)