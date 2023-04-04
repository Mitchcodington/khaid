/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        spotGreen: "#1ed760",
        videos: "#252525"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        web: ["Titillium Web", "sans-serif"],
        mich: ['Michroma', 'sans-serif']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1500px",
    },
  },
  plugins: [],
};