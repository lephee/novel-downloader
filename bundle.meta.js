// ==UserScript==
// @name           小说下载器
// @version        4.8.2.517
// @author         bgme
// @description    一个可扩展的通用型小说下载器。
// @supportURL     https://github.com/yingziwu/novel-downloader
// @match          *://www.ciweimao.com/chapter-list/*
// @match          *://www.ciweimao.com/book/*
// @match          *://book.sfacg.com/Novel/*/MainIndex/
// @match          *://book.sfacg.com/Novel/*/
// @match          *://m.sfacg.com/b/*/
// @match          *://book.qidian.com/info/*
// @match          *://www.jjwxc.net/onebook.php?novelid=*
// @match          *://www.gongzicp.com/novel-*.html
// @match          *://gongzicp.com/novel-*.html
// @match          *://book.zongheng.com/showchapter/*.html
// @match          *://huayu.zongheng.com/showchapter/*.html
// @match          *://www.linovel.net/book/*.html
// @match          *://www.17k.com/list/*.html
// @match          *://www.shuhai.com/book/*.htm
// @match          *://mm.shuhai.com/book/*.htm
// @match          *://www.tadu.com/book/*
// @match          *://www.qimao.com/shuku/*/
// @match          *://sosad.fun/threads/*/profile*
// @match          *://wenzhan.org/threads/*/profile*
// @match          *://sosadfun.com/threads/*/profile*
// @match          *://xn--pxtr7m5ny.com/threads/*/profile*
// @match          *://xn--pxtr7m.com/threads/*/profile*
// @match          *://xn--pxtr7m5ny.net/threads/*/profile*
// @match          *://xn--pxtr7m.net/threads/*/profile*
// @match          *://sosadfun.link/threads/*/profile*
// @match          *://www.sosad.fun/threads/*/profile*
// @match          *://www.wenzhan.org/threads/*/profile*
// @match          *://www.sosadfun.com/threads/*/profile*
// @match          *://www.xn--pxtr7m5ny.com/threads/*/profile*
// @match          *://www.xn--pxtr7m.com/threads/*/profile*
// @match          *://www.xn--pxtr7m5ny.net/threads/*/profile*
// @match          *://www.xn--pxtr7m.net/threads/*/profile*
// @match          *://www.sosadfun.link/threads/*/profile*
// @match          *://www.uukanshu.com/b/*/
// @match          *://www.yruan.com/article/*.html
// @match          *://www.biquwoo.com/bqw*/
// @match          *://www.biquwo.org/bqw*/
// @match          *://www.shuquge.com/txt/*/index.html
// @match          *://wap.shuquge.com/s/*.html
// @match          *://wap.shuquge.com/d/*.html
// @match          *://www.sizhicn.com/txt/*/index.html
// @match          *://www.dingdiann.net/ddk*/
// @match          *://www.xkzw.org/xkzw*/
// @match          *://www.lewenn.com/lw*/
// @match          *://www.klxs.la/info-*/
// @match          *://www.266ks.com/*_*/
// @match          *://www.266ks.com/*_*/index*.html
// @match          *://www.hetushu.com/book/*/index.html
// @match          *://hetushu.com/book/*/index.html
// @match          *://www.shouda88.com/*/
// @match          *://www.gebiqu.com/biquge_*/
// @match          *://www.viviyzw.com/book*.html
// @match          *://www.1pwx.com/*.htm
// @match          *://www.81book.com/book/*/
// @match          *://www.81zw.com/book/*/
// @match          *://m.yuzhaige.cc/*/*/
// @match          *://m.yushuge123.com/*/*/
// @match          *://www.xinwanben.com/*/
// @match          *://m.xinwanben.com/*/
// @match          *://www.idejian.com/book/*/
// @match          *://www.wenku8.net/novel/*/*/index.htm
// @match          *://www.dmzj.com/info/*.html
// @match          *://manhua.dmzj.com/*
// @match          *://www.westnovel.com/*/*/
// @match          *://www.mht99.com/*/
// @match          *://www.bz01.org/*_*/
// @match          *://www.banzhuer.org/*_*/
// @match          *://www.xbiquge.so/book/*/
// @match          *://www.hongyeshuzhai.com/shuzhai/*/
// @match          *://www.linovelib.com/novel/*/catalog
// @match          *://www.luoqiuzw.com/book/*/
// @match          *://www.yibige.cc/*/
// @match          *://www.fushuwang.org/*/*/*/*.html
// @match          *://www.fushuwang.org/*/*/*/*.html?*
// @match          *://www.soxscc.net/*/
// @match          *://www.soxscc.org/*/
// @match          *://www.soxs.cc/*/
// @match          *://www.soshuw.com/*/
// @match          *://www.soshuwu.org/*/
// @match          *://www.soxscc.cc/*/
// @match          *://www.soshuwu.com/*/
// @match          *://www.kubiji.net/*/
// @match          *://www.shubaowa.org/*_*/
// @match          *://www.fuguoduxs.com/*_*/
// @match          *://www.xyqxs.cc/html/*/*/index.html
// @match          *://www.630shu.net/shu/*.html
// @match          *://www.qingoo.cn/details?bookId=*
// @match          *://www.trxs.cc/tongren/*.html
// @match          *://www.trxs123.com/tongren/*.html
// @match          *://www.jpxs123.com/*/*.html
// @match          *://trxs.cc/tongren/*.html
// @match          *://trxs123.com/tongren/*.html
// @match          *://jpxs123.com/*/*.html
// @match          *://www.tongrenquan.org/tongren/*.html
// @match          *://www.tongrenquan.me/tongren/*.html
// @match          *://tongrenquan.me/tongren/*.html
// @match          *://www.imiaobige.com/read/*/
// @match          *://www.256wxc.com/read/*/index.html
// @match          *://www.256wxc.com/read/*/
// @match          *://www.256wenku.com/read/*/index.html
// @match          *://www.256wenku.com/read/*/
// @match          *://www.biquge66.com/biquge*/
// @match          *://*.lofter.com/
// @match          *://*.lofter.com/?page=*
// @match          *://www.lwxs9.org/*/*/
// @match          *://www.shubl.com/book/book_detail/*
// @match          *://www.ujxs.net/read/*/
// @match          *://m.haitangtxt.net/*/*/
// @match          *://ebook.longmabook.com/*
// @match          *://www.longmabookcn.com/*
// @match          *://ebook.lmbooks.com/*
// @match          *://www.lmebooks.com/*
// @match          *://www.haitbook.com/*
// @match          *://www.htwhbook.com/*
// @match          *://www.myhtebook.com/*
// @match          *://www.lovehtbooks.com/*
// @match          *://www.myhtebooks.com/*
// @match          *://www.myhtlmebook.com/*
// @match          *://jp.myhtebook.com/*
// @match          *://jp.myhtlmebook.com/*
// @match          *://ebook.urhtbooks.com/*
// @match          *://www.urhtbooks.com/*
// @match          *://www.newhtbook.com/*
// @match          *://www.lvhtebook.com/*
// @match          *://jp.lvhtebook.com/*
// @match          *://www.htlvbooks.com/*
// @match          *://dijiubook.net/*_*
// @match          *://www.biquwx.la/*_*/
// @match          *://www.25zw.com/*/
// @match          *://www.tycqxs.com/*_*/
// @match          *://www.kanunu8.com/*
// @match          *://www.ciyuanji.com/bookDetails/*
// @match          *://ciyuanji.com/bookDetails/*
// @match          *://m.wanben.org/*/
// @match          *://www.wanben.org/*/
// @match          *://www.ranwen.la/files/article/*/*/
// @match          *://www.washuge.com/books/*/*/
// @match          *://m.baihexs.com/info-*/
// @match          *://www.quanshuzhai.com/book/*.html
// @match          *://masiro.me/admin/novelView?novel_id=*
// @match          *://www.pixiv.net/novel/show.php?*
// @match          *://www.pixiv.net/novel/series/*
// @match          *://kakuyomu.jp/works/*
// @match          *://ncode.syosetu.com/*/
// @match          *://novel18.syosetu.com/*/
// @match          *://syosetu.org/novel/*/
// @match          *://houhuayuan.xyz/*
// @match          *://zhaoze.art/*/
// @match          *://www.myrics.com/novels/*
// @match          *://m.lusetxt.com/ebook/*.html
// @match          *://www.lstxt.cc/ebook/*.html
// @match          *://www.a7xs.com/*/*/
// @match          *://www.shencou.com/books/read_*.html
// @match          *://www.tianyabooks.com/*/*/
// @match          *://www.aixiawx.com/*/*/
// @match          *://jingcaiyuedu6.com/novel/*.html
// @match          *://www.hanwujinian.com/book/*
// @match          *://www.biqu55.com/*_*/
// @match          *://manga.bilibili.com/detail/mc*
// @match          *://www.aixdzs.com/novel/*
// @match          *://www.liuxs.la/bookinfo-*/
// @match          *://www.cool18.com/bbs4/index.php?*
// @match          *://www.b5200.net/*_*/
// @match          *://www.yqxs.cc/html/*/*/index.html
// @match          *://www.dushu369.com/*/*/
// @match          *://www.18kanshu.com/*/*/info.html
// @match          *://www.18kanshu.com/module/novel/info.php?*
// @match          *://www.bxwx333.org/txt/*/
// @match          *://www.xiaoshuowu.com/html/*/*/
// @match          *://www.xrzww.com/bookdetail/*
// @name:en        novel-downloader
// @name:ja        小説ダウンローダー
// @description:en An scalable universal novel downloader.
// @description:ja スケーラブルなユニバーサル小説ダウンローダー。
// @namespace      https://blog.bgme.me
// @homepageURL    https://github.com/yingziwu/novel-downloader
// @icon           https://cdn.jsdelivr.net/gh/yingziwu/novel-downloader/assets/icon.png
// @license        AGPL-3.0
// @run-at         document-start
// @noframes       
// @compatible     Firefox 77+
// @compatible     Chrome 85+
// @compatible     Edge 85+
// @compatible     Opera 71+
// @compatible     Safari 13.1+
// @incompatible   Internet Explorer
// @exclude        *://www.jjwxc.net/onebook.php?novelid=*&chapterid=*
// @exclude        *://www.viviyzw.com/book/*.html
// @exclude        *://www.yruan.com/article/*/*.html
// @exclude        *://m.yuzhaige.cc/tag/*/
// @exclude        *://m.yuzhaige.cc/sort/*/
// @exclude        *://m.yuzhaige.cc/top/*/
// @exclude        *://m.yuzhaige.cc/full/*/
// @exclude        *://m.yuzhaige.cc/book/*/
// @exclude        *://m.yushuge123.com/tag/*/
// @exclude        *://m.yushuge123.com/sort/*/
// @exclude        *://m.yushuge123.com/top/*/
// @exclude        *://m.yushuge123.com/full/*/
// @exclude        *://m.yushuge123.com/book/*/
// @exclude        *://m.haitangtxt.net/tag/*/
// @exclude        *://m.haitangtxt.net/sort/*/
// @exclude        *://m.haitangtxt.net/top/*/
// @exclude        *://m.haitangtxt.net/full/*/
// @exclude        *://m.haitangtxt.net/book/*/
// @exclude        *://www.linovel.net/book/*/*.html
// @exclude        *://www.qimao.com/shuku/*-*/
// @exclude        *://www.trxs.cc/tongren/*/*.html
// @exclude        *://www.trxs123.com/tongren/*/*.html
// @exclude        *://www.tongrenquan.org/tongren/*/*.html
// @exclude        *://tongrenquan.org/tongren/*/*.html
// @exclude        *://www.jpxs123.com/*/*/*.html
// @exclude        *://www.25zw.com/lastupdate/
// @exclude        *://www.25zw.com/postdate/
// @exclude        *://www.25zw.com/monthvisit/
// @exclude        *://www.25zw.com/goodnum/
// @exclude        *://www.25zw.com/goodnew/
// @exclude        *://www.myrics.com/novels/*/chapters/*
// @exclude        *://dijiubook.net/*_*/*.html
// @grant          unsafeWindow
// @grant          GM_info
// @grant          GM_xmlhttpRequest
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_deleteValue
// @grant          GM.info
// @grant          GM.xmlHttpRequest
// @grant          GM.setValue
// @grant          GM.getValue
// @grant          GM.deleteValue
// @connect        self
// @connect        shouda8.com
// @connect        shouda88.com
// @connect        qidian.com
// @connect        yuewen.com
// @connect        kuangxiangit.com
// @connect        sinaimg.cn
// @connect        jjwxc.net
// @connect        image.gebiqu.com
// @connect        qpic.cn
// @connect        zongheng.com
// @connect        17k.com
// @connect        img.uukanshu.com
// @connect        aliyuncs.com
// @connect        cdn.bcebos.com
// @connect        rs.sfacg.com
// @connect        shuhai.com
// @connect        ch-intel.com
// @connect        huluxia.com
// @connect        linovel.net
// @connect        ax1x.com
// @connect        tadu.com
// @connect        zhangyue01.com
// @connect        cdn.wtzw.com
// @connect        wenku8.com
// @connect        dmzj.com
// @connect        hongyeshuzhal.com
// @connect        hongyeshuzhai.com
// @connect        linovelib.com
// @connect        soxscc.net
// @connect        soxscc.org
// @connect        soxs.cc
// @connect        soshuw.com
// @connect        soxscc.cc
// @connect        soshuwu.com
// @connect        kubiji.net
// @connect        idejian.com
// @connect        img.imiaobige.com
// @connect        postimg.cc
// @connect        lofter.com
// @connect        lf127.net
// @connect        126.net
// @connect        shubl.com
// @connect        loli.net
// @connect        alicdn.com
// @connect        toutiaoimg.com
// @connect        imgdb.cn
// @connect        meego.cn
// @connect        poco.cn
// @connect        dijiuzww.com
// @connect        25zw.com
// @connect        sina.com.cn
// @connect        ciyuanji.com
// @connect        wanben.org
// @connect        baihexs.com
// @connect        masiro.me
// @connect        pximg.net
// @connect        mitemin.net
// @connect        myrics.com
// @connect        a7xs.com
// @connect        jingcaiyuedu6.com
// @connect        aixdzs.com
// @connect        b5200.net
// @connect        xrzww.com
// @connect        *
// @require        https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/crypto-js.js#sha512-NQVmLzNy4Lr5QTrmXvq/WzTMUnRHmv7nyIT/M6LyGPBS+TIeRxZ+YQaqWxjpRpvRMQSuYPQURZz/+pLi81xXeA==
// @require        https://cdn.jsdelivr.net/npm/fflate@0.7.2/umd/index.js#sha512-b4i2Ut2Tho5Qrzt3pWKCkt9Q+4ECSNPdX0JsVzudNFXR2kIbV0ndgkm3fDlGvp2A6JG9tcH3ND38y+y0DrM/jQ==
// @require        https://cdn.jsdelivr.net/npm/idb-keyval@6.0.3/dist/umd.js#sha512-+PXdWKx8apEQ52dxoVrQIwhLZj96Gde37eq+CXYQvG059IC5VF+nQ1DvD3JKqUVPL0k+TAJ8DDunVXjzKrlrHg==
// @require        https://cdn.jsdelivr.net/npm/loglevel@1.8.0/lib/loglevel.js#sha512-95U0EjHdDBH1jc1rMsOaY4CV3tVISgHr+7i5rFVvhWDRbsj2o0RlEdWMmDmQzoR8lJV7/6VbPZT6c3pQvkW+0Q==
// @require        https://cdn.jsdelivr.net/npm/nunjucks@3.2.3/browser/nunjucks.min.js#sha512-Uj8C5szr1tnKPNZb6ps5gFYtTGskzsUCiwY35QP/s2JIExZl7iYNletcmOJ8D6ocuaMRi9JGVrWRePaX9raujA==
// @require        https://cdn.jsdelivr.net/npm/vue@3.2.26/dist/vue.global.prod.js#sha512-IBbcf9iFu71zDGm4uuX3WOKuWTBZSFOaj9YWTZzCytQ15Ku3MfyOxxeJWQBwOOI/Fbc80FLXEFKrfMjj6MAw+Q==
// @downloadURL    https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.user.js
// @updateURL      https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.meta.js
// ==/UserScript==
