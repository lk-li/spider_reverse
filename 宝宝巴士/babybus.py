import time
import execjs
import requests
import hashlib
import json


def ranace():
    ds = '''
    function x() {
        var x = 1 > 0 && void 0 !== arguments[0] ? arguments[0] : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
          , r = "";
        return r || (r = x.replace(/[xy]/g, function(x) {
            var r = 16 * Math.random() | 0;
            return ("x" == x ? r : 3 & r | 8).toString(16);
        })),
        r;
    }'''
    random_str = execjs.compile(ds).call('x').replace('-', '')
    return random_str


def encrpymd5(txt):
    m = hashlib.md5()
    b = txt.encode(encoding='utf-8')
    m.update(b)
    str_md5 = m.hexdigest()
    return str_md5


def decrypt(str):
    with open('/Volumes/BOOTCAMP/PycharmProjects/pythonProject/creeper_learn/网站练习/宝宝巴士/decrypt.js', 'r',
              encoding='utf-8')as f:
        ed = f.read()
    da = execjs.compile(ed).call('decryptXxTea', str)
    return da


def encrypt(str):
    with open('/Volumes/BOOTCAMP/PycharmProjects/pythonProject/creeper_learn/网站练习/宝宝巴士/encrypt.js', 'r',
              encoding='utf-8')as f:
        ed = f.read()
    da = execjs.compile(ed).call('encryptXxTea', str)
    return da


def SendSmsCap(Phone):
    clientheaderinfo = "LpAxs6nx3dRRsXuTjirzbHn6DJygmAZoQacF2Efv2kxXcSXbLl36D4VbwWhkvsJGNKOL4XqEL361n1Y8gHnoMBiwLtYhVqSF629M/5fLfsrcVuo56K1Y4ONlw3DXsYSC3x427O5dUDSsTT/6mlri+XL1zxy4RTqYWJ4M4Xuaxs9nWNGJD/YoImvnrJNA0pKCbZ3i7cjyatCmJMEam67lDGBiKcExv7Pk2DuATayZhlGuxbdq5dYCj8xBQM/34E8WY/E2Q/DXV1Kqj6U0nznDL389gdJMiEggaxImLaenLC35obGT7Yw0fuwpWTgPk78WyopnJ/o+Rr+OLd0BTRRsd7Oj9N+DOQSY8OvLmjPnNmQwPXTZKw7b6krpzWd+1vGChgGUFEHv6ltGS3zYQSCw75jbf6B6ZT0jT4bDBcEC4jE50UP1oooCVtlos7nRP82llYyfNM/MFdmwN3vTj7UCQF4ldawvsyKenELN4I6GDtDgC6dM7hoEz6FDXpwN3KPXVw1wuFOiU0eYGVUp5cdQXlDEE7+3WMsOje68U1Dku8b4YR6Z6Xb33JDemuoJgv661eiMbLbbv6zmCjck0q3sWd13iW40bxgdGFsbjRkmCwKkmO1CI6MnjO/+FQLvQo86AizwQQZVUai3A1uJniqq1+79Bc4JKimBJzCeR785h0osky1CWy1LavnyimMnnoqv32IxnJsVDjmgteFDljb2AYuqDTvZQLa0ffPkXQQ4/MI3UF/x2WRx0Sf2L+4W5lYmYd6QVMK5ib3zUrpKn3zzue+4hPuCQ4ccSdtE8DpW/kXAkbyNImQpiL0uSOHC3BLBeCy02zDvr6QZGMoaeBtPXRelrFkQF0YhSz3KmlHdRCDjtCIzHz3aQ2IQb90ovdB9Aq6mPsFABABCJGyTlU9yaL16U/4xze1ikAVlRRS1ikF/hfzPMkuRN/66ihYUxETvMha0ULdrUPqngwnuCWpELcaeSNVuag8THtf5btBvDFHwodp9dbwgowcz8lv7e1uH8qb/x0BZNINodhshNN93fg88RY3Pekm/fr7MD8QoIbjKm68fh7s6mCafhmghOCphgWTaeGVC4BIy6wgmKFluepI+fWMVN/8jZKaXUBWCkaxGmgg85DGGrBobRgZZA+LwXi88mfRoTr2Hz0eennkNenDSmCOaaHyzarAMSPgC5IX0gXDN4jV++w=="
    headers = {
        "Host": "udb.babybus.com",
        "accept": "*/*",
        "content-type": "application/octet-stream",
        "referer": "https://servicewechat.com/wxc5f0facc3b833dbc/84/page-frame.html",
        "clientheaderinfo": clientheaderinfo,
        "accept-language": "zh-CN,zh-Hans;q=0.9",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac"
    }

    payload = encrypt('{"Phone":"%s"}' % (Phone))
    tim = str(int(time.time() * 1000))

    AccessToken = 'bd4e40d59ebe4144a05831d45c89fcd1'  # fbe19df33aea471ba50d38af95ce2527

    SignatureMD5 = "acceptverid=1&accesstoken=" + AccessToken + "&contentmd5=" + encrpymd5(
        payload) + "&encrypttype=1&headermd5=" + "705cf064b6e20f7d81626700557670d0" + "&productid=3411&signaturestamp=" + tim + "ba6e89097736427096de5a215cce3fe4"
    params = {
        "AcceptVerID": "1",
        "AccessToken": AccessToken,
        "ContentMD5": encrpymd5(payload),
        "EncryptType": "1",
        "HeaderMD5": '705cf064b6e20f7d81626700557670d0',
        "ProductID": "3411",
        "SignatureMD5": encrpymd5(SignatureMD5),
        "SignatureStamp": tim
    }
    url = "https://udb.babybus.com/OAuthApi/SendSmsCaptcha"

    response = requests.post(url, params=params, headers=headers, data=payload)
    # print(response.text)
    da = json.loads(decrypt(response.text))
    # print(da)
    return da


