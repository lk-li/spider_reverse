import requests
import execjs
import hashlib


def get_md5(f):
    fmd5 = hashlib.new('md5', f.encode()).hexdigest()
    return fmd5

with open('x-s.js', 'r', encoding='utf-8') as f:
    jscode = f.read()

ctx = execjs.compile(jscode)

param_str = 'url=/api/sns/web/v1/user_posted?num=30&cursor=&user_id=59da203e44363b79d596c505'
a1 = '1880fa5e55d7id6uxds2r2cu73pm4whc579o1qbtk30000256007'
md5_str = get_md5(param_str)
print(md5_str)
dic_str = ctx.call('Decrypt', md5_str,a1)
print(dic_str)
cookies1 = {
    # 'gid.ss': 'gSMQ9UOnDuZwH2oRGJG6BW6e4grs67TaYpnrW+8Wmd1BKCiGAP9C5yOEDqp0C0nj',
    # 'smidV2': '2022101121585006eb59d96a6f2adbac8dac6c48decf3c0025216b781b8dab0',
    # 'timestamp2': '16681819485764260c72e52e52f7432977c77b14e0051dbe415b71c95efe9c8',
    # 'timestamp2.sig': 'XjhSzId6Dd0Rv--ndXf_0nb1IIbQSWgRA0vgmogvDdg',
    # 'xhsTrackerId': '93f4d276-08e2-41ad-8a14-32d055bb2517',
    # 'xhsTrackerId.sig': 'nOUCUYrWrRwlHOo3TzZ1equDFOQCwOZ9AW4dNvTitvs',
    # 'xhsTracker': 'url=explore&searchengine=baidu',
    # 'xhsTracker.sig': 'u1cFYHAwm89lKbFLL1Y8vp9JcskioXWTa56RKaAB2ys',
    'xsecappid': 'xhs-pc-web',
    'a1': a1,
    # 'webId': '14433c82e305ead3e1b79334ceef5d80',
    # 'gid': 'yYY8i02dY42qyYY8i02d2WAD2fW3fK7CfMJFj9TJS7WqUlq864ExSy888J2K88W84yWqD02q',
    # 'gid.sign': 'w8jObylwLOVWAu88QL+zCMMkWiA=',
    'web_session': '030037a36d4a5b57632f635826234a533ad566',
    # 'webBuild': '2.7.10',
    # 'websectiga': '2845367ec3848418062e761c09db7caf0e8b79d132ccdd1a4f8e64a11d0cac0d',
    # 'sec_poison_id': '4777cab8-f8af-4938-b030-753c151ed8d1',
    # 'fepilaferror': '404,user-profile',
    # 'fepilaferror.sig': 'gi1l25guwXfdkwYCZff_BS0Frxod7VaiBprSj6KZOpE',
}
cookies = {
    'gid.ss': 'gSMQ9UOnDuZwH2oRGJG6BW6e4grs67TaYpnrW+8Wmd1BKCiGAP9C5yOEDqp0C0nj',
    'smidV2': '2022101121585006eb59d96a6f2adbac8dac6c48decf3c0025216b781b8dab0',
    'timestamp2': '16681819485764260c72e52e52f7432977c77b14e0051dbe415b71c95efe9c8',
    'timestamp2.sig': 'XjhSzId6Dd0Rv--ndXf_0nb1IIbQSWgRA0vgmogvDdg',
    'xhsTrackerId': '93f4d276-08e2-41ad-8a14-32d055bb2517',
    'xhsTrackerId.sig': 'nOUCUYrWrRwlHOo3TzZ1equDFOQCwOZ9AW4dNvTitvs',
    'xhsTracker': 'url=explore&searchengine=baidu',
    'xhsTracker.sig': 'u1cFYHAwm89lKbFLL1Y8vp9JcskioXWTa56RKaAB2ys',
    'xsecappid': 'xhs-pc-web',
    'a1': a1,
    'webId': '14433c82e305ead3e1b79334ceef5d80',
    'gid': 'yYY8i02dY42qyYY8i02d2WAD2fW3fK7CfMJFj9TJS7WqUlq864ExSy888J2K88W84yWqD02q',
    'gid.sign': 'w8jObylwLOVWAu88QL+zCMMkWiA=',
    'web_session': '030037a36d4a5b57632f635826234a533ad566',
    'webBuild': '1.4.4',
    'websectiga': '3633fe24d49c7dd0eb923edc8205740f10fdb18b25d424d2a2322c6196d2a4ad',
}


