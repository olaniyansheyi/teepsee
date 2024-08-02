export default {
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  css: ["~/assets/css/global.css"],
  vite: {
    assetsInclude: ["**/*.svg", "**/*.png"],
  },
};
