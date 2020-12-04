/*
 * @Author: abc
 * @Date: 2020-11-13 16:46:45
 * @LastEditors: abc
 * @LastEditTime: 2020-11-27 15:24:15
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
    title: "IBAX",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
      },
      { hid: "description", name: "description", content: "IBAX" },
      { hid: "og:title", name: "og:title", content: "IBAX" },
      {
        hid: "keyswords",
        name: "keyswords",
        content:
          "IBAX,CryptoCurrency,Bitcoin,Cross-Chain,Crypto,DeFi,Dapps,Blockchaintechnology,corelayertechnology,decentralizedapplication,Distributedledger,IBAXAMA"
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "IBAX"
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "IBAX"
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "IBAX"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/css/animate.min.css" }
    ],
    script: [
      { type: "text/javascript", src: "/js/flexible.js" },
      { type: "text/javascript", src: "/js/requestNextAnimationFrame.js" }
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
    // { src: "~/plugins/nutui.js", mode: "client" },
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
    "@nuxtjs/style-resources",
    "@nuxtjs/google-gtag"
  ],
  "google-gtag": {
    id: "G-3P74G75LD1",
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ["ibax.io", "m.ibax.io"]
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: true // disable if you don't want to track each page route
  },
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
