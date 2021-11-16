const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      body: ['Helvetica', 'Arial', 'sans-serif'],
      header: ['Blinker', 'monospace'],
    },
    boxShadow: {
      bold: '0 1px 2px 0 rgba(0, 0, 0, 0.30)',
      black: '4px 4px 0 8px rgba(0, 0, 0, 1)',
      black2: '2px 2px 0 4px rgba(0, 0, 0, 1)',
      bottom: '0 2px 2px -2px rgba(0, 0, 0, 1)',
    },
    backgroundImage: {
      // 'home-image': "url('_next/static/image/assets/digital_background.jpg')",
    },
    colors: {
      blue: '#1D3FB5',
      purple: '#7715C3',
      white: '#fff'
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
