<!--
 * @Author: abc
 * @Date: 2020-11-17 16:44:11
 * @LastEditors: abc
 * @LastEditTime: 2021-01-16 11:57:06
 * @Description: openSource
-->
<template>
  <div class="open">
    <div class="open-wihte">
      <div class="open-one">
        <h1 class="main-h1--other">IBAX Open Source Technical Documentation</h1>
        <p class="main-text padding-20">{{ $t("declaration.blockchain") }}</p>
        <p class="main-text padding-20">{{ $t("declaration.contract") }}</p>
        <div class="open-top padding-20">
          <img src="../assets/image/icon_one.png" alt="icon_one" />
          <span class="open-top-text">{{ $t("declaration.relevant") }}</span>
        </div>
        <div class="open-top padding-20">
          <img src="../assets/image/icon_one.png" alt="icon_one" />
          <span class="open-top-text">{{ $t("contractDescription") }}</span>
        </div>
        <div class="main-btn">
          <a href="https://github.com/ibax-io" target="_blank" class="open-link"
            >Use IBAX</a
          >
        </div>
        <h2 class="main-h2 padding-20">
          About Our Technology<span class="main-spot"></span>
        </h2>
        <h2 class="main-h2--other padding-20">Underlying Framework</h2>
        <h2 class="main-h2--other padding-20">Golang</h2>
        <p class="main-text--base padding-20">
          {{ $t("declaration.golang") }}
        </p>
        <p class="main-text--base padding-20">
          {{ $t("declaration.quick") }}
        </p>
        <p class="main-text--base padding-20">
          {{ $t("declaration.decoupled") }}
        </p>
        <p class="main-text--base padding-20">
          {{ $t("declaration.perfect") }}
        </p>
        <h2 class="main-h2 padding-20">
          Data Storage<span class="main-spot"></span>
        </h2>
        <h2 class="main-h2--other padding-20">PG Database</h2>
        <p class="main-text--base padding-20">
          {{ $t("declaration.database") }}
        </p>
        <p class="main-text--base padding-20">
          {{ $t("declaration.doubt") }}
        </p>
        <p class="main-text--base padding-20">
          {{ $t("declaration.modification") }}
        </p>
        <h2 class="main-h2--other padding-20">Cryptography Applications</h2>
        <van-row type="flex">
          <van-col span="12">
            <h2 class="main-h2--other padding-20">
              <span>SHA256 </span>
              <!-- <span style="margin-left: auto">&</span> -->
            </h2>
            <p class="main-text--base padding-20">
              {{ $t("declaration.generation") }}
            </p>
          </van-col>
          <van-col span="12">
            <h2 class="main-h2--other padding-20">Secp256k1</h2>
            <p class="main-text--base padding-20">
              {{ $t("declaration.asymmetric") }}
            </p>
          </van-col>
        </van-row>
      </div>
      <h1 class="main-h2 padding-20">
        {{ $t("developers") }}
        <span class="main-spot"></span>
      </h1>
      <!-- part one  -->
      <div class="open-part">
        <h1 class="main-h2--other">
          {{ $t("configuration") }}
        </h1>
        <p class="main-text--base">*{{ $t("location") }}</p>
        <p class="main-text--base">
          {{ $t("parameter") }}
        </p>
        <p class="main-text--base">* Platform parameter configuration</p>
        <p class="main-text--base">* Blockchain network configuration</p>
        <p class="main-text--base">New ecoLib configuration</p>
        <p class="main-text--base">Database configuration</p>
        <p class="main-text--base">Block production configuration</p>
        <div class="open-link">
          <a href="https://github.com/ibax-io" target="_blank">Details >></a>
        </div>
      </div>
      <!-- part two -->
      <div class="open-part">
        <h1 class="main-h2--other">Open Server Configuration Files</h1>
        <p class="main-text--base">* Example of configuration files</p>
        <p class="main-text--base">Structure of configuration files</p>
        <p class="main-text--base">Location of configuration files</p>
        <p class="main-text--base">
          * Introduction to server configuration files
        </p>
        <div class="open-link">
          <a href="https://github.com/ibax-io" target="_blank">Details >></a>
        </div>
      </div>
      <!-- part three -->
      <div class="open-part">
        <h1 class="main-h2--other">RESTful API V2</h1>
        <p class="main-text--base">Error response</p>
        <p class="main-text--base">* Certified interfaces</p>
        <p class="main-text--base">* Server command interface</p>
        <p class="main-text--base">* Data request function interface</p>
        <p class="main-text--base">Indicator interface acquisition</p>
        <p class="main-text--base">* ecoLib interface</p>
        <p class="main-text--base">* Contract function interface</p>
        <div class="open-link">
          <a href="https://github.com/ibax-io" target="_blank">Details >></a>
        </div>
      </div>
      <div class="open-part1">
        <h1 class="main-h2--other padding-20">
          Never Ordinary, Always Innovative
          <span class="main-spot"></span>
        </h1>
        <div class="open-part1-img">
          <img src="../assets/image/iccs_logo.png" alt="iccs_logo" />
        </div>
        <div class="main-btn">
          <a href="https://weaver.ibax.io" target="_blank" class="openSource"
            >Enter Weaver>></a
          >
        </div>
        <h1 class="main-h2--other padding-20">Front End Logicor Language</h1>
        <p class="main-text--base padding-20">
          {{ $t("declaration.language") }}
        </p>
        <div class="open-link padding-20">
          <a href="https://ibax.gitbook.io" target="_blank">Documentation >></a>
        </div>
        <h1 class="main-h2--other padding-20">Back End Needle Language</h1>
        <p class="main-text--base padding-20">
          {{ $t("declaration.efficient") }}
        </p>
        <div class="open-link padding-20">
          <a href="https://ibax.gitbook.io" target="_blank">Documentation >></a>
        </div>
      </div>
    </div>
    <h1 class="main-h1--other padding-20">
      Functions of Weaver<span class="main-spot"></span>
    </h1>
    <van-tabs class="open-tabs" swipeable>
      <template v-for="item in arrTabs">
        <van-tab :key="item.key">
          <div slot="title">
            {{ item.label }}
          </div>
          <div class="padding-20 open-tabs-box">
            <div class="open-tabs-content">
              <h1 class="main-h2--other">
                {{ item.title }}
              </h1>
              <p class="main-text--base">{{ $t(item.text1) }}</p>
              <p class="main-text--base">{{ $t(item.text2) }}</p>
              <p class="main-text--base">{{ $t(item.text3) }}</p>
              <p class="open-img">
                <img :src="item.img" />
              </p>
            </div>
          </div>
        </van-tab>
      </template>
    </van-tabs>
    <div class="open-bottom">
      <h1 class="main-h1--other">
        Related Technologies<span class="main-spot"></span>
      </h1>
      <div class="open-bottom-box">
        <div
          v-for="(item, key) in arrImg"
          :key="item.id"
          class="open-bottom-item"
        >
          <div
            class="open-bottom-img"
            :class="{ 'open-bottom-after': item.after }"
            @touchstart="handleTouchstart(key)"
          >
            <img :src="item.img" :alt="item.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ecoLib from "../assets/image/1.png";
