import config from './config'
export default defineNuxtConfig({
  app: {
    head: {
      title: 'qiuzijun blog',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  colorMode: {
    preference: 'light'
  },

  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      ...config
    }
  },
  compatibilityDate: '2024-08-01'
})