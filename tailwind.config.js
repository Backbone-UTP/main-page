/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc107",
        secondary: "#4267ff",
        orange: "#FF8C57",
        accent: "var(--aw-color-accent)",
        default: "var(--aw-color-text-default)",
        muted: "var(--aw-color-text-muted)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  darkMode: "selector",
  variants: {
    extend: {},
  },
  plugins: [],
};
