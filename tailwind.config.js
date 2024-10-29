import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        IndieFlower: ["Indie Flower", "sans-serif"]
      },
      colors: {
        "body-color": "#18181b",
        "text-color": "#f4f4f5",
        "text-color-50": "#a1a1aa",
        "text-color-30": "#52525b",
        "text-color": "#f1f1f1",
        "container-color": "#27272a",
        "main-color": "#3582c0",
      },
    },
  },
  plugins: [],
};
