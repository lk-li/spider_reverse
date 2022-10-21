import requests
import time

import config
import babybus


def miyun():
    # 获取 token
    resopn = requests.get(
        'https://api.miyun999.live/api/login?apiName=%s&password=%s' % (config.apiName, config.mypassword))
    # print(resopn.json())
    token = resopn.json()['token']
    project_id = config.myproject_id

    number = config.number
    while number:
        resopn1 = requests.get(
            f'https://api.miyun999.live/api/get_mobile?token={token}&scope_black={config.scope_black}&scope={config.scope}&project_id={project_id}')
        # print(resopn1.json())
        try:
            phone = resopn1.json()['mobile']
        except Exception as e:
            print(resopn1.json()['message'])
            # print('请去设置文件重新配置号段')
            break
        if phone:
            print('取到到手机号：', phone)
            # 邀请码
            identity = config.identity

            cose = babybus.SendSmsCap(str(phone))

            if cose['resultMessage'] != '调用成功':
                print(cose['resultMessage'])
                continue

            inde_time = 10
            while inde_time:
                # 取码
                resopn2 = requests.get(
                    f'https://api.miyun999.live/api/get_message?token={token}&project_id={project_id}&phone_num=' + phone)

                if resopn2.json()['code']:

                    verify = resopn2.json()['code']

                    print('验证码：', verify)

                    contn = babybus.mian(phone, verify, identity)

                    try:
                        if contn['resultCode'] == '调用成功':
                            print(f"邀请成功：{phone}--{contn['resultMessage']}")
                            with open('conten.txt', 'a+', encoding='utf-8') as f:
                                dats = f"{phone}---{contn['resultMessage']}" + '\n'
                                f.write(dats)
                                number -= 1
                        if contn['resultCode'] == '助力已完成':
                            print(phone,'助力已达到上限')
                        else:

                            print(f"邀请失败：{contn}")

                    except Exception as e:
                        print(phone + '----', contn)
                    break
                inde_time -= 1
                time.sleep(3)

            resopn3 = requests.get(
                f"https://api.miyun999.live/api/free_mobile?token={token}&project_id={project_id}&phone_num=" + phone)

            print('号码释放', resopn3.json()['message'])
        else:

            print(resopn1.json()['message'])
            break


if __name__ == '__main__':
    # 流星
    # liuxin()
    # 椰子云
    # yeziyun()
    # 米云
    miyun()
