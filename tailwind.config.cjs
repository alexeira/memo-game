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
        'auto-fill': 'repeat(auto-fill, minmax(100px, 1fr))'
      }
    }
  },
  plugins: []
}
