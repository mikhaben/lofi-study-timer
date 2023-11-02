/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F9F1E8',
        secondary: '#F8C69B',
        tertiary: '#C6C3BD'
      }
    }
  },
  plugins: []
}
