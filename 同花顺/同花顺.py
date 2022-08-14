import requests
import execjs

with open('aes.min.js','r') as f:
    txt = f.read()
m = execjs.compile(txt).call('v')
cookies = {
    'log': '',
    'Hm_lvt_78c58f01938e4d85eaf619eae71b4ed1': '1638624561',
    '__utma': '156575163.1204099283.1638624567.1638624567.1638624567.1',
    '__utmc': '156575163',
    '__utmz': '156575163.1638624567.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)',
    'Hm_lvt_f79b64788a4e377c608617fba4c736e2': '1638624604',
    'Hm_lpvt_f79b64788a4e377c608617fba4c736e2': '1638624604',
    'Hm_lpvt_78c58f01938e4d85eaf619eae71b4ed1': '1638624604',
    'Hm_lvt_60bad21af9c824a4a0530d5dbf4357ca': '1638624604',
    'Hm_lpvt_60bad21af9c824a4a0530d5dbf4357ca': '1638624604',
    'v': m,
}

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Accept': 'text/html, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'hexin-v': m,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36',
    'Referer': 'http://data.10jqka.com.cn/market/dzjy/',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}

response = requests.get('http://data.10jqka.com.cn/market/dzjy/field/enddate/order/desc/ajax/1/free/1/page/1/free/1/', headers=headers, cookies=cookies, verify=False)
print(response.text)