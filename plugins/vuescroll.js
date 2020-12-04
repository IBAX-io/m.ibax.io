/*
 * @Author: abc
 * @Date: 2020-09-16 12:17:24
 * @LastEditors: abc
 * @LastEditTime: 2020-11-16 15:04:39
 * @Description:
 */
import Vue from "vue";
// import vuescroll from "vuescroll";
import vuescroll from "vuescroll/dist/vuescroll-slide";
import "vuescroll/dist/vuescroll.css";
Vue.use(vuescroll);
const obj = { mode: "slide" };
/* if (process.client) {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    obj = { mode: "slide" };
  } else {
    obj = { mode: "native" };
  }
} */
Vue.prototype.$vuescrollConfig = {
  vuescroll: obj,
  bar: {
    background: "gray"
  }
};
