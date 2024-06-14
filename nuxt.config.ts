// import getSiteMeta from "./utils/getSiteMeta";
// const meta = getSiteMeta();

export default defineNuxtConfig({
  devtools: { enabled: false },
  // ssr: false,
  // generate: {
  //     fallback: true
  // },
  // app: {
  //   head: {
  //     title: "Acorn Globus",
  //     meta: [
  //       ...meta,
  //       { charset: "utf-8" },
  //       { name: "viewport", content: "width=device-width, initial-scale=1" },
  //       { hid: "description", name: "description", content: "" },
  //       { name: "format-detection", content: "telephone=no" },
  //     ],
  //   },
  // },
  css: [
    // "~/assets/css/bootstrap.min.css",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
    "~/assets/css/main.css",
  ],
  modules: ["@nuxt/content", "vue3-carousel-nuxt", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  ignore: ["**/pages/blog/**"],
  // hooks: {
  //     'content:file:beforeInsert': (document) => {
  //         if (document.extension === '.md') {
  //             const stats = require('reading-time')(document.text)
  //             document.readingStats = stats
  //         }
  //     },
  // },
  // content: {
  //     liveEdit: false,
  // },
});
