/** @type {import('tailwindcss').Config} */
export default {
  // In Tailwind v4 the content globs are inferred from your toolchain.
  // Removing custom globs avoids missing classes when using Nuxt `srcDir`.
  theme: {
    extend: {
      colors: {
        "grhiit-red": "#F20D0D",
        "grhiit-black": "#202124",
        "grhiit-gray": "#2E2E2E",
        "grhiit-light-gray": "#F5F5F5",
      },
      fontFamily: {
        primary: ["Anton", "Arial Black", "sans-serif"],
        secondary: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
