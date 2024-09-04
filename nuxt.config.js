export default {
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  build: {
    transpile: ["vue-toastification"],
  },

  css: ["~/assets/css/global.css"],
  vite: {
    assetsInclude: ["**/*.svg", "**/*.png"],
  },
  router: {
    middleware: "auth",
  },

  runtimeConfig: {
    public: {
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    },
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  },

  plugins: [
    { src: "~/plugins/supabase.js", mode: "client" },
    "~/plugins/vue-toastification.js",
  ],
};
