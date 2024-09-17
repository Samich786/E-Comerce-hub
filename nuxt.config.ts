export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // app: {
  //   layoutTransition: { name: "layout", mode: "out-in" },
  //   pageTransition: { name: "page", mode: "out-in" },
  // },
  // routeRules: {
  //   // Apply to all routes except authentication routes
  //   "/**": {
  //     layout: "default", // Use default layout globally
  //     middleware: "authenticated", // Apply authenticated middleware globally
  //   },
  //   // Apply guest layout and middleware for authentication routes
  //   "/auth/**": {
  //     layout: "auth",
  //     middleware: "guest",
  //   },
  // },
  // middleware: ["authenticated"],
  modules: ["@pinia/nuxt", "nuxt-vue3-google-signin"],

  googleSignIn: {
    clientId:
      "21577781470-2ak85seo3aft1qdnt6teunbpi8ojomtg.apps.googleusercontent.com",
  },
  css: ["@/public/css/main.css", "@/public/css/global.css"],
  plugins: [
    "~/plugins/axios",
    "~/plugins/auth",
    "~/plugins/prisistedState",
    "~/plugins/end-points",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
