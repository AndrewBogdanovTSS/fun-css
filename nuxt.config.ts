// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint'],
  components: [
    {
      extensions: ['vue'],
      global: true,
      path: 'components/cms',
      prefix: 'cms',
    },
  ],
  imports: {
    dirs: ['utils/*/*.ts'],
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
