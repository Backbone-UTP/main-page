/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd426",
        secondary: "#4267ff",
        accent: "var(--aw-color-accent)",
        default: "var(--aw-color-text-default)",
        muted: "var(--aw-color-text-muted)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  darkMode: "selector",
  variants: {
    extend: {},
  },
  plugins: [],
};
