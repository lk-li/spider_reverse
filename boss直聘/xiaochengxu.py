import requests


headers = {
    "Host": "www.zhipin.com",
    "Accept": "*/*",
    "x-requested-with": "XMLHttpRequest",
    "wt2": "DiwxNoO932JvUuyHtEarY6QyZzu_3ObVGraqTTRZ3VmBnQRH3MkAwiqvSlKaYmyYsXQdvo1xyi-0_FdS-NVZ-uA~~",
    "scene": "1074",
    "mpt": "2328fc25c55e781dc49effded6c8ff96",
    "miniappVersion": "4.0107",
    "Accept-Language": "zh-cn",
    "platform": "zhipin/mac",
    "ver": "4.0107",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac",
    "Referer": "https://servicewechat.com/wxa8da525af05281f3/341/page-frame.html",
    "ua": "{\"model\":\"MacBookPro15,1\",\"platform\":\"mac\"}",
    "Content-Type": "application/x-www-form-urlencoded",
    "zpAppId": "10002"
}
url = "https://www.zhipin.com/wapi/zpgeek/miniapp/search/joblist.json"
params = {
    "query": "python开发",
    "city": "101270100",
    "source": "undefined",
    "stage": "",
    "scale": "",
    "degree": "",
    "industry": "",
    "salary": "",
    "experience": "",
    "sortType": "0",
    "subwayLineId": "",
    "subwayStationId": "",
    "districtCode": "",
    "businessCode": "",
    "longitude": "",
    "latitude": "",
    "position": "",
    "expectId": "",
    "expectPosition": "",
    "page": "30",
    "pageSize": "10",
    "appId": "10002"
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