headers = {
    'authority': 'edith.xiaohongshu.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'no-cache',
    # 'cookie': 'gid.ss=gSMQ9UOnDuZwH2oRGJG6BW6e4grs67TaYpnrW+8Wmd1BKCiGAP9C5yOEDqp0C0nj; smidV2=2022101121585006eb59d96a6f2adbac8dac6c48decf3c0025216b781b8dab0; timestamp2=16681819485764260c72e52e52f7432977c77b14e0051dbe415b71c95efe9c8; timestamp2.sig=XjhSzId6Dd0Rv--ndXf_0nb1IIbQSWgRA0vgmogvDdg; xhsTrackerId=93f4d276-08e2-41ad-8a14-32d055bb2517; xhsTrackerId.sig=nOUCUYrWrRwlHOo3TzZ1equDFOQCwOZ9AW4dNvTitvs; xhsTracker=url=explore&searchengine=baidu; xhsTracker.sig=u1cFYHAwm89lKbFLL1Y8vp9JcskioXWTa56RKaAB2ys; xsecappid=xhs-pc-web; a1=1880fa5e55d7id6uxds2r2cu73pm4whc579o1qbtk30000256007; webId=14433c82e305ead3e1b79334ceef5d80; gid=yYY8i02dY42qyYY8i02d2WAD2fW3fK7CfMJFj9TJS7WqUlq864ExSy888J2K88W84yWqD02q; gid.sign=w8jObylwLOVWAu88QL+zCMMkWiA=; web_session=030037a36d4a5b57632f635826234a533ad566; webBuild=1.4.4; websectiga=3633fe24d49c7dd0eb923edc8205740f10fdb18b25d424d2a2322c6196d2a4ad',
    'origin': 'https://www.xiaohongshu.com',
    'pragma': 'no-cache',
    'referer': 'https://www.xiaohongshu.com/',
    'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'x-b3-traceid': '3153a6a6dbd9f1cd',
    'x-s': dic_str['x-s'],
    # 'x-s-common': '2UQAPsHCPUIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0P1PUhIHjIj2eHjwjQ+GnPW/MPjNsQhPUHCHdYiqUMIGUM78nHjNsQh+sHCH0r1+shFHjIj2eLjwjHlweWI8frM8/LM8e4k8e8M2BzAPdHUG7L7P7mT+o4iGAL7wnulqnQFyAPIPeZIP0L9PeZ7HjIj2eGjw0r9weLF+/HlPAPMPeWVHdW7H0ijnbSgg9pEadkYp9zMp/+y4LSxJ9Swprpk/r+t2fbg8opnaBl7nS+Q+DS187YQyg4knpYs4M+gLnSOyLiFGLY+4B+o/gzDPS8kanS7ynPUJBEjJbkVG9EwqBHU+BSOyLShanS7yn+oz0pjzASinD+Q+DST/g4wyfT7nfkiyLMTafkwpFkVngk8PrMxJBSypBzinp4wybSTL/QwprDl/SztJbkozfT8JL8Tngkz+rMTzfl8PSbh/nkwyrRo/fMypb8xnSzp2LEgp/p+zbrM/pzz4FRrngYwySDA/L48PDFU/fk+zbkk/gk0+pkTz/p8PSDI/F4++pkL/fSyJpQi/p4yybSLzfl8yfT7nDz0PbSgzgk+pFDl/D4+PFMT/fT+zMrA/D4ByrMCzfSwpbQx/dktySkozfkwzBqMnnkVyMSLyBkypb8V/DziJLEozfM8yflin/QyyDFUpfY+ySkTnSzsyLMxn/Q8pbkk/D4wyDFU/fSwpbbC/LzdPMkragSwprSCnnMzPLEL8BkypFph//QtySSCGAQOzFpC/gkz2LMonfSOpMpCnD4p2rFU//bwyD8inpzd2LRoLfT8pBTh/S4Q+LFUagY+JpbC/M4nyLEoa/zyzMrUnSzyyrMLpfY+yDk3/MzDJrMgp/bwzFSh/gk32rExcg48prbh/0QzPDETafY+pMLl/LznyFELLfM8PDFFngk34Mkgn/zw2f+7/fkbPFErG748JL8x/nkm2SkxLfkOpFEx//Q+2SSTp/+8yf+hnfkiJbkrc/++pbDAnD48PDRr/fT+yD8T/nM+2bkx/gYwzFEi/DzDJpkrcgS+zFpC/S+twaHVHdWhH0ija/PhqDYD87+xJ7mdag8Sq9zn494QcUT6aLpPJLQy+nLApd4G/B4BprShLA+jqg4bqD8S8gYDPBp3Jf+m2DMBnnEl4BYQyrkSLFQ+zrTM4bQQPFTAnnRUpFYc4r4UGSGILeSg8DSkN9pgGA8SngbF2pbmqbmQPA4Sy9MaPpbPtApQy/8A8BE6q9k6pepEqgzGqgb7ngQsqnRQ2sV3zFzkN7+n4BTQ2emA2op7q0zl4BSQy7Q7anD6q9T0GA+QcFlfa/+O8/mM4BIUPrzyqFIM8Lz/afpxpdqIanSS8gYn4FI3Loz6qdbFybm8N9p3JpqFagW3yLSiqSQCpd4daMmFnLDALpm6/rTS+dbFyrShN7P9pdz6anS+JFSkzaRdc08SL9zHP7Qf4d+x4gzNqSkd8n80q0Sd8DTSnn+cqFSh/fp/pdzdaLL68nzn4BYU2fWE/fRPJDSh+gPAqgzaJfP78p8fzUTQy9+7anSH4ecIGDMQ4fYl4bPh8FSkyn8Ipd4maL+HpDk6P9p/qBpSyMmFpDShP9LIyDWRHjIj2eDjwjFlweH9+ADlPAZANsQhP/Zjw0HFKc==',
    'x-t': dic_str['x-t'],
}
params = {'num': '30','cursor': '','user_id': '59da203e44363b79d596c505'}

