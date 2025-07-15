/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        serif: ["var(--font-noto)"],
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
