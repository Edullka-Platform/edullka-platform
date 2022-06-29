/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'brand':{
        pantone1925C:'#E3025E',
        pantoneBlackC:'#191919',
        pantone669C:'#2C245D',
      },
      
    },
  },
  plugins: [require("daisyui")],
}

