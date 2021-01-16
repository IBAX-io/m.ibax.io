<!--
 * @Author: abc
 * @Date: 2020-11-17 16:42:32
 * @LastEditors: abc
 * @LastEditTime: 2020-12-21 18:45:16
 * @Description: about
-->
<template>
  <div class="about dynamic">
    <div class="about-top">
      <van-row type="flex">
        <van-col span="8">
          <div class="about-img">
            <img src="../assets/image/about-1.png" alt="about-1" />
            <p class="about-text">Secure</p>
          </div>
        </van-col>
        <van-col span="8">
          <div class="about-img about-middle">
            <img src="../assets/image/about-2.png" alt="about-2" />
            <p class="about-text">Efficient</p>
          </div>
        </van-col>
        <van-col span="8">
          <div class="about-img about-right">
            <img src="../assets/image/about-3.png" alt="about-3" />
            <p class="about-text">Easy</p>
          </div>
        </van-col>
      </van-row>
      <h2 class="main-h2 about-much">IBAX Is Much More</h2>
    </div>
    <div class="about-two">
      <h2 class="main-h2">We Are Hiring</h2>
      <p class="main-text--base about-text-color">
        You may not be perfect now, but join us so we can be greater together !
      </p>
      <h2 class="main-h2--other">Blockchain Expert</h2>
      <h3 class="about-h3">{{ $t("declaration.interested") }}</h3>
      <van-row type="flex" align="center">
        <van-col span="16">
          <p class="main-text--base">{{ $t("declaration.need") }}</p>
          <p class="main-text--base">{{ $t("declaration.design") }}</p>
        </van-col>
        <van-col span="8" class="about-col-img">
          <img src="../assets/image/slices.png" alt="slices" />
        </van-col>
      </van-row>
      <p class="main-text--base">{{ $t("declaration.apply") }}</p>
      <p class="main-text--base">{{ $t("declaration.have") }}</p>
      <h3 class="about-h3">{{ $t("declaration.following") }}</h3>
      <p class="main-text--base">{{ $t("declaration.need-1") }}</p>
      <p class="main-text--base">{{ $t("declaration.need-2") }}</p>
      <p class="main-text--base">{{ $t("declaration.need-3") }}</p>
      <p class="main-text--base">{{ $t("declaration.need-4") }}</p>
      <p class="main-text--base">{{ $t("declaration.need-5") }}</p>
      <p class="main-text--base">{{ $t("declaration.need-6") }}</p>
      <p class="main-text--base">{{ $t("declaration.need-7") }}</p>
      <h2 class="main-h2 about-h2-title">Network Transmission Engineer</h2>
      <h3 class="about-h3">{{ $t("declaration.interested") }}</h3>
      <van-row type="flex" align="center">
        <van-col span="12">
          <div class="about-img-box">
            <img src="../assets/image/about-4.png" alt="about-4" />
          </div>
        </van-col>
        <van-col span="12">
          <p class="main-text--base">{{ $t("declaration.track") }}</p>
          <p class="main-text--base">{{ $t("declaration.develop") }}</p>
        </van-col>
      </van-row>
      <p class="main-text--base">{{ $t("declaration.papers") }}</p>
      <p class="main-text--base">{{ $t("declaration.data") }}</p>
      <h3 class="about-h3">{{ $t("declaration.following") }}</h3>
      <p class="main-text--base">{{ $t("declaration.skilled") }}</p>
      <p class="main-text--base">{{ $t("declaration.technologies") }}</p>
      <p class="main-text--base">{{ $t("declaration.principles") }}</p>
      <p class="main-text--base">{{ $t("declaration.understanding") }}</p>
      <p class="main-text--base">{{ $t("declaration.things") }}</p>
      <p class="main-text--base">{{ $t("declaration.algorithm") }}</p>
      <h2 class="main-h2--other">Blockchain Planner</h2>
      <h3 class="about-h3">{{ $t("declaration.interested") }}</h3>
      <van-row type="flex" align="center">
        <van-col span="16">
          <p class="main-text--base">{{ $t("declaration.data1") }}</p>
        </van-col>
        <van-col span="8" class="about-col-img">
          <img
            src="../assets/image/about-5.png"
            alt="about-5"
            style="height: 5rem"
          />
        </van-col>
      </van-row>
      <p class="main-text--base">{{ $t("declaration.data2") }}</p>
      <p class="main-text--base">{{ $t("declaration.data3") }}</p>
      <h3 class="about-h3">{{ $t("declaration.following") }}</h3>
      <p class="main-text--base">{{ $t("declaration.data4") }}</p>
      <p class="main-text--base">{{ $t("declaration.data5") }}</p>
      <p class="main-text--base">{{ $t("declaration.data6") }}</p>
      <p class="main-text--base">{{ $t("declaration.data7") }}</p>
      <p class="main-text--base">{{ $t("declaration.data8") }}</p>
      <p class="main-text--base">{{ $t("declaration.data9") }}</p>
      <p class="main-text--base">{{ $t("declaration.data10") }}</p>
      <h2 class="main-h2--other">Consensus Algorithm Architect</h2>
      <p class="about-h3">{{ $t("declaration.interested") }}</p>
      <van-row type="flex" align="center">
        <van-col span="12">
          <div class="about-img-box">
            <img src="../assets/image/about-6.png" alt="about-6" />
          </div>
        </van-col>
        <van-col span="12">
          <p class="main-text--base">{{ $t("declaration.basic1") }}</p>
          <p class="main-text--base">{{ $t("declaration.basic2") }}</p>
        </van-col>
      </van-row>
      <p class="main-text--base">{{ $t("declaration.basic3") }}</p>
      <p class="main-text--base">{{ $t("declaration.basic4") }}</p>
      <p class="main-text--base">{{ $t("declaration.basic5") }}</p>
      <p class="main-text--base">{{ $t("declaration.basic6") }}</p>
      <p class="main-text--base">{{ $t("declaration.basic7") }}</p>
      <p class="main-text--base">{{ $t("declaration.basic8") }}</p>
      <div class="main-btn">
        <a
          href=" https://www.linkedin.com/company/ibaxio/"
          target="_blank"
          class="openSource"
        >
          Find more positions on our LinkedIn</a
        >
      </div>
    </div>
    <div class="about-three" style="display: none">
      <div class="about-three-box">
        <h2 class="main-h1">Core Team</h2>
        <van-tabs class="open-tabs">
          <van-tab v-for="(item, index) in data" :key="index" :title="item">
            <div class="about-three-content">
              <div class="about-three-right">
                <div class="about-three-top"></div>
                <div class="about-three-bottom padding-20">
                  {{ item }}
                  <p class="main-text--base">{{ $t("declaration.data6") }}</p>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="about-four" style="display: none">
      <p class="main-text--base">Email：support@ibax.io</p>
      <p class="main-text--base">
        You can follow us or get in touch with us through these ways
      </p>
      <h2 class="main-h2">Our Story</h2>
      <van-row type="flex" align="center">
        <van-col span="12">
          <div class="about-four-img">
            <img src="../assets/image/about-8.png" alt="about-8" />
          </div>
        </van-col>
        <van-col span="12">
          <p class="main-text--base">
            {{ $t("regulatory") }}
          </p>
        </van-col>
      </van-row>
      <van-row type="flex" align="center">
        <van-col span="12">
          <p class="main-text--base">
            {{ $t("resist") }}
          </p>
        </van-col>
        <van-col span="12">
          <div class="about-four-img about-four-right">
            <img src="../assets/image/about-9.png" alt="about-9" />
          </div>
        </van-col>
      </van-row>
      <van-row type="flex" align="center">
        <van-col span="12">
          <div class="about-four-img">
            <img src="../assets/image/about-10.png" alt="about-10" />
          </div>
        </van-col>
        <van-col span="12">
          <p class="main-text--base">
            {{ $t("exchange") }}
          </p>
        </van-col>
      </van-row>
      <van-row type="flex" align="center">
        <van-col span="12">
          <p class="main-text--base">
            {{ $t("synchronization") }}
          </p>
        </van-col>
        <van-col span="12">
          <div class="about-four-img about-four-right">
            <img src="../assets/image/about-11.png" alt="about-11" />
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      data: [
        "Create ecology",
        "Create ecology1",
        "Create ecology2",
        "Create ecology",
        "Create ecology1",
        "Create ecology2",
        "Ecological governance",
        "Role empowerment"
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  head() {
    return {
      title: "About Us | IBAX Network",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Welcome to join us and Let's grow together."
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Welcome to join us and Let's grow together."
        }
      ]
    };
  }
};
</script>
