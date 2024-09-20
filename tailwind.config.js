/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : "b9ff66",
        'secondary': "191a23",
        'teritiary': "#f3f3f3", 
      }
    },
  },
  plugins: [],
}