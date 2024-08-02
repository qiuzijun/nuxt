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
    domain:'.qiuzijun.cn',
    public:{
      domain:process.env.NUXT_DOMAIN
    }
  },
  compatibilityDate: '2024-08-01'
})