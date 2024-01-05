function get_argus(keys, argu) {
    /**
 * 使用方法
 * 实例化对象 new Des()
 * 加密方法 encrypt(key,plaintext)
 * 解密方法 decrypt(key,ciphertext)
 * 示例---------------------------------------------------
 * var Des = new Des();
 * var key = 'custom key';
 * var value = '需要加密的内容'
 * var ciphertext = encrypt(key,value);//加密
 * var plaintext = encrypt(key,ciphertext);//解密
 */
    function Des(key, value) {
        this.key = key;
        this.value = value;
        this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    }
    Des.prototype._Base64Encode = function (e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = this._Base64_utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    }
    Des.prototype._Base64Decode = function (e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = this._Base64_utf8_decode(t);
        return t
    }
    Des.prototype._Base64_utf8_encode = function (e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    }
    Des.prototype._Base64_utf8_decode = function (e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
    /**
     * @param {String} key 密钥
     * @param {String} value 内容
     * @param {String} type 类型 ->encrypt加密|decrypt解密
     */
    Des.prototype._DesCreate = function (key, value, type) {
        var message = value;
        if (type === 'decrypt') {
            var requestValue = "";
            for (var i = (value.substr(0, 2) == "0x") ? 2 : 0; i < value.length; i += 2) {
                requestValue += String.fromCharCode(parseInt(value.substr(i, 2), 16));
            }
            message = requestValue;
        }
        var spfunction1 = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756);
        var spfunction2 = new Array(-0x7fef7fe0, -0x7fff8000, 0x8000, 0x108020, 0x100000, 0x20, -0x7fefffe0, -0x7fff7fe0, -0x7fffffe0, -0x7fef7fe0, -0x7fef8000, -0x80000000, -0x7fff8000, 0x100000, 0x20, -0x7fefffe0, 0x108000, 0x100020, -0x7fff7fe0, 0, -0x80000000, 0x8000, 0x108020, -0x7ff00000, 0x100020, -0x7fffffe0, 0, 0x108000, 0x8020, -0x7fef8000, -0x7ff00000, 0x8020, 0, 0x108020, -0x7fefffe0, 0x100000, -0x7fff7fe0, -0x7ff00000, -0x7fef8000, 0x8000, -0x7ff00000, -0x7fff8000, 0x20, -0x7fef7fe0, 0x108020, 0x20, 0x8000, -0x80000000, 0x8020, -0x7fef8000, 0x100000, -0x7fffffe0, 0x100020, -0x7fff7fe0, -0x7fffffe0, 0x100020, 0x108000, 0, -0x7fff8000, 0x8020, -0x80000000, -0x7fefffe0, -0x7fef7fe0, 0x108000);
        var spfunction3 = new Array(0x208, 0x8020200, 0, 0x8020008, 0x8000200, 0, 0x20208, 0x8000200, 0x20008, 0x8000008, 0x8000008, 0x20000, 0x8020208, 0x20008, 0x8020000, 0x208, 0x8000000, 0x8, 0x8020200, 0x200, 0x20200, 0x8020000, 0x8020008, 0x20208, 0x8000208, 0x20200, 0x20000, 0x8000208, 0x8, 0x8020208, 0x200, 0x8000000, 0x8020200, 0x8000000, 0x20008, 0x208, 0x20000, 0x8020200, 0x8000200, 0, 0x200, 0x20008, 0x8020208, 0x8000200, 0x8000008, 0x200, 0, 0x8020008, 0x8000208, 0x20000, 0x8000000, 0x8020208, 0x8, 0x20208, 0x20200, 0x8000008, 0x8020000, 0x8000208, 0x208, 0x8020000, 0x20208, 0x8, 0x8020008, 0x20200);
        var spfunction4 = new Array(0x802001, 0x2081, 0x2081, 0x80, 0x802080, 0x800081, 0x800001, 0x2001, 0, 0x802000, 0x802000, 0x802081, 0x81, 0, 0x800080, 0x800001, 0x1, 0x2000, 0x800000, 0x802001, 0x80, 0x800000, 0x2001, 0x2080, 0x800081, 0x1, 0x2080, 0x800080, 0x2000, 0x802080, 0x802081, 0x81, 0x800080, 0x800001, 0x802000, 0x802081, 0x81, 0, 0, 0x802000, 0x2080, 0x800080, 0x800081, 0x1, 0x802001, 0x2081, 0x2081, 0x80, 0x802081, 0x81, 0x1, 0x2000, 0x800001, 0x2001, 0x802080, 0x800081, 0x2001, 0x2080, 0x800000, 0x802001, 0x80, 0x800000, 0x2000, 0x802080);
        var spfunction5 = new Array(0x100, 0x2080100, 0x2080000, 0x42000100, 0x80000, 0x100, 0x40000000, 0x2080000, 0x40080100, 0x80000, 0x2000100, 0x40080100, 0x42000100, 0x42080000, 0x80100, 0x40000000, 0x2000000, 0x40080000, 0x40080000, 0, 0x40000100, 0x42080100, 0x42080100, 0x2000100, 0x42080000, 0x40000100, 0, 0x42000000, 0x2080100, 0x2000000, 0x42000000, 0x80100, 0x80000, 0x42000100, 0x100, 0x2000000, 0x40000000, 0x2080000, 0x42000100, 0x40080100, 0x2000100, 0x40000000, 0x42080000, 0x2080100, 0x40080100, 0x100, 0x2000000, 0x42080000, 0x42080100, 0x80100, 0x42000000, 0x42080100, 0x2080000, 0, 0x40080000, 0x42000000, 0x80100, 0x2000100, 0x40000100, 0x80000, 0, 0x40080000, 0x2080100, 0x40000100);
        var spfunction6 = new Array(0x20000010, 0x20400000, 0x4000, 0x20404010, 0x20400000, 0x10, 0x20404010, 0x400000, 0x20004000, 0x404010, 0x400000, 0x20000010, 0x400010, 0x20004000, 0x20000000, 0x4010, 0, 0x400010, 0x20004010, 0x4000, 0x404000, 0x20004010, 0x10, 0x20400010, 0x20400010, 0, 0x404010, 0x20404000, 0x4010, 0x404000, 0x20404000, 0x20000000, 0x20004000, 0x10, 0x20400010, 0x404000, 0x20404010, 0x400000, 0x4010, 0x20000010, 0x400000, 0x20004000, 0x20000000, 0x4010, 0x20000010, 0x20404010, 0x404000, 0x20400000, 0x404010, 0x20404000, 0, 0x20400010, 0x10, 0x4000, 0x20400000, 0x404010, 0x4000, 0x400010, 0x20004010, 0, 0x20404000, 0x20000000, 0x400010, 0x20004010);
        var spfunction7 = new Array(0x200000, 0x4200002, 0x4000802, 0, 0x800, 0x4000802, 0x200802, 0x4200800, 0x4200802, 0x200000, 0, 0x4000002, 0x2, 0x4000000, 0x4200002, 0x802, 0x4000800, 0x200802, 0x200002, 0x4000800, 0x4000002, 0x4200000, 0x4200800, 0x200002, 0x4200000, 0x800, 0x802, 0x4200802, 0x200800, 0x2, 0x4000000, 0x200800, 0x4000000, 0x200800, 0x200000, 0x4000802, 0x4000802, 0x4200002, 0x4200002, 0x2, 0x200002, 0x4000000, 0x4000800, 0x200000, 0x4200800, 0x802, 0x200802, 0x4200800, 0x802, 0x4000002, 0x4200802, 0x4200000, 0x200800, 0, 0x2, 0x4200802, 0, 0x200802, 0x4200000, 0x800, 0x4000002, 0x4000800, 0x800, 0x200002);
        var spfunction8 = new Array(0x10001040, 0x1000, 0x40000, 0x10041040, 0x10000000, 0x10001040, 0x40, 0x10000000, 0x40040, 0x10040000, 0x10041040, 0x41000, 0x10041000, 0x41040, 0x1000, 0x40, 0x10040000, 0x10000040, 0x10001000, 0x1040, 0x41000, 0x40040, 0x10040040, 0x10041000, 0x1040, 0, 0, 0x10040040, 0x10000040, 0x10001000, 0x41040, 0x40000, 0x41040, 0x40000, 0x10041000, 0x1000, 0x40, 0x10040040, 0x1000, 0x41040, 0x10001000, 0x40, 0x10000040, 0x10040000, 0x10040040, 0x10000000, 0x40000, 0x10001040, 0, 0x10041040, 0x40040, 0x10000040, 0x10040000, 0x10001000, 0x10001040, 0, 0x10041040, 0x41000, 0x41000, 0x1040, 0x1040, 0x40040, 0x10000000, 0x10041000);
        //魔改位置
        // var keys = [187050025,472920585,186915882,876157969,255199502,806945584,220596020,958210835,757275681,940378667,489892883,705504304,354103316,688857884,890312192,219096591,622400037,254088489,907618332,52759587,907877143,53870614,839463457,389417746,975774727,372382245,437136414,909246726,168694017,473575703,52697872,1010440969];
        var keys = key;

        var m = 0, i, j, temp, right1, right2, left, right, looping;
        var endloop, loopinc;
        var len = message.length;
        var chunk = 0;

        var iterations = keys.length == 32 ? 3 : 9;
        if (iterations == 3) {
            looping = type === 'encrypt' ? new Array(0, 32, 2) : new Array(30, -2, -2);
        } else {
            looping = type === 'encrypt' ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2);
        }
        var result = "";
        var tempresult = "";
        while (m < len) {
            left = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);
            right = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);


            temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);
            temp = ((left >>> 16) ^ right) & 0x0000ffff; right ^= temp; left ^= (temp << 16);
            temp = ((right >>> 2) ^ left) & 0x33333333; left ^= temp; right ^= (temp << 2);
            temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
            temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);

            left = ((left << 1) | (left >>> 31));
            right = ((right << 1) | (right >>> 31));

            for (j = 0; j < iterations; j += 3) {
                endloop = looping[j + 1];
                loopinc = looping[j + 2];
                for (i = looping[j]; i != endloop; i += loopinc) {
                    right1 = right ^ keys[i];
                    right2 = ((right >>> 4) | (right << 28)) ^ keys[i + 1];
                    temp = left;
                    left = right;
                    right = temp ^ (spfunction2[(right1 >>> 24) & 0x3f] | spfunction4[(right1 >>> 16) & 0x3f]
                        | spfunction6[(right1 >>> 8) & 0x3f] | spfunction8[right1 & 0x3f]
                        | spfunction1[(right2 >>> 24) & 0x3f] | spfunction3[(right2 >>> 16) & 0x3f]
                        | spfunction5[(right2 >>> 8) & 0x3f] | spfunction7[right2 & 0x3f]);
                }
                temp = left; left = right; right = temp;
            }

            left = ((left >>> 1) | (left << 31));
            right = ((right >>> 1) | (right << 31));

            temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);
            temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
            temp = ((right >>> 2) ^ left) & 0x33333333; left ^= temp; right ^= (temp << 2);
            temp = ((left >>> 16) ^ right) & 0x0000ffff; right ^= temp; left ^= (temp << 16);
            temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);

            tempresult += String.fromCharCode((left >>> 24), ((left >>> 16) & 0xff), ((left >>> 8) & 0xff), (left & 0xff), (right >>> 24), ((right >>> 16) & 0xff), ((right >>> 8) & 0xff), (right & 0xff));

            chunk += 8;
            if (chunk == 512) {
                result += tempresult; tempresult = ""; chunk = 0;
            }
        }
        var resultTempresult = result + tempresult;
        if (type === 'encrypt') {
            var resultCiphertext = "";
            var hexes = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
            for (var i = 0; i < resultTempresult.length; i++) {
                resultCiphertext += hexes[resultTempresult.charCodeAt(i) >> 4] + hexes[resultTempresult.charCodeAt(i) & 0xf];
            }
            return resultCiphertext;
        }
        return result + tempresult;
    }
    Des.prototype._DesCreateKeys = function (key) {
        pc2bytes0 = new Array(0, 0x4, 0x20000000, 0x20000004, 0x10000, 0x10004, 0x20010000, 0x20010004, 0x200, 0x204, 0x20000200, 0x20000204, 0x10200, 0x10204, 0x20010200, 0x20010204);
        pc2bytes1 = new Array(0, 0x1, 0x100000, 0x100001, 0x4000000, 0x4000001, 0x4100000, 0x4100001, 0x100, 0x101, 0x100100, 0x100101, 0x4000100, 0x4000101, 0x4100100, 0x4100101);
        pc2bytes2 = new Array(0, 0x8, 0x800, 0x808, 0x1000000, 0x1000008, 0x1000800, 0x1000808, 0, 0x8, 0x800, 0x808, 0x1000000, 0x1000008, 0x1000800, 0x1000808);
        pc2bytes3 = new Array(0, 0x200000, 0x8000000, 0x8200000, 0x2000, 0x202000, 0x8002000, 0x8202000, 0x20000, 0x220000, 0x8020000, 0x8220000, 0x22000, 0x222000, 0x8022000, 0x8222000);
        pc2bytes4 = new Array(0, 0x40000, 0x10, 0x40010, 0, 0x40000, 0x10, 0x40010, 0x1000, 0x41000, 0x1010, 0x41010, 0x1000, 0x41000, 0x1010, 0x41010);
        pc2bytes5 = new Array(0, 0x400, 0x20, 0x420, 0, 0x400, 0x20, 0x420, 0x2000000, 0x2000400, 0x2000020, 0x2000420, 0x2000000, 0x2000400, 0x2000020, 0x2000420);
        pc2bytes6 = new Array(0, 0x10000000, 0x80000, 0x10080000, 0x2, 0x10000002, 0x80002, 0x10080002, 0, 0x10000000, 0x80000, 0x10080000, 0x2, 0x10000002, 0x80002, 0x10080002);
        pc2bytes7 = new Array(0, 0x10000, 0x800, 0x10800, 0x20000000, 0x20010000, 0x20000800, 0x20010800, 0x20000, 0x30000, 0x20800, 0x30800, 0x20020000, 0x20030000, 0x20020800, 0x20030800);
        pc2bytes8 = new Array(0, 0x40000, 0, 0x40000, 0x2, 0x40002, 0x2, 0x40002, 0x2000000, 0x2040000, 0x2000000, 0x2040000, 0x2000002, 0x2040002, 0x2000002, 0x2040002);
        pc2bytes9 = new Array(0, 0x10000000, 0x8, 0x10000008, 0, 0x10000000, 0x8, 0x10000008, 0x400, 0x10000400, 0x408, 0x10000408, 0x400, 0x10000400, 0x408, 0x10000408);
        pc2bytes10 = new Array(0, 0x20, 0, 0x20, 0x100000, 0x100020, 0x100000, 0x100020, 0x2000, 0x2020, 0x2000, 0x2020, 0x102000, 0x102020, 0x102000, 0x102020);
        pc2bytes11 = new Array(0, 0x1000000, 0x200, 0x1000200, 0x200000, 0x1200000, 0x200200, 0x1200200, 0x4000000, 0x5000000, 0x4000200, 0x5000200, 0x4200000, 0x5200000, 0x4200200, 0x5200200);
        pc2bytes12 = new Array(0, 0x1000, 0x8000000, 0x8001000, 0x80000, 0x81000, 0x8080000, 0x8081000, 0x10, 0x1010, 0x8000010, 0x8001010, 0x80010, 0x81010, 0x8080010, 0x8081010);
        pc2bytes13 = new Array(0, 0x4, 0x100, 0x104, 0, 0x4, 0x100, 0x104, 0x1, 0x5, 0x101, 0x105, 0x1, 0x5, 0x101, 0x105);

        var iterations = key.length > 8 ? 3 : 1;
        var keys = new Array(32 * iterations);
        var shifts = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
        var lefttemp, righttemp, m = 0, n = 0, temp;

        for (var j = 0; j < iterations; j++) {
            left = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);
            right = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);

            temp = ((left >>> 4) ^ right) & 0x0f0f0f0f; right ^= temp; left ^= (temp << 4);
            temp = ((right >>> -16) ^ left) & 0x0000ffff; left ^= temp; right ^= (temp << -16);
            temp = ((left >>> 2) ^ right) & 0x33333333; right ^= temp; left ^= (temp << 2);
            temp = ((right >>> -16) ^ left) & 0x0000ffff; left ^= temp; right ^= (temp << -16);
            temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);
            temp = ((right >>> 8) ^ left) & 0x00ff00ff; left ^= temp; right ^= (temp << 8);
            temp = ((left >>> 1) ^ right) & 0x55555555; right ^= temp; left ^= (temp << 1);

            temp = (left << 8) | ((right >>> 20) & 0x000000f0);
            left = (right << 24) | ((right << 8) & 0xff0000) | ((right >>> 8) & 0xff00) | ((right >>> 24) & 0xf0);
            right = temp;

            for (var i = 0; i < shifts.length; i++) {
                if (shifts[i]) { left = (left << 2) | (left >>> 26); right = (right << 2) | (right >>> 26); }
                else { left = (left << 1) | (left >>> 27); right = (right << 1) | (right >>> 27); }
                left &= -0xf; right &= -0xf;

                lefttemp = pc2bytes0[left >>> 28] | pc2bytes1[(left >>> 24) & 0xf]
                    | pc2bytes2[(left >>> 20) & 0xf] | pc2bytes3[(left >>> 16) & 0xf]
                    | pc2bytes4[(left >>> 12) & 0xf] | pc2bytes5[(left >>> 8) & 0xf]
                    | pc2bytes6[(left >>> 4) & 0xf];
                righttemp = pc2bytes7[right >>> 28] | pc2bytes8[(right >>> 24) & 0xf]
                    | pc2bytes9[(right >>> 20) & 0xf] | pc2bytes10[(right >>> 16) & 0xf]
                    | pc2bytes11[(right >>> 12) & 0xf] | pc2bytes12[(right >>> 8) & 0xf]
                    | pc2bytes13[(right >>> 4) & 0xf];
                temp = ((righttemp >>> 16) ^ lefttemp) & 0x0000ffff;
                keys[n++] = lefttemp ^ temp; keys[n++] = righttemp ^ (temp << 16);
            }
        }
        return keys;
    }
    /*
    ------------------------------------------------------------------------------------
    以上方法对象的私有方法
    为了解决中文乱码
    使用base64先加密，再用des加密
    同理，解密时先用deds解密，再使用base64解密
    ------------------------------------------------------------------------------------
    */
    /**
     * 加密
     * @param {String} key 密钥
     * @param {String} plaintext 明文
     * @return {String} ciphertext 密文
     */
    Des.prototype.encrypt = function (key, plaintext) {
        var encodedString = this._Base64Encode(plaintext);
        var ciphertext = this._DesCreate(key, encodedString, 'encrypt');
        return ciphertext
    }
    /**
     * 解密
     * @param {String} key 密钥
     * @param {String} ciphertext 密文
     * @return {String} plaintext 明文
     */
    Des.prototype.decrypt = function (key, ciphertext) {
        var decryptText = this._DesCreate(key, ciphertext, 'decrypt');//Des解密
        var plaintext = this._Base64Decode(decryptText);//base64解密
        return plaintext
    };

    var des = new Des;
    return des.encrypt(keys, argu)

}

