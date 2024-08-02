// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      title:'qiuzijun blog',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  colorMode: {
    preference: 'light'
  },

  modules: ['@nuxt/ui'],
  runtimeConfig:{
    public:{
      domain:process.env.DOMAIN
    }
  },
  compatibilityDate: '2024-08-01'
})