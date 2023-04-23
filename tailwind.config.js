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
          "blue-light" : "#DFF1FF",
          "gray": "#F3F5F7",
          "black": "#444444",
        }
      }
    },
  },
  plugins: [],
}

