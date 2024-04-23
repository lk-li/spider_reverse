// https://cstaticdun.126.net/2.26.1/core-optimi.v2.26.1.min.js?v=2856163
var sesion_js = {
    '__SBOX__': "a7be3f3933fa8c5fcf86c4b6908b569ba1e26c1a6d7cfbf60ae4b00e074a194dac4b73e7f898541159a39d08183b76eedee3ed341e6685d2357440158394b1ff03a9004cbbb5ca7dcb7f41489a16e03dcc9c71eb3c9796685b1d01b4d56193a6e1f1a2470445c191ae49c5d82765dc82c350f263387a24a502fcbf442e2dddaad0e936d9ea22b89275307b42518fbc3a626ba806d4ecd6d725f50cc8c72fefa4551ccd6fc9b2b7ab954f815c7264c6e51f4eaf99885a79892b1b60a0b3526e57ba5d178d370958847eb9fd28f9ce0bc023f4148a2adfe632126769057043d3bd8eda0df7872629f3809ef05310e83113216afe202c460fc23e789f77d1addb5e",
    '__ROUND_KEY__': '037606da0296055c',
    '__SEED_KEY__': "fd6a43ae25f74398b61c03c83be37449",
    '__BASE64_ALPHABET__': "MB.CfHUzEeJpsuGkgNwhqiSaI4Fd9L6jYKZAxn1/Vml0c5rbXRP+8tD3QTO2vWyo",
    '__BASE64_PADDING__': '7'
};

