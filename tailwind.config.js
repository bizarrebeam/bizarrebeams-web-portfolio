/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#343235',
        blue: '#B6D0EB',
        pink: '#EFCCDA',
        yellow: {
          DEFAULT: '#FBFC94',
          hover: '#FEE24A',
        },
        green: {
          DEFAULT: '#D0EBC2',
          hover: '#B5D8A2',
        },
        gray: {
          DEFAULT: '#D9D9D9',
          text: '#898989',
          background: '#F3F3F3',
        },
        orange: {
          DEFAULT: '#FFC593',
          hover: '#FEB26D',
        },
      },
      backgroundImage: {
        'top-gradient': 'linear-gradient(to bottom, #B6D0EB, #FFFFFF)',
        'bottom-gradient': 'linear-gradient(to top, #B6D0EB, #FFFFFF)'
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace']
      },
      screens: {
        's': '500px',
        'xs': '340px'
      },
      fontSize: {
        'xxs': '0.625rem' 
      },
      lineHeight: {
        'sm': '1.75',
        's': '1.5',
        'xs': '1.25'
      },
      transitionProperty: {
        'transform': 'transform',
      }
    },
  },
  plugins: [],
}