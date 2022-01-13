const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      body: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      header: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      bold: '0 1px 2px 0 rgba(0, 0, 0, 0.30)',
      black: '4px 4px 0 8px rgba(0, 0, 0, 1)',
      black2: '2px 2px 0 4px rgba(0, 0, 0, 1)',
      bottom: '0 2px 2px -2px rgba(0, 0, 0, 1)',
    },
    zIndex:{
      '-1': '-1'
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
