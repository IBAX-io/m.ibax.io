<!--
 * @Author: abc
 * @Date: 2020-11-17 16:45:08
 * @LastEditors: abc
 * @LastEditTime: 2020-12-21 18:37:40
 * @Description: research
-->
<template>
  <div class="research">
    <div class="research-part">
      <h1 class="main-h1--other">
        Technology has no end, just eternal exploration.
      </h1>
      <p class="main-text research-img-padding">
        The truth seeking never stops.
      </p>
      <h1 class="main-h2 main-h2-top">
        Cross-chain + DeFi
        <span class="main-spot"></span>
      </h1>
      <div class="research-img">
        <img src="../assets/image/chart_one.png" alt="chart_one" />
      </div>
      <p class="main-text--base">
        {{ $t("declaration.decentralized") }}
      </p>
      <p class="main-text--base">
        {{ $t("declaration.realization") }}
      </p>
    </div>
    <div class="research-two">
      <h1 class="main-h2">
        Transaction Sharding
        <span class="main-spot"></span>
      </h1>
      <p class="main-text--base">
        {{ $t("declaration.network") }}
      </p>
      <p class="main-text--base">
        {{ $t("declaration.different") }}
      </p>
      <p class="main-text--base">
        {{ $t("declaration.number") }}
      </p>
      <div class="research-img">
        <img src="../assets/image/chart_two.png" alt="chart_one" />
      </div>
    </div>
    <div class="research-three">
      <h1 class="main-h2">
        Multisig
        <span class="main-spot"></span>
      </h1>
      <div class="research-img">
        <img src="../assets/image/chart_three.png" alt="chart_one" />
      </div>
    </div>
    <div class="research-two">
      <h1 class="main-h2">
        CLB
        <span class="main-spot"></span>
      </h1>
      <p class="main-text--base">
        {{ $t("declaration.virtual") }}
      </p>
      <p class="main-text--base">
        {{ $t("declaration.runs") }}
      </p>
      <p class="main-text--base">
        {{ $t("declaration.designed") }}
      </p>
      <p class="main-text--base">
        {{ $t("declaration.obtain") }}
      </p>
      <div class="research-img">
        <img
          src="../assets/image/chart_four.png"
          alt="chart_one"
          style="height: 5rem"
        />
      </div>
    </div>
    <div class="research-five">
      <h1 class="main-h1--other">
        Private Transactions
        <span class="main-spot"></span>
      </h1>
      <p class="main-text">
        {{ $t("declaration.important") }}
      </p>
      <p class="main-text">
        {{ $t("declaration.provides") }}
      </p>
    </div>
  </div>
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
  methods: {},
  head() {
    return {
      title: "Research Center | IBAX Network",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "The technical difficulties that the IBAX team is studying  would bring great changes to the IBAX network."
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "The technical difficulties that the IBAX team is studying  would bring great changes to the IBAX network."
        }
      ]
    };
  }
};
</script>
