// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwind from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/fonts'],
  vite: {
    plugins: [tailwind()]
  }
})
