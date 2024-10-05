import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Caveat: ["Caveat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        SourceSans: ["Source Sans", "sans-serif"],
        Macondo: ["Macondo", "sans-serif"],
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
        LeckerliOne: ["Leckerli One", "sans-serif"],
      },
      colors: {
        "light-body": "#fafafa",
        "dark-body": "#0a0a0a",
        "main-color": "#000",
        // "main-color": "#B14AED",
        "text-white": "#f1f1f1",
        "text-black": "#111111",
      },
      
    },
  },
  plugins: [],
};