profileDate_argu = {
    "x1": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.51",
    "x2": "false",
    "x3": "zh-CN",
    "x4": "24",
    "x5": "8",
    "x6": "24",
    "x7": "Google Inc. (Intel),ANGLE (Intel, Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11)",
    "x8": "12",
    "x9": "1536;864",
    "x10": "1536;824",
    "x11": "-480",
    "x12": "Asia/Shanghai",
    "x13": "true",
    "x14": "true",
    "x15": "true",
    "x16": "false",
    "x17": "true",
    "x18": "un",
    "x19": "Win32",
    "x20": "un",
    "x21": "PDF Viewer,Chrome PDF Viewer,Chromium PDF Viewer,Microsoft Edge PDF Viewer,WebKit built-in PDF",
    "x22": "e63af9974f3b64200c023668d93d05f3",
    "x23": "false",
    "x24": "false",
    "x25": "false",
    "x26": "false",
    "x27": "false",
    "x28": "0,false,false",
    "x29": "4,7,8",
    "x30": "swf object not loaded",
    "x33": "0",
    "x34": "0",
    "x35": "0",
    "x36": "2",
    "x37": "0|0|0|0|0|0|0|0|0|0|0|0|0",
    "x38": "0|0|0|0|1|0|0|0|0|0|1|0|1|0|1|0",
    "x39": "0",
    "x40": "0",
    "x41": "0",
    "x42": "3.2.1",
    "x43": "e02c342c",
    "x44": "" + (+ new Date),
    "x45": "connecterror",
    "x46": "false",
    "x31": "124.04347527516074"
}

