import * as CryptoJS from "crypto-js";
import { getImageAttachment } from "../../../lib/attachments";
import { cleanDOM } from "../../../lib/cleanDOM";
import { gfetch } from "../../../lib/http";
import { getHtmlDOM } from "../../../lib/http";
import { rm } from "../../../lib/misc";
import { introDomHandle } from "../../../lib/rule";
import { log } from "../../../log";
import {
  AttachmentClass,
  Book,
  BookAdditionalMetadate,
  Chapter,
  Status,
} from "../../../main";
import { BaseRuleClass, ChapterParseObject } from "../../../rules";

export interface CiweimaoWindow extends unsafeWindow {
  HB: any;
}

export class Ciweimao extends BaseRuleClass {
  public constructor() {
    super();
    this.imageMode = "TM";
    this.charset = "UTF-8";
    this.concurrencyLimit = 1;
    this.maxRunLimit = 1;
  }

  public async bookParse() {
    const bookid = (unsafeWindow as CiweimaoWindow).HB.book.book_id;
    const bookUrl = `https://www.ciweimao.com/book/${bookid}`;
    const bookname = (
      document.querySelector(".book-catalog .hd h3") as HTMLElement
    ).innerText.trim();
    const author = (
      document.querySelector(".book-catalog .hd > p > a") as HTMLElement
    ).innerText.trim();

    const dom = await getHtmlDOM(bookUrl, undefined);
    const introDom = dom.querySelector(".book-intro-cnt .book-desc");
    const [introduction, introductionHTML, introCleanimages] =
      await introDomHandle(introDom);

    const additionalMetadate: BookAdditionalMetadate = {};
    const coverUrl = (dom.querySelector(".cover > img") as HTMLImageElement)
      .src;
    if (coverUrl) {
      getImageAttachment(coverUrl, this.imageMode, "cover-")
        .then((coverClass) => {
          additionalMetadate.cover = coverClass;
        })
        .catch((error) => log.error(error));
    }
    additionalMetadate.tags = Array.from(
      dom.querySelectorAll(".label-box > .label")
    ).map((span) => (span as HTMLSpanElement).innerText.trim());

    const chapters: Chapter[] = [];
    const sections = document.querySelectorAll(
      ".book-chapter > .book-chapter-box"
    );
    let chapterNumber = 0;
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      const sectionNumber = i + 1;
      const sectionName = (s.querySelector(".sub-tit") as HTMLElement)
        .innerText;
      let sectionChapterNumber = 0;

      const cs = s.querySelectorAll(".book-chapter-list > li > a");
      for (const c of Array.from(cs)) {
        chapterNumber++;
        sectionChapterNumber++;
        const chapterName = (c as HTMLLinkElement).innerText.trim();
        const chapterUrl = (c as HTMLLinkElement).href;

        let isVIP = false;
        let isPaid = false;
        if (c.childElementCount) {
          isVIP = true;
          if (c.firstElementChild?.className === "icon-unlock") {
            isPaid = true;
          }
        }

        const chapter = new Chapter(
          bookUrl,
          bookname,
          chapterUrl,
          chapterNumber,
          chapterName,
          isVIP,
          isPaid,
          sectionName,
          sectionNumber,
          sectionChapterNumber,
          this.chapterParse,
          this.charset,
          {}
        );
        const isLogin =
          document.querySelector(".login-info.ly-fr")?.childElementCount === 1
            ? true
            : false;
        if (isVIP && !(isLogin && isPaid)) {
          chapter.status = Status.aborted;
        }
        chapters.push(chapter);
      }
    }

