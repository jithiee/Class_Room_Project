/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      borderRadius:{
        '100xl':'400px'
      }
    },
  },
  plugins: [],
}