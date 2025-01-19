import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-01-02",
  plugins: ["~/plugins/firebase"],
  typescript: {
    strict: true, 
    shim: false,
  },
  app: {
    head: {
      title: "Nadir Kitap",
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
})