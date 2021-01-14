module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
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
