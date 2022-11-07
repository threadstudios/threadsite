const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../app/**/*.njk'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        display: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        header: 'inset 0 0 48px 0 #181818;',
      },
      colors: {
        night: '#181818',
      },
      letterSpacing: {
        header: '.25em',
      },
    },
  },
  plugins: [],
}
