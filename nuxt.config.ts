// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    pageTransition: {name: "page", mode: "out-in"},
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/devtools", '@nuxtjs/color-mode', '@nuxt/content', 'nuxt-icon'],
  colorMode: {
    classSuffix: ''
  },
});