import governance from "../assets/image/2.png";
import role from "../assets/image/3.png";
import creation from "../assets/image/4.png";
import voting from "../assets/image/5.png";
import one from "../assets/image/related_one.png";
import two from "../assets/image/eth.jpg";
import three from "../assets/image/related_three.png";
import four from "../assets/image/related_four.png";
import five from "../assets/image/related_five.png";
import six from "../assets/image/related_six.png";
export default {
  props: {},
  data() {
    return {
      arrImg: [
        {
          id: "related_one",
          after: true,
          img: one
        },
        {
          id: "related_two",
          after: true,
          img: two
        },
        {
          id: "related_three",
          after: true,
          img: three
        },
        {
          id: "related_four",
          after: true,
          img: four
        },
        {
          id: "related_five",
          after: true,
          img: five
        },
        {
          id: "related_six",
          after: true,
          img: six
        }
      ],
      arrTabs: [
        {
          key: 1,
          label: "Create EcoLib",
          title: "How to Create a New ecoLib?",
          text1:
            "EcoLib creation is fast with LESS. The creator has all the management permissions.",
          text2:
            "P.S. We have been researching DAO. ecoLib management by its members is just around the corner.",
          img: ecoLib
        },
        {
          key: 2,
          label: "EcoLib Governance",
          title: "EcoLib Member Management and Access",
          text1:
            "Initialize ecoLib parameters and define the basic rules. Manage ecoLib members by invitation or removal.",
          text2: "Add more fascinating DApps to the ecoLib and enrich it.",
          img: governance
        },
        {
          key: 3,
          label: "Role Assignment",
          title: "Create roles and empower members",
          text1: "You can create a role and assign it to an ecoLib member.",
          text2: "",
          img: role
        },
        {
          key: 4,
          label: "Contract Creation",
          title: "Create ecoLib Contract",
          text1:
            "The online contract editor ensures convenient checking of contract and result correctness during contract creation.",
          text2:
            "The editor saves lots of development time and greatly reduces the learning cost for developers.",
          img: creation
        },
        {
          key: 5,
          label: "EcoLib Voting",
          title:
            "EcoLib members decide on the basic ecoLib parameters together",
          text1:
            "To ensure the ecoLib fairness, the basic ecoLib parameters can only be changed after more than 50% of ecoLib members vote for it.",
          text2: "",
          img: voting
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleTouchstart(key) {
      const arrImg = this.arrImg.map((item, index) => {
        if (key === index) {
          item.after = false;
        } else {
          item.after = true;
        }
        return item;
      });
      this.arrImg = arrImg;
    }
  },
  head() {
    return {
      title: "Open Source | IBAX Network",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "IBAX opens up technical code based on the principle of sharing and open. We hope to explore with all communities in blockchain together and seek more innovative technologies."
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "IBAX opens up technical code based on the principle of sharing and open. We hope to explore with all communities in blockchain together and seek more innovative technologies."
        }
      ]
    };
  }
};
</script>
