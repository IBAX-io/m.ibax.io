/*
 * @Author: abc
 * @Date: 2020-12-18 09:56:22
 * @LastEditors: abc
 * @LastEditTime: 2020-12-30 19:34:53
 * @Description:
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

/* if (process.client && process.env.NODE_ENV === "production") {
  (function (i, s, o, g, r, a, m) {
    i.GoogleAnalyticsObject = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
        // eslint-disable-next-line no-sequences
      }),
      (i[r].l = 1 * new Date());
    // eslint-disable-next-line no-sequences
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );
  ga("create", "G-3P74G75LD1", "auto");
} */
export default ({ app: { router }, store }) => {
  if (process.client) {
    console.log(window.dataLayer);
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line no-inner-declarations
    function gtag() {
      // eslint-disable-next-line no-undef
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-3P74G75LD1");
  }
};
