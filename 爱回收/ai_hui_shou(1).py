# once-token
import hashlib
import requests
import time
import execjs
from requests.cookies import cookiejar_from_dict

session = requests.session()


Ahs_Token = '31f2e688f1e844f5aa53fb6793e3da72'

cookies = {
    '_pykey_': '1fbf8601-f933-502f-8895-c5ae6cc3aa8c',
    'Hm_lvt_6206c0fb3ed4e6feb904c97664c91527': '1640597457',
    'sensorsdata2015jssdkcross': '^%^7B^%^22distinct_id^%^22^%^3A^%^2217dfb3a87d617-0c5804dba7f922-4303066-2073600-17dfb3a87d7e68^%^22^%^2C^%^22^%^24device_id^%^22^%^3A^%^2217dfb3a87d617-0c5804dba7f922-4303066-2073600-17dfb3a87d7e68^%^22^%^2C^%^22props^%^22^%^3A^%^7B^%^22^%^24latest_traffic_source_type^%^22^%^3A^%^22^%^E7^%^9B^%^B4^%^E6^%^8E^%^A5^%^E6^%^B5^%^81^%^E9^%^87^%^8F^%^22^%^2C^%^22^%^24latest_referrer^%^22^%^3A^%^22^%^22^%^2C^%^22^%^24latest_referrer_host^%^22^%^3A^%^22^%^22^%^2C^%^22^%^24latest_search_keyword^%^22^%^3A^%^22^%^E6^%^9C^%^AA^%^E5^%^8F^%^96^%^E5^%^88^%^B0^%^E5^%^80^%^BC_^%^E7^%^9B^%^B4^%^E6^%^8E^%^A5^%^E6^%^89^%^93^%^E5^%^BC^%^80^%^22^%^7D^%^7D',
    '_uab_collina': '165874302241533042493843',
    'Ahs-Token': Ahs_Token,
    'chosenCity': '^{^%^22id^%^22:256^%^2C^%^22character^%^22:^%^22S^%^22^%^2C^%^22isHot^%^22:true^%^2C^%^22childRegions^%^22:null^%^2C^%^22regionName^%^22:^%^22^%^E6^%^B7^%^B1^%^E5^%^9C^%^B3^%^E5^%^B8^%^82^%^22^%^2C^%^22name^%^22:^%^22^%^E6^%^B7^%^B1^%^E5^%^9C^%^B3^%^E5^%^B8^%^82^%^22^}',
    'acw_tc': '2f624a5816631439232183923e05d90214bf8bbcb35c542443c1739686d133',
    # 'acw_sc__v3': '6323e2c3ea3589fc846cc22c57074a11a89adae4',
'ssxmod_itna': 'Gqfx0DyG0QMDgDl4iqYI7P7Tz=sDO/iQRKR+/0DBL+Y4iNDnD8x7YDv+IvKQi=/C7D4a5FGEmxFKt082wxj8thBqeW+DAoDhx7QDox0=DnxAQDjhoPGGUxBYDQxAYDGDDpcDASdZlpMKT7Dl9O440ODmFODQ51+cPDUDDdn6FFDie1DYcFDiFO4KK1DDPDRoY1eA3D7r5DNxDCpPFCnoH7oKFOWKMjctxmaDi3fBIG5zFOtKFmyE5s/xBGPIYwd5E0rjGbk5hNsQieeBWPiQhxdm2e7iiPTQhfi1WPt0mKK7xKzXXxwzhNaiDD==',
  'ssxmod_itna1': 'Gqfx0DyG0QMDgDl4iqYI7P7Tz=sDO/iQRKR+/D8d18C7DGXfeqGaIRzU15bxKuDQDLxiQq4D'

}


response = requests.get('https://dubai.aihuishou.com/dubai-gateway/auth/once-token',cookies=cookies)

ahs_once_token = response.headers['ahs-once-token']

# 这个是为了拼接Ahs_sign2
Ahs_Once_Token = "Ahs-Once-Token=" + response.headers['ahs-once-token']

Ahs_App_Id = "Ahs-App-Id=10002"

ahs_timestamp = str(time.time())[0:14].replace('.', '')

# 这个是为了拼接Ahs_sign2
Ahs_Timestamp = "Ahs-Timestamp=" + str(time.time())[0:14].replace('.', '')

salt = "salt=34694d9d74954784"

# 请求表单
false = False
data = '{"productId":43510,"ppvIds":[2026,2100,2125,2118,2114,7396,2014,12479,14403,6982,2067,9625,2045,13842,2134,2106,2108,2808,3168,5300,6947,6949,9507,11210,13455],"phenomenonItemIds":[],"isEnvironmentalRecycling":false,"autoFulfill":false,"cityId":256,"ahsAgent":"AHS_M","sensors":{"cityId":"256","sourcePlatform":"web_m","sourceAppName":"official","originalPlatform":"web_m","utmAhs":"","distinctId":"1833f3f1122873-082acd669e7fb-26021c51-2073600-1833f3f1123e71","abtest":""}}'


body = "body=" + "{}".format(data)

Ahs_Sign2 = Ahs_App_Id + "&" + body + "&" + Ahs_Timestamp + "&" + Ahs_Once_Token + "&" + salt

Ahs_Sign2 = Ahs_Sign2.replace("'", '"').replace(" ", "").replace("False", "false")

Ahs_Sign2 = hashlib.md5(Ahs_Sign2.encode()).hexdigest()




# 拿chromosome
def get_data(Ahs_Token):

    with open('1.js', 'r', encoding='utf8') as f:

        read_js = f.read()

    return_js = execjs.compile(read_js)
    data = return_js.call('result', Ahs_Token)
    return data

chromosome = get_data(Ahs_Token)


headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Ahs-App-Id': '10002',
    'Ahs-Once-Token': ahs_once_token,
    'Ahs-Sign2': Ahs_Sign2,
    'Ahs-Timestamp': ahs_timestamp,
    'Ahs-Token': Ahs_Token,
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://m.aihuishou.com',
    'Pragma': 'no-cache',
    'Referer': 'https://m.aihuishou.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'X-Requested-With': 'axios',
    'chromosome': chromosome,
    'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',}


session.headers = headers

# 转换cookie格式
cookies = cookiejar_from_dict(cookies)
session.cookies = cookies

res = session.post('https://dubai.aihuishou.com/dubai-gateway/inquiry/create-v3',data=data).content


print(res.decode('utf8'))

