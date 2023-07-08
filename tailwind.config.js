/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      boxShadow: {},
      colors: {
        accent: "#3C3C3C",
				blue:'#477BB8',
      },
    },
    screens: {
      xsm: "550px",
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      mmd: "728px",
      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
