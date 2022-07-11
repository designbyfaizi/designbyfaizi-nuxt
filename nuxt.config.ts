import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  css:['~/assets/styles/reset.scss', '~/assets/styles/main.scss'],
  typescript: {
    shim: false,
  },
  hooks: {
    "builder:watch": console.log,
  },
  modules: ["@vueuse/nuxt", '@nuxtjs/color-mode'],
  buildModules: ["nuxt-windicss", "@vueuse/nuxt", "@nuxtjs/svg"],
  colorMode:{
    classSuffix:''
  }
});
