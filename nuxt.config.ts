// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://d5yskh2ij1w8j.cloudfront.net/css/OpenSans.css',
        },
      ],
    },
  },
  modules: ['bootstrap-vue-3/nuxt', 'nuxt-icon'],
  css: ['bootstrap/dist/css/bootstrap.css', '@/assets/scss/main.scss'],
})
