<!--
 * @Author: abc
 * @Date: 2020-11-13 16:46:45
 * @LastEditors: abc
 * @LastEditTime: 2020-11-27 11:17:56
 * @Description: base layout
-->
<template>
  <div id="layout" class="layout">
    <div class="header-box">
      <!-- header -->
      <public-header
        :class="{
          'global-fxied': isFixed
        }"
        class="header animated"
      ></public-header>
    </div>

    <!-- content -->
    <main class="main"><Nuxt /></main>
    <!-- footer -->
    <public-footer class="footer"></public-footer>
    <!--* -->
    <div
      :class="{ zoomIn: back, 'zoomIn-out': !back }"
      class="hao-back-box animated"
      @click="handleBackTop"
    >
      <div class="hao-back-top">
        <van-icon name="arrow-up" class="hao-back-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { Locale } from "vant";
import publicHeader from "~/components/publicHeader.vue";
export default {
  components: { publicHeader },
  data() {
    return {
      isFixed: false,
      back: false,
      isInUp: false,
      process: 0,
      layout: null,
      scrollTop: "",
      ops: {
        vuescroll: {},
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: "easeInQuad",
          verticalNativeBarPos: "right",
          maxHeight: undefined,
          maxWidth: undefined
        },
        rail: {
          background: "red",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
        },
        bar: {
          background: "gray"
        }
      }
    };
  },
  mounted() {
    /*  const headerTop = this.$refs.headerTop;
    this.$store.commit("changeHeaderTop", headerTop); */
    this.layout = document.getElementById("__layout");
    this.layout.addEventListener("scroll", this.handleScroll);
  },
  created() {
    const enUS = this.$i18n.messages.en;
    // console.log(enUS);
    Locale.use("en-US", enUS);
  },
  methods: {
    //*
    handleBackTop() {
      const scrollTop = this.layout.scrollTop;
      if (this.scrollTop > 0) {
        window.requestNextAnimationFrame(this.handleBackTop);
        this.layout.scrollTop = scrollTop - scrollTop / 5;
      }
    },
    //*
    handleScroll() {
      this.scrollTop = this.layout.scrollTop;
      // console.log(this.scrollTop);
      if (this.scrollTop > 0) {
        this.back = true;
      } else {
        this.back = false;
      }
      // const topHeight = this.domHeaderTop.offsetTop;
      this.isFixed = this.scrollTop > 0;
      this.isInUp = this.scrollTop === 0;
    },
    handleScroll1() {
      console.log("=====");
    }
  }
};
</script>
