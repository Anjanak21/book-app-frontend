/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
   
      './src/**/*.{js,jsx,ts,tsx,css,App.css}', // Add .css if you use standalone CSS
  
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FFCE1A',
        'secondary':'#0D0842',
        'blackBG':'#F3F3F3',
        'favorite':'#FF5841',
        

      },
      fontFamily:{
        'primary':["Montserrat", "sans-serif"],
        'secondary':["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

