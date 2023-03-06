/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adam-primary': '#134141',
        'adam-bg': '#EDEFEF'
      }
    },
  },
  plugins: [],
}