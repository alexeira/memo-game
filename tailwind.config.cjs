/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        lr: '24px',
        b: '48px'
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(90px, 1fr))'
      },
      animation: {
        'h-flip': 'flip-horizontal 1s ease-in-out',
        'fade-in': 'fade-in 1s ease-in-out'
      },
      keyframes: {
        'flip-horizontal': {
          '1%': { transform: 'rotateY(180deg)' }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
