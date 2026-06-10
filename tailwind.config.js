/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          dark:  '#090A0F',
          mid:   '#1B2735',
          light: '#2a4a6b',
        },
        accent: {
          green: '#6bff7f',
          blue:  '#00b4ff',
          cyan:  '#00e5ff',
        }
      },
      fontFamily: {
        sans:  ['Space Grotesk', 'sans-serif'],
        lato:  ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in':    'fadeIn 0.8s ease forwards',
        'slide-up':   'slideUp 0.7s ease forwards',
        'type-cursor':'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn:  { from:{opacity:0}, to:{opacity:1} },
        slideUp: { from:{opacity:0,transform:'translateY(30px)'}, to:{opacity:1,transform:'translateY(0)'} },
        blink:   { '0%,100%':{opacity:1}, '50%':{opacity:0} },
      }
    },
  },
  plugins: [],
}