profileData_keys = [187567141, 875696391, 170266120, 876222754, 188089115, 1010309137, 187054378, 957950720, 758514978, 941162813, 221382708, 990709537, 758848528, 688730163, 890444313, 722272792, 890962233, 252521496, 890843430, 185009704, 874317360, 119997734, 907612693, 119932961, 841824786, 120993794, 839716879, 909248796, 439099654, 372901635, 439091750, 1009915397];
x_s_keys = [187050025, 472920585, 186915882, 876157969, 255199502, 806945584, 220596020, 958210835, 757275681, 940378667, 489892883, 705504304, 354103316, 688857884, 890312192, 219096591, 622400037, 254088489, 907618332, 52759587, 907877143, 53870614, 839463457, 389417746, 975774727, 372382245, 437136414, 909246726, 168694017, 473575703, 52697872, 1010440969];

r = [
    "asStrin",
    "6421023qDUTlG",
    "GwcGK",
    "rbzrd",
    "ZmserbB",
    "IuNbm",
    "horPD",
    "dlEti",
    "length",
    "defineP",
    "fMQeE",
    "tucXA",
    "isBuffe",
    "Csdwa",
    "GMnXY",
    "wXAzc",
    "hECvuRX",
    "rNCWZ",
    "toStrin",
    "Iqqni",
    "gMCOT",
    "mPqBk",
    "njKvQ",
    "iVrVM",
    "BZDgY",
    "aLEDD",
    "zqlLt",
    "A4NjFqY",
    "qrstuvw",
    "nlloK",
    "XoRcW",
    "PmRiF",
    "gNPmw",
    "qfKTl",
    "size",
    "hKqxo",
    "call",
    "ule",
    "charAt",
    "CVGZf",
    "LApMt",
    "GIOVd",
    "FqzNC",
    "BlYYJ",
    "iveAI",
    "0DSfdik",
    "floor",
    "AFspt",
    "nUgYR",
    "vwKJd",
    "vvUDs",
    "functio",
    "QHyuq",
    "MVAwP",
    "getTime",
    "MMCMk",
    "sYpSd",
    "navigat",
    "lUAFM97",
    "14166300GRKScn",
    "_gg",
    "PTckW",
    "9828858gDvJWH",
    "zQHLA",
    "onGsF",
    "jYLZN",
    "LfzDW",
    "fXyCY",
    "pMnQF",
    "KXVXf",
    "tYPHy",
    "xjGie",
    "Bvk6/7=",
    "default",
    "q42KWYj",
    "uLaUm",
    "qQEvx",
    "WhtXq",
    "bytesTo",
    "pow",
    "JfMBq",
    "asBytes",
    "CSkFe",
    "oVSCj",
    "zxlnG",
    "YfWLP",
    "isArray",
    "vKozY",
    "oGIPg",
    "_hh",
    "alert",
    "WGYNO",
    "qKVdC",
    "XIyHu",
    "35gJWoke",
    "qHhcm",
    "JAJSl",
    "SiQnD",
    "rGcjO",
    "iAdEk",
    "hasOwnP",
    "jkBcl",
    "qRUYU",
    "LmgEU",
    "indexOf",
    "jklmnop",
    "oBytes",
    "pWkTP",
    "mzbVd",
    "ZConF",
    "SybVD",
    "giCxm",
    "DKJgG",
    "0XTdDgM",
    "ZKOQP",
    "jlpEd",
    "atLE",
    "HInoH",
    "xvACd",
    "UUpXV",
    "xZKow",
    "iiDsP",
    "zDWFE",
    "WDznH",
    "1510EVYxDf",
    "encodin",
    "_isBuff",
    "ewsiq",
    "nypTe",
    "JGiLO",
    "JPvwn",
    "dLkrl",
    "GVKTc",
    "maGnI",
    " argume",
    "QZCeF",
    "LpEPK",
    "ndbxf",
    "HIJKLMN",
    "zpXoh",
    "yzFgN",
    "LQzcw",
    "mVqpt",
    "EsNua",
    "fMLzk",
    "[object",
    "JzsgP",
    "exports",
    "sUVZX",
    "random",
    "a2r1ZQo",
    "iXIuP",
    "JXCdt",
    "OgZjF",
    "ZyrdF",
    "ZPSxl",
    "cVte9UJ",
    "gsXZX",
    "AyuWg",
    "jpgNW",
    "fhBCN",
    "7|4",
    "undefin",
    "iEbrz",
    "ijPny",
    "vQLRG",
    "wOcza/L",
    "0|9|6",
    "roANW",
    "gHrQO",
    "lImSF",
    "__esMod",
    "xjwrk",
    "yrsxt",
    "split",
    "ble",
    "wrQPO",
    "ckmlP",
    "stringT",
    "IIbJk",
    "wQkPs",
    "substr",
    "Hex",
    "FcvYN",
    "rVTGu",
    "CJhpg",
    "GPKgf",
    "VWXYZab",
    "GEFbL",
    "lnMXU",
    "ytRAA",
    "sscMP",
    "YYwTi",
    "fdXbs",
    "pBIon",
    "HahEp",
    "epseL",
    "FFGBs",
    "dGTfa",
    "oHQtNP+",
    "nt ",
    "|2|5|0|",
    "1|8|2|4",
    "ofNul",
    "roperty",
    "ctor",
    "configu",
    "FUmrx",
    "Words",
    "Bytes",
    "3|6|5|1",
    "zNDxq",
    "MziVH",
    "Illegal",
    "PjFzZ",
    "wFbRI",
    "AgtoL",
    "ulmju",
    "eMMmS",
    "pBQVD",
    "OXCLS",
    "pZJmk",
    "JLuYf",
    "pngG8yJ",
    "test",
    "5|2|0|4",
    "endian",
    "binary",
    "vnWPy",
    "9082503wDHZUe",
    "fpNFL",
    "ExLNh",
    "BmKDO",
    "slice",
    "Izlkq",
    "3|6|4|7",
    "wDmFl",
    "WzyGE",
    "lAwpi",
    "kEjFq",
    "WMgoB",
    "enumera",
    "JiFfc",
    "u5wPHsO",
    "YUgHM",
    "|2|8|0|",
    "ynYJU",
    "dKjoH",
    "charCod",
    "ABCDEFG",
    "kmWtQ",
    "AxAhe",
    "_ii",
    "fpHmu",
    "FlrTz",
    "get",
    "gRzQm",
    "wYjQX",
    "npUFn",
    "prototy",
    "766Zmjnab",
    "|3|5|7|",
    "hPODe",
    "bHRnl",
    "string",
    "vsoyz",
    "JqpwC",
    "teXIb",
    "RiLUl",
    "rTLAS",
    "ize",
    "constru",
    "iamspam",
    "nJCOz",
    "zNReR",
    "guKIL",
    "JOWCA",
    "xyz0123",
    "nSULH",
    "oFlMR",
    " Array]",
    "BKlTG",
    "bKzCF",
    "QEjqG",
    "MIBDd",
    "lTzWN",
    "456789+",
    "rable",
    "TWqcu",
    "AbucO",
    "KVFmX",
    "eAt",
    "yRnhISG",
    "_ff",
    "VTbZO",
    "Ebvdl",
    "xbNCz",
    "XZJYH",
    "aDKZQ",
    "PImcW",
    "qbsfA",
    "XELvr",
    "fromCha",
    "hhpmz",
    "KblCWi+",
    "bVwGo",
    "userAge",
    "replace",
    "x3VT16I",
    "gJOmQ",
    "xkufh",
    "1423755YoONuB",
    "OcKoU",
    "UwDmp",
    " Object",
    "tRIaN",
    "utf8",
    "fOtaQ",
    "String",
    "pPTeX",
    "FtpSe",
    "HLigX",
    "ivzJu",
    "uyiOy",
    "BWpCW",
    "ULPBW",
    "_digest",
    "kptIO",
    "LpfE8xz",
    "ayXCW",
    "readFlo",
    "FsSjC",
    "stringi",
    "Zymkz",
    "bin",
    "QCmLq",
    "URzpu",
    "bJXmh",
    "|3|1",
    "ZuXog",
    "QWgdM",
    "join",
    "dlvDl",
    "push",
    "_blocks",
    "XyCSd",
    "VvVIb",
    "LjQYx",
    "ajtxP",
    "yWXJR",
    "zCWHZ",
    "rotl",
    "ZyeCw",
    "wordsTo",
    "jnBeR",
    "pAnrE",
    "NdIIp",
    "8lYxANC",
    "XGsUl",
    "rCode",
    "pUeGA",
    "zGNlp",
    "cdefghi",
    "wsVCK",
    "IPplF",
    "kUMTd",
    "JHZDn",
    "tkLYM",
    "rXWku",
    "wOKuD",
    "701812dHtSeL",
    "RhoIX",
    "GfZNv",
    "Qdnej",
    "FjgPK",
    "OPQRSTU"
];
a0_0x4e04 = function (e, t) {
    return r[e -= 157]
}
var lookup = []
    , code = a0_0x5bf4a2(1136, 1057) + a0_0x5bf4a2(1331, 1344) + a0_0x5bf4a2(1298, 1350) + a0_0x5bf4a2(1355, 1185) + a0_0x5bf4a2(1206, 1073) + a0_0x5bf4a2(1177, 1214) + a0_0x5bf4a2(1440, 1406) + a0_0x5bf4a2(1190, 1234) + a0_0x5bf4a2(1148, 1267) + "5";
