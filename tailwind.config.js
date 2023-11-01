/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#113F69',
        savoyBlue: '#3c50aa',
        davysGray: '#525252',
        darkYellow: '#FFC234',
        darkGray: '#1c1e27',
        background: '#e6e6e6',
        background2: '#d8d8d8'
      }
    },
    animation: {
      shrink: 'shrink 0.1s',
      fade: 'fade 6s linear infinite',
      load: 'load 1s'
    },
    keyframes: {
      shrink: {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(0.92)' },
        '100%': { transform: 'scale(1)' },
      },
      fade: {
        '0%': { opacity: '0' },
        '20%': { opacity: '1' },
        '90%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      load: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      }
    },
  },
  plugins: [],
}

