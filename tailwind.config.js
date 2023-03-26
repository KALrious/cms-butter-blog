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
        fadein: 'fadein 0.5s ease-in-out',
        titlefadein: 'titlefadein 1s ease-in-out 0.2s 1 backwards',
        subtitlepopup: 'subtitlepopup 1s ease-in-out 0.2s 1 backwards',
        type: 'type 2.7s ease-out .8s both',
        cursor: 'cursor .7s linear both infinite',
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
        fadein: {
          '0%': {
            transform: 'translateY(-50%)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '100%',
          },
        },
        titlefadein: {
          from: {
            opacity: '0%',
          },
          to: {
            opacity: '100%',
          },
        },
        subtitlepopup: {
          from: {
            opacity: '0%',
            transform: 'translateY(100%)',
          },
          to: {
            opacity: '100%',
            transform: 'translateY(0%)',
          },
        },
        cursor: {
          '0%, 40%': {
            opacity: 0,
          },
          '60%, 100%': {
            opacity: 1,
          },
        },
        type: {
          '0%': { width: '0ch' },
          '2.5%, 5%': { width: '1ch' },
          '7.5%, 10%': { width: '2ch' },
          '12.5%, 15%': { width: '3ch' },
          '17.5%, 20%': { width: '4ch' },
          '22.5%, 25%': { width: '5ch' },
          '27.5%, 30%': { width: '6ch' },
          '32.5%, 35%': { width: '7ch' },
          '37.5%, 40%': { width: '8ch' },
          '42.5%, 45%': { width: '9ch' },
          '47.5%, 50%': { width: '10ch' },
          '52.5%, 55%': { width: '11ch' },
          '57.5%, 60%': { width: '12ch' },
          '62.5%, 65%': { width: '13ch' },
          '67.5%, 70%': { width: '14ch' },
          '72.5%, 75%': { width: '15ch' },
          '77.5%, 80%': { width: '16ch' },
          '82.5%, 85%': { width: '17ch' },
          '87.5%, 90%': { width: '18ch' },
          '92.5%, 95%': { width: '19ch' },
          '97.5%, 100%': { width: '20ch' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
