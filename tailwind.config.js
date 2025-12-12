/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kbli-primary': '#2D3B96',
        'kbli-secondary': '#4CA85F',
        'kbli-accents': '#BFC8FF',
        'kbli-fourth': '#A5D3AF',
      },
    },
  },
  plugins: [],
};