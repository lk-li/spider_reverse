import execjs
import requests
import hashlib
from urllib import parse


def get_md5(_str):
    md5hash = hashlib.md5(_str.encode('utf-8'))
    md5 = md5hash.hexdigest()
    return md5


q = 'js逆向'
par = '101_3_3.0+/api/v4/search_v3?gk_version=gz-gaokao&t=general&q=' + parse.quote(q) + '&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal+"AJARvSY0fhSPTjIGF6x8TJrqqNNVaJ1zi-c=|1644846771"+3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZKRY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIoLVqr4gxrRPOI0cY7HL8qun9g93mFukyigcmebS_FwOYPRP0E4rZUrN9DDom3hnynAUMnAVPF_PhaueTFTV_WhoYpwVOsiOY6wSqUrxfDcLmMUcG20oG6wc1bwgmvgXqZuNYSeHBDBcTVLcVyvXG_vLx3GHMxBVqghemIhe1r8V1ZvNO0C39NC3LTbH9BCXmZbVmJTppXhOMsvX13vNq0GY8YrX1BC2marXfScnKUBNB8ioqbAUqgBYVkuY_vUF9Og_z9uwBBg2Vjh2MJJw1juoYDG3fWUXKNqe8eRV8JieVMwF8HrNGFrNBCgSY8UtCkUgGthH_ucN8Gief0cHMbHw_1UgBcveCsvLKShoXkHOBG0FGwJOL2w2s'


str_md5 = get_md5(par)


payload = 'str_md5=%s' % (str_md5)
with open('zhuhu_zse_96.js', 'r', encoding='utf-8') as f:
    das = f.read()
x_zse_96 = execjs.compile(das).call('x_zse_96', str_md5)
headers = {
    'authority': 'www.zhihu.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': '_zap=a3c538f5-6aa2-4c11-9790-0f7fe870fd69; d_c0="AJARvSY0fhSPTjIGF6x8TJrqqNNVaJ1zi-c=|1644846771"; _9755xjdesxxd_=32; YD00517437729195%3AWM_TID=yFijUpsH%2F9FFRQFFFRd%2B%2FO6OV2mf8aYd; __snaker__id=FxfAQkhAKXtqTluE; gdxidpyhxdE=zEvssplwPzot4pM69BBaH76MUXfDs19Rj2T8cuYelaY3rnwm51NAH1YJLcbmIn0Gdbl%2FIyAQtJvvUL6I2Lk43kJMLYnQoWkDhBvGGMqLJstGB7kQCLlB26gmVpMNkj%2Bg%5CAc6uge2zKKOSJ0JmkIaw%2FQTAePax64Ml1ooQXv%2Fzr84uP8u%3A1645362609814; YD00517437729195%3AWM_NI=ajYTjoCxb7eXiiWt%2FOIGYoqlEu7GZvLFUZykConT5QFxF9ptXC%2F5tcmwiL6yZ%2FKqo4efts7hj29tp%2F6ZZIG7%2FI3LsaRn2RtsFniIixqCfEW3WXmnTQ6dAHUgvlun7WyKOEs%3D; YD00517437729195%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eeb3e721ad978d89dc65ade78ba3d15a839e8ebaf525f3bdfaa4f67cf286ae97c52af0fea7c3b92aa3b697b5e96581a8aed8e854abb79995ae458b999790f46887abf9a8d97e909a9bbbfc6181b1a2b5b85b86a88adaf3809c9de1d6f769afa9a7adb5739af18592ee40a7babc94b664aaeef795f325f68696aac63ded97fdadf26b92b2feb3f77986b2a7aaec74b39daaa6d6399588a38fd75bf6bc8fa9d86db6b4bb8fb65dbb9581a6f237e2a3; z_c0=Mi4xRUpqTkt3QUFBQUFBa0JHOUpqUi1GQmNBQUFCaEFsVk5PWWpfWWdEeVRWUEhQUzQxX19fLU14Z0ZDRGd6VUVYMzhB|1645361721|519685e46db47886c7be34300dd075ee09215788; q_c1=7007d7b3248e46639658622d29ebc792|1645361722000|1645361722000; _xsrf=70b23dec-b65e-4991-9d1c-738327a13906; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1658653636,1659756308,1660061238,1660403009; NOT_UNREGISTER_WAITING=1; tst=r; SESSIONID=uYgXN9pmYAZLYRdS1ey1EEOYOQBko8LrhZfZpf69HSL; JOID=UF4dA0306OW18Lj3dvaI_vDUjolohb-K67qFiROprbHxr-6XK1osE9XwsvF4KZsRivpEBZEhfJ_kp2gwPPpVN_I=; osd=VF8WA0rw6e6197z2ffaP-vHfjo5shLSK7L6EghOuqbD6r-mTKlEsFNHxufF_LZoaiv1ABJohe5vlrGg3OPteN_U=; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1660471572; KLBRSID=4efa8d1879cb42f8c5b48fe9f8d37c16|1660471597|1660469749; _xsrf=T343zbCM2JLszmJyKD1Z69u2zsej29qJ; KLBRSID=4efa8d1879cb42f8c5b48fe9f8d37c16|1660471681|1660469749',
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
    'x-zst-81': '3_2.0aR_sn77yn6O92wOB8hPZnQr0EMYxc4f18wNBUgpTQ6nxERFZKRY0-4Lm-h3_tufIwJS8gcxTgJS_AuPZNcXCTwxI78YxEM20s4PGDwN8gGcYAupMWufIoLVqr4gxrRPOI0cY7HL8qun9g93mFukyigcmebS_FwOYPRP0E4rZUrN9DDom3hnynAUMnAVPF_PhaueTFTV_WhoYpwVOsiOY6wSqUrxfDcLmMUcG20oG6wc1bwgmvgXqZuNYSeHBDBcTVLcVyvXG_vLx3GHMxBVqghemIhe1r8V1ZvNO0C39NC3LTbH9BCXmZbVmJTppXhOMsvX13vNq0GY8YrX1BC2marXfScnKUBNB8ioqbAUqgBYVkuY_vUF9Og_z9uwBBg2Vjh2MJJw1juoYDG3fWUXKNqe8eRV8JieVMwF8HrNGFrNBCgSY8UtCkUgGthH_ucN8Gief0cHMbHw_1UgBcveCsvLKShoXkHOBG0FGwJOL2w2s'
}
url = "https://www.zhihu.com/api/v4/search_v3?gk_version=gz-gaokao&t=general&q=" + q + "&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal"
response = requests.request("GET", url, headers=headers)

print(response.json())