function a0_0x5bf4a2(e, t) {
    return a0_0x4e04(e - 975, t)
}
for (var i = 0, len = code[a0_0x5bf4a2(1140, 957)]; i < len; ++i)
    lookup[i] = code[i];
//////////////////////////////////////////////////////////////////////////
function parse_int_default() {
    return parseInt;
}
function encodeChunk(e, t, r) {
    var n, o = 1203, i = 1278, a = 1291, u = 1130, s = 1214, c = 1327, l = 1429, p = 1431, f = 1320, d = 1439, g = 1181, A = 1151, h = 1478, v = 36, y = {
        pWkTP: function (e, t) {
            return e < t
        },
        HahEp: function (e, t) {
            return e + t
        },
        xvACd: function (e, t) {
            return e & t
        },
        Zymkz: function (e, t) {
            return e << t
        },
        QCmLq: function (e, t) {
            return e & t
        },
        Qdnej: function (e, t) {
            return e + t
        },
        MMCMk: function (e, t) {
            return e(t)
        }
    }, m = [];
    function _(e, t) {
        return a0_0x5bf4a2(t - -v, e)
    }
    for (var b = t; y[_(1385, o)](b, r); b += 3)
        n = y[_(i, a)](y[_(u, s)](y[_(c, l)](e[b], 16), 16711680), y[_(1530, p)](e[y[_(f, 1291)](b, 1)] << 8, 65280)) + (255 & e[y[_(1479, 1469)](b, 2)]),
            m[_(1490, d)](y[_(g, A)](tripletToBase64, n));
    return m[_(h, 1437)]("")
}
function tripletToBase64(e) {
    var t = 438
        , r = 305
        , n = 389
        , o = 254
        , i = 171
        , a = 355
        , u = 221
        , s = 441
        , c = 306
        , l = 418
        , p = 438
        , f = 604
        , d = 389
        , g = 9
        , A = 355
        , h = 338
        , v = 171
        , y = 319
        , m = 230
        , _ = 137
        , b = 69
        , w = 1060
        , x = {};
    function T(e, t) {
        return a0_0x5bf4a2(e - -w, t)
    }
    x[T(441, 298)] = function (e, t) {
        return e + t
    }
        ,
        x[T(t, r)] = function (e, t) {
            return e + t
        }
        ,
        x[T(n, o)] = function (e, t) {
            return e & t
        }
        ,
        x[T(i, 27)] = function (e, t) {
            return e >> t
        }
        ,
        x[T(a, u)] = function (e, t) {
            return e & t
        }
        ,
        x[T(137, 45)] = function (e, t) {
            return e & t
        }
        ;
    var E = x;
    return E[T(s, c)](E[T(s, l)](E[T(p, f)](lookup[E[T(d, 529)](E[T(i, g)](e, 18), 63)], lookup[E[T(A, h)](E[T(v, y)](e, 12), 63)]), lookup[E[T(A, m)](e >> 6, 63)]), lookup[E[T(_, b)](e, 63)])
}

