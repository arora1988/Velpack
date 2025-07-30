/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hbold: ["hbold", "sans-serif"],
        hmed: ["hmed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
