require('dotenv').config()
const bodyParser = require('body-parser')

module.exports = {
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Thomas Ongeri | thomasongeri.com',
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
  ** Customize the progress bar color
  */
  loading: { color: '#fe005c' },
  /*
  ** Build configuration
  */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json()
  ],
  modules: [
    '@nuxtjs/sitemap'
  ],
  build: {
    // vendor: ['axios'], // Add axios in the vendor.bundle.js
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const babelLoader = config.module.rules.find(
        rule => rule.loader === 'babel-loader'
      )
      // babelLoader.exclude = /node_modules\/(?![@sendgrid])/
      babelLoader.options.presets.push('es2015')
      config.node = {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }
  }
}
