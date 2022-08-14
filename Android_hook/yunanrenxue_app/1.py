import jpype
import requests
import time


def main():
    jpype.startJVM(jpype.getDefaultJVMPath(), "-ea", "-Djava.class.path=Sign.jar")  # 启动java虚拟机
    jclass = jpype.JClass("Sign")  # 获取java类
    Sign = jclass()  # 实例化java对象
    url = 'https://appmatch.yuanrenxue.com/app1'
    for page in range(1, 6):
        data = {
            "page": page,
            "t": int(time.time())
        }
        data["sign"] = str(Sign.sign(f'page={data["page"]}{data["t"]}'.encode()))
        response = requests.post(url, data=data).json()
        print(response)
    jpype.shutdownJVM()


if __name__ == '__main__':
    main()
