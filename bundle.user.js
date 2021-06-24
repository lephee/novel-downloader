// ==UserScript==
// @name           小说下载器
// @version        3.7.1.1624504257368
// @author         bgme
// @description    一个可扩展的通用型小说下载器。
// @supportURL     https://github.com/yingziwu/novel-downloader
// @match          *://www.ciweimao.com/chapter-list/*
// @match          *://book.sfacg.com/Novel/*/MainIndex/
// @match          *://book.qidian.com/info/*
// @match          *://www.jjwxc.net/onebook.php?novelid=*
// @match          *://www.gongzicp.com/v4/novel-*.html
// @match          *://book.zongheng.com/showchapter/*.html
// @match          *://huayu.zongheng.com/showchapter/*.html
// @match          *://www.linovel.net/book/*.html
// @match          *://www.17k.com/list/*.html
// @match          *://www.shuhai.com/book/*.htm
// @match          *://mm.shuhai.com/book/*.htm
// @match          *://www.tadu.com/book/catalogue/*
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
// @match          *://www.sizhicn.com/txt/*/index.html
// @match          *://www.dingdiann.net/ddk*/
// @match          *://www.xkzw.org/xkzw*/
// @match          *://www.lewenn.com/lw*/
// @match          *://www.klxs.la/info-*/
// @match          *://www.266ks.com/*_*/
// @match          *://www.266ks.com/*_*/index*.html
// @match          *://www.hetushu.com/book/*/index.html
// @match          *://www.shouda8.com/*/
// @match          *://www.shouda88.com/*/
// @match          *://www.gebiqu.com/biquge_*/
// @match          *://www.meegoq.com/book*.html
// @match          *://www.viviyzw.com/book*.html
// @match          *://www.xiaoshuodaquan.com/*/
// @match          *://www.1pwx.com/*/
// @match          *://www.81book.com/book/*/
// @match          *://m.yuzhaige.cc/*/*/
// @match          *://www.xinwanben.com/*/
// @match          *://www.idejian.com/book/*/
// @match          *://www.wenku8.net/novel/*/*/index.htm
// @match          *://www.dmzj.com/info/*.html
// @match          *://www.dmzj1.com/info/*.html
// @match          *://www.westnovel.com/*/*/
// @match          *://www.mht.tw/*/
// @match          *://www.dierbanzhu1.com/*_*/
// @match          *://www.xbiquge.so/book/*/
// @match          *://www.hongyeshuzhai.com/shuzhai/*/
// @match          *://www.linovelib.com/novel/*/catalog
// @match          *://www.luoqiuzw.com/book/*/
// @match          *://www.yibige.la/*/
// @match          *://www.fushuwang.org/*/*/*/*.html
// @match          *://www.fushuwang.org/*/*/*/*.html?*
// @match          *://www.soxscc.net/*/
// @match          *://www.soxscc.org/*/
// @match          *://www.soxs.cc/*/
// @match          *://www.shubaowa.org/*_*/
// @match          *://www.fuguoduxs.com/*_*/
// @name:en        novel-downloader
// @description:en An scalable universal novel downloader.
// @namespace      https://blog.bgme.me
// @icon           https://cdn.jsdelivr.net/gh/yingziwu/novel-downloader/assets/icon.png
// @license        AGPL-3.0
// @run-at         document-end
// @noframes       true
// @compatible     Firefox 77+
// @compatible     Chrome 85+
// @compatible     Edge 85+
// @compatible     Opera 71+
// @compatible     Safari 13.1+
// @incompatible   Greasemonkey
// @incompatible   Internet Explorer
// @exclude        *://www.jjwxc.net/onebook.php?novelid=*&chapterid=*
// @exclude        *://www.meegoq.com/book/*.html
// @exclude        *://www.viviyzw.com/book/*.html
// @exclude        *://www.yruan.com/article/*/*.html
// @exclude        *://m.yuzhaige.cc/tag/*/
// @exclude        *://m.yuzhaige.cc/sort/*/
// @exclude        *://m.yuzhaige.cc/top/*/
// @exclude        *://m.yuzhaige.cc/full/*/
// @exclude        *://m.yuzhaige.cc/book/*/
// @exclude        *://www.linovel.net/book/*/*.html
// @exclude        *://www.qimao.com/shuku/*-*/
// @grant          unsafeWindow
// @grant          GM_info
// @grant          GM_xmlhttpRequest
// @grant          GM_getTab
// @grant          GM_saveTab
// @grant          GM_getTabs
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
// @connect        dmzj1.com
// @connect        hongyeshuzhal.com
// @connect        hongyeshuzhai.com
// @connect        linovelib.com
// @connect        soxscc.net
// @connect        soxscc.org
// @connect        soxs.cc
// @connect        idejian.com
// @connect        *
// @require        https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js#sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==
// @require        https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js#sha512-uVSVjE7zYsGz4ag0HEzfugJ78oHCI1KhdkivjQro8ABL/PRiEO4ROwvrolYAcZnky0Fl/baWKYilQfWvESliRA==
// @require        https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/crypto-js.js#sha512-t4HzsbLJw+4jV+nmiiIsz/puioH2aKIjuI1ho1NIqJAJ2GNVLPTy51IklYefYdrkRE583KEzTcgmO5Wb6jVgYw==
// @downloadURL    https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.user.js
// @updateURL      https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.meta.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/loglevel/lib/loglevel.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;

      var storageKey = "loglevel";
      if (typeof name === "string") {
        storageKey += ":" + name;
      } else if (typeof name === "symbol") {
        storageKey = undefined;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType || !storageKey) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    // ES6 default export, for compatibility
    defaultLogger['default'] = defaultLogger;

    return defaultLogger;
}));


/***/ }),

/***/ "./src/cleanDOM.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.walk = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const blockElements = [
    "article",
    "aside",
    "footer",
    "form",
    "header",
    "main",
    "nav",
    "section",
    "figure",
    "div",
    "b",
    "strong",
    "i",
    "em",
    "dfn",
    "var",
    "cite",
    "span",
    "font",
    "u",
    "del",
    "sup",
    "sub",
    "strike",
    "small",
    "samp",
    "s",
    "a",
];
const ignoreElements = [
    "script",
    "meta",
    "link",
    "style",
    "#comment",
    "button",
    "input",
    "select",
];
function* findBase(dom, blockElements, ignoreElements) {
    const childNodes = Array.from(dom.childNodes);
    for (const node of childNodes) {
        const nodeName = node.nodeName.toLowerCase();
        if (blockElements.includes(nodeName)) {
            yield* findBase(node, blockElements, ignoreElements);
        }
        else if (nodeName === "#text") {
            if (node.parentElement?.childNodes.length === 1 &&
                blockElements.slice(9).includes(nodeName)) {
                yield node.parentElement;
            }
            else if (node.textContent?.trim()) {
                yield node;
            }
        }
        else if (!ignoreElements.includes(nodeName)) {
            yield node;
        }
    }
}
function getNextSibling(elem) {
    elem = elem.nextSibling;
    if (elem &&
        elem.nodeName.toLowerCase() === "#text" &&
        elem.textContent?.trim() === "") {
        return elem.nextSibling;
    }
    return elem;
}
function getPreviousSibling(elem) {
    elem = elem.previousSibling;
    if (elem &&
        elem.nodeName.toLowerCase() === "#text" &&
        elem.textContent?.trim() === "") {
        return elem.previousSibling;
    }
    return elem;
}
function getParentElement(elem) {
    const _elem = elem.parentElement;
    if (!_elem) {
        return null;
    }
    let nodename = _elem.nodeName.toLowerCase();
    if (["div", "p"].includes(nodename)) {
        return _elem;
    }
    else {
        return getParentElement(_elem);
    }
}
function formatImage(elem, builder) {
    function temp0() {
        const pI = document.createElement("p");
        pI.appendChild(imgElem);
        builder.dom.appendChild(pI);
        builder.text = builder.text + imgText + "\n\n";
    }
    if (!elem.src) {
        return;
    }
    let tfi = _formatImage(elem, builder);
    if (!tfi) {
        return;
    }
    let [imgElem, imgText, imgClass] = tfi;
    if (elem.parentElement?.childElementCount === 1) {
        temp0();
        return;
    }
    else {
        function temp1() {
            if (lastElement?.nodeName.toLowerCase() === "p") {
                lastElement.appendChild(imgElem);
                builder.text = builder.text + ` ${imgText} `;
                return;
            }
            else {
                const tpElem = document.createElement("p");
                tpElem.appendChild(imgElem);
                builder.dom.appendChild(tpElem);
                builder.text = builder.text + ` ${imgText} `;
                return;
            }
        }
        const lastElement = builder.dom.lastElementChild;
        const nextSibling = getNextSibling(elem);
        const previousSibling = getPreviousSibling(elem);
        if (elem.parentElement?.nodeName.toLowerCase() === "p" &&
            lastElement?.nodeName.toLowerCase() === "p") {
            if (previousSibling?.nodeName.toLowerCase() === "#text" ||
                nextSibling?.nodeName.toLowerCase() === "#text") {
                temp1();
                return;
            }
            if (previousSibling?.nodeName.toLowerCase() === "img" &&
                lastElement.lastElementChild?.nodeName.toLowerCase() === "img" &&
                lastElement.lastElementChild.alt ===
                    previousSibling.src) {
                temp1();
                return;
            }
        }
        else {
            temp0();
            return;
        }
    }
}
function _formatImage(elem, builder) {
    function genImageName(url) {
        let t = btoa(new URL(url).pathname.split("/").slice(-2).join("/")) +
            `.${url.split(".").slice(-1)[0]}`;
        if (t.length >= 125) {
            t =
                btoa(new URL(url).pathname.split("/").slice(-1)[0]) +
                    `.${url.split(".").slice(-1)[0]}`;
        }
        return t;
    }
    if (!elem.src) {
        return;
    }
    const imgMode = builder.imgMode;
    const imageUrl = elem.src;
    const imageName = genImageName(imageUrl);
    let imgClass;
    const imgClassCache = lib_1.getAttachmentClassCache(imageUrl, imageName);
    if (imgClassCache) {
        imgClass = imgClassCache;
    }
    else {
        imgClass = new main_1.attachmentClass(imageUrl, imageName, imgMode);
        imgClass.init();
        lib_1.putAttachmentClassCache(imgClass);
    }
    const filterdImages = builder.images.filter((imgClass) => imgClass.url === elem.src);
    if (filterdImages.length === 0) {
        builder.images.push(imgClass);
    }
    const imgElem = document.createElement("img");
    imgElem.setAttribute("data-src-address", imageName);
    imgElem.alt = imageUrl;
    const imgText = `![${imageUrl}](${imageName})`;
    return [imgElem, imgText, imgClass];
}
function formatMisc(elem, builder) {
    if (elem.childElementCount === 0) {
        const lastElement = builder.dom.lastElementChild;
        const textContent = elem.innerText.trim();
        if (lastElement?.nodeName.toLowerCase() === "p") {
            const textElem = document.createTextNode(textContent);
            lastElement.appendChild(textElem);
            builder.text = builder.text + textContent;
        }
        else {
            const pElem = document.createElement("p");
            pElem.innerText = textContent;
            builder.dom.appendChild(pElem);
            builder.text = builder.text + "\n\n" + textContent;
        }
    }
    else {
        walk(elem, builder);
        return;
    }
}
function formatParagraph(elem, builder) {
    if (elem.childElementCount === 0) {
        const pElem = document.createElement("p");
        pElem.innerText = elem.innerText.trim();
        const pText = elem.innerText.trim() + "\n\n";
        builder.dom.appendChild(pElem);
        builder.text = builder.text + pText;
        return;
    }
    else {
        walk(elem, builder);
        return;
    }
}
function formatText(elems, builder) {
    function temp0() {
        const tPElem = document.createElement("p");
        tPElem.innerText = textContent;
        builder.dom.appendChild(tPElem);
    }
    function temp1() {
        const lastElement = builder.dom.lastElementChild;
        if (lastElement?.nodeName.toLowerCase() === "p") {
            const textElem = document.createTextNode(textContent);
            lastElement.appendChild(textElem);
            const tPText = textContent + "\n".repeat(brCount);
            builder.text = builder.text + tPText;
        }
        else {
            temp0();
            const tPText = textContent + "\n".repeat(brCount);
            builder.text = builder.text + tPText;
        }
    }
    const brCount = elems.filter((elem) => elem.nodeName.toLowerCase() === "br")
        .length;
    const elem = elems[0];
    const textContent = elem.textContent ? elem.textContent.trim() : "";
    if (!textContent) {
        return;
    }
    const lastElement = builder.dom.lastElementChild;
    const previousSibling = getPreviousSibling(elem);
    if (elem.parentElement?.nodeName.toLowerCase() === "p" &&
        lastElement?.nodeName.toLowerCase() === "p" &&
        previousSibling?.nodeName.toLowerCase() === "img" &&
        lastElement.lastElementChild?.nodeName.toLowerCase() === "img" &&
        lastElement.lastElementChild.alt ===
            previousSibling.src) {
        temp1();
        return;
    }
    if (brCount === 0) {
        const nextSibling = getNextSibling(elem);
        const previousSibling = getPreviousSibling(elem);
        if (nextSibling === null) {
            if (previousSibling?.nodeName.toLowerCase() === "br") {
                temp0();
                const tPText = textContent + "\n\n";
                builder.text = builder.text + tPText;
                return;
            }
            else if (previousSibling === null &&
                (() => {
                    const parentElement = getParentElement(elem);
                    if (parentElement?.childNodes.length === 1) {
                        return true;
                    }
                    return false;
                })()) {
                temp0();
                if (builder.text.endsWith("\n")) {
                    builder.text = builder.text + textContent + "\n\n";
                }
                else {
                    builder.text = builder.text + "\n\n" + textContent + "\n\n";
                }
                return;
            }
            else {
                temp1();
                return;
            }
        }
        else {
            if (previousSibling === null) {
                temp0();
                const tPText = textContent;
                if (builder.text.endsWith("\n")) {
                    builder.text = builder.text + tPText;
                }
                else {
                    builder.text = builder.text + "\n\n" + tPText;
                }
                return;
            }
            else {
                temp1();
                return;
            }
        }
    }
    else if (brCount === 1) {
        const lastElement = builder.dom.lastElementChild;
        if (lastElement?.nodeName.toLowerCase() === "p") {
            const br = document.createElement("br");
            const textElem = document.createTextNode(textContent);
            lastElement.appendChild(br);
            lastElement.appendChild(textElem);
            const tPText = textContent + "\n";
            builder.text = builder.text + tPText;
            return;
        }
        else {
            temp0();
            const tPText = textContent + "\n";
            builder.text = builder.text + tPText;
            return;
        }
    }
    else if (brCount === 2 || brCount === 3) {
        temp0();
        const tPText = textContent + "\n".repeat(brCount);
        builder.text = builder.text + tPText;
        return;
    }
    else if (brCount > 3) {
        temp0();
        for (let i = Math.round((brCount - 2) / 3); i > 0; i--) {
            const tPBr = document.createElement("p");
            const br = document.createElement("br");
            tPBr.appendChild(br);
            builder.dom.appendChild(tPBr);
        }
        const tPText = textContent + "\n".repeat(brCount);
        builder.text = builder.text + tPText;
        return;
    }
}
function formatHr(elem, builder) {
    const hrElem = document.createElement("hr");
    const hrText = "-".repeat(20);
    builder.dom.appendChild(hrElem);
    builder.text = builder.text + "\n\n" + hrText + "\n\n";
    return;
}
function walk(dom, builder) {
    const childNodes = [...findBase(dom, blockElements, ignoreElements)].filter((b) => b);
    for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];
        if (node === undefined) {
            continue;
        }
        const nodeName = node.nodeName.toLowerCase();
        switch (nodeName) {
            case "a":
            case "u":
            case "del":
            case "sup":
            case "sub":
            case "strike":
            case "small":
            case "samp":
            case "s":
            case "b":
            case "strong":
            case "i":
            case "em":
            case "dfn":
            case "var":
            case "cite":
            case "span":
            case "font": {
                formatMisc(node, builder);
                break;
            }
            case "div":
            case "p": {
                formatParagraph(node, builder);
                break;
            }
            case "#text": {
                let elems = [node];
                let j = i + 1;
                let jnodeName = nodeName;
                do {
                    if (j >= childNodes.length) {
                        break;
                    }
                    let jnode = childNodes[j];
                    jnodeName = jnode.nodeName.toLowerCase();
                    if (jnodeName === "br") {
                        elems.push(jnode);
                        delete childNodes[j];
                        j++;
                    }
                } while (jnodeName === "br");
                formatText(elems, builder);
                break;
            }
            case "img": {
                formatImage(node, builder);
                break;
            }
            case "hr": {
                formatHr(node, builder);
                break;
            }
        }
    }
    return builder;
}
exports.walk = walk;


/***/ }),

/***/ "./src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.audio = exports.attachmentClassCache = exports.catchError = exports.updateProgress = void 0;
const rules_1 = __webpack_require__("./src/rules.ts");
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const index_helper_1 = __webpack_require__("./src/index_helper.ts");
const log_1 = __webpack_require__("./src/log.ts");
function printEnvironments() {
    if (lib_1._GM_info) {
        log_1.log.info(`开始载入小说下载器……
当前浏览器UA：${navigator.userAgent}
当前脚本管理器：${lib_1._GM_info.scriptHandler}
当前脚本管理器版本：${lib_1._GM_info.version}
当前脚本名称：${lib_1._GM_info.script.name}
当前脚本版本：${lib_1._GM_info.script.version}
当前脚本最后更新时间：${lib_1._GM_info.script.lastModified}
是否处于隐私模式：${lib_1._GM_info.isIncognito}
是否启用调试：${rules_1.enaleDebug}
当前地址：${document.location.href}
当前时间：${new Date().toISOString()}`);
    }
}
async function initChapters(rule, book) {
    log_1.log.info(`[initChapters]开始初始化章节`);
    let concurrencyLimit = 10;
    if (rule.concurrencyLimit !== undefined) {
        concurrencyLimit = rule.concurrencyLimit;
    }
    if (rules_1.enableCustomChapterFilter &&
        typeof unsafeWindow.chapterFilter === "function") {
        let tlog = "[initChapters]发现自定义筛选函数，自定义筛选函数内容如下：\n";
        tlog += unsafeWindow.chapterFilter.toString();
        log_1.log.info(tlog);
    }
    log_1.log.debug("[initChapters]筛选需下载章节");
    const chapters = book.chapters.filter((chapter) => {
        const b0 = chapter.status === main_1.Status.pending;
        let b1 = true;
        if (rules_1.enableCustomChapterFilter &&
            typeof unsafeWindow.chapterFilter === "function") {
            try {
                const u = unsafeWindow.chapterFilter(chapter);
                if (typeof u === "boolean") {
                    b1 = u;
                }
            }
            catch (error) {
                log_1.log.error("运行自定义筛选函数时出错。", error);
                log_1.log.trace(error);
            }
        }
        return b0 && b1;
    });
    if (chapters.length === 0) {
        log_1.log.error(`[initChapters]初始化章节出错，未找到需初始化章节`);
        return [];
    }
    totalChapterNumber = chapters.length;
    if (concurrencyLimit === 1) {
        for (let chapter of chapters) {
            const obj = await chapter.init();
            if (obj.contentHTML !== undefined) {
                finishedChapterNumber++;
                updateProgress(finishedChapterNumber, totalChapterNumber, null);
            }
        }
    }
    else {
        await lib_1.concurrencyRun(chapters, concurrencyLimit, (curChapter) => {
            if (curChapter === undefined) {
                return Promise.resolve();
            }
            return curChapter.init().then((obj) => {
                if (obj.contentHTML !== undefined) {
                    finishedChapterNumber++;
                    updateProgress(finishedChapterNumber, totalChapterNumber, null);
                }
                return obj;
            });
        });
    }
    log_1.log.info(`[initChapters]章节初始化完毕`);
    return chapters;
}
let totalChapterNumber;
let finishedChapterNumber = 0;
function updateProgress(finishedChapterNumber, totalChapterNumber, zipPercent) {
    if (!document.querySelector("#nd-progress")) {
        log_1.log.debug("[progress]初始化进度条");
        let progress = document.createElement("div");
        progress.id = "nd-progress";
        progress.innerHTML = `
        <div id='chapter-progress' title="章节"></div>
        <div id='zip-progress' title="ZIP"></div>
        `;
        let progressStyle = document.createElement("style");
        progressStyle.innerHTML = index_helper_1.progressStyleText;
        document.head.appendChild(progressStyle);
        document.body.appendChild(progress);
    }
    let pagePercent = `${(finishedChapterNumber / totalChapterNumber) * 100}%`;
    document.querySelector("#chapter-progress").style.cssText = `--position:${pagePercent};`;
    if (zipPercent) {
        document.querySelector("#zip-progress").style.cssText = `--position:${zipPercent}%;`;
    }
    else {
        document.querySelector("#zip-progress").style.cssText =
            "display:none;";
    }
}
exports.updateProgress = updateProgress;
async function run() {
    log_1.log.info(`[run]下载开始`);
    exports.audio.play();
    const rule = await rules_1.getRule();
    log_1.log.info(`[run]获取规则成功`);
    log_1.log.debug("[run]运行前检测");
    let maxRunLimit = null;
    let nowRunNumber;
    if (typeof GM_getTab !== "undefined") {
        log_1.log.info(`[run]添加运行标志`);
        await index_helper_1.setTabMark();
        nowRunNumber = await index_helper_1.getNowRunNumber();
        if (rule.maxRunLimit !== undefined && nowRunNumber !== undefined) {
            maxRunLimit = rule.maxRunLimit;
            if (nowRunNumber > maxRunLimit) {
                const alertText = `当前网站目前已有${nowRunNumber - 1}个下载任务正在运行，当前站点最多允许${maxRunLimit}下载任务同时进行。\n请待其它下载任务完成后，再行尝试。`;
                alert(alertText);
                log_1.log.info(`[run]${alertText}`);
                return;
            }
        }
    }
    log_1.log.debug("[run]主体开始");
    const book = await rule.bookParse();
    await initChapters(rule, book);
    log_1.log.debug("[run]保存数据");
    if (rules_1.enableCustomSaveOptions &&
        typeof unsafeWindow.saveOptions === "object" &&
        index_helper_1.saveOptionsValidate(unsafeWindow.saveOptions)) {
        const saveOptions = unsafeWindow.saveOptions;
        log_1.log.info("[run]发现自定义保存参数，内容如下\n", saveOptions);
        index_helper_1.save(book, saveOptions);
    }
    else {
        index_helper_1.save(book, {});
    }
    log_1.log.debug("[run]收尾");
    if (typeof GM_getTab !== "undefined") {
        log_1.log.info(`[run]移除运行标志`);
        await index_helper_1.removeTabMark();
    }
    log_1.log.info(`[run]下载完毕`);
    return book;
}
function catchError(error) {
    downloading = false;
    exports.attachmentClassCache = [];
    if (typeof GM_getTab !== "undefined") {
        index_helper_1.removeTabMark();
    }
    finishedChapterNumber = 0;
    document.querySelector("#nd-progress")?.remove();
    exports.audio.pause();
    if (error instanceof main_1.ExpectError) {
        log_1.log.error(error);
        log_1.log.trace(error);
        return;
    }
    document.getElementById("novel-downloader")?.remove();
    log_1.log.error("运行过程出错，请附上相关日志至支持地址进行反馈。\n支持地址：https://github.com/yingziwu/novel-downloader");
    log_1.log.error(error);
    log_1.log.trace(error);
    if (lib_1._GM_setValue && lib_1._GM_getValue && lib_1._GM_deleteValue) {
        Promise.resolve().then(() => __webpack_require__("./src/stat.ts")).then((stat) => {
            stat.failedPlus();
        });
    }
    alert("运行过程出错，请附上相关日志至支持地址进行反馈。\n支持地址：https://github.com/yingziwu/novel-downloader");
    log_1.saveLogTextToFile();
}
exports.catchError = catchError;
function addButton() {
    let button = document.createElement("button");
    button.id = "novel-downloader";
    button.style.cssText = index_helper_1.buttonStyleText;
    let img = document.createElement("img");
    img.src = rules_1.icon0;
    img.style.cssText = "height: 2em;";
    button.onclick = function () {
        if (downloading) {
            alert("正在下载中，请耐心等待……");
        }
        else {
            downloading = true;
            img.src = rules_1.icon1;
            try {
                run()
                    .then((book) => {
                    downloading = false;
                    finishedChapterNumber = 0;
                    exports.attachmentClassCache = [];
                    img.src = rules_1.icon0;
                })
                    .catch(catchError);
            }
            catch (error) {
                catchError(error);
            }
        }
    };
    button.appendChild(img);
    document.body.appendChild(button);
}
async function debug() {
    const rule = await rules_1.getRule();
    const book = await rule.bookParse();
    unsafeWindow.rule = rule;
    unsafeWindow.book = book;
    unsafeWindow.save = index_helper_1.save;
    unsafeWindow.saveAs = saveAs;
    return;
}
let downloading = false;
exports.attachmentClassCache = [];
exports.audio = new Audio("data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU3LjcxLjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAEAAABVgANTU1NTU1Q0NDQ0NDUFBQUFBQXl5eXl5ea2tra2tra3l5eXl5eYaGhoaGhpSUlJSUlKGhoaGhoaGvr6+vr6+8vLy8vLzKysrKysrX19fX19fX5eXl5eXl8vLy8vLy////////AAAAAExhdmM1Ny44OQAAAAAAAAAAAAAAACQCgAAAAAAAAAVY82AhbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAALACwAAP/AADwQKVE9YWDGPkQWpT66yk4+zIiYPoTUaT3tnU487uNhOvEmQDaCm1Yz1c6DPjbs6zdZVBk0pdGpMzxF/+MYxA8L0DU0AP+0ANkwmYaAMkOKDDjmYoMtwNMyDxMzDHE/MEsLow9AtDnBlQgDhTx+Eye0GgMHoCyDC8gUswJcMVMABBGj/+MYxBoK4DVpQP8iAtVmDk7LPgi8wvDzI4/MWAwK1T7rxOQwtsItMMQBazAowc4wZMC5MF4AeQAGDpruNuMEzyfjLBJhACU+/+MYxCkJ4DVcAP8MAO9J9THVg6oxRMGNMIqCCTAEwzwwBkINOPAs/iwjgBnMepYyId0PhWo+80PXMVsBFzD/AiwwfcKGMEJB/+MYxDwKKDVkAP8eAF8wMwIxMlpU/OaDPLpNKkEw4dRoBh6qP2FC8jCJQFcweQIPMHOBtTBoAVcwOoCNMYDI0u0Dd8ANTIsy/+MYxE4KUDVsAP8eAFBVpgVVPjdGeTEWQr0wdcDtMCeBgDBkgRgwFYB7Pv/zqx0yQQMCCgKNgonHKj6RRVkxM0GwML0AhDAN/+MYxF8KCDVwAP8MAIHZMDDA3DArAQo3K+TF5WOBDQw0lgcKQUJxhT5sxRcwQQI+EIPWMA7AVBoTABgTgzfBN+ajn3c0lZMe/+MYxHEJyDV0AP7MAA4eEwsqP/PDmzC/gNcwXUGaMBVBIwMEsmB6gaxhVuGkpoqMZMQjooTBwM0+S8FTMC0BcjBTgPwwOQDm/+MYxIQKKDV4AP8WADAzAKQwI4CGPhWOEwCFAiBAYQnQMT+uwXUeGzjBWQVkwTcENMBzA2zAGgFEJfSPkPSZzPXgqFy2h0xB/+MYxJYJCDV8AP7WAE0+7kK7MQrATDAvQRIwOADKMBuA9TAYQNM3AiOSPjGxowgHMKFGcBNMQU1FMy45OS41VVU/31eYM4sK/+MYxKwJaDV8AP7SAI4y1Yq0MmOIADGwBZwwlgIJMztCM0qU5TQPG/MSkn8yEROzCdAxECVMQU1FMy45OS41VTe7Ohk+Pqcx/+MYxMEJMDWAAP6MADVLDFUx+4J6Mq7NsjN2zXo8V5fjVJCXNOhwM0vTCDAxFpMYYQU+RlVMQU1FMy45OS41VVVVVVVVVVVV/+MYxNcJADWAAP7EAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxOsJwDWEAP7SAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxPMLoDV8AP+eAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxPQL0DVcAP+0AFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
exports.audio.loop = true;
window.addEventListener("DOMContentLoaded", () => {
    if (lib_1._GM_info.scriptHandler === "Greasemonkey") {
        log_1.log.error("小说下载器脚本与Greasemonkey脚本管理器不兼容，请改用其它脚本管理器，如：Tampermonkey、Violentmonkey。");
        alert("小说下载器脚本与Greasemonkey脚本管理器不兼容，请改用其它脚本管理器，如：Tampermonkey、Violentmonkey。");
        return;
    }
    if (rules_1.enableR18SiteWarning && rules_1.r18SiteList.includes(document.location.host)) {
        const c = index_helper_1.r18SiteWarning();
        if (!c) {
            return;
        }
    }
    printEnvironments();
    addButton();
    if (rules_1.enaleDebug) {
        debug();
    }
});


/***/ }),

/***/ "./src/index_helper.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.r18SiteWarning = exports.removeTabMark = exports.getNowRunNumber = exports.setTabMark = exports.save = exports.saveOptionsValidate = exports.progressStyleText = exports.buttonStyleText = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const index_1 = __webpack_require__("./src/index.ts");
const rules_1 = __webpack_require__("./src/rules.ts");
const log_1 = __webpack_require__("./src/log.ts");
exports.buttonStyleText = `position: fixed;
top: 15%;
right: 5%;
z-index: 2147483647;
border-style: none;
text-align:center;
vertical-align:baseline;
background-color: rgba(128, 128, 128, 0.2);
padding: 5px;
border-radius: 12px;`;
exports.progressStyleText = `#nd-progress {
  position: fixed;
  bottom: 8%;
  right: 3%;
  z-index: 2147483647;
  border-style: none;
  text-align: center;
  vertical-align: baseline;
  background-color: rgba(210, 210, 210, 0.2);
  padding: 6px;
  border-radius: 12px;
}
#chapter-progress{
  --color:green;
  --position:0%;
  width:200px;
  height:10px;
  border-radius:30px;
  background-color:#ccc;
  background-image:radial-gradient(closest-side circle at var(--position),var(--color),var(--color) 100%,transparent),linear-gradient(var(--color),var(--color));
  background-image:-webkit-radial-gradient(var(--position),circle closest-side,var(--color),var(--color) 100%,transparent),-webkit-linear-gradient(var(--color),var(--color));
  background-size:100% ,var(--position);
  background-repeat: no-repeat;
}
#zip-progress{
  --color:yellow;
  --position:0%;
  width:200px;
  height:10px;
  border-radius:30px;
  background-color:#ccc;
  background-image:radial-gradient(closest-side circle at var(--position),var(--color),var(--color) 100%,transparent),linear-gradient(var(--color),var(--color));
  background-image:-webkit-radial-gradient(var(--position),circle closest-side,var(--color),var(--color) 100%,transparent),-webkit-linear-gradient(var(--color),var(--color));
  background-size:100% ,var(--position);
  background-repeat: no-repeat;
  margin-top: 5px;
}`;
class saveBook {
    constructor(book) {
        this.book = book;
        this.chapters = book.chapters;
        this.chapters.sort(this.chapterSort);
        this.savedZip = new JSZip();
        this.savedTextArray = [];
        this.saveFileNameBase = `[${this.book.author}]${this.book.bookname}`;
        this.mainStyleText = `body {
  background-color: #f0f0f2;
  margin: 0;
  padding: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
div.main {
  width: 900px;
  margin: 5em auto;
  padding: 2em;
  background-color: #fdfdff;
  border-radius: 0.5em;
  box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.02);
}
@media (max-width: 700px) {
  div.main {
    margin: 0 auto;
    width: auto;
  }
}
h1 {
  line-height: 130%;
  text-align: center;
  font-weight: bold;
  font-size: xxx-large;
  margin-top: 3.2em;
  margin-bottom: 3.3em;
}
h2 {
  line-height: 130%;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  margin-top: 1.2em;
  margin-bottom: 2.3em;
}
div {
  margin: 0px;
  padding: 0px;
  text-align: justify;
}
p {
  text-indent: 2em;
  display: block;
  line-height: 1.3em;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}
img {
  vertical-align: text-bottom;
  max-width: 90%;
}
.title {
  margin-bottom: 0.7em;
}
.author {
  text-align: center;
}`;
        this.tocStyleText = `img {
  max-width: 100%;
  max-height: 15em;
}
.introduction {
  font-size: smaller;
  max-height: 18em;
  overflow-y: scroll;
}
.bookurl {
  text-align: center;
  font-size: smaller;
  padding-top: 1em;
  padding-bottom: 0.5em;
  margin-top: 0.4em;
}
.bookurl > a {
  color: gray;
}
.info {
  display: grid;
  grid-template-columns: 30% 70%;
}
.info h3 {
  padding-left: 0.5em;
  margin-top: -1.2em;
  margin-bottom: 0.5em;
}
.section {
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: 30% 30% 30%;
}
.section > h2:first-child {
  grid-column-end: span 3;
}
.section > .chapter {
  padding-bottom: 0.3em;
  text-align: center;
}
.main > h1 {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
a.disabled {
  pointer-events: none;
  cursor: default;
  color: gray;
}
.author::before {
	content: "作者：";
}
.author {
	text-align: center;
	margin-top: -3em;
	margin-bottom: 3em;
}`;
    }
    saveTxt() {
        const metaDateText = this.genMetaDateTxt();
        this.savedTextArray.push(metaDateText);
        let sections = [];
        for (const chapter of this.chapters) {
            const chapterName = this.getchapterName(chapter);
            if (chapter.sectionName && !sections.includes(chapter.sectionName)) {
                sections.push(chapter.sectionName);
                const sectionText = this.genSectionText(chapter.sectionName);
                this.savedTextArray.push(sectionText);
            }
            if (chapter.contentText) {
                const chapterText = this.genChapterText(chapterName, chapter.contentText);
                this.savedTextArray.push(chapterText);
            }
        }
        log_1.log.info("[save]保存TXT文件");
        const savedText = this.savedTextArray.join("\n");
        saveAs(new Blob([savedText], { type: "text/plain;charset=utf-8" }), `${this.saveFileNameBase}.txt`);
    }
    saveZip() {
        log_1.log.debug("[save]保存元数据文本");
        const metaDateText = this.genMetaDateTxt();
        this.savedZip.file("info.txt", new Blob([metaDateText], { type: "text/plain;charset=utf-8" }));
        log_1.log.debug("[save]保存样式");
        this.savedZip.file("style.css", new Blob([this.mainStyleText], { type: "text/css;charset=utf-8" }));
        if (this.book.additionalMetadate.cover) {
            log_1.log.debug("[save]保存封面");
            this.addImageToZip(this.book.additionalMetadate.cover, this.savedZip);
        }
        if (this.book.additionalMetadate.attachments) {
            log_1.log.debug("[save]保存书籍附件");
            for (const bookAttachment of this.book.additionalMetadate.attachments) {
                this.addImageToZip(bookAttachment, this.savedZip);
            }
        }
        log_1.log.debug("[save]开始保存章节文件");
        this.saveChapters();
        log_1.log.debug("[save]开始生成并保存ToC.html");
        this.saveToC();
        log_1.log.info("[save]开始保存ZIP文件");
        this.savedZip
            .generateAsync({
            type: "blob",
            compression: "DEFLATE",
            compressionOptions: {
                level: 6,
            },
        }, (metadata) => index_1.updateProgress(1, 1, metadata.percent))
            .then((blob) => {
            log_1.log.debug("[save]ZIP文件生成完毕，开始保存ZIP文件");
            saveAs(blob, `${this.saveFileNameBase}.zip`);
        })
            .then(() => {
            log_1.log.debug("[save]保存ZIP文件完毕");
            document.querySelector("#nd-progress")?.remove();
            index_1.audio.pause();
        })
            .then(() => {
            finish();
        })
            .catch((err) => {
            log_1.log.error("saveZip: " + err);
            log_1.log.trace(err);
            index_1.catchError(err);
        });
    }
    saveToC() {
        const ToC = new DOMParser().parseFromString(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator" content="https://github.com/yingziwu/novel-downloader"><link href="style.css" type="text/css" rel="stylesheet"/><title>${this.book.bookname}</title></head><body><div class="main"><h1>${this.book.bookname}</h1><h3 class="author">${this.book.author}</h3></div></body></html>`, "text/html");
        const TocMain = ToC.querySelector("div.main");
        log_1.log.debug("[save]生成ToC模板");
        const infoDom = document.createElement("div");
        infoDom.className = "info";
        if (this.book.additionalMetadate.cover) {
            const coverDom = document.createElement("img");
            coverDom.className = "cover";
            coverDom.setAttribute("data-src-address", this.book.additionalMetadate.cover.name);
            infoDom.appendChild(coverDom);
        }
        if (this.book.introductionHTML) {
            const divElem = document.createElement("div");
            const h3Elem = document.createElement("h3");
            h3Elem.innerText = "简介";
            const introDom = document.createElement("div");
            introDom.className = "introduction";
            introDom.innerHTML = this.book.introductionHTML.innerHTML;
            divElem.appendChild(h3Elem);
            divElem.appendChild(introDom);
            infoDom.appendChild(divElem);
        }
        TocMain?.appendChild(infoDom);
        const bookUrlDom = document.createElement("div");
        bookUrlDom.className = "bookurl";
        const bookUrlAnchor = document.createElement("a");
        bookUrlAnchor.href = this.book.bookUrl;
        bookUrlAnchor.innerText = "打开原始网站";
        bookUrlDom.appendChild(bookUrlAnchor);
        TocMain?.appendChild(bookUrlDom);
        const hr = document.createElement("hr");
        TocMain?.appendChild(hr);
        const tocStyle = document.createElement("style");
        tocStyle.innerHTML = this.tocStyleText;
        ToC.head.appendChild(tocStyle);
        let sections = [];
        for (const chapter of this.chapters) {
            const chapterName = this.getchapterName(chapter);
            const htmlfileNameBase = `${"0".repeat(this.chapters.length.toString().length -
                chapter.chapterNumber.toString().length)}${chapter.chapterNumber.toString()}.html`;
            const chapterHtmlFileName = `Chapter${htmlfileNameBase}`;
            if (chapter.sectionName) {
                const sectionHtmlId = `section${chapter.sectionNumber}`;
                if (!sections.includes(chapter.sectionName)) {
                    sections.push(chapter.sectionName);
                    log_1.log.debug(`[save]生成卷DOM：${chapter.sectionName}`);
                    const sectionDiv = document.createElement("div");
                    sectionDiv.id = sectionHtmlId;
                    sectionDiv.className = "section";
                    const heading = document.createElement("h2");
                    heading.className = "section-label";
                    heading.innerHTML = chapter.sectionName;
                    sectionDiv.appendChild(heading);
                    if (sections.length !== 1) {
                        const hr = document.createElement("hr");
                        TocMain?.appendChild(hr);
                    }
                    TocMain?.appendChild(sectionDiv);
                }
                log_1.log.debug(`[save]生成章DOM：${chapterName}`);
                const sectionDiv = TocMain?.querySelector("#" + sectionHtmlId);
                const chapterDiv = document.createElement("div");
                chapterDiv.className = "chapter";
                const chapterAnchor = document.createElement("a");
                chapterAnchor.href = chapterHtmlFileName;
                chapterAnchor.innerHTML = chapterName;
                if (!chapter.contentHTML) {
                    chapterAnchor.classList.add("disabled");
                }
                chapterDiv.appendChild(chapterAnchor);
                sectionDiv?.appendChild(chapterDiv);
            }
            else {
                let sectionDiv;
                if (TocMain?.querySelector("#section00")) {
                    sectionDiv = TocMain?.querySelector("#section00");
                }
                else {
                    sectionDiv = document.createElement("div");
                    sectionDiv.id = "section00";
                    sectionDiv.className = "section";
                    TocMain?.appendChild(sectionDiv);
                }
                const chapterDiv = document.createElement("div");
                chapterDiv.className = "chapter";
                const chapterAnchor = document.createElement("a");
                chapterAnchor.href = chapterHtmlFileName;
                chapterAnchor.innerHTML = chapterName;
                if (!chapter.contentHTML) {
                    chapterAnchor.classList.add("disabled");
                }
                chapterDiv.appendChild(chapterAnchor);
                sectionDiv?.appendChild(chapterDiv);
            }
            log_1.log.debug("[save]保存ToC文件");
            this.savedZip.file("ToC.html", new Blob([ToC.documentElement.outerHTML.replaceAll("data-src-address", "src")], {
                type: "text/html; charset=UTF-8",
            }));
        }
    }
    saveChapters() {
        let sections = [];
        for (const chapter of this.chapters) {
            const chapterName = this.getchapterName(chapter);
            const htmlfileNameBase = `${"0".repeat(this.chapters.length.toString().length -
                chapter.chapterNumber.toString().length)}${chapter.chapterNumber.toString()}.html`;
            const chapterHtmlFileName = `Chapter${htmlfileNameBase}`;
            if (chapter.sectionName) {
                if (!sections.includes(chapter.sectionName)) {
                    sections.push(chapter.sectionName);
                    log_1.log.debug(`[save]保存卷HTML文件：${chapter.sectionName}`);
                    const sectionHTMLBlob = this.genSectionHtmlFile(chapter.sectionName);
                    this.savedZip.file(`Section${htmlfileNameBase}`, sectionHTMLBlob);
                }
            }
            log_1.log.debug(`[save]保存章HTML文件：${chapterName}`);
            if (chapter.contentHTML) {
                const chapterHTMLBlob = this.genChapterHtmlFile(chapterName, chapter.contentHTML, chapter.chapterUrl);
                this.savedZip.file(chapterHtmlFileName, chapterHTMLBlob);
            }
            log_1.log.debug(`[save]开始保存章节附件：${chapterName}`);
            if (chapter.contentImages) {
                for (const attachment of chapter.contentImages) {
                    this.addImageToZip(attachment, this.savedZip);
                }
            }
        }
    }
    getchapterName(chapter) {
        if (chapter.chapterName) {
            return chapter.chapterName;
        }
        else {
            return chapter.chapterNumber.toString();
        }
    }
    genMetaDateTxt() {
        let metaDateText = `题名：${this.book.bookname}\n作者：${this.book.author}`;
        if (this.book.additionalMetadate.tags) {
            metaDateText += `\nTag列表：${this.book.additionalMetadate.tags.join("、")}`;
        }
        metaDateText += `\n原始网址：${this.book.bookUrl}`;
        if (this.book.additionalMetadate.cover) {
            metaDateText += `\n封面图片地址：${this.book.additionalMetadate.cover.url}`;
        }
        if (this.book.introduction) {
            metaDateText += `\n简介：${this.book.introduction}`;
        }
        metaDateText += `\n下载时间：${new Date().toISOString()}\n本文件由小说下载器生成，软件地址：https://github.com/yingziwu/novel-downloader\n\n`;
        return metaDateText;
    }
    addImageToZip(image, zip) {
        if (image.status === main_1.Status.finished && image.imageBlob) {
            log_1.log.debug(`[save]添加附件，文件名：${image.name}，对象`, image.imageBlob);
            zip.file(image.name, image.imageBlob);
        }
        else {
            log_1.log.error("[save]附件下载失败！");
            log_1.log.error(image);
        }
    }
    genSectionText(sectionName) {
        return (`${"=".repeat(20)}\n\n\n\n# ${sectionName}\n\n\n\n${"=".repeat(20)}` +
            "\n\n");
    }
    genChapterText(chapterName, contentText) {
        return `## ${chapterName}\n\n${contentText}\n\n`;
    }
    genSectionHtmlFile(sectionName) {
        let htmlFile = new DOMParser().parseFromString(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator" content="https://github.com/yingziwu/novel-downloader"><link href="style.css" type="text/css" rel="stylesheet"/><title>${sectionName}</title></head><body><div class="main"><h1>${sectionName}</h1></div></body></html>`, "text/html");
        return new Blob([
            htmlFile.documentElement.outerHTML.replaceAll("data-src-address", "src"),
        ], {
            type: "text/html; charset=UTF-8",
        });
    }
    genChapterHtmlFile(chapterName, DOM, chapterUrl) {
        let htmlFile = new DOMParser().parseFromString(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator" content="https://github.com/yingziwu/novel-downloader"><meta name="source" content="${chapterUrl}"><link href="style.css" type="text/css" rel="stylesheet"/><title>${chapterName}</title></head><body><div class="main"><h2>${chapterName}</h2></div></body></html>`, "text/html");
        htmlFile.querySelector(".main")?.appendChild(DOM);
        return new Blob([
            htmlFile.documentElement.outerHTML.replaceAll("data-src-address", "src"),
        ], {
            type: "text/html; charset=UTF-8",
        });
    }
    chapterSort(a, b) {
        if (a.chapterNumber > b.chapterNumber) {
            return 1;
        }
        if (a.chapterNumber === b.chapterNumber) {
            return 0;
        }
        if (a.chapterNumber < b.chapterNumber) {
            return -1;
        }
        return 0;
    }
}
function saveOptionsValidate(data) {
    const keyNamesS = ["mainStyleText", "tocStyleText"];
    const keyNamesF = ["getchapterName"];
    function keyNametest(keyname) {
        const keyList = new Array().concat(keyNamesS).concat(keyNamesF);
        if (keyList.includes(keyname)) {
            return true;
        }
        return false;
    }
    function keyNamesStest(keyname) {
        if (keyNamesS.includes(keyname)) {
            if (typeof data[keyname] === "string") {
                return true;
            }
        }
        return false;
    }
    function keyNamesFtest(keyname) {
        if (keyNamesF.includes(keyname)) {
            if (typeof data[keyname] === "function") {
                return true;
            }
        }
        return false;
    }
    if (typeof data !== "object") {
        return false;
    }
    if (Object.keys(data).length === 0) {
        return false;
    }
    for (const keyname in data) {
        if (!keyNametest(keyname)) {
            return false;
        }
        if (!(keyNamesStest(keyname) || keyNamesFtest(keyname))) {
            return false;
        }
    }
    return true;
}
exports.saveOptionsValidate = saveOptionsValidate;
function save(book, options) {
    const saveBookObj = new saveBook(book);
    if (rules_1.enableCustomSaveOptions && saveOptionsValidate(options)) {
        for (const option in options) {
            saveBookObj[option] = options[option];
        }
    }
    if (book.saveOptions !== undefined) {
        for (const option in book.saveOptions) {
            saveBookObj[option] = book.saveOptions[option];
        }
    }
    saveBookObj.saveTxt();
    saveBookObj.saveZip();
}
exports.save = save;
async function finish() {
    if (lib_1._GM_setValue && lib_1._GM_getValue && lib_1._GM_deleteValue) {
        const { printStat, successPlus } = await Promise.resolve().then(() => __webpack_require__("./src/stat.ts"));
        successPlus();
        printStat();
    }
    await lib_1.sleep(3000);
    if (rules_1.enaleDebug) {
        log_1.saveLogTextToFile();
    }
    if (rules_1.enableCustomFinishCallback &&
        typeof unsafeWindow.customFinishCallback ===
            "function") {
        const customFinishCallback = unsafeWindow
            .customFinishCallback;
        log_1.log.info(`发现自定义结束回调函数，内容如下：\n${customFinishCallback.toString()}`);
        customFinishCallback();
    }
}
function setTabMark() {
    return new Promise((resolve, reject) => {
        GM_getTab((curTabObject) => {
            curTabObject.novel_downloader =
                document.location.href;
            GM_saveTab(curTabObject);
            resolve(curTabObject);
        });
    });
}
exports.setTabMark = setTabMark;
function getNowRunNumber() {
    return new Promise((resolve, reject) => {
        GM_getTabs((curTabObjects) => {
            let nowRunNumber = 0;
            for (let i in curTabObjects) {
                const novel_downloader_url = (curTabObjects[i])?.novel_downloader;
                if (novel_downloader_url !== undefined &&
                    new URL(novel_downloader_url).hostname === document.location.hostname) {
                    nowRunNumber++;
                }
            }
            resolve(nowRunNumber);
        });
    });
}
exports.getNowRunNumber = getNowRunNumber;
function removeTabMark() {
    return new Promise((resolve, reject) => {
        GM_getTab((curTabObject) => {
            if (curTabObject.novel_downloader) {
                delete curTabObject.novel_downloader;
            }
            GM_saveTab(curTabObject);
            resolve(curTabObject);
        });
    });
}
exports.removeTabMark = removeTabMark;
function r18SiteWarning() {
    if (!lib_1.storageAvailable("localStorage")) {
        log_1.log.error("Window.localStorage API 失效！");
        return true;
    }
    const k = "novel-download-r18-setting";
    let v = localStorage.getItem(k);
    if (v === null) {
        const c = confirm("本网站可能含有R18内容，是否在该网站运行小说下载器脚本？");
        if (c) {
            localStorage.setItem(k, JSON.stringify(true));
            return true;
        }
        else {
            localStorage.setItem(k, JSON.stringify(false));
            return false;
        }
    }
    else {
        if (typeof JSON.parse(v) === "boolean") {
            return JSON.parse(v);
        }
        else {
            localStorage.removeItem(k);
            return r18SiteWarning();
        }
    }
}
exports.r18SiteWarning = r18SiteWarning;


/***/ }),

/***/ "./src/lib.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storageAvailable = exports.sandboxed = exports.putAttachmentClassCache = exports.getAttachmentClassCache = exports.sleep = exports.concurrencyRun = exports.gfetch = exports.rm = exports.ggetHtmlDOM = exports.ggetText = exports.getHtmlDOM = exports.getText = exports.cleanDOM = exports._GM_deleteValue = exports._GM_getValue = exports._GM_setValue = exports._GM_info = void 0;
const cleanDOM_1 = __webpack_require__("./src/cleanDOM.ts");
const index_1 = __webpack_require__("./src/index.ts");
const log_1 = __webpack_require__("./src/log.ts");
if (typeof GM_info === "undefined") {
    if (typeof GM === "undefined") {
        throw new Error("未发现 GM_info");
    }
    else {
        if (typeof GM.info === "undefined") {
            throw new Error("未发现 GM_info");
        }
        else {
            exports._GM_info = GM.info;
        }
    }
}
else {
    exports._GM_info = GM_info;
}
let _GM_xmlhttpRequest;
if (typeof GM_xmlhttpRequest === "undefined") {
    if (typeof GM === "undefined") {
        throw new Error("未发现 GM_xmlhttpRequest");
    }
    else {
        if (typeof GM.xmlHttpRequest === "undefined") {
            throw new Error("未发现 GM_xmlhttpRequest");
        }
        else {
            _GM_xmlhttpRequest = GM.xmlHttpRequest;
        }
    }
}
else {
    _GM_xmlhttpRequest = GM_xmlhttpRequest;
}
exports._GM_setValue = null;
if (typeof GM_setValue === "undefined") {
    if (typeof GM === "undefined") {
        log_1.log.warn("未发现 GM_setValue");
    }
    else {
        if (typeof GM.setValue === "undefined") {
            log_1.log.warn("未发现 GM_setValue");
        }
        else {
            exports._GM_setValue = GM.setValue;
        }
    }
}
else {
    exports._GM_setValue = GM_setValue;
}
exports._GM_getValue = null;
if (typeof GM_getValue === "undefined") {
    if (typeof GM === "undefined") {
        log_1.log.warn("未发现 GM_getValue");
    }
    else {
        if (typeof GM.getValue === "undefined") {
            log_1.log.warn("未发现 GM_getValue");
        }
        else {
            exports._GM_getValue = GM.getValue;
        }
    }
}
else {
    exports._GM_getValue = GM_getValue;
}
exports._GM_deleteValue = null;
if (typeof GM_deleteValue === "undefined") {
    if (typeof GM === "undefined") {
        log_1.log.warn("未发现 GM_deleteValue");
    }
    else {
        if (typeof GM.deleteValue === "undefined") {
            log_1.log.warn("未发现 GM_deleteValue");
        }
        else {
            exports._GM_deleteValue = GM.deleteValue;
        }
    }
}
else {
    exports._GM_deleteValue = GM_deleteValue;
}
function cleanDOM(DOM, imgMode) {
    const builder = {
        dom: document.createElement("div"),
        text: "",
        images: [],
        imgMode: imgMode,
    };
    cleanDOM_1.walk(DOM, builder);
    return {
        dom: builder.dom,
        text: builder.text.trim(),
        images: builder.images,
    };
}
exports.cleanDOM = cleanDOM;
async function getText(url, charset, init = undefined) {
    if (charset === undefined) {
        return fetch(url, init).then((response) => {
            if (response.ok) {
                return response.text();
            }
            else {
                throw new Error(`Bad response! ${url}`);
            }
        });
    }
    else {
        return fetch(url, init)
            .then((response) => {
            if (response.ok) {
                return response.arrayBuffer();
            }
            else {
                throw new Error(`Bad response! ${url}`);
            }
        })
            .then((buffer) => {
            const decoder = new TextDecoder(charset);
            const text = decoder.decode(buffer);
            return text;
        });
    }
}
exports.getText = getText;
async function getHtmlDOM(url, charset, init = undefined) {
    const htmlText = await getText(url, charset, init);
    return new DOMParser().parseFromString(htmlText, "text/html");
}
exports.getHtmlDOM = getHtmlDOM;
async function ggetText(url, charset, init = undefined) {
    if (charset === undefined) {
        return gfetch(url, init).then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.responseText;
            }
            else {
                throw new Error(`Bad response! ${url}`);
            }
        });
    }
    else {
        if (init) {
            init["responseType"] = "arraybuffer";
        }
        else {
            init = { responseType: "arraybuffer" };
        }
        return gfetch(url, init)
            .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.response;
            }
            else {
                throw new Error(`Bad response! ${url}`);
            }
        })
            .then((buffer) => {
            const decoder = new TextDecoder(charset);
            const text = decoder.decode(buffer);
            return text;
        });
    }
}
exports.ggetText = ggetText;
async function ggetHtmlDOM(url, charset, init = undefined) {
    const htmlText = await ggetText(url, charset, init);
    return new DOMParser().parseFromString(htmlText, "text/html");
}
exports.ggetHtmlDOM = ggetHtmlDOM;
function rm(selector, all = false, dom) {
    if (all) {
        let rs = dom.querySelectorAll(selector);
        rs.forEach((e) => e.remove());
    }
    else {
        let r = dom.querySelector(selector);
        if (r) {
            r.remove();
        }
    }
}
exports.rm = rm;
function gfetch(url, { method = "GET", headers, data, cookie, binary, nocache, revalidate, timeout, context, responseType, overrideMimeType, anonymous, username, password, } = {}) {
    return new Promise((resolve, reject) => {
        if (_GM_xmlhttpRequest) {
            _GM_xmlhttpRequest({
                url: url,
                method: method,
                headers: headers,
                data: data,
                cookie: cookie,
                binary: binary,
                nocache: nocache,
                revalidate: revalidate,
                timeout: timeout,
                context: context,
                responseType: responseType,
                overrideMimeType: overrideMimeType,
                anonymous: anonymous,
                username: username,
                password: password,
                onload: (obj) => {
                    resolve(obj);
                },
                onerror: (err) => {
                    reject(err);
                },
            });
        }
        else {
            throw new Error("未发现 _GM_xmlhttpRequest API");
        }
    });
}
exports.gfetch = gfetch;
function concurrencyRun(list, limit, asyncHandle) {
    function recursion(arr) {
        return asyncHandle(arr.shift()).then(() => {
            if (arr.length !== 0) {
                return recursion(arr);
            }
            else {
                return "finish!";
            }
        });
    }
    let listCopy = [...list];
    let asyncList = [];
    while (limit--) {
        asyncList.push(recursion(listCopy));
    }
    return Promise.all(asyncList);
}
exports.concurrencyRun = concurrencyRun;
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.sleep = sleep;
function getAttachmentClassCache(url, name) {
    const found = index_1.attachmentClassCache.find((attachmentClass) => attachmentClass.url === url && attachmentClass.name === name);
    return found;
}
exports.getAttachmentClassCache = getAttachmentClassCache;
function putAttachmentClassCache(attachmentClass) {
    index_1.attachmentClassCache.push(attachmentClass);
    return true;
}
exports.putAttachmentClassCache = putAttachmentClassCache;
function sandboxed(code) {
    const frame = document.createElement("iframe");
    document.body.appendChild(frame);
    if (frame.contentWindow) {
        const F = frame.contentWindow.Function;
        const args = Object.keys(frame.contentWindow).join();
        document.body.removeChild(frame);
        return F(args, code)();
    }
}
exports.sandboxed = sandboxed;
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return (e instanceof DOMException &&
            (e.code === 22 ||
                e.code === 1014 ||
                e.name === "QuotaExceededError" ||
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            storage &&
            storage.length !== 0);
    }
}
exports.storageAvailable = storageAvailable;


/***/ }),

/***/ "./src/log.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.log = exports.saveLogTextToFile = void 0;
const rules_1 = __webpack_require__("./src/rules.ts");
const loglevel_1 = __webpack_require__("./node_modules/loglevel/lib/loglevel.js");
exports.log = loglevel_1.default;
if (rules_1.enaleDebug) {
    loglevel_1.default.setLevel("trace");
}
else {
    loglevel_1.default.setLevel("info");
}
let logText = "";
const originalFactory = loglevel_1.default.methodFactory;
loglevel_1.default.methodFactory = function (methodName, logLevel, loggerName) {
    const rawMethod = originalFactory(methodName, logLevel, loggerName);
    return function (message) {
        logText += message + "\n";
        rawMethod(message);
    };
};
loglevel_1.default.setLevel(loglevel_1.default.getLevel());
function saveLogTextToFile() {
    saveAs(new Blob([logText], { type: "text/plain; charset=UTF-8" }), `novel-downloader-${Date.now().toString()}.log`);
}
exports.saveLogTextToFile = saveLogTextToFile;


/***/ }),

/***/ "./src/main.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpectError = exports.attachmentClass = exports.Chapter = exports.Book = exports.Status = void 0;
const rules_1 = __webpack_require__("./src/rules.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const log_1 = __webpack_require__("./src/log.ts");
var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["downloading"] = 1] = "downloading";
    Status[Status["failed"] = 2] = "failed";
    Status[Status["finished"] = 3] = "finished";
    Status[Status["aborted"] = 4] = "aborted";
})(Status = exports.Status || (exports.Status = {}));
class Book {
    constructor(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters) {
        this.bookUrl = bookUrl;
        this.bookname = bookname;
        this.author = author;
        this.introduction = introduction;
        this.introductionHTML = introductionHTML;
        this.additionalMetadate = additionalMetadate;
        this.chapters = chapters;
        log_1.log.debug("[Book]初始化完成");
    }
}
exports.Book = Book;
class Chapter {
    constructor(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, chapterParse, charset, options) {
        this.bookUrl = bookUrl;
        this.bookname = bookname;
        this.chapterUrl = chapterUrl;
        this.chapterNumber = chapterNumber;
        this.chapterName = chapterName;
        this.isVIP = isVIP;
        this.isPaid = isPaid;
        this.sectionName = sectionName;
        this.sectionNumber = sectionNumber;
        this.sectionChapterNumber = sectionChapterNumber;
        this.chapterParse = chapterParse;
        this.charset = charset;
        this.options = options;
        this.status = Status.pending;
        this.retryTime = 0;
    }
    async init() {
        const obj = await this.parse();
        const { chapterName, contentRaw, contentText, contentHTML, contentImages, additionalMetadate, } = obj;
        this.chapterName = chapterName;
        this.contentRaw = contentRaw;
        this.contentText = contentText;
        this.contentHTML = contentHTML;
        this.contentImages = contentImages;
        this.additionalMetadate = additionalMetadate;
        log_1.log.info(`[Chapter]${this.chapterName} 解析完成。`);
        return obj;
    }
    async parse() {
        this.status = Status.downloading;
        return this.chapterParse(this.chapterUrl, this.chapterName, this.isVIP, this.isPaid, this.charset, this.options)
            .then(async (obj) => {
            const contentImages = obj.contentImages;
            if (contentImages) {
                let downloadingImages = contentImages.filter((imgObj) => imgObj.status === Status.downloading);
                while (downloadingImages.length) {
                    await lib_1.sleep(500);
                    downloadingImages = contentImages.filter((imgObj) => imgObj.status === Status.downloading);
                }
            }
            this.status = Status.finished;
            return obj;
        })
            .catch(async (err) => {
            this.retryTime++;
            log_1.log.error(`[Chapter]${this.chapterName}解析出错，第${this.retryTime}次重试，章节地址：${this.chapterUrl}`);
            if (this.status !== Status.failed && this.retryTime < rules_1.retryLimit) {
                await lib_1.sleep(this.retryTime * 1500);
                return this.parse();
            }
            else {
                this.status = Status.failed;
                log_1.log.error(err);
                log_1.log.trace(err);
                return {
                    chapterName: this.chapterName,
                    contentRaw: null,
                    contentText: null,
                    contentHTML: null,
                    contentImages: null,
                    additionalMetadate: null,
                };
            }
        });
    }
}
exports.Chapter = Chapter;
class attachmentClass {
    constructor(imageUrl, name, mode) {
        this.url = imageUrl;
        this.name = name;
        this.mode = mode;
        this.status = Status.pending;
        this.retryTime = 0;
        this.defaultHeader = {
            Referer: document.location.origin,
        };
    }
    async init() {
        if (this.mode === "naive") {
            this.imageBlob = await this.downloadImage();
        }
        else {
            this.imageBlob = await this.tmDownloadImage();
        }
        log_1.log.info(`[attachment] ${this.url} 下载完成。`);
        return this.imageBlob;
    }
    downloadImage() {
        const headers = Object.assign(this.defaultHeader, this.headers);
        const referer = headers.Referer;
        delete headers["Referer"];
        this.status = Status.downloading;
        return fetch(this.url, {
            headers: { ...headers },
            referrer: referer,
        })
            .then((response) => {
            if (response.ok) {
                this.status = Status.finished;
                return response.blob();
            }
            else {
                if (response.status === 404) {
                    this.status = Status.failed;
                }
                throw new Error(`Image request response is not ok!\nImage url: ${this.url} .`);
            }
        })
            .catch(async (err) => {
            this.retryTime++;
            log_1.log.error(`[attachment]下载 ${this.url} 出错，第${this.retryTime}次重试，下载模式：${this.mode}`);
            if (this.status !== Status.failed && this.retryTime < rules_1.retryLimit) {
                await lib_1.sleep(this.retryTime * 1500);
                return this.downloadImage();
            }
            else {
                this.status = Status.failed;
                log_1.log.error(err);
                log_1.log.trace(err);
                return null;
            }
        });
    }
    tmDownloadImage() {
        const headers = Object.assign(this.defaultHeader, this.headers);
        this.status = Status.downloading;
        return lib_1.gfetch(this.url, {
            headers: { ...headers },
            responseType: "blob",
        })
            .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                this.status = Status.finished;
                return response.response;
            }
            else {
                if (response.status === 404) {
                    this.status = Status.failed;
                }
                throw new Error(`Bad response!\nRequest url: ${this.url}`);
            }
        })
            .catch(async (err) => {
            this.retryTime++;
            log_1.log.error(`[attachment]下载 ${this.url} 出错，第${this.retryTime}次重试，下载模式：${this.mode}`);
            if (this.status !== Status.failed && this.retryTime < rules_1.retryLimit) {
                await lib_1.sleep(this.retryTime * 1500);
                return this.tmDownloadImage();
            }
            else {
                this.status = Status.failed;
                log_1.log.error(err);
                log_1.log.trace(err);
                return null;
            }
        });
    }
}
exports.attachmentClass = attachmentClass;
class ExpectError extends Error {
}
exports.ExpectError = ExpectError;


/***/ }),

/***/ "./src/rules.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRule = exports.r18SiteList = exports.icon1 = exports.icon0 = exports.enableR18SiteWarning = exports.enableCustomSaveOptions = exports.enableCustomChapterFilter = exports.enableCustomFinishCallback = exports.enaleDebug = exports.retryLimit = void 0;
exports.retryLimit = 5;
exports.enaleDebug = unsafeWindow.enaleDebug ?? false;
exports.enableCustomFinishCallback = true;
exports.enableCustomChapterFilter = true;
exports.enableCustomSaveOptions = true;
exports.enableR18SiteWarning = false;
exports.icon0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFYElEQVR4nO2dIUxkORyHP4XD4E6RYNZgUGvWonAnVqxDbbJiNWLNOsQ65Oo1CMQIFAnJJiQIcgY7YhIEbgTJiEkm4USPuyNh3pv2tf33tb9f8kl4fe3H0Pm37xXi50/gHJgBC+C5YB6Bv4AL4CuwH7872skBcI/9oA5lBpwAO1F7p/IcUf5fuy8L4AzYjthPVWYfeMJ+wFLxABxG660K8xv7QcrBWawOqykfsB+YnEzQv4RXOcV+UHJzD+zF6LwaMsF+QCyYo3kBALfYD4YVK+DL8C4cd+6wHwhrfgJbQztyrJEAjhvgj4F9OcrUKMA33Me778/NaLCUXKMA27ivt48BP7vArYU0k1oFAPeRHjrJPQ3u0ZGlZgHATe5+Bv6ecxooGtUuwEuOCVvsugd2vXp0ZGlFAHDL3bOA3zfHzSmqTEsCgNsjcBXwO5e4T5Hq0poA4OYFoWsg1RWNWhTgJZ8ImxdcUdFuo5YFADcvmAZcY0olRaPWBQD313wZcJ0n3Fa6UUcC/JfvAdda4TagjjYS4HWOcF/7fK/5i5FODmvcDzC0eveOsO3xt4xwRVECvJ1t3MMmvtd+AN5HuH62SIDunOC/tLxgREUjCdCf0HnBKFYUJcBm2SNsXnCZqD3RIgE2zzZuidi3PVPcxLLISAD/fMYtDvm0qdht6BIgLIf4zwuWOHmKigQIzy5hhbSiKocSYFi2cFVA3zZ+ytjGztQogMVS7Vf85gVPFLLVrEYBrGbcvlvRJzbNfJ0aBbDc1++7Fd28bFyjAOdRe8g/PlvOfhm18d/UKMCKMjZqHNM/L1hiXCmsUYBn3ILMZ+zX6N/jVgi72mr6KFqtArzwiJtsneE+li3oezLJdNGodgHGgOm3AQlgz03vKCWMBLDnrneUEkYC2CMBGkcCNI4EaBwJ0DgSYEMecE/mbkLIA59NCnCzplElEbqfLvTJXwlQGEN2z+zjv4GzKQFK/xewZPiCTumS6xOgg4cI9xiyZ08CFIIESBwJYI8E6EACJI4EsEcCdCABEkcC2CMBOpAAiSMB7JEAHUiAxJEA9kiADiRA4kgAeyRABxIgcSSAPRKgAwmQOBLAHgnQgQRIHAlgjwToQAIkjgSwRwJ0IAESRwLYYyrA7zWNKgUJkDgSwB4J0IEESBwJYE8zAqxwr0T7webv2Ivxbv2PHtc7xb1qNucDpc0I8DHTPcXIB/yPi5MAHcT4KM+dXH3ThADzXDcUMSHHxEmADr5kuqcYOSJfvzQjwIKCz8/7X3bof8O3BAjkDvtXuPcl5HBICeDB9yx3FpZj8vdHcwKsKOCsnDeyhzvNSwJkYEp5hypfY9MXTQrwjDtJo5ScYNcPzQrwTBmHOx1g+y7BpgV4xJ21Z5Ut8hV8JMAaLpPf5fqcdbRLAmTE4lj1wwHtlQCRyV0l3MHvnF8JkIGcVcLc1T4JsCE5qoQW1T4JsCGpq4RW1b5iBbhe0yhLUlYJS7xfCfAGKaqE3wq4LwngQcxTta2rfRIggDlxqoQlVPskQCAxqoQlVPskwACG7CUspdonAQYQWiUsqdonAQYSUiUsqdonASLgUyUsrdonASKwwj2y1ZcSq30SIBKbVAlLK29LgMh0VQlLrfZJgMi89aRxydU+CRCZOe5g6JfsMo6TwiVARJbABe7r3pgmfRJASAAhAQQSQCABmsdUgKs1jRL5uO0dpYSRAPZMekcpYS7WNErk47R3lBLmx5pGiXyYvi1lDFumaua6f4jS5w77jmiRBa/XM8zyjnHX0sfIkrjPPQzOAeNdTRsbUzbb2ZQ9W7i9dBNghltyjUHrny4r3JtHJ//0b9RH4P8GSxsCzEN/51YAAAAASUVORK5CYII=";
exports.icon1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAESElEQVR4nO2cLUxcQRSFv4QgEBiSKgQCh6pCouvQlbVVdaRuTFUNoqaqEkktCoVD4HBITBMMosmaVsxu+kL3l3lv7p13z5ccyc68OSf3sLtvHwghhBBCjJM/hRKNowAERwEIjgIQHAUgOApAcBSA4CgAwVEAgqMABEcBCI4CEBwFIDgKQHAUgOAoAMFRAIKjAARHAQiOAhAcBSA4CkBwFIDgKADBUQCCowAERwEIjgIQHAUgOApAcBSA4CgAzkmUm9SqUvHpjYSEvRky35iEvSky35iEvTky35iEvUky35iEvVky35iEvWky35iEvXky35iEvYky35iEvZky35iEvaky35iEvbky35iEvcky35iEvdky35iEveky35iEzA9PQuaHJyHzm2e78O8T7Zhfeq2j4i1wDvyi/GAT/s1P5Gs9J197SN4An4A7hjlgz+a/fM078lm8KXxt92wDp8BPYEL9g/ZoflcT8tmcMrKK6I54TwfueS/NV8SyEe/54D3uoZmK2GTEt2KA5dov5bYiXjvivRthsea6Mq+Ivka8V0NqrlWqahUx1IjfRGeF15DWWCMVrnG2xhpDaLCKqDHiV+ka+ADs9nA9ack6qYfX3yXv9XrJOkOruCIsRvxLPZANOXztRSwhzVkvDbDO4fR1H+asV0trV4SHEf8M/ABOVm22B1Jn3VRhvRPytT1jc7YLK8LTiN/Z/FyLSNT/Vm8HZxVhtYnZiD8oOc3GOcC+Iqou9gx8p86Ib40T8tnUrogqi1wB76k/4ltkh3xWVzQegHvgM7Df6/HEYp98hvc0EoAn8hg7HuAwonNMPtsnnAVggkZ8TboV0cfb9aIRf4ZGvCX7ZA9KKmLjEf8NjXiPHJO92bQiFICRUCUAqgBfVK+AedI/gXVx80/goorQ28BhcPs2cFlF6IOgMpr7IGiRVBHrM5qPguep5vf9rWF1v0DVxbrS18EBvw5epGv6u+fPOx7uGXQXgJnGXBHWt4Q1EYCuhrwptBYebgptNgBd3dBORcxG/A325zaaAMz0G7gA3gFbaxpSgy3yni7Ie7Q+p9EGoKtH4AtwtNqfwTia7uER+/MIF4CuboCPwN5Su/phb7pWKyM+RABmGqoiWh7xoQLQ1SPwlbKKOJq+RssjPmwAurpl/YqYjfhbB/tWAHrWBLjk/9/HzX4XeYnd7yIVgMqa/T7O+neR1jLfgKQASIYy34CkAEiGcvGACKmu5j5DKPJboQha9BZ4Lh4eEiX1o+LnCKoi2tMgTxJVRfjWRiO+FFWEH5k/TVwVUV/mD4ueh4cHTY5ZVUd8KaqI/mQ+4ktRRWwulyO+FFXEcjU14ktRRfxT8yO+lIgVMcoRX8rYP2gKNeJLGVNFhB/xpbRYERrxA+C9IjTiK+KpIjTijbGoCI14hwxdERrxDdFnRWjEN85rKkIjfoSsqgiN+EB0K0IjXgghhBDh+Avri3imoU6g/AAAAABJRU5ErkJggg==";
exports.r18SiteList = ["www.dierbanzhu1.com", "m.yuzhaige.cc"];
async function getRule() {
    const host = document.location.host;
    let ruleClass;
    switch (host) {
        case "www.ciweimao.com": {
            const { ciweimao } = await Promise.resolve().then(() => __webpack_require__("./src/rules/ciweimao.ts"));
            ruleClass = ciweimao;
            break;
        }
        case "www.uukanshu.com": {
            const { uukanshu } = await Promise.resolve().then(() => __webpack_require__("./src/rules/uukanshu.ts"));
            ruleClass = uukanshu;
            break;
        }
        case "www.yruan.com": {
            const { yrun } = await Promise.resolve().then(() => __webpack_require__("./src/rules/yruan.ts"));
            ruleClass = yrun;
            break;
        }
        case "www.shuquge.com":
        case "www.sizhicn.com": {
            const { shuquge } = await Promise.resolve().then(() => __webpack_require__("./src/rules/biquge.ts"));
            ruleClass = shuquge;
            break;
        }
        case "www.dingdiann.net": {
            const { dingdiann } = await Promise.resolve().then(() => __webpack_require__("./src/rules/biquge.ts"));
            ruleClass = dingdiann;
            break;
        }
        case "www.lewenn.com":
        case "www.klxs.la":
        case "www.xkzw.org": {
            const { xkzw } = await Promise.resolve().then(() => __webpack_require__("./src/rules/xkzw.ts"));
            ruleClass = xkzw;
            break;
        }
        case "www.266ks.com": {
            const { c226ks } = await Promise.resolve().then(() => __webpack_require__("./src/rules/226ks.ts"));
            ruleClass = c226ks;
            break;
        }
        case "book.sfacg.com": {
            const { sfacg } = await Promise.resolve().then(() => __webpack_require__("./src/rules/sfacg.ts"));
            ruleClass = sfacg;
            break;
        }
        case "www.hetushu.com": {
            const { hetushu } = await Promise.resolve().then(() => __webpack_require__("./src/rules/hetushu.ts"));
            ruleClass = hetushu;
            break;
        }
        case "www.shouda8.com":
        case "www.shouda88.com": {
            const { shouda8 } = await Promise.resolve().then(() => __webpack_require__("./src/rules/shouda8.ts"));
            ruleClass = shouda8;
            break;
        }
        case "www.gebiqu.com": {
            const { gebiqu } = await Promise.resolve().then(() => __webpack_require__("./src/rules/biquge.ts"));
            ruleClass = gebiqu;
            break;
        }
        case "www.meegoq.com":
        case "www.viviyzw.com": {
            const { meegoq } = await Promise.resolve().then(() => __webpack_require__("./src/rules/meegoq.ts"));
            ruleClass = meegoq;
            break;
        }
        case "www.xiaoshuodaquan.com":
        case "www.1pwx.com": {
            const { xiaoshuodaquan } = await Promise.resolve().then(() => __webpack_require__("./src/rules/xiaoshuodaquan.ts"));
            ruleClass = xiaoshuodaquan;
            break;
        }
        case "book.qidian.com": {
            const { qidian } = await Promise.resolve().then(() => __webpack_require__("./src/rules/qidian.ts"));
            ruleClass = qidian;
            break;
        }
        case "www.jjwxc.net": {
            const { jjwxc } = await Promise.resolve().then(() => __webpack_require__("./src/rules/jjwxc.ts"));
            ruleClass = jjwxc;
            break;
        }
        case "www.biquwoo.com":
        case "www.biquwo.org":
        case "www.81book.com":
        case "www.hongyeshuzhai.com": {
            const { common } = await Promise.resolve().then(() => __webpack_require__("./src/rules/biquge.ts"));
            ruleClass = common;
            break;
        }
        case "book.zongheng.com":
        case "huayu.zongheng.com": {
            const { zongheng } = await Promise.resolve().then(() => __webpack_require__("./src/rules/zongheng.ts"));
            ruleClass = zongheng;
            break;
        }
        case "www.17k.com": {
            const { c17k } = await Promise.resolve().then(() => __webpack_require__("./src/rules/17k.ts"));
            ruleClass = c17k;
            break;
        }
        case "www.shuhai.com":
        case "mm.shuhai.com": {
            const { shuhai } = await Promise.resolve().then(() => __webpack_require__("./src/rules/shuhai.ts"));
            ruleClass = shuhai;
            break;
        }
        case "www.gongzicp.com": {
            const { gongzicp } = await Promise.resolve().then(() => __webpack_require__("./src/rules/gongzicp.ts"));
            ruleClass = gongzicp;
            break;
        }
        case "m.yuzhaige.cc": {
            const { yuzhaige } = await Promise.resolve().then(() => __webpack_require__("./src/rules/yuzhaige.ts"));
            ruleClass = yuzhaige;
            break;
        }
        case "www.linovel.net": {
            const { linovel } = await Promise.resolve().then(() => __webpack_require__("./src/rules/linovel.ts"));
            ruleClass = linovel;
            break;
        }
        case "www.xinwanben.com": {
            const { xinwanben } = await Promise.resolve().then(() => __webpack_require__("./src/rules/xinwanben.ts"));
            ruleClass = xinwanben;
            break;
        }
        case "www.tadu.com": {
            const { tadu } = await Promise.resolve().then(() => __webpack_require__("./src/rules/tadu.ts"));
            ruleClass = tadu;
            break;
        }
        case "www.idejian.com": {
            const { idejian } = await Promise.resolve().then(() => __webpack_require__("./src/rules/idejian.ts"));
            ruleClass = idejian;
            break;
        }
        case "www.qimao.com": {
            const { qimao } = await Promise.resolve().then(() => __webpack_require__("./src/rules/qimao.ts"));
            ruleClass = qimao;
            break;
        }
        case "www.wenku8.net": {
            const { wenku8 } = await Promise.resolve().then(() => __webpack_require__("./src/rules/wenku8.ts"));
            ruleClass = wenku8;
            break;
        }
        case "www.dmzj.com":
        case "www.dmzj1.com": {
            const { dmzj } = await Promise.resolve().then(() => __webpack_require__("./src/rules/dmzj.ts"));
            ruleClass = dmzj;
            break;
        }
        case "sosad.fun":
        case "www.sosad.fun":
        case "wenzhan.org":
        case "www.wenzhan.org":
        case "sosadfun.com":
        case "www.sosadfun.com":
        case "xn--pxtr7m5ny.com":
        case "www.xn--pxtr7m5ny.com":
        case "xn--pxtr7m.com":
        case "www.xn--pxtr7m.com":
        case "xn--pxtr7m5ny.net":
        case "www.xn--pxtr7m5ny.net":
        case "xn--pxtr7m.net":
        case "www.xn--pxtr7m.net":
        case "sosadfun.link":
        case "www.sosadfun.link": {
            const { sosadfun } = await Promise.resolve().then(() => __webpack_require__("./src/rules/sosadfun.ts"));
            ruleClass = sosadfun;
            break;
        }
        case "www.westnovel.com": {
            const { westnovel } = await Promise.resolve().then(() => __webpack_require__("./src/rules/westnovel.ts"));
            ruleClass = westnovel;
            break;
        }
        case "www.mht.tw": {
            const { mht } = await Promise.resolve().then(() => __webpack_require__("./src/rules/mht.ts"));
            ruleClass = mht;
            break;
        }
        case "www.dierbanzhu1.com": {
            const { dierbanzhu } = await Promise.resolve().then(() => __webpack_require__("./src/rules/dierbanzhu.ts"));
            ruleClass = dierbanzhu;
            break;
        }
        case "www.xbiquge.so": {
            const { xbiquge } = await Promise.resolve().then(() => __webpack_require__("./src/rules/biquge.ts"));
            ruleClass = xbiquge;
            break;
        }
        case "www.linovelib.com": {
            const { linovelib } = await Promise.resolve().then(() => __webpack_require__("./src/rules/linovelib.ts"));
            ruleClass = linovelib;
            break;
        }
        case "www.luoqiuzw.com": {
            const { luoqiuzw } = await Promise.resolve().then(() => __webpack_require__("./src/rules/biquge.ts"));
            ruleClass = luoqiuzw;
            break;
        }
        case "www.yibige.la": {
            const { yibige } = await Promise.resolve().then(() => __webpack_require__("./src/rules/yibige.ts"));
            ruleClass = yibige;
            break;
        }
        case "www.fushuwang.org": {
            const { fushuwang } = await Promise.resolve().then(() => __webpack_require__("./src/rules/fushuwang.ts"));
            ruleClass = fushuwang;
            break;
        }
        case "www.soxscc.net":
        case "www.soxscc.org":
        case "www.soxs.cc": {
            const { soxscc } = await Promise.resolve().then(() => __webpack_require__("./src/rules/soxscc.ts"));
            ruleClass = soxscc;
            break;
        }
        case "www.fuguoduxs.com":
        case "www.shubaowa.org": {
            const { shubaowa } = await Promise.resolve().then(() => __webpack_require__("./src/rules/shubaowa.ts"));
            ruleClass = shubaowa;
            break;
        }
        default: {
            throw new Error("Not Found Rule!");
        }
    }
    const rule = new ruleClass();
    return rule;
}
exports.getRule = getRule;


/***/ }),

/***/ "./src/rules/17k.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.c17k = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class c17k {
    constructor() {
        this.imageMode = "TM";
        this.charset = "UTF-8";
        this.concurrencyLimit = 5;
    }
    async bookParse() {
        const bookUrl = document.location.href.replace("/list/", "/book/");
        const bookname = (document.querySelector("h1.Title")).innerText.trim();
        const author = (document.querySelector("div.Author > a")).innerText.trim();
        const doc = await lib_1.getHtmlDOM(bookUrl, undefined);
        const introDom = doc.querySelector("#bookInfo p.intro > a");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        let coverUrl = doc.querySelector("#bookCover img.book")
            .src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const sections = document.querySelectorAll("dl.Volume");
        let chapterNumber = 0;
        for (let i = 0; i < sections.length; i++) {
            const s = sections[i];
            const sectionNumber = i + 1;
            const sectionName = (s.querySelector("dt > span.tit")).innerText.trim();
            let sectionChapterNumber = 0;
            const cs = s.querySelectorAll("dd > a");
            for (let j = 0; j < cs.length; j++) {
                const a = cs[j];
                const span = a.firstElementChild;
                chapterNumber++;
                sectionChapterNumber++;
                const chapterName = span.innerText.trim();
                const chapterUrl = a.href;
                const isVIP = () => {
                    if (span?.className.includes("vip")) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                const isPaid = () => {
                    return false;
                };
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP(), isPaid(), sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                const isLogin = () => {
                    return false;
                };
                if (isVIP() && !(isLogin() && chapter.isPaid)) {
                    chapter.status = main_1.Status.aborted;
                }
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        async function publicChapter() {
            const doc = await lib_1.getHtmlDOM(chapterUrl, charset);
            const chapterName = (doc.querySelector("#readArea > div.readAreaBox.content > h1")).innerText.trim();
            const content = (doc.querySelector("#readArea > div.readAreaBox.content > div.p"));
            if (content) {
                lib_1.rm("p.copy", false, content);
                lib_1.rm("#banner_content", false, content);
                lib_1.rm("div.qrcode", false, content);
                lib_1.rm("div.chapter_text_ad", false, content);
                let { dom, text, images } = lib_1.cleanDOM(content, "TM");
                return {
                    chapterName: chapterName,
                    contentRaw: content,
                    contentText: text,
                    contentHTML: dom,
                    contentImages: images,
                    additionalMetadate: null,
                };
            }
            else {
                return {
                    chapterName: chapterName,
                    contentRaw: null,
                    contentText: null,
                    contentHTML: null,
                    contentImages: null,
                    additionalMetadate: null,
                };
            }
        }
        async function vipChapter() {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.c17k = c17k;


/***/ }),

/***/ "./src/rules/226ks.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.c226ks = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class c226ks {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.href.replace(/index_\d+\.html/, "index_1.html");
        const bookname = (document.querySelector(".info > .top > h1")).innerText.trim();
        const author = (document.querySelector(".info > .top > .fix > p:nth-child(1)")).innerText
            .replace(/作(\s+)?者[：:]/, "")
            .trim();
        const introDom = document.querySelector(".desc");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = document.querySelector(".imgbox > img")
            .src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const indexUrls = Array.from(document.querySelectorAll('[name="pageselect"] > option')).map((opt) => document.location.origin + opt.getAttribute("value"));
        let lis = [];
        for (const indexUrl of indexUrls) {
            log_1.log.debug(`[chapter]请求${indexUrl}`);
            const dom = await lib_1.getHtmlDOM(indexUrl, "UTF-8");
            const ul = dom.querySelector("div.row.row-section > div > div:nth-child(4) > ul");
            if (ul?.childElementCount) {
                lis = lis.concat(Array.from(ul.children));
            }
        }
        const chapterList = lis.filter((obj) => obj !== undefined);
        let chapterNumber = 0;
        for (let i = 0; i < chapterList.length; i++) {
            const node = chapterList[i];
            chapterNumber++;
            const a = node.firstElementChild;
            const chapterName = a.innerText;
            const chapterUrl = a.href;
            const isVIP = false;
            const isPaid = false;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, null, null, null, this.chapterParse, "UTF-8", {});
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = dom.querySelector("h1.title").innerText.trim();
        const content = dom.querySelector("#content");
        const ad = '<div class="posterror"><a href="javascript:postError();" class="red">章节错误,点此举报(免注册)</a>,举报后维护人员会在两分钟内校正章节内容,请耐心等待,并刷新页面。</div>';
        content.innerHTML = content.innerHTML.replace(ad, "");
        if (content) {
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.c226ks = c226ks;


/***/ }),

/***/ "./src/rules/biquge.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.xbiquge = exports.shuquge = exports.luoqiuzw = exports.gebiqu = exports.dingdiann = exports.common = exports.bookParseTemp = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
async function bookParseTemp({ bookUrl, bookname, author, introDom, introDomPatch, coverUrl, chapterListSelector, charset, chapterParse, }) {
    const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
    const additionalMetadate = {};
    if (coverUrl) {
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
    }
    const chapters = [];
    const dl = document.querySelector(chapterListSelector);
    if (dl?.childElementCount) {
        const dlc = Array.from(dl.children);
        if (dlc[0].nodeName === "DT" &&
            (dlc[0].innerText.includes("最新章节") ||
                dlc[0].innerText.includes("最新的八个章节"))) {
            for (let i = 0; i < dl?.childElementCount; i++) {
                if (i !== 0 && dlc[i].nodeName === "DT") {
                    delete dlc[0];
                    break;
                }
                delete dlc[i];
            }
        }
        const chapterList = dlc.filter((obj) => obj !== undefined);
        let chapterNumber = 0;
        let sectionNumber = 0;
        let sectionName = null;
        let sectionChapterNumber = 0;
        for (let i = 0; i < chapterList.length; i++) {
            const node = chapterList[i];
            if (node.nodeName === "DT") {
                sectionNumber++;
                sectionChapterNumber = 0;
                sectionName = node.innerText.replace(`《${bookname}》`, "").trim();
            }
            else if (node.nodeName === "DD") {
                if (node.childElementCount === 0) {
                    continue;
                }
                chapterNumber++;
                sectionChapterNumber++;
                const a = node.firstElementChild;
                const chapterName = a.innerText;
                const chapterUrl = a.href;
                const isVIP = false;
                const isPaid = false;
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, chapterParse, charset, { bookname: bookname });
                chapters.push(chapter);
            }
        }
    }
    const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
    return book;
}
exports.bookParseTemp = bookParseTemp;
async function chapterParseTemp({ dom, chapterUrl, chapterName, contenSelector, contentPatch, charset, }) {
    let content = dom.querySelector(contenSelector);
    if (content) {
        content = contentPatch(content);
        let { dom, text, images } = lib_1.cleanDOM(content, "TM");
        return {
            chapterName: chapterName,
            contentRaw: content,
            contentText: text,
            contentHTML: dom,
            contentImages: images,
            additionalMetadate: null,
        };
    }
    else {
        return {
            chapterName: chapterName,
            contentRaw: null,
            contentText: null,
            contentHTML: null,
            contentImages: null,
            additionalMetadate: null,
        };
    }
}
function mkBiqugeClass(introDomPatch, contentPatch) {
    return class {
        constructor() {
            this.imageMode = "TM";
            this.charset = document.charset;
        }
        async bookParse() {
            const self = this;
            return bookParseTemp({
                bookUrl: document.location.href,
                bookname: (document.querySelector("#info > h1:nth-child(1)")).innerText.trim(),
                author: (document.querySelector("#info > p:nth-child(2)")).innerText
                    .replace(/作(\s+)?者[：:]/, "")
                    .trim(),
                introDom: document.querySelector("#intro"),
                introDomPatch: introDomPatch,
                coverUrl: document.querySelector("#fmimg > img")
                    .src,
                chapterListSelector: "#list>dl",
                charset: document.charset,
                chapterParse: self.chapterParse,
            });
        }
        async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
            const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
            return chapterParseTemp({
                dom,
                chapterUrl,
                chapterName: (dom.querySelector(".bookname > h1:nth-child(1)")).innerText.trim(),
                contenSelector: "#content",
                contentPatch: contentPatch,
                charset,
            });
        }
    };
}
exports.common = mkBiqugeClass((introDom) => introDom, (content) => content);
exports.dingdiann = mkBiqugeClass((introDom) => introDom, (content) => {
    const ad = '<div align="center"><a href="javascript:postError();" style="text-align:center;color:red;">章节错误,点此举报(免注册)</a>,举报后维护人员会在两分钟内校正章节内容,请耐心等待,并刷新页面。</div>';
    content.innerHTML = content.innerHTML
        .replace(ad, "")
        .replace(/http:\/\/www.shuquge.com\/txt\/\d+\/\d+\.html/, "");
    return content;
});
exports.gebiqu = mkBiqugeClass((introDom) => {
    introDom.innerHTML = introDom.innerHTML.replace(/如果您喜欢.+，别忘记分享给朋友/g, "");
    lib_1.rm('a[href^="http://down.gebiqu.com"]', false, introDom);
    return introDom;
}, (content) => {
    content.innerHTML = content.innerHTML.replace(/"www.gebiqu.com"/g, "");
    return content;
});
exports.luoqiuzw = mkBiqugeClass((introDom) => introDom, (content) => {
    const ad = content.firstElementChild;
    if (ad.innerText.includes("天才一秒记住本站地址：")) {
        ad.remove();
    }
    const ads = ["记住网址m.luoqｉｕｘｚｗ．ｃｏｍ"];
    ads.forEach((adt) => (content.innerHTML = content.innerHTML.replace(adt, "")));
    return content;
});
class shuquge {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const self = this;
        return bookParseTemp({
            bookUrl: document.location.href,
            bookname: (document.querySelector(".info > h2")).innerText.trim(),
            author: (document.querySelector(".small > span:nth-child(1)")).innerText
                .replace(/作(\s+)?者[：:]/, "")
                .trim(),
            introDom: document.querySelector(".intro"),
            introDomPatch: (introDom) => {
                introDom.innerHTML = introDom.innerHTML.replace(/推荐地址：http:\/\/www.shuquge.com\/txt\/\d+\/index\.html/g, "");
                return introDom;
            },
            coverUrl: (document.querySelector(".info > .cover > img")).src,
            chapterListSelector: ".listmain>dl",
            charset: "UTF-8",
            chapterParse: self.chapterParse,
        });
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        return chapterParseTemp({
            dom,
            chapterUrl,
            chapterName: (dom.querySelector(".content > h1:nth-child(1)")).innerText.trim(),
            contenSelector: "#content",
            contentPatch: (content) => {
                content.innerHTML = content.innerHTML
                    .replace("请记住本书首发域名：www.shuquge.com。书趣阁_笔趣阁手机版阅读网址：m.shuquge.com", "")
                    .replace(/http:\/\/www.shuquge.com\/txt\/\d+\/\d+\.html/, "");
                return content;
            },
            charset,
        });
    }
}
exports.shuquge = shuquge;
class xbiquge {
    constructor() {
        this.imageMode = "TM";
        this.charset = "GBK";
    }
    async bookParse() {
        const self = this;
        return bookParseTemp({
            bookUrl: document.location.href,
            bookname: (document.querySelector("#info > h1:nth-child(1)")).innerText.trim(),
            author: (document.querySelector("#info > p:nth-child(2)")).innerText
                .replace(/作(\s+)?者[：:]/, "")
                .trim(),
            introDom: document.querySelector("#intro"),
            introDomPatch: (introDom) => introDom,
            coverUrl: document.querySelector("#fmimg > img")?.src,
            chapterListSelector: "#list>dl",
            charset: "GBK",
            chapterParse: self.chapterParse,
        });
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        return chapterParseTemp({
            dom,
            chapterUrl,
            chapterName: (dom.querySelector(".bookname > h1:nth-child(1)")).innerText.trim(),
            contenSelector: "#content",
            contentPatch: (content) => {
                content.innerHTML = content.innerHTML.replace(`笔趣阁 www.xbiquge.so，最快更新${options.bookname} ！`, "");
                return content;
            },
            charset,
        });
    }
}
exports.xbiquge = xbiquge;


/***/ }),

/***/ "./src/rules/ciweimao.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ciweimao = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class ciweimao {
    constructor() {
        this.imageMode = "TM";
        this.charset = "UTF-8";
        this.concurrencyLimit = 1;
        this.maxRunLimit = 1;
    }
    async bookParse() {
        const bookid = unsafeWindow.HB.book.book_id;
        const bookUrl = `https://www.ciweimao.com/book/${bookid}`;
        const bookname = (document.querySelector(".book-catalog .hd h3")).innerText.trim();
        const author = (document.querySelector(".book-catalog .hd > p > a")).innerText.trim();
        const dom = await lib_1.getHtmlDOM(bookUrl, undefined);
        const introDom = dom.querySelector(".book-intro-cnt .book-desc");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = dom.querySelector(".cover > img").src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        additionalMetadate.tags = Array.from(dom.querySelectorAll(".label-box > .label")).map((span) => span.innerText.trim());
        const chapters = [];
        const sections = document.querySelectorAll(".book-chapter > .book-chapter-box");
        let chapterNumber = 0;
        for (let i = 0; i < sections.length; i++) {
            const s = sections[i];
            const sectionNumber = i + 1;
            const sectionName = s.querySelector(".sub-tit").innerText;
            let sectionChapterNumber = 0;
            const cs = s.querySelectorAll(".book-chapter-list > li > a");
            for (let j = 0; j < cs.length; j++) {
                const c = cs[j];
                chapterNumber++;
                sectionChapterNumber++;
                const chapterName = c.innerText.trim();
                const chapterUrl = c.href;
                let isVIP = false;
                let isPaid = false;
                if (c.childElementCount) {
                    isVIP = true;
                    if (c.firstElementChild?.className === "icon-unlock") {
                        isPaid = true;
                    }
                }
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                const isLogin = document.querySelector(".login-info.ly-fr")?.childElementCount === 1
                    ? true
                    : false;
                if (isVIP && !(isLogin && isPaid)) {
                    chapter.status = main_1.Status.aborted;
                }
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        function decrypt(item) {
            let message = item.content;
            let keys = item.keys;
            let len = item.keys.length;
            let accessKey = item.accessKey;
            let accessKeyList = accessKey.split("");
            let charsNotLatinNum = accessKeyList.length;
            let output = new Array();
            output.push(keys[accessKeyList[charsNotLatinNum - 1].charCodeAt(0) % len]);
            output.push(keys[accessKeyList[0].charCodeAt(0) % len]);
            for (let i = 0; i < output.length; i++) {
                message = atob(message);
                let data = output[i];
                let iv = btoa(message.substr(0, 16));
                let keys255 = btoa(message.substr(16));
                let pass = CryptoJS.format.OpenSSL.parse(keys255);
                message = CryptoJS.AES.decrypt(pass, CryptoJS.enc.Base64.parse(data), {
                    iv: CryptoJS.enc.Base64.parse(iv),
                    format: CryptoJS.format.OpenSSL,
                });
                if (i < output.length - 1) {
                    message = message.toString(CryptoJS.enc.Base64);
                    message = atob(message);
                }
            }
            return message.toString(CryptoJS.enc.Utf8);
        }
        async function getChapterAuthorSay() {
            const doc = await lib_1.getHtmlDOM(chapterUrl, undefined);
            const _chapter_author_says = doc.querySelectorAll("#J_BookCnt .chapter.author_say");
            let div_chapter_author_say;
            if (_chapter_author_says.length !== 0) {
                let hr = document.createElement("hr");
                div_chapter_author_say = document.createElement("div");
                div_chapter_author_say.appendChild(hr);
                for (let _chapter_author_say of Array.from(_chapter_author_says)) {
                    lib_1.rm("i", true, _chapter_author_say);
                    div_chapter_author_say.appendChild(_chapter_author_say);
                }
            }
            return div_chapter_author_say;
        }
        const chapter_id = chapterUrl.split("/").slice(-1)[0];
        async function publicChapter() {
            async function chapterDecrypt(chapter_id, refererUrl) {
                const rootPath = "https://www.ciweimao.com/";
                const access_key_url = rootPath + "chapter/ajax_get_session_code";
                const chapter_content_url = rootPath + "chapter/get_book_chapter_detail_info";
                log_1.log.debug(`[Chapter]请求 ${access_key_url} Referer ${refererUrl}`);
                const access_key_obj = await lib_1.gfetch(access_key_url, {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/javascript, */*; q=0.01",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        Referer: refererUrl,
                        Origin: "https://www.ciweimao.com",
                        "X-Requested-With": "XMLHttpRequest",
                    },
                    data: `chapter_id=${chapter_id}`,
                    responseType: "json",
                }).then((response) => response.response);
                const chapter_access_key = access_key_obj
                    .chapter_access_key;
                log_1.log.debug(`[Chapter]请求 ${chapter_content_url} Referer ${refererUrl}`);
                const chapter_content_obj = await lib_1.gfetch(chapter_content_url, {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/javascript, */*; q=0.01",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        Referer: refererUrl,
                        Origin: "https://www.ciweimao.com",
                        "X-Requested-With": "XMLHttpRequest",
                    },
                    data: `chapter_id=${chapter_id}&chapter_access_key=${chapter_access_key}`,
                    responseType: "json",
                }).then((response) => response.response);
                if (chapter_content_obj.code !== 100000) {
                    log_1.log.error(chapter_content_obj);
                    throw new Error(`下载 ${refererUrl} 失败`);
                }
                return decrypt({
                    content: chapter_content_obj.chapter_content,
                    keys: chapter_content_obj.encryt_keys,
                    accessKey: chapter_access_key,
                });
            }
            const div_chapter_author_say = await getChapterAuthorSay();
            let content = document.createElement("div");
            let decryptDate = await chapterDecrypt(chapter_id, chapterUrl);
            content.innerHTML = decryptDate;
            lib_1.rm(".chapter span", true, content);
            if (div_chapter_author_say) {
                content.appendChild(div_chapter_author_say);
            }
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        async function vipChapter() {
            const isLogin = document.querySelector(".login-info.ly-fr")?.childElementCount === 1
                ? true
                : false;
            if (isLogin && isPaid) {
                async function vipChapterDecrypt(chapter_id, refererUrl) {
                    const HB = unsafeWindow.HB;
                    const parentWidth = 871;
                    const setFontSize = "14";
                    const image_session_code_url = HB.config.rootPath + "chapter/ajax_get_image_session_code";
                    log_1.log.debug(`[Chapter]请求 ${image_session_code_url} Referer ${refererUrl}`);
                    const image_session_code_object = await lib_1.gfetch(image_session_code_url, {
                        method: "POST",
                        headers: {
                            Accept: "application/json, text/javascript, */*; q=0.01",
                            Referer: refererUrl,
                            Origin: "https://www.ciweimao.com",
                            "X-Requested-With": "XMLHttpRequest",
                        },
                        responseType: "json",
                    }).then((response) => response.response);
                    if (image_session_code_object.code !==
                        100000) {
                        log_1.log.error(image_session_code_object);
                        throw new Error(`下载 ${refererUrl} 失败`);
                    }
                    const imageCode = decrypt({
                        content: image_session_code_object
                            .image_code,
                        keys: image_session_code_object
                            .encryt_keys,
                        accessKey: image_session_code_object
                            .access_key,
                    });
                    const vipCHapterImageUrl = HB.config.rootPath +
                        "chapter/book_chapter_image?chapter_id=" +
                        chapter_id +
                        "&area_width=" +
                        parentWidth +
                        "&font=undefined" +
                        "&font_size=" +
                        setFontSize +
                        "&image_code=" +
                        imageCode +
                        "&bg_color_name=white" +
                        "&text_color_name=white";
                    return vipCHapterImageUrl;
                }
                const div_chapter_author_say = await getChapterAuthorSay();
                const vipCHapterImageUrl = await vipChapterDecrypt(chapter_id, chapterUrl);
                log_1.log.debug(`[Chapter]请求 ${vipCHapterImageUrl} Referer ${chapterUrl}`);
                const vipCHapterImageBlob = await lib_1.gfetch(vipCHapterImageUrl, {
                    method: "GET",
                    headers: {
                        Referer: chapterUrl,
                        Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
                    },
                    responseType: "blob",
                }).then((response) => response.response);
                const vipCHapterName = `vipCHapter${chapter_id}.png`;
                const vipCHapterImage = new main_1.attachmentClass(vipCHapterImageUrl, vipCHapterName, "TM");
                if (vipCHapterImageBlob) {
                    vipCHapterImage.imageBlob = vipCHapterImageBlob;
                    vipCHapterImage.status = main_1.Status.finished;
                }
                const contentImages = [vipCHapterImage];
                let ddom, dtext, dimages;
                if (div_chapter_author_say) {
                    let { dom, text, images } = lib_1.cleanDOM(div_chapter_author_say, "TM");
                    [ddom, dtext, dimages] = [dom, text, images];
                }
                const img = document.createElement("img");
                img.src = vipCHapterName;
                img.alt = vipCHapterImageUrl;
                const contentHTML = document.createElement("div");
                contentHTML.appendChild(img);
                if (ddom) {
                    contentHTML.appendChild(ddom);
                }
                let contentText = `VIP章节，请打开HTML文件查看。\n![${vipCHapterImageUrl}](${vipCHapterName})`;
                if (dtext) {
                    contentText = contentText + "\n\n" + dtext;
                }
                return {
                    chapterName: chapterName,
                    contentRaw: contentHTML,
                    contentText: contentText,
                    contentHTML: contentHTML,
                    contentImages: contentImages,
                    additionalMetadate: null,
                };
            }
            else {
                return {
                    chapterName: chapterName,
                    contentRaw: null,
                    contentText: null,
                    contentHTML: null,
                    contentImages: null,
                    additionalMetadate: null,
                };
            }
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.ciweimao = ciweimao;


/***/ }),

/***/ "./src/rules/dierbanzhu.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dierbanzhu = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class dierbanzhu {
    constructor() {
        this.imageMode = "TM";
        this.charset = "GBK";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector("#info > h1:nth-child(1)")).innerText.trim();
        const author = (document.querySelector("#info > p:nth-child(2)")).innerText
            .replace(/作(\s+)?者[：:]/, "")
            .trim();
        const introDom = document.querySelector("#intro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = document.querySelector("#fmimg > img")
            .src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const dl = document.querySelector("#list>dl");
        if (dl?.childElementCount) {
            const dlc = Array.from(dl.children);
            const chapterList = dlc.filter((obj) => obj !== undefined);
            let chapterNumber = 0;
            let sectionNumber = 0;
            let sectionName = null;
            let sectionChapterNumber = 0;
            for (let i = 0; i < chapterList.length; i++) {
                const node = chapterList[i];
                if (node.nodeName === "DT" && !node.innerText.includes("最新章节")) {
                    sectionNumber++;
                    sectionChapterNumber = 0;
                    sectionName = node.innerText.replace(`《${bookname}》`, "").trim();
                }
                else if (node.nodeName === "DD") {
                    chapterNumber++;
                    sectionChapterNumber++;
                    const a = node.firstElementChild;
                    const chapterName = a.innerText;
                    const chapterUrl = a.href;
                    const isVIP = false;
                    const isPaid = false;
                    const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                    chapters.push(chapter);
                }
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = (dom.querySelector(".bookname > h1:nth-child(1)")).innerText.trim();
        const content = dom.querySelector("#content");
        if (content) {
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.dierbanzhu = dierbanzhu;


/***/ }),

/***/ "./src/rules/dmzj.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dmzj = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class dmzj {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector(".comic_deCon > h1 > a")).innerText.trim();
        const author = (document.querySelector(".comic_deCon_liO > li:nth-child(1)")).innerText
            .replace("作者：", "")
            .trim();
        const introDom = document.querySelector(".comic_deCon_d");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = (document.querySelector(".comic_i_img > a > img")).src;
        if (coverUrl) {
            additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
            additionalMetadate.cover.init();
        }
        const chapters = [];
        let cos = document.querySelectorAll("div.zj_list_con:nth-child(4) > ul.list_con_li > li");
        let chapterNumber = 0;
        for (const co of Array.from(cos)) {
            chapterNumber++;
            const a = co.firstElementChild;
            const span = a.lastElementChild;
            const chapterName = span.innerText;
            const chapterUrl = a.href;
            const isVIP = false;
            const isPaid = false;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, null, null, null, this.chapterParse, "UTF-8", {});
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        function getpicUrlList(doc) {
            const img_prefix = "https://images.dmzj1.com/";
            let pages = lib_1.sandboxed(doc.querySelector("head > script").innerText +
                ";return pages;");
            pages = pages.replace(/\n/g, "");
            pages = pages.replace(/\r/g, "|");
            const info = lib_1.sandboxed("return (" + pages + ")");
            if (info) {
                const picUrlList = info["page_url"]
                    .split("|")
                    .map((pic) => img_prefix + pic);
                return picUrlList;
            }
        }
        log_1.log.debug(`[Chapter]请求 ${chapterUrl}`);
        const doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        const picUrlList = getpicUrlList(doc);
        if (picUrlList) {
            const content = document.createElement("div");
            for (const picUrl of picUrlList) {
                const pElem = document.createElement("p");
                const imgElem = document.createElement("img");
                imgElem.src = picUrl;
                pElem.appendChild(imgElem);
                content.appendChild(pElem);
            }
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        return {
            chapterName: chapterName,
            contentRaw: null,
            contentText: null,
            contentHTML: null,
            contentImages: null,
            additionalMetadate: null,
        };
    }
}
exports.dmzj = dmzj;


/***/ }),

/***/ "./src/rules/fushuwang.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fushuwang = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
class fushuwang {
    constructor() {
        this.imageMode = "TM";
        this.charset = "GBK";
        this.maxRunLimit = 5;
        this.saveOptions = {
            genChapterText: (chapterName, contentText) => {
                return `${contentText}\n`;
            },
            genChapterHtmlFile: (chapterName, DOM, chapterUrl) => {
                let htmlFile = new DOMParser().parseFromString(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator" content="https://github.com/yingziwu/novel-downloader"><meta name="source" content="${chapterUrl}"><link href="style.css" type="text/css" rel="stylesheet"/><title>${chapterName}</title></head><body><div class="main"></div></body></html>`, "text/html");
                htmlFile.querySelector(".main")?.appendChild(DOM);
                return new Blob([
                    htmlFile.documentElement.outerHTML.replaceAll("data-src-address", "src"),
                ], {
                    type: "text/html; charset=UTF-8",
                });
            },
        };
    }
    async bookParse() {
        const bookUrl = (document.location.origin + document.location.pathname).replace(/(_\d+)\.html$/, ".html");
        const [bookname, author] = (document.querySelector(".title_info > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > h1:nth-child(1)")).innerText.split("——");
        const [introduction, introductionHTML] = [null, null];
        const additionalMetadate = {};
        const options = document.querySelectorAll("p.pageLink > select > option");
        const urls = Array.from(options).map((option) => document.location.origin + option.getAttribute("value"));
        const chapters = [];
        for (let i = 0; i < urls.length; i++) {
            const chapterUrl = urls[i];
            const chapterName = `page${i}`;
            const isVIP = false;
            const isPaid = false;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, i + 1, chapterName, isVIP, isPaid, null, null, null, this.chapterParse, this.charset, {});
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        book.saveOptions = this.saveOptions;
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        const content = doc.querySelector("#text");
        if (content) {
            lib_1.rm("span", true, content);
            lib_1.rm("p.pageLink", true, content);
            lib_1.rm("script", true, content);
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.fushuwang = fushuwang;


/***/ }),

/***/ "./src/rules/gongzicp.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gongzicp = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const rules_1 = __webpack_require__("./src/rules.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class gongzicp {
    constructor() {
        this.imageMode = "TM";
        this.concurrencyLimit = 1;
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookId = (document.querySelector("span.id")).innerText.replace("CP", "");
        if (!bookId) {
            throw new Error("获取bookID出错");
        }
        const novelGetInfoBaseUrl = "https://www.gongzicp.com/webapi/novel/novelGetInfo";
        const novelGetInfoUrl = new URL(novelGetInfoBaseUrl);
        novelGetInfoUrl.searchParams.set("id", bookId);
        log_1.log.debug(`请求地址: ${novelGetInfoUrl.toString()}`);
        const novelInfo = await fetch(novelGetInfoUrl.toString(), {
            credentials: "include",
            headers: {
                Accept: "application/json, text/plain, */*",
                Client: "pc",
                Lang: "cn",
                "Content-Type": "application/json;charset=utf-8",
            },
            referrer: bookUrl,
            method: "GET",
            mode: "cors",
        }).then((response) => response.json());
        if (novelInfo.code !== 200) {
            throw new Error(`数据接口请求失败，URL:${novelGetInfoUrl.toString()}`);
        }
        const data = novelInfo.data;
        const bookname = data.novelInfo.novel_name;
        const author = data.novelInfo.author_nickname;
        const introDom = document.createElement("div");
        introDom.innerHTML = data.novelInfo.novel_info;
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = data.novelInfo.novel_cover;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        additionalMetadate.tags = data.novelInfo.tag_list;
        async function isLogin() {
            const getUserInfoUrl = "https://www.gongzicp.com/user/getUserInfo";
            log_1.log.debug(`正在请求: ${getUserInfoUrl}`);
            const userInfo = await fetch(getUserInfoUrl, {
                headers: {
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                },
                method: "GET",
                mode: "cors",
                credentials: "include",
            }).then((response) => response.json());
            if (userInfo.code === 200) {
                return true;
            }
            return false;
        }
        const logined = await isLogin();
        const chapters = [];
        const _chapterList = data.chapterList;
        let sectionNumber = 0;
        let sectionName = null;
        let sectionChapterNumber = 0;
        for (const chapterObj of _chapterList) {
            if (chapterObj.type === "volume") {
                sectionNumber = chapterObj.vid;
                sectionName = chapterObj.name;
                sectionChapterNumber = 0;
            }
            else if (chapterObj.type === "item") {
                const chapterUrl = [
                    document.location.origin,
                    "v4",
                    `read-${chapterObj.id}.html`,
                ].join("/");
                const chapterNumber = Number(chapterObj.order);
                const chapterName = chapterObj.name;
                const isVIP = chapterObj.pay;
                const isPaid = chapterObj.is_sub;
                sectionChapterNumber++;
                const chapterOption = {
                    novel_id: data.novelInfo.novel_id,
                    chapter_id: chapterObj.id,
                };
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, "UTF-8", chapterOption);
                if (isVIP && !(logined && chapter.isPaid)) {
                    chapter.status = main_1.Status.aborted;
                }
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        function cpDecrypt(content_orig) {
            const setIv = (key) => {
                key = key + parseInt("165455", 14).toString(32);
                const iv = CryptoJS.enc.Utf8.parse("$h$b3!" + key);
                return iv;
            };
            const setKey = (value) => {
                value = value + parseInt("4d5a6c8", 14).toString(36);
                const key = CryptoJS.enc.Utf8.parse(value + "A");
                return key;
            };
            const setcfg = (iv) => {
                return {
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                    iv: iv,
                };
            };
            const encrypt = (value, key, cfg) => {
                if ("string" != typeof value) {
                    value = JSON.stringify(value);
                }
                const xml = CryptoJS.enc.Utf8.parse(value);
                return CryptoJS.AES.encrypt(xml, key, cfg).toString();
            };
            const decrypt = (secrets, key, cfg) => {
                const value = CryptoJS.AES.decrypt(secrets, key, cfg);
                return CryptoJS.enc.Utf8.stringify(value).toString();
            };
            let _CP_NUXT;
            let LCngpxaF_substr;
            if (_CP_NUXT) {
                LCngpxaF_substr = _CP_NUXT.state.CpST.LCngpxaF.substr(2, 10);
            }
            else {
                LCngpxaF_substr = (unsafeWindow).__NUXT__.state.CpST.LCngpxaF.substr(1, 10);
            }
            const iv = setIv("iGzsYn");
            const key = setKey(LCngpxaF_substr);
            const cfg = setcfg(iv);
            const content = decrypt(content_orig, key, cfg);
            return content;
        }
        function randomWalker() {
            log_1.log.info("[chapter]随机翻页中……");
            if (document.location.pathname.includes("novel")) {
                (document.querySelector(".chapter-list > .chapter > a")).click();
            }
            if (document.location.pathname.includes("read")) {
                const rightMenu = document.querySelector(".right-menu");
                if (rightMenu?.childElementCount === 6) {
                    (document.querySelector(".right-menu > div:nth-child(3) > a:nth-child(1)")).click();
                }
                else if (rightMenu?.childElementCount === 7) {
                    if (document.querySelector("div.content.unpaid")) {
                        (document.querySelector(".right-menu > div:nth-child(3) > a:nth-child(1)")).click();
                    }
                    else if (Math.random() < 0.3) {
                        (document.querySelector(".right-menu > div:nth-child(3) > a:nth-child(1)")).click();
                    }
                    else {
                        (document.querySelector(".right-menu > div:nth-child(4) > a:nth-child(1)")).click();
                    }
                }
            }
        }
        async function getChapter() {
            const nid = options.novel_id;
            const cid = options.chapter_id;
            const chapterGetInfoBaseUrl = "https://www.gongzicp.com/webapi/novel/chapterGetInfo";
            const chapterGetInfoUrl = new URL(chapterGetInfoBaseUrl);
            chapterGetInfoUrl.searchParams.set("cid", cid.toString());
            chapterGetInfoUrl.searchParams.set("nid", nid.toString());
            let retryTime = 0;
            async function getChapterInfo(url) {
                log_1.log.debug(`请求地址: ${url}, Referrer: ${chapterUrl}，retryTime：${retryTime}`);
                const result = await fetch(url, {
                    credentials: "include",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        Client: "pc",
                        Lang: "cn",
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    referrer: chapterUrl,
                    method: "GET",
                    mode: "cors",
                }).then((resp) => resp.json());
                if (result.data.chapterInfo.content.length !== 0 &&
                    result.data.chapterInfo.content.length < 30) {
                    retryTime++;
                    if (rules_1.retryLimit > rules_1.retryLimit) {
                        log_1.log.error(`请求 ${url} 失败`);
                        throw new Error(`请求 ${url} 失败`);
                    }
                    log_1.log.warn("[chapter]疑似被阻断，进行随机翻页……");
                    randomWalker();
                    await lib_1.sleep(3000);
                    randomWalker();
                    await lib_1.sleep(7000);
                    randomWalker();
                    await lib_1.sleep(3000);
                    return getChapterInfo(url);
                }
                else {
                    retryTime = 0;
                    return result;
                }
            }
            const result = await getChapterInfo(chapterGetInfoUrl.toString());
            if (result.code === 200) {
                const chapterInfo = result.data.chapterInfo;
                if (chapterInfo.chapterPrice !== 0 &&
                    chapterInfo.content.length === 0) {
                    return {
                        chapterName: chapterName,
                        contentRaw: null,
                        contentText: null,
                        contentHTML: null,
                        contentImages: null,
                        additionalMetadate: null,
                    };
                }
                else if (chapterInfo.chapterPrice === 0 ||
                    (chapterInfo.chapterPrice !== 0 && chapterInfo.content.length !== 0)) {
                    const content = cpDecrypt(chapterInfo.content);
                    const contentRaw = document.createElement("pre");
                    contentRaw.innerHTML = content;
                    let contentText = content
                        .split("\n")
                        .map((p) => p.trim())
                        .join("\n\n");
                    let contentHTML;
                    const _contentHTML = document.createElement("div");
                    _contentHTML.innerHTML = content
                        .split("\n")
                        .map((p) => p.trim())
                        .map((p) => {
                        if (p.length === 0) {
                            return "<p><br/></p>";
                        }
                        else {
                            return `<p>${p}</p>`;
                        }
                    })
                        .join("\n");
                    if (chapterInfo.postscript.length === 0) {
                        contentHTML = _contentHTML;
                    }
                    else {
                        contentHTML = document.createElement("div");
                        contentHTML.className = "main";
                        const hr = document.createElement("hr");
                        const authorSayDom = document.createElement("div");
                        authorSayDom.innerHTML = chapterInfo.postscript
                            .split("\n")
                            .map((p) => {
                            if (p.length === 0) {
                                return "<p><br/></p>";
                            }
                            else {
                                return `<p>${p}</p>`;
                            }
                        })
                            .join("\n");
                        contentHTML.appendChild(_contentHTML);
                        contentHTML.appendChild(hr);
                        contentHTML.appendChild(authorSayDom);
                        contentRaw.innerHTML = [
                            contentRaw.innerHTML,
                            "-".repeat(20),
                            chapterInfo.postscript,
                        ].join("\n\n");
                        contentText = [
                            contentText,
                            "-".repeat(20),
                            chapterInfo.postscript,
                        ].join("\n\n");
                    }
                    return {
                        chapterName: chapterName,
                        contentRaw: contentRaw,
                        contentText: contentText,
                        contentHTML: contentHTML,
                        contentImages: null,
                        additionalMetadate: null,
                    };
                }
            }
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        async function antiAntiCrawler() {
            if (Math.random() < 0.2) {
                randomWalker();
            }
            await lib_1.sleep(3000 + Math.round(Math.random() * 4000));
        }
        async function publicChapter() {
            await antiAntiCrawler();
            return getChapter();
        }
        async function vipChapter() {
            await antiAntiCrawler();
            return getChapter();
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.gongzicp = gongzicp;


/***/ }),

/***/ "./src/rules/hetushu.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hetushu = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class hetushu {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector(".book_info > h2")).innerText.trim();
        const author = (document.querySelector(".book_info > div:nth-child(3) > a:nth-child(1)")).innerText.trim();
        const introDom = document.querySelector(".intro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = (document.querySelector(".book_info > img")).src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const chapterList = (document.querySelector("#dir")?.childNodes);
        if (chapterList && chapterList.length !== 0) {
            let chapterNumber = 0;
            let sectionNumber = 0;
            let sectionName = null;
            let sectionChapterNumber = 0;
            for (let i = 0; i < chapterList.length; i++) {
                const node = chapterList[i];
                if (node.nodeName === "DT") {
                    sectionNumber++;
                    sectionChapterNumber = 0;
                    sectionName = node.innerText.trim();
                }
                else if (node.nodeName === "DD") {
                    chapterNumber++;
                    sectionChapterNumber++;
                    const a = node.firstElementChild;
                    const chapterName = a.innerText;
                    const chapterUrl = a.href;
                    const isVIP = false;
                    const isPaid = false;
                    const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, "UTF-8", {});
                    chapters.push(chapter);
                }
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        async function sorfPage() {
            let path, bid, sid, position;
            if (/\/(book[0-9]?)\/([0-9]+)\/([0-9]+)\.html(\?position=([0-9]+))?$/.test(chapterUrl)) {
                path = RegExp.$1;
                bid = RegExp.$2;
                sid = RegExp.$3;
                position = RegExp.$5;
            }
            else {
                return false;
            }
            const url = [
                document.location.origin,
                path,
                bid,
                "r" + sid + ".json",
            ].join("/");
            log_1.log.debug(`[Chapter]请求 ${url} Referer ${chapterUrl}`);
            const token = await fetch(url, {
                headers: {
                    accept: "*/*",
                    "cache-control": "no-cache",
                    "content-type": "application/x-www-form-urlencoded",
                    pragma: "no-cache",
                    "x-requested-with": "XMLHttpRequest",
                },
                referrer: chapterUrl,
                method: "GET",
                mode: "cors",
                credentials: "include",
            }).then((response) => response.headers.get("token"));
            if (token) {
                const token_dict = atob(token)
                    .split(/[A-Z]+%/)
                    .map((v) => Number(v));
                const this_body = dom.querySelector("#content");
                let b = 0, star = 0;
                for (let i = 0; i < this_body.childNodes.length; i++) {
                    if (this_body.childNodes[i].nodeName == "H2") {
                        star = i + 1;
                    }
                    if (this_body.childNodes[i].nodeName == "DIV" &&
                        this_body.childNodes[i].className != "chapter") {
                        break;
                    }
                }
                const this_childNode = [];
                for (let i = 0; i < token_dict.length; i++) {
                    if (token_dict[i] < 5) {
                        this_childNode[token_dict[i]] = this_body.childNodes[i + star];
                        b++;
                    }
                    else {
                        this_childNode[token_dict[i] - b] = this_body.childNodes[i + star];
                    }
                }
                for (let i = 0; i < this_childNode.length; i++) {
                    if (!this_childNode[i]) {
                        continue;
                    }
                    this_body.appendChild(this_childNode[i]);
                }
            }
        }
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = (dom.querySelector("#content .h2")).innerText.trim();
        await sorfPage();
        const content = dom.querySelector("#content");
        if (content) {
            const tagRemoved = "h2, acronym, bdo, big, cite, code, dfn, kbd, q, s, samp, strike, tt, u, var";
            tagRemoved.split(", ").forEach((s) => {
                lib_1.rm(s, true, content);
            });
            Array.from(content.querySelectorAll("div")).map((oldNode) => {
                const newNode = document.createElement("p");
                newNode.innerHTML = oldNode.innerHTML;
                oldNode.parentNode?.replaceChild(newNode, oldNode);
            });
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.hetushu = hetushu;


/***/ }),

/***/ "./src/rules/idejian.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.idejian = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class idejian {
    constructor() {
        this.imageMode = "TM";
        this.maxRunLimit = 5;
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const _bookID = bookUrl.match(/\/(\d+)\/$/);
        const bookID = _bookID && _bookID[1];
        const bookname = (document.querySelector(".detail_bkname > a")).innerText.trim();
        const _author = document.querySelector(".detail_bkauthor")
            .childNodes[0];
        let author = "佚名";
        if (_author && _author.textContent) {
            author = _author.textContent.trim();
        }
        const introDom = document.querySelector(".brief_con");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = (document.querySelector(".book_img > img")).src;
        if (coverUrl) {
            additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
            additionalMetadate.cover.init();
        }
        additionalMetadate.tags = Array.from(document.querySelectorAll("div.detail_bkgrade > span")).map((span) => span.innerText.trim());
        const chapters = [];
        const cos = document.querySelectorAll(".catelog_list > li > a");
        let chapterNumber = 0;
        for (const aElem of Array.from(cos)) {
            chapterNumber++;
            const chapterName = aElem.innerText;
            const chapterUrl = aElem.href;
            const isVIP = false;
            const isPaid = false;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, null, null, null, this.chapterParse, "UTF-8", { bookID: bookID });
            chapters.push(chapter);
        }
        document.cookie = "";
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const _chapterUrl = new URL(chapterUrl);
        _chapterUrl.hostname = "m.idejian.com";
        chapterUrl = _chapterUrl.toString();
        const referBaseUrl = "https://m.idejian.com/catalog";
        const _refer = new URL(referBaseUrl);
        _refer.searchParams.set("bookId", options.bookID);
        const referUrl = _refer.toString();
        const fakeUA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Snapchat/10.77.5.59 (like Safari/604.1)";
        if (document.cookie === "") {
            await lib_1.ggetText(referUrl, charset, { headers: { "User-Agent": fakeUA } });
            await lib_1.ggetText(chapterUrl, charset, {
                headers: { "User-Agent": fakeUA, Referer: referUrl },
            });
        }
        log_1.log.debug(`[Chapter]请求 ${chapterUrl}，Refer：${referUrl}`);
        let doc = await lib_1.ggetHtmlDOM(chapterUrl, charset, {
            headers: { "User-Agent": fakeUA, Referer: referUrl },
        });
        chapterName = (doc.querySelector(".text-title-1")).innerText.trim();
        let content;
        if (doc.querySelectorAll("div.h5_mainbody").length === 1) {
            content = doc.querySelector("div.h5_mainbody");
        }
        else {
            content = doc.querySelectorAll("div.h5_mainbody")[1];
        }
        if (content) {
            lib_1.rm("h1", false, content);
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.idejian = idejian;


/***/ }),

/***/ "./src/rules/jjwxc.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jjwxc = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const rules_1 = __webpack_require__("./src/rules.ts");
const jjwxcFontDecode_1 = __webpack_require__("./src/rules/lib/jjwxcFontDecode.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class jjwxc {
    constructor() {
        this.imageMode = "TM";
        this.concurrencyLimit = 5;
        this.charset = "GB18030";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector('h1[itemprop="name"] > span')).innerText.trim();
        const additionalMetadate = {};
        const author = (document.querySelector("td.sptd h2 a span")).innerText
            .replace(/作\s+者:/, "")
            .trim();
        const introDom = document.querySelector("#novelintro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        if (introCleanimages) {
            additionalMetadate.attachments = [...introCleanimages];
        }
        let coverUrl = (document.querySelector(".noveldefaultimage")).src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        let tags = (document.querySelector("table > tbody > tr > td.readtd > div.righttd > ul.rightul > li:nth-child(1) > span:nth-child(2)")).innerText.split("-");
        tags = tags.concat(Array.from(document.querySelectorAll("div.smallreadbody:nth-child(3) > span > a")).map((a) => a.innerText));
        const perspective = (document.querySelector("table > tbody > tr > td.readtd > div.righttd > ul.rightul > li:nth-child(2)")).innerText.replace("\n", "");
        const workStyle = (document.querySelector("table > tbody > tr > td.readtd > div.righttd > ul.rightul > li:nth-child(3)")).innerText.replace("\n", "");
        tags.push(perspective);
        tags.push(workStyle);
        additionalMetadate.tags = tags;
        const chapters = [];
        const trList = document.querySelectorAll("#oneboolt > tbody > tr");
        let chapterNumber = 0;
        let sectionNumber = 0;
        let sectionName = null;
        let sectionChapterNumber = 0;
        for (let i = 0; i < trList.length; i++) {
            const tr = trList[i];
            if (tr.getAttribute("bgcolor")) {
                sectionNumber++;
                sectionChapterNumber = 0;
                sectionName = (tr.querySelector("b.volumnfont"))?.innerText.trim();
            }
            else if (tr.getAttribute("itemprop")) {
                chapterNumber++;
                sectionChapterNumber++;
                const td = tr.querySelector("td:nth-child(2)");
                const a = td?.querySelector("a:nth-child(1)");
                const isLocked = () => {
                    if (td?.innerText.trim() === "[锁]") {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                const isVIP = () => {
                    if (a?.getAttribute("onclick")) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                if (!isLocked()) {
                    if (isVIP()) {
                        const chapterName = a.innerText.trim();
                        const chapterUrl = a.getAttribute("rel");
                        if (chapterUrl) {
                            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP(), null, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                            const isLogin = () => {
                                if (document.getElementById("jj_login")) {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            };
                            if (isVIP() && !isLogin()) {
                                chapter.status = main_1.Status.aborted;
                            }
                            chapters.push(chapter);
                        }
                    }
                    else {
                        const chapterName = a.innerText.trim();
                        const chapterUrl = a.href;
                        const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP(), null, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                        const isLogin = () => {
                            if (document.getElementById("jj_login")) {
                                return false;
                            }
                            else {
                                return true;
                            }
                        };
                        if (isVIP() && !isLogin()) {
                            chapter.status = main_1.Status.aborted;
                        }
                        chapters.push(chapter);
                    }
                }
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        async function publicChapter() {
            const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
            const chapterName = (dom.querySelector("div.noveltext h2")).innerText.trim();
            const content = dom.querySelector("div.noveltext");
            if (content) {
                lib_1.rm("hr", true, content);
                const rawAuthorSayDom = content.querySelector(".readsmall");
                let authorSayDom, authorSayText;
                if (rawAuthorSayDom) {
                    let { dom: adom, text: atext, images: aimages } = lib_1.cleanDOM(rawAuthorSayDom, "TM");
                    [authorSayDom, authorSayText] = [adom, atext];
                }
                lib_1.rm("div", true, content);
                content.innerHTML = content.innerHTML.replaceAll("@无限好文，尽在晋江文学城", "");
                let { dom, text, images } = lib_1.cleanDOM(content, "TM");
                if (rawAuthorSayDom && authorSayDom && authorSayText) {
                    const hr = document.createElement("hr");
                    authorSayDom.className = "authorSay";
                    dom.appendChild(hr);
                    dom.appendChild(authorSayDom);
                    text = text + "\n\n" + "-".repeat(20) + "\n\n" + authorSayText;
                }
                return {
                    chapterName: chapterName,
                    contentRaw: content,
                    contentText: text,
                    contentHTML: dom,
                    contentImages: images,
                    additionalMetadate: null,
                };
            }
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        async function vipChapter() {
            async function getFont() {
                function getFontInfo() {
                    const s = dom.querySelectorAll("body > style")[1];
                    let fontName, fontUrl;
                    if (s.sheet) {
                        const f = s.sheet.cssRules[s.sheet.cssRules.length - 2];
                        const m1 = f.cssText.match(/jjwxcfont_[\d\w]+/);
                        const m2 = f.cssText.match(/{(.*)}/);
                        if (m1 && m2) {
                            fontName = m1[0];
                            const ft = m2[1];
                            for (const k of ft.split(",")) {
                                if (k.includes('format("woff2")')) {
                                    const m3 = k.match(/url\("(.*)"\)\s/);
                                    if (m3) {
                                        fontUrl = document.location.protocol + m3[1];
                                        return [fontName, fontUrl];
                                    }
                                }
                            }
                        }
                    }
                    const _fontName = document.querySelector("div.noveltext")
                        ?.classList[1];
                    if (_fontName) {
                        fontName = _fontName;
                        fontUrl =
                            document.location.protocol +
                                `//static.jjwxc.net/tmp/fonts/${fontName}.woff2?h=my.jjwxc.net`;
                        return [fontName, fontUrl];
                    }
                    return [null, null];
                }
                let retryTime = 0;
                function fetchFont(fontUrl) {
                    log_1.log.debug(`[Chapter]请求 ${fontUrl} Referer ${chapterUrl} 重试次数 ${retryTime}`);
                    return lib_1.gfetch(fontUrl, {
                        headers: {
                            accept: "*/*",
                            Referer: chapterUrl,
                        },
                        responseType: "blob",
                    }).then((response) => {
                        if (response.status >= 200 && response.status <= 299) {
                            return response.response;
                        }
                        else {
                            log_1.log.error(`[Chapter]请求 ${fontUrl} 失败 Referer ${chapterUrl}`);
                            if (retryTime < rules_1.retryLimit) {
                                retryTime++;
                                return fetchFont(fontUrl);
                            }
                            else {
                                return null;
                            }
                        }
                    });
                }
                const [fontName, fontUrl] = getFontInfo();
                if (fontName && fontUrl) {
                    const fontFileName = `${fontName}.woff2`;
                    let fontClassObj;
                    const fontClassObjCache = lib_1.getAttachmentClassCache(fontUrl, fontFileName);
                    if (fontClassObjCache) {
                        fontClassObj = fontClassObjCache;
                    }
                    else {
                        const fontBlob = await fetchFont(fontUrl);
                        fontClassObj = new main_1.attachmentClass(fontUrl, fontFileName, "TM");
                        fontClassObj.imageBlob = fontBlob;
                        fontClassObj.status = main_1.Status.finished;
                        lib_1.putAttachmentClassCache(fontClassObj);
                    }
                    const fontStyleDom = document.createElement("style");
                    fontStyleDom.innerHTML = `.${fontName} {
  font-family: ${fontName}, 'Microsoft YaHei', PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', sans-serif !important;
}
@font-face {
  font-family: ${fontName};
  src: url('${fontFileName}') format('woff2');
}
.hide {
  display: none;
}`;
                    return [fontName, fontClassObj, fontStyleDom];
                }
                return [null, null, null];
            }
            const dom = await lib_1.ggetHtmlDOM(chapterUrl, charset);
            const isPaid = () => {
                if (!dom.querySelector("#buy_content") &&
                    dom.querySelector("div.noveltext")) {
                    return true;
                }
                else {
                    return false;
                }
            };
            if (isPaid()) {
                const chapterName = (dom.querySelector("div.noveltext h2")).innerText.trim();
                const content = dom.querySelector("div.noveltext");
                if (content) {
                    lib_1.rm("hr", true, content);
                    const rawAuthorSayDom = content.querySelector(".readsmall");
                    let authorSayDom, authorSayText;
                    if (rawAuthorSayDom) {
                        let { dom: adom, text: atext, images: aimages } = lib_1.cleanDOM(rawAuthorSayDom, "TM");
                        [authorSayDom, authorSayText] = [adom, atext];
                    }
                    lib_1.rm("div", true, content);
                    content.innerHTML = content.innerHTML.replace("@无限好文，尽在晋江文学城", "");
                    let { dom: rawDom, text: rawText, images } = lib_1.cleanDOM(content, "TM");
                    if (rawAuthorSayDom && authorSayDom && authorSayText) {
                        const hr = document.createElement("hr");
                        authorSayDom.className = "authorSay";
                        rawDom.appendChild(hr);
                        rawDom.appendChild(authorSayDom);
                        rawText =
                            rawText + "\n\n" + "-".repeat(20) + "\n\n" + authorSayText;
                    }
                    let finalDom = rawDom;
                    let finalText = rawText;
                    const [fontName, fontClassObj, fontStyleDom] = await getFont();
                    if (fontName && fontClassObj && fontStyleDom) {
                        finalText = jjwxcFontDecode_1.replaceJjwxcCharacter(fontName, rawText);
                        images.push(fontClassObj);
                        finalDom = document.createElement("div");
                        const replacedDom = document.createElement("div");
                        replacedDom.innerHTML = jjwxcFontDecode_1.replaceJjwxcCharacter(fontName, rawDom.innerHTML);
                        finalDom.appendChild(fontStyleDom);
                        rawDom.className = `${fontName} hide`;
                        finalDom.appendChild(rawDom);
                        finalDom.appendChild(replacedDom);
                    }
                    return {
                        chapterName: chapterName,
                        contentRaw: content,
                        contentText: finalText,
                        contentHTML: finalDom,
                        contentImages: images,
                        additionalMetadate: null,
                    };
                }
            }
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.jjwxc = jjwxc;


/***/ }),

/***/ "./src/rules/lib/common.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.introDomHandle = void 0;
const lib_1 = __webpack_require__("./src/lib.ts");
function introDomHandle(introDom, domPatch = undefined) {
    if (introDom === null) {
        return [null, null, null];
    }
    else {
        if (domPatch) {
            introDom = domPatch(introDom.cloneNode(true));
        }
        let { dom: introCleanDom, text: introCleantext, images: introCleanimages, } = lib_1.cleanDOM(introDom, "TM");
        return [introCleantext, introCleanDom, introCleanimages];
    }
}
exports.introDomHandle = introDomHandle;


/***/ }),

/***/ "./src/rules/lib/jjwxcFontDecode.ts":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replaceJjwxcCharacter = void 0;
function replaceJjwxcCharacter(fontName, inputText) {
    let outputText = inputText;
    const jjwxcFontTable = jjwxcFontTables[fontName];
    if (jjwxcFontTable) {
        for (const jjwxcCharacter in jjwxcFontTable) {
            const normalCharacter = jjwxcFontTable[jjwxcCharacter];
            outputText = outputText.replaceAll(jjwxcCharacter, normalCharacter);
        }
        outputText = outputText.replaceAll("\u200c", "");
    }
    return outputText;
}
exports.replaceJjwxcCharacter = replaceJjwxcCharacter;
const jjwxcFontTables = {
    jjwxcfont_0004v: {
        "\ue005": "\u4ec0",
        "\ue009": "\u5168",
        "\ue00d": "\u5df2",
        "\ue019": "\u8fc7",
        "\ue04e": "\u591a",
        "\ue055": "\u8001",
        "\ue05a": "\u6b63",
        "\ue06a": "\u771f",
        "\ue076": "\u4e9b",
        "\ue084": "\u8bdd",
        "\ue085": "\u4e24",
        "\ue087": "\u7ecf",
        "\ue08f": "\u7406",
        "\ue0a8": "\u548c",
        "\ue0d3": "\u60c5",
        "\ue0d6": "\u79cd",
        "\ue0f4": "\u516c",
        "\ue11c": "\u4f55",
        "\ue11f": "\u800c",
        "\ue150": "\u53ea",
        "\ue188": "\u6837",
        "\ue197": "\u4eba",
        "\ue19b": "\u4e49",
        "\ue1a7": "\u4e0a",
        "\ue1b2": "\u4e3a",
        "\ue1ca": "\u5148",
        "\ue1d7": "\u672c",
        "\ue1e1": "\u6c14",
        "\ue1e7": "\u4f60",
        "\ue1eb": "\u4e5f",
        "\ue1fa": "\u73b0",
        "\ue1fb": "\u60f3",
        "\ue218": "\u5411",
        "\ue22f": "\u5b50",
        "\ue28b": "\u90fd",
        "\ue2ad": "\u542c",
        "\ue2df": "\u4e0e",
        "\ue2e2": "\u5b9e",
        "\ue2ea": "\u6253",
        "\ue2f0": "\u5c31",
        "\ue31a": "\u4e0d",
        "\ue33c": "\u6240",
        "\ue36d": "\u5929",
        "\ue3a1": "\u8fdb",
        "\ue3aa": "\u522b",
        "\ue3ac": "\u793e",
        "\ue3c7": "\u5c0f",
        "\ue3ca": "\u56e0",
        "\ue3ce": "\u5176",
        "\ue3d9": "\u95ee",
        "\ue3e3": "\u540c",
        "\ue3fe": "\u529b",
        "\ue428": "\u81ea",
        "\ue429": "\u524d",
        "\ue42f": "\u662f",
        "\ue44b": "\u6211",
        "\ue44c": "\u4f53",
        "\ue44d": "\u4e48",
        "\ue451": "\u624b",
        "\ue452": "\u773c",
        "\ue47d": "\u5b9a",
        "\ue490": "\u58f0",
        "\ue4ad": "\u767d",
        "\ue4bb": "\u77e5",
        "\ue4d0": "\u624d",
        "\ue4df": "\u5934",
        "\ue4fe": "\u592a",
        "\ue506": "\u795e",
        "\ue50a": "\u540d",
        "\ue50f": "\u770b",
        "\ue52b": "\u5341",
        "\ue530": "\u53d1",
        "\ue535": "\u5b83",
        "\ue54d": "\u5c11",
        "\ue567": "\u65e0",
        "\ue57f": "\u7684",
        "\ue584": "\u5973",
        "\ue586": "\u4ed6",
        "\ue5a2": "\u9ad8",
        "\ue5a3": "\u5e76",
        "\ue5c3": "\u7740",
        "\ue5c6": "\u5173",
        "\ue5e1": "\u56de",
        "\ue5ee": "\u4e4b",
        "\ue5fb": "\u4fbf",
        "\ue601": "\u9762",
        "\ue613": "\u5f00",
        "\ue627": "\u5730",
        "\ue680": "\u6ca1",
        "\ue6c4": "\u660e",
        "\ue6c8": "\u4f7f",
        "\ue6cb": "\u51e0",
        "\ue6ef": "\u4e2d",
        "\ue6fa": "\u8981",
        "\ue705": "\u518d",
        "\ue707": "\u4eec",
        "\ue72b": "\u7279",
        "\ue73a": "\u5fc3",
        "\ue768": "\u5df1",
        "\ue76d": "\u7136",
        "\ue774": "\u56fd",
        "\ue78d": "\u5f97",
        "\ue79f": "\u8005",
        "\ue7b0": "\u5e74",
        "\ue7b4": "\u8fd8",
        "\ue7cd": "\u4e8e",
        "\ue7d9": "\u4f1a",
        "\ue7ee": "\u4ece",
        "\ue7f3": "\u70b9",
        "\ue7f6": "\u76f8",
        "\ue801": "\u4e09",
        "\ue803": "\u957f",
        "\ue804": "\u6559",
        "\ue86d": "\u4e16",
        "\ue876": "\u679c",
        "\ue898": "\u90a3",
        "\ue89f": "\u4ee3",
        "\ue8a1": "\u6b64",
        "\ue8a7": "\u5c06",
        "\ue8d2": "\u91cd",
        "\ue8d6": "\u6cd5",
        "\ue8dc": "\u601d",
        "\ue8de": "\u95e8",
        "\ue8e6": "\u8fd9",
        "\ue943": "\u4e8c",
        "\ue948": "\u5b66",
        "\ue949": "\u6765",
        "\ue97d": "\u5199",
        "\ue98a": "\u6210",
        "\ue98f": "\u7528",
        "\ue999": "\u65f6",
        "\ue99b": "\u4ee5",
        "\ue9a2": "\u597d",
        "\ue9ab": "\u91cc",
        "\ue9c9": "\u5982",
        "\ue9cb": "\u8bba",
        "\ue9ed": "\u6027",
        "\uea14": "\u540e",
        "\uea17": "\u897f",
        "\uea2f": "\u9053",
        "\uea35": "\u6700",
        "\uea48": "\u5bb6",
        "\uea4a": "\u5979",
        "\uea63": "\u8eab",
        "\uea6d": "\u89c1",
        "\uea75": "\u5f88",
        "\uead1": "\u5916",
        "\ueaf1": "\u884c",
        "\ueb0e": "\u88ab",
        "\ueb16": "\u4f5c",
        "\ueb49": "\u5927",
        "\ueb9f": "\u65e5",
        "\uebba": "\u65b0",
        "\uebc4": "\u7269",
        "\uebcc": "\u4e8b",
        "\uebe4": "\u53c8",
        "\uebf0": "\u51fa",
        "\uebf4": "\u6709",
        "\uebfd": "\u4e86",
        "\uebfe": "\u4e3b",
        "\uec17": "\u5374",
        "\uec30": "\u7b49",
        "\uec38": "\u7531",
        "\uec78": "\u56db",
        "\uec7a": "\u611f",
        "\uec84": "\u80fd",
        "\uec9c": "\u7b2c",
        "\uecc8": "\u5728",
        "\uecca": "\u53bb",
        "\uecd2": "\u5316",
        "\uecd6": "\u4e66",
        "\ued29": "\u610f",
        "\ued31": "\u53ef",
        "\ued4b": "\u66f4",
        "\ued5d": "\u751f",
        "\ued67": "\u7f8e",
        "\ued69": "\u5206",
        "\ued80": "\u5bf9",
        "\uedcf": "\u4e0b",
        "\uedda": "\u95f4",
        "\uede8": "\u4e2a",
        "\uedf4": "\u5f53",
        "\uee11": "\u6587",
        "\uee30": "\u4f46",
        "\uee44": "\u53f2",
        "\uee4a": "\u65b9",
        "\uee6b": "\u7ed9",
        "\uee76": "\u52a8",
        "\uee8b": "\u4e00",
        "\ueef4": "\u513f",
        "\uef45": "\u5230",
        "\uef5e": "\u90e8",
        "\uef6e": "\u8bf4",
        "\uef78": "\u53e3",
        "\uef7e": "\u8d77",
        "\uefaf": "\u6b7b",
        "\uefb6": "\u7b11",
        "\uefd2": "\u628a",
        "\uefd5": "\u6c11",
        "\ueff7": "\u8d70",
    },
    jjwxcfont_00070: {
        "\ue016": "\u5929",
        "\ue01e": "\u5730",
        "\ue03d": "\u53f2",
        "\ue046": "\u4e3b",
        "\ue061": "\u4ece",
        "\ue06b": "\u751f",
        "\ue07b": "\u56de",
        "\ue096": "\u5199",
        "\ue0b1": "\u79cd",
        "\ue0b8": "\u4e3a",
        "\ue0d5": "\u5316",
        "\ue0d9": "\u8d77",
        "\ue0f7": "\u5973",
        "\ue11c": "\u7ecf",
        "\ue12d": "\u53e3",
        "\ue138": "\u4e2d",
        "\ue144": "\u957f",
        "\ue153": "\u4e8e",
        "\ue173": "\u51e0",
        "\ue177": "\u8bf4",
        "\ue184": "\u95f4",
        "\ue18b": "\u4fbf",
        "\ue19a": "\u628a",
        "\ue1ea": "\u672c",
        "\ue1fa": "\u8bba",
        "\ue1fd": "\u4e09",
        "\ue212": "\u771f",
        "\ue225": "\u592a",
        "\ue236": "\u56fd",
        "\ue25b": "\u5927",
        "\ue260": "\u65f6",
        "\ue264": "\u56db",
        "\ue298": "\u4e2a",
        "\ue2aa": "\u4e4b",
        "\ue2be": "\u513f",
        "\ue2f3": "\u4e5f",
        "\ue301": "\u4e0e",
        "\ue316": "\u5df1",
        "\ue317": "\u89c1",
        "\ue33d": "\u4f5c",
        "\ue342": "\u88ab",
        "\ue35a": "\u4ee5",
        "\ue38b": "\u6c14",
        "\ue3a2": "\u529b",
        "\ue3a3": "\u6b64",
        "\ue3a4": "\u897f",
        "\ue3a6": "\u95e8",
        "\ue3fd": "\u9ad8",
        "\ue3ff": "\u81ea",
        "\ue44a": "\u91cd",
        "\ue451": "\u4e9b",
        "\ue467": "\u8fdb",
        "\ue46d": "\u518d",
        "\ue481": "\u540e",
        "\ue483": "\u884c",
        "\ue4ac": "\u4e24",
        "\ue4b1": "\u65b9",
        "\ue4ca": "\u4e0a",
        "\ue4e4": "\u65e5",
        "\ue4fe": "\u6211",
        "\ue508": "\u6ca1",
        "\ue521": "\u7b49",
        "\ue523": "\u5c0f",
        "\ue524": "\u6210",
        "\ue543": "\u95ee",
        "\ue54a": "\u795e",
        "\ue550": "\u6253",
        "\ue572": "\u90e8",
        "\ue592": "\u73b0",
        "\ue5d8": "\u5bf9",
        "\ue5f3": "\u4e0d",
        "\ue5ff": "\u8fd9",
        "\ue609": "\u7740",
        "\ue64d": "\u65b0",
        "\ue677": "\u800c",
        "\ue687": "\u4e8b",
        "\ue698": "\u4ed6",
        "\ue6b4": "\u5341",
        "\ue6c7": "\u4e00",
        "\ue6c8": "\u8d70",
        "\ue6e5": "\u6cd5",
        "\ue716": "\u5f00",
        "\ue72d": "\u5c06",
        "\ue738": "\u4e86",
        "\ue73f": "\u5bb6",
        "\ue747": "\u5b9e",
        "\ue75e": "\u6559",
        "\ue766": "\u7ed9",
        "\ue774": "\u90fd",
        "\ue798": "\u522b",
        "\ue7d5": "\u4e66",
        "\ue7e5": "\u60f3",
        "\ue7f4": "\u53d1",
        "\ue7f5": "\u662f",
        "\ue7f8": "\u8001",
        "\ue81d": "\u7136",
        "\ue827": "\u90a3",
        "\ue830": "\u6587",
        "\ue842": "\u767d",
        "\ue86d": "\u660e",
        "\ue8ac": "\u4e48",
        "\ue8cd": "\u624b",
        "\ue8d1": "\u58f0",
        "\ue8d4": "\u4ec0",
        "\ue8e7": "\u6709",
        "\ue908": "\u7f8e",
        "\ue916": "\u6027",
        "\ue91f": "\u516c",
        "\ue928": "\u5c31",
        "\ue93a": "\u7279",
        "\ue95b": "\u9053",
        "\ue969": "\u7b11",
        "\ue981": "\u5173",
        "\ue987": "\u773c",
        "\ue9af": "\u7269",
        "\ue9be": "\u4ee3",
        "\ue9cc": "\u8bdd",
        "\ue9d2": "\u4f7f",
        "\ue9eb": "\u76f8",
        "\ue9f7": "\u540c",
        "\ue9fb": "\u524d",
        "\ue9fe": "\u5176",
        "\uea00": "\u548c",
        "\uea2a": "\u5728",
        "\uea32": "\u5206",
        "\uea4c": "\u6c11",
        "\uea54": "\u80fd",
        "\uea66": "\u4f55",
        "\uea7d": "\u53c8",
        "\uea9b": "\u7528",
        "\ueaa1": "\u4e0b",
        "\ueaa5": "\u8005",
        "\ueac3": "\u540d",
        "\ueaea": "\u5fc3",
        "\ueb04": "\u8fc7",
        "\ueb17": "\u91cc",
        "\ueb2c": "\u7406",
        "\ueb34": "\u66f4",
        "\ueb4e": "\u6765",
        "\ueb5c": "\u51fa",
        "\ueb67": "\u53ea",
        "\ueb69": "\u4e16",
        "\ueb8d": "\u6b63",
        "\uebae": "\u4f53",
        "\uebbc": "\u8eab",
        "\uebc9": "\u793e",
        "\uebe0": "\u8fd8",
        "\uebf6": "\u53ef",
        "\uebfd": "\u611f",
        "\uebff": "\u5b66",
        "\uec22": "\u5df2",
        "\uec66": "\u53bb",
        "\uec6b": "\u5979",
        "\uec70": "\u65e0",
        "\uec79": "\u6700",
        "\uec80": "\u770b",
        "\uec94": "\u5168",
        "\uecba": "\u5e76",
        "\uecc4": "\u4eba",
        "\uecea": "\u601d",
        "\ued0b": "\u4f46",
        "\ued2c": "\u610f",
        "\ued3e": "\u5b9a",
        "\ued6e": "\u5f97",
        "\ued76": "\u5b83",
        "\ued7c": "\u4eec",
        "\ued80": "\u597d",
        "\ued90": "\u52a8",
        "\ued93": "\u542c",
        "\ueda0": "\u8981",
        "\ueda9": "\u5374",
        "\uedc3": "\u7531",
        "\uedc5": "\u679c",
        "\uedc9": "\u7684",
        "\ueddb": "\u624d",
        "\uedf4": "\u5916",
        "\uee46": "\u5411",
        "\uee4e": "\u5230",
        "\uee60": "\u5e74",
        "\uee75": "\u5f53",
        "\uee82": "\u60c5",
        "\uee83": "\u5148",
        "\uee8b": "\u70b9",
        "\uee92": "\u77e5",
        "\ueeb4": "\u6b7b",
        "\ueebe": "\u7b2c",
        "\ueece": "\u4f1a",
        "\ueef5": "\u5934",
        "\ueefb": "\u4e8c",
        "\uef17": "\u5f88",
        "\uef2b": "\u56e0",
        "\uef2d": "\u6240",
        "\uef32": "\u4e49",
        "\uef33": "\u9762",
        "\uef37": "\u5b50",
        "\uef3b": "\u6837",
        "\uefa9": "\u5982",
        "\uefd5": "\u4f60",
        "\uefdc": "\u591a",
        "\ueff6": "\u5c11",
    },
    jjwxcfont_00091: {
        "\ue006": "\u5b83",
        "\ue007": "\u5b9e",
        "\ue008": "\u4e86",
        "\ue00f": "\u53bb",
        "\ue021": "\u7b11",
        "\ue037": "\u4f1a",
        "\ue044": "\u65f6",
        "\ue04c": "\u9053",
        "\ue07c": "\u6211",
        "\ue081": "\u65e0",
        "\ue082": "\u767d",
        "\ue0c3": "\u773c",
        "\ue0d0": "\u6b7b",
        "\ue106": "\u5df2",
        "\ue107": "\u95f4",
        "\ue109": "\u542c",
        "\ue10a": "\u89c1",
        "\ue12c": "\u5f88",
        "\ue139": "\u90fd",
        "\ue145": "\u6837",
        "\ue158": "\u5f97",
        "\ue1a1": "\u540e",
        "\ue1e3": "\u91cc",
        "\ue1fb": "\u592a",
        "\ue1fe": "\u5c11",
        "\ue208": "\u4e0a",
        "\ue221": "\u4eba",
        "\ue227": "\u5173",
        "\ue230": "\u4e24",
        "\ue237": "\u5c31",
        "\ue273": "\u5bb6",
        "\ue281": "\u5199",
        "\ue2a9": "\u524d",
        "\ue2c4": "\u5c06",
        "\ue2c8": "\u6765",
        "\ue2ce": "\u53ef",
        "\ue2d2": "\u4ed6",
        "\ue2f1": "\u4ee5",
        "\ue300": "\u4eec",
        "\ue304": "\u516c",
        "\ue30e": "\u660e",
        "\ue341": "\u4e00",
        "\ue34b": "\u7b49",
        "\ue389": "\u7f8e",
        "\ue3a9": "\u73b0",
        "\ue3e0": "\u91cd",
        "\ue3e8": "\u611f",
        "\ue3f7": "\u7406",
        "\ue40b": "\u65e5",
        "\ue41f": "\u601d",
        "\ue442": "\u4f55",
        "\ue465": "\u548c",
        "\ue498": "\u7ecf",
        "\ue499": "\u4e8c",
        "\ue4a2": "\u5979",
        "\ue4aa": "\u58f0",
        "\ue4ad": "\u5916",
        "\ue4bb": "\u5316",
        "\ue4d0": "\u5168",
        "\ue4dd": "\u5176",
        "\ue4e0": "\u65b9",
        "\ue4e4": "\u540d",
        "\ue4f2": "\u51e0",
        "\ue4fd": "\u5934",
        "\ue502": "\u6ca1",
        "\ue51f": "\u9ad8",
        "\ue550": "\u5730",
        "\ue558": "\u6cd5",
        "\ue568": "\u4fbf",
        "\ue569": "\u4ec0",
        "\ue56c": "\u56fd",
        "\ue56e": "\u4e09",
        "\ue599": "\u8001",
        "\ue5a1": "\u5982",
        "\ue5ba": "\u65b0",
        "\ue5bd": "\u5206",
        "\ue5c8": "\u884c",
        "\ue5eb": "\u7740",
        "\ue5f5": "\u5e76",
        "\ue5f7": "\u793e",
        "\ue5f9": "\u771f",
        "\ue609": "\u624d",
        "\ue613": "\u8fd8",
        "\ue643": "\u4f53",
        "\ue647": "\u751f",
        "\ue652": "\u897f",
        "\ue684": "\u8bba",
        "\ue694": "\u6700",
        "\ue69e": "\u60c5",
        "\ue6bb": "\u795e",
        "\ue6cf": "\u5341",
        "\ue6ea": "\u4e16",
        "\ue712": "\u4e2a",
        "\ue73e": "\u7684",
        "\ue7bb": "\u513f",
        "\ue7be": "\u6b63",
        "\ue7c0": "\u6709",
        "\ue7d3": "\u8bf4",
        "\ue7de": "\u7136",
        "\ue7f5": "\u5230",
        "\ue804": "\u8bdd",
        "\ue80a": "\u76f8",
        "\ue829": "\u90e8",
        "\ue83d": "\u4e3b",
        "\ue855": "\u4e5f",
        "\ue85e": "\u6b64",
        "\ue879": "\u56de",
        "\ue88a": "\u53ea",
        "\ue88f": "\u4e8e",
        "\ue894": "\u957f",
        "\ue898": "\u5927",
        "\ue8bc": "\u79cd",
        "\ue8bf": "\u56db",
        "\ue8c0": "\u53c8",
        "\ue8c7": "\u6c11",
        "\ue8cb": "\u88ab",
        "\ue903": "\u90a3",
        "\ue912": "\u4f5c",
        "\ue93f": "\u5bf9",
        "\ue955": "\u6c14",
        "\ue989": "\u6240",
        "\ue997": "\u6253",
        "\ue9b1": "\u5f53",
        "\ue9b9": "\u5b66",
        "\ue9d5": "\u8eab",
        "\ue9f6": "\u7269",
        "\uea0f": "\u7b2c",
        "\uea3f": "\u53f2",
        "\uea51": "\u5fc3",
        "\uea61": "\u628a",
        "\uea75": "\u4e66",
        "\uea7b": "\u529b",
        "\uea8a": "\u95ee",
        "\uea8c": "\u80fd",
        "\uea8f": "\u5929",
        "\uea99": "\u8981",
        "\ueaa6": "\u4e48",
        "\ueaa8": "\u5b50",
        "\ueadf": "\u70b9",
        "\ueb10": "\u5df1",
        "\ueb17": "\u53e3",
        "\ueb27": "\u60f3",
        "\ueb28": "\u597d",
        "\ueb66": "\u5374",
        "\ueb9c": "\u9762",
        "\uebb2": "\u7279",
        "\uebf5": "\u518d",
        "\uec01": "\u4e0b",
        "\uec0d": "\u53d1",
        "\uec2a": "\u5411",
        "\uec56": "\u800c",
        "\uec5a": "\u5e74",
        "\uec8d": "\u7ed9",
        "\ueca4": "\u8d77",
        "\uecb7": "\u4f46",
        "\uecc2": "\u8d70",
        "\uecdf": "\u5148",
        "\uecec": "\u4e8b",
        "\ued0a": "\u5f00",
        "\ued1c": "\u8005",
        "\ued4a": "\u4f60",
        "\ued4b": "\u77e5",
        "\ued52": "\u5973",
        "\ued5e": "\u6027",
        "\ued71": "\u7528",
        "\ued80": "\u662f",
        "\ued83": "\u672c",
        "\ued86": "\u540c",
        "\ueda2": "\u66f4",
        "\uedaa": "\u81ea",
        "\uedac": "\u6210",
        "\uedb5": "\u56e0",
        "\uedcb": "\u4e49",
        "\uede0": "\u522b",
        "\uedf9": "\u624b",
        "\uee19": "\u5728",
        "\uee29": "\u4e9b",
        "\uee48": "\u4e0d",
        "\uee4b": "\u4e4b",
        "\uee5a": "\u770b",
        "\uee95": "\u52a8",
        "\uee9f": "\u4e2d",
        "\ueeac": "\u51fa",
        "\ueeb6": "\u8fd9",
        "\ueebf": "\u4f7f",
        "\ueed1": "\u95e8",
        "\ueee8": "\u6587",
        "\ueef6": "\u4e0e",
        "\uef1b": "\u591a",
        "\uef1f": "\u8fc7",
        "\uef40": "\u5b9a",
        "\uef43": "\u679c",
        "\uef47": "\u4e3a",
        "\uef8f": "\u4ece",
        "\uefb5": "\u8fdb",
        "\uefc0": "\u4ee3",
        "\uefd9": "\u6559",
        "\uefde": "\u610f",
        "\uefe2": "\u5c0f",
        "\uefe7": "\u7531",
    },
    jjwxcfont_000bl: {
        "\ue3db": "\u7f8e",
        "\ue981": "\u90e8",
        "\uee76": "\u6c14",
        "\ueb83": "\u8d77",
        "\ue395": "\u8fd8",
        "\uef71": "\u7279",
        "\ue774": "\u8005",
        "\ue961": "\u4e0e",
        "\ue2a8": "\u8bdd",
        "\ued7a": "\u4e24",
        "\uebed": "\u6cd5",
        "\ue74a": "\u7b2c",
        "\uecca": "\u76f8",
        "\uea3f": "\u522b",
        "\ue9cf": "\u800c",
        "\ue0e9": "\u542c",
        "\ue6bc": "\u516c",
        "\ue419": "\u611f",
        "\ue945": "\u4eba",
        "\ue25d": "\u540d",
        "\ue57b": "\u5df1",
        "\ue9aa": "\u8bba",
        "\ue787": "\u771f",
        "\uee95": "\u5df2",
        "\ueeea": "\u624b",
        "\ue0ad": "\u95ee",
        "\ue319": "\u8eab",
        "\ue9b0": "\u679c",
        "\ue2c2": "\u540c",
        "\ued58": "\u624d",
        "\ue1ae": "\u4e16",
        "\ue8e9": "\u7ecf",
        "\uef63": "\u51fa",
        "\uebb4": "\u6211",
        "\uea92": "\u592a",
        "\ue2d8": "\u5411",
        "\uee22": "\u89c1",
        "\uea37": "\u81ea",
        "\ue521": "\u5bf9",
        "\ue279": "\u601d",
        "\ue988": "\u5bb6",
        "\uedd7": "\u8fdb",
        "\uecd0": "\u5f97",
        "\ued00": "\u4f7f",
        "\ueb3a": "\u548c",
        "\ue8cc": "\u65b9",
        "\ue576": "\u7406",
        "\ue826": "\u52a8",
        "\uef6f": "\u795e",
        "\uef66": "\u4ece",
        "\ue0aa": "\u4e9b",
        "\ue0a3": "\u5b9e",
        "\ue987": "\u4e4b",
        "\uec9b": "\u91cc",
        "\ue042": "\u5b66",
        "\uee8d": "\u4eec",
        "\uee4b": "\u4f55",
        "\ue3c9": "\u9ad8",
        "\ued43": "\u4f46",
        "\ue29b": "\u7531",
        "\ue26d": "\u65f6",
        "\uea74": "\u66f4",
        "\ue73c": "\u65b0",
        "\uedac": "\u6253",
        "\ue459": "\u70b9",
        "\ue855": "\u897f",
        "\ue2d6": "\u7528",
        "\ue53f": "\u4e49",
        "\uef5b": "\u5b50",
        "\ue152": "\u5c11",
        "\ueca6": "\u770b",
        "\ue2fe": "\u5e74",
        "\ue15d": "\u4e0b",
        "\ue85c": "\u95e8",
        "\ue3cb": "\u51e0",
        "\ue6ff": "\u6587",
        "\ue120": "\u4e86",
        "\ueacd": "\u4e09",
        "\ue993": "\u5206",
        "\ue6b7": "\u662f",
        "\ueace": "\u53e3",
        "\ue297": "\u5973",
        "\ue1e4": "\u77e5",
        "\ue779": "\u5176",
        "\ue2a6": "\u95f4",
        "\uedb7": "\u6559",
        "\ueb13": "\u4e48",
        "\ue114": "\u8bf4",
        "\uedbc": "\u9762",
        "\ued39": "\u8fc7",
        "\uedc1": "\u6c11",
        "\ue514": "\u73b0",
        "\uee56": "\u5b83",
        "\uee0a": "\u4e8c",
        "\ueba7": "\u7684",
        "\ue9ea": "\u4ee3",
        "\ue3cc": "\u8fd9",
        "\ue9be": "\u5f00",
        "\ueb73": "\u4f53",
        "\ue3a4": "\u4e0d",
        "\ue862": "\u5728",
        "\ueb0b": "\u7b11",
        "\ue238": "\u5f53",
        "\ue631": "\u5316",
        "\ue786": "\u4e66",
        "\ue4ca": "\u5374",
        "\ued87": "\u6837",
        "\ue928": "\u4e8b",
        "\ue406": "\u65e0",
        "\ue1f0": "\u5168",
        "\ue233": "\u5929",
        "\uecc5": "\u597d",
        "\ue5ca": "\u591a",
        "\ue736": "\u88ab",
        "\ue07a": "\u53d1",
        "\ue91a": "\u5927",
        "\ue4c9": "\u8001",
        "\ue70a": "\u53f2",
        "\ue322": "\u5fc3",
        "\uec03": "\u5c06",
        "\ue3d7": "\u56de",
        "\ue8e7": "\u773c",
        "\uef19": "\u4e2a",
        "\ue989": "\u4e00",
        "\uee15": "\u751f",
        "\uee0c": "\u6ca1",
        "\ue409": "\u9053",
        "\ue179": "\u4f60",
        "\uef6e": "\u4ee5",
        "\uea16": "\u5341",
        "\uea52": "\u7740",
        "\ueefe": "\u56db",
        "\uee31": "\u672c",
        "\ueeb8": "\u4fbf",
        "\ue5bc": "\u4e3a",
        "\ue62c": "\u53ef",
        "\ue451": "\u60f3",
        "\ued91": "\u529b",
        "\ue0ce": "\u7ed9",
        "\ue62b": "\u7269",
        "\uecc4": "\u767d",
        "\ue72e": "\u884c",
        "\ueff4": "\u4e8e",
        "\ue1c0": "\u6b64",
        "\ue61a": "\u4f5c",
        "\uef8d": "\u5c31",
        "\ue50b": "\u5916",
        "\uea3b": "\u5148",
        "\ued2b": "\u5979",
        "\ue57e": "\u5730",
        "\ue8f0": "\u56fd",
        "\ue7a8": "\u5173",
        "\ueb90": "\u8981",
        "\uee23": "\u4e5f",
        "\ue9de": "\u91cd",
        "\ue522": "\u513f",
        "\ue2ab": "\u7b49",
        "\ue73e": "\u540e",
        "\ue33f": "\u65e5",
        "\ue265": "\u6765",
        "\ue7e7": "\u5982",
        "\ue382": "\u4ec0",
        "\ue7cc": "\u5934",
        "\ueae6": "\u5199",
        "\ueb5f": "\u90fd",
        "\ue4d0": "\u610f",
        "\ue808": "\u6b63",
        "\ueec7": "\u6b7b",
        "\ue05d": "\u56e0",
        "\uec6e": "\u53ea",
        "\ue64e": "\u628a",
        "\ued1c": "\u6210",
        "\ue751": "\u4e3b",
        "\ueb11": "\u4e0a",
        "\ue3d8": "\u5230",
        "\ued84": "\u79cd",
        "\ueed4": "\u5b9a",
        "\ueb8d": "\u5e76",
        "\ueec9": "\u524d",
        "\uebfb": "\u4f1a",
        "\uefab": "\u5f88",
        "\uea3a": "\u90a3",
        "\ue3d5": "\u80fd",
        "\ue592": "\u8d70",
        "\ue513": "\u53bb",
        "\ue960": "\u58f0",
        "\ue9dc": "\u660e",
        "\ue444": "\u6709",
        "\ue358": "\u6027",
        "\ue551": "\u793e",
        "\ueaa7": "\u60c5",
        "\ue8f5": "\u4ed6",
        "\ue201": "\u7136",
        "\ue191": "\u6240",
        "\ue994": "\u957f",
        "\ue3b0": "\u6700",
        "\ue415": "\u4e2d",
        "\ue28b": "\u5c0f",
        "\ue39a": "\u518d",
        "\ue378": "\u53c8",
    },
    jjwxcfont_000dz: {
        "\ue007": "\u6c14",
        "\ue042": "\u73b0",
        "\ue04b": "\u4ec0",
        "\ue057": "\u4e66",
        "\ue063": "\u7740",
        "\ue09c": "\u7279",
        "\ue0b4": "\u6c11",
        "\ue0b7": "\u4e4b",
        "\ue0c1": "\u56e0",
        "\ue0d0": "\u4e9b",
        "\ue0d4": "\u65e0",
        "\ue10b": "\u6b63",
        "\ue11e": "\u8001",
        "\ue11f": "\u6b7b",
        "\ue124": "\u7b11",
        "\ue141": "\u5916",
        "\ue16e": "\u5df2",
        "\ue1a8": "\u5c31",
        "\ue1b7": "\u4f60",
        "\ue1b9": "\u7b49",
        "\ue1ef": "\u65e5",
        "\ue20c": "\u81ea",
        "\ue212": "\u5176",
        "\ue220": "\u5f00",
        "\ue22c": "\u9762",
        "\ue240": "\u90a3",
        "\ue272": "\u5206",
        "\ue28d": "\u7531",
        "\ue2a0": "\u767d",
        "\ue2b8": "\u5b9e",
        "\ue2d2": "\u7ecf",
        "\ue312": "\u5b9a",
        "\ue31b": "\u4f53",
        "\ue379": "\u8bf4",
        "\ue392": "\u4e09",
        "\ue3a8": "\u7136",
        "\ue3c3": "\u6765",
        "\ue3c7": "\u771f",
        "\ue3ff": "\u5148",
        "\ue400": "\u53ea",
        "\ue421": "\u5c06",
        "\ue430": "\u9ad8",
        "\ue448": "\u6559",
        "\ue44a": "\u91cd",
        "\ue450": "\u5168",
        "\ue452": "\u540d",
        "\ue453": "\u597d",
        "\ue467": "\u800c",
        "\ue469": "\u4e86",
        "\ue47d": "\u8fd9",
        "\ue47f": "\u53f2",
        "\ue49e": "\u795e",
        "\ue4cf": "\u9053",
        "\ue4d6": "\u4e0d",
        "\ue4f4": "\u8eab",
        "\ue503": "\u6b64",
        "\ue533": "\u95ee",
        "\ue53b": "\u6709",
        "\ue562": "\u5374",
        "\ue564": "\u5f53",
        "\ue594": "\u8bba",
        "\ue5ae": "\u660e",
        "\ue5c1": "\u6211",
        "\ue5db": "\u957f",
        "\ue5e8": "\u4e0b",
        "\ue5f5": "\u8fd8",
        "\ue5f6": "\u4e3a",
        "\ue615": "\u5bf9",
        "\ue632": "\u4e5f",
        "\ue68d": "\u516c",
        "\ue697": "\u8fdb",
        "\ue69a": "\u4e2d",
        "\ue6ac": "\u8bdd",
        "\ue6cb": "\u4e16",
        "\ue71e": "\u897f",
        "\ue73b": "\u66f4",
        "\ue748": "\u76f8",
        "\ue749": "\u5e74",
        "\ue775": "\u8d77",
        "\ue77f": "\u4e00",
        "\ue780": "\u53c8",
        "\ue78a": "\u5173",
        "\ue78b": "\u5f88",
        "\ue799": "\u60c5",
        "\ue7bb": "\u80fd",
        "\ue7fd": "\u95e8",
        "\ue80c": "\u56db",
        "\ue80f": "\u624b",
        "\ue834": "\u793e",
        "\ue85c": "\u4fbf",
        "\ue86f": "\u773c",
        "\ue872": "\u611f",
        "\ue876": "\u53ef",
        "\ue88c": "\u524d",
        "\ue8a8": "\u6240",
        "\ue8ad": "\u5c11",
        "\ue8bc": "\u4e49",
        "\ue8dc": "\u5728",
        "\ue8e0": "\u8005",
        "\ue91e": "\u4e8e",
        "\ue91f": "\u5f97",
        "\ue93d": "\u6587",
        "\ue950": "\u4e48",
        "\ue95f": "\u601d",
        "\ue972": "\u884c",
        "\ue979": "\u53e3",
        "\ue98e": "\u679c",
        "\ue98f": "\u5316",
        "\ue997": "\u51e0",
        "\ue99d": "\u58f0",
        "\ue99f": "\u6700",
        "\ue9ac": "\u65b9",
        "\ue9c1": "\u5fc3",
        "\ue9ca": "\u8d70",
        "\ue9d4": "\u52a8",
        "\ue9d5": "\u51fa",
        "\ue9e5": "\u7684",
        "\ue9ea": "\u7528",
        "\uea00": "\u65f6",
        "\uea2b": "\u5411",
        "\uea3d": "\u79cd",
        "\uea4d": "\u53d1",
        "\uea65": "\u89c1",
        "\ueacb": "\u5982",
        "\uead0": "\u7ed9",
        "\uead7": "\u628a",
        "\ueade": "\u56fd",
        "\ueaeb": "\u7269",
        "\ueaf2": "\u7b2c",
        "\ueaf3": "\u513f",
        "\ueaf4": "\u95f4",
        "\ueb1c": "\u60f3",
        "\ueb26": "\u53bb",
        "\ueb68": "\u4eba",
        "\ueb6f": "\u6253",
        "\ueb7d": "\u4ed6",
        "\uebbc": "\u4e0e",
        "\uebd1": "\u5973",
        "\uebea": "\u672c",
        "\uebef": "\u6027",
        "\uec03": "\u5979",
        "\uec17": "\u518d",
        "\uec29": "\u5b83",
        "\uec42": "\u4e8c",
        "\uec68": "\u4ee3",
        "\uec89": "\u5e76",
        "\uec96": "\u5929",
        "\ueca4": "\u6cd5",
        "\uecd2": "\u90e8",
        "\uecf8": "\u770b",
        "\ued0f": "\u6210",
        "\ued17": "\u751f",
        "\ued25": "\u7406",
        "\ued3a": "\u4f55",
        "\ued3d": "\u5b66",
        "\ued4c": "\u4f1a",
        "\ued6a": "\u662f",
        "\ued6f": "\u540c",
        "\ued7c": "\u5df1",
        "\ued8a": "\u4ece",
        "\ued98": "\u65b0",
        "\uedb2": "\u4e0a",
        "\uedf7": "\u5199",
        "\uee13": "\u56de",
        "\uee1a": "\u548c",
        "\uee29": "\u4eec",
        "\uee37": "\u5730",
        "\uee3c": "\u77e5",
        "\uee3e": "\u540e",
        "\uee53": "\u4f5c",
        "\uee5b": "\u6ca1",
        "\uee68": "\u624d",
        "\uee72": "\u610f",
        "\uee73": "\u70b9",
        "\uee7f": "\u5bb6",
        "\uee88": "\u90fd",
        "\ueea6": "\u522b",
        "\ueeac": "\u8981",
        "\ueec1": "\u7f8e",
        "\ueed2": "\u5230",
        "\ueee1": "\u4f7f",
        "\ueef7": "\u91cc",
        "\ueefe": "\u591a",
        "\uef1c": "\u4e2a",
        "\uef38": "\u5927",
        "\uef4a": "\u5b50",
        "\uef4b": "\u4e8b",
        "\uef4f": "\u542c",
        "\uef6d": "\u5c0f",
        "\uef77": "\u6837",
        "\uef7d": "\u88ab",
        "\uef8c": "\u4e3b",
        "\uefad": "\u8fc7",
        "\uefb4": "\u592a",
        "\uefc7": "\u5341",
        "\uefcb": "\u4ee5",
        "\uefd0": "\u529b",
        "\uefdf": "\u4f46",
        "\uefe5": "\u5934",
        "\ueff1": "\u4e24",
    },
    jjwxcfont_000ib: {
        "\ue00d": "\u89c1",
        "\ue020": "\u4f55",
        "\ue02a": "\u513f",
        "\ue045": "\u6ca1",
        "\ue068": "\u5b83",
        "\ue06a": "\u9762",
        "\ue074": "\u6c11",
        "\ue079": "\u6253",
        "\ue084": "\u8bba",
        "\ue0ac": "\u6765",
        "\ue0ae": "\u8001",
        "\ue0e3": "\u4e24",
        "\ue102": "\u5230",
        "\ue11a": "\u79cd",
        "\ue13d": "\u91cc",
        "\ue145": "\u5c31",
        "\ue148": "\u95ee",
        "\ue176": "\u4e3b",
        "\ue1b1": "\u7b49",
        "\ue1b5": "\u53ef",
        "\ue1c3": "\u4ee5",
        "\ue1c9": "\u73b0",
        "\ue1ca": "\u6c14",
        "\ue1f5": "\u4f46",
        "\ue1f8": "\u5374",
        "\ue1fe": "\u7b11",
        "\ue201": "\u5316",
        "\ue213": "\u9053",
        "\ue214": "\u524d",
        "\ue21a": "\u5199",
        "\ue232": "\u4eec",
        "\ue246": "\u4e49",
        "\ue249": "\u5f00",
        "\ue257": "\u548c",
        "\ue278": "\u5c06",
        "\ue297": "\u4e0b",
        "\ue29a": "\u540d",
        "\ue300": "\u660e",
        "\ue329": "\u6709",
        "\ue33a": "\u4e0d",
        "\ue346": "\u5934",
        "\ue357": "\u5bf9",
        "\ue359": "\u771f",
        "\ue365": "\u8d77",
        "\ue374": "\u4e2a",
        "\ue39b": "\u60f3",
        "\ue3ac": "\u624d",
        "\ue3bb": "\u897f",
        "\ue3ce": "\u4e3a",
        "\ue3dd": "\u4f60",
        "\ue3e4": "\u5e76",
        "\ue3ff": "\u5df1",
        "\ue409": "\u5979",
        "\ue40b": "\u4e09",
        "\ue412": "\u4e00",
        "\ue418": "\u8fdb",
        "\ue419": "\u4e8c",
        "\ue4a3": "\u8fc7",
        "\ue4cc": "\u795e",
        "\ue4fb": "\u542c",
        "\ue508": "\u7279",
        "\ue514": "\u5c0f",
        "\ue520": "\u6027",
        "\ue53e": "\u8005",
        "\ue54a": "\u751f",
        "\ue556": "\u5fc3",
        "\ue563": "\u5b9e",
        "\ue572": "\u6700",
        "\ue57f": "\u65f6",
        "\ue589": "\u591a",
        "\ue59c": "\u770b",
        "\ue59d": "\u65b9",
        "\ue5c3": "\u4eba",
        "\ue5d2": "\u5982",
        "\ue5e5": "\u90a3",
        "\ue5e6": "\u4e9b",
        "\ue5e9": "\u4e8e",
        "\ue5f4": "\u522b",
        "\ue5fc": "\u66f4",
        "\ue614": "\u4e5f",
        "\ue619": "\u53e3",
        "\ue61e": "\u53d1",
        "\ue64a": "\u5f88",
        "\ue64e": "\u6b7b",
        "\ue664": "\u7ecf",
        "\ue665": "\u6b63",
        "\ue68d": "\u4f1a",
        "\ue69e": "\u4e86",
        "\ue6c1": "\u7531",
        "\ue6d3": "\u76f8",
        "\ue6e5": "\u6587",
        "\ue704": "\u4ed6",
        "\ue716": "\u7b2c",
        "\ue71e": "\u5173",
        "\ue722": "\u56db",
        "\ue726": "\u5e74",
        "\ue72c": "\u5927",
        "\ue751": "\u7136",
        "\ue759": "\u4e66",
        "\ue762": "\u90e8",
        "\ue76d": "\u7406",
        "\ue774": "\u8d70",
        "\ue77e": "\u6559",
        "\ue787": "\u4e0a",
        "\ue78b": "\u6cd5",
        "\ue7b6": "\u884c",
        "\ue7cd": "\u601d",
        "\ue7fa": "\u624b",
        "\ue7ff": "\u8981",
        "\ue812": "\u5206",
        "\ue81c": "\u53f2",
        "\ue81f": "\u60c5",
        "\ue825": "\u800c",
        "\ue82e": "\u793e",
        "\ue833": "\u95f4",
        "\ue88f": "\u592a",
        "\ue896": "\u80fd",
        "\ue8a4": "\u53bb",
        "\ue8e2": "\u56e0",
        "\ue937": "\u8eab",
        "\ue93c": "\u4e2d",
        "\ue952": "\u88ab",
        "\ue96a": "\u4ee3",
        "\ue97e": "\u6b64",
        "\ue9a2": "\u767d",
        "\ue9ce": "\u5f53",
        "\ue9db": "\u6837",
        "\ue9df": "\u540c",
        "\ue9fa": "\u679c",
        "\uea57": "\u4f5c",
        "\uea94": "\u516c",
        "\ueabc": "\u5b50",
        "\ueaca": "\u70b9",
        "\ueae4": "\u4e4b",
        "\ueafc": "\u9ad8",
        "\ueb0d": "\u662f",
        "\ueb25": "\u611f",
        "\ueb2d": "\u597d",
        "\ueb49": "\u90fd",
        "\ueb4c": "\u4e0e",
        "\ueb5a": "\u5916",
        "\ueb66": "\u81ea",
        "\ueb7a": "\u95e8",
        "\ueb8c": "\u56de",
        "\ueb97": "\u529b",
        "\ueb98": "\u518d",
        "\uebbc": "\u5730",
        "\uebe0": "\u56fd",
        "\uebe9": "\u7269",
        "\uebfd": "\u4e8b",
        "\uec8a": "\u6211",
        "\uec8b": "\u5168",
        "\uec9e": "\u6210",
        "\uecb3": "\u7684",
        "\uecb7": "\u53ea",
        "\uecc6": "\u610f",
        "\uecce": "\u4fbf",
        "\uecee": "\u5b9a",
        "\uecfe": "\u672c",
        "\ued20": "\u5c11",
        "\ued2f": "\u4ec0",
        "\ued55": "\u7740",
        "\ued66": "\u5b66",
        "\ued7d": "\u5df2",
        "\uedaf": "\u91cd",
        "\uedb2": "\u628a",
        "\uedb9": "\u4f7f",
        "\uedba": "\u77e5",
        "\uedbd": "\u65e5",
        "\uedd1": "\u5148",
        "\ueddb": "\u58f0",
        "\uedf6": "\u8bf4",
        "\uedf8": "\u7528",
        "\uee03": "\u5411",
        "\uee10": "\u4ece",
        "\uee18": "\u51fa",
        "\uee78": "\u8bdd",
        "\uee8f": "\u65e0",
        "\ueec2": "\u51e0",
        "\ueec4": "\u52a8",
        "\ueecd": "\u5728",
        "\ueee1": "\u5341",
        "\ueeed": "\u7ed9",
        "\ueeee": "\u5bb6",
        "\uef0d": "\u957f",
        "\uef25": "\u53c8",
        "\uef29": "\u8fd8",
        "\uef31": "\u5f97",
        "\uef39": "\u8fd9",
        "\uef3a": "\u4e48",
        "\uef54": "\u5929",
        "\uef6d": "\u773c",
        "\uef75": "\u5973",
        "\uefb1": "\u65b0",
        "\uefca": "\u540e",
        "\uefcd": "\u5176",
        "\uefda": "\u6240",
        "\uefe2": "\u7f8e",
        "\ueff0": "\u4e16",
        "\ueffb": "\u4f53",
    },
    jjwxcfont_000m4: {
        "\ue010": "\u7b2c",
        "\ue014": "\u5973",
        "\ue01c": "\u4eec",
        "\ue01f": "\u52a8",
        "\ue021": "\u58f0",
        "\ue055": "\u8fd9",
        "\ue05f": "\u7b11",
        "\ue06c": "\u5f53",
        "\ue077": "\u66f4",
        "\ue0b5": "\u4e00",
        "\ue0cc": "\u5979",
        "\ue0d1": "\u4f60",
        "\ue0e6": "\u5730",
        "\ue0ef": "\u65f6",
        "\ue0f2": "\u5b9e",
        "\ue119": "\u5f00",
        "\ue121": "\u4e4b",
        "\ue13b": "\u601d",
        "\ue13f": "\u7528",
        "\ue143": "\u513f",
        "\ue150": "\u4e3b",
        "\ue157": "\u5f88",
        "\ue15c": "\u53c8",
        "\ue15f": "\u6210",
        "\ue181": "\u8fc7",
        "\ue195": "\u4e24",
        "\ue197": "\u65e0",
        "\ue1a2": "\u4e16",
        "\ue1ac": "\u4ee5",
        "\ue1c1": "\u884c",
        "\ue1d4": "\u8d70",
        "\ue1f6": "\u4e5f",
        "\ue202": "\u4e09",
        "\ue239": "\u8fdb",
        "\ue241": "\u5168",
        "\ue245": "\u4e86",
        "\ue277": "\u4e3a",
        "\ue28a": "\u5c11",
        "\ue292": "\u4ec0",
        "\ue295": "\u53bb",
        "\ue2ab": "\u9ad8",
        "\ue2b0": "\u4e8c",
        "\ue2d4": "\u5fc3",
        "\ue2df": "\u90a3",
        "\ue2e9": "\u5916",
        "\ue31d": "\u60f3",
        "\ue329": "\u6c14",
        "\ue331": "\u4f1a",
        "\ue342": "\u624d",
        "\ue34a": "\u8d77",
        "\ue387": "\u5bb6",
        "\ue392": "\u4f46",
        "\ue3a2": "\u89c1",
        "\ue3ae": "\u8bba",
        "\ue3d7": "\u5df1",
        "\ue41f": "\u65b0",
        "\ue435": "\u5f97",
        "\ue446": "\u771f",
        "\ue447": "\u5374",
        "\ue46b": "\u65b9",
        "\ue475": "\u4e8e",
        "\ue490": "\u53ef",
        "\ue495": "\u540e",
        "\ue4a9": "\u8001",
        "\ue4b9": "\u773c",
        "\ue4c5": "\u516c",
        "\ue4c6": "\u95f4",
        "\ue4c7": "\u56e0",
        "\ue4cc": "\u5b83",
        "\ue4d4": "\u5728",
        "\ue4df": "\u77e5",
        "\ue508": "\u7ed9",
        "\ue51e": "\u4ed6",
        "\ue558": "\u5934",
        "\ue59c": "\u7ecf",
        "\ue5d0": "\u5176",
        "\ue5ed": "\u6240",
        "\ue5f2": "\u7531",
        "\ue616": "\u5982",
        "\ue63b": "\u80fd",
        "\ue63f": "\u7279",
        "\ue645": "\u90fd",
        "\ue660": "\u4e48",
        "\ue677": "\u8eab",
        "\ue688": "\u4f5c",
        "\ue6b7": "\u529b",
        "\ue6b9": "\u4eba",
        "\ue6dc": "\u4e0b",
        "\ue718": "\u70b9",
        "\ue719": "\u79cd",
        "\ue723": "\u4e2a",
        "\ue72c": "\u8fd8",
        "\ue736": "\u4e9b",
        "\ue739": "\u7269",
        "\ue756": "\u65e5",
        "\ue75a": "\u91cc",
        "\ue772": "\u6700",
        "\ue77e": "\u5c0f",
        "\ue78b": "\u610f",
        "\ue797": "\u4e0a",
        "\ue7ac": "\u767d",
        "\ue7d4": "\u800c",
        "\ue7df": "\u662f",
        "\ue7e3": "\u53ea",
        "\ue7f3": "\u9762",
        "\ue803": "\u8981",
        "\ue806": "\u5148",
        "\ue80c": "\u73b0",
        "\ue819": "\u4f55",
        "\ue825": "\u56db",
        "\ue863": "\u4e2d",
        "\ue868": "\u542c",
        "\ue883": "\u6837",
        "\ue888": "\u76f8",
        "\ue897": "\u5df2",
        "\ue8c4": "\u540d",
        "\ue8d0": "\u60c5",
        "\ue8d5": "\u660e",
        "\ue8ed": "\u6559",
        "\ue8ef": "\u56fd",
        "\ue905": "\u56de",
        "\ue90c": "\u5206",
        "\ue924": "\u7b49",
        "\ue937": "\u679c",
        "\ue939": "\u4fbf",
        "\ue943": "\u897f",
        "\ue969": "\u770b",
        "\ue986": "\u7136",
        "\ue9cb": "\u591a",
        "\ue9d0": "\u4ee3",
        "\ue9e8": "\u5927",
        "\ue9ea": "\u88ab",
        "\ue9f2": "\u4e0e",
        "\uea0a": "\u7684",
        "\uea44": "\u7f8e",
        "\uea6d": "\u6765",
        "\uea83": "\u51fa",
        "\uea97": "\u5e76",
        "\ueac0": "\u53d1",
        "\ueac6": "\u6b63",
        "\uead5": "\u611f",
        "\ueb0a": "\u957f",
        "\ueb2a": "\u4e49",
        "\ueb2c": "\u5e74",
        "\ueb33": "\u8bf4",
        "\ueb49": "\u81ea",
        "\ueb6a": "\u5230",
        "\ueba1": "\u6253",
        "\uebb7": "\u6b64",
        "\uebd5": "\u5411",
        "\uebde": "\u4e0d",
        "\uebf1": "\u53f2",
        "\uebf5": "\u592a",
        "\uebfd": "\u8bdd",
        "\uec0c": "\u5b50",
        "\uec15": "\u4ece",
        "\uec1b": "\u6587",
        "\uec7a": "\u4f53",
        "\uec80": "\u5929",
        "\uec91": "\u540c",
        "\uec94": "\u6709",
        "\uec99": "\u5316",
        "\uec9c": "\u53e3",
        "\uece2": "\u522b",
        "\uecfd": "\u597d",
        "\ued08": "\u5bf9",
        "\ued0c": "\u793e",
        "\ued3d": "\u5341",
        "\ued4f": "\u6b7b",
        "\ued81": "\u8005",
        "\ued82": "\u6ca1",
        "\uedfc": "\u6027",
        "\uee15": "\u628a",
        "\uee1a": "\u4e66",
        "\uee23": "\u518d",
        "\uee32": "\u548c",
        "\uee47": "\u6cd5",
        "\uee50": "\u7740",
        "\uee57": "\u9053",
        "\uee66": "\u4e8b",
        "\uee6b": "\u90e8",
        "\uee86": "\u5199",
        "\uee95": "\u6211",
        "\uee9f": "\u795e",
        "\ueea5": "\u7406",
        "\ueea9": "\u6c11",
        "\ueec5": "\u624b",
        "\ueece": "\u751f",
        "\ueeeb": "\u91cd",
        "\uef16": "\u51e0",
        "\uef32": "\u95ee",
        "\uef5b": "\u4f7f",
        "\uef77": "\u5b9a",
        "\uef7a": "\u5c06",
        "\uef81": "\u5c31",
        "\uef98": "\u5b66",
        "\uefb3": "\u95e8",
        "\uefc6": "\u672c",
        "\uefc8": "\u524d",
        "\uefea": "\u5173",
    },
    jjwxcfont_000mn: {
        "\ue002": "\u51fa",
        "\ue00c": "\u5c06",
        "\ue01b": "\u7b49",
        "\ue023": "\u6240",
        "\ue054": "\u5bf9",
        "\ue05c": "\u53e3",
        "\ue08d": "\u5b9e",
        "\ue0a5": "\u91cd",
        "\ue0fa": "\u8bf4",
        "\ue118": "\u518d",
        "\ue12e": "\u524d",
        "\ue12f": "\u5199",
        "\ue145": "\u4e8c",
        "\ue14c": "\u4e3a",
        "\ue14f": "\u540e",
        "\ue15d": "\u58f0",
        "\ue170": "\u53bb",
        "\ue174": "\u91cc",
        "\ue18b": "\u4e0e",
        "\ue196": "\u591a",
        "\ue19f": "\u6b64",
        "\ue1a6": "\u660e",
        "\ue1ad": "\u592a",
        "\ue1b9": "\u65e0",
        "\ue1ca": "\u4e0a",
        "\ue1cc": "\u5730",
        "\ue1cd": "\u5341",
        "\ue1d3": "\u5df2",
        "\ue1ee": "\u597d",
        "\ue21e": "\u5148",
        "\ue246": "\u5982",
        "\ue248": "\u4eec",
        "\ue253": "\u5728",
        "\ue255": "\u4f1a",
        "\ue263": "\u4e49",
        "\ue28a": "\u7406",
        "\ue28b": "\u6837",
        "\ue291": "\u6700",
        "\ue2ca": "\u65f6",
        "\ue302": "\u611f",
        "\ue30c": "\u897f",
        "\ue315": "\u5e74",
        "\ue323": "\u610f",
        "\ue33c": "\u4ee5",
        "\ue34f": "\u4f46",
        "\ue355": "\u7136",
        "\ue3bc": "\u5c11",
        "\ue3e7": "\u513f",
        "\ue412": "\u8fc7",
        "\ue414": "\u6ca1",
        "\ue415": "\u5176",
        "\ue428": "\u7ed9",
        "\ue431": "\u5b83",
        "\ue43e": "\u8fdb",
        "\ue43f": "\u8bdd",
        "\ue47b": "\u4eba",
        "\ue4a5": "\u5b50",
        "\ue4ae": "\u4ed6",
        "\ue4b3": "\u70b9",
        "\ue4ce": "\u5fc3",
        "\ue4dc": "\u624b",
        "\ue4e1": "\u771f",
        "\ue4e7": "\u60f3",
        "\ue4ed": "\u9762",
        "\ue4ef": "\u4e86",
        "\ue4f5": "\u56e0",
        "\ue50a": "\u6211",
        "\ue514": "\u624d",
        "\ue516": "\u957f",
        "\ue526": "\u4ece",
        "\ue52a": "\u4e09",
        "\ue533": "\u4e8b",
        "\ue54b": "\u53ea",
        "\ue54e": "\u662f",
        "\ue589": "\u5206",
        "\ue599": "\u6b7b",
        "\ue59e": "\u6b63",
        "\ue5b1": "\u4e3b",
        "\ue5b9": "\u8fd9",
        "\ue5ca": "\u751f",
        "\ue5fb": "\u8d77",
        "\ue5ff": "\u795e",
        "\ue610": "\u5979",
        "\ue64a": "\u770b",
        "\ue662": "\u522b",
        "\ue676": "\u4f53",
        "\ue67d": "\u80fd",
        "\ue681": "\u4ec0",
        "\ue69e": "\u4e2a",
        "\ue6a3": "\u4e0b",
        "\ue6a6": "\u5916",
        "\ue6ac": "\u7b2c",
        "\ue6b9": "\u6253",
        "\ue6ec": "\u7531",
        "\ue6f7": "\u90fd",
        "\ue6fd": "\u516c",
        "\ue710": "\u7279",
        "\ue714": "\u90e8",
        "\ue730": "\u9053",
        "\ue735": "\u51e0",
        "\ue767": "\u6210",
        "\ue792": "\u6027",
        "\ue7a0": "\u95e8",
        "\ue7a9": "\u4ee3",
        "\ue7aa": "\u540d",
        "\ue7b6": "\u8bba",
        "\ue7dc": "\u793e",
        "\ue7e4": "\u7528",
        "\ue7e8": "\u6cd5",
        "\ue7ef": "\u5c31",
        "\ue7f9": "\u8981",
        "\ue80b": "\u52a8",
        "\ue824": "\u601d",
        "\ue83d": "\u5973",
        "\ue849": "\u5f00",
        "\ue855": "\u773c",
        "\ue874": "\u7740",
        "\ue880": "\u65b9",
        "\ue885": "\u5b66",
        "\ue895": "\u4e24",
        "\ue8bc": "\u6765",
        "\ue8df": "\u4f60",
        "\ue8e1": "\u89c1",
        "\ue8ee": "\u79cd",
        "\ue8f0": "\u7269",
        "\ue903": "\u767d",
        "\ue908": "\u7f8e",
        "\ue91d": "\u88ab",
        "\ue936": "\u5934",
        "\ue940": "\u5bb6",
        "\ue94c": "\u8eab",
        "\ue95e": "\u548c",
        "\ue992": "\u4f55",
        "\ue994": "\u5927",
        "\ue9a1": "\u529b",
        "\ue9c4": "\u6587",
        "\ue9e5": "\u90a3",
        "\uea05": "\u8001",
        "\uea24": "\u5168",
        "\uea30": "\u7ecf",
        "\uea43": "\u5173",
        "\uea87": "\u66f4",
        "\uea8a": "\u4e48",
        "\ueaa9": "\u5c0f",
        "\ueaae": "\u4f7f",
        "\ueacb": "\u542c",
        "\ueadd": "\u540c",
        "\ueaf8": "\u4fbf",
        "\ueb05": "\u4e9b",
        "\ueb09": "\u53ef",
        "\ueb24": "\u4e16",
        "\ueb36": "\u65b0",
        "\ueb71": "\u9ad8",
        "\uebbb": "\u5230",
        "\uebc1": "\u4e4b",
        "\uebc2": "\u53c8",
        "\uebc6": "\u73b0",
        "\uebe6": "\u6c14",
        "\uec43": "\u8d70",
        "\uec46": "\u679c",
        "\uec6f": "\u6c11",
        "\uec83": "\u5411",
        "\ueca8": "\u4e5f",
        "\uecb4": "\u5df1",
        "\uece2": "\u56db",
        "\ueced": "\u76f8",
        "\uecf8": "\u5f88",
        "\ued04": "\u7684",
        "\ued08": "\u672c",
        "\ued57": "\u4e00",
        "\ued63": "\u884c",
        "\ued65": "\u56fd",
        "\uedc7": "\u7b11",
        "\uee0f": "\u5f53",
        "\uee1d": "\u5f97",
        "\uee4c": "\u8fd8",
        "\uee79": "\u800c",
        "\uee8b": "\u56de",
        "\uee8d": "\u4f5c",
        "\uee96": "\u5929",
        "\uee9e": "\u4e0d",
        "\ueef3": "\u5374",
        "\uef06": "\u5b9a",
        "\uef20": "\u53f2",
        "\uef24": "\u4e66",
        "\uef3c": "\u65e5",
        "\uef46": "\u628a",
        "\uef5b": "\u8005",
        "\uef5d": "\u60c5",
        "\uef7b": "\u4e2d",
        "\uef8f": "\u77e5",
        "\uef90": "\u5316",
        "\uef99": "\u53d1",
        "\uefad": "\u95f4",
        "\uefbb": "\u6559",
        "\uefc9": "\u81ea",
        "\uefd0": "\u6709",
        "\uefd5": "\u4e8e",
        "\uefda": "\u95ee",
        "\uefdf": "\u5e76",
    },
    jjwxcfont_000qt: {
        "\ue080": "\u662f",
        "\ue0ad": "\u795e",
        "\ue10d": "\u5148",
        "\ue13a": "\u773c",
        "\ue15c": "\u516c",
        "\ue163": "\u770b",
        "\ue167": "\u5982",
        "\ue170": "\u524d",
        "\ue182": "\u6b64",
        "\ue18b": "\u4e8c",
        "\ue1b7": "\u53c8",
        "\ue1bf": "\u58f0",
        "\ue1f0": "\u5b83",
        "\ue1f4": "\u884c",
        "\ue1fc": "\u5230",
        "\ue22a": "\u8bdd",
        "\ue238": "\u65b0",
        "\ue256": "\u4f55",
        "\ue259": "\u751f",
        "\ue262": "\u4e9b",
        "\ue26e": "\u8d77",
        "\ue2d3": "\u4e4b",
        "\ue2da": "\u4e0b",
        "\ue2ed": "\u4e16",
        "\ue30d": "\u4e24",
        "\ue333": "\u771f",
        "\ue385": "\u4f1a",
        "\ue395": "\u6837",
        "\ue39f": "\u5206",
        "\ue3ca": "\u65b9",
        "\ue3dd": "\u9053",
        "\ue3fc": "\u624d",
        "\ue3ff": "\u628a",
        "\ue419": "\u7528",
        "\ue433": "\u80fd",
        "\ue442": "\u7f8e",
        "\ue46a": "\u4fbf",
        "\ue486": "\u4e8e",
        "\ue48a": "\u8bba",
        "\ue48e": "\u51e0",
        "\ue490": "\u66f4",
        "\ue495": "\u4e48",
        "\ue4a8": "\u540e",
        "\ue4c7": "\u5730",
        "\ue4f2": "\u56e0",
        "\ue4fc": "\u8fc7",
        "\ue4fe": "\u53d1",
        "\ue507": "\u91cd",
        "\ue547": "\u4f60",
        "\ue54a": "\u540c",
        "\ue560": "\u53f2",
        "\ue57e": "\u957f",
        "\ue588": "\u77e5",
        "\ue593": "\u5f88",
        "\ue5e7": "\u4e2d",
        "\ue5ec": "\u6c11",
        "\ue5f0": "\u7ecf",
        "\ue61c": "\u5934",
        "\ue64c": "\u5316",
        "\ue657": "\u90fd",
        "\ue691": "\u89c1",
        "\ue6a7": "\u4f46",
        "\ue6ae": "\u672c",
        "\ue6c3": "\u81ea",
        "\ue6d9": "\u7ed9",
        "\ue6df": "\u5929",
        "\ue6e1": "\u610f",
        "\ue6e2": "\u4e3a",
        "\ue6f1": "\u4ee5",
        "\ue732": "\u5e74",
        "\ue73e": "\u5b66",
        "\ue747": "\u7684",
        "\ue752": "\u5199",
        "\ue76a": "\u5176",
        "\ue76c": "\u8fd9",
        "\ue773": "\u4f7f",
        "\ue782": "\u522b",
        "\ue78a": "\u7279",
        "\ue7e2": "\u6c14",
        "\ue7e6": "\u6027",
        "\ue808": "\u65e0",
        "\ue809": "\u4ed6",
        "\ue80d": "\u5bf9",
        "\ue83a": "\u90e8",
        "\ue843": "\u5411",
        "\ue851": "\u52a8",
        "\ue852": "\u5b9a",
        "\ue858": "\u4e2a",
        "\ue865": "\u5f53",
        "\ue870": "\u518d",
        "\ue882": "\u53ea",
        "\ue886": "\u8d70",
        "\ue88e": "\u60f3",
        "\ue8ab": "\u4ec0",
        "\ue8bf": "\u6b63",
        "\ue8c5": "\u7740",
        "\ue8e4": "\u597d",
        "\ue8e9": "\u4eec",
        "\ue8eb": "\u95ee",
        "\ue8fa": "\u5728",
        "\ue909": "\u6240",
        "\ue90c": "\u6253",
        "\ue92c": "\u679c",
        "\ue931": "\u5c31",
        "\ue946": "\u5374",
        "\ue953": "\u5168",
        "\ue95c": "\u76f8",
        "\ue97f": "\u7b2c",
        "\ue999": "\u5341",
        "\ue9a2": "\u4e86",
        "\ue9c3": "\u53ef",
        "\ue9d1": "\u95f4",
        "\ue9e3": "\u4f5c",
        "\ue9f0": "\u5fc3",
        "\ue9f1": "\u91cc",
        "\uea25": "\u4e09",
        "\uea32": "\u60c5",
        "\uea42": "\u95e8",
        "\uea4a": "\u6211",
        "\uea58": "\u4ece",
        "\uea73": "\u8001",
        "\uea8f": "\u9762",
        "\uea9c": "\u4e00",
        "\uea9d": "\u6709",
        "\ueaac": "\u4e0e",
        "\ueaae": "\u8bf4",
        "\ueab5": "\u6ca1",
        "\ueabc": "\u5979",
        "\ueaca": "\u540d",
        "\uead7": "\u7406",
        "\ueb1a": "\u56de",
        "\ueb2a": "\u6587",
        "\ueb2b": "\u7b49",
        "\ueb36": "\u4e66",
        "\ueb47": "\u897f",
        "\ueb5c": "\u601d",
        "\ueb5e": "\u4e3b",
        "\ueb76": "\u90a3",
        "\ueb7c": "\u513f",
        "\ueba2": "\u6b7b",
        "\ueba7": "\u6210",
        "\uebb9": "\u7b11",
        "\uebbf": "\u4f53",
        "\uebfd": "\u5e76",
        "\uec02": "\u8981",
        "\uec53": "\u800c",
        "\uec6f": "\u624b",
        "\uec7b": "\u4e5f",
        "\uec84": "\u9ad8",
        "\uec90": "\u5bb6",
        "\uec94": "\u7136",
        "\uecbb": "\u70b9",
        "\ueccb": "\u73b0",
        "\uecd9": "\u56db",
        "\uece1": "\u542c",
        "\uecfe": "\u5f97",
        "\ued02": "\u8005",
        "\ued08": "\u79cd",
        "\ued14": "\u5b9e",
        "\ued20": "\u548c",
        "\ued2e": "\u6700",
        "\ued31": "\u7531",
        "\ued32": "\u65f6",
        "\ued45": "\u793e",
        "\ued8e": "\u4e49",
        "\ued98": "\u5df1",
        "\ueda3": "\u53bb",
        "\uedb1": "\u8eab",
        "\uedb6": "\u592a",
        "\uedbb": "\u7269",
        "\uedde": "\u5173",
        "\uede1": "\u5927",
        "\uedec": "\u5916",
        "\uee14": "\u5f00",
        "\uee21": "\u4e8b",
        "\uee3f": "\u6559",
        "\uee46": "\u53e3",
        "\uee67": "\u529b",
        "\uee80": "\u591a",
        "\uee8f": "\u4e0a",
        "\uee98": "\u5c0f",
        "\uee9d": "\u767d",
        "\ueea3": "\u8fdb",
        "\ueed5": "\u65e5",
        "\ueeda": "\u6765",
        "\ueee1": "\u611f",
        "\uef3d": "\u4eba",
        "\uef45": "\u5df2",
        "\uef51": "\u5c06",
        "\uef59": "\u5b50",
        "\uef5a": "\u660e",
        "\uef5f": "\u4ee3",
        "\uef65": "\u56fd",
        "\uef66": "\u88ab",
        "\uef7e": "\u8fd8",
        "\uefd0": "\u5c11",
        "\uefd3": "\u6cd5",
        "\uefe6": "\u5973",
        "\ueff3": "\u4e0d",
        "\ueff7": "\u51fa",
    },
    jjwxcfont_000t5: {
        "\ue024": "\u628a",
        "\ue02d": "\u6c14",
        "\ue036": "\u5df2",
        "\ue04c": "\u540c",
        "\ue07d": "\u70b9",
        "\ue0b4": "\u767d",
        "\ue0b6": "\u540e",
        "\ue0db": "\u73b0",
        "\ue125": "\u6587",
        "\ue139": "\u597d",
        "\ue164": "\u7528",
        "\ue16c": "\u8bf4",
        "\ue170": "\u6ca1",
        "\ue184": "\u5176",
        "\ue190": "\u5411",
        "\ue1b2": "\u6700",
        "\ue1c5": "\u5c31",
        "\ue1ce": "\u4e5f",
        "\ue1fe": "\u5927",
        "\ue20e": "\u7ed9",
        "\ue23f": "\u5982",
        "\ue24a": "\u793e",
        "\ue27f": "\u4e8e",
        "\ue282": "\u8d77",
        "\ue296": "\u5973",
        "\ue2a5": "\u5916",
        "\ue2ba": "\u524d",
        "\ue2db": "\u89c1",
        "\ue2e5": "\u4f5c",
        "\ue2fa": "\u53bb",
        "\ue2fd": "\u6210",
        "\ue303": "\u51fa",
        "\ue30b": "\u79cd",
        "\ue31d": "\u542c",
        "\ue326": "\u662f",
        "\ue328": "\u5b50",
        "\ue331": "\u679c",
        "\ue336": "\u95e8",
        "\ue33b": "\u4e2a",
        "\ue34d": "\u4ece",
        "\ue35d": "\u4e0b",
        "\ue37b": "\u4e0a",
        "\ue3a6": "\u611f",
        "\ue3b2": "\u540d",
        "\ue3b4": "\u770b",
        "\ue3bd": "\u4e0e",
        "\ue3d5": "\u4e8c",
        "\ue3da": "\u4e09",
        "\ue40b": "\u5b9a",
        "\ue424": "\u601d",
        "\ue449": "\u5f00",
        "\ue479": "\u5fc3",
        "\ue47f": "\u4e2d",
        "\ue49a": "\u77e5",
        "\ue4d0": "\u51e0",
        "\ue4d3": "\u4f55",
        "\ue503": "\u6837",
        "\ue509": "\u624d",
        "\ue519": "\u610f",
        "\ue527": "\u4e49",
        "\ue544": "\u4e3b",
        "\ue55a": "\u60c5",
        "\ue562": "\u4f1a",
        "\ue577": "\u65e0",
        "\ue57b": "\u9762",
        "\ue57d": "\u5168",
        "\ue593": "\u76f8",
        "\ue59b": "\u4e8b",
        "\ue5af": "\u56db",
        "\ue5fc": "\u91cd",
        "\ue600": "\u4eba",
        "\ue60c": "\u6b63",
        "\ue616": "\u6765",
        "\ue632": "\u518d",
        "\ue635": "\u7136",
        "\ue64c": "\u4e24",
        "\ue66d": "\u65e5",
        "\ue686": "\u8eab",
        "\ue695": "\u5374",
        "\ue69b": "\u5c0f",
        "\ue69c": "\u5df1",
        "\ue6bb": "\u6240",
        "\ue6be": "\u5230",
        "\ue6d6": "\u5728",
        "\ue6e3": "\u884c",
        "\ue6f7": "\u60f3",
        "\ue6fd": "\u90a3",
        "\ue70b": "\u4e48",
        "\ue71e": "\u5f97",
        "\ue72e": "\u8001",
        "\ue742": "\u5b66",
        "\ue74a": "\u4f53",
        "\ue74e": "\u95f4",
        "\ue74f": "\u8fdb",
        "\ue759": "\u7b2c",
        "\ue766": "\u5c06",
        "\ue773": "\u592a",
        "\ue784": "\u8bdd",
        "\ue78b": "\u6211",
        "\ue790": "\u53d1",
        "\ue7a0": "\u5929",
        "\ue7a8": "\u522b",
        "\ue7bc": "\u5148",
        "\ue7cc": "\u4f46",
        "\ue7e1": "\u8fd8",
        "\ue7e8": "\u771f",
        "\ue7ec": "\u5341",
        "\ue7f8": "\u751f",
        "\ue80d": "\u5173",
        "\ue827": "\u5934",
        "\ue833": "\u800c",
        "\ue83a": "\u4e3a",
        "\ue893": "\u4ee3",
        "\ue89d": "\u660e",
        "\ue8c1": "\u56fd",
        "\ue8cc": "\u65b9",
        "\ue8d2": "\u4e4b",
        "\ue8d3": "\u5f53",
        "\ue8df": "\u5316",
        "\ue8e1": "\u56de",
        "\ue8e4": "\u6709",
        "\ue917": "\u5730",
        "\ue918": "\u7740",
        "\ue919": "\u81ea",
        "\ue930": "\u8bba",
        "\ue932": "\u6253",
        "\ue934": "\u6027",
        "\ue97f": "\u4f60",
        "\ue99f": "\u5e76",
        "\ue9a5": "\u53f2",
        "\ue9ba": "\u6b7b",
        "\ue9c4": "\u7406",
        "\ue9cc": "\u6559",
        "\ue9e9": "\u6b64",
        "\uea11": "\u5979",
        "\uea1f": "\u4ed6",
        "\uea20": "\u5f88",
        "\uea23": "\u5c11",
        "\uea3a": "\u4e00",
        "\uea6a": "\u8fd9",
        "\uea82": "\u591a",
        "\uea89": "\u624b",
        "\uea90": "\u5b9e",
        "\ueabc": "\u65f6",
        "\ueac4": "\u5e74",
        "\ueae2": "\u65b0",
        "\ueaff": "\u52a8",
        "\ueb20": "\u529b",
        "\ueb21": "\u58f0",
        "\ueb2d": "\u9053",
        "\ueb30": "\u5bf9",
        "\ueb59": "\u80fd",
        "\ueb6d": "\u91cc",
        "\ueb79": "\u4ec0",
        "\ueb96": "\u66f4",
        "\uebbd": "\u7684",
        "\uebf6": "\u516c",
        "\uec0e": "\u4e9b",
        "\uec0f": "\u9ad8",
        "\uec22": "\u53e3",
        "\uec3f": "\u53ea",
        "\uec42": "\u4f7f",
        "\uec43": "\u6cd5",
        "\uec5a": "\u4eec",
        "\uec63": "\u90fd",
        "\ueca7": "\u548c",
        "\uecdc": "\u4fbf",
        "\uecde": "\u7b11",
        "\ued39": "\u795e",
        "\ued44": "\u5199",
        "\ued5c": "\u897f",
        "\ued86": "\u88ab",
        "\ued91": "\u8005",
        "\ueda4": "\u8981",
        "\ueda7": "\u53ef",
        "\uedc2": "\u513f",
        "\uedc6": "\u4e86",
        "\uedcf": "\u7b49",
        "\uedda": "\u6c11",
        "\uee38": "\u957f",
        "\uee4a": "\u5206",
        "\uee63": "\u4ee5",
        "\uee6c": "\u672c",
        "\uee86": "\u7269",
        "\ueeab": "\u56e0",
        "\ueee2": "\u90e8",
        "\uef03": "\u4e66",
        "\uef1e": "\u7ecf",
        "\uef28": "\u7f8e",
        "\uef4b": "\u95ee",
        "\uef6f": "\u773c",
        "\uef76": "\u5bb6",
        "\uef84": "\u7279",
        "\uefa4": "\u5b83",
        "\uefba": "\u53c8",
        "\uefe4": "\u8d70",
        "\uefea": "\u8fc7",
        "\uefeb": "\u4e16",
        "\uefed": "\u4e0d",
        "\uefee": "\u7531",
    },
    jjwxcfont_000wi: {
        "\ue00f": "\u4f60",
        "\ue038": "\u4e2a",
        "\ue049": "\u522b",
        "\ue074": "\u65f6",
        "\ue079": "\u793e",
        "\ue07a": "\u58f0",
        "\ue08a": "\u6027",
        "\ue091": "\u7ecf",
        "\ue099": "\u767d",
        "\ue0c0": "\u6700",
        "\ue0cc": "\u516c",
        "\ue0ea": "\u53d1",
        "\ue110": "\u4f53",
        "\ue111": "\u53bb",
        "\ue118": "\u624b",
        "\ue13f": "\u518d",
        "\ue151": "\u52a8",
        "\ue155": "\u79cd",
        "\ue167": "\u4e48",
        "\ue1b2": "\u4e9b",
        "\ue1da": "\u65e0",
        "\ue1ea": "\u56fd",
        "\ue1ee": "\u6b64",
        "\ue20b": "\u4ec0",
        "\ue20d": "\u4fbf",
        "\ue214": "\u5173",
        "\ue23b": "\u662f",
        "\ue240": "\u77e5",
        "\ue241": "\u6253",
        "\ue276": "\u5230",
        "\ue29f": "\u8fd8",
        "\ue2ce": "\u53f2",
        "\ue2db": "\u4e86",
        "\ue2de": "\u7684",
        "\ue2e1": "\u4e3b",
        "\ue2e5": "\u524d",
        "\ue30d": "\u5728",
        "\ue327": "\u65b9",
        "\ue32e": "\u4e0b",
        "\ue348": "\u884c",
        "\ue354": "\u6c11",
        "\ue35f": "\u4f46",
        "\ue37d": "\u66f4",
        "\ue382": "\u9ad8",
        "\ue391": "\u5929",
        "\ue399": "\u5fc3",
        "\ue3a0": "\u5e76",
        "\ue3a9": "\u51fa",
        "\ue3d4": "\u4e66",
        "\ue3d5": "\u89c1",
        "\ue3dc": "\u4ee5",
        "\ue3ed": "\u4e2d",
        "\ue408": "\u5916",
        "\ue438": "\u7f8e",
        "\ue45f": "\u56db",
        "\ue462": "\u540d",
        "\ue472": "\u7136",
        "\ue47b": "\u610f",
        "\ue496": "\u5e74",
        "\ue4ac": "\u548c",
        "\ue4bb": "\u60c5",
        "\ue4c2": "\u76f8",
        "\ue4d0": "\u5341",
        "\ue4e9": "\u95f4",
        "\ue4ed": "\u800c",
        "\ue4ff": "\u770b",
        "\ue50d": "\u4f7f",
        "\ue50f": "\u540e",
        "\ue54d": "\u65b0",
        "\ue56d": "\u7b49",
        "\ue574": "\u95ee",
        "\ue57f": "\u53ef",
        "\ue5d6": "\u5c06",
        "\ue5ff": "\u7b11",
        "\ue637": "\u6211",
        "\ue64a": "\u81ea",
        "\ue651": "\u90e8",
        "\ue652": "\u8bdd",
        "\ue665": "\u8981",
        "\ue678": "\u672c",
        "\ue681": "\u542c",
        "\ue689": "\u4e16",
        "\ue6fa": "\u897f",
        "\ue72f": "\u4e5f",
        "\ue75a": "\u4ed6",
        "\ue76f": "\u4e0a",
        "\ue770": "\u4e8b",
        "\ue772": "\u4eec",
        "\ue782": "\u5f00",
        "\ue786": "\u7528",
        "\ue7a4": "\u56de",
        "\ue7b0": "\u9762",
        "\ue7bf": "\u5927",
        "\ue7cc": "\u679c",
        "\ue80d": "\u4e0e",
        "\ue83c": "\u8fdb",
        "\ue84f": "\u5c0f",
        "\ue854": "\u5982",
        "\ue861": "\u771f",
        "\ue873": "\u5f53",
        "\ue876": "\u5f97",
        "\ue881": "\u4ee3",
        "\ue883": "\u773c",
        "\ue888": "\u5411",
        "\ue892": "\u5b66",
        "\ue8a0": "\u8eab",
        "\ue8a4": "\u7ed9",
        "\ue8b5": "\u6559",
        "\ue8ba": "\u4e8c",
        "\ue8c9": "\u4e0d",
        "\ue8e5": "\u660e",
        "\ue8fc": "\u751f",
        "\ue90a": "\u529b",
        "\ue912": "\u7740",
        "\ue915": "\u5934",
        "\ue926": "\u8d70",
        "\ue946": "\u8bf4",
        "\ue95f": "\u601d",
        "\ue966": "\u7531",
        "\ue97e": "\u7279",
        "\ue982": "\u65e5",
        "\ue993": "\u4ece",
        "\ue999": "\u4e4b",
        "\ue9c5": "\u8fd9",
        "\ue9ca": "\u611f",
        "\ue9d7": "\u5bf9",
        "\ue9e1": "\u6ca1",
        "\ue9ea": "\u624d",
        "\ue9ec": "\u513f",
        "\uea0e": "\u5374",
        "\uea13": "\u88ab",
        "\uea2c": "\u8001",
        "\uea2f": "\u53e3",
        "\uea31": "\u6c14",
        "\uea61": "\u4e24",
        "\ueab0": "\u6cd5",
        "\ueae0": "\u5168",
        "\ueaea": "\u5c11",
        "\ueaee": "\u5206",
        "\ueb12": "\u95e8",
        "\ueb1a": "\u90a3",
        "\ueb1d": "\u795e",
        "\ueb1f": "\u6837",
        "\ueb21": "\u5c31",
        "\ueb2b": "\u7406",
        "\ueb3b": "\u6709",
        "\ueb4c": "\u8005",
        "\ueb60": "\u8d77",
        "\ueb75": "\u5b9a",
        "\ueba7": "\u6240",
        "\uebb6": "\u4e49",
        "\uebbb": "\u5df1",
        "\uebc5": "\u4e8e",
        "\uebcd": "\u4e09",
        "\uebdb": "\u5b9e",
        "\uec07": "\u6587",
        "\uec2b": "\u51e0",
        "\uec37": "\u540c",
        "\uec3c": "\u70b9",
        "\uec3d": "\u592a",
        "\uec59": "\u53c8",
        "\uec5d": "\u53ea",
        "\uec7a": "\u5973",
        "\uec7b": "\u8fc7",
        "\ueca7": "\u91cc",
        "\uecb4": "\u90fd",
        "\uecd5": "\u4f1a",
        "\ued18": "\u628a",
        "\ued2f": "\u5199",
        "\ued36": "\u4e3a",
        "\ued46": "\u80fd",
        "\ued4d": "\u5316",
        "\ued51": "\u60f3",
        "\ued6a": "\u5730",
        "\ued82": "\u5df2",
        "\ued95": "\u5b83",
        "\ueda5": "\u5b50",
        "\uedb2": "\u6b63",
        "\uedba": "\u6210",
        "\uedff": "\u5176",
        "\uee4e": "\u6b7b",
        "\uee60": "\u73b0",
        "\uee61": "\u5f88",
        "\uee7e": "\u957f",
        "\uee80": "\u5148",
        "\ueea7": "\u597d",
        "\ueef1": "\u5bb6",
        "\ueef9": "\u4f55",
        "\uef27": "\u4eba",
        "\uef51": "\u9053",
        "\uef54": "\u4e00",
        "\uef7d": "\u7b2c",
        "\uef88": "\u4f5c",
        "\uefa6": "\u591a",
        "\uefaf": "\u7269",
        "\uefd8": "\u56e0",
        "\uefdf": "\u6765",
        "\uefef": "\u5979",
        "\ueff1": "\u91cd",
        "\ueff8": "\u8bba",
    },
    jjwxcfont_000xw: {
        "\ue00d": "\u6211",
        "\ue031": "\u5206",
        "\ue032": "\u610f",
        "\ue035": "\u95ee",
        "\ue05b": "\u91cd",
        "\ue061": "\u8d70",
        "\ue076": "\u5b50",
        "\ue081": "\u65b9",
        "\ue086": "\u4ee5",
        "\ue099": "\u8fc7",
        "\ue0ae": "\u6210",
        "\ue0e7": "\u81ea",
        "\ue129": "\u5e74",
        "\ue12b": "\u540d",
        "\ue134": "\u4e24",
        "\ue13e": "\u5929",
        "\ue175": "\u8bba",
        "\ue178": "\u77e5",
        "\ue179": "\u6587",
        "\ue186": "\u5df2",
        "\ue194": "\u4ece",
        "\ue1b1": "\u7ecf",
        "\ue1b5": "\u624b",
        "\ue1ca": "\u53c8",
        "\ue1e3": "\u5b66",
        "\ue202": "\u7ed9",
        "\ue248": "\u660e",
        "\ue24d": "\u5f00",
        "\ue25c": "\u597d",
        "\ue25e": "\u5730",
        "\ue27b": "\u4e5f",
        "\ue296": "\u4ee3",
        "\ue29a": "\u65e0",
        "\ue2bd": "\u9762",
        "\ue2c5": "\u662f",
        "\ue2de": "\u6559",
        "\ue304": "\u5df1",
        "\ue30a": "\u957f",
        "\ue30d": "\u795e",
        "\ue31d": "\u548c",
        "\ue346": "\u56fd",
        "\ue348": "\u4e2a",
        "\ue363": "\u4e86",
        "\ue38e": "\u52a8",
        "\ue3a4": "\u4e09",
        "\ue3bb": "\u9ad8",
        "\ue3de": "\u5c0f",
        "\ue3e5": "\u5927",
        "\ue40c": "\u5e76",
        "\ue417": "\u7684",
        "\ue420": "\u4e0d",
        "\ue43d": "\u53d1",
        "\ue453": "\u524d",
        "\ue46c": "\u6b63",
        "\ue477": "\u529b",
        "\ue478": "\u6cd5",
        "\ue498": "\u5f88",
        "\ue49d": "\u8981",
        "\ue4a6": "\u679c",
        "\ue4c4": "\u5341",
        "\ue4c6": "\u5168",
        "\ue4d4": "\u4eec",
        "\ue4d7": "\u7b11",
        "\ue4f0": "\u6240",
        "\ue51e": "\u5c11",
        "\ue51f": "\u73b0",
        "\ue525": "\u7269",
        "\ue53d": "\u5934",
        "\ue548": "\u5316",
        "\ue557": "\u5411",
        "\ue577": "\u5973",
        "\ue5aa": "\u65f6",
        "\ue5fc": "\u88ab",
        "\ue607": "\u4f7f",
        "\ue613": "\u5173",
        "\ue635": "\u6b64",
        "\ue641": "\u95f4",
        "\ue65f": "\u800c",
        "\ue66b": "\u53bb",
        "\ue678": "\u60f3",
        "\ue68d": "\u4f60",
        "\ue69d": "\u5148",
        "\ue6aa": "\u8fdb",
        "\ue6e1": "\u7531",
        "\ue760": "\u70b9",
        "\ue793": "\u5230",
        "\ue7b0": "\u624d",
        "\ue7d7": "\u53ea",
        "\ue7e2": "\u65b0",
        "\ue7ef": "\u770b",
        "\ue7f2": "\u601d",
        "\ue7f3": "\u751f",
        "\ue7f5": "\u53ef",
        "\ue7fc": "\u6253",
        "\ue825": "\u4e0b",
        "\ue82a": "\u518d",
        "\ue82b": "\u90e8",
        "\ue82d": "\u5b9e",
        "\ue832": "\u4e3a",
        "\ue849": "\u8fd8",
        "\ue85f": "\u897f",
        "\ue86f": "\u5728",
        "\ue870": "\u6027",
        "\ue881": "\u6ca1",
        "\ue89a": "\u7528",
        "\ue8ad": "\u6c11",
        "\ue8b3": "\u4ed6",
        "\ue8ef": "\u8fd9",
        "\ue90e": "\u90fd",
        "\ue90f": "\u5f97",
        "\ue91d": "\u4e48",
        "\ue926": "\u7279",
        "\ue92d": "\u9053",
        "\ue931": "\u76f8",
        "\ue941": "\u8bf4",
        "\ue950": "\u773c",
        "\ue992": "\u5c31",
        "\ue993": "\u8eab",
        "\ue9d9": "\u4f53",
        "\uea03": "\u5b83",
        "\uea2c": "\u60c5",
        "\uea42": "\u5b9a",
        "\uea4b": "\u4e3b",
        "\uea54": "\u89c1",
        "\uea5c": "\u4e0e",
        "\uea5e": "\u4fbf",
        "\uea84": "\u80fd",
        "\uea88": "\u7f8e",
        "\uea89": "\u56e0",
        "\ueaaa": "\u56db",
        "\ueab0": "\u884c",
        "\ueab4": "\u4e00",
        "\ueabf": "\u7406",
        "\ueae0": "\u4e49",
        "\ueaf2": "\u591a",
        "\ueb20": "\u6700",
        "\ueb43": "\u8bdd",
        "\ueb61": "\u540c",
        "\ueb8a": "\u5982",
        "\ueb91": "\u4e9b",
        "\ueb93": "\u516c",
        "\ueb99": "\u4e0a",
        "\ueba6": "\u4f55",
        "\uebc7": "\u7136",
        "\uebdc": "\u4e16",
        "\uebf4": "\u6c14",
        "\uebfe": "\u5c06",
        "\uec09": "\u8005",
        "\uec10": "\u4e2d",
        "\uec1b": "\u66f4",
        "\uec49": "\u8001",
        "\uec4d": "\u4f46",
        "\uec52": "\u5374",
        "\uec55": "\u513f",
        "\uec73": "\u5176",
        "\ueca3": "\u5fc3",
        "\uecb5": "\u540e",
        "\uecc5": "\u5979",
        "\uecd2": "\u7740",
        "\uecfc": "\u4f5c",
        "\uecfd": "\u51e0",
        "\uecfe": "\u4e8b",
        "\ued1c": "\u53e3",
        "\ued1e": "\u4e66",
        "\ued2b": "\u7b2c",
        "\ued3f": "\u4e8e",
        "\ued45": "\u6b7b",
        "\ued93": "\u6709",
        "\uedbe": "\u56de",
        "\ueddf": "\u793e",
        "\uede1": "\u91cc",
        "\uedf0": "\u592a",
        "\uee25": "\u5916",
        "\uee41": "\u628a",
        "\uee43": "\u771f",
        "\uee45": "\u5f53",
        "\uee62": "\u672c",
        "\uee6b": "\u79cd",
        "\uee7b": "\u767d",
        "\uee7c": "\u611f",
        "\uee8c": "\u4f1a",
        "\uee91": "\u522b",
        "\ueebc": "\u51fa",
        "\ueee2": "\u4e8c",
        "\ueee5": "\u65e5",
        "\ueeea": "\u5bf9",
        "\ueeef": "\u58f0",
        "\ueef6": "\u53f2",
        "\ueeff": "\u4ec0",
        "\uef31": "\u5bb6",
        "\uef36": "\u4e4b",
        "\uef38": "\u90a3",
        "\uef57": "\u4eba",
        "\uef79": "\u95e8",
        "\uef92": "\u6837",
        "\uef97": "\u6765",
        "\uefc0": "\u8d77",
        "\uefc3": "\u542c",
        "\ueff0": "\u7b49",
        "\ueffa": "\u5199",
    },
    jjwxcfont_0012a: {
        "\ue02e": "\u7531",
        "\ue050": "\u8bdd",
        "\ue05d": "\u4ece",
        "\ue0a0": "\u90e8",
        "\ue0a3": "\u4ec0",
        "\ue0a6": "\u6837",
        "\ue0bb": "\u6765",
        "\ue0cc": "\u4fbf",
        "\ue0d4": "\u53e3",
        "\ue105": "\u6b64",
        "\ue14d": "\u90fd",
        "\ue158": "\u800c",
        "\ue16d": "\u80fd",
        "\ue18a": "\u8d70",
        "\ue1c4": "\u4e24",
        "\ue1c5": "\u5c0f",
        "\ue1c7": "\u5f00",
        "\ue1c9": "\u7b11",
        "\ue218": "\u624b",
        "\ue230": "\u7279",
        "\ue23c": "\u4e09",
        "\ue254": "\u611f",
        "\ue268": "\u4e0a",
        "\ue281": "\u5982",
        "\ue29c": "\u5934",
        "\ue2e7": "\u751f",
        "\ue2e9": "\u66f4",
        "\ue305": "\u53d1",
        "\ue320": "\u7740",
        "\ue32c": "\u5b9a",
        "\ue335": "\u957f",
        "\ue340": "\u8005",
        "\ue349": "\u897f",
        "\ue364": "\u65b0",
        "\ue38b": "\u60c5",
        "\ue3ad": "\u4e0d",
        "\ue3b8": "\u4e0e",
        "\ue3ba": "\u4f46",
        "\ue3cd": "\u628a",
        "\ue3df": "\u91cd",
        "\ue3ee": "\u70b9",
        "\ue3ef": "\u4e0b",
        "\ue427": "\u4f55",
        "\ue44c": "\u610f",
        "\ue452": "\u522b",
        "\ue469": "\u516c",
        "\ue481": "\u4f7f",
        "\ue499": "\u8fdb",
        "\ue49a": "\u5f97",
        "\ue49c": "\u5df1",
        "\ue4d4": "\u6027",
        "\ue4da": "\u6253",
        "\ue4de": "\u7ecf",
        "\ue4e3": "\u8bba",
        "\ue4f5": "\u5148",
        "\ue4fb": "\u793e",
        "\ue503": "\u518d",
        "\ue50a": "\u6211",
        "\ue512": "\u5929",
        "\ue513": "\u6b63",
        "\ue52b": "\u89c1",
        "\ue53f": "\u540d",
        "\ue546": "\u4e8b",
        "\ue548": "\u524d",
        "\ue54e": "\u7b2c",
        "\ue566": "\u9ad8",
        "\ue56d": "\u8fc7",
        "\ue584": "\u4e2a",
        "\ue5b7": "\u884c",
        "\ue5ba": "\u6240",
        "\ue5de": "\u5b9e",
        "\ue5fe": "\u7269",
        "\ue621": "\u9053",
        "\ue627": "\u7f8e",
        "\ue62a": "\u6b7b",
        "\ue630": "\u4e48",
        "\ue638": "\u773c",
        "\ue64b": "\u5b66",
        "\ue65a": "\u672c",
        "\ue662": "\u65e5",
        "\ue665": "\u767d",
        "\ue672": "\u91cc",
        "\ue67b": "\u8001",
        "\ue681": "\u5c06",
        "\ue683": "\u56db",
        "\ue6ba": "\u65e0",
        "\ue6c0": "\u8eab",
        "\ue6c5": "\u9762",
        "\ue6cb": "\u5173",
        "\ue6d4": "\u679c",
        "\ue6dd": "\u53bb",
        "\ue6e9": "\u7528",
        "\ue6f1": "\u58f0",
        "\ue720": "\u4e2d",
        "\ue737": "\u4f5c",
        "\ue739": "\u4f53",
        "\ue755": "\u540e",
        "\ue762": "\u5f88",
        "\ue77c": "\u5df2",
        "\ue785": "\u6587",
        "\ue788": "\u5c11",
        "\ue7d0": "\u6210",
        "\ue801": "\u8fd8",
        "\ue825": "\u90a3",
        "\ue82b": "\u7ed9",
        "\ue844": "\u4e8c",
        "\ue856": "\u4e86",
        "\ue869": "\u5341",
        "\ue8b1": "\u81ea",
        "\ue8bc": "\u4ed6",
        "\ue8cc": "\u5176",
        "\ue8e9": "\u4e8e",
        "\ue90d": "\u8d77",
        "\ue917": "\u7406",
        "\ue927": "\u5973",
        "\ue929": "\u51e0",
        "\ue937": "\u4e00",
        "\ue953": "\u591a",
        "\ue96b": "\u79cd",
        "\ue980": "\u5730",
        "\ue9a2": "\u6c14",
        "\ue9ba": "\u53ea",
        "\ue9c4": "\u4ee5",
        "\ue9d7": "\u5927",
        "\ue9e3": "\u4f60",
        "\ue9ff": "\u771f",
        "\uea1b": "\u5411",
        "\uea29": "\u6709",
        "\uea32": "\u8bf4",
        "\uea3c": "\u4e3a",
        "\uea44": "\u6559",
        "\uea81": "\u4e3b",
        "\uea99": "\u52a8",
        "\uea9e": "\u4e66",
        "\ueaa0": "\u4eec",
        "\ueabc": "\u4e16",
        "\ueb0f": "\u95f4",
        "\ueb45": "\u5b50",
        "\ueb72": "\u5b83",
        "\ueb7b": "\u5e74",
        "\ueb89": "\u6cd5",
        "\ueb8a": "\u5fc3",
        "\ueb94": "\u592a",
        "\ueb98": "\u660e",
        "\uebab": "\u4e5f",
        "\uebba": "\u5979",
        "\uebde": "\u5374",
        "\uebea": "\u5bf9",
        "\uec05": "\u56fd",
        "\uec0c": "\u795e",
        "\uec10": "\u6700",
        "\uec37": "\u5c31",
        "\uec3b": "\u5916",
        "\uec3e": "\u8981",
        "\uec4c": "\u548c",
        "\uec57": "\u53f2",
        "\uec59": "\u95ee",
        "\uec64": "\u662f",
        "\uec77": "\u770b",
        "\ueca9": "\u73b0",
        "\uecba": "\u5bb6",
        "\uecce": "\u53c8",
        "\uece6": "\u513f",
        "\ued02": "\u7684",
        "\ued1a": "\u65f6",
        "\ued1c": "\u5206",
        "\ued4e": "\u5e76",
        "\ueda1": "\u5168",
        "\uedb5": "\u529b",
        "\uedcb": "\u56e0",
        "\uedda": "\u56de",
        "\uedeb": "\u5728",
        "\uee0f": "\u4eba",
        "\uee16": "\u4ee3",
        "\uee32": "\u77e5",
        "\uee4a": "\u5316",
        "\uee55": "\u51fa",
        "\uee5a": "\u95e8",
        "\uee6f": "\u53ef",
        "\uee87": "\u76f8",
        "\uee8e": "\u5f53",
        "\ueebf": "\u540c",
        "\ueec6": "\u6ca1",
        "\ueecb": "\u4e4b",
        "\ueeeb": "\u601d",
        "\uef0a": "\u7b49",
        "\uef12": "\u624d",
        "\uef24": "\u88ab",
        "\uef27": "\u542c",
        "\uef34": "\u4e49",
        "\uef4a": "\u8fd9",
        "\uef4e": "\u6c11",
        "\uef66": "\u4f1a",
        "\uef6d": "\u597d",
        "\uef84": "\u7136",
        "\uef9c": "\u5230",
        "\uefa7": "\u5199",
        "\uefae": "\u60f3",
        "\uefbe": "\u4e9b",
        "\ueffe": "\u65b9",
    },
    jjwxcfont_00147: {
        "\ue018": "\u7528",
        "\ue019": "\u5c11",
        "\ue028": "\u4eec",
        "\ue02d": "\u8bf4",
        "\ue04a": "\u7406",
        "\ue04c": "\u73b0",
        "\ue04d": "\u6027",
        "\ue073": "\u610f",
        "\ue078": "\u540d",
        "\ue0a7": "\u773c",
        "\ue0a9": "\u601d",
        "\ue0bc": "\u5173",
        "\ue0f7": "\u628a",
        "\ue0fa": "\u767d",
        "\ue118": "\u660e",
        "\ue12d": "\u5982",
        "\ue13b": "\u4f60",
        "\ue177": "\u6b64",
        "\ue184": "\u5148",
        "\ue193": "\u4e0e",
        "\ue195": "\u95ee",
        "\ue19d": "\u79cd",
        "\ue1a3": "\u884c",
        "\ue1a5": "\u6b7b",
        "\ue1a9": "\u4e16",
        "\ue1c9": "\u70b9",
        "\ue1cc": "\u5927",
        "\ue1da": "\u5973",
        "\ue1e4": "\u53bb",
        "\ue1fb": "\u540e",
        "\ue201": "\u751f",
        "\ue210": "\u524d",
        "\ue214": "\u4e0d",
        "\ue229": "\u66f4",
        "\ue265": "\u793e",
        "\ue269": "\u5c0f",
        "\ue281": "\u624d",
        "\ue28c": "\u5b66",
        "\ue292": "\u5730",
        "\ue2aa": "\u51e0",
        "\ue2cc": "\u4e8b",
        "\ue2da": "\u5934",
        "\ue2db": "\u6765",
        "\ue2de": "\u91cc",
        "\ue2f2": "\u5b83",
        "\ue2f3": "\u91cd",
        "\ue2f9": "\u795e",
        "\ue30a": "\u5979",
        "\ue30e": "\u5c31",
        "\ue314": "\u7136",
        "\ue34b": "\u522b",
        "\ue361": "\u4e48",
        "\ue36e": "\u8bba",
        "\ue387": "\u591a",
        "\ue3af": "\u56e0",
        "\ue3f5": "\u592a",
        "\ue40c": "\u513f",
        "\ue422": "\u4f7f",
        "\ue431": "\u8d70",
        "\ue457": "\u65b0",
        "\ue465": "\u6210",
        "\ue46e": "\u8001",
        "\ue473": "\u6cd5",
        "\ue47c": "\u542c",
        "\ue480": "\u53c8",
        "\ue496": "\u5f00",
        "\ue4a2": "\u518d",
        "\ue4b9": "\u4ec0",
        "\ue4bc": "\u5206",
        "\ue4db": "\u4e00",
        "\ue4e5": "\u8fd8",
        "\ue4fa": "\u5f53",
        "\ue4fb": "\u5fc3",
        "\ue506": "\u5341",
        "\ue50c": "\u4ee3",
        "\ue50e": "\u5df2",
        "\ue53e": "\u5b9a",
        "\ue543": "\u548c",
        "\ue546": "\u53ea",
        "\ue574": "\u897f",
        "\ue586": "\u65e0",
        "\ue5a0": "\u60c5",
        "\ue5a5": "\u77e5",
        "\ue5c4": "\u8005",
        "\ue5c9": "\u8981",
        "\ue609": "\u4e4b",
        "\ue61a": "\u5b9e",
        "\ue621": "\u53ef",
        "\ue62c": "\u597d",
        "\ue62d": "\u4e24",
        "\ue636": "\u5374",
        "\ue63c": "\u770b",
        "\ue644": "\u4fbf",
        "\ue67e": "\u7684",
        "\ue6b1": "\u7f8e",
        "\ue6c8": "\u6ca1",
        "\ue6ed": "\u5c06",
        "\ue706": "\u60f3",
        "\ue70b": "\u5316",
        "\ue731": "\u5f88",
        "\ue73b": "\u80fd",
        "\ue74e": "\u611f",
        "\ue751": "\u4f5c",
        "\ue76a": "\u53f2",
        "\ue775": "\u65f6",
        "\ue7b9": "\u4f46",
        "\ue7bc": "\u4e2d",
        "\ue7f2": "\u90fd",
        "\ue826": "\u5e74",
        "\ue82b": "\u6c11",
        "\ue82d": "\u5199",
        "\ue844": "\u624b",
        "\ue84c": "\u65e5",
        "\ue84d": "\u5728",
        "\ue854": "\u53d1",
        "\ue894": "\u9053",
        "\ue8a5": "\u516c",
        "\ue8cc": "\u5df1",
        "\ue8dd": "\u800c",
        "\ue8e8": "\u4e0a",
        "\ue8ee": "\u56de",
        "\ue922": "\u4f1a",
        "\ue947": "\u8eab",
        "\ue949": "\u4ed6",
        "\ue958": "\u7ecf",
        "\ue95c": "\u56fd",
        "\ue97c": "\u90e8",
        "\ue986": "\u53e3",
        "\ue98e": "\u4ee5",
        "\ue9fd": "\u58f0",
        "\uea06": "\u7b49",
        "\uea21": "\u4e86",
        "\uea4a": "\u88ab",
        "\uea50": "\u4e8c",
        "\uea5a": "\u4e3b",
        "\uea61": "\u5b50",
        "\uea80": "\u4e0b",
        "\uea9d": "\u9ad8",
        "\ueab4": "\u6587",
        "\ueab5": "\u81ea",
        "\ueac4": "\u6709",
        "\ueae4": "\u5168",
        "\ueae9": "\u529b",
        "\ueaf0": "\u89c1",
        "\ueb02": "\u7b2c",
        "\ueb18": "\u5bf9",
        "\ueb26": "\u51fa",
        "\ueb3b": "\u4eba",
        "\ueb71": "\u8fdb",
        "\ueb79": "\u5e76",
        "\ueb7f": "\u771f",
        "\ueb8a": "\u6211",
        "\ueb8d": "\u4e8e",
        "\ueb94": "\u8bdd",
        "\ueba0": "\u9762",
        "\uec24": "\u95e8",
        "\uec34": "\u6559",
        "\uec71": "\u6c14",
        "\uec78": "\u4ece",
        "\uec7c": "\u4e66",
        "\uec86": "\u4e2a",
        "\uecac": "\u7531",
        "\uecbf": "\u4e9b",
        "\uecca": "\u7279",
        "\uecd2": "\u6253",
        "\ueced": "\u6837",
        "\ued14": "\u672c",
        "\ued1e": "\u65b9",
        "\ued28": "\u7b11",
        "\ued32": "\u4e49",
        "\ued3d": "\u4e3a",
        "\ued40": "\u95f4",
        "\ued53": "\u957f",
        "\ued6c": "\u662f",
        "\uedae": "\u7269",
        "\uedc5": "\u6700",
        "\uede1": "\u5411",
        "\uee27": "\u5176",
        "\uee48": "\u8fc7",
        "\uee4c": "\u4f55",
        "\uee4f": "\u5bb6",
        "\uee59": "\u52a8",
        "\uee73": "\u4f53",
        "\uee93": "\u4e09",
        "\uee98": "\u7740",
        "\ueec2": "\u540c",
        "\ueedd": "\u5f97",
        "\ueeeb": "\u679c",
        "\uef0a": "\u90a3",
        "\uef25": "\u6b63",
        "\uef2d": "\u5230",
        "\uef50": "\u4e5f",
        "\uef66": "\u56db",
        "\uef68": "\u5929",
        "\uef72": "\u7ed9",
        "\uef85": "\u8d77",
        "\uefa0": "\u5916",
        "\uefc0": "\u76f8",
        "\uefdc": "\u8fd9",
        "\uefe9": "\u6240",
    },
    jjwxcfont_0015q: {
        "\ue007": "\u5df2",
        "\ue02b": "\u66f4",
        "\ue07d": "\u6cd5",
        "\ue088": "\u90e8",
        "\ue0cf": "\u95ee",
        "\ue0e1": "\u5c06",
        "\ue0eb": "\u4f46",
        "\ue0fa": "\u65b0",
        "\ue100": "\u4ece",
        "\ue123": "\u6c14",
        "\ue139": "\u65e5",
        "\ue15b": "\u5168",
        "\ue165": "\u5728",
        "\ue170": "\u81ea",
        "\ue178": "\u5fc3",
        "\ue17c": "\u5c11",
        "\ue1a3": "\u516c",
        "\ue1a4": "\u6700",
        "\ue1b4": "\u9762",
        "\ue1da": "\u4e4b",
        "\ue1dc": "\u91cc",
        "\ue1e3": "\u4e0b",
        "\ue1e5": "\u5b83",
        "\ue1f8": "\u5934",
        "\ue216": "\u884c",
        "\ue225": "\u6837",
        "\ue244": "\u90a3",
        "\ue272": "\u8eab",
        "\ue274": "\u4e09",
        "\ue288": "\u7406",
        "\ue28b": "\u4e00",
        "\ue29d": "\u53d1",
        "\ue2b6": "\u4e2a",
        "\ue2ca": "\u773c",
        "\ue2d7": "\u7740",
        "\ue2e6": "\u7269",
        "\ue301": "\u7f8e",
        "\ue310": "\u7b49",
        "\ue313": "\u5316",
        "\ue33c": "\u88ab",
        "\ue33f": "\u8fc7",
        "\ue344": "\u5176",
        "\ue359": "\u65b9",
        "\ue3af": "\u8fd9",
        "\ue3b0": "\u597d",
        "\ue3c9": "\u79cd",
        "\ue3d1": "\u7b2c",
        "\ue3db": "\u4f60",
        "\ue3ff": "\u95f4",
        "\ue42a": "\u6765",
        "\ue43b": "\u70b9",
        "\ue447": "\u65f6",
        "\ue461": "\u6b7b",
        "\ue466": "\u5b9a",
        "\ue477": "\u4e86",
        "\ue47c": "\u5173",
        "\ue497": "\u540e",
        "\ue4a1": "\u5df1",
        "\ue4c9": "\u4e5f",
        "\ue509": "\u8d70",
        "\ue522": "\u610f",
        "\ue546": "\u4e8c",
        "\ue555": "\u4ed6",
        "\ue55e": "\u522b",
        "\ue569": "\u8fd8",
        "\ue575": "\u8bba",
        "\ue577": "\u7528",
        "\ue582": "\u5b50",
        "\ue5a2": "\u5374",
        "\ue5a6": "\u8d77",
        "\ue5b5": "\u4e0e",
        "\ue5bc": "\u524d",
        "\ue5c0": "\u628a",
        "\ue634": "\u51e0",
        "\ue638": "\u542c",
        "\ue639": "\u5c31",
        "\ue63b": "\u4e3b",
        "\ue648": "\u513f",
        "\ue66e": "\u6240",
        "\ue66f": "\u4e3a",
        "\ue670": "\u5411",
        "\ue67e": "\u4eec",
        "\ue685": "\u5f00",
        "\ue686": "\u897f",
        "\ue68e": "\u5982",
        "\ue6b0": "\u4eba",
        "\ue6c7": "\u56fd",
        "\ue705": "\u7136",
        "\ue709": "\u6559",
        "\ue725": "\u4e8b",
        "\ue759": "\u52a8",
        "\ue768": "\u6253",
        "\ue777": "\u8981",
        "\ue7a4": "\u5148",
        "\ue7b3": "\u6210",
        "\ue7bc": "\u6587",
        "\ue7c1": "\u8bdd",
        "\ue7ce": "\u8bf4",
        "\ue7dd": "\u4f5c",
        "\ue7e9": "\u95e8",
        "\ue7ec": "\u4e24",
        "\ue810": "\u56e0",
        "\ue81b": "\u5f97",
        "\ue825": "\u76f8",
        "\ue846": "\u8001",
        "\ue86b": "\u5e76",
        "\ue86f": "\u58f0",
        "\ue871": "\u5206",
        "\ue87f": "\u53ef",
        "\ue89c": "\u767d",
        "\ue89d": "\u5979",
        "\ue8a9": "\u660e",
        "\ue8c8": "\u6709",
        "\ue8cc": "\u8fdb",
        "\ue8d5": "\u53f2",
        "\ue8df": "\u540c",
        "\ue8f4": "\u7b11",
        "\ue90b": "\u6ca1",
        "\ue90e": "\u5b9e",
        "\ue914": "\u51fa",
        "\ue920": "\u5bf9",
        "\ue93e": "\u518d",
        "\ue958": "\u800c",
        "\ue975": "\u60f3",
        "\ue987": "\u793e",
        "\ue99a": "\u53c8",
        "\ue9ae": "\u662f",
        "\ue9d3": "\u5199",
        "\ue9d4": "\u5916",
        "\ue9e0": "\u6211",
        "\ue9e1": "\u4f1a",
        "\ue9e7": "\u73b0",
        "\uea09": "\u60c5",
        "\uea23": "\u53e3",
        "\uea30": "\u6b64",
        "\uea64": "\u4ee3",
        "\uea6b": "\u5230",
        "\uea7d": "\u7684",
        "\uea9a": "\u80fd",
        "\ueab9": "\u529b",
        "\ueabf": "\u957f",
        "\ueae7": "\u7ecf",
        "\ueaf3": "\u795e",
        "\ueb72": "\u77e5",
        "\ueb8c": "\u5e74",
        "\ueb93": "\u53bb",
        "\ueba5": "\u771f",
        "\uebd0": "\u4f53",
        "\uebea": "\u4e0a",
        "\uec05": "\u4e0d",
        "\uec4c": "\u624b",
        "\uec50": "\u5730",
        "\uec57": "\u4f7f",
        "\uec5e": "\u9ad8",
        "\uec7d": "\u5b66",
        "\uec94": "\u90fd",
        "\ueca1": "\u6c11",
        "\ueca3": "\u5929",
        "\uecad": "\u7279",
        "\uecbf": "\u592a",
        "\uecce": "\u4e66",
        "\ued10": "\u7ed9",
        "\ued1e": "\u9053",
        "\ued23": "\u5927",
        "\ued43": "\u540d",
        "\ued4a": "\u6b63",
        "\ued62": "\u5341",
        "\ued65": "\u56de",
        "\ued66": "\u4f55",
        "\ued8e": "\u91cd",
        "\ued94": "\u8005",
        "\ued9f": "\u4e2d",
        "\ueda5": "\u611f",
        "\uedb0": "\u5f53",
        "\uedb9": "\u548c",
        "\ueded": "\u679c",
        "\uedee": "\u624d",
        "\uee1f": "\u56db",
        "\uee65": "\u65e0",
        "\ueea3": "\u53ea",
        "\ueeb1": "\u751f",
        "\ueeba": "\u4fbf",
        "\ueece": "\u4ec0",
        "\ueed3": "\u4e48",
        "\ueedc": "\u672c",
        "\ueee5": "\u5f88",
        "\ueee7": "\u89c1",
        "\ueeeb": "\u7531",
        "\ueef7": "\u4ee5",
        "\ueeff": "\u4e49",
        "\uef13": "\u591a",
        "\uef48": "\u4e8e",
        "\uef4a": "\u5c0f",
        "\uef80": "\u6027",
        "\uef82": "\u4e9b",
        "\uef89": "\u770b",
        "\uefb1": "\u5973",
        "\uefe3": "\u601d",
        "\uefec": "\u5bb6",
        "\uefef": "\u4e16",
    },
    jjwxcfont_001ac: {
        "\uec27": "\u4e0d",
        "\ue9f2": "\u5b83",
        "\ue10e": "\u513f",
        "\ue499": "\u4e86",
        "\ue547": "\u5728",
        "\ueda3": "\u95e8",
        "\ue7ef": "\u601d",
        "\ue8ab": "\u89c1",
        "\ue275": "\u8005",
        "\ued0d": "\u4eec",
        "\ue826": "\u65f6",
        "\ue336": "\u8fc7",
        "\uebcb": "\u4ee5",
        "\ue713": "\u5168",
        "\ue273": "\u8d77",
        "\ue478": "\u60f3",
        "\ue9c4": "\u5c06",
        "\ue6c4": "\u53bb",
        "\ue9b6": "\u540c",
        "\ue34b": "\u73b0",
        "\uec66": "\u53f2",
        "\ue31e": "\u4e16",
        "\ue196": "\u4e3b",
        "\ue97b": "\u77e5",
        "\ue55d": "\u79cd",
        "\ue535": "\u4f55",
        "\ue879": "\u9053",
        "\ue2ce": "\u5b9e",
        "\ue813": "\u4e5f",
        "\uefaa": "\u7269",
        "\uebb1": "\u5b9a",
        "\ue55e": "\u800c",
        "\ue130": "\u76f8",
        "\ue370": "\u597d",
        "\ue56e": "\u4e8e",
        "\ue34f": "\u624d",
        "\ue7d7": "\u5bf9",
        "\ue68a": "\u5176",
        "\uece9": "\u4e2d",
        "\ueb07": "\u4e8b",
        "\uecf7": "\u4ece",
        "\ueae8": "\u4eba",
        "\uefa2": "\u70b9",
        "\ue6d5": "\u5c31",
        "\uea88": "\u767d",
        "\ue933": "\u7406",
        "\ue139": "\u6210",
        "\uedf8": "\u4e24",
        "\ue0bd": "\u95f4",
        "\ue58a": "\u548c",
        "\ue6fe": "\u80fd",
        "\ue7bc": "\u4e3a",
        "\ue891": "\u7f8e",
        "\ue9d1": "\u5f88",
        "\ue4a3": "\u6b7b",
        "\ue923": "\u751f",
        "\ue064": "\u95ee",
        "\uebf3": "\u4e8c",
        "\uee1e": "\u65e0",
        "\ue1a0": "\u5f53",
        "\ue878": "\u524d",
        "\uee31": "\u56de",
        "\ue3d5": "\u897f",
        "\ue4c4": "\u4e09",
        "\uefeb": "\u6211",
        "\ue392": "\u8981",
        "\ue76b": "\u5374",
        "\uefea": "\u4e66",
        "\ue8bc": "\u771f",
        "\ueae1": "\u516c",
        "\ue6e3": "\u53ea",
        "\ue1ad": "\u4e9b",
        "\uea87": "\u5e74",
        "\ue4fa": "\u522b",
        "\ueeac": "\u60c5",
        "\ue98a": "\u56fd",
        "\ue2e4": "\u8bf4",
        "\ue586": "\u5929",
        "\ue5b8": "\u4e0e",
        "\ue454": "\u65e5",
        "\ueb5a": "\u8fd8",
        "\ue79c": "\u5fc3",
        "\ue0a2": "\u610f",
        "\ueb75": "\u957f",
        "\ue3b7": "\u660e",
        "\ueef4": "\u5927",
        "\ueaa4": "\u6559",
        "\ue30a": "\u672c",
        "\ue7dd": "\u7528",
        "\ue82f": "\u4e00",
        "\ue088": "\u4f1a",
        "\uea80": "\u624b",
        "\uea22": "\u81ea",
        "\ue539": "\u51e0",
        "\uebe0": "\u7136",
        "\uef14": "\u5982",
        "\ueb65": "\u4ec0",
        "\ue51e": "\u5e76",
        "\ue8c6": "\u5979",
        "\uee7e": "\u7279",
        "\ue87e": "\u591a",
        "\ueda9": "\u592a",
        "\ue91c": "\u66f4",
        "\ue876": "\u56db",
        "\ue9ed": "\u5230",
        "\uefb2": "\u5b50",
        "\uea5a": "\u6b63",
        "\uec2b": "\u53e3",
        "\ue98d": "\u773c",
        "\ue42f": "\u5148",
        "\ue3cd": "\u6c11",
        "\ue7bf": "\u4f5c",
        "\ue06f": "\u6837",
        "\ue76a": "\u5934",
        "\uea6f": "\u6253",
        "\ue49c": "\u91cd",
        "\uedf2": "\u90e8",
        "\uedf0": "\u6027",
        "\ue1a2": "\u90fd",
        "\ue299": "\u529b",
        "\ue0e0": "\u5bb6",
        "\uee8d": "\u7531",
        "\uefa4": "\u8001",
        "\ue8cd": "\u9762",
        "\ue6af": "\u542c",
        "\ue1c7": "\u5199",
        "\ued35": "\u4e49",
        "\ued9b": "\u5316",
        "\ueb4f": "\u53c8",
        "\ue054": "\u7b11",
        "\ue16a": "\u884c",
        "\ue6d2": "\u53ef",
        "\ue796": "\u8eab",
        "\ue852": "\u679c",
        "\ue966": "\u5206",
        "\uedbb": "\u6240",
        "\uea4e": "\u4e4b",
        "\ue54d": "\u770b",
        "\ueb7f": "\u540e",
        "\ue24d": "\u6c14",
        "\ue32a": "\u5916",
        "\uefa0": "\u6cd5",
        "\ue41d": "\u4fbf",
        "\ue49a": "\u6709",
        "\ue88d": "\u6700",
        "\ue070": "\u628a",
        "\ue58b": "\u5f00",
        "\ueef1": "\u6587",
        "\uecca": "\u8fd9",
        "\ue631": "\u5730",
        "\uebe7": "\u8fdb",
        "\ue106": "\u8bdd",
        "\ue5cf": "\u662f",
        "\ue350": "\u5c0f",
        "\ued78": "\u7740",
        "\ue988": "\u53d1",
        "\ue56f": "\u7ed9",
        "\uef6d": "\u5173",
        "\ueb9e": "\u611f",
        "\uebc9": "\u5973",
        "\ue4ee": "\u4e2a",
        "\ue6c0": "\u88ab",
        "\uead5": "\u8d70",
        "\ue0c8": "\u4e48",
        "\ue953": "\u91cc",
        "\uef81": "\u6ca1",
        "\ue71e": "\u4e0a",
        "\ue7db": "\u90a3",
        "\ue959": "\u4ee3",
        "\ued59": "\u56e0",
        "\uee14": "\u795e",
        "\ue032": "\u58f0",
        "\ue1cf": "\u4f53",
        "\uea25": "\u5df1",
        "\ue526": "\u65b9",
        "\ued52": "\u5b66",
        "\ue90c": "\u7684",
        "\ue87a": "\u51fa",
        "\uee0c": "\u4ed6",
        "\ue52f": "\u5411",
        "\ue8ce": "\u5df2",
        "\ued93": "\u7b49",
        "\ue7a8": "\u5f97",
        "\ue3f2": "\u7ecf",
        "\uee77": "\u52a8",
        "\ue573": "\u5c11",
        "\ue95e": "\u793e",
        "\ue3a0": "\u4e0b",
        "\ue5f4": "\u4f60",
        "\ue8ec": "\u540d",
        "\ue254": "\u8bba",
        "\ue979": "\u518d",
        "\ue0b9": "\u7b2c",
        "\ue96e": "\u4f7f",
        "\ue39a": "\u6765",
        "\uea9e": "\u6b64",
        "\ue729": "\u65b0",
        "\ue2a4": "\u5341",
        "\ue172": "\u9ad8",
        "\ueb51": "\u4f46",
    },
    jjwxcfont_001d3: {
        "\ue711": "\u624b",
        "\ue32b": "\u5168",
        "\uec2e": "\u4f55",
        "\ue7e9": "\u4f60",
        "\ue8c7": "\u5c0f",
        "\ue72a": "\u5f97",
        "\ued12": "\u800c",
        "\ue037": "\u6765",
        "\ue610": "\u6b64",
        "\ue8e7": "\u5f53",
        "\ue015": "\u8d77",
        "\uef10": "\u624d",
        "\ue394": "\u56de",
        "\ue67c": "\u7ecf",
        "\ue889": "\u4eec",
        "\ue164": "\u795e",
        "\ue6a8": "\u5728",
        "\ue97e": "\u79cd",
        "\ue31f": "\u5b83",
        "\ue968": "\u6211",
        "\ue96a": "\u53ef",
        "\uefa5": "\u53e3",
        "\uebe7": "\u4ed6",
        "\ue7d8": "\u5206",
        "\ue9ff": "\u4e0d",
        "\ueaf1": "\u5230",
        "\ue045": "\u4f53",
        "\ue06a": "\u8bf4",
        "\ue33f": "\u95ee",
        "\uedf3": "\u4e49",
        "\ue85b": "\u7b2c",
        "\ue400": "\u5bf9",
        "\uea67": "\u4e48",
        "\uea1e": "\u5bb6",
        "\ue804": "\u5b50",
        "\uec91": "\u4e00",
        "\ue9d2": "\u52a8",
        "\ue0fb": "\u8fdb",
        "\ueb67": "\u516c",
        "\ue038": "\u6210",
        "\ue961": "\u5df2",
        "\ue5c3": "\u91cc",
        "\ue629": "\u767d",
        "\ue5d3": "\u5b9a",
        "\uea16": "\u771f",
        "\ue619": "\u7b11",
        "\ue233": "\u6b63",
        "\ue8f4": "\u4e9b",
        "\uefcf": "\u522b",
        "\uee4c": "\u6cd5",
        "\ue828": "\u8fd8",
        "\ueb3f": "\u4ee3",
        "\uef7f": "\u8005",
        "\ueec2": "\u6c14",
        "\ueb6c": "\u91cd",
        "\ueee8": "\u597d",
        "\uec76": "\u77e5",
        "\ue7f9": "\u7279",
        "\ue011": "\u6587",
        "\ue4a7": "\u8981",
        "\ueb6b": "\u4e4b",
        "\ue2c1": "\u5b66",
        "\ue06d": "\u793e",
        "\uef0c": "\u662f",
        "\ue7e7": "\u524d",
        "\ue1e8": "\u90e8",
        "\ue07f": "\u8bba",
        "\ue46d": "\u770b",
        "\ue0f5": "\u5c06",
        "\ue08a": "\u65e5",
        "\ue66a": "\u591a",
        "\uee84": "\u751f",
        "\uec93": "\u6559",
        "\ue44b": "\u540c",
        "\uef33": "\u4ee5",
        "\ue46e": "\u5c31",
        "\ue09d": "\u51e0",
        "\uec60": "\u7269",
        "\ue439": "\u60c5",
        "\uec7e": "\u548c",
        "\ue71d": "\u5148",
        "\uec71": "\u4e8b",
        "\ued82": "\u679c",
        "\ue28a": "\u513f",
        "\ue3cf": "\u8eab",
        "\ued55": "\u4e09",
        "\ue2d6": "\u4e0a",
        "\ue7cb": "\u4eba",
        "\ue194": "\u5f88",
        "\ued46": "\u6709",
        "\ue59a": "\u6b7b",
        "\ue39e": "\u95f4",
        "\uef69": "\u4e0b",
        "\ue9c6": "\u73b0",
        "\uea58": "\u884c",
        "\ueed0": "\u8fc7",
        "\ue84c": "\u4f46",
        "\ue51a": "\u7f8e",
        "\ueca2": "\u4e8e",
        "\ue694": "\u5973",
        "\ue25b": "\u7136",
        "\ue77b": "\u4e8c",
        "\ueb57": "\u6027",
        "\ue311": "\u6700",
        "\ue5b5": "\u601d",
        "\ue33c": "\u5b9e",
        "\ue4f5": "\u4e2d",
        "\ue69c": "\u4e0e",
        "\ue7b7": "\u540e",
        "\ue0dd": "\u70b9",
        "\ue2f9": "\u5e74",
        "\uec03": "\u7740",
        "\ue28f": "\u5979",
        "\ue6c7": "\u58f0",
        "\ue929": "\u9762",
        "\ue42e": "\u7406",
        "\ue0b6": "\u4e86",
        "\uea15": "\u592a",
        "\ue39d": "\u8001",
        "\ue933": "\u6240",
        "\ue1b4": "\u7ed9",
        "\ue842": "\u5c11",
        "\ue77f": "\u773c",
        "\uef15": "\u9ad8",
        "\ueeba": "\u56e0",
        "\ue4d4": "\u628a",
        "\ueef4": "\u60f3",
        "\ue1b3": "\u53ea",
        "\ue94c": "\u53f2",
        "\ue3e5": "\u4f7f",
        "\ue7d6": "\u540d",
        "\ue11f": "\u5982",
        "\uec7d": "\u88ab",
        "\uef84": "\u4e5f",
        "\ue733": "\u5916",
        "\ue41f": "\u51fa",
        "\ue53f": "\u5df1",
        "\uedb6": "\u6837",
        "\ue843": "\u65b0",
        "\uefcb": "\u8bdd",
        "\ue57f": "\u611f",
        "\ue426": "\u4fbf",
        "\ue190": "\u65b9",
        "\ue609": "\u7b49",
        "\uec46": "\u5e76",
        "\ue47a": "\u4e3a",
        "\ue2f6": "\u5316",
        "\ue785": "\u7531",
        "\ue21c": "\u81ea",
        "\ue81d": "\u4e66",
        "\uef57": "\u90a3",
        "\ue1f6": "\u8fd9",
        "\ue655": "\u542c",
        "\ue340": "\u610f",
        "\ue9b6": "\u6c11",
        "\uee5c": "\u66f4",
        "\ued70": "\u89c1",
        "\ue796": "\u5374",
        "\ue907": "\u5934",
        "\ue9e7": "\u4e24",
        "\uedcd": "\u672c",
        "\ue25d": "\u9053",
        "\ueb1b": "\u957f",
        "\ue2be": "\u56db",
        "\ue905": "\u5929",
        "\ueed7": "\u65e0",
        "\ue94f": "\u5fc3",
        "\ue189": "\u90fd",
        "\ue777": "\u5173",
        "\ue01f": "\u529b",
        "\ue9c9": "\u53bb",
        "\uea13": "\u7684",
        "\uebfa": "\u6ca1",
        "\ue66c": "\u53d1",
        "\uea8e": "\u5341",
        "\ue734": "\u5411",
        "\ue561": "\u518d",
        "\ue7ab": "\u4ece",
        "\uee6c": "\u4e2a",
        "\ue9f2": "\u4f5c",
        "\uee11": "\u7528",
        "\ueb1e": "\u5f00",
        "\ue06c": "\u4e3b",
        "\uef54": "\u5176",
        "\ue7ea": "\u6253",
        "\ue87e": "\u53c8",
        "\ue771": "\u5927",
        "\uec22": "\u4ec0",
        "\ue210": "\u4f1a",
        "\ue4d6": "\u95e8",
        "\ue723": "\u56fd",
        "\ue45c": "\u660e",
        "\ue614": "\u4e16",
        "\ue5f1": "\u65f6",
        "\uecc2": "\u8d70",
        "\ue249": "\u5199",
        "\uea8f": "\u5730",
        "\ue9a9": "\u76f8",
        "\ue457": "\u80fd",
        "\ue493": "\u897f",
    },
    jjwxcfont_001fl: {
        "\uef71": "\u4f7f",
        "\ue2e6": "\u65b9",
        "\ueee9": "\u6211",
        "\uee86": "\u611f",
        "\ue417": "\u4e2d",
        "\ueddb": "\u8d70",
        "\ue476": "\u5411",
        "\ue1aa": "\u77e5",
        "\ue350": "\u4ee3",
        "\ue442": "\u540c",
        "\uec22": "\u5979",
        "\ue004": "\u4e3a",
        "\ue79a": "\u897f",
        "\ued96": "\u80fd",
        "\ue411": "\u53c8",
        "\ue157": "\u5bb6",
        "\ue8a2": "\u4e8b",
        "\ueba6": "\u65b0",
        "\ue0dc": "\u5341",
        "\uee18": "\u4e24",
        "\ue8e2": "\u540e",
        "\ue91b": "\u7b11",
        "\ue5cb": "\u5929",
        "\ue279": "\u522b",
        "\ue6a5": "\u6027",
        "\ue9f9": "\u4e5f",
        "\ue381": "\u5728",
        "\ue67a": "\u58f0",
        "\ue602": "\u53d1",
        "\uef0c": "\u53ea",
        "\uec45": "\u6cd5",
        "\ue897": "\u4eba",
        "\ueedb": "\u957f",
        "\ue13c": "\u51e0",
        "\ue9cd": "\u73b0",
        "\ueaa4": "\u56e0",
        "\ue3ca": "\u773c",
        "\ue89b": "\u7684",
        "\ue51c": "\u5f97",
        "\ue33c": "\u95ee",
        "\ued75": "\u4ec0",
        "\ue70b": "\u5148",
        "\ue9e0": "\u7b2c",
        "\ue4ca": "\u795e",
        "\ue652": "\u90a3",
        "\ue252": "\u9ad8",
        "\ue3ef": "\u6c14",
        "\ue046": "\u5c31",
        "\ue54e": "\u4e8c",
        "\ue988": "\u8d77",
        "\ue368": "\u5f00",
        "\ueb29": "\u8001",
        "\ueaf3": "\u5199",
        "\ue66a": "\u5982",
        "\ue5e2": "\u7740",
        "\ue6e2": "\u4e86",
        "\ueeb5": "\u4ee5",
        "\ue5c9": "\u6837",
        "\uebb9": "\u81ea",
        "\ued53": "\u4e66",
        "\ue8cc": "\u8fd9",
        "\uebbb": "\u8bba",
        "\uec2a": "\u56fd",
        "\uebe4": "\u5df1",
        "\ueeb4": "\u5e74",
        "\uefcb": "\u6709",
        "\ue55e": "\u6240",
        "\ue834": "\u529b",
        "\ued3d": "\u4e00",
        "\uef27": "\u6765",
        "\ue914": "\u5df2",
        "\ue751": "\u800c",
        "\ue26d": "\u4e0b",
        "\ue484": "\u4e8e",
        "\ue8ce": "\u4e2a",
        "\ue9b1": "\u52a8",
        "\ueab2": "\u601d",
        "\ue491": "\u4e48",
        "\uea12": "\u5730",
        "\uee0c": "\u770b",
        "\ue542": "\u8eab",
        "\ue148": "\u60f3",
        "\uef10": "\u76f8",
        "\ued94": "\u624b",
        "\uefdc": "\u5bf9",
        "\ue4c8": "\u597d",
        "\ue1e6": "\u53e3",
        "\ue197": "\u4f46",
        "\ue609": "\u91cc",
        "\ue827": "\u90e8",
        "\uea7e": "\u5176",
        "\ueebc": "\u884c",
        "\ue35c": "\u4e0a",
        "\ue7ba": "\u5c06",
        "\uef6b": "\u5316",
        "\ue7ec": "\u628a",
        "\uefc6": "\u6c11",
        "\ue9a3": "\u679c",
        "\uedd7": "\u5f88",
        "\uef86": "\u7ecf",
        "\ue0f0": "\u70b9",
        "\ueedf": "\u6210",
        "\uef3a": "\u5230",
        "\ue4ba": "\u60c5",
        "\uee17": "\u662f",
        "\uea6a": "\u624d",
        "\ued50": "\u4e0d",
        "\ueec8": "\u5b9a",
        "\ue514": "\u4f5c",
        "\ue241": "\u6b7b",
        "\ue1eb": "\u5934",
        "\ueab5": "\u8fc7",
        "\ue6aa": "\u771f",
        "\ue084": "\u53ef",
        "\ue889": "\u4f60",
        "\uef4f": "\u7406",
        "\ue662": "\u4e4b",
        "\uec44": "\u4eec",
        "\uec28": "\u6587",
        "\ue6ea": "\u4f55",
        "\ue182": "\u5b83",
        "\uef48": "\u4e3b",
        "\ue7b3": "\u5374",
        "\ued8e": "\u56db",
        "\ue630": "\u8fd8",
        "\uea09": "\u4f1a",
        "\ue0aa": "\u56de",
        "\ue885": "\u53f2",
        "\ue245": "\u4ed6",
        "\ue7db": "\u4f53",
        "\ue7a8": "\u5973",
        "\ue27e": "\u5206",
        "\ue17e": "\u8bdd",
        "\ue2f5": "\u751f",
        "\uef1d": "\u660e",
        "\uefad": "\u53bb",
        "\uefe2": "\u8981",
        "\ue374": "\u95f4",
        "\ue23b": "\u65e0",
        "\ue693": "\u6700",
        "\ue6a9": "\u672c",
        "\ue588": "\u91cd",
        "\uea32": "\u524d",
        "\ue003": "\u516c",
        "\ue7cf": "\u79cd",
        "\ue2d4": "\u518d",
        "\ue3bb": "\u5c11",
        "\ue736": "\u65e5",
        "\ueca4": "\u9053",
        "\ue063": "\u540d",
        "\uecb2": "\u5b9e",
        "\uef1c": "\u6b64",
        "\ue3e2": "\u8005",
        "\uee00": "\u88ab",
        "\ue149": "\u90fd",
        "\uefb1": "\u5b50",
        "\ue1e3": "\u6253",
        "\uea7a": "\u5916",
        "\ued2d": "\u5173",
        "\ueb42": "\u4e9b",
        "\uee1e": "\u548c",
        "\ueb2b": "\u4e16",
        "\ue8c6": "\u89c1",
        "\ue976": "\u7279",
        "\uee78": "\u7f8e",
        "\ue8e1": "\u5927",
        "\ue6a8": "\u513f",
        "\ue5d7": "\u6ca1",
        "\uea08": "\u66f4",
        "\ueab3": "\u7136",
        "\uefab": "\u4e09",
        "\ue7ab": "\u95e8",
        "\ue5fb": "\u4e0e",
        "\ue5f8": "\u6b63",
        "\ued98": "\u767d",
        "\ue12d": "\u7531",
        "\ue48d": "\u5c0f",
        "\ueb30": "\u7ed9",
        "\ue994": "\u793e",
        "\uea39": "\u5b66",
        "\ue26b": "\u7b49",
        "\ue90d": "\u5168",
        "\ueda6": "\u9762",
        "\uecf2": "\u7269",
        "\ue2cb": "\u5f53",
        "\ue126": "\u5fc3",
        "\ued45": "\u7528",
        "\ue41b": "\u592a",
        "\ue3f7": "\u5e76",
        "\ue708": "\u51fa",
        "\uee4c": "\u8bf4",
        "\ueb21": "\u4fbf",
        "\ue506": "\u542c",
        "\ue82a": "\u65f6",
        "\ue45a": "\u610f",
        "\uef8d": "\u4e49",
        "\ue462": "\u4ece",
        "\ue10c": "\u8fdb",
        "\ue8df": "\u6559",
        "\ue91f": "\u591a",
    },
    jjwxcfont_001i5: {
        "\ue706": "\u95ee",
        "\ue91f": "\u8eab",
        "\uef18": "\u8bdd",
        "\ued8c": "\u80fd",
        "\ue1e8": "\u672c",
        "\ueffe": "\u4e8b",
        "\uef0c": "\u6240",
        "\uea06": "\u4e5f",
        "\uee23": "\u4f7f",
        "\ue3ef": "\u6587",
        "\ue194": "\u5148",
        "\ue2ff": "\u53c8",
        "\ue02b": "\u7684",
        "\uefcc": "\u7b2c",
        "\uea8b": "\u60c5",
        "\uea8d": "\u4f55",
        "\ue149": "\u56de",
        "\ue484": "\u4fbf",
        "\uef54": "\u4ee3",
        "\uee59": "\u7740",
        "\ue104": "\u5199",
        "\ue325": "\u767d",
        "\uea58": "\u592a",
        "\ue28c": "\u5fc3",
        "\ued9c": "\u81ea",
        "\ue445": "\u6c11",
        "\ue7a3": "\u8d77",
        "\uecd6": "\u5374",
        "\ue169": "\u6765",
        "\ueb91": "\u4ed6",
        "\uec64": "\u751f",
        "\ue67e": "\u529b",
        "\ue361": "\u4e0d",
        "\ueae4": "\u800c",
        "\ue0e6": "\u6c14",
        "\ue5e5": "\u771f",
        "\uea5e": "\u4e49",
        "\ue524": "\u4ec0",
        "\ue66c": "\u548c",
        "\ue6e9": "\u5bb6",
        "\ue4fc": "\u8bf4",
        "\ued6c": "\u53ef",
        "\uefbd": "\u60f3",
        "\ue4c4": "\u90fd",
        "\ue158": "\u7f8e",
        "\ue874": "\u53e3",
        "\ue8d1": "\u522b",
        "\ue8e4": "\u7406",
        "\ueb47": "\u5b83",
        "\ue823": "\u4e0e",
        "\uec34": "\u53f2",
        "\ueae6": "\u540d",
        "\ue259": "\u91cc",
        "\ueb69": "\u5b50",
        "\uec2c": "\u7531",
        "\uea13": "\u5411",
        "\ue467": "\u5e74",
        "\ue829": "\u4e24",
        "\uea3f": "\u795e",
        "\ued26": "\u5b9e",
        "\ue505": "\u624b",
        "\ue784": "\u4e8e",
        "\ue589": "\u5206",
        "\ue904": "\u70b9",
        "\ue87b": "\u6559",
        "\uebef": "\u4e09",
        "\uef56": "\u7b49",
        "\ue02a": "\u611f",
        "\ue053": "\u6837",
        "\ue5ba": "\u56e0",
        "\ue7b9": "\u5b66",
        "\uee68": "\u6b7b",
        "\ue66d": "\u7ecf",
        "\ue8a1": "\u5c31",
        "\ue1ed": "\u8fdb",
        "\ued31": "\u793e",
        "\ue54f": "\u4ee5",
        "\ueced": "\u5bf9",
        "\ue218": "\u8fc7",
        "\ue7aa": "\u540e",
        "\uea83": "\u4e48",
        "\ue855": "\u8fd9",
        "\ue047": "\u5728",
        "\ue25a": "\u597d",
        "\uef14": "\u4f46",
        "\uedc6": "\u4e00",
        "\ue73f": "\u5e76",
        "\ue2fa": "\u73b0",
        "\ue58a": "\u5168",
        "\ue7ce": "\u65f6",
        "\uedf6": "\u51e0",
        "\ue731": "\u542c",
        "\ue5a2": "\u5927",
        "\ueb8c": "\u9053",
        "\uecdf": "\u6253",
        "\uead4": "\u4f60",
        "\ue4c0": "\u4eba",
        "\ue760": "\u6210",
        "\ue9ac": "\u4e2a",
        "\uea87": "\u5916",
        "\ue4cb": "\u89c1",
        "\ue6b0": "\u4e16",
        "\ue456": "\u4e9b",
        "\ue300": "\u8005",
        "\uefaf": "\u5df2",
        "\ue269": "\u7269",
        "\ue40f": "\u5b9a",
        "\ue7b8": "\u6027",
        "\ue8a4": "\u5f53",
        "\uea03": "\u7ed9",
        "\ue312": "\u51fa",
        "\uefcb": "\u4e3a",
        "\uea74": "\u90a3",
        "\ue02d": "\u7279",
        "\uea84": "\u773c",
        "\ueee0": "\u4e4b",
        "\uecf9": "\u56fd",
        "\ueb2a": "\u8fd8",
        "\ue3c1": "\u65e5",
        "\ueab7": "\u591a",
        "\uefae": "\u4e0b",
        "\ue841": "\u5316",
        "\ue50b": "\u65b9",
        "\ue7d4": "\u770b",
        "\ueefd": "\u4e0a",
        "\uec65": "\u5173",
        "\uefb2": "\u66f4",
        "\ue244": "\u8bba",
        "\ue703": "\u601d",
        "\ued57": "\u4e86",
        "\uef6f": "\u5979",
        "\ue172": "\u8001",
        "\ue037": "\u5f88",
        "\ue0e0": "\u662f",
        "\uee2b": "\u5973",
        "\ue057": "\u5f97",
        "\ue014": "\u4e66",
        "\ue7a0": "\u58f0",
        "\ue588": "\u8d70",
        "\uedcd": "\u4e2d",
        "\uea6c": "\u9762",
        "\ue612": "\u4e3b",
        "\ueeb2": "\u56db",
        "\ued9b": "\u5982",
        "\ue5d0": "\u518d",
        "\uebf3": "\u4f5c",
        "\ue876": "\u516c",
        "\ue1b9": "\u76f8",
        "\ueb6e": "\u65e0",
        "\uef74": "\u95f4",
        "\uecd8": "\u5934",
        "\ue1d5": "\u5176",
        "\ue009": "\u6b63",
        "\ue8f8": "\u5f00",
        "\ue8b6": "\u624d",
        "\ue662": "\u79cd",
        "\ue7d9": "\u884c",
        "\ue181": "\u7528",
        "\uefa1": "\u5c0f",
        "\uecc4": "\u5230",
        "\ue22e": "\u52a8",
        "\ue56a": "\u7b11",
        "\ue5d5": "\u95e8",
        "\ue89e": "\u4eec",
        "\uec66": "\u6b64",
        "\ue44a": "\u513f",
        "\ue696": "\u53d1",
        "\ue93f": "\u53bb",
        "\ue1bc": "\u65b0",
        "\ue0c9": "\u6cd5",
        "\uea1c": "\u660e",
        "\ue140": "\u5730",
        "\uef11": "\u7136",
        "\ued38": "\u6211",
        "\ue415": "\u5929",
        "\ue977": "\u4f1a",
        "\ue2c8": "\u628a",
        "\ue658": "\u540c",
        "\uedc0": "\u91cd",
        "\ue92f": "\u9ad8",
        "\ue801": "\u897f",
        "\uefd5": "\u53ea",
        "\ue27d": "\u679c",
        "\ue1a2": "\u4ece",
        "\ueb9f": "\u4f53",
        "\ue721": "\u6709",
        "\ue8c2": "\u88ab",
        "\uee4c": "\u90e8",
        "\ue242": "\u5df1",
        "\uecac": "\u610f",
        "\ue741": "\u6ca1",
        "\ue2b9": "\u5c11",
        "\ue69c": "\u5c06",
        "\ue553": "\u77e5",
        "\uede1": "\u6700",
        "\ue5fd": "\u524d",
        "\ue8e8": "\u957f",
        "\ue62d": "\u8981",
        "\uea2f": "\u5341",
        "\ue661": "\u4e8c",
    },
    jjwxcfont_001ks: {
        "\ueadd": "\u6210",
        "\ue6b4": "\u516c",
        "\ue1ce": "\u5934",
        "\ue1a9": "\u9762",
        "\uede5": "\u592a",
        "\uefb7": "\u4fbf",
        "\ue87c": "\u624d",
        "\ueebf": "\u95e8",
        "\ue3bd": "\u56e0",
        "\ue493": "\u6d3b",
        "\ued44": "\u529b",
        "\ue716": "\u6709",
        "\uef94": "\u767d",
        "\uecba": "\u4e48",
        "\ueab9": "\u90a3",
        "\ue132": "\u4e0b",
        "\ue879": "\u4e86",
        "\ue9d2": "\u5c0f",
        "\ue990": "\u6700",
        "\uebfa": "\u5b50",
        "\ue4dc": "\u5982",
        "\ue728": "\u522b",
        "\ue72f": "\u6253",
        "\ue329": "\u8fd8",
        "\ue066": "\u5374",
        "\ue7c6": "\u7740",
        "\ue59d": "\u6b64",
        "\ueb07": "\u5148",
        "\ue2a1": "\u957f",
        "\ue42b": "\u91cc",
        "\uefe7": "\u540c",
        "\uebff": "\u5316",
        "\ued63": "\u524d",
        "\uee88": "\u8fdb",
        "\ue3bc": "\u4e3a",
        "\uef74": "\u4e0d",
        "\ue16a": "\u4e3b",
        "\ue90f": "\u542c",
        "\ue1b5": "\u7684",
        "\ueeac": "\u4e2d",
        "\ue382": "\u7531",
        "\ue502": "\u5728",
        "\ue317": "\u8d77",
        "\ue69d": "\u77e5",
        "\ue20f": "\u90e8",
        "\uec8c": "\u5f00",
        "\ueb6a": "\u4e09",
        "\uef9f": "\u6b63",
        "\uedb1": "\u4f53",
        "\ue714": "\u5411",
        "\ueca2": "\u5176",
        "\ue096": "\u88ab",
        "\ue1d0": "\u7b11",
        "\ue431": "\u4e0e",
        "\ue770": "\u53e3",
        "\ue49c": "\u6837",
        "\ue13e": "\u672c",
        "\ue687": "\u5c06",
        "\ued36": "\u65b0",
        "\uede7": "\u76f8",
        "\uef73": "\u4ece",
        "\uedf9": "\u540e",
        "\uecf7": "\u4f1a",
        "\ued13": "\u4e9b",
        "\ueef3": "\u4ed6",
        "\ue57d": "\u5c31",
        "\uea3e": "\u4f7f",
        "\uecb5": "\u53f2",
        "\ue507": "\u548c",
        "\ue585": "\u8fd9",
        "\ue333": "\u5206",
        "\uecb7": "\u7136",
        "\ue577": "\u60c5",
        "\uefce": "\u65f6",
        "\ueefa": "\u5730",
        "\ue4cc": "\u513f",
        "\ue53d": "\u5168",
        "\ue5ec": "\u7269",
        "\ue631": "\u7b49",
        "\ue189": "\u660e",
        "\ue859": "\u73b0",
        "\ue832": "\u610f",
        "\ue52e": "\u8fc7",
        "\uef21": "\u6c11",
        "\ue568": "\u751f",
        "\ue487": "\u4ee5",
        "\ue440": "\u5c11",
        "\ue6e1": "\u591a",
        "\ued33": "\u5916",
        "\ue939": "\u4ec0",
        "\ue1bf": "\u5f97",
        "\uea2f": "\u4e5f",
        "\ueba6": "\u56fd",
        "\uec9c": "\u800c",
        "\uebca": "\u7528",
        "\ue0c2": "\u4e8e",
        "\ue1fd": "\u9ad8",
        "\ue5c0": "\u70b9",
        "\ue6cd": "\u5b9a",
        "\ue140": "\u5e74",
        "\uefd4": "\u8bba",
        "\ue7dc": "\u4e8b",
        "\ue320": "\u771f",
        "\uee5f": "\u540d",
        "\ue405": "\u5e76",
        "\ue660": "\u662f",
        "\ue924": "\u56db",
        "\ue5c5": "\u7ed9",
        "\ue201": "\u5b9e",
        "\ue8ee": "\u4f5c",
        "\ue090": "\u5bf9",
        "\ued7d": "\u773c",
        "\ue22b": "\u6cd5",
        "\ue6d9": "\u5929",
        "\ue1fa": "\u4e16",
        "\ue319": "\u6240",
        "\uef5e": "\u4eba",
        "\uee5c": "\u5341",
        "\ue4b3": "\u80fd",
        "\ue5e1": "\u4e8c",
        "\uea01": "\u5bb6",
        "\ue8c7": "\u6027",
        "\ue161": "\u7ecf",
        "\ue0de": "\u8981",
        "\ue66a": "\u65e5",
        "\ue2aa": "\u95f4",
        "\ue7d6": "\u4f55",
        "\ue64e": "\u4e2a",
        "\ue9a3": "\u4eec",
        "\ue385": "\u4e4b",
        "\ue7c1": "\u5199",
        "\ue17c": "\u53bb",
        "\ue5f6": "\u5b83",
        "\ued4b": "\u8d70",
        "\ue171": "\u597d",
        "\ue6cb": "\u51e0",
        "\ueabc": "\u6c14",
        "\ue511": "\u628a",
        "\ue363": "\u51fa",
        "\ue267": "\u7b2c",
        "\ue7cc": "\u65b9",
        "\ue8c9": "\u4ee3",
        "\uef34": "\u4e49",
        "\ue5a6": "\u7279",
        "\ue012": "\u66f4",
        "\uea5a": "\u770b",
        "\uef41": "\u5173",
        "\ue81e": "\u5973",
        "\ue491": "\u8bf4",
        "\ue8bb": "\u91cd",
        "\ue988": "\u884c",
        "\uefe6": "\u52a8",
        "\uee16": "\u601d",
        "\ue02d": "\u53d1",
        "\ue0ad": "\u793e",
        "\uea4a": "\u4e0a",
        "\ue954": "\u897f",
        "\ue6a2": "\u6587",
        "\ue0b2": "\u9053",
        "\ue1b6": "\u90fd",
        "\ue630": "\u53ef",
        "\ue624": "\u5f53",
        "\uef96": "\u89c1",
        "\ue102": "\u7f8e",
        "\uef6d": "\u5f88",
        "\ue083": "\u5df1",
        "\ueb9e": "\u8005",
        "\uef93": "\u5df2",
        "\ue5d4": "\u56de",
        "\ue5e5": "\u6559",
        "\ue819": "\u6211",
        "\uefac": "\u5927",
        "\uef60": "\u4f46",
        "\ue61f": "\u81ea",
        "\ue60f": "\u4f60",
        "\ue36c": "\u53ea",
        "\uecd2": "\u611f",
        "\ue231": "\u5230",
        "\ue825": "\u6ca1",
        "\ue554": "\u4e66",
        "\ue476": "\u4e00",
        "\ue37a": "\u53c8",
        "\ue059": "\u60f3",
        "\uef33": "\u679c",
        "\uebf9": "\u5b66",
        "\ue58a": "\u6b7b",
        "\uec70": "\u79cd",
        "\uef9e": "\u518d",
        "\ue24d": "\u8001",
        "\ueb0d": "\u65e0",
        "\ueffd": "\u8eab",
        "\uefe3": "\u624b",
        "\uee5a": "\u5979",
        "\ue52b": "\u795e",
        "\ue379": "\u4e24",
        "\ue597": "\u6765",
        "\ue808": "\u5fc3",
        "\ue57c": "\u7406",
        "\ue12b": "\u95ee",
        "\uefe2": "\u58f0",
    },
    jjwxcfont_001n4: {
        "\ue7b9": "\u672c",
        "\ue5ff": "\u4f5c",
        "\uea14": "\u8005",
        "\ue737": "\u56fd",
        "\uef88": "\u4e3a",
        "\uefda": "\u4e3b",
        "\ue417": "\u4ed6",
        "\ue49c": "\u4eba",
        "\uee25": "\u53e3",
        "\uefe2": "\u53c8",
        "\uedb8": "\u76f8",
        "\ue760": "\u597d",
        "\ue527": "\u628a",
        "\ue715": "\u65e5",
        "\ue0ef": "\u524d",
        "\ue07c": "\u4e66",
        "\ue30f": "\u601d",
        "\ue740": "\u6cd5",
        "\ue1ad": "\u90e8",
        "\ue6a4": "\u5411",
        "\ue3d3": "\u957f",
        "\ue0d9": "\u662f",
        "\ue0a0": "\u4e8e",
        "\ued49": "\u4e5f",
        "\ue443": "\u91cd",
        "\ue173": "\u5b83",
        "\ueb2a": "\u70b9",
        "\ue3c9": "\u5e76",
        "\ue907": "\u53f2",
        "\ue162": "\u5e74",
        "\ue490": "\u8d70",
        "\uef24": "\u4e2a",
        "\uee73": "\u90a3",
        "\ued23": "\u6210",
        "\ue796": "\u4ee3",
        "\ue43c": "\u8fd8",
        "\ue087": "\u8fc7",
        "\ue5db": "\u5916",
        "\ued65": "\u591a",
        "\uee4f": "\u5927",
        "\ue9cf": "\u4f7f",
        "\ue8bc": "\u60f3",
        "\ue58f": "\u52a8",
        "\ue865": "\u53d1",
        "\ue240": "\u7ed9",
        "\ue806": "\u4e9b",
        "\ue060": "\u65b0",
        "\ue192": "\u884c",
        "\ue4a1": "\u4e0e",
        "\ue664": "\u6765",
        "\uee90": "\u518d",
        "\ue2e9": "\u5934",
        "\ueabf": "\u5df1",
        "\ue459": "\u4ec0",
        "\ue2bd": "\u4f53",
        "\uec41": "\u660e",
        "\ue7f4": "\u4f46",
        "\uedc9": "\u7f8e",
        "\ue086": "\u624b",
        "\uea2e": "\u66f4",
        "\ue468": "\u4ee5",
        "\ue89e": "\u8001",
        "\ue7c5": "\u80fd",
        "\ue2e6": "\u6559",
        "\ue347": "\u8eab",
        "\ue426": "\u5bb6",
        "\uedbe": "\u91cc",
        "\ueaa9": "\u6253",
        "\ueebe": "\u5f97",
        "\ue76d": "\u56e0",
        "\uea86": "\u7269",
        "\uef84": "\u522b",
        "\ue5cf": "\u58f0",
        "\ue5ae": "\u95f4",
        "\ue24d": "\u81ea",
        "\ue18e": "\u5f88",
        "\ue051": "\u4e8b",
        "\ue0d3": "\u5148",
        "\ue97b": "\u9053",
        "\uea79": "\u8fd9",
        "\ueaad": "\u4e8c",
        "\uea92": "\u5374",
        "\ue77e": "\u5728",
        "\uea8f": "\u5b9e",
        "\uefb3": "\u7136",
        "\ue279": "\u4fbf",
        "\uee16": "\u95e8",
        "\ue15f": "\u5f00",
        "\ueb62": "\u5316",
        "\ue65e": "\u4ece",
        "\ue462": "\u7279",
        "\uec95": "\u516c",
        "\ue93a": "\u6b7b",
        "\ueee2": "\u6700",
        "\uecba": "\u592a",
        "\ue51f": "\u4e00",
        "\ue8b1": "\u65b9",
        "\uef8f": "\u767d",
        "\ue823": "\u5979",
        "\ue873": "\u5f53",
        "\ued7f": "\u5982",
        "\ue849": "\u793e",
        "\ue58e": "\u611f",
        "\ue8c5": "\u6b64",
        "\ue05b": "\u7528",
        "\ue265": "\u4e4b",
        "\ue002": "\u4e49",
        "\ue8bf": "\u4f60",
        "\ue3c5": "\u7684",
        "\ue4d5": "\u624d",
        "\ueeb4": "\u56db",
        "\ue594": "\u9762",
        "\ue2db": "\u88ab",
        "\uef04": "\u8bba",
        "\uee78": "\u542c",
        "\ue42b": "\u6027",
        "\ue7ef": "\u771f",
        "\ue1a9": "\u7740",
        "\ued36": "\u6837",
        "\ue44e": "\u7406",
        "\ue4d6": "\u5168",
        "\ueb4e": "\u5b9a",
        "\ue3f7": "\u9ad8",
        "\ue36b": "\u5fc3",
        "\ue56b": "\u540c",
        "\ueeb7": "\u5973",
        "\uef35": "\u5df2",
        "\ue21f": "\u4e2d",
        "\ue72b": "\u6709",
        "\ueee1": "\u6587",
        "\ue064": "\u7b11",
        "\ued00": "\u4e16",
        "\uee41": "\u4e86",
        "\ue951": "\u770b",
        "\ue2d2": "\u5c0f",
        "\ue6e6": "\u56de",
        "\uef01": "\u6c14",
        "\uea2c": "\u540d",
        "\ue251": "\u4e0a",
        "\ue8b5": "\u77e5",
        "\ue0df": "\u6c11",
        "\ueff9": "\u5173",
        "\ue729": "\u5c11",
        "\ue49f": "\u5730",
        "\uea30": "\u5c31",
        "\ue6df": "\u4eec",
        "\ue12e": "\u90fd",
        "\uee0c": "\u513f",
        "\uef71": "\u8bf4",
        "\ue688": "\u4f1a",
        "\ueecd": "\u6b63",
        "\ue9fe": "\u529b",
        "\ue22d": "\u60c5",
        "\ue48a": "\u8981",
        "\ued98": "\u795e",
        "\ue2aa": "\u5c06",
        "\ue349": "\u773c",
        "\ue9a8": "\u5929",
        "\ue062": "\u6ca1",
        "\uebb7": "\u897f",
        "\ue81c": "\u4e0d",
        "\ue9fb": "\u7ecf",
        "\uee14": "\u679c",
        "\ueb9c": "\u5176",
        "\ueb72": "\u5230",
        "\ue235": "\u6240",
        "\ue9d3": "\u800c",
        "\ue92c": "\u751f",
        "\ue975": "\u5199",
        "\ue437": "\u8d77",
        "\ue842": "\u53ef",
        "\ue3b7": "\u7b49",
        "\uecd0": "\u73b0",
        "\ueab6": "\u4e24",
        "\ue17e": "\u4e48",
        "\ueddf": "\u51fa",
        "\ue5e5": "\u51e0",
        "\ue84a": "\u8fdb",
        "\ue5bd": "\u4e09",
        "\ue687": "\u5341",
        "\uef6a": "\u65f6",
        "\uefb1": "\u5b66",
        "\ue795": "\u7b2c",
        "\ue2c9": "\u89c1",
        "\ue078": "\u4e0b",
        "\uefb8": "\u8bdd",
        "\uebf2": "\u5b50",
        "\uec8c": "\u5bf9",
        "\uedb9": "\u6211",
        "\ueb40": "\u5206",
        "\uea49": "\u53ea",
        "\uee80": "\u95ee",
        "\uebcd": "\u548c",
        "\ue201": "\u53bb",
        "\ue948": "\u79cd",
        "\uef5a": "\u4f55",
        "\ue5a5": "\u610f",
        "\uedce": "\u7531",
        "\ue4f1": "\u540e",
        "\ueb65": "\u65e0",
    },
    jjwxcfont_001qb: {
        "\ued89": "\u5e74",
        "\uec41": "\u522b",
        "\uec66": "\u8fc7",
        "\uea1c": "\u91cd",
        "\ue5a5": "\u4e8e",
        "\ue2bb": "\u90fd",
        "\ue89e": "\u56db",
        "\ue13b": "\u76f8",
        "\ue29d": "\u610f",
        "\uef8b": "\u7528",
        "\uefb4": "\u51e0",
        "\ue72f": "\u52a8",
        "\ue706": "\u4f46",
        "\ue576": "\u8fd8",
        "\ue375": "\u65f6",
        "\ued33": "\u7b11",
        "\uee98": "\u8eab",
        "\ue0ff": "\u9ad8",
        "\ue0ae": "\u5c11",
        "\ued3f": "\u88ab",
        "\uea06": "\u795e",
        "\ue0de": "\u5bb6",
        "\uec4b": "\u624b",
        "\ue932": "\u6cd5",
        "\ue779": "\u8bf4",
        "\ue3be": "\u592a",
        "\ue4b5": "\u542c",
        "\ue482": "\u4e5f",
        "\ue6be": "\u8981",
        "\ue365": "\u7279",
        "\ue6ac": "\u6587",
        "\ue756": "\u5f00",
        "\ue0d3": "\u6559",
        "\ue968": "\u518d",
        "\ue9b8": "\u7f8e",
        "\uec6d": "\u5374",
        "\ue2d2": "\u662f",
        "\ue4f5": "\u6ca1",
        "\ue029": "\u660e",
        "\ue4f7": "\u7ed9",
        "\uedac": "\u7ecf",
        "\ue450": "\u770b",
        "\ue1a6": "\u91cc",
        "\ue1d3": "\u5168",
        "\ueb28": "\u81ea",
        "\ueb84": "\u8fd9",
        "\ue57d": "\u800c",
        "\ue690": "\u5e76",
        "\ue04a": "\u5b83",
        "\ue814": "\u4f53",
        "\ue15e": "\u9053",
        "\uef4d": "\u513f",
        "\ue2e4": "\u4e16",
        "\uee8d": "\u5f88",
        "\ue7a9": "\u5fc3",
        "\ue965": "\u65e0",
        "\ue4c2": "\u8fdb",
        "\ue5e7": "\u679c",
        "\ue4e4": "\u6210",
        "\ue25c": "\u95f4",
        "\ue2f9": "\u6709",
        "\ue9bb": "\u8005",
        "\ue1e8": "\u90e8",
        "\ue178": "\u5982",
        "\ue9fd": "\u58f0",
        "\ue1f0": "\u7b2c",
        "\uec55": "\u4e49",
        "\ue2bc": "\u77e5",
        "\ue56f": "\u5316",
        "\ue307": "\u56de",
        "\ueced": "\u4e0e",
        "\uecb0": "\u8d77",
        "\ue453": "\u5148",
        "\uee68": "\u5206",
        "\ue667": "\u4e66",
        "\uedef": "\u5df1",
        "\ueec1": "\u884c",
        "\ue4f4": "\u540e",
        "\ue5b6": "\u4fbf",
        "\ue55f": "\u6b64",
        "\uec3f": "\u53ef",
        "\ue099": "\u53e3",
        "\ue980": "\u4f7f",
        "\ue7fc": "\u4f5c",
        "\ue0cc": "\u5728",
        "\ueeba": "\u6837",
        "\ue252": "\u4ed6",
        "\ueceb": "\u4ee3",
        "\ue094": "\u6c11",
        "\ue5d5": "\u4e8b",
        "\ue7f3": "\u7136",
        "\uece5": "\u53d1",
        "\ue6cd": "\u7406",
        "\ueb1f": "\u5199",
        "\ue399": "\u4e09",
        "\ueab1": "\u540c",
        "\ue084": "\u5929",
        "\ue15f": "\u66f4",
        "\ue0ac": "\u53f2",
        "\ue34d": "\u5411",
        "\ued77": "\u65e5",
        "\ue398": "\u4e3b",
        "\ue895": "\u4e9b",
        "\uef68": "\u4f55",
        "\ue6b3": "\u516c",
        "\ue112": "\u80fd",
        "\ue03b": "\u601d",
        "\ue584": "\u7740",
        "\uedd9": "\u8bba",
        "\ueb1d": "\u5927",
        "\ue7b7": "\u7684",
        "\ueb8e": "\u90a3",
        "\ueda7": "\u7531",
        "\ue356": "\u6240",
        "\ued10": "\u6c14",
        "\ue1c3": "\u73b0",
        "\uea55": "\u5916",
        "\ue9f8": "\u60f3",
        "\uec4a": "\u624d",
        "\ue446": "\u79cd",
        "\ueaed": "\u591a",
        "\ue9dc": "\u6b63",
        "\ue75a": "\u53c8",
        "\uefa1": "\u53bb",
        "\ue91e": "\u773c",
        "\uedb6": "\u53ea",
        "\ue820": "\u5b50",
        "\ueb1c": "\u4e0d",
        "\ue14d": "\u9762",
        "\ueacb": "\u6765",
        "\ue281": "\u529b",
        "\ue30c": "\u4e24",
        "\ue5dd": "\u628a",
        "\ue350": "\u4ece",
        "\ueff7": "\u8001",
        "\ue658": "\u548c",
        "\ue592": "\u672c",
        "\ue421": "\u5341",
        "\uef27": "\u5bf9",
        "\ue088": "\u5f53",
        "\ue890": "\u7b49",
        "\ue046": "\u4eba",
        "\uea92": "\u4e0a",
        "\ue45f": "\u611f",
        "\ue688": "\u5973",
        "\ue92f": "\u60c5",
        "\ued61": "\u4e48",
        "\uea57": "\u5176",
        "\ue9cb": "\u6253",
        "\ue86e": "\u4e2d",
        "\ueefe": "\u4e4b",
        "\ue35d": "\u5c06",
        "\uea33": "\u771f",
        "\uecc6": "\u5f97",
        "\ue38e": "\u5df2",
        "\ueb52": "\u6211",
        "\ue7f5": "\u524d",
        "\ue65b": "\u751f",
        "\uea04": "\u5c0f",
        "\ue670": "\u65b0",
        "\uee2d": "\u4e0b",
        "\ue058": "\u540d",
        "\ue4ab": "\u4eec",
        "\ueda0": "\u89c1",
        "\ue62f": "\u6700",
        "\ue55d": "\u6b7b",
        "\uefed": "\u4e3a",
        "\ue664": "\u5979",
        "\ue5ff": "\u4e8c",
        "\ue161": "\u51fa",
        "\ue22c": "\u4e86",
        "\ue5ce": "\u897f",
        "\ue024": "\u6027",
        "\ue78b": "\u95ee",
        "\ue84c": "\u793e",
        "\ue2ba": "\u5730",
        "\ue289": "\u4e00",
        "\uedde": "\u957f",
        "\ue140": "\u767d",
        "\ue169": "\u7269",
        "\ue7fe": "\u5230",
        "\uee90": "\u4ec0",
        "\uef2d": "\u8bdd",
        "\ue119": "\u5b66",
        "\ue466": "\u5c31",
        "\ue5fb": "\u95e8",
        "\uef1e": "\u8d70",
        "\uea4e": "\u70b9",
        "\uec9c": "\u5173",
        "\ue79f": "\u4ee5",
        "\uea98": "\u4e2a",
        "\ue508": "\u5b9a",
        "\ue24e": "\u4f1a",
        "\ueb44": "\u597d",
        "\ue166": "\u56fd",
        "\ue07d": "\u65b9",
        "\uebf3": "\u56e0",
        "\ue5b7": "\u5b9e",
        "\ue5a6": "\u5934",
        "\ue616": "\u4f60",
    },
    jjwxcfont_001u8: {
        "\ue334": "\u4e00",
        "\ue365": "\u65b9",
        "\uee1a": "\u5f97",
        "\ue468": "\u5f00",
        "\uec37": "\u4e9b",
        "\ue20e": "\u60c5",
        "\ued26": "\u540c",
        "\ueb8d": "\u5728",
        "\ue3c4": "\u65b0",
        "\uea43": "\u53d1",
        "\ue762": "\u5b66",
        "\ue6bf": "\u767d",
        "\ue93c": "\u77e5",
        "\uef12": "\u5199",
        "\ueca7": "\u5176",
        "\ue01d": "\u548c",
        "\uecb0": "\u7136",
        "\ue130": "\u79cd",
        "\ue79d": "\u5b83",
        "\uea73": "\u5148",
        "\ue33a": "\u5979",
        "\ue75d": "\u5934",
        "\ueaf4": "\u4e5f",
        "\ue019": "\u6b63",
        "\ue4b6": "\u660e",
        "\ue1c6": "\u4f55",
        "\ue8c6": "\u56fd",
        "\ue4ad": "\u6b7b",
        "\ueca9": "\u6709",
        "\uedc2": "\u53c8",
        "\ue233": "\u5316",
        "\ue926": "\u773c",
        "\ue8e2": "\u5b50",
        "\ue24b": "\u6b64",
        "\ue0de": "\u65f6",
        "\ue668": "\u4e48",
        "\ue716": "\u672c",
        "\ue98d": "\u7740",
        "\ue4d7": "\u4ec0",
        "\ue170": "\u5411",
        "\ue67f": "\u7b11",
        "\ue5db": "\u897f",
        "\uebef": "\u4fbf",
        "\uec82": "\u95f4",
        "\ue748": "\u8bdd",
        "\ueb39": "\u4f46",
        "\ue7c7": "\u795e",
        "\ue094": "\u5341",
        "\ue427": "\u5973",
        "\uead2": "\u51e0",
        "\ue250": "\u4e66",
        "\ue4e8": "\u5230",
        "\ue08d": "\u4e8b",
        "\ue157": "\u793e",
        "\ue5d2": "\u73b0",
        "\ueefd": "\u679c",
        "\ue71c": "\u5c0f",
        "\ue9be": "\u8d70",
        "\ue87a": "\u53ef",
        "\ued12": "\u592a",
        "\ue2aa": "\u95ee",
        "\ue24a": "\u9ad8",
        "\ue6ef": "\u624d",
        "\uedd6": "\u4e0e",
        "\uebba": "\u8001",
        "\ue81e": "\u610f",
        "\uefa4": "\u4e2d",
        "\uee9f": "\u4e0a",
        "\ue578": "\u58f0",
        "\ue56a": "\u5bb6",
        "\ue6e2": "\u516c",
        "\ue02e": "\u5c06",
        "\uef4d": "\u529b",
        "\ue2fe": "\u5374",
        "\ue386": "\u5e74",
        "\uea0e": "\u5982",
        "\ue91a": "\u8fc7",
        "\ue2ee": "\u5927",
        "\ue7e0": "\u8005",
        "\uee72": "\u7406",
        "\ue756": "\u9053",
        "\ue603": "\u597d",
        "\ue001": "\u8bf4",
        "\ue498": "\u4e3b",
        "\uedb6": "\u513f",
        "\ue5fe": "\u5fc3",
        "\uebd8": "\u4e8e",
        "\ue8f3": "\u4e3a",
        "\uebee": "\u66f4",
        "\ue8df": "\u957f",
        "\ue13c": "\u524d",
        "\ue5cf": "\u628a",
        "\ue9fc": "\u4e0d",
        "\ue5bc": "\u5173",
        "\ue2f3": "\u56e0",
        "\ueb86": "\u4e4b",
        "\ue6dd": "\u5c31",
        "\ue1d7": "\u5e76",
        "\ued38": "\u5f53",
        "\ue882": "\u4f60",
        "\ue257": "\u542c",
        "\uef86": "\u7279",
        "\ue9a0": "\u4f53",
        "\ueefe": "\u4e24",
        "\uee69": "\u53e3",
        "\uee0c": "\u4f5c",
        "\uecd7": "\u70b9",
        "\ue20d": "\u540e",
        "\uecfe": "\u6210",
        "\ue00d": "\u6837",
        "\ue8d1": "\u4e0b",
        "\ue5c9": "\u6211",
        "\ue358": "\u4ece",
        "\ue0fe": "\u5b9a",
        "\ue746": "\u7684",
        "\ue11a": "\u5b9e",
        "\uee15": "\u4ee3",
        "\uef24": "\u5168",
        "\ued54": "\u800c",
        "\ue89c": "\u81ea",
        "\ue5d7": "\u6c14",
        "\ue632": "\u6587",
        "\uee3d": "\u4f7f",
        "\ued86": "\u7ed9",
        "\ueed9": "\u884c",
        "\uee9b": "\u6253",
        "\ue4f3": "\u7b49",
        "\ue88b": "\u6c11",
        "\uedb0": "\u5f88",
        "\uee95": "\u56de",
        "\ue94c": "\u52a8",
        "\ue2fd": "\u90a3",
        "\ue0a1": "\u7f8e",
        "\uea4d": "\u95e8",
        "\ue1e4": "\u770b",
        "\ue447": "\u6cd5",
        "\uea9e": "\u4e09",
        "\ue30f": "\u5bf9",
        "\ue5a1": "\u7531",
        "\ue3d8": "\u80fd",
        "\uee65": "\u6027",
        "\ue82e": "\u4e49",
        "\ue97e": "\u771f",
        "\ue377": "\u4e8c",
        "\uea70": "\u6559",
        "\ueff6": "\u4eec",
        "\ue96b": "\u8fd8",
        "\uebf4": "\u7528",
        "\uef2b": "\u7ecf",
        "\ueacb": "\u6765",
        "\ueb5b": "\u65e0",
        "\ueb0f": "\u88ab",
        "\ue37c": "\u91cc",
        "\uecb8": "\u4e2a",
        "\ue4a8": "\u7269",
        "\ue55a": "\u4e16",
        "\ue2c7": "\u8fdb",
        "\ue942": "\u4ed6",
        "\uea5b": "\u611f",
        "\ue2b3": "\u5206",
        "\uec2d": "\u91cd",
        "\ue3c7": "\u53f2",
        "\ue6b9": "\u8bba",
        "\uec4d": "\u8d77",
        "\uec5d": "\u60f3",
        "\ue67b": "\u4ee5",
        "\uecb5": "\u601d",
        "\ue913": "\u65e5",
        "\ue545": "\u5df1",
        "\ue3f7": "\u90e8",
        "\ue598": "\u591a",
        "\uef69": "\u6700",
        "\ued9e": "\u90fd",
        "\ue180": "\u522b",
        "\ue0e6": "\u89c1",
        "\uee2f": "\u5c11",
        "\ue7fa": "\u540d",
        "\ue4d1": "\u4eba",
        "\ue902": "\u76f8",
        "\uec44": "\u5916",
        "\ued29": "\u8eab",
        "\uee20": "\u5df2",
        "\uea39": "\u662f",
        "\uee23": "\u4f1a",
        "\ue212": "\u751f",
        "\ueef9": "\u56db",
        "\ueb78": "\u53ea",
        "\ued64": "\u8fd9",
        "\ueb7d": "\u518d",
        "\ue3e0": "\u4e86",
        "\ued18": "\u5929",
        "\ue938": "\u6ca1",
        "\ue6d4": "\u624b",
        "\ue5b2": "\u8981",
        "\uee52": "\u53bb",
        "\ueb66": "\u51fa",
        "\ue1fd": "\u7b2c",
        "\ue22f": "\u5730",
        "\uef3b": "\u6240",
        "\ueb2c": "\u9762",
    },
    jjwxcfont_001wb: {
        "\ue957": "\u6240",
        "\uef61": "\u7279",
        "\uee8c": "\u610f",
        "\ue646": "\u4f7f",
        "\ue1a7": "\u53d1",
        "\ue992": "\u8981",
        "\ue2e8": "\u77e5",
        "\ue169": "\u70b9",
        "\uecb7": "\u8fc7",
        "\uee13": "\u66f4",
        "\ue036": "\u5929",
        "\ue53e": "\u4e66",
        "\ue1ab": "\u4ed6",
        "\ue5b6": "\u60c5",
        "\uead5": "\u522b",
        "\ue09a": "\u4e0b",
        "\uedb8": "\u513f",
        "\ue525": "\u89c1",
        "\ue3f5": "\u6c11",
        "\uec5f": "\u7ed9",
        "\ue970": "\u548c",
        "\uee11": "\u5934",
        "\ueb97": "\u5c06",
        "\ue7eb": "\u65b0",
        "\ue5cf": "\u6210",
        "\ue5a1": "\u4eec",
        "\ue413": "\u540e",
        "\ued58": "\u793e",
        "\ued8f": "\u53bb",
        "\uefdf": "\u4ec0",
        "\ueb93": "\u56e0",
        "\ueb27": "\u4e0e",
        "\ue3ad": "\u51fa",
        "\ue6aa": "\u5176",
        "\ue692": "\u5b83",
        "\ue408": "\u90a3",
        "\ue640": "\u53e3",
        "\ue4c2": "\u4e00",
        "\uebec": "\u53f2",
        "\ueabd": "\u6b64",
        "\ue005": "\u4e48",
        "\ued06": "\u5728",
        "\ue047": "\u4f53",
        "\ue3ed": "\u5148",
        "\uecc3": "\u5730",
        "\ue3c8": "\u6b7b",
        "\ue98a": "\u628a",
        "\ue522": "\u4e2d",
        "\ue968": "\u770b",
        "\ue554": "\u592a",
        "\ue81c": "\u5927",
        "\ue891": "\u7684",
        "\ue800": "\u5173",
        "\uedf7": "\u6027",
        "\ueb80": "\u5973",
        "\ue9c3": "\u5199",
        "\ueb3e": "\u91cc",
        "\ue9d6": "\u800c",
        "\ue7bd": "\u4f60",
        "\ue1be": "\u90e8",
        "\uef48": "\u5982",
        "\ue1da": "\u5f88",
        "\ue22a": "\u88ab",
        "\uec38": "\u4eba",
        "\ue476": "\u795e",
        "\ueccc": "\u516c",
        "\ue8d9": "\u56de",
        "\ue634": "\u679c",
        "\ue2ed": "\u6700",
        "\ue204": "\u4ee5",
        "\ue0e9": "\u8d70",
        "\ue7fe": "\u4e0a",
        "\ue604": "\u5e74",
        "\ue220": "\u7269",
        "\ue9b0": "\u7531",
        "\ue872": "\u6b63",
        "\ueb03": "\u76f8",
        "\ue6a7": "\u4e8b",
        "\uead9": "\u5df2",
        "\ue4dc": "\u4e5f",
        "\ue296": "\u79cd",
        "\ueecf": "\u6587",
        "\ue072": "\u611f",
        "\uef46": "\u542c",
        "\uee7b": "\u662f",
        "\uee3d": "\u65e0",
        "\ue7c2": "\u591a",
        "\ueabf": "\u5b9e",
        "\ue8d6": "\u884c",
        "\uec36": "\u4e8e",
        "\ued36": "\u65f6",
        "\uea06": "\u56fd",
        "\ue29a": "\u5c0f",
        "\ue16a": "\u5c31",
        "\ue1ff": "\u4f46",
        "\ue136": "\u4f5c",
        "\ueeca": "\u8fd9",
        "\ue4a6": "\u7f8e",
        "\ue3f9": "\u5b66",
        "\ued89": "\u518d",
        "\ueb4f": "\u95e8",
        "\ue28b": "\u95f4",
        "\ue450": "\u65e5",
        "\ue852": "\u91cd",
        "\ue595": "\u957f",
        "\ue9b1": "\u53ef",
        "\ue48d": "\u53ea",
        "\ue508": "\u5b9a",
        "\ue132": "\u7528",
        "\ue977": "\u4e16",
        "\ue459": "\u5206",
        "\uef9b": "\u5316",
        "\ue0c9": "\u4e86",
        "\ue0bc": "\u6cd5",
        "\ueb09": "\u6253",
        "\ue84f": "\u95ee",
        "\ue36a": "\u4e09",
        "\ue9a2": "\u660e",
        "\ue160": "\u4e3a",
        "\ueab9": "\u771f",
        "\ue4bb": "\u81ea",
        "\ue06e": "\u5916",
        "\ue8cd": "\u624d",
        "\ue8bf": "\u5f00",
        "\ued10": "\u4e3b",
        "\ue485": "\u7b11",
        "\uedd0": "\u5168",
        "\ue0f1": "\u80fd",
        "\ueed5": "\u897f",
        "\ueb7c": "\u4e24",
        "\ue2ca": "\u601d",
        "\uea4d": "\u8bf4",
        "\ueb8a": "\u6709",
        "\ue4ef": "\u7136",
        "\ue4d2": "\u65b9",
        "\ue8c5": "\u6559",
        "\ueefd": "\u6c14",
        "\ue1e0": "\u4e49",
        "\ue262": "\u4e0d",
        "\uedbf": "\u624b",
        "\uec51": "\u58f0",
        "\ue9f0": "\u60f3",
        "\ue7ff": "\u4e8c",
        "\ue12a": "\u5df1",
        "\ue1a6": "\u5bf9",
        "\uee64": "\u5fc3",
        "\ue988": "\u4ece",
        "\uef77": "\u4f55",
        "\uebef": "\u7406",
        "\ueca3": "\u8005",
        "\ue0a2": "\u8bba",
        "\ue3a2": "\u5f53",
        "\ue2ab": "\u5341",
        "\ue63e": "\u529b",
        "\ued1e": "\u53c8",
        "\ueac6": "\u8eab",
        "\ueeff": "\u751f",
        "\ue6df": "\u8fdb",
        "\ue455": "\u9ad8",
        "\ue926": "\u7b2c",
        "\ue098": "\u4e4b",
        "\ueb73": "\u51e0",
        "\ue704": "\u5374",
        "\ue086": "\u8bdd",
        "\ue3e7": "\u767d",
        "\ue1d3": "\u672c",
        "\uecc1": "\u4f1a",
        "\ue927": "\u6211",
        "\uea2b": "\u5e76",
        "\ue4d9": "\u5bb6",
        "\uebf8": "\u8fd8",
        "\ue1fb": "\u9053",
        "\ue8bc": "\u5979",
        "\ue272": "\u7ecf",
        "\ueaaf": "\u4e9b",
        "\ue87f": "\u4ee3",
        "\uea7c": "\u5230",
        "\ue6e2": "\u540d",
        "\ue0b1": "\u6ca1",
        "\uee97": "\u4e2a",
        "\ueda6": "\u524d",
        "\ue9ce": "\u90fd",
        "\uefe8": "\u773c",
        "\ue31b": "\u5f97",
        "\ue934": "\u8001",
        "\ueb32": "\u4fbf",
        "\ue396": "\u73b0",
        "\ue6d6": "\u5411",
        "\ueb5e": "\u5b50",
        "\ue8ad": "\u7740",
        "\ueb81": "\u52a8",
        "\uea6f": "\u5c11",
        "\ue1d4": "\u9762",
        "\ue350": "\u540c",
        "\ue1db": "\u6837",
        "\uea31": "\u597d",
        "\ue583": "\u7b49",
        "\ue9b5": "\u6765",
        "\ue431": "\u56db",
        "\ue0e3": "\u8d77",
    },
    jjwxcfont_001yu: {
        "\uee1b": "\u9ad8",
        "\ue6cb": "\u5730",
        "\uec90": "\u53ef",
        "\ue991": "\u95f4",
        "\uee49": "\u8bba",
        "\ue3b0": "\u679c",
        "\uece3": "\u6587",
        "\ue1c9": "\u518d",
        "\ue2cc": "\u5bf9",
        "\ue015": "\u4e9b",
        "\ue415": "\u91cd",
        "\ue10e": "\u9762",
        "\ue523": "\u7b11",
        "\ue11b": "\u601d",
        "\ue996": "\u662f",
        "\ue453": "\u6ca1",
        "\uec05": "\u4e3b",
        "\uec31": "\u6253",
        "\ue0bc": "\u6cd5",
        "\uee81": "\u70b9",
        "\ueb23": "\u89c1",
        "\uea82": "\u624b",
        "\ue24f": "\u8005",
        "\ue291": "\u56fd",
        "\uebaf": "\u60c5",
        "\uef8e": "\u8d77",
        "\ue50c": "\u88ab",
        "\ue516": "\u58f0",
        "\ue2ce": "\u8eab",
        "\uea5d": "\u4f60",
        "\ue91e": "\u5e76",
        "\ue92d": "\u5316",
        "\uea30": "\u4f7f",
        "\uec4f": "\u5199",
        "\uee65": "\u6027",
        "\ue8a6": "\u5173",
        "\ue44e": "\u884c",
        "\ueaeb": "\u56de",
        "\ue1f3": "\u6c11",
        "\uec2e": "\u7279",
        "\ued1a": "\u90e8",
        "\ueadc": "\u751f",
        "\ue3d5": "\u4fbf",
        "\ue700": "\u5df2",
        "\uec6c": "\u7f8e",
        "\ue1ce": "\u65e0",
        "\uef7d": "\u770b",
        "\ue0b3": "\u95ee",
        "\ueb9f": "\u8001",
        "\ue5b9": "\u5230",
        "\ue002": "\u7269",
        "\uee9b": "\u628a",
        "\ue4cc": "\u4f53",
        "\ue4ee": "\u540d",
        "\ue1a9": "\u52a8",
        "\ueab1": "\u8d70",
        "\ue18d": "\u5c06",
        "\ue8ab": "\u4e8c",
        "\uefe7": "\u5b83",
        "\uedc0": "\u5927",
        "\ued21": "\u5b9a",
        "\ue9d9": "\u53f2",
        "\ue1b9": "\u5728",
        "\ue922": "\u795e",
        "\ue5e7": "\u51e0",
        "\ue934": "\u6b7b",
        "\ue6d0": "\u7531",
        "\ue478": "\u4eba",
        "\ue3b3": "\u793e",
        "\uec5f": "\u4e16",
        "\uede7": "\u8fd8",
        "\ue7ad": "\u4f5c",
        "\uea18": "\u529b",
        "\ue639": "\u5206",
        "\ueda7": "\u5f00",
        "\ue239": "\u91cc",
        "\ue2b4": "\u5148",
        "\uedd7": "\u6b63",
        "\ue8ae": "\u7740",
        "\ue6a1": "\u5bb6",
        "\uecc0": "\u53e3",
        "\ue617": "\u4f1a",
        "\ue99a": "\u53d1",
        "\ue236": "\u5982",
        "\ueaae": "\u65e5",
        "\ue855": "\u522b",
        "\ue2f3": "\u5f88",
        "\ue0fa": "\u66f4",
        "\ue34a": "\u4e8b",
        "\uec30": "\u4e0e",
        "\ue913": "\u542c",
        "\uef42": "\u5fc3",
        "\uebef": "\u95e8",
        "\ue273": "\u4ee3",
        "\ue69d": "\u8bdd",
        "\ue5af": "\u5973",
        "\ued8a": "\u4e0d",
        "\ue3e9": "\u8fdb",
        "\uecfc": "\u540e",
        "\uee2a": "\u7406",
        "\ue456": "\u77e5",
        "\ue753": "\u56e0",
        "\ueea6": "\u5b66",
        "\uea8f": "\u7ecf",
        "\uedb5": "\u4e24",
        "\ue8b5": "\u5b9e",
        "\ueaf8": "\u5168",
        "\uefc3": "\u4e09",
        "\uef3b": "\u5f53",
        "\ue0f2": "\u7b2c",
        "\ue050": "\u6559",
        "\ue18f": "\u5c0f",
        "\ue4c2": "\u4e48",
        "\ue1a6": "\u80fd",
        "\ue8f0": "\u4f55",
        "\uebab": "\u8fd9",
        "\ue283": "\u65b0",
        "\uee39": "\u6211",
        "\ueb6c": "\u7ed9",
        "\uecaa": "\u4e86",
        "\ue844": "\u4ee5",
        "\ue064": "\u90a3",
        "\uef47": "\u4e66",
        "\uee9d": "\u5341",
        "\ue3f3": "\u6210",
        "\ueed6": "\u957f",
        "\ued48": "\u5934",
        "\ue275": "\u79cd",
        "\ue95d": "\u7b49",
        "\uea5f": "\u624d",
        "\ue427": "\u800c",
        "\ue6ea": "\u60f3",
        "\ue956": "\u516c",
        "\ue483": "\u660e",
        "\ueeb0": "\u7684",
        "\ue984": "\u6837",
        "\ue100": "\u771f",
        "\ue52c": "\u5374",
        "\uedc1": "\u4ec0",
        "\uee76": "\u5df1",
        "\ueb33": "\u4e5f",
        "\ue7af": "\u7528",
        "\uee33": "\u5e74",
        "\ue923": "\u76f8",
        "\ue59c": "\u767d",
        "\ue43f": "\u5176",
        "\ue85a": "\u897f",
        "\ue6b3": "\u6240",
        "\ue836": "\u5c31",
        "\ued4b": "\u8981",
        "\ue7d0": "\u4e4b",
        "\ue968": "\u4e0b",
        "\ue42c": "\u5c11",
        "\uefeb": "\u4e3a",
        "\ue053": "\u51fa",
        "\uedfc": "\u4e49",
        "\ue4f0": "\u7136",
        "\ue113": "\u4e00",
        "\ueee7": "\u672c",
        "\ueb7d": "\u4e2d",
        "\ue774": "\u5f97",
        "\uedc5": "\u9053",
        "\ue5b2": "\u4f46",
        "\ueca1": "\u611f",
        "\ue80a": "\u5b50",
        "\ue764": "\u592a",
        "\ue6e4": "\u6765",
        "\ue1f1": "\u6709",
        "\ue139": "\u56db",
        "\ued8c": "\u4ece",
        "\ue4fb": "\u81ea",
        "\uec9f": "\u4eec",
        "\ue95e": "\u591a",
        "\uedb2": "\u773c",
        "\ueab6": "\u6700",
        "\uea8e": "\u6c14",
        "\ue67c": "\u5916",
        "\ue224": "\u8fc7",
        "\ue3eb": "\u65f6",
        "\uef56": "\u90fd",
        "\ue0c4": "\u540c",
        "\ue2a4": "\u5929",
        "\ueef0": "\u73b0",
        "\ue01d": "\u8bf4",
        "\ue40e": "\u5979",
        "\uec8a": "\u6b64",
        "\uef67": "\u4e0a",
        "\ue83a": "\u524d",
        "\ue0e1": "\u513f",
        "\uef75": "\u4e2a",
        "\ue34c": "\u4ed6",
        "\ued47": "\u5411",
        "\ue7a4": "\u4e8e",
        "\ue362": "\u53c8",
        "\ue5fb": "\u65b9",
        "\ue8a7": "\u53ea",
        "\uea14": "\u548c",
        "\ue227": "\u597d",
        "\ue636": "\u610f",
        "\ue769": "\u53bb",
    },
    jjwxcfont_00210: {
        "\ue510": "\u73b0",
        "\uedf1": "\u56db",
        "\ue9c1": "\u9762",
        "\ue17f": "\u5c11",
        "\ue8b8": "\u624d",
        "\ue0ad": "\u53e3",
        "\ueb92": "\u679c",
        "\ueae4": "\u56e0",
        "\ued7f": "\u65b0",
        "\ue4e7": "\u90e8",
        "\uef39": "\u79cd",
        "\uecbc": "\u58f0",
        "\ue4d0": "\u6b7b",
        "\ue3ff": "\u4e5f",
        "\uec76": "\u771f",
        "\uee58": "\u88ab",
        "\uea36": "\u9053",
        "\ue525": "\u773c",
        "\ue5fc": "\u4e2d",
        "\ueba6": "\u81ea",
        "\ue197": "\u4e16",
        "\ue67d": "\u8bf4",
        "\uef4f": "\u77e5",
        "\ued03": "\u95f4",
        "\ue35d": "\u610f",
        "\ue6ff": "\u7b11",
        "\ue9a6": "\u611f",
        "\ue6d2": "\u662f",
        "\ue5b9": "\u4f5c",
        "\ue47f": "\u522b",
        "\ue336": "\u5341",
        "\uef9d": "\u540d",
        "\ue109": "\u4e24",
        "\ue034": "\u65f6",
        "\ue044": "\u5411",
        "\ue048": "\u5b83",
        "\ue20b": "\u660e",
        "\ueda2": "\u60c5",
        "\ue4c3": "\u5206",
        "\uefbb": "\u7279",
        "\ue3c2": "\u6765",
        "\ue0cb": "\u8bba",
        "\ue5e3": "\u542c",
        "\ue122": "\u5730",
        "\ue4a7": "\u53ef",
        "\ue704": "\u601d",
        "\ue602": "\u4e86",
        "\ue61c": "\u8bdd",
        "\ue4ee": "\u540c",
        "\ue66b": "\u4eba",
        "\uebea": "\u4ec0",
        "\ue6a8": "\u8981",
        "\ue353": "\u4f60",
        "\ue68f": "\u91cd",
        "\ueb31": "\u516c",
        "\ue6b9": "\u4e8e",
        "\ue2a6": "\u8eab",
        x: "x",
        "\ue400": "\u5b9e",
        "\uedc1": "\u5168",
        "\ue363": "\u66f4",
        "\uefc8": "\u529b",
        "\ued1b": "\u4ece",
        "\ue3ac": "\u4e9b",
        "\ue8b2": "\u5c31",
        "\uebaa": "\u7ecf",
        "\ue8c9": "\u548c",
        "\ueb67": "\u5df2",
        "\uebdf": "\u6c11",
        "\ueaf1": "\u7528",
        "\ue0e5": "\u5927",
        "\uefe4": "\u6587",
        "\ue811": "\u7531",
        "\uec9e": "\u52a8",
        "\ue90c": "\u53f2",
        "\ue47c": "\u53ea",
        "\uec9a": "\u793e",
        "\ued57": "\u4ee5",
        "\ue477": "\u65b9",
        "\ue42e": "\u5148",
        "\uec97": "\u897f",
        "\ued82": "\u6027",
        "\ue067": "\u53d1",
        "\ue766": "\u5973",
        "\uec37": "\u5374",
        "\uef6d": "\u4f1a",
        "\ued49": "\u6709",
        "\ue42f": "\u4f55",
        "\ued5d": "\u624b",
        "\ue542": "\u5728",
        "\ue0c3": "\u770b",
        "\uecac": "\u4e4b",
        "\uec4e": "\u6211",
        "\ue0d2": "\u5916",
        "\uee45": "\u4e48",
        "\uea68": "\u4e0e",
        "\ued47": "\u7740",
        "\ue4b0": "\u80fd",
        "\uee34": "\u957f",
        "\ue13e": "\u7b49",
        "\ue39c": "\u7ed9",
        "\ue582": "\u592a",
        "\ue740": "\u4e8c",
        "\ue836": "\u4e2a",
        "\ued02": "\u91cc",
        "\ue282": "\u53c8",
        "\ue17a": "\u5f53",
        "\ue9d9": "\u4f7f",
        "\uee5c": "\u5173",
        "\uedb6": "\u6cd5",
        "\ue593": "\u5e76",
        "\ueeb9": "\u7f8e",
        "\ue38d": "\u6210",
        "\uec32": "\u5b50",
        "\uea7e": "\u751f",
        "\ueabc": "\u800c",
        "\ue36e": "\u5176",
        "\ue5ca": "\u5979",
        "\uedf0": "\u90a3",
        "\ue386": "\u4e66",
        "\ue514": "\u5b9a",
        "\ue8a4": "\u8fc7",
        "\ue46d": "\u4e0b",
        "\ue4f9": "\u9ad8",
        "\ue1db": "\u5e74",
        "\ue7e0": "\u4e09",
        "\uee53": "\u7b2c",
        "\ued22": "\u884c",
        "\ue434": "\u4ee3",
        "\ue987": "\u8001",
        "\ue31b": "\u5b66",
        "\uea40": "\u7136",
        "\uec9f": "\u767d",
        "\ue8e5": "\u5f88",
        "\uefbe": "\u5982",
        "\uee90": "\u7269",
        "\ue164": "\u4f46",
        "\uea5c": "\u56fd",
        "\ue3a2": "\u4e3b",
        "\ue6a3": "\u8d70",
        "\uef02": "\u518d",
        "\uedf6": "\u60f3",
        "\ued0b": "\u672c",
        "\ue366": "\u6700",
        "\uea95": "\u6b63",
        "\ue5bf": "\u4e0d",
        "\uefcf": "\u5c0f",
        "\ue6a1": "\u6240",
        "\ue8c5": "\u5bb6",
        "\ue5f4": "\u70b9",
        "\ueeea": "\u8005",
        "\ue82f": "\u5f97",
        "\ue401": "\u51e0",
        "\uecc6": "\u8fd9",
        "\ue454": "\u95ee",
        "\uefd6": "\u540e",
        "\ue0fa": "\u95e8",
        "\ue178": "\u524d",
        "\ue7ca": "\u597d",
        "\ue8ad": "\u6253",
        "\ue27d": "\u628a",
        "\ue5f3": "\u8d77",
        "\uea90": "\u51fa",
        "\ue947": "\u4ed6",
        "\ueca6": "\u4fbf",
        "\ue4d5": "\u6c14",
        "\ue4f5": "\u5316",
        "\ue1f5": "\u795e",
        "\ue5c3": "\u5934",
        "\ue689": "\u513f",
        "\ue797": "\u4e49",
        "\ue041": "\u6559",
        "\ue809": "\u591a",
        "\ue49f": "\u65e5",
        "\ue8ec": "\u53bb",
        "\ue0ee": "\u4e8b",
        "\ue3b5": "\u7406",
        "\ue979": "\u56de",
        "\ue038": "\u5929",
        "\ue933": "\u6ca1",
        "\ue73c": "\u8fd8",
        "\ue51c": "\u4e00",
        "\uebfa": "\u4e3a",
        "\ue499": "\u89c1",
        "\ue381": "\u5bf9",
        "\ueee3": "\u5df1",
        "\ue945": "\u5f00",
        "\ue441": "\u4f53",
        "\ued4a": "\u4eec",
        "\ue53a": "\u6837",
        "\ue663": "\u7684",
        "\uef85": "\u5fc3",
        "\ue25f": "\u5c06",
        "\uee91": "\u5199",
        "\ue3ef": "\u6b64",
        "\ue97d": "\u90fd",
        "\ueb8e": "\u5230",
        "\ue0c6": "\u4e0a",
        "\ue135": "\u65e0",
        "\uea47": "\u76f8",
        "\uece6": "\u8fdb",
    },
    jjwxcfont_0023v: {
        "\ue543": "\u8fd8",
        "\ue09c": "\u7684",
        "\ue2da": "\u4e3a",
        "\uee51": "\u8fd9",
        "\ue276": "\u5f00",
        "\ue512": "\u52a8",
        "\uee5e": "\u4f60",
        "\uebfa": "\u4ec0",
        "\ue686": "\u957f",
        "\ue81e": "\u81ea",
        "\ue477": "\u4fbf",
        "\ueac2": "\u89c1",
        "\uee4f": "\u88ab",
        "\ue1bb": "\u79cd",
        "\ue984": "\u6587",
        "\ue5a7": "\u9762",
        "\ueb4a": "\u5934",
        "\uef31": "\u4e8e",
        "\uea23": "\u8981",
        "\ue609": "\u524d",
        "\uee44": "\u6027",
        "\ue837": "\u7136",
        "\ueff1": "\u7740",
        "\uea83": "\u6b63",
        "\ue2aa": "\u4e2d",
        "\ue2e0": "\u8fdb",
        "\ue1ac": "\u7279",
        "\ue65c": "\u7f8e",
        "\ue4c9": "\u6559",
        "\ueba5": "\u90a3",
        "\ue831": "\u5f97",
        "\uee20": "\u5bf9",
        "\ue2b9": "\u751f",
        "\ue8b1": "\u4ee3",
        "\ue5f9": "\u548c",
        "\ue91e": "\u4e0b",
        "\ue6a5": "\u53ea",
        "\uebe4": "\u672c",
        "\ued2a": "\u7269",
        "\uee1a": "\u5c31",
        "\ue68a": "\u6210",
        "\ue014": "\u53f2",
        "\uea48": "\u5e76",
        "\uea20": "\u542c",
        "\ueec9": "\u601d",
        "\ue308": "\u5979",
        "\ueb93": "\u6b7b",
        "\ue9a8": "\u5199",
        "\uee46": "\u8d70",
        "\ue0a6": "\u56fd",
        "\ue714": "\u73b0",
        "\ue6f0": "\u5b66",
        "\ue341": "\u53d1",
        "\uef7f": "\u5b9e",
        "\uebf3": "\u5c0f",
        "\ue800": "\u7ecf",
        "\ue68c": "\u65b9",
        "\ued8b": "\u5927",
        "\uebee": "\u597d",
        "\ue946": "\u5bb6",
        "\ueb49": "\u540e",
        "\ue4dd": "\u5341",
        "\ue333": "\u7406",
        "\ue7eb": "\u5df2",
        "\ue5f4": "\u6700",
        "\uec5d": "\u5411",
        "\ueafa": "\u58f0",
        "\ue83d": "\u95ee",
        "\ue971": "\u4ee5",
        "\uec9b": "\u8001",
        "\ue069": "\u7b11",
        "\ue7df": "\u90e8",
        "\uec4e": "\u5df1",
        "\ue924": "\u4e3b",
        "\ue212": "\u5f53",
        "\ue7a4": "\u5206",
        "\ue5a9": "\u6765",
        "\uec2a": "\u6837",
        "\ue622": "\u7528",
        "\ue8dd": "\u771f",
        "\ue3b0": "\u95e8",
        "\ue2af": "\u5230",
        "\ue5b4": "\u8bba",
        "\ueded": "\u4f7f",
        "\uec61": "\u5f88",
        "\uea7c": "\u795e",
        "\uec68": "\u4e8c",
        "\uec31": "\u4e4b",
        "\ue9a9": "\u518d",
        "\ue5a1": "\u5c11",
        "\ue269": "\u56de",
        "\ue05b": "\u5b83",
        "\ue5ff": "\u8eab",
        "\ue2ac": "\u4e0d",
        "\uec85": "\u8bf4",
        "\ue725": "\u9053",
        "\uee63": "\u5728",
        "\ue501": "\u53bb",
        "\ue8a2": "\u529b",
        "\uedf5": "\u60c5",
        "\uec00": "\u540c",
        "\ue1b6": "\u6b64",
        "\ue604": "\u897f",
        "\ue791": "\u4e0e",
        "\ue07f": "\u4e86",
        x: "x",
        "\ue7d1": "\u767d",
        "\ue4d9": "\u5916",
        "\ue768": "\u6253",
        "\uee72": "\u80fd",
        "\ue059": "\u6211",
        "\uebe5": "\u592a",
        "\ue148": "\u60f3",
        "\ueadb": "\u4f53",
        "\uec8e": "\u4e5f",
        "\uea87": "\u610f",
        "\ue557": "\u6ca1",
        "\uefc7": "\u4f5c",
        "\ue2e2": "\u793e",
        "\ue147": "\u628a",
        "\ueefa": "\u624d",
        "\ue337": "\u8d77",
        "\uec23": "\u4f1a",
        "\ueeef": "\u8005",
        "\ue776": "\u56d7",
        "\uef1d": "\u5374",
        "\uef27": "\u65e0",
        "\ue54c": "\u91cd",
        "\ue5e5": "\u5b9a",
        "\uef2c": "\u624b",
        "\uee7a": "\u4e0a",
        "\uef29": "\u51fa",
        "\ue9e1": "\u5316",
        "\ue10c": "\u51e0",
        "\ue90d": "\u65b0",
        "\ue5e8": "\u77e5",
        "\ue072": "\u540d",
        "\ue098": "\u56db",
        "\ued09": "\u516c",
        "\ueea6": "\u8fc7",
        "\ue821": "\u95f4",
        "\uedc3": "\u5973",
        "\uee6f": "\u4e16",
        "\ue373": "\u4e66",
        "\ue0ab": "\u65f6",
        "\ue4a8": "\u8bdd",
        "\ueec8": "\u7531",
        "\ue8fb": "\u5730",
        "\ue70b": "\u5fc3",
        "\uecb1": "\u4e2a",
        "\uede0": "\u773c",
        "\ueaab": "\u91cc",
        "\ue11a": "\u56e0",
        "\uedb6": "\u662f",
        "\ue91b": "\u5168",
        "\ue4c5": "\u4f46",
        "\ue66c": "\u6709",
        "\ue862": "\u4e00",
        "\ue9eb": "\u6c14",
        "\ueae0": "\u90fd",
        "\ued96": "\u660e",
        "\ueefd": "\u65e5",
        "\uee41": "\u5982",
        "\ueaa1": "\u770b",
        "\ueaee": "\u4ed6",
        "\ue340": "\u4e9b",
        "\uee39": "\u4e09",
        "\ue4ff": "\u4eec",
        "\ue287": "\u800c",
        "\ue09a": "\u6240",
        "\ue2a7": "\u4e49",
        "\ue840": "\u5b50",
        "\ue5ef": "\u4e8b",
        "\ue5a3": "\u884c",
        "\ue74b": "\u591a",
        "\uead6": "\u6cd5",
        "\ue9f4": "\u5173",
        "\uef93": "\u513f",
        "\ue844": "\u66f4",
        "\ue9e2": "\u7b2c",
        "\ueecf": "\u5e74",
        "\ued1c": "\u7ed9",
        "\ue299": "\u5c06",
        "\ue751": "\u5176",
        "\ue744": "\u53ef",
        "\uee9e": "\u4f55",
        "\ue046": "\u679c",
        "\ueae8": "\u53c8",
        "\uefab": "\u6c11",
        "\ue0d6": "\u611f",
        "\ue9bc": "\u4e48",
        "\ue07c": "\u7b49",
        "\ue7b1": "\u5929",
        "\ue9a7": "\u5148",
        "\ue6d2": "\u4e24",
        "\uecb0": "\u76f8",
        "\ue3a0": "\u70b9",
        "\uee56": "\u4ece",
        "\ue25f": "\u522b",
        "\ue618": "\u9ad8",
        "\ue847": "\u4eba",
    },
    jjwxcfont_0026b: {
        "\ue290": "\u5929",
        "\ue61b": "\u95f4",
        "\ue9be": "\u6240",
        "\ueaef": "\u4ed6",
        "\ue694": "\u7b11",
        "\uee34": "\u4e48",
        "\ue67c": "\u89c1",
        "\ued30": "\u66f4",
        "\uefa0": "\u9053",
        "\ue208": "\u8981",
        "\ue691": "\u592a",
        "\ue7fe": "\u56e0",
        "\ued0a": "\u516c",
        "\ue9b2": "\u6837",
        "\ued1f": "\u6cd5",
        "\ue5d6": "\u81ea",
        "\ue5bb": "\u65b0",
        "\uecfe": "\u8bdd",
        "\uefc9": "\u4f46",
        "\ue77d": "\u6709",
        "\ue230": "\u65b9",
        "\ue331": "\u771f",
        "\ue5b6": "\u4ece",
        "\ueed8": "\u4ee5",
        "\uea95": "\u4e8c",
        "\ue5ea": "\u53bb",
        "\ue369": "\u5f00",
        "\ue64f": "\u88ab",
        "\ue118": "\u7ed9",
        "\ueb15": "\u767d",
        "\ued78": "\u5b66",
        "\ue43a": "\u95e8",
        "\ue9fd": "\u513f",
        "\ue667": "\u7740",
        "\ue571": "\u5b9e",
        "\ueef9": "\u60c5",
        "\ue1c2": "\u5341",
        "\ued9b": "\u5b83",
        "\ue4c3": "\u4e0b",
        "\ue543": "\u4e8b",
        "\ue0dd": "\u7406",
        "\ue468": "\u7684",
        "\ueda1": "\u4e24",
        "\uee9f": "\u5f88",
        "\ue7bb": "\u4ee3",
        "\ue38a": "\u5c0f",
        "\ue8a8": "\u8d70",
        "\ue4bd": "\u4fbf",
        "\ued19": "\u548c",
        "\uee74": "\u7b2c",
        "\ueef8": "\u800c",
        "\ue48d": "\u5fc3",
        "\ue75f": "\u4e9b",
        "\ue7a9": "\u8fc7",
        "\ue659": "\u5982",
        "\uec4e": "\u8d77",
        "\uedc6": "\u5411",
        "\ue27f": "\u8001",
        "\uee82": "\u5979",
        "\ue28d": "\u4f7f",
        "\ue133": "\u628a",
        "\ue1d2": "\u5bb6",
        "\uec6d": "\u4e8e",
        "\ue695": "\u9ad8",
        "\ue48e": "\u5b9a",
        "\ue36e": "\u53d1",
        "\ue979": "\u77e5",
        "\ue14d": "\u8fd8",
        "\ueefa": "\u518d",
        "\ue2de": "\u53c8",
        "\ueb8c": "\u4eba",
        "\ue6f9": "\u52a8",
        "\ue2c8": "\u65e0",
        "\ue5fd": "\u5730",
        "\ue235": "\u58f0",
        "\ueed9": "\u5e76",
        "\ue971": "\u6b7b",
        "\ue907": "\u95ee",
        "\uef52": "\u6b63",
        "\ue753": "\u65e5",
        "\uebef": "\u4e4b",
        "\ue05f": "\u6253",
        "\ue9d3": "\u8005",
        "\ue025": "\u90fd",
        "\ueb33": "\u660e",
        "\ue35d": "\u6c14",
        "\ue640": "\u79cd",
        "\uef8c": "\u524d",
        "\ue109": "\u6027",
        "\ue7a4": "\u4f60",
        "\ue2a9": "\u6211",
        "\ue675": "\u4f55",
        "\ued7e": "\u53e3",
        "\ue24c": "\u4e66",
        x: "x",
        "\uedd3": "\u542c",
        "\uea4b": "\u90a3",
        "\ue5e8": "\u70b9",
        "\ue69d": "\u6ca1",
        "\ue49e": "\u5168",
        "\ue25e": "\u80fd",
        "\uec1b": "\u4e5f",
        "\ue343": "\u53f2",
        "\ue059": "\u8eab",
        "\ue4e3": "\u4e2a",
        "\ue812": "\u4e49",
        "\uebde": "\u56fd",
        "\ue6e5": "\u522b",
        "\uedba": "\u5bf9",
        "\ue21d": "\u7b49",
        "\ue2b3": "\u51e0",
        "\ue646": "\u6587",
        "\ue6eb": "\u4e0d",
        "\ue170": "\u4e3b",
        "\ue567": "\u540e",
        "\uec63": "\u672c",
        "\ue10a": "\u5316",
        "\ued34": "\u53ea",
        "\ueb6d": "\u6559",
        "\ue5a0": "\u751f",
        "\ue9d8": "\u5927",
        "\ue7b3": "\u897f",
        "\uec8e": "\u7528",
        "\ue78d": "\u529b",
        "\ue9fb": "\u4e0e",
        "\uea61": "\u6700",
        "\ue965": "\u5c31",
        "\ue4fd": "\u5199",
        "\ue697": "\u773c",
        "\ue76d": "\u73b0",
        "\ue69b": "\u679c",
        "\ue992": "\u611f",
        "\ue8ab": "\u5973",
        "\ueddd": "\u90e8",
        "\uee80": "\u4e3a",
        "\ue0eb": "\u5b50",
        "\ue1e3": "\u8bba",
        "\ue6d3": "\u91cd",
        "\ue205": "\u5916",
        "\ued63": "\u4eec",
        "\ue040": "\u60f3",
        "\ue8e1": "\u4f5c",
        "\ue012": "\u793e",
        "\uebab": "\u884c",
        "\ue8b7": "\u5df2",
        "\ue911": "\u7f8e",
        "\ue12b": "\u7269",
        "\ue6f8": "\u5206",
        "\ue9ed": "\u5e74",
        "\ue2ef": "\u601d",
        "\ue528": "\u7136",
        "\ue016": "\u4f53",
        "\ueb02": "\u597d",
        "\ue441": "\u5c11",
        "\ue158": "\u4e0a",
        "\uefbc": "\u5728",
        "\uee13": "\u56de",
        "\ue346": "\u6765",
        "\ue5a9": "\u8bf4",
        "\uea7e": "\u53ef",
        "\ue683": "\u5374",
        "\ue591": "\u624d",
        "\ue169": "\u91cc",
        "\ue0dc": "\u540d",
        "\uee02": "\u4ec0",
        "\ue166": "\u51fa",
        "\ue0bc": "\u4e86",
        "\ue7ec": "\u6210",
        "\ue9ea": "\u957f",
        "\ue3f8": "\u5230",
        "\ue04f": "\u5148",
        "\uea86": "\u6c11",
        "\ue517": "\u5df1",
        "\ueb9f": "\u5934",
        "\ue386": "\u4e16",
        "\ue32c": "\u770b",
        "\uee23": "\u7531",
        "\ue8f8": "\u5176",
        "\ue1d0": "\u6b64",
        "\ue68e": "\u662f",
        "\uebac": "\u610f",
        "\ue2a4": "\u4e09",
        "\uec82": "\u8fd9",
        "\ue5c8": "\u4e2d",
        "\ued71": "\u540c",
        "\ue8de": "\u4f1a",
        "\ue3d3": "\u5173",
        "\ue819": "\u7279",
        "\ue779": "\u5f53",
        "\ue4d0": "\u795e",
        "\ue232": "\u65f6",
        "\ue5c4": "\u4e00",
        "\uef34": "\u624b",
        "\ueb13": "\u5f97",
        "\uee70": "\u5c06",
        "\ue6a0": "\u7ecf",
        "\ue393": "\u8fdb",
        "\ue55a": "\u76f8",
        "\ue8e7": "\u591a",
        "\uecb2": "\u9762",
        "\ued6a": "\u56db",
    },
    jjwxcfont_00294: {
        "\ue64e": "\u5374",
        "\uea98": "\u4e0b",
        "\ue0fe": "\u7b11",
        "\ue809": "\u7528",
        "\ue737": "\u540d",
        "\ueacc": "\u540c",
        "\ue0b9": "\u5f97",
        "\ue589": "\u53d1",
        "\uece8": "\u610f",
        "\ue296": "\u5316",
        "\ueea1": "\u7684",
        "\ue866": "\u5973",
        "\uea94": "\u4e2a",
        "\ue877": "\u53c8",
        "\ue772": "\u90e8",
        "\ue159": "\u6837",
        "\ue2e3": "\u88ab",
        "\ue037": "\u5b83",
        "\ue652": "\u5341",
        "\uefd8": "\u6ca1",
        "\ue7e2": "\u5f88",
        "\uecab": "\u4e00",
        "\uefe5": "\u5199",
        "\ue7a2": "\u81ea",
        "\ue094": "\u65b9",
        "\ue0b6": "\u548c",
        "\ue6aa": "\u4e24",
        "\ue2be": "\u5c06",
        "\ueeaf": "\u89c1",
        "\ue84a": "\u5934",
        "\uee0d": "\u624b",
        "\ue609": "\u6b63",
        "\ue00f": "\u95f4",
        "\ue50d": "\u770b",
        "\ue58b": "\u513f",
        "\ueec1": "\u4e8b",
        "\ue7f6": "\u793e",
        "\ue8e4": "\u4e86",
        "\ue05d": "\u5bf9",
        "\ue18f": "\u7279",
        "\uea59": "\u5411",
        "\ue5cd": "\u5e74",
        "\ue45a": "\u601d",
        "\ue523": "\u90fd",
        "\ueeb2": "\u611f",
        "\ue6de": "\u4f55",
        "\ue9b9": "\u56db",
        "\ueba9": "\u7f8e",
        "\ue6d2": "\u6211",
        "\ue731": "\u5b66",
        "\ue5b2": "\u5206",
        "\ued78": "\u4e49",
        "\ueb85": "\u79cd",
        "\ueaa5": "\u628a",
        "\ue3f5": "\u6c11",
        "\ue997": "\u5916",
        "\ue183": "\u7ed9",
        "\uedd1": "\u5929",
        "\uee46": "\u65e0",
        "\ue11c": "\u66f4",
        "\uef10": "\u6cd5",
        "\ue51f": "\u5f53",
        "\ue1fc": "\u5b9e",
        "\ue2f2": "\u8fc7",
        "\ue655": "\u5173",
        "\ue156": "\u6700",
        "\uec5d": "\u5168",
        "\uee49": "\u56e0",
        "\ue52b": "\u767d",
        "\ue99b": "\u65b0",
        "\ueccd": "\u591a",
        "\ue0af": "\u6587",
        "\ue76e": "\u53bb",
        "\ue525": "\u91cc",
        "\ue14b": "\u5982",
        "\ueb9d": "\u65f6",
        "\ue692": "\u522b",
        "\ue21b": "\u5230",
        "\ue52d": "\u795e",
        "\ue4ba": "\u524d",
        "\uee87": "\u597d",
        "\ue727": "\u672c",
        "\uee0c": "\u8eab",
        "\ue599": "\u6027",
        "\ue7a7": "\u4f60",
        "\ue732": "\u773c",
        "\ue354": "\u884c",
        "\uee8f": "\u8bba",
        "\ue799": "\u7740",
        "\ue370": "\u8bdd",
        "\ue895": "\u4f53",
        "\ue5e2": "\u5b9a",
        "\ue8b6": "\u5bb6",
        "\uefa8": "\u80fd",
        "\ue8c4": "\u771f",
        "\ue84f": "\u4f1a",
        "\uecdc": "\u897f",
        "\uee50": "\u4f46",
        "\ue5d7": "\u5730",
        "\uea25": "\u5df2",
        "\uefe7": "\u5e76",
        "\uef2f": "\u6559",
        "\uea6a": "\u56fd",
        "\ue2d8": "\u5c31",
        "\ue134": "\u8fdb",
        "\ue2dd": "\u4ece",
        "\uec21": "\u60c5",
        "\ue321": "\u95ee",
        "\uecdf": "\u8005",
        "\ueae9": "\u53f2",
        "\ue4e2": "\u51e0",
        "\ue3fb": "\u4e9b",
        "\ued39": "\u7531",
        "\ue0c5": "\u51fa",
        "\ue7ba": "\u6c14",
        "\ue6b5": "\u5c11",
        "\ue17b": "\u4eba",
        "\ue47b": "\u6709",
        "\uece7": "\u4ee3",
        "\ueefc": "\u4e48",
        "\uedae": "\u624d",
        "\uefa4": "\u4f7f",
        "\ue959": "\u8d77",
        "\uee9d": "\u76f8",
        "\ue35a": "\u6240",
        "\ue946": "\u58f0",
        "\uef56": "\u8fd9",
        "\ue851": "\u7406",
        x: "x",
        "\ue0cb": "\u73b0",
        "\ueeb7": "\u4e2d",
        "\ueb0c": "\u5176",
        "\ue7df": "\u77e5",
        "\ue9cb": "\u518d",
        "\ueef4": "\u4f5c",
        "\ue430": "\u90a3",
        "\uea48": "\u5df1",
        "\uef9e": "\u4e09",
        "\ueaff": "\u7ecf",
        "\ue85a": "\u4e8e",
        "\ue966": "\u8d70",
        "\ue1b5": "\u70b9",
        "\ue776": "\u800c",
        "\ueba0": "\u6b7b",
        "\ueb62": "\u5148",
        "\ue8ed": "\u60f3",
        "\ue01d": "\u4eec",
        "\uef8c": "\u529b",
        "\ueefa": "\u5b50",
        "\ue143": "\u4e8c",
        "\ue127": "\u91cd",
        "\ue438": "\u516c",
        "\ue50e": "\u9053",
        "\ue878": "\u4ec0",
        "\uefe8": "\u4e4b",
        "\uebd8": "\u4ee5",
        "\ue9fb": "\u7269",
        "\ued1a": "\u957f",
        "\ue070": "\u52a8",
        "\ue68a": "\u53ef",
        "\ue41c": "\u53ea",
        "\ue360": "\u9762",
        "\ue435": "\u4e3b",
        "\ue800": "\u4e66",
        "\ue6b1": "\u540e",
        "\ueea4": "\u7b2c",
        "\ue663": "\u4e16",
        "\ue498": "\u7b49",
        "\uea6e": "\u5979",
        "\ue87a": "\u95e8",
        "\ue8f0": "\u5927",
        "\ueb04": "\u679c",
        "\uefe3": "\u6765",
        "\ueefd": "\u542c",
        "\ue36e": "\u8bf4",
        "\uea8c": "\u5fc3",
        "\ue3f1": "\u7136",
        "\ue681": "\u8981",
        "\ue56e": "\u5f00",
        "\ueca5": "\u5c0f",
        "\ue803": "\u9ad8",
        "\ue974": "\u4fbf",
        "\uec45": "\u53e3",
        "\ueec2": "\u65e5",
        "\ue9a6": "\u6210",
        "\ue306": "\u8fd8",
        "\ue9dd": "\u6b64",
        "\ueb89": "\u592a",
        "\ue26b": "\u4ed6",
        "\ueb7e": "\u8001",
        "\uefbc": "\u4e0a",
        "\ue793": "\u751f",
        "\uec70": "\u660e",
        "\ue2c7": "\u4e0d",
        "\ue45b": "\u4e5f",
        "\ue07f": "\u4e0e",
        "\ue45f": "\u6253",
        "\uee72": "\u5728",
        "\ue0c6": "\u4e3a",
        "\ue1c0": "\u56de",
        "\ueb7b": "\u662f",
    },
    jjwxcfont_002e2: {
        "\uea72": "\u8fdb",
        "\uedad": "\u4ed6",
        "\ue7c6": "\u800c",
        "\ue711": "\u5206",
        "\ue554": "\u957f",
        "\ueef7": "\u793e",
        "\ue9c4": "\u6b63",
        "\ueba7": "\u9762",
        "\uedf7": "\u5bf9",
        "\ue935": "\u7136",
        "\ue875": "\u592a",
        "\ue22c": "\u548c",
        "\ue723": "\u8fd8",
        "\ue872": "\u770b",
        "\ue977": "\u6211",
        "\ue8c0": "\u771f",
        "\ued5c": "\u95f4",
        "\ue7a3": "\u4f60",
        "\uea63": "\u591a",
        "\ue7f8": "\u51fa",
        "\ue62e": "\u88ab",
        "\ue7ef": "\u8d77",
        "\ue8c5": "\u7740",
        "\uea7f": "\u751f",
        "\ued3d": "\u5374",
        "\uebb2": "\u8bf4",
        "\ue98b": "\u7684",
        "\ue44e": "\u4e0d",
        "\ueb74": "\u5934",
        "\ueeb5": "\u5fc3",
        "\ueb8e": "\u8005",
        "\ue12c": "\u5b9e",
        "\uea37": "\u4eec",
        "\ue1bd": "\u5c31",
        "\ue14e": "\u5df2",
        "\ue89a": "\u518d",
        "\uea22": "\u66f4",
        "\ue3b2": "\u79cd",
        "\uee23": "\u7531",
        "\uea87": "\u56e0",
        "\ue53a": "\u53ea",
        "\ue2c7": "\u5df1",
        "\ue76b": "\u53c8",
        "\ue2e0": "\u5973",
        "\ue726": "\u6c11",
        "\ue12f": "\u56fd",
        "\ueda5": "\u5411",
        "\uedb3": "\u56de",
        "\uef67": "\u4ee5",
        "\uebb4": "\u5b83",
        "\uea1c": "\u6ca1",
        "\ueb40": "\u6837",
        "\uee9d": "\u7b2c",
        "\ued7b": "\u4f7f",
        "\uee04": "\u513f",
        "\uecbe": "\u660e",
        "\ue461": "\u4e8c",
        "\uea11": "\u5927",
        "\ue3f9": "\u5916",
        "\ue86e": "\u540d",
        "\ue937": "\u7269",
        "\uee50": "\u4e16",
        "\ued5d": "\u73b0",
        "\uebfb": "\u7528",
        "\ue0ca": "\u4e2d",
        "\ued9e": "\u4f55",
        "\ue80f": "\u516c",
        "\ue43f": "\u8001",
        "\ue04c": "\u8981",
        "\ue612": "\u5230",
        "\ue5be": "\u7b49",
        "\ue09a": "\u4e3b",
        "\ueb4d": "\u4e48",
        "\uea2e": "\u65b9",
        "\uee6a": "\u5979",
        "\ueb45": "\u5341",
        "\ue238": "\u897f",
        "\ueaab": "\u6559",
        "\ue6db": "\u597d",
        "\ue9a5": "\u6709",
        "\ue724": "\u5173",
        "\ue044": "\u5929",
        "\ueaa5": "\u884c",
        "\ue03f": "\u7279",
        "\uee67": "\u540e",
        "\ued75": "\u77e5",
        "\ue8dc": "\u5b66",
        "\ue312": "\u81ea",
        "\ue0f2": "\u5f97",
        "\ue2ae": "\u767d",
        "\ued91": "\u60f3",
        "\ue9b0": "\u4e86",
        "\uea57": "\u4fbf",
        "\ue086": "\u8d70",
        "\ue751": "\u4f5c",
        "\ue253": "\u4e9b",
        "\uecbd": "\u624d",
        "\ue4ee": "\u8fc7",
        "\ue927": "\u53ef",
        "\uea73": "\u7ed9",
        "\ue83f": "\u5e76",
        "\ue9fa": "\u5c11",
        "\ue174": "\u5728",
        "\ue1e7": "\u70b9",
        "\uea78": "\u4e0a",
        "\ue510": "\u628a",
        "\ue227": "\u95ee",
        "\ued35": "\u51e0",
        "\ue8fa": "\u4e49",
        "\uee82": "\u4f1a",
        "\ue422": "\u5199",
        "\ue35a": "\u53f2",
        "\uef95": "\u5982",
        "\uee62": "\u9053",
        "\ue574": "\u4e09",
        "\ue4fa": "\u6210",
        "\ue0c5": "\u524d",
        "\ue5ea": "\u4e4b",
        "\ue684": "\u9ad8",
        "\ueaed": "\u4e8e",
        "\ue2e3": "\u601d",
        "\ue212": "\u53bb",
        "\ue16f": "\u90e8",
        "\ue2dc": "\u5e74",
        "\ue783": "\u7f8e",
        "\ue2d1": "\u6c14",
        "\ue5cd": "\u5f88",
        "\ue8d9": "\u529b",
        "\ue80b": "\u5b9a",
        "\uef15": "\u4ec0",
        "\ue51c": "\u4e0b",
        "\ue1d3": "\u4e2a",
        "\uef5f": "\u76f8",
        "\ue34f": "\u6b7b",
        "\ue6a1": "\u53e3",
        "\uec30": "\u8bba",
        "\uecdd": "\u6765",
        "\ue92e": "\u56db",
        "\ueaca": "\u6240",
        "\ue837": "\u65e0",
        "\ue9fc": "\u4e24",
        "\uec95": "\u4e5f",
        "\ue7d4": "\u4e00",
        "\ue1c9": "\u4eba",
        "\ue6de": "\u52a8",
        "\ueabd": "\u542c",
        "\uea2d": "\u662f",
        "\uef38": "\u7406",
        "\ue5c0": "\u522b",
        "\ue95f": "\u8bdd",
        "\uec82": "\u5730",
        "\ue409": "\u8eab",
        "\ue2be": "\u5f53",
        "\uefde": "\u672c",
        "\uea97": "\u6700",
        "\ue37c": "\u4f53",
        "\ue644": "\u773c",
        "\uecff": "\u5316",
        "\ue417": "\u65b0",
        "\ueb4a": "\u5f00",
        "\ue98f": "\u679c",
        "\uee5d": "\u4f46",
        "\ue911": "\u53d1",
        "\ue109": "\u6cd5",
        "\uefe4": "\u58f0",
        "\ue4ff": "\u6253",
        "\ue4d3": "\u91cc",
        "\uef9d": "\u89c1",
        "\ue993": "\u795e",
        "\uec08": "\u65f6",
        "\ueb24": "\u4ece",
        "\uea13": "\u624b",
        "\ue100": "\u611f",
        "\ue144": "\u5b50",
        "\ue0e2": "\u4e0e",
        "\ue546": "\u60c5",
        "\ue709": "\u4ee3",
        "\ueb54": "\u6027",
        "\uef71": "\u5148",
        "\ue08e": "\u6587",
        "\ueba0": "\u6b64",
        "\uee3c": "\u5176",
        "\ue25b": "\u4e8b",
        "\ue27b": "\u5c0f",
        "\ue858": "\u540c",
        "\uee53": "\u5168",
        "\ue6f2": "\u65e5",
        "\uec77": "\u8fd9",
        "\uec26": "\u90fd",
        "\ue350": "\u90a3",
        "\ue970": "\u4e66",
        "\ue73e": "\u4e3a",
        "\ue982": "\u91cd",
        "\uea19": "\u5bb6",
        "\ue2bb": "\u80fd",
        "\ue438": "\u5c06",
        "\ue23e": "\u610f",
        "\uea1d": "\u7ecf",
        "\ue1f0": "\u7b11",
        "\ue2d0": "\u95e8",
    },
    jjwxcfont_002em: {
        "\uec64": "\u53bb",
        "\ueb2c": "\u522b",
        "\ue1d5": "\u611f",
        "\uefd7": "\u95f4",
        "\uef18": "\u8981",
        "\ue6a1": "\u6c11",
        "\ue028": "\u90fd",
        "\ued6b": "\u751f",
        "\ueff1": "\u7b11",
        "\uee53": "\u4ec0",
        "\ue030": "\u540e",
        "\uee4d": "\u4f55",
        "\ue3f5": "\u4e66",
        "\ue756": "\u53d1",
        "\ue6bc": "\u95e8",
        "\uedeb": "\u6b7b",
        "\ue1db": "\u7ed9",
        "\ue090": "\u9ad8",
        "\ue8d7": "\u5b9e",
        "\uec49": "\u4e24",
        "\ue905": "\u4e9b",
        "\ued40": "\u5f00",
        "\ue00e": "\u524d",
        "\ue301": "\u8fd8",
        "\ue003": "\u6cd5",
        "\ue2f6": "\u5b66",
        "\ue11c": "\u601d",
        "\ue9bc": "\u5230",
        "\ue6e8": "\u770b",
        "\uee5f": "\u80fd",
        "\ueeb4": "\u592a",
        "\ue9d6": "\u5374",
        "\ue633": "\u91cd",
        "\ue4c9": "\u7740",
        "\ue90d": "\u4e5f",
        "\uec25": "\u5f97",
        "\ue4ea": "\u672c",
        "\ue3df": "\u53c8",
        "\ued83": "\u548c",
        "\uebf8": "\u6b63",
        "\ue24b": "\u88ab",
        "\ued90": "\u957f",
        "\ue3a6": "\u65f6",
        "\ueef2": "\u4e4b",
        "\uecaf": "\u95ee",
        "\ue188": "\u884c",
        "\ue124": "\u610f",
        "\ue87e": "\u65b0",
        "\ued80": "\u5730",
        "\uecfb": "\u4e00",
        "\ue548": "\u4ee5",
        "\ue1ec": "\u4e8b",
        "\ueeb0": "\u7531",
        "\uee81": "\u77e5",
        "\ue2a1": "\u5168",
        "\ueea8": "\u4f1a",
        "\ue698": "\u8d77",
        "\ue84a": "\u5b9a",
        "\uea4f": "\u8fd9",
        "\ue11b": "\u6210",
        "\ue71e": "\u90a3",
        "\ue110": "\u9762",
        "\ue965": "\u4e48",
        "\ued67": "\u4ed6",
        "\uea9c": "\u7528",
        "\ue3b1": "\u4e2a",
        "\ue45f": "\u4f53",
        "\ueee3": "\u56de",
        "\ue06e": "\u7269",
        "\ue900": "\u5b50",
        "\ue372": "\u7406",
        "\ue38f": "\u5c0f",
        "\ue8b6": "\u4f7f",
        "\ue8a4": "\u4e0e",
        "\uebe0": "\u4f5c",
        "\ue6db": "\u773c",
        "\ue855": "\u679c",
        "\ue9ea": "\u793e",
        "\ue575": "\u8fdb",
        "\ue024": "\u76f8",
        "\ued04": "\u66f4",
        "\ue452": "\u4fbf",
        "\ue59c": "\u70b9",
        "\ue245": "\u7279",
        "\ue6f2": "\u53ea",
        "\uead0": "\u5148",
        "\ue289": "\u5df1",
        "\uef19": "\u8d70",
        "\ueb5d": "\u5979",
        "\ued9f": "\u4e2d",
        "\ue559": "\u8bdd",
        "\ue5f3": "\u6709",
        "\ue94e": "\u6027",
        "\uecb8": "\u5bb6",
        "\ue41f": "\u8001",
        "\ue025": "\u60f3",
        "\ue40c": "\u81ea",
        "\ue895": "\u5316",
        "\uebe6": "\u4e0b",
        "\ueb63": "\u4eba",
        "\ue9e5": "\u624b",
        "\ue7bd": "\u7b2c",
        x: "x",
        "\uea7d": "\u662f",
        "\ueabb": "\u4e3b",
        "\uee4b": "\u65e5",
        "\ue9af": "\u6587",
        "\ue202": "\u4ece",
        "\ue989": "\u5df2",
        "\ue17d": "\u51fa",
        "\ue81a": "\u4e3a",
        "\ue7cd": "\u597d",
        "\ue7e3": "\u4e86",
        "\ued3d": "\u52a8",
        "\ue61c": "\u5173",
        "\ueb94": "\u6b64",
        "\ue326": "\u8005",
        "\uee10": "\u65b9",
        "\ueab9": "\u5bf9",
        "\ue55c": "\u5c11",
        "\ue212": "\u6559",
        "\ue4c6": "\u6837",
        "\uef82": "\u53e3",
        "\ue9ef": "\u53ef",
        "\ue113": "\u56fd",
        "\uede3": "\u7684",
        "\ue793": "\u4f60",
        "\ueade": "\u518d",
        "\uea8e": "\u6765",
        "\uee89": "\u60c5",
        "\ued96": "\u540d",
        "\ue9e4": "\u6700",
        "\ue063": "\u51e0",
        "\ued98": "\u73b0",
        "\ue472": "\u7ecf",
        "\uedba": "\u660e",
        "\ue87b": "\u5728",
        "\ue3c1": "\u5411",
        "\uea28": "\u8bba",
        "\ue915": "\u53f2",
        "\ue7a7": "\u4e0d",
        "\ue955": "\u6240",
        "\ue873": "\u5e74",
        "\uef03": "\u65e0",
        "\ue1f2": "\u529b",
        "\ue657": "\u58f0",
        "\ue1ee": "\u4e09",
        "\uee24": "\u542c",
        "\ue378": "\u7b49",
        "\ue11d": "\u4ee3",
        "\ue01c": "\u5fc3",
        "\ue6cd": "\u5e76",
        "\ue4c5": "\u4e0a",
        "\ueab8": "\u90e8",
        "\ue526": "\u5c31",
        "\uef65": "\u8bf4",
        "\ued1f": "\u5b83",
        "\ue2c1": "\u56e0",
        "\ue189": "\u5934",
        "\ue7a0": "\u540c",
        "\ue565": "\u6c14",
        "\ue0a4": "\u5199",
        "\ue557": "\u5f53",
        "\ue501": "\u89c1",
        "\uedb7": "\u4f46",
        "\ue1ac": "\u628a",
        "\ue87f": "\u800c",
        "\ue010": "\u6253",
        "\ue4d0": "\u767d",
        "\uef46": "\u4e8c",
        "\ue3fc": "\u5929",
        "\ue2d4": "\u513f",
        "\ued64": "\u5982",
        "\ue45a": "\u5c06",
        "\uede9": "\u5341",
        "\ue038": "\u8fc7",
        "\uef87": "\u91cc",
        "\ue15e": "\u9053",
        "\ue7ae": "\u79cd",
        "\uedd0": "\u4e49",
        "\ue9e3": "\u6ca1",
        "\ueebb": "\u7f8e",
        "\ueb2d": "\u624d",
        "\ue374": "\u516c",
        "\ue973": "\u56db",
        "\ue889": "\u5973",
        "\ue263": "\u5176",
        "\ue6b0": "\u5916",
        "\ueffd": "\u4e16",
        "\ue20d": "\u6211",
        "\ue19b": "\u5206",
        "\uea0e": "\u795e",
        "\uedc0": "\u5f88",
        "\ue885": "\u4e8e",
        "\ue811": "\u5927",
        "\ue3e5": "\u771f",
        "\ue0c7": "\u591a",
        "\ue74f": "\u4eec",
        "\ue400": "\u8eab",
        "\ued52": "\u7136",
        "\ue33f": "\u897f",
    },
    jjwxcfont_002h0: {
        "\ue5f3": "\u628a",
        "\ueb11": "\u65e5",
        "\ueba5": "\u4f46",
        "\ue42f": "\u529b",
        "\ue148": "\u5fc3",
        "\uea5b": "\u7528",
        "\ue842": "\u4f60",
        "\ue35b": "\u9053",
        "\ue860": "\u8eab",
        "\ueeff": "\u56e0",
        "\ue398": "\u6027",
        "\ue09b": "\u5411",
        "\ue2d5": "\u8fd9",
        "\ue461": "\u540e",
        "\ue2ee": "\u771f",
        "\uef3d": "\u8fd8",
        "\ue43b": "\u5927",
        "\ue2a2": "\u58f0",
        "\uef05": "\u51e0",
        "\ue04c": "\u5982",
        "\ue742": "\u5206",
        "\uee24": "\u773c",
        "\ueb60": "\u95f4",
        "\ue969": "\u9ad8",
        "\ueae3": "\u513f",
        "\ue049": "\u5c0f",
        "\uec14": "\u5bf9",
        "\ue284": "\u4fbf",
        "\ue5bc": "\u91cd",
        "\ue456": "\u65f6",
        "\ueea9": "\u5f00",
        "\ue570": "\u4ee3",
        "\ue692": "\u5e76",
        "\ue63f": "\u610f",
        "\ue208": "\u5230",
        "\ue017": "\u795e",
        "\ueefb": "\u516c",
        "\uee75": "\u6c11",
        "\ue1cd": "\u53ef",
        "\ue0fe": "\u4eec",
        "\ue1ee": "\u89c1",
        "\ue5e4": "\u6210",
        "\uea45": "\u5f88",
        "\ue2ff": "\u5e74",
        "\uec74": "\u53d1",
        "\ue3f1": "\u800c",
        "\ue5f9": "\u662f",
        "\ue19e": "\u6709",
        "\ue296": "\u5148",
        "\ued39": "\u5b83",
        "\ue6fc": "\u611f",
        "\ue0d8": "\u4e16",
        "\ue1bf": "\u4e2a",
        "\ue748": "\u5bb6",
        "\uef0a": "\u56de",
        "\ue4fb": "\u5c31",
        "\uebcf": "\u5b9e",
        "\ue16f": "\u7684",
        "\ue10f": "\u522b",
        "\ue391": "\u7b11",
        "\ue9bc": "\u5df2",
        "\ue137": "\u77e5",
        "\ueaec": "\u7ecf",
        "\uea49": "\u4e0b",
        "\uee74": "\u6837",
        "\ueb5e": "\u897f",
        "\ue868": "\u672c",
        "\ue8e9": "\u4e49",
        "\uebba": "\u518d",
        "\ue499": "\u56fd",
        "\ue6bf": "\u5916",
        "\ued69": "\u5c11",
        "\ue8a1": "\u7406",
        "\uea7e": "\u7b49",
        "\ue192": "\u4f5c",
        "\ue2c9": "\u6700",
        "\ue335": "\u65b0",
        "\uebb7": "\u4e24",
        "\ue4c7": "\u4e48",
        "\ueb9a": "\u4e0e",
        "\ueab9": "\u73b0",
        "\ue799": "\u4ed6",
        "\uee4f": "\u91cc",
        "\ue96d": "\u51fa",
        "\ue9fd": "\u524d",
        "\ue9a8": "\u6b7b",
        "\ue4a0": "\u7b2c",
        "\ue2eb": "\u4e4b",
        "\ue714": "\u4e8c",
        "\uedf0": "\u5979",
        "\ue7ed": "\u601d",
        "\ue1e4": "\u4e9b",
        "\ue682": "\u6cd5",
        "\ueb0a": "\u88ab",
        "\ue341": "\u8bdd",
        "\ue77a": "\u5168",
        "\ue809": "\u4e0a",
        "\ue44b": "\u53f2",
        "\uec34": "\u53ea",
        x: "x",
        "\ue318": "\u5929",
        "\ueae2": "\u7136",
        "\uefd6": "\u60c5",
        "\uea4f": "\u4ee5",
        "\uecea": "\u540c",
        "\uec6e": "\u5f97",
        "\ue24f": "\u65b9",
        "\ueb5f": "\u5c06",
        "\uec57": "\u53bb",
        "\uec88": "\u751f",
        "\ue2da": "\u5341",
        "\ue5a6": "\u624b",
        "\ue76c": "\u6765",
        "\uede4": "\u8001",
        "\ue6fa": "\u90fd",
        "\ue389": "\u4f55",
        "\ueb70": "\u8981",
        "\ue1d3": "\u4ece",
        "\ue9f4": "\u679c",
        "\ue3e7": "\u8d70",
        "\ue2a1": "\u76f8",
        "\ue063": "\u548c",
        "\ue903": "\u5199",
        "\ue027": "\u4e8b",
        "\ueb48": "\u5b9a",
        "\ue22d": "\u79cd",
        "\ue343": "\u660e",
        "\uea63": "\u5173",
        "\ue94c": "\u8005",
        "\ue2b6": "\u957f",
        "\ue3e1": "\u9762",
        "\ue043": "\u597d",
        "\ue713": "\u7531",
        "\ue480": "\u4f53",
        "\uecce": "\u6559",
        "\uef76": "\u7279",
        "\ue74b": "\u8bf4",
        "\uefb3": "\u5973",
        "\ue8f4": "\u6587",
        "\ue596": "\u884c",
        "\ueb8f": "\u90e8",
        "\ueec9": "\u542c",
        "\ueedc": "\u591a",
        "\ue1fc": "\u4f7f",
        "\ue2d7": "\u4e5f",
        "\ue4fc": "\u5934",
        "\ue878": "\u6211",
        "\ue7a4": "\u4e86",
        "\uea5c": "\u60f3",
        "\uea04": "\u6b64",
        "\ue687": "\u7740",
        "\ueeda": "\u5728",
        "\ue5de": "\u4e2d",
        "\ue816": "\u5730",
        "\ue732": "\u7269",
        "\ue1f4": "\u4e8e",
        "\ue093": "\u65e0",
        "\ue160": "\u624d",
        "\uebe0": "\u6240",
        "\uec17": "\u4e09",
        "\ue44e": "\u6b63",
        "\uebca": "\u7f8e",
        "\ue07a": "\u81ea",
        "\ue38c": "\u4ec0",
        "\ue80b": "\u8bba",
        "\ueb2f": "\u8d77",
        "\ue259": "\u4f1a",
        "\ued7e": "\u5df1",
        "\uee0b": "\u90a3",
        "\ue2de": "\u80fd",
        "\ue9e7": "\u52a8",
        "\ue172": "\u95e8",
        "\uec85": "\u66f4",
        "\uec9b": "\u8fc7",
        "\ue4da": "\u4eba",
        "\ue569": "\u7ed9",
        "\ueb87": "\u770b",
        "\ue3be": "\u5316",
        "\ue184": "\u6c14",
        "\uec93": "\u53e3",
        "\ue5b3": "\u4e00",
        "\ue668": "\u53c8",
        "\uec51": "\u5f53",
        "\uebf8": "\u95ee",
        "\ue3fd": "\u5176",
        "\ue496": "\u592a",
        "\ue879": "\u5374",
        "\ue240": "\u6253",
        "\ued70": "\u5b66",
        "\uec18": "\u793e",
        "\ue2d2": "\u4e66",
        "\ue60b": "\u540d",
        "\ue831": "\u767d",
        "\ue97b": "\u5b50",
        "\ue4d1": "\u4e3a",
        "\uee03": "\u8fdb",
        "\ue88c": "\u56db",
        "\ue9ec": "\u4e3b",
        "\ue46e": "\u6ca1",
        "\ue8f0": "\u4e0d",
        "\ue764": "\u70b9",
    },
    jjwxcfont_002kt: {
        "\uef74": "\u5c06",
        "\ue7f1": "\u6210",
        "\ue6dd": "\u4e8e",
        "\ue884": "\u70b9",
        "\uee88": "\u4e24",
        "\uec6e": "\u65f6",
        "\ue8c1": "\u65b0",
        "\ue328": "\u5934",
        "\ue1cb": "\u4eec",
        "\ueed0": "\u8d77",
        "\ue6d1": "\u5e74",
        "\ueae2": "\u8fdb",
        "\uea77": "\u51fa",
        "\ue0f6": "\u60c5",
        "\ueca0": "\u597d",
        "\ue442": "\u767d",
        "\uec39": "\u6027",
        "\ue406": "\u6709",
        "\ue3dd": "\u5982",
        "\ue816": "\u884c",
        "\ue7c4": "\u5929",
        "\ue062": "\u65e5",
        "\ue0ff": "\u6b7b",
        "\uea0d": "\u5f97",
        "\uee20": "\u6c11",
        "\ue1d0": "\u4e48",
        "\ue1f0": "\u5f00",
        "\ue3fa": "\u524d",
        "\ue5d3": "\u58f0",
        "\ue6fa": "\u522b",
        "\ue49e": "\u7136",
        "\ue969": "\u4f60",
        "\ue3eb": "\u4e0e",
        "\ue84d": "\u77e5",
        "\ue5d5": "\u751f",
        "\ue1a3": "\u624d",
        "\ue522": "\u4f55",
        "\uef51": "\u52a8",
        "\ue463": "\u91cd",
        "\ue309": "\u7b2c",
        "\ue03f": "\u542c",
        "\ueb5e": "\u795e",
        "\ue8b5": "\u95e8",
        "\ue412": "\u53ea",
        "\ue420": "\u4e0d",
        "\uec81": "\u5c11",
        "\ueddc": "\u4f53",
        "\ue79c": "\u548c",
        "\ue34a": "\u771f",
        "\uefe3": "\u7b49",
        "\ue4a1": "\u4ee3",
        "\ue87f": "\u4e2d",
        "\ueacd": "\u60f3",
        "\ue4d0": "\u6253",
        "\ue6af": "\u800c",
        "\ue3e0": "\u4e2a",
        "\ue177": "\u8d70",
        "\uef06": "\u8bba",
        "\ue314": "\u53e3",
        "\ue031": "\u5173",
        "\ue510": "\u5316",
        "\ue746": "\u5b9e",
        "\ue5fd": "\u6765",
        "\uef8b": "\u5e76",
        "\ue1a6": "\u4f46",
        "\ue550": "\u76f8",
        "\ue324": "\u4f7f",
        "\ueb73": "\u5b50",
        "\ue6b9": "\u6b64",
        "\ue06c": "\u90a3",
        "\ue9ff": "\u6837",
        "\ue673": "\u5f88",
        "\ue79f": "\u516c",
        "\ue9e2": "\u5c31",
        "\ue992": "\u56fd",
        "\uede3": "\u90e8",
        "\uea3d": "\u80fd",
        "\ue057": "\u90fd",
        "\uecb0": "\u5230",
        "\ue90b": "\u7406",
        "\ue12d": "\u6b63",
        "\ue2a1": "\u5168",
        "\ue1ce": "\u7ed9",
        "\ue84c": "\u5fc3",
        "\ue0ba": "\u8fc7",
        "\ue340": "\u7b11",
        "\ue708": "\u5374",
        "\ue7a1": "\u5176",
        "\ue96e": "\u6559",
        "\ue720": "\u4e8c",
        "\ue854": "\u5927",
        "\uedc4": "\u4e09",
        "\ue2e8": "\u95f4",
        "\ue107": "\u8005",
        "\ue922": "\u6211",
        "\ue75b": "\u9ad8",
        "\ue63b": "\u91cc",
        "\ue657": "\u5bf9",
        "\ueb05": "\u679c",
        "\ue7ff": "\u53ef",
        "\uec95": "\u7740",
        "\ued4b": "\u4ed6",
        "\ue8b7": "\u6ca1",
        "\ue789": "\u770b",
        "\ue832": "\u7279",
        "\ue117": "\u6c14",
        "\ued9a": "\u4e3b",
        "\uea6c": "\u540d",
        "\ued3b": "\u5979",
        "\ue853": "\u4e9b",
        "\ue658": "\u4f1a",
        "\ueb6b": "\u4ece",
        "\ue30f": "\u660e",
        "\ue598": "\u4e00",
        "\ueb18": "\u9762",
        "\ued46": "\u7531",
        "\uef5b": "\u79cd",
        "\ue2fa": "\u4e49",
        "\ue42c": "\u53f2",
        "\ueebb": "\u540c",
        "\ue074": "\u5199",
        "\ue579": "\u6240",
        "\ue4f0": "\u8fd9",
        "\uee27": "\u4e8b",
        "\ue955": "\u7684",
        "\uef97": "\u5728",
        "\uee63": "\u89c1",
        "\ue5aa": "\u56de",
        "\uece0": "\u6cd5",
        "\ue5e3": "\u4e0b",
        "\ue30d": "\u56db",
        "\ue712": "\u53c8",
        "\ue72d": "\u5df1",
        "\ue2b6": "\u592a",
        "\ue941": "\u611f",
        "\ue1df": "\u5148",
        "\ue4e0": "\u53d1",
        "\ue099": "\u5c0f",
        "\ued82": "\u9053",
        "\ue1c3": "\u4ec0",
        "\ued5f": "\u4ee5",
        "\ue1d4": "\u66f4",
        "\ue611": "\u773c",
        "\ued2f": "\u793e",
        "\uebbf": "\u5411",
        "\ue633": "\u73b0",
        "\ue772": "\u529b",
        "\ue89a": "\u4fbf",
        "\uef03": "\u8eab",
        "\ue97f": "\u4f5c",
        "\uec9f": "\u65e0",
        "\ue14f": "\u5bb6",
        "\ue915": "\u4e0a",
        "\ue468": "\u8001",
        "\ue141": "\u53bb",
        "\uee1e": "\u5f53",
        "\uef3c": "\u5341",
        "\uec86": "\u957f",
        "\ue0a3": "\u628a",
        "\ue898": "\u4e16",
        "\uead9": "\u4e4b",
        "\ue387": "\u95ee",
        "\uefd2": "\u65b9",
        "\ue6f1": "\u7ecf",
        "\uec9a": "\u4eba",
        "\ue614": "\u5916",
        "\ue119": "\u4e66",
        "\uec3d": "\u4e5f",
        "\ue7e2": "\u672c",
        "\ue2a7": "\u5b66",
        "\ue355": "\u5df2",
        "\uec4b": "\u897f",
        "\ue9e6": "\u624b",
        "\ue841": "\u513f",
        "\ue4af": "\u5206",
        "\uefde": "\u8bdd",
        "\ue6de": "\u7269",
        "\uebf5": "\u7528",
        "\ue2ce": "\u8fd8",
        "\uee26": "\u6587",
        "\ueb5d": "\u601d",
        "\ue295": "\u81ea",
        "\uea7f": "\u591a",
        "\ue45a": "\u7f8e",
        "\ueae1": "\u5730",
        "\uea6b": "\u5b83",
        "\ue881": "\u518d",
        "\uebbd": "\u540e",
        "\ue872": "\u8bf4",
        "\ue5b9": "\u5973",
        "\uee16": "\u5b9a",
        "\ue7f4": "\u8981",
        "\ue281": "\u662f",
        "\ue5fb": "\u51e0",
        "\uede1": "\u4e3a",
        "\uea0a": "\u4e86",
        "\ue389": "\u88ab",
        "\uef67": "\u6700",
        "\ue50c": "\u610f",
        "\ued96": "\u56e0",
        x: "x",
    },
    jjwxcfont_002nb: {
        "\uefe7": "\u95f4",
        "\ue101": "\u56fd",
        "\ue110": "\u5fc3",
        "\uee1d": "\u4e86",
        "\ue267": "\u5973",
        "\uea6c": "\u4f60",
        "\uef26": "\u80fd",
        "\uefc1": "\u8fd9",
        "\uef43": "\u53f2",
        "\ueed3": "\u6027",
        "\ue8d5": "\u4f46",
        "\ue795": "\u597d",
        "\ueb16": "\u5c0f",
        "\ue22f": "\u4e5f",
        "\ue4c5": "\u5374",
        "\ue97a": "\u8fd8",
        "\ue47f": "\u5176",
        "\ue91f": "\u4e66",
        "\ue19d": "\u79cd",
        "\ue6e7": "\u5927",
        "\ue3f6": "\u6559",
        "\ue444": "\u5411",
        "\ue942": "\u4e0e",
        "\ue8b0": "\u4ee5",
        "\ue8df": "\u4e0a",
        "\ue1f4": "\u56de",
        "\ue0ca": "\u8fc7",
        "\uee75": "\u6c11",
        "\ue511": "\u4e24",
        "\uedc8": "\u56db",
        "\uef29": "\u7b2c",
        "\uee92": "\u81ea",
        "\uecd3": "\u4e8c",
        "\uec06": "\u624b",
        "\uec30": "\u60c5",
        "\ue022": "\u5e74",
        "\ue2a0": "\u513f",
        "\ue27c": "\u89c1",
        "\ue9c8": "\u4e0b",
        "\ue91d": "\u8bba",
        "\uea1c": "\u6765",
        "\ue9aa": "\u529b",
        "\ue65d": "\u7f8e",
        "\ueff0": "\u624d",
        "\ue630": "\u7531",
        "\uec3d": "\u7b49",
        "\ueaed": "\u516c",
        "\ue17f": "\u8bdd",
        "\uee98": "\u5230",
        "\ue271": "\u6b7b",
        "\ue614": "\u5e76",
        "\ue12f": "\u6ca1",
        "\ue019": "\u4f53",
        "\ue2f8": "\u90a3",
        "\ue69e": "\u6837",
        "\uef2d": "\u95ee",
        "\ue5ba": "\u5199",
        "\uecc9": "\u6b64",
        "\ue693": "\u6210",
        "\ued9a": "\u592a",
        "\uedd4": "\u4e8b",
        "\uee26": "\u5341",
        "\ueae9": "\u7269",
        "\ue7ee": "\u7ed9",
        "\ue04a": "\u7136",
        "\ued33": "\u6700",
        "\ue6bd": "\u5148",
        "\ueab4": "\u8bf4",
        "\uea6b": "\u65f6",
        "\uedbf": "\u4e16",
        "\ue089": "\u53bb",
        "\uebff": "\u58f0",
        "\ueb37": "\u793e",
        "\ue476": "\u540d",
        "\ue5fd": "\u4e48",
        "\ue373": "\u5f88",
        "\uef39": "\u522b",
        "\ue6fa": "\u660e",
        "\uec4b": "\u4f5c",
        "\ue8d6": "\u9ad8",
        "\ueac4": "\u5f97",
        "\uea1b": "\u53ef",
        "\ue9cf": "\u7528",
        "\uec8d": "\u5b50",
        "\ue42b": "\u5b83",
        "\ue3e9": "\u7684",
        "\ue279": "\u6211",
        "\ue5c7": "\u88ab",
        "\ue389": "\u5bb6",
        "\ueef1": "\u771f",
        "\ue621": "\u6b63",
        "\ue9e8": "\u767d",
        "\uef4b": "\u540c",
        "\ue12b": "\u601d",
        "\ue77f": "\u662f",
        "\ue26f": "\u53d1",
        "\ue981": "\u60f3",
        "\ue692": "\u679c",
        "\ue88b": "\u795e",
        "\ue2e3": "\u6240",
        "\ue307": "\u4e00",
        "\ue4da": "\u4fbf",
        "\ue5af": "\u4e8e",
        "\ue11d": "\u70b9",
        "\ue408": "\u6253",
        "\uefc7": "\u90fd",
        "\ue1c2": "\u4ec0",
        "\ueefc": "\u4e49",
        "\ue9d1": "\u5b9e",
        "\ue414": "\u5173",
        "\ue4d5": "\u5b66",
        "\uec8b": "\u5730",
        "\ue08b": "\u91cd",
        x: "x",
        "\uef28": "\u77e5",
        "\uef94": "\u5b9a",
        "\uebb8": "\u4e3b",
        "\ue40b": "\u7740",
        "\ue0f4": "\u524d",
        "\ue33f": "\u4e3a",
        "\ue445": "\u4ece",
        "\ue62c": "\u7ecf",
        "\ue645": "\u90e8",
        "\ue5c2": "\u4e2a",
        "\ue81c": "\u773c",
        "\ue064": "\u56e0",
        "\ue9c6": "\u5c06",
        "\ue0e7": "\u542c",
        "\ue161": "\u66f4",
        "\ueef6": "\u7b11",
        "\uec2f": "\u8eab",
        "\uede1": "\u65e0",
        "\ue21b": "\u4e4b",
        "\ue7d3": "\u53ea",
        "\ue8a7": "\u4ed6",
        "\ue446": "\u5316",
        "\ue6a6": "\u5929",
        "\ued2c": "\u591a",
        "\uebd0": "\u5916",
        "\uec47": "\u884c",
        "\ueadd": "\u8005",
        "\ue014": "\u8d70",
        "\ue200": "\u65e5",
        "\ue9df": "\u5979",
        "\ue487": "\u6709",
        "\ueed8": "\u53e3",
        "\ue493": "\u4f1a",
        "\ue91c": "\u6c14",
        "\ue00f": "\u9053",
        "\ue85f": "\u548c",
        "\ue0da": "\u5f00",
        "\ue9b4": "\u770b",
        "\uedf6": "\u4f55",
        "\ue849": "\u4eec",
        "\ue77b": "\u518d",
        "\uecc0": "\u6cd5",
        "\ue26d": "\u4e09",
        "\ueb4d": "\u4e9b",
        "\ue3bc": "\u5168",
        "\ue548": "\u5c11",
        "\ue96c": "\u5df1",
        "\ue1cc": "\u8981",
        "\ueca7": "\u53c8",
        "\ueb1e": "\u8d77",
        "\uee06": "\u7406",
        "\ue147": "\u65b9",
        "\ued78": "\u4e2d",
        "\uef55": "\u5728",
        "\ueb23": "\u7279",
        "\ueef5": "\u65b0",
        "\ue532": "\u6587",
        "\ue882": "\u5df2",
        "\uef38": "\u8001",
        "\ue947": "\u751f",
        "\ue892": "\u51e0",
        "\ue1b8": "\u51fa",
        "\ue0b5": "\u95e8",
        "\ue4e1": "\u957f",
        "\ue759": "\u4eba",
        "\ue23f": "\u5f53",
        "\uee5f": "\u5206",
        "\ue100": "\u4e0d",
        "\uec77": "\u672c",
        "\ue4e8": "\u76f8",
        "\ue359": "\u628a",
        "\ue4fe": "\u5934",
        "\ue1d5": "\u9762",
        "\ue957": "\u4f7f",
        "\ue5cd": "\u897f",
        "\ue315": "\u91cc",
        "\ue0a9": "\u611f",
        "\ue1c0": "\u610f",
        "\ue47e": "\u800c",
        "\uee10": "\u73b0",
        "\ue010": "\u540e",
        "\ueacf": "\u5982",
        "\ue229": "\u5bf9",
        "\ued1d": "\u5c31",
        "\ue994": "\u52a8",
        "\ueacb": "\u4ee3",
        "\ue754": "\u8fdb",
    },
    jjwxcfont_002pr: {
        "\ue19d": "\u771f",
        "\ue75b": "\u9053",
        "\uee70": "\u4e5f",
        "\uea75": "\u773c",
        "\ue0a4": "\u4e0b",
        "\ue365": "\u5979",
        "\uecf7": "\u8981",
        "\ue459": "\u4e0d",
        "\uede8": "\u6709",
        "\uea30": "\u5927",
        "\ue136": "\u7136",
        "\ue07a": "\u91cd",
        "\uead1": "\u79cd",
        "\uefb9": "\u65b0",
        "\uee73": "\u7528",
        "\ue979": "\u95ee",
        "\ue929": "\u5e74",
        "\ue82f": "\u6b63",
        "\ue7d8": "\u56db",
        "\ue5b7": "\u6253",
        "\ue300": "\u90e8",
        "\uec04": "\u5c06",
        "\uef41": "\u522b",
        "\ue71c": "\u5f88",
        "\ue4ac": "\u5341",
        "\ue2bb": "\u4e9b",
        "\uedc9": "\u5973",
        "\uec5b": "\u88ab",
        "\ue94f": "\u5b9a",
        "\ue7b2": "\u7531",
        "\ue03e": "\u90a3",
        "\ue98f": "\u524d",
        "\ueb4c": "\u5982",
        "\ue887": "\u6b64",
        "\uefc8": "\u4e66",
        "\ue8e7": "\u4eec",
        "\ue6c9": "\u4e24",
        "\uea2e": "\u5f00",
        "\ue0c9": "\u529b",
        "\ue5cb": "\u53ea",
        "\ue1ee": "\u6587",
        "\ue2da": "\u957f",
        "\ue13b": "\u601d",
        "\ueca8": "\u5411",
        "\ue6da": "\u8bf4",
        "\ue8a2": "\u6211",
        "\ue81f": "\u5c31",
        "\ue672": "\u5fc3",
        "\ue8ed": "\u8fc7",
        "\ue1a8": "\u4e8c",
        "\uefa9": "\u800c",
        "\ue0fb": "\u81ea",
        "\ue881": "\u91cc",
        "\ue93a": "\u7279",
        "\ue6f8": "\u65e5",
        "\ueb79": "\u516c",
        "\ue572": "\u4e4b",
        "\uee75": "\u5df1",
        "\ue065": "\u80fd",
        "\uea27": "\u8001",
        "\ue5aa": "\u4e2a",
        "\ue376": "\u5e76",
        "\ue6e8": "\u5b83",
        "\ue8b8": "\u56de",
        "\ue5fe": "\u5730",
        "\uec2f": "\u610f",
        "\ueecf": "\u5bb6",
        "\uec03": "\u6210",
        "\uedb3": "\u90fd",
        "\uecc2": "\u4f46",
        "\ue064": "\u540c",
        "\ued35": "\u4e09",
        "\uea25": "\u6c14",
        "\ue2fe": "\u540d",
        "\uef2a": "\u6cd5",
        "\ue5f4": "\u5206",
        "\uee8c": "\u6240",
        "\ue405": "\u5bf9",
        "\uec8f": "\u53ef",
        "\uece0": "\u56e0",
        "\ue937": "\u4e8e",
        "\ue3db": "\u53d1",
        "\ue7dc": "\u513f",
        "\ue95c": "\u6ca1",
        "\uede4": "\u4e49",
        "\ue7b4": "\u53bb",
        "\ue142": "\u5728",
        "\ueb0f": "\u4f1a",
        "\ue7fd": "\u8fd8",
        "\ue2aa": "\u65f6",
        "\ueb4e": "\u591a",
        "\ued6a": "\u884c",
        "\ue3f4": "\u5c11",
        "\uef96": "\u4e3a",
        "\ue257": "\u6b7b",
        "\ue3b9": "\u95e8",
        "\ue414": "\u4e86",
        "\ue06d": "\u4f60",
        "\ue3c1": "\u7b2c",
        "\ue798": "\u770b",
        "\ue474": "\u5173",
        "\ueaee": "\u52a8",
        "\ue116": "\u7f8e",
        "\uea46": "\u6765",
        "\ue7eb": "\u53e3",
        x: "x",
        "\uee8a": "\u5f53",
        "\ue107": "\u70b9",
        "\ue9bb": "\u679c",
        "\ue7e5": "\u7ed9",
        "\ue28a": "\u5934",
        "\uef95": "\u751f",
        "\uefe7": "\u897f",
        "\ueea5": "\u5c0f",
        "\ue57e": "\u9762",
        "\uebe7": "\u73b0",
        "\ue291": "\u65b9",
        "\uec0a": "\u6027",
        "\uef87": "\u8d77",
        "\ue062": "\u4ed6",
        "\ue4fe": "\u8bba",
        "\ueb23": "\u4e16",
        "\ueb5b": "\u4e48",
        "\ue5af": "\u4ece",
        "\ue3dd": "\u8fdb",
        "\ue327": "\u660e",
        "\ue78d": "\u795e",
        "\ue5a1": "\u4f7f",
        "\uef61": "\u89c1",
        "\ue612": "\u793e",
        "\ue820": "\u76f8",
        "\ue63f": "\u6559",
        "\ue2a1": "\u4e3b",
        "\ue689": "\u7684",
        "\ued85": "\u5230",
        "\ue902": "\u540e",
        "\ue148": "\u624b",
        "\ue20d": "\u56fd",
        "\ueda2": "\u95f4",
        "\ue3d5": "\u53c8",
        "\ue7a0": "\u60c5",
        "\uee5a": "\u5929",
        "\ue850": "\u518d",
        "\ue560": "\u9ad8",
        "\ue39a": "\u51e0",
        "\ueb78": "\u5148",
        "\uea96": "\u5199",
        "\ue478": "\u4e8b",
        "\ue40b": "\u65e0",
        "\ue0b3": "\u7740",
        "\uec11": "\u4fbf",
        "\uea5d": "\u66f4",
        "\uede3": "\u542c",
        "\uec87": "\u4e2d",
        "\ue013": "\u597d",
        "\ue7e8": "\u5f97",
        "\ueed1": "\u628a",
        "\uef3b": "\u4e0a",
        "\uebee": "\u8eab",
        "\ue0fe": "\u7b49",
        "\ue8ec": "\u5df2",
        "\ueb6a": "\u6837",
        "\uea49": "\u5b9e",
        "\uec36": "\u7ecf",
        "\ue7f3": "\u7b11",
        "\uedd3": "\u7406",
        "\ue48e": "\u662f",
        "\uef11": "\u4ee3",
        "\ue6ed": "\u4f55",
        "\ue112": "\u5b66",
        "\ue9ec": "\u4ec0",
        "\ue535": "\u611f",
        "\ue8e6": "\u4f53",
        "\ue8e3": "\u624d",
        "\ue2ac": "\u8d70",
        "\ue7e9": "\u4ee5",
        "\ue380": "\u5176",
        "\ue242": "\u4e0e",
        "\ue8cb": "\u8bdd",
        "\uebb9": "\u51fa",
        "\ue961": "\u5916",
        "\ue314": "\u6700",
        "\ue953": "\u60f3",
        "\ue15f": "\u58f0",
        "\uea5e": "\u6c11",
        "\ueb87": "\u548c",
        "\ue12c": "\u5374",
        "\ue1e7": "\u767d",
        "\ue113": "\u4f5c",
        "\ue1ad": "\u5316",
        "\ueaef": "\u4e00",
        "\uea0f": "\u7269",
        "\ueced": "\u4eba",
        "\ue0d3": "\u592a",
        "\ue36d": "\u8005",
        "\uef35": "\u672c",
        "\uef91": "\u5b50",
        "\ue5e5": "\u53f2",
        "\ue983": "\u8fd9",
        "\ue3a8": "\u5168",
        "\uefed": "\u77e5",
    },
    jjwxcfont_002ue: {
        "\ue55a": "\u522b",
        "\uef05": "\u5176",
        "\ue4f2": "\u5fc3",
        "\uede9": "\u7406",
        "\uea5c": "\u52a8",
        "\uec25": "\u4ece",
        "\ue6e7": "\u6c11",
        "\uebdc": "\u6cd5",
        "\ue9d6": "\u56e0",
        "\ueecc": "\u5df1",
        "\ue314": "\u8fc7",
        "\ue735": "\u518d",
        "\uee58": "\u611f",
        "\uecf1": "\u4e8c",
        "\ue458": "\u51e0",
        "\ue7cf": "\u4ee3",
        "\uef17": "\u672c",
        "\ue0ea": "\u8fd8",
        "\ue0e3": "\u679c",
        "\ue3b3": "\u5728",
        "\ue102": "\u6210",
        "\ue959": "\u6ca1",
        "\ue092": "\u660e",
        "\ue148": "\u4e16",
        "\ue6e8": "\u5df2",
        "\ue090": "\u6253",
        "\ue4a8": "\u4f55",
        "\ue943": "\u4eba",
        "\ue94d": "\u601d",
        "\ue59c": "\u95e8",
        "\ue096": "\u51fa",
        "\ued59": "\u89c1",
        "\uebc9": "\u6b64",
        "\ue2d3": "\u529b",
        "\ueb5e": "\u4e0d",
        "\ue6eb": "\u5341",
        "\ued86": "\u771f",
        "\ue562": "\u6700",
        "\ue862": "\u516c",
        "\uee09": "\u58f0",
        "\uec5b": "\u6837",
        "\ue28c": "\u957f",
        "\ue624": "\u5199",
        "\ue1b9": "\u4fbf",
        "\ue88d": "\u56db",
        "\ue86b": "\u795e",
        "\uec06": "\u4e8e",
        "\uea27": "\u8981",
        "\ued72": "\u4eec",
        "\ue043": "\u7ecf",
        "\ue11b": "\u4e49",
        "\ue1b0": "\u9762",
        "\ue18b": "\u4e24",
        "\ueee2": "\u79cd",
        "\uebff": "\u65b0",
        "\ue600": "\u80fd",
        "\ueb2f": "\u5e76",
        "\ue2d8": "\u5bb6",
        "\ue952": "\u5973",
        "\ue258": "\u8001",
        "\uef0c": "\u5374",
        "\uee77": "\u4e2d",
        "\uebf4": "\u60c5",
        "\ue487": "\u5979",
        "\ue014": "\u90fd",
        "\ue0b0": "\u6b63",
        "\ue84d": "\u9ad8",
        "\ue8ad": "\u6c14",
        "\ued5d": "\u4f7f",
        "\ue667": "\u6559",
        "\ue1da": "\u5b50",
        "\ue849": "\u5c06",
        "\uea7d": "\u5916",
        "\ue063": "\u4ee5",
        "\ue31b": "\u540e",
        "\ue865": "\u56de",
        "\ue2cb": "\u5b9a",
        "\ue70d": "\u7136",
        "\ue4a7": "\u95ee",
        "\ue5bf": "\u88ab",
        "\ue1ae": "\u4e9b",
        "\uea8b": "\u624b",
        "\ueb44": "\u95f4",
        "\ue6bc": "\u77e5",
        "\uebd6": "\u767d",
        "\ue345": "\u4f46",
        "\uec23": "\u6587",
        "\ue9f4": "\u542c",
        "\uec18": "\u4ec0",
        "\ue3f6": "\u4f1a",
        "\ue636": "\u4e09",
        "\ue794": "\u7740",
        "\ue3f4": "\u4f60",
        "\ueaa0": "\u5148",
        "\ue7f3": "\u5b83",
        "\ue96a": "\u4e48",
        "\ueba0": "\u6211",
        "\ue323": "\u800c",
        "\ue320": "\u60f3",
        "\ue556": "\u7b49",
        "\ue9eb": "\u5168",
        "\ue5c2": "\u53ea",
        "\ueac9": "\u4e3b",
        "\ue036": "\u7528",
        "\ue49b": "\u513f",
        "\ue9ef": "\u6027",
        "\ue558": "\u4f53",
        "\ue8e3": "\u4e00",
        "\ue41d": "\u7b11",
        "\ue91c": "\u884c",
        "\ue855": "\u81ea",
        "\ue002": "\u5730",
        "\uedbf": "\u540d",
        "\ue22a": "\u5f00",
        "\ue23d": "\u4ed6",
        "\ue78c": "\u7f8e",
        "\ue88f": "\u8fd9",
        "\uedf4": "\u8fdb",
        "\ueb68": "\u5b9e",
        "\ueddf": "\u5e74",
        "\ueac7": "\u65e0",
        x: "x",
        "\ue0b4": "\u65e5",
        "\ue6c0": "\u8d77",
        "\ueb2c": "\u5929",
        "\uea85": "\u53f2",
        "\uecd8": "\u6765",
        "\ue299": "\u4e0b",
        "\ue8fe": "\u592a",
        "\ueeab": "\u5927",
        "\ued60": "\u56fd",
        "\uea4a": "\u5f53",
        "\ue081": "\u540c",
        "\ue42a": "\u7ed9",
        "\ue0c9": "\u4e0a",
        "\ued6c": "\u5bf9",
        "\uebac": "\u76f8",
        "\ue13c": "\u5230",
        "\ue850": "\u5c11",
        "\ue56f": "\u591a",
        "\uece1": "\u5c0f",
        "\ue898": "\u53e3",
        "\ued37": "\u548c",
        "\ue8c4": "\u6b7b",
        "\ue5cb": "\u7279",
        "\ue52e": "\u53c8",
        "\uec08": "\u628a",
        "\ue1a6": "\u7269",
        "\ued4e": "\u4e0e",
        "\ue41c": "\u4e86",
        "\ue0d7": "\u4e2a",
        "\uea86": "\u6240",
        "\ued82": "\u4e3a",
        "\uea83": "\u5f88",
        "\ued97": "\u6709",
        "\ue125": "\u5934",
        "\ue1f5": "\u90a3",
        "\ue7a6": "\u4e66",
        "\ue31c": "\u5f97",
        "\ue516": "\u5c31",
        "\ue178": "\u5982",
        "\uee33": "\u5411",
        "\ue2ab": "\u662f",
        "\ue5f8": "\u73b0",
        "\ue89c": "\u90e8",
        "\ue922": "\u610f",
        "\ue94e": "\u53ef",
        "\ue6d4": "\u597d",
        "\ued56": "\u897f",
        "\ue4a9": "\u4e5f",
        "\uead3": "\u70b9",
        "\ue42c": "\u751f",
        "\ued69": "\u8bf4",
        "\ueb51": "\u793e",
        "\ue379": "\u7531",
        "\uedaf": "\u5173",
        "\ue3ad": "\u8bdd",
        "\ue835": "\u66f4",
        "\ue57d": "\u8005",
        "\ued77": "\u8eab",
        "\ue534": "\u8d70",
        "\ue4c5": "\u91cd",
        "\ued98": "\u53bb",
        "\uea21": "\u8bba",
        "\ue504": "\u4f5c",
        "\ue508": "\u4e8b",
        "\ue703": "\u524d",
        "\ue01c": "\u4e4b",
        "\uecf4": "\u5206",
        "\uea64": "\u5316",
        "\ue041": "\u65b9",
        "\ue8eb": "\u773c",
        "\ued94": "\u9053",
        "\ue9ec": "\u7b2c",
        "\ue907": "\u770b",
        "\ue30a": "\u624d",
        "\ue97e": "\u53d1",
        "\uef92": "\u65f6",
        "\ue1ec": "\u91cc",
        "\ue6db": "\u7684",
        "\ue196": "\u5b66",
    },
    jjwxcfont_002vc: {
        "\ue7a3": "\u897f",
        "\ue547": "\u4e16",
        "\uef39": "\u4ee3",
        "\ue03f": "\u4e9b",
        "\ue535": "\u8d77",
        "\ueff4": "\u5f97",
        "\ueade": "\u6210",
        "\uedc3": "\u91cc",
        "\uef8d": "\u7ed9",
        "\ueed8": "\u548c",
        "\ue952": "\u957f",
        "\ueaa8": "\u5f88",
        "\uea87": "\u52a8",
        "\ueabe": "\u60c5",
        "\ue645": "\u5b83",
        "\ue36e": "\u8fd9",
        "\ue918": "\u591a",
        "\ue322": "\u8981",
        "\uecdb": "\u7136",
        "\ue4c3": "\u6587",
        "\uefb7": "\u95ee",
        "\ue241": "\u6559",
        "\ue29c": "\u771f",
        "\ueafb": "\u5c06",
        "\ue9eb": "\u4e48",
        "\ue6f9": "\u56e0",
        "\ueb22": "\u4e4b",
        "\ue7a2": "\u4f1a",
        "\uee29": "\u4f5c",
        "\ue1bc": "\u767d",
        "\ue2e4": "\u5728",
        "\uefdd": "\u8001",
        "\ue3b5": "\u4e09",
        "\ue0a0": "\u524d",
        "\ueda1": "\u540c",
        "\uee45": "\u4ed6",
        "\ue163": "\u610f",
        "\uef19": "\u6ca1",
        "\ue99e": "\u95e8",
        "\ue92b": "\u5df2",
        "\uee81": "\u4e0e",
        "\ue684": "\u56de",
        "\ue973": "\u7f8e",
        "\ue25e": "\u5316",
        "\ue14b": "\u5e76",
        "\uead3": "\u5929",
        "\ue7e3": "\u90e8",
        "\ue3ba": "\u4e2d",
        "\ue2cf": "\u6240",
        "\ueabc": "\u800c",
        "\uecfa": "\u51e0",
        "\ue419": "\u8005",
        "\ue9a6": "\u7528",
        "\ue5e3": "\u4e24",
        "\uefae": "\u597d",
        "\ue32d": "\u5b9e",
        "\ue7f3": "\u8eab",
        "\ue525": "\u6837",
        "\uee82": "\u65e0",
        "\ue329": "\u53ea",
        "\ue998": "\u8bdd",
        "\ue9c6": "\u592a",
        "\ue608": "\u6cd5",
        "\ue898": "\u601d",
        "\ue71d": "\u5bf9",
        "\ue392": "\u516c",
        "\uec4d": "\u9762",
        "\ue420": "\u7406",
        "\ue333": "\u6253",
        "\ue8f3": "\u5df1",
        "\ueec1": "\u4eec",
        "\ue8b4": "\u5206",
        "\ue876": "\u513f",
        "\ue43a": "\u53e3",
        "\ue415": "\u5173",
        "\ue2c4": "\u7b49",
        "\ue27f": "\u65b9",
        "\ue258": "\u91cd",
        "\ue11b": "\u624b",
        "\ue2de": "\u53f2",
        "\ue36f": "\u90fd",
        "\ue835": "\u7684",
        "\uefd5": "\u5168",
        "\ue296": "\u7531",
        "\ue77c": "\u4e2a",
        "\ue8ad": "\u8bba",
        "\ue18d": "\u66f4",
        "\ueab8": "\u773c",
        "\ued01": "\u9ad8",
        "\uec5a": "\u4e8c",
        "\ue584": "\u4e0b",
        "\ue257": "\u76f8",
        "\ue357": "\u542c",
        "\ueb63": "\u4e00",
        "\ue3b3": "\u53d1",
        "\ue17b": "\u6c14",
        "\ue5ab": "\u95f4",
        "\ue6db": "\u5f00",
        "\ue00a": "\u4f7f",
        "\ueae1": "\u4e3b",
        "\ue1e2": "\u89c1",
        "\ue5e7": "\u5b50",
        "\uee7d": "\u8fc7",
        "\ue26c": "\u80fd",
        "\ue1fc": "\u5730",
        "\ue133": "\u90a3",
        "\ue65b": "\u4eba",
        "\uecee": "\u5148",
        "\ue486": "\u4e0d",
        "\ueb3f": "\u611f",
        "\uefd8": "\u6765",
        "\ue880": "\u65e5",
        "\ue8a5": "\u5c11",
        "\ue281": "\u540d",
        "\ue8ba": "\u58f0",
        "\ue0da": "\u672c",
        "\uebed": "\u6027",
        "\ue0eb": "\u4e66",
        "\uece4": "\u5411",
        "\ue914": "\u56fd",
        "\ueec9": "\u5f53",
        "\uea26": "\u4ece",
        "\uedfd": "\u9053",
        "\ueccb": "\u65f6",
        "\uefc7": "\u5973",
        "\ue047": "\u522b",
        "\uec69": "\u51fa",
        "\ue1d9": "\u5230",
        "\ue02c": "\u660e",
        "\uec06": "\u5c0f",
        "\ue01c": "\u4f60",
        "\ue66d": "\u5c31",
        "\ue371": "\u770b",
        "\ue436": "\u8bf4",
        "\ued1d": "\u5341",
        "\ue0f0": "\u5b9a",
        "\uea5e": "\u7279",
        "\ued33": "\u7ecf",
        "\ue2b0": "\u4e0a",
        "\ue785": "\u56db",
        "\ueb9e": "\u6c11",
        "\ue667": "\u53ef",
        "\uef6d": "\u793e",
        "\ue75d": "\u5199",
        "\ued7c": "\u624d",
        "\ue38f": "\u6211",
        "\uee70": "\u7b11",
        "\uee8d": "\u4fbf",
        "\ue9af": "\u7269",
        "\uef76": "\u4e8e",
        "\uef87": "\u79cd",
        "\ue232": "\u88ab",
        "\ueb43": "\u4f46",
        x: "x ",
        "\ue6f4": "\u77e5",
        "\uefb1": "\u4e49",
        "\ue805": "\u4e8b",
        "\ue523": "\u4e86",
        "\ue004": "\u5934",
        "\uede8": "\u4f55",
        "\ue3f1": "\u65b0",
        "\ue831": "\u81ea",
        "\ue776": "\u6700",
        "\ue0b6": "\u6709",
        "\ue95f": "\u628a",
        "\ue648": "\u679c",
        "\ue1c9": "\u4ee5",
        "\ue154": "\u5916",
        "\ue0d3": "\u518d",
        "\ue837": "\u53bb",
        "\ue4e2": "\u884c",
        "\ue97e": "\u4e3a",
        "\ue5b6": "\u795e",
        "\ue13d": "\u8fdb",
        "\ue0e2": "\u73b0",
        "\ue3cc": "\u529b",
        "\uea47": "\u540e",
        "\uef83": "\u5979",
        "\ue103": "\u4ec0",
        "\ue2fe": "\u5e74",
        "\uec78": "\u6b63",
        "\ue19c": "\u8d70",
        "\ue58b": "\u6b64",
        "\ue2e1": "\u5927",
        "\uea2d": "\u662f",
        "\uee4f": "\u7740",
        "\ue5d2": "\u5374",
        "\ue224": "\u6b7b",
        "\uef11": "\u5176",
        "\ue22c": "\u7b2c",
        "\ue85d": "\u5bb6",
        "\ue44a": "\u70b9",
        "\ue271": "\u4e5f",
        "\ue556": "\u4f53",
        "\uec8f": "\u5b66",
        "\uea21": "\u751f",
        "\uee31": "\u60f3",
        "\uef36": "\u8fd8",
        "\ue8ef": "\u5982",
        "\ueba6": "\u5fc3",
        "\ueaa4": "\u53c8",
    },
    jjwxcfont_002zh: {
        "\ue6ff": "\u601d",
        "\ue5dd": "\u767d",
        "\ueeda": "\u90fd",
        "\ue565": "\u4ec0",
        "\ue0c5": "\u7ed9",
        "\ue2b6": "\u5199",
        "\uec67": "\u5316",
        "\ue097": "\u6cd5",
        "\ue74a": "\u4ed6",
        "\ue3aa": "\u4e2d",
        "\ue1ca": "\u6837",
        "\ue624": "\u5411",
        "\ue664": "\u5b9a",
        "\ue0c6": "\u7531",
        "\ue959": "\u6ca1",
        "\ue140": "\u5176",
        "\ue733": "\u4f46",
        "\ue99b": "\u8981",
        "\ued48": "\u53bb",
        "\ue739": "\u5c31",
        "\ue422": "\u5f97",
        "\ue95f": "\u65e5",
        "\uec6a": "\u5bb6",
        "\ue6f7": "\u9ad8",
        "\ue6b2": "\u4e3b",
        "\uee31": "\u4f5c",
        "\ue04e": "\u65b0",
        "\ue875": "\u53ea",
        "\ue3c2": "\u5f00",
        "\ue894": "\u5341",
        "\ue65e": "\u4f60",
        "\uee4c": "\u679c",
        "\ue2f7": "\u624d",
        "\ued9f": "\u53e3",
        "\ueaed": "\u95e8",
        "\ue6f5": "\u6587",
        "\uef07": "\u591a",
        "\ue9d4": "\u4f53",
        "\uecd4": "\u5b66",
        "\uef97": "\u4e86",
        "\ue202": "\u5148",
        "\ueeb4": "\u7269",
        "\ue5f3": "\u7740",
        "\ue26c": "\u4ece",
        "\ue7f1": "\u513f",
        "\uefaf": "\u4e2a",
        "\uec2d": "\u53c8",
        "\ue5b7": "\u6d3b",
        "\ue2aa": "\u6027",
        "\uefa8": "\u5e74",
        "\uee6b": "\u56e0",
        "\uee24": "\u5b50",
        "\ue5f6": "\u56fd",
        "\ue407": "\u81ea",
        "\ue585": "\u8fd8",
        "\ue288": "\u4e49",
        "\ue383": "\u6700",
        "\ue016": "\u8d77",
        "\ue107": "\u53ef",
        "\ue741": "\u4ee3",
        "\ue5fc": "\u79cd",
        "\ue4e3": "\u957f",
        "\ue1b5": "\u5973",
        "\ue428": "\u8fc7",
        "\uef39": "\u91cc",
        "\ue641": "\u4e09",
        "\ue5a3": "\u5f53",
        "\ue949": "\u5927",
        "\ue7f8": "\u8001",
        "\ue341": "\u6b63",
        "\ue2be": "\u7f8e",
        "\ue166": "\u6b64",
        "\ued20": "\u4eba",
        "\uea4c": "\u8d70",
        "\ue40d": "\u5e76",
        "\ue2c4": "\u9762",
        "\ueaa8": "\u8fdb",
        "\uec6f": "\u6240",
        "\uec81": "\u662f",
        "\uea3c": "\u7b49",
        "\ue16d": "\u56de",
        "\ue22b": "\u4fbf",
        "\ue290": "\u7136",
        "\ue167": "\u672c",
        "\uee48": "\u8bf4",
        "\ueaf8": "\u518d",
        "\ue2d4": "\u628a",
        "\uea92": "\u522b",
        "\ue4d2": "\u5c0f",
        "\ue093": "\u5929",
        "\ue419": "\u4e4b",
        "\ue409": "\u4e66",
        "\ue855": "\u5c11",
        "\ue418": "\u4e3a",
        "\uebe5": "\u7b2c",
        "\ue25b": "\u4f55",
        "\ue83e": "\u773c",
        "\ue774": "\u5f88",
        "\ue233": "\u5728",
        "\ue1f7": "\u6c14",
        "\uea50": "\u70b9",
        "\ue164": "\u4e9b",
        "\ue8de": "\u660e",
        "\ue9f8": "\u90a3",
        "\ueff5": "\u6210",
        "\ue48a": "\u4e0d",
        "\ue78b": "\u771f",
        x: "x ",
        "\ue391": "\u5c06",
        "\ue683": "\u90e8",
        "\ueccd": "\u7684",
        "\ue6f1": "\u5b83",
        "\ueea6": "\u91cd",
        "\ue284": "\u66f4",
        "\ue747": "\u7528",
        "\uea53": "\u80fd",
        "\ue1c6": "\u6765",
        "\ue544": "\u6211",
        "\uebc6": "\u5730",
        "\ued61": "\u65b9",
        "\ue6f0": "\u9053",
        "\ueef9": "\u548c",
        "\ue4ba": "\u6b7b",
        "\ue43e": "\u529b",
        "\ue700": "\u8fd9",
        "\ue6ce": "\u800c",
        "\ue448": "\u5374",
        "\ue47c": "\u5934",
        "\ue1d1": "\u60f3",
        "\ue335": "\u770b",
        "\ue32e": "\u540d",
        "\ue47b": "\u4e8b",
        "\ue863": "\u5df1",
        "\uec46": "\u6559",
        "\ue1be": "\u4e8c",
        "\ue7c5": "\u95f4",
        "\ueb80": "\u5979",
        "\uec57": "\u7b11",
        "\uecdd": "\u5b9e",
        "\ue8b1": "\u4e0e",
        "\ueb60": "\u540c",
        "\ue989": "\u7279",
        "\uebe6": "\u6c11",
        "\uee7d": "\u4e5f",
        "\uea84": "\u592a",
        "\uee69": "\u77e5",
        "\uea0c": "\u51fa",
        "\ue86e": "\u7406",
        "\ue1a7": "\u5916",
        "\ueec6": "\u4e00",
        "\ue260": "\u5df2",
        "\uee58": "\u751f",
        "\ue39d": "\u5173",
        "\ue5e8": "\u4e48",
        "\uee3c": "\u8eab",
        "\uec95": "\u51e0",
        "\ue798": "\u5982",
        "\ue45e": "\u793e",
        "\ued45": "\u53f2",
        "\uedda": "\u76f8",
        "\ue20a": "\u4e16",
        "\ueb89": "\u5168",
        "\ue5fd": "\u65f6",
        "\ue556": "\u4f1a",
        "\ue54c": "\u884c",
        "\uee97": "\u58f0",
        "\ue27e": "\u53d1",
        "\ue675": "\u4e0a",
        "\ue27a": "\u542c",
        "\ueb8d": "\u4e8e",
        "\ue1f3": "\u4e24",
        "\ue78a": "\u5bf9",
        "\ue327": "\u7ecf",
        "\ue68f": "\u4eec",
        "\ue923": "\u88ab",
        "\uef03": "\u611f",
        "\ue2b1": "\u4ee5",
        "\uead6": "\u597d",
        "\ue14e": "\u89c1",
        "\ue6bc": "\u6709",
        "\ueed7": "\u897f",
        "\ue20d": "\u516c",
        "\ueae6": "\u610f",
        "\ue32f": "\u4e0b",
        "\ue5a4": "\u795e",
        "\uee22": "\u65e0",
        "\ue558": "\u5206",
        "\ue9a5": "\u95ee",
        "\ue54d": "\u524d",
        "\uedc2": "\u56db",
        "\ue954": "\u624b",
        "\ue320": "\u60c5",
        "\uee0f": "\u5fc3",
        "\ue0e1": "\u540e",
        "\ue600": "\u52a8",
        "\ue4ee": "\u8bba",
        "\ue09d": "\u6253",
        "\ue430": "\u5230",
        "\ued51": "\u73b0",
        "\uebc0": "\u4f7f",
        "\uea63": "\u8005",
    },
    jjwxcfont_00317: {
        "\uec04": "\u597d",
        "\ue7b6": "\u529b",
        "\ue954": "\u8bba",
        "\uefcd": "\u624b",
        "\ue08e": "\u4e24",
        "\ue1a4": "\u4ece",
        "\ue095": "\u9053",
        "\ue697": "\u5934",
        "\ue9f2": "\u7279",
        "\ue1cc": "\u4fbf",
        "\uefc4": "\u8bdd",
        "\ue5eb": "\u4e86",
        "\ued66": "\u6cd5",
        "\ue1c8": "\u7531",
        "\uee53": "\u513f",
        "\ue542": "\u65e0",
        "\uecea": "\u4e2a",
        "\uee3f": "\u4f53",
        "\uee69": "\u5982",
        "\ue9a9": "\u7f8e",
        "\ue1b5": "\u5168",
        "\uee2d": "\u518d",
        "\ue4aa": "\u5374",
        "\uefd5": "\u540e",
        "\ue175": "\u4e3a",
        "\ue7cb": "\u5b9e",
        "\uef11": "\u8d77",
        "\ue53d": "\u4f1a",
        "\ue9e7": "\u53c8",
        "\ue28c": "\u4e66",
        "\ue56a": "\u4e9b",
        "\ue771": "\u6c14",
        "\ue210": "\u897f",
        "\ue79f": "\u628a",
        "\ue8e5": "\u65f6",
        "\uef9e": "\u800c",
        "\ued29": "\u4e09",
        "\uef67": "\u4eec",
        "\ueaa8": "\u8001",
        "\uea0f": "\u4e16",
        "\uebb0": "\u5b50",
        "\ue555": "\u7269",
        "\ue92c": "\u5b83",
        "\ued6e": "\u4ee5",
        "\ue307": "\u53bb",
        "\ue61a": "\u660e",
        "\ue4a9": "\u7b49",
        "\uee05": "\u6700",
        "\ue898": "\u5c0f",
        "\ue897": "\u6765",
        "\ue0eb": "\u5e74",
        "\ue4c6": "\u5341",
        "\uee49": "\u8981",
        "\ue65e": "\u5c31",
        "\ue246": "\u8d70",
        "\ue9b7": "\u6240",
        "\ue92b": "\u8fdb",
        "\uea12": "\u5411",
        "\uebe4": "\u5b9a",
        "\uea5b": "\u91cc",
        "\uea92": "\u5728",
        "\ue879": "\u540d",
        "\uef5d": "\u5916",
        "\ue461": "\u7740",
        "\ue8d4": "\u56de",
        "\uef82": "\u4f60",
        "\ue78a": "\u751f",
        "\ue1ee": "\u66f4",
        "\uea15": "\u5973",
        "\uecbb": "\u7528",
        "\ue64b": "\u7b2c",
        "\ue309": "\u679c",
        "\ueb58": "\u5230",
        "\ue7c1": "\u8eab",
        "\ue407": "\u77e5",
        "\uefd2": "\u65b0",
        "\ue9e3": "\u90a3",
        "\ue52a": "\u4e0b",
        "\uef04": "\u4e0a",
        "\ue3fa": "\u4e8e",
        "\ue188": "\u60f3",
        "\ue3ce": "\u4e00",
        "\ueb52": "\u65b9",
        "\uee89": "\u6b64",
        "\ue4fa": "\u65e5",
        "\ued14": "\u95f4",
        "\ue0ab": "\u6837",
        "\ue446": "\u79cd",
        x: "x",
        "\ueabf": "\u6ca1",
        "\ue580": "\u6b7b",
        "\ue7f1": "\u8fd8",
        "\ue121": "\u56db",
        "\ue350": "\u89c1",
        "\ue8bc": "\u524d",
        "\uecd1": "\u4f55",
        "\uec11": "\u5bf9",
        "\ue962": "\u795e",
        "\ue45a": "\u53d1",
        "\ueaa9": "\u6559",
        "\ued60": "\u5f53",
        "\ue299": "\u5bb6",
        "\ue440": "\u7ed9",
        "\ueb7b": "\u8bf4",
        "\uec4a": "\u90e8",
        "\uebbb": "\u56fd",
        "\ue73e": "\u767d",
        "\ued35": "\u4ed6",
        "\ue322": "\u4ee3",
        "\ue71c": "\u592a",
        "\uebdc": "\u5979",
        "\ue0ff": "\u5927",
        "\ue0ea": "\u957f",
        "\ue41f": "\u73b0",
        "\ue890": "\u9ad8",
        "\uedf2": "\u4e49",
        "\uea5d": "\u5c06",
        "\uea18": "\u5f88",
        "\ue59f": "\u542c",
        "\ued49": "\u95ee",
        "\ue78f": "\u5df1",
        "\ue2f4": "\u773c",
        "\ue486": "\u53ef",
        "\uef1c": "\u4f7f",
        "\ue43d": "\u7ecf",
        "\ue9b3": "\u4f5c",
        "\ue5e6": "\u591a",
        "\ue655": "\u9762",
        "\ued0f": "\u522b",
        "\uee64": "\u8fd9",
        "\uec51": "\u70b9",
        "\ue2fd": "\u6211",
        "\ue76e": "\u6587",
        "\ue16f": "\u611f",
        "\ue986": "\u5fc3",
        "\ue50f": "\u51e0",
        "\uebab": "\u4e8b",
        "\ue11b": "\u6709",
        "\uef7a": "\u5f00",
        "\uec44": "\u4e2d",
        "\ue7e3": "\u6253",
        "\uef54": "\u4e48",
        "\ue027": "\u610f",
        "\uef0b": "\u5199",
        "\ueca2": "\u53ea",
        "\ue53f": "\u95e8",
        "\ue157": "\u56e0",
        "\ue1da": "\u5173",
        "\ue1a2": "\u52a8",
        "\ue32a": "\u5176",
        "\ue47a": "\u80fd",
        "\ue9b2": "\u53e3",
        "\ue239": "\u540c",
        "\uefe9": "\u6c11",
        "\uec62": "\u7136",
        "\ue24f": "\u662f",
        "\ue2aa": "\u5e76",
        "\uee0c": "\u884c",
        "\ue02b": "\u53f2",
        "\ue053": "\u6210",
        "\ue903": "\u793e",
        "\uea32": "\u5206",
        "\ueda6": "\u5df2",
        "\ue6b2": "\u8005",
        "\ue5ca": "\u672c",
        "\ue06f": "\u4f46",
        "\ue42e": "\u6b63",
        "\uedd3": "\u601d",
        "\uee90": "\u90fd",
        "\ue07e": "\u7b11",
        "\ueec1": "\u770b",
        "\ue673": "\u58f0",
        "\ue5d6": "\u60c5",
        "\ue0ac": "\u771f",
        "\ue968": "\u4e0e",
        "\uedb2": "\u8fc7",
        "\uef9f": "\u4e8c",
        "\ue93c": "\u5c11",
        "\ue819": "\u4e4b",
        "\ue6ca": "\u4e5f",
        "\uec36": "\u516c",
        "\ue2ce": "\u5b66",
        "\ue632": "\u624d",
        "\ue8ec": "\u4e0d",
        "\ue7f6": "\u4ec0",
        "\ue123": "\u76f8",
        "\ue621": "\u91cd",
        "\ue5d5": "\u5730",
        "\ue015": "\u5316",
        "\ue850": "\u6027",
        "\uecbf": "\u4eba",
        "\ue3c5": "\u7684",
        "\uee5c": "\u5f97",
        "\ue5c0": "\u7406",
        "\ue0c7": "\u548c",
        "\uedd2": "\u5148",
        "\uef88": "\u51fa",
        "\ue973": "\u4e3b",
        "\ue302": "\u81ea",
        "\uea80": "\u5929",
        "\ue48f": "\u88ab",
    },
    jjwxcfont_00355: {
        "\ue5c5": "\u672c",
        "\uecf2": "\u53ef",
        "\ue649": "\u4f60",
        "\ue80e": "\u662f",
        "\uef5d": "\u51fa",
        "\ue6f0": "\u548c",
        "\uead0": "\u767d",
        "\ue636": "\u4ec0",
        "\ueaa1": "\u7b11",
        "\ueb38": "\u5411",
        "\ue949": "\u597d",
        "\ueff2": "\u6700",
        "\ueda2": "\u5c06",
        "\ue951": "\u56e0",
        "\ue22a": "\u5173",
        "\uead5": "\u5b83",
        "\uea85": "\u9053",
        "\ue450": "\u7136",
        "\ue41c": "\u5f97",
        "\ue41a": "\u8eab",
        "\ue5cd": "\u8bdd",
        "\uead7": "\u628a",
        "\ue0e9": "\u591a",
        "\uead3": "\u610f",
        "\ue1d3": "\u4eec",
        "\ue826": "\u53e3",
        "\ue47a": "\u5f53",
        "\uee8a": "\u6c11",
        "\uee07": "\u91cc",
        "\ue7e7": "\u6b64",
        "\uecce": "\u7b2c",
        "\ue436": "\u4e2d",
        "\ue70b": "\u4ece",
        "\ued49": "\u73b0",
        "\ue5d1": "\u4f7f",
        "\ue492": "\u4fbf",
        "\ue551": "\u4e5f",
        "\ue9e9": "\u524d",
        "\ue9ed": "\u5fc3",
        "\ue88b": "\u4ed6",
        "\ued68": "\u5929",
        "\uedd0": "\u6709",
        "\uea40": "\u773c",
        "\ue834": "\u5f88",
        "\ue689": "\u516c",
        "\ue026": "\u90e8",
        "\ue185": "\u5c0f",
        "\ue88c": "\u4e24",
        "\ue3a9": "\u5728",
        "\uec70": "\u5df2",
        "\ue780": "\u4e8e",
        "\ue277": "\u4f53",
        "\ue9c5": "\u770b",
        "\ue897": "\u52a8",
        "\uee81": "\u4ee5",
        "\ue1db": "\u8981",
        "\uefbf": "\u5e74",
        "\ue58d": "\u53bb",
        "\uef5c": "\u4e0a",
        "\ue82f": "\u601d",
        "\ueace": "\u65b0",
        "\ued45": "\u7528",
        "\ue7e9": "\u95f4",
        "\ue3d9": "\u5730",
        "\ue503": "\u8005",
        "\ue35e": "\u5176",
        "\ue9e6": "\u5b9a",
        "\uea98": "\u4e16",
        "\ue0e2": "\u5927",
        "\ue02e": "\u65e0",
        "\ueef1": "\u5916",
        "\ue8fc": "\u5316",
        "\ue409": "\u4e66",
        x: "x",
        "\ue995": "\u6210",
        "\ue295": "\u58f0",
        "\ueba0": "\u65e5",
        "\ue3cf": "\u8fdb",
        "\ue952": "\u6240",
        "\ueb71": "\u6c14",
        "\uef56": "\u6253",
        "\ue4dd": "\u7684",
        "\ue654": "\u4e3b",
        "\uee13": "\u6b7b",
        "\ue338": "\u6559",
        "\ue0a1": "\u7406",
        "\ue83a": "\u4e9b",
        "\ue83f": "\u4ee3",
        "\ue405": "\u56fd",
        "\ue02b": "\u5bf9",
        "\ueaa4": "\u90fd",
        "\ue321": "\u88ab",
        "\uef6f": "\u5b66",
        "\uee92": "\u89c1",
        "\ue4a8": "\u5374",
        "\ue3c3": "\u4f55",
        "\uecae": "\u540e",
        "\uef70": "\u5934",
        "\uefac": "\u9762",
        "\uea5b": "\u6b63",
        "\ue188": "\u624d",
        "\uef61": "\u8fd9",
        "\ue678": "\u5e76",
        "\ueda0": "\u7f8e",
        "\ue4c3": "\u4e8c",
        "\ue69e": "\u8001",
        "\ue5c3": "\u4f1a",
        "\ue78d": "\u5148",
        "\ue9f4": "\u6837",
        "\uebde": "\u795e",
        "\ue8a2": "\u7b49",
        "\ue84e": "\u7ed9",
        "\ue758": "\u5c11",
        "\ue8bf": "\u6027",
        "\ue946": "\u81ea",
        "\uedea": "\u5bb6",
        "\ued00": "\u592a",
        "\uec17": "\u7279",
        "\ue813": "\u542c",
        "\ue4b2": "\u884c",
        "\uee73": "\u60f3",
        "\ue8ac": "\u522b",
        "\ueb55": "\u8fd8",
        "\uef8f": "\u5199",
        "\uefce": "\u7269",
        "\ue650": "\u624b",
        "\ued85": "\u751f",
        "\ue377": "\u4e49",
        "\ue1d4": "\u5979",
        "\ue056": "\u6587",
        "\ued79": "\u4f46",
        "\ue4d8": "\u4e8b",
        "\ueb06": "\u540d",
        "\ue017": "\u611f",
        "\ue21d": "\u5168",
        "\ued36": "\u4e0d",
        "\ue378": "\u53c8",
        "\uee7c": "\u5341",
        "\uecea": "\u65f6",
        "\uec37": "\u56db",
        "\uea2c": "\u5df1",
        "\ue6da": "\u56de",
        "\ueaa8": "\u6211",
        "\uea32": "\u4e3a",
        "\ue16c": "\u6cd5",
        "\ue1e9": "\u91cd",
        "\ue9ce": "\u513f",
        "\ue839": "\u5f00",
        "\ued13": "\u5230",
        "\ue853": "\u4e2a",
        "\ue577": "\u4e00",
        "\ueea9": "\u53f2",
        "\ued47": "\u5b9e",
        "\ueb78": "\u51e0",
        "\ue9c9": "\u897f",
        "\ue962": "\u95e8",
        "\uebaf": "\u5c31",
        "\ueeab": "\u90a3",
        "\ue366": "\u5982",
        "\uea17": "\u4e0e",
        "\ue999": "\u79cd",
        "\uefef": "\u70b9",
        "\ue9cf": "\u7ecf",
        "\uee1c": "\u4e4b",
        "\ue88a": "\u518d",
        "\uef74": "\u679c",
        "\uefab": "\u8bba",
        "\uea7a": "\u800c",
        "\ued8d": "\u4e48",
        "\ue84a": "\u7740",
        "\ue5fa": "\u771f",
        "\ue9b7": "\u5206",
        "\uedb8": "\u60c5",
        "\ue4e9": "\u53ea",
        "\ue6a7": "\u8d70",
        "\ue3d8": "\u4f5c",
        "\ue96e": "\u7531",
        "\ue022": "\u76f8",
        "\ue0bf": "\u793e",
        "\ue46c": "\u8fc7",
        "\ue477": "\u957f",
        "\ue040": "\u540c",
        "\ue0e7": "\u4e0b",
        "\ue4bb": "\u660e",
        "\uedb9": "\u6765",
        "\uef46": "\u529b",
        "\ue25f": "\u8d77",
        "\ue2fd": "\u80fd",
        "\uea70": "\u4eba",
        "\ue434": "\u77e5",
        "\ue778": "\u6ca1",
        "\uee87": "\u5973",
        "\uec41": "\u4e86",
        "\ued82": "\u9ad8",
        "\ue965": "\u95ee",
        "\ue0b1": "\u4e09",
        "\uee8d": "\u65b9",
        "\uec7f": "\u8bf4",
        "\ueaae": "\u53d1",
        "\ue766": "\u66f4",
        "\ue83b": "\u5b50",
    },
    jjwxcfont_0038d: {
        "\ue5b1": "\u4f46",
        "\ue5cf": "\u5c0f",
        "\uee4c": "\u5df1",
        "\uec5e": "\u5173",
        "\ue131": "\u4ee5",
        "\ueb5b": "\u5e74",
        "\uefd2": "\u73b0",
        "\ueaf0": "\u95e8",
        "\ue036": "\u4e2a",
        "\ueb6d": "\u5148",
        "\uec3a": "\u6ca1",
        "\uecfb": "\u7ecf",
        "\ueab4": "\u5c11",
        "\ue9e0": "\u7b49",
        "\ue4af": "\u601d",
        "\ue88d": "\u4ece",
        "\ue22e": "\u9762",
        "\ue8db": "\u90e8",
        "\ued6e": "\u5973",
        "\ue6f9": "\u4f5c",
        "\ue4e1": "\u751f",
        "\ue99f": "\u6b64",
        "\ue534": "\u8981",
        "\ueed1": "\u4e4b",
        "\ue6b3": "\u529b",
        "\ue2dc": "\u80fd",
        "\ue315": "\u6c11",
        "\ue851": "\u4e5f",
        "\ue1ce": "\u4e0b",
        "\uecfa": "\u4f53",
        "\uedcc": "\u516c",
        "\ue739": "\u5929",
        "\ue5ab": "\u513f",
        "\uef1d": "\u5b9a",
        "\ue54f": "\u4e0a",
        "\ue812": "\u8005",
        "\ue101": "\u5c06",
        "\ue603": "\u5206",
        "\uebde": "\u6837",
        "\ue768": "\u4e9b",
        "\ueff9": "\u610f",
        "\ue815": "\u4f1a",
        "\ue695": "\u4e0d",
        "\ueb67": "\u522b",
        "\ue1f6": "\u7ed9",
        "\uec7e": "\u5199",
        "\uec29": "\u5728",
        "\ue8f9": "\u5c31",
        "\uec60": "\u7684",
        "\uece5": "\u4e8c",
        "\ue84e": "\u4e0e",
        "\uefa9": "\u7528",
        "\uecd4": "\u540d",
        "\ue411": "\u773c",
        "\ue60f": "\u7f8e",
        "\ue476": "\u95f4",
        "\ue1f3": "\u767d",
        "\ue64b": "\u5927",
        "\ueac1": "\u4eec",
        "\ue968": "\u5e76",
        "\ue5b8": "\u4e3a",
        "\ueb1f": "\u7531",
        "\ue312": "\u5916",
        "\ue04c": "\u6253",
        "\ue6f1": "\u5230",
        "\ue6d7": "\u6b7b",
        "\ued8c": "\u4e09",
        "\ue006": "\u4ec0",
        "\ue90f": "\u6765",
        "\ue549": "\u771f",
        "\ue5bb": "\u53f2",
        "\uef3f": "\u65e0",
        "\ue13c": "\u800c",
        "\uea5b": "\u58f0",
        "\ue489": "\u4e66",
        "\ue202": "\u60f3",
        "\uef9e": "\u4fbf",
        "\ue079": "\u95ee",
        "\ue0e0": "\u4f7f",
        "\uef53": "\u5f88",
        "\ue704": "\u8eab",
        "\ue30b": "\u8001",
        "\ue9bb": "\u6587",
        "\ue099": "\u662f",
        "\ue746": "\u56e0",
        "\ue206": "\u91cc",
        "\ue04a": "\u56fd",
        "\ue013": "\u91cd",
        "\uea84": "\u70b9",
        "\ue663": "\u7740",
        "\ue5c1": "\u5f97",
        "\uec13": "\u5316",
        "\uee70": "\u53ef",
        "\ue7c5": "\u8fc7",
        "\ue7b3": "\u6c14",
        "\ue648": "\u8fdb",
        "\uead5": "\u7279",
        "\ue325": "\u90fd",
        "\uecf1": "\u65b0",
        "\ue519": "\u770b",
        "\ue6e6": "\u4f60",
        "\ue881": "\u597d",
        x: "x",
        "\ue4e2": "\u4e2d",
        "\ue525": "\u65b9",
        "\ue5f7": "\u52a8",
        "\uebab": "\u5bb6",
        "\uee69": "\u4eba",
        "\uebbf": "\u4e8e",
        "\ue02d": "\u5b66",
        "\ue4b4": "\u4ed6",
        "\ueade": "\u611f",
        "\ue037": "\u5982",
        "\uee1a": "\u9053",
        "\ue47d": "\u89c1",
        "\ue9cb": "\u5df2",
        "\ue016": "\u6709",
        "\ue652": "\u5b83",
        "\ueaa0": "\u77e5",
        "\uecf9": "\u81ea",
        "\uef9a": "\u660e",
        "\ue551": "\u5f53",
        "\uef8f": "\u540c",
        "\ue7fb": "\u548c",
        "\ue3ad": "\u7136",
        "\ue8e4": "\u5176",
        "\ue45b": "\u4e49",
        "\ue2f2": "\u88ab",
        "\ue9de": "\u624d",
        "\ue146": "\u5730",
        "\ueb0a": "\u56db",
        "\ue8cb": "\u542c",
        "\ue2a7": "\u957f",
        "\ue605": "\u5979",
        "\ue473": "\u524d",
        "\ue19c": "\u5168",
        "\ue84a": "\u4e8b",
        "\ue945": "\u6211",
        "\ue3de": "\u79cd",
        "\uec27": "\u4ee3",
        "\ue9ca": "\u4f55",
        "\ue31b": "\u4e24",
        "\ue8c6": "\u65f6",
        "\uee1f": "\u628a",
        "\ue0c2": "\u795e",
        "\uedd1": "\u8fd8",
        "\ue1d3": "\u5fc3",
        "\uec87": "\u53d1",
        "\ue850": "\u4e16",
        "\ue4dc": "\u8d77",
        "\ue298": "\u5f00",
        "\uefcf": "\u51fa",
        "\ue7e7": "\u518d",
        "\ue076": "\u4e3b",
        "\uec1d": "\u5374",
        "\ue06f": "\u4e86",
        "\ue1c2": "\u5934",
        "\ueb0b": "\u8bf4",
        "\ue5e3": "\u5411",
        "\ueaa2": "\u679c",
        "\ue0f4": "\u6cd5",
        "\uef38": "\u60c5",
        "\ueaec": "\u51e0",
        "\ue31e": "\u6559",
        "\ue15c": "\u7b2c",
        "\ue6ec": "\u66f4",
        "\uef76": "\u8bdd",
        "\ue5a8": "\u592a",
        "\ue7f9": "\u5bf9",
        "\ue366": "\u624b",
        "\ue520": "\u6027",
        "\uecf6": "\u65e5",
        "\uea1a": "\u897f",
        "\uebe8": "\u53e3",
        "\ue38d": "\u672c",
        "\uea46": "\u5b9e",
        "\uedb2": "\u56de",
        "\ueed8": "\u540e",
        "\ue302": "\u53bb",
        "\uefec": "\u8d70",
        "\ue4d4": "\u5341",
        "\ue7a8": "\u6700",
        "\ue857": "\u591a",
        "\ued97": "\u7b11",
        "\ue1d0": "\u53ea",
        "\ue685": "\u4e48",
        "\ueee5": "\u6b63",
        "\uea2b": "\u6240",
        "\ue43f": "\u884c",
        "\uee66": "\u9ad8",
        "\ue1ff": "\u793e",
        "\ue0a1": "\u8bba",
        "\ue589": "\u4e00",
        "\ue184": "\u8fd9",
        "\uecd6": "\u53c8",
        "\ue951": "\u6210",
        "\ue139": "\u7406",
        "\ue751": "\u5b50",
        "\uecc1": "\u7269",
        "\ued3d": "\u90a3",
        "\ue81a": "\u76f8",
    },
    jjwxcfont_003am: {
        "\ue7aa": "\u9053",
        "\ue0ee": "\u7740",
        "\uefdf": "\u95f4",
        "\ue01e": "\u5fc3",
        "\ue359": "\u5982",
        "\ue392": "\u91cd",
        "\ue69a": "\u4e2a",
        "\uee1b": "\u624b",
        "\ue319": "\u5b50",
        "\ue1ff": "\u662f",
        "\ue84c": "\u5f00",
        "\ue450": "\u4e66",
        "\ue542": "\u4f46",
        "\ue18d": "\u6765",
        "\ue829": "\u7f8e",
        "\ue9b9": "\u70b9",
        "\ue892": "\u5b83",
        "\uee71": "\u58f0",
        "\uecfd": "\u66f4",
        "\ueb7b": "\u53d1",
        "\ue0b5": "\u513f",
        "\ue65e": "\u4e49",
        "\ue7f1": "\u6210",
        "\ue1b0": "\u4e4b",
        "\uebe2": "\u5f97",
        "\ue2aa": "\u591a",
        "\uee40": "\u5341",
        "\ue9e7": "\u4e09",
        "\ue620": "\u5148",
        "\uedcd": "\u65f6",
        "\ue1c1": "\u679c",
        "\uee27": "\u8d70",
        "\uef98": "\u77e5",
        "\ue89f": "\u6ca1",
        "\ue485": "\u76f8",
        "\ue869": "\u7ecf",
        "\uec51": "\u60f3",
        "\uea0c": "\u5199",
        "\uef8d": "\u4e3a",
        "\ue75d": "\u5728",
        "\ue38f": "\u628a",
        "\ue222": "\u795e",
        "\ue5b0": "\u88ab",
        "\uee8a": "\u800c",
        "\uea9f": "\u773c",
        "\ue52a": "\u4e86",
        "\ue046": "\u56db",
        "\uefeb": "\u5929",
        x: "x",
        "\ue04e": "\u51e0",
        "\uec89": "\u53ea",
        "\ue81c": "\u65e0",
        "\ue1da": "\u770b",
        "\ue3f2": "\u540c",
        "\ue799": "\u5c31",
        "\ue36b": "\u771f",
        "\uecf9": "\u5df2",
        "\uee79": "\u7531",
        "\uefb0": "\u518d",
        "\uebf0": "\u5916",
        "\ued3e": "\u8eab",
        "\uebc9": "\u5374",
        "\ue516": "\u8fd9",
        "\ue616": "\u6c11",
        "\ueff9": "\u6700",
        "\ue9ba": "\u4ece",
        "\ue291": "\u5168",
        "\ue86b": "\u7b11",
        "\ue1a2": "\u5411",
        "\uede5": "\u4f1a",
        "\ue572": "\u4e5f",
        "\uecdb": "\u897f",
        "\ue68b": "\u5173",
        "\ue430": "\u53c8",
        "\ue0c3": "\u4e0d",
        "\ue86c": "\u5b9e",
        "\ue631": "\u8bba",
        "\ue2cd": "\u91cc",
        "\uef0a": "\u7b2c",
        "\uedad": "\u65b0",
        "\uea19": "\u5e74",
        "\ue310": "\u8fd8",
        "\ue20b": "\u53f2",
        "\uefc5": "\u9ad8",
        "\ue0ec": "\u6b63",
        "\uede7": "\u5230",
        "\ueaf7": "\u5206",
        "\ue99a": "\u90fd",
        "\ue1bb": "\u8bf4",
        "\ue2ff": "\u597d",
        "\ue3d5": "\u95ee",
        "\ue147": "\u4f60",
        "\ue785": "\u5c0f",
        "\uec2d": "\u4e3b",
        "\ue122": "\u90a3",
        "\uea48": "\u53bb",
        "\ueb8e": "\u516c",
        "\ue011": "\u5f53",
        "\ueafd": "\u4e9b",
        "\ue3b6": "\u5934",
        "\ue76f": "\u4e00",
        "\uec4e": "\u80fd",
        "\ue71c": "\u4e0e",
        "\ue4e7": "\u73b0",
        "\ue3e3": "\u7136",
        "\ue3cb": "\u4fbf",
        "\ue278": "\u53ef",
        "\ue71d": "\u6253",
        "\ue3e1": "\u751f",
        "\ue1ed": "\u4e16",
        "\ue385": "\u4e2d",
        "\uee9a": "\u4eec",
        "\uee6d": "\u6cd5",
        "\ue7eb": "\u529b",
        "\ue18c": "\u79cd",
        "\ue838": "\u4e0b",
        "\uee7a": "\u7279",
        "\ue10e": "\u4e8b",
        "\ued10": "\u548c",
        "\ue3fd": "\u4eba",
        "\ue177": "\u6b7b",
        "\ue022": "\u601d",
        "\ue2df": "\u5df1",
        "\ue8c2": "\u592a",
        "\ue435": "\u5f88",
        "\ue971": "\u611f",
        "\ue1ce": "\u610f",
        "\ue27b": "\u6709",
        "\ue228": "\u542c",
        "\ue2b9": "\u7406",
        "\ue221": "\u51fa",
        "\ueb19": "\u7684",
        "\ue19f": "\u540d",
        "\ueeec": "\u5730",
        "\uea82": "\u81ea",
        "\uedb1": "\u7b49",
        "\ue7ca": "\u4f53",
        "\uec04": "\u5bf9",
        "\uefd4": "\u95e8",
        "\ue862": "\u5927",
        "\uec9d": "\u4e48",
        "\uea00": "\u5176",
        "\ueb25": "\u6211",
        "\ue9ec": "\u8d77",
        "\uea77": "\u672c",
        "\ueb0c": "\u524d",
        "\ue716": "\u8fdb",
        "\ue94e": "\u65b9",
        "\ue5a8": "\u8005",
        "\ue417": "\u5316",
        "\ue03c": "\u5c11",
        "\uee30": "\u767d",
        "\ue9ab": "\u957f",
        "\ue2ac": "\u6027",
        "\ue36a": "\u660e",
        "\ue010": "\u4f7f",
        "\ue8b3": "\u522b",
        "\ueca4": "\u4e8e",
        "\ue59f": "\u6837",
        "\ue328": "\u6b64",
        "\uefc8": "\u6587",
        "\ue326": "\u7ed9",
        "\ued6c": "\u89c1",
        "\ue339": "\u4ed6",
        "\uef24": "\u7269",
        "\ue229": "\u624d",
        "\ue7d1": "\u5b66",
        "\ue48d": "\u5bb6",
        "\ue1b5": "\u53e3",
        "\ue179": "\u6240",
        "\ue6a6": "\u4e24",
        "\ue325": "\u60c5",
        "\ue4a0": "\u4ee5",
        "\ueba0": "\u4f55",
        "\ue416": "\u4e0a",
        "\ue94c": "\u8fc7",
        "\uecb0": "\u540e",
        "\ue25e": "\u4f5c",
        "\ueceb": "\u5e76",
        "\uec50": "\u5c06",
        "\ue0f0": "\u4e8c",
        "\ue5f8": "\u4ee3",
        "\uef80": "\u6c14",
        "\ue4bb": "\u793e",
        "\ue9f1": "\u65e5",
        "\ue916": "\u5973",
        "\ue795": "\u8981",
        "\uedbd": "\u7528",
        "\ueaa5": "\u5b9a",
        "\ue6f2": "\u56fd",
        "\ueaea": "\u4ec0",
        "\ue92b": "\u90e8",
        "\ue3da": "\u56e0",
        "\uecc9": "\u8001",
        "\ue681": "\u56de",
        "\ue7ef": "\u9762",
        "\ue2b2": "\u884c",
        "\ue461": "\u6559",
        "\ue2f8": "\u5979",
        "\ue47a": "\u52a8",
        "\ue260": "\u8bdd",
    },
    jjwxcfont_003ce: {
        "\ue4bb": "\u679c",
        "\ue142": "\u5f53",
        "\ue7a3": "\u5341",
        "\ue6d1": "\u4eec",
        "\ueacc": "\u70b9",
        "\ue456": "\u4f46",
        "\uec6f": "\u6b7b",
        "\ue115": "\u89c1",
        "\ue64e": "\u5206",
        "\ue464": "\u58f0",
        "\ue17e": "\u5e74",
        "\ueba3": "\u5b83",
        "\ue3a4": "\u77e5",
        "\ueffe": "\u8001",
        "\ue090": "\u4e8c",
        "\uec4e": "\u624b",
        "\uea86": "\u8d70",
        "\ueab8": "\u4e09",
        "\ue9db": "\u90fd",
        "\ue889": "\u5973",
        "\ueeb4": "\u79cd",
        "\uec3f": "\u884c",
        "\ueabb": "\u66f4",
        "\ue2fd": "\u4e0d",
        "\ue776": "\u540e",
        "\uef24": "\u8981",
        "\uec63": "\u4e0e",
        "\ueb7e": "\u6c11",
        "\ue3ce": "\u540d",
        "\ue229": "\u53bb",
        x: "x",
        "\ue4cc": "\u6b64",
        "\ue2cc": "\u8005",
        "\uef4b": "\u4ee3",
        "\ue4ef": "\u6c14",
        "\uede7": "\u4e3a",
        "\ue4da": "\u957f",
        "\ue85d": "\u5934",
        "\uea7d": "\u90e8",
        "\uea0e": "\u60c5",
        "\ue31a": "\u5f88",
        "\ue503": "\u65f6",
        "\ue6af": "\u4e8b",
        "\ue765": "\u6765",
        "\ue45b": "\u53c8",
        "\ue4a8": "\u6cd5",
        "\ueea1": "\u513f",
        "\ue197": "\u9ad8",
        "\ue3e7": "\u88ab",
        "\ue4b1": "\u7684",
        "\uea65": "\u6210",
        "\ue4b4": "\u6837",
        "\ue0a8": "\u91cd",
        "\ueddb": "\u7b11",
        "\ue744": "\u4e2d",
        "\uecfe": "\u5230",
        "\ue810": "\u5df2",
        "\uec7b": "\u5b50",
        "\ue721": "\u5bb6",
        "\ueff3": "\u624d",
        "\ue377": "\u9053",
        "\ue993": "\u5979",
        "\ue8e5": "\u522b",
        "\ueee6": "\u53d1",
        "\ued71": "\u6700",
        "\uee24": "\u8fdb",
        "\ue7a4": "\u65e0",
        "\ue6da": "\u5b66",
        "\ue8eb": "\u5173",
        "\ue39b": "\u4f1a",
        "\ue2b9": "\u9762",
        "\ueb71": "\u8bdd",
        "\ue585": "\u53e3",
        "\ue388": "\u7b2c",
        "\ueca6": "\u5b9e",
        "\uedb7": "\u6559",
        "\uee68": "\u5411",
        "\ue8ac": "\u5c06",
        "\ue02d": "\u4e86",
        "\ue151": "\u662f",
        "\ued00": "\u73b0",
        "\ue0e6": "\u5df1",
        "\uecb8": "\u7531",
        "\ue1ae": "\u7269",
        "\uedea": "\u4e3b",
        "\ue211": "\u672c",
        "\ue45e": "\u7b49",
        "\uefca": "\u4e66",
        "\ue70b": "\u4e49",
        "\uebe2": "\u795e",
        "\ue16b": "\u76f8",
        "\uef17": "\u6709",
        "\ue619": "\u4e48",
        "\ue8bc": "\u4f7f",
        "\ue20b": "\u4fbf",
        "\uedf0": "\u660e",
        "\ue1c6": "\u7f8e",
        "\uee63": "\u6253",
        "\ue3cb": "\u5e76",
        "\ue3db": "\u95f4",
        "\ue9ee": "\u524d",
        "\uea49": "\u90a3",
        "\ue780": "\u6211",
        "\ue98e": "\u5916",
        "\ue230": "\u53ef",
        "\ue3c8": "\u5316",
        "\ue2d8": "\u51e0",
        "\uee17": "\u591a",
        "\ue891": "\u8d77",
        "\uebc3": "\u95ee",
        "\ue14b": "\u91cc",
        "\ueb8c": "\u56de",
        "\ue8dd": "\u548c",
        "\ue46b": "\u53ea",
        "\ue8da": "\u4f53",
        "\uea18": "\u628a",
        "\ue929": "\u518d",
        "\ue69e": "\u5176",
        "\uec05": "\u8bf4",
        "\ue296": "\u7740",
        "\ue6c2": "\u7406",
        "\ue60b": "\u8fd9",
        "\ue0d5": "\u65b0",
        "\uea10": "\u793e",
        "\ue13b": "\u4e00",
        "\ueada": "\u56db",
        "\ue135": "\u7ecf",
        "\ued24": "\u771f",
        "\ue663": "\u7528",
        "\uef91": "\u5927",
        "\ue265": "\u4e4b",
        "\uee1b": "\u897f",
        "\uee7e": "\u5f00",
        "\ue903": "\u6b63",
        "\uefe8": "\u751f",
        "\uea4a": "\u5c0f",
        "\ue62d": "\u773c",
        "\ueec7": "\u4f60",
        "\ued5e": "\u65e5",
        "\ue189": "\u611f",
        "\uebc1": "\u4ed6",
        "\ue5de": "\u4ece",
        "\uea3e": "\u6ca1",
        "\ue4c3": "\u4e0b",
        "\uef93": "\u4f5c",
        "\uee55": "\u5b9a",
        "\ueba0": "\u5929",
        "\ue078": "\u7279",
        "\ue5af": "\u4e8e",
        "\ue9ab": "\u65b9",
        "\uef2f": "\u610f",
        "\ue9f1": "\u601d",
        "\ue8fa": "\u529b",
        "\ue7a9": "\u5982",
        "\ue7c3": "\u5c31",
        "\uec33": "\u7136",
        "\uecca": "\u4ec0",
        "\ue295": "\u5bf9",
        "\ue784": "\u4e5f",
        "\ue68b": "\u4ee5",
        "\ue773": "\u542c",
        "\ue90c": "\u5168",
        "\uedf8": "\u800c",
        "\uec8d": "\u4e9b",
        "\ue3dc": "\u4e24",
        "\ue1b1": "\u4e2a",
        "\ue549": "\u5f97",
        "\uea7b": "\u5c11",
        "\ue358": "\u60f3",
        "\ue38e": "\u592a",
        "\uebb0": "\u4eba",
        "\ue168": "\u5148",
        "\ue7ff": "\u597d",
        "\uecb6": "\u6240",
        "\uea0f": "\u770b",
        "\ue7e5": "\u56fd",
        "\ue171": "\u4e0a",
        "\ue288": "\u516c",
        "\ued11": "\u6587",
        "\uec7f": "\u540c",
        "\ue07c": "\u80fd",
        "\uebdd": "\u4f55",
        "\uec51": "\u52a8",
        "\ue854": "\u8bba",
        "\ueed0": "\u5fc3",
        "\uee09": "\u8eab",
        "\ue735": "\u6027",
        "\ue212": "\u95e8",
        "\ue3f6": "\u4e16",
        "\uebd1": "\u56e0",
        "\ue8de": "\u51fa",
        "\ue65b": "\u81ea",
        "\ue11b": "\u5728",
        "\ue1f4": "\u7ed9",
        "\ue3d7": "\u8fd8",
        "\ueef4": "\u5730",
        "\ue7fd": "\u5199",
        "\ue5d0": "\u53f2",
        "\ueab5": "\u8fc7",
        "\uee83": "\u767d",
        "\ue89c": "\u5374",
    },
    jjwxcfont_003fx: {
        "\ueea2": "\u518d",
        "\ue426": "\u90e8",
        "\ue51c": "\u8eab",
        "\uec41": "\u56fd",
        "\uec3f": "\u5df1",
        "\ue989": "\u5c0f",
        "\ue292": "\u4e2a",
        "\uee23": "\u88ab",
        "\ue070": "\u529b",
        "\ue586": "\u5176",
        "\uecda": "\u540c",
        "\uec7d": "\u8fc7",
        "\ue5a9": "\u7269",
        "\ueefc": "\u897f",
        "\ue7b4": "\u540e",
        "\uef2c": "\u53f2",
        "\uea68": "\u7ecf",
        "\ue7d2": "\u771f",
        "\uecbe": "\u5e74",
        "\ue3d5": "\u4e09",
        "\ueeeb": "\u52a8",
        "\ue8cf": "\u4e4b",
        "\uef25": "\u4e3a",
        "\uece7": "\u4ee5",
        "\ue38a": "\u8bdd",
        "\ue5a4": "\u65f6",
        "\ueb23": "\u4f53",
        "\uefcf": "\u53ea",
        "\uedff": "\u540d",
        "\ue0e2": "\u610f",
        "\ue6f7": "\u628a",
        "\uef22": "\u5c31",
        "\ue77e": "\u8bf4",
        "\ue0bd": "\u6ca1",
        "\uefe8": "\u53c8",
        "\ue85b": "\u65e0",
        "\ue94c": "\u5374",
        "\ued73": "\u884c",
        "\ue4ef": "\u4ee3",
        "\ue9a6": "\u90fd",
        "\ue60b": "\u5916",
        "\ue861": "\u6027",
        "\ueb08": "\u5b9a",
        "\ue987": "\u5168",
        "\ue1a9": "\u5b66",
        "\ue4e0": "\u8001",
        "\ue8d4": "\u4f5c",
        "\ueb6c": "\u7279",
        "\ue436": "\u5b9e",
        "\ue6b1": "\u58f0",
        "\ue8e3": "\u5f97",
        "\ue6fd": "\u4e86",
        "\ue18d": "\u522b",
        "\uee3b": "\u65b9",
        "\ue2bc": "\u6559",
        "\ue932": "\u60f3",
        "\ued88": "\u4e0d",
        "\ueed7": "\u89c1",
        "\uecac": "\u5b50",
        "\ue25c": "\u6765",
        "\uee2e": "\u5e76",
        "\ue624": "\u5929",
        "\uedc7": "\u6253",
        "\ued26": "\u4f7f",
        "\ueaff": "\u7684",
        "\ueab8": "\u591a",
        "\uec5a": "\u56de",
        "\uef16": "\u4f60",
        "\ued2a": "\u6587",
        "\uef01": "\u8fd9",
        "\uee04": "\u5c11",
        "\uee1b": "\u5bf9",
        "\ue20e": "\u4f55",
        "\ue910": "\u5199",
        "\ue4ce": "\u4fbf",
        "\ue306": "\u770b",
        "\ue3b9": "\u6240",
        "\ue09b": "\u56db",
        "\ue01d": "\u548c",
        "\ue65f": "\u4e0e",
        "\ue25e": "\u65b0",
        "\ue2af": "\u5f53",
        "\ue55f": "\u76f8",
        "\ue988": "\u660e",
        "\ue32a": "\u4f1a",
        "\ue163": "\u90a3",
        "\ue714": "\u7740",
        "\ue158": "\u53e3",
        "\uec9e": "\u4e0b",
        "\ueb52": "\u4e24",
        "\ued66": "\u516c",
        "\ued54": "\u4e5f",
        "\ue625": "\u60c5",
        "\ue54a": "\u53d1",
        "\ueaeb": "\u5bb6",
        "\uec19": "\u5f88",
        "\ue24c": "\u601d",
        "\uef2a": "\u773c",
        "\uee49": "\u9762",
        "\ued84": "\u7f8e",
        "\ueda8": "\u95ee",
        "\ue5f0": "\u6b63",
        "\ue70d": "\u80fd",
        "\uedcf": "\u5730",
        "\uefbe": "\u5148",
        "\ue534": "\u624d",
        "\ue70b": "\u6cd5",
        "\ue5e5": "\u5df2",
        "\ue2d4": "\u6211",
        "\ue862": "\u4e0a",
        "\ued7c": "\u4e8b",
        "\ueb7a": "\u73b0",
        "\uebea": "\u4ed6",
        "\uea8b": "\u4ece",
        "\ue1c7": "\u8005",
        "\ue1c9": "\u5934",
        "\uedc5": "\u4eec",
        "\ue373": "\u5979",
        "\ueaa6": "\u6b7b",
        "\ue280": "\u5173",
        "\uea58": "\u624b",
        "\ue3f8": "\u4e8e",
        "\ue5d2": "\u7b2c",
        "\ue652": "\u592a",
        "\ueff0": "\u53bb",
        "\ue89f": "\u66f4",
        "\ue3e1": "\u7531",
        "\ue1cb": "\u4e2d",
        "\ue785": "\u8d77",
        "\ueb3f": "\u9053",
        "\ue271": "\u751f",
        "\ued21": "\u4eba",
        "\ueaa5": "\u611f",
        "\uec2b": "\u65e5",
        "\ue6d9": "\u4e66",
        "\ue62e": "\u8fd8",
        "\uebdb": "\u5341",
        "\uef7a": "\u5c06",
        "\ue262": "\u8bba",
        "\ue513": "\u79cd",
        "\ue65d": "\u6709",
        "\ue1ac": "\u4e8c",
        "\ue5ba": "\u51e0",
        "\ue1a0": "\u767d",
        "\ueb93": "\u4e9b",
        "\ue2b5": "\u4e48",
        "\ue0cd": "\u7406",
        "\ued0a": "\u6210",
        "\uecdc": "\u5206",
        "\uea50": "\u524d",
        "\ue05c": "\u793e",
        "\ue91c": "\u542c",
        "\ue509": "\u7b49",
        "\ue65e": "\u6c11",
        "\ueaea": "\u5f00",
        "\uea3d": "\u672c",
        "\uec87": "\u5728",
        "\ue6eb": "\u9ad8",
        "\ue675": "\u81ea",
        "\uea26": "\u7ed9",
        "\ueedd": "\u597d",
        "\ue720": "\u662f",
        "\uec7a": "\u5b83",
        "\ueba3": "\u8d70",
        "\uebc6": "\u7528",
        "\ue6b6": "\u5230",
        "\ue5a5": "\u6700",
        "\ue3c3": "\u4f46",
        "\ue2f3": "\u95e8",
        "\ue6dc": "\u7b11",
        "\uea19": "\u56e0",
        "\ueac1": "\u53ef",
        "\ue33c": "\u5982",
        "\ue328": "\u91cc",
        "\uee2a": "\u513f",
        "\uee4d": "\u6b64",
        "\uef0b": "\u5316",
        "\ue83f": "\u6837",
        "\ue2dd": "\u8981",
        "\ue083": "\u4e00",
        "\ueb42": "\u95f4",
        "\ue5d5": "\u800c",
        "\ue71b": "\u4e49",
        "\ue507": "\u5411",
        "\uef70": "\u795e",
        "\ue0de": "\u4ec0",
        "\ue4d0": "\u77e5",
        "\ue335": "\u5973",
        "\ue942": "\u5927",
        "\ue009": "\u7136",
        "\ueac0": "\u5fc3",
        "\ue857": "\u679c",
        "\ue6e9": "\u51fa",
        "\uef63": "\u957f",
        "\uea46": "\u70b9",
        "\ue91f": "\u6c14",
        "\ueb3d": "\u91cd",
        "\ue300": "\u8fdb",
        "\ue75d": "\u4e3b",
        "\ue549": "\u4e16",
    },
    jjwxcfont_003jp: {
        "\ueba9": "\u56fd",
        "\ue025": "\u4e2a",
        "\ue687": "\u662f",
        "\ue41b": "\u5199",
        "\ue9ff": "\u751f",
        "\ueecd": "\u51e0",
        "\uecb5": "\u4e09",
        "\ue77c": "\u91cd",
        "\ue756": "\u591a",
        "\ue6a3": "\u7ed9",
        "\ue09f": "\u8bba",
        "\ue1ad": "\u5b83",
        "\ue498": "\u5934",
        "\ue94d": "\u660e",
        "\ue5ce": "\u5374",
        "\ue9a0": "\u7528",
        "\ue0cd": "\u7740",
        "\ueebe": "\u6837",
        "\ue819": "\u624b",
        "\ue7bb": "\u5927",
        "\ue450": "\u53e3",
        "\ue3c8": "\u5fc3",
        "\ue123": "\u679c",
        "\ued7c": "\u8eab",
        "\ue117": "\u7ecf",
        "\ue16d": "\u4e2d",
        "\ue2e6": "\u4e16",
        "\ueb12": "\u5df2",
        "\ue643": "\u5316",
        "\uefab": "\u5b9e",
        "\uecde": "\u4f46",
        "\ue17d": "\u5730",
        "\ueda1": "\u5728",
        "\ue45c": "\u5df1",
        "\uea3b": "\u6709",
        "\ue6ba": "\u5b50",
        "\ue28e": "\u7b11",
        "\uec9f": "\u5f97",
        "\uebdd": "\u4e9b",
        "\ue838": "\u800c",
        "\ue017": "\u8001",
        "\ued97": "\u592a",
        "\uea70": "\u548c",
        "\uedea": "\u8fdb",
        "\ue9f9": "\u5411",
        "\uebfc": "\u5c06",
        "\ue0c8": "\u70b9",
        "\uea73": "\u81ea",
        "\ueb9d": "\u5c31",
        "\ue991": "\u4e8c",
        "\ue661": "\u4eba",
        "\ue5d4": "\u4e49",
        "\uecd8": "\u53ef",
        "\uebc1": "\u5206",
        "\uece8": "\u770b",
        "\ue9b3": "\u4f1a",
        "\ue4e6": "\u4f60",
        "\ue4e1": "\u6b7b",
        "\ue23c": "\u4eec",
        "\uef50": "\u7279",
        "\ueb52": "\u79cd",
        "\ue588": "\u4e24",
        "\uee5c": "\u58f0",
        "\ue2d4": "\u4ece",
        "\uee59": "\u95e8",
        "\ueb0f": "\u5f88",
        "\uec0c": "\u90fd",
        "\ue4e7": "\u6cd5",
        "\ued32": "\u7b49",
        "\ueed6": "\u5e76",
        "\ue0e7": "\u7f8e",
        "\ueb99": "\u6ca1",
        "\uec6f": "\u6027",
        "\ue2d7": "\u77e5",
        "\ueeed": "\u8005",
        "\ueddf": "\u6b64",
        "\ue109": "\u624d",
        "\ue2c7": "\u8fd9",
        "\ue414": "\u66f4",
        "\ue6d8": "\u53f2",
        "\ue023": "\u5bb6",
        "\ue8af": "\u4ec0",
        "\uec9e": "\u73b0",
        "\ueaa0": "\u7269",
        "\ue615": "\u6211",
        "\uedcc": "\u7b2c",
        "\ueeac": "\u5f53",
        "\ue115": "\u4ee5",
        "\ue8f9": "\u4e8b",
        "\uef3c": "\u53d1",
        "\uedc9": "\u89c1",
        "\uea74": "\u4e3a",
        "\ue88f": "\u4e0d",
        "\ue229": "\u9762",
        "\uec12": "\u884c",
        "\ue71e": "\u767d",
        "\ueefc": "\u6700",
        "\uef67": "\u56de",
        "\ue49d": "\u793e",
        "\uee23": "\u542c",
        "\ue1ee": "\u53c8",
        "\uef76": "\u5b9a",
        "\ue7fe": "\u5148",
        "\ue842": "\u60c5",
        "\uef14": "\u4e48",
        "\ued06": "\u5b66",
        "\ue097": "\u4e3b",
        "\ue019": "\u4f53",
        "\ue7e6": "\u540d",
        "\ue296": "\u9053",
        "\uee24": "\u522b",
        "\ue193": "\u7684",
        "\uee7a": "\u5982",
        "\uebde": "\u540e",
        "\ue1c4": "\u56db",
        "\uef22": "\u8d77",
        "\ue12f": "\u5c0f",
        "\ue58b": "\u957f",
        "\uea8b": "\u6765",
        "\ue5d5": "\u524d",
        "\ue089": "\u80fd",
        "\uebf6": "\u56e0",
        "\ued5f": "\u4f5c",
        "\uee15": "\u7406",
        "\ue2d5": "\u9ad8",
        "\ueba3": "\u518d",
        "\uefd3": "\u4f7f",
        "\uef36": "\u628a",
        "\ue44f": "\u4ee3",
        "\ue0ef": "\u88ab",
        "\ue9c0": "\u76f8",
        "\ue1a0": "\u91cc",
        "\ue941": "\u5230",
        "\ue82f": "\u516c",
        "\ue609": "\u52a8",
        "\ue76e": "\u95ee",
        "\ue88a": "\u6c14",
        "\ue04a": "\u65f6",
        "\uee3d": "\u53ea",
        "\uebb8": "\u5e74",
        "\ue0ed": "\u6559",
        "\uef01": "\u4e86",
        "\ue0f8": "\u597d",
        "\ue86b": "\u95f4",
        "\ue5f4": "\u4e4b",
        "\uee46": "\u4e8e",
        "\ueed4": "\u8bf4",
        "\uef55": "\u7531",
        "\ue1e3": "\u5173",
        "\ueffa": "\u5c11",
        "\ue497": "\u611f",
        "\ued5e": "\u53bb",
        "\uecc4": "\u90e8",
        "\uea36": "\u8fc7",
        "\ue3c1": "\u65e5",
        "\uea05": "\u540c",
        "\uebe9": "\u5176",
        "\uea2f": "\u7136",
        "\ueb78": "\u795e",
        "\uef51": "\u672c",
        "\ued7f": "\u513f",
        "\uebf0": "\u51fa",
        "\ue2ba": "\u60f3",
        "\ue7fb": "\u5973",
        "\uef56": "\u4e0e",
        "\uefe2": "\u4e0b",
        "\ue2fd": "\u90a3",
        "\uede1": "\u6587",
        "\ue39f": "\u5bf9",
        "\uef1c": "\u6240",
        "\ue2ab": "\u5f00",
        "\uefd2": "\u5341",
        "\uec5e": "\u5979",
        "\ueb85": "\u6b63",
        "\uef31": "\u4ed6",
        "\uedd1": "\u8981",
        "\ue42f": "\u65e0",
        "\ue134": "\u4fbf",
        "\uef86": "\u771f",
        "\ue73a": "\u6253",
        "\ue617": "\u5168",
        "\ue107": "\u4e00",
        "\ueb4f": "\u4e5f",
        "\ue8ec": "\u6c11",
        "\ue67b": "\u529b",
        "\ue6a8": "\u8d70",
        "\ue3f4": "\u897f",
        "\ue66f": "\u601d",
        "\ue7e7": "\u65b9",
        "\ue28c": "\u4f55",
        "\ue8ce": "\u8bdd",
        "\uebdf": "\u5916",
        "\ue36c": "\u4e0a",
        "\ue540": "\u773c",
        "\ue872": "\u4e66",
        "\uefe3": "\u610f",
        "\ue44d": "\u5929",
        "\ue15e": "\u65b0",
        "\uec4e": "\u6210",
        "\ue52a": "\u8fd8",
    },
    jjwxcfont_003kl: {
        "\ue0c2": "\u957f",
        "\ue77f": "\u6b63",
        "\ue4c9": "\u592a",
        "\ue1a5": "\u4e3b",
        "\ueff5": "\u5c31",
        "\uef07": "\u884c",
        "\ue907": "\u5b9e",
        "\ue540": "\u6b7b",
        "\ue77a": "\u7269",
        "\ue5da": "\u4f46",
        "\ue94b": "\u5411",
        "\ue03a": "\u4ee5",
        "\ueaae": "\u7ed9",
        "\uebed": "\u4fbf",
        "\ue58c": "\u76f8",
        "\uef04": "\u5bb6",
        "\ueef9": "\u591a",
        "\ue078": "\u4e8b",
        "\ue5bd": "\u5728",
        "\uefac": "\u5168",
        "\ue30e": "\u516c",
        "\ueeb3": "\u51fa",
        "\ue6f2": "\u4e2d",
        "\ue2b9": "\u7b2c",
        "\uee7c": "\u73b0",
        "\ue510": "\u53bb",
        "\ue7ec": "\u4e0d",
        "\ue605": "\u5c06",
        "\ue755": "\u5b50",
        "\ue020": "\u80fd",
        "\ue9a0": "\u6c11",
        "\ue80b": "\u6253",
        "\ue0ab": "\u4e0b",
        "\ueb22": "\u8fd8",
        "\ue509": "\u524d",
        "\ue30c": "\u7136",
        "\ue47f": "\u6ca1",
        "\ue6b7": "\u6cd5",
        "\uebb4": "\u672c",
        "\uea73": "\u53d1",
        "\ue699": "\u5f53",
        "\ue2bd": "\u4e86",
        "\uefc4": "\u771f",
        "\uedf2": "\u53c8",
        "\uec15": "\u77e5",
        "\ueaf4": "\u6559",
        "\ue89c": "\u767d",
        "\ue0b1": "\u60f3",
        "\ue61b": "\u7279",
        "\ue660": "\u7531",
        "\ue710": "\u7f8e",
        "\ue432": "\u5fc3",
        "\uef1d": "\u5934",
        "\ue3d1": "\u6b64",
        "\uec30": "\u793e",
        "\ueb52": "\u5df2",
        "\ue995": "\u8fdb",
        "\uef02": "\u679c",
        "\ue40e": "\u9053",
        "\uef64": "\u4eba",
        "\ue961": "\u6210",
        "\ueb46": "\u4f55",
        "\ue3b1": "\u8bba",
        "\ue63b": "\u897f",
        "\ue7f8": "\u6211",
        "\ue31a": "\u7406",
        "\ued46": "\u6587",
        "\uebcc": "\u4ec0",
        "\uee19": "\u65e5",
        "\ue9a8": "\u601d",
        "\ue7b8": "\u4ee3",
        "\uecc6": "\u522b",
        "\ue3d3": "\u5e74",
        "\ueb5c": "\u8eab",
        "\ue26f": "\u5927",
        "\ue81e": "\u4f5c",
        "\ued51": "\u53f2",
        "\uec9c": "\u4f60",
        "\ue4e6": "\u5e76",
        "\ue81b": "\u4f7f",
        "\ue305": "\u624d",
        "\ue8ec": "\u5df1",
        "\ueb38": "\u95f4",
        "\ue3f6": "\u95ee",
        "\ue517": "\u795e",
        "\ue71c": "\u624b",
        "\ue6a4": "\u81ea",
        "\uee22": "\u5b66",
        "\uedc2": "\u660e",
        "\ued4e": "\u800c",
        "\ue37a": "\u90fd",
        "\ue47d": "\u5199",
        "\uec87": "\u5341",
        "\ue32a": "\u4e0a",
        "\ueb66": "\u6700",
        "\ue283": "\u5916",
        "\ue7f1": "\u60c5",
        "\ue5e6": "\u5982",
        "\ue679": "\u6765",
        "\ue810": "\u56e0",
        "\ue2b1": "\u4e4b",
        "\uee7b": "\u8fc7",
        "\ued34": "\u8d77",
        "\uee71": "\u5bf9",
        "\uefa3": "\u4e00",
        "\uef73": "\u751f",
        "\ue6fc": "\u8bf4",
        "\uede2": "\u540c",
        "\ue4e0": "\u4e24",
        "\ue2c3": "\u4e66",
        "\ue81d": "\u5230",
        "\uef74": "\u8005",
        "\ue6b8": "\u91cc",
        "\uecd1": "\u4e48",
        "\ue5bf": "\u90e8",
        "\ue63e": "\u56de",
        "\ue7cd": "\u5f00",
        "\ueb19": "\u518d",
        "\uecdc": "\u52a8",
        "\ue72e": "\u4e8c",
        "\ue59b": "\u5173",
        "\ue0e1": "\u5b83",
        "\ue82b": "\u56fd",
        "\ue943": "\u58f0",
        "\uecd3": "\u66f4",
        "\ue5c7": "\u6837",
        "\ue5dd": "\u4e3a",
        "\ue6f4": "\u5c11",
        "\ue73a": "\u9762",
        "\ue3bd": "\u4ed6",
        "\uef14": "\u4e8e",
        "\ueb50": "\u770b",
        "\uee1b": "\u91cd",
        "\ueaf1": "\u4e16",
        "\ue3b2": "\u4f1a",
        "\uecc9": "\u53e3",
        "\ue430": "\u6c14",
        "\ue768": "\u5176",
        "\ue7a7": "\u65b0",
        "\ue3c9": "\u79cd",
        "\ue4ba": "\u6027",
        "\ue4e4": "\u89c1",
        "\uee8d": "\u8001",
        "\uebff": "\u8d70",
        "\uef61": "\u513f",
        "\ue490": "\u5148",
        "\ue76e": "\u4e49",
        "\ue6eb": "\u5316",
        "\ue1a3": "\u5979",
        "\ue14b": "\u8fd9",
        "\ueacf": "\u662f",
        "\ue662": "\u548c",
        "\ue79c": "\u5f97",
        "\uea74": "\u88ab",
        "\ue38f": "\u51e0",
        "\ue712": "\u53ef",
        "\ueaed": "\u4e0e",
        "\ueb5f": "\u540e",
        "\uebde": "\u628a",
        "\ue304": "\u65f6",
        "\ue57f": "\u6240",
        "\uec57": "\u5973",
        "\uef46": "\u4e2a",
        "\ue8c9": "\u90a3",
        "\uec92": "\u5374",
        "\ue3ee": "\u7740",
        "\ue996": "\u5c0f",
        "\ue720": "\u4f53",
        "\ue59e": "\u5929",
        "\ue1e4": "\u611f",
        "\ue9f0": "\u5f88",
        "\ue937": "\u4e9b",
        "\ue41a": "\u6709",
        "\ueb88": "\u8bdd",
        "\ue1f5": "\u56db",
        "\ue348": "\u597d",
        "\ue6e4": "\u5206",
        "\ue1b3": "\u4eec",
        "\ue609": "\u9ad8",
        "\uec93": "\u4e5f",
        "\uee0e": "\u70b9",
        "\ue109": "\u8981",
        "\ued2c": "\u610f",
        "\ue592": "\u7684",
        "\ued6a": "\u7b11",
        "\ueae5": "\u95e8",
        "\ue816": "\u773c",
        "\ue30b": "\u7b49",
        "\ue555": "\u5b9a",
        "\ue714": "\u53ea",
        "\ue977": "\u65b9",
        "\uebfd": "\u529b",
        "\ue97a": "\u7ecf",
        "\ue0b4": "\u4ece",
        "\uefbe": "\u4e09",
        "\ueed6": "\u540d",
        "\ue734": "\u7528",
        "\ueba7": "\u65e0",
        "\uef1b": "\u542c",
        "\ue8f3": "\u5730",
    },
    jjwxcfont_003o0: {
        "\ue5b2": "\u518d",
        "\ue10e": "\u5374",
        "\uef84": "\u6587",
        "\ue53e": "\u5341",
        "\ue76b": "\u7b11",
        "\uef66": "\u6837",
        "\ue577": "\u5176",
        "\ue4b6": "\u6b64",
        "\ue2cb": "\u7279",
        "\ueddc": "\u56db",
        "\ue781": "\u6c11",
        "\ue8d6": "\u8fc7",
        "\ue8bc": "\u793e",
        "\ue55e": "\u8fd8",
        "\uea8c": "\u60f3",
        "\ue2e1": "\u6027",
        "\uef61": "\u4ee5",
        "\uee63": "\u4f55",
        "\ue611": "\u679c",
        "\ueb3a": "\u4e9b",
        "\ueaa8": "\u4ece",
        "\uecc8": "\u53bb",
        "\ue075": "\u95ee",
        "\uef6c": "\u6240",
        "\uea3e": "\u540d",
        "\ue040": "\u610f",
        "\ueed1": "\u8bf4",
        "\ue3f7": "\u542c",
        "\ue50d": "\u91cc",
        "\ue974": "\u5173",
        "\ue5b9": "\u90e8",
        "\ueee3": "\u5411",
        "\uef99": "\u79cd",
        "\ue7b1": "\u53e3",
        "\ue7eb": "\u88ab",
        "\uebb0": "\u628a",
        "\ue1e1": "\u4e86",
        "\ue2fd": "\u5fc3",
        "\ue6d1": "\u5b66",
        "\ueb02": "\u5bb6",
        "\ueb99": "\u5730",
        "\uedd6": "\u4eba",
        "\ue600": "\u957f",
        "\uef00": "\u4f53",
        "\ue75a": "\u7684",
        "\uedec": "\u6b63",
        "\ue8a4": "\u4f5c",
        "\uedae": "\u60c5",
        "\ueabc": "\u6ca1",
        "\ue41b": "\u6210",
        "\ue86f": "\u795e",
        "\ue0df": "\u5979",
        "\ue99f": "\u624d",
        "\ue8f8": "\u5934",
        "\ue1ed": "\u5929",
        "\ue749": "\u5c06",
        "\ue4ca": "\u5bf9",
        "\ue7bc": "\u5b83",
        "\ue371": "\u767d",
        "\ue1e0": "\u5e76",
        "\ue029": "\u53ef",
        "\ue309": "\u7531",
        "\uec69": "\u5927",
        "\ue9ef": "\u81ea",
        "\uec2f": "\u95e8",
        "\ue2f8": "\u601d",
        "\ue416": "\u624b",
        "\ue446": "\u4e3a",
        "\ue546": "\u4e0b",
        "\ue49f": "\u7ed9",
        "\uec8a": "\u5973",
        "\ue049": "\u897f",
        "\ue821": "\u7269",
        "\ue44c": "\u51e0",
        "\ue4c3": "\u4e0d",
        "\ue9ca": "\u5b9a",
        "\ue792": "\u4e16",
        "\ueb55": "\u80fd",
        "\ue414": "\u4f46",
        "\ue6bb": "\u5199",
        "\uea52": "\u4e8e",
        "\ue5ab": "\u5c11",
        "\ued00": "\u90a3",
        "\ue19a": "\u8d70",
        "\ue3c5": "\u4e66",
        "\ue8d1": "\u4e3b",
        "\uedd1": "\u8fd9",
        "\uebc6": "\u592a",
        "\ue2d5": "\u52a8",
        "\ue83f": "\u56de",
        "\ue3ea": "\u4e00",
        "\ue7ff": "\u56e0",
        "\ueb29": "\u591a",
        "\ue92a": "\u8981",
        "\ue4b7": "\u5df2",
        "\ueedd": "\u7740",
        "\ue114": "\u800c",
        "\ued8f": "\u8d77",
        "\ue1c9": "\u4ee3",
        "\ue7f9": "\u8001",
        "\ue99e": "\u4e2a",
        "\ueddf": "\u771f",
        "\ueda9": "\u5b50",
        "\ue9b0": "\u4e8b",
        "\ue042": "\u540c",
        "\ue6d7": "\u7528",
        "\ue20a": "\u611f",
        "\uedaf": "\u5f53",
        "\uebd3": "\u4eec",
        "\ue208": "\u6765",
        "\ue11e": "\u7136",
        "\ue9c4": "\u540e",
        "\ue77a": "\u5728",
        "\uee30": "\u7406",
        "\ue5ae": "\u5f97",
        "\ue42e": "\u770b",
        "\ueece": "\u4e48",
        "\ueb95": "\u53ea",
        "\ue800": "\u65b9",
        "\ue2dc": "\u662f",
        "\uee8b": "\u65b0",
        "\ue7b3": "\u5230",
        "\uede3": "\u4f7f",
        "\ue46b": "\u7f8e",
        "\ue8b7": "\u773c",
        "\ueb31": "\u5df1",
        "\ueb9c": "\u6211",
        "\ue08e": "\u524d",
        "\ue9cd": "\u5982",
        "\uef33": "\u53f2",
        "\ued49": "\u4e24",
        "\ue4bd": "\u5316",
        "\ueb2f": "\u513f",
        "\ue16d": "\u6b7b",
        "\ue382": "\u4f1a",
        "\ue8ae": "\u58f0",
        "\ue164": "\u66f4",
        "\ued0c": "\u5168",
        "\ue3d7": "\u548c",
        "\ueff9": "\u8bdd",
        "\ue22f": "\u6c14",
        "\ue53a": "\u8bba",
        "\ue9ec": "\u6cd5",
        "\uede0": "\u597d",
        "\ue912": "\u4fbf",
        "\ue951": "\u9053",
        "\ueed9": "\u89c1",
        "\ue964": "\u516c",
        "\ue826": "\u884c",
        "\ue277": "\u73b0",
        "\ue868": "\u56fd",
        "\ue84d": "\u70b9",
        "\uecbc": "\u5c31",
        "\ue70d": "\u65e5",
        "\ue689": "\u77e5",
        "\ue1dd": "\u672c",
        "\ue946": "\u65f6",
        "\ue9c9": "\u6700",
        "\ue345": "\u4e0a",
        "\ue6e0": "\u7ecf",
        "\ueb67": "\u5e74",
        "\ue378": "\u6253",
        "\uedc8": "\u4e4b",
        "\ue866": "\u4e09",
        "\uee04": "\u6559",
        "\ueafe": "\u4e5f",
        "\ue855": "\u9762",
        "\uee42": "\u53c8",
        "\ue40c": "\u8005",
        "\uef02": "\u522b",
        "\ue456": "\u5148",
        "\ue83d": "\u5b9e",
        "\uedce": "\u8fdb",
        "\uedfb": "\u65e0",
        "\ue779": "\u4e0e",
        "\uefa0": "\u660e",
        "\ue835": "\u76f8",
        "\ue838": "\u529b",
        "\ue797": "\u5f88",
        "\uefb2": "\u7b2c",
        "\ue1be": "\u6709",
        "\ued94": "\u4ed6",
        "\uefc8": "\u53d1",
        "\ue415": "\u5c0f",
        "\ue330": "\u90fd",
        "\ue586": "\u4e49",
        "\uef3f": "\u91cd",
        "\ue428": "\u4e2d",
        "\ued97": "\u751f",
        "\uefb9": "\u4e8c",
        "\ue9fa": "\u5f00",
        "\ue551": "\u95f4",
        "\ue1bf": "\u51fa",
        "\uedc5": "\u5916",
        "\ue81a": "\u4f60",
        "\ue358": "\u7b49",
        "\ue08a": "\u8eab",
        "\uea1d": "\u4ec0",
        "\ue7a1": "\u9ad8",
        "\ueb15": "\u5206",
    },
    jjwxcfont_003s0: {
        "\ueb3f": "\u4e0a",
        "\ue00d": "\u5728",
        "\ue38f": "\u513f",
        "\ue19d": "\u4f53",
        "\ue691": "\u4e2a",
        "\ueb1c": "\u610f",
        "\ue81e": "\u95ee",
        "\ue15c": "\u8fdb",
        "\ue363": "\u60f3",
        "\ue815": "\u548c",
        "\ue40c": "\u5df2",
        "\ue5cb": "\u91cd",
        "\ueca0": "\u5230",
        "\ue6e5": "\u5e74",
        "\ue321": "\u4e0d",
        "\uee4a": "\u5b9a",
        "\ue378": "\u4e8c",
        "\ue23d": "\u771f",
        "\ue43a": "\u9ad8",
        "\ue488": "\u5c11",
        "\uedd9": "\u624d",
        "\ue600": "\u4e3a",
        "\uea85": "\u56db",
        "\ueeaf": "\u52a8",
        "\uea8a": "\u7ecf",
        "\ue0fc": "\u95f4",
        "\ueb78": "\u5979",
        "\ueede": "\u4f1a",
        "\ue0f5": "\u9053",
        "\uef2b": "\u7f8e",
        "\ueb87": "\u5f88",
        "\ue78d": "\u56de",
        "\ue8b0": "\u4eec",
        "\ue5d8": "\u767d",
        "\ueb08": "\u8bdd",
        "\ue236": "\u5fc3",
        "\uee61": "\u4f55",
        "\uedac": "\u6b64",
        "\ueeb2": "\u6837",
        "\uee75": "\u7269",
        "\ue039": "\u518d",
        "\ue06c": "\u4fbf",
        "\ue877": "\u4f7f",
        "\ue705": "\u80fd",
        "\uec4c": "\u81ea",
        "\ue32c": "\u8005",
        "\ue68c": "\u7740",
        "\ue972": "\u7531",
        "\ue2db": "\u5982",
        "\uea56": "\u6700",
        "\ue27b": "\u5df1",
        "\ue647": "\u6253",
        "\ue234": "\u5341",
        "\ue7b7": "\u5e76",
        "\ue8a9": "\u516c",
        "\ue186": "\u5f97",
        "\uec7a": "\u70b9",
        "\ued4a": "\u6587",
        "\ue256": "\u7b2c",
        "\ue0e1": "\u5b9e",
        "\ue630": "\u5206",
        "\ue520": "\u53c8",
        "\ue7d1": "\u65b0",
        "\ue008": "\u8eab",
        "\ue802": "\u5148",
        "\uefd2": "\u601d",
        "\uef28": "\u624b",
        "\ueb0f": "\u4eba",
        "\ueda1": "\u6cd5",
        "\uea37": "\u7b11",
        "\ue507": "\u591a",
        "\ue029": "\u957f",
        "\uee87": "\u5316",
        "\ue655": "\u6765",
        "\ue7c6": "\u76f8",
        "\ue981": "\u793e",
        "\uead5": "\u56e0",
        "\ue04f": "\u5c31",
        "\ue022": "\u611f",
        "\ue794": "\u6027",
        "\ueefa": "\u53bb",
        "\ue095": "\u597d",
        "\ue6b2": "\u5199",
        "\uef38": "\u4ece",
        "\ue050": "\u58f0",
        "\ueeb3": "\u7ed9",
        "\ue254": "\u662f",
        "\ue1cd": "\u8bf4",
        "\ueb07": "\u672c",
        "\ue505": "\u4e24",
        "\ued7a": "\u4e0e",
        "\uec73": "\u4e0b",
        "\ue3a6": "\u4e09",
        "\ue5dd": "\u7b49",
        "\ued82": "\u53e3",
        "\ue951": "\u4e4b",
        "\ue3f6": "\u4f60",
        "\uedb2": "\u4ee5",
        "\ue876": "\u51e0",
        "\ue1c3": "\u4ee3",
        "\ue093": "\u4e00",
        "\ue968": "\u5bb6",
        "\ue578": "\u4e9b",
        "\ue511": "\u9762",
        "\ue552": "\u8981",
        "\ue0f6": "\u73b0",
        "\ue30d": "\u8fd9",
        "\uef81": "\u8d77",
        "\ue122": "\u8fd8",
        "\uef4e": "\u65f6",
        "\ue474": "\u5929",
        "\ue3c8": "\u6c14",
        "\ue84b": "\u6210",
        "\ue387": "\u6709",
        "\ueee6": "\u540d",
        "\uedf8": "\u6ca1",
        "\ue957": "\u8bba",
        "\ue784": "\u90e8",
        "\uea97": "\u751f",
        "\ue0f4": "\u53d1",
        "\ue02b": "\u4e8b",
        "\ueecd": "\u65b9",
        "\ueef7": "\u77e5",
        "\uea70": "\u5411",
        "\uea0b": "\u628a",
        "\ue660": "\u8fc7",
        "\ue5c3": "\u4f5c",
        "\ueaa3": "\u4e86",
        "\ue443": "\u529b",
        "\ueaa1": "\u53ea",
        "\ue6af": "\u95e8",
        "\ue4bc": "\u522b",
        "\ue50d": "\u79cd",
        "\ue438": "\u6240",
        "\ue6da": "\u4e8e",
        "\ue23f": "\u773c",
        "\uebc5": "\u89c1",
        "\ue37d": "\u7406",
        "\ue5f9": "\u660e",
        "\ue3db": "\u5934",
        "\ue10d": "\u90a3",
        "\uecf9": "\u6b7b",
        "\uef74": "\u7528",
        "\uefa9": "\u6b63",
        "\ue736": "\u6c11",
        "\ued6e": "\u7279",
        "\ue592": "\u51fa",
        "\uee59": "\u91cc",
        "\ueb84": "\u66f4",
        "\uee7e": "\u5b83",
        "\ue7ed": "\u5f00",
        "\ueeac": "\u770b",
        "\ue93e": "\u53ef",
        "\ue835": "\u88ab",
        "\ued5f": "\u7136",
        "\ue8dc": "\u592a",
        "\ue2d5": "\u540e",
        "\ueb01": "\u5168",
        "\ueae4": "\u5b66",
        "\uebf7": "\u4f46",
        "\ueda9": "\u5730",
        "\ue127": "\u4e5f",
        "\ue3a1": "\u5c0f",
        "\uebe9": "\u60c5",
        "\ue0af": "\u5173",
        "\ueff5": "\u7684",
        "\uec7d": "\u8001",
        "\ueea4": "\u4e48",
        "\uebcb": "\u4e66",
        "\uebb4": "\u4e3b",
        "\uec91": "\u4e49",
        "\ue770": "\u5b50",
        "\ue71e": "\u5bf9",
        "\ue2d2": "\u5927",
        "\uec1d": "\u4e2d",
        "\ue7dc": "\u795e",
        "\uecf6": "\u5916",
        "\ueb82": "\u897f",
        "\ue7c3": "\u65e0",
        "\ued74": "\u5374",
        "\ueeb7": "\u5973",
        "\uefd1": "\u53f2",
        "\uec58": "\u679c",
        "\ue657": "\u5176",
        "\ue0a7": "\u884c",
        "\ue85f": "\u90fd",
        "\ueaf6": "\u542c",
        "\uee37": "\u5f53",
        "\ue6c5": "\u524d",
        "\uefcb": "\u8d70",
        "\ue042": "\u65e5",
        "\ue0bc": "\u800c",
        "\ue497": "\u540c",
        "\ue08e": "\u4ed6",
        "\ue40a": "\u4ec0",
        "\ueb2b": "\u6559",
        "\uea62": "\u6211",
        "\ueb62": "\u56fd",
        "\ue0dd": "\u5c06",
        "\ue8f2": "\u4e16",
    },
    jjwxcfont_003tk: {
        "\ue069": "\u611f",
        "\ueaff": "\u6027",
        "\ue112": "\u60c5",
        "\uec7b": "\u5bb6",
        "\ue1e2": "\u95f4",
        "\ue6fc": "\u597d",
        "\ue7d9": "\u4e66",
        "\ueb18": "\u5411",
        "\ue23a": "\u5f97",
        "\ue4dc": "\u6ca1",
        "\ue765": "\u4fbf",
        "\ue81e": "\u53e3",
        "\uefa8": "\u4e86",
        "\ue067": "\u65b9",
        "\ue33d": "\u4f7f",
        "\ue989": "\u6765",
        "\ue21d": "\u8eab",
        "\ue32c": "\u5e76",
        "\ue657": "\u8fd9",
        "\ue1fe": "\u4f55",
        "\uebdd": "\u8fdb",
        "\ue62f": "\u8bba",
        "\ue918": "\u90e8",
        "\ue6ca": "\u53d1",
        "\ue16d": "\u9ad8",
        "\ue278": "\u4e8b",
        "\ue4a1": "\u5206",
        "\uef27": "\u53ef",
        "\ueea2": "\u76f8",
        "\ue4e8": "\u591a",
        "\ueb6f": "\u7ecf",
        "\ue7bb": "\u8005",
        "\ue215": "\u56db",
        "\ueabd": "\u60f3",
        "\ued85": "\u4e48",
        "\ueb8d": "\u4f60",
        "\ue778": "\u4f53",
        "\ue73e": "\u8fc7",
        "\ue852": "\u7531",
        "\ue536": "\u5c11",
        "\ue94d": "\u53c8",
        "\ue8cd": "\u4ec0",
        "\ue641": "\u770b",
        "\ue089": "\u89c1",
        "\ueec4": "\u79cd",
        "\ueaa8": "\u4eba",
        "\ueb4d": "\u4e0e",
        "\ue29f": "\u610f",
        "\ue395": "\u4ee3",
        "\uef4a": "\u6253",
        "\ue671": "\u91cd",
        "\ue619": "\u957f",
        "\ue3b5": "\u4e8e",
        "\ue3fd": "\u90a3",
        "\uee94": "\u7b2c",
        "\ue3d9": "\u6b7b",
        "\uef20": "\u5929",
        "\ue294": "\u4e49",
        "\ue96a": "\u5df1",
        "\ue9c5": "\u4e09",
        "\uef10": "\u7406",
        "\ueec2": "\u4e0a",
        "\ue3b0": "\u540d",
        "\ue1a4": "\u6c14",
        "\ue120": "\u767d",
        "\uea62": "\u4ece",
        "\ue9fb": "\u4e0d",
        "\ue745": "\u9053",
        "\uec41": "\u5199",
        "\ue2ca": "\u4e3b",
        "\ue82b": "\u58f0",
        "\ueda9": "\u56fd",
        "\ue411": "\u65f6",
        "\ue17c": "\u5168",
        "\uea33": "\u4e8c",
        "\ueeb0": "\u70b9",
        "\ueaba": "\u73b0",
        "\ue15b": "\u7269",
        "\uec48": "\u4ee5",
        "\ue743": "\u5c06",
        "\ued6e": "\u4f1a",
        "\ue103": "\u91cc",
        "\ue3ec": "\u4e4b",
        "\ue661": "\u793e",
        "\uef46": "\u679c",
        "\ue06f": "\u4e0b",
        "\ue5f7": "\u65e5",
        "\uec49": "\u51e0",
        "\ueabc": "\u5728",
        "\ue6e1": "\u800c",
        "\ue3a1": "\u771f",
        "\uef0e": "\u773c",
        "\ueb42": "\u5973",
        "\uec7d": "\u88ab",
        x: "x",
        "\ue03e": "\u90fd",
        "\ue1cf": "\u5176",
        "\uee3a": "\u6587",
        "\uef01": "\u5df2",
        "\ue3ba": "\u7684",
        "\uef1c": "\u7ed9",
        "\ue80f": "\u9762",
        "\uee8a": "\u52a8",
        "\ued9d": "\u4e9b",
        "\ue096": "\u540c",
        "\ue97b": "\u6b63",
        "\uedb9": "\u513f",
        "\ue418": "\u81ea",
        "\ue603": "\u7740",
        "\ue75f": "\u6c11",
        "\ue3a2": "\u5b9e",
        "\ued01": "\u53bb",
        "\ue855": "\u7b11",
        "\ue3c7": "\u548c",
        "\ue4fc": "\u77e5",
        "\ueef5": "\u5934",
        "\ue843": "\u628a",
        "\ue9e2": "\u7279",
        "\ue8e5": "\u5b66",
        "\ue972": "\u5bf9",
        "\ue89b": "\u5316",
        "\uec76": "\u4e24",
        "\ueedf": "\u65e0",
        "\ue9d1": "\u51fa",
        "\ue22a": "\u4e2a",
        "\ue152": "\u5b83",
        "\uee12": "\u751f",
        "\ue351": "\u8bf4",
        "\uee1d": "\u7528",
        "\ueaea": "\u5979",
        "\ue437": "\u8d77",
        "\ue784": "\u5230",
        "\uee3c": "\u624d",
        "\uecd4": "\u662f",
        "\uebda": "\u542c",
        "\ue259": "\u95e8",
        "\ue6ea": "\u592a",
        "\ue20c": "\u5148",
        "\uebf6": "\u6837",
        "\ue9f6": "\u7136",
        "\ue61e": "\u672c",
        "\ue35f": "\u4f46",
        "\ue2eb": "\u8981",
        "\ue0af": "\u6211",
        "\ue2d9": "\u8d70",
        "\ue1a1": "\u524d",
        "\ue806": "\u5374",
        "\ue99e": "\u540e",
        "\ue8f0": "\u516c",
        "\ue7f1": "\u56de",
        "\ue8fa": "\u5c0f",
        "\ue400": "\u4e5f",
        "\uec86": "\u6210",
        "\ueded": "\u95ee",
        "\ueb31": "\u522b",
        "\ue65f": "\u7f8e",
        "\ue1bf": "\u5b9a",
        "\ue89f": "\u601d",
        "\ue53a": "\u66f4",
        "\ue68f": "\u6709",
        "\ue084": "\u65b0",
        "\ue728": "\u4e3a",
        "\ue9a6": "\u897f",
        "\uec5a": "\u6cd5",
        "\ue9cd": "\u795e",
        "\uecf9": "\u4e2d",
        "\ue189": "\u529b",
        "\ue786": "\u884c",
        "\ueddd": "\u4e16",
        "\ue8ef": "\u6b64",
        "\ue60c": "\u5173",
        "\ue349": "\u5fc3",
        "\uea78": "\u7b49",
        "\ue653": "\u4e00",
        "\uebd4": "\u6559",
        "\ue1d0": "\u6700",
        "\uea64": "\u5f00",
        "\ue3ff": "\u518d",
        "\uedf2": "\u660e",
        "\ue332": "\u5b50",
        "\ue156": "\u56e0",
        "\uefb4": "\u8fd8",
        "\uec28": "\u5916",
        "\ue668": "\u4f5c",
        "\ue240": "\u5341",
        "\ueddb": "\u5927",
        "\uea1a": "\u4eec",
        "\ue8a7": "\u5f88",
        "\ue027": "\u53ea",
        "\ue78b": "\u624b",
        "\ue481": "\u8001",
        "\uef3b": "\u8bdd",
        "\ue49c": "\u4ed6",
        "\ue11c": "\u5c31",
        "\uee3b": "\u5e74",
        "\uea40": "\u5730",
        "\uef30": "\u5f53",
        "\uea25": "\u6240",
        "\ue361": "\u80fd",
        "\uec4a": "\u5982",
        "\uead5": "\u53f2",
    },
    jjwxcfont_003wv: {
        "\ue4ad": "\u53ea",
        "\ue044": "\u53e3",
        "\ue3bb": "\u5148",
        "\ue0f1": "\u5c31",
        "\ue634": "\u52a8",
        "\ue10d": "\u4fbf",
        "\ue43a": "\u7279",
        "\uecc7": "\u513f",
        "\ue5b8": "\u65b9",
        "\ue565": "\u610f",
        "\uedfa": "\u5168",
        "\ue259": "\u4e66",
        "\ue0c9": "\u91cc",
        "\ued8a": "\u8bba",
        "\ue2ad": "\u800c",
        "\ue7b8": "\u56db",
        "\uecdf": "\u771f",
        "\uedc1": "\u6587",
        "\ue775": "\u548c",
        "\ue915": "\u540e",
        "\ue9a7": "\u795e",
        "\ue7fb": "\u73b0",
        "\ueaad": "\u793e",
        "\ue5d2": "\u7ecf",
        "\uefed": "\u6559",
        "\ue55b": "\u8fdb",
        "\uead6": "\u9053",
        "\ued73": "\u4f53",
        "\ueb68": "\u4e9b",
        "\ueeec": "\u56fd",
        "\ueed3": "\u6cd5",
        "\ue2dd": "\u518d",
        "\uef03": "\u6765",
        "\ue2bf": "\u4e4b",
        "\ue986": "\u6240",
        "\ue649": "\u95ee",
        "\uea9d": "\u89c1",
        "\ue339": "\u5c06",
        "\uef73": "\u5f53",
        x: "x",
        "\uee68": "\u6709",
        "\ue338": "\u957f",
        "\uea6d": "\u9ad8",
        "\ue62f": "\u5176",
        "\uedf2": "\u660e",
        "\ueb67": "\u4e8b",
        "\ue505": "\u597d",
        "\uef75": "\u8fd9",
        "\uee20": "\u6b63",
        "\ue9e6": "\u79cd",
        "\uee45": "\u53bb",
        "\ue925": "\u767d",
        "\ue051": "\u5374",
        "\ue646": "\u5927",
        "\uea98": "\u53d1",
        "\ue0e1": "\u6700",
        "\uec33": "\u4e16",
        "\ue995": "\u5929",
        "\ueca5": "\u5199",
        "\ue6e1": "\u6210",
        "\uecf8": "\u53f2",
        "\ue799": "\u51fa",
        "\ue8f1": "\u90e8",
        "\uec79": "\u5916",
        "\ue762": "\u672c",
        "\ue781": "\u5c11",
        "\ue7db": "\u76f8",
        "\ue07e": "\u4ed6",
        "\ue4ae": "\u4ee3",
        "\ue6ca": "\u4e0b",
        "\ue836": "\u5982",
        "\ue92d": "\u4f7f",
        "\ue335": "\u5df2",
        "\ue6f3": "\u591a",
        "\ueea9": "\u5b83",
        "\ue7ab": "\u4ee5",
        "\ue430": "\u7f8e",
        "\ue914": "\u7269",
        "\ued94": "\u5316",
        "\ueda7": "\u4e49",
        "\ue45d": "\u5f88",
        "\uec39": "\u7136",
        "\ued3c": "\u70b9",
        "\ued7e": "\u51e0",
        "\ued0d": "\u6211",
        "\ue813": "\u884c",
        "\ue937": "\u9762",
        "\ueed6": "\u5728",
        "\uec8c": "\u81ea",
        "\ue39a": "\u4e0d",
        "\uec5d": "\u524d",
        "\uee2b": "\u6027",
        "\ue722": "\u4eec",
        "\uede8": "\u4f55",
        "\uef91": "\u53ef",
        "\ueff8": "\u540c",
        "\ue2ff": "\u5b50",
        "\ue790": "\u4e00",
        "\uef5a": "\u7740",
        "\uefb0": "\u8005",
        "\ue90a": "\u5230",
        "\ue693": "\u6b7b",
        "\ue749": "\u5bf9",
        "\ue0a0": "\u8981",
        "\ue1e7": "\u8d70",
        "\uee42": "\u4e8c",
        "\ueb74": "\u4ece",
        "\ue568": "\u8001",
        "\ue704": "\u8fd8",
        "\ueb07": "\u897f",
        "\ued69": "\u4e24",
        "\ued05": "\u65e5",
        "\ue3d5": "\u90fd",
        "\ue420": "\u5bb6",
        "\ue320": "\u66f4",
        "\ue026": "\u4e3a",
        "\ue1a2": "\u5206",
        "\ue278": "\u80fd",
        "\uea84": "\u5411",
        "\uee52": "\u5173",
        "\ued1a": "\u56de",
        "\ue7ae": "\u4e2a",
        "\ue817": "\u751f",
        "\ue4f8": "\u7406",
        "\ue6c2": "\u4e0a",
        "\ue342": "\u516c",
        "\uecbb": "\u5973",
        "\ue633": "\u4e5f",
        "\ue94b": "\u5b9e",
        "\ue4ff": "\u60f3",
        "\ue326": "\u4f46",
        "\uead1": "\u7531",
        "\ued93": "\u4ec0",
        "\ue8b8": "\u5979",
        "\uec00": "\u88ab",
        "\uedfb": "\u4e86",
        "\ue165": "\u77e5",
        "\ue453": "\u5b66",
        "\uef30": "\u7b2c",
        "\uecd0": "\u592a",
        "\ue406": "\u5f00",
        "\uec11": "\u58f0",
        "\ue2fc": "\u4eba",
        "\ued58": "\u5fc3",
        "\ue809": "\u53c8",
        "\uef59": "\u5e74",
        "\ue8e1": "\u529b",
        "\ue3f4": "\u5df1",
        "\ue2a0": "\u6837",
        "\ue67f": "\u8bf4",
        "\uecc5": "\u95f4",
        "\ue755": "\u5934",
        "\ue80c": "\u4f1a",
        "\ueb69": "\u624d",
        "\ue754": "\u7528",
        "\uef7c": "\u4e3b",
        "\ue27d": "\u7ed9",
        "\uee4a": "\u628a",
        "\ue7d7": "\u601d",
        "\uef49": "\u56e0",
        "\uee51": "\u624b",
        "\ue6f0": "\u6b64",
        "\uefb7": "\u6c14",
        "\ue3da": "\u65b0",
        "\ue232": "\u540d",
        "\ue27c": "\u662f",
        "\ue4d0": "\u4e8e",
        "\ue3e0": "\u773c",
        "\ue3c3": "\u95e8",
        "\ue160": "\u4e09",
        "\uef0e": "\u5f97",
        "\uee29": "\u7b49",
        "\ue716": "\u4e2d",
        "\ue22f": "\u4f60",
        "\uefb9": "\u5730",
        "\ueba4": "\u770b",
        "\ue730": "\u6ca1",
        "\ue41e": "\u65e0",
        "\uef97": "\u91cd",
        "\ue7dc": "\u4e48",
        "\ue3f6": "\u8bdd",
        "\ue179": "\u8d77",
        "\ue139": "\u90a3",
        "\ue74f": "\u679c",
        "\uef14": "\u5b9a",
        "\ued8c": "\u60c5",
        "\ue972": "\u7684",
        "\ue089": "\u6253",
        "\uec99": "\u5c0f",
        "\ue893": "\u65f6",
        "\ue56b": "\u522b",
        "\ue8b7": "\u5e76",
        "\ue4b6": "\u4e0e",
        "\uefac": "\u4f5c",
        "\ue7a2": "\u5341",
        "\ue63a": "\u8fc7",
        "\uead5": "\u8eab",
        "\uecf3": "\u611f",
        "\ue719": "\u6c11",
        "\uecbe": "\u542c",
        "\ueea2": "\u7b11",
    },
    jjwxcfont_003zu: {
        "\ue9a4": "\u4f60",
        "\uea4d": "\u8981",
        "\ue97f": "\u56db",
        "\ue5ba": "\u5b83",
        "\ue7e4": "\u7ecf",
        "\ue429": "\u5f97",
        "\ue5f3": "\u6837",
        "\ued45": "\u4ee3",
        "\ue038": "\u540d",
        "\ue93b": "\u7136",
        "\ue589": "\u524d",
        "\uea70": "\u7b11",
        "\ue6e0": "\u5bb6",
        "\ue5ed": "\u4f1a",
        "\ue322": "\u751f",
        "\uef7c": "\u8d70",
        "\ue8d0": "\u90a3",
        "\ue224": "\u8001",
        "\ueb27": "\u4ec0",
        "\ue5fb": "\u7531",
        "\uee11": "\u8d77",
        "\ue7d3": "\u8fdb",
        "\ue9fb": "\u7684",
        "\ue032": "\u5f88",
        "\uee94": "\u56de",
        "\uec2c": "\u5979",
        "\ue68f": "\u53ef",
        "\ue8a3": "\u5f00",
        "\ue338": "\u773c",
        "\uedd3": "\u5973",
        "\ue182": "\u5b9a",
        "\ue988": "\u5230",
        "\uee53": "\u4e3b",
        "\ue791": "\u5982",
        "\ue380": "\u6b7b",
        "\ueed4": "\u5b9e",
        "\ue0e9": "\u4e24",
        "\ued8c": "\u8bf4",
        "\uef85": "\u6ca1",
        "\ue8cb": "\u5176",
        "\ue187": "\u518d",
        "\uedeb": "\u80fd",
        "\ue6a9": "\u76f8",
        "\ueaeb": "\u90e8",
        "\ue02c": "\u6b63",
        "\uea09": "\u4eba",
        "\ue133": "\u611f",
        "\uefda": "\u89c1",
        "\ue319": "\u5206",
        "\ue0ad": "\u4f46",
        "\ue2f7": "\u70b9",
        "\ueac3": "\u8fc7",
        "\ueaa4": "\u660e",
        "\ue2a8": "\u65e5",
        "\uec25": "\u542c",
        "\ue76b": "\u4ece",
        "\ue9ba": "\u5c06",
        "\ue3b2": "\u6027",
        "\ue919": "\u53ea",
        "\ue78e": "\u6cd5",
        x: "x",
        "\ue5b4": "\u5bf9",
        "\ue8e5": "\u6700",
        "\ue982": "\u4e48",
        "\uea9c": "\u7269",
        "\ue90e": "\u4e2a",
        "\ue163": "\u73b0",
        "\uef62": "\u4ee5",
        "\ue1de": "\u91cd",
        "\ued2b": "\u592a",
        "\ue140": "\u793e",
        "\ue34c": "\u8005",
        "\uea92": "\u65b0",
        "\ue921": "\u628a",
        "\ue719": "\u5728",
        "\ueb49": "\u5f53",
        "\uec26": "\u897f",
        "\ued03": "\u4e16",
        "\uee3c": "\u4e8c",
        "\ue260": "\u6559",
        "\ued04": "\u4e0b",
        "\ue6b6": "\u5df2",
        "\ue4b3": "\u672c",
        "\ue624": "\u4e66",
        "\uecce": "\u6210",
        "\ue9de": "\u88ab",
        "\ue3ea": "\u4ed6",
        "\ue592": "\u60c5",
        "\ue72f": "\u7528",
        "\ue92e": "\u795e",
        "\ue27b": "\u65b9",
        "\ued6b": "\u5929",
        "\ue280": "\u5173",
        "\ue201": "\u767d",
        "\ue57b": "\u53c8",
        "\ue7a3": "\u8fd8",
        "\ue5a8": "\u8fd9",
        "\ue841": "\u4e86",
        "\ue25e": "\u5c11",
        "\ue4fe": "\u5168",
        "\ue6bb": "\u51e0",
        "\ue2d8": "\u6c14",
        "\ue08f": "\u4e49",
        "\ue0ef": "\u65f6",
        "\ueb4a": "\u4e0a",
        "\ue228": "\u4eec",
        "\ued7d": "\u522b",
        "\uee44": "\u548c",
        "\ue3fe": "\u5341",
        "\ue9eb": "\u601d",
        "\ueeb9": "\u597d",
        "\ue8ea": "\u53f2",
        "\ue477": "\u5fc3",
        "\ue3be": "\u5316",
        "\ue594": "\u5e76",
        "\uef4a": "\u53d1",
        "\ueb80": "\u66f4",
        "\ue046": "\u540c",
        "\ue196": "\u529b",
        "\ueb0c": "\u540e",
        "\ue777": "\u4e2d",
        "\uedb8": "\u4e8b",
        "\uec89": "\u5730",
        "\ue223": "\u5df1",
        "\ue6c1": "\u5916",
        "\uebe7": "\u6c11",
        "\uee2d": "\u6240",
        "\ue315": "\u6709",
        "\ue306": "\u56e0",
        "\uef99": "\u4e9b",
        "\ue93c": "\u5e74",
        "\ue35c": "\u77e5",
        "\ue153": "\u91cc",
        "\uea7b": "\u4e5f",
        "\ue2c1": "\u884c",
        "\uee79": "\u52a8",
        "\ue7f7": "\u79cd",
        "\uec8d": "\u5927",
        "\ue7eb": "\u9053",
        "\ueb5d": "\u4e0e",
        "\uedaa": "\u4e09",
        "\ue350": "\u65e0",
        "\uea8f": "\u51fa",
        "\ue207": "\u6253",
        "\ue99b": "\u60f3",
        "\ue249": "\u7ed9",
        "\ue618": "\u7740",
        "\ue61f": "\u5374",
        "\ue9ef": "\u4fbf",
        "\ueddd": "\u6211",
        "\ue84f": "\u513f",
        "\ueb2d": "\u4f53",
        "\ue907": "\u4e00",
        "\ue826": "\u4f7f",
        "\uee3f": "\u5b50",
        "\ue7c3": "\u4f5c",
        "\ue94f": "\u5c31",
        "\ued1b": "\u4e8e",
        "\ue0e6": "\u56fd",
        "\uee95": "\u8bdd",
        "\ue40d": "\u516c",
        "\ue237": "\u6b64",
        "\uec96": "\u800c",
        "\ue351": "\u4e3a",
        "\uebc0": "\u624b",
        "\ue825": "\u5b66",
        "\ue8e9": "\u610f",
        "\ue700": "\u7f8e",
        "\uebe3": "\u7b49",
        "\ueebb": "\u5c0f",
        "\ue532": "\u7b2c",
        "\ue605": "\u53bb",
        "\uee89": "\u8eab",
        "\ued10": "\u7406",
        "\ue426": "\u624d",
        "\uef9d": "\u771f",
        "\ue71d": "\u90fd",
        "\ue00b": "\u679c",
        "\ue35b": "\u591a",
        "\uee65": "\u9ad8",
        "\ue43a": "\u9762",
        "\uec76": "\u770b",
        "\ue147": "\u4e4b",
        "\ueaa9": "\u6587",
        "\ueff0": "\u4f55",
        "\ue661": "\u5148",
        "\ue992": "\u5199",
        "\ue2e4": "\u662f",
        "\uec1c": "\u957f",
        "\ue073": "\u95e8",
        "\ue961": "\u4e0d",
        "\uee96": "\u81ea",
        "\ue49d": "\u5934",
        "\uec20": "\u7279",
        "\ue3d3": "\u8bba",
        "\ue235": "\u58f0",
        "\ue701": "\u53e3",
        "\ue68e": "\u95ee",
        "\uedac": "\u6765",
        "\ue747": "\u95f4",
        "\uea2d": "\u5411",
    },
    jjwxcfont_0041e: {
        "\ue3b0": "\u7684",
        "\ue68b": "\u518d",
        "\ue3c7": "\u7406",
        "\uecca": "\u77e5",
        "\ue8f0": "\u60f3",
        "\ued8e": "\u5df2",
        "\ue0bf": "\u5411",
        "\ue612": "\u4f60",
        "\ueee2": "\u76f8",
        "\ue388": "\u5f97",
        "\ued5c": "\u7136",
        "\ue40c": "\u4e24",
        "\ue2dd": "\u91cd",
        "\ue057": "\u4e86",
        "\uec6e": "\u56e0",
        "\uec24": "\u5173",
        "\uead2": "\u4ee3",
        "\ue95c": "\u610f",
        "\ue748": "\u4e0b",
        "\ue5b9": "\u6b64",
        "\ue7e7": "\u5927",
        "\ue9bb": "\u5b50",
        "\uefd1": "\u6b7b",
        "\ued54": "\u4eba",
        "\ue31f": "\u628a",
        "\uecb4": "\u6c11",
        "\ue654": "\u5c0f",
        "\ueaf0": "\u771f",
        "\ue60f": "\u524d",
        "\ue0e0": "\u672c",
        "\ue4af": "\u5728",
        "\uea62": "\u597d",
        "\ue8a3": "\u5e76",
        "\ue61c": "\u679c",
        "\ue724": "\u8d70",
        "\ue7c7": "\u5929",
        "\uec2f": "\u800c",
        "\ue83d": "\u8bba",
        "\uef3e": "\u8981",
        "\ue243": "\u770b",
        "\ue4a3": "\u5148",
        "\ue876": "\u90a3",
        "\uebbb": "\u58f0",
        "\uec1b": "\u5982",
        "\ue544": "\u4ed6",
        "\ue589": "\u6027",
        "\ue7fa": "\u5f88",
        "\ue7f4": "\u95f4",
        "\ue94b": "\u65e0",
        "\ue783": "\u5df1",
        "\ueb29": "\u56de",
        "\ue3f2": "\u73b0",
        "\ue65d": "\u8d77",
        "\ue26d": "\u5199",
        "\ue91f": "\u6c14",
        "\ueebf": "\u5b9e",
        "\ue87e": "\u5934",
        "\ue0ae": "\u884c",
        "\ueec2": "\u6765",
        "\ue1dd": "\u6b63",
        "\ue702": "\u8bf4",
        "\uede1": "\u7b11",
        "\ued69": "\u6211",
        "\ue413": "\u5f00",
        "\uec0f": "\u90e8",
        "\ue95d": "\u591a",
        "\ue193": "\u6559",
        "\uece0": "\u6cd5",
        "\uee5e": "\u5e74",
        "\uec7d": "\u8005",
        "\ue351": "\u6210",
        "\ueecf": "\u80fd",
        "\uedad": "\u70b9",
        "\uef27": "\u540c",
        "\ue60c": "\u91cc",
        "\ue028": "\u7ecf",
        "\ue1a7": "\u65e5",
        "\ue3eb": "\u7ed9",
        "\ueee4": "\u4e8e",
        "\ued86": "\u4e0e",
        "\ue15b": "\u4ee5",
        "\ue397": "\u81ea",
        "\ued1a": "\u751f",
        "\ueb51": "\u957f",
        "\uebab": "\u53e3",
        "\ue084": "\u9053",
        "\uebc8": "\u6253",
        "\ue2dc": "\u6ca1",
        "\ue605": "\u53ea",
        "\ue929": "\u6709",
        "\ue1aa": "\u5b9a",
        "\ue058": "\u662f",
        "\ue954": "\u4ece",
        "\uedaa": "\u4e49",
        "\ue722": "\u89c1",
        "\ue4c8": "\u7f8e",
        x: "x",
        "\ue2a3": "\u51fa",
        "\ue6e3": "\u548c",
        "\ue6e4": "\u4e0d",
        "\ue399": "\u56db",
        "\ue107": "\u5979",
        "\uecde": "\u4e4b",
        "\ue82b": "\u8fc7",
        "\ue83e": "\u8fd8",
        "\uece6": "\u4f1a",
        "\ue6d9": "\u624b",
        "\uec90": "\u4e2a",
        "\ueb8b": "\u5316",
        "\ue3f5": "\u53bb",
        "\uebc2": "\u4e16",
        "\uecef": "\u4e66",
        "\ue401": "\u79cd",
        "\ue260": "\u5f53",
        "\ue974": "\u5230",
        "\ue3ec": "\u4e5f",
        "\ue84c": "\u513f",
        "\ue18f": "\u660e",
        "\ue80e": "\u5176",
        "\ue41c": "\u5168",
        "\uef5c": "\u4f55",
        "\ueb7f": "\u4e48",
        "\ue10e": "\u52a8",
        "\ue752": "\u5341",
        "\uedab": "\u88ab",
        "\ue031": "\u7b2c",
        "\ue68a": "\u9ad8",
        "\ue175": "\u4f46",
        "\ue5e1": "\u4f53",
        "\ue31e": "\u540d",
        "\ue329": "\u611f",
        "\uee03": "\u7531",
        "\ue92f": "\u592a",
        "\ueadf": "\u8bdd",
        "\ue282": "\u4e3a",
        "\ue670": "\u4e8c",
        "\ue17c": "\u7b49",
        "\ued88": "\u7269",
        "\ue910": "\u7528",
        "\ue706": "\u4e3b",
        "\ue34b": "\u4eec",
        "\uec75": "\u66f4",
        "\uead6": "\u540e",
        "\ue99a": "\u4f7f",
        "\ue08a": "\u6587",
        "\ue49f": "\u6700",
        "\ue04a": "\u4e9b",
        "\uec9f": "\u53d1",
        "\ue8d9": "\u5bf9",
        "\ueb84": "\u5c11",
        "\uec3c": "\u5fc3",
        "\ue9e3": "\u65f6",
        "\uea67": "\u624d",
        "\ueb77": "\u5c31",
        "\ue453": "\u4e8b",
        "\ue0b1": "\u897f",
        "\ued61": "\u4fbf",
        "\ue81f": "\u795e",
        "\ueac0": "\u5b83",
        "\ueafa": "\u5374",
        "\uea85": "\u56fd",
        "\ue303": "\u8fdb",
        "\uee15": "\u522b",
        "\ue3a3": "\u8fd9",
        "\ue439": "\u5973",
        "\ue50e": "\u4e2d",
        "\ue989": "\u5206",
        "\ue3d7": "\u53ef",
        "\ue986": "\u601d",
        "\ue185": "\u53c8",
        "\ue013": "\u4ec0",
        "\uea70": "\u5916",
        "\ue7f5": "\u53f2",
        "\ue663": "\u6837",
        "\uec4b": "\u529b",
        "\ue245": "\u4f5c",
        "\ue825": "\u4e0a",
        "\ue9be": "\u5c06",
        "\ue1bf": "\u9762",
        "\uea5c": "\u8001",
        "\uee1e": "\u516c",
        "\ueed4": "\u773c",
        "\ueb8d": "\u90fd",
        "\uea1a": "\u60c5",
        "\ue57d": "\u4e09",
        "\ue23b": "\u542c",
        "\uebe6": "\u51e0",
        "\uef83": "\u7740",
        "\uec3e": "\u5730",
        "\ue7e5": "\u95ee",
        "\ue556": "\u4e00",
        "\uefca": "\u5b66",
        "\ue75b": "\u7279",
        "\ue720": "\u5bb6",
        "\uefa7": "\u793e",
        "\ue691": "\u95e8",
        "\ue886": "\u8eab",
        "\ue034": "\u65b9",
        "\ue200": "\u767d",
        "\uef09": "\u6240",
        "\uefa6": "\u65b0",
    },
    jjwxcfont_0043t: {
        "\uee1c": "\u56fd",
        "\ue3ff": "\u5f88",
        "\ue4ca": "\u5730",
        "\uef98": "\u628a",
        "\uec08": "\u5bf9",
        "\ue90d": "\u9053",
        "\ue438": "\u60c5",
        "\uee06": "\u58f0",
        "\ue517": "\u7684",
        "\ue04d": "\u4f55",
        "\uec3f": "\u66f4",
        "\ued38": "\u540e",
        "\ue6f8": "\u4e24",
        "\ue1dc": "\u53ef",
        "\uee8b": "\u6709",
        "\ue080": "\u522b",
        "\uea57": "\u624d",
        "\uecb6": "\u53d1",
        "\ue1f5": "\u8bdd",
        "\uebfa": "\u6837",
        "\ue91f": "\u4ece",
        "\ue850": "\u7ed9",
        "\ue9e7": "\u5374",
        "\uec95": "\u90fd",
        "\ue876": "\u6cd5",
        "\ued47": "\u52a8",
        "\ue158": "\u95f4",
        "\ue498": "\u4ee5",
        "\ue516": "\u53e3",
        "\ue63a": "\u751f",
        "\ue20d": "\u6559",
        "\ueed2": "\u800c",
        "\ue010": "\u8bba",
        "\ueedd": "\u60f3",
        "\ue118": "\u4e9b",
        "\ue13a": "\u8fd8",
        "\ue036": "\u5bb6",
        "\ue4f6": "\u513f",
        "\ue71e": "\u6b64",
        "\ue5fa": "\u5fc3",
        "\ue8e7": "\u5c06",
        "\ue149": "\u672c",
        "\uee21": "\u8005",
        "\ue7b1": "\u65b9",
        "\ue919": "\u5c11",
        "\ue2ed": "\u6027",
        "\ue113": "\u6240",
        "\ue86c": "\u5b66",
        "\ue186": "\u6b63",
        "\ue0c0": "\u88ab",
        "\ue6e5": "\u542c",
        "\ue6af": "\u7ecf",
        "\uefc0": "\u73b0",
        "\uecd0": "\u4f53",
        "\uedb6": "\u773c",
        "\ue543": "\u4e3b",
        "\ue01d": "\u7528",
        "\ueeb3": "\u65f6",
        "\ue9cb": "\u7b11",
        "\ue093": "\u4fbf",
        "\uecdd": "\u4e5f",
        "\ue14b": "\u4e49",
        "\uea76": "\u662f",
        "\uec5d": "\u4e2a",
        "\uea36": "\u53f2",
        "\ue042": "\u897f",
        "\ue1f2": "\u80fd",
        "\uec89": "\u4ec0",
        "\uecd3": "\u6c11",
        "\ueb2a": "\u6700",
        "\ue75e": "\u8d70",
        "\ue7c4": "\u5b83",
        "\ue8d1": "\u5979",
        "\ue197": "\u957f",
        "\uec39": "\u7279",
        "\ue11c": "\u6b7b",
        "\uedfa": "\u4e0b",
        "\ueb0d": "\u771f",
        "\ue0f5": "\u610f",
        "\ue3d9": "\u524d",
        "\ue25c": "\u5df1",
        "\ue269": "\u884c",
        "\uea15": "\u679c",
        "\uea13": "\u5b9a",
        "\uef18": "\u7269",
        "\ue292": "\u81ea",
        "\uec7a": "\u4ed6",
        "\ue97d": "\u5934",
        "\ue39e": "\u4f5c",
        "\ue6e9": "\u540d",
        "\ue165": "\u5e76",
        "\ue30a": "\u4e66",
        "\ue055": "\u516c",
        "\ue6e0": "\u5148",
        "\ue162": "\u7136",
        "\ue5ae": "\u624b",
        "\ued24": "\u5916",
        "\ue845": "\u4e8c",
        "\ue223": "\u8bf4",
        "\uecd2": "\u7740",
        "\ue352": "\u8001",
        "\ue399": "\u91cd",
        "\ue4d2": "\u4f60",
        "\ue534": "\u660e",
        "\ue9bf": "\u6210",
        "\uef35": "\u4e00",
        "\ue8bc": "\u77e5",
        "\uefa3": "\u767d",
        "\ue01e": "\u4f7f",
        "\ue827": "\u7b2c",
        "\uea09": "\u53bb",
        "\uecb4": "\u4eec",
        "\ue386": "\u540c",
        "\ue84f": "\u53ea",
        "\ue0d9": "\u53c8",
        "\uedce": "\u5929",
        "\ue46d": "\u5e74",
        "\ue191": "\u90e8",
        "\ue828": "\u8981",
        "\ue773": "\u56e0",
        "\ue013": "\u5206",
        "\ue6df": "\u5973",
        "\ue9ce": "\u5c31",
        "\ue891": "\u8fdb",
        "\uecd7": "\u4e3a",
        "\ued41": "\u6211",
        "\ue56b": "\u51e0",
        "\ue5ef": "\u6c14",
        "\ue23f": "\u592a",
        "\uebb9": "\u65b0",
        "\ue1de": "\u795e",
        "\ue902": "\u4f46",
        "\ue460": "\u7531",
        "\uec94": "\u5199",
        "\ue0d0": "\u90a3",
        "\ue21c": "\u5411",
        "\ue869": "\u770b",
        "\ueb9c": "\u4e2d",
        "\ue105": "\u56db",
        "\uee9d": "\u89c1",
        "\uea23": "\u5176",
        "\uefaf": "\u4e4b",
        "\ue034": "\u4eba",
        "\ue466": "\u4ee3",
        "\ue0d8": "\u5341",
        "\ueb38": "\u793e",
        "\ued77": "\u4e48",
        "\ue57b": "\u7f8e",
        "\ueb76": "\u4e0e",
        "\ueb8e": "\u76f8",
        "\ue58a": "\u601d",
        "\ueced": "\u70b9",
        "\ue99b": "\u4e09",
        "\ue3ca": "\u4e86",
        "\ue310": "\u51fa",
        "\ue5cb": "\u5b9e",
        "\ue798": "\u518d",
        "\ue699": "\u5f97",
        "\ue7a8": "\u8fc7",
        "\uecc3": "\u4e16",
        "\ue7ef": "\u4f1a",
        "\uece6": "\u6253",
        "\ue52b": "\u5f00",
        "\ue675": "\u4e0d",
        x: "x",
        "\uee3a": "\u5173",
        "\ue6ee": "\u5c0f",
        "\ue403": "\u5b50",
        "\ue43a": "\u9762",
        "\ueff8": "\u4e0a",
        "\ueeea": "\u6765",
        "\ue008": "\u5982",
        "\ue70a": "\u591a",
        "\ue075": "\u8d77",
        "\ue633": "\u56de",
        "\ue407": "\u5927",
        "\ue0c6": "\u4e8b",
        "\ue3de": "\u95e8",
        "\ue3b4": "\u5230",
        "\ue1f7": "\u6587",
        "\ue5dd": "\u8eab",
        "\ue02a": "\u9ad8",
        "\ueb49": "\u5316",
        "\uef5c": "\u6ca1",
        "\ue3a1": "\u95ee",
        "\ue1cb": "\u79cd",
        "\ue322": "\u4e8e",
        "\uec56": "\u5f53",
        "\ue947": "\u7b49",
        "\uef99": "\u5168",
        "\ue276": "\u597d",
        "\ue9f6": "\u65e0",
        "\uec3a": "\u611f",
        "\ue62a": "\u529b",
        "\ue58d": "\u8fd9",
        "\ue4f0": "\u548c",
        "\ue5fc": "\u91cc",
        "\ueab6": "\u65e5",
        "\ue8ea": "\u5df2",
        "\ueca2": "\u7406",
        "\ued87": "\u5728",
    },
    jjwxcfont_00484: {
        "\ue6f6": "\u73b0",
        "\ueaae": "\u8001",
        "\ue4f5": "\u5929",
        "\ue83e": "\u5168",
        "\ue675": "\u5316",
        "\ue100": "\u5df2",
        "\uece1": "\u4ee5",
        "\ue460": "\u6cd5",
        "\uef5a": "\u7269",
        "\uea21": "\u77e5",
        "\ue78c": "\u624d",
        "\ueef3": "\u5148",
        "\ue10d": "\u6b63",
        "\ue254": "\u5973",
        "\uea46": "\u7528",
        "\uef44": "\u51e0",
        "\uedf9": "\u628a",
        "\ue846": "\u5927",
        "\ue2b3": "\u601d",
        "\ue11f": "\u610f",
        "\ue040": "\u597d",
        "\ue0e5": "\u95f4",
        "\uecbd": "\u8eab",
        "\ue476": "\u7b2c",
        "\ue2d1": "\u795e",
        "\uebad": "\u53c8",
        "\ue815": "\u672c",
        "\ue32c": "\u53e3",
        "\uedf4": "\u6700",
        "\ue8c8": "\u5b66",
        "\ueed1": "\u5982",
        "\ue52f": "\u4e86",
        "\ue92f": "\u5730",
        "\ue655": "\u6765",
        "\ue47d": "\u5206",
        "\ue3f9": "\u592a",
        "\uebf3": "\u770b",
        "\ue5d6": "\u4ece",
        "\ue075": "\u5173",
        "\ueb5a": "\u4ec0",
        "\ue3d1": "\u529b",
        "\ue7d6": "\u4f5c",
        "\uedc1": "\u6c14",
        "\ue7d3": "\u6027",
        "\ueb48": "\u4ed6",
        "\ue6bb": "\u5e76",
        "\uecda": "\u4e3b",
        "\ue314": "\u5df1",
        "\ue2e4": "\u4fbf",
        "\uef12": "\u9053",
        "\ue86b": "\u4e0d",
        "\ue0f3": "\u884c",
        "\uefa8": "\u4f60",
        "\ue559": "\u4e2d",
        "\uef42": "\u53d1",
        "\ue56f": "\u65e0",
        "\ueb4b": "\u8fd8",
        "\ueec0": "\u4ee3",
        "\ue189": "\u5230",
        "\ueb8b": "\u660e",
        "\ued9d": "\u4f7f",
        "\ue441": "\u4e3a",
        "\uedf6": "\u76f8",
        "\uedbe": "\u5f97",
        "\ue956": "\u90e8",
        "\ue235": "\u5979",
        "\ue281": "\u5e74",
        "\ue270": "\u80fd",
        "\uedfa": "\u897f",
        "\ue7fd": "\u4e8e",
        "\uec70": "\u5c06",
        "\ue0fc": "\u4e9b",
        "\ueeeb": "\u518d",
        "\ue1b3": "\u5341",
        "\ueb82": "\u548c",
        "\ue993": "\u611f",
        "\uee3a": "\u52a8",
        "\uef78": "\u8d70",
        "\ue39b": "\u4e0b",
        "\ued25": "\u6210",
        "\ueaad": "\u56de",
        "\ue908": "\u56db",
        "\uec90": "\u7279",
        "\ue917": "\u773c",
        "\ue646": "\u88ab",
        "\ue728": "\u8005",
        "\ue6a1": "\u751f",
        "\ue34f": "\u7f8e",
        "\ued65": "\u5bf9",
        "\ue5bd": "\u90fd",
        "\uebb1": "\u6c11",
        "\ue889": "\u65f6",
        "\ueca7": "\u4e8c",
        "\uee5b": "\u6211",
        "\ue569": "\u56e0",
        "\ue0b1": "\u7ed9",
        "\uefb9": "\u89c1",
        "\uee09": "\u5728",
        "\ue21e": "\u9ad8",
        "\ue39e": "\u7b49",
        "\ue593": "\u5bb6",
        "\ue12d": "\u6837",
        "\ue497": "\u4e4b",
        "\ue707": "\u4e2a",
        "\ue5d1": "\u95e8",
        "\ueb1e": "\u7684",
        "\ue8d4": "\u60f3",
        "\ue179": "\u7406",
        "\ue4b5": "\u5199",
        "\uea89": "\u516c",
        "\uefbd": "\u7740",
        "\ue4e8": "\u5f53",
        "\ue324": "\u8981",
        "\uefc1": "\u542c",
        "\uec42": "\u5176",
        "\ue02a": "\u6559",
        "\uef70": "\u6587",
        "\ue0be": "\u8bdd",
        "\ue1d7": "\u6ca1",
        "\uefab": "\u4e00",
        "\ueadc": "\u4f55",
        "\ue267": "\u5b83",
        "\uee03": "\u4eec",
        "\ue2ee": "\u8bba",
        "\ue4e2": "\u540c",
        "\ue28d": "\u524d",
        "\uee13": "\u51fa",
        "\ueced": "\u66f4",
        "\uecf4": "\u4f1a",
        "\uebc2": "\u58f0",
        "\ue028": "\u4f46",
        "\ue8db": "\u4e0a",
        "\uec21": "\u8bf4",
        "\uef75": "\u522b",
        "\ue2f0": "\u4e0e",
        "\ue850": "\u4f53",
        "\ue8b4": "\u90a3",
        "\uebc9": "\u91cc",
        "\ued8a": "\u4e49",
        "\ue615": "\u771f",
        "\uee36": "\u7136",
        "\ue3fc": "\u5b50",
        "\ue50e": "\u8fc7",
        "\ueee2": "\u540e",
        "\ue914": "\u8d77",
        "\ue6fa": "\u5c11",
        "\ue01e": "\u53ea",
        "\ued60": "\u6709",
        "\ue98b": "\u6240",
        "\uea7f": "\u767d",
        "\uebb8": "\u79cd",
        "\ue5eb": "\u5411",
        "\uec39": "\u9762",
        "\uea29": "\u5934",
        "\ueee7": "\u9762",
        "\ue196": "\u4e09",
        "\ue45c": "\u4eba",
        "\ue937": "\u53bb",
        "\ue3fe": "\u4e16",
        "\ue686": "\u591a",
        "\ueaf0": "\u540d",
        "\ue8d2": "\u60c5",
        "\ueaf7": "\u91cd",
        "\ue25d": "\u95ee",
        "\ue104": "\u81ea",
        "\ue358": "\u70b9",
        "\uedd9": "\u6b7b",
        "\uef56": "\u5b9a",
        "\ue5fd": "\u662f",
        "\ue804": "\u7ecf",
        "\ued61": "\u5916",
        "\ueb6f": "\u5b9e",
        "\ue5ab": "\u5f00",
        "\ue0cd": "\u5374",
        "\uecdf": "\u4e48",
        "\ue09d": "\u4e8b",
        "\ue8d9": "\u5c0f",
        "\ued01": "\u6b64",
        "\ue9f4": "\u4e5f",
        "\uead1": "\u793e",
        "\ue72f": "\u5fc3",
        "\uee8b": "\u53ef",
        "\ue099": "\u4e24",
        "\ue949": "\u8fdb",
        "\ue066": "\u513f",
        "\ueda9": "\u800c",
        "\ue328": "\u65b0",
        "\ue971": "\u6253",
        "\ueaf9": "\u957f",
        "\ue299": "\u65e5",
        "\ue645": "\u679c",
        "\ue73d": "\u65b9",
        "\uec44": "\u53f2",
        "\ueda5": "\u5f88",
        "\ue64f": "\u624b",
        "\ue0b0": "\u5c31",
        "\ue8e7": "\u4e66",
        "\uef9a": "\u56fd",
        "\ue968": "\u8fd9",
        "\ue9c0": "\u7531",
    },
    jjwxcfont_0049b: {
        "\ue257": "\u597d",
        "\ueaf3": "\u51fa",
        "\uec38": "\u89c1",
        "\uee7c": "\u8d77",
        "\ue475": "\u5df1",
        "\uea63": "\u7b11",
        "\uec5f": "\u5728",
        "\ue21d": "\u5176",
        "\ue49c": "\u56de",
        "\uefee": "\u518d",
        "\ue7f3": "\u513f",
        "\ueeed": "\u6b7b",
        "\ue3fd": "\u5230",
        "\ue625": "\u7f8e",
        "\ue48b": "\u5c31",
        "\ue585": "\u5411",
        "\ue0ac": "\u5374",
        "\ue1c7": "\u5b9e",
        "\ue09b": "\u672c",
        "\ue5d1": "\u800c",
        "\ue4bb": "\u897f",
        "\ue3f9": "\u5168",
        "\uee5b": "\u6700",
        "\uede2": "\u65e0",
        "\ue1ab": "\u611f",
        "\ueb54": "\u4e8e",
        "\ue0c9": "\u81ea",
        "\ued2a": "\u4ee5",
        "\ue82f": "\u529b",
        "\ue298": "\u7ecf",
        "\ue37a": "\u77e5",
        "\uee1e": "\u5199",
        "\ueadd": "\u5c0f",
        "\ue0c8": "\u957f",
        "\ueaf0": "\u540e",
        "\ue49d": "\u5b83",
        "\uef9d": "\u6587",
        "\ueb11": "\u6027",
        "\uef1c": "\u70b9",
        "\ue2cc": "\u5730",
        "\ue4c2": "\u4e0d",
        "\ued8e": "\u4e24",
        "\ueeb2": "\u601d",
        "\ue1b2": "\u4e09",
        "\ue8cc": "\u5c06",
        "\ue62f": "\u7b2c",
        "\ue3ef": "\u771f",
        "\ueae1": "\u9ad8",
        "\ued09": "\u60f3",
        "\uee10": "\u770b",
        "\uefb1": "\u4e00",
        "\uec91": "\u4ee3",
        "\ue85c": "\u8981",
        "\ue401": "\u5bf9",
        "\uefcf": "\u5206",
        "\ue03e": "\u6211",
        "\ue8d1": "\u76f8",
        "\uede1": "\u65b9",
        "\ued03": "\u542c",
        "\ue7ad": "\u4ed6",
        "\uefcd": "\u90fd",
        "\ue002": "\u5f97",
        "\uee86": "\u7279",
        "\uef48": "\u6b63",
        "\ue393": "\u58f0",
        "\uea7c": "\u4e16",
        "\ue8e1": "\u4e3b",
        "\ue3cb": "\u4e2a",
        "\ue1c0": "\u5b66",
        "\ueefd": "\u4f55",
        "\uecd7": "\u6b64",
        "\ueeec": "\u5341",
        "\uead1": "\u95ee",
        "\ue285": "\u7531",
        "\uee09": "\u6559",
        "\ue21b": "\u6765",
        "\ueb1d": "\u628a",
        "\ue6cd": "\u8fd8",
        "\ue3a0": "\u91cc",
        "\ue75d": "\u65e5",
        "\uef2c": "\u4f46",
        "\ue6f2": "\u4e48",
        "\ued44": "\u548c",
        "\ue6e8": "\u56fd",
        "\ue662": "\u767d",
        "\ue274": "\u53e3",
        "\uec0d": "\u4e66",
        "\ueae2": "\u53bb",
        "\ue860": "\u4e3a",
        "\uedec": "\u5316",
        "\ue76e": "\u795e",
        "\ueffa": "\u4eec",
        "\ue0aa": "\u793e",
        "\ueb88": "\u7136",
        "\ue72e": "\u6709",
        "\ue437": "\u4ec0",
        "\ue07f": "\u540d",
        "\uef43": "\u90a3",
        "\ue220": "\u8fc7",
        "\uea0b": "\u7528",
        "\uea89": "\u4e86",
        "\ue9f4": "\u524d",
        "\ue946": "\u5173",
        x: "x",
        "\ue17c": "\u91cd",
        "\uec2f": "\u679c",
        "\ueb70": "\u751f",
        "\uef68": "\u56e0",
        "\uef15": "\u6c14",
        "\ue36f": "\u79cd",
        "\ue960": "\u5929",
        "\ue02c": "\u5979",
        "\ue138": "\u5148",
        "\ue643": "\u8001",
        "\ued14": "\u4e0e",
        "\ue1a0": "\u53d1",
        "\ue79f": "\u60c5",
        "\ue1f9": "\u662f",
        "\ue5c6": "\u6240",
        "\uef9b": "\u5982",
        "\uecad": "\u6ca1",
        "\ue8e6": "\u4e8c",
        "\uee8f": "\u9762",
        "\ue047": "\u5e74",
        "\uece3": "\u5f53",
        "\uef04": "\u6253",
        "\uea3a": "\u4fbf",
        "\ueef3": "\u4e0b",
        "\ue0ce": "\u53ea",
        "\ue58a": "\u5fc3",
        "\ue2f4": "\u90e8",
        "\ued05": "\u4ece",
        "\ue3bf": "\u52a8",
        "\ue0b5": "\u7684",
        "\ue027": "\u95e8",
        "\ue1ae": "\u6210",
        "\ue4e3": "\u4f53",
        "\ue6dc": "\u884c",
        "\ue603": "\u4e8b",
        "\uee60": "\u8bdd",
        "\uee21": "\u65b0",
        "\ue620": "\u610f",
        "\ue7c1": "\u5df2",
        "\uedc9": "\u8005",
        "\ue146": "\u4e0a",
        "\ue7b6": "\u53f2",
        "\uee2f": "\u4eba",
        "\ue126": "\u7740",
        "\ue9fe": "\u4e4b",
        "\uee85": "\u5b9a",
        "\ue956": "\u6cd5",
        "\ue088": "\u9053",
        "\ueca6": "\u8fd9",
        "\ue113": "\u80fd",
        "\uefce": "\u773c",
        "\ue145": "\u5e76",
        "\ue6e9": "\u516c",
        "\ue3b6": "\u95f4",
        "\ue4f2": "\u5b50",
        "\uef08": "\u5934",
        "\ue661": "\u51e0",
        "\ue8a6": "\u73b0",
        "\ueb93": "\u5bb6",
        "\ue1f5": "\u7b49",
        "\uefe5": "\u4e9b",
        "\uede7": "\u6c11",
        "\ue81b": "\u591a",
        "\ue45f": "\u8d70",
        "\uea34": "\u53ef",
        "\ue8b4": "\u7406",
        "\ue547": "\u56db",
        "\ue707": "\u8bba",
        "\ue509": "\u7269",
        "\uec24": "\u4f1a",
        "\ueee9": "\u8fdb",
        "\ued72": "\u5c11",
        "\uee97": "\u5f88",
        "\ue27e": "\u4e2d",
        "\ueb9a": "\u8eab",
        "\ue5ce": "\u5927",
        "\ueac9": "\u624d",
        "\ue89e": "\u4f5c",
        "\ue640": "\u4f7f",
        "\ueea9": "\u7ed9",
        "\uecd1": "\u4e49",
        "\ue0e5": "\u660e",
        "\ueabb": "\u5916",
        "\ue54b": "\u592a",
        "\ue8bb": "\u540c",
        "\ueb33": "\u65f6",
        "\uec62": "\u88ab",
        "\ue6ff": "\u522b",
        "\ue5af": "\u5973",
        "\ue7db": "\u53c8",
        "\uee4d": "\u8bf4",
        "\uee8d": "\u66f4",
        "\ue348": "\u4e5f",
        "\ue542": "\u624b",
        "\ue304": "\u4f60",
        "\ue8b8": "\u5f00",
        "\ue389": "\u6837",
    },
    jjwxcfont_004di: {
        "\ue03f": "\u8eab",
        "\ue696": "\u4e16",
        "\ued8f": "\u4ed6",
        "\uee52": "\u81ea",
        "\ue91f": "\u4e8b",
        "\uef80": "\u73b0",
        "\ue514": "\u4e0b",
        "\ue4d8": "\u7279",
        "\ue9dc": "\u800c",
        "\ue3ef": "\u5979",
        "\ueeea": "\u4e49",
        "\ue544": "\u4e4b",
        "\ue4d3": "\u5f00",
        "\ue17e": "\u522b",
        "\uea28": "\u4eec",
        "\ue8da": "\u5df1",
        "\uecc1": "\u4e8c",
        "\uea3b": "\u611f",
        "\ue54e": "\u95f4",
        "\ue206": "\u6587",
        "\ue86b": "\u513f",
        "\ued16": "\u7528",
        "\ue429": "\u542c",
        "\ue478": "\u4e3a",
        "\ue29b": "\u4e0e",
        "\ue4f0": "\u4e86",
        "\uea50": "\u6cd5",
        "\ue07a": "\u679c",
        "\uec35": "\u5b66",
        "\ue424": "\u65f6",
        "\ue4b9": "\u9053",
        "\ue5ca": "\u5973",
        "\ue542": "\u4e66",
        "\ue606": "\u4fbf",
        "\ueb8c": "\u5f53",
        "\ueeed": "\u5f88",
        "\ue99f": "\u6210",
        "\ue216": "\u4e0d",
        "\ue0d3": "\u7b49",
        "\ue9fb": "\u7684",
        "\ue166": "\u7f8e",
        "\ue927": "\u770b",
        "\ue24e": "\u767d",
        "\ue816": "\u4e9b",
        "\uee47": "\u4f5c",
        "\ue3ba": "\u5e74",
        "\ue3a1": "\u65b9",
        "\ue907": "\u7ed9",
        "\uedca": "\u56de",
        "\ue8f7": "\u95e8",
        "\uebaa": "\u7136",
        "\ue46b": "\u6240",
        "\uea9b": "\u7531",
        "\ue28c": "\u795e",
        "\uedb5": "\u7269",
        "\ue693": "\u7406",
        "\ue2c6": "\u624b",
        "\ue98f": "\u8bf4",
        "\ue526": "\u4f53",
        "\ue8e4": "\u540e",
        "\uec41": "\u4e3b",
        "\ueae4": "\u770b",
        "\ue3a8": "\u95ee",
        x: "x",
        "\uebbb": "\u9762",
        "\ueebd": "\u53d1",
        "\ueda2": "\u88ab",
        "\ueb98": "\u592a",
        "\uefc5": "\u660e",
        "\uec5f": "\u5934",
        "\ueacb": "\u56fd",
        "\ue7ea": "\u53f2",
        "\ueb84": "\u53ea",
        "\ueae9": "\u4e8e",
        "\ue37c": "\u4ec0",
        "\ue2c4": "\u90a3",
        "\ue893": "\u56d7",
        "\ue3fb": "\u7ecf",
        "\uee13": "\u56db",
        "\uea91": "\u6700",
        "\ue7de": "\u6709",
        "\uec1a": "\u4e48",
        "\ue2d1": "\u4f60",
        "\ue768": "\u6559",
        "\ue19c": "\u52a8",
        "\ueabe": "\u5e76",
        "\uecf5": "\u8fd9",
        "\ue561": "\u591a",
        "\uecf6": "\u4f55",
        "\ue632": "\u4f46",
        "\ue6a2": "\u89c1",
        "\ue212": "\u4ee5",
        "\ue325": "\u6b64",
        "\uec86": "\u4e24",
        "\ue3c9": "\u5173",
        "\ue0eb": "\u91cc",
        "\ueadc": "\u4e5f",
        "\ueace": "\u6211",
        "\ue1c0": "\u8001",
        "\ue170": "\u5199",
        "\ueac7": "\u8d70",
        "\ue304": "\u8d77",
        "\uecef": "\u518d",
        "\ue99e": "\u8fd8",
        "\uedc6": "\u4ece",
        "\ue18c": "\u601d",
        "\ue799": "\u5b9e",
        "\ueb62": "\u7b11",
        "\ue7f0": "\u5c0f",
        "\ue1cf": "\u5df2",
        "\ued07": "\u6253",
        "\uead0": "\u5c06",
        "\uea30": "\u5374",
        "\ue09b": "\u5316",
        "\ueff2": "\u5bb6",
        "\ue49d": "\u4eba",
        "\ue5fe": "\u53bb",
        "\uef3f": "\u672c",
        "\ue134": "\u90fd",
        "\uef51": "\u6b63",
        "\ue819": "\u5148",
        "\uee28": "\u51e0",
        "\uea77": "\u548c",
        "\uef34": "\u58f0",
        "\ue41d": "\u90e8",
        "\uebd6": "\u5341",
        "\ue54a": "\u9ad8",
        "\ueccc": "\u4e09",
        "\ue415": "\u516c",
        "\ue47c": "\u529b",
        "\ue2d2": "\u751f",
        "\ue042": "\u65e5",
        "\uee6d": "\u53c8",
        "\ued1f": "\u7b2c",
        "\uefc9": "\u5176",
        "\ueddf": "\u5230",
        "\ueacd": "\u4ee3",
        "\ue7ad": "\u5982",
        "\uedb0": "\u4e2d",
        "\ue0d0": "\u5b50",
        "\uedbe": "\u77e5",
        "\ue838": "\u65b0",
        "\ue452": "\u540c",
        "\ue41c": "\u5206",
        "\ue295": "\u8bba",
        "\ue12e": "\u4f1a",
        "\uefa3": "\u66f4",
        "\uef9b": "\u624d",
        "\uefc2": "\u79cd",
        "\ue854": "\u60c5",
        "\ued55": "\u6027",
        "\uef8d": "\u5f97",
        "\ue859": "\u4e0a",
        "\uea0a": "\u8fdb",
        "\uedb2": "\u5929",
        "\uea73": "\u771f",
        "\ue300": "\u56e0",
        "\ue70b": "\u5916",
        "\uec5d": "\u5411",
        "\uebe4": "\u60f3",
        "\ue9b8": "\u6ca1",
        "\ue817": "\u91cd",
        "\ue556": "\u6765",
        "\uea5a": "\u628a",
        "\uee49": "\u80fd",
        "\ueaf4": "\u6c14",
        "\uecee": "\u957f",
        "\ue0f1": "\u65e0",
        "\ue52d": "\u5728",
        "\uee99": "\u5fc3",
        "\ue633": "\u793e",
        "\ue2d0": "\u5c31",
        "\ue74d": "\u76f8",
        "\ue439": "\u53ef",
        "\uea4a": "\u6c11",
        "\ue193": "\u5c11",
        "\ue4a5": "\u5168",
        "\ue6d1": "\u5927",
        "\ue3fc": "\u5bf9",
        "\ue886": "\u8981",
        "\ue443": "\u4e2a",
        "\uec9a": "\u70b9",
        "\ue999": "\u8bdd",
        "\ue4f5": "\u4f7f",
        "\ue8a0": "\u8fc7",
        "\ue5b3": "\u662f",
        "\ue272": "\u4e00",
        "\uec93": "\u597d",
        "\ue42d": "\u524d",
        "\ue459": "\u6837",
        "\ued1d": "\u5b83",
        "\ue497": "\u773c",
        "\ue256": "\u610f",
        "\ue264": "\u5730",
        "\ue238": "\u51fa",
        "\ue5eb": "\u540d",
        "\ue35a": "\u8005",
        "\ue818": "\u5b9a",
        "\uea00": "\u884c",
        "\ue4a8": "\u6b7b",
        "\ueca9": "\u897f",
    },
    jjwxcfont_004gl: {
        "\ueeba": "\u5148",
        "\ue6cf": "\u662f",
        "\uee6d": "\u90a3",
        "\ue242": "\u6559",
        "\uedae": "\u56d7",
        "\ueddc": "\u65f6",
        "\ue34c": "\u4e0b",
        "\ue684": "\u90e8",
        "\uec4e": "\u5b9e",
        "\ue345": "\u5916",
        "\ue773": "\u513f",
        "\ue531": "\u89c1",
        "\ued03": "\u4e09",
        "\ue77a": "\u518d",
        "\uec6a": "\u7684",
        "\ue19b": "\u53f2",
        "\ue9e3": "\u4e49",
        "\ue157": "\u4ee3",
        "\uecca": "\u540e",
        "\ue86f": "\u80fd",
        "\ue6f9": "\u4ece",
        "\ue218": "\u522b",
        "\ued6d": "\u7269",
        "\ue7a6": "\u4e4b",
        "\ue697": "\u6210",
        "\uebc0": "\u7f8e",
        "\ue07a": "\u77e5",
        "\ueedd": "\u624b",
        "\ueb4b": "\u5c31",
        "\ue8e6": "\u8fd8",
        "\ue3a8": "\u5f97",
        "\ue75b": "\u5f88",
        "\uea54": "\u5982",
        "\ue703": "\u540c",
        "\ue940": "\u679c",
        "\uee98": "\u800c",
        "\ue154": "\u65b0",
        "\uedca": "\u5176",
        "\ue61e": "\u4f55",
        "\ue070": "\u5168",
        "\ue61a": "\u5df1",
        "\ue16b": "\u53c8",
        "\ue829": "\u70b9",
        "\ue396": "\u6240",
        "\ue324": "\u4f1a",
        "\ue945": "\u4e66",
        "\ue863": "\u7b11",
        "\ue2f6": "\u6253",
        "\ue879": "\u529b",
        "\ueaf0": "\u5bf9",
        "\ued68": "\u5934",
        "\uec22": "\u4fbf",
        "\ue738": "\u4e5f",
        "\ue428": "\u5c0f",
        "\ue67e": "\u660e",
        "\ue234": "\u5199",
        "\uee78": "\u610f",
        "\ued11": "\u8bf4",
        "\ued76": "\u56de",
        "\ue364": "\u4ec0",
        "\uec6d": "\u8bdd",
        "\ue2b0": "\u4e48",
        "\ue2b3": "\u5fc3",
        "\ue910": "\u6b64",
        "\ue895": "\u73b0",
        "\ue75f": "\u5c11",
        "\ue27c": "\u5c06",
        "\ue5b8": "\u6211",
        "\ue484": "\u4e2a",
        "\ue530": "\u597d",
        "\uebca": "\u5973",
        "\uec91": "\u5316",
        "\uec14": "\u7ecf",
        "\uece3": "\u95ee",
        "\ue0d2": "\u7ed9",
        "\ueda8": "\u6587",
        "\uebe2": "\u5f53",
        "\uedb5": "\u773c",
        "\ue042": "\u795e",
        "\ue3d5": "\u4eba",
        "\ue771": "\u5927",
        "\ue4c3": "\u58f0",
        "\ue649": "\u5f00",
        "\uee65": "\u53d1",
        "\uefe8": "\u5173",
        "\ueec4": "\u4e00",
        "\ue4d4": "\u592a",
        "\ue2a4": "\u4e24",
        "\ueaf3": "\u957f",
        "\uef95": "\u5b66",
        "\uef9c": "\u672c",
        "\ue825": "\u591a",
        "\ueae1": "\u52a8",
        "\uefd1": "\u516c",
        "\ue38f": "\u4e0d",
        "\ue515": "\u6709",
        "\ue082": "\u9053",
        "\uefd2": "\u8fd9",
        "\ueafd": "\u4f53",
        "\ue9e7": "\u4ed6",
        "\ue7f2": "\u5341",
        "\ue55c": "\u5b9a",
        "\uefd7": "\u4f46",
        "\ue93d": "\u548c",
        "\ue0cc": "\u8005",
        "\uee5a": "\u95e8",
        "\uea4d": "\u8fc7",
        "\ue991": "\u4e0e",
        "\ue597": "\u6b63",
        x: "x",
        "\uebae": "\u6ca1",
        "\ued77": "\u90fd",
        "\ue4da": "\u56e0",
        "\ue847": "\u793e",
        "\ue539": "\u56db",
        "\ue8c0": "\u4f60",
        "\ueb5f": "\u897f",
        "\ue7ef": "\u6b7b",
        "\ue8ae": "\u5b50",
        "\ue57f": "\u5728",
        "\ue339": "\u65e5",
        "\ue7f5": "\u4e9b",
        "\ue501": "\u6765",
        "\ue553": "\u524d",
        "\ueead": "\u5bb6",
        "\ueb4c": "\u5411",
        "\ue10f": "\u767d",
        "\ue7cf": "\u6700",
        "\uecaf": "\u4e8b",
        "\ueb95": "\u540d",
        "\uee79": "\u8eab",
        "\ue793": "\u5e74",
        "\ue5f1": "\u4e8e",
        "\ue374": "\u8fdb",
        "\uec15": "\u53bb",
        "\ue0f9": "\u7136",
        "\ue8dc": "\u5b83",
        "\ue5b9": "\u6cd5",
        "\ue52b": "\u7b2c",
        "\ueac2": "\u771f",
        "\uee82": "\u5df2",
        "\ue15f": "\u79cd",
        "\ue0ac": "\u611f",
        "\ue7a1": "\u7b49",
        "\ue679": "\u60c5",
        "\uee22": "\u65e0",
        "\uedaf": "\u8981",
        "\uee90": "\u51e0",
        "\uec2f": "\u6027",
        "\ueed3": "\u542c",
        "\ued8e": "\u53ea",
        "\ue759": "\u4e3a",
        "\uec2a": "\u5206",
        "\ueb5e": "\u5e76",
        "\ue0e1": "\u628a",
        "\ue019": "\u53ef",
        "\ue59c": "\u5374",
        "\ueb7a": "\u6c11",
        "\ue6ee": "\u6c14",
        "\ue6f4": "\u6837",
        "\uedc1": "\u66f4",
        "\ued4f": "\u7406",
        "\ue0e8": "\u7531",
        "\ue17a": "\u4e16",
        "\uee80": "\u60f3",
        "\ue440": "\u76f8",
        "\ue2e5": "\u601d",
        "\ue5cf": "\u56fd",
        "\ue36f": "\u751f",
        "\ue2f2": "\u9762",
        "\ue59f": "\u5230",
        "\ue41e": "\u4f5c",
        "\ue612": "\u88ab",
        "\uee54": "\u4ee5",
        "\uec78": "\u9ad8",
        "\ue3d7": "\u81ea",
        "\ue1ca": "\u624d",
        "\ue31d": "\u4e2d",
        "\uebd7": "\u5979",
        "\ueca2": "\u770b",
        "\ue8a6": "\u7528",
        "\uecad": "\u7740",
        "\uecfe": "\u4e3b",
        "\ue23a": "\u884c",
        "\ue319": "\u95f4",
        "\ue707": "\u65b9",
        "\ue6ea": "\u8001",
        "\ue8e5": "\u4e86",
        "\ue6a8": "\u7279",
        "\ue28b": "\u91cd",
        "\ue540": "\u4f7f",
        "\ue471": "\u8d77",
        "\ueefe": "\u5730",
        "\uec7f": "\u51fa",
        "\uea9f": "\u4e0a",
        "\uefdc": "\u91cc",
        "\ue49b": "\u8d70",
        "\ue9ea": "\u8bba",
        "\ue4a8": "\u4e8c",
        "\ueb26": "\u5929",
        "\ue935": "\u4eec",
    },
    jjwxcfont_004hu: {
        "\ue4e8": "\u5374",
        "\ue569": "\u884c",
        "\uef5f": "\u4e0e",
        "\ue02d": "\u6b63",
        "\ue9e3": "\u5341",
        "\ue02e": "\u597d",
        "\ue8d9": "\u66f4",
        "\ue6e9": "\u65b0",
        "\ue101": "\u7ed9",
        "\ue61a": "\u4e0b",
        "\ued74": "\u53e3",
        "\ue505": "\u9ad8",
        "\ue255": "\u5979",
        "\uee4a": "\u7269",
        "\ue3fd": "\u5df2",
        "\uea84": "\u6253",
        "\ueb1a": "\u4fbf",
        "\ue1a5": "\u800c",
        "\ue9e9": "\u65b9",
        "\ue012": "\u5148",
        "\ue85f": "\u6b7b",
        "\ue636": "\u90fd",
        "\ue24b": "\u9762",
        "\ue888": "\u5e74",
        "\ue7e3": "\u52a8",
        "\uece0": "\u60c5",
        "\ueed9": "\u5b9a",
        "\uee9e": "\u8bf4",
        "\uee20": "\u4f53",
        "\uebee": "\u957f",
        "\uefe4": "\u5c06",
        "\ue470": "\u70b9",
        "\ueda8": "\u4f7f",
        "\ue624": "\u4f55",
        "\ue6f6": "\u540c",
        "\uecb7": "\u7f8e",
        "\ue34a": "\u56db",
        "\uedf3": "\u6027",
        "\ue9e8": "\u60f3",
        "\ue198": "\u5206",
        "\ue73d": "\u7406",
        "\uefc0": "\u5f53",
        "\uea09": "\u6765",
        "\ued27": "\u7740",
        "\ueb4e": "\u4f5c",
        "\ue5c3": "\u5927",
        "\ueec4": "\u522b",
        "\uedf5": "\u624b",
        "\ue8fd": "\u5e76",
        "\uea24": "\u5929",
        "\ue97b": "\u4e4b",
        "\ue28a": "\u5f00",
        "\ueec6": "\u592a",
        "\ue4ab": "\u5176",
        "\ue6be": "\u4ec0",
        "\ue52a": "\u5f97",
        "\uefc9": "\u8fdb",
        "\ue2c6": "\u6559",
        "\uebc8": "\u8d70",
        "\ue536": "\u51fa",
        "\uea17": "\u7ecf",
        "\ue918": "\u6211",
        "\ueaec": "\u610f",
        "\uee1b": "\u5c11",
        "\uea53": "\u51e0",
        "\uea42": "\u5411",
        "\uee41": "\u5b9e",
        "\ue983": "\u53d1",
        "\uee05": "\u8fd8",
        "\ue8c3": "\u4e3b",
        "\ue970": "\u4e9b",
        "\uea28": "\u91cc",
        "\ue3fa": "\u548c",
        "\uee3f": "\u4eec",
        "\ue31c": "\u524d",
        "\uef08": "\u91cd",
        "\ued89": "\u516c",
        "\ue552": "\u6837",
        "\ue962": "\u542c",
        "\uecfb": "\u4e8b",
        "\ue65a": "\u8eab",
        "\ueee0": "\u53f2",
        "\uea91": "\u7528",
        "\ue1d4": "\u5982",
        "\ueb7e": "\u767d",
        "\uecf4": "\u5b83",
        "\ue078": "\u5230",
        "\ue19a": "\u53bb",
        "\ue7bf": "\u6240",
        "\ue66d": "\u4f46",
        "\uec16": "\u540e",
        "\ue145": "\u4eba",
        "\uecfc": "\u601d",
        "\uec54": "\u5973",
        "\ue0ba": "\u5730",
        "\ue794": "\u53c8",
        "\ue03b": "\u5168",
        "\ue647": "\u628a",
        "\ue767": "\u89c1",
        x: "x",
        "\ue025": "\u7b49",
        "\uea1f": "\u77e5",
        "\ue143": "\u90a3",
        "\ue0d4": "\u8001",
        "\ue35d": "\u8005",
        "\ue559": "\u529b",
        "\ue8ce": "\u6cd5",
        "\ue053": "\u5f88",
        "\uec56": "\u5bf9",
        "\uedd4": "\u6c14",
        "\ue6fa": "\u4ed6",
        "\ue461": "\u4f60",
        "\ue944": "\u795e",
        "\uea5a": "\u4e66",
        "\ue2dc": "\u7136",
        "\ue0d2": "\u6700",
        "\uea98": "\u4ee5",
        "\ue0d9": "\u660e",
        "\ue401": "\u65e5",
        "\ue233": "\u8fd9",
        "\uef0a": "\u8d77",
        "\uefb8": "\u65f6",
        "\uec4f": "\u5173",
        "\uefb4": "\u624d",
        "\ue7ce": "\u9053",
        "\ue7f9": "\u4e16",
        "\uee8c": "\u95f4",
        "\ueb02": "\u591a",
        "\ue8f7": "\u6b64",
        "\ue4d7": "\u81ea",
        "\ued3f": "\u56e0",
        "\ue5a3": "\u4e0d",
        "\uec3a": "\u5c31",
        "\uec42": "\u4e3a",
        "\ue021": "\u4e8e",
        "\uefb9": "\u8fc7",
        "\ue00f": "\u4e0a",
        "\ue11c": "\u513f",
        "\uec85": "\u7531",
        "\ue91a": "\u56de",
        "\ue43d": "\u5b50",
        "\ue2a3": "\u5bb6",
        "\uedc6": "\u6709",
        "\ue67c": "\u6210",
        "\ueb28": "\u56fd",
        "\uebef": "\u5fc3",
        "\ue457": "\u8981",
        "\uede8": "\u58f0",
        "\uedae": "\u95ee",
        "\ueb3b": "\u4e09",
        "\uedcc": "\u7684",
        "\uecc4": "\u88ab",
        "\ue6c3": "\u4ee3",
        "\ueb14": "\u65e0",
        "\ue3c1": "\u79cd",
        "\ue35a": "\u76f8",
        "\ue4fd": "\u4ece",
        "\uef5c": "\u518d",
        "\ue6f3": "\u793e",
        "\ueb7b": "\u679c",
        "\ue6e0": "\u4e86",
        "\ue497": "\u5b66",
        "\ue449": "\u53ef",
        "\ue55c": "\u897f",
        "\ue427": "\u5c0f",
        "\ue1be": "\u5934",
        "\ue6d2": "\u672c",
        "\ue53c": "\u6c11",
        "\ue6c1": "\u80fd",
        "\ued39": "\u6ca1",
        "\uec3f": "\u751f",
        "\ue9ed": "\u6587",
        "\ueb9a": "\u53ea",
        "\ue6e5": "\u5916",
        "\uefca": "\u773c",
        "\ue45b": "\u4e00",
        "\uea3d": "\u95e8",
        "\ue9a7": "\u7279",
        "\ue72d": "\u7b11",
        "\uef4f": "\u8bdd",
        "\uef4d": "\u5199",
        "\ue58e": "\u8bba",
        "\ue4cc": "\u4e24",
        "\ue7ea": "\u662f",
        "\ue205": "\u4e48",
        "\ue537": "\u7b2c",
        "\ue3af": "\u4e8c",
        "\ue819": "\u4e49",
        "\ued3b": "\u4f1a",
        "\ueded": "\u540d",
        "\ue946": "\u5316",
        "\ue3eb": "\u4e2d",
        "\ueb39": "\u770b",
        "\ue149": "\u90e8",
        "\ue750": "\u5728",
        "\uec1a": "\u4e5f",
        "\ue954": "\u73b0",
        "\uee4e": "\u611f",
        "\uefc6": "\u771f",
        "\ue080": "\u5df1",
        "\ue715": "\u4e2a",
    },
    jjwxcfont_004kc: {
        "\uee6b": "\u4e9b",
        "\ue7df": "\u70b9",
        "\ue3c3": "\u5374",
        "\ue1e6": "\u4f7f",
        "\ue774": "\u5c31",
        "\ue32b": "\u79cd",
        "\uec11": "\u5df2",
        "\ue483": "\u518d",
        "\ue821": "\u610f",
        "\uefde": "\u5316",
        "\ue902": "\u4e09",
        "\ue579": "\u601d",
        "\ue1f8": "\u5b9a",
        "\ue200": "\u7b2c",
        "\ue095": "\u4e0d",
        "\ue6fd": "\u51e0",
        "\ue8d2": "\u4e5f",
        "\ue3d8": "\u4e8b",
        "\ueafd": "\u8d70",
        "\ue5b1": "\u6027",
        "\ued77": "\u65e5",
        "\ue727": "\u56e0",
        "\uef4c": "\u51fa",
        "\ue2fb": "\u7406",
        "\ue2c9": "\u81ea",
        "\ueab9": "\u5199",
        "\ue2ad": "\u7136",
        "\uea4d": "\u9762",
        "\ue740": "\u5e76",
        "\ue174": "\u770b",
        "\ue2f8": "\u592a",
        "\uef40": "\u5e74",
        "\uee3b": "\u8eab",
        "\ue63e": "\u5934",
        "\uefe5": "\u5c11",
        "\uec6b": "\u53ea",
        "\ue807": "\u5927",
        "\uee59": "\u4f60",
        "\ueae4": "\u767d",
        "\uecce": "\u4e3b",
        "\ue198": "\u65f6",
        "\ue399": "\u5bb6",
        "\ue481": "\u6240",
        "\ue5bf": "\u5973",
        "\ue6ad": "\u65b0",
        "\uef67": "\u7b49",
        "\ue898": "\u73b0",
        "\ue893": "\u52a8",
        "\ue06f": "\u5b9e",
        "\uec59": "\u88ab",
        "\ue81b": "\u4eba",
        "\ue6ef": "\u548c",
        "\ue3e9": "\u611f",
        "\ue08b": "\u751f",
        "\ueaa2": "\u897f",
        "\ue750": "\u6211",
        "\uec8c": "\u513f",
        "\ue745": "\u8001",
        "\ue815": "\u5979",
        "\ue42d": "\u529b",
        "\uedaf": "\u4e4b",
        "\ue407": "\u624d",
        "\ue01e": "\u516c",
        "\uea2f": "\u4e2d",
        "\ue48e": "\u5c0f",
        "\uefdc": "\u53bb",
        "\ue21d": "\u6587",
        "\uef37": "\u4e66",
        "\ue77c": "\u6210",
        "\ue640": "\u7528",
        "\uedd4": "\u66f4",
        "\ue7a8": "\u5341",
        "\ue0f5": "\u5206",
        "\uec09": "\u4f5c",
        "\ueba8": "\u679c",
        "\ue494": "\u4e0a",
        "\ueeec": "\u53c8",
        "\ue36a": "\u8fdb",
        "\ue6b0": "\u91cc",
        "\ue930": "\u5982",
        "\ue65f": "\u6b63",
        "\ue8e7": "\u58f0",
        "\uecd0": "\u4e3a",
        "\ue087": "\u53ef",
        "\ue0a6": "\u6559",
        "\uec40": "\u7279",
        "\ueb72": "\u4f1a",
        "\ued19": "\u6b64",
        "\uee69": "\u624b",
        "\ue22d": "\u6765",
        "\uebd4": "\u5f53",
        "\ue02b": "\u8fd9",
        "\ue598": "\u9ad8",
        "\ue80a": "\u56fd",
        "\ue09e": "\u6c14",
        "\ue92f": "\u5fc3",
        "\ue07e": "\u9053",
        "\ue68f": "\u793e",
        "\uec15": "\u4fbf",
        "\uea0a": "\u95f4",
        "\ue57d": "\u5176",
        "\ue6b4": "\u4ece",
        "\uea29": "\u6700",
        x: "x",
        "\ue4fe": "\u5bf9",
        "\ue6de": "\u7f8e",
        "\uecbd": "\u4ed6",
        "\ue639": "\u4e86",
        "\ue91e": "\u7b11",
        "\ueb02": "\u542c",
        "\ue619": "\u5c06",
        "\ue23f": "\u4e16",
        "\ue5f3": "\u5df1",
        "\uece8": "\u65e0",
        "\ue24c": "\u6253",
        "\uee48": "\u4e24",
        "\ueec5": "\u4ee5",
        "\ue8fc": "\u90a3",
        "\ue1ef": "\u6cd5",
        "\ue588": "\u7ed9",
        "\ue940": "\u8fd8",
        "\uebbb": "\u65b9",
        "\ue811": "\u884c",
        "\ueba3": "\u5b83",
        "\ue4a3": "\u4ec0",
        "\ue1be": "\u5b66",
        "\ue37e": "\u5173",
        "\uedf0": "\u8981",
        "\uea4e": "\u7531",
        "\ue33a": "\u7740",
        "\ue91b": "\u6837",
        "\uefea": "\u773c",
        "\uecfa": "\u4e48",
        "\uece6": "\u5730",
        "\uebc4": "\u6ca1",
        "\uee0f": "\u628a",
        "\ue926": "\u8bdd",
        "\ue7b0": "\u5168",
        "\ue4e9": "\u89c1",
        "\ue918": "\u591a",
        "\ue2b6": "\u5f88",
        "\ueec1": "\u4e2a",
        "\ue1c8": "\u540e",
        "\ue39b": "\u7ecf",
        "\ue365": "\u662f",
        "\ue0d6": "\u4ee3",
        "\uea1e": "\u60f3",
        "\ue5a6": "\u4f55",
        "\ue975": "\u7269",
        "\uef70": "\u4e00",
        "\ue605": "\u5f97",
        "\uedd1": "\u56db",
        "\ue920": "\u90e8",
        "\uea33": "\u60c5",
        "\ue370": "\u672c",
        "\ue658": "\u4eec",
        "\ue0a3": "\u8fc7",
        "\uee0d": "\u4e0b",
        "\ue120": "\u4e8e",
        "\ue515": "\u8d77",
        "\ue574": "\u5728",
        "\ue6ce": "\u76f8",
        "\uece7": "\u6c11",
        "\uee8c": "\u6b7b",
        "\ue7ad": "\u5929",
        "\ue2bd": "\u4f46",
        "\ueb8b": "\u80fd",
        "\ue786": "\u7684",
        "\ueaa7": "\u8bba",
        "\uef2f": "\u771f",
        "\ue33b": "\u4f53",
        "\uea92": "\u5230",
        "\uea2c": "\u77e5",
        "\uedd7": "\u5b50",
        "\ueda1": "\u957f",
        "\ue90e": "\u90fd",
        "\uec9b": "\u53d1",
        "\uef21": "\u5f00",
        "\uebba": "\u660e",
        "\ue6e0": "\u795e",
        "\ueabe": "\u540d",
        "\ued8d": "\u4e8c",
        "\ue7cb": "\u56de",
        "\ue160": "\u95ee",
        "\uef8d": "\u4e49",
        "\ue4fd": "\u53f2",
        "\ue4b1": "\u522b",
        "\ue97d": "\u5148",
        "\ue71e": "\u597d",
        "\ue40c": "\u8bf4",
        "\ue303": "\u524d",
        "\ue680": "\u56d7",
        "\ue855": "\u8005",
        "\ue448": "\u540c",
        "\uedae": "\u91cd",
        "\ue735": "\u6709",
        "\ue53d": "\u95e8",
        "\ue1c9": "\u5916",
        "\ue8eb": "\u800c",
        "\ue133": "\u4e0e",
        "\ue895": "\u5411",
    },
    jjwxcfont_004np: {
        "\uef44": "\u8d70",
        "\ue6cb": "\u5fc3",
        "\ued72": "\u9ad8",
        "\ued0d": "\u90a3",
        "\ue1a6": "\u6211",
        "\ue045": "\u884c",
        "\ueee9": "\u5f97",
        "\ue826": "\u957f",
        "\ue07c": "\u679c",
        "\ue47e": "\u6cd5",
        "\ue5c2": "\u4e16",
        "\ue6c9": "\u89c1",
        "\ueb3d": "\u56d7",
        "\ue20c": "\u4e8c",
        "\ue880": "\u60c5",
        "\ue55c": "\u88ab",
        "\uea33": "\u95f4",
        "\ueb94": "\u4e48",
        "\ue148": "\u5206",
        "\ue590": "\u95e8",
        "\ue08a": "\u6c14",
        "\ue40f": "\u65e5",
        "\ue7e6": "\u4ec0",
        "\ue52a": "\u5728",
        "\ue36b": "\u4e86",
        "\ue3e5": "\u5168",
        "\ue7b5": "\u5e74",
        "\ue34d": "\u597d",
        "\ue41e": "\u5199",
        "\ue124": "\u7b2c",
        "\uedec": "\u5b83",
        "\ue8bc": "\u9762",
        "\uecd3": "\u6b63",
        "\ue65e": "\u4e2d",
        "\ue52c": "\u90e8",
        "\uef48": "\u58f0",
        "\ue2b6": "\u6765",
        "\ue629": "\u4e2a",
        "\uec1b": "\u8bdd",
        "\ue415": "\u540e",
        "\uebb5": "\u4e5f",
        "\ueb0c": "\u591a",
        "\uee5c": "\u65e0",
        "\ue3de": "\u7528",
        "\uec83": "\u5411",
        "\uea57": "\u5c11",
        "\uef9e": "\u5176",
        "\uee08": "\u5c0f",
        "\ue91c": "\u4eec",
        "\ue4db": "\u6837",
        "\ue1de": "\u5e76",
        "\ue304": "\u5730",
        "\ue381": "\u53ef",
        "\ue9ad": "\u800c",
        "\uefed": "\u518d",
        "\ue804": "\u767d",
        "\ue17c": "\u5c06",
        "\ue420": "\u4e0a",
        "\ue096": "\u4f1a",
        "\ue6e9": "\u76f8",
        "\ue03b": "\u6709",
        "\ue02e": "\u4f7f",
        "\ueaf4": "\u5927",
        "\ue16a": "\u5b9e",
        "\uecbc": "\u8eab",
        "\ue702": "\u65b0",
        "\uef37": "\u6559",
        "\ue355": "\u8d77",
        "\ueb1d": "\u4e49",
        "\uebec": "\u4e66",
        "\ue6ae": "\u70b9",
        "\ue3ad": "\u81ea",
        "\uee29": "\u897f",
        "\ue246": "\u53c8",
        "\ue93f": "\u5f88",
        "\ue484": "\u52a8",
        "\ue8e9": "\u6ca1",
        "\ue81b": "\u7406",
        "\ue86b": "\u8fd8",
        "\uef1c": "\u56e0",
        "\ue717": "\u4e0b",
        "\ue1b2": "\u795e",
        "\uef78": "\u624d",
        "\ue531": "\u5bf9",
        "\uec65": "\u5979",
        "\ue736": "\u53ea",
        "\uecd9": "\u4ee5",
        "\ue4dc": "\u8fc7",
        "\ueb85": "\u5934",
        "\ue808": "\u73b0",
        "\ue4dd": "\u5341",
        "\ue29f": "\u56fd",
        "\uee7d": "\u51fa",
        "\uec93": "\u672c",
        "\uedd3": "\u6210",
        "\ue057": "\u548c",
        "\ue0d7": "\u6b64",
        "\uef5d": "\u4e4b",
        "\ued2b": "\u5df1",
        "\ue59f": "\u6253",
        "\ueec6": "\u53f2",
        "\ue985": "\u793e",
        "\ueeb4": "\u611f",
        "\ue3c1": "\u7269",
        "\ue4f4": "\u91cc",
        "\uedf8": "\u5148",
        "\uef3b": "\u5973",
        "\ue34a": "\u4e00",
        "\uef8d": "\u5173",
        "\ue77c": "\u4e0d",
        "\uecab": "\u4e3b",
        "\ueb6d": "\u95ee",
        "\ued2d": "\u4e8e",
        "\ue48c": "\u4ee3",
        "\uebe1": "\u4f60",
        "\ue83d": "\u8bf4",
        "\ue4d8": "\u53bb",
        "\ue0bb": "\u8bba",
        "\uee97": "\u5230",
        "\ued25": "\u4ed6",
        "\ue2ab": "\u8fdb",
        "\ue7da": "\u751f",
        "\ue741": "\u5b9a",
        "\uef00": "\u4e0e",
        "\ue2b2": "\u5df2",
        "\ue0e5": "\u5c31",
        "\ue4e7": "\u91cd",
        "\uee22": "\u5916",
        "\ue618": "\u4f55",
        "\ue48e": "\u7f8e",
        "\uea38": "\u65f6",
        "\uef71": "\u5316",
        x: "x",
        "\ue221": "\u77e5",
        "\ue7a3": "\u662f",
        "\uef6b": "\u80fd",
        "\ue5dc": "\u56db",
        "\ueb15": "\u7ecf",
        "\uef16": "\u4fbf",
        "\ue410": "\u628a",
        "\ueba1": "\u5b66",
        "\uef79": "\u7136",
        "\ue1f3": "\u56de",
        "\uec32": "\u5929",
        "\ue8ff": "\u540d",
        "\ue12c": "\u773c",
        "\ue458": "\u5f53",
        "\ued6c": "\u529b",
        "\uea2c": "\u53d1",
        "\uec5d": "\u5f00",
        "\ue5e6": "\u4ece",
        "\ue694": "\u4f46",
        "\ueb11": "\u542c",
        "\ue2d7": "\u6240",
        "\ue360": "\u7ed9",
        "\ue457": "\u6027",
        "\uee85": "\u66f4",
        "\ue983": "\u8fd9",
        "\ue388": "\u771f",
        "\ue00c": "\u5982",
        "\uef0f": "\u4e24",
        "\ue507": "\u524d",
        "\ued09": "\u610f",
        "\ueca0": "\u4e9b",
        "\ueb71": "\u8005",
        "\ue6f6": "\u540c",
        "\ue022": "\u4f53",
        "\ue988": "\u51e0",
        "\ue4e5": "\u624b",
        "\uecef": "\u4e3a",
        "\ue401": "\u5bb6",
        "\uedd9": "\u4e09",
        "\ue023": "\u90fd",
        "\ueaa2": "\u516c",
        "\ue178": "\u522b",
        "\uebbf": "\u601d",
        "\ueb78": "\u7b11",
        "\ue191": "\u5374",
        "\uee5b": "\u770b",
        "\ue1a4": "\u6700",
        "\ueb57": "\u7531",
        "\ue53d": "\u8981",
        "\ue089": "\u6c11",
        "\ue819": "\u79cd",
        "\ue64d": "\u60f3",
        "\ue289": "\u4eba",
        "\uec72": "\u6b7b",
        "\ue818": "\u7b49",
        "\ue0f4": "\u7279",
        "\ue5a3": "\u9053",
        "\uea52": "\u4f5c",
        "\ue4e4": "\u592a",
        "\ue2a5": "\u4e8b",
        "\uedff": "\u7740",
        "\ue1d8": "\u8001",
        "\uedb5": "\u6587",
        "\uec29": "\u65b9",
        "\ue01f": "\u660e",
        "\ue8be": "\u5b50",
        "\uec52": "\u7684",
        "\uef53": "\u513f",
    },
    jjwxcfont_004q9: {
        "\ue0d4": "\u88ab",
        "\ue703": "\u81ea",
        "\ue6df": "\u611f",
        "\ue2c1": "\u5f00",
        "\ue9c9": "\u773c",
        "\uee6f": "\u601d",
        "\ue735": "\u53ea",
        "\ue404": "\u662f",
        "\ueab7": "\u5fc3",
        "\ue7df": "\u79cd",
        "\ueb62": "\u6253",
        "\ue783": "\u65e0",
        "\ue78d": "\u5bf9",
        "\ue8a5": "\u4f1a",
        "\ue655": "\u76f8",
        "\ue29d": "\u53d1",
        "\ue6bb": "\u5b9a",
        "\ue5ed": "\u53ef",
        "\ueb9e": "\u5929",
        "\ue316": "\u5374",
        "\ue3f2": "\u7ecf",
        "\ue794": "\u70b9",
        "\ueb93": "\u5230",
        "\uedb8": "\u4e86",
        "\ueadd": "\u628a",
        "\ue6b5": "\u6210",
        "\uef47": "\u5c11",
        "\ue720": "\u6c14",
        "\uec5b": "\u7406",
        "\ue121": "\u8fdb",
        "\ue91b": "\u6709",
        "\uee90": "\u9053",
        "\ue9a4": "\u4fbf",
        "\ueb20": "\u751f",
        "\ue604": "\u90a3",
        "\ue313": "\u6cd5",
        "\ue0df": "\u8bf4",
        "\ue1b0": "\u77e5",
        "\uec3c": "\u524d",
        "\ue747": "\u4f5c",
        "\ue460": "\u4f7f",
        "\uef04": "\u591a",
        "\ue1c4": "\u5b9e",
        "\ue1ed": "\u4e2a",
        "\ue8ef": "\u8d77",
        "\ue525": "\u4e5f",
        "\ue7d2": "\u957f",
        "\uec36": "\u6211",
        "\ue544": "\u4ee3",
        "\ue186": "\u7b2c",
        "\ue631": "\u522b",
        "\ue206": "\u56db",
        "\ued95": "\u660e",
        "\ueb98": "\u8d70",
        "\uea08": "\u770b",
        "\ue315": "\u95f4",
        "\ue095": "\u6b63",
        "\ue5fb": "\u4e3b",
        "\ue155": "\u8fd8",
        "\ue368": "\u5341",
        "\ueaf0": "\u53f2",
        "\uedff": "\u60f3",
        "\uea18": "\u8981",
        "\ue8c2": "\u4e8b",
        "\ue2d0": "\u5728",
        "\ueb89": "\u5c0f",
        "\ue4d5": "\u4ee5",
        "\ue28a": "\u8001",
        "\ue30d": "\u793e",
        "\uece4": "\u610f",
        "\ueccb": "\u548c",
        "\ueb6a": "\u5b50",
        "\ue973": "\u4eec",
        "\ue1ac": "\u4e2d",
        "\ue4e6": "\u65b0",
        "\uedaf": "\u73b0",
        "\uec6c": "\u8bba",
        "\uee42": "\u7528",
        "\ue63c": "\u4e8c",
        "\uec7b": "\u5f53",
        "\ue5ca": "\u6ca1",
        "\ue53f": "\u4f55",
        "\ued2e": "\u6837",
        "\ue037": "\u58f0",
        "\ue3b2": "\u770b",
        "\ued60": "\u53bb",
        "\ueb67": "\u4e00",
        "\uea44": "\u4e48",
        "\ue60e": "\u53e3",
        "\uea83": "\u89c1",
        "\uecba": "\u4e16",
        "\uee66": "\u4f46",
        "\ue25d": "\u91cc",
        "\ue201": "\u795e",
        "\uec60": "\u6240",
        "\ue0dc": "\u5e76",
        "\uee57": "\u4e0b",
        "\ue203": "\u5173",
        "\ue2b6": "\u540c",
        "\ue719": "\u4e3a",
        "\ue66e": "\u7f8e",
        "\ueeae": "\u5927",
        "\ue801": "\u4e0a",
        "\uedc6": "\u592a",
        "\ue905": "\u7b11",
        "\ue046": "\u51e0",
        "\uebd2": "\u529b",
        "\ued08": "\u4e8e",
        "\uebd6": "\u6587",
        "\uecc7": "\u540d",
        "\uee20": "\u4e49",
        "\ue814": "\u5206",
        "\ue130": "\u5e74",
        "\uec95": "\u5979",
        "\uec50": "\u5934",
        "\ue182": "\u4e66",
        "\ue605": "\u518d",
        "\ue2fe": "\u4e24",
        "\uec24": "\u6559",
        "\ue11d": "\u56e0",
        "\ueae6": "\u65b9",
        "\ueb7b": "\u7279",
        "\ue7da": "\u9762",
        "\ue4bc": "\u8bdd",
        "\ue274": "\u80fd",
        "\ue46a": "\u90fd",
        "\ue462": "\u8eab",
        "\ue1eb": "\u800c",
        "\ueb3b": "\u7b49",
        "\uef36": "\u6b64",
        "\ue3a9": "\u542c",
        "\ue9c4": "\u5730",
        "\ue918": "\u4e09",
        "\ueb43": "\u624b",
        "\ueaf2": "\u4ec0",
        "\ue8ad": "\u6765",
        "\ueed2": "\u95ee",
        "\ue047": "\u5982",
        "\ue41f": "\u5411",
        "\ue56c": "\u90e8",
        "\ue371": "\u66f4",
        "\ue31f": "\u6027",
        "\uec05": "\u897f",
        "\ue7e4": "\u540e",
        "\ue92a": "\u5c31",
        "\ue165": "\u5316",
        "\ue86f": "\u5df1",
        "\ue202": "\u6700",
        "\ue95f": "\u51fa",
        "\ue2b0": "\u5df2",
        "\ue0c9": "\u4eba",
        "\ue999": "\u8fc7",
        "\ue008": "\u91cd",
        "\ue0b4": "\u4e0e",
        "\ue027": "\u5199",
        "\ueb54": "\u60c5",
        "\ue3d9": "\u5f97",
        "\ue7e3": "\u884c",
        "\ue398": "\u4f53",
        "\ued06": "\u4e4b",
        "\uee37": "\u5168",
        "\ued9a": "\u56fd",
        "\ue012": "\u95e8",
        "\uede6": "\u4f60",
        "\uecb4": "\u597d",
        "\uef8b": "\u5176",
        "\ueea1": "\u53c8",
        "\ue1fa": "\u4ece",
        "\ue5c5": "\u5b83",
        "\ue84e": "\u7531",
        "\ueb33": "\u771f",
        "\ue119": "\u5c06",
        x: "x",
        "\uef52": "\u767d",
        "\ue5db": "\u624d",
        "\uea48": "\u5bb6",
        "\ue7bb": "\u8fd9",
        "\ue3c9": "\u8005",
        "\ueb5d": "\u9ad8",
        "\ue979": "\u7ed9",
        "\ue166": "\u513f",
        "\ued21": "\u516c",
        "\ue5fa": "\u5f88",
        "\uefa5": "\u5916",
        "\uecc3": "\u5148",
        "\ueb71": "\u56de",
        "\ueb4c": "\u5b66",
        "\ue566": "\u7269",
        "\ue041": "\u65e5",
        "\ue514": "\u679c",
        "\ue693": "\u672c",
        "\ued11": "\u4e0d",
        "\ueea9": "\u6c11",
        "\ue072": "\u7684",
        "\ue305": "\u52a8",
        "\ue5d1": "\u6b7b",
        "\uef99": "\u4e9b",
        "\ue487": "\u5973",
        "\uec39": "\u7136",
        "\ueabb": "\u65f6",
        "\uee75": "\u4ed6",
    },
    jjwxcfont_004t9: {
        "\uea4f": "\u65f6",
        "\uec53": "\u77e5",
        "\ue9d6": "\u5c31",
        "\ue3ce": "\u5979",
        "\ue7f5": "\u7684",
        "\ue746": "\u4e2d",
        "\ue6e1": "\u5fc3",
        "\ue581": "\u5e74",
        "\ue116": "\u5f53",
        "\ue947": "\u518d",
        "\uedb4": "\u8bba",
        "\ue492": "\u628a",
        "\ue832": "\u51fa",
        "\ue750": "\u7136",
        "\ue2d2": "\u5982",
        "\ue1b0": "\u4ee3",
        "\ue430": "\u662f",
        "\ueced": "\u5148",
        "\ueb4d": "\u6b7b",
        "\ue136": "\u73b0",
        "\ue574": "\u5374",
        "\uef05": "\u592a",
        "\ue1ec": "\u8005",
        "\ue140": "\u540c",
        "\ue284": "\u4ed6",
        "\ue5b3": "\u5176",
        "\ue92d": "\u6c11",
        "\uecf4": "\u524d",
        "\ue097": "\u6b64",
        "\ue21f": "\u8001",
        "\ueac3": "\u773c",
        "\ue24f": "\u795e",
        "\uefdc": "\u4fbf",
        "\uea9f": "\u6709",
        "\uea50": "\u679c",
        "\ue493": "\u5341",
        "\ue6df": "\u6211",
        "\uebec": "\u8fd9",
        "\ueca1": "\u8eab",
        "\ue441": "\u90fd",
        "\ue49f": "\u4f60",
        "\uef95": "\u91cc",
        "\ue9e2": "\u6837",
        "\uee8d": "\u4f1a",
        "\ue010": "\u5927",
        "\ue026": "\u4e2a",
        "\uec35": "\u4e49",
        "\ue049": "\u5b9a",
        "\ue333": "\u4f53",
        "\ue51e": "\u4e66",
        "\uece0": "\u7b2c",
        "\ueaf9": "\u95ee",
        "\ue512": "\u4e0d",
        "\ue81c": "\u6b63",
        "\ue3ab": "\u89c1",
        "\ueacd": "\u7406",
        "\ue837": "\u65b9",
        "\uef0b": "\u8bdd",
        "\ue74a": "\u8fc7",
        "\ue8c0": "\u53f2",
        "\ue0eb": "\u771f",
        "\uef74": "\u957f",
        "\ue4a5": "\u9ad8",
        x: "x",
        "\uec91": "\u53c8",
        "\uec90": "\u4f7f",
        "\uee32": "\u7269",
        "\ue62b": "\u66f4",
        "\ue3fc": "\u793e",
        "\ue937": "\u4e9b",
        "\ue119": "\u56e0",
        "\uea2a": "\u52a8",
        "\uedda": "\u5b9e",
        "\ue780": "\u540d",
        "\uec51": "\u611f",
        "\ue108": "\u4f46",
        "\ueea4": "\u897f",
        "\uedfa": "\u5230",
        "\ue7d1": "\u522b",
        "\ue495": "\u79cd",
        "\ue121": "\u4e8e",
        "\uef2e": "\u6210",
        "\ue7dd": "\u4f55",
        "\ue435": "\u4e48",
        "\uea2d": "\u610f",
        "\uecd8": "\u4e3a",
        "\ue98e": "\u4e4b",
        "\ue51d": "\u6ca1",
        "\ue067": "\u5199",
        "\ueb78": "\u5b66",
        "\ue734": "\u53ea",
        "\ue28e": "\u884c",
        "\ue474": "\u8fd8",
        "\ue37c": "\u65e5",
        "\ue3dd": "\u56db",
        "\ue997": "\u5bb6",
        "\ue347": "\u5df2",
        "\ue7b8": "\u540e",
        "\ue221": "\u81ea",
        "\ue1ca": "\u660e",
        "\ued68": "\u6c14",
        "\ue422": "\u4ec0",
        "\ue42a": "\u5730",
        "\uebbc": "\u767d",
        "\ue288": "\u542c",
        "\ue73c": "\u5316",
        "\ue98b": "\u4e00",
        "\uef4f": "\u5206",
        "\ueddd": "\u8bf4",
        "\ue829": "\u7740",
        "\uec9f": "\u751f",
        "\ue587": "\u4ee5",
        "\uec45": "\u53bb",
        "\ue575": "\u7f8e",
        "\ued25": "\u4e09",
        "\uecfb": "\u7279",
        "\ue984": "\u65e0",
        "\uef9e": "\u60f3",
        "\ue804": "\u90e8",
        "\ue719": "\u4e16",
        "\ue87b": "\u4e3b",
        "\ue8ac": "\u5411",
        "\ue5e6": "\u5916",
        "\uede5": "\u672c",
        "\ue52b": "\u6587",
        "\ue3d4": "\u90a3",
        "\ue708": "\u513f",
        "\ue629": "\u770b",
        "\ue0f8": "\u5bf9",
        "\ueaaf": "\u95f4",
        "\ueb29": "\u5168",
        "\ue59c": "\u95e8",
        "\uefa8": "\u4e5f",
        "\uebf1": "\u5173",
        "\ueba6": "\u516c",
        "\ue437": "\u8d77",
        "\ue254": "\u591a",
        "\ue562": "\u5c0f",
        "\ue426": "\u53d1",
        "\ue1a3": "\u5c06",
        "\ue059": "\u7b49",
        "\ueb72": "\u624b",
        "\ue410": "\u5934",
        "\ue950": "\u4eec",
        "\ue12e": "\u8fdb",
        "\ue387": "\u4eba",
        "\ue56e": "\u6240",
        "\ue074": "\u800c",
        "\ue2ad": "\u7b11",
        "\ue7e7": "\u4e0b",
        "\uefbc": "\u80fd",
        "\ue03b": "\u597d",
        "\ue732": "\u5b83",
        "\ue4f7": "\u5e76",
        "\ue528": "\u601d",
        "\uea45": "\u5b50",
        "\ue461": "\u88ab",
        "\uef17": "\u4e24",
        "\ue3c8": "\u51e0",
        "\ue523": "\u9762",
        "\ue9c9": "\u6cd5",
        "\ue6bf": "\u53ef",
        "\ueb7f": "\u9053",
        "\ued65": "\u7528",
        "\uec21": "\u6765",
        "\ue8ad": "\u8981",
        "\ue7bc": "\u7ed9",
        "\ue5ad": "\u4e8c",
        "\ue2e8": "\u8d70",
        "\uef63": "\u5728",
        "\ue43d": "\u56d7",
        "\uefeb": "\u4ece",
        "\ue704": "\u4e86",
        "\ue888": "\u4e8b",
        "\ued53": "\u5929",
        "\ueb18": "\u65b0",
        "\ue722": "\u5f88",
        "\ue5a4": "\u5df1",
        "\ue2d4": "\u4e0e",
        "\ue6ca": "\u7531",
        "\ueccf": "\u5f00",
        "\ueec2": "\u529b",
        "\ue054": "\u4f5c",
        "\ue598": "\u6027",
        "\ue52c": "\u56de",
        "\ueee1": "\u6559",
        "\ueccc": "\u7ecf",
        "\ue915": "\u5f97",
        "\ue9e7": "\u76f8",
        "\ue7fb": "\u56fd",
        "\ue615": "\u91cd",
        "\ue90c": "\u6700",
        "\ue344": "\u548c",
        "\ue39e": "\u60c5",
        "\ued5f": "\u6253",
        "\uee40": "\u70b9",
        "\ue8ed": "\u5973",
        "\ue16a": "\u4e0a",
        "\ued13": "\u5c11",
        "\ue569": "\u624d",
        "\ueea9": "\u58f0",
    },
    jjwxcfont_004v9: {
        "\ue70c": "\u5929",
        "\ue752": "\u7136",
        "\ue9de": "\u7b11",
        "\ue0c0": "\u5916",
        "\ue886": "\u4ee3",
        "\ue8c5": "\u592a",
        "\ue1d4": "\u601d",
        "\uee0f": "\u51e0",
        "\ue19a": "\u65b9",
        "\ue453": "\u540c",
        "\ue077": "\u5982",
        "\ue581": "\u5979",
        "\ue60e": "\u4f60",
        "\ueed7": "\u4f53",
        "\ue3cf": "\u5f97",
        "\ued27": "\u7b49",
        "\uea28": "\u8bdd",
        "\ue16f": "\u95e8",
        "\ue6e5": "\u5730",
        "\ue5ec": "\u5df1",
        "\ue12b": "\u793e",
        "\ued7f": "\u56e0",
        "\ue3f2": "\u65f6",
        "\uecab": "\u90e8",
        "\ue5a6": "\u6b7b",
        "\ue201": "\u5934",
        "\uec9a": "\u795e",
        "\ueab6": "\u95ee",
        "\ue47e": "\u70b9",
        "\uea17": "\u4e49",
        "\ue446": "\u6211",
        "\ue784": "\u5c06",
        "\uef83": "\u5df2",
        "\ue979": "\u53bb",
        "\ue514": "\u4f1a",
        "\ue8a2": "\u8d70",
        "\ue093": "\u518d",
        "\ue088": "\u73b0",
        "\ue82a": "\u4f5c",
        "\ue2b7": "\u4e4b",
        "\uedf6": "\u6027",
        "\ue313": "\u5168",
        "\ue817": "\u611f",
        "\ue891": "\u4f46",
        "\ue76d": "\u957f",
        x: "x",
        "\ue964": "\u7279",
        "\ue3f5": "\u522b",
        "\ueccb": "\u56fd",
        "\ue273": "\u5f88",
        "\uee39": "\u628a",
        "\ued15": "\u884c",
        "\ue65d": "\u81ea",
        "\ue51f": "\u4e66",
        "\ue5d6": "\u540d",
        "\ue179": "\u4f7f",
        "\ue6f8": "\u56de",
        "\ued2b": "\u4eec",
        "\ueed0": "\u91cc",
        "\uebb7": "\u5b83",
        "\ued3d": "\u524d",
        "\ue411": "\u6587",
        "\ue212": "\u8005",
        "\uef17": "\u5fc3",
        "\ueb0f": "\u6765",
        "\ue226": "\u91cd",
        "\ue9fc": "\u751f",
        "\ue404": "\u5973",
        "\ue41f": "\u53ef",
        "\ue318": "\u662f",
        "\ue90f": "\u771f",
        "\uef87": "\u9762",
        "\ue440": "\u4e0a",
        "\ue312": "\u5411",
        "\ue8e2": "\u4e0e",
        "\ueac9": "\u513f",
        "\ue7ed": "\u6cd5",
        "\ue1df": "\u52a8",
        "\ue942": "\u4fbf",
        "\ue871": "\u90a3",
        "\uee4e": "\u5148",
        "\ueb7e": "\u95f4",
        "\ue841": "\u4e8c",
        "\ue6a6": "\u8fd9",
        "\ue31f": "\u8bf4",
        "\ued1a": "\u4e2d",
        "\ue384": "\u660e",
        "\ue272": "\u4ee5",
        "\ue9ee": "\u5173",
        "\ueada": "\u7ecf",
        "\ue53e": "\u6253",
        "\ue08f": "\u60f3",
        "\uea45": "\u7f8e",
        "\uecf4": "\u4e00",
        "\ue184": "\u7528",
        "\ue846": "\u767d",
        "\ue870": "\u5c31",
        "\ueec3": "\u4e8e",
        "\ue56c": "\u5199",
        "\ueee1": "\u5f00",
        "\ue516": "\u4e16",
        "\ue689": "\u5b66",
        "\ue9b2": "\u53d1",
        "\ued7a": "\u5927",
        "\ue911": "\u7269",
        "\ue86e": "\u4ec0",
        "\ue1ab": "\u65b0",
        "\ue1cc": "\u7684",
        "\uef10": "\u770b",
        "\ue7a1": "\u540e",
        "\ue400": "\u529b",
        "\uea03": "\u6c14",
        "\uef3d": "\u8fdb",
        "\ue743": "\u5728",
        "\ue633": "\u4eba",
        "\ue83a": "\u5e74",
        "\uec8f": "\u5b9a",
        "\ue7d8": "\u548c",
        "\ue96b": "\u65e5",
        "\uec09": "\u4e86",
        "\ue1ae": "\u8981",
        "\ue10e": "\u5bb6",
        "\ue363": "\u7406",
        "\ueda3": "\u56db",
        "\ue7f7": "\u597d",
        "\ue37c": "\u4e24",
        "\ue381": "\u610f",
        "\uec1c": "\u9ad8",
        "\ue058": "\u5374",
        "\ue020": "\u4e3a",
        "\ue819": "\u5206",
        "\uec10": "\u66f4",
        "\ue6c6": "\u4e0d",
        "\ue38e": "\u53f2",
        "\ue657": "\u591a",
        "\ue8fa": "\u6559",
        "\ue7c7": "\u53ea",
        "\ue447": "\u7740",
        "\ue2ed": "\u4e2a",
        "\ueb8a": "\u6b63",
        "\ue52a": "\u4ece",
        "\ue79d": "\u6c11",
        "\ueeb6": "\u7ed9",
        "\ue9c3": "\u679c",
        "\ue050": "\u58f0",
        "\ue3e2": "\u8bba",
        "\ue1ac": "\u6700",
        "\ue2c7": "\u7531",
        "\ued87": "\u5e76",
        "\uefdd": "\u5f53",
        "\ue8e1": "\u672c",
        "\ue9ff": "\u51fa",
        "\ue746": "\u76f8",
        "\ue0bb": "\u4e3b",
        "\uebab": "\u79cd",
        "\ue369": "\u4e9b",
        "\uee53": "\u624b",
        "\ue6d2": "\u5176",
        "\ue3d2": "\u4e0b",
        "\uea54": "\u5bf9",
        "\ue0e3": "\u5c11",
        "\ue1c1": "\u77e5",
        "\ue6e6": "\u7b2c",
        "\ue524": "\u5230",
        "\ue717": "\u773c",
        "\uee3a": "\u5b50",
        "\ue3e6": "\u6b64",
        "\ue8e5": "\u4e8b",
        "\ue2fa": "\u8eab",
        "\ue36f": "\u4e09",
        "\ue260": "\u8fd8",
        "\uece2": "\u5341",
        "\uea8c": "\u53c8",
        "\uea48": "\u4e48",
        "\ue03e": "\u5c0f",
        "\ue67f": "\u4f55",
        "\ue928": "\u8d77",
        "\uea58": "\u56d7",
        "\ue7c1": "\u5b9e",
        "\ue3ed": "\u542c",
        "\ue895": "\u80fd",
        "\ued2c": "\u5316",
        "\ue67a": "\u8001",
        "\ue9c8": "\u60c5",
        "\ue6bd": "\u6210",
        "\ue031": "\u4ed6",
        "\ue192": "\u8fc7",
        "\ue1f4": "\u6709",
        "\ue2cb": "\u6837",
        "\ue8fc": "\u9053",
        "\ue419": "\u897f",
        "\ue639": "\u90fd",
        "\uedca": "\u6240",
        "\ue3a3": "\u800c",
        "\ue219": "\u4e5f",
        "\ue488": "\u65e0",
        "\ue2d9": "\u624d",
        "\uef27": "\u516c",
        "\uefd9": "\u88ab",
        "\uef98": "\u6ca1",
        "\ue390": "\u89c1",
    },
    jjwxcfont_004z1: {
        "\uec36": "\u5bb6",
        "\ue5bf": "\u95f4",
        "\ue05a": "\u7b49",
        "\ue245": "\u5730",
        "\ue917": "\u6b63",
        "\ue4b3": "\u4f7f",
        "\ueab5": "\u56db",
        "\uef02": "\u90a3",
        "\ue12f": "\u4e0e",
        "\ue848": "\u529b",
        "\ue304": "\u5b9e",
        "\uef7c": "\u513f",
        "\ue7d9": "\u53ef",
        "\ue4ff": "\u8005",
        "\ue44a": "\u662f",
        "\ue3e6": "\u7ecf",
        "\uec75": "\u5b9a",
        "\ue8b3": "\u524d",
        "\ue129": "\u5176",
        "\ueabb": "\u79cd",
        "\ueefd": "\u5230",
        "\uefc8": "\u672c",
        "\ue67e": "\u770b",
        "\ue3ff": "\u95e8",
        "\uee14": "\u679c",
        "\ue7a9": "\u5374",
        "\ue092": "\u9053",
        "\ue7cc": "\u8fd8",
        "\ue3da": "\u4e2d",
        "\ue2c2": "\u5934",
        "\ue492": "\u4eec",
        "\uecc7": "\u7406",
        "\ue530": "\u8981",
        "\ue378": "\u540d",
        "\ue3bf": "\u5728",
        "\ue547": "\u65f6",
        "\ue892": "\u52a8",
        "\uea7b": "\u8bf4",
        "\ue626": "\u6559",
        "\uee0d": "\u56fd",
        "\ue23f": "\u4f46",
        "\uea3b": "\u65e0",
        "\ue21d": "\u597d",
        "\ue38c": "\u518d",
        "\ueb0c": "\u4ece",
        "\uefdd": "\u4e4b",
        "\ue357": "\u88ab",
        "\ue1e0": "\u773c",
        "\ue18e": "\u4fbf",
        "\ue4ee": "\u6765",
        "\ue374": "\u628a",
        "\ue4fd": "\u5341",
        "\uea62": "\u89c1",
        "\ue2ea": "\u6b7b",
        "\ue7cf": "\u5f88",
        "\uedda": "\u6700",
        "\uea10": "\u516c",
        "\ueb89": "\u77e5",
        "\ue887": "\u65b9",
        "\uea8b": "\u9ad8",
        "\ue58b": "\u60f3",
        "\ue425": "\u4e24",
        "\ue336": "\u5b83",
        "\ued37": "\u5f53",
        "\ue909": "\u771f",
        "\ue3fe": "\u540e",
        "\uec7c": "\u5df1",
        "\ueb56": "\u8d77",
        "\ueedd": "\u53f2",
        "\ue2df": "\u6837",
        "\ue673": "\u56d7",
        "\uebba": "\u4ec0",
        "\uebe0": "\u58f0",
        "\ue990": "\u53c8",
        "\ue197": "\u76f8",
        "\ue7f4": "\u51e0",
        "\ueea8": "\u6240",
        "\ue445": "\u8bdd",
        "\uef84": "\u4ed6",
        "\ue6da": "\u60c5",
        "\ued09": "\u95ee",
        "\ue297": "\u5e74",
        "\ue3a9": "\u5c11",
        "\uef3c": "\u4e5f",
        "\ued46": "\u7684",
        "\ue771": "\u5929",
        "\ue51c": "\u7b11",
        "\ue042": "\u70b9",
        x: "x",
        "\uea81": "\u7f8e",
        "\ue13b": "\u884c",
        "\ue237": "\u793e",
        "\ue2d5": "\u5fc3",
        "\ue604": "\u660e",
        "\ue6dd": "\u540c",
        "\ued6d": "\u522b",
        "\ueda4": "\u4ee5",
        "\ue377": "\u4e0b",
        "\ueab6": "\u4e8b",
        "\uec3f": "\u5148",
        "\ue3b6": "\u5f00",
        "\ue838": "\u53d1",
        "\ue394": "\u957f",
        "\uea0d": "\u5e76",
        "\ue081": "\u591a",
        "\ue653": "\u4f53",
        "\ueceb": "\u80fd",
        "\ue312": "\u5c0f",
        "\uee44": "\u795e",
        "\uee8d": "\u4e3b",
        "\ueaa3": "\u65b0",
        "\uec29": "\u5411",
        "\ue34c": "\u5916",
        "\uee06": "\u624d",
        "\ueec2": "\u4f60",
        "\ue020": "\u6ca1",
        "\ue642": "\u5973",
        "\uec9a": "\u5b50",
        "\ue427": "\u5316",
        "\ue2a8": "\u897f",
        "\uedec": "\u800c",
        "\ue06c": "\u5b66",
        "\uede7": "\u6210",
        "\uee80": "\u4f55",
        "\ueb11": "\u8eab",
        "\ue09d": "\u5927",
        "\ueabf": "\u7740",
        "\uea79": "\u4e2a",
        "\ue1be": "\u4e0a",
        "\ueb8b": "\u56de",
        "\ue69c": "\u4e3a",
        "\ue449": "\u90e8",
        "\uec77": "\u6587",
        "\uedd9": "\u4e8e",
        "\uec0e": "\u767d",
        "\ue474": "\u6cd5",
        "\uef90": "\u5206",
        "\ue138": "\u4e48",
        "\ue7ce": "\u91cc",
        "\ue80d": "\u8bba",
        "\ue384": "\u53ea",
        "\uefe2": "\u8fc7",
        "\ue3b5": "\u5bf9",
        "\ue113": "\u4e16",
        "\ue119": "\u5df2",
        "\ue172": "\u4e09",
        "\uedd6": "\u4e9b",
        "\ue0ff": "\u5c06",
        "\ue2b9": "\u5c31",
        "\ue466": "\u4e66",
        "\ue7f8": "\u548c",
        "\ue134": "\u7136",
        "\uecd7": "\u5173",
        "\ue30d": "\u7b2c",
        "\ueff1": "\u5168",
        "\ue93b": "\u4ee3",
        "\ue59e": "\u4e00",
        "\uead9": "\u5979",
        "\uea8d": "\u4e8c",
        "\ue1f7": "\u5982",
        "\ue869": "\u611f",
        "\ue04e": "\u6211",
        "\ue16c": "\u4e0d",
        "\ued3a": "\u7269",
        "\ue0f5": "\u65e5",
        "\ue5c7": "\u66f4",
        "\uef38": "\u6b64",
        "\uefda": "\u6027",
        "\ue221": "\u4f5c",
        "\ue29b": "\u6c14",
        "\uea2b": "\u592a",
        "\uecbe": "\u610f",
        "\ue500": "\u6c11",
        "\ue882": "\u56e0",
        "\ue8e0": "\u8001",
        "\ue2ee": "\u6709",
        "\ueff0": "\u6253",
        "\ue826": "\u4e49",
        "\ue9eb": "\u8fd9",
        "\ue937": "\u4e86",
        "\ueb19": "\u8d70",
        "\ue5bd": "\u542c",
        "\uefe7": "\u5f97",
        "\ue9e3": "\u7279",
        "\uee57": "\u7531",
        "\ue0a9": "\u9762",
        "\ue012": "\u5199",
        "\uea15": "\u91cd",
        "\ue598": "\u73b0",
        "\uedcb": "\u4eba",
        "\ue4c5": "\u751f",
        "\uefcd": "\u51fa",
        "\uee97": "\u8fdb",
        "\uecee": "\u4f1a",
        "\ue453": "\u7528",
        "\ue8cb": "\u53bb",
        "\ue9e9": "\u624b",
        "\ue7f3": "\u90fd",
        "\ue3ac": "\u601d",
        "\uef75": "\u7ed9",
        "\uef4a": "\u81ea",
    },
    jjwxcfont_0052c: {
        "\ueec3": "\u4f55",
        "\uecf3": "\u5176",
        "\ue33a": "\u5f97",
        "\ue1b4": "\u7279",
        "\ue897": "\u4e3a",
        "\uecfb": "\u4e2d",
        "\ue872": "\u7406",
        "\ue0bb": "\u6587",
        "\ue143": "\u5c0f",
        "\ue19a": "\u65b9",
        "\ue5d9": "\u897f",
        "\ueb73": "\u628a",
        "\ue70a": "\u610f",
        "\ue477": "\u77e5",
        "\uef2a": "\u4ed6",
        "\ue444": "\u4f46",
        "\ue51f": "\u65e5",
        "\ue6e9": "\u4f7f",
        "\ue709": "\u592a",
        "\uedfc": "\u7740",
        "\ue871": "\u65b0",
        "\uef41": "\u767d",
        "\ue77c": "\u8fdb",
        "\ue331": "\u6211",
        "\uecbb": "\u5c31",
        "\ue5e8": "\u4eec",
        "\uec39": "\u5b83",
        "\ue788": "\u5df2",
        "\uec0a": "\u5f00",
        "\ue3e8": "\u5168",
        "\ue573": "\u8bf4",
        "\ue2d4": "\u522b",
        "\uef06": "\u542c",
        "\ue2c9": "\u529b",
        "\ue5f1": "\u4e3b",
        "\ue792": "\u6837",
        "\ue1f2": "\u4e8c",
        "\ue724": "\u56d7",
        "\ue2a0": "\u79cd",
        "\ue55b": "\u7b2c",
        "\ue666": "\u53bb",
        "\ue53b": "\u5411",
        "\ue30d": "\u8001",
        "\ue1fe": "\u751f",
        "\ue00e": "\u8fd9",
        "\uea83": "\u5929",
        "\ue32c": "\u70b9",
        "\ue128": "\u597d",
        "\uede8": "\u6253",
        "\ue5b9": "\u540d",
        "\ue8f6": "\u5c11",
        "\ue2da": "\u56db",
        "\ue55e": "\u548c",
        "\ue18d": "\u4f1a",
        "\ue1d5": "\u5bb6",
        "\ue136": "\u53ea",
        "\ue812": "\u6c11",
        "\ue22e": "\u4e0b",
        "\ue0e0": "\u7b49",
        "\uef4e": "\u51e0",
        "\ue725": "\u56de",
        "\uef2b": "\u4e9b",
        "\ued3c": "\u6cd5",
        "\ue3e5": "\u4e66",
        "\ue934": "\u65e0",
        "\ue377": "\u76f8",
        "\ue9e2": "\u6765",
        "\ue9c7": "\u95f4",
        "\uee37": "\u5b9a",
        "\ue129": "\u6b7b",
        "\ue08b": "\u5e74",
        "\ue189": "\u5148",
        "\ue786": "\u4e0d",
        "\ue6ed": "\u5173",
        "\uef75": "\u5b66",
        "\ue133": "\u4e2a",
        "\ue232": "\u81ea",
        "\ue557": "\u679c",
        "\ue0c0": "\u601d",
        "\uee7a": "\u7ecf",
        "\ueae9": "\u95ee",
        "\ue7a2": "\u4e5f",
        "\uef64": "\u5b9e",
        "\ue675": "\u5374",
        "\ue09f": "\u5728",
        "\uef4d": "\u8bba",
        "\ueb4c": "\u6027",
        "\ue205": "\u90fd",
        "\ue7e4": "\u5982",
        "\ueb14": "\u770b",
        "\uec35": "\u4e49",
        "\uea6a": "\u7528",
        "\ue90f": "\u884c",
        "\ueefb": "\u8d77",
        "\ue219": "\u5e76",
        x: "x",
        "\uefe3": "\u90e8",
        "\ue3ae": "\u6559",
        "\ueaf7": "\u5230",
        "\ue06f": "\u5730",
        "\ue9ec": "\u66f4",
        "\ue46f": "\u5bf9",
        "\ue6c6": "\u9762",
        "\ue94c": "\u95e8",
        "\ueaa5": "\u5f88",
        "\uef87": "\u65f6",
        "\uee61": "\u795e",
        "\ue37b": "\u7f8e",
        "\ue02e": "\u80fd",
        "\ueddc": "\u7ed9",
        "\ue9d3": "\u6c14",
        "\ued95": "\u6b63",
        "\ue503": "\u4f53",
        "\uec3b": "\u524d",
        "\ued20": "\u51fa",
        "\ue7eb": "\u4e0e",
        "\uedff": "\u516c",
        "\ued43": "\u4e16",
        "\uebfe": "\u5973",
        "\uefa0": "\u53f2",
        "\ued34": "\u88ab",
        "\ueed5": "\u6700",
        "\uebf3": "\u7269",
        "\ue6b0": "\u9ad8",
        "\ue3c3": "\u773c",
        "\ue185": "\u7136",
        "\ue295": "\u7531",
        "\ue5e2": "\u4e8b",
        "\uea2c": "\u800c",
        "\ue1b2": "\u5199",
        "\ue708": "\u5f53",
        "\ueec7": "\u591a",
        "\ue231": "\u4e8e",
        "\uedf9": "\u518d",
        "\ue308": "\u4e0a",
        "\ue91a": "\u56e0",
        "\ued76": "\u6ca1",
        "\uee9b": "\u91cc",
        "\ue5ce": "\u53d1",
        "\ue06a": "\u4e4b",
        "\ue3fe": "\u771f",
        "\ue55f": "\u56fd",
        "\ue77d": "\u4eba",
        "\uef8e": "\u4ee5",
        "\ue6a4": "\u4e00",
        "\ue5f6": "\u611f",
        "\ue92f": "\u8981",
        "\ue540": "\u8005",
        "\uec8a": "\u5206",
        "\uec5f": "\u5927",
        "\ue918": "\u4f5c",
        "\uee56": "\u4e48",
        "\ue091": "\u540e",
        "\ueae3": "\u60f3",
        "\ueb15": "\u5c06",
        "\ue500": "\u5979",
        "\ue9d4": "\u4ece",
        "\ued04": "\u7684",
        "\uead6": "\u624d",
        "\ue777": "\u53c8",
        "\uec08": "\u53ef",
        "\ue178": "\u793e",
        "\ue941": "\u8fc7",
        "\ue8fd": "\u4ee3",
        "\uea94": "\u7b11",
        "\uebca": "\u4e86",
        "\ue8f7": "\u6709",
        "\ue073": "\u4e24",
        "\ue257": "\u5934",
        "\ue629": "\u5fc3",
        "\ue46c": "\u5316",
        "\ue620": "\u4ec0",
        "\uecf6": "\u624b",
        "\ue83b": "\u73b0",
        "\uef9b": "\u4e09",
        "\ue61f": "\u6210",
        "\ue896": "\u6240",
        "\ueb5d": "\u660e",
        "\ue510": "\u90a3",
        "\uecc5": "\u8d70",
        "\ueb6c": "\u5b50",
        "\ue411": "\u91cd",
        "\ue637": "\u8fd8",
        "\uea79": "\u9053",
        "\ue7ae": "\u6b64",
        "\ue8a0": "\u52a8",
        "\ue2de": "\u58f0",
        "\ue443": "\u8eab",
        "\ued7f": "\u5916",
        "\ue13f": "\u60c5",
        "\ueea6": "\u8bdd",
        "\uec0b": "\u662f",
        "\uea3e": "\u5df1",
        "\ue755": "\u957f",
        "\ueb74": "\u4f60",
        "\ued03": "\u540c",
        "\ueb3f": "\u5341",
        "\ue737": "\u89c1",
        "\ue175": "\u672c",
        "\ue376": "\u513f",
        "\uedf0": "\u4fbf",
    },
    jjwxcfont_0055y: {
        "\ue047": "\u5f53",
        "\ue4f1": "\u9053",
        "\uec91": "\u516c",
        "\ue4ea": "\u4ee3",
        "\uee5d": "\u611f",
        "\ue349": "\u7136",
        "\ue3e0": "\u4e0a",
        "\ue425": "\u5bf9",
        "\ueeae": "\u56e0",
        "\ue4d7": "\u5f00",
        "\ueb3f": "\u8fd8",
        "\ue480": "\u5148",
        "\ue34c": "\u4e86",
        "\ue759": "\u5927",
        "\ue3d6": "\u4e8b",
        "\ue934": "\u662f",
        "\ue7ed": "\u4e9b",
        "\ue422": "\u6240",
        "\ue1b8": "\u4f60",
        "\ue505": "\u56db",
        "\ue2ac": "\u5979",
        "\ue2f6": "\u6cd5",
        "\ue18f": "\u4fbf",
        "\ue68e": "\u591a",
        "\ue60c": "\u4eba",
        "\ue0d7": "\u4f53",
        "\uec44": "\u770b",
        "\ued9c": "\u5e74",
        "\uedcb": "\u4e8e",
        "\uea61": "\u5730",
        "\ueb9f": "\u672c",
        "\uee3b": "\u592a",
        "\ue4be": "\u518d",
        "\ue917": "\u679c",
        "\uedfd": "\u7528",
        "\ueb14": "\u7684",
        "\ue219": "\u7b11",
        "\ue685": "\u5934",
        "\ue776": "\u5982",
        "\uea03": "\u5230",
        "\uedec": "\u6211",
        "\ue5c8": "\u793e",
        "\ue7a9": "\u624d",
        "\ued55": "\u5206",
        "\ue5b9": "\u5e76",
        "\ue815": "\u77e5",
        "\uefc6": "\u5168",
        "\uef02": "\u4e48",
        "\ueeb2": "\u4ec0",
        "\uef45": "\u65b9",
        "\uebc1": "\u53e3",
        "\ue53c": "\u6ca1",
        "\ue919": "\u4e2a",
        "\ueb60": "\u56fd",
        "\ueec1": "\u767d",
        "\ue71d": "\u5411",
        "\ue145": "\u610f",
        "\uec75": "\u4f55",
        "\ue4cf": "\u4e16",
        "\ue0f0": "\u8981",
        "\uee25": "\u4ee5",
        "\ue0a5": "\u9ad8",
        "\ue248": "\u8d70",
        "\ued28": "\u8d77",
        "\uea8b": "\u90fd",
        "\uec78": "\u80fd",
        "\ue1e7": "\u7ecf",
        "\ue4e0": "\u60c5",
        "\ue2d4": "\u51e0",
        "\uecc7": "\u51fa",
        "\ue474": "\u624b",
        "\uef50": "\u800c",
        "\uec4e": "\u89c1",
        "\uef38": "\u95f4",
        "\ue95e": "\u4e8c",
        "\ue581": "\u6765",
        "\uee34": "\u8bdd",
        "\ue4bb": "\u5c06",
        "\ue769": "\u5f88",
        "\uea68": "\u65e5",
        "\ue4ca": "\u6700",
        "\uef74": "\u6837",
        "\ue800": "\u5c0f",
        "\ue87e": "\u9762",
        "\ue0d2": "\u6210",
        "\ue49e": "\u4ece",
        "\ue056": "\u5728",
        "\ue465": "\u91cc",
        "\uef21": "\u4e3a",
        "\uebb5": "\u53c8",
        "\ue097": "\u53f2",
        "\ue9fb": "\u6587",
        "\ue227": "\u773c",
        "\ued37": "\u8001",
        "\uee42": "\u4e00",
        "\ue72b": "\u95ee",
        "\ue1ed": "\u957f",
        "\ue3d1": "\u5341",
        "\ue26b": "\u540c",
        "\uecad": "\u4f5c",
        "\ue9e2": "\u53d1",
        "\ueca8": "\u7269",
        "\ueed0": "\u73b0",
        "\ue03c": "\u6027",
        "\uebe1": "\u60f3",
        "\ued60": "\u7b2c",
        "\ue70c": "\u4e0d",
        "\ue98e": "\u4e24",
        "\uec90": "\u66f4",
        "\ue603": "\u95e8",
        "\ue160": "\u90a3",
        "\ueb5e": "\u4e5f",
        "\ue87d": "\u8eab",
        x: "x",
        "\uef0e": "\u52a8",
        "\ued2f": "\u5b9e",
        "\ue13d": "\u4e49",
        "\ue3fc": "\u540d",
        "\uef88": "\u8fc7",
        "\ue229": "\u529b",
        "\ue7d1": "\u4e66",
        "\uea26": "\u5b50",
        "\ue418": "\u5b66",
        "\ue3ae": "\u76f8",
        "\uea6b": "\u6709",
        "\uef52": "\u5173",
        "\uee03": "\u90e8",
        "\ue7d8": "\u88ab",
        "\ued44": "\u91cd",
        "\ue30a": "\u53ef",
        "\ue9a8": "\u6559",
        "\ue5f7": "\u4f1a",
        "\uea1f": "\u884c",
        "\ue691": "\u7406",
        "\ued4b": "\u4e3b",
        "\ue65e": "\u7ed9",
        "\ue501": "\u7531",
        "\ue139": "\u53bb",
        "\ue664": "\u4ed6",
        "\uec2a": "\u65e0",
        "\ue896": "\u5374",
        "\uef79": "\u6253",
        "\ueb83": "\u601d",
        "\ue633": "\u751f",
        "\ue88a": "\u5c31",
        "\ue69f": "\u4e0b",
        "\uea17": "\u6c11",
        "\uef6c": "\u4f7f",
        "\ue786": "\u795e",
        "\ue583": "\u7b49",
        "\uef7b": "\u7740",
        "\ue18d": "\u65b0",
        "\ued9f": "\u4f46",
        "\ue04a": "\u542c",
        "\uee8f": "\u4e4b",
        "\uef1e": "\u548c",
        "\ue5a3": "\u524d",
        "\ue662": "\u5916",
        "\uef4e": "\u5176",
        "\ue91f": "\u513f",
        "\uefce": "\u5b9a",
        "\ue7b4": "\u6b63",
        "\ue973": "\u8fdb",
        "\uea85": "\u660e",
        "\ue523": "\u4e0e",
        "\uef92": "\u5316",
        "\ue0bc": "\u5c11",
        "\ue87b": "\u628a",
        "\ueebb": "\u70b9",
        "\ued82": "\u540e",
        "\ue13e": "\u5df1",
        "\ue692": "\u4e09",
        "\ue5ea": "\u8bba",
        "\ue09a": "\u5df2",
        "\ue5af": "\u6c14",
        "\ue1e5": "\u8005",
        "\ue517": "\u6b64",
        "\ued87": "\u6b7b",
        "\ueb76": "\u897f",
        "\ue554": "\u53ea",
        "\uee3d": "\u5b83",
        "\uee16": "\u8bf4",
        "\uec4d": "\u79cd",
        "\ue83f": "\u4e2d",
        "\ue862": "\u597d",
        "\uee59": "\u7f8e",
        "\ue616": "\u81ea",
        "\ue323": "\u58f0",
        "\uedc1": "\u5f97",
        "\ue4f0": "\u522b",
        "\ue8df": "\u56de",
        "\ue7bf": "\u65f6",
        "\uee89": "\u5fc3",
        "\ue8d1": "\u7279",
        "\ue7f7": "\u5199",
        "\ue238": "\u8fd9",
        "\ued39": "\u771f",
        "\ueb69": "\u5bb6",
        "\uecb9": "\u4eec",
        "\ue70f": "\u5973",
        "\uedd9": "\u5929",
    },
    jjwxcfont_0057c: {
        "\ue334": "\u5bb6",
        "\ue917": "\u5c06",
        "\ue1ba": "\u6b7b",
        "\ue77b": "\u56de",
        "\ue2d5": "\u5c31",
        "\ue3c9": "\u53ef",
        "\ue745": "\u60f3",
        "\ue2b8": "\u7f8e",
        "\ue768": "\u5f97",
        "\uef10": "\u5176",
        "\ue790": "\u8fd8",
        "\ue38d": "\u4f7f",
        "\uec16": "\u4ee5",
        "\uea27": "\u8fd9",
        "\uec1d": "\u624d",
        "\uead4": "\u4eec",
        "\ue393": "\u6837",
        "\ue7c3": "\u6709",
        "\ueedb": "\u53ea",
        "\ue523": "\u767d",
        "\ued73": "\u591a",
        "\ue0ed": "\u4f1a",
        "\ue139": "\u4e3a",
        "\ue9c4": "\u5b66",
        "\uecaa": "\u751f",
        "\ue827": "\u6765",
        "\uebc2": "\u90e8",
        "\uee9e": "\u5929",
        "\ue7bf": "\u65f6",
        "\ueec5": "\u529b",
        "\uea62": "\u4e0a",
        "\ue22c": "\u6c11",
        "\ue2a9": "\u628a",
        "\uea56": "\u7b49",
        "\ued54": "\u95e8",
        "\ue0ab": "\u4e09",
        "\ue1cf": "\u65b9",
        "\ue2a4": "\u4e3b",
        "\uec7d": "\u5374",
        "\ue30c": "\u4e16",
        "\ue399": "\u91cc",
        "\ue1f8": "\u51e0",
        "\ued10": "\u7528",
        "\ue2d8": "\u6b64",
        "\ue406": "\u73b0",
        "\uee6c": "\u957f",
        "\ue4f2": "\u4e66",
        "\ue1be": "\u7406",
        "\ue7d4": "\u5730",
        "\ue14a": "\u8981",
        "\ue4c8": "\u56db",
        "\uea61": "\u8d70",
        "\ued39": "\u5230",
        "\uedf9": "\u6700",
        "\ue5ea": "\u540d",
        "\uee8f": "\u60c5",
        "\ue8e5": "\u5934",
        "\ue27c": "\u80fd",
        "\uef4d": "\u597d",
        "\ue4c9": "\u5b50",
        "\uefde": "\u513f",
        "\ue76a": "\u56d7",
        "\ue418": "\u89c1",
        "\uedc0": "\u4e8c",
        "\ue5d2": "\u7740",
        "\ueddd": "\u8fc7",
        "\uee58": "\u52a8",
        "\uee15": "\u4e0e",
        "\ue4bd": "\u4f53",
        "\ue2cf": "\u70b9",
        "\ue882": "\u540e",
        "\ue0e6": "\u9762",
        "\ue003": "\u5f53",
        "\uecd8": "\u5916",
        "\ue3de": "\u5df1",
        "\uead7": "\u77e5",
        "\uecd4": "\u8eab",
        "\ueaf5": "\u5206",
        "\ue14f": "\u4f5c",
        "\uedf2": "\u793e",
        "\ueed5": "\u800c",
        "\uea49": "\u610f",
        "\ue394": "\u7269",
        "\ue485": "\u65e0",
        x: "x",
        "\ued42": "\u522b",
        "\ueba3": "\u4ed6",
        "\ue065": "\u4e48",
        "\ued5d": "\u66f4",
        "\ueb43": "\u6253",
        "\ue6b1": "\u5bf9",
        "\ue141": "\u4e5f",
        "\ue102": "\u548c",
        "\ue861": "\u773c",
        "\uee8a": "\u7b11",
        "\uefee": "\u7b2c",
        "\ueb9e": "\u662f",
        "\ue4c6": "\u8bba",
        "\ue8bc": "\u524d",
        "\ue3dc": "\u9053",
        "\ue0b6": "\u542c",
        "\uef40": "\u51fa",
        "\uef32": "\u5f88",
        "\ue7e9": "\u672c",
        "\ueb67": "\u5168",
        "\uedd3": "\u592a",
        "\uec03": "\u4e00",
        "\ue460": "\u6c14",
        "\uec61": "\u6211",
        "\ue1df": "\u91cd",
        "\ue6e1": "\u4e86",
        "\ue2cc": "\u6559",
        "\uee7c": "\u8005",
        "\uecf6": "\u5973",
        "\uedba": "\u6b63",
        "\ue8c4": "\u6cd5",
        "\ued26": "\u6210",
        "\ueaca": "\u4eba",
        "\ue295": "\u5173",
        "\ueae3": "\u5b83",
        "\ueb06": "\u897f",
        "\ued51": "\u90fd",
        "\uebe4": "\u5c0f",
        "\ue803": "\u4f46",
        "\ue6b9": "\u5341",
        "\ueb35": "\u4ec0",
        "\ued12": "\u7ed9",
        "\ued82": "\u95ee",
        "\uecca": "\u4e0d",
        "\uec0c": "\u95f4",
        "\ue249": "\u7684",
        "\ue2c5": "\u5fc3",
        "\ue98d": "\u8bf4",
        "\ued0b": "\u4e49",
        "\uea25": "\u56fd",
        "\ued7d": "\u6027",
        "\ueccb": "\u5199",
        "\ue901": "\u884c",
        "\uef83": "\u4e24",
        "\ue983": "\u5df2",
        "\ue0ca": "\u53c8",
        "\ue06d": "\u7279",
        "\uec2e": "\u81ea",
        "\ue155": "\u5411",
        "\uec2f": "\u660e",
        "\ue4e8": "\u90a3",
        "\ue2af": "\u5979",
        "\ue2c7": "\u4e8e",
        "\ueb1b": "\u516c",
        "\ue133": "\u79cd",
        "\ue0eb": "\u5e74",
        "\uec84": "\u795e",
        "\uee29": "\u4e9b",
        "\ued0a": "\u9ad8",
        "\ue25f": "\u5e76",
        "\ue8f8": "\u53f2",
        "\ued0c": "\u5728",
        "\ue37c": "\u7136",
        "\ue67a": "\u8bdd",
        "\ue115": "\u518d",
        "\ue2d7": "\u5f00",
        "\ue303": "\u5148",
        "\ueeb0": "\u5316",
        "\ue702": "\u5c11",
        "\ue232": "\u6ca1",
        "\uefed": "\u6587",
        "\ueedc": "\u4e2d",
        "\uebc1": "\u4f60",
        "\ue6a6": "\u4fbf",
        "\ue34b": "\u4e2a",
        "\uefe8": "\u679c",
        "\uef09": "\u6240",
        "\ue2a2": "\u65b0",
        "\ueb08": "\u8fdb",
        "\ueb85": "\u76f8",
        "\ue851": "\u5b9a",
        "\ue18e": "\u53d1",
        "\ueb69": "\u771f",
        "\ue1a2": "\u601d",
        "\ueddb": "\u5927",
        "\ue951": "\u611f",
        "\uef3e": "\u53bb",
        "\uee23": "\u4e4b",
        "\uebcc": "\u7ecf",
        "\uedb4": "\u4e8b",
        "\ued5b": "\u65e5",
        "\ueb0d": "\u770b",
        "\uea53": "\u5982",
        "\ueb94": "\u4ece",
        "\uef78": "\u7531",
        "\ue3fc": "\u58f0",
        "\uec87": "\u4ee3",
        "\ue7c9": "\u4e0b",
        "\ue3d9": "\u4f55",
        "\uec2d": "\u5b9e",
        "\ue00e": "\u540c",
        "\ue24a": "\u8001",
        "\ued4b": "\u624b",
        "\ue7e3": "\u56e0",
        "\ue2e4": "\u8d77",
        "\ueb3a": "\u88ab",
    },
    jjwxcfont_005aa: {
        "\ue8c9": "\u679c",
        "\ue09b": "\u5206",
        "\ue47b": "\u4e86",
        "\ueedf": "\u4f7f",
        "\ue11e": "\u8981",
        "\ue8b9": "\u8001",
        "\ueb08": "\u5f53",
        "\ue97a": "\u6c14",
        "\ue9ea": "\u91cc",
        "\ueb01": "\u540d",
        "\ue7e5": "\u5b66",
        "\ue543": "\u5973",
        "\uee1b": "\u6b63",
        "\ued0a": "\u5bf9",
        "\ue949": "\u4e49",
        "\uefc3": "\u6700",
        "\ue008": "\u60c5",
        "\uef78": "\u6b7b",
        "\ue6fc": "\u6211",
        "\ue54f": "\u7740",
        "\uea68": "\u4e8c",
        "\ue46e": "\u897f",
        "\ue9ca": "\u5411",
        "\uea9b": "\u5f97",
        "\uef61": "\u518d",
        "\ue28f": "\u88ab",
        "\uec6c": "\u4eec",
        "\ue681": "\u4e5f",
        "\uea05": "\u6210",
        "\ue5d7": "\u5df2",
        "\uedea": "\u56db",
        "\ue6f7": "\u6c11",
        "\ue3aa": "\u5374",
        "\ue049": "\u4e48",
        "\ue48d": "\u624b",
        "\uedf6": "\u90e8",
        "\ue60c": "\u4e2a",
        "\ue4c1": "\u52a8",
        "\uec11": "\u7b11",
        "\ued31": "\u8eab",
        "\ueed6": "\u8005",
        "\ue97e": "\u5df1",
        "\ue702": "\u5168",
        "\ued57": "\u5316",
        "\ue52a": "\u56e0",
        "\uea86": "\u8bf4",
        "\ue912": "\u4e8b",
        "\ue1d9": "\u5f00",
        "\ue516": "\u4f1a",
        "\uec3e": "\u660e",
        "\ue88b": "\u5fc3",
        "\ue3b2": "\u4f5c",
        "\ue32d": "\u8bdd",
        "\ue8f6": "\u4eba",
        "\uefdf": "\u516c",
        "\ueef8": "\u7f8e",
        "\ued99": "\u4e24",
        "\ue290": "\u662f",
        "\ue5ba": "\u793e",
        "\ue5a0": "\u592a",
        "\ue591": "\u8bba",
        "\ue795": "\u7b2c",
        "\ue318": "\u65b0",
        "\uefa8": "\u7ecf",
        "\ue86e": "\u66f4",
        "\uea38": "\u4e3a",
        "\uef71": "\u591a",
        "\ue26c": "\u4e4b",
        "\uebde": "\u53c8",
        "\ue463": "\u5199",
        "\ue746": "\u5230",
        "\uef81": "\u6253",
        "\ue0b8": "\u8fdb",
        "\uef3a": "\u53d1",
        "\uee0c": "\u610f",
        "\uef3b": "\u9053",
        "\ue369": "\u5927",
        "\ue61f": "\u4e0a",
        "\uec3f": "\u795e",
        "\ueabe": "\u90fd",
        "\ueeb3": "\u5341",
        "\ue93f": "\u73b0",
        "\ue5eb": "\u4e0d",
        "\ue66f": "\u53ef",
        "\uede7": "\u884c",
        x: "x",
        "\ue155": "\u4e66",
        "\ue160": "\u4e9b",
        "\ue710": "\u5b9a",
        "\uece7": "\u65f6",
        "\ue528": "\u77e5",
        "\ue617": "\u5b83",
        "\ued1b": "\u611f",
        "\ue00c": "\u7269",
        "\ue09d": "\u771f",
        "\uec08": "\u6ca1",
        "\ueaef": "\u8fd9",
        "\ue67a": "\u6837",
        "\ued32": "\u5bb6",
        "\ue90e": "\u4e00",
        "\ue401": "\u5c0f",
        "\uee3d": "\u7ed9",
        "\ue8ac": "\u4fbf",
        "\ueeaa": "\u800c",
        "\ue18c": "\u6709",
        "\uef8d": "\u4ee5",
        "\uee0f": "\u65b9",
        "\uea84": "\u9762",
        "\ue67b": "\u5982",
        "\ue5c2": "\u5b9e",
        "\ue081": "\u4ec0",
        "\ue6f9": "\u773c",
        "\ue102": "\u751f",
        "\uebf1": "\u4ece",
        "\ueaac": "\u70b9",
        "\ue372": "\u5f88",
        "\ue783": "\u8fc7",
        "\ue405": "\u7136",
        "\ue723": "\u5c11",
        "\ue3cb": "\u4e16",
        "\uecf3": "\u5b50",
        "\ued05": "\u5730",
        "\ue3df": "\u95f4",
        "\uec19": "\u4ee3",
        "\ue6b0": "\u7684",
        "\ue9bc": "\u53f2",
        "\uedcd": "\u7528",
        "\uedd7": "\u601d",
        "\ued45": "\u91cd",
        "\uefc2": "\u81ea",
        "\ue368": "\u529b",
        "\ue74c": "\u4e0e",
        "\ue6ee": "\u5173",
        "\ueaf7": "\u58f0",
        "\ue062": "\u5c31",
        "\uedf0": "\u79cd",
        "\ue4c0": "\u4f53",
        "\ue4b2": "\u524d",
        "\uec2a": "\u5e74",
        "\ue76b": "\u51fa",
        "\ue53b": "\u5929",
        "\ue964": "\u4f46",
        "\ueb1a": "\u8d77",
        "\ue9e9": "\u6027",
        "\ued54": "\u628a",
        "\ue59a": "\u65e5",
        "\ue8f0": "\u4ed6",
        "\ue34a": "\u7531",
        "\ue553": "\u5934",
        "\ue2be": "\u770b",
        "\ue3d5": "\u53bb",
        "\ue2e0": "\u65e0",
        "\ue210": "\u5e76",
        "\uedf8": "\u5c06",
        "\ue2e1": "\u7b49",
        "\uec03": "\u60f3",
        "\ue819": "\u4e2d",
        "\ueee9": "\u5979",
        "\uee56": "\u7279",
        "\ue673": "\u8d70",
        "\ued17": "\u4f55",
        "\uebd2": "\u6559",
        "\ueb7c": "\u540c",
        "\ueb00": "\u4e0b",
        "\ue2b1": "\u6765",
        "\uef3d": "\u6587",
        "\uee76": "\u4f60",
        "\uec96": "\u7406",
        "\ueb0f": "\u624d",
        "\uef60": "\u4e8e",
        "\uef70": "\u80fd",
        "\ue5ee": "\u56d7",
        "\ue235": "\u957f",
        "\ue309": "\u89c1",
        "\ue6f3": "\u672c",
        "\uefab": "\u76f8",
        "\ue996": "\u51e0",
        "\uee08": "\u513f",
        "\uee19": "\u4e3b",
        "\ueca7": "\u6b64",
        "\ue203": "\u597d",
        "\ue884": "\u8fd8",
        "\ue9af": "\u90a3",
        "\ue8d1": "\u53ea",
        "\ueec2": "\u522b",
        "\ue1c7": "\u95e8",
        "\ue8d7": "\u542c",
        "\ueac9": "\u56de",
        "\ue7c5": "\u6cd5",
        "\ueec5": "\u4e09",
        "\ue0f0": "\u5916",
        "\uec40": "\u548c",
        "\ue20e": "\u9ad8",
        "\ue33f": "\u56fd",
        "\ue340": "\u540e",
        "\uecd2": "\u95ee",
        "\ue281": "\u5148",
        "\ue6d8": "\u5176",
        "\ue06d": "\u6240",
        "\uee98": "\u5728",
        "\uef09": "\u767d",
    },
    jjwxcfont_005dc: {
        "\ue208": "\u4f55",
        "\uef21": "\u5c31",
        "\ue319": "\u51fa",
        "\uec63": "\u8fd9",
        "\ue19e": "\u4e86",
        "\ueae1": "\u5f97",
        "\uecb4": "\u518d",
        "\uedb2": "\u6b64",
        "\ueb30": "\u5173",
        "\ue09f": "\u4e66",
        "\ue174": "\u65b0",
        "\uea7a": "\u672c",
        "\ue842": "\u513f",
        "\ue495": "\u5341",
        "\ued14": "\u516c",
        "\uecf9": "\u4e0e",
        "\uef2d": "\u5973",
        "\uee3a": "\u5bb6",
        "\ue1b1": "\u7684",
        "\ue9ff": "\u767d",
        "\ue0f9": "\u5e74",
        "\ue49f": "\u5f53",
        "\ue0a7": "\u6027",
        "\ue18c": "\u4fbf",
        "\ue704": "\u6587",
        "\ue1ec": "\u4ece",
        "\ue49c": "\u7269",
        "\ue9c9": "\u7ed9",
        "\uebd5": "\u8981",
        "\uef5a": "\u540c",
        "\ue0f2": "\u6b63",
        "\ueda8": "\u95f4",
        "\ue21e": "\u65f6",
        "\ue6d0": "\u5b83",
        "\ue55a": "\u5979",
        "\uefd7": "\u53d1",
        "\ue9ee": "\u5bf9",
        "\ue2fb": "\u81ea",
        "\uebea": "\u79cd",
        "\ue6a4": "\u795e",
        "\ue774": "\u8bdd",
        "\ue304": "\u5b9e",
        "\ue04c": "\u591a",
        "\ueb87": "\u60c5",
        "\uec6f": "\u5934",
        "\ue8a0": "\u95ee",
        "\uef72": "\u5c11",
        "\ue10f": "\u4f53",
        "\ue3b8": "\u53bb",
        "\ue6f8": "\u5916",
        "\ue18d": "\u5411",
        "\ue4b4": "\u5e76",
        "\ue5f6": "\u6ca1",
        "\ued87": "\u5f88",
        "\ue9dc": "\u73b0",
        "\uec12": "\u5fc3",
        "\ue469": "\u4eba",
        "\uea9e": "\u5148",
        "\ue9b4": "\u88ab",
        "\uedc3": "\u76f8",
        "\ue7fa": "\u8d70",
        "\ued16": "\u793e",
        "\uef02": "\u610f",
        "\ue508": "\u4e8e",
        "\uebe5": "\u52a8",
        "\ue63f": "\u65b9",
        "\uef9e": "\u8eab",
        "\ue5e2": "\u611f",
        "\ue3b9": "\u9762",
        "\ued66": "\u592a",
        "\ue38f": "\u4f5c",
        "\uedc8": "\u660e",
        "\ue90b": "\u60f3",
        "\ue3d5": "\u5c06",
        "\ue0a0": "\u7136",
        "\uea3b": "\u53ef",
        "\ue1f8": "\u7531",
        "\uee86": "\u601d",
        "\ue2c4": "\u56fd",
        "\ue323": "\u770b",
        "\uef51": "\u4e3a",
        "\ued1c": "\u542c",
        "\ue5a7": "\u7b2c",
        "\uee24": "\u7b49",
        "\ueb95": "\u624b",
        "\ue5e4": "\u624d",
        "\ued22": "\u77e5",
        "\ue055": "\u7740",
        "\uead3": "\u6240",
        "\ue847": "\u4ed6",
        "\ue949": "\u5199",
        "\ue445": "\u7b11",
        "\uea76": "\u4f60",
        "\ue898": "\u524d",
        "\ue29e": "\u5168",
        "\ue9af": "\u597d",
        "\uefdc": "\u4eec",
        "\ue128": "\u8d77",
        "\ue310": "\u5927",
        "\uef9b": "\u4e0b",
        "\ue6bf": "\u9053",
        "\uee94": "\u6253",
        "\ue8f7": "\u5b9a",
        "\uef33": "\u6cd5",
        "\ue289": "\u5b50",
        "\ue63b": "\u4e24",
        "\ue6b6": "\u53ea",
        "\ue461": "\u4e5f",
        "\ue3bc": "\u8001",
        "\ued94": "\u6c14",
        "\ue8eb": "\u5374",
        "\uee28": "\u6210",
        x: "x",
        "\ue20d": "\u8fd8",
        "\ue810": "\u58f0",
        "\ue065": "\u773c",
        "\ue8b6": "\u957f",
        "\ue6f2": "\u897f",
        "\ue4ca": "\u7528",
        "\ueb56": "\u6709",
        "\ue1d1": "\u540d",
        "\ueffd": "\u5316",
        "\ue601": "\u5176",
        "\uea18": "\u8bba",
        "\ueb18": "\u4e2a",
        "\ue18a": "\u628a",
        "\uef5c": "\u5730",
        "\uefc0": "\u56d7",
        "\ue6c6": "\u4e2d",
        "\ue569": "\u8005",
        "\ue137": "\u4f7f",
        "\ue49a": "\u4e0a",
        "\ue181": "\u9ad8",
        "\ue695": "\u771f",
        "\ue877": "\u6211",
        "\uec65": "\u5982",
        "\uea6e": "\u7406",
        "\ue588": "\u6559",
        "\ueeb1": "\u4e49",
        "\ue00d": "\u884c",
        "\ue3a0": "\u679c",
        "\ue775": "\u4e48",
        "\ueb10": "\u5df1",
        "\ue150": "\u51e0",
        "\ue968": "\u65e5",
        "\ue124": "\u6837",
        "\ue679": "\u4f46",
        "\ue72b": "\u4e8b",
        "\ue802": "\u662f",
        "\ue7b9": "\u90fd",
        "\ue223": "\u7ecf",
        "\ue8db": "\u4e8c",
        "\ue31d": "\u6c11",
        "\uea51": "\u4e16",
        "\ue27b": "\u91cd",
        "\ue6fc": "\u5f00",
        "\ue85d": "\u800c",
        "\ue356": "\u4e00",
        "\ue92c": "\u5728",
        "\ue147": "\u5df2",
        "\ueb1a": "\u70b9",
        "\ueb6e": "\u4ee5",
        "\ueabd": "\u4ec0",
        "\ue14a": "\u65e0",
        "\ue4d0": "\u7f8e",
        "\uef07": "\u7279",
        "\ue56d": "\u5230",
        "\uebb9": "\u56db",
        "\ue5d6": "\u8fdb",
        "\uef26": "\u91cc",
        "\ue4dd": "\u90e8",
        "\ue589": "\u5929",
        "\ue54e": "\u4e09",
        "\ue66f": "\u529b",
        "\uec78": "\u66f4",
        "\ue378": "\u548c",
        "\uee22": "\u540e",
        "\uedd6": "\u4e9b",
        "\ueb1c": "\u95e8",
        "\uedd0": "\u5c0f",
        "\ue4ee": "\u4e4b",
        "\ue105": "\u5b66",
        "\ueee3": "\u56e0",
        "\uef80": "\u53f2",
        "\ue83d": "\u4e0d",
        "\ue9e2": "\u6700",
        "\ue9fb": "\u53c8",
        "\ue322": "\u89c1",
        "\ue157": "\u522b",
        "\ue0ed": "\u4e3b",
        "\uede1": "\u90a3",
        "\ueddf": "\u8bf4",
        "\ue4aa": "\u6b7b",
        "\ue6ea": "\u4f1a",
        "\ue23a": "\u6765",
        "\ue4ad": "\u56de",
        "\ue1f7": "\u80fd",
        "\ue019": "\u8fc7",
        "\ueebc": "\u5206",
        "\ue192": "\u4ee3",
        "\ue305": "\u751f",
    },
    jjwxcfont_005gr: {
        "\ue497": "\u773c",
        "\ue6eb": "\u5c0f",
        "\ue95b": "\u60c5",
        "\ue9d2": "\u8d70",
        "\ue3e8": "\u77e5",
        "\ueae5": "\u540e",
        "\ue4fe": "\u5411",
        "\ueba8": "\u91cc",
        "\uee82": "\u4e3a",
        "\uebe0": "\u65b9",
        "\ue248": "\u4e16",
        "\ue7b4": "\u4ee3",
        "\uec99": "\u662f",
        "\ue508": "\u80fd",
        "\ue166": "\u60f3",
        "\ue9fb": "\u4e66",
        "\ue456": "\u6c11",
        "\ue45d": "\u624d",
        "\ue2da": "\u9ad8",
        "\uedda": "\u90e8",
        "\ue3c9": "\u795e",
        "\uecf3": "\u8981",
        "\uef67": "\u7684",
        "\ued0a": "\u4f5c",
        "\uea1c": "\u7531",
        "\ue05e": "\u884c",
        "\ue86f": "\u4e2d",
        "\uea78": "\u771f",
        "\ue2b5": "\u522b",
        "\ue638": "\u5bb6",
        "\ue40d": "\u4e3b",
        "\uec08": "\u516c",
        "\ued64": "\u524d",
        "\uee0b": "\u6253",
        "\ue8e8": "\u542c",
        "\ueecd": "\u793e",
        "\ue6fe": "\u4e0a",
        "\ue780": "\u5934",
        "\uefcb": "\u65b0",
        "\ued41": "\u5c11",
        "\ue005": "\u624b",
        "\ue9a9": "\u7740",
        "\ue290": "\u4f55",
        "\ue0f1": "\u5f53",
        "\ue662": "\u7b2c",
        "\uecdc": "\u5df2",
        "\ue284": "\u5206",
        "\ue81e": "\u7406",
        "\uea8b": "\u5230",
        "\ueb64": "\u4f46",
        "\uef77": "\u4e0e",
        "\ue75b": "\u5e76",
        "\uea24": "\u5b9e",
        "\uec83": "\u5f97",
        "\ue76b": "\u4e0d",
        "\ue14a": "\u4e09",
        "\ue45e": "\u5df1",
        "\ue655": "\u6210",
        "\ue4c5": "\u5979",
        "\uea55": "\u5173",
        "\ue926": "\u6559",
        "\ue822": "\u90a3",
        "\ue439": "\u53ef",
        "\uea33": "\u56e0",
        "\uefef": "\u5b50",
        "\ue71b": "\u4ec0",
        "\uee31": "\u4ed6",
        "\uec9b": "\u5b66",
        "\ue23a": "\u4eba",
        "\ue5d0": "\u56de",
        "\ue42d": "\u4e24",
        "\ue493": "\u751f",
        "\ue52a": "\u8bba",
        "\ue41b": "\u7ecf",
        "\ue5ad": "\u58f0",
        "\ue902": "\u5316",
        "\ued12": "\u5927",
        "\ueeb3": "\u52a8",
        "\ue352": "\u5c06",
        "\ue6ab": "\u8fd9",
        "\ue6e9": "\u591a",
        "\uead3": "\u4e9b",
        "\ue9b0": "\u73b0",
        "\uefb7": "\u53c8",
        "\ue23f": "\u7ed9",
        "\ue176": "\u9053",
        "\ueb95": "\u4f7f",
        "\ueaa4": "\u65f6",
        "\ue9cc": "\u5730",
        "\ue18b": "\u6240",
        "\ue941": "\u770b",
        "\ue6cf": "\u5374",
        "\uef4b": "\u95f4",
        "\uec69": "\u6027",
        "\uecfc": "\u6cd5",
        "\ue2c2": "\u56fd",
        "\ued4d": "\u4f60",
        "\ueab1": "\u8fdb",
        "\uec50": "\u540c",
        "\ue7ec": "\u4e5f",
        "\ue851": "\u51e0",
        "\uee66": "\u89c1",
        "\ue0f9": "\u611f",
        x: "x",
        "\uecce": "\u4e8c",
        "\ue089": "\u6709",
        "\ue413": "\u5168",
        "\ue964": "\u66f4",
        "\ue4f1": "\u4e0b",
        "\uee40": "\u95e8",
        "\ue6c9": "\u6700",
        "\uee74": "\u5fc3",
        "\uef5f": "\u8d77",
        "\ue23e": "\u81ea",
        "\ue696": "\u513f",
        "\ue48b": "\u5728",
        "\ue4ba": "\u88ab",
        "\ued4e": "\u6587",
        "\ueff6": "\u6837",
        "\ue706": "\u7279",
        "\ue49f": "\u51fa",
        "\ue816": "\u95ee",
        "\ue245": "\u8bdd",
        "\ue550": "\u7269",
        "\ue6e3": "\u660e",
        "\ued76": "\u4e8b",
        "\uebf8": "\u53f2",
        "\ued26": "\u597d",
        "\ueac6": "\u4fbf",
        "\ue947": "\u5bf9",
        "\uef55": "\u53d1",
        "\ue7d9": "\u4e86",
        "\ue82d": "\u672c",
        "\uea94": "\u6b64",
        "\ue20c": "\u65e0",
        "\ue3a8": "\u5f88",
        "\ue1f4": "\u6765",
        "\ueb04": "\u5f00",
        "\uea81": "\u5973",
        "\ue4a9": "\u7528",
        "\ue812": "\u5929",
        "\ue9df": "\u540d",
        "\ue51d": "\u800c",
        "\ue040": "\u8005",
        "\ue179": "\u53bb",
        "\ue55a": "\u4eec",
        "\ue727": "\u7136",
        "\uea25": "\u6b63",
        "\uebce": "\u8eab",
        "\ue735": "\u5341",
        "\ued7a": "\u518d",
        "\uee54": "\u592a",
        "\ueb98": "\u610f",
        "\uee56": "\u5982",
        "\ue008": "\u5c31",
        "\ue490": "\u6211",
        "\ue73b": "\u5916",
        "\uee57": "\u7b49",
        "\ue25a": "\u6b7b",
        "\ue4e3": "\u601d",
        "\ue244": "\u4f53",
        "\ue8e6": "\u5b83",
        "\uecd0": "\u679c",
        "\ue82a": "\u767d",
        "\ueb0a": "\u4e4b",
        "\uea0f": "\u7b11",
        "\ue9e5": "\u79cd",
        "\ued42": "\u4e2a",
        "\ue732": "\u56db",
        "\ueafd": "\u5199",
        "\ue09e": "\u529b",
        "\ue59d": "\u4ece",
        "\uee93": "\u628a",
        "\uedd1": "\u70b9",
        "\ue283": "\u897f",
        "\ue714": "\u4f1a",
        "\ueacc": "\u4e48",
        "\ue71a": "\u4e8e",
        "\ue1d0": "\u7f8e",
        "\ue4f6": "\u76f8",
        "\ue5aa": "\u53e3",
        "\uefdf": "\u65e5",
        "\ueb9a": "\u9762",
        "\ue877": "\u957f",
        "\ueca1": "\u8fc7",
        "\ue949": "\u8001",
        "\ue4bc": "\u5b9a",
        "\ue018": "\u5148",
        "\ue843": "\u91cd",
        "\uef18": "\u53ea",
        "\ueb23": "\u6c14",
        "\ue919": "\u8fd8",
        "\ue71e": "\u548c",
        "\uebc7": "\u5e74",
        "\ue912": "\u90fd",
        "\ue0d9": "\u4e49",
        "\ueb48": "\u6ca1",
        "\ued2d": "\u4ee5",
        "\ue930": "\u5176",
        "\uec75": "\u4e00",
        "\ueeab": "\u8bf4",
    },
    jjwxcfont_005jc: {
        "\ue819": "\u4e8b",
        "\ue234": "\u5f97",
        "\ue69f": "\u4e9b",
        "\ue1f4": "\u529b",
        "\uee9f": "\u5c0f",
        "\ue713": "\u6ca1",
        "\ue6d7": "\u8eab",
        "\ue3c8": "\u548c",
        "\ue6f2": "\u795e",
        "\uefd0": "\u5e74",
        "\ue8fb": "\u80fd",
        "\ued0f": "\u4e0d",
        "\ueb13": "\u8d77",
        "\ue395": "\u5206",
        "\ue866": "\u773c",
        "\uec9c": "\u4ec0",
        "\ue9d4": "\u6240",
        "\ue8ea": "\u5374",
        "\uef15": "\u4e0e",
        "\ue04f": "\u81ea",
        "\uef80": "\u51fa",
        "\ue880": "\u4fbf",
        "\ue892": "\u5230",
        "\ue164": "\u4eec",
        "\ue9d6": "\u592a",
        "\ue382": "\u8fd8",
        "\ue342": "\u7684",
        "\ue156": "\u8bdd",
        "\uedfc": "\u4f53",
        "\uef9a": "\u5730",
        "\ue2a5": "\u58f0",
        "\ue18a": "\u4e8c",
        "\ued82": "\u90e8",
        "\ueea2": "\u4ed6",
        "\ue2d8": "\u5b66",
        "\uece9": "\u60c5",
        "\ue476": "\u5df2",
        "\ue73c": "\u5916",
        "\ueb36": "\u540d",
        "\ue8ee": "\u7279",
        "\uec65": "\u591a",
        "\ueb55": "\u88ab",
        "\ue010": "\u522b",
        "\ue009": "\u56e0",
        "\ue7f2": "\u66f4",
        "\uee9e": "\u6700",
        "\ue4cf": "\u9053",
        "\ue3d2": "\u7b49",
        "\uece8": "\u5929",
        "\ue225": "\u91cd",
        "\ue1be": "\u77e5",
        "\ueee9": "\u8bba",
        "\ue8f5": "\u8d70",
        "\ueb4d": "\u4e49",
        "\ue9dd": "\u6b7b",
        "\ue0f9": "\u65b9",
        x: "x",
        "\ue6ef": "\u91cc",
        "\ue893": "\u95e8",
        "\uee19": "\u884c",
        "\ue45c": "\u9ad8",
        "\ue956": "\u672c",
        "\ue6b6": "\u5934",
        "\ued7d": "\u4e4b",
        "\ueeb3": "\u52a8",
        "\ue5b1": "\u679c",
        "\ue997": "\u95f4",
        "\ueec5": "\u957f",
        "\uee91": "\u7531",
        "\ued61": "\u56fd",
        "\ue7eb": "\u518d",
        "\ue345": "\u7406",
        "\ue85f": "\u4e5f",
        "\ued38": "\u7b11",
        "\ue0a2": "\u5fc3",
        "\ue7b6": "\u6027",
        "\ue455": "\u53ea",
        "\uec7c": "\u7528",
        "\uea70": "\u8fdb",
        "\ue804": "\u611f",
        "\uefd6": "\u4e86",
        "\ue121": "\u51e0",
        "\ue3b8": "\u6c14",
        "\ueffb": "\u6709",
        "\ue0ae": "\u4e16",
        "\ue3cf": "\u542c",
        "\ue243": "\u6b64",
        "\uec6e": "\u5316",
        "\ue0e6": "\u90fd",
        "\ue917": "\u53f2",
        "\ue5d8": "\u601d",
        "\ueb6a": "\u90a3",
        "\ue08e": "\u793e",
        "\ue93f": "\u5982",
        "\ue6db": "\u624b",
        "\ue112": "\u5e76",
        "\ue97c": "\u5728",
        "\ue37f": "\u65f6",
        "\uee77": "\u4eba",
        "\ueb46": "\u770b",
        "\ue8b7": "\u8005",
        "\uee38": "\u5f00",
        "\ue847": "\u5b83",
        "\ue281": "\u5df1",
        "\ue87b": "\u8981",
        "\ue17b": "\u4e66",
        "\ue313": "\u5979",
        "\ue396": "\u5173",
        "\ue599": "\u6587",
        "\ue1a1": "\u4e2a",
        "\ue075": "\u53c8",
        "\ue4ec": "\u56de",
        "\ue6ea": "\u6559",
        "\ue6a6": "\u89c1",
        "\ue719": "\u8bf4",
        "\ueaf1": "\u751f",
        "\ue165": "\u5199",
        "\uebb9": "\u7136",
        "\ue5df": "\u5b9a",
        "\uedd4": "\u76f8",
        "\uec0e": "\u53d1",
        "\ued6d": "\u8001",
        "\ueb33": "\u4e8e",
        "\ue678": "\u540c",
        "\uefe3": "\u4f5c",
        "\ue0fd": "\u524d",
        "\ue8f7": "\u65b0",
        "\ue404": "\u8fc7",
        "\uec11": "\u7ecf",
        "\ue571": "\u5411",
        "\ue821": "\u6253",
        "\ue929": "\u610f",
        "\ueac6": "\u5973",
        "\uedf0": "\u540e",
        "\ue3e9": "\u65e0",
        "\ue451": "\u5168",
        "\ueb60": "\u5bb6",
        "\ue0c1": "\u4e3b",
        "\uef81": "\u4e0a",
        "\uefde": "\u5b9e",
        "\ue11e": "\u767d",
        "\ueb39": "\u7740",
        "\ue5f4": "\u800c",
        "\uea3e": "\u6c11",
        "\uefa9": "\u597d",
        "\uef6b": "\u53e3",
        "\ueb54": "\u9762",
        "\ue728": "\u4e3a",
        "\ueecb": "\u53bb",
        "\ued9b": "\u56db",
        "\ue701": "\u5b50",
        "\ue56b": "\u4e00",
        "\ue731": "\u771f",
        "\ue9bc": "\u5341",
        "\ue8e5": "\u513f",
        "\ue29e": "\u7f8e",
        "\ue82c": "\u6210",
        "\ued07": "\u6211",
        "\uebec": "\u662f",
        "\ue4e8": "\u73b0",
        "\uea42": "\u5c11",
        "\ue1ac": "\u897f",
        "\ueaea": "\u4f7f",
        "\ue78a": "\u70b9",
        "\ue71d": "\u6765",
        "\ued3b": "\u4e24",
        "\uea00": "\u7b2c",
        "\ue995": "\u7ed9",
        "\ueb87": "\u4e48",
        "\uefdb": "\u5927",
        "\uee4f": "\u53ef",
        "\ue6bc": "\u5148",
        "\ue309": "\u4f55",
        "\ued01": "\u5c31",
        "\uef2f": "\u516c",
        "\ue412": "\u4e2d",
        "\ue54c": "\u4f46",
        "\ue2a2": "\u6837",
        "\ue9dc": "\u4f1a",
        "\uebc1": "\u5bf9",
        "\ued76": "\u4ece",
        "\ue386": "\u65e5",
        "\uedf6": "\u79cd",
        "\ueadd": "\u5f88",
        "\ue48c": "\u4ee3",
        "\ue5e7": "\u5f53",
        "\ue6be": "\u4f60",
        "\ue1c3": "\u8fd9",
        "\ue897": "\u5c06",
        "\ue2e2": "\u660e",
        "\ue28b": "\u4ee5",
        "\ue808": "\u4e0b",
        "\ue6cf": "\u4e09",
        "\ue8d4": "\u628a",
        "\ue098": "\u6b63",
        "\ue9f6": "\u5176",
        "\uebc4": "\u624d",
        "\ue8be": "\u95ee",
        "\uefa5": "\u6cd5",
        "\ue876": "\u60f3",
        "\uec5f": "\u7269",
    },
    jjwxcfont_005ml: {
        "\ueff2": "\u4e49",
        "\uee59": "\u6027",
        "\ue9ea": "\u8bf4",
        "\uefd2": "\u5c31",
        "\ue117": "\u51e0",
        "\uee44": "\u4ec0",
        "\uea08": "\u6b7b",
        "\ue99e": "\u95e8",
        "\ue235": "\u624b",
        "\ue0e8": "\u5982",
        "\uea11": "\u8fdb",
        "\ue39b": "\u4f55",
        "\ue3ee": "\u60c5",
        "\ue8fd": "\u95ee",
        "\ue4c8": "\u5e76",
        "\uee52": "\u5168",
        "\ue205": "\u611f",
        "\ue6d4": "\u5230",
        "\uea15": "\u548c",
        "\ue753": "\u610f",
        "\uef4f": "\u4ed6",
        "\uedb2": "\u8fd9",
        "\ue632": "\u6c14",
        "\uec1c": "\u7740",
        "\ue799": "\u73b0",
        "\ue5c5": "\u4f46",
        "\ue380": "\u8eab",
        "\ueeb0": "\u660e",
        "\ueda7": "\u5730",
        "\uea76": "\u65e5",
        "\ue00d": "\u957f",
        "\uecea": "\u4e8b",
        "\uec07": "\u5979",
        "\ue67c": "\u4e0a",
        "\ue1bf": "\u89c1",
        "\ue303": "\u4e09",
        "\ue154": "\u773c",
        "\uee05": "\u540e",
        "\ueb82": "\u793e",
        "\ue44c": "\u5934",
        "\ued3d": "\u65b0",
        "\ue9f5": "\u70b9",
        "\ue532": "\u81ea",
        "\uef35": "\u672c",
        "\uec0d": "\u4f7f",
        "\ue955": "\u4e3a",
        "\ue38a": "\u5df2",
        "\ue280": "\u5e74",
        "\ue503": "\u7136",
        "\ue977": "\u90e8",
        "\ue58d": "\u6b64",
        "\uedff": "\u516c",
        "\ue919": "\u7684",
        "\ue8af": "\u76f8",
        "\ueaae": "\u4e16",
        "\ueedf": "\u597d",
        "\uea09": "\u8005",
        "\ue210": "\u6559",
        "\ue281": "\u7269",
        "\ueea6": "\u6240",
        "\uebe6": "\u5176",
        "\ue513": "\u7b2c",
        "\ue1bc": "\u56e0",
        "\uef45": "\u53c8",
        "\ue295": "\u4e66",
        "\ue473": "\u5f53",
        "\ue2b1": "\u5f97",
        "\ue785": "\u60f3",
        "\ue8f4": "\u9053",
        "\ue74e": "\u53ea",
        "\uefb8": "\u5b66",
        "\ue09d": "\u5916",
        "\ue01d": "\u7f8e",
        "\ue5f8": "\u4e3b",
        "\ue7cd": "\u5411",
        "\ue0cc": "\u6b63",
        "\ue55d": "\u4e8c",
        "\uedd5": "\u4ece",
        "\ue4f9": "\u6765",
        "\ue43e": "\u4f5c",
        "\uea3f": "\u767d",
        "\uedf9": "\u5c11",
        "\uea24": "\u5148",
        "\ue2c2": "\u5927",
        "\ue359": "\u4f60",
        "\uea4f": "\u5b9a",
        "\ueaad": "\u8fc7",
        "\ue546": "\u95f4",
        "\ue0b5": "\u6587",
        "\ue950": "\u662f",
        "\ue9dc": "\u7ecf",
        "\uea6e": "\u679c",
        "\ue306": "\u4ee5",
        "\ue47e": "\u4e2a",
        "\ue72a": "\u591a",
        "\ueeae": "\u513f",
        "\uee91": "\u79cd",
        "\ue580": "\u4e9b",
        "\ueb40": "\u524d",
        "\ue88a": "\u770b",
        "\ue140": "\u5f00",
        "\ue920": "\u8bdd",
        "\ueedc": "\u7528",
        "\ue181": "\u4e00",
        "\uee99": "\u80fd",
        "\uea3e": "\u6211",
        "\ue26c": "\u56de",
        "\uea51": "\u53e3",
        "\ue345": "\u4e5f",
        "\ueb54": "\u5bb6",
        "\uede0": "\u4e0e",
        "\uece7": "\u4ee3",
        "\ue868": "\u91cc",
        "\ue742": "\u6210",
        "\ue64d": "\u5bf9",
        "\uebdf": "\u8001",
        "\ue4cc": "\u540d",
        "\uef01": "\u5316",
        "\ued5e": "\u51fa",
        "\ue1b5": "\u628a",
        "\ue903": "\u7b49",
        "\uea44": "\u52a8",
        "\ue0cf": "\u5b9e",
        "\ue82d": "\u53d1",
        "\ue951": "\u884c",
        "\ue47d": "\u8fd8",
        "\ue221": "\u601d",
        "\ue09e": "\u4e48",
        "\uec0f": "\u542c",
        "\uece8": "\u4fbf",
        "\ue5fd": "\u771f",
        "\ue70d": "\u8d77",
        "\ue5fa": "\u800c",
        "\ue71e": "\u5341",
        "\ue328": "\u65f6",
        "\ueb49": "\u6253",
        "\ue62f": "\u65e0",
        "\ue222": "\u751f",
        "\ueb7e": "\u90a3",
        "\ue544": "\u4e24",
        "\ue7ed": "\u6ca1",
        "\ued46": "\u522b",
        "\ue66e": "\u9ad8",
        "\ue069": "\u5973",
        "\uef66": "\u65b9",
        "\ue24e": "\u5b50",
        "\uefaf": "\u5f88",
        "\uefe2": "\u4f1a",
        "\ue3f3": "\u795e",
        "\uef94": "\u540c",
        "\ue907": "\u5173",
        "\ue975": "\u58f0",
        "\ue061": "\u53f2",
        "\ue6ed": "\u6837",
        "\ue8e0": "\u4f53",
        "\ue4e2": "\u7531",
        "\ued06": "\u4eec",
        "\uebfa": "\u4e2d",
        "\ueaf6": "\u56fd",
        "\uea9a": "\u88ab",
        "\uec83": "\u66f4",
        "\ue82a": "\u6709",
        "\uecd8": "\u8981",
        "\uec53": "\u9762",
        "\ueac8": "\u5b83",
        "\uec59": "\u8d70",
        "\uebfd": "\u7b11",
        "\ue7f0": "\u4eba",
        "\ue61f": "\u8bba",
        "\ue942": "\u4e0d",
        "\ue9a4": "\u529b",
        "\ue07e": "\u592a",
        "\ue1c9": "\u56db",
        x: "x",
        "\ue075": "\u7406",
        "\ue9c2": "\u4e0b",
        "\ueacf": "\u518d",
        "\ue6e1": "\u5df1",
        "\uead2": "\u91cd",
        "\ue834": "\u6c11",
        "\ueaea": "\u4e8e",
        "\ue835": "\u897f",
        "\ue3bf": "\u4e86",
        "\ue2ba": "\u5929",
        "\uef24": "\u53bb",
        "\ue9f4": "\u77e5",
        "\uef79": "\u5199",
        "\ue3e6": "\u6700",
        "\ue083": "\u5374",
        "\ued7c": "\u53ef",
        "\ue61e": "\u7ed9",
        "\ue897": "\u7279",
        "\ue05e": "\u5206",
        "\ue3ec": "\u5c06",
        "\ue0ae": "\u5728",
        "\ue9e2": "\u5c0f",
        "\uee98": "\u5fc3",
        "\ue307": "\u4e4b",
        "\uea9e": "\u624d",
        "\ue32e": "\u90fd",
        "\ue0be": "\u6cd5",
    },
    jjwxcfont_005nm: {
        "\ue520": "\u800c",
        "\ue1a7": "\u88ab",
        "\ue322": "\u70b9",
        "\uec78": "\u90fd",
        "\ue9af": "\u65b9",
        "\ue762": "\u5199",
        "\ue5be": "\u90a3",
        "\ue8b1": "\u6765",
        "\ued13": "\u4fbf",
        "\ue574": "\u65b0",
        "\ue9c5": "\u9ad8",
        "\ue812": "\u8bba",
        "\ue3cf": "\u524d",
        "\uecde": "\u4e8c",
        "\ue428": "\u522b",
        "\uee16": "\u8bf4",
        "\ue2f8": "\u751f",
        "\ue7cc": "\u5e76",
        "\ue7e2": "\u51fa",
        "\uef4e": "\u5e74",
        "\ue204": "\u53d1",
        "\uef66": "\u4e3a",
        "\ue197": "\u518d",
        "\ued64": "\u610f",
        "\ue44a": "\u540e",
        "\ue950": "\u6b63",
        "\ue683": "\u4e16",
        "\uefa8": "\u5168",
        "\ue972": "\u5411",
        "\ue38c": "\u7406",
        "\ue866": "\u540c",
        "\ue597": "\u53f2",
        "\ue937": "\u5927",
        "\uecce": "\u73b0",
        "\ue472": "\u611f",
        "\ue537": "\u5df2",
        "\ue603": "\u4f60",
        "\ue869": "\u4e8e",
        "\uee35": "\u7528",
        "\ue55e": "\u597d",
        "\uea23": "\u793e",
        "\ue24d": "\u662f",
        "\ued5a": "\u592a",
        "\ue31a": "\u89c1",
        "\ued95": "\u66f4",
        "\ue1fb": "\u6559",
        "\ue39d": "\u79cd",
        "\ue411": "\u601d",
        "\uee45": "\u5982",
        "\ue2a2": "\u91cc",
        "\ue820": "\u52a8",
        "\uedca": "\u6c14",
        "\ueebe": "\u795e",
        "\ue681": "\u5f88",
        "\uecbc": "\u56e0",
        "\ueb1d": "\u4e66",
        "\ue007": "\u7269",
        "\ue887": "\u95ee",
        "\ue164": "\u6211",
        "\uef77": "\u4e0d",
        "\ue6b3": "\u5f00",
        "\ue514": "\u65f6",
        "\uef62": "\u8fdb",
        "\ue652": "\u7b11",
        "\ue815": "\u624d",
        "\uef89": "\u4ee3",
        "\uebcc": "\u5b9a",
        "\ue592": "\u8bdd",
        "\ue14a": "\u884c",
        "\ue54a": "\u628a",
        "\ue502": "\u7740",
        "\ue16e": "\u8fd9",
        "\ue28c": "\u65e0",
        "\ue667": "\u4e2a",
        "\ue4b2": "\u4e5f",
        "\ue3ff": "\u4f7f",
        "\uebd3": "\u4e0b",
        "\ue3ed": "\u591a",
        "\ue772": "\u7f8e",
        "\ue69c": "\u77e5",
        "\ue7cd": "\u5b83",
        "\ue30a": "\u6210",
        "\ued6c": "\u95f4",
        "\ue6cd": "\u8eab",
        "\uee33": "\u58f0",
        "\ue774": "\u6ca1",
        "\ue97f": "\u56de",
        "\ue1b6": "\u65e5",
        "\ue647": "\u80fd",
        "\ue839": "\u5916",
        "\ueef5": "\u4ee5",
        "\ue15d": "\u6709",
        "\ue691": "\u7ed9",
        "\uebb8": "\u5230",
        "\ue5db": "\u5173",
        "\ue2a9": "\u4e2d",
        "\ued7e": "\u4ec0",
        "\ue390": "\u529b",
        "\ue2b7": "\u5fc3",
        "\uef5f": "\u5730",
        "\uea10": "\u5206",
        "\ue544": "\u4e00",
        "\ue46e": "\u5973",
        "\ue7a5": "\u5176",
        "\ue1b5": "\u9053",
        "\ue72d": "\u4e0a",
        "\ue779": "\u5979",
        "\ue67a": "\u56fd",
        "\ue87a": "\u7b2c",
        "\uefab": "\u5b50",
        "\ue0a8": "\u770b",
        "\ue679": "\u6c11",
        "\ued56": "\u624b",
        "\ue3a4": "\u4eba",
        "\ue722": "\u6027",
        "\uea89": "\u679c",
        "\uef15": "\u90e8",
        "\uef8d": "\u4e0e",
        "\ue3fe": "\u5c31",
        "\ue98f": "\u4f53",
        "\uef29": "\u60c5",
        "\ue660": "\u4e48",
        "\uec39": "\u4e86",
        "\ue283": "\u4f55",
        "\uef38": "\u7ecf",
        "\uedf0": "\u513f",
        "\ue689": "\u6253",
        "\uebd4": "\u5c11",
        "\ue0cc": "\u91cd",
        "\ue9c8": "\u5b9e",
        "\uefc2": "\u773c",
        "\ueb1f": "\u7136",
        "\ue28e": "\u6b64",
        "\ue0a5": "\u4e24",
        "\ue5cd": "\u8d77",
        "\ue55a": "\u53bb",
        "\ue93d": "\u5b66",
        x: "x",
        "\ue91c": "\u6837",
        "\ue6d6": "\u4eec",
        "\ueb97": "\u5bb6",
        "\ued18": "\u4e49",
        "\ue01e": "\u548c",
        "\ue6ca": "\u7b49",
        "\uee65": "\u7531",
        "\ue20e": "\u4e8b",
        "\ue66e": "\u5929",
        "\ue295": "\u8005",
        "\uef60": "\u6700",
        "\ue1c2": "\u4e9b",
        "\ue53e": "\u5bf9",
        "\ue2c7": "\u957f",
        "\ueb17": "\u4ece",
        "\ue8b9": "\u4e3b",
        "\ue5df": "\u5c0f",
        "\uea43": "\u53c8",
        "\ue8e3": "\u5f53",
        "\ue628": "\u6b7b",
        "\uefa9": "\u7684",
        "\ue545": "\u4e4b",
        "\ue80b": "\u897f",
        "\ue742": "\u5341",
        "\ue9ee": "\u5728",
        "\ue8af": "\u5934",
        "\uef01": "\u7279",
        "\ueee7": "\u8fc7",
        "\ue63d": "\u53ef",
        "\ue440": "\u4e09",
        "\ueb7f": "\u771f",
        "\ueb0c": "\u95e8",
        "\uee7a": "\u542c",
        "\uef9d": "\u8fd8",
        "\ue8f8": "\u660e",
        "\ue2b9": "\u53ea",
        "\ue582": "\u5316",
        "\ue182": "\u4f46",
        "\ue5a5": "\u6587",
        "\uec96": "\u9762",
        "\ueff8": "\u8001",
        "\ue58e": "\u4f5c",
        "\uecfc": "\u6240",
        "\ue542": "\u81ea",
        "\ue711": "\u53e3",
        "\uea91": "\u5f97",
        "\ued4e": "\u76f8",
        "\ue1f9": "\u8981",
        "\ue130": "\u672c",
        "\ue964": "\u51e0",
        "\uecff": "\u56db",
        "\ue48a": "\u4f1a",
        "\ue106": "\u5df1",
        "\ueda8": "\u5148",
        "\ue5c6": "\u5374",
        "\ueec2": "\u5c06",
        "\uecf4": "\u516c",
        "\ued41": "\u540d",
        "\uea08": "\u60f3",
        "\ue23b": "\u8d70",
        "\ue7d3": "\u4ed6",
        "\uebdc": "\u6cd5",
        "\ue928": "\u767d",
    },
    jjwxcfont_005s0: {
        "\ue843": "\u6211",
        "\uec7d": "\u4ece",
        "\uec17": "\u77e5",
        "\uefe7": "\u5e74",
        "\ue81c": "\u5c0f",
        "\uead9": "\u4f1a",
        "\ue0bb": "\u56db",
        "\ue39e": "\u4e0b",
        "\ueeb2": "\u7740",
        "\uefbd": "\u65b9",
        "\uee62": "\u8bf4",
        "\ue951": "\u6cd5",
        "\ueb11": "\u90a3",
        "\ue6d0": "\u524d",
        "\ue7e2": "\u73b0",
        "\uee24": "\u548c",
        "\ue17f": "\u51e0",
        "\ued41": "\u80fd",
        "\ue8a3": "\u5b66",
        "\uefd1": "\u7ecf",
        "\ue111": "\u4e4b",
        "\ue45d": "\u88ab",
        "\ueb55": "\u7b2c",
        "\ue74e": "\u5f88",
        "\ued75": "\u601d",
        "\ue42a": "\u65e5",
        "\uef0b": "\u767d",
        "\ue46c": "\u540e",
        "\ue7c3": "\u6b63",
        "\ue365": "\u56de",
        "\ue580": "\u5927",
        "\ue518": "\u4eba",
        "\ue312": "\u6c11",
        "\uee57": "\u8005",
        "\ue3bc": "\u4e8b",
        "\ue706": "\u6ca1",
        "\uea36": "\u4f55",
        "\ue5f7": "\u53d1",
        "\uedc2": "\u4e9b",
        "\ue282": "\u5f53",
        "\ued27": "\u4e0d",
        "\ued64": "\u8d70",
        "\ued01": "\u7f8e",
        "\uee32": "\u4ec0",
        "\uec13": "\u6559",
        "\ue269": "\u95ee",
        "\ue96d": "\u592a",
        "\uee02": "\u5374",
        "\ue3e9": "\u4f5c",
        "\ue07e": "\u5f97",
        "\ue972": "\u6587",
        "\ueef2": "\u4e66",
        "\ue7a5": "\u516c",
        "\ue104": "\u628a",
        "\ue009": "\u8fd8",
        "\ue0e3": "\u4e16",
        "\ue9e3": "\u6765",
        "\ue0cf": "\u5199",
        "\ue9d5": "\u5bf9",
        "\ue077": "\u6837",
        "\uecac": "\u95f4",
        x: "x",
        "\ue137": "\u6210",
        "\ue56c": "\u7269",
        "\ueec5": "\u5730",
        "\ue247": "\u6700",
        "\ued09": "\u79cd",
        "\ue590": "\u8d77",
        "\ue3da": "\u8bdd",
        "\ue292": "\u89c1",
        "\ue1b3": "\u6709",
        "\uecd5": "\u5c31",
        "\uefcb": "\u53c8",
        "\ueaae": "\u4e09",
        "\uec15": "\u542c",
        "\ue2ee": "\u4e86",
        "\ue227": "\u5176",
        "\uec22": "\u5c06",
        "\ued45": "\u8fd9",
        "\ue103": "\u90e8",
        "\ue383": "\u957f",
        "\ue3f4": "\u4ee3",
        "\ue207": "\u6253",
        "\ue918": "\u65f6",
        "\ue2db": "\u884c",
        "\uefc9": "\u4e0a",
        "\ued81": "\u4e3a",
        "\ue1e6": "\u4e48",
        "\ue35a": "\u4e49",
        "\ueeb7": "\u5206",
        "\uee05": "\u8001",
        "\uedfe": "\u793e",
        "\ue113": "\u5173",
        "\ue7a3": "\u5b50",
        "\uea88": "\u5168",
        "\ue20e": "\u66f4",
        "\ue014": "\u7279",
        "\uec67": "\u60f3",
        "\ue678": "\u7531",
        "\ue79d": "\u8eab",
        "\uee5a": "\u4fbf",
        "\uee5c": "\u679c",
        "\uee6b": "\u4e3b",
        "\uef33": "\u4f60",
        "\ue4b2": "\u58f0",
        "\ue335": "\u800c",
        "\uec5f": "\u53ef",
        "\uec3c": "\u5f00",
        "\ue23d": "\u7406",
        "\ue73f": "\u56fd",
        "\ue80e": "\u5148",
        "\ueaca": "\u53ea",
        "\uebb4": "\u624d",
        "\ue031": "\u4e2a",
        "\uef11": "\u4e00",
        "\ue665": "\u5b83",
        "\uecf5": "\u53e3",
        "\ueb38": "\u5411",
        "\ue7e1": "\u6c14",
        "\uefa6": "\u8fdb",
        "\ue0fe": "\u56e0",
        "\ue7dc": "\u90fd",
        "\uec8d": "\u7528",
        "\uedb8": "\u4f53",
        "\uef8e": "\u6b64",
        "\ueadf": "\u624b",
        "\ue09b": "\u53bb",
        "\ue973": "\u5bb6",
        "\ueda7": "\u65b0",
        "\ueced": "\u610f",
        "\ue059": "\u8fc7",
        "\uee9e": "\u5c11",
        "\uebb6": "\u53f2",
        "\uef8d": "\u897f",
        "\ue8ef": "\u4ee5",
        "\ue957": "\u770b",
        "\uef56": "\u5b9e",
        "\ue28a": "\u5929",
        "\ueb50": "\u591a",
        "\ue81b": "\u70b9",
        "\ue724": "\u522b",
        "\ue555": "\u660e",
        "\uea84": "\u7136",
        "\ue9c1": "\u5230",
        "\ue5e1": "\u8bba",
        "\uee8f": "\u76f8",
        "\uede6": "\u795e",
        "\uef1c": "\u5df1",
        "\ue174": "\u4e24",
        "\ueb71": "\u60c5",
        "\ue739": "\u5973",
        "\ueead": "\u611f",
        "\uea14": "\u51fa",
        "\ue421": "\u8981",
        "\ue738": "\u771f",
        "\ue076": "\u7b49",
        "\ued05": "\u9762",
        "\ue714": "\u5728",
        "\uebae": "\u540c",
        "\ueea6": "\u6027",
        "\ue37c": "\u7b11",
        "\ue87d": "\u91cc",
        "\ue0be": "\u518d",
        "\ue93d": "\u4e8c",
        "\ueab2": "\u773c",
        "\ueb86": "\u513f",
        "\ue620": "\u91cd",
        "\ue3d6": "\u5fc3",
        "\uef74": "\u662f",
        "\ue699": "\u81ea",
        "\ued58": "\u5341",
        "\ue523": "\u9053",
        "\ued16": "\u5b9a",
        "\ue53d": "\u597d",
        "\ue02c": "\u4e8e",
        "\uedf6": "\u4e2d",
        "\ue0d9": "\u95e8",
        "\ue4ac": "\u751f",
        "\ue3c1": "\u4f46",
        "\ue3d5": "\u4f7f",
        "\ue0f0": "\u5e76",
        "\ueca1": "\u6b7b",
        "\ue572": "\u9ad8",
        "\ue6c5": "\u672c",
        "\uedab": "\u7ed9",
        "\uee4f": "\u7684",
        "\uea65": "\u65e0",
        "\ue02e": "\u5934",
        "\uebc9": "\u5df2",
        "\uee25": "\u6240",
        "\ue5d4": "\u5316",
        "\ue474": "\u5916",
        "\uec0f": "\u529b",
        "\ue93c": "\u5979",
        "\ue792": "\u4eec",
        "\uecd9": "\u4e5f",
        "\ue8ca": "\u52a8",
        "\ue833": "\u540d",
        "\ueef0": "\u5982",
        "\uecc4": "\u4ed6",
        "\ue6c0": "\u4e0e",
    },
    jjwxcfont_005u3: {
        "\ue8f1": "\u73b0",
        "\ue10a": "\u4e0e",
        "\ue863": "\u9053",
        "\uef42": "\u4f46",
        "\ue09a": "\u6837",
        "\uefad": "\u4e09",
        "\ue867": "\u4e8e",
        "\uef32": "\u4e2a",
        "\ueda8": "\u81ea",
        "\ue1b0": "\u52a8",
        "\ue497": "\u6709",
        "\ue9df": "\u7528",
        "\uea96": "\u5c11",
        "\ue7b3": "\u6240",
        "\ue180": "\u4e49",
        "\ueecb": "\u5927",
        "\ue39a": "\u4e48",
        "\ue6e0": "\u522b",
        "\ue5d8": "\u767d",
        "\ueb16": "\u4f53",
        "\ue636": "\u793e",
        "\ue4af": "\u7269",
        "\ue8bf": "\u4e0a",
        "\ue2b1": "\u4e00",
        "\ue983": "\u884c",
        "\uedf6": "\u8fc7",
        "\uebbf": "\u516c",
        "\ueca4": "\u51fa",
        "\ueefd": "\u80fd",
        "\ue0a2": "\u77e5",
        "\ue0f9": "\u897f",
        "\ue9f3": "\u56e0",
        "\ue376": "\u4e3a",
        "\ue19b": "\u957f",
        "\ue014": "\u4f7f",
        "\ue673": "\u628a",
        "\ued3e": "\u800c",
        "\ue75c": "\u5173",
        "\ue2fa": "\u8fd8",
        "\ue426": "\u6253",
        "\ue753": "\u4eec",
        "\ue31f": "\u5199",
        "\ue261": "\u7f8e",
        "\ue730": "\u542c",
        "\ue68c": "\u4ece",
        "\uea6c": "\u4f1a",
        "\ued95": "\u8fdb",
        "\uede2": "\u88ab",
        "\ue1d0": "\u60f3",
        "\ue705": "\u592a",
        "\ued81": "\u8001",
        "\ue326": "\u60c5",
        "\ue60d": "\u9ad8",
        "\ue824": "\u5b50",
        "\ued93": "\u751f",
        "\ue98c": "\u4f60",
        "\ue785": "\u624d",
        "\ue165": "\u5929",
        "\ue04b": "\u5934",
        "\ue232": "\u56de",
        "\ue790": "\u540e",
        "\ue6e7": "\u540d",
        "\ue5f1": "\u611f",
        "\uea51": "\u548c",
        "\ue283": "\u7279",
        "\ue1b7": "\u591a",
        "\uee49": "\u5c0f",
        "\ue50b": "\u8005",
        "\ue7fd": "\u6b7b",
        "\ue060": "\u65f6",
        "\ue94d": "\u5f53",
        "\uee6a": "\u4e8b",
        "\ue3a5": "\u5730",
        "\uecaa": "\u53c8",
        "\uebb8": "\u9762",
        "\uecca": "\u5df2",
        "\uef0c": "\u8d77",
        "\ue5ec": "\u4e24",
        "\ue4f7": "\u6765",
        "\ue965": "\u6b64",
        "\uedff": "\u672c",
        "\uef1c": "\u5bf9",
        "\ue7fb": "\u4e16",
        "\ue494": "\u770b",
        "\ue69b": "\u65b0",
        "\ue962": "\u6c11",
        "\ue313": "\u7ed9",
        "\uee63": "\u5411",
        "\ue912": "\u53bb",
        "\ue42f": "\u5316",
        "\ue54c": "\u5916",
        "\ue5d2": "\u95ee",
        "\ue245": "\u65b9",
        "\ue53c": "\u7740",
        "\ueabb": "\u662f",
        "\ue402": "\u4eba",
        "\ue77b": "\u7406",
        "\ue441": "\u6c14",
        x: "x",
        "\ue248": "\u53ef",
        "\ue81a": "\u5f97",
        "\ue01d": "\u5df1",
        "\ue1a5": "\u95e8",
        "\ue4bb": "\u4ed6",
        "\ue238": "\u7b49",
        "\ue6b7": "\u8fd9",
        "\ue610": "\u5341",
        "\ue7b2": "\u5b83",
        "\uedda": "\u53f2",
        "\ue71f": "\u513f",
        "\ueaca": "\u5b9a",
        "\uefa0": "\u53d1",
        "\uef75": "\u6b63",
        "\ue481": "\u7684",
        "\ue91e": "\u679c",
        "\ue795": "\u4e8c",
        "\ueab1": "\u8981",
        "\ue223": "\u56fd",
        "\ue8c1": "\u51e0",
        "\ue192": "\u79cd",
        "\ue100": "\u53ea",
        "\ue585": "\u5982",
        "\ue2cd": "\u4e4b",
        "\ue875": "\u91cd",
        "\ue4b2": "\u90fd",
        "\ue8e3": "\u4f55",
        "\ue472": "\u90e8",
        "\ue0d1": "\u4e5f",
        "\uec40": "\u4e3b",
        "\ue30c": "\u6587",
        "\ue937": "\u795e",
        "\ueb39": "\u56db",
        "\ue813": "\u660e",
        "\uea9f": "\u5e76",
        "\uefb1": "\u4f5c",
        "\uec18": "\u4ee3",
        "\ue9d7": "\u4ee5",
        "\ueda7": "\u5206",
        "\ueee4": "\u4e86",
        "\ueaa2": "\u7b2c",
        "\uef64": "\u5148",
        "\ue4e5": "\u5b66",
        "\ue378": "\u6210",
        "\ueb32": "\u7ecf",
        "\ue8a8": "\u6211",
        "\ue4f2": "\u771f",
        "\ue41f": "\u529b",
        "\ue043": "\u5979",
        "\ue8fa": "\u76f8",
        "\uef3f": "\u5c31",
        "\ue95a": "\u53e3",
        "\uec98": "\u773c",
        "\ue9ed": "\u5e74",
        "\ue46d": "\u5176",
        "\ue827": "\u6559",
        "\ue0f0": "\u5bb6",
        "\ue73b": "\u6cd5",
        "\uec2f": "\u6700",
        "\ue5c6": "\u70b9",
        "\ue311": "\u7136",
        "\ue6d9": "\u5c06",
        "\ue1be": "\u6ca1",
        "\uee90": "\u6027",
        "\ue781": "\u95f4",
        "\ue9c8": "\u4fbf",
        "\ue2df": "\u610f",
        "\ue386": "\u597d",
        "\uee00": "\u90a3",
        "\uef71": "\u8d70",
        "\ue2d2": "\u601d",
        "\ued73": "\u5b9e",
        "\ue095": "\u8bdd",
        "\ued13": "\u89c1",
        "\ueb06": "\u5230",
        "\ueaac": "\u4e9b",
        "\ue6f7": "\u624b",
        "\ue002": "\u91cc",
        "\ue774": "\u5374",
        "\ue72e": "\u5f00",
        "\ue4b5": "\u4e0d",
        "\uec2e": "\u5f88",
        "\ue79f": "\u7b11",
        "\ue685": "\u4e66",
        "\ueaec": "\u8bba",
        "\ue2c3": "\u58f0",
        "\uecf8": "\u65e0",
        "\ue0c2": "\u7531",
        "\ue39e": "\u4e2d",
        "\uee58": "\u524d",
        "\ue317": "\u4ec0",
        "\ueea0": "\u5fc3",
        "\ue67d": "\u8eab",
        "\uebf1": "\u4e0b",
        "\ue7e0": "\u66f4",
        "\ue7db": "\u65e5",
        "\ue92e": "\u5168",
        "\uebf6": "\u5973",
        "\uee96": "\u8bf4",
        "\ue854": "\u518d",
        "\uebee": "\u5728",
        "\uecd2": "\u540c",
    },
    jjwxcfont_005xn: {
        "\uecf5": "\u4e2d",
        "\ue5c9": "\u90a3",
        "\ue0d4": "\u56de",
        "\ue681": "\u6ca1",
        "\ue8e2": "\u884c",
        "\ueab4": "\u660e",
        "\ue4a3": "\u91cc",
        "\uee06": "\u5730",
        "\ueba7": "\u4f46",
        "\ueeae": "\u6b64",
        "\ue3b6": "\u7b11",
        "\ueb39": "\u6709",
        "\ue677": "\u5b50",
        "\ue4b0": "\u5916",
        "\uef49": "\u4e48",
        "\ue882": "\u5176",
        "\ue74e": "\u4e66",
        "\uecc9": "\u5c11",
        "\ued9b": "\u4e3a",
        "\uebad": "\u8fdb",
        "\ue602": "\u9ad8",
        "\ued95": "\u679c",
        "\ueeec": "\u7136",
        "\ue97b": "\u7684",
        "\uea2b": "\u65e0",
        "\ue70f": "\u5168",
        "\uecab": "\u53ea",
        "\ue431": "\u8eab",
        "\ue340": "\u4e3b",
        "\uefa9": "\u542c",
        "\ue368": "\u65e5",
        "\ue24b": "\u8981",
        "\ue90c": "\u6b7b",
        "\uebc2": "\u597d",
        "\uea32": "\u5206",
        "\ue4a0": "\u65b9",
        "\ue9bf": "\u4f53",
        "\ue388": "\u4f60",
        "\ue1a8": "\u7531",
        "\ue676": "\u4e0a",
        "\ue56e": "\u9053",
        "\uea74": "\u91cd",
        "\ued41": "\u5982",
        "\ue565": "\u9762",
        "\uea3f": "\u751f",
        "\ueddf": "\u662f",
        "\ue409": "\u95e8",
        "\ue143": "\u56e0",
        "\ue15c": "\u6210",
        "\ue128": "\u5e76",
        "\ue1f8": "\u60c5",
        "\ue9d2": "\u4ee3",
        "\ue584": "\u4eba",
        "\ue8d0": "\u601d",
        "\ue978": "\u7279",
        "\ue063": "\u7528",
        "\ue247": "\u53bb",
        "\ued61": "\u51e0",
        "\ue0c6": "\u5b83",
        "\ue0d2": "\u4e0d",
        "\ue20f": "\u90fd",
        "\ue2a9": "\u773c",
        "\ue69f": "\u76f8",
        "\ue3ad": "\u7406",
        "\ueceb": "\u4e49",
        "\ue4dc": "\u4e2a",
        "\ue261": "\u516c",
        "\uee73": "\u7f8e",
        "\ue810": "\u4ece",
        "\ueeca": "\u4f7f",
        "\ue62c": "\u6c11",
        "\ue028": "\u592a",
        "\ued3b": "\u89c1",
        "\ue25c": "\u8d70",
        "\uee3e": "\u6027",
        "\ue447": "\u522b",
        "\ue929": "\u66f4",
        "\ue520": "\u52a8",
        "\ueb12": "\u5b66",
        "\ue343": "\u8005",
        "\ue326": "\u4e8c",
        "\ue3f6": "\u591a",
        "\ue639": "\u5b9e",
        "\ued98": "\u5f88",
        "\ue9a2": "\u70b9",
        "\ue3ba": "\u4e5f",
        "\uef28": "\u5b9a",
        "\ue7f1": "\u672c",
        "\ue077": "\u6587",
        "\ueebd": "\u4e0e",
        "\ue66d": "\u6cd5",
        "\ue0e2": "\u767d",
        "\ue103": "\u5c31",
        "\ued67": "\u5148",
        "\ue89c": "\u4f55",
        "\uec40": "\u793e",
        "\ue235": "\u610f",
        "\ueff4": "\u611f",
        "\ue750": "\u6700",
        "\ue8b1": "\u957f",
        "\ue9a1": "\u5bb6",
        "\uef75": "\u4ee5",
        "\ue355": "\u7ed9",
        "\ue25a": "\u5374",
        "\ue0ac": "\u60f3",
        "\uec38": "\u5173",
        "\ue10c": "\u53ef",
        "\ue57c": "\u4e00",
        "\uec20": "\u7269",
        "\uef30": "\u4e09",
        "\ue734": "\u8bba",
        "\ue193": "\u5979",
        "\ue5f9": "\u4e4b",
        "\uef77": "\u5411",
        "\ue64a": "\u5bf9",
        "\ue5fd": "\u6559",
        "\ueb81": "\u8001",
        "\ue574": "\u5316",
        "\ue87d": "\u518d",
        "\ueea2": "\u4ed6",
        "\uecd9": "\u8fd8",
        "\ue62a": "\u8fd9",
        "\ue5c3": "\u4ec0",
        "\ue9fa": "\u95ee",
        "\ue68d": "\u79cd",
        "\ueda6": "\u5f97",
        "\ue40d": "\u624d",
        "\ue770": "\u65f6",
        "\ueaca": "\u53d1",
        "\ued56": "\u95f4",
        "\ue690": "\u5341",
        "\ueac9": "\u65b0",
        "\ue6f7": "\u6c14",
        "\ue4f9": "\u4e24",
        "\uecea": "\u5728",
        "\uee45": "\u56fd",
        "\ue98d": "\u548c",
        "\ue9e4": "\u4e16",
        "\uebf9": "\u4e8e",
        "\ue4dd": "\u770b",
        "\ue637": "\u540e",
        "\ue51e": "\u524d",
        "\uefea": "\u6211",
        "\ue59f": "\u795e",
        "\ue18e": "\u5199",
        "\ue2fa": "\u73b0",
        "\ue406": "\u8d77",
        "\ue8ff": "\u5934",
        x: "x",
        "\uea1a": "\u7ecf",
        "\ueeb1": "\u56db",
        "\ueda0": "\u5f00",
        "\ued3d": "\u7b49",
        "\ue216": "\u5973",
        "\ue16c": "\u8fc7",
        "\ue4c9": "\u4e86",
        "\ue2f2": "\u8bf4",
        "\ue00c": "\u5927",
        "\ueffc": "\u513f",
        "\ue6d6": "\u4eec",
        "\ue16f": "\u5f53",
        "\ue199": "\u771f",
        "\ueb38": "\u529b",
        "\ue135": "\u7b2c",
        "\ue047": "\u4e0b",
        "\ue3fd": "\u4fbf",
        "\uec15": "\u4e9b",
        "\ue556": "\u5e74",
        "\ueb5f": "\u90e8",
        "\ueda1": "\u4f1a",
        "\uef4c": "\u6b63",
        "\ue4b9": "\u5df2",
        "\ue9a0": "\u624b",
        "\ue251": "\u88ab",
        "\uee8b": "\u6240",
        "\ue24c": "\u5fc3",
        "\ue0f4": "\u897f",
        "\ue703": "\u80fd",
        "\uee36": "\u6837",
        "\ue133": "\u4e8b",
        "\ued85": "\u58f0",
        "\uef0b": "\u77e5",
        "\ue64f": "\u51fa",
        "\ue1de": "\u7740",
        "\ueadf": "\u53e3",
        "\ueee2": "\u53f2",
        "\ue8c5": "\u5929",
        "\ue149": "\u540d",
        "\uec5a": "\u6765",
        "\uee9c": "\u6253",
        "\ue396": "\u628a",
        "\ue40e": "\u5c06",
        "\ue7ea": "\u4f5c",
        "\ue4c3": "\u5df1",
        "\ued2b": "\u5c0f",
        "\ue411": "\u5230",
        "\ue48a": "\u800c",
        "\ue879": "\u81ea",
        "\ue50d": "\u8bdd",
        "\ue58a": "\u53c8",
        "\ue851": "\u540c",
    },
    jjwxcfont_005yg: {
        "\ueaa9": "\u4e0b",
        "\ue039": "\u7ed9",
        "\ue328": "\u8fc7",
        "\ueacc": "\u4e3a",
        "\uefcd": "\u548c",
        "\ueab3": "\u90e8",
        "\ue714": "\u53ea",
        "\ue0c2": "\u5173",
        "\ued44": "\u6b7b",
        "\ue527": "\u8bdd",
        "\ue050": "\u6210",
        "\ueab9": "\u51fa",
        "\ueb70": "\u6765",
        "\ue57b": "\u4e8e",
        "\ued9e": "\u5b83",
        "\uedf4": "\u957f",
        "\ued9b": "\u624d",
        "\ue1cf": "\u8d70",
        "\ue862": "\u6b64",
        "\ue7ad": "\u4f55",
        "\ue07e": "\u5728",
        "\ue623": "\u884c",
        "\ue9d3": "\u5bb6",
        "\ue532": "\u9ad8",
        "\ue173": "\u5176",
        "\uecea": "\u5206",
        "\ue0c4": "\u65b0",
        "\uebde": "\u4e48",
        "\ue504": "\u4f1a",
        "\ue364": "\u76f8",
        "\ue6f3": "\u628a",
        "\ue931": "\u597d",
        "\ue94f": "\u5929",
        "\uef1d": "\u5927",
        "\ue206": "\u5168",
        "\uebcf": "\u5fc3",
        "\ue070": "\u8981",
        "\ue2d2": "\u7279",
        "\ue756": "\u5f00",
        "\ue3ae": "\u793e",
        "\ue291": "\u4e2a",
        "\ueb8e": "\u601d",
        "\uef8d": "\u80fd",
        "\uece5": "\u4f5c",
        "\ueb8f": "\u4e2d",
        "\ued0b": "\u4e4b",
        "\uee31": "\u4f53",
        "\ue3f7": "\u4ece",
        "\uee1e": "\u5e76",
        "\ue30a": "\u56e0",
        "\ue0e3": "\u65b9",
        "\ue765": "\u6559",
        "\ue677": "\u7269",
        "\ue9fa": "\u4e24",
        "\ue101": "\u7528",
        "\ue4e1": "\u53e3",
        "\uec68": "\u7b49",
        "\ue451": "\u56fd",
        "\ue4ab": "\u91cd",
        "\uea10": "\u4e66",
        "\ue1ff": "\u7ecf",
        "\ue838": "\u89c1",
        "\ue5a4": "\u77e5",
        "\uefa4": "\u56db",
        "\ue177": "\u79cd",
        "\ue164": "\u524d",
        "\ue5bf": "\u5c11",
        "\ue529": "\u53d1",
        "\ued38": "\u8fdb",
        "\uef2d": "\u611f",
        "\ueed8": "\u7b2c",
        "\ueabd": "\u8fd9",
        "\ue3a9": "\u4e86",
        "\ue43a": "\u4e3b",
        "\ueb2f": "\u522b",
        "\ue860": "\u4e9b",
        "\ue316": "\u60f3",
        "\uee21": "\u542c",
        "\ue654": "\u7406",
        "\ueaa5": "\u4fbf",
        "\uec9f": "\u591a",
        "\ueb80": "\u6b63",
        "\uebb0": "\u5199",
        "\uea63": "\u771f",
        "\ueb35": "\u5f53",
        "\uef5b": "\u5230",
        "\ueeb1": "\u4e8c",
        "\ue2ea": "\u4e0d",
        "\ued75": "\u5c0f",
        "\uee42": "\u4e49",
        "\ue9fc": "\u513f",
        "\ue650": "\u9762",
        x: "x",
        "\ue2b7": "\u540e",
        "\ueb63": "\u540c",
        "\ue083": "\u7136",
        "\ue7a1": "\u518d",
        "\ue24d": "\u95f4",
        "\ue560": "\u7531",
        "\ueb81": "\u58f0",
        "\ue00b": "\u4e0a",
        "\ueda4": "\u4ee5",
        "\ue350": "\u8001",
        "\ueeae": "\u5979",
        "\ue0c8": "\u6709",
        "\ue68b": "\u56de",
        "\ueea6": "\u610f",
        "\ue2c8": "\u4e00",
        "\ue142": "\u6587",
        "\ue0bc": "\u7f8e",
        "\ue880": "\u5916",
        "\ueaad": "\u897f",
        "\ue7b1": "\u8eab",
        "\ue824": "\u8bf4",
        "\ue9dd": "\u4eec",
        "\ue21e": "\u4e8b",
        "\ue69c": "\u529b",
        "\ue34e": "\u6027",
        "\ue8bb": "\u795e",
        "\ued3b": "\u540d",
        "\ue375": "\u4f60",
        "\ueec8": "\u4f7f",
        "\ue3af": "\u672c",
        "\ue8b0": "\u773c",
        "\ue464": "\u660e",
        "\uee56": "\u4eba",
        "\ue7b4": "\u5bf9",
        "\ue7ea": "\u6253",
        "\ue2e9": "\u5341",
        "\ueb4c": "\u8bba",
        "\ue24b": "\u53f2",
        "\ue4dd": "\u4ee3",
        "\ue10d": "\u8d77",
        "\ueb1f": "\u6cd5",
        "\ue663": "\u679c",
        "\uefcb": "\u5411",
        "\ue076": "\u5f88",
        "\ue73f": "\u5730",
        "\uebf3": "\u5b50",
        "\ued8e": "\u51e0",
        "\uee38": "\u5df1",
        "\ue028": "\u4f46",
        "\ueeea": "\u60c5",
        "\ueb14": "\u770b",
        "\ue9f6": "\u65e5",
        "\uee06": "\u52a8",
        "\ue047": "\u7b11",
        "\uefbc": "\u624b",
        "\ue63d": "\u8005",
        "\ue272": "\u4e5f",
        "\uefe2": "\u6700",
        "\uec19": "\u5c06",
        "\ue1aa": "\u516c",
        "\ue0fb": "\u5982",
        "\uec42": "\u66f4",
        "\ue984": "\u4e09",
        "\ue823": "\u4ec0",
        "\uecf2": "\u90fd",
        "\uef51": "\u6837",
        "\ue186": "\u6c14",
        "\ue847": "\u6240",
        "\uebd6": "\u592a",
        "\ue1dc": "\u4e0e",
        "\ue5e2": "\u6211",
        "\uefd7": "\u53ef",
        "\ue926": "\u767d",
        "\ue8aa": "\u5c31",
        "\ue65a": "\u5148",
        "\ue450": "\u800c",
        "\ueffa": "\u5374",
        "\ue5ab": "\u5316",
        "\ue6e4": "\u5e74",
        "\ue878": "\u53bb",
        "\uee8b": "\u4ed6",
        "\ue176": "\u5b66",
        "\uee94": "\u90a3",
        "\uecac": "\u6ca1",
        "\ue5c4": "\u7684",
        "\ue5cc": "\u95ee",
        "\ue4c1": "\u5934",
        "\uec66": "\u91cc",
        "\uee3d": "\u662f",
        "\uee4f": "\u9053",
        "\ued36": "\u95e8",
        "\ue062": "\u53c8",
        "\uee1c": "\u88ab",
        "\uef77": "\u7740",
        "\ue021": "\u5b9a",
        "\ueaf2": "\u5df2",
        "\ue16e": "\u5973",
        "\ue80d": "\u5f97",
        "\ue32d": "\u8fd8",
        "\ue086": "\u70b9",
        "\uef30": "\u4e16",
        "\ue9da": "\u65f6",
        "\uea69": "\u65e0",
        "\ueb17": "\u81ea",
        "\uec7a": "\u73b0",
        "\ue3d0": "\u751f",
        "\ue0d3": "\u5b9e",
        "\ue506": "\u6c11",
    },
    jjwxcfont_0063d: {
        "\uee5f": "\u4eec",
        "\ue159": "\u5168",
        "\ueed6": "\u60f3",
        "\ue6e5": "\u4fbf",
        "\ue54a": "\u4e8b",
        "\ue71c": "\u5728",
        "\ue41b": "\u5b9e",
        "\ue891": "\u4e9b",
        "\ue08f": "\u56e0",
        "\ue885": "\u5e74",
        "\ue17f": "\u52a8",
        "\ue219": "\u624d",
        "\uee10": "\u7406",
        "\ue130": "\u5c31",
        "\ue89c": "\u7f8e",
        "\ue673": "\u6210",
        "\ue5a6": "\u5c11",
        "\uee87": "\u660e",
        "\ue643": "\u662f",
        "\ue083": "\u4e0a",
        "\uef8e": "\u624b",
        "\uebaa": "\u8005",
        "\ue89d": "\u7ecf",
        "\ue7e7": "\u4e09",
        "\ueb6d": "\u73b0",
        "\ue96b": "\u513f",
        "\ue300": "\u679c",
        "\ued12": "\u6837",
        "\ueb01": "\u7740",
        "\ue200": "\u7684",
        "\ue04b": "\u5df2",
        "\ue175": "\u4ed6",
        "\ue6c7": "\u4f7f",
        "\uea34": "\u6b64",
        "\ue0f1": "\u65e0",
        "\ue1fb": "\u8fd9",
        "\ue65c": "\u90e8",
        "\ue5e3": "\u5b83",
        "\uefc8": "\u91cd",
        "\ue5ec": "\u5934",
        "\uefec": "\u542c",
        "\uec02": "\u5199",
        "\uec58": "\u770b",
        "\ueb02": "\u4e48",
        "\ueffd": "\u529b",
        "\uef6b": "\u53ea",
        "\ue98d": "\u8bf4",
        "\ueeff": "\u628a",
        "\ue07f": "\u5230",
        "\uea9f": "\u7269",
        "\ue838": "\u516c",
        "\uec29": "\u957f",
        "\ue1a3": "\u672c",
        "\ue27f": "\u751f",
        "\uee7a": "\u5e76",
        "\uec49": "\u7b2c",
        "\ue2c8": "\u53bb",
        "\ue976": "\u9053",
        "\ue5c0": "\u58f0",
        "\uead5": "\u5bf9",
        "\ue6f4": "\u95f4",
        "\ue3a7": "\u4e5f",
        "\ue721": "\u4f60",
        "\ued5f": "\u5916",
        "\uee3c": "\u4e8e",
        "\ue0f7": "\u81ea",
        "\ue3a1": "\u548c",
        "\ue80a": "\u5206",
        "\ue487": "\u6ca1",
        "\ue719": "\u53e3",
        "\ue296": "\u4e8c",
        "\ueece": "\u4ee3",
        "\ue22c": "\u6cd5",
        "\ue5e8": "\u65e5",
        "\ue2f4": "\u597d",
        "\ue6ec": "\u524d",
        "\uec89": "\u95ee",
        "\ue056": "\u6253",
        "\uecbb": "\u5c0f",
        "\ue49e": "\u6700",
        "\uefe5": "\u591a",
        "\ue31c": "\u4eba",
        "\ue595": "\u56de",
        "\ue310": "\u8eab",
        "\ue326": "\u6027",
        "\uee9c": "\u5411",
        "\ue982": "\u610f",
        "\uef26": "\u4ec0",
        "\ue503": "\u5316",
        "\ueea2": "\u77e5",
        "\ue934": "\u8d77",
        "\ue3f2": "\u518d",
        "\ue240": "\u5f00",
        "\uefac": "\u80fd",
        "\ue87e": "\u56fd",
        "\uee65": "\u6559",
        "\uef69": "\u5f88",
        "\uee2d": "\u5341",
        "\ue97f": "\u4e00",
        "\ue84a": "\u65b0",
        "\ue20e": "\u4e24",
        "\ue1c6": "\u90fd",
        "\ue22b": "\u4e4b",
        "\uea56": "\u4f53",
        "\ue334": "\u7279",
        "\ued00": "\u65b9",
        "\uea2f": "\u8bdd",
        "\ueadd": "\u5c06",
        "\uead2": "\u6c11",
        "\ue583": "\u592a",
        "\ue9fb": "\u4e86",
        "\ueec0": "\u540d",
        "\ue2ab": "\u5b50",
        "\ued8e": "\u4ece",
        "\ue3c3": "\u53d1",
        "\ue46d": "\u65f6",
        "\ue0a7": "\u89c1",
        "\ue720": "\u8bba",
        "\ue0f0": "\u4e0b",
        "\uef49": "\u95e8",
        "\ue7d0": "\u4f46",
        "\ue12f": "\u6709",
        "\ue666": "\u8d70",
        "\uefb1": "\u800c",
        "\ue19b": "\u5929",
        "\ue758": "\u53c8",
        "\ueed8": "\u767d",
        "\uebb6": "\u5173",
        "\ue2f0": "\u4e2d",
        "\uee96": "\u6c14",
        "\ue013": "\u6211",
        "\ue5f9": "\u6b63",
        "\ueef6": "\u5973",
        "\ue7fe": "\u79cd",
        "\uedc5": "\u4f5c",
        "\ue482": "\u4e2a",
        "\ue6b2": "\u795e",
        "\ue762": "\u5b9a",
        "\ue3f8": "\u56db",
        "\ueda6": "\u53f2",
        "\ue807": "\u7531",
        "\ue8f8": "\u4ee5",
        "\ue77f": "\u4e3a",
        "\ue929": "\u5176",
        "\uedcf": "\u8001",
        "\ue0fa": "\u601d",
        "\ued3c": "\u6765",
        "\uebe6": "\u6240",
        "\ue76c": "\u53ef",
        "\ueb84": "\u9762",
        "\ue952": "\u4e16",
        x: "x",
        "\ue349": "\u4e3b",
        "\ue98a": "\u540e",
        "\ue59e": "\u7ed9",
        "\uecc1": "\u6b7b",
        "\ue494": "\u8fd8",
        "\ue862": "\u5bb6",
        "\ueb49": "\u9ad8",
        "\ue2d2": "\u522b",
        "\ue83e": "\u884c",
        "\ue14a": "\u51fa",
        "\ue34d": "\u6587",
        "\ue2e8": "\u4f1a",
        "\ue531": "\u5979",
        "\ue5c8": "\u5f97",
        "\uebbc": "\u5b66",
        "\uef08": "\u5148",
        "\uef5f": "\u5f53",
        "\ued0e": "\u7528",
        "\uead3": "\u88ab",
        "\ue9f0": "\u8981",
        "\ueabd": "\u4f55",
        "\ue9e7": "\u66f4",
        "\ue37c": "\u771f",
        "\ue805": "\u5927",
        "\ue6cd": "\u7136",
        "\uee6c": "\u5374",
        "\ue5c1": "\u5982",
        "\ue409": "\u793e",
        "\ue509": "\u5730",
        "\ue1cb": "\u4e0d",
        "\ueeca": "\u70b9",
        "\ue1e4": "\u60c5",
        "\uebd4": "\u8fdb",
        "\uef8f": "\u76f8",
        "\ue5b4": "\u540c",
        "\ue4e0": "\u8fc7",
        "\ue223": "\u5df1",
        "\uee82": "\u7b11",
        "\ueb86": "\u51e0",
        "\ueeb2": "\u91cc",
        "\ue0e7": "\u897f",
        "\ueff2": "\u4e49",
        "\ue50e": "\u4e66",
        "\ue30b": "\u7b49",
        "\ue54d": "\u611f",
        "\ue035": "\u4e0e",
        "\ue6bf": "\u773c",
        "\ue0cb": "\u5fc3",
        "\uebc3": "\u90a3",
    },
    jjwxcfont_0065q: {
        "\ue732": "\u516c",
        "\ue8f2": "\u4f46",
        "\ue962": "\u7b11",
        "\ue34c": "\u767d",
        "\ue194": "\u7528",
        "\uec42": "\u6027",
        "\ue6f2": "\u4fbf",
        "\ueafa": "\u8fdb",
        "\ued73": "\u65b9",
        "\ue515": "\u7269",
        "\uedb2": "\u592a",
        "\ue609": "\u624b",
        "\uec40": "\u4e4b",
        "\uea2b": "\u5b9a",
        "\ue047": "\u601d",
        "\ue421": "\u77e5",
        "\uea23": "\u4e8c",
        "\ue166": "\u6b64",
        "\ue2aa": "\u4e8e",
        "\ue6ed": "\u56db",
        "\uecba": "\u5730",
        "\ue449": "\u7531",
        "\ue54f": "\u5929",
        "\ue0a5": "\u5199",
        "\ueaae": "\u6210",
        "\ue55d": "\u95e8",
        "\ue47a": "\u5f53",
        "\ue622": "\u90fd",
        "\ue617": "\u540c",
        "\ue81e": "\u90a3",
        "\ue094": "\u70b9",
        "\uece2": "\u770b",
        "\ueefa": "\u5973",
        "\uedfb": "\u4e0a",
        "\ueb12": "\u7136",
        "\ued1f": "\u5f97",
        "\ue00c": "\u4e3b",
        "\uef91": "\u4e86",
        "\ueed7": "\u5230",
        "\uef2d": "\u4f53",
        "\ue4b7": "\u8fd9",
        "\ue39c": "\u53ea",
        "\uedf1": "\u5e76",
        "\ue2cc": "\u540d",
        "\ue5ab": "\u7740",
        "\uea39": "\u7f8e",
        "\ue109": "\u8bdd",
        "\ue4e8": "\u81ea",
        "\uedc6": "\u8fc7",
        "\ue0d9": "\u5979",
        "\ue8c5": "\u5728",
        "\ue04a": "\u6587",
        "\ue927": "\u5b83",
        "\ueed9": "\u4e0d",
        "\ue5d4": "\u5bb6",
        "\ue681": "\u597d",
        "\ue3ed": "\u4ed6",
        "\ueb41": "\u591a",
        "\ueb52": "\u5c06",
        "\ueaf1": "\u60f3",
        "\uec00": "\u957f",
        "\ue67d": "\u513f",
        "\uedce": "\u4e16",
        "\ue019": "\u4e2a",
        "\uea42": "\u540e",
        "\ue4fd": "\u5bf9",
        "\ue9b9": "\u53e3",
        "\ue333": "\u6211",
        "\uedd8": "\u4e5f",
        "\ue3c6": "\u60c5",
        "\uef63": "\u679c",
        "\ue399": "\u6559",
        "\ue785": "\u795e",
        "\ue0ab": "\u529b",
        "\ue8dc": "\u4ec0",
        "\ue193": "\u4e2d",
        "\ue50a": "\u773c",
        "\ue0af": "\u4e24",
        "\ueefc": "\u5173",
        "\ue05d": "\u6700",
        "\ue661": "\u65e0",
        "\ue825": "\u76f8",
        "\ue7d0": "\u7b2c",
        "\ue2f3": "\u8005",
        "\uedae": "\u65b0",
        "\ued2f": "\u90e8",
        x: "x",
        "\uebc9": "\u53d1",
        "\ue246": "\u7ed9",
        "\ue533": "\u4f60",
        "\uec9f": "\u548c",
        "\ue4fb": "\u5374",
        "\ue507": "\u800c",
        "\uec24": "\u91cd",
        "\ueee0": "\u95f4",
        "\uee71": "\u51e0",
        "\ue263": "\u5c11",
        "\uefac": "\u5341",
        "\ue51b": "\u8bba",
        "\ue775": "\u56de",
        "\ue5b0": "\u66f4",
        "\ueee7": "\u8981",
        "\ue598": "\u89c1",
        "\ue320": "\u624d",
        "\ue462": "\u4eba",
        "\uecab": "\u7684",
        "\ue149": "\u8bf4",
        "\uefc6": "\u7406",
        "\uec01": "\u5df1",
        "\ueebd": "\u5f00",
        "\ue9c5": "\u6c14",
        "\uec61": "\u611f",
        "\uec52": "\u53ef",
        "\ue963": "\u4f55",
        "\ue0fa": "\u8fd8",
        "\uee42": "\u660e",
        "\uea8e": "\u524d",
        "\ue504": "\u6b7b",
        "\ue7f9": "\u5176",
        "\ue68e": "\u5168",
        "\ue919": "\u53f2",
        "\uef97": "\u672c",
        "\ue926": "\u6709",
        "\ue8bb": "\u5c31",
        "\ue351": "\u6765",
        "\uea74": "\u8d77",
        "\ue38e": "\u5316",
        "\ue0bf": "\u9ad8",
        "\ue3ff": "\u542c",
        "\ue381": "\u5df2",
        "\ue96b": "\u65f6",
        "\ue46f": "\u65e5",
        "\ue621": "\u6cd5",
        "\ue11c": "\u88ab",
        "\ue8d2": "\u6ca1",
        "\ue653": "\u4e0b",
        "\ue871": "\u4e9b",
        "\uea31": "\u5b66",
        "\ue8ca": "\u4e00",
        "\ue0a4": "\u518d",
        "\uedf4": "\u628a",
        "\ue8b7": "\u52a8",
        "\ue6ac": "\u4f1a",
        "\ue466": "\u6837",
        "\ue1ae": "\u793e",
        "\ue5fa": "\u751f",
        "\ue9f8": "\u53c8",
        "\uefe5": "\u5f88",
        "\uef13": "\u4eec",
        "\ue9df": "\u7ecf",
        "\uecef": "\u6c11",
        "\ue506": "\u5916",
        "\ue44e": "\u4e49",
        "\ue675": "\u8001",
        "\ue374": "\u5b50",
        "\ue156": "\u73b0",
        "\ue7f1": "\u8d70",
        "\ue7c5": "\u9762",
        "\ue728": "\u4e66",
        "\ue7ec": "\u95ee",
        "\ue918": "\u4f5c",
        "\ue925": "\u6240",
        "\uec8f": "\u79cd",
        "\ued17": "\u5e74",
        "\uec1f": "\u8eab",
        "\uee05": "\u80fd",
        "\ue3dc": "\u884c",
        "\ue572": "\u6b63",
        "\ue995": "\u5982",
        "\ue992": "\u91cc",
        "\uec60": "\u4e8b",
        "\ue39d": "\u610f",
        "\ue61d": "\u5927",
        "\ued94": "\u4e3a",
        "\ued6f": "\u4e48",
        "\ue97d": "\u662f",
        "\ued18": "\u5206",
        "\uef6b": "\u4ee3",
        "\ue1f8": "\u56fd",
        "\ue20c": "\u5411",
        "\ue1d2": "\u7279",
        "\ue350": "\u5b9e",
        "\ue9d0": "\u6253",
        "\ue93a": "\u4e0e",
        "\uee89": "\u4ece",
        "\ue4c1": "\u51fa",
        "\ueb3b": "\u4ee5",
        "\ue882": "\u522b",
        "\ue7e4": "\u56e0",
        "\ueec6": "\u897f",
        "\ue66e": "\u58f0",
        "\uee4c": "\u771f",
        "\uea5f": "\u4e09",
        "\ue86e": "\u5148",
        "\uef36": "\u7b49",
        "\uedad": "\u5934",
        "\ueb64": "\u5fc3",
        "\ue130": "\u53bb",
        "\ue2ac": "\u5c0f",
        "\ueb8e": "\u9053",
        "\ue8c1": "\u4f7f",
    },
    jjwxcfont_0067u: {
        "\ue3e1": "\u51fa",
        "\ue63c": "\u5c0f",
        "\ue35f": "\u7528",
        "\ue4a0": "\u8fd9",
        "\ue995": "\u6709",
        "\ue481": "\u53c8",
        "\ue0b0": "\u662f",
        "\ue63a": "\u56de",
        "\ue14f": "\u611f",
        "\ue9e0": "\u5c11",
        "\ue3b5": "\u5e74",
        "\ue85e": "\u9053",
        "\ue8bd": "\u88ab",
        "\ue089": "\u4e8e",
        "\ue522": "\u4f46",
        "\ue919": "\u4e8c",
        "\ue90e": "\u5b9a",
        "\ued17": "\u4eba",
        "\ue876": "\u5fc3",
        "\ue92f": "\u8bba",
        "\ue528": "\u53f2",
        "\ue879": "\u4e3b",
        "\uef36": "\u4ed6",
        "\uee29": "\u77e5",
        "\ue877": "\u7b49",
        "\uebe3": "\u8981",
        "\uefeb": "\u4e8b",
        "\uee76": "\u795e",
        "\ue932": "\u4f53",
        "\uefcc": "\u624d",
        "\ue998": "\u5411",
        "\ued43": "\u4e24",
        "\ue240": "\u4e2d",
        "\ue375": "\u884c",
        "\ueaf2": "\u90a3",
        "\uea0e": "\u591a",
        "\uecbc": "\u628a",
        "\ue0c7": "\u529b",
        "\uee32": "\u8001",
        "\ue285": "\u6cd5",
        "\uefb0": "\u51e0",
        "\uea36": "\u4f1a",
        "\ue0fe": "\u5df2",
        "\ue2b7": "\u672c",
        "\ue996": "\u540d",
        "\uea14": "\u5176",
        "\ue423": "\u4fbf",
        "\ue13e": "\u5927",
        "\ue989": "\u53bb",
        "\uec20": "\u89c1",
        "\ued27": "\u6700",
        "\ued9a": "\u4e16",
        "\ue944": "\u4ee5",
        "\ue15a": "\u8bf4",
        "\ueaa8": "\u4e0e",
        "\ue81a": "\u767d",
        "\ue382": "\u5c06",
        "\ue733": "\u4f60",
        "\ued1a": "\u8fdb",
        "\ueb49": "\u6253",
        "\ue3b6": "\u4e00",
        "\ue579": "\u4f55",
        "\ue4b9": "\u751f",
        "\uec54": "\u897f",
        "\ue93b": "\u548c",
        "\ue02d": "\u91cc",
        "\ue263": "\u76f8",
        "\ue51f": "\u6ca1",
        "\uedee": "\u5934",
        "\ue8aa": "\u9762",
        "\ue0af": "\u6b63",
        "\uec7d": "\u540e",
        "\ue69d": "\u524d",
        "\ue65d": "\u5982",
        "\ue8d6": "\u56db",
        "\ue71e": "\u5199",
        "\ue215": "\u81ea",
        "\ueefa": "\u610f",
        "\ueb6b": "\u7ed9",
        "\ueb89": "\u9ad8",
        "\uea95": "\u90e8",
        "\uee4c": "\u5bb6",
        "\ue345": "\u8d70",
        "\ueb42": "\u70b9",
        "\uedd5": "\u5b9e",
        "\ue521": "\u592a",
        "\ue6d7": "\u4e0d",
        "\ueb27": "\u516c",
        "\ue8a3": "\u4e2a",
        "\ue377": "\u7279",
        "\ueab0": "\u5bf9",
        "\ue3e8": "\u6b7b",
        "\ue6e4": "\u91cd",
        "\ue698": "\u65b0",
        "\ue150": "\u4e49",
        "\uec10": "\u7531",
        "\ue1ea": "\u7b11",
        "\ue1b5": "\u95e8",
        "\ue63f": "\u65b9",
        "\ue1f6": "\u7b2c",
        "\ue79a": "\u4e5f",
        "\uef2e": "\u8bdd",
        "\ue269": "\u5230",
        "\ueefb": "\u8d77",
        "\ue2c7": "\u5341",
        "\uef04": "\u60c5",
        "\uefa5": "\u5979",
        "\uea87": "\u770b",
        "\ue740": "\u5f53",
        "\uef86": "\u7ecf",
        "\uee8e": "\u5e76",
        "\ue8f6": "\u7406",
        "\ue9b9": "\u542c",
        "\uee47": "\u6c14",
        "\ue6c7": "\u4ece",
        "\ue778": "\u5f88",
        "\uedbd": "\u5206",
        "\ue1fe": "\u65f6",
        "\ue9da": "\u8fd8",
        "\ued7b": "\u5973",
        "\ue2d0": "\u6210",
        "\ue8d3": "\u8005",
        "\ue01c": "\u7f8e",
        "\uef5f": "\u4e48",
        "\ued30": "\u597d",
        "\ue908": "\u65e5",
        "\ue1c4": "\u5148",
        "\ue9e4": "\u90fd",
        "\ue3f4": "\u52a8",
        "\uec93": "\u5f00",
        "\ued04": "\u5b66",
        "\ueb62": "\u56e0",
        "\ue4fd": "\u6211",
        "\ue5b3": "\u53d1",
        "\uecba": "\u5173",
        "\ue709": "\u679c",
        "\uec40": "\u6027",
        "\uee41": "\u7269",
        "\ue05a": "\u4e9b",
        "\uea6c": "\u5929",
        "\ue476": "\u513f",
        "\ued50": "\u4e0b",
        "\ue9ff": "\u6587",
        "\uebdb": "\u5f97",
        "\uef9d": "\u5730",
        "\ue409": "\u4eec",
        "\ue557": "\u771f",
        "\ueea5": "\u53ea",
        "\ue30e": "\u4e4b",
        "\ue861": "\u660e",
        "\uef9e": "\u5df1",
        "\ue08b": "\u4e09",
        "\ue77c": "\u5316",
        "\uecc1": "\u65e0",
        "\ue9ed": "\u5916",
        "\ue7d1": "\u60f3",
        "\ue9b1": "\u80fd",
        "\ue016": "\u4e66",
        "\ue516": "\u7136",
        "\ue70a": "\u5b50",
        "\ue44d": "\u793e",
        "\ue7c1": "\u58f0",
        "\ueb4b": "\u6b64",
        "\uecdf": "\u4ee3",
        "\ue8f7": "\u53ef",
        "\ue4a7": "\u5374",
        "\uefd2": "\u5c31",
        "\ue282": "\u95ee",
        "\ue6a8": "\u4e3a",
        "\ue824": "\u624b",
        "\ue82f": "\u73b0",
        "\uebeb": "\u4e0a",
        "\ue717": "\u5728",
        "\ue612": "\u7684",
        "\uea6d": "\u79cd",
        "\uef42": "\u7740",
        "\ue4e1": "\u773c",
        "\ue4a5": "\u6765",
        "\ue8c9": "\u95f4",
        "\uec38": "\u6c11",
        "\ueb21": "\u522b",
        "\ueeaa": "\u53e3",
        "\ue855": "\u6240",
        "\uedf5": "\u8fc7",
        "\ue657": "\u4e86",
        "\ue990": "\u56fd",
        "\uee8a": "\u800c",
        "\uebb1": "\u540c",
        "\ue962": "\u8eab",
        "\uebbe": "\u6559",
        "\ueae3": "\u6837",
        "\ue78b": "\u518d",
        "\ue2fe": "\u66f4",
        "\ueccb": "\u601d",
        "\ueb52": "\u957f",
        "\ue1ab": "\u5168",
        "\ueada": "\u5b83",
        "\ue1a0": "\u4ec0",
        "\ue07d": "\u4f7f",
        "\uea35": "\u4f5c",
    },
    jjwxcfont_006as: {
        "\ue139": "\u5728",
        "\ue6d6": "\u8fd8",
        "\uedcc": "\u5bb6",
        "\ue17c": "\u77e5",
        "\uebf5": "\u8fd9",
        "\ue4b7": "\u8fdb",
        "\uea8c": "\u771f",
        "\ue38d": "\u89c1",
        "\ue6e2": "\u73b0",
        "\ue432": "\u7f8e",
        "\ue680": "\u628a",
        "\ue2a1": "\u6b7b",
        "\ue053": "\u6765",
        "\ue2ab": "\u591a",
        "\uee43": "\u5df1",
        "\ueee5": "\u5b9a",
        "\ue83b": "\u542c",
        "\ue497": "\u624b",
        "\uec64": "\u8981",
        "\ue9ea": "\u610f",
        "\ue104": "\u6c14",
        "\uecf0": "\u53f2",
        "\ue45c": "\u7b49",
        "\ue114": "\u7b2c",
        "\uefa4": "\u65e0",
        "\ue7d2": "\u4e4b",
        "\ue831": "\u672c",
        "\ue8a5": "\u5979",
        "\ue5ba": "\u79cd",
        "\ue5d5": "\u6ca1",
        "\ued92": "\u6240",
        "\ue4a5": "\u7ecf",
        "\ue938": "\u5927",
        "\uec21": "\u957f",
        "\ueaf7": "\u4ee5",
        "\ue9ab": "\u4e66",
        "\ue804": "\u5973",
        "\ue516": "\u548c",
        "\ueb76": "\u95ee",
        "\uecd9": "\u773c",
        "\ue715": "\u4e2d",
        "\ueb98": "\u5c11",
        "\uee2d": "\u6587",
        "\ue78b": "\u65e5",
        "\ueec5": "\u60c5",
        "\ue84f": "\u4e8c",
        "\ue3c1": "\u4f7f",
        "\ue68a": "\u4eec",
        "\ue1eb": "\u4f5c",
        "\uef39": "\u8005",
        "\ueb0d": "\u679c",
        "\ue27b": "\u5934",
        "\ueb9e": "\u65b9",
        "\ue0dc": "\u56db",
        "\uebe8": "\u4e0d",
        "\uea46": "\u5168",
        "\ue885": "\u540d",
        "\ueee2": "\u5148",
        "\ue726": "\u5b9e",
        "\uec69": "\u60f3",
        "\uea21": "\u529b",
        "\ue910": "\u5bf9",
        "\ue67a": "\u4f1a",
        "\ue7bf": "\u4f53",
        "\ueb71": "\u597d",
        "\ue235": "\u751f",
        "\uedf6": "\u88ab",
        "\ue49f": "\u4e09",
        "\uee13": "\u4ec0",
        "\ue9a3": "\u5f53",
        "\ue252": "\u53d1",
        "\ue7b6": "\u90a3",
        "\ue305": "\u90e8",
        "\ue82d": "\u518d",
        "\uee6c": "\u4e49",
        "\ueb39": "\u592a",
        "\ue2da": "\u7269",
        "\uef16": "\u4e8e",
        "\ue33b": "\u70b9",
        "\ue116": "\u7ed9",
        "\ue5b6": "\u91cd",
        "\uedae": "\u7136",
        "\ue5f0": "\u8bdd",
        "\uedc7": "\u5929",
        "\uedc1": "\u793e",
        "\ue6f3": "\u5b83",
        "\ue3eb": "\u6559",
        "\uef34": "\u8fc7",
        "\ue9d2": "\u897f",
        "\ue127": "\u6700",
        "\ue95f": "\u4e3a",
        "\ue455": "\u5c06",
        "\ue9a9": "\u8001",
        "\uea19": "\u601d",
        "\ue123": "\u5e76",
        "\uee22": "\u4e0e",
        "\ue889": "\u5982",
        "\ue158": "\u65b0",
        "\uecf4": "\u7740",
        "\uecda": "\u8bf4",
        "\ue058": "\u5e74",
        "\ue018": "\u76f8",
        "\ue421": "\u7406",
        "\ue6af": "\u5f88",
        "\ueeeb": "\u795e",
        "\ue564": "\u4f60",
        "\uee87": "\u513f",
        "\uefc4": "\u6027",
        "\ue833": "\u7531",
        "\ueb08": "\u4ee3",
        "\ueb6b": "\u81ea",
        "\ue7ad": "\u7279",
        "\ue23b": "\u660e",
        "\ue6b5": "\u9053",
        "\ue514": "\u4e24",
        "\uef4a": "\u5c0f",
        "\ue2c2": "\u5316",
        "\ue3ae": "\u4fbf",
        "\ueffb": "\u5730",
        "\ue85c": "\u56fd",
        "\ue7ae": "\u5199",
        "\ueac1": "\u5c31",
        "\ueb1f": "\u524d",
        "\ue39a": "\u4eba",
        "\ue250": "\u770b",
        "\ue9b5": "\u5341",
        "\ueaa4": "\u4e0a",
        "\ued48": "\u4f55",
        "\ueba3": "\u53bb",
        "\uee38": "\u611f",
        "\ue994": "\u4e86",
        "\uea59": "\u5206",
        "\ue99d": "\u5df2",
        "\uecc9": "\u53c8",
        "\ue873": "\u65f6",
        "\uef04": "\u9ad8",
        "\ue579": "\u4e8b",
        "\uedd8": "\u540e",
        "\uef8f": "\u5230",
        "\uec05": "\u95f4",
        "\uef2d": "\u4e00",
        "\ue98b": "\u56e0",
        "\ue66b": "\u5173",
        "\ue2b0": "\u8bba",
        "\ue332": "\u5374",
        "\ue9aa": "\u5176",
        "\ue4da": "\u6211",
        "\ued7d": "\u6210",
        "\ue7e0": "\u6253",
        "\uebbc": "\u53ea",
        "\ueb2c": "\u7684",
        "\ue15f": "\u56de",
        "\ue71b": "\u58f0",
        "\ue1a5": "\u80fd",
        "\ue630": "\u624d",
        "\ue063": "\u90fd",
        "\uec0f": "\u66f4",
        "\ue190": "\u5916",
        "\ue157": "\u8eab",
        "\ue3ed": "\u516c",
        "\ue76d": "\u53ef",
        "\uec65": "\u9762",
        "\ueacd": "\u767d",
        "\ue388": "\u8d77",
        "\uee90": "\u8d70",
        "\ue695": "\u6709",
        "\uefc0": "\u5b50",
        "\uedf7": "\u662f",
        "\ueda1": "\u51fa",
        "\ue3a9": "\u4f46",
        "\uea0d": "\u51e0",
        "\ue19d": "\u5411",
        "\ue989": "\u4e16",
        "\ueefd": "\u4e9b",
        "\ue3aa": "\u6837",
        "\ue96e": "\u6b64",
        "\uee5f": "\u95e8",
        "\ued51": "\u5f97",
        "\ue9dd": "\u52a8",
        "\ue189": "\u53e3",
        "\ued1a": "\u4ece",
        "\ue7d0": "\u6cd5",
        "\ued86": "\u4e48",
        "\ued58": "\u800c",
        "\ue720": "\u5b66",
        "\ue733": "\u884c",
        "\uef52": "\u6b63",
        "\ue7db": "\u5f00",
        "\uea04": "\u4e0b",
        "\uecb6": "\u6c11",
        "\ue4f2": "\u5fc3",
        "\uee49": "\u7528",
        "\ue366": "\u4e5f",
        "\ue4d5": "\u4ed6",
        "\ue1f3": "\u540c",
        "\ueb04": "\u7b11",
        "\ue7d1": "\u4e2a",
        "\uee81": "\u522b",
        "\ue700": "\u91cc",
        "\ue7a6": "\u4e3b",
    },
    jjwxcfont_006dp: {
        "\uebd1": "\u60f3",
        "\ue2e1": "\u5916",
        "\ue413": "\u8eab",
        "\ue32c": "\u7b11",
        "\ue949": "\u5fc3",
        "\ue6bb": "\u7ed9",
        "\ue771": "\u79cd",
        "\uebbc": "\u5c11",
        "\uec39": "\u56de",
        "\ueae7": "\u6765",
        "\ue0cf": "\u5173",
        "\uefe0": "\u56db",
        "\ue3b7": "\u5c06",
        "\ueb91": "\u5c0f",
        "\ue512": "\u5df1",
        "\ue946": "\u9762",
        "\ue970": "\u56e0",
        "\ue40f": "\u5148",
        "\ue8ea": "\u597d",
        "\uee44": "\u89c1",
        "\ue7e0": "\u767d",
        "\ue706": "\u6700",
        "\ue695": "\u5982",
        "\ued20": "\u592a",
        "\uecb2": "\u4e8c",
        "\ued9a": "\u6211",
        "\uee16": "\u4e4b",
        "\ue2be": "\u884c",
        "\uefe6": "\u53ea",
        "\ue756": "\u56d7",
        "\ue03e": "\u90fd",
        "\ued88": "\u5c31",
        "\ueea9": "\u5206",
        "\ued87": "\u6587",
        "\ue014": "\u5374",
        "\ue387": "\u5f88",
        "\uefb9": "\u76f8",
        "\ue2f2": "\u751f",
        "\ue2e4": "\u5b50",
        "\uea9e": "\u5f97",
        "\ue566": "\u800c",
        "\ue1dc": "\u4e48",
        "\ue2f9": "\u5934",
        "\ued1b": "\u90a3",
        "\ue849": "\u4f53",
        "\ue97d": "\u65e0",
        "\ue3fe": "\u5730",
        "\ueffd": "\u5728",
        "\ue2c5": "\u95f4",
        "\ue3cc": "\u56fd",
        "\ue08f": "\u540c",
        "\ue415": "\u4e00",
        "\uebe5": "\u516c",
        "\ue65c": "\u4f60",
        "\uee73": "\u7269",
        "\ue43b": "\u540d",
        "\ue2c3": "\u5341",
        "\ue7e2": "\u4eec",
        "\ue8c3": "\u8d70",
        "\ue565": "\u4e2a",
        "\ue61c": "\u897f",
        "\uef5e": "\u4e16",
        "\uee9b": "\u5b83",
        "\ue2b7": "\u4e0b",
        "\ue5d4": "\u4e8e",
        "\ue797": "\u773c",
        "\ue87c": "\u73b0",
        "\uebf3": "\u8bba",
        "\uefb2": "\u7531",
        "\ueefd": "\u7ecf",
        "\uee02": "\u6b7b",
        "\uef3b": "\u518d",
        "\ueb1e": "\u624d",
        "\ue801": "\u6b63",
        "\ueaff": "\u4ed6",
        "\ue251": "\u6837",
        "\ue5d1": "\u5b9a",
        "\ue633": "\u5df2",
        "\ue963": "\u7f8e",
        "\ue6d0": "\u70b9",
        "\ue98f": "\u4ece",
        "\uec9f": "\u513f",
        "\ue28f": "\u4eba",
        "\ue635": "\u4fbf",
        "\ue1e1": "\u5199",
        "\ue723": "\u7136",
        "\uefc7": "\u81ea",
        "\ue05a": "\u524d",
        "\ue00c": "\u4e8b",
        "\ueb3e": "\u4e9b",
        "\ue384": "\u8bf4",
        "\ue969": "\u8981",
        "\uecce": "\u4e49",
        "\uea6e": "\u4e24",
        "\ue898": "\u6ca1",
        "\ue3fc": "\u4e5f",
        "\uee27": "\u8005",
        "\ue101": "\u53ef",
        "\ue087": "\u4e0d",
        "\ue601": "\u4e09",
        "\ue59e": "\u7b2c",
        "\ue92f": "\u672c",
        "\uefb8": "\u51e0",
        "\ue247": "\u5e76",
        "\ue020": "\u8fd9",
        "\ue2f6": "\u8fd8",
        "\ue167": "\u4ee5",
        "\uec11": "\u4e86",
        "\uefa9": "\u548c",
        "\ue3fb": "\u679c",
        "\ueb78": "\u9ad8",
        "\ue573": "\u4e0e",
        "\ue301": "\u5929",
        "\ue7c3": "\u6253",
        "\uef57": "\u4e66",
        "\ue372": "\u610f",
        "\ue824": "\u52a8",
        "\ue543": "\u95ee",
        "\ue67d": "\u6c11",
        "\ue0d1": "\u6559",
        "\ue802": "\u77e5",
        "\ue7ae": "\u7406",
        "\ue1af": "\u4f1a",
        x: "x",
        "\uecac": "\u53d1",
        "\uebd6": "\u9053",
        "\ue455": "\u628a",
        "\ue31f": "\u6cd5",
        "\ue7c0": "\u91cd",
        "\ueebe": "\u5973",
        "\ue456": "\u624b",
        "\ue79f": "\u542c",
        "\ue8cd": "\u7528",
        "\ue076": "\u53bb",
        "\uee40": "\u8001",
        "\ue8f1": "\u8bdd",
        "\uecba": "\u8fc7",
        "\ue6be": "\u6709",
        "\ueb24": "\u7740",
        "\ue3a2": "\u611f",
        "\ue117": "\u4f5c",
        "\uecda": "\u53c8",
        "\ueff6": "\u60c5",
        "\uefbf": "\u5411",
        "\ueb40": "\u6210",
        "\ueb5c": "\u88ab",
        "\ue52b": "\u5979",
        "\ue499": "\u5b9e",
        "\ue463": "\u957f",
        "\ue9d0": "\u51fa",
        "\uea82": "\u7684",
        "\ueb50": "\u4f7f",
        "\uead2": "\u4f55",
        "\uedc0": "\u5f00",
        "\uece4": "\u5168",
        "\ue8a0": "\u4e0a",
        "\ue397": "\u4ee3",
        "\ue366": "\u6b64",
        "\uecfa": "\u4ec0",
        "\ue63e": "\u65b9",
        "\uea31": "\u660e",
        "\ue17c": "\u8d77",
        "\uec99": "\u80fd",
        "\ue8a6": "\u6240",
        "\ueb75": "\u795e",
        "\ue90d": "\u90e8",
        "\ued5f": "\u771f",
        "\ue606": "\u662f",
        "\ue626": "\u65b0",
        "\uee03": "\u591a",
        "\ue84c": "\u601d",
        "\ueb3c": "\u5316",
        "\ueed6": "\u5bb6",
        "\uea30": "\u5f53",
        "\ue3ed": "\u5bf9",
        "\ue27d": "\u7279",
        "\ue254": "\u4e3a",
        "\ue477": "\u793e",
        "\uee8a": "\u522b",
        "\ue2e2": "\u5176",
        "\uefe2": "\u5230",
        "\ue30d": "\u4f46",
        "\ue126": "\u4e3b",
        "\ue3ea": "\u65e5",
        "\ue50f": "\u5b66",
        "\ue15e": "\u5e74",
        "\ue3dc": "\u53f2",
        "\ued16": "\u66f4",
        "\ue7e9": "\u65f6",
        "\ue8bc": "\u58f0",
        "\ue6a2": "\u5927",
        "\ue170": "\u6c14",
        "\uec42": "\u4e2d",
        "\ue903": "\u540e",
        "\ue9c7": "\u91cc",
        "\ue164": "\u7b49",
        "\uee69": "\u529b",
        "\ue11a": "\u95e8",
        "\uec9d": "\u6027",
        "\ue693": "\u770b",
        "\ue659": "\u8fdb",
    },
    jjwxcfont_006ge: {
        "\ue667": "\u4ed6",
        "\ue7d7": "\u529b",
        "\uea61": "\u5f97",
        "\ue5bb": "\u53c8",
        "\uef17": "\u672c",
        "\ue278": "\u4e3b",
        "\ue44b": "\u5168",
        "\ue0a8": "\u7279",
        "\ue439": "\u8001",
        "\ue805": "\u5b66",
        "\ue501": "\u95ee",
        "\ue6a7": "\u8d70",
        "\ue25f": "\u4e9b",
        "\uebd3": "\u4e8c",
        "\ued20": "\u4f55",
        "\ued88": "\u793e",
        "\ue394": "\u53bb",
        "\ue806": "\u4e49",
        "\ue74f": "\u5c0f",
        "\uedf8": "\u77e5",
        "\uea16": "\u8fd9",
        "\uea9b": "\u8fd8",
        "\ue60d": "\u8d77",
        "\uea1d": "\u91cc",
        "\uebde": "\u518d",
        "\uefa3": "\u4ee5",
        "\uefbe": "\u611f",
        "\ue40c": "\u53ea",
        "\ue83e": "\u6559",
        "\ue144": "\u51fa",
        "\ue973": "\u56e0",
        "\ue94a": "\u773c",
        "\ueb79": "\u6ca1",
        "\uee1a": "\u4e8e",
        "\ued16": "\u516c",
        "\ue831": "\u597d",
        "\ue19a": "\u540c",
        "\ue538": "\u6253",
        "\ue594": "\u4ee3",
        "\ue9e9": "\u4e3a",
        "\ue2a7": "\u53ef",
        "\ue16c": "\u4e0d",
        "\ueb97": "\u610f",
        "\ueced": "\u90e8",
        "\ue31a": "\u4ec0",
        "\ueb05": "\u540d",
        "\ue6e8": "\u5df1",
        "\uee6c": "\u52a8",
        "\ue4b2": "\u770b",
        "\ue650": "\u6700",
        "\ue2d9": "\u5f88",
        "\uef81": "\u7531",
        "\ue698": "\u90a3",
        "\uecc6": "\u56fd",
        "\ueea2": "\u4e8b",
        "\ue100": "\u8eab",
        "\ue524": "\u66f4",
        "\ueff7": "\u6c14",
        "\ue42d": "\u5b83",
        "\ue3e3": "\u5730",
        "\uef36": "\u7b11",
        "\uee23": "\u80fd",
        "\ue1ae": "\u5411",
        "\ue69c": "\u5176",
        "\ue6f4": "\u5c06",
        "\ue627": "\u4e09",
        "\ue7fc": "\u7740",
        "\uea45": "\u8fc7",
        "\uec6b": "\u4eba",
        "\ue591": "\u628a",
        "\uee1d": "\u795e",
        "\ue5d4": "\u5fc3",
        "\ue169": "\u897f",
        "\ued32": "\u6b63",
        "\uef41": "\u6709",
        "\uee33": "\u9ad8",
        "\ue2e9": "\u548c",
        "\ue045": "\u56de",
        "\uebca": "\u8005",
        "\ue49e": "\u4e4b",
        "\ue999": "\u5341",
        "\ue086": "\u5728",
        "\ue0cf": "\u5c11",
        "\ueff8": "\u540e",
        "\uee76": "\u70b9",
        "\ue32b": "\u65f6",
        "\ue2d6": "\u6b64",
        "\ue530": "\u4f5c",
        "\ue970": "\u5e76",
        "\ueea9": "\u91cd",
        "\ue12f": "\u4e48",
        "\ue3b5": "\u624b",
        "\ueca9": "\u56db",
        "\ueb18": "\u767d",
        "\ueeee": "\u5316",
        "\ue720": "\u5982",
        "\ue16a": "\u4e5f",
        "\ueb83": "\u6587",
        "\ue04b": "\u5df2",
        "\ue411": "\u800c",
        "\uea25": "\u522b",
        "\uead5": "\u4e00",
        "\ue59d": "\u5f00",
        "\ue309": "\u7ecf",
        "\ueb29": "\u6b7b",
        "\ue491": "\u76f8",
        "\ueca2": "\u53f2",
        "\ue96c": "\u4e2d",
        "\ue171": "\u4e0b",
        "\ue03d": "\u4e86",
        "\uec2f": "\u6211",
        "\ue7da": "\u8bba",
        "\ue26e": "\u751f",
        "\ue7cb": "\u5199",
        "\ue7ff": "\u7684",
        "\ue732": "\u5bb6",
        "\ue43a": "\u4e2a",
        "\ue7bb": "\u5e74",
        "\ue2a3": "\u6c11",
        "\ue488": "\u5b9e",
        "\ue4b7": "\u4eec",
        "\ue2c1": "\u771f",
        "\ue55e": "\u7136",
        "\ue522": "\u7f8e",
        "\ue8a0": "\u6765",
        "\uef95": "\u4fbf",
        "\ue5db": "\u542c",
        x: "x",
        "\ue889": "\u5929",
        "\ueef3": "\u4f60",
        "\ueb4d": "\u4e16",
        "\ue7d1": "\u7ed9",
        "\uecf8": "\u7b49",
        "\uee05": "\u65e5",
        "\ue200": "\u65e0",
        "\uefa8": "\u4e24",
        "\ue319": "\u5148",
        "\ue91d": "\u592a",
        "\uec27": "\u88ab",
        "\ueff1": "\u6210",
        "\ue8b2": "\u5b9a",
        "\uea55": "\u7269",
        "\uec9d": "\u513f",
        "\ue3cb": "\u8bdd",
        "\uefbf": "\u4f46",
        "\ue7e2": "\u60c5",
        "\ue695": "\u95e8",
        "\uedbb": "\u5b50",
        "\ue35b": "\u624d",
        "\uef3b": "\u524d",
        "\ue91c": "\u95f4",
        "\ue72a": "\u5973",
        "\uef75": "\u6cd5",
        "\ue2f6": "\u957f",
        "\ue710": "\u73b0",
        "\ue701": "\u4e0e",
        "\ue863": "\u7b2c",
        "\ue3be": "\u51e0",
        "\ue4c0": "\u79cd",
        "\ue4c6": "\u56d7",
        "\ue6e7": "\u8bf4",
        "\ue30a": "\u4e0a",
        "\uec23": "\u6837",
        "\ue094": "\u65b9",
        "\ue794": "\u5934",
        "\ued04": "\u90fd",
        "\ue33f": "\u53d1",
        "\uebaa": "\u4ece",
        "\ue925": "\u65b0",
        "\ue02f": "\u679c",
        "\ue32a": "\u60f3",
        "\ue37c": "\u884c",
        "\ue1eb": "\u5230",
        "\ue676": "\u662f",
        "\ue4af": "\u7528",
        "\ue808": "\u5f53",
        "\uedc0": "\u4f7f",
        "\uedcb": "\u591a",
        "\uebe2": "\u5927",
        "\uec79": "\u7406",
        "\ue110": "\u9053",
        "\ue61b": "\u5916",
        "\ue216": "\u4e66",
        "\ue6b7": "\u4f53",
        "\ue920": "\u5206",
        "\uefb5": "\u8fdb",
        "\ue75c": "\u4f1a",
        "\uef86": "\u58f0",
        "\ue13e": "\u6027",
        "\ue67d": "\u5c31",
        "\ued5b": "\u5374",
        "\ue89a": "\u5bf9",
        "\ue917": "\u89c1",
        "\ue43d": "\u6240",
        "\ue0c5": "\u601d",
        "\ue05b": "\u5173",
        "\uee90": "\u81ea",
        "\ue96a": "\u660e",
        "\ue88a": "\u5979",
        "\ue011": "\u8981",
        "\ue93f": "\u9762",
    },
    jjwxcfont_006jq: {
        "\ue65d": "\u591a",
        "\ue864": "\u53ea",
        "\uecb5": "\u5b83",
        "\ue899": "\u548c",
        "\ue790": "\u522b",
        "\ue9d2": "\u5973",
        "\ue491": "\u7ed9",
        "\ue8b5": "\u6253",
        "\ue7d0": "\u5b50",
        "\uef0f": "\u79cd",
        "\ue78a": "\u5199",
        "\ued7f": "\u5e74",
        "\ue7e1": "\u6b64",
        "\ued58": "\u6b63",
        "\ue0b7": "\u6559",
        "\ue70a": "\u6240",
        "\ue0bd": "\u9ad8",
        "\ue79b": "\u5b66",
        "\ue122": "\u90fd",
        "\ue3d5": "\u65e5",
        "\uea38": "\u610f",
        "\ue3e9": "\u5374",
        "\ue481": "\u6587",
        "\uec24": "\u5bb6",
        "\ueaa1": "\u51fa",
        "\uebe9": "\u524d",
        "\ue7df": "\u58f0",
        "\ue492": "\u5934",
        x: "x",
        "\ue2a2": "\u95f4",
        "\ue240": "\u4e2d",
        "\uecbf": "\u624b",
        "\ue539": "\u672c",
        "\ue055": "\u611f",
        "\uef1e": "\u4e4b",
        "\ue252": "\u8fc7",
        "\ue6dc": "\u8001",
        "\ue1c6": "\u5929",
        "\ue9d4": "\u8bf4",
        "\ue47b": "\u8d77",
        "\ueac4": "\u52a8",
        "\ue9aa": "\u5316",
        "\ue80b": "\u6709",
        "\ue9be": "\u80fd",
        "\ueca7": "\u5b9a",
        "\uec12": "\u7528",
        "\ueb4c": "\u4e0b",
        "\ue796": "\u5168",
        "\ue824": "\u7279",
        "\ue375": "\u90a3",
        "\ue614": "\u6211",
        "\ue3f6": "\u793e",
        "\ue6c4": "\u884c",
        "\uee81": "\u516c",
        "\ueefe": "\u7531",
        "\ue2cc": "\u4ee5",
        "\uecd0": "\u65b0",
        "\ue7d5": "\u770b",
        "\ue67a": "\u7684",
        "\ue9c2": "\u540e",
        "\ue1bd": "\u89c1",
        "\ue1c2": "\u4e2a",
        "\ue30b": "\u5927",
        "\ue8d1": "\u5411",
        "\ue467": "\u5341",
        "\ue207": "\u660e",
        "\ued15": "\u5b9e",
        "\ue9a7": "\u4e8b",
        "\ue4aa": "\u65f6",
        "\uea8c": "\u4e09",
        "\uecc9": "\u8005",
        "\ue124": "\u5173",
        "\uebf6": "\u4f60",
        "\uef49": "\u7b2c",
        "\uea44": "\u8fd9",
        "\ue7cb": "\u540d",
        "\ue419": "\u5c31",
        "\ue60b": "\u65e0",
        "\uea69": "\u56d7",
        "\ue91b": "\u800c",
        "\ue963": "\u6700",
        "\ue7b9": "\u9053",
        "\ue193": "\u5979",
        "\ue6b0": "\u53ef",
        "\uea45": "\u4f53",
        "\ue83c": "\u957f",
        "\ueb20": "\u4e8e",
        "\ue8c3": "\u5f97",
        "\ue076": "\u7269",
        "\uedbb": "\u5e76",
        "\uec98": "\u4f7f",
        "\ue8b7": "\u6c14",
        "\ue55e": "\u897f",
        "\ue1a0": "\u773c",
        "\ue70f": "\u53c8",
        "\ue179": "\u4ec0",
        "\ue780": "\u4ee3",
        "\ue33b": "\u5f53",
        "\ued60": "\u4f5c",
        "\ue385": "\u4e3b",
        "\ue23b": "\u5c0f",
        "\uee0d": "\u6027",
        "\ue182": "\u7f8e",
        "\ue3b8": "\u4fbf",
        "\ue829": "\u4e24",
        "\ue928": "\u4e0d",
        "\ue604": "\u91cc",
        "\ue63e": "\u81ea",
        "\uef1c": "\u7740",
        "\ue82e": "\u4ece",
        "\uee3f": "\u91cd",
        "\uedbc": "\u597d",
        "\uebcc": "\u624d",
        "\ued40": "\u53bb",
        "\ueca2": "\u4e48",
        "\uee7d": "\u540c",
        "\uec08": "\u7b11",
        "\ue6a3": "\u628a",
        "\uebf0": "\u4f1a",
        "\uee6d": "\u8eab",
        "\ue50f": "\u6c11",
        "\ue9a5": "\u56fd",
        "\uee59": "\u795e",
        "\uec6e": "\u518d",
        "\ue158": "\u6cd5",
        "\uec9d": "\u5230",
        "\uedc4": "\u6837",
        "\ue69c": "\u7136",
        "\ued18": "\u5c11",
        "\ue506": "\u5916",
        "\ue08b": "\u4e0e",
        "\uebd2": "\u4e49",
        "\uec85": "\u53d1",
        "\ue923": "\u70b9",
        "\ue6cb": "\u5176",
        "\uec50": "\u6b7b",
        "\ue440": "\u90e8",
        "\ue725": "\u5bf9",
        "\ue232": "\u56de",
        "\ue18b": "\u4e5f",
        "\uec14": "\u4e00",
        "\uef92": "\u4eba",
        "\uebe2": "\u662f",
        "\ueb67": "\u5df1",
        "\uef2b": "\u51e0",
        "\uee8b": "\u5730",
        "\uebc3": "\u8bdd",
        "\uea74": "\u5f00",
        "\ue00e": "\u8bba",
        "\ue183": "\u4f46",
        "\ue59f": "\u679c",
        "\ue7ad": "\u95e8",
        "\uecf9": "\u4e66",
        "\ue71f": "\u4e3a",
        "\uec75": "\u56e0",
        "\ue65c": "\u8fd8",
        "\ue977": "\u6765",
        "\uef14": "\u5fc3",
        "\ue24a": "\u4e86",
        "\uef39": "\u4f55",
        "\uecb7": "\u767d",
        "\ue48f": "\u4e16",
        "\uea84": "\u4ed6",
        "\ue3bd": "\u5728",
        "\ue0c0": "\u65b9",
        "\ueda9": "\u601d",
        "\uef9d": "\u9762",
        "\ue54e": "\u4e9b",
        "\ue4ad": "\u592a",
        "\ueb2a": "\u8fdb",
        "\ueb1c": "\u77e5",
        "\ued64": "\u5982",
        "\ue6a1": "\u6ca1",
        "\ueacb": "\u542c",
        "\ue992": "\u5148",
        "\ue784": "\u513f",
        "\ue34b": "\u751f",
        "\ueb39": "\u5df2",
        "\ue27c": "\u5206",
        "\uecfb": "\u60c5",
        "\ue171": "\u7b49",
        "\ue863": "\u7ecf",
        "\uef34": "\u4e0a",
        "\uebe6": "\u5f88",
        "\ue650": "\u88ab",
        "\ue0f9": "\u4e8c",
        "\ue621": "\u6210",
        "\uea20": "\u771f",
        "\uee76": "\u73b0",
        "\ued4a": "\u8d70",
        "\ue579": "\u66f4",
        "\ue695": "\u56db",
        "\ue0c3": "\u8981",
        "\ue05a": "\u4eec",
        "\ue6ef": "\u53f2",
        "\ue560": "\u95ee",
        "\uef7f": "\u7406",
        "\ue63f": "\u60f3",
        "\ue040": "\u5c06",
        "\uef2d": "\u76f8",
        "\ue93e": "\u529b",
    },
    jjwxcfont_006l4: {
        "\ue89b": "\u4f55",
        "\ue7fc": "\u5411",
        "\ue338": "\u7684",
        "\ue8e0": "\u5f88",
        "\ue216": "\u60c5",
        "\ue57a": "\u5148",
        "\ue10f": "\u8fdb",
        "\ue860": "\u56d7",
        "\ueb14": "\u800c",
        "\ue61c": "\u8bf4",
        "\uee20": "\u6cd5",
        "\ue947": "\u6b7b",
        "\ue094": "\u73b0",
        "\ue453": "\u53bb",
        "\ue854": "\u53c8",
        "\ued52": "\u628a",
        "\ued71": "\u8bdd",
        "\ue526": "\u884c",
        "\ue695": "\u5916",
        "\ue5f1": "\u6709",
        "\ue0ae": "\u5e74",
        "\ueed9": "\u5927",
        "\uece4": "\u524d",
        "\ue822": "\u679c",
        "\ued0a": "\u9762",
        "\ue72e": "\u793e",
        "\ue758": "\u5c31",
        "\uea87": "\u8001",
        "\uebac": "\u767d",
        "\ue711": "\u66f4",
        "\ue772": "\u6559",
        "\uec11": "\u4f5c",
        "\ue210": "\u7528",
        "\uebbb": "\u4e0e",
        "\ue26f": "\u5199",
        "\ue4b1": "\u751f",
        "\ueb34": "\u5982",
        "\ue86f": "\u90a3",
        "\ue83e": "\u95ee",
        "\ue5c0": "\u610f",
        "\ue92c": "\u5c0f",
        "\uec2f": "\u4ed6",
        "\ue23f": "\u7406",
        "\uee95": "\u5973",
        "\uea4a": "\u624b",
        "\uea98": "\u601d",
        "\ue2f1": "\u5bf9",
        "\ueeba": "\u53f2",
        "\ue461": "\u4e0d",
        "\ue1bc": "\u591a",
        "\ue610": "\u624d",
        "\uefeb": "\u5929",
        "\uebe8": "\u6210",
        "\ue941": "\u5206",
        "\ueb4e": "\u4e0a",
        "\uec5a": "\u58f0",
        "\ue5de": "\u597d",
        "\ue3b4": "\u51e0",
        "\ue7b7": "\u9ad8",
        "\ueb24": "\u4f1a",
        "\ue60d": "\u6b64",
        "\ue3ec": "\u53d1",
        "\ue4f1": "\u771f",
        "\ue625": "\u7b11",
        "\uee62": "\u5979",
        "\ue280": "\u56de",
        "\ue9ac": "\u513f",
        "\uebb1": "\u5f00",
        "\ue5aa": "\u795e",
        "\uea35": "\u4fbf",
        "\ue25b": "\u897f",
        "\ue49e": "\u8eab",
        "\ue5af": "\u5730",
        "\uea14": "\u8fd8",
        "\ue66b": "\u770b",
        "\ue51d": "\u6837",
        x: "x",
        "\uebaf": "\u4e9b",
        "\ue857": "\u89c1",
        "\uefad": "\u95f4",
        "\ue7e7": "\u542c",
        "\ue128": "\u4e24",
        "\uedb7": "\u540e",
        "\ue137": "\u4f60",
        "\ue882": "\u4f7f",
        "\uef61": "\u5173",
        "\uecc0": "\u6c14",
        "\uef7c": "\u56fd",
        "\ued45": "\u773c",
        "\uee75": "\u4e3a",
        "\ue2b5": "\u4e2a",
        "\ueba2": "\u5c06",
        "\uee10": "\u90fd",
        "\ued2d": "\u516c",
        "\uef52": "\u70b9",
        "\ue8bc": "\u52a8",
        "\ue9a7": "\u5e76",
        "\ueac1": "\u5316",
        "\ueee9": "\u540d",
        "\uedc6": "\u7531",
        "\uee2b": "\u65b0",
        "\ue6d8": "\u4ee3",
        "\ueac0": "\u4e3b",
        "\ued96": "\u4ece",
        "\ueeeb": "\u529b",
        "\ue05d": "\u672c",
        "\ue9b5": "\u5374",
        "\ue464": "\u522b",
        "\ue42c": "\u9053",
        "\ue1da": "\u4e49",
        "\ue80b": "\u90e8",
        "\ue04d": "\u5b50",
        "\ue0e2": "\u8fd9",
        "\ueb9a": "\u662f",
        "\uebd5": "\u4e4b",
        "\uec5b": "\u7740",
        "\ue26a": "\u7f8e",
        "\ue788": "\u5f97",
        "\ue7f6": "\u8bba",
        "\ue661": "\u5b66",
        "\ue24c": "\u4e16",
        "\ue8ca": "\u5934",
        "\ue319": "\u5f53",
        "\ue148": "\u56db",
        "\ue012": "\u5728",
        "\ueb40": "\u4eec",
        "\ue85e": "\u8981",
        "\ue214": "\u4ec0",
        "\uefe9": "\u4f46",
        "\ue4cf": "\u4e0b",
        "\ue58f": "\u5df2",
        "\ue3e9": "\u5df1",
        "\ued1d": "\u592a",
        "\uea39": "\u540c",
        "\ueb77": "\u5168",
        "\ue956": "\u4e8e",
        "\ue341": "\u5b9a",
        "\ue8d8": "\u53ea",
        "\ue70c": "\u5c11",
        "\ue03a": "\u4ee5",
        "\uef8a": "\u4e66",
        "\ued7e": "\u91cc",
        "\uec9e": "\u7269",
        "\ue328": "\u5b9e",
        "\ue7d1": "\u95e8",
        "\ue770": "\u611f",
        "\ue289": "\u4e2d",
        "\ued60": "\u65b9",
        "\uecb8": "\u81ea",
        "\ue46e": "\u8005",
        "\ue3be": "\u53ef",
        "\uefce": "\u4e09",
        "\ue74b": "\u660e",
        "\ueef2": "\u4e8c",
        "\ue7ca": "\u5bb6",
        "\ue58c": "\u4e00",
        "\ue3b8": "\u5341",
        "\ue82b": "\u5230",
        "\ue6bd": "\u80fd",
        "\ueeb1": "\u77e5",
        "\ued86": "\u7ed9",
        "\uebf9": "\u4e5f",
        "\ued41": "\u548c",
        "\uec7f": "\u51fa",
        "\uea96": "\u8d77",
        "\uef76": "\u7b2c",
        "\ue01d": "\u6c11",
        "\ueac6": "\u56e0",
        "\ue126": "\u4e86",
        "\uef80": "\u7279",
        "\ue0f3": "\u4f53",
        "\ue551": "\u6211",
        "\ue070": "\u4e48",
        "\ueaa3": "\u6b63",
        "\ueec3": "\u4e8b",
        "\ue6f5": "\u6ca1",
        "\ue350": "\u5176",
        "\uea66": "\u65f6",
        "\ue568": "\u518d",
        "\ue02e": "\u7b49",
        "\uea4c": "\u79cd",
        "\ue0cd": "\u6700",
        "\uea00": "\u88ab",
        "\ue01b": "\u65e0",
        "\uea71": "\u957f",
        "\ued4d": "\u6253",
        "\ueed3": "\u5fc3",
        "\ue4b7": "\u7ecf",
        "\ue9ab": "\u60f3",
        "\ue774": "\u7136",
        "\uec23": "\u6027",
        "\ueffa": "\u76f8",
        "\ue839": "\u5b83",
        "\uefb4": "\u65e5",
        "\ue794": "\u6240",
        "\uea9d": "\u91cd",
        "\ue889": "\u4eba",
        "\uec75": "\u6587",
        "\uee94": "\u8d70",
        "\ueb97": "\u8fc7",
        "\ue33a": "\u6765",
    },
    jjwxcfont_006p4: {
        "\ue582": "\u56e0",
        "\uefe9": "\u800c",
        "\ue949": "\u6ca1",
        "\ue16f": "\u7136",
        "\ue228": "\u79cd",
        "\ue9d7": "\u751f",
        "\ue522": "\u53ef",
        "\ue486": "\u4f7f",
        "\ue99c": "\u513f",
        "\uedb6": "\u70b9",
        "\ue572": "\u4e0b",
        "\uede8": "\u540d",
        "\ue879": "\u95ee",
        "\ue904": "\u91cc",
        "\ue93c": "\u4ee3",
        "\ueedf": "\u5c11",
        "\uede2": "\u522b",
        "\ue167": "\u6210",
        "\ueccd": "\u4e48",
        "\ue8a3": "\u6559",
        "\ue53f": "\u5916",
        "\ueaa6": "\u4ed6",
        "\ue024": "\u5982",
        "\ue26a": "\u90a3",
        "\ue562": "\u6709",
        "\ue833": "\u4e0d",
        "\ue6ac": "\u7740",
        "\ueca4": "\u5df2",
        "\ueb67": "\u5374",
        "\ue678": "\u91cd",
        "\ue423": "\u5148",
        "\ue5fb": "\u5b66",
        "\ueb14": "\u4e3b",
        "\ue89f": "\u4e49",
        "\ue863": "\u6b63",
        "\uea9b": "\u4f1a",
        "\ued3c": "\u624d",
        "\ue5dc": "\u771f",
        "\ue1f4": "\u5411",
        "\ue909": "\u5f00",
        "\ue6dc": "\u90e8",
        "\ue0a8": "\u4e2d",
        "\ue70a": "\u9762",
        "\ue63a": "\u540c",
        "\ue327": "\u4f53",
        "\ue2b1": "\u5e76",
        "\uebe3": "\u7b11",
        "\ue86e": "\u80fd",
        "\uea29": "\u529b",
        "\uedb4": "\u957f",
        "\uee1d": "\u770b",
        "\ue82b": "\u5316",
        "\uec4f": "\u65b9",
        "\ue3b6": "\u53bb",
        "\ue9b7": "\u5173",
        "\uee53": "\u5927",
        "\ue685": "\u6cd5",
        "\uef9b": "\u8981",
        "\ue4b0": "\u53c8",
        "\ueee2": "\u7ed9",
        "\ue9e8": "\u8005",
        "\ue982": "\u4f60",
        "\ue473": "\u592a",
        "\uebb8": "\u540e",
        "\ue83b": "\u516c",
        "\ue9ac": "\u7531",
        "\uea68": "\u662f",
        "\ueb13": "\u5176",
        "\ue4b1": "\u56db",
        "\ue465": "\u5f88",
        "\uec08": "\u6b64",
        "\ue743": "\u8eab",
        "\ue413": "\u4e66",
        "\ued68": "\u60c5",
        "\ue847": "\u793e",
        "\ue30c": "\u8fd9",
        "\ue1a1": "\u773c",
        "\ueb2f": "\u76f8",
        "\ue101": "\u9053",
        "\uebf0": "\u4eec",
        "\ue203": "\u60f3",
        "\ue34c": "\u660e",
        "\uec36": "\u524d",
        "\uedc3": "\u5b50",
        "\ueeff": "\u7b49",
        "\ued0e": "\u8bba",
        "\uee18": "\u5168",
        "\ue17a": "\u611f",
        "\uec47": "\u8fdb",
        "\ue10d": "\u5730",
        "\ue65c": "\u53ea",
        "\ue6f4": "\u73b0",
        "\ue148": "\u4e4b",
        "\ueabc": "\u7ecf",
        "\uedd4": "\u4e16",
        "\ue2e7": "\u601d",
        "\uee3b": "\u7279",
        "\ue61b": "\u5df1",
        "\uee9e": "\u56de",
        "\ue398": "\u591a",
        x: "x",
        "\ue017": "\u5e74",
        "\ue40d": "\u628a",
        "\ue11b": "\u56d7",
        "\ue61f": "\u4e2a",
        "\ue1bb": "\u52a8",
        "\uea00": "\u8bf4",
        "\ue477": "\u66f4",
        "\ue50c": "\u5bb6",
        "\ue769": "\u51fa",
        "\ue4ae": "\u8bdd",
        "\ueeb0": "\u89c1",
        "\uef8f": "\u7269",
        "\ue391": "\u5206",
        "\uec6b": "\u8fc7",
        "\ue0ad": "\u4ece",
        "\ue51c": "\u6700",
        "\ueea2": "\u8fd8",
        "\ue85c": "\u7b2c",
        "\ue9ef": "\u65e5",
        "\ue3a7": "\u4e3a",
        "\ue60f": "\u4f5c",
        "\uec34": "\u518d",
        "\uef85": "\u8d70",
        "\ue20a": "\u95e8",
        "\ue642": "\u8001",
        "\ue04a": "\u7528",
        "\ue14d": "\u4ec0",
        "\ue4d8": "\u5934",
        "\ue9b4": "\u6587",
        "\uee79": "\u4e9b",
        "\ueac2": "\u6211",
        "\ue0bb": "\u4f55",
        "\ue835": "\u897f",
        "\ue70d": "\u624b",
        "\ue974": "\u9ad8",
        "\ue97a": "\u65f6",
        "\uec3d": "\u4e24",
        "\ue75c": "\u548c",
        "\uef88": "\u6c14",
        "\uedab": "\u5230",
        "\ueee9": "\u4e86",
        "\ue7a1": "\u95f4",
        "\uea18": "\u4e09",
        "\ue30b": "\u51e0",
        "\ue472": "\u5341",
        "\ue446": "\u6b7b",
        "\ueed9": "\u4e8c",
        "\ue266": "\u53d1",
        "\uead0": "\u4e00",
        "\ueef0": "\u5b9a",
        "\uebfc": "\u58f0",
        "\uea5e": "\u6837",
        "\ue5c0": "\u7f8e",
        "\uec39": "\u5f97",
        "\ue9eb": "\u5bf9",
        "\uefc6": "\u4e8b",
        "\uea2f": "\u4e8e",
        "\ue405": "\u5fc3",
        "\ue3aa": "\u6765",
        "\uef9c": "\u5728",
        "\ue073": "\u6253",
        "\uec15": "\u4fbf",
        "\ue77e": "\u6240",
        "\ue5a8": "\u7406",
        "\ue1d2": "\u5c0f",
        "\ue5bb": "\u5199",
        "\ue41c": "\u795e",
        "\ueb93": "\u597d",
        "\ue183": "\u5c31",
        "\ue3a0": "\u65b0",
        "\ue03d": "\u4eba",
        "\ue5f5": "\u5f53",
        "\ue7b9": "\u5979",
        "\ue3af": "\u6027",
        "\ue90f": "\u5973",
        "\uee37": "\u4e0a",
        "\uec00": "\u672c",
        "\ue01a": "\u90fd",
        "\ueaa5": "\u6c11",
        "\ue745": "\u56fd",
        "\ue0e4": "\u81ea",
        "\ue971": "\u5b9e",
        "\uebc4": "\u4e0e",
        "\ueea6": "\u610f",
        "\ue76c": "\u679c",
        "\ue520": "\u5b83",
        "\ue095": "\u767d",
        "\uefc1": "\u65e0",
        "\uef31": "\u4e5f",
        "\uea14": "\u5929",
        "\uea38": "\u88ab",
        "\uee8a": "\u53f2",
        "\ue9c0": "\u884c",
        "\ue8fd": "\u4ee5",
        "\ue0f1": "\u4f46",
        "\uec5e": "\u8d77",
        "\ue4fc": "\u542c",
        "\uedbe": "\u7684",
        "\ue81f": "\u5c06",
        "\uebb4": "\u77e5",
    },
    jjwxcfont_006s5: {
        "\ue7e8": "\u89c1",
        "\ue941": "\u9ad8",
        "\ue79d": "\u7136",
        "\ued7c": "\u8fd8",
        "\uea04": "\u5bf9",
        "\ue10e": "\u4ec0",
        "\uecb1": "\u5fc3",
        "\ueda9": "\u53f2",
        "\ueee3": "\u7528",
        "\ue14e": "\u770b",
        "\ue419": "\u5b66",
        "\ue45c": "\u4f53",
        "\ueaf9": "\u90a3",
        "\uebe6": "\u5c11",
        "\ueeab": "\u5f00",
        "\ue1c2": "\u7ecf",
        "\uea10": "\u53ea",
        "\uec64": "\u6559",
        "\uee95": "\u6709",
        "\ue31a": "\u5173",
        "\ue133": "\u5916",
        "\ue47c": "\u8bdd",
        "\ue848": "\u601d",
        "\ue8e1": "\u540e",
        "\ueb2c": "\u58f0",
        "\ue3bf": "\u88ab",
        "\ue4d7": "\u4ee5",
        "\ue9f4": "\u5374",
        "\ue8be": "\u5b50",
        "\ue812": "\u4f5c",
        "\ue0f7": "\u95e8",
        "\ue571": "\u4e8b",
        "\ue533": "\u56d7",
        "\ue81a": "\u8eab",
        "\ue781": "\u6700",
        "\ue15b": "\u5411",
        "\ue3ef": "\u5168",
        "\ued9e": "\u4e3a",
        "\ue8d5": "\u9053",
        "\uecf3": "\u795e",
        "\ue20e": "\u7b11",
        "\ue935": "\u4e49",
        "\ue077": "\u56fd",
        "\ue26d": "\u70b9",
        "\uecb6": "\u5199",
        "\ue1e8": "\u4e0e",
        "\ueefe": "\u5927",
        "\ue5fd": "\u6b7b",
        "\ue5b8": "\u60f3",
        "\ue41b": "\u771f",
        "\ue650": "\u7531",
        "\ueb93": "\u91cc",
        "\ueb2a": "\u90e8",
        "\ue0cd": "\u628a",
        "\uedc7": "\u522b",
        "\uefa6": "\u5e76",
        "\ue6ee": "\u5c06",
        "\uecac": "\u77e5",
        "\ue916": "\u591a",
        "\ue0c6": "\u4e2a",
        "\ue610": "\u8fd9",
        "\ue016": "\u53d1",
        "\uee39": "\u66f4",
        "\ued0c": "\u597d",
        "\ue4b3": "\u518d",
        "\ue4a0": "\u4e24",
        "\uec72": "\u51fa",
        "\ue8e7": "\u6210",
        "\ue589": "\u5b9a",
        "\ue6ba": "\u8bba",
        "\ue8cb": "\u95ee",
        "\ue22d": "\u79cd",
        "\ueede": "\u5316",
        "\ue798": "\u7279",
        "\uede4": "\u4e0a",
        "\ue491": "\u751f",
        "\ue227": "\u53ef",
        "\uea6b": "\u548c",
        "\ue125": "\u5934",
        "\ue037": "\u6b63",
        "\ue26a": "\u592a",
        "\ue845": "\u6211",
        "\ue903": "\u897f",
        "\ue5ad": "\u4e3b",
        "\uec5f": "\u6837",
        "\ueca7": "\u95f4",
        "\uea8e": "\u5df1",
        "\ue482": "\u8981",
        "\ue300": "\u5973",
        "\ue31c": "\u5c0f",
        "\ue182": "\u513f",
        "\uefd8": "\u65b9",
        "\ue216": "\u4e66",
        "\ue344": "\u5c31",
        "\ue80e": "\u611f",
        "\ue391": "\u76f8",
        "\ue16f": "\u5b9e",
        "\ue0c2": "\u51e0",
        "\ue441": "\u65b0",
        "\uefc5": "\u4e16",
        "\ue696": "\u4e00",
        "\ue7d0": "\u5148",
        "\ue42c": "\u767d",
        "\ue927": "\u6765",
        "\uebe2": "\u7b49",
        "\ue939": "\u5e74",
        "\uef91": "\u5bb6",
        "\uebf0": "\u6587",
        "\ue920": "\u662f",
        "\ue884": "\u5982",
        "\ue817": "\u65f6",
        "\uef8b": "\u53c8",
        "\ue94e": "\u5f97",
        "\uee69": "\u884c",
        "\ue7f9": "\u9762",
        "\ueb12": "\u6240",
        "\ue68e": "\u4e5f",
        "\uef11": "\u52a8",
        "\ue840": "\u4ed6",
        "\ue962": "\u8005",
        "\ue991": "\u4eba",
        "\uea94": "\u8fc7",
        "\ue5bf": "\u81ea",
        "\uefe4": "\u8bf4",
        "\ue308": "\u793e",
        "\ue450": "\u5176",
        "\uea5c": "\u4e2d",
        "\ue379": "\u5730",
        "\ue8f2": "\u56db",
        "\ue978": "\u8d77",
        "\ued2e": "\u672c",
        "\ue532": "\u5929",
        "\ue783": "\u65e0",
        "\ueeaa": "\u4ee3",
        "\uebfa": "\u80fd",
        "\uee36": "\u660e",
        "\uecd0": "\u4fbf",
        "\ue51f": "\u91cd",
        "\ue8b7": "\u610f",
        "\ue17c": "\u6ca1",
        "\ue804": "\u4e0d",
        "\ueb03": "\u773c",
        "\ue8af": "\u5df2",
        "\ued6c": "\u529b",
        "\ueb5c": "\u4e8e",
        "\ue19d": "\u4e48",
        "\ue1b1": "\u6cd5",
        "\ue913": "\u5b83",
        "\ue74f": "\u7f8e",
        "\ue5c7": "\u7b2c",
        "\ue208": "\u4e09",
        "\ue5f7": "\u6c14",
        "\ue87d": "\u60c5",
        "\ueda5": "\u5f88",
        "\ue54e": "\u65e5",
        "\ue865": "\u540c",
        "\ue8fd": "\u8d70",
        "\ue1ab": "\u7684",
        "\uedd9": "\u8001",
        "\ue5d6": "\u73b0",
        "\ue37b": "\u5341",
        "\ued72": "\u4f55",
        "\ue1dd": "\u6b64",
        "\ue4b2": "\u5728",
        "\uef5e": "\u4e86",
        "\ue27d": "\u7406",
        "\ue6f0": "\u7740",
        "\ue3c9": "\u524d",
        "\uefd2": "\u4f46",
        "\ue7c4": "\u4eec",
        "\ueb5a": "\u6027",
        "\ue1b7": "\u5f53",
        "\ueb0a": "\u90fd",
        "\ue6cc": "\u516c",
        "\uef33": "\u4ece",
        "\ue868": "\u56de",
        "\ue31d": "\u6253",
        "\ue694": "\u8fdb",
        "\ue940": "\u5230",
        "\ue72b": "\u679c",
        "\ue752": "\u4e8c",
        "\ue2e9": "\u4f1a",
        "\ue6b3": "\u53bb",
        x: "x",
        "\ue342": "\u540d",
        "\uea05": "\u800c",
        "\ue9bc": "\u56e0",
        "\ue1e9": "\u4f60",
        "\uea46": "\u4e0b",
        "\uec10": "\u7269",
        "\uee51": "\u6c11",
        "\ue117": "\u4e9b",
        "\uee8d": "\u624b",
        "\ue30b": "\u5979",
        "\ue6ec": "\u4f7f",
        "\ueaca": "\u624d",
        "\ue234": "\u5206",
        "\uecd5": "\u7ed9",
        "\ueb3a": "\u542c",
        "\ue1be": "\u957f",
        "\ue6f6": "\u4e4b",
    },
    jjwxcfont_006uw: {
        "\ue889": "\u548c",
        "\ueb2c": "\u88ab",
        "\ue1cc": "\u90fd",
        "\uec9c": "\u4ece",
        "\ueb8e": "\u53f2",
        "\ueb0d": "\u5f53",
        "\ue81f": "\u8eab",
        "\uecaa": "\u773c",
        "\ue73d": "\u4f55",
        "\ue76a": "\u4e09",
        "\ue2d8": "\u8fd8",
        "\ue628": "\u8005",
        "\uebe7": "\u513f",
        "\ued13": "\u5c0f",
        "\ue86c": "\u4e0b",
        "\uea2d": "\u95f4",
        "\ue437": "\u4f5c",
        "\ue86d": "\u77e5",
        "\ue52a": "\u5934",
        "\ue35f": "\u524d",
        "\ueadf": "\u597d",
        "\ue871": "\u7684",
        "\ued8b": "\u53c8",
        "\uecb9": "\u95e8",
        "\ueee9": "\u81ea",
        "\ue674": "\u8bf4",
        "\ue614": "\u4e2a",
        "\ue44a": "\u6211",
        "\ue8b9": "\u53e3",
        "\ue2a0": "\u58f0",
        "\ue1b6": "\u4fbf",
        "\ue032": "\u91cd",
        "\uebaf": "\u4e16",
        "\ue706": "\u4f1a",
        "\ue767": "\u5973",
        "\ue146": "\u5411",
        "\ue3e1": "\u6559",
        "\ue4ca": "\u65f6",
        "\ued10": "\u5927",
        "\uee6e": "\u95ee",
        "\ue1b4": "\u4e0a",
        "\ueb11": "\u624d",
        "\uedb2": "\u5bf9",
        "\ue244": "\u7f8e",
        "\ue392": "\u591a",
        "\uef14": "\u5916",
        "\ue2bd": "\u65b9",
        "\ue443": "\u5e76",
        "\uec01": "\u6b63",
        "\ue564": "\u53bb",
        "\ue251": "\u5c11",
        "\ue793": "\u91cc",
        "\uecdc": "\u53ea",
        "\ue59e": "\u5b50",
        "\ue685": "\u8fdb",
        "\uefb1": "\u770b",
        "\ueaaa": "\u5728",
        "\uec8b": "\u8001",
        "\ue249": "\u6210",
        "\ue028": "\u679c",
        "\ue0d7": "\u7b11",
        "\ue7c8": "\u7406",
        "\uebc7": "\u540e",
        "\ue267": "\u771f",
        "\ue3f3": "\u516c",
        "\uea63": "\u6837",
        "\ue388": "\u7279",
        "\ue277": "\u8d70",
        "\ueae9": "\u60c5",
        "\ue4d9": "\u4ee3",
        "\uebbd": "\u56e0",
        "\ued4c": "\u601d",
        "\ue3c6": "\u53ef",
        "\uee3e": "\u522b",
        "\uef1a": "\u6c11",
        "\ue4ee": "\u5df2",
        "\ue974": "\u52a8",
        "\uec4a": "\u5341",
        "\ue910": "\u8fc7",
        "\ue016": "\u6b7b",
        "\ue9a8": "\u542c",
        "\ue97a": "\u660e",
        "\ueb21": "\u8d77",
        "\uec75": "\u65b0",
        "\uec03": "\u4e9b",
        "\uead9": "\u4eba",
        "\ue9b5": "\u5316",
        "\ueaf7": "\u4f7f",
        "\uebc3": "\u662f",
        "\ue7cd": "\u60f3",
        "\ueaab": "\u76f8",
        "\ue289": "\u80fd",
        "\ue1ca": "\u5f97",
        "\ue712": "\u4e49",
        "\ue517": "\u4e66",
        "\uee00": "\u6253",
        "\ue553": "\u628a",
        "\ue5b2": "\u79cd",
        x: "x",
        "\ue6c5": "\u89c1",
        "\ue202": "\u4e0e",
        "\uea6a": "\u884c",
        "\ue1f9": "\u4ee5",
        "\ue3bb": "\u6765",
        "\uec31": "\u56de",
        "\ue497": "\u611f",
        "\ue4a7": "\u5173",
        "\ue88e": "\u4e0d",
        "\ue69b": "\u70b9",
        "\ue501": "\u8981",
        "\ue1e8": "\u4f60",
        "\uee94": "\u540c",
        "\ue78e": "\u518d",
        "\ueb82": "\u51fa",
        "\ue766": "\u8bba",
        "\uedd1": "\u5b9a",
        "\ue170": "\u7b49",
        "\ueece": "\u66f4",
        "\ueec3": "\u5374",
        "\ue52b": "\u4ec0",
        "\ue13f": "\u8fd9",
        "\uecd2": "\u4e2d",
        "\uea79": "\u800c",
        "\ue716": "\u6240",
        "\uea9c": "\u5b83",
        "\ue012": "\u610f",
        "\ueabc": "\u7531",
        "\ue150": "\u5f00",
        "\ue887": "\u90a3",
        "\ueaef": "\u897f",
        "\ue091": "\u7ecf",
        "\ued05": "\u5230",
        "\ue151": "\u4e8b",
        "\ue371": "\u5b66",
        "\uede7": "\u53d1",
        "\ue19d": "\u5982",
        "\ue424": "\u5b9e",
        "\ue29e": "\u592a",
        "\ue89d": "\u5bb6",
        "\uef65": "\u4ed6",
        "\ue4e4": "\u5c06",
        "\uea67": "\u795e",
        "\uea8e": "\u4e4b",
        "\ue983": "\u767d",
        "\ueb5c": "\u9762",
        "\uee64": "\u5176",
        "\ued80": "\u9053",
        "\ueccd": "\u6027",
        "\uef6d": "\u7b2c",
        "\ue988": "\u8bdd",
        "\ueb4b": "\u65e0",
        "\ueb63": "\u51e0",
        "\uedee": "\u4f53",
        "\uea52": "\u6cd5",
        "\ue25e": "\u90e8",
        "\uedd7": "\u4f46",
        "\ue892": "\u4e24",
        "\ue439": "\u6ca1",
        "\ue093": "\u5e74",
        "\ue819": "\u5199",
        "\ue2b1": "\u5168",
        "\uee31": "\u5730",
        "\ue0dc": "\u540d",
        "\ue6b9": "\u6b64",
        "\ue018": "\u5148",
        "\ue6eb": "\u5929",
        "\ued2c": "\u4e3b",
        "\ue630": "\u5fc3",
        "\ue693": "\u7136",
        "\ue96f": "\u56fd",
        "\ue981": "\u4e86",
        "\ue8d1": "\u6587",
        "\uee02": "\u4e5f",
        "\ue647": "\u5c31",
        "\ue5c6": "\u6709",
        "\ue3ca": "\u56db",
        "\uedad": "\u957f",
        "\uefac": "\u4e48",
        "\ue507": "\u65e5",
        "\ue432": "\u9ad8",
        "\uee4d": "\u6c14",
        "\ue9b6": "\u7740",
        "\ue24f": "\u4e00",
        "\ue923": "\u7ed9",
        "\ued36": "\u793e",
        "\ue5f3": "\u4e8c",
        "\ue824": "\u7528",
        "\ue8ea": "\u672c",
        "\uef4c": "\u5206",
        "\ue155": "\u4eec",
        "\ue51c": "\u751f",
        "\ue1af": "\u6700",
        "\ue0b0": "\u624b",
        "\uebe6": "\u4e8e",
        "\ue5d8": "\u7269",
        "\ue3ad": "\u5f88",
        "\ue567": "\u4e3a",
        "\ue297": "\u73b0",
        "\ue67b": "\u529b",
        "\uee2a": "\u5df1",
        "\ue199": "\u5979",
    },
    jjwxcfont_006x3: {
        "\ued57": "\u5bb6",
        "\ueffb": "\u5916",
        "\ue3d6": "\u6253",
        "\ue327": "\u4ec0",
        "\ued2b": "\u53bb",
        "\ue0bc": "\u8eab",
        "\ue59b": "\u5b83",
        "\ue7d2": "\u5148",
        "\ue771": "\u5f53",
        "\uec9b": "\u628a",
        "\ue9bd": "\u76f8",
        "\ue036": "\u4ee5",
        "\ue080": "\u6b64",
        "\uec32": "\u7ed9",
        "\ueea8": "\u5411",
        "\ue458": "\u4e66",
        "\ue3e3": "\u5927",
        "\ue708": "\u7ecf",
        "\uef64": "\u4f46",
        "\uecd7": "\u7b49",
        "\uef3a": "\u4f5c",
        "\uedf8": "\u80fd",
        "\uee6e": "\u4f60",
        "\ue125": "\u95e8",
        "\uefab": "\u6c11",
        "\ue9d6": "\u4e24",
        "\ue141": "\u4ee3",
        "\uebc0": "\u60c5",
        "\ue003": "\u5341",
        "\ue4b5": "\u8fd9",
        "\ue2d3": "\u5929",
        "\ue211": "\u6765",
        "\ue120": "\u79cd",
        "\ue6d4": "\u795e",
        "\ue376": "\u672c",
        "\uefd4": "\u624d",
        "\ue60f": "\u662f",
        "\ue484": "\u6b7b",
        "\ueb19": "\u7528",
        "\ue6bc": "\u66f4",
        "\ueda6": "\u5f00",
        "\ue9ba": "\u70b9",
        "\ue0fd": "\u8bf4",
        "\ue810": "\u5fc3",
        "\uebfa": "\u610f",
        "\ue90f": "\u6ca1",
        "\ueba7": "\u5df2",
        "\uebca": "\u5c0f",
        "\uee05": "\u5e76",
        "\ue0ac": "\u56fd",
        "\ue3fc": "\u4e0e",
        "\ueb22": "\u4f1a",
        "\uec09": "\u60f3",
        "\ue822": "\u5bf9",
        "\ue225": "\u5df1",
        "\ueba5": "\u5b9e",
        "\ue657": "\u5c31",
        "\uea71": "\u90a3",
        "\ue00f": "\u4e16",
        "\ue981": "\u540d",
        "\ue6ed": "\u6b63",
        "\ue5c2": "\u4ed6",
        "\ue7c3": "\u5b9a",
        "\ue495": "\u95f4",
        "\uef45": "\u8bba",
        "\uee70": "\u51fa",
        "\uefe0": "\u53d1",
        "\ue4c9": "\u7684",
        "\ue616": "\u601d",
        "\ue7e8": "\u7406",
        "\ue536": "\u957f",
        "\ueeec": "\u7f8e",
        "\uecaf": "\u9762",
        "\uede2": "\u5728",
        "\ue219": "\u5c11",
        "\ue8b3": "\u4e9b",
        "\ue46d": "\u522b",
        "\ue2f5": "\u6700",
        "\ue86d": "\u542c",
        "\uee55": "\u540c",
        "\ue0c3": "\u7740",
        "\uee8e": "\u597d",
        "\ue164": "\u7b11",
        "\ue09e": "\u540e",
        "\ue53d": "\u4e48",
        "\ue534": "\u8001",
        "\ue998": "\u65b0",
        "\uec35": "\u65f6",
        "\ue07b": "\u624b",
        "\ue017": "\u51e0",
        "\ue628": "\u6709",
        "\ue730": "\u4ece",
        "\ue161": "\u4e0d",
        "\ue52d": "\u5176",
        "\uedb8": "\u6559",
        "\uedd8": "\u8981",
        "\ue787": "\u4e00",
        "\ue4d1": "\u6c14",
        "\ue69b": "\u773c",
        "\ue518": "\u516c",
        "\ue5f0": "\u524d",
        "\ueec1": "\u91cd",
        "\uea4e": "\u548c",
        "\ue077": "\u4e0b",
        "\ue7fb": "\u65e0",
        "\ued43": "\u660e",
        "\ue723": "\u518d",
        "\ue7fd": "\u793e",
        "\ue19e": "\u53ea",
        "\ued0a": "\u5b66",
        "\ue433": "\u5973",
        "\ue3ce": "\u53f2",
        "\ue1fd": "\u529b",
        "\ue9e0": "\u5e74",
        "\uee91": "\u5168",
        "\ue5a6": "\u7b2c",
        "\ue481": "\u5173",
        "\ue4c6": "\u4f55",
        "\uecea": "\u8fc7",
        "\ue58d": "\u5b50",
        "\ue0c2": "\u4e3b",
        "\ue811": "\u679c",
        "\ue007": "\u4f53",
        "\ue091": "\u5f88",
        "\uef7b": "\u4f7f",
        "\uee84": "\u90e8",
        "\ue7ee": "\u53ef",
        "\ue0f1": "\u4fbf",
        "\ue9c1": "\u52a8",
        "\ue54f": "\u91cc",
        "\uef4c": "\u5934",
        "\ue755": "\u6027",
        "\uea9e": "\u89c1",
        "\ue24f": "\u611f",
        "\ue94e": "\u56db",
        "\uef73": "\u5f97",
        "\ue16a": "\u5982",
        "\uec65": "\u4e0a",
        "\ued17": "\u95ee",
        "\ue2cc": "\u591a",
        "\ue09b": "\u5730",
        "\ue52f": "\u5c06",
        "\ue21b": "\u7136",
        "\ue91e": "\u77e5",
        "\ue9e2": "\u9ad8",
        "\ueb96": "\u6837",
        "\ue9eb": "\u4e5f",
        "\ue452": "\u897f",
        "\ue318": "\u56de",
        "\ue15f": "\u8d70",
        "\ueb2f": "\u6587",
        "\ue348": "\u751f",
        "\ue7ed": "\u88ab",
        "\uea3e": "\u56e0",
        "\ue6c6": "\u4e2a",
        "\ue819": "\u4eec",
        "\ueb82": "\u4e09",
        "\uea83": "\u5374",
        "\ue7a4": "\u8fd8",
        "\uea4c": "\u5199",
        "\uef04": "\u884c",
        "\ue4dc": "\u5979",
        "\ue838": "\u7531",
        "\ue152": "\u5206",
        "\ued48": "\u9053",
        "\ued02": "\u5230",
        "\ueef6": "\u4e8e",
        "\ue569": "\u8fdb",
        "\uef1d": "\u4e2d",
        "\ue1e4": "\u592a",
        "\ue079": "\u6211",
        "\ue790": "\u7279",
        "\ue364": "\u58f0",
        x: "x",
        "\ue865": "\u8bdd",
        "\ueb8c": "\u4eba",
        "\ue5cc": "\u513f",
        "\ue6ab": "\u7269",
        "\uecd6": "\u770b",
        "\ue187": "\u767d",
        "\uea2a": "\u800c",
        "\uea9b": "\u6cd5",
        "\ue72e": "\u6210",
        "\ue629": "\u4e49",
        "\uef93": "\u73b0",
        "\ueaf1": "\u90fd",
        "\uee9b": "\u53c8",
        "\ue4cd": "\u4e8b",
        "\ue2c6": "\u771f",
        "\uebc6": "\u4e86",
        "\uea97": "\u5316",
        "\ued70": "\u8005",
        "\uec64": "\u4e4b",
        "\ue1b2": "\u65b9",
        "\ue806": "\u4e3a",
        "\ueb88": "\u4e8c",
        "\uef4b": "\u81ea",
        "\uef5b": "\u56d7",
        "\ue39a": "\u65e5",
        "\ue905": "\u8d77",
        "\uebc8": "\u6240",
    },
    jjwxcfont_006yy: {
        "\ue830": "\u897f",
        "\ue0f0": "\u65f6",
        "\uebd6": "\u7406",
        "\ue7fa": "\u7b11",
        "\ue374": "\u6709",
        "\uefc2": "\u56e0",
        "\ue7d2": "\u610f",
        "\uef47": "\u516c",
        "\ue43a": "\u51e0",
        "\ue1fe": "\u66f4",
        "\ue31e": "\u6253",
        "\ue0e7": "\u5411",
        "\ue925": "\u540d",
        "\ue695": "\u4f53",
        "\ue8a9": "\u6ca1",
        "\ue382": "\u5fc3",
        "\uecea": "\u91cd",
        "\uec99": "\u5bf9",
        "\ue0e5": "\u53c8",
        "\uebd1": "\u5f88",
        "\uede1": "\u5f53",
        "\uedb9": "\u529b",
        "\ue7b6": "\u65e0",
        "\ue2a2": "\u70b9",
        "\ue3f4": "\u4ee5",
        "\ue530": "\u4ed6",
        "\ueedb": "\u90a3",
        "\ue2dc": "\u5b66",
        "\uef3a": "\u771f",
        "\ue6f3": "\u6765",
        "\ue5fd": "\u4ec0",
        "\ue023": "\u6587",
        "\ueb4d": "\u7684",
        "\ueff3": "\u65e5",
        "\ueac9": "\u9053",
        "\uef9c": "\u4e0d",
        "\uefab": "\u4e0e",
        "\ue077": "\u4fbf",
        "\uef19": "\u6c11",
        "\ue957": "\u4e16",
        "\ue4f0": "\u56db",
        "\ue273": "\u8fdb",
        "\uecc2": "\u592a",
        "\ue2fc": "\u5b50",
        "\ue951": "\u4e8b",
        "\uea26": "\u5e76",
        "\uea19": "\u597d",
        "\uea83": "\u8d77",
        "\ueef1": "\u5916",
        "\ue70d": "\u4e0b",
        "\ue22f": "\u4f55",
        "\ue904": "\u542c",
        "\ueb2e": "\u8001",
        "\ue6e5": "\u4e8c",
        "\uee76": "\u8eab",
        "\ue3e4": "\u8d70",
        "\uef3b": "\u751f",
        "\ue781": "\u53d1",
        "\uef20": "\u52a8",
        "\ue117": "\u5374",
        "\ue067": "\u4f7f",
        "\ue0de": "\u6b64",
        "\ue749": "\u7b49",
        "\ueda0": "\u7136",
        "\ue51c": "\u5973",
        "\ue502": "\u660e",
        "\ue93c": "\u773c",
        "\ue0dc": "\u56d7",
        "\ue03f": "\u800c",
        "\ue3d3": "\u56de",
        "\ue8e2": "\u8bdd",
        "\uee8b": "\u5c0f",
        "\uee77": "\u8bf4",
        "\uefdc": "\u91cc",
        "\ueb61": "\u5c11",
        "\uea48": "\u6cd5",
        "\ue9bb": "\u95f4",
        "\uecfe": "\u4e4b",
        "\ue75d": "\u7ecf",
        "\ue59b": "\u95ee",
        "\ue59f": "\u4e24",
        "\ueb9b": "\u60c5",
        "\ue8c9": "\u90fd",
        "\ue2e6": "\u5206",
        "\ueab8": "\u53f2",
        "\ue633": "\u6c14",
        "\uecd4": "\u4f60",
        "\ue17b": "\u5b9a",
        "\uea7a": "\u60f3",
        "\ue24d": "\u513f",
        "\ued5f": "\u601d",
        "\ue312": "\u6210",
        "\uef51": "\u81ea",
        "\ue123": "\u5927",
        "\ue0d3": "\u53ef",
        "\ue277": "\u5c31",
        "\ue698": "\u7b2c",
        "\uee6c": "\u4e3b",
        "\ued03": "\u884c",
        x: "x",
        "\ueea8": "\u88ab",
        "\ueeb1": "\u5c06",
        "\uee4f": "\u8005",
        "\ue40b": "\u8fc7",
        "\ue8b2": "\u8981",
        "\ueee7": "\u6027",
        "\ue02b": "\u4e66",
        "\ue6c7": "\u77e5",
        "\ueedd": "\u7ed9",
        "\uebb6": "\u540e",
        "\ue685": "\u5173",
        "\ue07a": "\u7528",
        "\ue52b": "\u53ea",
        "\ueb1d": "\u5341",
        "\uef17": "\u80fd",
        "\uea9e": "\u4eec",
        "\ue7dd": "\u4e2d",
        "\ue746": "\u5728",
        "\ue724": "\u5df1",
        "\ue2c4": "\u5199",
        "\ue2a7": "\u5148",
        "\ued2f": "\u7269",
        "\ue87a": "\u591a",
        "\ue471": "\u5982",
        "\ue762": "\u4ee3",
        "\ue95e": "\u5b83",
        "\ue2db": "\u51fa",
        "\ue155": "\u5929",
        "\ue173": "\u524d",
        "\ueb09": "\u58f0",
        "\uefd8": "\u6240",
        "\ue7ed": "\u7531",
        "\ue653": "\u4e0a",
        "\ueb74": "\u4e9b",
        "\ue83e": "\u6211",
        "\ue120": "\u4e48",
        "\ueff6": "\u65b9",
        "\uedb8": "\u8fd9",
        "\ueb8d": "\u767d",
        "\ue8cc": "\u4e3a",
        "\ue4f6": "\u90e8",
        "\ue372": "\u65b0",
        "\ue6d5": "\u5f97",
        "\uea24": "\u795e",
        "\uebc0": "\u56fd",
        "\ue769": "\u5176",
        "\ued34": "\u4e2a",
        "\ue13d": "\u4e09",
        "\ue8b0": "\u7279",
        "\ue092": "\u5979",
        "\ue1ac": "\u5316",
        "\ue34e": "\u662f",
        "\ue702": "\u4f1a",
        "\uef77": "\u611f",
        "\ue090": "\u95e8",
        "\ue5fe": "\u6837",
        "\uef04": "\u793e",
        "\ue2b0": "\u53bb",
        "\ueb79": "\u5e74",
        "\ueab0": "\u6b7b",
        "\ue6e4": "\u5934",
        "\ue2a8": "\u5230",
        "\ueb10": "\u4eba",
        "\uea63": "\u6b63",
        "\ue452": "\u76f8",
        "\ue711": "\u4e5f",
        "\ue720": "\u8fd8",
        "\ue9d7": "\u4e8e",
        "\ue387": "\u5f00",
        "\uef79": "\u9762",
        "\uea60": "\u79cd",
        "\uee9c": "\u4f46",
        "\ue38c": "\u672c",
        "\ue533": "\u5df2",
        "\ueb3e": "\u624b",
        "\ue52d": "\u548c",
        "\uefbc": "\u4e00",
        "\ue9f5": "\u522b",
        "\uefb6": "\u73b0",
        "\ue0f4": "\u7740",
        "\ued9c": "\u957f",
        "\ue699": "\u8bba",
        "\uef81": "\u5168",
        "\ue260": "\u4f5c",
        "\ue5ac": "\u5b9e",
        "\ue09c": "\u4e49",
        "\ue906": "\u679c",
        "\ue17c": "\u5bb6",
        "\ue447": "\u4e86",
        "\ue4e6": "\u9ad8",
        "\ue288": "\u5730",
        "\ueeb3": "\u6559",
        "\ue46c": "\u7f8e",
        "\ue6e2": "\u6700",
        "\ue705": "\u624d",
        "\ue2fd": "\u518d",
        "\uee5c": "\u770b",
        "\uef01": "\u540c",
        "\uec9b": "\u4ece",
        "\ued36": "\u628a",
        "\uebde": "\u89c1",
    },
    jjwxcfont_00725: {
        "\uea91": "\u89c1",
        "\ue1ad": "\u80fd",
        "\ue391": "\u6210",
        "\ue093": "\u5f97",
        "\ue789": "\u6b63",
        "\uee6e": "\u660e",
        "\ued01": "\u90fd",
        "\ueeda": "\u793e",
        "\ue692": "\u8eab",
        "\ueab5": "\u7b49",
        "\uecca": "\u8bba",
        "\ue3ea": "\u4e9b",
        "\ue3ac": "\u5fc3",
        "\ue1ef": "\u4e16",
        "\ue934": "\u5b66",
        "\uee4d": "\u5927",
        "\ue0ca": "\u7528",
        "\ue94c": "\u513f",
        "\uef1e": "\u8fdb",
        "\uee6d": "\u6709",
        "\ued36": "\u4e8e",
        "\ue3ee": "\u7406",
        "\uefe2": "\u4ee3",
        "\ue590": "\u5c31",
        "\ue5df": "\u672c",
        "\ue5bf": "\u4e66",
        "\ue3e3": "\u6cd5",
        "\ue075": "\u52a8",
        "\ued93": "\u524d",
        "\uef0e": "\u4ed6",
        "\ue494": "\u8d70",
        "\ue346": "\u5929",
        "\ue177": "\u601d",
        "\ue8d5": "\u58f0",
        "\ue6c7": "\u5728",
        "\ue42f": "\u5979",
        "\ue241": "\u4f1a",
        "\ue0f8": "\u5982",
        "\uecb1": "\u800c",
        "\ue018": "\u5973",
        "\ue49f": "\u53bb",
        "\ued6d": "\u81ea",
        "\uee72": "\u95ee",
        "\ue7f1": "\u5f88",
        "\ue523": "\u8bf4",
        "\ue341": "\u679c",
        "\ue85d": "\u5c0f",
        "\ue246": "\u53ef",
        "\uea9d": "\u884c",
        "\ue65b": "\u4e09",
        "\ue7d9": "\u897f",
        "\ue914": "\u4e48",
        "\ue784": "\u5e74",
        "\uea98": "\u7269",
        "\ue0e6": "\u6240",
        "\ue63d": "\u60f3",
        "\uee1d": "\u60c5",
        "\ued52": "\u7b2c",
        "\ue244": "\u7b11",
        "\uef12": "\u8d77",
        "\ue962": "\u73b0",
        "\uea9b": "\u6027",
        "\ue1b0": "\u5730",
        "\ue80a": "\u4e2a",
        "\ue7b5": "\u540c",
        "\ue91e": "\u56fd",
        "\ue7c2": "\u5f53",
        "\ue1a9": "\u4e0e",
        "\uef6f": "\u95f4",
        "\ue5f1": "\u4f55",
        "\uec4d": "\u53c8",
        "\ue847": "\u91cc",
        "\ue409": "\u624d",
        "\ueda6": "\u5916",
        "\ue207": "\u540e",
        "\ue376": "\u88ab",
        "\ue59b": "\u4e0b",
        "\ue2b1": "\u56db",
        "\ued8b": "\u65b9",
        "\ue512": "\u5176",
        "\ue650": "\u4e3b",
        "\ue672": "\u516c",
        "\ue3a0": "\u773c",
        "\uef5d": "\u4e5f",
        "\uebca": "\u4e8c",
        "\ue066": "\u542c",
        "\uea05": "\u4fbf",
        "\ue907": "\u4ece",
        "\uec3b": "\u7ed9",
        "\ue639": "\u5c06",
        "\ue53b": "\u9762",
        "\ue54f": "\u4ec0",
        "\ue925": "\u611f",
        "\uef35": "\u7279",
        "\uea27": "\u548c",
        "\ue0da": "\u8bdd",
        "\ue2ca": "\u5e76",
        "\ue8e1": "\u6253",
        "\ue58e": "\u4e00",
        "\ue485": "\u95e8",
        "\ueaf7": "\u4e0a",
        "\ue4fe": "\u56e0",
        "\ue51d": "\u522b",
        "\ue500": "\u53f2",
        "\ue871": "\u767d",
        "\ue063": "\u6c14",
        "\ue2f0": "\u4f5c",
        "\ue655": "\u4e0d",
        "\ue3d0": "\u4e49",
        "\ue597": "\u4e24",
        "\ue876": "\u6587",
        "\ue04e": "\u6b7b",
        "\uefc4": "\u53e3",
        "\ue657": "\u51fa",
        "\uedd3": "\u4e4b",
        "\ueaad": "\u6211",
        "\uef68": "\u4e2d",
        "\ueb57": "\u9053",
        "\ue906": "\u4f7f",
        "\ue0cd": "\u5b83",
        "\ue8a6": "\u5230",
        "\ue351": "\u7531",
        "\ueba9": "\u8fd8",
        "\uef66": "\u5168",
        "\ued7f": "\u5148",
        "\ueb8d": "\u8001",
        "\ue5b7": "\u7136",
        "\ue74b": "\u591a",
        "\ue479": "\u65b0",
        "\ue099": "\u56de",
        "\ued4b": "\u6765",
        "\ue1ba": "\u529b",
        "\ue9bf": "\u65f6",
        "\ue308": "\u6559",
        "\uef73": "\u65e0",
        "\ue745": "\u4f60",
        "\ue418": "\u7684",
        "\ue39e": "\u4ee5",
        "\ue82a": "\u76f8",
        "\ue837": "\u8fc7",
        "\ue431": "\u91cd",
        "\ued94": "\u5c11",
        "\ued9c": "\u5e72",
        "\uec6f": "\u7740",
        "\ue912": "\u51e0",
        "\ue7a2": "\u70b9",
        "\uec51": "\u5173",
        "\ue5f4": "\u5df2",
        "\ue661": "\u8fd9",
        "\ue275": "\u5b9e",
        "\uebb1": "\u5b9a",
        "\ue9dc": "\u771f",
        "\ue078": "\u4eba",
        "\uede6": "\u9ad8",
        "\uef3b": "\u4e3a",
        "\ue345": "\u540d",
        "\ueeb1": "\u5206",
        "\ue2e6": "\u628a",
        "\ue20f": "\u79cd",
        "\ue56b": "\u65e5",
        "\uedb7": "\u8981",
        "\ue8f6": "\u6c11",
        "\uef8e": "\u4e8b",
        "\ue399": "\u610f",
        "\ue544": "\u5b50",
        "\uebbd": "\u5934",
        "\ued5a": "\u6837",
        "\ue9d7": "\u90e8",
        x: "x",
        "\ue2d3": "\u7f8e",
        "\uefc1": "\u4e86",
        "\ue1c1": "\u751f",
        "\ue862": "\u77e5",
        "\ue633": "\u6700",
        "\ue611": "\u662f",
        "\ue009": "\u5f00",
        "\ue26f": "\u5bf9",
        "\ueddb": "\u53ea",
        "\ue79c": "\u770b",
        "\ueca9": "\u8005",
        "\uee01": "\u5316",
        "\uef88": "\u90a3",
        "\uea67": "\u4f53",
        "\ue415": "\u66f4",
        "\uea62": "\u6b64",
        "\uea4f": "\u53d1",
        "\uea70": "\u795e",
        "\ue073": "\u957f",
        "\ue1fe": "\u597d",
        "\ue3bf": "\u5df1",
        "\ue0c5": "\u7ecf",
        "\uedae": "\u4eec",
        "\ue6e6": "\u5411",
        "\ue28f": "\u6ca1",
        "\ue96b": "\u518d",
        "\ueebd": "\u5374",
        "\ue1d8": "\u592a",
        "\ueb1c": "\u5bb6",
        "\uedca": "\u624b",
        "\ue95e": "\u4f46",
        "\uef0b": "\u5199",
    },
    jjwxcfont_0073m: {
        "\uefb9": "\u5168",
        "\ue7ee": "\u4e3b",
        "\ueca6": "\u9762",
        "\ue9a3": "\u70b9",
        "\uefd2": "\u4f60",
        "\ueea7": "\u90e8",
        "\ue58c": "\u90a3",
        "\ue45a": "\u624d",
        "\ueb37": "\u5b9e",
        "\ue174": "\u6253",
        "\ue55e": "\u7ed9",
        "\ue978": "\u80fd",
        "\uefc8": "\u5730",
        "\ue359": "\u7b11",
        "\uebcb": "\u6709",
        "\ue999": "\u592a",
        "\uefc7": "\u5176",
        "\ue2da": "\u56d7",
        "\uee8c": "\u5bf9",
        "\ue096": "\u4e2d",
        "\ue1bf": "\u8eab",
        "\uef00": "\u91cc",
        "\ue500": "\u4e0e",
        "\ue9c5": "\u771f",
        "\ue467": "\u88ab",
        "\ue199": "\u770b",
        "\ue66f": "\u4e0b",
        "\ue0ba": "\u5bb6",
        "\ue03c": "\u5f97",
        "\uef8e": "\u5f53",
        "\uee91": "\u540e",
        "\ue5ba": "\u5206",
        "\ue7c1": "\u60c5",
        "\ue0e3": "\u6ca1",
        "\ue929": "\u65e0",
        "\ue6aa": "\u518d",
        "\uec72": "\u5b66",
        "\uecfb": "\u6837",
        "\ue688": "\u5f00",
        "\uee26": "\u7531",
        "\ue88e": "\u4f55",
        "\uee74": "\u5199",
        "\ue601": "\u53ea",
        "\ue94b": "\u4f7f",
        "\ue1a0": "\u53c8",
        "\ue30f": "\u4ec0",
        "\ue6c2": "\u4e9b",
        "\ue4b1": "\u6b64",
        "\ue917": "\u5b9a",
        "\ueefd": "\u5916",
        "\uedc8": "\u7279",
        "\ueb49": "\u4e8c",
        "\ue792": "\u6cd5",
        "\ue920": "\u624b",
        "\ue1f4": "\u4ee3",
        "\ue549": "\u95f4",
        "\uef8b": "\u5934",
        "\uec8d": "\u773c",
        "\ue8af": "\u8d77",
        "\ue0bf": "\u8fd8",
        "\ue8bc": "\u53bb",
        "\ue8c7": "\u540c",
        "\ue6fc": "\u5c06",
        x: "x",
        "\ued4d": "\u679c",
        "\ued4e": "\u4f53",
        "\ue9f4": "\u767d",
        "\ue747": "\u5374",
        "\uef6d": "\u73b0",
        "\ue687": "\u8d70",
        "\ue1e0": "\u516c",
        "\ueb8c": "\u51e0",
        "\ue510": "\u7740",
        "\ue962": "\u524d",
        "\ue6f9": "\u6c14",
        "\ue7ec": "\u5316",
        "\uea8d": "\u58f0",
        "\ue932": "\u5927",
        "\ue1be": "\u81ea",
        "\ue2a6": "\u8fd9",
        "\uea09": "\u8005",
        "\ue9a6": "\u6700",
        "\ue298": "\u5230",
        "\ue7b3": "\u751f",
        "\ueb36": "\u662f",
        "\ue4e9": "\u6211",
        "\ue24c": "\u4e00",
        "\ue861": "\u76f8",
        "\ue71b": "\u522b",
        "\ueb1b": "\u5341",
        "\ue069": "\u91cd",
        "\ue8fa": "\u65b0",
        "\ue427": "\u7528",
        "\uee7a": "\u7f8e",
        "\ue80e": "\u5df2",
        "\ue392": "\u95e8",
        "\ueb6f": "\u65f6",
        "\ueb0e": "\u4e0d",
        "\ue881": "\u6027",
        "\ueb5b": "\u5c31",
        "\ueda4": "\u7269",
        "\ue794": "\u4e3a",
        "\uee7e": "\u4ee5",
        "\ue1bc": "\u8fdb",
        "\ue8f2": "\u79cd",
        "\ue8c0": "\u56e0",
        "\uefc3": "\u5df1",
        "\ue72f": "\u897f",
        "\uef09": "\u6587",
        "\ue7d2": "\u53ef",
        "\ue871": "\u89c1",
        "\ue996": "\u4e8e",
        "\uea52": "\u53d1",
        "\ue6b2": "\u7ecf",
        "\ueac4": "\u6b7b",
        "\ue49c": "\u8bba",
        "\ue2c9": "\u4f1a",
        "\ueb8f": "\u4e24",
        "\ue696": "\u4eec",
        "\ue5c8": "\u77e5",
        "\ue6e3": "\u8bf4",
        "\ue92d": "\u4e2a",
        "\uefda": "\u9053",
        "\ueb12": "\u5e74",
        "\ue44b": "\u7b2c",
        "\uef32": "\u4e49",
        "\ue4a9": "\u4e48",
        "\ue7bc": "\u4e86",
        "\ue6f4": "\u60f3",
        "\ued72": "\u548c",
        "\ue969": "\u540d",
        "\ue732": "\u51fa",
        "\uee68": "\u6765",
        "\uec91": "\u4ece",
        "\ue307": "\u884c",
        "\ue0a3": "\u5929",
        "\ue321": "\u5e76",
        "\ue4c2": "\u660e",
        "\ue70a": "\u4f5c",
        "\ue431": "\u8001",
        "\uef2a": "\u610f",
        "\ue015": "\u5b83",
        "\ue772": "\u793e",
        "\ue47a": "\u5979",
        "\ue845": "\u7b49",
        "\ue6de": "\u6b63",
        "\ue904": "\u8fc7",
        "\ue203": "\u56db",
        "\ue614": "\u90fd",
        "\uecbc": "\u672c",
        "\uecf1": "\u5411",
        "\ue6dd": "\u5c11",
        "\ue3cc": "\u4e8b",
        "\ue105": "\u4fbf",
        "\ue7c0": "\u5982",
        "\ue968": "\u4e4b",
        "\ue0bb": "\u7684",
        "\ue456": "\u7406",
        "\ue58a": "\u5f88",
        "\ue453": "\u5148",
        "\ue25e": "\u628a",
        "\uecc9": "\u9ad8",
        "\ueb24": "\u5973",
        "\uebf0": "\u7136",
        "\ue1af": "\u65b9",
        "\ue2bb": "\u6559",
        "\ue596": "\u95ee",
        "\ue1cc": "\u611f",
        "\ueadf": "\u800c",
        "\ue86e": "\u591a",
        "\ue7a1": "\u56de",
        "\ue68c": "\u52a8",
        "\ue599": "\u4ed6",
        "\uee73": "\u529b",
        "\ue6dc": "\u513f",
        "\ueb50": "\u4e5f",
        "\ue322": "\u597d",
        "\ueab7": "\u66f4",
        "\uedb2": "\u601d",
        "\uea5b": "\u4f46",
        "\ue11e": "\u795e",
        "\ue414": "\u4eba",
        "\uec7d": "\u5b50",
        "\ue5b2": "\u4e09",
        "\ue98a": "\u5c0f",
        "\ue543": "\u6c11",
        "\ue8c1": "\u65e5",
        "\uedce": "\u4e66",
        "\ueda3": "\u5173",
        "\ue498": "\u542c",
        "\ue51e": "\u6240",
        "\uebe9": "\u56fd",
        "\ueade": "\u6210",
        "\ue227": "\u53f2",
        "\ued3b": "\u957f",
        "\ue729": "\u8981",
        "\ue3bf": "\u4e0a",
        "\uebdc": "\u5fc3",
        "\ue45d": "\u4e16",
        "\ue61c": "\u8bdd",
        "\ue031": "\u5728",
    },
    jjwxcfont_0078d: {
        "\ue846": "\u4e0b",
        "\ue318": "\u4ee3",
        "\ue245": "\u800c",
        "\ueb8f": "\u9ad8",
        "\ue22d": "\u81ea",
        "\ueaf8": "\u773c",
        "\ue31e": "\u53c8",
        "\ue8fe": "\u5206",
        "\ue896": "\u4e48",
        "\ue34c": "\u7531",
        "\uede8": "\u4f55",
        "\uea5d": "\u6c14",
        "\ue150": "\u6b64",
        "\ue471": "\u8fd9",
        "\ue775": "\u66f4",
        "\ue4b2": "\u672c",
        "\ueb06": "\u4eba",
        "\uec8d": "\u4e9b",
        "\ue4fd": "\u5b83",
        "\ueb65": "\u4ec0",
        "\uec3b": "\u897f",
        "\uef7e": "\u8eab",
        "\ue3f1": "\u79cd",
        "\ue5f9": "\u8d77",
        "\ue915": "\u6837",
        "\ueaaf": "\u7ed9",
        "\ue5df": "\u7ecf",
        "\ueb6a": "\u7136",
        "\ueac3": "\u60f3",
        "\ue1b0": "\u7279",
        "\ue289": "\u4e09",
        "\ue035": "\u7f8e",
        "\ue89d": "\u76f8",
        "\ue6a7": "\u679c",
        "\ue208": "\u5c11",
        "\ue494": "\u5979",
        "\ued90": "\u6240",
        "\ueff6": "\u9762",
        "\ue9bf": "\u8bba",
        "\ue759": "\u4f46",
        "\ueff9": "\u53ef",
        "\ue585": "\u5728",
        "\ue2a2": "\u6253",
        "\ue7f9": "\u5411",
        "\ue910": "\u56db",
        "\ued5e": "\u5e76",
        "\ue3b1": "\u4eec",
        "\ue82a": "\u611f",
        "\ueb12": "\u5730",
        "\uea17": "\u5230",
        "\ue151": "\u8fdb",
        "\ue20a": "\u624b",
        "\uea59": "\u9053",
        "\ue8bf": "\u5b66",
        "\uedbb": "\u7528",
        "\ueaa2": "\u7684",
        "\uee11": "\u53e3",
        "\ue260": "\u4e49",
        "\ue5d4": "\u7b11",
        "\ue0a2": "\u5c0f",
        "\uee2a": "\u8981",
        "\ue61c": "\u5f53",
        "\uef86": "\u540e",
        "\ue4b8": "\u5934",
        "\ue5b1": "\u8005",
        "\ue641": "\u6587",
        "\ue632": "\u4ece",
        "\ueed3": "\u73b0",
        "\ue348": "\u751f",
        "\ue83f": "\u4f53",
        "\uefb1": "\u5173",
        "\ue17b": "\u516c",
        "\ue93b": "\u4e0d",
        "\uead4": "\u95f4",
        "\uec3c": "\u5c06",
        "\ue24d": "\u58f0",
        "\ued40": "\u7269",
        "\ued16": "\u6cd5",
        "\uef34": "\u5f97",
        "\ue4bc": "\u513f",
        "\ue15f": "\u60c5",
        "\uece7": "\u540d",
        "\ue728": "\u6b63",
        "\uef5e": "\u56de",
        "\ue45f": "\u7b2c",
        "\uee72": "\u660e",
        "\ue290": "\u5973",
        "\ue5a7": "\u5b9e",
        "\ue61d": "\u90e8",
        "\ue22e": "\u53f2",
        "\ueb98": "\u771f",
        "\ue7d4": "\u6ca1",
        "\ue2bd": "\u53ea",
        "\ue28f": "\u767d",
        "\ue939": "\u7b49",
        "\ue2bb": "\u5e74",
        x: "x",
        "\ue8c9": "\u628a",
        "\uefb9": "\u51e0",
        "\ue332": "\u4e16",
        "\ue9f2": "\u5fc3",
        "\ue683": "\u770b",
        "\ue1d9": "\u5b9a",
        "\ued23": "\u591a",
        "\ue449": "\u4e3b",
        "\uef3b": "\u90fd",
        "\ueae0": "\u5176",
        "\ue7fb": "\u4ee5",
        "\ued0c": "\u4e2a",
        "\ueaa0": "\u5148",
        "\ue2d8": "\u65e0",
        "\ue93f": "\u518d",
        "\ue18b": "\u5168",
        "\ue7ee": "\u5316",
        "\ue02a": "\u6765",
        "\ue8ce": "\u70b9",
        "\uead5": "\u56fd",
        "\ue52d": "\u957f",
        "\uee7f": "\u52a8",
        "\ue26e": "\u4e2d",
        "\ue430": "\u7406",
        "\uecea": "\u548c",
        "\ue8fa": "\u793e",
        "\uef2b": "\u5c31",
        "\ue1d0": "\u6027",
        "\ue1aa": "\u5bb6",
        "\ue07e": "\u4e5f",
        "\uebff": "\u7740",
        "\ue5b7": "\u4e8c",
        "\ue823": "\u95ee",
        "\ue3d4": "\u90a3",
        "\ue44c": "\u542c",
        "\ue3af": "\u540c",
        "\ue2dd": "\u5341",
        "\ueb8c": "\u4e66",
        "\ueba7": "\u4f60",
        "\ue4aa": "\u5f00",
        "\ue9cf": "\u95e8",
        "\ue335": "\u610f",
        "\uee42": "\u5b50",
        "\ue1b9": "\u5916",
        "\uea4d": "\u5982",
        "\uec98": "\u5df1",
        "\uedae": "\u524d",
        "\ue373": "\u6211",
        "\uee0d": "\u65b0",
        "\ue6f4": "\u56e0",
        "\uec26": "\u6c11",
        "\ue1b8": "\u601d",
        "\ue968": "\u597d",
        "\ue0f5": "\u53d1",
        "\ue254": "\u6b7b",
        "\uea0e": "\u5929",
        "\ued95": "\u522b",
        "\uee95": "\u65e5",
        "\uebe4": "\u77e5",
        "\uea2c": "\u795e",
        "\ue409": "\u51fa",
        "\uec7e": "\u88ab",
        "\ue0f8": "\u91cc",
        "\ue938": "\u6700",
        "\ue7d7": "\u53bb",
        "\ueae9": "\u8bdd",
        "\ue628": "\u8bf4",
        "\ue3a4": "\u4e0a",
        "\ue9e6": "\u6210",
        "\ue1df": "\u5f88",
        "\ue077": "\u4e8b",
        "\uee7c": "\u5927",
        "\ue71f": "\u4e4b",
        "\ue900": "\u89c1",
        "\ueeaa": "\u91cd",
        "\ue377": "\u65f6",
        "\ueba8": "\u65b9",
        "\ue093": "\u8001",
        "\uef1a": "\u662f",
        "\ue6f5": "\u4e0e",
        "\ue8d4": "\u624d",
        "\ue72b": "\u5374",
        "\ued09": "\u8fc7",
        "\ue012": "\u884c",
        "\ue3cf": "\u6559",
        "\uec49": "\u4e00",
        "\ue8ef": "\u6709",
        "\ueab1": "\u80fd",
        "\ue356": "\u4f7f",
        "\ue36d": "\u592a",
        "\ue06a": "\u4e24",
        "\uecb2": "\u4e3a",
        "\ue14b": "\u8d70",
        "\ue617": "\u4fbf",
        "\uead0": "\u4f1a",
        "\uee65": "\u4e8e",
        "\ue3ca": "\u4e86",
        "\uef92": "\u5199",
        "\ueec8": "\u4f5c",
        "\ue6ae": "\u5bf9",
        "\uec50": "\u529b",
        "\ue94e": "\u5df2",
        "\ue142": "\u8fd8",
        "\uecb4": "\u4ed6",
    },
    jjwxcfont_007ax: {
        "\ue8fb": "\u8bdd",
        "\ue04b": "\u5c11",
        "\ue476": "\u4e24",
        "\ue3ae": "\u65b9",
        "\ueb88": "\u884c",
        "\uecf5": "\u79cd",
        "\ue602": "\u4e4b",
        "\ue2df": "\u7269",
        "\ue29d": "\u4e3a",
        "\uebf8": "\u65b0",
        "\uefba": "\u4e2a",
        "\ue564": "\u4f55",
        "\ue9c4": "\u4e09",
        "\ue1d0": "\u4e8e",
        "\ueded": "\u51e0",
        "\ue75d": "\u6587",
        "\uec36": "\u4e9b",
        "\uec27": "\u58f0",
        "\uef4f": "\u6c11",
        "\ueffb": "\u7740",
        "\ueb14": "\u53c8",
        "\ue2de": "\u8d70",
        "\ue59b": "\u4f53",
        "\ue410": "\u4ece",
        "\ue09a": "\u6027",
        "\ue84a": "\u592a",
        "\ue1f2": "\u800c",
        "\ue36b": "\u4f46",
        "\uee00": "\u5e74",
        "\ue6f4": "\u611f",
        "\ue352": "\u91cc",
        "\ue923": "\u66f4",
        "\uec97": "\u8fdb",
        "\ue170": "\u56fd",
        "\ue7ad": "\u8bf4",
        "\ue39e": "\u540d",
        "\uedc5": "\u7684",
        "\ue8a3": "\u52a8",
        "\ue33c": "\u81ea",
        "\ue61d": "\u672c",
        "\ue208": "\u542c",
        "\ue4f6": "\u610f",
        "\ue920": "\u4ec0",
        "\uee27": "\u51fa",
        "\ue2f0": "\u5c31",
        "\ue0cb": "\u6837",
        "\ue89c": "\u4f60",
        "\ue455": "\u90fd",
        "\ue30b": "\u4e3b",
        "\ue39a": "\u7406",
        "\uebc7": "\u679c",
        "\ueabe": "\u5230",
        "\uef45": "\u65e0",
        "\uee3b": "\u767d",
        "\ue224": "\u53bb",
        "\ue63f": "\u5e76",
        "\ue109": "\u522b",
        "\ue089": "\u6ca1",
        "\uebe7": "\u5b9e",
        "\ue88f": "\u5b9a",
        "\ue426": "\u795e",
        "\ue1a4": "\u7f8e",
        "\ue05a": "\u5411",
        "\ue6eb": "\u77e5",
        "\ued4e": "\u5173",
        "\ue86a": "\u6253",
        "\ue79b": "\u90e8",
        "\ue3ea": "\u4ee3",
        "\ue359": "\u5f53",
        "\ue1ef": "\u8fd9",
        "\ue609": "\u5199",
        "\ue9f5": "\u7b11",
        "\uee2e": "\u8005",
        "\ue2f2": "\u4e5f",
        "\ue26c": "\u597d",
        "\ue6c0": "\u5973",
        "\ue3fa": "\u53ef",
        "\uebd1": "\u771f",
        "\ued4b": "\u5f88",
        "\ue969": "\u56de",
        "\ue2c9": "\u6c14",
        "\ue2b9": "\u6210",
        "\ueb6a": "\u7136",
        "\uef03": "\u5982",
        "\ue243": "\u4f5c",
        "\ue874": "\u957f",
        "\ue53b": "\u89c1",
        "\ue94c": "\u5730",
        "\ued93": "\u5148",
        "\ueff5": "\u5b66",
        "\ue917": "\u4e86",
        "\ue477": "\u56db",
        "\ue10e": "\u4ee5",
        "\ue221": "\u529b",
        "\ue05e": "\u4e0d",
        "\ue6c8": "\u4eec",
        "\ue6f1": "\u5316",
        "\ue3fd": "\u5b50",
        "\ue2e7": "\u65f6",
        "\ueb9c": "\u6b7b",
        "\ue267": "\u90a3",
        "\ued46": "\u5374",
        "\ue74c": "\u513f",
        "\uede3": "\u6b63",
        "\uefc3": "\u6240",
        "\ue669": "\u5341",
        "\ue9b1": "\u5934",
        "\ue4ae": "\u95ee",
        "\ue274": "\u540e",
        "\uef72": "\u4e00",
        "\ueaa3": "\u8d77",
        "\uee3c": "\u70b9",
        "\ue579": "\u7ecf",
        "\ue5a4": "\u95f4",
        "\ueb3d": "\u88ab",
        "\ueb39": "\u5b83",
        "\ue4ea": "\u5c0f",
        "\ue38a": "\u53e3",
        "\ue1ff": "\u6700",
        "\ueb43": "\u80fd",
        "\ueb78": "\u9ad8",
        "\ue121": "\u53ea",
        "\uebb2": "\u518d",
        "\ue7bc": "\u4e8b",
        "\uef44": "\u4eba",
        "\ue101": "\u4f7f",
        "\uee42": "\u7531",
        "\ue11c": "\u5929",
        "\uefac": "\u5176",
        "\ue90d": "\u6765",
        "\uec4f": "\u628a",
        "\ue39d": "\u56e0",
        "\ue903": "\u4e0a",
        "\uea49": "\u8981",
        "\ue263": "\u540c",
        "\ue906": "\u7b49",
        "\uea30": "\u4ed6",
        "\ue74d": "\u5206",
        "\ue3c3": "\u73b0",
        "\ue6b9": "\u5bb6",
        "\ue9c7": "\u4e16",
        "\ue8de": "\u5df1",
        "\ue505": "\u6cd5",
        "\ue5fd": "\u8fd8",
        "\ue76f": "\u5c06",
        "\uee99": "\u662f",
        "\ue1f6": "\u516c",
        "\uee5a": "\u4e66",
        "\ue9dd": "\u7528",
        "\ue287": "\u76f8",
        "\ue4cc": "\u751f",
        "\ue7a0": "\u4e8c",
        "\ue1bc": "\u5916",
        "\ue069": "\u8bba",
        "\ue43f": "\u5fc3",
        "\ue884": "\u6b64",
        "\ue306": "\u601d",
        "\uec30": "\u5728",
        "\ued37": "\u7b2c",
        "\ue2b8": "\u7279",
        "\ue764": "\u53d1",
        "\ue8cd": "\u8001",
        "\ue72c": "\u4e0e",
        "\ue6fb": "\u65e5",
        "\ue4a4": "\u8eab",
        "\ue286": "\u4e2d",
        "\ue0c8": "\u5f00",
        "\ue862": "\u4f1a",
        "\ue1fb": "\u773c",
        "\ue4d9": "\u7ed9",
        "\ue77e": "\u5bf9",
        "\ue62a": "\u4e48",
        "\uec74": "\u897f",
        "\ue9d4": "\u60c5",
        "\uefa7": "\u5f97",
        "\ue530": "\u548c",
        "\ue5f4": "\u770b",
        "\ue3cb": "\u4fbf",
        "\ue01d": "\u5168",
        "\ue7cd": "\u591a",
        "\ue118": "\u9762",
        "\ue9c5": "\u6709",
        "\ue7db": "\u624b",
        "\ue5e7": "\u793e",
        "\ue2bc": "\u6559",
        "\ue33d": "\u624d",
        "\ue415": "\u5df2",
        "\ue9e0": "\u4e49",
        "\ue6b2": "\u53f2",
        "\ue813": "\u95e8",
        "\uee36": "\u4e0b",
        "\uef2a": "\u91cd",
        "\ue188": "\u8fc7",
        "\ue017": "\u660e",
        "\uee6e": "\u5979",
        "\uea9f": "\u5927",
        "\ue8a7": "\u9053",
        "\ue13d": "\u6211",
        "\ue256": "\u524d",
        "\ue9ba": "\u60f3",
    },
    jjwxcfont_007cx: {
        "\uef9e": "\u6cd5",
        "\uedcf": "\u662f",
        "\ue3ae": "\u88ab",
        "\ue4b6": "\u4e2a",
        "\ue413": "\u53ef",
        "\ue278": "\u518d",
        "\ueb2f": "\u60f3",
        "\ue208": "\u5c31",
        "\ueb38": "\u8005",
        "\ue97a": "\u5341",
        "\ue999": "\u79cd",
        "\uee0e": "\u6210",
        "\ueb73": "\u624d",
        "\uef5c": "\u592a",
        "\ue4bd": "\u4e5f",
        "\ue231": "\u897f",
        "\uee1e": "\u7f8e",
        "\uef49": "\u4f7f",
        "\ue6e8": "\u7ecf",
        "\uea53": "\u66f4",
        "\ue2bb": "\u672c",
        "\ued94": "\u91cd",
        "\ue45a": "\u65b9",
        "\ue914": "\u5b83",
        "\ue2f0": "\u52a8",
        "\ueaa2": "\u5168",
        "\ue38a": "\u8eab",
        "\ue395": "\u884c",
        "\uec0f": "\u597d",
        "\ue8d7": "\u65e5",
        "\ue5d7": "\u4f5c",
        "\ue894": "\u89c1",
        "\ueb81": "\u591a",
        "\uea25": "\u4eba",
        "\ue52a": "\u4ee3",
        "\ue563": "\u6211",
        "\uecca": "\u5f88",
        "\ue364": "\u4e49",
        "\ue223": "\u5979",
        "\ue49f": "\u4e2d",
        "\uee1a": "\u524d",
        "\ueb94": "\u53d1",
        "\ue962": "\u90e8",
        "\ue729": "\u8fdb",
        "\uef26": "\u4e0b",
        "\ue8fd": "\u4e48",
        "\ue762": "\u5e76",
        "\ue9df": "\u4ec0",
        "\ue217": "\u5f97",
        "\ue816": "\u6837",
        "\ueaeb": "\u53f2",
        "\ue6ee": "\u4ece",
        "\ue8b3": "\u8bdd",
        "\ue422": "\u5199",
        "\ue923": "\u5173",
        "\ueae4": "\u628a",
        "\ue0ee": "\u56db",
        "\ueea2": "\u76f8",
        "\uee30": "\u5c06",
        "\ue8e8": "\u7269",
        "\ue0f6": "\u5f00",
        "\ue63b": "\u7531",
        "\uec37": "\u6709",
        "\ue6ad": "\u95f4",
        "\ued36": "\u679c",
        "\ued73": "\u751f",
        "\ue5a4": "\u542c",
        "\ue10e": "\u611f",
        "\ue953": "\u5148",
        "\ue83a": "\u5973",
        "\uedbf": "\u4e0a",
        "\ue1e7": "\u4e4b",
        "\ueda4": "\u8fd8",
        "\ue3b3": "\u5f53",
        "\ue3a4": "\u6027",
        "\uef30": "\u7b2c",
        "\ue94d": "\u6c11",
        "\ue790": "\u6b7b",
        "\ue24e": "\u5982",
        "\ue283": "\u5bf9",
        "\ue381": "\u601d",
        "\ue79a": "\u5b50",
        "\uef67": "\u5411",
        "\ue103": "\u4e0d",
        "\ue838": "\u4e86",
        "\ue5ef": "\u660e",
        "\uee2b": "\u5916",
        "\uee93": "\u53ea",
        "\ueb5e": "\u5fc3",
        "\ue21f": "\u8bba",
        "\ued05": "\u4e8c",
        "\ue414": "\u6700",
        "\ue845": "\u6240",
        "\ue854": "\u7136",
        "\ue8c7": "\u4e8e",
        "\ue5c5": "\u7ed9",
        "\ue7e9": "\u65f6",
        "\uef95": "\u770b",
        "\ue65d": "\u4e3a",
        "\ue7af": "\u5b9e",
        "\ue48d": "\u767d",
        "\ue807": "\u6b64",
        "\uefe1": "\u4e00",
        "\ue664": "\u5e74",
        "\ued4c": "\u65b0",
        "\ue40d": "\u7b49",
        "\uee66": "\u793e",
        "\uea6d": "\u58f0",
        "\ue57a": "\u5927",
        "\ue137": "\u4ed6",
        "\ueca6": "\u5929",
        "\uea16": "\u5b9a",
        "\ue170": "\u4eec",
        "\ue7c0": "\u81ea",
        "\ue843": "\u8bf4",
        "\ueab6": "\u6765",
        "\ue1db": "\u9ad8",
        "\ueddf": "\u7740",
        "\ue666": "\u5df2",
        "\ueffd": "\u4f55",
        "\uef64": "\u7684",
        "\ue667": "\u5206",
        "\ueb70": "\u5730",
        "\ue780": "\u5176",
        "\ueceb": "\u5316",
        "\ueae5": "\u7b11",
        "\ueede": "\u540d",
        "\uede2": "\u4e66",
        "\uebdf": "\u4e3b",
        "\ue492": "\u53bb",
        "\ue25b": "\u53e3",
        "\ueb4d": "\u610f",
        "\uefae": "\u4ee5",
        "\ue0c3": "\u5c0f",
        "\ue3b6": "\u516c",
        "\uede3": "\u60c5",
        "\ue2ee": "\u5b66",
        "\ue2a8": "\u5728",
        "\ueab2": "\u540e",
        "\ue86d": "\u90a3",
        "\ue3f9": "\u8981",
        "\ue31d": "\u4e09",
        "\uef76": "\u529b",
        "\ue683": "\u800c",
        "\ue256": "\u4e0e",
        "\ue30b": "\u5374",
        "\ue7f3": "\u6587",
        "\ue888": "\u95ee",
        "\ue9b7": "\u771f",
        "\ue38d": "\u51fa",
        "\ue5f0": "\u9053",
        "\ue135": "\u5df1",
        "\uee63": "\u522b",
        "\ue89b": "\u6559",
        "\uefe3": "\u4e24",
        "\uef56": "\u4f53",
        "\ue701": "\u8fc7",
        "\ue97b": "\u795e",
        "\uea0d": "\u5bb6",
        "\ue553": "\u65e0",
        "\ue03a": "\u95e8",
        "\ue1e0": "\u540c",
        "\ue2ce": "\u4e9b",
        "\ued38": "\u8fd9",
        "\ue8b9": "\u8d77",
        "\ue85b": "\u77e5",
        "\ue99e": "\u91cc",
        "\ue815": "\u5230",
        "\uee44": "\u6c14",
        "\ue12b": "\u80fd",
        "\uec4e": "\u4fbf",
        "\uea93": "\u9762",
        "\ue056": "\u4e8b",
        "\ue625": "\u73b0",
        "\ue2be": "\u70b9",
        "\uee87": "\u90fd",
        "\ue0e5": "\u7279",
        "\ue55c": "\u51e0",
        "\ue522": "\u4f46",
        "\ue172": "\u4f60",
        "\ue44b": "\u773c",
        "\ueea5": "\u56fd",
        "\ue8d2": "\u56e0",
        "\uefb0": "\u6ca1",
        "\ue0e2": "\u5c11",
        "\ue1f5": "\u548c",
        "\uee67": "\u53c8",
        "\ued9d": "\u513f",
        "\uefb1": "\u6253",
        "\ue668": "\u4f1a",
        "\uee13": "\u56de",
        "\ue585": "\u5934",
        "\ue55d": "\u4e16",
        "\ue161": "\u957f",
        "\ue117": "\u7406",
        "\uec09": "\u624b",
        "\ue4a9": "\u8d70",
        "\ued72": "\u7528",
        "\ue6c3": "\u8001",
        "\uef73": "\u6b63",
    },
    jjwxcfont_007f3: {
        "\ue3e4": "\u5230",
        "\ue3ab": "\u7ed9",
        "\ue7d7": "\u6240",
        "\ue8be": "\u513f",
        "\ue789": "\u58f0",
        "\uee33": "\u7740",
        "\ue029": "\u95f4",
        "\uea53": "\u53d1",
        "\uefa9": "\u9ad8",
        "\ueef5": "\u65b0",
        "\ue8ef": "\u89c1",
        "\ue33b": "\u5fc3",
        "\uea7d": "\u4f1a",
        "\uedb8": "\u5374",
        "\ue348": "\u95e8",
        "\ue17b": "\u4e8b",
        "\ue3b1": "\u8bdd",
        "\ue70b": "\u4f46",
        "\uef1c": "\u5730",
        "\ueed0": "\u53e3",
        "\ueb33": "\u5f00",
        "\ue5be": "\u5916",
        "\ued3a": "\u529b",
        "\ue0e7": "\u4e24",
        "\uee83": "\u7269",
        "\ue7e5": "\u9053",
        "\ueb26": "\u624b",
        "\ue1bc": "\u8fc7",
        "\uea49": "\u4ee3",
        "\ue51d": "\u628a",
        "\ue621": "\u7136",
        "\uedb3": "\u95ee",
        "\ue620": "\u6700",
        "\ued4c": "\u540c",
        "\uea9a": "\u6c11",
        "\uee24": "\u4e0e",
        "\ued10": "\u771f",
        "\ue355": "\u7b2c",
        "\ue039": "\u91cd",
        "\ue9ca": "\u90e8",
        "\ue482": "\u4e0d",
        "\ue767": "\u770b",
        "\uea0c": "\u610f",
        "\ue087": "\u4f5c",
        "\uec1b": "\u4f53",
        "\ue0e0": "\u5e76",
        "\ue9b4": "\u4e2a",
        "\ue897": "\u672c",
        "\ue222": "\u518d",
        "\ue253": "\u7b11",
        "\ueae1": "\u52a8",
        "\ue8ad": "\u4ee5",
        "\ue75c": "\u6b7b",
        "\ue028": "\u8bba",
        "\ue859": "\u4ec0",
        "\uea37": "\u6587",
        "\ue446": "\u5b83",
        "\ueff1": "\u5c0f",
        "\ue4e2": "\u4e3b",
        "\ueb03": "\u4e5f",
        "\ue0ce": "\u65e5",
        "\ue50b": "\u897f",
        "\ue8c5": "\u5341",
        "\ued40": "\u5411",
        "\uedbf": "\u516c",
        "\ue340": "\u77e5",
        "\ue042": "\u65b9",
        "\uef2a": "\u5e74",
        "\ue9a8": "\u597d",
        "\ue689": "\u56de",
        "\ue645": "\u6211",
        "\ue9d4": "\u524d",
        "\uedbd": "\u4e09",
        "\ue97a": "\u5927",
        "\uebeb": "\u6210",
        "\ue38f": "\u5206",
        "\ued55": "\u5f97",
        "\ue5ba": "\u88ab",
        "\ue0e9": "\u8d70",
        "\ueaec": "\u7684",
        "\ue7e3": "\u522b",
        "\uefb5": "\u6765",
        "\ued13": "\u60c5",
        "\ue8e5": "\u80fd",
        "\ue009": "\u8d77",
        "\ue988": "\u6837",
        "\ue662": "\u5934",
        "\ue113": "\u8bf4",
        "\ue674": "\u4e4b",
        "\ue510": "\u6253",
        "\ue841": "\u5728",
        "\uef79": "\u8001",
        "\ue6e7": "\u51e0",
        "\ue373": "\u679c",
        "\ue22b": "\u81ea",
        "\ued63": "\u8fd8",
        "\ue02a": "\u4e00",
        "\ue157": "\u5c06",
        "\uef8e": "\u611f",
        "\ueb79": "\u8eab",
        "\uec96": "\u8fdb",
        "\ue45b": "\u4e86",
        "\ue846": "\u4f7f",
        "\ue051": "\u4eba",
        "\ued59": "\u60f3",
        "\ue3f0": "\u5148",
        "\ue02d": "\u5c11",
        "\ue9e8": "\u5df1",
        "\ue3e0": "\u5c31",
        "\ue025": "\u6cd5",
        "\ue55e": "\u751f",
        "\ue469": "\u7406",
        "\ue045": "\u4e8c",
        "\ue45d": "\u662f",
        "\uea82": "\u6559",
        "\ue21a": "\u601d",
        "\uece1": "\u5168",
        "\ue52c": "\u4fbf",
        "\ue69b": "\u6709",
        "\ue6db": "\u4e8e",
        "\ue9f2": "\u6c14",
        "\ue121": "\u4ece",
        "\ue6ba": "\u4f55",
        "\ue423": "\u4e48",
        "\ue2f0": "\u9762",
        "\uefcb": "\u7ecf",
        "\ue57d": "\u884c",
        "\ue075": "\u76f8",
        "\ue055": "\u4e49",
        "\ueb44": "\u591a",
        "\ue43c": "\u5f53",
        "\uee0a": "\u540d",
        "\uede5": "\u4eec",
        "\ue328": "\u5bb6",
        "\uecc5": "\u5973",
        "\ueb85": "\u592a",
        "\ued88": "\u53bb",
        "\ue6e8": "\u660e",
        "\ue9e6": "\u6ca1",
        "\uef57": "\u70b9",
        "\uee5b": "\u5df2",
        "\ue295": "\u53f2",
        "\ue63d": "\u5173",
        "\ue29b": "\u4e2d",
        "\uebf3": "\u8981",
        "\uee93": "\u73b0",
        "\ue2fb": "\u65f6",
        "\uec3a": "\u90a3",
        "\uee90": "\u793e",
        "\ue2b8": "\u6b64",
        "\ue6e1": "\u91cc",
        "\ue421": "\u4f60",
        "\uef6a": "\u51fa",
        "\ue7c4": "\u8fd9",
        "\ue7a0": "\u5b9a",
        "\ue6b6": "\u7279",
        "\ue694": "\u795e",
        "\ue831": "\u53ef",
        "\ue17e": "\u53ea",
        "\ue9da": "\u4e0a",
        "\uee67": "\u6027",
        "\ue3e6": "\u5bf9",
        "\uec18": "\u5b9e",
        "\ue4b1": "\u4e66",
        "\ue149": "\u4e3a",
        "\uec93": "\u53c8",
        "\ue5a5": "\u7528",
        "\ue3fe": "\u90fd",
        "\ueb42": "\u4e0b",
        "\ue8ce": "\u4ed6",
        "\ueb2a": "\u5b66",
        "\ue38c": "\u773c",
        "\uede2": "\u5b50",
        "\uef93": "\u56db",
        "\uedf5": "\u5316",
        "\uea32": "\u5979",
        "\ue4e6": "\u5927",
        "\ueaaa": "\u540e",
        "\uee46": "\u624d",
        "\ue11d": "\u548c",
        "\ue152": "\u7f8e",
        "\uee53": "\u4e9b",
        "\ued74": "\u5176",
        "\ue853": "\u4e16",
        "\ue33c": "\u7531",
        "\ue806": "\u5f88",
        "\ueb4e": "\u5929",
        "\ued6a": "\u5199",
        "\uefe2": "\u66f4",
        "\ue568": "\u8005",
        "\uedc4": "\u542c",
        "\uefb3": "\u5982",
        "\ued50": "\u957f",
        "\ue8ed": "\u800c",
        "\ue199": "\u767d",
        "\ue942": "\u7b49",
        "\uefd8": "\u6b63",
        "\ue665": "\u56fd",
        "\ueb82": "\u65e0",
        "\uece5": "\u79cd",
    },
    jjwxcfont_007ib: {
        "\ue8d6": "\u76f8",
        "\ue2d5": "\u6211",
        "\ue25b": "\u91cd",
        "\ue93d": "\u4f5c",
        "\ue809": "\u5934",
        "\uef23": "\u53d1",
        "\ue2e2": "\u52a8",
        "\ue4ab": "\u5df1",
        "\ue914": "\u58f0",
        "\uecc4": "\u65b0",
        "\ueabd": "\u81ea",
        "\uef0a": "\u610f",
        "\ue2c4": "\u5316",
        "\ueabc": "\u8d70",
        "\ue60b": "\u4e8c",
        "\uee30": "\u5728",
        "\ue338": "\u771f",
        "\ue98c": "\u767d",
        "\ue20c": "\u5927",
        "\ued69": "\u751f",
        "\uee14": "\u884c",
        "\ue2d2": "\u89c1",
        "\uea17": "\u5c06",
        "\ue7c2": "\u540d",
        "\ueee7": "\u542c",
        "\ue0c9": "\u5f53",
        "\ue99b": "\u4f1a",
        "\ueb92": "\u4e86",
        "\ue0f9": "\u53bb",
        "\ue1ce": "\u5bb6",
        "\ued25": "\u53e3",
        "\ue9be": "\u4ece",
        "\ue726": "\u4ee5",
        "\ue1fc": "\u5148",
        "\uea5b": "\u524d",
        "\uefc9": "\u8fd8",
        "\ue7b8": "\u4f53",
        "\uee51": "\u4e48",
        "\ue761": "\u8d77",
        "\ue01d": "\u516c",
        "\ue5a1": "\u7528",
        "\ue02e": "\u660e",
        "\uea97": "\u624b",
        "\ue703": "\u4e2a",
        "\ue087": "\u60c5",
        "\ued97": "\u540e",
        "\ue2fc": "\u8bdd",
        "\uebdd": "\u5916",
        "\ue6f6": "\u5e76",
        "\ue330": "\u5929",
        "\ue38f": "\u513f",
        "\ue570": "\u70b9",
        "\uee02": "\u6587",
        "\ue4c6": "\u5168",
        "\uedde": "\u6559",
        "\ue659": "\u65f6",
        "\ued3d": "\u5b50",
        "\uee53": "\u56db",
        "\ue789": "\u4e16",
        "\ue81c": "\u6253",
        "\uea05": "\u5979",
        "\ue44f": "\u8001",
        "\ue8b7": "\u65e0",
        "\ue85b": "\u4e3a",
        "\ue210": "\u7406",
        "\ue1e1": "\u5c0f",
        "\uea6c": "\u672c",
        "\ue4b5": "\u90a3",
        "\ue52b": "\u662f",
        "\uef7b": "\u8bf4",
        "\uebd2": "\u4eba",
        "\ueef8": "\u90fd",
        "\ueeaa": "\u5df2",
        "\ue86f": "\u5e74",
        "\uecf8": "\u5bf8",
        "\ue3a1": "\u5341",
        "\ue5c3": "\u6240",
        "\ue4f9": "\u90e8",
        "\ue688": "\u4e49",
        "\ueb1c": "\u4e4b",
        "\uec52": "\u5c11",
        "\ue55e": "\u95ee",
        "\ue9f1": "\u540c",
        "\ue416": "\u7136",
        "\ueb4a": "\u5176",
        "\ue2fd": "\u529b",
        "\ue50e": "\u7ecf",
        "\ueb23": "\u9053",
        "\ue16e": "\u6210",
        "\ue46c": "\u73b0",
        "\ueb15": "\u91cc",
        "\uefac": "\u9762",
        "\ue4d8": "\u518d",
        "\ue5a7": "\u4e0b",
        "\uefe0": "\u4e0e",
        "\ue718": "\u4e3b",
        "\ue65a": "\u95e8",
        "\ue58d": "\u6700",
        "\ueafa": "\u957f",
        "\uec62": "\u4fbf",
        "\ue160": "\u4e00",
        "\ue7cf": "\u80fd",
        "\ue1d3": "\u4ed6",
        "\ueaa0": "\u800c",
        "\ue146": "\u4e0a",
        "\ue892": "\u77e5",
        "\ue093": "\u5bf9",
        "\ue1b9": "\u597d",
        "\uec0e": "\u5730",
        "\ue311": "\u5199",
        "\uecaf": "\u8eab",
        "\ue0a6": "\u4e9b",
        "\ue059": "\u5b9a",
        "\ue5fa": "\u6765",
        "\ue87f": "\u7ed9",
        "\uefe5": "\u624d",
        "\uebee": "\u5f88",
        "\ue10e": "\u5f97",
        "\ue875": "\u79cd",
        "\ue502": "\u66f4",
        "\ue24e": "\u6027",
        "\ue763": "\u65e5",
        "\uedc4": "\u5206",
        "\uec20": "\u7b11",
        "\ueaac": "\u56e0",
        "\ued8e": "\u793e",
        "\ue0d4": "\u5173",
        "\ue6f5": "\u7279",
        "\ueda8": "\u773c",
        "\ue6b1": "\u8fdb",
        "\uecd8": "\u8fd9",
        "\ue867": "\u5b9e",
        "\uea63": "\u5973",
        "\ue11c": "\u6b63",
        "\uebc1": "\u8981",
        "\uee8a": "\u4e2d",
        "\ue1a3": "\u88ab",
        "\ue3db": "\u5b66",
        "\ue7bd": "\u5411",
        "\ue803": "\u8005",
        "\uefa9": "\u5982",
        "\ue305": "\u7f8e",
        "\ue3dd": "\u6c14",
        "\ue6dd": "\u7269",
        "\uef15": "\u53ea",
        "\ue1c0": "\u4e5f",
        "\ue911": "\u611f",
        "\ue02d": "\u5230",
        "\ue1e2": "\u5fc3",
        "\uee27": "\u5b83",
        "\uea2e": "\u65b9",
        "\uec8f": "\u53c8",
        "\ue9ca": "\u53c8",
        "\ue046": "\u6837",
        "\ue37a": "\u4f60",
        "\ue426": "\u592a",
        "\ue3eb": "\u53f2",
        "\ue532": "\u56de",
        "\ue414": "\u4f46",
        "\ue57c": "\u4e8e",
        "\ue2a0": "\u6c11",
        "\uee0b": "\u8fc7",
        "\ueadb": "\u4ec0",
        "\ueff0": "\u4f7f",
        "\ue79d": "\u6b7b",
        "\ue1f1": "\u628a",
        "\uef71": "\u4e24",
        "\ue535": "\u7b2c",
        "\ue2f2": "\u4e66",
        "\uee7e": "\u6709",
        "\ue65f": "\u51e0",
        "\uee86": "\u770b",
        "\ueeea": "\u9ad8",
        "\ue298": "\u4e0d",
        "\ue2f9": "\u56fd",
        "\uec05": "\u897f",
        "\uece9": "\u4e09",
        "\ued73": "\u5f00",
        "\uea9c": "\u548c",
        "\ue385": "\u591a",
        "\ue59d": "\u4ee3",
        "\ue476": "\u95f4",
        "\ue6d8": "\u6ca1",
        "\ue08c": "\u6b64",
        "\ueeb4": "\u4e8b",
        "\ue423": "\u4eec",
        "\ue925": "\u601d",
        "\ue4b2": "\u51fa",
        "\ue030": "\u53ef",
        "\ue068": "\u7740",
        "\uefed": "\u5374",
        "\ueb73": "\u522b",
        "\uef25": "\u795e",
        "\uea40": "\u5c31",
        "\ueeeb": "\u7531",
        "\ue5b1": "\u8bba",
        "\ue51f": "\u679c",
        "\ue2c1": "\u6cd5",
        "\uef28": "\u7684",
        "\ue1e7": "\u4f55",
    },
    jjwxcfont_007kc: {
        "\ue050": "\u4e16",
        "\uec74": "\u4ed6",
        "\ue480": "\u4e4b",
        "\uea25": "\u591a",
        "\uea3d": "\u4ee3",
        "\ue968": "\u5916",
        "\ue84b": "\u4eec",
        "\uef59": "\u5c0f",
        "\ue844": "\u4e3a",
        "\ue479": "\u4eba",
        "\ue564": "\u6c14",
        "\uef33": "\u5bb6",
        "\uec43": "\u5173",
        "\ueaf7": "\u4e8b",
        "\uee45": "\u770b",
        "\ue696": "\u4e8e",
        "\ued29": "\u7136",
        "\uee21": "\u4f7f",
        "\ue686": "\u70b9",
        "\ue9e3": "\u4fbf",
        "\uee61": "\u5c11",
        "\ue889": "\u65b9",
        "\ue70b": "\u5c31",
        "\ue27f": "\u53e3",
        "\ue999": "\u56db",
        "\ue0ef": "\u4e2a",
        "\ued31": "\u95ee",
        "\ue7cb": "\u7b2c",
        "\ue3de": "\u957f",
        "\ue61a": "\u7531",
        "\ue68b": "\u81ea",
        "\ue084": "\u53ea",
        "\ue1a4": "\u5979",
        "\uee0f": "\u8fd9",
        "\ue18e": "\u6027",
        "\ued15": "\u6cd5",
        "\ue161": "\u5982",
        "\ue2a9": "\u4ec0",
        "\ue24d": "\u5148",
        "\ue376": "\u90fd",
        "\ue165": "\u767d",
        "\ue976": "\u7684",
        "\uecb7": "\u5b66",
        "\ue6c9": "\u5973",
        "\ueb8f": "\u79cd",
        "\ue00d": "\u76f8",
        "\uef2f": "\u610f",
        "\ue342": "\u597d",
        "\ueac2": "\u52a8",
        "\ue299": "\u53c8",
        "\uead5": "\u4e48",
        "\ue205": "\u53f2",
        "\ue25b": "\u4e66",
        "\ue020": "\u4f46",
        "\uec38": "\u5f88",
        "\ue09d": "\u65b0",
        "\ue98e": "\u660e",
        "\ue954": "\u5411",
        "\ue783": "\u56de",
        "\ue193": "\u4e49",
        "\uec46": "\u56e0",
        "\uea6b": "\u5206",
        "\ueacb": "\u4f1a",
        "\ue5b1": "\u542c",
        "\ued77": "\u5934",
        "\ue9da": "\u800c",
        "\uea77": "\u5316",
        "\ue883": "\u7269",
        "\ue2d7": "\u7ed9",
        "\ueb35": "\u5176",
        "\uec6d": "\u5728",
        "\uef29": "\u8005",
        "\uee3e": "\u7b49",
        "\ue541": "\u513f",
        "\uea88": "\u6253",
        "\ueb68": "\u73b0",
        "\uefa1": "\u4f53",
        "\ue4f9": "\u6709",
        "\uef5e": "\u522b",
        "\ue547": "\u5f00",
        "\ue851": "\u624b",
        "\ue26c": "\u91cc",
        "\ue9e4": "\u6837",
        "\ue011": "\u80fd",
        "\uea2f": "\u7279",
        "\ue3c3": "\u51fa",
        "\ue492": "\u4e3b",
        "\ue5ff": "\u6587",
        "\ue836": "\u6211",
        "\ue9b8": "\u8bf4",
        "\ue128": "\u5b9a",
        "\uedca": "\u624d",
        "\uef9c": "\u8981",
        "\ue174": "\u540c",
        "\uece8": "\u4f5c",
        "\uee6f": "\u4e00",
        "\ue2dd": "\u9762",
        "\ue22c": "\u53ef",
        "\uefe2": "\u6b64",
        "\uef8f": "\u90e8",
        "\ueee6": "\u5230",
        "\uedb0": "\u516c",
        "\ue2bd": "\u8bdd",
        "\ue847": "\u65f6",
        "\ue1b1": "\u9ad8",
        "\ue70c": "\u7406",
        "\ue698": "\u5b50",
        "\uefec": "\u4e9b",
        "\ue9b9": "\u5e76",
        "\ue76b": "\u5b83",
        "\ue146": "\u4e0a",
        "\ue87a": "\u5199",
        "\ueacc": "\u773c",
        "\ue176": "\u7528",
        "\ue087": "\u5f53",
        "\ue9ff": "\u4e86",
        "\ue27e": "\u60c5",
        "\ueef0": "\u6559",
        "\ue3f5": "\u529b",
        "\uec33": "\u65e0",
        "\uef0b": "\u795e",
        "\ue6b8": "\u6700",
        "\ue437": "\u5f97",
        "\uefc7": "\u88ab",
        "\ueab7": "\u6210",
        "\ue9f1": "\u5168",
        "\ue080": "\u4ee5",
        "\ue4f0": "\u4e24",
        "\ueac7": "\u5730",
        "\ue424": "\u6b63",
        "\uef66": "\u66f4",
        "\ue40b": "\u7740",
        "\ue353": "\u5fc3",
        "\ue4d8": "\u7ecf",
        "\ue2d3": "\u60f3",
        "\uee0b": "\u4e0e",
        "\ue772": "\u7b11",
        "\uee0c": "\u8eab",
        "\uef17": "\u540e",
        "\uee1c": "\u5b9e",
        "\ued2c": "\u7f8e",
        "\ue631": "\u95f4",
        "\ue420": "\u4e2d",
        "\uef7d": "\u518d",
        "\uea3f": "\u4e09",
        "\ueba1": "\u5374",
        "\uef67": "\u793e",
        "\ued33": "\u6765",
        "\ue534": "\u89c1",
        "\ue504": "\u5927",
        "\ue01d": "\u95e8",
        "\ue80a": "\u672c",
        "\uefd2": "\u8bba",
        "\uecea": "\u5df1",
        "\ueb02": "\u8fd8",
        "\ue0e6": "\u4f55",
        "\ue969": "\u540d",
        "\ue966": "\u51e0",
        "\ue1ab": "\u77e5",
        "\uec7a": "\u771f",
        "\ue41f": "\u5341",
        "\ue512": "\u751f",
        "\ue9cc": "\u5c06",
        "\ue60b": "\u601d",
        "\ue749": "\u8001",
        "\ue876": "\u53d1",
        "\ue00b": "\u897f",
        "\ue307": "\u6240",
        "\ueb6a": "\u90a3",
        "\uef09": "\u9053",
        "\uea1a": "\u4e5f",
        "\uea95": "\u524d",
        "\ue90c": "\u5df2",
        "\ue744": "\u58f0",
        "\uec4e": "\u4e0b",
        "\ue313": "\u679c",
        "\ue10c": "\u8d70",
        "\ue140": "\u6b7b",
        "\ue503": "\u56fd",
        "\uefda": "\u8fc7",
        "\uea9f": "\u4f60",
        "\ue0e4": "\u662f",
        "\uee4b": "\u5e74",
        "\ue6b3": "\u53bb",
        "\ue933": "\u628a",
        "\uee72": "\u6c11",
        "\ue4bd": "\u4e8c",
        "\ue8a9": "\u884c",
        "\ue317": "\u65e5",
        "\ueb4d": "\u611f",
        "\ue52f": "\u5929",
        "\ue6fe": "\u6ca1",
        "\ue2eb": "\u4ece",
        "\ue82a": "\u91cd",
        "\ueca4": "\u548c",
        "\ue655": "\u8d77",
        "\ue0f9": "\u4e0d",
        "\ue779": "\u592a",
        "\ue7e7": "\u5bf9",
        "\uebd7": "\u8fdb",
    },
    jjwxcfont_007p4: {
        "\uebbf": "\u800c",
        "\ue180": "\u90e8",
        "\ueeae": "\u4e3b",
        "\ue3ff": "\u89c1",
        "\uee42": "\u5f00",
        "\ue4e5": "\u7406",
        "\uea85": "\u4ee5",
        "\ue35a": "\u56e0",
        "\uefd1": "\u8bf4",
        "\uede5": "\u5316",
        "\ue74c": "\u4e8c",
        "\ue741": "\u624b",
        "\ue9f1": "\u4e48",
        "\ue977": "\u8d70",
        "\uecca": "\u540e",
        "\ueef6": "\u8fdb",
        "\ue411": "\u70b9",
        "\ue600": "\u591a",
        "\ue455": "\u53ef",
        "\ue5bd": "\u5230",
        "\ue4d8": "\u6765",
        "\ue4f8": "\u60f3",
        "\ue092": "\u60c5",
        "\uecb9": "\u53ea",
        "\uebcb": "\u4e5f",
        "\ueecd": "\u5f53",
        "\ue36f": "\u4eec",
        "\ue1b1": "\u5b50",
        "\ue0b2": "\u6b7b",
        "\ue134": "\u5f88",
        "\ue879": "\u4e49",
        "\ue1f5": "\u5934",
        "\ue53f": "\u65e0",
        "\ue902": "\u7269",
        "\ue900": "\u4e86",
        "\ueb41": "\u9053",
        "\ued7a": "\u5730",
        "\ue8e4": "\u8005",
        "\uee5d": "\u548c",
        "\ue7d2": "\u4f60",
        "\ue494": "\u884c",
        "\ue344": "\u5929",
        "\ue4f6": "\u5b66",
        "\ue24b": "\u53bb",
        "\ue1a5": "\u597d",
        "\ue579": "\u662f",
        "\ue4e1": "\u4e2a",
        "\ueb9f": "\u7b49",
        "\ue7b2": "\u767d",
        "\ue96a": "\u5c11",
        "\ue177": "\u7b2c",
        "\ue2eb": "\u5411",
        "\ue6e9": "\u4f55",
        "\uea61": "\u6253",
        "\ue156": "\u4e8b",
        "\ue9ed": "\u4e4b",
        "\ue6d1": "\u4ec0",
        "\uef5c": "\u4ee3",
        "\ue33e": "\u5199",
        "\ue827": "\u53f2",
        "\ue40e": "\u56db",
        "\ue9c6": "\u9ad8",
        "\ue7a2": "\u6587",
        "\ue5d8": "\u6709",
        "\ue158": "\u65f6",
        "\ue199": "\u58f0",
        "\ue052": "\u56fd",
        "\ue446": "\u95f4",
        "\uece6": "\u5e76",
        "\ued9c": "\u5e74",
        "\ue2b7": "\u51fa",
        "\uec10": "\u4e48",
        "\ue5f0": "\u4e9b",
        "\ue38c": "\u90fd",
        "\ue63c": "\u53d1",
        "\ue857": "\u540d",
        "\uebf3": "\u5973",
        "\ue92f": "\u628a",
        "\ue7f0": "\u518d",
        "\uee15": "\u4fbf",
        "\ue633": "\u897f",
        "\ue28f": "\u5c31",
        "\ue184": "\u8981",
        "\ue2d7": "\u80fd",
        "\ue37e": "\u81ea",
        "\ue948": "\u6211",
        "\ue6f3": "\u7f8e",
        "\uef07": "\u6cd5",
        "\uefa9": "\u8bdd",
        "\uee0c": "\u771f",
        "\uec00": "\u6027",
        "\uef61": "\u6c14",
        "\ue3a0": "\u4e00",
        "\uec41": "\u5173",
        "\uea47": "\u8fd9",
        "\ue3ca": "\u6700",
        "\ue0f3": "\u95ee",
        "\ueb11": "\u90a3",
        "\ue8d3": "\u65b0",
        "\ue1be": "\u4e66",
        "\ue8a9": "\u6837",
        "\ueb98": "\u516c",
        "\ue3c6": "\u4f46",
        "\uea30": "\u6210",
        "\ue381": "\u4e0d",
        "\ue279": "\u611f",
        "\ue49b": "\u65b9",
        "\ued32": "\u9762",
        "\ue6f9": "\u8eab",
        "\ue4e6": "\u542c",
        "\ue781": "\u4e24",
        "\ue9f4": "\u53e3",
        "\ue858": "\u6ca1",
        "\ue182": "\u91cd",
        "\ue928": "\u601d",
        "\ue245": "\u6c11",
        "\ue1fe": "\u7136",
        "\ue5b7": "\u51e0",
        "\ue309": "\u56de",
        "\ue40f": "\u5341",
        "\ue71b": "\u610f",
        "\ue54f": "\u5c0f",
        "\ue0f8": "\u4f53",
        "\ue45a": "\u7531",
        "\ue7cd": "\u770b",
        "\ue2a6": "\u5b83",
        "\uef49": "\u540c",
        "\uef8d": "\u7ed9",
        "\ue270": "\u4f7f",
        "\ueed0": "\u88ab",
        "\ue2d5": "\u91cc",
        "\ue30f": "\u8bba",
        "\ue660": "\u5168",
        "\ue105": "\u77e5",
        "\uec72": "\u5df1",
        "\ue11d": "\u79cd",
        "\uee12": "\u957f",
        "\uee16": "\u4e09",
        "\ue410": "\u513f",
        "\ue414": "\u679c",
        "\ueca9": "\u672c",
        "\uec0b": "\u5bf9",
        "\ue463": "\u8d77",
        "\ue4b8": "\u624d",
        "\ue909": "\u5927",
        "\ue6c9": "\u5176",
        "\ue9a1": "\u4e16",
        "\ue2ef": "\u53c8",
        "\ue7b9": "\u5f97",
        "\ued60": "\u6240",
        "\ue70e": "\u529b",
        "\ue21f": "\u7684",
        "\ue023": "\u5b9a",
        "\ue84a": "\u795e",
        "\ue845": "\u773c",
        "\ue510": "\u751f",
        "\ue0f4": "\u4e0e",
        "\uefb3": "\u522b",
        "\uef2c": "\u52a8",
        "\ueb9a": "\u7528",
        "\ue053": "\u7ecf",
        "\ueddf": "\u4e0b",
        "\ue96b": "\u5148",
        "\uec90": "\u5728",
        "\uecc9": "\u524d",
        "\ue4eb": "\u66f4",
        "\uef22": "\u6b64",
        "\ue1db": "\u6b63",
        "\ue4a2": "\u660e",
        "\ueb7a": "\u5b9e",
        "\ue2dc": "\u4ed6",
        "\ue98e": "\u7b11",
        "\ueb2f": "\u76f8",
        "\ue6ed": "\u8fd8",
        "\ue2dd": "\u5bb6",
        "\ue9e8": "\u5374",
        "\ue953": "\u4e3a",
        "\ue13b": "\u65e5",
        "\ue317": "\u7740",
        "\ue7a7": "\u5206",
        "\uea7e": "\u7279",
        "\uef78": "\u8001",
        "\ue8ad": "\u4eba",
        "\ue2c5": "\u5df2",
        "\ue3e0": "\u95e8",
        "\uee08": "\u793e",
        "\ue703": "\u592a",
        "\ue3df": "\u5979",
        "\ue6d5": "\u5fc3",
        "\uec91": "\u5c06",
        "\ueefa": "\u5982",
        "\uecba": "\u5916",
        "\ued5b": "\u4ece",
        "\ue608": "\u4e8e",
        "\uec9d": "\u6559",
        "\ue57d": "\u73b0",
        "\ued94": "\u8fc7",
        "\ue9cd": "\u4f5c",
        "\ueb7d": "\u4e2d",
        "\uebae": "\u4e0a",
    },
    jjwxcfont_007qa: {
        "\ue133": "\u4e8e",
        "\uebb8": "\u5bb6",
        "\uea23": "\u6765",
        "\ue587": "\u56de",
        "\ue93a": "\u6cd5",
        "\uedcf": "\u7ecf",
        "\ueb4e": "\u65b9",
        "\ue41e": "\u542c",
        "\ue643": "\u53ef",
        "\ueb4b": "\u9ad8",
        "\ue22a": "\u8fdb",
        "\uecff": "\u70b9",
        "\ue2e9": "\u53f2",
        "\ue02d": "\u5df2",
        "\uefbd": "\u60f3",
        "\ue2c8": "\u51fa",
        "\ue895": "\u65e5",
        "\ue9cf": "\u4ed6",
        "\ue79f": "\u529b",
        "\ue5a7": "\u77e5",
        "\ue1eb": "\u76f8",
        "\uefcd": "\u5b9a",
        "\uea1a": "\u5374",
        "\uea22": "\u5411",
        "\ue78a": "\u4ece",
        "\ue235": "\u6b7b",
        "\ue951": "\u662f",
        "\ueccb": "\u4f53",
        "\ue11a": "\u522b",
        "\ue7b0": "\u91cd",
        "\ue6c9": "\u52a8",
        "\ue7d3": "\u7b49",
        "\uec4d": "\u4e48",
        "\uec68": "\u4e86",
        "\uea09": "\u8fc7",
        "\ue007": "\u5148",
        "\ue0d6": "\u524d",
        "\ue101": "\u4f5c",
        "\uee4c": "\u6253",
        "\ue90a": "\u5f53",
        "\ue384": "\u5728",
        "\ued98": "\u6c14",
        "\uebc6": "\u800c",
        "\ue935": "\u56fd",
        "\ue942": "\u80fd",
        "\uef40": "\u5934",
        "\ue2ce": "\u6837",
        "\ue79c": "\u6210",
        "\ue5c4": "\u771f",
        "\ue653": "\u53e3",
        "\uec27": "\u4e3a",
        "\uea25": "\u5c0f",
        "\uede4": "\u5f00",
        "\ue350": "\u6c11",
        "\uee7b": "\u591a",
        "\uef51": "\u5b83",
        "\ue265": "\u4e48",
        "\uef43": "\u751f",
        "\uedf4": "\u6b63",
        "\uecc0": "\u7684",
        "\ue3a1": "\u4e2d",
        "\ue634": "\u6559",
        "\ueda5": "\u56db",
        "\uef13": "\u4ee3",
        "\uedb3": "\u8d77",
        "\uedb6": "\u6709",
        "\ue253": "\u8bba",
        "\ueb7c": "\u518d",
        "\ue6fa": "\u5c06",
        "\ue130": "\u8005",
        "\uec77": "\u6587",
        "\ueae2": "\u4f46",
        "\ue087": "\u8d70",
        "\uecc2": "\u4f7f",
        "\ue2df": "\u767d",
        "\ue1df": "\u95e8",
        "\ue117": "\u884c",
        "\ue70b": "\u5f88",
        "\ue96b": "\u56e0",
        "\ue2b4": "\u90fd",
        "\ue4e9": "\u8fd9",
        "\ue586": "\u597d",
        "\ue06e": "\u793e",
        "\uedc1": "\u5173",
        "\ue03d": "\u5973",
        "\uec89": "\u6ca1",
        x: "X",
        "\ue435": "\u7ed9",
        "\ueba9": "\u5fc3",
        "\ue583": "\u773c",
        "\uedd9": "\u5341",
        "\ue5ab": "\u5b9e",
        "\ue1d1": "\u4e0a",
        "\ue87c": "\u5f97",
        "\ue9a3": "\u5982",
        "\uef4c": "\u7269",
        "\ue8f9": "\u4e24",
        "\ueaab": "\u5b50",
        "\ue93f": "\u4e49",
        "\uef60": "\u65b0",
        "\ue870": "\u5168",
        "\uea80": "\u4ec0",
        "\ue396": "\u5929",
        "\ue5dc": "\u660e",
        "\ue5f0": "\u4e16",
        "\ue794": "\u65f6",
        "\uef3d": "\u95ee",
        "\ue15b": "\u8001",
        "\ue9f2": "\u4e66",
        "\ue008": "\u8981",
        "\ue630": "\u5e76",
        "\uef67": "\u4f60",
        "\ue09f": "\u4eba",
        "\ue36a": "\u4e8b",
        "\ue189": "\u7531",
        "\ue731": "\u5c31",
        "\ue14c": "\u88ab",
        "\uedb0": "\u4e5f",
        "\ue0f0": "\u5730",
        "\ue062": "\u9053",
        "\ue0d5": "\u6240",
        "\ue8a7": "\u679c",
        "\ue8aa": "\u7279",
        "\ueee6": "\u53ea",
        "\ueb71": "\u628a",
        "\uef76": "\u58f0",
        "\ue304": "\u624b",
        "\ueab9": "\u53c8",
        "\ue339": "\u4e00",
        "\ue954": "\u7f8e",
        "\ue569": "\u90e8",
        "\ue4bb": "\u516c",
        "\ue7b7": "\u4e3b",
        "\uec50": "\u51e0",
        "\ue487": "\u4fbf",
        "\ue7dc": "\u7528",
        "\ue425": "\u7406",
        "\ueb1b": "\u540e",
        "\ue193": "\u6700",
        "\ueb35": "\u672c",
        "\uecd9": "\u8bdd",
        "\ue616": "\u91cc",
        "\ue127": "\u6027",
        "\uecde": "\u7b2c",
        "\uef81": "\u795e",
        "\uecc5": "\u4e8c",
        "\ue76d": "\u65e0",
        "\ue95f": "\u66f4",
        "\ue0fb": "\u601d",
        "\ueb08": "\u5199",
        "\ue20f": "\u89c1",
        "\uef58": "\u7740",
        "\ue9aa": "\u4f55",
        "\ue7bb": "\u611f",
        "\uee18": "\u8bf4",
        "\uec36": "\u5c11",
        "\uec19": "\u4e0d",
        "\ued23": "\u548c",
        "\ue21f": "\u73b0",
        "\ued4b": "\u4e4b",
        "\ue5a0": "\u9762",
        "\uece4": "\u5df1",
        "\ue7a1": "\u5979",
        "\ue348": "\u540c",
        "\ue65c": "\u95f4",
        "\uef4b": "\u4eec",
        "\ued97": "\u624d",
        "\ued4d": "\u7136",
        "\uef5d": "\u4e0e",
        "\ue552": "\u5e74",
        "\uedf0": "\u79cd",
        "\ue57f": "\u5176",
        "\ue824": "\u897f",
        "\uecc7": "\u6211",
        "\ueb9b": "\u513f",
        "\ueda6": "\u540d",
        "\ue141": "\u5230",
        "\uebaf": "\u5bf9",
        "\uee8a": "\u610f",
        "\uec54": "\u53d1",
        "\ue422": "\u592a",
        "\ue510": "\u60c5",
        "\ue281": "\u90a3",
        "\ue232": "\u4e2a",
        "\uec70": "\u81ea",
        "\ue906": "\u5b66",
        "\ue6ca": "\u4e09",
        "\uebee": "\u5316",
        "\uee57": "\u957f",
        "\uea36": "\u53bb",
        "\ue2d6": "\u4e0b",
        "\ue8b7": "\u4ee5",
        "\ue11e": "\u8fd8",
        "\ue750": "\u5927",
        "\ue51d": "\u6b64",
        "\ue4ac": "\u5206",
        "\ue92d": "\u4e9b",
        "\ue498": "\u8eab",
        "\ue439": "\u770b",
        "\uee73": "\u7b11",
        "\ue318": "\u5916",
    },
    jjwxcfont_007tj: {
        "\uecd9": "\u53f2",
        "\ue7e5": "\u624b",
        "\ue370": "\u4e0e",
        "\ue16c": "\u6b7b",
        "\ue0e8": "\u6559",
        "\ueee7": "\u91cd",
        "\ue022": "\u4e3a",
        "\uef78": "\u4f46",
        "\ue7f1": "\u6c14",
        "\uef79": "\u79cd",
        "\ue416": "\u8bf4",
        "\ue166": "\u5173",
        "\ue283": "\u957f",
        "\ue396": "\u524d",
        "\ue7c0": "\u771f",
        "\uee59": "\u5bb6",
        "\ue5d3": "\u9053",
        "\ue762": "\u4e49",
        "\ueb46": "\u65e0",
        "\ue06b": "\u4e0b",
        "\ue66b": "\u8d70",
        "\ue7b5": "\u5973",
        "\ue245": "\u51fa",
        "\uec7a": "\u5341",
        "\ue674": "\u4e8e",
        "\ue5ae": "\u76f8",
        "\ue8c4": "\u60f3",
        "\uebf4": "\u5230",
        "\ue001": "\u4f60",
        "\ue112": "\u5728",
        "\ue78f": "\u770b",
        "\ue566": "\u5374",
        "\ue02c": "\u548c",
        "\uee15": "\u6ca1",
        "\ue7c6": "\u90e8",
        "\uebe5": "\u7b11",
        "\ue629": "\u5df2",
        "\uecd6": "\u4ece",
        "\uee22": "\u610f",
        "\ue350": "\u5176",
        "\ue8a5": "\u53e3",
        "\ue91c": "\u4e48",
        "\ue3e2": "\u5411",
        "\ue4bc": "\u5916",
        "\uee83": "\u793e",
        "\ue759": "\u65b9",
        "\ue65d": "\u91cc",
        "\uefd2": "\u4eba",
        "\ue23d": "\u8fdb",
        "\ue04d": "\u53bb",
        "\uee63": "\u773c",
        "\uef68": "\u4eec",
        "\ueaa1": "\u4e00",
        "\ue07a": "\u5316",
        "\uea9e": "\u591a",
        "\uec45": "\u66f4",
        "\ue824": "\u8eab",
        "\ue521": "\u90a3",
        "\ue8b9": "\u4f53",
        "\ueca5": "\u6700",
        "\ue6ae": "\u7740",
        "\ue3a4": "\u5df1",
        "\ue5ee": "\u52a8",
        "\ue034": "\u751f",
        "\ueec6": "\u9762",
        "\uea35": "\u4f55",
        "\ue9c6": "\u95f4",
        "\uea5d": "\u5c31",
        "\ue425": "\u53d1",
        "\ue0d7": "\u5e74",
        "\uef53": "\u6027",
        "\uebcb": "\u5b9e",
        "\ue035": "\u58f0",
        "\ue619": "\u4e2a",
        "\ue37f": "\u4e86",
        "\ue15f": "\u4e66",
        "\ue789": "\u679c",
        "\ue7d1": "\u6587",
        "\uece1": "\u7531",
        "\uef82": "\u5c11",
        "\ue792": "\u5730",
        "\ue481": "\u800c",
        "\ueb58": "\u4e24",
        "\uee8a": "\u540c",
        "\ue1f4": "\u5f00",
        "\ue057": "\u4fbf",
        "\ue9d9": "\u660e",
        "\uef4c": "\u5f53",
        "\ueb91": "\u6253",
        "\ue29d": "\u7ed9",
        "\ue752": "\u5e76",
        "\uefe6": "\u7269",
        "\uea8d": "\u8bba",
        "\ue18f": "\u624d",
        "\ued6c": "\u53ef",
        "\ueef2": "\u529b",
        "\uef01": "\u4e3b",
        "\uee6f": "\u89c1",
        "\uecc5": "\u5979",
        "\uefb1": "\u6cd5",
        "\ueeca": "\u5199",
        "\ue043": "\u8bdd",
        "\ue4bf": "\u90fd",
        "\ue79e": "\u4e0d",
        "\uec26": "\u9ad8",
        "\ue0ff": "\u4e4b",
        "\ueb8f": "\u516c",
        "\ue505": "\u6837",
        "\uebc6": "\u795e",
        "\uee6a": "\u662f",
        "\ue8ef": "\u4ed6",
        "\ue098": "\u7b49",
        "\ueb66": "\u4e9b",
        "\ue608": "\u5982",
        "\uef22": "\u7b2c",
        "\ue22a": "\u5f97",
        "\ue23f": "\u4f1a",
        "\ue990": "\u8981",
        "\uea8a": "\u5148",
        "\uec9e": "\u65b0",
        "\uebf9": "\u4f7f",
        "\ue253": "\u8fc7",
        "\ue213": "\u7684",
        "\uefa9": "\u5fc3",
        "\uefc0": "\u518d",
        "\ue15b": "\u70b9",
        "\ue6a6": "\u542c",
        "\uebfb": "\u8d77",
        "\ued9c": "\u5b50",
        "\ue130": "\u4ec0",
        "\uea62": "\u4e09",
        "\ueb60": "\u4e5f",
        "\uea06": "\u540d",
        "\ue156": "\u95ee",
        "\uea55": "\u4ee5",
        "\ue704": "\u6c11",
        "\ue747": "\u56db",
        "\ue4c0": "\u767d",
        "\ue902": "\u56de",
        "\ue840": "\u65e5",
        "\ue117": "\u73b0",
        "\ue0d0": "\u5b9a",
        "\ue5bd": "\u4f5c",
        "\ue384": "\u7ecf",
        "\ue3ce": "\u56fd",
        "\ue70f": "\u53c8",
        "\ue269": "\u5929",
        "\ue1c4": "\u5f88",
        "\ue2a1": "\u611f",
        "\ue62b": "\u53ea",
        "\uede5": "\u5b83",
        "\ueabd": "\u4e0a",
        "\ue906": "\u884c",
        "\ue3d4": "\u592a",
        "\ue446": "\u540e",
        "\ue193": "\u601d",
        "\uedfe": "\u5927",
        "\uecf3": "\u5c0f",
        "\ueafd": "\u7f8e",
        "\ue2fd": "\u56e0",
        "\ue9f1": "\u4e8b",
        "\ue22c": "\u672c",
        "\ue39d": "\u6b64",
        "\ue835": "\u4e2d",
        "\uec94": "\u6709",
        "\ue4ed": "\u88ab",
        "\ued24": "\u6211",
        "\ue34a": "\u5206",
        "\uea6c": "\u6210",
        "\ue275": "\u7528",
        "\ue122": "\u5934",
        "\uef88": "\u513f",
        "\ue168": "\u522b",
        "\uebf3": "\u77e5",
        "\ue6be": "\u6240",
        "\uea6e": "\u80fd",
        "\uea89": "\u628a",
        "\ue59e": "\u7279",
        "\ue9bc": "\u7136",
        "\ued1a": "\u81ea",
        "\ue922": "\u597d",
        "\ue066": "\u5bf9",
        "\ue9c7": "\u8fd8",
        "\ue9cb": "\u4e8c",
        "\ue11a": "\u6b63",
        "\ue5ca": "\u897f",
        "\uecb6": "\u60c5",
        "\ue462": "\u5c06",
        "\ue82c": "\u8005",
        "\ue7e8": "\u8001",
        "\ue108": "\u4ee3",
        "\ue9bd": "\u65f6",
        "\uec8e": "\u4e16",
        "\uef87": "\u5b66",
        "\ue6b0": "\u5168",
        "\ue083": "\u51e0",
        "\ue8c7": "\u95e8",
        "\ueb99": "\u6765",
        "\ued9f": "\u8fd9",
        "\uee45": "\u7406",
    },
    jjwxcfont_007x1: {
        "\ue23e": "\u90fd",
        "\ue80e": "\u5c11",
        "\uebdc": "\u4ee5",
        "\ue530": "\u662f",
        "\ue249": "\u5f53",
        "\uef46": "\u516c",
        "\ue0c6": "\u5934",
        "\uef69": "\u4e48",
        "\ueb2d": "\u8981",
        "\ue738": "\u5c06",
        "\ue77b": "\u5316",
        "\ueda9": "\u4e49",
        "\ueec0": "\u4f5c",
        "\ue2bf": "\u56fd",
        "\uefb9": "\u7ecf",
        "\ueb49": "\u4ece",
        "\uee8f": "\u4e0a",
        "\ue446": "\u6559",
        "\ue2ed": "\u53ea",
        "\ueb58": "\u5148",
        "\ue200": "\u4f1a",
        "\ue5ea": "\u80fd",
        "\ueea2": "\u5f00",
        "\ue437": "\u56e0",
        "\ue0ad": "\u51fa",
        "\ue25c": "\u8001",
        "\uee03": "\u7528",
        "\uec19": "\u5b50",
        "\ue44d": "\u4f55",
        "\ue73b": "\u4e3a",
        "\ue653": "\u597d",
        "\ueae9": "\u5929",
        "\ue659": "\u624b",
        "\uee1c": "\u5bb6",
        "\ue799": "\u76f8",
        "\ueb71": "\u518d",
        "\uea68": "\u957f",
        "\ueaad": "\u95ee",
        "\ue17d": "\u5b83",
        "\ue083": "\u5173",
        "\ue0bd": "\u773c",
        "\ue685": "\u7b11",
        "\ueec2": "\u524d",
        "\ue929": "\u5230",
        "\uee79": "\u6210",
        "\ue086": "\u8bba",
        "\uef63": "\u5199",
        "\uef6a": "\u5df2",
        "\ue2c6": "\u628a",
        "\ue115": "\u4f7f",
        "\uee4d": "\u56de",
        "\ue2eb": "\u5b66",
        "\ue7ca": "\u800c",
        "\uee21": "\u65e5",
        "\ueb7d": "\u4e2d",
        "\ueb55": "\u529b",
        "\ue00e": "\u6b64",
        "\ue2d8": "\u91cd",
        "\ue05b": "\u5df1",
        "\uee24": "\u7684",
        "\ue6e4": "\u95f4",
        "\ueb05": "\u6240",
        "\ue412": "\u65b0",
        "\ue665": "\u52a8",
        "\ue324": "\u540e",
        "\ue318": "\u542c",
        "\ue5a2": "\u91cc",
        "\ue84a": "\u4e8b",
        "\ue75e": "\u8005",
        "\ue001": "\u592a",
        "\ue035": "\u4e66",
        "\ue956": "\u79cd",
        "\ue9cd": "\u8bf4",
        "\ue7b7": "\u5b9a",
        "\ue2e8": "\u7531",
        "\uee20": "\u9053",
        "\uedb4": "\u4e16",
        "\ue7a0": "\u4e8e",
        "\ue92b": "\u65f6",
        "\ue9da": "\u4ec0",
        "\ue38b": "\u793e",
        "\ue209": "\u7269",
        "\uee02": "\u5c31",
        "\uea59": "\u8fd8",
        "\ue3fd": "\u8eab",
        "\ue97e": "\u51e0",
        "\ue699": "\u5916",
        "\ue07f": "\u9ad8",
        "\ue697": "\u513f",
        "\ue145": "\u88ab",
        "\ue278": "\u4e4b",
        "\ue344": "\u751f",
        "\ue45b": "\u4e3b",
        "\ue807": "\u7740",
        "\ue1f6": "\u540d",
        "\ue59d": "\u548c",
        "\ueb2a": "\u4e0e",
        "\ue0a4": "\u4ee3",
        "\ue616": "\u53ef",
        "\ue45d": "\u6587",
        "\ueeca": "\u70b9",
        "\ued40": "\u5411",
        "\ue214": "\u4f60",
        "\ue6e3": "\u6ca1",
        "\uecf8": "\u770b",
        "\ue2e4": "\u8bdd",
        "\ue40e": "\u6cd5",
        "\ue427": "\u601d",
        "\ue1d8": "\u5341",
        "\uefce": "\u5206",
        "\uedda": "\u5e76",
        "\ue4fe": "\u4e24",
        "\ue87f": "\u7f8e",
        "\ue588": "\u4e9b",
        "\uef26": "\u90e8",
        "\ue095": "\u897f",
        "\ue88f": "\u6837",
        "\ueb2b": "\u5bf9",
        "\ueb88": "\u4eec",
        "\uead5": "\u4e09",
        "\ue7ee": "\u5973",
        "\uebdb": "\u591a",
        "\ue439": "\u4f53",
        "\ue990": "\u77e5",
        "\ue3a4": "\u5f88",
        "\ue6c3": "\u5b9e",
        "\uea76": "\u53bb",
        "\ueefe": "\u5728",
        "\ue2f4": "\u672c",
        "\ue44a": "\u4e00",
        "\uef38": "\u6b63",
        "\ueb1d": "\u6c11",
        "\ue602": "\u8fd9",
        "\ue8b4": "\u58f0",
        "\ue100": "\u771f",
        "\ue4c2": "\u5979",
        "\ue383": "\u7136",
        "\uebe9": "\u7279",
        "\ue53e": "\u4e5f",
        "\uefcb": "\u6211",
        "\ue2f8": "\u6027",
        "\ue714": "\u6765",
        "\uee59": "\u6c14",
        "\ue026": "\u5fc3",
        "\uec2f": "\u884c",
        "\uea48": "\u6253",
        "\ue4da": "\u65e0",
        "\ue20f": "\u5168",
        "\ue797": "\u81ea",
        "\uec42": "\u56db",
        "\ue9a5": "\u9762",
        "\ue566": "\u522b",
        "\ue205": "\u53d1",
        "\uee97": "\u4f46",
        "\ue3d8": "\u4e0d",
        "\uea32": "\u8fdb",
        "\uef59": "\u8fc7",
        "\uea91": "\u4ed6",
        "\ueb5c": "\u795e",
        "\uebdd": "\u7406",
        "\ue8d9": "\u6b7b",
        "\ue042": "\u5e74",
        "\ueca2": "\u7b49",
        "\ueef5": "\u53c8",
        "\ue4e0": "\u73b0",
        "\ue2fb": "\u4e8c",
        "\ue8c4": "\u7ed9",
        "\uee58": "\u5927",
        "\ued82": "\u4e86",
        "\uef4c": "\u660e",
        "\ue786": "\u6709",
        "\ue79b": "\u611f",
        "\uedc8": "\u4fbf",
        "\ue2a8": "\u610f",
        "\ueff8": "\u7b2c",
        "\uef8c": "\u4e2a",
        "\ueece": "\u60f3",
        "\ueb6f": "\u65b9",
        "\ue273": "\u8d70",
        "\ue88d": "\u5176",
        "\ue6d9": "\u66f4",
        "\ueeea": "\u6700",
        "\ue950": "\u5f97",
        "\ue329": "\u95e8",
        "\ue1f8": "\u5730",
        "\ueafa": "\u4eba",
        "\ue460": "\u89c1",
        "\uecfc": "\u8d77",
        "\ueebf": "\u53e3",
        "\ue5ac": "\u5374",
        "\ue2fd": "\u624d",
        "\ue597": "\u4e0b",
        "\ue93b": "\u5982",
        "\uefc9": "\u5c0f",
        "\ue414": "\u90a3",
        "\ue5d2": "\u679c",
        "\uefeb": "\u60c5",
        "\ueea8": "\u540c",
        "\ue8fd": "\u767d",
        "\ueced": "\u53f2",
    },
    jjwxcfont_007yi: {
        "\ued02": "\u5f88",
        "\ue87b": "\u8bf4",
        "\uebe4": "\u95ee",
        "\uedbf": "\u53ea",
        "\uee91": "\u5df1",
        "\ue36b": "\u4e3a",
        "\ued83": "\u5c06",
        "\uee76": "\u79cd",
        "\ueeae": "\u6027",
        "\ue9e5": "\u60f3",
        "\ue1d4": "\u516c",
        "\ue8a5": "\u56e0",
        "\ue63f": "\u53d1",
        "\ue10e": "\u4e3b",
        "\ueba2": "\u6559",
        "\ue3a8": "\u6709",
        "\uea74": "\u5316",
        "\uea51": "\u7528",
        "\ue41a": "\u5411",
        "\ue3dd": "\u4e8b",
        "\ue27c": "\u4e2a",
        "\ued84": "\u4eec",
        "\uec63": "\u4ec0",
        "\uebfc": "\u7684",
        "\ue0a1": "\u660e",
        "\uef81": "\u4e00",
        "\ue04c": "\u5341",
        "\ue71e": "\u51e0",
        "\ueea2": "\u7b2c",
        "\ue478": "\u610f",
        "\ue538": "\u4e0e",
        "\ueb1a": "\u56fd",
        "\ue411": "\u4eba",
        "\uecd5": "\u5374",
        "\ue8a3": "\u4e48",
        "\uee26": "\u4e66",
        "\uebaa": "\u5230",
        "\uec4c": "\u4e09",
        "\ue3a5": "\u70b9",
        "\ue2ae": "\u8005",
        "\ue304": "\u4e8c",
        "\uef76": "\u4ed6",
        "\ue782": "\u8d77",
        "\uee14": "\u524d",
        "\ued8e": "\u90fd",
        "\ueb1b": "\u628a",
        "\ue215": "\u5173",
        "\ue710": "\u767d",
        "\uee11": "\u5f53",
        "\uea0c": "\u5b66",
        "\ue72d": "\u7269",
        "\ue49b": "\u5b50",
        "\ue5d4": "\u6837",
        "\uecb3": "\u5b9e",
        "\uef5b": "\u5e74",
        "\ueef6": "\u6b7b",
        "\ue323": "\u624b",
        "\ueb38": "\u5206",
        "\ue5a4": "\u65e5",
        "\uec1a": "\u4f60",
        "\ue0dd": "\u5730",
        "\ue0d9": "\u53f2",
        "\ue14b": "\u5fc3",
        "\uecd1": "\u4e4b",
        "\ue310": "\u8bdd",
        "\ue7c9": "\u51fa",
        "\ue836": "\u597d",
        "\ued7f": "\u4e49",
        "\ueb28": "\u4e5f",
        "\ue0d6": "\u771f",
        "\ue3cc": "\u4f53",
        "\uefbf": "\u5bb6",
        "\uec40": "\u66f4",
        "\ued47": "\u529b",
        "\ue22e": "\u7f8e",
        "\ue53c": "\u89c1",
        "\ue3f1": "\u4e16",
        "\ue363": "\u7b49",
        "\ue46b": "\u80fd",
        "\ueb34": "\u4f7f",
        "\ue812": "\u5728",
        "\ue4a5": "\u5c0f",
        "\ue1ba": "\u4e0d",
        "\ue11d": "\u7ed9",
        "\ue014": "\u81ea",
        "\uedcb": "\u60c5",
        "\uea42": "\u6c11",
        "\ue721": "\u58f0",
        "\ue805": "\u662f",
        "\ue9a5": "\u611f",
        "\ue7a1": "\u884c",
        "\uea95": "\u770b",
        "\ue63c": "\u795e",
        "\ue49c": "\u95e8",
        "\uec69": "\u5c11",
        "\uedb2": "\u4e8e",
        "\ueed7": "\u4f5c",
        "\ue2ac": "\u591a",
        "\ueac5": "\u518d",
        "\ue563": "\u5982",
        "\ueada": "\u4e0a",
        "\uede3": "\u5973",
        "\ue5e1": "\u4f46",
        "\ue458": "\u679c",
        "\ue34f": "\u9ad8",
        "\ue189": "\u6240",
        "\ued0f": "\u65b9",
        "\ue69a": "\u7136",
        "\ue152": "\u7b11",
        "\uead1": "\u5979",
        "\ue2e0": "\u8eab",
        "\ue288": "\u773c",
        "\uea29": "\u88ab",
        "\ued11": "\u4e0b",
        "\ue38b": "\u56db",
        "\uee9c": "\u95f4",
        "\uee5a": "\u7531",
        "\ue2cf": "\u5199",
        "\ue137": "\u4ee5",
        "\ue41d": "\u9762",
        "\ue976": "\u5916",
        "\ued8c": "\u91cd",
        "\uec74": "\u6211",
        "\uefa9": "\u6765",
        "\ue32b": "\u540d",
        "\ue1a7": "\u4ece",
        "\ue34c": "\u53e3",
        "\ue777": "\u7279",
        "\ue9ee": "\u4e9b",
        "\uecae": "\u9053",
        "\uecd0": "\u52a8",
        "\ue691": "\u4f55",
        "\ue978": "\u592a",
        "\ued72": "\u4ee3",
        "\ue123": "\u8001",
        "\uef18": "\u4e48",
        "\ue81f": "\u542c",
        "\uecb2": "\u513f",
        "\uef11": "\u5df2",
        "\ue7ce": "\u76f8",
        "\ue087": "\u53ef",
        "\ueca9": "\u5c31",
        "\uef73": "\u7406",
        "\ueb94": "\u5e76",
        "\uef84": "\u672c",
        "\uefa0": "\u5176",
        "\ue560": "\u5929",
        "\ue6be": "\u53c8",
        "\uee85": "\u5927",
        "\ue13d": "\u7ecf",
        "\ue5a8": "\u6700",
        "\uef2b": "\u73b0",
        "\uea22": "\u5148",
        "\ue8f3": "\u6210",
        "\ue8a0": "\u65f6",
        "\ue69c": "\u8fdb",
        "\ue9f2": "\u4e86",
        "\uedd2": "\u4e24",
        "\ue227": "\u4e2d",
        "\ue834": "\u90a3",
        "\ue684": "\u897f",
        "\ue148": "\u5934",
        "\ueb0d": "\u793e",
        "\ue887": "\u540e",
        "\uea3a": "\u8d70",
        "\ue08f": "\u53bb",
        "\uee7b": "\u65b0",
        "\ueaea": "\u5b9a",
        "\ue0c2": "\u6b63",
        "\ue817": "\u6253",
        "\uedcc": "\u540c",
        "\ueffe": "\u5f97",
        "\ue578": "\u6c14",
        "\ue05a": "\u522b",
        "\ueeed": "\u548c",
        "\ue396": "\u7740",
        "\ue151": "\u5f00",
        "\ue2b7": "\u5168",
        "\ue0bc": "\u800c",
        "\uec76": "\u6cd5",
        "\ue86f": "\u8981",
        "\ue865": "\u90e8",
        "\ue06a": "\u6587",
        "\ue585": "\u6b64",
        "\ue859": "\u8fd9",
        "\uef23": "\u751f",
        "\ue3bf": "\u5bf9",
        "\ue135": "\u4fbf",
        "\ue7d8": "\u5b83",
        "\ue179": "\u957f",
        "\ue898": "\u91cc",
        "\ue789": "\u56de",
        "\ue440": "\u601d",
        "\ue890": "\u8fd8",
        "\ue924": "\u77e5",
        "\uee78": "\u65e0",
        "\ue949": "\u8fc7",
        "\ue127": "\u624d",
        "\ue58a": "\u6ca1",
        "\uec25": "\u8bba",
    },
    jjwxcfont_0082v: {
        "\uebd0": "\u4f5c",
        "\uee98": "\u6240",
        "\ue5e2": "\u5148",
        "\uee79": "\u6700",
        "\ue17a": "\u53e3",
        "\ued2c": "\u4eec",
        "\uef17": "\u5929",
        "\ue6f3": "\u5934",
        "\ue0eb": "\u4e8c",
        "\ue98a": "\u8bba",
        "\ue5bf": "\u51fa",
        "\uebe8": "\u5bf9",
        "\ue536": "\u5c11",
        "\ueec9": "\u5c0f",
        "\uec17": "\u518d",
        "\ue7f0": "\u897f",
        "\ue984": "\u5b50",
        "\ue494": "\u6210",
        "\ue568": "\u5e74",
        "\uecc7": "\u751f",
        "\ueed6": "\u90e8",
        "\ueb50": "\u516c",
        "\ueae0": "\u5206",
        "\ue46b": "\u53ea",
        "\ue8fe": "\u5316",
        "\ue4ca": "\u5b9a",
        "\ue3b7": "\u4e8e",
        "\ue5ed": "\u601d",
        "\uefa6": "\u60c5",
        "\ue12b": "\u5fc3",
        "\ue865": "\u5df2",
        "\ue58c": "\u8fd9",
        "\ue92b": "\u6559",
        "\ue97a": "\u770b",
        "\ue8e4": "\u540c",
        "\uec46": "\u4e2d",
        "\uea83": "\u5982",
        "\ue9c1": "\u79cd",
        "\ueeda": "\u597d",
        "\ue10a": "\u8bdd",
        "\ue176": "\u884c",
        "\uefe0": "\u7269",
        "\ue886": "\u65b9",
        "\ue900": "\u4ec0",
        "\uea0d": "\u5173",
        "\ue5d4": "\u6027",
        "\ue673": "\u679c",
        "\ue751": "\u4f46",
        "\ue58d": "\u540e",
        "\ue82c": "\u6ca1",
        "\ue040": "\u6c14",
        "\ue01e": "\u5230",
        "\uebb1": "\u9053",
        "\ue142": "\u90fd",
        "\uebc1": "\u56db",
        "\ue1de": "\u8eab",
        "\ue789": "\u4e8b",
        "\ue83d": "\u65e0",
        "\ued56": "\u660e",
        "\ue96e": "\u4e3a",
        "\uebed": "\u5411",
        "\ue778": "\u4e4b",
        "\uebc7": "\u7b2c",
        "\ue837": "\u7528",
        "\ue051": "\u591a",
        "\ue848": "\u5730",
        "\uea92": "\u8001",
        "\ue68e": "\u95f4",
        "\ue723": "\u6c11",
        "\ue669": "\u5f00",
        "\ue729": "\u6837",
        "\ue686": "\u7b49",
        "\ue147": "\u7406",
        "\ue212": "\u8fd8",
        "\ue758": "\u524d",
        "\ueaf4": "\u4ece",
        "\ue72c": "\u7ecf",
        "\ue9bb": "\u5b83",
        "\ue3ba": "\u628a",
        "\ue321": "\u4f55",
        "\uee3a": "\u5f97",
        "\uee67": "\u793e",
        "\uee08": "\u5c06",
        "\uebbc": "\u7740",
        "\ue1b2": "\u5f88",
        "\ue69f": "\u7ed9",
        "\uee21": "\u6765",
        "\uedee": "\u4e49",
        "\ueb42": "\u5b66",
        "\ue591": "\u8bf4",
        "\ue29f": "\u4e00",
        "\ue3d7": "\u672c",
        "\ue249": "\u5979",
        "\ue61a": "\u624b",
        "\ue00e": "\u771f",
        "\ued5c": "\u4e0a",
        "\ue18c": "\u70b9",
        "\ue3a5": "\u5e76",
        "\ue93b": "\u7684",
        "\ue53a": "\u957f",
        "\ue384": "\u95e8",
        "\ue07d": "\u8fdb",
        "\ue473": "\u540d",
        "\ue115": "\u4e0e",
        "\ue7b2": "\u4f60",
        "\ue29d": "\u5c31",
        "\ue6ad": "\u8005",
        "\ue1a5": "\u5bb6",
        "\ue28b": "\u4e24",
        "\ue913": "\u529b",
        "\ue7ec": "\u8d77",
        "\ue7c6": "\u8981",
        "\uebce": "\u65e5",
        "\uea94": "\u5199",
        "\ue547": "\u522b",
        "\ue47b": "\u542c",
        "\ue057": "\u7b11",
        "\ue376": "\u4e86",
        "\uee1f": "\u7136",
        "\ue6a1": "\u4e3b",
        "\uea11": "\u4e16",
        "\ue518": "\u4ed6",
        "\ue68f": "\u773c",
        "\ue970": "\u5927",
        "\ue272": "\u5728",
        "\ueae8": "\u767d",
        "\ue27f": "\u53bb",
        "\uee8d": "\u52a8",
        "\ue927": "\u4e0b",
        "\ue03a": "\u4f7f",
        "\ue6b7": "\u73b0",
        "\uecf6": "\u4ee5",
        "\ue91f": "\u4e48",
        "\ueea0": "\u76f8",
        "\ue906": "\u4e2a",
        "\ue759": "\u81ea",
        "\ue09d": "\u6211",
        "\ue9f6": "\u5f53",
        "\ue70a": "\u66f4",
        "\ue139": "\u5341",
        "\uedcd": "\u6253",
        "\ue028": "\u548c",
        "\ue4c0": "\u90a3",
        "\ue4c1": "\u53c8",
        "\ueb37": "\u89c1",
        "\ued22": "\u9762",
        "\uedb6": "\u58f0",
        "\ueb9f": "\u610f",
        "\ue1e2": "\u8fc7",
        "\ue87f": "\u5df1",
        "\ue78f": "\u4ee3",
        "\ue590": "\u56de",
        "\ueeb0": "\u624d",
        "\ue564": "\u6587",
        "\ue1b0": "\u51e0",
        "\ue2fc": "\u5168",
        "\ue34b": "\u5374",
        "\ue202": "\u662f",
        "\ue651": "\u88ab",
        "\ue2ca": "\u65f6",
        "\uef0d": "\u7531",
        "\ue708": "\u53f2",
        "\ue8bc": "\u6709",
        "\ue9d1": "\u80fd",
        "\ue5ce": "\u6cd5",
        "\ueb87": "\u4eba",
        "\ue1e8": "\u65b0",
        "\ueb51": "\u4e66",
        "\ue0e9": "\u6b7b",
        "\ue770": "\u7279",
        "\ue7ce": "\u5916",
        "\ue946": "\u9ad8",
        "\uee2e": "\u6b63",
        "\ue79d": "\u60f3",
        "\ue9d8": "\u56fd",
        "\ued62": "\u53ef",
        "\ueebb": "\u4e0d",
        "\uea1a": "\u4e5f",
        "\uea24": "\u4e09",
        "\ued04": "\u5b9e",
        "\ue258": "\u5176",
        "\uebe6": "\u53d1",
        "\uea0b": "\u513f",
        "\ue1b6": "\u95ee",
        "\ue834": "\u56e0",
        "\uee3d": "\u8d70",
        "\ue887": "\u77e5",
        "\ue9fc": "\u7f8e",
        "\ueeab": "\u795e",
        "\ue6d2": "\u6b64",
        "\ue6bb": "\u592a",
        "\ue5ec": "\u91cc",
        "\ue565": "\u4fbf",
        "\ue859": "\u91cd",
        "\ue929": "\u800c",
        "\uecc1": "\u5973",
        "\ue169": "\u611f",
        "\ue671": "\u4f1a",
        "\uea10": "\u4e9b",
        "\uead8": "\u4f53",
    },
    jjwxcfont_00844: {
        "\ued34": "\u5730",
        "\ue303": "\u8fd8",
        "\ue5c1": "\u80fd",
        "\ueafb": "\u8981",
        "\ue720": "\u548c",
        "\ue487": "\u4e2a",
        "\ue274": "\u9ad8",
        "\ue241": "\u773c",
        "\ue5fd": "\u5c0f",
        "\ue1c7": "\u70b9",
        "\ue79a": "\u800c",
        "\uea3a": "\u4f53",
        "\ue82e": "\u91cd",
        "\ueaa1": "\u672c",
        "\ue31f": "\u8d77",
        "\ue991": "\u7531",
        "\ue481": "\u5148",
        "\ue868": "\u5e74",
        "\uee70": "\u7528",
        "\ue792": "\u90e8",
        "\ue3e2": "\u5341",
        "\ueea3": "\u4ed6",
        "\uefbe": "\u4f60",
        "\ue71e": "\u4e66",
        "\uee4a": "\u4e3b",
        "\ue5cd": "\u4e8c",
        "\uec9a": "\u540c",
        "\ue3f6": "\u53c8",
        "\uef15": "\u6700",
        "\ue409": "\u5bf9",
        "\ue6cc": "\u95e8",
        "\uedef": "\u5934",
        "\ueb90": "\u5c06",
        "\ue589": "\u4e48",
        "\uef10": "\u6c11",
        "\ue323": "\u6253",
        "\ueb2f": "\u4e0e",
        "\ue913": "\u53bb",
        "\ue506": "\u5df2",
        "\ue9cb": "\u60f3",
        "\ue11e": "\u4ee5",
        "\ueb19": "\u542c",
        "\ue7d6": "\u6709",
        "\uee27": "\u5176",
        "\ue3b9": "\u53f2",
        "\ue2d0": "\u610f",
        "\ue4e2": "\u6cd5",
        "\ue6cf": "\u4e00",
        "\ueed2": "\u51e0",
        "\uee81": "\u89c1",
        "\ue688": "\u518d",
        "\ue879": "\u6027",
        "\ue3a9": "\u5982",
        "\ue4d2": "\u56fd",
        "\ue1f6": "\u4e09",
        "\ue2f3": "\u7740",
        "\ue138": "\u5973",
        "\uedaa": "\u8bdd",
        "\ueba9": "\u8bba",
        "\ue207": "\u7684",
        "\ue8ca": "\u7ed9",
        "\uebc1": "\u5916",
        "\ue6ed": "\u4eec",
        "\uecdc": "\u4f5c",
        "\uea98": "\u53ea",
        "\ue4a1": "\u4e0b",
        "\uec06": "\u5b9a",
        "\ue3a6": "\u56e0",
        "\uee89": "\u522b",
        "\ue5ef": "\u4ec0",
        "\ue0c7": "\u5bb6",
        "\ue7ee": "\u5927",
        "\uecf5": "\u793e",
        "\ue819": "\u540e",
        "\ue6c9": "\u6b64",
        "\ue18f": "\u5c31",
        "\ue6eb": "\u795e",
        "\ueec8": "\u6b63",
        "\ue553": "\u5b83",
        "\ueda6": "\u5230",
        "\ue6d3": "\u529b",
        "\ue097": "\u6211",
        "\ue996": "\u6c14",
        "\uee75": "\u5168",
        "\uec32": "\u597d",
        "\ue8e6": "\u540d",
        "\ue094": "\u4e0a",
        "\ueb02": "\u4e9b",
        "\ueaad": "\u4e49",
        "\uef2d": "\u5199",
        "\ueea4": "\u4fbf",
        "\ue444": "\u5e76",
        "\ue26b": "\u66f4",
        "\ue620": "\u4e8b",
        "\ue8a6": "\u6b7b",
        "\ue2c4": "\u660e",
        "\ue45c": "\u5c11",
        "\ue418": "\u76f8",
        "\ue32b": "\u897f",
        "\ue365": "\u628a",
        "\uea7d": "\u88ab",
        "\ue267": "\u65b9",
        "\ue85b": "\u4e4b",
        "\ue38d": "\u8005",
        "\uecaf": "\u662f",
        "\ue2f1": "\u7136",
        "\ue9ad": "\u6587",
        "\uea77": "\u81ea",
        "\uecfe": "\u6210",
        "\ue630": "\u5374",
        "\ue06d": "\u4e5f",
        "\ued3a": "\u9053",
        "\ue42d": "\u56de",
        "\ued9d": "\u624d",
        "\ue2d1": "\u90fd",
        "\ue9d5": "\u4e8e",
        "\uedd7": "\u770b",
        "\ued56": "\u5b66",
        "\ueb6f": "\u7269",
        "\ue7fa": "\u65e0",
        "\ue451": "\u4e2d",
        "\ueaa7": "\u5fc3",
        "\uebed": "\u8bf4",
        "\ued2e": "\u5979",
        "\ue6a7": "\u7ecf",
        "\ue731": "\u5316",
        "\ueaa9": "\u79cd",
        "\uec45": "\u6559",
        "\uea43": "\u611f",
        "\ue04b": "\u65b0",
        "\ue22b": "\u5b9e",
        "\ue3aa": "\u884c",
        "\ue612": "\u95f4",
        "\ue909": "\u56db",
        "\ue905": "\u90a3",
        "\ue3ed": "\u5173",
        "\ue552": "\u6837",
        "\ue55d": "\u767d",
        "\ue692": "\u8001",
        "\uee4e": "\u8fdb",
        "\ue22f": "\u5411",
        "\ue883": "\u516c",
        "\ue275": "\u771f",
        "\ue060": "\u679c",
        "\ue3e8": "\u4e0d",
        "\ue3f9": "\u8eab",
        "\uedaf": "\u591a",
        "\ue2cb": "\u5f00",
        "\ue1e9": "\u6240",
        "\ue309": "\u51fa",
        "\uecc8": "\u4eba",
        "\ue57f": "\u95ee",
        "\ue610": "\u4e86",
        "\ue1b0": "\u592a",
        "\ue103": "\u4ee3",
        "\ue674": "\u8fc7",
        "\uef89": "\u73b0",
        "\ue8f0": "\u7b11",
        "\ueff9": "\u957f",
        "\ue1ae": "\u7b2c",
        "\ue108": "\u4e24",
        "\uef50": "\u6765",
        "\ue9a0": "\u751f",
        "\ue959": "\u6ca1",
        "\ue985": "\u5df1",
        "\ue1c1": "\u601d",
        "\ue9d0": "\u7b49",
        "\ue11c": "\u7279",
        "\ueede": "\u5728",
        "\ue1ed": "\u4f7f",
        "\ue1f0": "\u5929",
        "\ue576": "\u5b50",
        "\ue15b": "\u513f",
        "\ueeca": "\u4f1a",
        "\ue35d": "\u60c5",
        "\ue6e7": "\u4ece",
        "\uec11": "\u4f55",
        "\ue199": "\u8fd9",
        "\ue687": "\u5f53",
        "\ue4f8": "\u7406",
        "\ue433": "\u4e16",
        "\ue67b": "\u524d",
        "\ue269": "\u91cc",
        "\ue300": "\u65f6",
        "\uea3f": "\u4f46",
        "\ue9f9": "\u8d70",
        "\uefa5": "\u624b",
        "\uec42": "\u53d1",
        "\uee10": "\u52a8",
        "\ue05b": "\u9762",
        "\ueb43": "\u4e3a",
        "\ueb79": "\u53e3",
        "\ue4d5": "\u5f97",
        "\ue7da": "\u77e5",
        "\ue100": "\u7f8e",
        "\ue16c": "\u65e5",
        "\ue4f9": "\u5f88",
        "\ue56f": "\u5206",
        "\ueca3": "\u58f0",
        "\uec6e": "\u53ef",
    },
    jjwxcfont_0088f: {
        "\ue2d9": "\u4e24",
        "\uede5": "\u4f55",
        "\uec32": "\u4ece",
        "\ue347": "\u5f53",
        "\ue2af": "\u6559",
        "\ued12": "\u95e8",
        "\ueb8f": "\u611f",
        "\uec7e": "\u4f1a",
        "\ue7a8": "\u66f4",
        "\uec21": "\u53f2",
        "\uef94": "\u5df1",
        "\ue688": "\u53ef",
        "\uea95": "\u65e5",
        "\uebf2": "\u65b9",
        "\uec7d": "\u95ee",
        "\ue895": "\u51e0",
        "\uef9f": "\u628a",
        "\uec27": "\u53bb",
        "\ue607": "\u5973",
        "\ue8d8": "\u771f",
        "\uec13": "\u81ea",
        "\uecd0": "\u80fd",
        "\ue795": "\u58f0",
        "\ue4b2": "\u4e3b",
        "\ue10c": "\u897f",
        "\ue9a6": "\u6837",
        "\ue1a7": "\u6b63",
        "\uef9a": "\u518d",
        "\ue0a5": "\u4e2a",
        "\ue6b2": "\u7528",
        "\ue8b7": "\u7406",
        "\ue07f": "\u5e74",
        "\ue0ab": "\u5982",
        "\ue7d1": "\u5b9a",
        "\uebd4": "\u5728",
        "\uebcf": "\u513f",
        "\uebbb": "\u89c1",
        "\ue522": "\u5341",
        "\ue016": "\u60c5",
        "\uedfa": "\u4e8c",
        "\ue883": "\u60f3",
        "\ue652": "\u8fdb",
        "\ueb4c": "\u4e8e",
        "\ue99d": "\u767d",
        "\uee2d": "\u601d",
        "\ue129": "\u5b83",
        "\ue8ec": "\u9ad8",
        "\uee25": "\u540c",
        "\uea02": "\u5374",
        "\ue08c": "\u591a",
        "\uef6a": "\u6b64",
        "\uee1a": "\u5e76",
        "\ue61e": "\u4e9b",
        "\ue721": "\u5c31",
        "\ue048": "\u4e3a",
        "\ue671": "\u4f60",
        "\uec42": "\u5916",
        "\uef21": "\u8bba",
        "\ue76d": "\u7269",
        "\ued14": "\u5176",
        "\ue9ca": "\u4e8b",
        "\ue122": "\u53c8",
        "\ue2b0": "\u592a",
        "\ue75f": "\u5c0f",
        "\uedd0": "\u6700",
        "\ue2eb": "\u6765",
        "\uee67": "\u5b66",
        "\ue77e": "\u5230",
        "\ueaa9": "\u5206",
        "\uea0a": "\u6b7b",
        "\uea08": "\u4f5c",
        "\uef80": "\u5b9e",
        "\ue86d": "\u4ee3",
        "\ue309": "\u4e16",
        "\uee66": "\u751f",
        "\ue7b7": "\u5c11",
        "\ueb66": "\u5bb6",
        "\uebe0": "\u56fd",
        "\ue0b7": "\u4eec",
        "\ueb74": "\u91cc",
        "\uee24": "\u7684",
        "\uec3e": "\u4fbf",
        "\uedeb": "\u8fd8",
        "\ue1b6": "\u516c",
        "\uec4a": "\u4e0e",
        "\ueea9": "\u5730",
        "\ue3c8": "\u542c",
        "\ued79": "\u672c",
        "\ue3f6": "\u773c",
        "\ue654": "\u540e",
        "\ue777": "\u610f",
        "\ue872": "\u6709",
        "\ueedf": "\u6cd5",
        "\ue301": "\u6c11",
        "\ueea4": "\u624d",
        "\ue98b": "\u9762",
        "\uea1a": "\u4e86",
        "\ue87b": "\u8bdd",
        "\ue7cf": "\u56e0",
        "\ueb90": "\u5411",
        "\uedc8": "\u4e09",
        "\ue929": "\u4e0a",
        "\ue7ad": "\u5934",
        "\ue161": "\u884c",
        "\ueba3": "\u7f8e",
        "\ue8c3": "\u624b",
        "\ue8c0": "\u4eba",
        "\ue769": "\u90e8",
        "\ue573": "\u5fc3",
        "\ue4c0": "\u4e2d",
        "\uef34": "\u4f7f",
        "\ue07d": "\u90a3",
        "\ue310": "\u65f6",
        "\ue80c": "\u4e0d",
        "\uebe8": "\u8d70",
        "\uecd1": "\u53e3",
        "\ue804": "\u8d77",
        "\ue903": "\u5929",
        "\ue6a8": "\u770b",
        "\uee5d": "\u548c",
        "\ue889": "\u65e0",
        "\ue4d7": "\u6587",
        "\uef9c": "\u7279",
        "\ueecd": "\u662f",
        "\ue215": "\u51fa",
        "\ue7d2": "\u76f8",
        "\ueded": "\u53d1",
        "\ue8a0": "\u540d",
        "\ue526": "\u7136",
        "\ued54": "\u529b",
        "\ue427": "\u8001",
        "\uea50": "\u4e4b",
        "\ue993": "\u7b49",
        "\ue9d5": "\u5979",
        "\ue169": "\u91cd",
        "\ueb2c": "\u7ed9",
        "\ue7bd": "\u6240",
        "\ueaf2": "\u8fd9",
        "\ue1df": "\u6253",
        "\ue8d2": "\u6ca1",
        "\ue9b9": "\u597d",
        "\ue66c": "\u8eab",
        "\uec3b": "\u53ea",
        "\ue6e8": "\u5199",
        "\ue4e7": "\u8005",
        "\ue0bb": "\u6210",
        "\ued83": "\u4ed6",
        "\ue627": "\u4ec0",
        "\ueb02": "\u5927",
        "\ue243": "\u90fd",
        "\ue84e": "\u77e5",
        "\uede1": "\u5f00",
        "\ue2d2": "\u8fc7",
        "\ue9f3": "\u88ab",
        "\ue50c": "\u793e",
        "\uedb1": "\u56de",
        "\ue6ec": "\u4e5f",
        "\ueb24": "\u5168",
        "\ue619": "\u65b0",
        "\ue486": "\u6c14",
        "\ue6de": "\u8981",
        "\ue708": "\u8bf4",
        "\ueb1b": "\u95f4",
        "\ue529": "\u56db",
        "\uec4e": "\u5f97",
        "\ue62c": "\u4e49",
        "\ue6b7": "\u679c",
        "\ue817": "\u9053",
        "\uee50": "\u957f",
        "\uefbb": "\u6211",
        "\ue1f3": "\u7b2c",
        "\uea88": "\u524d",
        "\ue24b": "\u4e0b",
        "\ueb4f": "\u5148",
        "\ued41": "\u5173",
        "\ued0e": "\u5df2",
        "\uecff": "\u795e",
        "\ue9ee": "\u5316",
        "\uee84": "\u4e66",
        "\ue0fe": "\u7740",
        "\uec69": "\u4f46",
        "\ueefc": "\u6027",
        "\ue4ec": "\u70b9",
        "\ue09c": "\u79cd",
        "\uef40": "\u5b50",
        "\ue009": "\u660e",
        "\ueea7": "\u4f53",
        "\ue44a": "\u7531",
        "\uee7d": "\u4ee5",
        "\ue41d": "\u5bf9",
        "\ue604": "\u800c",
        "\uec35": "\u73b0",
        "\ue479": "\u7ecf",
        "\ue5d4": "\u522b",
        "\ue988": "\u5f88",
        "\ue73c": "\u4e48",
        "\ue4b9": "\u52a8",
        "\ue508": "\u7b11",
        "\ue00f": "\u5c06",
        "\ue293": "\u4e00",
    },
    jjwxcfont_008ab: {
        "\uec83": "\u7f8e",
        "\uef49": "\u80fd",
        "\ue67f": "\u6210",
        "\uef6b": "\u5c31",
        "\ue77d": "\u591a",
        "\ue8c8": "\u592a",
        "\ue248": "\u51e0",
        "\ue3d3": "\u6b64",
        "\ue667": "\u5df1",
        "\ue00f": "\u8fd9",
        "\ue4f6": "\u540e",
        "\uec60": "\u95ee",
        "\ue56d": "\u5f53",
        "\uedeb": "\u8bba",
        "\ueca4": "\u624d",
        "\ue656": "\u4e8c",
        "\uee84": "\u5c0f",
        "\ue524": "\u4f1a",
        "\ue137": "\u4e49",
        "\ue897": "\u542c",
        "\ue520": "\u4e0a",
        "\ueb97": "\u56db",
        "\ue7bc": "\u4e0b",
        "\ue434": "\u800c",
        "\ue934": "\u7531",
        "\uef11": "\u4e16",
        "\ue8fc": "\u884c",
        "\uef89": "\u522b",
        "\ue728": "\u7406",
        "\ue69b": "\u65f6",
        "\ue5ab": "\u5979",
        "\ue9a5": "\u4e2a",
        "\ue3fc": "\u5230",
        "\ue905": "\u4e0e",
        "\ue927": "\u518d",
        "\uebad": "\u90e8",
        "\uef75": "\u8fdb",
        "\ue9c3": "\u53e3",
        "\uea49": "\u7b49",
        "\ue03b": "\u7279",
        "\ue6bf": "\u4ee5",
        "\ue32e": "\u513f",
        "\uedad": "\u5b50",
        "\ueefd": "\u6b63",
        "\ue502": "\u5982",
        "\ue37d": "\u7740",
        "\uec07": "\u5728",
        "\ue334": "\u5e76",
        "\uef2a": "\u53d1",
        "\ue4e1": "\u5934",
        "\ue9fc": "\u628a",
        "\uece9": "\u79cd",
        "\ue79a": "\u58f0",
        "\ue199": "\u95f4",
        "\ue1f2": "\u4e48",
        "\uebdd": "\u91cd",
        "\uea74": "\u89c1",
        "\ue15e": "\u65b0",
        "\ue1e5": "\u5148",
        "\uef00": "\u4ec0",
        "\ue66b": "\u6559",
        "\ue4de": "\u5316",
        "\ue4a6": "\u88ab",
        "\ue11f": "\u4f5c",
        "\uea95": "\u601d",
        "\ue5bd": "\u6cd5",
        "\ue50d": "\u662f",
        "\ue56e": "\u8d77",
        "\ueadb": "\u5973",
        "\ue4e6": "\u65e5",
        "\ued3a": "\u6211",
        "\ue96d": "\u5e74",
        "\ue769": "\u5b66",
        "\ue745": "\u5929",
        "\uebd4": "\u56e0",
        "\uee76": "\u5730",
        "\ue448": "\u793e",
        "\uec67": "\u65e0",
        "\ue258": "\u53c8",
        "\ue626": "\u7b11",
        "\ue7de": "\u6765",
        "\ue74e": "\u5199",
        "\ue7ff": "\u8bdd",
        "\uec0b": "\u5fc3",
        "\uec8b": "\u4f60",
        "\ueba5": "\u5f97",
        "\ued5b": "\u5f00",
        "\ue7a8": "\u8d70",
        "\ue5f9": "\u5c06",
        "\uecf5": "\u6c14",
        "\uec8d": "\u4ece",
        "\ue65a": "\u7684",
        "\ue4b1": "\u6837",
        "\uebbc": "\u5176",
        "\ue32f": "\u7269",
        "\ueae9": "\u51fa",
        "\ue5f1": "\u8001",
        "\ue5fe": "\u897f",
        "\ue798": "\u7ed9",
        "\ue20e": "\u56de",
        "\ue4aa": "\u610f",
        "\uedf0": "\u5c11",
        "\uef19": "\u679c",
        "\ue6ba": "\u81ea",
        "\uee28": "\u660e",
        "\ue7df": "\u4ee3",
        "\ue20c": "\u4e00",
        "\ue078": "\u4f7f",
        "\ued8f": "\u672c",
        "\ue162": "\u53ef",
        "\ue2d1": "\u4e8e",
        "\uee55": "\u52a8",
        "\ue4bb": "\u540d",
        "\ue98c": "\u611f",
        "\ue18d": "\u70b9",
        "\ue704": "\u5bf9",
        "\uec24": "\u6709",
        "\ueff8": "\u5916",
        "\ue988": "\u9ad8",
        "\ueffd": "\u7136",
        "\ue008": "\u624b",
        "\uea5f": "\u8981",
        "\ueb37": "\u5b83",
        "\ued16": "\u53ea",
        "\ue714": "\u8bf4",
        "\ue345": "\u6700",
        "\ue9c1": "\u773c",
        "\ueec7": "\u957f",
        "\ue67b": "\u771f",
        "\uedb1": "\u516c",
        "\uef4f": "\u4e24",
        "\ue43f": "\u5173",
        "\ue61d": "\u4ed6",
        "\ue21e": "\u6587",
        "\ue086": "\u6240",
        "\uec69": "\u56fd",
        "\ueb7c": "\u770b",
        "\ueda0": "\u66f4",
        "\ue160": "\u529b",
        "\ue316": "\u540c",
        "\ueb36": "\u548c",
        "\uee9c": "\u5df2",
        "\ue8fa": "\u4e8b",
        "\ue218": "\u77e5",
        "\uef21": "\u6253",
        "\ue00d": "\u73b0",
        "\ued3b": "\u4f55",
        "\ue67e": "\u95e8",
        "\uedd7": "\u6b7b",
        "\ue4e9": "\u4e4b",
        "\uefcc": "\u9053",
        "\ue157": "\u60c5",
        "\ued4c": "\u8eab",
        "\ue0ea": "\u4f53",
        "\ue315": "\u4e3a",
        "\ue188": "\u5927",
        "\ue751": "\u597d",
        "\ue7c9": "\u524d",
        "\ue397": "\u751f",
        "\ue8c4": "\u8fc7",
        "\uefd5": "\u53bb",
        "\ue0b4": "\u4e3b",
        "\ue8b8": "\u6027",
        "\ue8c7": "\u76f8",
        "\ued88": "\u4eba",
        "\ueb52": "\u53f2",
        "\uea6b": "\u90fd",
        "\ue58d": "\u4eec",
        "\ue0ab": "\u90a3",
        "\ue8d5": "\u4e66",
        "\uece2": "\u5411",
        "\ue9ae": "\u5374",
        "\ued50": "\u8fd8",
        "\ued90": "\u4e9b",
        "\ueac4": "\u7b2c",
        "\ue2ff": "\u4fbf",
        "\ue69c": "\u5f88",
        "\ue2c8": "\u5168",
        "\uea0e": "\u5bb6",
        "\uec5e": "\u795e",
        "\ue7a9": "\u7ecf",
        "\uec4b": "\u8005",
        "\ue7ec": "\u6ca1",
        "\ueeb8": "\u6c11",
        "\ue002": "\u5b9e",
        "\uefc2": "\u5206",
        "\ueab8": "\u4e09",
        "\ue0cb": "\u4f46",
        "\uee21": "\u4e86",
        "\ue40c": "\u60f3",
        "\uecb9": "\u5b9a",
        "\ue659": "\u4e2d",
        "\ue568": "\u9762",
        "\ue303": "\u65b9",
        "\uebba": "\u4e0d",
        "\uef79": "\u7528",
        "\ue1c7": "\u91cc",
        "\ue29e": "\u767d",
        "\ueed1": "\u5341",
        "\uee4c": "\u4e5f",
    },
    jjwxcfont_008g9: {
        "\ue044": "\u90a3",
        "\uedc2": "\u7406",
        "\ue6c0": "\u6210",
        "\ue4da": "\u800c",
        "\ueea1": "\u6587",
        "\ued83": "\u56db",
        "\ue0c9": "\u8981",
        "\ue772": "\u6253",
        "\ueef7": "\u793e",
        "\ued84": "\u5df2",
        "\ue2f0": "\u79cd",
        "\ue078": "\u591a",
        "\uedc6": "\u6c14",
        "\ued5c": "\u80fd",
        "\ue21f": "\u5341",
        "\ue4de": "\u60f3",
        "\ue58a": "\u7b2c",
        "\ue94f": "\u4fbf",
        "\ue3d4": "\u90e8",
        "\ue235": "\u7528",
        "\uecd0": "\u8eab",
        "\ue837": "\u5934",
        "\ue532": "\u5b9a",
        "\ueaad": "\u8005",
        "\ue927": "\u8bba",
        "\ue0e7": "\u65b0",
        "\ue44d": "\u522b",
        "\uefce": "\u4e48",
        "\ue011": "\u6ca1",
        "\ue2ae": "\u91cc",
        "\ue4c0": "\u91cd",
        "\ue128": "\u628a",
        "\ue85b": "\u5b50",
        "\uef5b": "\u4f7f",
        "\uea2c": "\u513f",
        "\ued08": "\u540d",
        "\ue040": "\u5973",
        "\ueed4": "\u5f00",
        "\ue621": "\u6c11",
        "\ue4ac": "\u53ea",
        "\ue18e": "\u51fa",
        "\uec90": "\u53e3",
        "\ue275": "\u4e8c",
        "\ue290": "\u5927",
        "\ue549": "\u540c",
        "\ue42c": "\u5230",
        "\ue98d": "\u611f",
        "\ue023": "\u56e0",
        "\ued6b": "\u4f1a",
        "\ue8ac": "\u56de",
        "\uee0f": "\u9053",
        "\uee8c": "\u4e24",
        "\ue490": "\u4ece",
        "\ueb1e": "\u597d",
        "\uea16": "\u65e5",
        "\ue15d": "\u4e66",
        "\uef19": "\u524d",
        "\ue61d": "\u5bf9",
        "\ue95d": "\u6559",
        "\ue138": "\u529b",
        "\ue4f6": "\u6b63",
        "\ue415": "\u4eba",
        "\uef9a": "\u4ee3",
        "\ue812": "\u6211",
        "\ue27b": "\u9762",
        "\uebd4": "\u751f",
        "\ue48a": "\u5168",
        "\uea09": "\u8bdd",
        "\ue533": "\u9ad8",
        "\ue9b1": "\u4ee5",
        "\ue7d9": "\u770b",
        "\ue43c": "\u5979",
        "\ue9ea": "\u65e0",
        "\ued2a": "\u6cd5",
        "\uea2e": "\u610f",
        "\ue711": "\u5e76",
        "\ue660": "\u4f60",
        "\ue5ee": "\u7279",
        "\uedb3": "\u58f0",
        "\ue683": "\u8bf4",
        "\uebdf": "\u8fd9",
        "\ue396": "\u6709",
        "\uea52": "\u73b0",
        "\ue805": "\u7b11",
        "\uec9b": "\u5f97",
        "\uea0b": "\u4ed6",
        "\ue44e": "\u5982",
        "\ue7bf": "\u7684",
        "\ue213": "\u4e8b",
        "\uefe8": "\u4e49",
        "\ue356": "\u542c",
        "\uef84": "\u6b7b",
        "\ue74e": "\u7531",
        "\ue2b0": "\u7f8e",
        "\ueb4f": "\u4e8e",
        "\uea5f": "\u66f4",
        "\ue1ca": "\u5374",
        "\uef71": "\u5206",
        "\ue0bf": "\u5bb6",
        "\ue9f5": "\u6b64",
        "\ue2af": "\u8d70",
        "\ue3cc": "\u8001",
        "\ue8e2": "\u5c06",
        "\ue004": "\u5f88",
        "\ue489": "\u4f53",
        "\ue10a": "\u5b83",
        "\ue43b": "\u5316",
        "\ueb23": "\u601d",
        "\ue74f": "\u95ee",
        "\uee7c": " \u4e3b",
        "\ue9c1": "\u5411",
        "\ue6cd": "\u518d",
        "\ue10f": "\u5b66",
        "\ue9f3": "\u548c",
        "\ue2c7": "\u8d77",
        "\uedb7": "\u516c",
        "\ueeb7": "\u679c",
        "\ueb6e": "\u6765",
        "\ue9b6": "\u53d1",
        "\uec4b": "\u4e3a",
        "\ue1cb": "\u767d",
        "\ueb43": "\u52a8",
        "\ueb74": "\u7740",
        "\ue007": "\u7b49",
        "\ue1d2": "\u5df1",
        "\ue552": "\u89c1",
        "\ue682": "\u95f4",
        "\ue7d8": "\u4e0b",
        "\ued3b": "\u56fd",
        "\ued02": "\u53bb",
        "\uefc8": "\u4e4b",
        "\ue3a3": "\u51e0",
        "\ue1a0": "\u5176",
        "\ueb77": "\u5c11",
        "\ue1b0": "\u660e",
        "\ue4b2": "\u4e0d",
        "\ueb56": "\u4e16",
        "\uef2a": "\u53f2",
        "\uedc9": "\u65b9",
        "\ue572": "\u795e",
        "\ue013": "\u8fd8",
        "\ue8bc": "\u624d",
        "\ued38": "\u53ef",
        "\ue1ef": "\u7ecf",
        "\ue5a3": "\u5fc3",
        "\ue22f": "\u897f",
        "\ueaae": "\u957f",
        "\ue3bf": "\u5916",
        "\uec34": "\u4e09",
        "\ueada": "\u592a",
        "\uef16": "\u4e2a",
        "\ue0aa": "\u70b9",
        "\ue9fd": "\u77e5",
        "\uee7d": "\u65f6",
        "\ue5c0": "\u540e",
        "\ue7a0": "\u5e74",
        "\ue836": "\u672c",
        "\ue69d": "\u7269",
        "\uee6f": "\u4ec0",
        "\ue7b5": "\u5173",
        "\uef57": "\u5f53",
        "\ue3af": "\u4e0e",
        "\ue3f1": "\u4e2d",
        "\ue84e": "\u5929",
        "\uea46": "\u4eec",
        "\uedef": "\u5c31",
        "\uefad": "\u4e5f",
        "\uee11": "\u5730",
        "\ue0e1": "\u53c8",
        "\ueac4": "\u884c",
        "\uee32": "\u4f46",
        "\ue2a7": "\u8fdb",
        "\uedb9": "\u88ab",
        "\ue3b1": "\u6027",
        "\ue5d5": "\u95e8",
        "\ue437": "\u5199",
        "\ue1e1": "\u4e86",
        "\ue0b0": "\u4e00",
        "\uef18": "\u6700",
        "\ue172": "\u4f5c",
        "\ued8c": "\u8fc7",
        "\ue4d8": "\u5728",
        "\ue83e": "\u4e0a",
        "\ue840": "\u662f",
        "\ue998": "\u5c0f",
        "\uef8c": "\u7136",
        "\ue8c0": "\u7ed9",
        "\ue35c": "\u4f55",
        "\ue847": "\u771f",
        "\ue673": "\u4e9b",
        "\ueaeb": "\u5b9e",
        "\ue0d8": "\u90fd",
        "\ue643": "\u6240",
        "\uef1d": "\u60c5",
        "\ue48f": "\u624b",
        "\ue1f2": "\u81ea",
        "\ue3bc": "\u773c",
        "\ue85f": "\u5148",
        "\ue07b": "\u6837",
        "\ued54": "\u76f8",
    },
};


/***/ }),

/***/ "./src/rules/lib/yuzhaigeImageDecode.ts":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replaceYuzhaigeImage = void 0;
function replaceYuzhaigeImage(inputText) {
    let outputText = inputText;
    for (const imageFilename in imageTable) {
        const normalCharacter = imageTable[imageFilename];
        const imageHTML = `<img src="http://m.yuzhaige.cc/wzbodyimg/${imageFilename}">`;
        outputText = outputText.replaceAll(imageHTML, normalCharacter);
    }
    return outputText;
}
exports.replaceYuzhaigeImage = replaceYuzhaigeImage;
const imageTable = {
    "wc5pDq.png": "\u52c3",
    "wEwIpN.png": "\u8404",
    "WFOBXF.png": "\u4f26",
    "WFuqEG.png": "\u6eda",
    "WNTyYB.png": "\u83ca",
    "WrI5St.png": "\u6234",
    "WSYLdq.png": "\u5ba0",
    "wvHBh4.png": "\u5976",
    "wWVoto.png": "\u5df4",
    "wz2cGb.png": "\u4e73",
    "wZicAt.png": "\u9053",
    "WzS8He.png": "\u6234",
    "X6QTS9.png": "\u80ef",
    "XBTII5.png": "\u817f",
    "XBv6rP.png": "\u8df3",
    "xFVZW9.png": "\u6b96",
    "XhuslD.png": "\u9e21",
    "xIFlai.png": "\u98df",
    "XK7taQ.png": "\u723d",
    "xljRqd.png": "\u9876",
    "xo18Yq.png": "\u5c3f",
    "xOIyuf.png": "\u585e",
    "xQ2ZWb.png": "\u80a1",
    "XqsaJY.png": "\u8f6f",
    "xrbxqL.png": "\u88f8",
    "xw7cLW.png": "\u868c",
    "xwkwQW.png": "\u7cbe",
    "XXlZMA.png": "\u6b96",
    "y3FgRm.png": "\u67f1",
    "y4Afmt.png": "\u817f",
    "Y4aXzR.png": "\u7c97",
    "Y7G6Lu.png": "\u547b",
    "YGnnuo.png": "\u871c",
    "ygqjgt.png": "\u634f",
    "yGwSy7.png": "\u9a9a",
    "yjX9oi.png": "\u63c9",
    "YNmgYJ.png": "\u809b",
    "yuo7sA.png": "\u6469",
    "yWAu0U.png": "\u50ac",
    "yWhRNI.png": "\u5a07",
    "YZ4EAh.png": "\u5589",
    "yzS8NJ.png": "\u80ef",
    "z0DZro.png": "\u542e",
    "Z7byDx.png": "\u6da6",
    "ZatUU6.png": "\u5974",
    "zCtJCx.png": "\u6da6",
    "ZDJHkT.png": "\u6ccc",
    "ZKDja5.png": "\u9f9f",
    "ZqyamF.png": "\u5c44",
    "ZzsV7x.png": "\u777e",
    "0bErVo.png": "\u6df1",
    "0ShNwM.png": "\u5439",
    "0uCAgc.png": "\u5f3a",
    "1AMfxw.png": "\u5e72",
    "1EmzV7.png": "\u6027",
    "1RbeKi.png": "\u5934",
    "1RIz6c.png": "\u611f",
    "1ZkZsI.png": "\u6b32",
    "2AXYPX.png": "\u6cc4",
    "2gwsiE.png": "\u6e7f",
    "2LQHtR.png": "\u6839",
    "2wePG6.png": "\u4f53",
    "2Xijao.png": "\u634f",
    "3ha4Fq.png": "\u6b22",
    "3RfcEA.png": "\u9ad8",
    "3uNZxG.png": "\u80f8",
    "4bu7Gr.png": "\u8482",
    "4T4DPM.png": "\u64e6",
    "4XjmUQ.png": "\u8fdb",
    "5hjo9r.png": "\u4e0b",
    "5ueElb.png": "\u5bab",
    "5yFlDm.png": "\u5bab",
    "6UsGer.png": "\u74e3",
    "6w928M.png": "\u633a",
    "6YavUk.png": "\u6696",
    "7dKm1T.png": "\u8fdb",
    "7tzEqy.png": "\u70b9",
    "8Q4cTQ.png": "\u90e8",
    "9Ns27O.png": "\u9633",
    "9pAfcz.png": "\u5934",
    "9Xkn86.png": "\u5507",
    "62TB7X.png": "\u7d27",
    "668QKT.png": "\u4e0b",
    "aedVOS.png": "\u9732",
    "AI15xh.png": "\u5a07",
    "AikKsW.png": "\u80a0",
    "AJcH1b.png": "\u51fa",
    "ALnkng.png": "\u5598",
    "anzcle.png": "\u9053",
    "apsw0Z.png": "\u5b50",
    "azRZNn.png": "\u6c34",
    "B38zEI.png": "\u6c34",
    "BAVYZd.png": "\u9634",
    "BBioQd.png": "\u6696",
    "BBZnCY.png": "\u5507",
    "bE6LV6.png": "\u7f8e",
    "bF30CY.png": "\u5438",
    "bihdjA.png": "\u5507",
    "BPQcCZ.png": "\u5177",
    "BpYip0.png": "\u7ba1",
    "BrY1ZI.png": "\u817f",
    "BvbcsW.png": "\u7d27",
    "bXRYQt.png": "\u5904",
    "Caqk3D.png": "\u773c",
    "CBylOX.png": "\u9053",
    "ClFBCD.png": "\u5904",
    "CLS5cG.png": "\u575a",
    "cPjFxZ.png": "\u79cd",
    "CUJkGk.png": "\u60c5",
    "CZL2OC.png": "\u76ae",
    "D3I7u1.png": "\u8482",
    "d5KjC5.png": "\u4f53",
    "d7fjCZ.png": "\u9732",
    "df6AnM.png": "\u51fa",
    "dhAaVT.png": "\u575a",
    "dkuDIk.png": "\u820c",
    "DSiSlL.png": "\u7231",
    "dTnQ9K.png": "\u9b54",
    "dXMpnD.png": "\u6655",
    "DXtzqf.png": "\u8eab",
    "DXXixh.png": "\u5957",
    "DZYaDR.png": "\u9633",
    "e5QAQ1.png": "\u5f3a",
    "ECcmqT.png": "\u6625",
    "eeYwrN.png": "\u6c34",
    "eGWHWT.png": "\u6170",
    "eOOKlp.png": "\u89e6",
    "EvHzor.png": "\u6b32",
    "ewwRMT.png": "\u903c",
    "EZW46f.png": "\u6df1",
    "FBosfH.png": "\u6027",
    "fC5MmR.png": "\u6237",
    "ffTW4v.png": "\u62bd",
    "ffZqua.png": "\u6027",
    "FgN2Tl.png": "\u4e71",
    "fHvZK9.png": "\u7f1d",
    "fj7veK.png": "\u957f",
    "fkPlzo.png": "\u98df",
    "fKWetR.png": "\u7ba1",
    "FUmeqN.png": "\u25a1",
    "Fus88J.png": "\u725b",
    "G4uOno.png": "\u55b7",
    "g7bVzL.png": "\u9ad8",
    "GBmlnw.png": "\u8df3",
    "gCWM61.png": "\u7cbe",
    "GdAidg.png": "\u7b4b",
    "GLZIqA.png": "\u5b50",
    "gqDVGg.png": "\u5de8",
    "gu5ykL.png": "\u8f6e",
    "GULUze.png": "\u9ad8",
    "h2FI8R.png": "\u80f8",
    "h4WPDX.png": "\u6655",
    "hCztH8.png": "\u9732",
    "hfI2uM.png": "\u575a",
    "hGHijB.png": "\u5668",
    "hIhWai.png": "\u9ad8",
    "HIUVkJ.png": "\u5c04",
    "HkcQea.png": "\u4ea4",
    "hm5O6l.png": "\u5957",
    "hpFE8s.png": "\u6d41",
    "HPxfmS.png": "\u542b",
    "hVxPKi.png": "\u89e6",
    "Ia3sI1.png": "\u4e71",
    "IA8APJ.png": "\u5df4",
    "IlUZRn.png": "\u575a",
    "iN7Lri.png": "\u98df",
    "iQMM3x.png": "\u611f",
    "ISfDuf.png": "\u4f53",
    "isWxov.png": "\u9a6c",
    "ITILdU.png": "\u6267",
    "IU731r.png": "\u9876",
    "IUanTB.png": "\u878d",
    "IUUwWq.png": "\u5165",
    "Ixqere.png": "\u6d41",
    "J9AEU9.png": "\u5165",
    "JBfhPp.png": "\u64cd",
    "jDxrrX.png": "\u5b50",
    "jE4V2B.png": "\u6df1",
    "jF1KPd.png": "\u25a1",
    "jFACnh.png": "\u6bdb",
    "jiyfGR.png": "\u6839",
    "JLkmp8.png": "\u80a1",
    "jWwTqU.png": "\u60c5",
    "K00hgA.png": "\u5165",
    "KaFnqe.png": "\u6eda",
    "Kaqaq0.png": "\u9634",
    "kDOkxJ.png": "\u957f",
    "kSkOOe.png": "\u6309",
    "KtjQU3.png": "\u634f",
    "kWmDQN.png": "\u5904",
    "kZQ8K6.png": "\u4e0b",
    "l0kRFF.png": "\u7269",
    "L9dqnM.png": "\u6b32",
    "Ldo3hW.png": "\u8089",
    "ljppnW.png": "\u611f",
    "lNGSuh.png": "\u80a0",
    "lRfqbE.png": "\u7cbe",
    "lUzsIi.png": "\u8f6e",
    "LZraJy.png": "\u6625",
    "mBpVnV.png": "\u4e71",
    "MEM8Wx.png": "\u5e72",
    "MO2VKV.png": "\u6db2",
    "ModDMS.png": "\u62bd",
    "mOZJWk.png": "\u9a6c",
    "mpgh5T.png": "\u51fa",
    "nj29a6.png": "\u6267",
    "NOEnvb.png": "\u8df3",
    "nrSIO8.png": "\u6df1",
    "o2xN3U.png": "\u82b1",
    "O3b3KR.png": "\u6696",
    "o5uSeU.png": "\u5bab",
    "OaBMS5.png": "\u62d4",
    "OB7KzU.png": "\u773c",
    "oCH7SV.png": "\u9b54",
    "oeeXig.png": "\u9a6c",
    "OgBVeb.png": "\u8f6f",
    "oHc3dE.png": "\u7269",
    "OLHWRr.png": "\u70b9",
    "onuRXa.png": "\u8482",
    "oqLfcR.png": "\u6ed1",
    "oUntUm.png": "\u6d53",
    "OXOdsf.png": "\u9053",
    "p3ARaM.png": "\u6d41",
    "p068ps.png": "\u5bab",
    "PLwxDG.png": "\u79cd",
    "PmCTBy.png": "\u8272",
    "pMlQBk.png": "\u6c41",
    "pQypTa.png": "\u8fdb",
    "PtUVdN.png": "\u62bd",
    "PW1WSi.png": "\u6e7f",
    "Pw3ezj.png": "\u914d",
    "pXy3UL.png": "\u4ea4",
    "Q7jy4x.png": "\u5185",
    "q07XV1.png": "\u5668",
    "Q9OBtA.png": "\u6f6e",
    "QbYFBI.png": "\u9634",
    "qEI00x.png": "\u4e0b",
    "qewOBk.png": "\u6ed1",
    "QfXoIi.png": "\u8089",
    "qJIAe3.png": "\u6309",
    "QkWjrV.png": "\u8eab",
    "QnFF9j.png": "\u6839",
    "qNFYq4.png": "\u5e72",
    "QU7Lcv.png": "\u25a1",
    "qwsVcX.png": "\u62bd",
    "qxb6Lz.png": "\u70b9",
    "QzP4Nz.png": "\u773c",
    "R8uNPt.png": "\u5185",
    "R9tjeh.png": "\u51fa",
    "rFr75w.png": "\u80f8",
    "rGA9Cq.png": "\u4ea4",
    "RjCFQu.png": "\u7d27",
    "RLNC0G.png": "\u70b9",
    "rocNQb.png": "\u505a",
    "Rpp7lC.png": "\u8482",
    "rUJMTx.png": "\u8272",
    "RZZBiZ.png": "\u773c",
    "S2Dvd4.png": "\u6cc4",
    "s8DZGN.png": "\u60c5",
    "s560YT.png": "\u5177",
    "SeKcc0.png": "\u8272",
    "sFFl4b.png": "\u5ba0",
    "SiAa7G.png": "\u5934",
    "slAZvO.png": "\u8272",
    "sTPB8l.png": "\u89e6",
    "sV6OrY.png": "\u957f",
    "syPCmu.png": "\u8f6e",
    "Sz5U6E.png": "\u5668",
    "SZn6xB.png": "\u7269",
    "T6sDn9.png": "\u60c5",
    "t9WGXQ.png": "\u903c",
    "TCRQtC.png": "\u6ed1",
    "TGkFFQ.png": "\u903c",
    "tNjFEZ.png": "\u82b1",
    "tOUYgC.png": "\u9b54",
    "TSjC0C.png": "\u5ead",
    "TSp4f1.png": "\u62d4",
    "TWIhpT.png": "\u7231",
    "TxaWbU.png": "\u878d",
    "ua2bew.png": "\u9876",
    "UbTLa5.png": "\u633a",
    "uDN4sP.png": "\u5165",
    "ueMquS.png": "\u8eab",
    "UEVcqG.png": "\u8eab",
    "UIFeaH.png": "\u914d",
    "unR6fo.png": "\u9633",
    "Upc9Pu.png": "\u4ea4",
    "UukBzP.png": "\u6d1e",
    "UvCU0f.png": "\u5ba0",
    "VAOIqQ.png": "\u7f8e",
    "vMf2zS.png": "\u914d",
    "VnXHdX.png": "\u505a",
    "vpHmyj.png": "\u5185",
    "Vql6Ev.png": "\u59d0",
    "vrkjXi.png": "\u79cd",
    "vtnLR7.png": "\u6c34",
    "wkUtOc.png": "\u25a1",
    "WOHLvx.png": "\u5976",
    "WppxBg.png": "\u7f8e",
    "WRtMHz.png": "\u56ca",
    "WTAi5O.png": "\u63c9",
    "wtwCbu.png": "\u725b",
    "WXf8jT.png": "\u5177",
    "xpWTjp.png": "\u7269",
    "XqFPrk.png": "\u505a",
    "XrHw7R.png": "\u4f53",
    "XskrJT.png": "\u9633",
    "xubhKq.png": "\u6bdb",
    "xxqGbU.png": "\u80f8",
    "y2rhls.png": "\u505a",
    "y8TJ26.png": "\u79cd",
    "YbmlHp.png": "\u82b1",
    "YpcoIg.png": "\u7f8e",
    "yruS8G.png": "\u8650",
    "YTWiNM.png": "\u82b1",
    "YvzoUL.png": "\u5589",
    "YY1gAh.png": "\u878d",
    "yYS2XJ.png": "\u8fdb",
    "ZaWg8Q.png": "\u6d53",
    "zbUsFu.png": "\u70ed",
    "zGqroA.png": "\u5b50",
    "zhogXd.png": "\u9732",
    "zM4vGZ.png": "\u6eda",
    "ZMyXfX.png": "\u786c",
    "Znemv4.png": "\u9a6c",
    "ZnORLb.png": "\u5934",
    "zovunx.png": "\u7a74",
    "ZpcLFr.png": "\u7231",
    "4KLtoP.png": "\u868c",
    "k2hzhi.png": "\u854a",
    "OpOeoc.png": "\u96cf",
    "D6GjNJ.png": "\u90a6",
    "nSh1y5.png": "\u90a6",
    "ZD1bga.png": "\u819c",
    "0JNnRt.png": "\u88c6",
    "0laGrG.png": "\u52c3",
    "0sEWeF.png": "\u723d",
    "0X07Oj.png": "\u957f",
    "0ZBaBv.png": "\u7a74",
    "1WoJda.png": "\u633a",
    "1yUGqq.png": "\u5957",
    "2ABT9u.png": "\u7ba1",
    "2BcI5e.png": "\u6838",
    "2dfEmL.png": "\u808f",
    "2LdPZ9.png": "\u5df4",
    "2VLZTT.png": "\u5438",
    "2WgKu9.png": "\u6625",
    "03PhNV.png": "\u6469",
    "3preuJ.png": "\u6f6e",
    "3tNh88.png": "\u63d2",
    "4m7wbi.png": "\u6655",
    "4mO3Bj.png": "\u5993",
    "4P4bWw.png": "\u70eb",
    "4qJrgq.png": "\u50ac",
    "4xMdlq.png": "\u6345",
    "5aHMLF.png": "\u6d53",
    "5caAaX.png": "\u542b",
    "5IL1sE.png": "\u817a",
    "5qxLLo.png": "\u8404",
    "5rXkkk.png": "\u5f04",
    "5uAxU4.png": "\u63c9",
    "5XAgwu.png": "\u5978",
    "6A9MvV.png": "\u52c3",
    "6jL6AP.png": "\u8361",
    "6ontyx.png": "\u8461",
    "6VRwjR.png": "\u7c97",
    "6zcWUT.png": "\u6cc4",
    "7aWXdF.png": "\u6f6e",
    "7Bz8yG.png": "\u68cd",
    "7fhmqV.png": "\u88e4",
    "7jKFaP.png": "\u5978",
    "7lNejO.png": "\u704c",
    "7pFdxn.png": "\u64b8",
    "7Q7Jrg.png": "\u5c4c",
    "8BNYPM.png": "\u6696",
    "8J5geS.png": "\u541f",
    "8Kf7GD.png": "\u830e",
    "8mHmVv.png": "\u830e",
    "8N16Hq.png": "\u8650",
    "8UniDu.png": "\u6237",
    "8w5K9T.png": "\u88f8",
    "8wm13p.png": "\u6655",
    "8ZNrSv.png": "\u786c",
    "9BRV3o.png": "\u5c4c",
    "9Nqw8t.png": "\u762b",
    "9RBhTJ.png": "\u9a9a",
    "9RvnBS.png": "\u8089",
    "9TaMmD.png": "\u6ccc",
    "9UaEDH.png": "\u6d1e",
    "9zWVtd.png": "\u59d0",
    "47FrvB.png": "\u4e73",
    "76gAv7.png": "\u723d",
    "77lL1M.png": "\u541f",
    "798jja.png": "\u76ae",
    "a0mCeq.png": "\u8f6f",
    "ACrPlr.png": "\u98df",
    "aFoXhJ.png": "\u75d2",
    "Afr6zx.png": "\u6b96",
    "aHuUcm.png": "\u83ca",
    "AiDkbY.png": "\u809b",
    "aOxG78.png": "\u8461",
    "AQZ08I.png": "\u809b",
    "ARAUs9.png": "\u5c41",
    "arEzdS.png": "\u5976",
    "axdkbW.png": "\u58c1",
    "aYGWo2.png": "\u83ca",
    "b1C6Pu.png": "\u75d2",
    "bCQ2nL.png": "\u654f",
    "BgJzfk.png": "\u6b22",
    "BhgFcH.png": "\u56ca",
    "bOoL0J.png": "\u6deb",
    "BqO1fa.png": "\u820c",
    "bqXZDH.png": "\u80a5",
    "BsU6ka.png": "\u854a",
    "Bu9FZQ.png": "\u6deb",
    "bufT6t.png": "\u819c",
    "bWdbXA.png": "\u6eda",
    "C4UN5R.png": "\u6deb",
    "CgqkFG.png": "\u8361",
    "CH67yh.png": "\u5a07",
    "CM7jpY.png": "\u5b55",
    "cNghja.png": "\u8361",
    "CnOBoo.png": "\u63d2",
    "CNQW3o.png": "\u70eb",
    "cow4Kc.png": "\u5f3a",
    "CXC9uz.png": "\u8089",
    "Cy7Ynb.png": "\u762b",
    "czWHZw.png": "\u96cf",
    "D0Lwo9.png": "\u871c",
    "dB0uJO.png": "\u820c",
    "dHuyiO.png": "\u5c4c",
    "DQWBph.png": "\u4e38",
    "DsEJTV.png": "\u547b",
    "dUrJvn.png": "\u819c",
    "Ea3lho.png": "\u81c0",
    "EboGWZ.png": "\u80a0",
    "eifoua.png": "\u5b55",
    "EiUhlF.png": "\u5957",
    "ENwWoX.png": "\u4e71",
    "EQEgJx.png": "\u6469",
    "EQiUab.png": "\u88e4",
    "er8NJ7.png": "\u542e",
    "F0WoiN.png": "\u5177",
    "f1YTv0.png": "\u6f6e",
    "f2N1vL.png": "\u5978",
    "F3nlmb.png": "\u88e4",
    "F6lW1R.png": "\u80bf",
    "f60BEY.png": "\u5c3f",
    "f461mD.png": "\u6839",
    "fd6C8F.png": "\u9e21",
    "Fdz1Vc.png": "\u58c1",
    "FetNxM.png": "\u5c4c",
    "FfxOzl.png": "\u88f8",
    "Fge27m.png": "\u8404",
    "fGpEWq.png": "\u547b",
    "Fl20Ip.png": "\u9f9f",
    "fNXZyj.png": "\u6234",
    "fRmx68.png": "\u90e8",
    "fSdsL1.png": "\u88c6",
    "FT9nI5.png": "\u83ca",
    "FVVqzv.png": "\u86cb",
    "FwjZJi.png": "\u5438",
    "fX4WIp.png": "\u4f26",
    "FXgFwc.png": "\u63d2",
    "FXmf8I.png": "\u647a",
    "fxPcW3.png": "\u6d1e",
    "g2jVxn.png": "\u808f",
    "gb3LOX.png": "\u80ef",
    "gDVng6.png": "\u5ba0",
    "gImiVY.png": "\u5f04",
    "gJDFQC.png": "\u8214",
    "gJDG8l.png": "\u5b55",
    "GJodYn.png": "\u62d4",
    "GmLjKa.png": "\u5c09",
    "gNlJMc.png": "\u68cd",
    "GppocX.png": "\u914d",
    "gsRjtr.png": "\u67f1",
    "GTOAc4.png": "\u633a",
    "GzjpTS.png": "\u7cbe",
    "h8zRxr.png": "\u80a1",
    "H17DtI.png": "\u5c41",
    "ha14XV.png": "\u89e6",
    "hatLmR.png": "\u81c0",
    "hbrRIS.png": "\u857e",
    "hC4NbQ.png": "\u777e",
    "hG0SRP.png": "\u64e6",
    "HhNUaw.png": "\u854a",
    "hKjWPG.png": "\u64b8",
    "Hn8Afh.png": "\u74e3",
    "hngWaZ.png": "\u5438",
    "htV3uv.png": "\u58c1",
    "hVaVng.png": "\u6309",
    "HVHPCy.png": "\u74e3",
    "hVwy7k.png": "\u8214",
    "i4tyrQ.png": "\u830e",
    "i5s28n.png": "\u4f26",
    "IAloq6.png": "\u542e",
    "ICHARH.png": "\u6237",
    "icI6Ey.png": "\u81c0",
    "iCRh88.png": "\u68d2",
    "Iej2pu.png": "\u5993",
    "IkqJmu.png": "\u8650",
    "imVjMj.png": "\u4e73",
    "iNIMEL.png": "\u86cb",
    "IOjnEP.png": "\u6b22",
    "ip6KUM.png": "\u79bd",
    "IPC2R8.png": "\u9e21",
    "ipVGiA.png": "\u6345",
    "IpYNG3.png": "\u5974",
    "ITUjFq.png": "\u76ae",
    "ixiion.png": "\u90e8",
    "IZcCzq.png": "\u871c",
    "IzJ4WG.png": "\u830e",
    "J1CBtB.png": "\u8df3",
    "j9C44i.png": "\u70eb",
    "JCQtUs.png": "\u4e73",
    "JEcz0E.png": "\u871c",
    "JfPEEe.png": "\u4f26",
    "jHi6Vu.png": "\u9f9f",
    "jjfR6D.png": "\u8461",
    "jktdia.png": "\u64e6",
    "JlkuRa.png": "\u8404",
    "jnAvXp.png": "\u5ead",
    "jnCCk9.png": "\u6cc4",
    "jvj3DG.png": "\u786c",
    "Jy4pAI.png": "\u74e3",
    "jZyPEL.png": "\u5b55",
    "K2AtMQ.png": "\u9a9a",
    "K2jjT6.png": "\u857e",
    "k6X0xy.png": "\u80bf",
    "k9h8DR.png": "\u903c",
    "k9zXwG.png": "\u723d",
    "KalRLt.png": "\u6da6",
    "kawcM7.png": "\u68cd",
    "kdsEv6.png": "\u5f04",
    "KdwL4R.png": "\u86cb",
    "kPG0vR.png": "\u704c",
    "KSqmoM.png": "\u6db2",
    "kTCaM9.png": "\u86cb",
    "kVLLjB.png": "\u8361",
    "kygbuo.png": "\u725b",
    "kZDlEj.png": "\u7ba1",
    "l0BNLC.png": "\u6ccc",
    "l1Dmft.png": "\u725b",
    "L1yl45.png": "\u5c04",
    "L3a5ft.png": "\u56ca",
    "L3LaNQ.png": "\u5439",
    "L9F6F8.png": "\u50ac",
    "LB1WMg.png": "\u64cd",
    "LBPqYj.png": "\u6d1e",
    "LDjbfQ.png": "\u5c3f",
    "ldo7FB.png": "\u7d27",
    "lErO3o.png": "\u67f1",
    "LFBZKA.png": "\u59d0",
    "lfGqdb.png": "\u68d2",
    "lGKjej.png": "\u5993",
    "LjemA3.png": "\u809b",
    "Ljh7qo.png": "\u63d2",
    "LJSiT5.png": "\u5c44",
    "Lk5uQy.png": "\u6838",
    "lngKEo.png": "\u55b7",
    "lOfDdC.png": "\u4e38",
    "Lsq92O.png": "\u541f",
    "LsyPdc.png": "\u541f",
    "lVbZkd.png": "\u634f",
    "lVMTQu.png": "\u654f",
    "LVmymH.png": "\u80a0",
    "lyYo4Y.png": "\u547b",
    "lZtabT.png": "\u9634",
    "M3VjF9.png": "\u64b8",
    "m4yvu3.png": "\u7a74",
    "M8bV3k.png": "\u56ca",
    "MBhDEi.png": "\u75d2",
    "MC5lZn.png": "\u585e",
    "Mc8JM6.png": "\u62d4",
    "mD7hPS.png": "\u5c41",
    "mExNDV.png": "\u704c",
    "MKapwC.png": "\u80a5",
    "mKxUHv.png": "\u64e6",
    "Mo31Ax.png": "\u6bdb",
    "mRFQJQ.png": "\u5589",
    "MsUFfR.png": "\u6b96",
    "mTzxxd.png": "\u7f1d",
    "n2ufBJ.png": "\u5978",
    "n3oOgA.png": "\u6345",
    "n9j6EC.png": "\u5ead",
    "n49ZFH.png": "\u88c6",
    "nCrl80.png": "\u762b",
    "NDlwhm.png": "\u817a",
    "nE1Y7y.png": "\u762b",
    "neIgqc.png": "\u5439",
    "NeKVfz.png": "\u6170",
    "NHH9A1.png": "\u777e",
    "NKN1rk.png": "\u542e",
    "NKUSkP.png": "\u58c1",
    "NlfTkc.png": "\u5c44",
    "NlZDDQ.png": "\u817f",
    "nmoPI2.png": "\u4e38",
    "NnfPEJ.png": "\u9f9f",
    "NP33MO.png": "\u6c41",
    "NQ7oga.png": "\u611f",
    "nsDzuq.png": "\u90a6",
    "NsIwni.png": "\u5de8",
    "oaLZIg.png": "\u777e",
    "oC3HDZ.png": "\u7c97",
    "OFx7ZU.png": "\u88f8",
    "OHU6tX.png": "\u6db2",
    "olFcqI.png": "\u5e72",
    "OMdbeV.png": "\u819c",
    "On4f9C.png": "\u7b4b",
    "oncaJq.png": "\u76ae",
    "Oo8iWN.png": "\u6309",
    "OUWXqz.png": "\u6625",
    "OuXWg2.png": "\u4e38",
    "ozF5Kr.png": "\u8650",
    "p0bqZi.png": "\u5c44",
    "p1H9RN.png": "\u5c04",
    "p5QCRV.png": "\u6ed1",
    "p5zEbo.png": "\u857e",
    "P43O6G.png": "\u6234",
    "PalsBW.png": "\u5974",
    "PcAvOY.png": "\u5ae9",
    "pHfPTa.png": "\u5de8",
    "pi2z0b.png": "\u7b4b",
    "plFlPb.png": "\u68cd",
    "pNPlu5.png": "\u704c",
    "PnZNBC.png": "\u6deb",
    "pQ1W2F.png": "\u88e4",
    "PX3jJ6.png": "\u6ccc",
    "q14YbK.png": "\u9876",
    "Qc9LRh.png": "\u5598",
    "qe2YZi.png": "\u63c9",
    "qEy1kT.png": "\u90e8",
    "Qfs9DA.png": "\u50ac",
    "Qg8Qwg.png": "\u857e",
    "qJ1X2h.png": "\u59d0",
    "qm0ZBO.png": "\u6170",
    "QmcP4w.png": "\u654f",
    "Qn3xBM.png": "\u5ae9",
    "qNGvlk.png": "\u5c3f",
    "qPhrVf.png": "\u5904",
    "qPX1Ef.png": "\u542b",
    "qr8InI.png": "\u80a5",
    "QtLIGq.png": "\u6db2",
    "QtSnzR.png": "\u5598",
    "Qv3JbY.png": "\u7f1d",
    "QYF65i.png": "\u7b4b",
    "Qz4Txd.png": "\u81c0",
    "qzdvCv.png": "\u5df4",
    "r7NsvF.png": "\u5f04",
    "r8oBsP.png": "\u9e21",
    "r9Gw4X.png": "\u6838",
    "R65BZO.png": "\u8214",
    "Rf7Jf6.png": "\u6469",
    "Rho2GL.png": "\u75d2",
    "rlVLx7.png": "\u7231",
    "Rm3wex.png": "\u55b7",
    "RmrhKk.png": "\u8214",
    "RMWsBY.png": "\u654f",
    "rn9y6F.png": "\u585e",
    "RnfJ8h.png": "\u67f1",
    "RP5Oud.png": "\u5598",
    "Rp5tmA.png": "\u64cd",
    "rpSSYK.png": "\u80ef",
    "rQKjMD.png": "\u6bdb",
    "RrXcE9.png": "\u5668",
    "RyL5jk.png": "\u6c41",
    "s67RPe.png": "\u70eb",
    "s95kq4.png": "\u6e7f",
    "sdXZMk.png": "\u52c3",
    "SGxBy7.png": "\u5c41",
    "smhB8j.png": "\u5c04",
    "Srgobp.png": "\u6237",
    "srlW2t.png": "\u6d41",
    "ST21xu.png": "\u6d53",
    "STzFJz.png": "\u7c97",
    "sugwEw.png": "\u5976",
    "SzADhL.png": "\u80bf",
    "T5yzvl.png": "\u6c41",
    "t6K8rK.png": "\u6027",
    "tAIV6q.png": "\u64cd",
    "TCFRca.png": "\u68d2",
    "te79V0.png": "\u68d2",
    "tjbhCV.png": "\u5ae9",
    "tNFwEz.png": "\u5589",
    "tPTX1h.png": "\u80a5",
    "tsQMiL.png": "\u5439",
    "TUZb1W.png": "\u6b32",
    "TWFykG.png": "\u5993",
    "twLxYU.png": "\u8f6f",
    "tXNaZ2.png": "\u878d",
    "U3bhkh.png": "\u9a9a",
    "u6K6ci.png": "\u6b22",
    "u9Tibu.png": "\u5185",
    "Ua2WwL.png": "\u5a07",
    "Uai2en.png": "\u5f3a",
    "UeWULF.png": "\u5ead",
    "UfXSsz.png": "\u540e",
    "ui0T5v.png": "\u79bd",
    "UqClGF.png": "\u80a1",
    "Urv1FM.png": "\u80bf",
    "uwXRHd.png": "\u55b7",
    "v4iqzP.png": "\u7f1d",
    "vAdmoL.png": "\u786c",
    "VhA8GI.png": "\u5ae9",
    "VHsdy1.png": "\u6838",
    "vjOssT.png": "\u585e",
    "vkYfGf.png": "\u9b54",
    "vMmUqq.png": "\u5974",
    "VnvOwV.png": "\u6da6",
    "VoAjiw.png": "\u6e7f",
    "vrtXeW.png": "\u88c6",
    "VUbefT.png": "\u8f6e",
    "vulCqw.png": "\u6267",
    "VYaPfX.png": "\u7a74",
    "VyJ2cS.png": "\u90a6",
    "W06Vg1.png": "\u5de8",
    "W7cCwn.png": "\u6345",
    "W9Y9vD.png": "\u820c",
    "wa54S5.png": "\u542b",
    "FNq1zS.png": "\u868C",
    "DDpMPK.png": "\u868C",
    "vDbU8w.png": "\u817A",
    "SSoXSL.png": "\u8461",
    "YB6iOy.png": "\u817A",
    "kMqpt6.png": "\u96CF",
    "5RwMUT.png": "\u854A",
    "b94JXX.png": "\u8114",
    "oxFS6J.png": "\u8114",
    "H53jMR.png": "\u96CF",
};


/***/ }),

/***/ "./src/rules/linovel.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.linovel = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class linovel {
    constructor() {
        this.imageMode = "TM";
        this.concurrencyLimit = 5;
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector(".book-title")).innerText.trim();
        const author = (document.querySelector(".author-frame > .novelist > div:nth-child(3) > a")).innerText.trim();
        const introDom = document.querySelector(".about-text");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const attachmentsUrlList = [];
        const coverUrl = (document.querySelector(".book-cover > a")).href;
        attachmentsUrlList.push(coverUrl);
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split("!")[0].split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        additionalMetadate.attachments = [];
        const volumeCoverUrlList = Array.from(document.querySelectorAll(".section-list > .section > .volume-info > .volume-cover a")).map((a) => a.href);
        let vi = 0;
        for (const volumeCoverUrl of volumeCoverUrlList) {
            if (!attachmentsUrlList.includes(volumeCoverUrl)) {
                attachmentsUrlList.push(volumeCoverUrl);
                vi++;
                const getVolumeCoverFileName = () => {
                    const vurl = new URL(volumeCoverUrl);
                    const pathname = vurl.pathname.split("!")[0];
                    const ext = pathname.split(".").slice(-1)[0];
                    return `volumeCover${vi}.${ext}`;
                };
                const volumeCoverObj = new main_1.attachmentClass(volumeCoverUrl, getVolumeCoverFileName(), "TM");
                volumeCoverObj.init();
                additionalMetadate.attachments.push(volumeCoverObj);
            }
        }
        additionalMetadate.tags = Array.from(document.querySelectorAll("div.meta-info > div.book-cats.clearfix > a")).map((a) => a.innerText.trim());
        const chapters = [];
        const sections = document.querySelectorAll(".section-list > .section");
        let chapterNumber = 0;
        for (let i = 0; i < sections.length; i++) {
            const s = sections[i];
            const sectionNumber = i + 1;
            const sectionName = (s.querySelector(".volume-info > h2.volume-title > a")).innerText.trim();
            let sectionChapterNumber = 0;
            const cs = s.querySelectorAll(".chapter-list > .text-content-actual div.chapter");
            for (let j = 0; j < cs.length; j++) {
                const div = cs[j];
                const a = div.firstElementChild;
                chapterNumber++;
                sectionChapterNumber++;
                const chapterName = a.innerText.trim();
                const chapterUrl = a.href;
                const isVIP = () => {
                    if (div.className.includes("lock")) {
                        if (div.className.includes("unlock")) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                    return false;
                };
                const isPaid = () => {
                    return false;
                };
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP(), isPaid(), sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, "UTF-8", {});
                const isLogin = () => {
                    return false;
                };
                if (isVIP() && !(isLogin() && chapter.isPaid)) {
                    chapter.status = main_1.Status.aborted;
                }
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        async function publicChapter() {
            const doc = await lib_1.getHtmlDOM(chapterUrl, charset);
            const chapterName = (doc.querySelector(".article-title")).innerText.trim();
            const content = doc.querySelector(".article-text");
            if (content) {
                let { dom, text, images } = lib_1.cleanDOM(content, "TM");
                return {
                    chapterName: chapterName,
                    contentRaw: content,
                    contentText: text,
                    contentHTML: dom,
                    contentImages: images,
                    additionalMetadate: null,
                };
            }
            else {
                return {
                    chapterName: chapterName,
                    contentRaw: null,
                    contentText: null,
                    contentHTML: null,
                    contentImages: null,
                    additionalMetadate: null,
                };
            }
        }
        async function vipChapter() {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.linovel = linovel;


/***/ }),

/***/ "./src/rules/linovelib.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.linovelib = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class linovelib {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.href.replace(/\/catalog$/, ".html");
        const bookname = (document.querySelector(".book-meta > h1")).innerText.trim();
        const author = (document.querySelector(".book-meta > p:nth-child(2) > span:nth-child(1) > a:nth-child(2)")).innerText.trim();
        const doc = await lib_1.getHtmlDOM(bookUrl, undefined);
        const introDom = doc.querySelector(".book-dec > p:nth-child(1)");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = doc.querySelector(".book-img > img")
            .src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split("!")[0].split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        additionalMetadate.tags = Array.from(doc.querySelectorAll(".book-label a")).map((a) => a.innerText.trim());
        const chapters = [];
        const chapterList = document.querySelector(".chapter-list");
        if (!chapterList) {
            throw new Error("获取章节失败！");
        }
        const liList = chapterList.children;
        let chapterNumber = 0;
        let sectionNumber = 0;
        let sectionName = null;
        let sectionChapterNumber = 0;
        for (let i = 0; i < liList.length; i++) {
            const node = liList[i];
            const nodeNmae = node.nodeName.toLowerCase();
            if (nodeNmae === "div") {
                sectionNumber++;
                sectionChapterNumber = 0;
                sectionName = node.innerText.trim();
            }
            else if (nodeNmae === "li") {
                chapterNumber++;
                sectionChapterNumber++;
                const a = node.firstElementChild;
                const isVIP = false;
                const chapterName = a.innerText.trim();
                const chapterUrl = a.href;
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, null, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, "UTF-8", {});
                if (chapterUrl.startsWith("javascript")) {
                    chapter.status = main_1.Status.aborted;
                }
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        log_1.log.debug(`[Chapter]请求 ${chapterUrl}`);
        let nowUrl = chapterUrl;
        let doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        const content = document.createElement("div");
        let flag = false;
        do {
            const _content = doc.querySelector("#TextContent");
            lib_1.rm(".tp", true, _content);
            lib_1.rm(".bd", true, _content);
            for (const _c of Array.from(_content.childNodes)) {
                content.appendChild(_c);
            }
            const nextLink = (doc.querySelector(".mlfy_page > a:nth-child(5)")).href;
            if (new URL(nextLink).pathname.includes("_")) {
                if (nextLink !== nowUrl) {
                    flag = true;
                    log_1.log.debug(`[Chapter]请求 ${nextLink}`);
                    nowUrl = nextLink;
                    doc = await lib_1.getHtmlDOM(nextLink, charset);
                }
                else {
                    log_1.log.error("网站页面出错，URL： " + nowUrl);
                    flag = false;
                }
            }
            else {
                flag = false;
            }
        } while (flag);
        let { dom, text, images } = lib_1.cleanDOM(content, "TM");
        return {
            chapterName: chapterName,
            contentRaw: content,
            contentText: text,
            contentHTML: dom,
            contentImages: images,
            additionalMetadate: null,
        };
    }
}
exports.linovelib = linovelib;


/***/ }),

/***/ "./src/rules/meegoq.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meegoq = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class meegoq {
    constructor() {
        this.imageMode = "TM";
        this.concurrencyLimit = 3;
        this.charset = "GBK";
    }
    async bookParse() {
        const bookUrl = document.location.href.replace("/book", "/info");
        const dom = await lib_1.getHtmlDOM(bookUrl, "GBK");
        const author = (dom.querySelector("article.info > p.detail.pt20 > i:nth-child(1) > a")).innerText.trim();
        const bookname = (dom.querySelector("article.info > header > h1")).innerText.trim();
        const introDom = dom.querySelector("article.info > p.desc");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom, (introDom) => {
            lib_1.rm("b", false, introDom);
            return introDom;
        });
        const additionalMetadate = {};
        const coverUrl = (dom.querySelector("article.info > div.cover > img")).src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const ul = document.querySelector("ul.mulu");
        if (ul?.childElementCount) {
            const ulc = Array.from(ul.children);
            if (Array.from(ulc[0].classList).includes("volumn") &&
                ulc[0].innerText.match(/最新.章/)) {
                for (let i = 0; i < ul?.childElementCount; i++) {
                    if (i !== 0 &&
                        Array.from(ulc[i].classList).includes("volumn") &&
                        ulc[i].innerText.trim() !== "全部章节") {
                        delete ulc[0];
                        break;
                    }
                    delete ulc[i];
                }
            }
            const chapterList = ulc.filter((obj) => obj !== undefined);
            let chapterNumber = 0;
            let sectionNumber = 0;
            let sectionName = null;
            let sectionChapterNumber = 0;
            for (let i = 0; i < chapterList.length; i++) {
                const li = chapterList[i];
                if (Array.from(li.classList).includes("volumn")) {
                    sectionNumber++;
                    sectionChapterNumber = 0;
                    sectionName = li.innerText.trim();
                }
                else {
                    chapterNumber++;
                    sectionChapterNumber++;
                    const a = li.firstElementChild;
                    const chapterName = a.innerText;
                    const chapterUrl = a.href;
                    const isVIP = false;
                    const isPaid = false;
                    const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                    chapters.push(chapter);
                }
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = (dom.querySelector("article > header > h1")).innerText.trim();
        const content = dom.querySelector("#content");
        if (content) {
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.meegoq = meegoq;


/***/ }),

/***/ "./src/rules/mht.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mht = void 0;
const lib_1 = __webpack_require__("./src/lib.ts");
const biquge_1 = __webpack_require__("./src/rules/biquge.ts");
const log_1 = __webpack_require__("./src/log.ts");
class mht {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const self = this;
        return biquge_1.bookParseTemp({
            bookUrl: document.location.href,
            bookname: (document.querySelector("#info > h1:nth-child(1)")).innerText.trim(),
            author: (document.querySelector("#info > p:nth-child(2)")).innerText
                .replace(/作(\s+)?者[：:]/, "")
                .trim(),
            introDom: document.querySelector("#intro"),
            introDomPatch: (introDom) => introDom,
            coverUrl: document.querySelector("#fmimg > img").src,
            chapterListSelector: "#list>dl",
            charset: "UTF-8",
            chapterParse: self.chapterParse,
        });
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        log_1.log.debug(`[Chapter]请求 ${chapterUrl}`);
        let nowUrl = chapterUrl;
        let doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        const content = document.createElement("div");
        let flag = false;
        do {
            const _content = doc.querySelector("#content");
            lib_1.rm("p[data-id]", true, _content);
            for (const _c of Array.from(_content.childNodes)) {
                content.appendChild(_c);
            }
            const nextLink = (doc.querySelector(".bottem2 > a:nth-child(4)")).href;
            if (new URL(nextLink).pathname.includes("_")) {
                if (nextLink !== nowUrl) {
                    flag = true;
                }
                else {
                    log_1.log.error("网站页面出错，URL： " + nowUrl);
                    flag = false;
                }
            }
            else {
                flag = false;
            }
            if (flag) {
                log_1.log.debug(`[Chapter]请求 ${nextLink}`);
                nowUrl = nextLink;
                doc = await lib_1.getHtmlDOM(nextLink, charset);
            }
        } while (flag);
        let { dom, text, images } = lib_1.cleanDOM(content, "TM");
        return {
            chapterName: chapterName,
            contentRaw: content,
            contentText: text,
            contentHTML: dom,
            contentImages: images,
            additionalMetadate: null,
        };
    }
}
exports.mht = mht;


/***/ }),

/***/ "./src/rules/qidian.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.qidian = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class qidian {
    constructor() {
        this.imageMode = "TM";
        this.concurrencyLimit = 5;
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector(".book-info > h1 > em")).innerText.trim();
        const author = (document.querySelector(".book-info .writer")).innerText
            .replace(/作\s+者:/, "")
            .trim();
        const introDom = document.querySelector(".book-info-detail .book-intro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        let coverUrl = document.querySelector("#bookImg > img")
            .src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        additionalMetadate.tags = Array.from(document.querySelectorAll(".tag-wrap>.tags")).map((a) => a.innerText.trim());
        const chapters = [];
        const liLength = document.querySelectorAll("#j-catalogWrap li").length;
        const getChapterTotalNumber = () => {
            const span = (document.querySelector("#J-catalogCount")).innerText.match(/\d+/);
            if (span) {
                return Number(span[0]);
            }
        };
        if (!(liLength && getChapterTotalNumber() === liLength)) {
            await lib_1.sleep(3000);
        }
        const sections = document.querySelectorAll("#j-catalogWrap > .volume-wrap > .volume");
        let chapterNumber = 0;
        for (let i = 0; i < sections.length; i++) {
            const s = sections[i];
            const sectionNumber = i + 1;
            const sectionName = s.querySelector("h3").innerText
                .trim()
                .split("·")[0];
            let sectionChapterNumber = 0;
            const cs = s.querySelectorAll("ul.cf > li");
            for (let j = 0; j < cs.length; j++) {
                const c = cs[j];
                const a = c.firstElementChild;
                chapterNumber++;
                sectionChapterNumber++;
                const chapterName = a.innerText.trim();
                const chapterUrl = a.href;
                const isVIP = () => {
                    const host = new URL(chapterUrl).host;
                    if (host === "vipreader.qidian.com") {
                        return true;
                    }
                    return false;
                };
                const isPaid = () => {
                    if (isVIP()) {
                        if (c.childElementCount === 2) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                    return false;
                };
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP(), isPaid(), sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, "UTF-8", {});
                const isLogin = () => {
                    const sign_in_dom = document.querySelector(".sign-in");
                    const sign_out_dom = document.querySelector(".sign-out");
                    if (sign_in_dom && sign_out_dom) {
                        if (Array.from(sign_out_dom.classList).includes("hidden")) {
                            return true;
                        }
                    }
                    return false;
                };
                if (isVIP() && !(isLogin() && chapter.isPaid)) {
                    chapter.status = main_1.Status.aborted;
                }
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        async function publicChapter() {
            const dom = await lib_1.ggetHtmlDOM(chapterUrl, charset);
            const chapterName = (dom.querySelector(".j_chapterName > .content-wrap")).innerText.trim();
            const content = dom.querySelector(".read-content");
            const author_say_wrap = (dom.querySelector(".author-say-wrap"));
            if (content) {
                if (author_say_wrap) {
                    const author_say = author_say_wrap.querySelector("div.author-say > p:nth-child(3)");
                    const hr = document.createElement("hr");
                    content.appendChild(hr);
                    content.appendChild(author_say);
                }
                let { dom, text, images } = lib_1.cleanDOM(content, "TM");
                return {
                    chapterName: chapterName,
                    contentRaw: content,
                    contentText: text,
                    contentHTML: dom,
                    contentImages: images,
                    additionalMetadate: null,
                };
            }
            else {
                return {
                    chapterName: chapterName,
                    contentRaw: null,
                    contentText: null,
                    contentHTML: null,
                    contentImages: null,
                    additionalMetadate: null,
                };
            }
        }
        async function vipChapter() {
            const _csrfToken = unsafeWindow.jQuery.ajaxSettings.data
                ._csrfToken;
            const bookId = document.location.pathname.split("/").slice(-1)[0];
            const authorId = document
                .querySelector("#authorId")
                ?.getAttribute("data-authorid");
            const chapterId = chapterUrl.split("/").slice(-1)[0];
            async function getChapterInfo() {
                const baseUrl = "https://vipreader.qidian.com/ajax/chapter/chapterInfo";
                const search = new URLSearchParams({
                    _csrfToken: _csrfToken,
                    bookId: bookId,
                    chapterId: chapterId,
                    authorId: authorId,
                });
                const url = baseUrl + "?" + search.toString();
                log_1.log.debug(`[Chapter]请求 ${url} Referer ${chapterUrl}`);
                return lib_1.gfetch(url, {
                    headers: {
                        accept: "application/json, text/javascript, */*; q=0.01",
                        "x-requested-with": "XMLHttpRequest",
                        Referer: chapterUrl,
                    },
                    responseType: "json",
                }).then((response) => response.response);
            }
            if (isPaid) {
                const chapterInfo = await getChapterInfo();
                if (chapterInfo.code === 0) {
                    const authorSay = chapterInfo.data.chapterInfo.authorSay;
                    const _content = chapterInfo.data.chapterInfo.content;
                    const content = document.createElement("div");
                    content.innerHTML = _content;
                    if (authorSay) {
                        const hr = document.createElement("hr");
                        content.appendChild(hr);
                        const authorSayDom = document.createElement("p");
                        authorSayDom.innerHTML = authorSay;
                        content.appendChild(authorSayDom);
                    }
                    const { dom, text, images } = lib_1.cleanDOM(content, "TM");
                    return {
                        chapterName: chapterName,
                        contentRaw: content,
                        contentText: text,
                        contentHTML: dom,
                        contentImages: images,
                        additionalMetadate: null,
                    };
                }
            }
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.qidian = qidian;


/***/ }),

/***/ "./src/rules/qimao.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.qimao = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class qimao {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        let bookUrl = document.location.href;
        const bookname = (document.querySelector("h2.tit")).innerText.trim();
        const author = (document.querySelector(".p-name > a")).innerHTML.trim();
        const introDom = (document.querySelector(".book-introduction .article"));
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = (document.querySelector(".poster-pic > img")).src;
        if (coverUrl) {
            additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
            additionalMetadate.cover.init();
        }
        additionalMetadate.tags = Array.from(document.querySelectorAll(".qm-tags > a")).map((a) => a.innerText.trim());
        const chapters = [];
        const cos = document.querySelectorAll('.chapter-directory > dd > div[sort-type="ascending"] a');
        let chapterNumber = 0;
        for (const aElem of Array.from(cos)) {
            chapterNumber++;
            const chapterName = aElem.innerText;
            const chapterUrl = aElem.href;
            const isVIP = () => {
                if (aElem.childElementCount) {
                    return true;
                }
                else {
                    return false;
                }
            };
            const isPaid = () => {
                return false;
            };
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP(), isPaid(), null, null, null, this.chapterParse, "UTF-8", {});
            const isLogin = () => {
                return false;
            };
            if (isVIP() && !(isLogin() && chapter.isPaid)) {
                chapter.status = main_1.Status.aborted;
            }
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        async function publicChapter() {
            log_1.log.debug(`[Chapter]请求 ${chapterUrl}`);
            let doc = await lib_1.getHtmlDOM(chapterUrl, charset);
            chapterName = doc.querySelector(".title").innerText.trim();
            const content = doc.querySelector(".article");
            if (content) {
                let { dom, text, images } = lib_1.cleanDOM(content, "TM");
                return {
                    chapterName: chapterName,
                    contentRaw: content,
                    contentText: text,
                    contentHTML: dom,
                    contentImages: images,
                    additionalMetadate: null,
                };
            }
            else {
                return {
                    chapterName: chapterName,
                    contentRaw: null,
                    contentText: null,
                    contentHTML: null,
                    contentImages: null,
                    additionalMetadate: null,
                };
            }
        }
        async function vipChapter() {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.qimao = qimao;


/***/ }),

/***/ "./src/rules/sfacg.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sfacg = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const rules_1 = __webpack_require__("./src/rules.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class sfacg {
    constructor() {
        this.imageMode = "TM";
        this.concurrencyLimit = 1;
    }
    async bookParse() {
        const bookUrl = document.location.href.replace("/MainIndex/", "");
        const bookname = (document.querySelector("h1.story-title")).innerText.trim();
        const dom = await lib_1.getHtmlDOM(bookUrl, undefined);
        const author = (dom.querySelector(".author-name")).innerText.trim();
        const introDom = dom.querySelector(".introduce");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        let coverUrl = (dom.querySelector("#hasTicket div.pic img")).src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        additionalMetadate.tags = Array.from(dom.querySelectorAll("ul.tag-list > li.tag > a")).map((a) => {
            lib_1.rm("span.icn", false, a);
            return a.innerText.trim().replace(/\(\d+\)$/, "");
        });
        if (dom.querySelector(".d-banner")) {
            const _beitouUrl = (dom.querySelector(".d-banner"))?.style.backgroundImage.split('"');
            if (_beitouUrl?.length === 3) {
                const beitouUrl = _beitouUrl[1];
                const beitou = new main_1.attachmentClass(beitouUrl, `beitou.${beitouUrl.split(".").slice(-1)[0]}`, "TM");
                beitou.init();
                additionalMetadate.attachments = [beitou];
            }
        }
        const chapters = [];
        const sections = document.querySelectorAll(".story-catalog");
        let chapterNumber = 0;
        for (let i = 0; i < sections.length; i++) {
            const s = sections[i];
            const sectionNumber = i + 1;
            const sectionName = (s.querySelector(".catalog-title")).innerText
                .replace(`【${bookname}】`, "")
                .trim();
            let sectionChapterNumber = 0;
            const cs = s.querySelectorAll(".catalog-list > ul > li > a");
            for (let j = 0; j < cs.length; j++) {
                const c = cs[j];
                const _chapterName = c.getAttribute("title")?.trim();
                chapterNumber++;
                sectionChapterNumber++;
                const chapterName = _chapterName ? _chapterName : "";
                const chapterUrl = c.href;
                let isVIP = false;
                let isPaid = null;
                if (c.childElementCount &&
                    c.firstElementChild?.getAttribute("class") === "icn_vip") {
                    isVIP = true;
                }
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, "UTF-8", {});
                const isLogin = document.querySelector(".user-bar > .top-link > .normal-link")
                    ?.childElementCount === 3
                    ? true
                    : false;
                if (isVIP && !isLogin) {
                    chapter.status = main_1.Status.aborted;
                }
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const chapter_id = chapterUrl.split("/").slice(-2, -1)[0];
        async function publicChapter() {
            const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
            const chapterName = (dom.querySelector("h1.article-title")).innerText.trim();
            const content = dom.querySelector(".article-content");
            if (content) {
                let { dom, text, images } = lib_1.cleanDOM(content, "TM");
                return {
                    chapterName: chapterName,
                    contentRaw: content,
                    contentText: text,
                    contentHTML: dom,
                    contentImages: images,
                    additionalMetadate: null,
                };
            }
            else {
                return {
                    chapterName: chapterName,
                    contentRaw: null,
                    contentText: null,
                    contentHTML: null,
                    contentImages: null,
                    additionalMetadate: null,
                };
            }
        }
        async function vipChapter() {
            async function getvipChapterImage(vipChapterImageUrl, vipChapterName) {
                let retryTime = 0;
                function fetchVipChapterImage(vipChapterImageUrl) {
                    log_1.log.debug(`[Chapter]请求 ${vipChapterImageUrl} Referer ${chapterUrl} 重试次数 ${retryTime}`);
                    return fetch(vipChapterImageUrl, {
                        headers: {
                            accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
                        },
                        referrer: chapterUrl,
                        body: null,
                        method: "GET",
                        mode: "cors",
                        credentials: "include",
                    })
                        .then((response) => response.blob())
                        .then((blob) => {
                        if (blob.size === 53658 || blob.size === 42356) {
                            log_1.log.error(`[Chapter]请求 ${vipChapterImageUrl} 失败 Referer ${chapterUrl}`);
                            if (retryTime < rules_1.retryLimit) {
                                retryTime++;
                                return fetchVipChapterImage(vipChapterImageUrl);
                            }
                            else {
                                return null;
                            }
                        }
                        else {
                            return blob;
                        }
                    });
                }
                const vipChapterImageBlob = await fetchVipChapterImage(vipChapterImageUrl);
                const vipChapterImage = new main_1.attachmentClass(vipChapterImageUrl, vipChapterName, "naive");
                if (vipChapterImageBlob) {
                    vipChapterImage.imageBlob = vipChapterImageBlob;
                    vipChapterImage.status = main_1.Status.finished;
                }
                else {
                    vipChapterImage.status = main_1.Status.failed;
                }
                return vipChapterImage;
            }
            const isLogin = document.querySelector(".user-bar > .top-link > .normal-link")
                ?.childElementCount === 3
                ? true
                : false;
            if (isLogin) {
                const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
                const chapterName = (dom.querySelector("h1.article-title")).innerText.trim();
                const isPaid = dom.querySelector(".pay-section") === null;
                if (isPaid) {
                    const vipChapterDom = (dom.querySelector(".article-content > #vipImage"));
                    if (vipChapterDom) {
                        const vipChapterImageUrl = vipChapterDom.src;
                        const vipChapterName = `vipCHapter${chapter_id}.gif`;
                        const vipChapterImage = await getvipChapterImage(vipChapterImageUrl, vipChapterName);
                        const contentImages = [vipChapterImage];
                        const img = document.createElement("img");
                        img.src = vipChapterName;
                        img.alt = vipChapterImageUrl;
                        const contentHTML = document.createElement("div");
                        contentHTML.appendChild(img);
                        const contentText = `VIP章节，请打开HTML文件查看。\n![${vipChapterImageUrl}](${vipChapterName})`;
                        return {
                            chapterName: chapterName,
                            contentRaw: contentHTML,
                            contentText: contentText,
                            contentHTML: contentHTML,
                            contentImages: contentImages,
                            additionalMetadate: null,
                        };
                    }
                    else {
                        return publicChapter();
                    }
                }
            }
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.sfacg = sfacg;


/***/ }),

/***/ "./src/rules/shouda8.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shouda8 = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class shouda8 {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector(".bread-crumbs > li:nth-child(4)")).innerText.trim();
        const author = (document.querySelector("div.bookname > h1 > em")).innerText
            .replace("作者：", "")
            .trim();
        const introDom = document.querySelector(".intro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom, (introDom) => {
            lib_1.rm(".book_keywords", false, introDom);
            lib_1.rm("script", true, introDom);
            lib_1.rm("#cambrian0", false, introDom);
            return introDom;
        });
        const additionalMetadate = {};
        const coverUrl = (document.querySelector(".pic > img:nth-child(1)")).src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const chapterList = document.querySelectorAll(".link_14 > dl dd a");
        for (let i = 0; i < chapterList.length; i++) {
            const a = chapterList[i];
            const chapterName = a.innerText;
            const chapterUrl = a.href;
            const isVIP = false;
            const isPaid = false;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, i + 1, chapterName, isVIP, isPaid, null, null, null, this.chapterParse, "UTF-8", {});
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = (dom.querySelector(".kfyd > h2:nth-child(1)")).innerText.trim();
        const content = dom.querySelector("#content");
        if (content) {
            lib_1.rm("p:last-child", false, content);
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.shouda8 = shouda8;


/***/ }),

/***/ "./src/rules/shubaowa.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shubaowa = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class shubaowa {
    constructor() {
        this.imageMode = "TM";
        this.charset = "GBK";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector("#info > h1:nth-child(1)")).innerText.trim();
        const author = (document.querySelector("#info > p:nth-child(2)")).innerText
            .replace(/作(\s+)?者[：:]/, "")
            .trim();
        const introDom = document.querySelector("#intro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = document.querySelector("#fmimg > img")
            ?.src;
        if (coverUrl) {
            additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
            additionalMetadate.cover.init();
        }
        const chapters = [];
        const cos = document.querySelectorAll("#list > dl > dd > a");
        let chapterNumber = 0;
        for (const aElem of Array.from(cos)) {
            chapterNumber++;
            const chapterName = aElem.innerText;
            const chapterUrl = aElem.href;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, false, false, null, null, null, this.chapterParse, this.charset, {});
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = (dom.querySelector(".bookname > h1:nth-child(1)")).innerText.trim();
        const content = dom.querySelector("#content");
        if (content) {
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.shubaowa = shubaowa;


/***/ }),

/***/ "./src/rules/shuhai.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shuhai = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class shuhai {
    constructor() {
        this.imageMode = "TM";
        this.concurrencyLimit = 5;
        this.charset = "GBK";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector("div.book-info-bookname > span:nth-child(1)")).innerText.trim();
        const author = (document.querySelector("div.book-info-bookname > span:nth-child(2)")).innerText
            .replace("作者: ", "")
            .trim();
        const introDom = document.querySelector("div.book-info-bookintro") ||
            document.querySelector("div.book-info-bookintro-all");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        let coverUrl = (document.querySelector(".book-cover-wrapper > img")).getAttribute("data-original");
        if (coverUrl) {
            additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
            additionalMetadate.cover.init();
        }
        additionalMetadate.tags = Array.from(document.querySelectorAll(".book-info-bookstate > .tag")).map((span) => span.innerText.trim());
        const chapters = [];
        if (document.querySelectorAll("#catalog > .chapter-item").length === 0) {
            await lib_1.sleep(3000);
        }
        const dsList = document.querySelectorAll("#catalog > .chapter-item");
        let chapterNumber = 0;
        let sectionNumber = 0;
        let sectionName = null;
        let sectionChapterNumber = 0;
        for (let i = 0; i < dsList.length; i++) {
            const node = dsList[i];
            if (node.nodeName === "SPAN") {
                sectionNumber++;
                sectionChapterNumber = 0;
                sectionName = node?.innerText.trim();
            }
            else if (node.nodeName === "DIV") {
                chapterNumber++;
                sectionChapterNumber++;
                const a = node.querySelector("a");
                const isVIP = () => {
                    if (node.childElementCount === 2) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                const isPaid = () => {
                    return false;
                };
                const chapterName = a.innerText.trim();
                const chapterUrl = a.href;
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP(), isPaid(), sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                const isLogin = () => {
                    return false;
                };
                if (isVIP() && !(isLogin() && chapter.isPaid)) {
                    chapter.status = main_1.Status.aborted;
                }
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        async function publicChapter() {
            const dom = await lib_1.ggetHtmlDOM(chapterUrl, charset);
            const chapterName = (dom.querySelector("div.chapter-name")).innerText
                .replace("正文 ", "")
                .trim();
            const content = (dom.querySelector("#reader-content > div:nth-child(1)"));
            if (content) {
                lib_1.rm("div.chaper-info", false, content);
                let { dom, text, images } = lib_1.cleanDOM(content, "TM");
                return {
                    chapterName: chapterName,
                    contentRaw: content,
                    contentText: text,
                    contentHTML: dom,
                    contentImages: images,
                    additionalMetadate: null,
                };
            }
            else {
                return {
                    chapterName: chapterName,
                    contentRaw: null,
                    contentText: null,
                    contentHTML: null,
                    contentImages: null,
                    additionalMetadate: null,
                };
            }
        }
        async function vipChapter() {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.shuhai = shuhai;


/***/ }),

/***/ "./src/rules/sosadfun.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sosadfun = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
class sosadfun {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.origin + document.location.pathname;
        const bookname = (document.querySelector(".font-1")).innerText.trim();
        const authorDom = (document.querySelector("div.h5:nth-child(1) > div:nth-child(1) > a:nth-child(1)"));
        let author;
        if (authorDom) {
            author = authorDom.innerText.trim();
        }
        else {
            author = "匿名咸鱼";
        }
        const needLogin = () => {
            const mainDom = document.querySelector(".col-xs-12 > .main-text.no-selection");
            if (mainDom.innerText.trim() === "主楼隐藏，请登录后查看") {
                return true;
            }
            else {
                return false;
            }
        };
        const additionalMetadate = {};
        additionalMetadate.tags = Array.from(document.querySelectorAll("div.h5:nth-child(1) > div:nth-child(3) > a")).map((a) => a.innerText.trim());
        let introduction;
        let introductionHTML;
        let introDom;
        if (needLogin()) {
            alert("本小说需要登录后浏览！");
            throw new main_1.ExpectError("本小说需要登录后浏览！");
        }
        else {
            introDom = document.createElement("div");
            const shortIntroDom = document.querySelector("div.h5:nth-child(3)");
            const longIntroDom = document.querySelector(".col-xs-12 > .main-text.no-selection");
            if (shortIntroDom) {
                const pElem = document.createElement("p");
                pElem.innerText = shortIntroDom.innerText;
                introDom.appendChild(pElem);
            }
            if (longIntroDom) {
                for (const elem of Array.from(longIntroDom.cloneNode(true).children)) {
                    introDom.appendChild(elem);
                }
            }
        }
        if (introDom === null) {
            introduction = null;
            introductionHTML = null;
        }
        else {
            let { dom: introCleanDom, text: introCleantext, images: introCleanimages, } = lib_1.cleanDOM(introDom, "TM");
            introduction = introCleantext;
            introductionHTML = introCleanDom;
            if (introCleanimages) {
                additionalMetadate.attachments = [...introCleanimages];
            }
        }
        const chapters = [];
        const aList = document.querySelectorAll(".table > tbody:nth-child(2) > tr > th:nth-child(1) > a");
        let chapterNumber = 0;
        for (const a of Array.from(aList)) {
            chapterNumber++;
            const chapterName = a.innerText.trim();
            const chapterUrl = a.href;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, false, false, null, null, null, this.chapterParse, "UTF-8", {});
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = (doc.querySelector("strong.h3")).innerText.trim();
        const content = (doc.querySelector(".main-text.no-selection > span[id^=full]"));
        if (content) {
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.sosadfun = sosadfun;


/***/ }),

/***/ "./src/rules/soxscc.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.soxscc = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class soxscc {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector(".xiaoshuo > h1")).innerText.trim();
        const author = (document.querySelector(".xiaoshuo > h6:nth-child(3) > a")).innerText.trim();
        const introDom = document.querySelector("#intro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom, (introDom) => {
            lib_1.rm("span.tags", false, introDom);
            lib_1.rm("q", true, introDom);
            return introDom;
        });
        const additionalMetadate = {};
        const coverUrl = (document.querySelector(".book_cover > img")).src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const novel_list = document.querySelector("div.novel_list[id]");
        const sections = Array.from(novel_list.children);
        let chapterNumber = 0;
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionName = section.querySelector("dt > b")
                ?.innerText;
            const cos = Array.from(section.querySelectorAll("dd > a"));
            let sectionChapterNumber = 0;
            for (const a of cos) {
                chapterNumber++;
                sectionChapterNumber++;
                const chapterUrl = a.href;
                const chapterName = a.innerText;
                const isVIP = false;
                const isPaid = false;
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, i + 1, sectionChapterNumber, this.chapterParse, "UTF-8", { bookname: bookname });
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        const bookname = options.bookname;
        chapterName = (doc.querySelector(".read_title > h1")).innerText.trim();
        const content = doc.querySelector("div.content[id]");
        if (content) {
            const ad = `您可以在百度里搜索“${bookname} 搜小说(${document.location.hostname})”查找最新章节！`;
            content.innerHTML = content.innerHTML.replaceAll(ad, "");
            Array.from(content.querySelectorAll("p")).forEach((p) => {
                const adwords = [
                    "最新章节地址：",
                    "全文阅读地址：",
                    "txt下载地址：",
                    "手机阅读：",
                    '为了方便下次阅读，你可以点击下方的"收藏"记录本次',
                    "请向你的朋友（QQ、博客、微信等方式）推荐本书",
                ];
                for (const adword of adwords) {
                    if (p.innerText.includes(adword)) {
                        p.remove();
                    }
                }
            });
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.soxscc = soxscc;


/***/ }),

/***/ "./src/rules/tadu.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tadu = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class tadu {
    constructor() {
        this.imageMode = "TM";
        this.concurrencyLimit = 5;
    }
    async bookParse() {
        let bookUrl = document.location.href.replace("catalogue/", "");
        const bookname = (document.querySelector("div.boxCenter > h1")).innerText.trim();
        const author = (document.querySelector(".itct > span:nth-child(1)")).innerText
            .replace("作者：", "")
            .trim();
        const doc = await lib_1.getHtmlDOM(bookUrl, undefined);
        const introDom = (doc.querySelector("div.boxCenter.bookIntro > div > p:nth-child(4)"));
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = (doc.querySelector("a.bookImg > img")).getAttribute("data-src");
        if (coverUrl) {
            additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
            additionalMetadate.cover.init();
        }
        const chapters = [];
        const cos = document.querySelectorAll("div.chapter > a");
        let chapterNumber = 0;
        for (const aElem of Array.from(cos)) {
            chapterNumber++;
            const chapterName = aElem.innerText;
            const chapterUrl = aElem.href;
            const isVIP = () => {
                if (aElem.childElementCount) {
                    return true;
                }
                else {
                    return false;
                }
            };
            const isPaid = () => {
                return false;
            };
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP(), isPaid(), null, null, null, this.chapterParse, "UTF-8", {});
            const isLogin = () => {
                return false;
            };
            if (isVIP() && !(isLogin() && chapter.isPaid)) {
                chapter.status = main_1.Status.aborted;
            }
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        async function publicChapter() {
            log_1.log.debug(`[Chapter]请求 ${chapterUrl}`);
            const doc = await lib_1.getHtmlDOM(chapterUrl, charset);
            const content = document.createElement("div");
            const _bookPartResourceUrl = doc
                .getElementById("bookPartResourceUrl")
                ?.getAttribute("value");
            if (_bookPartResourceUrl) {
                const bookPartResourceUrl = new URL(_bookPartResourceUrl);
                bookPartResourceUrl.searchParams.set("callback", "callback");
                log_1.log.debug(`[Chapter]请求 ${bookPartResourceUrl.toString()}`);
                const jsonpText = await lib_1.gfetch(bookPartResourceUrl.toString(), {
                    headers: {
                        accept: "*/*",
                        Referer: document.location.origin,
                    },
                }).then((response) => {
                    if (response.status >= 200 && response.status <= 299) {
                        return response.responseText;
                    }
                    else {
                        throw new Error(`Bad response! ${bookPartResourceUrl.toString()}`);
                    }
                });
                const callback = (obj) => {
                    return obj;
                };
                const contentObj = eval(jsonpText);
                if (typeof contentObj === "object") {
                    content.innerHTML = contentObj.content;
                    let { dom, text, images } = lib_1.cleanDOM(content, "TM");
                    return {
                        chapterName: chapterName,
                        contentRaw: content,
                        contentText: text,
                        contentHTML: dom,
                        contentImages: images,
                        additionalMetadate: null,
                    };
                }
            }
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        async function vipChapter() {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.tadu = tadu;


/***/ }),

/***/ "./src/rules/uukanshu.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uukanshu = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class uukanshu {
    constructor() {
        this.imageMode = "TM";
        this.charset = "GBK";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector("dd.jieshao_content > h1 > a")).innerText
            .replace("最新章节", "")
            .trim();
        const author = (document.querySelector("dd.jieshao_content > h2 > a")).innerText.trim();
        const introDom = (document.querySelector("dd.jieshao_content > h3"));
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom, (introDom) => {
            introDom.innerHTML = introDom.innerHTML
                .replace(/^.+简介：\s+www.uukanshu.com\s+/, "")
                .replace(/\s+https:\/\/www.uukanshu.com/, "")
                .replace(/－+/, "");
            return introDom;
        });
        const additionalMetadate = {};
        const coverUrl = (document.querySelector("a.bookImg > img")).src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const button = (document.querySelector('span[onclick="javascript:reverse(this);"]'));
        const reverse = unsafeWindow.reverse;
        if (button.innerText === "顺序排列") {
            reverse(button);
        }
        const chapterList = (document.getElementById("chapterList")?.childNodes);
        if (chapterList && chapterList.length !== 0) {
            let chapterNumber = 0;
            let sectionNumber = 0;
            let sectionName = null;
            let sectionChapterNumber = 0;
            for (let i = 0; i < chapterList.length; i++) {
                const li = chapterList[i];
                if (li.className === "volume") {
                    sectionNumber++;
                    sectionChapterNumber = 0;
                    sectionName = li.innerText;
                }
                else {
                    chapterNumber++;
                    sectionChapterNumber++;
                    const a = li.firstElementChild;
                    const chapterName = a.innerText;
                    const chapterUrl = a.href;
                    const isVIP = false;
                    const isPaid = false;
                    const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                    chapters.push(chapter);
                }
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = dom.querySelector("#timu").innerText.trim();
        const content = dom.querySelector("#contentbox");
        if (content) {
            lib_1.rm(".ad_content", true, content);
            const contentReplace = [
                /[ＵｕUu]+看书\s*[wｗ]+.[ＵｕUu]+[kｋ][aａ][nｎ][ｓs][hｈ][ＵｕUu].[nｎ][eｅ][tｔ]/g,
                /[ＵｕUu]+看书\s*[wｗ]+.[ＵｕUu]+[kｋ][aａ][nｎ][ｓs][hｈ][ＵｕUu].[cＣｃ][oＯｏ][mＭｍ]/g,
                /[UＵ]*看书[（\\(].*?[）\\)]文字首发。/,
                /"请记住本书首发域名：。"/g,
                /"笔趣阁手机版阅读网址："/g,
                /"小说网手机版阅读网址："/g,
                /"https:\/\/"/g,
                /"http:\/\/"/g,
            ];
            for (let r of contentReplace) {
                content.innerHTML = content.innerHTML.replace(r, "");
            }
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.uukanshu = uukanshu;


/***/ }),

/***/ "./src/rules/wenku8.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wenku8 = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class wenku8 {
    constructor() {
        this.imageMode = "TM";
        this.charset = "GBK";
    }
    async bookParse() {
        const bookId = document.location.pathname.split("/").slice(-2, -1)[0];
        const bookUrl = [document.location.origin, "book", `${bookId}.htm`].join("/");
        const bookname = (document.querySelector("#title")).innerText.trim();
        const doc = await lib_1.getHtmlDOM(bookUrl, "GBK");
        const author = (doc.querySelector("#content > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)")).innerText
            .replace("小说作者：", "")
            .trim();
        const introDom = doc.querySelector("#content > div:nth-child(1) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(11)");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        let coverUrl = (doc.querySelector("#content > div:nth-child(1) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > img:nth-child(1)")).src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const tdList = Array.from(document.querySelectorAll(".css > tbody td")).filter((td) => td.innerText.trim());
        let chapterNumber = 0;
        let sectionNumber = 0;
        let sectionName = null;
        let sectionChapterNumber = 0;
        for (let i = 0; i < tdList.length; i++) {
            const td = tdList[i];
            if (td.className === "vcss") {
                sectionNumber++;
                sectionChapterNumber = 0;
                sectionName = td.innerText.trim();
            }
            else if (td.className === "ccss") {
                chapterNumber++;
                sectionChapterNumber++;
                const a = td.firstElementChild;
                const chapterName = a.innerText.trim();
                const chapterUrl = a.href;
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, false, false, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        const content = doc.querySelector("#content");
        if (content) {
            lib_1.rm("#contentdp", true, content);
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.wenku8 = wenku8;


/***/ }),

/***/ "./src/rules/westnovel.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.westnovel = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class westnovel {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector(".btitle > h1 > a")).innerText.trim();
        const author = (document.querySelector(".btitle > em:nth-child(2)")).innerText
            .replace("作者：", "")
            .trim();
        const introDom = document.querySelector(".intro-p > p:nth-child(1)");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        let coverUrl = document.querySelector(".img-img").src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const aList = document.querySelectorAll(".chapterlist > dd > a");
        let chapterNumber = 0;
        for (const a of Array.from(aList)) {
            chapterNumber++;
            const chapterName = a.innerText.trim();
            const chapterUrl = a.href;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, false, false, null, null, null, this.chapterParse, "UTF-8", {});
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = (doc.querySelector("#BookCon > h1:nth-child(1)")).innerText.trim();
        const content = doc.querySelector("#BookText");
        if (content) {
            lib_1.rm("div.ads", true, content);
            lib_1.rm("div.link", true, content);
            lib_1.rm("h4", true, content);
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.westnovel = westnovel;


/***/ }),

/***/ "./src/rules/xiaoshuodaquan.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.xiaoshuodaquan = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class xiaoshuodaquan {
    constructor() {
        this.imageMode = "TM";
        this.charset = "GBK";
        this.concurrencyLimit = 5;
    }
    async bookParse() {
        const ccount = document.querySelector(".crumbswrap")?.childElementCount;
        let bookUrl = document.location.href;
        if (ccount) {
            bookUrl = (document.querySelector(`.crumbswrap > a:nth-child(${ccount - 2})`)).href;
        }
        const bookname = (document.querySelector("div.dirwraps > h1")).innerText
            .replace("《", "")
            .replace("》", "")
            .trim();
        const author = (document.querySelector(".smallcons > span:nth-child(1) > a:nth-child(1)")).innerText.trim();
        const introDom = document.querySelector(".bookintro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom, (introDom) => {
            introDom.innerHTML = introDom.innerHTML.replace("内容简介:", "");
            return introDom;
        });
        const additionalMetadate = {};
        let coverUrl;
        if (ccount) {
            const dom = await lib_1.getHtmlDOM(bookUrl, "GBK");
            coverUrl = dom.querySelector(".con_limg > img").src;
        }
        if (coverUrl) {
            additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
            additionalMetadate.cover.init();
        }
        const chapters = [];
        const sectionNames = document.querySelectorAll(".dirwraps > div.dirtitone");
        const sections = document.querySelectorAll(".dirwraps > div.clearfix.dirconone");
        let chapterNumber = 0;
        for (let i = 0; i < sections.length; i++) {
            const sectionNameObj = sectionNames[i];
            const sectionObj = sections[i];
            const sectionNumber = i + 1;
            const sectionName = (sectionNameObj.firstElementChild)?.innerText
                .replace(bookname, "")
                .trim();
            let sectionChapterNumber = 0;
            const cos = sectionObj.querySelectorAll("ul>li>a");
            for (let j = 0; j < cos.length; j++) {
                chapterNumber++;
                sectionChapterNumber++;
                const a = cos[j];
                const chapterName = a.innerText;
                const chapterUrl = a.href;
                const isVIP = false;
                const isPaid = false;
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, this.charset, {});
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = (dom.querySelector(".page-body > h1:nth-child(4)")).innerText.trim();
        const _content = dom.querySelector("#content");
        if (_content) {
            lib_1.rm("div", true, _content);
            lib_1.rm("script", true, _content);
            const content = document.createElement("div");
            content.innerHTML = _content.innerHTML.replace(/\n/g, "<br/>");
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.xiaoshuodaquan = xiaoshuodaquan;


/***/ }),

/***/ "./src/rules/xinwanben.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.xinwanben = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class xinwanben {
    constructor() {
        this.imageMode = "TM";
        this.charset = "GBK";
    }
    async bookParse() {
        let bookUrl = document.location.href;
        const bookname = (document.querySelector(".detailTitle > h1")).innerText.trim();
        const author = (document.querySelector(".writer > a")).innerText.trim();
        const introDom = (document.querySelector(".detailTopMid > table > tbody > tr:nth-child(3) > td:nth-child(2)"));
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = (document.querySelector(".detailTopLeft > img")).src;
        if (coverUrl) {
            additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
            additionalMetadate.cover.init();
        }
        const chapters = [];
        const cos = document.querySelectorAll(".chapter > ul > li > a");
        let chapterNumber = 0;
        for (const co of Array.from(cos)) {
            chapterNumber++;
            const chapterName = co.innerText;
            const chapterUrl = co.href;
            const isVIP = false;
            const isPaid = false;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, null, null, null, this.chapterParse, this.charset, {});
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        log_1.log.debug(`[Chapter]请求 ${chapterUrl}`);
        let nowUrl = chapterUrl;
        let doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        const content = document.createElement("div");
        let flag = false;
        do {
            const _content = doc.querySelector(".readerCon");
            for (const _c of Array.from(_content.childNodes)) {
                content.appendChild(_c);
            }
            const nextLink = (doc.querySelector(".next")?.parentElement).href;
            if (new URL(nextLink).pathname.includes("_")) {
                if (nextLink !== nowUrl) {
                    flag = true;
                }
                else {
                    log_1.log.error("网站页面出错，URL： " + nowUrl);
                    flag = false;
                }
            }
            else {
                flag = false;
            }
            if (flag) {
                log_1.log.debug(`[Chapter]请求 ${nextLink}`);
                nowUrl = nextLink;
                doc = await lib_1.getHtmlDOM(nextLink, charset);
            }
        } while (flag);
        let { dom, text, images } = lib_1.cleanDOM(content, "TM");
        return {
            chapterName: chapterName,
            contentRaw: content,
            contentText: text,
            contentHTML: dom,
            contentImages: images,
            additionalMetadate: null,
        };
    }
}
exports.xinwanben = xinwanben;


/***/ }),

/***/ "./src/rules/xkzw.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.xkzw = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class xkzw {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector("#info > h1:nth-child(1)")).innerText.trim();
        const author = (document.querySelector("#info > p:nth-child(2)")).innerText
            .replace(/作(\s+)?者[：:]/, "")
            .trim();
        const introDom = document.querySelector("#intro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = document.querySelector("#fmimg > img")
            .src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const bookid = unsafeWindow.bookId;
        const apiUrl = [document.location.origin, "action.php"].join("/");
        log_1.log.debug(`[chapter]正在请求${apiUrl}`);
        const siteChapterList = await fetch(apiUrl, {
            headers: {
                accept: "application/json, text/javascript, */*",
                "content-type": "application/x-www-form-urlencoded",
                "x-requested-with": "XMLHttpRequest",
            },
            body: `action=clist&bookid=${bookid}`,
            method: "POST",
            mode: "cors",
            credentials: "include",
        }).then((response) => response.json());
        const dl = document.querySelector("#wrapper > div.box_con:nth-child(7) > div:nth-child(1) > dl:nth-child(1)");
        let tmpColumnName = "";
        let tmpColumnList = [];
        let tmpChapterList = [];
        if (dl?.childElementCount) {
            const dlc = Array.from(dl.children);
            for (let i = 0; i < dl.childElementCount; i++) {
                const node = dlc[i];
                if (i !== 0) {
                    if (node.nodeName === "DD") {
                        const a = node.firstElementChild;
                        const chapterName = a.innerText;
                        const chapterUrl = a.href;
                        const chapterid = chapterUrl
                            .split("/")
                            .slice(-1)[0]
                            .replace(".html", "");
                        tmpChapterList.push({
                            chapterid: Number(chapterid) - bookid * 11,
                            chaptername: chapterName,
                            isempty: 0,
                            originalurl: "",
                            currenturl: "",
                        });
                    }
                    else if (node.nodeName === "DT") {
                        const tmpColumnObj = {
                            columnname: tmpColumnName,
                            columnid: 0,
                            chapterlist: tmpChapterList,
                        };
                        tmpColumnList.push(tmpColumnObj);
                        tmpColumnName = node.innerText
                            .replace(`《${bookname}》`, "")
                            .trim();
                        tmpChapterList = [];
                    }
                }
                else {
                    tmpColumnName = node.innerText
                        .replace(`《${bookname}》`, "")
                        .trim();
                }
            }
        }
        const tcl = tmpChapterList.length;
        for (let i = 0; i < tcl; i++) {
            const tmpChapterObject = tmpChapterList.pop();
            if (tmpChapterObject) {
                siteChapterList.columnlist[0].chapterlist.unshift(tmpChapterObject);
            }
        }
        if (tmpColumnList.length !== 0) {
            const tmpColumnListLenght = tmpColumnList.length;
            for (let i = 0; i < tmpColumnListLenght; i++) {
                const tmpColumnObject = tmpColumnList.pop();
                if (tmpColumnObject) {
                    siteChapterList.columnlist.unshift(tmpColumnObject);
                }
            }
        }
        let chapterNumber = 0;
        let sectionNumber = 0;
        let sectionName = null;
        let sectionChapterNumber = 0;
        for (const column of siteChapterList.columnlist) {
            sectionNumber++;
            sectionName = column.columnname;
            for (const sitechapter of column.chapterlist) {
                chapterNumber++;
                sectionChapterNumber++;
                const chapterName = sitechapter.chaptername;
                const chapterUrl = bookUrl + (sitechapter.chapterid + bookid * 11) + ".html";
                const isVIP = false;
                const isPaid = false;
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, "UTF-8", {});
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        function runEval(CryptoJS) {
            function gettt1(str, keyStr, ivStr) {
                let key = CryptoJS.enc.Utf8.parse(keyStr);
                let iv = CryptoJS.enc.Utf8.parse(ivStr);
                let encryptedHexStr = CryptoJS.enc.Hex.parse(str);
                let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
                let decrypt = CryptoJS.DES.decrypt(srcs, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                });
                let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
                return decryptedStr.toString();
            }
            function gettt2(str, keyStr, ivStr) {
                let key = CryptoJS.enc.Utf8.parse(keyStr);
                let iv = CryptoJS.enc.Utf8.parse(ivStr);
                let encryptedHexStr = CryptoJS.enc.Hex.parse(str);
                let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
                let decrypt = CryptoJS.AES.decrypt(srcs, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                });
                let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
                return decryptedStr.toString();
            }
            function gettt3(str, keyStr, ivStr) {
                let key = CryptoJS.enc.Utf8.parse(keyStr);
                let iv = CryptoJS.enc.Utf8.parse(ivStr);
                let encryptedHexStr = CryptoJS.enc.Hex.parse(str);
                let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
                let decrypt = CryptoJS.RC4.decrypt(srcs, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                });
                let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
                return decryptedStr.toString();
            }
            function getttn(str, keyStr, ivStr) {
                let key = CryptoJS.enc.Utf8.parse(keyStr);
                let iv = CryptoJS.enc.Utf8.parse(ivStr);
                let encryptedHexStr = CryptoJS.enc.Hex.parse(str);
                let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
                let decrypt = CryptoJS.TripleDES.decrypt(srcs, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                });
                let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
                return decryptedStr.toString();
            }
            function showttt1(dom) {
                let obj = dom.getElementById("other");
                let objTips = dom.getElementById("contenttips");
                if (obj) {
                    let content = obj.innerHTML.trim();
                    let type = parseInt(content.substring(0, 1));
                    let key;
                    let iv;
                    if (type === 1) {
                        key = content.substring(1, 9);
                        iv = content.substring(9, 17);
                        content = content.substring(17);
                        obj.innerHTML = gettt1(content, key, iv);
                        obj.style.display = "block";
                        if (objTips) {
                            objTips.remove();
                        }
                    }
                    else if (type === 2) {
                        key = content.substring(1, 33);
                        iv = content.substring(33, 49);
                        content = content.substring(49);
                        obj.innerHTML = gettt2(content, key, iv);
                        obj.style.display = "block";
                        if (objTips) {
                            objTips.remove();
                        }
                    }
                    else if (type === 3) {
                        key = content.substring(1, 9);
                        iv = content.substring(9, 17);
                        content = content.substring(17);
                        obj.innerHTML = gettt3(content, key, iv);
                        obj.style.display = "block";
                        if (objTips) {
                            objTips.remove();
                        }
                    }
                    else {
                        key = content.substring(1, 25);
                        iv = content.substring(25, 33);
                        content = content.substring(33);
                        obj.innerHTML = getttn(content, key, iv);
                        obj.style.display = "block";
                        if (objTips) {
                            objTips.remove();
                        }
                    }
                }
            }
            showttt1(dom);
        }
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        runEval(CryptoJS);
        chapterName = (dom.querySelector(".bookname > h1:nth-child(1)")).innerText.trim();
        const content = dom.querySelector("#content");
        if (content) {
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.xkzw = xkzw;


/***/ }),

/***/ "./src/rules/yibige.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.yibige = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const log_1 = __webpack_require__("./src/log.ts");
class yibige {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = (document.querySelector("#list_hb > li:nth-child(2) > a:nth-child(1)")).href;
        const doc = await lib_1.getHtmlDOM(bookUrl, undefined);
        const bookname = (doc.querySelector(".title > h1:nth-child(1)")).innerText.trim();
        const author = (doc.querySelector("div.xsxq_2:nth-child(2) > a:nth-child(1)")).innerText.trim();
        const introDom = document.createElement("p");
        const _introDom = doc.querySelector(".nr");
        for (const node of Array.from(_introDom.childNodes)) {
            if (node.nodeName.toLowerCase() === "#text" &&
                node.textContent?.trim() === "相关：") {
                break;
            }
            introDom.appendChild(node.cloneNode(true));
        }
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = (doc.querySelector(".limg > img:nth-child(1)")).src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const dl = document.querySelector(".books_li");
        if (dl?.childElementCount) {
            const dlc = Array.from(dl.children);
            if (dlc[0].nodeName === "DT" &&
                dlc[0].innerText.includes("最新12章节")) {
                for (let i = 0; i < dl?.childElementCount; i++) {
                    if (i !== 0 && dlc[i].nodeName === "DT") {
                        delete dlc[0];
                        break;
                    }
                    delete dlc[i];
                }
            }
            const chapterList = dlc.filter((obj) => obj !== undefined && obj.getAttribute("style") === null);
            let chapterNumber = 0;
            let sectionNumber = 0;
            let sectionName = null;
            let sectionChapterNumber = 0;
            for (let i = 0; i < chapterList.length; i++) {
                const node = chapterList[i];
                if (node.nodeName === "DT") {
                    sectionNumber++;
                    sectionChapterNumber = 0;
                    sectionName = node.innerText.replace(`《${bookname}》`, "").trim();
                }
                else if (node.nodeName === "DD") {
                    if (node.childElementCount === 0) {
                        continue;
                    }
                    chapterNumber++;
                    sectionChapterNumber++;
                    const a = node.firstElementChild;
                    const chapterName = a.innerText;
                    const chapterUrl = a.href;
                    const isVIP = false;
                    const isPaid = false;
                    const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, "UTF-8", { bookname: bookname });
                    chapters.push(chapter);
                }
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        log_1.log.debug(`[Chapter]请求 ${chapterUrl}`);
        let nowUrl = chapterUrl;
        let doc = await lib_1.getHtmlDOM(chapterUrl, charset);
        const content = document.createElement("div");
        let flag = false;
        do {
            const _content = doc.querySelector("#fontsize");
            lib_1.rm("div", true, _content);
            lib_1.rm("script", true, _content);
            _content.innerHTML = _content.innerHTML.replaceAll("测试广告1", "");
            for (const _c of Array.from(_content.childNodes)) {
                content.appendChild(_c);
            }
            const nextLink = (doc.querySelector(".nr_fy > a:nth-child(4)")).href;
            if (new URL(nextLink).pathname.includes("_")) {
                if (nextLink !== nowUrl) {
                    flag = true;
                }
                else {
                    log_1.log.error("网站页面出错，URL： " + nowUrl);
                    flag = false;
                }
            }
            else {
                flag = false;
            }
            if (flag) {
                log_1.log.debug(`[Chapter]请求 ${nextLink}`);
                nowUrl = nextLink;
                doc = await lib_1.getHtmlDOM(nextLink, charset);
            }
        } while (flag);
        let { dom, text, images } = lib_1.cleanDOM(content, "TM");
        return {
            chapterName: chapterName,
            contentRaw: content,
            contentText: text,
            contentHTML: dom,
            contentImages: images,
            additionalMetadate: null,
        };
    }
}
exports.yibige = yibige;


/***/ }),

/***/ "./src/rules/yruan.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.yrun = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class yrun {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = document.location.href;
        const bookname = (document.querySelector("#info > h1:nth-child(1)")).innerText.trim();
        const author = (document.querySelector("#info > p:nth-child(2)")).innerText
            .replace(/作(\s+)?者[：:]/, "")
            .trim();
        const introDom = document.querySelector("#intro > p");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        const coverUrl = document.querySelector("#fmimg > img")
            .src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        const chapters = [];
        const chapterList = document.querySelectorAll("#list>dl>dd>a");
        if (chapterList && chapterList.length !== 0) {
            for (let i = 0; i < chapterList.length; i++) {
                const a = chapterList[i];
                const chapterName = a.innerText;
                const chapterUrl = a.href;
                const isVIP = false;
                const isPaid = false;
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, i, chapterName, isVIP, isPaid, null, null, null, this.chapterParse, "UTF-8", {});
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        const dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        chapterName = (dom.querySelector(".bookname > h1:nth-child(1)")).innerText.trim();
        const content = dom.querySelector("#content");
        if (content) {
            let { dom, text, images } = lib_1.cleanDOM(content, "TM");
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: text,
                contentHTML: dom,
                contentImages: images,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.yrun = yrun;


/***/ }),

/***/ "./src/rules/yuzhaige.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.yuzhaige = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
const yuzhaigeImageDecode_1 = __webpack_require__("./src/rules/lib/yuzhaigeImageDecode.ts");
const log_1 = __webpack_require__("./src/log.ts");
class yuzhaige {
    constructor() {
        this.imageMode = "TM";
    }
    async bookParse() {
        const bookUrl = (document.querySelector("div.currency_head > h1 > a")).href;
        const bookId = bookUrl.split("/").slice(-2, -1)[0];
        log_1.log.debug(`[chapter]请求 ${bookUrl}`);
        const dom = await lib_1.getHtmlDOM(bookUrl, "UTF-8");
        const bookname = (dom.querySelector("div.cataloginfo > h3")).innerText.trim();
        const author = (dom.querySelector(".infotype > p:nth-child(1) > a:nth-child(1)")).innerText.trim();
        const introDom = dom.querySelector(".intro");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom, (introDom) => {
            lib_1.rm("span:nth-child(1)", false, introDom);
            return introDom;
        });
        const additionalMetadate = {};
        const chapters = [];
        const getMaxPageNumber = () => {
            const pageDom = document.querySelector("div.page:nth-child(6)");
            if (pageDom) {
                const childNodes = Array.from(pageDom.childNodes);
                const _maxPageNumber = childNodes
                    .slice(-1)[0]
                    .textContent?.match(/第\d+\/(\d+)页/);
                if (_maxPageNumber) {
                    return _maxPageNumber[1];
                }
            }
        };
        const getIndexUrls = () => {
            const indexUrls = [];
            const maxPageNumber = Number(getMaxPageNumber());
            for (let i = 1; i <= maxPageNumber; i++) {
                const indexUrl = [
                    document.location.origin,
                    document.location.pathname.split("/")[1],
                    `${bookId}_${i}`,
                ].join("/") + "/";
                indexUrls.push(indexUrl);
            }
            return indexUrls;
        };
        const indexUrls = getIndexUrls();
        let lis = [];
        for (const indexUrl of indexUrls) {
            log_1.log.debug(`[chapter]请求 ${indexUrl}`);
            const dom = await lib_1.getHtmlDOM(indexUrl, "UTF-8");
            const ul = dom.querySelector("ul.chapters");
            if (ul?.childElementCount) {
                lis = lis.concat(Array.from(ul.children));
            }
        }
        const chapterList = lis.filter((obj) => obj !== undefined);
        let chapterNumber = 0;
        for (let i = 0; i < chapterList.length; i++) {
            const node = chapterList[i];
            chapterNumber++;
            const a = node.firstElementChild;
            const chapterName = a.innerText;
            const chapterUrl = a.href;
            const isVIP = false;
            const isPaid = false;
            const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP, isPaid, null, null, null, this.chapterParse, "UTF-8", {});
            chapters.push(chapter);
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        function contentAppend() {
            function UpWz(m, i) {
                let k = Math.ceil((i + 1) % code);
                k = Math.ceil(m - k);
                return k;
            }
            const _e = dom.getElementsByTagName("meta")[7].getAttribute("content");
            const contentRaw = dom.querySelector("#articlecontent");
            let codeurl;
            let code;
            const _codeurl = dom
                .getElementsByTagName("script")[1]
                .innerText.trim()
                .match(/"(http.+)"/);
            if (_codeurl) {
                codeurl = _codeurl[1];
                code = Number(new URL(codeurl).searchParams.get("code"));
            }
            if (_e) {
                const e = atob(_e)
                    .split(/[A-Z]+%/)
                    .map((v) => Number(v));
                let childNode = [];
                if (Array.from(dom.querySelectorAll("script")).filter((s) => s.src.includes("/17mb/js/article.js")).length) {
                    for (let i = 0; i < e.length; i++) {
                        let k = UpWz(e[i], i);
                        childNode[k] = contentRaw.childNodes[i];
                    }
                    for (const node of childNode) {
                        if (node.nodeType != 1) {
                            continue;
                        }
                        if (!(node.innerText.includes("本章尚未完结,请") ||
                            node.innerText.includes("本章已阅读完毕"))) {
                            content.appendChild(node);
                        }
                    }
                    return;
                }
            }
            for (const node of Array.from(contentRaw.childNodes)) {
                if (!(node.innerText.includes("本章尚未完结,请") ||
                    node.innerText.includes("本章已阅读完毕"))) {
                    content.appendChild(node);
                }
            }
            return;
        }
        let nowUrl = chapterUrl;
        let dom = await lib_1.getHtmlDOM(chapterUrl, charset);
        const content = document.createElement("div");
        let flag = false;
        do {
            contentAppend();
            const nextLink = (dom.querySelector(".novelbutton .p1.p3 > a:nth-child(1)")).href;
            if (new URL(nextLink).pathname.includes("_")) {
                if (nextLink !== nowUrl) {
                    flag = true;
                }
                else {
                    log_1.log.error("网站页面出错，URL： " + nowUrl);
                    flag = false;
                }
            }
            else {
                flag = false;
            }
            if (flag) {
                nowUrl = nextLink;
                dom = await lib_1.getHtmlDOM(nextLink, charset);
            }
        } while (flag);
        if (content) {
            let { dom: oldDom, text: _text, images: finalImages } = lib_1.cleanDOM(content, "TM");
            const _newDom = document.createElement("div");
            _newDom.innerHTML = yuzhaigeImageDecode_1.replaceYuzhaigeImage(content.innerHTML);
            let { dom: newDom, text: finalText, images } = lib_1.cleanDOM(_newDom, "TM");
            const fontStyleDom = document.createElement("style");
            fontStyleDom.innerHTML = `.hide { display: none; }`;
            oldDom.className = "hide";
            const finalDom = document.createElement("div");
            finalDom.appendChild(fontStyleDom);
            finalDom.appendChild(oldDom);
            finalDom.appendChild(newDom);
            return {
                chapterName: chapterName,
                contentRaw: content,
                contentText: finalText,
                contentHTML: finalDom,
                contentImages: finalImages,
                additionalMetadate: null,
            };
        }
        else {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
    }
}
exports.yuzhaige = yuzhaige;


/***/ }),

/***/ "./src/rules/zongheng.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zongheng = void 0;
const main_1 = __webpack_require__("./src/main.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
const common_1 = __webpack_require__("./src/rules/lib/common.ts");
class zongheng {
    constructor() {
        this.imageMode = "TM";
        this.concurrencyLimit = 5;
    }
    async bookParse() {
        const bookUrl = document.location.href.replace("/showchapter/", "/book/");
        const bookname = (document.querySelector("div.book-meta > h1")).innerText.trim();
        const author = (document.querySelector("div.book-meta > p > span:nth-child(1) > a")).innerText.trim();
        const doc = await lib_1.getHtmlDOM(bookUrl, undefined);
        const introDom = doc.querySelector("div.book-info > div.book-dec");
        const [introduction, introductionHTML, introCleanimages] = common_1.introDomHandle(introDom);
        const additionalMetadate = {};
        let coverUrl = doc.querySelector("div.book-img > img")
            .src;
        additionalMetadate.cover = new main_1.attachmentClass(coverUrl, `cover.${coverUrl.split(".").slice(-1)[0]}`, "TM");
        additionalMetadate.cover.init();
        additionalMetadate.tags = Array.from(doc.querySelectorAll(".book-info>.book-label a")).map((a) => a.innerText.trim());
        const chapters = [];
        const sections = document.querySelectorAll(".volume-list");
        let chapterNumber = 0;
        for (let i = 0; i < sections.length; i++) {
            const s = sections[i];
            const sectionNumber = i + 1;
            const sectionLabel = s.querySelector("div.volume");
            Array.from(sectionLabel.children).forEach((ele) => ele.remove());
            const sectionName = sectionLabel.innerText.trim();
            let sectionChapterNumber = 0;
            const cs = s.querySelectorAll("ul.chapter-list > li");
            for (let j = 0; j < cs.length; j++) {
                const c = cs[j];
                const a = c.querySelector("a");
                chapterNumber++;
                sectionChapterNumber++;
                const chapterName = a.innerText.trim();
                const chapterUrl = a.href;
                const isVIP = () => {
                    if (c.className.includes("vip")) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                const isPaid = () => {
                    return false;
                };
                const chapter = new main_1.Chapter(bookUrl, bookname, chapterUrl, chapterNumber, chapterName, isVIP(), isPaid(), sectionName, sectionNumber, sectionChapterNumber, this.chapterParse, "UTF-8", {});
                const isLogin = () => {
                    return false;
                };
                if (isVIP() && !(isLogin() && chapter.isPaid)) {
                    chapter.status = main_1.Status.aborted;
                }
                chapters.push(chapter);
            }
        }
        const book = new main_1.Book(bookUrl, bookname, author, introduction, introductionHTML, additionalMetadate, chapters);
        return book;
    }
    async chapterParse(chapterUrl, chapterName, isVIP, isPaid, charset, options) {
        async function publicChapter() {
            const dom = await lib_1.ggetHtmlDOM(chapterUrl, charset);
            const chapterName = (dom.querySelector("div.title_txtbox")).innerText.trim();
            const content = dom.querySelector("div.content");
            if (content) {
                let { dom, text, images } = lib_1.cleanDOM(content, "TM");
                return {
                    chapterName: chapterName,
                    contentRaw: content,
                    contentText: text,
                    contentHTML: dom,
                    contentImages: images,
                    additionalMetadate: null,
                };
            }
            else {
                return {
                    chapterName: chapterName,
                    contentRaw: null,
                    contentText: null,
                    contentHTML: null,
                    contentImages: null,
                    additionalMetadate: null,
                };
            }
        }
        async function vipChapter() {
            return {
                chapterName: chapterName,
                contentRaw: null,
                contentText: null,
                contentHTML: null,
                contentImages: null,
                additionalMetadate: null,
            };
        }
        if (isVIP) {
            return vipChapter();
        }
        else {
            return publicChapter();
        }
    }
}
exports.zongheng = zongheng;


/***/ }),

/***/ "./src/stat.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetStat = exports.printStat = exports.failedPlus = exports.successPlus = void 0;
const log_1 = __webpack_require__("./src/log.ts");
const lib_1 = __webpack_require__("./src/lib.ts");
if (lib_1._GM_setValue === null ||
    lib_1._GM_getValue === null ||
    lib_1._GM_deleteValue === null) {
    log_1.log.warn("未发现 GM value 相关 API，统计功能停用。");
    throw new Error("未发现 GM value 相关 API");
}
const statKeyName = "novel-downloader-22932304826849026";
const domain = document.location.hostname;
const _data = lib_1._GM_getValue(statKeyName);
let statData;
if (_data) {
    statData = JSON.parse(_data);
}
else {
    statData = { success: {}, failed: {} };
}
const saveData = () => {
    const dataJSON = JSON.stringify(statData);
    if (lib_1._GM_setValue === null ||
        lib_1._GM_getValue === null ||
        lib_1._GM_deleteValue === null) {
        throw new Error("未发现 GM value 相关 API");
    }
    lib_1._GM_setValue(statKeyName, dataJSON);
    return statData;
};
const dataPlus = (key) => {
    const tmpData = statData[key];
    if (tmpData[domain]) {
        tmpData[domain] = tmpData[domain] + 1;
    }
    else {
        tmpData[domain] = 1;
    }
    return saveData();
};
const successPlus = () => {
    return dataPlus("success");
};
exports.successPlus = successPlus;
const failedPlus = () => {
    return dataPlus("failed");
};
exports.failedPlus = failedPlus;
const printStat = () => {
    log_1.log.info("[stat]小说下载器脚本运行情况统计：");
    log_1.log.info(statData);
};
exports.printStat = printStat;
const resetStat = () => {
    statData = { success: {}, failed: {} };
    return saveData();
};
exports.resetStat = resetStat;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;