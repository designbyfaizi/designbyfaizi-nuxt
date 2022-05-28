import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  typescript: {
    shim: false,
  },
  hooks: {
    "builder:watch": console.log,
  },
  modules: ["@vueuse/nuxt"],
  buildModules: ["nuxt-windicss", "@vueuse/nuxt", "@nuxtjs/svg"],
});
