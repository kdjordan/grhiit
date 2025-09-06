/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue", 
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue"
  ],
  theme: {
    extend: {
      colors: {
        "grhiit-red": "#F20D0D",
        "grhiit-black": "#202124",
        "grhiit-gray": "#2E2E2E",
        "grhiit-light-gray": "#F5F5F5",
      },
      fontFamily: {
        primary: ["Oswald", "Arial Black", "sans-serif"],
        secondary: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
