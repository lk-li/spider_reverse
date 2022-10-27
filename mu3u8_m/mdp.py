import os
import time
import m3u8
import re
import requests
from glob import iglob
from natsort import natsorted
from urllib.parse import urljoin
from dataclasses import dataclass
from concurrent.futures import ThreadPoolExecutor


@dataclass
class DownLoad_M3U8(object):
    m3u8_url: str
    file_name: str

    def __post_init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', }
        self.threadpool = ThreadPoolExecutor(max_workers=10)
        if not self.file_name:
            self.file_name = 'new.mp4'

    def get_ts_url(self):
        m3u8_obj = m3u8.load(self.m3u8_url)
        base_uri = m3u8_obj.base_uri
        for seg in m3u8_obj.segments:
            yield urljoin(base_uri, seg.uri)

    def download_single_ts(self, urlinfo):
        url, ts_name = urlinfo
        res = requests.get(url, headers=self.headers)
        with open(ts_name, 'wb') as fp:
            fp.write(res.content)

    def download_all_ts(self):
        ts_urls = self.get_ts_url()
        for index, ts_url in enumerate(ts_urls):
            print(ts_url)
            self.threadpool.submit(self.download_single_ts, [ts_url, f'{index}.ts'])
        self.threadpool.shutdown()

    def run(self):
        self.download_all_ts()
        ts_path = '*.ts'
        with open(self.file_name, 'wb') as fn:
            for ts in natsorted(iglob(ts_path)):
                with open(ts, 'rb') as ft:
                    scline = ft.read()
                    fn.write(scline)
        for ts in iglob(ts_path):
            os.remove(ts)

    def get_key(self,url):
        # 获取加密key
        obj = re.compile(r'METHOD=AES-128,URI="(?P<url>.*?)"', re.S)  # 用来提取m3u8地址
        resp = requests.get(url)
        url_key = obj.search(resp.text).group("url")
        key = requests.get(url_key).text
        return key
if __name__ == '__main__':
    m3u8_url = 'https://usersfiles.whatfugui.com:59888/f/data6/B6C3D3C7E6995326/838518E40E57A9AD/play.m3u8'
    file_name = '美女'
    start = time.time()
    M3U8 = DownLoad_M3U8(m3u8_url, file_name)
    print(M3U8.get_key('https://v30.51cto.com/e73c94f825de4b8184f5fc01b9b8eb67/04629be96f6c5029940255b6145d3e51-ld-encrypt-stream.m3u8'))
    exit()
    M3U8.run()
    end = time.time()
    print('耗时:', end - start)
