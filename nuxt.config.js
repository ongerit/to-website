// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  // App configuration (replaces head)
  app: {
    head: {
      title: "Thomas Ongeri | thomasongeri.com",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Hi! I'm Thomas Ongeri. I'm an engineering leader passionate about building high-impact teams and developing innovative software solutions.",
        },
        {
          name: "keywords",
          content: "spidermanfarfromhome.com, spiderman, far from home, vuejs, nuxt, javascript, tutorials, development, software, news, clients, work, contact, plotly, collegefashionista, dow jones, xfinity, maybelline, juilliard, aba, savage, nbc, natgeo, tough mudder, javascript, code, american express, express, ejs, webpack, react, lodash, node, go, drupal",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
      script: [
        {
          src: 'https://tag.clearbitscripts.com/v1/pk_92f42a6ac7c2d0c7ce0754938ddc154d/tags.js',
          referrerpolicy: 'strict-origin-when-cross-origin',
        },
      ],
    },
    // Page transition (replaces loading)
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // CSS
  css: [],

  // Auto-import components (default in Nuxt 3, but explicit for clarity)
  components: true,

  // Modules
  modules: [
    '@nuxtjs/sitemap',
  ],

  // Sitemap configuration (Nuxt 3 format)
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://thomasongeri.com',
  },

  // Environment variables (replaces @nuxtjs/dotenv)
  // Nuxt 3 automatically loads .env files based on NODE_ENV
  runtimeConfig: {
    // Private keys (only available server-side)
    // Add private keys here if needed

    // Public keys (available on client)
    public: {
      environment: process.env.NODE_ENV || 'development',
    }
  },

  // Vite configuration for SASS (replaces webpack build config)
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },

  // Nitro server configuration
  nitro: {
    compressPublicAssets: true,
    prerender: {
      // Continue build even if some routes fail (safer for static generation)
      failOnError: false,
    },
  },
})