def login(Phone, captchano):
    tim = str(int(time.time() * 1000))
    clientheaderinfo = 'g3slg0eS9n/iCg64Z30YsD13WPG5sZPCIHm0p8sZ3+EFm126EqdETDFIU7HP7Z3yEsdH+RueNfrJrMKpQxWZd692B9s+KMLAVXYDx84oi7pII8vjvJdJN3N1pyn2Y0uDeREgMCVnIFVFtb+GPo2lgvURWfWfk25X3EVxsAxM1WWSO13hMakRnPFNcxLwW+gruC5wXkXAkmp8R5ptKYOKyqZorp655YUqnwBRU3128KYUd7jnWuVFq/Kl+LFV/8NzwUUjrclsudIA+28gdB81vCGmhBr22XbhHHF/seeoBDs2ZZtCr/iByqslfr8u7e8o2bfrjWEA6ULHTIDO5Ce/6J1aW1YYz5uPOC/eQ51uv6MhmuCVbFewR3XGAFf1IX9ep9FpXBJVdkPdh7lghd5oh4gLssjG892JClKQ7KHdyUXBMIGPysOozI+lfvXBQZV0EyAHHeWmPoFITrjo8vKrlNj+wu4PY6bfQOUbciGhl+n62Sy0eHd1oeC6k/qgM81c6W1FEWVPi1GgjQfjEIzDon0nYHbEojOt4wWp0shWBEM2ud9V0aJZxByFTnMFKnQXFTpV6DGBSl0Jx9SH6sDSf6QxT4Vqq2hNVcVQ0xItlbdcePhA3Aw/vOkGnUYSzVOXKAD1hIeNzd3bNPE0k1ES+ISOCI0dRGwwxV9DGswbDM+izLlENHme2mfKC0bgdHKPFL5hJCwS9oJy+uJmBe+mbG+NSXu2PqJUY/efYHj0j4IOpc/fbNrxUudqCLAryALTVdoPycsBwwozxJeGY+dHY5TQgEXMoKFoOWZYsZt9eQ7S1o0FIsBgk/j8Gr/gnTdO7UQFGXjGjWrPMbMj8i7cVldxC5AWl/CxceVz6xDxvtM8WfT3fzvQmaUMEfyMrf6/BlNZYhvSYtHMwPmAtm3Ec2livpQCmTHI7hs0XGbsr2cMtEmZ3tNX4Mxra0PCcdy2HHXBCyjyZRJoSkptUYqBgeCGOdGJzr3ybfcG1hz0gezmSThqnolyGpWxpBnqHSGZU2Yv6y50JtMiZzTsFtwgXu0H525UJLgagMbO+wAIyGv2meklrDgWCFgoNvEgvEOgXnwZmcrirxYQzsBPUYC8VdBDsAsC64e00cIzYqLCaujao0SiQG1gOUPiPThVhRY4uTMQRRlzqzZ9W65aceesIfa8dnQughgHr/6Jwu2xtigjyJPSEYrCBQ=='
    url = "https://udb.babybus.com/OAuthApi/PhoneLoginRegister"
    AccessToken = 'eb50706719b54494a7b667dbbd24b1d9'
    sign = 'acceptverid=1&accesstoken=' + AccessToken + '&captchano=' + captchano + '&encrypttype=1&headermd5=' + encrpymd5(
        clientheaderinfo) + '&phone=' + Phone + '&productid=3411&signaturestamp=' + tim + 'ba6e89097736427096de5a215cce3fe4'
    params = {
        "AcceptVerID": "1",
        "AccessToken": AccessToken,
        "CaptchaNo": captchano,
        "EncryptType": "1",
        "HeaderMD5": encrpymd5(clientheaderinfo),
        "Phone": Phone,
        "ProductID": "3411",
        "SignatureMD5": encrpymd5(sign),
        "SignatureStamp": tim
    }
    headers = {
        'Host': 'udb.babybus.com',
        'accept': '*/*',
        'content-type': 'application/octet-stream',
        'clientheaderinfo': clientheaderinfo,
        'accept-language': 'zh-CN,zh-Hans;q=0.9',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
        'referer': 'https://servicewechat.com/wxc5f0facc3b833dbc/84/page-frame.html'
    }

    response = requests.request("GET", url, params=params, headers=headers)

    # print(response.text)
    da = json.loads(decrypt(response.text))
    # print(da)
    return da


