export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Thomas Ongeri | thomasongeri.com",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Thomas Ongeri is an Engineering Manager currently residing in Brooklyn, New York.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "spidermanfarfromhome.com, spiderman, far from home, vuejs, nuxt, javascript, tutorials, development, software, news, clients, work, contact, plotly, collegefashionista, dow jones, xfinity, maybelline, juilliard, aba, savage, nbc, natgeo, tough mudder, javascript, code, american express, express, ejs, webpack, react, lodash, node, go, drupal",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  loading: { color: '#fe005c' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/dotenv'],

  dotenv: {
    filename: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.develop',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
