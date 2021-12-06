const { transform } = require("typescript");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { min: "1441px" },
      xl: { max: "1440px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        calistoga: "'Calistoga', cursive",
        monserrat: "'Montserrat', sans-serif",
        robotoslab: "'Roboto Slab', serif",
        opensans: "'Open Sans', sans-serif",
        lora: "'Lora', serif",
        roboto: "'Roboto', sans-serif",
      },
      screens: {
        xs: "425px",
      },
      textColor: {
        cyan: "#00D2FF",
        orange: "#FFA500",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite", // this is for modify existing animation
        wiggle: 'wiggle 0.5s ease-in-out infinite', // this is for new animation
        slide: 'slideIn 0.5s ease-in-out'
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-60px)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        }
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      animation: ['hover', 'focus'],
      borderColor: ['active'],
    },
  },
  plugins: [],
};
