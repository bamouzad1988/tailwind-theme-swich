/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      custom: {
        main: "var(--color-main) ",
        text: "var(--color-text) ",
        border: "var(--color-border) ",
      },
    },
  },
  plugins: [],
};
