import requests
from threading import Thread #, enumerate

def test(rank_state , rank_time):
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ1NzA4MjUsIm5iZiI6MTY2MzQ2ODYyNSwiaWF0IjoxNjYzNDY2ODI1LCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjoyMTE3MjM1NjQsImRlYnVnIjoiIiwibGFuZyI6IiJ9.kG9GmVLiLnQqDvucLEI8Jy9T3PX8QYDIUVayaf697kc"
    res = requests.get(url=f"https://cat-match.easygame2021.com/sheep/v1/game/{'game_over' if rank_state == 2 else 'topic_game_over'}?rank_score=1&rank_state=1&rank_time={rank_time}&rank_role={rank_state}&skin=34&t={token}", headers={
        "Content-Type": "application/json",
        "Host": "cat-match.easygame2021.com",
        "Referer": "https://servicewechat.com/wx141bfb9b73c970a9/14/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.27(0x18001b36) NetType/WIFI Language/zh_HK",
        "t": token
    },timeout=25)
    # print(len(enumerate()) , res.json())
    print(res.json())
    res.close()


#参数1 刷取类型 1 是话题 2 是羊群 默认羊群
#参数2 过关时间默认是 5 分钟

while 1:
    thread_list = [Thread(target=test , args=(2 , 5*60)) , Thread(target=test , args=(1 , 5*60))]
    for t in thread_list:
        t.start()
    for t in thread_list:
        t.join()