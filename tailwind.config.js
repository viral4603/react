/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c6efe0",
          dark: "#181d1c"
        },
        secondary: {
          DEFAULT: "#e8fc67",
          dark: "#141609"
        }
      }
    },
  },
  plugins: [],
}

