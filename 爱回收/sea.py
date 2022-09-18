import requests
import json


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Ahs-App-Id": "10002",
    "Ahs-Once-Token": "Y2RjMzljYWE4YmQ1OGQ2NmNkNWI0ZWM3MzU5MzgxZWEuMTU3MTQyMzA1NjE0ODIzODMzNg==",
    "Ahs-Sign2": "716cb3fa5c257fab13d166667077edab",
    "Ahs-Timestamp": "1663491422647",
    "Ahs-Token": "60b7fa9390134b0da59bc082e8fc0478",
    "Connection": "keep-alive",
    "Content-Type": "application/json;charset=UTF-8",
    "Origin": "https://m.aihuishou.com",
    "Referer": "https://m.aihuishou.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    "X-Requested-With": "axios",
    "chromosome": "ttxLNNrgHejKPbhlxS6gXQJ7PaTzWO/tqME2Px7jCakkI/SPvQ6IJXLXzbHRvwm980FtNONXa6P+toysLTygig+gVw9U3/3uEP8u62P18gST1zZmRoe1SLUhRwF6PYfrDioL7vqMgagcIPBXduymULVEZWJ/EdnIPWlRfohhc8/Emqbjbptrc6Rc/FLlJ4Q5QqF19e/pkZzoz/RzAhApFguE3g8EADEaiyhOaJu/9wonVyQOyieBONvg/p4dC3YklXwUslyLfWd8AVFi4IesXrnOWvuoURufJMOliZ1bAmJecOAzDS8eqg==|t7q/TTl6Q0Avfv/bT0/DYLfAfUCAg2mc2e76SdeBYjo=",
    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%221833a1458161ce-04af3ebc74dfb6-1a525635-1764000-1833a1458173c4%22%2C%22%24device_id%22%3A%221833a1458161ce-04af3ebc74dfb6-1a525635-1764000-1833a1458173c4%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%7D",
    "Ahs-Token": "60b7fa9390134b0da59bc082e8fc0478",
    "acw_tc": "76b20fe416634908540055386e147049f8f869f513f7310db1b2a1b6c019d6",
    "chosenCity": "{%22id%22:55%2C%22character%22:%22C%22%2C%22isHot%22:true%2C%22childRegions%22:null%2C%22regionName%22:%22%E6%88%90%E9%83%BD%E5%B8%82%22%2C%22name%22:%22%E6%88%90%E9%83%BD%E5%B8%82%22}",
    "ssxmod_itna": "Qq0xyiGQDQyUDXDnD+xbx9G5bit=4G8AtGYAbUDBw3e4iNDnD8x7YDvGIpY+7b4c0GfGqUGE5LPxO=AqxaK74QfeY7GDAoDhx7QDox0=DnxAQDj1oPGGUxBYDQxAYDGDDpcDASdZlpMKT7Dl9O440ODmFODQ51+cPDUDDdn6FFDie1DYcFDiFO4KK1DDPDRoY1hA3D7r5DNxDCpPFCnoH7oKFOWKMjc3xmWDi3fBIG5zFOtKFmyE5s/xBGPIYwd5E0iQ04fj=e/iG9fmDPKji4NcTB6ihebASTKrrxdp24aCr/rj0AWjGPWDG4D=",
    "ssxmod_itna2": "Qq0xyiGQDQyUDXDnD+xbx9G5bit=4G8AtGYAbD8d=h8DGNEeqGamQbAqT4MTzxn4P3nDtGKXGU3bOx=3149EYxkxgWC02eVe3hO=HHuxWR2IHqaCyuAzdIBMDQ3L4QrabxadngGix6rrKinDNAnDeoek1B2dh=PxXQq=KAIzqWT5k60dVrqxapWTY=abtpT4kl4fkxqfsxaQGKLmahrtugE=to2mYpwXeawXeU9TQepTtoOTlpBT=T2us2GvToeroDw1gYKFDPKQWlc1YcO=tho=fdgRnAkXruft0qAiNcKZfkDZeEvsYGsn0NC4iWwf/prnv+Y41tRxc5OlKQYTjSWqEx1YuVDWKxYMI5riav8a=WGXGBWncnGw87oCnh4NbWIYAzh+Rru7R=uAMBOVKo=WKNVouAy1YRxmn4qqTVbzCq3ibalPiQpyUvE8vb0DbGmb+pTab7KLiS0p+a5t0/Ug93+HEii6BgzxsRxG09O+R1r9djuO/2Wdw/fhgmphZFuQ76jdNpascwHNjmGBVfQNumwHAje8d8LzeSsImxobYiGv3yFAG1urDvmeiAHOi3D07CODrOYNOxo73qOx52i4uovUKhAx8nqjzyKH5oVnBjBKAKkikhAqxcnWHwikTbH51iv7BbdDPBnn+5Wm5oQyo7D3lU5q=SMK/Vzxu5gGH47YQTdHReQ+YSXVw=8x3DDFqDekxeD="
}
url = "https://dubai.aihuishou.com/dubai-gateway/inquiry/create-v3"
data = {
    "productId": 32588,
    "ppvIds": [
        2026,
        2045,
        13842,
        3222,
        2124,
        2118,
        2114,
        2134,
        2106,
        19231,
        19234,
        2102,
        2108,
        2808,
        3168,
        5300,
        6947,
        6949,
        11210,
        17748,
        6982,
        2067,
        3084,
        2014,
        6712
    ],
    "phenomenonItemIds": [],
    "isEnvironmentalRecycling": False,
    "autoFulfill": False,
    "cityId": 55,
    "ahsAgent": "AHS_M",
    "sensors": {
        "cityId": "55",
        "sourcePlatform": "web_m",
        "sourceAppName": "official",
        "originalPlatform": "web_m",
        "utmAhs": "",
        "distinctId": "1833a1458161ce-04af3ebc74dfb6-1a525635-1764000-1833a1458173c4",
        "abtest": ""
    }
}
data = json.dumps(data)
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)