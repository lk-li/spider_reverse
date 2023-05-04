import requests
import re
from urllib import parse
import json
import ddddocr
import subprocess

import gj


class Kuaishou():
    def __init__(self):
        self.headers = {
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "sec-ch-ua": "\"Chromium\";v=\"21\", \" Not;A Brand\";v=\"99\"",
            "accept": "*/*",
            "content-type": "application/json",
            "sec-ch-ua-mobile": "?0",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
            "sec-ch-ua-platform": "\"Windows\"",
            "Origin": "https://www.kuaishou.com",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://www.kuaishou.com/profile/3xgefifvenffbku",
            "Accept-Language": "zh-CN,zh;q=0.9"
        }
        self.session = requests.session()
        self.session.get('https://www.kuaishou.com/profile/3xgefifvenffbku', headers=self.headers)
        self.captchaSession = ''
        self.captchaSn = ''
        self.disY = ''
        self.distance = ''
        self.trajectory = ''

    def encrypt(self, data):
        # "captchaSn=Cgp6dC5jYXB0Y2hhEuACb2C-j-M4c7cvJ_SxbcJJTjl6UuRBlW_eOgynH3k2tIyN7IxoCfnCvoTF-BNMIvr2F_JYlMdmv_AFbLZ8RHEt7VN3DeMgz-rOJSibYLbhBATnRY9dgXiRzb_DGPHJZrEykd7_YI_dgxYbounfh0SZfB-Vguix4kbNbdUJUlOg_6p_ZcvL-0wwongdWjlUjZFfb3LSvXBjBCuEB5DcwGM6Oy2ZyT4Ke2D7BJ_hIdA9Kic3FyUt7_gXbtg-ouhY0ZtuVLIqF3s3IF-VlMOqvR0qc4k9QDirPyAuhNBYYIByJ9E0TQX0q8h7ymiA-10NFIYVxd8CmmuODFxI0TbwnqXN3PAswpdFfn96ARhwiFZeKxYIeWrbDZ87BKXDHo8uAD2jH3-Vk1JLzIhyrzml_0jn-VcqTqPuuNWpvbo9nYhtJudFHdf_NGowLGHbnUJvBQC-nJ1E-680nZ07KzM4MCub8BoSBZuF2zdR0gmeen4zqjPJVJmTKAUwAg&bgDisWidth=316&bgDisHeight=184&cutDisWidth=56&cutDisHeight=56&relativeX=65&relativeY=60&trajectory=0%7C12%7C0%2C7%7C12%7C60%2C14%7C12%7C68%2C21%7C12%7C76%2C28%7C14%7C84%2C36%7C14%7C93%2C43%7C14%7C101%2C50%7C14%7C108%2C57%7C14%7C117%2C61%7C14%7C124%2C68%7C14%7C134%2C143%7C117%7C140%2C90%7C14%7C150%2C164%7C117%7C156%2C108%7C14%7C164%2C115%7C14%7C172%2C190%7C117%7C180%2C130%7C14%7C188%2C137%7C14%7C196%2C144%7C14%7C204%2C159%7C14%7C212%2C240%7C117%7C220%2C192%7C14%7C228%2C199%7C14%7C236%2C206%7C14%7C245&gpuInfo=%7B%22glRenderer%22%3A%22WebKit%20WebGL%22%2C%22glVendor%22%3A%22WebKit%22%2C%22unmaskRenderer%22%3A%22ANGLE%20%28Intel%2C%20Intel%28R%29%20HD%20Graphics%20630%20Direct3D11%20vs_5_0%20ps_5_0%2C%20D3D11-31.0.101.2111%29%22%2C%22unmaskVendor%22%3A%22Google%20Inc.%20%28Intel%29%22%7D&captchaExtraParam=%7B%22ua%22%3A%22Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F95.0.4638.69%20Safari%2F537.36%22%2C%22userAgent%22%3A%22Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F95.0.4638.69%20Safari%2F537.36%22%2C%22timeZone%22%3A%22UTC%2B8%22%2C%22language%22%3A%22zh-CN%22%2C%22cpuCoreCnt%22%3A%224%22%2C%22platform%22%3A%22Win32%22%2C%22riskBrowser%22%3A%22false%22%2C%22webDriver%22%3A%22false%22%2C%22exactRiskBrowser%22%3A%22false%22%2C%22webDriverDeep%22%3A%22false%22%2C%22exactRiskBrowser2%22%3A%22false%22%2C%22webDriverDeep2%22%3A%22false%22%2C%22battery%22%3A%221%22%2C%22plugins%22%3A%22170b76c0d6cbaed3cb42746b06cae5eae%22%2C%22resolution%22%3A%221920x1080%22%2C%22pixelDepth%22%3A%2224%22%2C%22colorDepth%22%3A%2224%22%2C%22canvasGraphFingerPrint%22%3A%22184d2a5cb7dd0dbef53dd603e607d58f8%22%2C%22canvasGraph%22%3A%22184d2a5cb7dd0dbef53dd603e607d58f8%22%2C%22canvasTextFingerPrintEn%22%3A%2210988b111dee10a3ace1f10536e3a0eee%22%2C%22canvasTextEn%22%3A%2210988b111dee10a3ace1f10536e3a0eee%22%2C%22canvasTextFingerPrintZh%22%3A%2213ffb1298cbb06fbd4cbf7a29b627d240%22%2C%22canvasTextZh%22%3A%2213ffb1298cbb06fbd4cbf7a29b627d240%22%2C%22webglGraphFingerPrint%22%3A%2214dc51ccd006f78c818999c374ac62402%22%2C%22webglGraph%22%3A%2214dc51ccd006f78c818999c374ac62402%22%2C%22webglGPUFingerPrint%22%3A%221108f3efe4bed369a31b6475af6c38f30%22%2C%22webglGpu%22%3A%221108f3efe4bed369a31b6475af6c38f30%22%2C%22cssFontFingerPrintEn%22%3A%2210a344f5534d5b367655c7f90f04de717%22%2C%22fontListEn%22%3A%2210a344f5534d5b367655c7f90f04de717%22%2C%22cssFontFingerPrintZh%22%3A%2216c1334aeae228bca19e18632c8472a52%22%2C%22fontListZh%22%3A%2216c1334aeae228bca19e18632c8472a52%22%2C%22voiceFingerPrint%22%3A%221dd96cac4e826abdbbe261dc4f3a08292%22%2C%22audioTriangle%22%3A%221dd96cac4e826abdbbe261dc4f3a08292%22%2C%22nativeFunc%22%3A%221973dcbb27a04c3a2ee240d9d2549e105%22%2C%22key1%22%3A%22web_7721346c62c20a0b%22%2C%22key2%22%3A1673853459961%2C%22key3%22%3A%22Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F95.0.4638.69%20Safari%2F537.36%22%2C%22key4%22%3A%2220030107%22%2C%22key5%22%3A%22zh-CN%22%2C%22key6%22%3A%22Gecko%22%2C%22key7%22%3A1920%2C%22key8%22%3A1080%2C%22key9%22%3A1920%2C%22key10%22%3A1040%2C%22key11%22%3A360%2C%22key12%22%3A360%2C%22key13%22%3A1040%2C%22key14%22%3A1920%2C%22key15%22%3A%2200000111%22%2C%22key16%22%3A1%2C%22key17%22%3A1%2C%22key18%22%3A%5B%5D%2C%22key19%22%3A%7B%7D%2C%22key20%22%3A%5B%5D%2C%22key21%22%3A%7B%7D%2C%22key22%22%3A%5B%5D%2C%22key23%22%3A%7B%7D%2C%22key24%22%3A%5B%5D%2C%22key25%22%3A%7B%7D%2C%22key26%22%3A%7B%22key27%22%3A%5B%220%2C1%2C2887%2C51%2C306%2Cprepare1%22%2C%221%2C1%2C2888%2C51%2C306%2Cprepare1%22%2C%222%2C1%2C2891%2C51%2C305%2Cprepare1%22%2C%223%2C1%2C2907%2C51%2C304%2Cprepare1%22%2C%224%2C1%2C3139%2C51%2C303%2Cprepare1%22%2C%225%2C1%2C3147%2C50%2C302%2Cprepare1%22%2C%226%2C1%2C3155%2C48%2C301%2Cprepare1%22%2C%227%2C1%2C3162%2C47%2C299%2Cprepare1%22%2C%228%2C1%2C3171%2C46%2C299%2Cprepare1%22%2C%229%2C1%2C3179%2C43%2C296%2Cprepare1%22%2C%2210%2C1%2C3195%2C42%2C295%22%2C%2211%2C3%2C3373%2C42%2C295%22%2C%2212%2C1%2C3382%2C42%2C295%2Cprepare2%22%2C%2213%2C1%2C3442%2C44%2C295%2Cprepare2%22%2C%2214%2C1%2C3451%2C46%2C295%2Cprepare2%22%2C%2215%2C1%2C3459%2C48%2C295%2Cprepare2%22%2C%2216%2C1%2C3467%2C50%2C297%2Cprepare2%22%2C%2217%2C1%2C3475%2C52%2C297%2Cprepare2%22%2C%2218%2C1%2C3483%2C54%2C297%2Cprepare2%22%2C%2219%2C1%2C3491%2C56%2C297%2Cprepare2%22%2C%2220%2C1%2C3499%2C58%2C297%2Cprepare2%22%2C%2221%2C1%2C3507%2C59%2C297%2Cprepare2%22%2C%2222%2C4%2C4003%2C99%2C297%22%2C%2223%2C2%2C4139%2C99%2C297%2Cprepare3%22%2C%2224%2C1%2C4140%2C99%2C297%2Cprepare3%22%2C%2225%2C1%2C4453%2C100%2C306%2Cprepare3%22%5D%2C%22key28%22%3A%5B%5D%2C%22key29%22%3A%5B%5D%2C%22key30%22%3A%5B%5D%2C%22key31%22%3A%7B%22prepare1%22%3A%229%2C1%2C3179%2C43%2C296%22%2C%22prepare2%22%3A%2221%2C1%2C3507%2C59%2C297%22%2C%22prepare3%22%3A%2225%2C1%2C4453%2C100%2C306%22%7D%2C%22key32%22%3A%7B%7D%2C%22key33%22%3A%7B%7D%2C%22key34%22%3A%7B%7D%7D%2C%22key35%22%3A%227ebc4735321e3b0c225c1e489d2adb1b%22%2C%22key36%22%3A%22f22a94013fc94e90e2af2798023a1985%22%2C%22key37%22%3A1%2C%22key38%22%3A%22not%20support%22%2C%22key39%22%3A4%7D"
        # 使用subprocess模块的Popen方法时，参数可以以数组的形式传递，逻辑比较清晰
        # p = subprocess.Popen('node os_popen_use {0} {1}'.format(a,b), stdout=subprocess.PIPE)#也可以设置传递一个长字符串的形式传递参数
        p = subprocess.Popen(['node', './encrypt.js', data], stdout=subprocess.PIPE)
        out = p.stdout.read()
        # print('out:', out.strip())
        return out.strip()

    # 拿回captchaSession参数
    def get_captchaSession(self):
        url = "https://www.kuaishou.com/graphql"
        data = {
            "operationName": "visionProfilePhotoList",
            "variables": {
                "userId": "3xgefifvenffbku",
                "pcursor": "",
                "page": "profile"
            },
            "query": "fragment photoContent on PhotoEntity {\n  id\n  duration\n  caption\n  likeCount\n  viewCount\n  realLikeCount\n  coverUrl\n  photoUrl\n  photoH265Url\n  manifest\n  manifestH265\n  videoResource\n  coverUrls {\n    url\n    __typename\n  }\n  timestamp\n  expTag\n  animatedCoverUrl\n  distance\n  videoRatio\n  liked\n  stereoType\n  profileUserTopPhoto\n  __typename\n}\n\nfragment feedContent on Feed {\n  type\n  author {\n    id\n    name\n    headerUrl\n    following\n    headerUrls {\n      url\n      __typename\n    }\n    __typename\n  }\n  photo {\n    ...photoContent\n    __typename\n  }\n  canAddComment\n  llsid\n  status\n  currentPcursor\n  __typename\n}\n\nquery visionProfilePhotoList($pcursor: String, $userId: String, $page: String, $webPageArea: String) {\n  visionProfilePhotoList(pcursor: $pcursor, userId: $userId, page: $page, webPageArea: $webPageArea) {\n    result\n    llsid\n    webPageArea\n    feeds {\n      ...feedContent\n      __typename\n    }\n    hostName\n    pcursor\n    __typename\n  }\n}\n"
        }
        response = self.session.post(url, headers=self.headers, data=json.dumps(data))
        self.captchaSession = re.findall('captchaSession=(.*)&type', response.text)[0]

    # 拿到图片链接
    def get_image(self):
        headers = {
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "sec-ch-ua": "\"Chromium\";v=\"21\", \" Not;A Brand\";v=\"99\"",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded",
            "sec-ch-ua-mobile": "?0",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
            "sec-ch-ua-platform": "\"Windows\"",
            "Origin": "https://captcha.zt.kuaishou.com",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": f"https://captcha.zt.kuaishou.com/iframe/index.html?captchaSession={self.captchaSession}&type=1&configUrl=https%3A%2F%2Fcaptcha.zt.kuaishou.com%2Frest%2Fzt%2Fcaptcha%2Fsliding%2Fconfig&bizName=ANTICRAWL_DEFAULT",
            "Accept-Language": "zh-CN,zh;q=0.9"
        }
        url = "https://captcha.zt.kuaishou.com/rest/zt/captcha/sliding/config"
        data = {
            "captchaSession": self.captchaSession
        }
        response = requests.post(url, headers=headers, data=data)
        self.captchaSn = json.loads(response.text)['captchaSn']
        ditu = json.loads(response.text)['bgPicUrl']
        quekou = json.loads(response.text)['cutPicUrl']
        self.disY = round(int(json.loads(response.text)['disY']) * 0.469)
        params = {
            "captchaSn": self.captchaSn
        }
        # with open("bg_picture.jpg", "wb") as f:
        #     f.write(requests.get(ditu, params=params).content)
        # with open("cut_picture.jpg", "wb") as f:
        #     f.write(requests.get(quekou, params=params).content)
        name1 = requests.get(ditu, params=params).content
        name2 = requests.get(quekou, params=params).content
        distance = self.slide_match(name1, name2)
        distance_ = int(round(int(distance['target'][0]) * 0.469, 0) - 5)
        # print('distance:', distance_)
        self.distance = distance_
        # 轨迹
        self.trajectory = gj.Generate_trajectory().get_slide_track(int(distance_ * 3.42))

    # 用ddddocr识别滑块距离
    def slide_match(self, target_bytes, background_bytes):
        det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
        # with open(name1, 'rb') as f:
        #     target_bytes = f.read()
        #
        # with open(name2, 'rb') as f:
        #     background_bytes = f.read()

        res = det.slide_match(target_bytes, background_bytes, simple_target=True)

        return res

    # 请求验证滑块
    def get_verify(self):
        captcha_data = {
            "captchaSn": self.captchaSn,  # '上面config里的captchaSn'
            "bgDisWidth": 316,  # 可以写死，根据config里的值*0.46，四舍五入得来
            "bgDisHeight": 184,  # 同上，可以写死
            "cutDisWidth": 56,  # 同上，可以写死
            "cutDisHeight": 56,  # 同上，可以写死
            "relativeX": self.distance,  # '需要自己识别滑块的距离',
            "relativeY": self.disY,  # '同上config里的值*0.46，四舍五入，但不可以写死',
            "trajectory": self.trajectory,
            # "滑块拖动轨迹",
            "gpuInfo": "{\"glRenderer\":\"WebKit WebGL\",\"glVendor\":\"WebKit\",\"unmaskRenderer\":\"ANGLE (Intel, Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11-31.0.101.2111)\",\"unmaskVendor\":\"Google Inc. (Intel)\"}",
            # '显卡信息，可以写死',
            "captchaExtraParam": "{\"ua\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36\",\"timeZone\":\"UTC+8\",\"language\":\"zh-CN\",\"cpuCoreCnt\":\"4\",\"platform\":\"Win32\",\"riskBrowser\":\"false\",\"webDriver\":\"false\",\"exactRiskBrowser\":\"false\",\"webDriverDeep\":\"false\",\"exactRiskBrowser2\":\"false\",\"webDriverDeep2\":\"false\",\"battery\":\"1\",\"plugins\":\"170b76c0d6cbaed3cb42746b06cae5eae\",\"resolution\":\"1920x1080\",\"pixelDepth\":\"24\",\"colorDepth\":\"24\",\"canvasGraphFingerPrint\":\"184d2a5cb7dd0dbef53dd603e607d58f8\",\"canvasGraph\":\"184d2a5cb7dd0dbef53dd603e607d58f8\",\"canvasTextFingerPrintEn\":\"10988b111dee10a3ace1f10536e3a0eee\",\"canvasTextEn\":\"10988b111dee10a3ace1f10536e3a0eee\",\"canvasTextFingerPrintZh\":\"13ffb1298cbb06fbd4cbf7a29b627d240\",\"canvasTextZh\":\"13ffb1298cbb06fbd4cbf7a29b627d240\",\"webglGraphFingerPrint\":\"14dc51ccd006f78c818999c374ac62402\",\"webglGraph\":\"14dc51ccd006f78c818999c374ac62402\",\"webglGPUFingerPrint\":\"1108f3efe4bed369a31b6475af6c38f30\",\"webglGpu\":\"1108f3efe4bed369a31b6475af6c38f30\",\"cssFontFingerPrintEn\":\"10a344f5534d5b367655c7f90f04de717\",\"fontListEn\":\"10a344f5534d5b367655c7f90f04de717\",\"cssFontFingerPrintZh\":\"16c1334aeae228bca19e18632c8472a52\",\"fontListZh\":\"16c1334aeae228bca19e18632c8472a52\",\"voiceFingerPrint\":\"1dd96cac4e826abdbbe261dc4f3a08292\",\"audioTriangle\":\"1dd96cac4e826abdbbe261dc4f3a08292\",\"nativeFunc\":\"1973dcbb27a04c3a2ee240d9d2549e105\",\"key1\":\"web_11896f467df30247503494240be3a7a2\",\"key2\":1682662120147,\"key3\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36\",\"key4\":\"20030107\",\"key5\":\"zh-CN\",\"key6\":\"Gecko\",\"key7\":1920,\"key8\":1080,\"key9\":1920,\"key10\":1040,\"key11\":360,\"key12\":360,\"key13\":878,\"key14\":1358,\"key15\":\"00000111\",\"key16\":1,\"key17\":1,\"key18\":[],\"key19\":{},\"key20\":[],\"key21\":{},\"key22\":[],\"key23\":{},\"key24\":[],\"key25\":{},\"key26\":{\"key27\":[\"0,1,3076,267,321,prepare1\",\"1,1,3087,256,314,prepare1\",\"2,1,3092,242,310,prepare1\",\"3,1,3102,230,304,prepare1\",\"4,1,3108,219,300,prepare1\",\"5,1,3116,209,294,prepare1\",\"6,1,3124,199,291,prepare1\",\"7,1,3135,191,288,prepare1\",\"8,1,3158,173,281,prepare1\",\"9,1,3164,169,278,prepare1\",\"10,3,3919,44,232\",\"11,1,3940,44,233,prepare2\",\"12,1,3956,45,234,prepare2\",\"13,1,3964,46,235,prepare2\",\"14,1,3972,47,235,prepare2\",\"15,1,3980,51,237,prepare2\",\"16,1,3988,54,237,prepare2\",\"17,1,3996,58,239,prepare2\",\"18,1,4004,61,239,prepare2\",\"19,1,4012,65,239,prepare2\",\"20,1,4020,68,239,prepare2\",\"21,4,4484,193,234\",\"22,2,4688,193,234,prepare3\",\"23,1,4689,262,321,prepare3\"],\"key28\":[],\"key29\":[],\"key30\":[],\"key31\":{\"prepare1\":\"9,1,3164,169,278\",\"prepare2\":\"20,1,4020,68,239\",\"prepare3\":\"23,1,4689,262,321\"},\"key32\":{},\"key33\":{},\"key34\":{}},\"key35\":\"7ebc4735321e3b0c225c1e489d2adb1b\",\"key36\":\"f22a94013fc94e90e2af2798023a1985\",\"key37\":1,\"key38\":\"not support\",\"key39\":4}"
            # '浏览器信息和指纹什么的'
        }

        captcha_str = ''
        for k, v in captcha_data.items():
            captcha_str += f'&{k}={parse.quote(str(v))}'
        captcha_txt = captcha_str[1:].replace('/', '%2F')

        data_crack = self.encrypt(captcha_txt)
        headers = {
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'sec-ch-ua': '"Chromium";v="21", " Not;A Brand";v="99"',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'Origin': 'https://captcha.zt.kuaishou.com',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://captcha.zt.kuaishou.com/iframe/index.html?captchaSession='+ self.captchaSession,
            'Accept-Language': 'zh-CN,zh;q=0.9',
            # 'Cookie': 'did=web_b6d22b80ebf138d81ecf89c218f6f838',
        }

        json_data = {'verifyParam': data_crack}

        response = self.session.post('https://captcha.zt.kuaishou.com/rest/zt/captcha/sliding/kSecretApiVerify',headers=headers,json=json_data)
        print(response.json())
        print(response)
    def main(self):
        for i in range(10):
            self.get_captchaSession()
            self.get_image()
            # self.get_check()
            self.get_verify()


if __name__ == '__main__':
    k = Kuaishou()
    k.main()
