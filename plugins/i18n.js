/*
 * @Author: abc
 * @Date: 2020-11-16 15:29:58
 * @LastEditors: abc
 * @LastEditTime: 2020-11-26 18:55:57
 * @Description
 */
import Vue from "vue";
import VueI18n from "vue-i18n";
import enUS from "vant/es/locale/lang/en-US";
import zhCN from "vant/es/locale/lang/zh-CN";
import zhTW from "vant/es/locale/lang/zh-TW";

const en = require("@/lang/en-us.json");
const zh = require("@/lang/zh-cn.json");
const tw = require("@/lang/zh-tw.json");
const mergeZH = Object.assign({}, zhCN, zh);
const mergeEN = Object.assign({}, enUS, en);
const mergeTW = Object.assign({}, zhTW, tw);
// console.log(mergeZH);
Vue.use(VueI18n);
export default ({ app, store }) => {
  const str = "en";
  let strLocale;

  if (str) {
    strLocale = str;
  } else {
    strLocale = store.state.locale;
  }
  // console.log(strLocale);
  // console.log(strLocale);
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: strLocale,
    fallbackLocale: "en",
    messages: {
      en: mergeEN,
      zh: mergeZH,
      tw: mergeTW
    },
    silentTranslationWarn: true
  });
  console.log(app.i18n.locale);
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  };
};
