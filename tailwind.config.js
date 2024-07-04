/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Caveat: ['Caveat', 'sans-serif'],
      },
      colors: {
        "light-body": "#F1EFE7",
        "dark-body": "#0a0a0a",
        "main-color": "#f97316",
        // "main-color": "#B14AED",
      },
    },
  },
  plugins: [],
}

