/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   phone: "400px",
    //   laptop: "1024px",
    //   desktop: "1280px",
    // },
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
