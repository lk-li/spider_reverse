# -*- coding: utf-8 -*
'''
@Time     : 2023/03/23
@Author   : scout
@Desc     :
'''
import base64
import copy
from hexdump import hexdump


class AES(object):
    ECB = 1
    CBC = 2

    PKCS7_5 = 1

    __block_size = 16

    __RCON = [
        [0x00, 0x00, 0x00, 0x00],
        [0x01, 0x00, 0x00, 0x00],
        [0x02, 0x00, 0x00, 0x00],
        [0x04, 0x00, 0x00, 0x00],
        [0x08, 0x00, 0x00, 0x00],
        [0x10, 0x00, 0x00, 0x00],
        [0x20, 0x00, 0x00, 0x00],
        [0x40, 0x00, 0x00, 0x00],
        [0x80, 0x00, 0x00, 0x00],
        [0x1b, 0x00, 0x00, 0x00],
        [0x36, 0x00, 0x00, 0x00]
    ]

    # S 盒
    __S_BOX = [
        [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76],
        [0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0],
        [0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15],
        [0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75],
        [0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84],
        [0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf],
        [0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8],
        [0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2],
        [0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73],
        [0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb],
        [0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79],
        [0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08],
        [0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a],
        [0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e],
        [0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf],
        [0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16]
    ]

    # 逆 S 盒
    __INV_S_BOX = [
        [0x52, 0x09, 0x6A, 0xD5, 0x30, 0x36, 0xA5, 0x38, 0xBF, 0x40, 0xA3, 0x9E, 0x81, 0xF3, 0xD7, 0xFB],
        [0x7C, 0xE3, 0x39, 0x82, 0x9B, 0x2F, 0xFF, 0x87, 0x34, 0x8E, 0x43, 0x44, 0xC4, 0xDE, 0xE9, 0xCB],
        [0x54, 0x7B, 0x94, 0x32, 0xA6, 0xC2, 0x23, 0x3D, 0xEE, 0x4C, 0x95, 0x0B, 0x42, 0xFA, 0xC3, 0x4E],
        [0x08, 0x2E, 0xA1, 0x66, 0x28, 0xD9, 0x24, 0xB2, 0x76, 0x5B, 0xA2, 0x49, 0x6D, 0x8B, 0xD1, 0x25],
        [0x72, 0xF8, 0xF6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xD4, 0xA4, 0x5C, 0xCC, 0x5D, 0x65, 0xB6, 0x92],
        [0x6C, 0x70, 0x48, 0x50, 0xFD, 0xED, 0xB9, 0xDA, 0x5E, 0x15, 0x46, 0x57, 0xA7, 0x8D, 0x9D, 0x84],
        [0x90, 0xD8, 0xAB, 0x00, 0x8C, 0xBC, 0xD3, 0x0A, 0xF7, 0xE4, 0x58, 0x05, 0xB8, 0xB3, 0x45, 0x06],
        [0xD0, 0x2C, 0x1E, 0x8F, 0xCA, 0x3F, 0x0F, 0x02, 0xC1, 0xAF, 0xBD, 0x03, 0x01, 0x13, 0x8A, 0x6B],
        [0x3A, 0x91, 0x11, 0x41, 0x4F, 0x67, 0xDC, 0xEA, 0x97, 0xF2, 0xCF, 0xCE, 0xF0, 0xB4, 0xE6, 0x73],
        [0x96, 0xAC, 0x74, 0x22, 0xE7, 0xAD, 0x35, 0x85, 0xE2, 0xF9, 0x37, 0xE8, 0x1C, 0x75, 0xDF, 0x6E],
        [0x47, 0xF1, 0x1A, 0x71, 0x1D, 0x29, 0xC5, 0x89, 0x6F, 0xB7, 0x62, 0x0E, 0xAA, 0x18, 0xBE, 0x1B],
        [0xFC, 0x56, 0x3E, 0x4B, 0xC6, 0xD2, 0x79, 0x20, 0x9A, 0xDB, 0xC0, 0xFE, 0x78, 0xCD, 0x5A, 0xF4],
        [0x1F, 0xDD, 0xA8, 0x33, 0x88, 0x07, 0xC7, 0x31, 0xB1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xEC, 0x5F],
        [0x60, 0x51, 0x7F, 0xA9, 0x19, 0xB5, 0x4A, 0x0D, 0x2D, 0xE5, 0x7A, 0x9F, 0x93, 0xC9, 0x9C, 0xEF],
        [0xA0, 0xE0, 0x3B, 0x4D, 0xAE, 0x2A, 0xF5, 0xB0, 0xC8, 0xEB, 0xBB, 0x3C, 0x83, 0x53, 0x99, 0x61],
        [0x17, 0x2B, 0x04, 0x7E, 0xBA, 0x77, 0xD6, 0x26, 0xE1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0C, 0x7D],
    ]

    __KEY_SIZE = {
        16: [4, 10, 40],
        24: [6, 12, 48],
        32: [8, 14, 56]
    }

    def __init__(self, key, iv='', mode=ECB, pad_mod=PKCS7_5):
        _key_size = self.__KEY_SIZE.get(len(key), None)

        if not _key_size:
            raise

        if mode == self.CBC and len(iv) != 16:
            raise

        self._key_bit, self._enc_num, self._key_len = _key_size
        self._iv = iv and self.__get_iv(self.__msg_type(iv))
        self._key = self.__key_expansion(self.__msg_type(key))
        self._mode = mode
        self._pad_mod = pad_mod

    @staticmethod
    def __msg_type(x):
        return x.encode() if isinstance(x, str) else x

    @staticmethod
    def __get_iv(iv):
        _iv = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        for ii in range(16):
            _iv[ii % 4][ii // 4] = iv[ii]
        return _iv

    # 伽罗瓦域乘法
    @staticmethod
    def __gf_mul(a, b):
        p, l, r = 0, copy.deepcopy(a), copy.deepcopy(b)

        while l != 0:
            if l & 1 != 0:
                p ^= r

            l >>= 1

            if r & 0x80 != 0:
                r <<= 1
                r ^= 0x1b

            else:
                r <<= 1

        return p

    # 逆列混淆
    def __inv_min_column(self, d):
        dd = copy.deepcopy(d)

        for i in range(4):
            temp = [dd[j][i] for j in range(4)]

            dd[0][i] = self.__gf_mul(temp[0], 14) ^ self.__gf_mul(temp[3], 9) ^ \
                       self.__gf_mul(temp[2], 13) ^ self.__gf_mul(temp[1], 11)
            dd[1][i] = self.__gf_mul(temp[1], 14) ^ self.__gf_mul(temp[0], 9) ^ \
                       self.__gf_mul(temp[3], 13) ^ self.__gf_mul(temp[2], 11)
            dd[2][i] = self.__gf_mul(temp[2], 14) ^ self.__gf_mul(temp[1], 9) ^ \
                       self.__gf_mul(temp[0], 13) ^ self.__gf_mul(temp[3], 11)
            dd[3][i] = self.__gf_mul(temp[3], 14) ^ self.__gf_mul(temp[2], 9) ^ \
                       self.__gf_mul(temp[1], 13) ^ self.__gf_mul(temp[0], 11)

        return dd

    # 列混淆
    def __min_column(self, d):
        dd = copy.deepcopy(d)

        for i in range(4):
            temp = [dd[j][i] for j in range(4)]

            dd[0][i] = self.__gf_mul(temp[0], 2) ^ self.__gf_mul(temp[3], 1) ^ \
                       self.__gf_mul(temp[2], 1) ^ self.__gf_mul(temp[1], 3)
            dd[1][i] = self.__gf_mul(temp[1], 2) ^ self.__gf_mul(temp[0], 1) ^ \
                       self.__gf_mul(temp[3], 1) ^ self.__gf_mul(temp[2], 3)
            dd[2][i] = self.__gf_mul(temp[2], 2) ^ self.__gf_mul(temp[1], 1) ^ \
                       self.__gf_mul(temp[0], 1) ^ self.__gf_mul(temp[3], 3)
            dd[3][i] = self.__gf_mul(temp[3], 2) ^ self.__gf_mul(temp[2], 1) ^ \
                       self.__gf_mul(temp[1], 1) ^ self.__gf_mul(temp[0], 3)

        return dd

    # 逆行位移
    @staticmethod
    def __inv_shift_row(d):
        dd = copy.deepcopy(d)

        for i in range(1, 4):
            if i == 1:
                dd[i][0], dd[i][1], dd[i][2], dd[i][3] = dd[i][3], dd[i][0], dd[i][1], dd[i][2]
            if i == 2:
                dd[i][0], dd[i][1], dd[i][2], dd[i][3] = dd[i][2], dd[i][3], dd[i][0], dd[i][1]
            if i == 3:
                dd[i][0], dd[i][1], dd[i][2], dd[i][3] = dd[i][1], dd[i][2], dd[i][3], dd[i][0]

        return dd

    # 行位移
    @staticmethod
    def __shift_row(d):
        dd = copy.deepcopy(d)

        for i in range(1, 4):
            if i == 1:
                dd[i][0], dd[i][1], dd[i][2], dd[i][3] = dd[i][1], dd[i][2], dd[i][3], dd[i][0]
            if i == 2:
                dd[i][0], dd[i][1], dd[i][2], dd[i][3] = dd[i][2], dd[i][3], dd[i][0], dd[i][1]
            if i == 3:
                dd[i][0], dd[i][1], dd[i][2], dd[i][3] = dd[i][3], dd[i][0], dd[i][1], dd[i][2]

        return dd

    # 轮密钥加
    @staticmethod
    def __add_round_key(d, k):
        dd = copy.deepcopy(d)

        for i in range(4):
            for j in range(4):
                dd[i][j] ^= k[j][i]

        return dd

    # 字节代换
    def __sub_byte(self, d):
        dd = copy.deepcopy(d)

        for i in range(4):
            for j in range(4):
                dd[i][j] = self.__S_BOX[(dd[i][j] >> 4) & 0xf][dd[i][j] & 0xf]

        return dd

    # 逆字节代换
    def __inv_sub_byte(self, d):
        dd = copy.deepcopy(d)

        for i in range(4):
            for j in range(4):
                dd[i][j] = self.__INV_S_BOX[(dd[i][j] >> 4) & 0xf][dd[i][j] & 0xf]

        return dd

    # 密钥扩展
    def __key_expansion(self, key):
        w1 = [list(key[k: k + 4]) for k in range(0, len(key), 4)]
        w = w1 + ([[0, 0, 0, 0]] * ((4 * (self._enc_num + 1)) - len(w1)))

        for i in range(len(w1), (4 * (self._enc_num + 1))):
            www = copy.deepcopy(w[i - 1])

            if (i % len(w1)) == 0:
                www.append(www.pop(0))
                www = [self.__S_BOX[www[j1] >> 4][www[j1] & 0xf] ^ self.__RCON[i // self._key_bit][j1] for j1 in
                       range(4)]

            elif self._key_bit == 8 and (i % self._key_bit) == 4:
                www = [self.__S_BOX[www[j3] >> 4][www[j3] & 0xf] for j3 in range(4)]

            w[i] = [w[i - len(w1)][jj] ^ www[jj] for jj in range(4)]

        # for i in range(0, len(w), 4):
        #     print('K%02d: ' % i + ' '.join([''.join('%02x' % k for k in j) for j in w[i: i + 4]]))

        return w

    @staticmethod
    def __data_pad_pkcs(data):
        pad_len = 16 - (len(data) % 16)
        data += bytes([pad_len] * pad_len)

        new_data = []
        for ii1 in range(0, len(data), 16):
            data1 = data[ii1: ii1 + 16]

            new_data1 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
            for ii2 in range(len(data1)):
                new_data1[ii2 % 4][ii2 // 4] = data1[ii2]

            new_data += new_data1

        return new_data

    @staticmethod
    def __data_un_pad_pkcs(data):
        return data[:-data[-1]]

    def __decrypt_block(self, data):
        _key = copy.deepcopy(self._key)
        _data = self.__add_round_key(data, _key[self._key_len: self._key_len + 4])
        _data = self.__inv_shift_row(_data)
        _data = self.__inv_sub_byte(_data)

        for j in range(self._enc_num - 1, 0, -1):
            _data = self.__add_round_key(_data, _key[j * 4:(j + 1) * 4])
            _data = self.__inv_min_column(_data)

            _data = self.__inv_shift_row(_data)
            _data = self.__inv_sub_byte(_data)

        return self.__add_round_key(_data, _key[0:4])

    def __encrypt_block(self, data):
        _data = self.__add_round_key(data, self._key[0:4])
        for j in range(1, self._enc_num):
            _data = self.__sub_byte(_data)
            _data = self.__shift_row(_data)
            _data = self.__min_column(_data)
            _data = self.__add_round_key(_data, self._key[j * 4:(j + 1) * 4])

        _data = self.__sub_byte(_data)
        _data = self.__shift_row(_data)
        return self.__add_round_key(_data, self._key[self._key_len:self._key_len + 4])

    def decrypt(self, data, result=''):
        new_data = []
        for ii1 in range(0, len(data), 16):
            data1 = data[ii1: ii1 + 16]

            new_data1 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
            for ii2 in range(len(data1)):
                new_data1[ii2 % 4][ii2 // 4] = data1[ii2]

            new_data += new_data1

        _iv = copy.deepcopy(self._iv)

        for i in range(0, len(new_data), 4):
            _data = self.__decrypt_block(new_data[i: i + 4])

            if self._mode == self.CBC:
                for i1 in range(4):
                    for j1 in range(4):
                        _data[i1][j1] ^= _iv[i1][j1]

                _iv = new_data[i: i + 4]

            result += ''.join([hex(_data[k][h]).replace('0x', '').rjust(2, '0') for h in range(4) for k in range(4)])

        return self.__data_un_pad_pkcs(bytes.fromhex(result))

    def encrypt(self, data, result=''):
        data = self.__data_pad_pkcs(self.__msg_type(data))
        _iv = copy.deepcopy(self._iv)

        for i in range(0, len(data), 4):
            _data = data[i: i + 4]

            if self._mode == self.CBC:
                for i1 in range(4):
                    for j1 in range(4):
                        _data[i1][j1] ^= _iv[i1][j1]
                _data = self.__encrypt_block(_data)
                _iv = _data

            else:
                _data = self.__encrypt_block(_data)

            result += ''.join([hex(_data[j][i]).replace('0x', '').rjust(2, '0') for i in range(4) for j in range(4)])

        return bytes.fromhex(result)


def main():
    key = bytes.fromhex('445352704242354C364731654E303657')
    iv = bytes.fromhex('367a6938746579343332385463556831')
    data = '6b3b26013cd4329eb50d6ae5ab0bd36ee2312373&0fefc657d79f536fa31c81498058240b'

    aes = AES(key, mode=AES.CBC, iv=iv)

    encrypt_res = aes.encrypt(data)
    print(len(encrypt_res))
    print(bytes.hex(encrypt_res))
    print(bytes.hex(base64.b64encode(encrypt_res)))
    print(hexdump(base64.b64encode(encrypt_res)))


if __name__ == '__main__':
    main()
