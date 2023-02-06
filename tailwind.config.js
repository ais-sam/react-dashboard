/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"2rem"
    },
    colors:{
      "d-black" : "#1B1C1D",
      "d-text-back" : "#000000DE",
      "d-blue" : "#0077FF",
      "dt-gray" : "#827E80",// navbar links
      "db-gray" : "#70707021" // navbar border bottom
    },
    fontFamily:{
      "poppins" : ["Poppins", "sans-serif"],
      "lato" : ["Lato", "sans-serif"]
    }},
  },
  plugins: [],
}
