// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint', 'css-media-splitter/nuxt-module'],
  components: [
    {
      extensions: ['vue'],
      global: true,
      path: 'components/cms',
      prefix: 'cms',
    },
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
