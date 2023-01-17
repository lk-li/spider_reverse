#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
@Author     : 不愿
@Contact    : 1119035003@qq.com
@Software   : PyCharm
@File       : random 
@ Time      : 2023-01-17 11:53
"""
import math
import random




def get_customer_slide_data(distance):
    trace_data = [[random.randint(20, 60), random.randint(10, 40), 0]]
    count = 30 + int(distance / 2)
    x = random.randint(10, 15)
    add = -1
    is_back = True
    for i in range(count):
        if i == int(count / 2):
            add = i + 1
        if i == add and is_back:
            x += 2
            add = random.randint(i, i + 4)
            trace_data.append([x, 0, random.randint(10, 20)])
            is_back = False
            continue
        if x - 1 > 0:
            x -= random.choice([1, 1, 1, 0, 0, 0, 0, 0])
            trace_data.append([x, 0, random.randint(10, 20)])
        else:
            trace_data.append([1, 0, random.randint(10, 20)])
        is_back = True
    trace_data.append([0, 0, random.randint(100, 300)])

    return trace_data


def get_slide_data_v2(distance):
    trace_data = [[random.randint(20, 60), random.randint(10, 40), 0]]
    count = 30 + int(distance / 2)
    time = 0
    _x = 0
    for i in range(count):
        x = round(i / count * distance) + 1
        if _x == x:
            continue
        trace_data.append([x - _x, 0, time])
        _x = x
        time = random.randint(10, 20)
    trace_data.append([0, 0, random.randint(200, 300)])
    print(trace_data)
    return trace_data
import random


def __ease_out_expo(x):
    if x == 1:
        return 1
    else:
        return 1 - pow(2, -10 * x)


def __ease_out_quart(x):
    return 1 - pow(1 - x, 4)


def get_slide_track(distance):
    """
    根据滑动距离生成滑动轨迹
    :param distance: 需要滑动的距离
    :return: 滑动轨迹<type 'list'>: [[x,y,t], ...]
        x: 已滑动的横向距离
        y: 已滑动的纵向距离, 除起点外, 均为0
        t: 滑动过程消耗的时间, 单位: 毫秒
    """

    if not isinstance(distance, int) or distance < 0:
        raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
    # 初始化轨迹列表
    slide_track = [
        [random.randint(20, 60), random.randint(10, 40), 0]
    ]
    # 共记录count次滑块位置信息
    count = 30 + int(distance / 2)
    # 初始化滑动时间
    t = random.randint(50, 100)
    # 记录上一次滑动的距离
    _x = 0
    _y = 0
    for i in range(count):
        # 已滑动的横向距离
        x = round(__ease_out_expo(i / count) * distance)
        # 滑动过程消耗的时间
        t = random.randint(10, 20)
        if x == _x:
            continue
        slide_track.append([x - _x, _y, t])
        _x = x
    slide_track.append([0, 0, random.randint(200, 300)])
    return slide_track


if __name__ == '__main__':
    slide_track = []
    for _ in get_slide_track(100):
        _ = [str(i) for i in _]
        slide_track.append('|'.join(_))
    print(slide_track)
