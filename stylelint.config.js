/*
 * @Author: abc
 * @Date: 2020-11-13 16:46:45
 * @LastEditors: abc
 * @LastEditTime: 2020-11-16 11:14:01
 * @Description:css*
 */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "at-rule-name-space-after": "always",
    "font-family-no-missing-generic-family-keyword": null,
    "no-descending-specificity": null,
    "media-feature-name-no-unknown": null
  }
};
