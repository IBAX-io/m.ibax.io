<!--
 * @Author: abc
 * @Date: 2020-11-17 16:20:22
 * @LastEditors: abc
 * @LastEditTime: 2020-12-19 17:40:49
 * @Description: 
-->
<template>
  <header>
    <div class="header-top">
      <div class="header-logo">
        <nuxt-link :to="{ name: 'index' }" tag="a"></nuxt-link>
      </div>
      <div class="header-slide" @click="handleisAside"></div>
    </div>
    <aside
      class="header-aside"
      :class="{ 'header-width': isAside }"
      @click="handleisAside"
    >
      <div v-show="isAside" class="header-aside-content">
        <div class="header-aside-top">
          <div class="header-aside-top-icon" @click="handleisAside"></div>
        </div>
        <div class="header-aside-link">
          <div
            v-for="(item, index) in arrNav"
            :key="item.name"
            @click="handleisAside"
          >
            <nuxt-link
              v-if="index === 0"
              :to="{ name: item.name }"
              tag="a"
              exact
              >{{ $t(item.label) }}</nuxt-link
            >
            <nuxt-link v-else :to="{ name: item.name }" tag="a">{{
              $t(item.label)
            }}</nuxt-link>
          </div>
        </div>
      </div>
    </aside>
  </header>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      isAside: false,
      arrNav: [
        {
          name: "index",
          label: "nav.home"
        },
        {
          name: "research",
          label: "nav.research"
        },
        {
          name: "openSource",
          label: "nav.source"
        },
        {
          name: "dynamic",
          label: "nav.dynamic"
        },

        {
          name: "about",
          label: "nav.about"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleisAside(e) {
      e.stopPropagation();
      this.isAside = !this.isAside;
    }
  }
};
</script>
