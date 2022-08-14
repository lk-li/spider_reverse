import execjs
import requests
from urllib import parse
with open('xb.js', 'r', encoding='utf-8') as f:
    da = f.read()

keyword = '斗破苍穹有声小说'

url_para = 'device_platform=webapp&aid=6383&channel=channel_pc_web&search_channel=aweme_general&sort_type=0&publish_time=0&keyword='+parse.quote(keyword)+'&search_source=normal_search&query_correct_type=1&is_filter_search=0&from_group_id=&offset=0&count=10&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1680&screen_height=1050&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=104.0.0.0&browser_online=true&engine_name=Blink&engine_version=104.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=12&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7064362374334432802&msToken=rbBAyOcN-UmxttG3TWXArt1XOkmuxBGZCX5lPV14_IL5K4n3YaFUxzuEwOpS_2dIkrPkc6L_dzpdi9g9F0kIQ58_eXy7YeEIOTPxZ9h-Mt9EpXQUP1cwZRqigRDKtTh3gg=='
ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"

X_Bogus = execjs.compile(da).call(' get_xb_ret', url_para, ua)

url = "https://www.douyin.com/aweme/v1/web/general/search/single/?device_platform=webapp&aid=6383&channel=channel_pc_web&search_channel=aweme_general&sort_type=0&publish_time=0&keyword="+keyword+"&search_source=normal_search&query_correct_type=1&is_filter_search=0&from_group_id=&offset=0&count=10&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1680&screen_height=1050&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=104.0.0.0&browser_online=true&engine_name=Blink&engine_version=104.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=12&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7064362374334432802&msToken=rbBAyOcN-UmxttG3TWXArt1XOkmuxBGZCX5lPV14_IL5K4n3YaFUxzuEwOpS_2dIkrPkc6L_dzpdi9g9F0kIQ58_eXy7YeEIOTPxZ9h-Mt9EpXQUP1cwZRqigRDKtTh3gg==&X-Bogus=" + X_Bogus


headers = {
    'authority': 'www.douyin.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    # 'cookie': 'ttwid=1%7Cuuz9Arj-B1p0okXVqhHwQutLUEcrgPgD3NltMO5vPGo%7C1644800050%7C89f71bc5b7e9b6c9be7cc221fe5c04ac7e16f2bbfa99c437b7ad9c9ca6d957e9; ttcid=4083e492b6bd4724970dffdfa644fa7d35; odin_tt=abb41d057e9556748fbf777c736f389d259d604e5ae86916089012aac61ae934ff5318373bc61fea3b791a8b5ff85bd778072b658efcb0f658016d6799a5849e; DOUYIN_WEB_HIDE_IM_LOGIN_GUIDE=45; s_v_web_id=verify_l5d9rbm0_ZTjHd9Nl_Ck0T_4IU4_BaBv_brNpnjrbDoOb; passport_csrf_token=31bf8d60c8280b08c884f9a88fd79134; passport_csrf_token_default=31bf8d60c8280b08c884f9a88fd79134; download_guide=%223%2F20220810%22; _tea_utm_cache_2018=undefined; douyin.com; live_can_add_dy_2_desktop=%221%22; strategyABtestKey=1660445859.072; VIDEO_FILTER_MEMO_SELECT=%7B%22expireTime%22%3A1661056447245%2C%22type%22%3A1%7D; tt_scid=stzxS9aqf7JxUU8hceaPly261PxanFVG58sQ1daPL4FiXqdRfE8uhNWQN.MJ8O8n9218; msToken=KKyFz56i_Rr8FyQu6_2834wAkn-0jojJwmJT87pn4TLYRc2PcC9BQTGU_0dwnHm2n8IKenC4ZXm5Oh5UdO9VBW0cc6iQaU8HynuBkdFuaAbW9t0qv1jMuAVI; __ac_nonce=062f8d6af00376acecada; __ac_signature=_02B4Z6wo00f01t5SrfAAAIDDIB7RwPrkO17ecqlAANV5laLJ4HDUreng4eX5sGjsJJFbvSsEG0Lj.x5vEbOB2p1WYBj7TihYDYAGY8FLCt8PnYx9Eyf7O978MALhdsMe5yH4bL4kCfUE3lN933; home_can_add_dy_2_desktop=%221%22; msToken=rbBAyOcN-UmxttG3TWXArt1XOkmuxBGZCX5lPV14_IL5K4n3YaFUxzuEwOpS_2dIkrPkc6L_dzpdi9g9F0kIQ58_eXy7YeEIOTPxZ9h-Mt9EpXQUP1cwZRqigRDKtTh3gg==; THEME_STAY_TIME=%226001%22',
    'referer': 'https://www.douyin.com/search/%E6%96%97%E7%A0%B4%E8%8B%8D%E7%A9%B9%E6%9C%89%E5%A3%B0%E5%B0%8F%E8%AF%B4?source=search_history&aid=7f345fdf-5cd3-445a-9760-b3f78f3837a7&enter_from=recommend&focus_method=&gid=7130132479016504579',
    'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
