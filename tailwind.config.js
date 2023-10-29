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
        background: '#E6E6E6'
      }
    },
    animation: {
      shrink: 'shrink 0.1s',
    },
    keyframes: {
      shrink: {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(0.92)' },
        '100%': { transform: 'scale(1)' },
      },
    },
  },
  plugins: [],
}

