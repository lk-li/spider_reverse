import requests
from py_mini_racer import MiniRacer


def init_ctx():
    with open('a_bogus.js', 'r', encoding='utf-8') as f:
        js_code = f.read()
    ctx = MiniRacer()
    ctx.eval(js_code)
    return ctx


js_context = init_ctx()

cookies = "自己复制"

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
}

params = {
    'device_platform': 'webapp',
    'aid': '6383',
    'channel': 'channel_pc_web',
    'publish_video_strategy_type': '2',
    'source': 'channel_pc_web',
    'sec_user_id': 'MS4wLjABAAAAARbzTNzTdRkfL7E8-HKgy5_B7gWHrUpZFGPtj2vGJExStAYWRbnabJFbdVlbr98a',
    'personal_center_strategy': '1',
    'update_version_code': '170400',
    'pc_client_type': '1',
    'version_code': '170400',
    'version_name': '17.4.0',
    'cookie_enabled': 'true',
    'screen_width': '1536',
    'screen_height': '864',
    'browser_language': 'zh-CN',
    'browser_platform': 'Win32',
    'browser_name': 'Chrome',
    'browser_version': '123.0.0.0',
    'browser_online': 'true',
    'engine_name': 'Blink',
    'engine_version': '123.0.0.0',
    'os_name': 'Windows',
    'os_version': '10',
    'cpu_core_num': '16',
    'device_memory': '8',
    'platform': 'PC',
    'downlink': '10',
    'effective_type': '4g',
    'round_trip_time': '50',
    'webid': '7362942367496504871',
    'a_bogus': js_context.call("generate_a_bogus",
                               'device_platform=webapp&aid=6383&channel=channel_pc_web&publish_video_strategy_type=2&source=channel_pc_web&sec_user_id=MS4wLjABAAAAARbzTNzTdRkfL7E8-HKgy5_B7gWHrUpZFGPtj2vGJExStAYWRbnabJFbdVlbr98a&personal_center_strategy=1&update_version_code=170400&pc_client_type=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1536&screen_height=864&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=123.0.0.0&browser_online=true&engine_name=Blink&engine_version=123.0.0.0&os_name=Windows&os_version=10&cpu_core_num=16&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7362942367496504871',
                               "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"),
}

response = requests.get(
    'https://www.douyin.com/aweme/v1/web/user/profile/other/',
    params=params,
    cookies=cookies,
    headers=headers,
)

print(response.text)
