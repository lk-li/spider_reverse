import requests


headers = {
    "authority": "m.anjuke.com",
    "pragma": "no-cache",
    "cache-control": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "accept": "application/json, text/plain, */*",
    "sec-ch-ua-mobile": "?0",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
    "sw8": "1-YzhiMjJjOGY3ZDYwNDM0YzkyMmYzMTkzYWM0MzNmNWY=-MzQzMDY0ZTcyYTkzNDExMjhmYWIxNTk0NmNlMTEyNGM=-0-OTc=-aHR0cHM6Ly9tLmFuanVrZS5jb20=-L3hpbmZhbmcvYXBpL2xvdXBhbi9zaW1pbGFyaXRpZXM=-bS5hbmp1a2UuY29t-1",
    "sw8-correlation": "c291cmNl:YmVpZG91",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://m.anjuke.com/cd/xinfang/?from=anjuke_home&pi=PZ-baidu-pc-all-biaoti",
    "accept-language": "zh-CN,zh;q=0.9",
    "Cookie":'id58=CocNF2IEwENGj5D6DTuoAg==; sessid=733DF55E-FA57-B5E8-DB94-F42A60DC4B06; aQQ_ajkguid=0983E8E8-314B-412F-AB84-7531FBFF17F8; ctid=15; 58tj_uuid=42b7d212-d18c-4679-bcc3-0aaf221348d4; init_refer=https%253A%252F%252Fm.anjuke.com%252Fcd%252F%253Fpi%253DPZ-baidu-pc-all-biaoti; new_uv=1; new_session=0'
}

url = "https://m.anjuke.com/xinfang/api/loupan/similarities"
params = {
    "client_source": "2",
    "cid": "15",
    "page": "1", # 页数
    "is_homeIndex": "99",
    "history_url": "https://m.anjuke.com/cd/xinfang/?from=anjuke_home&pi=PZ-baidu-pc-all-biaoti"
}
response = requests.get(url, headers=headers, params=params)

dat = response.json()
for da in dat['result']['rows']:
    print(da)
print(response)