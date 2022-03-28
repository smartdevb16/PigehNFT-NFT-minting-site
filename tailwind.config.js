module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '20rem': '21.5rem'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      scale: {
        '102': '1.02',
      },
      colors: {
        'pink': '#f6127e',
        'primary': '#080216'
      },
      fontSize: {
        'xt': '0.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}