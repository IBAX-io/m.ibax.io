/*
 * @Author: renlei
 * @LastEditors: abc
 * @Description: vuex
 * @Date: 2019-04-11 09:26:40
 * @LastEditTime: 2020-11-26 18:56:40
 */

export const state = () => ({
  locales: ["zh", "en", "tw"],
  locale: "en",
  headerTop: null
});

export const mutations = {
  //*
  SET_LANG(state, locale) {
    // console.log(locale);
    if (state.locales.includes(locale)) {
      //  console.log(locale);
      state.locale = locale;
    }
  },
  changeHeaderTop(state, dom) {
    console.log(JSON.stringify(dom));
    state.headerTop = dom;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {}
};
export const getters = {
  //*
  handdleLang(state) {
    const { locale } = state;
    // console.log(authUser);
    return locale;
  }
};
