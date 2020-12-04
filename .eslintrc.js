/*
 * @Author: abc
 * @Date: 2020-11-13 16:46:45
 * @LastEditors: abc
 * @LastEditTime: 2020-11-16 11:30:10
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
