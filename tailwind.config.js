/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#725690",
        "custom-Purple": '#2f1e42',
        "light-purple":"#CDBFDD",
        "light-gray":"#F1F0F2",
      },
    },
  },
  plugins: [],
};
