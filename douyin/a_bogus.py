
import time
import random
import base64
from gmssl import sm3
from functools import reduce


box1 = [0, 218, 17, 20, 25, 23, 95, 116, 236, 14, 146, 5, 3, 151, 128, 186, 32, 114, 244, 80, 4, 46, 36, 85, 213, 108,
      174, 201, 63, 129, 47, 99, 38, 81, 150, 242, 69, 60, 72, 55, 192, 52, 10, 77, 96, 141, 59, 62, 165, 204, 67, 120,
      90, 240, 200, 94, 164, 221, 229, 98, 37, 145, 57, 230, 8, 232, 169, 212, 132, 115, 209, 54, 110, 170, 39, 91, 167,
      225, 207, 31, 210, 182, 152, 83, 144, 195, 211, 161, 65, 29, 147, 183, 42, 97, 153, 50, 223, 43, 188, 79, 158,
      187, 166, 179, 68, 121, 44, 155, 75, 173, 252, 249, 11, 159, 27, 133, 58, 124, 243, 198, 239, 45, 241, 217, 1, 74,
      162, 103, 136, 226, 112, 199, 191, 21, 180, 163, 196, 157, 71, 56, 143, 234, 33, 205, 233, 34, 181, 139, 119, 64,
      193, 102, 76, 61, 15, 109, 160, 222, 111, 247, 202, 104, 70, 84, 178, 171, 86, 140, 53, 238, 88, 255, 228, 175,
      22, 118, 177, 197, 105, 82, 7, 154, 92, 190, 248, 246, 214, 203, 135, 126, 123, 78, 18, 30, 35, 245, 12, 168, 51,
      100, 227, 251, 235, 93, 49, 122, 208, 206, 219, 142, 101, 176, 215, 130, 66, 117, 40, 134, 2, 253, 216, 189, 156,
      125, 24, 16, 26, 41, 220, 137, 106, 250, 172, 138, 237, 127, 19, 107, 148, 194, 89, 48, 254, 113, 231, 185, 28,
      224, 87, 73, 184, 9, 6, 13, 131, 149]

box2 = [0, 7, 140, 235, 54, 24, 170, 17, 222, 123, 210, 20, 206, 127, 179, 162, 78, 199, 21, 227, 37, 77, 171, 5, 224, 26,
      3, 114, 176, 89, 151, 57, 220, 100, 69, 70, 28, 254, 60, 58, 113, 92, 73, 18, 186, 98, 228, 152, 75, 255, 64, 23,
      232, 244, 109, 81, 84, 79, 65, 49, 190, 126, 63, 148, 195, 88, 14, 96, 10, 30, 99, 201, 245, 193, 39, 108, 51, 4,
      103, 132, 239, 182, 139, 97, 226, 229, 212, 102, 48, 144, 125, 216, 107, 15, 207, 1, 74, 247, 130, 143, 184, 61,
      217, 189, 149, 225, 211, 204, 253, 145, 241, 194, 214, 202, 236, 47, 121, 164, 157, 93, 8, 196, 67, 34, 118, 25,
      59, 72, 44, 158, 146, 166, 243, 208, 87, 111, 155, 90, 46, 32, 105, 147, 173, 11, 246, 153, 141, 163, 104, 234,
      124, 122, 35, 150, 110, 238, 38, 160, 167, 174, 115, 112, 66, 169, 95, 117, 36, 221, 252, 68, 53, 131, 156, 133,
      213, 198, 161, 101, 83, 159, 76, 116, 142, 91, 9, 12, 178, 205, 55, 209, 137, 183, 120, 197, 19, 180, 172, 71,
      181, 135, 22, 231, 233, 86, 27, 154, 80, 192, 175, 56, 31, 177, 2, 242, 203, 251, 106, 168, 119, 42, 248, 165,
      185, 187, 33, 129, 237, 138, 230, 191, 250, 29, 40, 41, 45, 240, 52, 136, 6, 94, 43, 134, 16, 200, 215, 82, 13,
      249, 85, 188, 0, 50, 219, 128, 218, 223]


def xor_encrypt(message, box):
    encrypt_list = bytearray()
    for i in range(len(message)):
        box[0] = box[0] + box[i + 1]
        if box[0] > 255:
            box[0] ^= 256
        box[i + 1], box[box[0]] = box[box[0]], box[i + 1]
        encrypt_list.append(message[i] ^ (box[(box[i + 1] + box[box[0]]) & 255]))
    return encrypt_list


def base64encode(message, base64table):
    str_trans = str.maketrans("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", base64table)
    return base64.b64encode(message).decode().translate(str_trans).encode()


def a_bogus(url, data, ua):
    ua_arr = bytes.fromhex(sm3.sm3_hash(list(base64encode(xor_encrypt(ua.encode(), box1[:]), "ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe="))))
    url_arr = bytes.fromhex(sm3.sm3_hash(list(bytes.fromhex(sm3.sm3_hash(list((url + 'bds').encode()))))))
    if data:
        data_arr = bytes.fromhex(sm3.sm3_hash(list(bytes.fromhex(sm3.sm3_hash(list((data + 'bds').encode()))))))
    else:
        data_arr = [83, 69, 109, 82, 24, 153, 247, 200, 198, 128, 168, 162, 244, 70, 5, 146, 100, 77, 138, 136, 44, 218, 117, 115, 118, 120, 152, 238, 238, 224, 239, 43]

    t0 = int(time.time() * 1000)
    t1 = t0 + int(random.random() * (800 - 450 + 1))
    t2 = t1 + int(random.random() * (800 - 450 + 1))

    m29 = list()
    m29 += [
        65, (t0 >> 24) & 255, 0, 0, 0, url_arr[21], data_arr[21], ua_arr[23], (t0 >> 16) & 255, 0, 1, 0, url_arr[22], data_arr[22], ua_arr[24],
        (t1 >> 8) & 255, 0, 0, 0, (t1 >> 0) & 255, 0, 0, 14, (t0 >> 24) & 255, (t0 >> 16) & 255, (t0 >> 8) & 255, (t0 >> 0) & 255, 3
    ]
    m29.append(reduce(lambda x, y: x ^ y, [0] + m29))
    m1 = bytes([(((t2 >> 0) & 255) & 170) | 1, (((t2 >> 0) & 255) & 85) | 2, (((t2 >> 8) & 255) & 170) | 64, (((t2 >> 8) & 255) & 85) | 2]) + xor_encrypt(bytes(m29), box2[:])
    ab = base64encode(m1, "Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe=").decode()
    return ab


def main():
    # get
    url = 'count=18&cursor=0&device_id=2071959979437438&iid=4270983236027486&version_code=1.9.1.0&channel=release&device_type=win&aid=4783&app_name=ep_pc&device_platform=pc&app_id=4783&course_type=2&goods_id=7108531004008044807&msToken=-DcKxyoHIov9rt1j8QYMxXBfhoRby1jrruHcbJoKF8uOjjgEgyw8gn9moCubQsvE3yzsdYfOLRgT1MUJyFsl97sJsRug0kDx8w57eHRijBKqvnWlEn_KHsjxQP3NiZOv&a_bogus=DflYhcZWMsm13Evhgwkz9S4mLTD0YW49gZENNxKhkzqA'
    ua = 'Mozilla/5.0 (Windows NT 10.0.19045; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 Cef/3904 ep_pc_student/1.9.1.0'
    ab = a_bogus(url, None, ua)

    # post
    data = 'a=b&c=d'
    ab = a_bogus(url, data, ua)


if __name__ == '__main__':
    main()