def ShareVip(sharevipid, usrdata):
    tim = str(int(time.time() * 1000))
    das = usrdata['data']
    clientheaderinfo = 'accountID=' + str(das["accountID"]) + '&accountIDSignature=' + das[
        'accountIDSignature'] + '&actionDate=1665918862192&AppLang=zh_CN&CHCode=WechatApp_Mac&CHID=1&DataType=2&DeviceLang=zh_CN&DeviceModel=MacBookPro15,1&deviceOffset=1951922&deviceRegister=1665496486390&DeviceType=1&HeadVerID=1&initDeviceVer=3&initGlobalVer=0&installRegister=1665496486379&isPayVip=0&isVip=0&JbFlag=0&loginCode=&loginSignature=' + \
                       das['loginSignature'] + '&loginStamp=' + das[
                           'loginStamp'] + '&Net=1&openId=oAJzb4mwQDQ8T-jLVWY3DEC_qPMI&OpenID=oAJzb4mwQDQ8T-jLVWY3DEC_qPMI&OSType=1&OSVer=macOS 12.5.1&phone=' + \
                       das[
                           'phone'] + '&PlatForm=21&productDeviceID=3444931225512738836&ProductID=3411&ProjectID=2&reviewstate=1&RunSDKVer=2.18.1&RunVer=3.5.5&Screen=414*736&sessionKey=2212A27D6EDD306FFEBC44EBEB403CEC&statProductID=1832&syncSignature=&Token=oAJzb4mwQDQ8T-jLVWY3DEC_qPMI&TokenType=0&unionID=oI0Xl5_-l2FnGaBdNJPOyKkIf9HE&userOffset=77655&userRegister=1665915376000&VerCode=8.2.6&VerID=8022&vipEndTime=-28800000&vipExpiry=0&vipRightsID=&vipSignature=&vipStartTime=-28800000&vipType=0&visitLastDay=101001&visitTotalDay=3'

    clientheaderinfo = encrypt(clientheaderinfo)
    headers = {
        "Host": "parentcenterapi.babybus.com",
        "accept": "*/*",
        "content-type": "application/octet-stream",
        "clientheaderinfo": clientheaderinfo,
        "accept-language": "zh-CN,zh-Hans;q=0.9",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac",
        "referer": "https://servicewechat.com/wxc5f0facc3b833dbc/84/page-frame.html"
    }

    accesstoken = '7d70113e969f40b2a9560c0cc2a371b0'
    data = encrypt(sharevipid)

    sign = 'acceptverid=1&accesstoken=%s&contentmd5=%s&encrypttype=1&headermd5=%s&productid=3411&signaturestamp=%sba6e89097736427096de5a215cce3fe4' % (
        accesstoken, encrpymd5(data), encrpymd5(clientheaderinfo), tim)

    params = {
        "AcceptVerID": "1",
        "AccessToken": accesstoken,
        "ContentMD5": encrpymd5(data),
        "EncryptType": "1",
        "HeaderMD5": encrpymd5(clientheaderinfo),
        "ProductID": "3411",
        "SignatureMD5": encrpymd5(sign),
        "SignatureStamp": tim
    }
    url = "https://parentcenterapi.babybus.com/ShareVip/AssistShareVip"
    response = requests.post(url, headers=headers, params=params, data=data)

    # print(response.text)

    da = json.loads(decrypt(response.text))
    # print(da)
    return da

