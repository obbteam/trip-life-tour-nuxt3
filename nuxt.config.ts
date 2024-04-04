// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-swiper',
    '@nuxt/image',
  ],
  components: [{
    path: '~/components',
    global: true
  }],
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  },
  css: ["~/assets/styles/main.css", "~/assets/styles/media.css"],
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  }, 

})
