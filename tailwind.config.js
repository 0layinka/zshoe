/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors:{
          primaryColor: '#686D76',
          secondaryColor: '#EEEEEE',
        } 
    },
    fontFamily:{
      lato:["Lato", "sans-serif"],
      mont:["Montserrat", "sans-serif"],
    }
  },
  plugins: [
    
  ],
}

