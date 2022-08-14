import time

import requests
from lxml import etree

headers = {
    'authority': 'land.3fang.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'referer': 'https://land.3fang.com/',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': 'global_cookie=90sei9gcr3ky7f9iwl8ft8x0620kyb37w9w; c1a62c64b8d12de9871f7c76230dae6a=2; sfut=01FE3F6BAB847A4F27EAF10D8B4B8026AF60E365F8AB91349E10C0332169551C12E631B593252146BAF961E42DA35782ED2EFCD0DF3108591B0C95DF198FB44E6A72B335198A726A0A265524C4BB5FB53E024298EC51DE1740B9750F96B98FC9; land3fanguserinf2o8724344c5efcd8def8839cf903f49228=U2FsdGVkX19WyIxGL3bOMeaiHc2cuid63g/0hFPv48eh26bhwjRVwoBHQSf5db5OLy0DGraSfWcPxIYAqVRoRZVAENg6y89wZxLu79Xeb/O2WqyTgPV4eexc2RL160AtMKQ+SXJGuQQ8MC8lsPlv7g==; new_loginid=125319755; __utma=43928954.84502340.1641964714.1641964714.1641964714.1; __utmc=43928954; __utmz=43928954.1641964714.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt_t0=1; __utmt_t1=1; city=bj; __utmt_t2=1; __utmb=43928954.7.10.1641964714; unique_cookie=U_90sei9gcr3ky7f9iwl8ft8x0620kyb37w9w*11',
}

font_dict = {'&#xd7c4e;': '0', '&#xd1fae;': '1', '&#xde4f7;': '2', '&#xd3afd;': '3', '&#xda5fb;': '4', '&#xdea3f;': '5',
             '&#xde8ae;': '6', '&#xde46d;': '7', '&#xda5ea;': '8', '&#xd4dfa;': '9', }
response = requests.get('https://land.3fang.com/market/__________.html', headers=headers)

data = response.text


# data = data.replace('\U000','')
for txt in font_dict:
    data = data.replace(txt, font_dict[txt])




HTML= etree.HTML(data)
datass = HTML.xpath('//*[@id="dvMarketPageList"]/ul/li')

for da in datass:
    print(da.xpath('./h2/a/@title')[0])
    print('https://land.3fang.com/'+da.xpath('./h2/a/@href')[0])
    try:
        ds = da.xpath('./div[1]/p[2]/text()')[0].replace('㎡', '').encode('GBK').decode()
        print(ds)
    except:
        print(da.xpath('./div[1]/p[2]/text()')[0].replace('㎡', ''))


