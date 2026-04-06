/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    fontFamily: {
      stencil: ['"Saira Stencil One"', 'sans-serif'],
    },
  },
},
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  plugins: [],
}
