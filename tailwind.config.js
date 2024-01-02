/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue--primary": "#0177FA",
        "white--primary": "#F5F5F5",
        "black--primary": "#212B36",
        "gray": "#E8E8E8",
        "gray-2": "#C9CACF"

      },
    },
  },
  plugins: [],
}