function b64Encode(e) {
    var t = 1063
        , r = 1211
        , n = 1255
        , o = 1145
        , i = 855
        , a = 1021
        , u = 1378
        , s = 1313
        , c = 1227
        , l = 1353
        , p = 1305
        , f = 1294
        , d = 1146
        , g = 1246
        , A = 1433
        , h = 1291
        , v = 1265
        , y = 1152
        , m = 1469
        , _ = 1332
        , b = 1199
        , w = 1353
        , x = 1186
        , T = 1118
        , E = 1296
        , S = 1146
        , k = 1109
        , I = 1078
        , B = 1189
        , C = 1351
        , O = 1300
        , M = 1244
        , L = 1353
        , D = 1125
        , N = 1465
        , R = 1283
        , j = 1035
        , F = 1035
        , P = 884
        , W = {
            QZCeF: Z(1139, 1245) + Z(t, r) + "1",
            tucXA: function (e, t) {
                return e === t
            },
            hhpmz: function (e, t) {
                return e - t
            },
            MIBDd: function (e, t) {
                return e + t
            },
            LpEPK: function (e, t) {
                return e & t
            },
            wDmFl: function (e, t) {
                return e << t
            },
            BKlTG: function (e, t) {
                return e + t
            },
            mVqpt: function (e, t) {
                return e - t
            },
            ivzJu: function (e, t) {
                return e - t
            },
            wrQPO: function (e, t) {
                return e + t
            },
            mzbVd: function (e, t) {
                return e >> t
            },
            pMnQF: function (e, t) {
                return e & t
            },
            KVFmX: function (e, t) {
                return e % t
            },
            Izlkq: function (e, t) {
                return e < t
            },
            jlpEd: function (e, t, r, n) {
                return e(t, r, n)
            },
            nJCOz: function (e, t) {
                return e > t
            },
            aLEDD: function (e, t) {
                return e + t
            }
        }
        , U = W[Z(n, o)][Z(1194, 1184)]("|")
        , z = 0;
    function Z(e, t) {
        return a0_0x5bf4a2(t - -122, e)
    }
    for (; ;) {
        switch (U[z++]) {
            case "0":
                W[Z(i, a)](G, 1) ? (V = e[W[Z(u, s)](K, 1)],
                    Y[Z(c, l)](W[Z(p, f)](lookup[V >> 2], lookup[W[Z(1167, d)](W[Z(1115, g)](V, 4), 63)]) + "==")) : 2 === G && (V = W[Z(A, h)](e[W[Z(v, y)](K, 2)] << 8, e[W[Z(m, _)](K, 1)]),
                        Y[Z(b, w)](W[Z(1118, x)](lookup[W[Z(951, T)](V, 10)], lookup[W[Z(E, S)](V >> 4, 63)]) + lookup[W[Z(k, I)](W[Z(B, g)](V, 2), 63)] + "="));
                continue;
            case "1":
                return Y[Z(1263, C)]("");
            case "2":
                var H = 16383;
                continue;
            case "3":
                var V;
                continue;
            case "4":
                var G = W[Z(1378, O)](K, 3);
                continue;
            case "5":
                for (var q = 0, Q = K - G; W[Z(1411, M)](q, Q); q += H)
                    Y[Z(1528, L)](W[Z(1169, D)](encodeChunk, e, q, W[Z(N, R)](W[Z(1018, j)](q, H), Q) ? Q : W[Z(951, F)](q, H)));
                continue;
            case "6":
                var K = e[Z(P, 1018)];
                continue;
            case "7":
                var Y = [];
                continue
        }
        break
    }
}

