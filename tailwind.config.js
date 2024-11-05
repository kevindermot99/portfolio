import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"]
      },
      colors: {
        "navbar_active_link" : "#f2f2f2",
        "card_bg": "#f7f7f9",
      },
    },
  },
  plugins: [],
};