function generate_cb() {
    window = global;

    function uuid(x, Z) {
        var J = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"['split']('');
        var v = [];
        var H = void 0;
        if (Z = Z || J["length"], x) {
            for (H = 0; H < x; H++) {
                v[H] = J[0 | Math["random"]() * Z];
            }
        } else {
            var h = void 0;
            for (v[8] = v[13] = v[18] = v[23] = '-', v[14] = '4', H = 0; H < 36; H++) {
                if (v[H]) {
                } else {
                    h = 0 | 16 * Math['random'](), v[H] = J[19 === H ? 3 & h | 8 : h];
                }
            }
        }
        return v["join"]('');
    }

    function toByte(C) {
        return C < -128 ? toByte(256 + C) : C > 127 ? toByte(C - 256) : C;
    }

    function hex(V) {
        V = '' + V;
        for (var U = [], M = 0, C = 0, E = V["length"] / 2; M < E; M++) {
            var w = parseInt(V["charAt"](C++), 16) << 4,
                Q = parseInt(V["charAt"](C++), 16);
            U[M] = toByte(w + Q);
        }

        return U;
    }

    function stringToBytes(C) {
        C = window["encodeURIComponent"](C);
        for (var Q = [], I = 0, q = C['length']; I < q; I++) {
            if ('%' === C["charAt"](I)) {
                console.log(I)
                if (I + 2 < q) {
                    Q["push"](hex('' + C["charAt"](++I) + C['charAt'](++I))[0]);
                }
            } else {
                Q["push"](toByte(C["charCodeAt"](I)));
            }
        }
        return Q;
    }

    let __SEED_KEY__ = sesion_js["__SEED_KEY__"];

    function K() {
        for (var nT = [], nm = 0; nm < 4; nm++) {
            nT[nm] = toByte(Math["floor"](256 * Math['random']()));
        }
        return nT;
    }

    function Q(nT) {
        var nm = [];
        if (!nT['length']) {
            return nb(64);
        }
        if (nT["length"] >= 64) {
            return nT["splice"](0, 64);
        }
        for (var nX = 0; nX < 64; nX++) {
            nm[nX] = nT[nX % nT["length"]];
        }
        return nm;
    }

    function xor(C, Q) {
        return toByte(toByte(C) ^ toByte(Q));
    }

    function xors() {
        for (var C = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [], Q = arguments['length'] > 1 && void 0 !== arguments[1] ? arguments[1] : [], I = [], q = Q['length'], W = 0, U = C["length"]; W < U; W++) {
            I[W] = xor(C[W], Q[W % q]);
        }
        return I;
    }

    function n8() {
        var nT = stringToBytes(__SEED_KEY__);
        var nm = K();
        nT = Q(nT);
        nT = xors(nT, Q(nm));
        nT = Q(nT);
        return [nT, nm];
    }

    var nr = function () {
        function nT(nm, nX) {
            var nC = [];
            var nQ = !0;
            var nI = !1;
            var nq = void 0;
            try {
                for (var nW, nl = nm[Symbol["iterator"]](); !(nQ = (nW = nl["next"]())['done']) && (nC['push'](nW["value"]), !nX || nC["length"] !== nX); nQ = !0) {
                    ;
                }
            } catch (ne) {
                nI = !0;
                nq = ne;
            } finally {
                try {
                    if (!nQ && nl["return"]) {
                        nl["return"]();
                    }
                } finally {
                    if (nI) {
                        throw nq;
                    }
                }
            }
            return nC;
        }

        return function (nm, nX) {
            if (Array["isArray"](nm)) {
                return nm;
            }
            if (Symbol["iterator"] in Object(nm)) {
                return nT(nm, nX);
            }
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }();

    function S(C) {
        return C['map'](function (Q) {
            return V(Q);
        })["join"]('');
    }

    function V(C) {
        var Q = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        return '' + Q[C >>> 4 & 15] + Q[15 & C];
    }

    function intToBytes(C) {
        var Q = [];
        Q[0] = toByte(C >>> 24 & 255);
        Q[1] = toByte(C >>> 16 & 255);
        Q[2] = toByte(C >>> 8 & 255);
        Q[3] = toByte(255 & C);
        return Q;
    }

    function j(C) {
        return S(intToBytes(C));
    }

    function genCrc32(C) {
        for (var Q = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], I = 4294967295, q = 0, W = C['length']; q < W; q++) {
            I = I >>> 8 ^ Q[255 & (I ^ C[q])];
        }
        return j(4294967295 ^ I);
    }

    function copyToBytes(C, Q, I, q, W) {
        for (var U = 0, N = C["length"]; U < W; U++) {
            if (Q + U < N) {
                I[q + U] = C[Q + U];
            }
        }
        return I;
    }

    function q(nT) {
        if (!nT["length"]) {
            return nb(64);
        }
        var nm = [];
        var nX = nT["length"];
        var nC = nX % 64 <= 60 ? 64 - nX % 64 - 4 : 128 - nX % 64 - 4;
        copyToBytes(nT, 0, nm, 0, nX);
        for (var nQ = 0; nQ < nC; nQ++) {
            nm[nX + nQ] = 0;
        }
        copyToBytes(intToBytes(nX), 0, nm, nX + nC, 4);
        return nm;
    }

    function X(nT) {
        if (Array["isArray"](nT)) {
            for (var nm = 0, nX = Array(nT["length"]); nm < nT['length']; nm++) {
                nX[nm] = nT[nm];
            }
            return nX;
        }
        return Array["from"](nT);
    }

    function W(nT) {
        if (nT['length'] % 64 !== 0) {
            return [];
        }
        for (var nm = [], nX = nT['length'] / 64, nC = 0, nQ = 0; nC < nX; nC++) {
            nm[nC] = [];
            for (var nI = 0; nI < 64; nI++) {
                nm[nC][nI] = nT[nQ++];
            }
        }
        return nm;
    }

    function n0(nT, nm) {
        if (!nT["length"]) {
            return [];
        }
        nm = nJ(nm);
        for (var nX = [], nC = 0, nQ = nT["length"]; nC < nQ; nC++) {
            nX['push'](nv(nT[nC], nm));
        }
        return nX;
    }

    function n1(nT, nm) {
        if (!nT["length"]) {
            return [];
        }
        nm = toByte(nm);
        for (var nX = [], nC = 0, nQ = nT['length']; nC < nQ; nC++) {
            nX["push"](xor(nT[nC], nm++));
        }
        return nX;
    }

    function n2(nT, nm) {
        if (!nT["length"]) {
            return [];
        }
        nm = toByte(nm);
        for (var nX = [], nC = 0, nQ = nT['length']; nC < nQ; nC++) {
            nX['push'](xor(nT[nC], nm--));
        }
        return nX;
    }

    function n3(nT, nm) {
        if (!nT["length"]) {
            return [];
        }
        nm = toByte(nm);
        for (var nX = [], nC = 0, nQ = nT["length"]; nC < nQ; nC++) {
            nX["push"](shift(nT[nC], nm));
        }
        return nX;
    }

    function n4(nT, nm) {
        if (!nT['length']) {
            return [];
        }
        nm = nJ(nm);
        for (var nX = [], nC = 0, nQ = nT['length']; nC < nQ; nC++) {
            nX["push"](nP(nT[nC], nm++));
        }
        return nX;
    }

    function shift(C, Q) {
        return toByte(C + Q);
    }

    function n5(nT, nm) {
        if (!nT["length"]) {
            return [];
        }
        nm = toByte(nm);
        for (var nX = [], nC = 0, nQ = nT["length"]; nC < nQ; nC++) {
            nX["push"](shift(nT[nC], nm--));
        }
        return nX;
    }

    function n6(nT) {
        var nm = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return nm + 256 >= 0 ? nT : [];
    }

    let __ROUND_KEY__ = sesion_js["__ROUND_KEY__"];

    function hexToByte(C) {
        C = '' + C;
        var Q = parseInt(C['charAt'](0), 16) << 4;
        var I = parseInt(C["charAt"](1), 16);
        return toByte(Q + I);
    }

    function n7(nT) {
        for (var nm = [n6, n0, n3, n1, n4, n2, n5], nX = __ROUND_KEY__, nC = 0, nQ = nX['length']; nC < nQ;) {
            var nI = nX["substring"](nC, nC + 4);
            var nq = hexToByte(nI["substring"](0, 2));
            var nW = hexToByte(nI['substring'](2, 4));
            nT = nm[nq](nT, nW);
            nC += 4;
        }
        return nT;
    }

    function shifts() {
        for (var C = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [], Q = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : [], I = [], q = Q["length"], W = 0, U = C["length"]; W < U; W++) {
            I[W] = shift(C[W], Q[W % q]);
        }
        return I;
    }

    function hexsToBytes(C) {
        C = '' + C;
        for (var Q = [], I = 0, q = 0, W = C["length"] / 2; I < W; I++) {
            var U = parseInt(C["charAt"](q++), 16) << 4;
            var N = parseInt(C["charAt"](q++), 16);
            Q[I] = toByte(U + N);
        }
        return Q;
    }

    let __SBOX__ = sesion_js["__SBOX__"];

    function F(nT) {
        var nm = function (nI) {
            var nq = hexsToBytes(__SBOX__);
            return nq[16 * (nI >>> 4 & 15) + (15 & nI)];
        };
        if (!nT["length"]) {
            return [];
        }
        for (var nX = [], nC = 0, nQ = nT["length"]; nC < nQ; nC++) {
            nX[nC] = nm(nT[nC]);
        }
        return nX;
    }

    let __BASE64_ALPHABET__ = sesion_js["__BASE64_ALPHABET__"];
    let __BASE64_PADDING__ = sesion_js["__BASE64_PADDING__"];

    function D(V, z, S) {
        var j = void 0;
        var T = void 0;
        var m = void 0;
        var X = [];
        switch (V["length"]) {
            case 1:
                j = V[0];
                T = m = 0;
                X["push"](z[j >>> 2 & 63], z[(j << 4 & 48) + (T >>> 4 & 15)], S, S);
                break;
            case 2:
                j = V[0];
                T = V[1];
                m = 0;
                X["push"](z[j >>> 2 & 63], z[(j << 4 & 48) + (T >>> 4 & 15)], z[(T << 2 & 60) + (m >>> 6 & 3)], S);
                break;
            case 3:
                j = V[0];
                T = V[1];
                m = V[2];
                X["push"](z[j >>> 2 & 63], z[(j << 4 & 48) + (T >>> 4 & 15)], z[(T << 2 & 60) + (m >>> 6 & 3)], z[63 & m]);
                break;
            default:
                return '';
        }
        return X["join"]('');
    }

    function b(V, z, S) {
        if (!V || 0 === V["length"]) {
            return '';
        }
        try {
            for (var j = 0, T = []; j < V["length"];) {
                if (!(j + 3 <= V["length"])) {
                    var m = V["slice"](j);
                    T["push"](D(m, z, S));
                    break;
                }
                var X = V["slice"](j, j + 3);
                T["push"](D(X, z, S));
                j += 3;
            }
            return T['join']('');
        } catch (C) {
            return '';
        }
    }

    function base64EncodePrivate(V, z, S) {
        var j = void 0 !== z && null !== z ? z : __BASE64_ALPHABET__;
        var T = void 0 !== S && null !== S ? S : __BASE64_PADDING__;
        return b(V, j["split"](''), T);
    }

    function aes(nT) {
        let nm = stringToBytes(nT);
        let nX = n8();
        let nC = nr(nX, 2);
        let nQ = nC[0];
        let nI = nC[1];
        let nq = stringToBytes(genCrc32(nm));
        let nW = q([]["concat"](X(nm), X(nq)));
        let nl = W(nW);
        let ne = []["concat"](X(nI))
        let ns = nQ;
        let nN = nl["length"];
        for (let nU = 0; nU < nN; nU++) {
            var na = xors(n7(nl[nU]), nQ);
            var nA = shifts(na, ns);
            na = xors(nA, ns);
            ns = F(F(na));
            copyToBytes(ns, 0, ne, 64 * nU + 4, 64);
        }
        return base64EncodePrivate(ne);
    }

    function cb() {
        var nl = uuid(32);
        return aes(nl);
    }

    return cb()
}

console.log(generate_cb())