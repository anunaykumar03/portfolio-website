module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'emphasis-blue': 'rgb(2 132 199)',
        'hover-blue': 'rgb(144, 170, 255)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}