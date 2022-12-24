/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "paperGray":"rgba(217, 217, 217, 0.3)",
        "mainText":"#111729",
        "blue":"#4B7DF3",
        "border":"#E3E8EF",
        "textGray":"#677489",
        "whiteBg":"#F9FAFB",
        "primary":"#A7ACA8",
        "primaryText":"#0A0A0A",
        "secondary":"rgba(91, 54, 18, 1)",
      },
      height:{
        "10%":"8%",
        "90%":"92%",
        "header":"40rem",
        "homeProduct":"35rem",
      },
      width:{
        "cart":"30rem",
        "homeProduct":"22rem",
      },
      fontSize:{
        lg:"1.25rem",
        sm:"0.75rem",
        md:"0.875rem",
      },
      fontFamily: {
        'Boska': ['Boska', 'serif'],
      },
    },
  },
  plugins: [],
}