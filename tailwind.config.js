module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(0, 0%, 98%)',
          300: 'hsl(220, 16%, 96%)',
          400: 'hsl(233, 8%, 62%)',
          500: 'hsl(233, 26%, 24%)',
          600: 'hsl(136, 65%, 51%)',
          700: 'hsl(192, 70%, 51%)',
        }
      },
      fontFamily: {
        body: ['Public Sans']
      },
      fill: {
        100: 'hsl(0, 0%, 100%)',
        200: 'hsl(0, 0%, 98%)',
        300: 'hsl(220, 16%, 96%)',
        400: 'hsl(233, 8%, 62%)',
        500: 'hsl(233, 26%, 24%)',
        600: 'hsl(136, 65%, 51%)',
        700: 'hsl(192, 70%, 51%)',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
}
