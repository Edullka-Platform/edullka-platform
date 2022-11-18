/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      global: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        'brand':{
          pantone1925C:'#E3025E',
          pantoneBlackC:'#191919',
          pantone669C:'#2C245D',
        },
    },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}