    const book = new Book(
      bookUrl,
      bookname,
      author,
      introduction,
      introductionHTML,
      additionalMetadate,
      chapters
    );
    return book;
  }

  public async chapterParse(
    chapterUrl: string,
    chapterName: string | null,
    isVIP: boolean,
    isPaid: boolean,
    charset: string,
    options: object
  ) {
    interface DecryptItem {
      content: string;
      keys: string[];
      accessKey: string;
    }
    function decrypt(item: DecryptItem) {
      type Message = {};
      let message = item.content;
      const keys = item.keys;
      const len = item.keys.length;
      const accessKey = item.accessKey;
      const accessKeyList = accessKey.split("");
      const charsNotLatinNum = accessKeyList.length;
      const output = new Array();
      output.push(
        keys[accessKeyList[charsNotLatinNum - 1].charCodeAt(0) % len]
      );
      output.push(keys[accessKeyList[0].charCodeAt(0) % len]);

      for (let i = 0; i < output.length; i++) {
        message = atob(message);
        const data = output[i];
        const iv = btoa(message.substr(0, 16));
        const keys255 = btoa(message.substr(16));
        const pass = CryptoJS.format.OpenSSL.parse(keys255);

        message = CryptoJS.AES.decrypt(pass, CryptoJS.enc.Base64.parse(data), {
          iv: CryptoJS.enc.Base64.parse(iv),
          format: CryptoJS.format.OpenSSL,
        }) as any;

        if (i < output.length - 1) {
          message = (message as any).toString(CryptoJS.enc.Base64);
          message = atob(message);
        }
      }

      return (message as any).toString(CryptoJS.enc.Utf8);
    }
    async function getChapterAuthorSay() {
      const doc = await getHtmlDOM(chapterUrl, undefined);
      const chapterAuthorSays = doc.querySelectorAll(
        "#J_BookCnt .chapter.author_say"
      );
      let divChapterAuthorSay: HTMLElement | undefined;
      if (chapterAuthorSays.length !== 0) {
        const hr = document.createElement("hr");
        divChapterAuthorSay = document.createElement("div");
        divChapterAuthorSay.appendChild(hr);

        for (const chapterAuthorSay of Array.from(chapterAuthorSays)) {
          rm("i", true, chapterAuthorSay as HTMLElement);
          divChapterAuthorSay.appendChild(chapterAuthorSay);
        }
      }
      return divChapterAuthorSay;
    }

    const chapterId = chapterUrl.split("/").slice(-1)[0];

    async function publicChapter(): Promise<ChapterParseObject> {
      async function chapterDecrypt(chapterIdt: string, refererUrl: string) {
        const rootPath = "https://www.ciweimao.com/";
        const accessKeyUrl = rootPath + "chapter/ajax_get_session_code";
        const chapterContentUrl =
          rootPath + "chapter/get_book_chapter_detail_info";

        interface AccessKeyObj {
          code: number;
          chapter_access_key: string;
        }
        log.debug(`[Chapter]请求 ${accessKeyUrl} Referer ${refererUrl}`);
        const accessKeyObj = await gfetch(accessKeyUrl, {
          method: "POST",
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Referer: refererUrl,
            Origin: "https://www.ciweimao.com",
            "X-Requested-With": "XMLHttpRequest",
          },
          data: `chapter_id=${chapterIdt}`,
          responseType: "json",
        })
          .then((response) => response.response)
          .catch((error) => log.error(error));

        const chapter_access_key = (accessKeyObj as AccessKeyObj)
          .chapter_access_key;

        interface ChapterContentObj {
          code: number;
          chapter_content: string;
          encryt_keys: string[];
          rad: number;
        }
        log.debug(`[Chapter]请求 ${chapterContentUrl} Referer ${refererUrl}`);
        const chapterContentObj = await gfetch(chapterContentUrl, {
          method: "POST",
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Referer: refererUrl,
            Origin: "https://www.ciweimao.com",
            "X-Requested-With": "XMLHttpRequest",
          },
          data: `chapter_id=${chapterIdt}&chapter_access_key=${chapter_access_key}`,
          responseType: "json",
        })
          .then((response) => response.response)
          .catch((error) => log.error(error));

        if ((chapterContentObj as ChapterContentObj).code !== 100000) {
          log.error(chapterContentObj);
          throw new Error(`下载 ${refererUrl} 失败`);
        }

        return decrypt({
          content: (chapterContentObj as ChapterContentObj).chapter_content,
          keys: (chapterContentObj as ChapterContentObj).encryt_keys,
          accessKey: chapter_access_key,
        });
      }

      const divChapterAuthorSay = await getChapterAuthorSay();
      const content = document.createElement("div");
      const decryptDate = await chapterDecrypt(chapterId, chapterUrl);

      content.innerHTML = decryptDate;
      rm(".chapter span", true, content);

      if (divChapterAuthorSay) {
        content.appendChild(divChapterAuthorSay);
      }

      const { dom, text, images } = await cleanDOM(content, "TM");
      return {
        chapterName,
        contentRaw: content,
        contentText: text,
        contentHTML: dom,
        contentImages: images,
        additionalMetadate: null,
      };
    }

    async function vipChapter(): Promise<ChapterParseObject> {
      const isLogin =
        document.querySelector(".login-info.ly-fr")?.childElementCount === 1
          ? true
          : false;
      if (isLogin && isPaid) {
        async function vipChapterDecrypt(
          chapterIdi: string,
          refererUrl: string
        ) {
          const HB = (unsafeWindow as CiweimaoWindow).HB;

          const parentWidth = 871;
          const setFontSize = "14";

          interface ImageSessionCodeObject {
            code: number;
            encryt_keys: string[];
            image_code: string;
            access_key: string;
          }
          const imageSessionCodeUrl =
            HB.config.rootPath + "chapter/ajax_get_image_session_code";
          log.debug(
            `[Chapter]请求 ${imageSessionCodeUrl} Referer ${refererUrl}`
          );
          const imageSessionCodeObject = await gfetch(imageSessionCodeUrl, {
            method: "POST",
            headers: {
              Accept: "application/json, text/javascript, */*; q=0.01",
              Referer: refererUrl,
              Origin: "https://www.ciweimao.com",
              "X-Requested-With": "XMLHttpRequest",
            },
            responseType: "json",
          })
            .then((response) => response.response)
            .catch((error) => log.error(error));

          if (
            (imageSessionCodeObject as ImageSessionCodeObject).code !== 100000
          ) {
            log.error(imageSessionCodeObject);
            throw new Error(`下载 ${refererUrl} 失败`);
          }

          const imageCode = decrypt({
            content: (imageSessionCodeObject as ImageSessionCodeObject)
              .image_code,
            keys: (imageSessionCodeObject as ImageSessionCodeObject)
              .encryt_keys,
            accessKey: (imageSessionCodeObject as ImageSessionCodeObject)
              .access_key,
          });

          const vipCHapterImageUrlI =
            HB.config.rootPath +
            "chapter/book_chapter_image?chapter_id=" +
            chapterIdi +
            "&area_width=" +
            parentWidth +
            "&font=undefined" +
            "&font_size=" +
            setFontSize +
            "&image_code=" +
            imageCode +
            "&bg_color_name=white" +
            "&text_color_name=white";

          return vipCHapterImageUrlI;
        }

        const divChapterAuthorSay = await getChapterAuthorSay();

        const vipCHapterImageUrl = await vipChapterDecrypt(
          chapterId,
          chapterUrl
        );
        log.debug(`[Chapter]请求 ${vipCHapterImageUrl} Referer ${chapterUrl}`);
        const vipCHapterImageBlob = await gfetch(vipCHapterImageUrl, {
          method: "GET",
          headers: {
            Referer: chapterUrl,
            Accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          },
          responseType: "blob",
        })
          .then((response) => response.response)
          .catch((error) => log.error(error));

        const vipCHapterName = `vipCHapter${chapterId}.png`;
        const vipCHapterImage = new AttachmentClass(
          vipCHapterImageUrl,
          vipCHapterName,
          "TM"
        );
        if (vipCHapterImageBlob) {
          vipCHapterImage.imageBlob = vipCHapterImageBlob as Blob;
          vipCHapterImage.status = Status.finished;
        }
        const contentImages = [vipCHapterImage];

        let ddom;
        let dtext;
        let dimages;
        if (divChapterAuthorSay) {
          const { dom, text, images } = await cleanDOM(
            divChapterAuthorSay,
            "TM"
          );
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
          chapterName,
          contentRaw: contentHTML,
          contentText,
          contentHTML,
          contentImages,
          additionalMetadate: null,
        };
      } else {
        return {
          chapterName,
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
    } else {
      return publicChapter();
    }
  }
}