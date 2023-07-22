/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        ruge:['Ruge Boogie', 'cursive'],
        cinzel:[ 'Cinzel Decorative', 'cursive'],

      },
    
    },
  },
  plugins: [],
}

