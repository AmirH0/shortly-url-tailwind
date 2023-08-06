/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1400px'
    },

    extend: {
      colors: {
        lightblue: '#30C4C0',
        hoverLightBlue:'rgb(152, 203, 219)',
        darkgrayishBlue: '#353245',
        gray: '#848484',
        darkGray:'rgb(53, 53, 53)',
        ivory: '#F4F5F6',
        pink: '#94697A'
      }
    },
  },
  plugins: [],
}

