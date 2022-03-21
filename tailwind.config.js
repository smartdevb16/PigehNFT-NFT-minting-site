module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1rem': '1rem',
        '1.5rem': '1.5rem',
        '2rem': '2rem',
        '3rem': '3rem',
        '3.5rem': '3.5rem',
        '4rem': '4rem',
        '4.5rem': '4.5rem',
        '5rem': '5rem',
        '6rem': '6rem',
        '7rem': '7rem',
        '8rem': '8rem',
        '8.125rem': '8.125rem',
        '9rem': '9rem',
        '10rem': '10rem',
        '12rem': '12rem',
        '15.5rem': '15.5rem',
        '21.5rem': '21.5rem',
        '32rem': '32rem',
        '85%': '85%'
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