module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': -1,
      },
      opacity: {
        '90': 0.9
      }
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active'],
    translate: ['responsive', 'hover', 'focus', 'active'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
