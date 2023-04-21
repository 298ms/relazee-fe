/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "relazee": {
          "blue" : "#008DFF",
          "gray": "#F3F5F7"
        }
      }
    },
  },
  plugins: [],
}

