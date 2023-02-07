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
      "d-text-black" : "#000000DE",
      "d-back-black" : "#707070", // text and border for back button in register form
      "d-blue" : "#0077FF",
      "dt-gray" : "#827E80",// navbar links
      "db-gray" : "#70707021", // navbar border bottom
      "d-fb-gray" : "#DEDEDE", // login form border
      "d-ft-black" :"#333333DE", // label of form inputs
      "d-fts-black" : "#000000CC", // title in form info
      "d-fas-black" : "#131313", // account selection title (step 02 registration)
      "d-fd-gray" : "#E0E0E1", // form devider
      "d-fd2-gray" : "#E0E2E1", // form info devider
      "d-or-black" : "#00000099", // "or" devider
      "db-green" : "#08C874", // checkmark 
      "d-st-gray" : "#00000066", // success subscription text
      "d-p-gray" : "#C9C9C9", // progress bar (regitration steps)
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
