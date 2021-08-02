/*
 * @Author: abc
 * @Date: 2020-11-13 16:46:45
 * @LastEditors: abc
 * @LastEditTime: 2021-01-15 18:39:41
 * @Description:nuxt*
 */
let pattern = false;
const plugins = [
  /* [
    "import",
    {
      libraryName: "vant",
      libraryDirectory: "es",
      style: true
    },
    "vant"
  ] */
];
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production") {
  pattern = true;
} else {
  plugins.push("transform-remove-console");
  pattern = false;
}
console.log(pattern);
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "IBAX Network",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
      },
      { hid: "description", name: "description", content: "IBAX Network" },
      { hid: "og:title", name: "og:title", content: "IBAX Network" },
      {
        hid: "ie",
        "http-equiv": "X-UA-Compatible",
        content: "IE=11; IE=10; IE=9; IE=8; IE=EDGE"
      },
      {
        hid: "edge",
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge,chrome=1"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "IBAX, CryptoCurrency, Bitcoin, Cross-Chain, Crypto, DeFi, Dapps,Blockchaintechnology, Corelayertechnology, Decentralizedapplication,Distributedledger, IBAXAMA"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "IBAX is a blockchain infrastructural Network. It is running on our own chain and has Cross-chain solutions. IBAX is concentrated on solving problems that exist on Ethereum. We encourage developers to build their applications and establish a sustainable ecosystem."
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "IBAX Network"
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://ibax.io"
      },
      {
        hid: "url",
        name: "url",
        content: "https://ibax.io"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "A Decentralized Blockchain Infrastructural Network"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@IbaxNetwork"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@IbaxNetwork"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "IBAX Network"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/css/animate.min.css" }
    ],
    script: [
      { type: "text/javascript", src: "/js/flexible.js" },
      { type: "text/javascript", src: "/js/requestNextAnimationFrame.js" },
      {
        async: "async",
        src: "https://www.googletagmanager.com/gtag/js?id=G-3P74G75LD1"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/less/index.less"],
  dev: pattern,
  /*
   ***
   */
  router: {
    middleware: ["i18n", "router"],
    linkActiveClass: "nav-active-link",
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },
  pageTransition: {
    name: "page",
    mode: "out-in",
    beforeEnter(el) {
      // console.log("Before enter...");
    }
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "@/plugins/analytics.js", ssr: false },
    "@/plugins/vuescroll",
    "@/plugins/vant.js",
    "@/plugins/i18n.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    "@aceforth/nuxt-optimized-images"
  ],
  optimizedImages: {
    optimizeImages: true
  },
  /* scs* */
  styleResources: {
    // scss: "./assets/sass/variable.scss"
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/style-resources"
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vant"],
    cssSourceMap: pattern,
    cache: !pattern,
    // extractCSS: !pattern,
    /*
     **
     */
    quiet: false,
    hotMiddleware: {
      quiet: true,
      client: {
        noInfo: true
      }
    },
    babel: {
      plugins
    },
    //*
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[id].[name].js"),
      img: ({ isDev }) => (isDev ? "[path][name].[ext]" : "img/[hash:7].[ext]"),
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "fonts/[hash:7].[ext]",
      video: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "videos/[hash:7].[ext]"
    },
    extend(config, ctx) {
      config.resolve.extensions.push(".sass");
      //* **
      if (ctx.isClient) {
        config.devtool = pattern ? "eval-source-map" : "none";
      }
      //* **
      if (ctx.isServer) {
        config.devtool = pattern ? "eval-source-map" : "none";
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.resolve.extensions.push(".sass");
      }
    }
  }
};
