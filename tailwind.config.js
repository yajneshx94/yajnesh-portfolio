/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          dark:  '#050a12',
          mid:   '#0a1628',
          light: '#0d2244',
        },
        accent: {
          // ── CHANGE ACCENT COLORS HERE ──
          green: '#00b4ff',   // renamed but keeping 'green' key so no code breaks — this is now space blue
          blue:  '#0066cc',
          cyan:  '#00e5ff',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
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