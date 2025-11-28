/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,astro}'],
  theme: {
    extend: {
      colors: {
        primary: '#133F9C',
        primaryLight: '#2a52a5 ',
        primaryBright: '#4265af',
        primaryDark: '#11388c',
        primaryDarker: '#0f327c',
        secondary: "#030c1c"
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
