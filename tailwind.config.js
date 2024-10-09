/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fairy: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        green: "#15971A",
        red: "#FF0852",
        bg_white: "#FDFCFC",
        bg_grey: "#F7F7F8",
        footer_black: "#121212",
      },
      screens: {
        xs: "400px",
        sm: "540px",
        md: "768px",
        lg: "992px",
        xl: "1140px",
        xxl: "1260px",
      },
    },
  },
  plugins: [],
};
