/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18181b",
        secondary: "#d4d4d8"
      }
    },
  },
  plugins: [],
}
