/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#3c06a7',
          green: '#237d98',

          blue: {
            50: '#90dff7',
          },
        },

      },
    },
  },
  plugins: [],
}