def mian(Phone, captchano, sharevipid):
    data = login(Phone, captchano)
    with open('seiion.txt', 'a+', encoding='utf-8') as f:
        dats = f"{Phone}---{data}" + '\n'
        f.write(dats)
    da = ShareVip(sharevipid, data)
    return da

if __name__ == '__main__':
    Phone = "16257592157"
    # SendSmsCap(Phone)
    # exit()
    captchano = '442274'
    sharevipid = '{"shareVipID":9213}'
    # data = login(Phone, captchano)
    data1 = {'resultCode': '0', 'resultMessage': '登录成功', 'data': {'vipTypeList': [], 'accountID': 19187918, 'idSign': 'D5ABB667205DE9D92404F23606870CBA', 'domain': 'cn', 'accountGroupID': 1, 'accountIDCode': 'AOn89', 'account': '', 'idCard': 'bc7e9ada-bd20-4d59-8f03-8008969623ca', 'phone': '17050720870', 'email': '', 'loginCode': '', 'accountIDSignature': 'BD0A1898D3C265FD32B3E266813833DE', 'loginSignature': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhYjg0MTM4MzkxYzQxMGViNDgyNGVhMjFlNjIzNjRjIiwidHlwIjoiYXQrand0In0.eyJpZCI6IjE5MTg3OTE4IiwiZ3JvdXBJRCI6IjEiLCJpZFNpZ24iOiIyMDVERTlEOTI0MDRGMjM2IiwidmlwVHlwZSI6IjAiLCJ2aXBTdGFydFRpbWUiOiItMjg4MDAwMDAiLCJ2aXBFbmRUaW1lIjoiLTI4ODAwMDAwIiwibmJmIjoxNjY1OTMyMzIwLCJleHAiOjE2NzM5NjgxMjB9.j-6mUf00_lXUnVH7kmRAh7albPrfX3jncHlJEFxZHGzpxtjXLWXd2Zu-DxeNAKHjOn_i9jlCy2Js-lS53j9FXvUGWCOyzQCiVmKYQ0aarkPmSUC23VFcTiFZHubbxZfkGGferUni70fC7iCOvXtqw_KpoAHGbWnVXOTX7ouewOEqyrCX-FwTWdu-6CBHegEORUfZNa1tKJWmZAAEHqzKmDBeBEAz7NG7wD21Q65fspYGqFEyaTp5gn9NWAMzFbBJYjPf6M0ldPPdTOZenhezwm7drVasCDJVoBu4qBCLKWAkIqxMmYI7FmGW33H_1Bl9ugwsA5bKj2ybNrqP0DpwJA', 'vipSignature': '', 'syncSignature': '', 'shareSignType': '', 'shareSign': '', 'vipRightsID': '', 'isCodeCreate': 0, 'loginStamp': '1665932920647', 'nickName': 'au0p8g3@宝宝巴士', 'oldNickName': 'au0p8g3@宝宝巴士', 'nickNameStatus': 0, 'userName': '', 'sex': 0, 'isPassword': 0, 'isPayPassword': 0, 'coverUrl': '', 'oldCoverUrl': '', 'coverStatus': 0, 'avatarUrl': '', 'oldAvatarUrl': '', 'avatarStatus': 0, 'sign': '', 'birthday': '-2524550400000', 'countryID': '10000000000', 'provinceID': '10011000000', 'cityID': '10011010000', 'districtID': '0', 'location': '', 'ip': '36.17.76.38', 'isRegister': 1, 'registerDate': '1665932920621', 'appRegisterDate': '1665932920639', 'isAppRegister': 1, 'vipExpiry': 0, 'isPayVip': 0, 'vipType': 0, 'vipStartTime': '-28800000', 'vipEndTime': '-28800000', 'isSubscribe': 0, 'subscribeType': 0, 'unionID': '', 'userCode': ''}}
    ShareVip(sharevipid, data1)
