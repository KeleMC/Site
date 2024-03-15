// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'baidu-site-verification',
          content: 'codeva-vxn7O0s0kt'
        }
      ]
    }
  },
  site: {
    url: 'https://kelemc.fun',
    name: 'KeleMC 可勒世界',
    description: 'Welcome to KeleMC!',
    defaultLocale: 'cn' // not needed if you have @nuxtjs/i18n installed
  },
  devtools: { enabled: true },
  css: ['~/assets/css/normalize.css'],
  modules: ['@nuxtjs/i18n', '@nuxtjs/seo', '@nuxtjs/sitemap']
})
