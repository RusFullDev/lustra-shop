// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-swiper',
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
    '@element-plus/nuxt',
    // ssr: false,
    'nuxt-icons',
    "@nuxt/icon"
  ],
})