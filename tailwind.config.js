/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#F5DEB3",
        secondary:{
          100: '#9dc3ff',
          200: '#5b9aff'
        }
      },
      fontFamily:{
        bodyFont:['Noto Sans']
      }
    },
  },
  plugins: [],
}

