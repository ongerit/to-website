import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title:'Thomas Ongeri | thomasongeri.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Thomas Ongeri is a web developer currently residing in Brooklyn, New York.' },
      { hid: 'keywords', name: 'keywords', content: 'spidermanfarfromhome.com, spiderman, far from home, vuejs, nuxt, javascript, tutorials, development, software, news, clients, work, contact, plotly, collegefashionista, dow jones, xfinity, maybelline, juilliard, aba, savage, nbc, natgeo, tough mudder, javascript, code, american express, express, ejs, webpack, react, lodash, node, go, drupal' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v2' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fe005c' },

  serverMiddleware: [
    // body-parser middleware
    bodyParser.json()
  ],
  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
