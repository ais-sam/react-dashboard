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
      "db-gray" : "#70707021", // navbar border bottom
      "d-fb-gray" : "#DEDEDE", // login form border
      "d-ft-black" :"#333333DE", // label of form inputs
      "d-fd-gray" : "#E0E0E1", // form devider
      "d-or-black" : "#00000099", // "or" devider
      "db-green" : "#08C874", // checkmark 
      "d-st-gray" : "#00000066", // success subscription text
    },
    fontFamily:{
      "poppins" : ["Poppins", "sans-serif"],
      "lato" : ["Lato", "sans-serif"]
    },
    boxShadow: {
      'logo': '0px 3px 6px #D1D5DF7F',
    }},
  },
  plugins: [],
}