function encodeUtf8(e) {
    for (var t = 55, r = 28, n = 25, o = 74, i = 229, a = 119, u = 193, s = 90, c = 259, l = 280, p = 456, f = 422, d = 185, g = 77, A = 355, h = 1195, v = {
        ndbxf: function (e, t) {
            return e === t
        },
        dlvDl: function (e, t) {
            return e + t
        },
        OgZjF: function (e, t, r) {
            return e(t, r)
        }
    }, y = encodeURIComponent(e), m = [], _ = 0; _ < y[T(-t, r)]; _++) {
        var b = y[T(-n, -82)](_);
        if (v[T(o, i)](b, "%")) {
            var w = y[T(-n, -126)](_ + 1) + y[T(-n, -a)](v[T(279, u)](_, 2))
                , x = v[T(s, c)](parse_int_default(), w, 16);
            m[T(l, p)](x),
                _ += 2
        } else
            m[T(l, f)](b[T(d, g) + T(228, A)](0))
    }
    function T(e, t) {
        return a0_0x5bf4a2(e - -h, t)
    }
    return m
}

var PlatformCode;
!function (e) {
    e[e.Windows = 0] = "Windows",
        e[e.iOS = 1] = "iOS",
        e[e.Android = 2] = "Android",
        e[e.MacOs = 3] = "MacOs",
        e[e.Linux = 4] = "Linux",
        e[e.other = 5] = "other"
}(PlatformCode || (PlatformCode = {}));
function getPlatformCode(e) {
    switch (e) {
        case "Android":
            return PlatformCode.Android;
        case "iOS":
            return PlatformCode.iOS;
        case "Mac OS":
            return PlatformCode.MacOs;
        case "Linux":
            return PlatformCode.Linux;
        default:
            return PlatformCode.other
    }
}

