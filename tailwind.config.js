/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#6096B4",
      },
    },
  },
  plugins: [],

  corePlugins: {
    preflight: false, // <== disable this!
  },
};
