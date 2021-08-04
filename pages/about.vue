<!--
 * @Author: abc
 * @Date: 2020-11-17 16:42:32
 * @LastEditors: abc
 * @LastEditTime: 2021-08-04 19:18:33
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
    <div class="about-three">
      <div class="about-three-box">
        <h2 class="main-h1" style="font-size: 0.7rem">Core team members</h2>
        <div ref="tabsScroll" class="about-three-box-tabs">
          <template v-for="(item, index) in arrCeo">
            <div
              :key="index"
              class="about-three-box-tabs-item"
              :class="item.isActive ? 'about-three-box-tabs-item-active' : ''"
              @click="handleActive(index)"
            >
              {{ item.name }}
            </div>
          </template>
        </div>
        <div class="about-three-content">
          <div class="about-three-left" :style="objStyle">
            <img :src="objCeo.img" alt="ceo-1" />
          </div>
          <div class="about-three-right">
            <div class="about-three-top" @click="handleCard">
              <img :src="objCeo.card" alt="ceo-1" />
            </div>
            <div class="about-three-bottom">
              <h4 class="about-three-right-title">Personal introduction</h4>
              <p class="about-three-right-text">{{ objCeo.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-four">
      <h2 class="main-h2 about-four-title">Roadmap</h2>
      <van-row type="flex" justify="space-between">
        <van-col span="8">
          <div class="about-four-img">
            <img src="../assets/image/five-1.png" alt="five-1" />
          </div>
          <h3 class="about-four-title-small">Empower</h3>
        </van-col>
        <van-col span="15">
          <div class="about-four-content-text">
            <h4>Oct 2020</h4>
            <div>
              IBAX Network WHITEPAPER Version 1.0 IBAX Network GLOABL FOUNDATION
              SET UP
            </div>
          </div>
          <div class="about-four-content-text">
            <h4>Dec 2020WARM-UP PRESS CONFERENCE</h4>
            <div>
              IBAX Network WEBSITE TESTING MAIN-NET Global ECO-SYSTEM NODE
              SUMMON
            </div>
          </div>
          <div class="about-four-content-text">
            <h4>Aug 2021</h4>
            <div>
              MAIN-NET ONLINE ANNOUNCEMENT DAPPS ECO-SYSTEM PUBLISH（SUCH
              AS：ECO-SYSTEM BUILDING、ONE CLICK COIN、ECO-SYSTEM VOTING
              RIGHT、DECENTRALIZED EXCHANGE ETC.
            </div>
          </div>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-between">
        <van-col span="15">
          <div class="about-four-content-text">
            <h4>2021 - 2022</h4>
            <div>
              GLOBAL ECO-FOUNDATION GOVERNOR'S ELECTION CONFERENCE AND NODE
              VOTING OPENING THE GLOBAL CONFERENCE OF DEVELOPERS RELEASING V1.01
              VERSION OF GFILES DISTRIBUTED STORAGE APPLICATION BASED ON IBAX
              Network
            </div>
          </div>
          <div class="about-four-content-text">
            <h4>Jun 2022</h4>
            <div>
              MAIN CHAIN TECHNOLOGY UPGRADE ITERATION IBAX Network WHITEPAPER
              V2.0 REALIZE IPFS DISTRIBUTED NETWORK BASED ON IBAX Network MAIN
              CHAIN, OPTIMIZE AND INCREASE THE RICHNESS OF ECO-COMMERCE, AND
              INTRODUCE SOCIAL, GAME, INFORMATION, VIDEO AND OTHER APPLICATIONS.
              INCORPORATING 1000+ ENTERPRISES, INSTITUTIONS AND DEVELOPING
              ECOLOGICAL PARTNERS
            </div>
          </div>
        </van-col>
        <van-col span="8">
          <div class="about-four-img">
            <img src="../assets/image/five-2.png" alt="five-2" />
          </div>
          <h3 class="about-four-title-small">Forward</h3>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-between">
        <van-col span="8">
          <div class="about-four-img">
            <img src="../assets/image/five-3.png" alt="five-3" />
          </div>
          <h3 class="about-four-title-small">Vsion</h3>
        </van-col>
        <van-col span="15">
          <div class="about-four-content-text">
            <h4>2022 — 2025</h4>
            <div>
              CONSTRUCTING AND PERFECTING BLOCK CHAIN INFRASTRUCTURE IN AN
              ALL-ROUND WAY FOUNDATION INVESTMENT TO INTRODUCE BUSINESS
              COOPERATION AND EXPAND IBAX Network ECOLOGY
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <van-dialog
      v-model="show"
      width="95%"
      :show-cancel-button="false"
      :show-confirm-button="false"
    >
      <div class="about-close" @click="handleCancel">
        <van-icon name="cross" size="25" color="#333" />
      </div>
      <div class="about-dialog">
        <img :src="objCeo.card" alt="card" />
      </div>
    </van-dialog>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      show: false,
      arrCeo: [
        {
          name: "Stuart Nichols (CEO)",
          img: require("../assets/image/ceo-1.png"),
          card: require("../assets/image/ceo-1-1.png"),
          text: this.$t("stuart"),
          isActive: true
        },
        {
          name: "Alan McIvor (COO)",
          img: require("../assets/image/ceo-2.png"),
          card: require("../assets/image/ceo-2-1.png"),
          text: this.$t("alan"),
          isActive: false
        },
        {
          name: "Simon Hemmrich (Senior Consultant)",
          card: require("../assets/image/ceo-3-1.png"),
          img: require("../assets/image/ceo-3.png"),
          text: this.$t("simon"),
          isActive: false
        }
      ],
      objCeo: {
        name: "XXX（CEO）",
        card: require("../assets/image/ceo-1-1.png"),
        img: require("../assets/image/ceo-1.png"),
        text: this.$t("stuart"),
        isActive: true
      },
      objStyle: {
        bottom: "-0.4rem"
      },
      i: 0,
      timer: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.handleLoop();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    handleCancel() {
      this.show = false;
      this.handleLoop();
    },
    handleCard() {
      this.show = true;
      clearTimeout(this.timer);
    },
    handleActive(index) {
      this.arrCeo.map((item, i) => {
        item.isActive = false;
        if (index === i) {
          item.isActive = true;
        }
        return item;
      });
      this.objCeo = this.arrCeo[index];
      if (index === 0) {
        this.objStyle = {
          bottom: "-0.4rem"
        };
      } else if (index === 1) {
        this.objStyle = {
          bottom: "-0.5rem"
        };
      } else {
        this.objStyle = {
          bottom: "-0.4rem"
        };
      }
      this.i = index;
      this.handleScroll(index);
    },
    handleScroll(index) {
      if (index === 0) {
        this.$refs.tabsScroll.scrollLeft = 0;
      } else if (index === 1) {
        this.$refs.tabsScroll.scrollLeft = 115;
      } else {
        this.$refs.tabsScroll.scrollLeft = 300;
      }
      console.log(this.$refs.tabsScroll.scrollLeft);
    },
    handleLoop() {
      if (this.i >= 2) {
        this.i = 0;
      } else {
        ++this.i;
      }
      this.handleActive(this.i);
      console.log(this.i);
      this.timer = setTimeout(() => {
        this.handleLoop();
      }, 5000);
    }
  },
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
