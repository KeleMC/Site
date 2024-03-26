// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'baidu-site-verification',
          content: 'codeva-vxn7O0s0kt'
        },
        {
          name: 'sogou_site_verification',
          content: 'HRQwGCTzs7'
        }
      ]
    }
  },
  site: {
    url: 'https://kelemc.fun',
    name: 'KeleMC 可勒世界',
    description: 'Welcome to KeleMC!',
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@tdesign-vue-next/nuxt',
    '@vueuse/nuxt'
  ],
  tdesign: {
    resolveIcons: true
  }
})
