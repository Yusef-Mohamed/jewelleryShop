/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#17171799",
        blue: "#4a63e2",
        gold: "#fdfbf6",
      },
    },
  },
  plugins: [],
};
