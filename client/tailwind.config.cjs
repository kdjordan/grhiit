/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `radial-gradient(circle, ${theme('colors.grred')}, ${theme('colors.grblack')})`
      }),
      colors: {
        grred: '#E21D26',
        grwhite: '#ffffff',
        grblack: '#000000',
        grgrey: '#E5E5E5'
      },
      fontFamily: {
        'osPrimary': ['Oswald', 'sans-serif'],
        'ssSecondary': ['Source Sans Pro', 'sans-serif']
      },
      fontSize: {
        'dynamicSmall': 'clamp(1rem, 5vw, 2rem)',
        'dynamicLarge': 'clamp(3rem, 3vw, 8rem)',
      }
    },
  },
  plugins: [],
}
