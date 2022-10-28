import zipfile
from tkinter import Tk, END,Label,Entry,W,Button,Text
import threading
from tkinter import filedialog


class shellDetector():
	def __init__(self):
		self.shellfeatures={
			"libchaosvmp.so":u"娜迦",
			"libddog.so":u"娜迦",
			"libfdog.so":u"娜迦",
			"libedog.so":u"娜迦企业版",
			"libexec.so":u"爱加密",
			"libexecmain.so":u"爱加密",
			"ijiami.dat":u"爱加密",
			"ijiami.ajm":u"爱加密企业版",
			"libsecexe.so":u"梆梆免费版",
			"libsecmain.so":u"梆梆免费版",
			"libSecShell.so":u"梆梆免费版",
			"libDexHelper.so":u"梆梆企业版",
			"libDexHelper-x86.so":u"梆梆企业版",
			"libprotectClass.so":u"360",
			"libjiagu.so":u"360",
			"libjiagu_art.so":u"360",
			"libjiagu_x86.so":u"360",
			"libegis.so":u"通付盾",
			"libNSaferOnly.so":u"通付盾",
			"libnqshield.so":u"网秦",
			"libbaiduprotect.so":u"百度",
			"aliprotect.dat":u"阿里聚安全",
			"libsgmain.so":u"阿里聚安全",
			"libsgsecuritybody.so":u"阿里聚安全",
			"libmobisec.so":u"阿里聚安全",
			"libtup.so":u"腾讯",
			"libexec.so":u"腾讯",
			"libshell.so":u"腾讯",
			"mix.dex":u"腾讯",
			"lib/armeabi/mix.dex":u"腾讯",
			"lib/armeabi/mixz.dex":u"腾讯",
			"libtosprotection.armeabi.so":u"腾讯御安全",
			"libtosprotection.armeabi-v7a.so":u"腾讯御安全",
			"libtosprotection.x86.so":u"腾讯御安全",
			"libnesec.so":u"网易易盾",
			"libAPKProtect.so":u"APKProtect",
			"libkwscmm.so":u"几维安全",
			"libkwscr.so":u"几维安全",
			"libkwslinker.so":u"几维安全",
			"libx3g.so":u"顶像科技",
			"libapssec.so":u"盛大",
			"librsprotect.so":u"瑞星"
		}

	def shellDetector(self,apkpath):
		zipfiles=zipfile.ZipFile(apkpath)
		nameList=zipfiles.namelist()
		for fileName in nameList:
			try:
				for shell in self.shellfeatures.keys():
					if shell in fileName:
						shellType=self.shellfeatures[shell]
						result = u"该apk使用了《" + shellType + u"》加固"
						return result
			except:
				return u"unknown"
		return u"该APK未加固或采用未知加固厂商\n"


if __name__ == '__main__':
    root = Tk()
    root.title('APK查壳工具 by:lx')
    root.iconbitmap('check.ico')
    root.geometry('300x320')
    lable = Label(root, text='请输入apk路径:', font=('楷体', 15))
    lable.grid()
    entry = Entry(root, font=('楷体', 15))
    entry.grid(row=1, column=0)



    def thread_it(func, *args):
        t = threading.Thread(target=func, args=args)
        t.setDaemon(True)
        t.start()



    def get_apk_path():
        return entry.get()


    def main():
        apk_path = get_apk_path()
        if not apk_path:
            text1.insert(END,'\n请输入APK路径',)
            return
        elif str(apk_path).endswith('.apk') ==False:
            text1.insert(END,'\n请输入APK的完整路径',)
            return
        sd = shellDetector()
        result = sd.shellDetector(apk_path)
        text2.insert(END,result)



    def main2():
        apk_path = filedialog.askopenfilename()
        if not apk_path:
            text1.insert(END, '\n请选择apk路径', )
            return
        elif str(apk_path).endswith('.apk') == False:
            text1.insert(END, '\n请选择apk的完整路径', )
            return
        sd = shellDetector()
        result = sd.shellDetector(apk_path)
        text2.insert(END, result)


    button1 = Button(root, text='输入路径后点击开始', font=('楷体', 18), command=lambda: thread_it(main, ))
    button1.grid(row=2, column=0, sticky=W, padx=30, pady=10)


    button2 = Button(root, text='可直接导入文件检测', font=('楷体', 18), command=lambda: thread_it(main2, ))
    button2.grid(row=3, column=0, sticky=W, padx=30, pady=10)



    text1 = Text(root, width=40, height=8)
    text1.insert(END,'目前支持检测的加固有:\n  [娜迦,娜迦企业版,腾讯,爱加密,爱加密企业版,梆梆免费版,梆梆企业版,360,通付盾,网秦,百度,阿里聚安全,腾讯,网易易盾,APKProtect,几维安全,顶像科技,盛大,瑞星]\n')
    text1.grid()
    text2 = Text(root, width=40, height=2)
    text2.grid()
    root.mainloop()