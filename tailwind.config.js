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
      },
      backgroundImage: {
        'login-bg': "url('src/assets/bg-login.jpg')"
      }
    },
    animation: {
      shrink: 'shrink 0.1s',
      fade: 'fade 6s linear infinite',
      load: 'load 1s',
      loadIcon: 'loadIcon 1s infinite'
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
      },
      loadIcon: {
        '0%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(90deg)' },
        '50%': { transform: 'rotate(180deg)' },
        '75%': { transform: 'rotate(270deg)' },
        '100%': { transform: 'rotate(360deg)' },        
      }
    },
  },
  plugins: [],
}

