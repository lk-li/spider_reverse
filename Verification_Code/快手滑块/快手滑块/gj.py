import random


###第一种
def get_track(distance):
    ratio = distance / 210
    origin_track = "3|18|0,14|18|9,25|17|16,39|17|27,47|17|32,54|17|40,65|17|48,72|17|56,79|17|66,83|17|75,86|17|84,90|17|95,94|17|97,101|17|104,108|17|112,119|17|120,130|17|128,141|17|136,155|17|146,159|17|153,173|17|160,184|17|168,195|17|176,210|17|184,217|17|192,228|17|200,239|17|211,242|17|217,250|17|227,257|17|232,264|17|240,268|17|248,275|17|256,278|17|264,289|17|275,300|17|280,307|17|288,322|17|296,333|17|305,344|17|312,358|17|320,369|17|328,384|17|336,398|17|344,413|17|352,427|17|360,442|17|368,449|17|376,463|17|384,471|17|392,478|17|400,489|17|409,492|17|426,500|17|432,507|17|448,510|17|464,576|152|472,579|152|480,532|17|488,539|17|496,547|16|504,615|148|512,561|16|520,572|15|531,576|15|546,579|15|564,583|15|616,586|15|640,594|15|648,597|15|656,659|144|664,605|15|672,608|14|680,615|14|688,619|14|696,619|13|704,623|13|712,626|13|720,634|13|736,637|13|744,641|13|752,644|13|761,648|13|779,652|13|817,655|13|922,659|13|939,663|13|962,666|13|985,670|13|994,673|13|1032,677|13|1057,681|13|1092,684|13|1112,688|13|1122,750|136|1136,695|13|1160,699|13|1177,702|13|1194,706|13|1234,710|13|1266,713|13|1330,717|13|1392,721|13|1448,724|13|1522,728|13|1577,731|13|1617"
    base_track = origin_track.split(",")
    new_track = ""

    yy = random.randint(-2, 2)

    for track in base_track:
        t = track.split("|")
        new_track += str(int(int(t[0]) * ratio)) + "|" + str(int(t[1]) + yy) + "|" + str(int(int(t[2]) * ratio)) + ","
    return new_track.rstrip(",")


###第二种
def __ease_out_expo(x):
    if x == 1:
        return 1
    else:
        return 1 - pow(2, -10 * x)


def __ease_out_quart(x):
    return 1 - pow(1 - x, 4)


def zhuanhuan(slide_track: list):
    result = ''
    for i in slide_track:
        result += "|".join([str(x) for x in i]) + ','
    return result[:-1]


def get_slide_track(distance):
    distance = int(distance * 1.02)
    if not isinstance(distance, int) or distance < 0:
        raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
    # 初始化轨迹列表
    _x = random.randint(0, 5)
    _y = random.randint(15, 17)
    t = 0
    slide_track = [
        [_x, _y, t]
    ]
    # 共记录count次滑块位置信息
    count = 30 + int(distance / 2)
    # 记录上一次滑动的距离
    _x = 0
    for i in range(count):
        # 已滑动的横向距离
        x = round(__ease_out_expo(i / count) * distance)
        # 滑动过程消耗的时间
        t += __ease_out_expo(i / count) * random.randint(10, 20)
        if t == 0:
            t += random.randint(5, 10)
        if x == _x:
            continue
        y = random.randint(_y - 3, _y + 3)
        slide_track.append([x, y, int(t)])
        _x = x
    return zhuanhuan(slide_track)


class Generate_trajectory:
    @staticmethod
    def __ease_out_expo(sep):
        if sep == 1:
            return 1
        else:
            return 1 - pow(2, -10 * sep)

    @staticmethod
    def __generate_y():
        init_y = random.randint(10, 30)
        y = [init_y]
        for i in range(20):
            _ = random.randint(-1, 1)
            y += [y[-1] + _] * random.randint(5, 10)
        return y

    @classmethod
    def get_slide_track(cls, distance):
        """
        根据滑动距离生成滑动轨迹
        :param distance: 需要滑动的距离
        """

        if not isinstance(distance, int) or distance < 0:
            raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")

        # 共记录count次滑块位置信息
        count = 30 + int(distance / 20)
        # 初始化滑动时间
        t = random.randint(50, 100)
        # 记录上一次滑动的距离
        _x = 0
        _y = cls.__generate_y()

        # 初始化轨迹列表
        slide_track = [
            '|'.join([str(random.randint(10, 30)), str(_y.pop(0)), str(0)])
        ]

        for i in range(count):
            # 已滑动的横向距离
            x = round(cls.__ease_out_expo(i / count) * distance)
            # 滑动过程消耗的时间
            t += random.randint(25, 40)
            if x == _x:
                continue
            slide_track.append('|'.join([str(x), str(_y[i]), str(t)]))
            _x = x
        # slide_track.append(slide_track[-1])
        return ','.join(slide_track)


if __name__ == '__main__':
    print(Generate_trajectory().get_slide_track(922))