function get_a1() {
    function crc32(e) {
        var t = 432
            , r = 409
            , n = 387
            , o = 303
            , i = 722
            , a = 553
            , u = 313
            , s = 478
            , c = 395
            , l = 239
            , p = 303
            , f = 636
            , d = 296
            , g = 265
            , A = 409
            , h = 287
            , v = 327
            , y = 484
            , m = 400
            , _ = 423
            , b = 536
            , w = 629
            , x = 579
            , T = 290
            , E = 478
            , S = 844
            , k = {};
        function I(e, t) {
            return a0_0x5bf4a2(t - -S, e)
        }
        k[I(319, 327)] = function (e, t) {
            return e & t
        }
            ,
            k[I(t, r)] = function (e, t) {
                return e ^ t
            }
            ,
            k[I(n, o)] = function (e, t) {
                return e >>> t
            }
            ,
            k[I(i, a)] = function (e, t) {
                return e >>> t
            }
            ,
            k[I(u, 400)] = function (e, t) {
                return e ^ t
            }
            ,
            k[I(589, s)] = function (e, t) {
                return e >>> t
            }
            ;
        for (var B, C = k, O = [], M = 0; M < 256; M++) {
            B = M;
            for (var L = 0; L < 8; L++)
                B = C[I(c, 327)](1, B) ? C[I(562, r)](3988292384, C[I(l, p)](B, 1)) : C[I(f, 553)](B, 1);
            O[M] = B
        }
        for (var D = -1, N = 0; N < e[I(147, d)]; N++)
            D = C[I(g, A)](C[I(459, 553)](D, 8), O[C[I(h, v)](255, C[I(y, m)](D, e[I(_, b) + I(w, x)](N)))]);
        return C[I(T, E)](-1 ^ D, 0)
    };
    var CHARSET = "abcdefghijklmnopqrstuvwxyz1234567890";
    function genRandomString(e) {
        var t, r;
        return ([].map).call(t = ([].fill).call(r = Array(e), void 0), (function () {
            return CHARSET[Math.floor(36 * Math.random())]
        }
        )).join("")
    };

    time_to_hex_randomstr = "".concat((+new Date).toString(16)) + genRandomString(30) + "50000";
    g = crc32(time_to_hex_randomstr);
    a1 = time_to_hex_randomstr.concat(g).substring(0, 52);
    return a1
}

esm_typeof = {
    Z: function Z(e) { return typeof e }
}

var mcr = function (e) {
    var t = 831
        , r = 841
        , n = 848
        , o = 770
        , i = 854
        , a = 1024
        , u = 667
        , s = 820
        , c = 773
        , l = 850
        , p = 973
        , f = 872
        , d = 753
        , g = 824
        , A = 868
        , h = 857
        , v = 1305
        , y = 1283
        , m = 1089
        , _ = 1271
        , b = 910
        , w = 1003
        , x = 1225
        , T = 1296
        , E = 1243
        , S = 1353
        , k = 1286
        , I = 1379
        , B = 1189
        , C = 1363
        , O = 1108
        , M = 1042
        , L = 1282
        , D = 1262
        , N = 1169
        , R = 1154
        , j = 442
        , F = 579
        , P = {};
    P[U(768, 863)] = function (e, t) {
        return e === t
    }
        ,
        P[U(t, r)] = U(n, 817),
        P[U(672, 829)] = function (e, t) {
            return e < t
        }
        ,
        P[U(o, i)] = function (e, t) {
            return e ^ t
        }
        ,
        P[U(a, 921)] = function (e, t) {
            return e ^ t
        }
        ,
        P[U(u, 672)] = function (e, t) {
            return e < t
        }
        ,
        P[U(971, s)] = function (e, t) {
            return e & t
        }
        ,
        P[U(c, 712)] = function (e, t) {
            return e >>> t
        }
        ,
        P[U(978, l)] = function (e, t) {
            return e & t
        }
        ,
        P[U(p, 868)] = function (e, t) {
            return e ^ t
        }
        ,
        P[U(790, f)] = function (e, t) {
            return e >>> t
        }
        ,
        P[U(d, 847)] = function (e, t) {
            return e >>> t
        }
        ;
    var W = P;
    function U(e, t) {
        return a0_0x5bf4a2(t - -F, e)
    }
    for (var z, Z, H = 3988292384, V = 256, G = []; V--; G[V] = z >>> 0)
        for (Z = 8,
            z = V; Z--;)
            z = W[U(g, l)](z, 1) ? W[U(1042, A)](W[U(h, f)](z, 1), H) : W[U(980, 847)](z, 1);
    return function (e) {
        function t(e, t) {
            return U(e, t - j)
        }
        if (W[t(1196, v)]((0,
            esm_typeof.Z)(e), W[t(1183, y)])) {
            for (var r = 0, n = -1; W[t(m, _)](r, e[t(b, w)]); ++r)
                n = W[t(x, T)](G[W[t(1524, 1363)](255 & n, e[t(1233, E) + t(S, k)](r))], n >>> 8);
            return W[t(I, 1363)](W[t(B, C)](n, -1), H)
        }
        for (r = 0,
            n = -1; W[t(O, 1114)](r, e[t(M, 1003)]); ++r)
            n = W[t(L, C)](G[W[t(1548, C)](W[t(1146, D)](n, 255), e[r])], W[t(N, R)](n, 8));
        return W[t(1226, 1363)](n, -1) ^ H
    }
}()


/** MD5
   * 加密 */
function toMd5Hex(text) {
    var hexcase = 0;
    var chrsz = 8;

    function core_md5(x, len) {
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    }

    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }

    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    function str2binl(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz)
            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
        return bin;
    }

    function binl2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
                hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return str;
    }

    return binl2hex(core_md5(str2binl(text), text.length * chrsz));
}

function get_profiledata(keys) {
    profileDate_argu = {
        "x1": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58",
        "x2": "false",
        "x3": "zh-CN",
        "x4": "24",
        "x5": "8",
        "x6": "24",
        "x7": "Google Inc. (Intel),ANGLE (Intel, Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "x8": "12",
        "x9": "1536;864",
        "x10": "1536;824",
        "x11": "-480",
        "x12": "Asia/Shanghai",
        "x13": "true",
        "x14": "true",
        "x15": "true",
        "x16": "false",
        "x17": "true",
        "x18": "un",
        "x19": "Win32",
        "x20": "un",
        "x21": "PDF Viewer,Chrome PDF Viewer,Chromium PDF Viewer,Microsoft Edge PDF Viewer,WebKit built-in PDF",
        "x22": "e63af9974f3b64200c023668d93d05f3",
        "x23": "false",
        "x24": "false",
        "x25": "false",
        "x26": "false",
        "x27": "false",
        "x28": "0,false,false",
        "x29": "4,7,8",
        "x30": "swf object not loaded",
        "x33": "0",
        "x34": "0",
        "x35": "0",
        "x36": "2",
        "x37": "0|0|0|0|0|0|0|0|0|0|0|0|0",
        "x38": "0|0|0|0|1|0|0|0|0|0|1|0|1|0|1|0",
        "x39": "0",
        "x40": "0",
        "x41": "0",
        "x42": "3.2.1",
        "x43": "e02c342c",
        "x44": "" + (+ new Date),
        "x45": "connecterror",
        "x46": "false",
        "x31": "124.04347527516074"
    }

    profileData = get_argus(keys, JSON.stringify(profileDate_argu));
    return profileData
}

