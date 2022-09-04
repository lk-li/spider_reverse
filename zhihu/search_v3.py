import execjs
import requests
import hashlib
from urllib import parse


def get_md5(_str):
    md5hash = hashlib.md5(_str.encode('utf-8'))
    md5 = md5hash.hexdigest()
    return md5


q = '安卓逆向'

d_c0 = "AJARvSY0fhSPTjIGF6x8TJrqqNNVaJ1zi-c=|1644846771"
x_zst_81 = '3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZsRY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIoLVqr4gxrRPOI0cY7HL8qun9g93mFukyigcmebS_FwOYPRP0E4rZUrN9DDom3hnynAUMnAVPF_PhaueTF8XyQUwLbLS9TGtYCgCqWgOOS83YBTL1fvp9eLgKtggmghc9yDoMo4HXc7oTVAxmpgUMZBo80veMs8xmk6eBfuYByBYZUwo18gLY8UCsbLOG1vS1Uq9_k6LYa9SGiho_zrrmLgFsTCOKNJOLBguG68VOEgL9GDHCCBS9SHOBSAO_hvN9Og_zoBLmeiOMMbX9JQcq8wYxNqxK1eHOUG79DCHM1CHm5CC0zrgMCCefsCcCHB3MbeC9agpBeMx9fTcqJ0gfoGoMeQS8Mu3GeTOKPBXsIBY8tcLGwJxC3rxs'
# par = '101_3_3.0+/api/v4/search_v3?gk_version=gz-gaokao&t=general&q=' + parse.quote(q) + '&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal+"AJARvSY0fhSPTjIGF6x8TJrqqNNVaJ1zi-c=|1644846771"+3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZsRY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIoLVqr4gxrRPOI0cY7HL8qun9g93mFukyigcmebS_FwOYPRP0E4rZUrN9DDom3hnynAUMnAVPF_PhaueTF8XyQUwLbLS9TGtYCgCqWgOOS83YBTL1fvp9eLgKtggmghc9yDoMo4HXc7oTVAxmpgUMZBo80veMs8xmk6eBfuYByBYZUwo18gLY8UCsbLOG1vS1Uq9_k6LYa9SGiho_zrrmLgFsTCOKNJOLBguG68VOEgL9GDHCCBS9SHOBSAO_hvN9Og_zoBLmeiOMMbX9JQcq8wYxNqxK1eHOUG79DCHM1CHm5CC0zrgMCCefsCcCHB3MbeC9agpBeMx9fTcqJ0gfoGoMeQS8Mu3GeTOKPBXsIBY8tcLGwJxC3rxs'
par1 = '101_3_3.0+/api/v4/search_v3?gk_version=gz-gaokao&t=general&q=' + parse.quote(
    q) + '&correction=1&offset=80&limit=20&filter_fields=&lc_idx=80&show_all_topics=0&search_hash_id=4e83cc6ce2a2a52452f92b615c7c197f&search_source=Normal&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0+"' + d_c0 + '"+' + x_zst_81
str_md5 = get_md5(par1)

payload = 'str_md5=%s' % (str_md5)
with open('zhuhu_zse_96.js', 'r', encoding='utf-8') as f:
    das = f.read()
x_zse_96 = execjs.compile(das).call('x_zse_96', str_md5)
headers = {
    'authority': 'www.zhihu.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': 'd_c0="%s"' % (d_c0),
    'referer': 'https://www.zhihu.com/search?type=content&q=%E4%B8%96%E7%95%8C%E6%85%B0%E5%AE%89%E5%A6%87%E7%BA%AA%E5%BF%B5%E6%97%A5',
    'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'x-ab-param': '',
    'x-ab-pb': 'CuQBGwA/AEcAtABpAWoBdAE7AswC1wLYAk8DUAOgA6EDogO3A/MD9AMzBIwEjQSmBNYEEQUpBTIFUQWLBYwFngUWBjAGMQZ+BqIG6wYnB1cHdwd4B5sH2AfcB90HJwhnCHQIdgh5CMUI2gjlCD8JQglUCVUJYAmNCasJwwnECcUJxgnHCcgJyQnKCcsJzAnRCeUJ8Qn0CQQKSQplCmsKmAqlCqkKvgrECtQK3QrtCv0K/gopCzsLPAtDC0YLcQt2C4ULhwuNC7kLwAvXC+AL5QvmCywMOAxxDI8MrAzDDMkM0wy1C+QKEnIAAAAAAAEAAAAAAAAAAAAAAAAAAAQEAAQAAAEBAAABAAIBAAIAAAEAAAAAAgIABAAABgYAAQABAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAABAAAAAAEAAAcADQEAAQAAAAAAAQAAAAAAAAAAAwAAAAAWAwA=',
    'x-api-version': '3.0.91',
    'x-app-za': 'OS=Web',
    'x-requested-with': 'fetch',
    'x-zse-93': '101_3_3.0',
    'x-zse-96': x_zse_96,
    'x-zst-81': x_zst_81
}
# url = "https://www.zhihu.com/api/v4/search_v3?gk_version=gz-gaokao&t=general&q=" + q + "&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal"
url = 'https://www.zhihu.com/api/v4/search_v3?gk_version=gz-gaokao&t=general&q='+q+'&correction=1&offset=80&limit=20&filter_fields=&lc_idx=80&show_all_topics=0&search_hash_id=4e83cc6ce2a2a52452f92b615c7c197f&search_source=Normal&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0'
response = requests.request("GET", url, headers=headers)

print(response.json())
