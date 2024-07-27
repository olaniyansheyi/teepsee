/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroImg: "url('~/public/hero.png')",
      },
      colors: {
        primary: "rgba(230, 180, 29, 1)",
        secondary: "rgba(39, 20, 26, 1)",
      },
    },
  },
  plugins: [],
};
