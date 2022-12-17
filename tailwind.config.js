/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dim: {
          gray:'#21262C',
          red : '#D81E33',
        },
      }
    },
  },
  plugins: [],
}