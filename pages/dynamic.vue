<!--
 * @Author: abc
 * @Date: 2020-11-17 16:43:30
 * @LastEditors: abc
 * @LastEditTime: 2020-11-27 15:25:55
 * @Description: dynamic
-->
<template>
  <div class="dynamic">
    <div class="dynamic-top">
      <p class="main-text">
        {{ $t("declaration.communicate") }}
      </p>
      <p class="main-text">
        {{ $t("declaration.collision") }}
      </p>
      <p class="main-text">
        {{ $t("declaration.please") }}
      </p>
      <div class="main-btn">
        <nuxt-link :to="{ name: 'openSource' }" class="open-link">
          Our Technologies >>
        </nuxt-link>
      </div>
    </div>
    <div class="dynamic-two">
      <h2 class="main-h2">Awards</h2>
      <h2 class="main-h2--other">Ecosystem Reward Plan</h2>
      <p class="main-text--other">
        {{ $t("ecosystem") }}
      </p>
      <!--  <div class="main-btn">
        <van-button plain type="primary"> If you want to get ibxc </van-button>
      </div> -->
      <h2 class="main-h2--other">Open Source Testing Bounty</h2>
      <p class="main-text--other">
        {{ $t("declaration.attach") }}
      </p>
      <!--  <div class="main-btn">
        <van-button plain type="primary"> View event details </van-button>
      </div> -->
      <h2 class="main-h2--other">Ecosystem Summit</h2>
      <p class="main-text--other">
        {{ $t("declaration.give") }}
      </p>
      <div class="main-btn">
        <van-button plain type="primary"> Email：support@ibax.io</van-button>
      </div>
      <div style="display: none">
        <h2 class="main-h2">Latest Updates</h2>
        <p class="main-text--other">
          {{ $t("declaration.ibaa") }}
        </p>
        <p class="main-text--other">2020-3-21</p>
        <div class="research-img">
          <img src="../assets/image/one-1.png" alt="one-1" />
        </div>
        <p class="main-text--other">
          {{ $t("declaration.ibaa") }}
        </p>
        <p class="main-text--other">2020-3-21 From: phoenix.com</p>
        <van-row type="flex">
          <van-col span="16">
            <div class="research-img research-img-one">
              <img src="../assets/image/one-1.png" alt="one-1" />
            </div>
          </van-col>
          <van-col span="8">
            <div class="research-img">
              <img src="../assets/image/one-1.png" alt="one-1" />
            </div>
          </van-col>
        </van-row>
        <p class="main-text--other">{{ $t("declaration.lorem") }}</p>
        <p class="main-text--other">
          {{ $t("declaration.ibaa") }}
        </p>
        <p class="main-text--other">2020-3-21 From: phoenix.com</p>
        <div class="research-img">
          <img src="../assets/image/three-1.png" alt="three-1" />
        </div>
        <p class="main-text--other">{{ $t("declaration.lorem") }}</p>
        <van-pagination
          v-model="currentPage"
          :total-items="50"
          :show-page-size="5"
          :items-per-page="5"
        >
          <template #prev-text>
            <van-icon name="arrow-left" />
          </template>
          <template #next-text>
            <van-icon name="arrow" />
          </template>
          <template #page="{ text }">{{ text }}</template>
        </van-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      currentPage: 5
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    if (process.browser) {
      this.$gtag("config", "G-3P74G75LD1", {
        page_title: this.$metaInfo.title,
        page_path: this.$route.fullPath
      });
    }
  },
  methods: {},
  head() {
    return {
      title: "IBAX-Information",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "IBAX-Information"
        }
      ]
    };
  }
};
</script>