function get_x_s(payload) {
    return "XYW_" + btoa(`{"signSvn":"51","signType":"x1","appId":"xhs-pc-web","signVersion":"1","payload":"${payload}"}`);

}


function get_x_s_common(a1, x_t, x_s, x10) {
    //x8可以写死
    // x8 = "I38rHdgsjopgIvesdVwgIC+oIELmBZ5e3VwXLgFTIxS3bqwErFeexd0ekncAzMFYnqthIhJeSBMDKutRI3KsYorWHPtGrbV0P9WfIi/eWc6eYqtyQApPI37ekmR1QL+5Ii6sdnosjoT5yqtXqqwYrBqoIx++GDi/sVtkIx0sxuwr4qtiIkrwIi/skcc3ICLfI3Oe0utl20DZsL5eDSJejVw0IieexVwL+PtorqthPcKexY8oICR1IErSgVwBGqtRIxE/eDdeVuwjIC0s1qtnIkpKIhSnee3sYdZ6cU5sYqtzaDdefzq1zd/eWWF+IxOeDVtaIE3efutlrlhhOoVGIvgeiqtu/YgexjqmIkLwIiDPGamjIvhm+I88IizuBVwlIvGF4eveDS7e1utCIC7sDc=="
    i = 'Windows';  //操作系统 windows/android/linux/mac os/ios
    var x8 = "I38rHdgsjopgIvesdVwgIC+oIELmBZ5e3VwXLgFTIxS3bqwErFeexd0ekncAzMFYnqthIhJeSnMDKutRI3KsYorWHPtGrbV0P9WfIi/eWc6eYqtyQApPI37ekmR1QL+5Ii6sdnosjoT5yqtXqqwYrBqoIx++GDi/sVtkIx0sxuwr4qtiIkrwIi/skcc3ICLfI3Oe0utl20DZsL5eDSJejVw0IieexVwL+PtorqthPcKexY8oICR1IErSgVwBGqtRIxE/eDdeVuwjIC0s1qtnIkpKIhDree3sYsr6cU5sYqtzaDdefzq1zd/eWWF+IxoeSqtaIE/efutlolWAOoVGIvgeiqtu/YgexjqmIkLwIiDPGamjIvhm+I88IizuBVwlIvGF4eveDS7e1utCIC7sDc=="

    g = {
        "s0": 5,
        "s1": "",
        "x0": "1",  //localstorage.getitem("b1b1")
        "x1": "3.3.3",  //version
        "x2": "Windows",
        "x3": "xhs-pc-web",
        "x4": "2.11.5",
        "x5": a1,   //localStorage--->a1
        "x6": x_t,
        "x7": x_s,
        "x8": x8,
        "x9": mcr(x_t + x_s + x8),
        "x10": x10
    };
    console.log(JSON.stringify(g))
    return b64Encode(encodeUtf8(JSON.stringify(g)))
}

// console.log("x_s_common===>",x_s_common)
// console.log("x-s===>",x_s)
// console.log("payload===>",payload);
// console.log(get_x_s_common("188e6375c81pugqtbw122mooemd7wacr7zs0rhe3y50000362861","1681253654123","XYW_eyJzaWduU3ZuIjoiNTEiLCJzaWduVHlwZSI6IngxIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6ImRlNTJlZTM0ZjU0ODNiMzA3YjUxYTcyZDllMWJjODUyZjdkYTUwYzZkZGIyZDNkZjQyYzZkMzE1MmViNGMxMzI0MmFlMmYyM2NlYmZjNDQ5Y2FmMjFlZWUzNzI2OGJmNWM5ZTNiZmRhMWZhYTFlYjkwZDc0YWEzMWI1NGM3MmNkMGQ3NGFhMzFiNTRjNzJjZGFjNDg5YjlkYThjZTVlNDhmNGFmYjlhY2ZjM2VhMjZmZTBiMjY2YTZiNGNjM2NiNWExNGQ2NjI1MDU5NzhkODA0MmJkMzJkNmQzMmZlNTYxYTMwZGYwMjBmNzdhYmJmMWYyOWFjNTc5ZmUyMTYzMDY3ZTcxMDZmYzUzMjdlZmJmNjVkMzk3NDg5YjQwOTAzNGQ4MDVmZTk2NWY5N2YzYjU1ZThiNDc1M2JhYzA4YmY3M2M4NDNhMThkNjVmYWFlM2EyYmQzMTM1YWM5NjdjNGQyYzdmZjIyZjVmY2NjYmQyMmIyYjdkN2QzNjA3NGJjODc0YzVhYjQ1OGYzZjVkOWQ0YWRjMTFmZTNhOGQ5NThjZWYxYjNmN2Y1ZTUwMTQ5NCJ9"))


xxx_s = 'XYW_eyJzaWduU3ZuIjoiNTEiLCJzaWduVHlwZSI6IngxIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjM0ODc4M2Y2MzhiYmRiN2MxNDhiMDMxYTdkZjRhMGI0ZmRhNzZjMjQ0YTE0YmNiMmYzN2NlOTVmYWMxOTdhYTI2YzY1MGE1ZmQwNTg3MmVjNTBkODdkOWEzYzYxMWYwNGM5ZTNiZmRhMWZhYTFlYjkwZDc0YWEzMWI1NGM3MmNkMGQ3NGFhMzFiNTRjNzJjZGFjNDg5YjlkYThjZTVlNDhmNGFmYjlhY2ZjM2VhMjZmZTBiMjY2YTZiNGNjM2NiNWNkYTQ1ZTNkYjJjNTkxZGJjODFkMmY3NTFhNzI5NDZlYjVmODk5YjU5M2FhNDRiOTE2YTE2MzE5NTljZDgxMDdmZjFhZjE1ZmZmNjkwZTY4NzhlZWU0MDY0MWFkOTcyZGYyNjg0ZmZmMDM2ZGU5OGVjNmNjODY3YzkwNjFhMTQ5NjBjOGQyYTNkMWYxMDljMjVhYjgzYjgyYmFhODZhOWI5NWU0MTY5MjNmM2U4OGNjYmUyZWNmZTE0NjQ1ZjYzMCJ9'

console.log(get_x_s_common("188f10201f8pepfwb9t67dfj31bksjm77fxv7v5h050000161276",1687670631493,xxx_s,6))


debugger;