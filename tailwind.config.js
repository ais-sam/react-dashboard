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

      // admin listings
      "d-dark-blue" : "#16263D", // side bar background
      "d-side-gray" : "#FFFFFF52", // background search bar
      "d-side-p-gray" : "#FFFFFFB3", // placeholder search bar
      "d-admin-blue" : "#16263D", // admin page text 
      "d-admin-green" : "#00DB89", // notification
      'd-admin-m-gray' : "#7B7B7B", // nav menu
      "d-tb-blue" : "#F8F8F9", // blue bg table
      "d-filter-blue" : "#F9F9FA", //blue bg filter
      "d-ft-gray" : "#989898", // grey text filter
      "d-action-blue" : "#0066FF", //blue action button
      "d-action-gray" : "#959CA6" , // gray action icon 
      "d-act-gray" : "#EFEFEF", //gray background action button
      "d-red" : "#F97365", //delete action button
      "d-light-blue" : "#9BA1FF",
    },
    fontFamily:{
      "poppins" : ["Poppins", "sans-serif"],
      "lato" : ["Lato", "sans-serif"],
      "mont" : ["Montserrat", "sans-serif"]
    },
    boxShadow: {
      'logo': '0px 3px 6px #D1D5DF7F',
      'listing': "0px 3px 6px #8386B828"
    }},
    
  },
  plugins: [],
}
