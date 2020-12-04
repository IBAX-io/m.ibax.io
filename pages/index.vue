<!--
 * @Author: abc
 * @Date: 2020-11-13 16:46:45
 * @LastEditors: abc
 * @LastEditTime: 2020-11-27 15:51:12
 * @Description: home
-->
<template>
  <div class="home">
    <h1 class="main-h1">
      {{ $t("blockChain") }}<span class="main-spot"></span>
    </h1>
    <p class="main-text padding-20">{{ $t("declaration.one") }}</p>
    <p class="main-text padding-20">{{ $t("declaration.two") }}</p>
    <p class="main-text padding-20">{{ $t("declaration.three") }}</p>
    <div class="home-img">
      <img src="@/assets/image/banner.png" alt="banner" class="home-img--img" />
    </div>
    <div class="home-box">
      <div class="home-two">
        <h2 class="main-h2">
          {{ $t("whitePaper") }}<span class="main-spot"></span>
        </h2>
        <p class="main-text--base padding-20">{{ $t("declaration.four") }}</p>
        <!--  <p class="main-text--base padding-20">{{ $t("declaration.five") }}</p> -->
        <div class="main-btn">
          <a
            href="https://ibax.io/IBAX%20Public%20Network%20Whitepaper%20V1.0.pdf"
            target="_blank"
            class="openSource"
            >{{ $t("learnMor") }}</a
          >
        </div>
      </div>
      <div class="home-three">
        <div class="home-img" style="display: none">
          <img
            src="@/assets/image/banner.png"
            alt="banner"
            class="home-img--other"
          />
        </div>
        <van-row type="flex">
          <van-col span="16">
            <h1 class="home-three-title">{{ $t("upgraded") }}</h1>
            <p class="main-text">{{ $t("declaration.double") }}</p>
          </van-col>
          <van-col span="8" class="home-three-circle">
            <div class="circle"></div
          ></van-col>
        </van-row>
        <van-row type="flex">
          <van-col span="8" class="home-three-circle">
            <div class="circle1"></div>
          </van-col>
          <van-col span="16">
            <h1 class="home-three-title">{{ $t("compatible") }}</h1>
            <p class="main-text">{{ $t("declaration.dpoa") }}</p>
          </van-col>
        </van-row>
        <van-row type="flex">
          <van-col span="16">
            <h1 class="home-three-title">{{ $t("commercial") }}</h1>
            <p class="main-text">{{ $t("declaration.we") }}</p>
          </van-col>
          <van-col span="8" class="home-three-circle">
            <div class="circle2"></div
          ></van-col>
        </van-row>
        <van-row type="flex">
          <van-col span="8" class="home-three-circle">
            <div class="circle3"></div>
          </van-col>
          <van-col span="16">
            <h1 class="home-three-title">{{ $t("effective") }}</h1>
            <p class="main-text">{{ $t("declaration.block") }}</p>
          </van-col>
        </van-row>
        <van-row type="flex">
          <van-col span="16">
            <h1 class="home-three-title">{{ $t("scalable") }}</h1>
            <p class="main-text">{{ $t("declaration.approximately") }}</p>
          </van-col>
          <van-col span="8" class="home-three-circle">
            <div class="circle4"></div
          ></van-col>
        </van-row>
        <van-row type="flex">
          <van-col span="8" class="home-three-circle">
            <div class="circle5"></div>
          </van-col>
          <van-col span="16">
            <h1 class="home-three-title">{{ $t("transparent") }}</h1>
            <p class="main-text">{{ $t("declaration.leader") }}</p>
          </van-col>
        </van-row>
      </div>
      <div class="home-four">
        <h2 class="main-h2">
          {{ $t("Cross-chain + DeFi") }}<span class="main-spot"></span>
        </h2>
        <p class="main-text--base padding-20">
          {{ $t("declaration.concept") }}
        </p>
        <p class="main-text--base padding-20">{{ $t("declaration.world") }}</p>
        <p class="main-text--base padding-20">
          {{ $t("declaration.explore") }}
        </p>
        <div class="main-btn">
          <nuxt-link
            :to="{ name: 'openSource' }"
            class="openSource"
            style="border: none; text-decoration: underline"
          >
            {{ $t("challenge") }}
          </nuxt-link>
        </div>
        <div class="home-img">
          <img
            src="@/assets/image/marshalling.png"
            alt="marshalling"
            class="home-img--other"
            style="height: 6rem"
          />
        </div>
      </div>
      <div class="home-five">
        <h1 class="main-h1--other">
          {{ $t("ibaxValue") }}<span class="main-spot"></span>
        </h1>
        <p class="main-text padding-20">{{ $t("declaration.fast") }}</p>
        <p class="main-text padding-20">{{ $t("declaration.simple") }}</p>
        <p class="main-text padding-20">{{ $t("declaration.consensus") }}</p>
        <p class="main-text padding-20">{{ $t("declaration.sharing") }}</p>
        <p class="main-text padding-20">{{ $t("declaration.platform") }}</p>
      </div>
      <div class="home-img">
        <img
          src="@/assets/image/pic_one.png"
          alt="marshalling"
          class="home-img--other"
          style="height: 6rem"
        />
      </div>
      <h1 class="main-h1--other">
        {{ $t("operating") }}
      </h1>
      <p class="main-text padding-20">{{ $t("declaration.realistic") }}</p>
      <p class="main-text padding-20">{{ $t("declaration.and") }}</p>
      <p class="main-text padding-20">{{ $t("declaration.full") }}</p>
      <p class="main-text padding-20">{{ $t("declaration.own") }}</p>
      <p class="main-text padding-20">{{ $t("declaration.ecological") }}</p>
      <p class="main-text padding-20">{{ $t("declaration.smart") }}</p>
      <p class="main-text padding-20">{{ $t("declaration.distributed") }}</p>
      <div class="home-img">
        <img
          src="@/assets/image/pic_two.png"
          alt="marshalling"
          class="home-img--other"
          style="height: 6rem"
        />
      </div>
    </div>
    <div class="home-six" style="display: none">
      <h1 class="main-h2">Team<span class="main-spot"></span></h1>
      <p class="main-text--base padding-20">
        {{ $t("declaration.cohesion") }}
      </p>
      <div class="home-img">
        <img
          src="@/assets/image/pelope.png"
          alt="pelope"
          class="home-img--other"
          style="height: 6rem"
        />
      </div>
      <h1
        class="main-h2"
        style="text-align: left; margin-left: 20px; margin-right: 20px"
      >
        Peter Czaban
      </h1>
      <p class="main-text--base padding-20">Position: Product Director</p>
      <p class="main-text--base padding-20" style="padding-bottom: 1rem">
        {{ $t("declaration.peter") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      date: "",
      show: false,
      formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onConfirm(date) {
        this.show = false;
        this.date = this.formatDate(date);
      },
      value1: 0,
      value2: "c",
      option1: [
        { text: "en", value: "en" },
        { text: "zh", value: "zh" },
        { text: "tw", value: "tw" }
      ],
      option2: [
        { text: "*", value: "a" },
        { text: "*", value: "b" },
        { text: "*", value: "c" }
      ]
    };
  },
  created() {},
  mounted() {
    if (process.browser) {
      this.$gtag("config", "G-3P74G75LD1", {
        page_title: this.$metaInfo.title,
        page_path: this.$route.fullPath
      });
    }
  },
  methods: {
    /*  handleValue(value) {
      this.$store.commit("SET_LANG", value);
      if (value === "zh") {
        const zhCN = this.$i18n.messages.zh;
        Locale.use("zh-CN", zhCN);
      } else if (value === "en") {
        const enUS = this.$i18n.messages.en;
        Locale.use("en-US", enUS);
      } else if (value === "tw") {
        const zhTW = this.$i18n.messages.tw;
        Locale.use("zh-TW", zhTW);
      }
      this.$i18n.locale = value;
      console.log(value);
    }, */
    tabSwitch1(value, index) {
      console.log(index);
    },
    clickHandler(e) {
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 2000);
    }
  },
  head() {
    return {
      title: "IBAX",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "IBAX"
        }
      ]
    };
  }
};
</script>
