import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
        Custom_r: ["Custom_Sans_r", "sans-serif"],
        Custom_m: ["Custom_Sans_m", "sans-serif"],
        Custom_b: ["Custom_Sans_b", "sans-serif"],
        Custom_1xb: ["Custom_Sans_1xb", "sans-serif"],
        Custom_2xb: ["Custom_Sans_2xb", "sans-serif"],
      },
      colors: {
        dark_color: "#202124",
        dark_color_weak: "#aaaaaa",
        card_color_light: "#f2f2f2",

        light_color: "#f4f4f5",
        light_color_weak: "#52525b",
        card_color_dark: "#27272a",
        body_dark: "#18181b",
      },
    },
  },
  plugins: [],
};
