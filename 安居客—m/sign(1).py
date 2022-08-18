import hashlib


def get_sign(sign_str,uuid_):
    salt="118c00190000"
    sign = hashlib.md5(sign_str.encode()).hexdigest()
    sign_ = list(sign)
    f = sign_[0]
    zz = (ord(f) & 0xf)
    sign_[zz] = f
    output = ""
    for i in sign_:
        output += i
    print(output)
            #1000aa1e0d7ec0373a5c7288c3181d0f2bb2018c00190000194a7d4f
    sign = f'1000{output}{salt}{uuid_[:8]}'
    return sign

def test(sign):
    import requests

    headers = {
        'Host': 'api.anjuke.com',
                 #10006640e76b1de844fedb2a169defa3497f0196001900009ac24cea
        'nsign': sign,
        'get_md5': 'f93b01eba9dd2621bcfade74cb3dc2da01960196',
        'nsign_uuid': '9ac24cea-f824-4b20-8dd9-630620502e24',
        'memberid': '236228639',
      #  'authtoken': 'SSLQtQ4RSxWnduK0X5hdKVus68n3BytfXDDfoS7ys5ZpcrNfY11mw1DOYyyKqcEx',
        'clouduid': '37792182668038784',
        'xxzl-cid': 'c985d5515f734bc98ba78e2dca023661',
        'xxzl-sid': '8vSifg-O0S-MN2-TOs-2CZ1RqKKH',
        'user-agent': 'a-ajk/15.14.1/Android-MIX 2S/android/9',
       # 'ajkauthticket': 'TT=51793a5fe9c677264a8b4a206cf7e4fe&TS=1636361318946&PBODY=Dpc3b8ZscC_ukUngG-m98JbljzcdaJ7ejEQyzeQoxxvwPv-Xwm1PewXfwMWyupZTQ623WW3n5lJG6SCXhuu1uQVU9OX91oXy7n3jqgqJVwftPz8OoFqHq_0Qg8wrufZtL5gTxjW1ftyWjoAasPZFowvosUGoGGZ7V_rfA-oQNys&VER=2&CUID=QcmmpnNW3n0JQe3nzumnBgj5svAO2gEh',
        'accept-encoding': 'gzip',
    }

    params = (
        ('page', '1'),
        ('city_id', '12'),
        ('page_size', '25'),
        ('origin_mac', ''),
        ('app', 'a-ajk'),
        ('_pid', '25959'),
        ('_guid', '39ebb9cc-0a5b-4506-8d91-d5403ac17142'),
        ('macid', 'e28641fcc55aa97a'),
        ('version_code', '322067'),
        ('i', 'e28641fcc55aa97a'),
        ('m', 'Android-MIX 2S'),
        ('uuid', 'd17f5665-c2e5-4b5f-9296-1c7b52dfd6f9'),
        ('manufacturer', 'Xiaomi'),
        ('o', 'polaris-user 9 PKQ1.180729.001 9.9.3 release-keys'),
        ('qtime', '20211108165013'),
        ('cv', '15.14.1'),
        ('origin_imei', ''),
        ('v', '9'),
        ('ajk_city_id', '12'),
        ('from', 'mobile'),
        ('pm', 'b335'),
        ('androidid', 'e28641fcc55aa97a'),
        ('_chat_id', '2148048036'),
        ('oaid', 'f1ba36c1762972'),
        ('cid', ''),
    )

    response = requests.get('https://api.anjuke.com/mobile/v6/broker/list', headers=headers, params=params)

    # NB. Original query string below. It seems impossible to parse and
    # reproduce query strings 100% accurately so the one below is given
    # in case the reproduced version is not "correct".
    # response = requests.get('https://api.anjuke.com/mobile/v6/broker/list?page=1&city_id=12&page_size=25&origin_mac=&app=a-ajk&_pid=25959&_guid=39ebb9cc-0a5b-4506-8d91-d5403ac17142&macid=e28641fcc55aa97a&version_code=322067&i=e28641fcc55aa97a&m=Android-MIX%202S&uuid=d17f5665-c2e5-4b5f-9296-1c7b52dfd6f9&manufacturer=Xiaomi&o=polaris-user%209%20PKQ1.180729.001%209.9.3%20release-keys&qtime=20211108165013&cv=15.14.1&origin_imei=&v=9&ajk_city_id=12&from=mobile&pm=b335&androidid=e28641fcc55aa97a&_chat_id=2148048036&oaid=f1ba36c1762972&cid=', headers=headers)
    print(response.json())

uuid_="9ac24cea-f824-4b20-8dd9-630620502e24"
text="bcb2e93c6b527180099601a2dd8ef8b1/mobile/v6/broker/listd41d8cd98f00b204e9800998ecf8427e_pid25959_guid39ebb9cc-0a5b-4506-8d91-d5403ac17142_chat_id2148048036opolaris-user 9 PKQ1.180729.001 9.9.3 release-keysorigin_imeiorigin_macoaidf1ba36c1762972pmb335page1page_size25qtime20211108165013ie28641fcc55aa97amAndroid-MIX 2SmanufacturerXiaomimacide28641fcc55aa97aandroidide28641fcc55aa97aappa-ajkajk_city_id12cidcity_id12cv15.14.1frommobileuuidd17f5665-c2e5-4b5f-9296-1c7b52dfd6f9v9version_code322067"
print("10006640e76b1de844fedb2a169defa3497f0196001900009ac24cea")
sign = get_sign(text,uuid_)
print(sign)

test(sign)