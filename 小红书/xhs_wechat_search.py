# -*- encoding: utf-8 -*-
import urllib
from hashlib import md5
import httpx


class XhsKeywordSearch(object):

    def __init__(self):
        self.proxies = {'all://': 'socks5://58.241.109.182:20454'}
        # self.session = httpx.Client(http2=True, verify=False, proxies=self.proxies)
        self.session = httpx.Client(http2=True, verify=False)
        # self.token = '81_xQq14jr95_zMaAD0bb0nf_UkdV0hX_Wxp0ntydTsFQTeswbpc29zMW45u8tDTl1Ol9QdzL76NHJD-Y4pC3CPhkUNUADe1zpO-NY4S2yRo4sSLaYdI4REh_WCj80'
        self.token = 'wxmp.6dba891b-4975-4013-8526-3c7350ac9a7a'
        # self.token = ''

    # 传入keyword以及页数获取相关笔记
    def search_note(self, keyword, page, sortBy="general"):
        url = 'https://www.xiaohongshu.com/fe_api/burdock/weixin/v2/search/notes?keyword={}&sortBy={}&page={}&pageSize=20&prependNoteIds='.format(
            urllib.parse.quote(keyword), sortBy, page)
        return self._http_request(url)


    def _http_request(self, url, data=None, json_=None):
        response = self.session.request(
            method='POST' if data or json_ else 'GET',
            url=url,
            data=data,
            json=json_,
            headers={
                'Host': 'www.xiaohongshu.com',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 wechatdevtools/1.05.2103200 MicroMessenger/7.0.4 Language/zh_CN webview/',
                # 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.34(0x18002234) NetType/WIFI Language/zh_CN',
                'Authorization': self.token,
                'X-Sign': self.generate_sign(url),
                # 'Device-Fingerprint':"WHJMrwNw1k/GThqE0mGPK26WOAVQ8hE6jTsYawQL8Z1vUXVIKMkDhrXzfzYX/ErA+H56Z7vVXm+fh8gwUB6nGcr/gQvWKboaSdCW1tldyDzmauSxIJm5Txg==1487582755342",
                # 'X-WX-EXCLUDE-CREDENTIALS':'unionid, cloudbase-access-token, openid',
                # 'XX-WX-REGION':'ap-shanghai'
            },
            timeout=5,
            # verify=False,
            # proxies=self.proxies
        )
        response.encoding="utf-8"
        return response


    def generate_sign(self, url):
        if '/fe_api' in url:
            print('X' + md5((url[url.index('/fe_api'):] + 'WSUDD').encode(encoding='utf-8')).hexdigest())
            return 'X' + md5((url[url.index('/fe_api'):] + 'WSUDD').encode(encoding='utf-8')).hexdigest()
        return ''

    def run(self):
        keyword = '女生日常照片'
        page = 1
        result = self.search_note(keyword=keyword, page=page)
        print(result.text)


if __name__ == '__main__':
    spider = XhsKeywordSearch()
    spider.run()