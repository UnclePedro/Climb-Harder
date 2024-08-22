/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/SVG - Topographic Lines 04.svg')",
      },
    },
  },
  plugins: [],
};
