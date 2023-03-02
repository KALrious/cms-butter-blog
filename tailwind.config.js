/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './css/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
      filter: {
        custom: 'drop-shadow(7px 5px 0px rgba(0,0,0,1)',
      },
      boxShadow: {
        custom: '0px 0px 50px rgb(183 199 240 / 25%)',
      },
      animation: {
        'spin-slow': 'spin 1568.23529647ms linear infinite',
        'spin-easespin':
          'easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
        'spinner-left':
          'left 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
        'spinner-right':
          'right 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
      },
      keyframes: {
        easespin: {
          '12.5%': {
            transform: 'rotate(135deg)',
          },
          '25%': {
            transform: 'rotate(270deg)',
          },
          '37.5%': {
            transform: 'rotate(405deg)',
          },
          '50%': {
            transform: 'rotate(540deg)',
          },
          '62.5%': {
            transform: 'rotate(675deg)',
          },
          '75%': {
            transform: 'rotate(810deg)',
          },
          '87.5%': {
            transform: 'rotate(945deg)',
          },
          to: {
            transform: 'rotate(1080deg)',
          },
        },
        left: {
          '0%': {
            transform: 'rotate(130deg)',
          },
          '50%': {
            transform: 'rotate(-5deg)',
          },
          to: {
            transform: 'rotate(130deg)',
          },
        },
        right: {
          '0%': {
            transform: 'rotate(-130deg)',
          },
          '50%': {
            transform: 'rotate(5deg)',
          },
          to: {
            transform: 'rotate(-130deg)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
