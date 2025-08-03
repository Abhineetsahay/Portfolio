/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      let colors = theme("colors");
      let newVars = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === "string") {
          acc[`--${key}`] = colors[key];
        }
        return acc;
      }, {});

      addBase({
        ":root": newVars,
      });
    }),
    require("tailwindcss-animate"),
  ],
};
