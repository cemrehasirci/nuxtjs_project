import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-01-02",
  plugins: ["~/plugins/firebase"],
  typescript: {
    shim: false,
    strict: true, 
    includeWorkspace: true,
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