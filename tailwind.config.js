const colors = require('tailwindcss/colors');
//looks like once colors are specified in the colors section of theme, any color used must be explicitly captured there.
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      teal: colors.teal,
      gray: colors.gray,
      blue: colors.blue,
      white: colors.white,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
    },
    extend: {},
    container: {
      center: true,
    },

    transitionDuration: {
      DEFAULT: '150ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4,0,0.2,1)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
