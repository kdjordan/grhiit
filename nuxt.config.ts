// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Use the `app/` directory as the project source to avoid mixing root and app dirs
  srcDir: "app",
  // Explicitly set public directory path
  dir: {
    public: '../public'
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  
  // Nuxt Content v3 configuration 
  content: {
    // Content config is handled by content.config.ts
  },
  
  css: ["~/assets/css/tailwind.css"],
  
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  // Pure SSG Configuration for AWS Amplify (Nuxt 3.x)
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/articles', '/articles/welcome-to-grhiit', '/articles/burpee-history-article']
    }
  },
  
  // Route rules for pre-rendering and caching
  routeRules: {
    "/": { prerender: true },
    "/program": { prerender: true },
    "/about": { prerender: true },
    "/articles": { prerender: true },
    "/articles/**": { prerender: true },
    // Static assets caching
    "/images/**": { headers: { "Cache-Control": "max-age=31536000" } },
    "/_nuxt/**": { headers: { "Cache-Control": "max-age=31536000" } }
  },
  
  // SEO Configuration
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: 'GRHIIT - Be The Decision',
      titleTemplate: '%s | GRHIIT',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Transform your fitness with GRHIIT - the ultimate high-intensity training program designed for all fitness levels. Get stronger, fitter, and healthier with our proven system.' },
        { name: 'keywords', content: 'HIIT, high-intensity training, fitness, workout, exercise, health, strength training, cardio' },
        { name: 'author', content: 'GRHIIT' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'GRHIIT - Be The Decision' },
        { property: 'og:description', content: 'Transform your fitness with GRHIIT - Be The Decision. Mental toughness training that builds physical strength.' },
        { property: 'og:site_name', content: 'GRHIIT' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'GRHIIT - Be The Decision' },
        { name: 'twitter:description', content: 'Transform your fitness with GRHIIT - Be The Decision. Mental toughness training that builds physical strength.' },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        // Google Fonts preconnect for performance
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        // Load Oswald (primary/display font) and Inter (secondary/body font)
        { 
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" 
        }
      ],
    }
  }
});
