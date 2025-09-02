// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwind from "@tailwindcss/vite";

export default defineNuxtConfig({
  // Use the `app/` directory as the project source to avoid mixing root and app dirs
  srcDir: "app",
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/fonts"],
  css: ["@/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwind()],
  },
});
