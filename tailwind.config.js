/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      "d-black" : "#1B1C1D",
      "d-text-back" : "#000000DE",
      "d-blue" : "#0077FF"
    }},
  },
  plugins: [],
}
