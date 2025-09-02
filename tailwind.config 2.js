/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'grhiit-red': '#F20D0D',
        'grhiit-black': '#202124',
        'grhiit-gray': '#2E2E2E',
        'grhiit-light-gray': '#F5F5F5',
      },
      fontFamily: {
        'primary': ['Anton', 'Arial Black', 'sans-serif'],
        'secondary': ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}