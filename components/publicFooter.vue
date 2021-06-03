<!--
 * @Author: abc
 * @Date: 2020-11-17 16:23:13
 * @LastEditors: abc
 * @LastEditTime: 2021-06-03 19:33:23
 * @Description: footer
-->
<template>
  <footer>
    <h1 class="main-h1--other" style="font-size: 0.6rem">
      Technological Iterations
    </h1>
    <div class="main-btn">
      <a
        href="https://github.com/ibax-io"
        target="_blank"
        class="footer-getHub"
      ></a>
    </div>
    <van-row type="flex">
      <van-col span="12">
        <h3 class="main-h3">INTRODUCTION</h3>
        <a
          href="https://ibax.io/IBAX_Public_Network_Whitepaper_V1.1.pdf"
          target="_blank"
        >
          White Paper
        </a>
        <!--  <a
          href="https://ibax.io/IBAX%20Public%20Network%20Whitepaper%20V1.0.pdf"
          target="_blank"
          >White Paper</a
        > -->
      </van-col>
      <van-col span="12">
        <h3 class="main-h3">RESEARCH</h3>
        <nuxt-link :to="{ name: 'research' }">Cross-chain</nuxt-link>
        <nuxt-link :to="{ name: 'research' }">DeFi</nuxt-link>
        <nuxt-link :to="{ name: 'research' }">Anonymous transaction</nuxt-link>
        <nuxt-link :to="{ name: 'research' }">Multi-signature</nuxt-link>
      </van-col>
    </van-row>
    <van-row type="flex">
      <van-col span="12">
        <h3 class="main-h3">COMMUNITY EVENTS</h3>
        <a href="https://github.com/ibax-io" target="_blank">Awards</a>
        <a href="https://github.com/ibax-io" target="_blank">Contribution</a>
        <a href="https://github.com/ibax-io" target="_blank">Knowledge Base</a>
      </van-col>
      <van-col span="12">
        <h3 class="main-h3">OPEN SOURCE</h3>
        <a href="https://ibax.gitbook.io/docs/" target="_blank"
          >Open Documentation</a
        >
        <a href="https://github.com/ibax-io" target="_blank">Open Source</a>
      </van-col>
    </van-row>
    <p class="main-text">{{ $t("declaration.this") }}</p>
    <p class="main-text">{{ $t("declaration.willing") }}</p>
    <div class="footer-img">
      <div>Contact us：</div>
      <div class="footer-link">
        <span>Email：support@ibax.io</span>
        <span class="footer-img-box">
          <a href="https://www.facebook.com/IBAXNetwork/" target="_blank">
            <img src="../assets/image/facebook.png" alt="facebook"
          /></a>
          <a href="https://twitter.com/IbaxNetwork" target="_blank">
            <img src="../assets/image/twitter.png" alt="twitter" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC-oneUwzz01xaCkFTTyR0QQ?view_as=subscribe"
            target="_blank"
          >
            <img src="../assets/image/youtube.png" alt="youtube" />
          </a>
          <a href="https://www.linkedin.com/company/ibaxio/" target="_blank">
            <img src="../assets/image/in.png" alt="in" />
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