response = requests.get('https://edith.xiaohongshu.com/api/sns/web/v1/user_posted',params=params,cookies=cookies,headers=headers)
print(response.text)
# XYW_eyJzaWduU3ZuIjoiNTAiLCJzaWduVHlwZSI6IngxIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjgwNDRiN2U3ZDZiZjFhYjc4Y2VhMDFmZjU4YWM3ZmI1MzE5MGExNDE3YTE3OTg1NTMyOWFlMTE2ZGM4ZDMzMmFmZGY3N2M3YzU5ZTQ1ZDA1NGFmNmMxZDYwODI0MTdiMjE2ZTJlM2JmYjg5ZTJkYTFkYWQ2MWM1MDQxZDZhYzJiZGFkNjFjNTA0MWQ2YWMyYmJhMWM0ZmNjNTUyMGEzZTNmOWY2Yjk1M2ZmODE5ZjdjNGQzOTY0ZDYxMDQwNWVmYTk5ZmQ2MDQ5NTU2OGNjNTI5ZjYzNTU5NjVmZTRjODc1NDczZGU1MTAxNjBmNWY5M2Y1YTc2MjM0YjRkZmM2NzQzODFjZjM2NjYwY2JlMzUxMzI1NGQxODhjZTA4MzQ2YzFhYzYxYjVhYmJlMDgxNjQxYmUzMTI2ZWYyODIxMzk2NzgyYjdiODc3NTUxOGMzZTBhMzZkN2IwMTAxN2RlN2RiODkwN2U2ODQ2YmI1NTAzZjI4YmM1YmNlZGY2ODEyYiJ9
# XYW_eyJzaWduU3ZuIjoiNTAiLCJzaWduVHlwZSI6IngxIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjU0ZGE2ZGNkZDE4YmZlMmZkZWY1ZDkwMTQ0MjU3MzBiYTU1YWU5ZjQ5NjMxNzAyNTk4NWVmYTZkYzAxMzdmNzEzNDJkMzExZDE3MjRhNDRlMzEwZTAxZDgyZWJhZTA0YjE2ZTJlM2JmYjg5ZTJkYTFkYWQ2MWM1MDQxZDZhYzJiZGFkNjFjNTA0MWQ2YWMyYmJhMWM0ZmNjNTUyMGEzZTNmOWY2Yjk1M2ZmODE5ZjdjNGQzOTY0ZDYxMDQwNWVmYTk5ZmQ2MDQ5NTU2OGNjNTI5ZjYzNTU5NjVmZTRjODc1NDczZGU1MTAxNjBmNWY5M2Y1YTc2MjM0YjRkZmM2NzQzODFjZjM2NjYwY2JlMzUxMzI1NGQxODhjZTA4MzQ2YzFhYzYxYjVhYmJlMDgxNjQxYmUzMTI2ZWYyODIxMzk2NzgyYjdiODc3NTUxOGMzZTBhMzZkN2IwMTAxN2RlN2QxMTVhNzQzZGQwMDQ4MjBlOTlmMWMzMjU4ODNkOWY3MSJ9