import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-01",
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],

  css: ["~/assets/css/main.css"],

  devtools: { enabled: true },

  runtimeConfig: {
    resendApiKey: "",
    contactFrom: "",
    public: {
      contactEmail: "",
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "fr" },
      title:
        "Opensya — Nous construisons des infrastructures open source pour les entreprises.",
      script: [
        {
          src: "https://analytics.runablejs.com/script.js",
          "data-website-id": "1ea69d0c-c562-4e72-9353-368df5a512c2",
        },
        {
          src: "https://analytics.runablejs.com/recorder.js",
          "data-website-id": "1ea69d0c-c562-4e72-9353-368df5a512c2",
        },
      ],

      meta: [
        {
          name: "description",
          content:
            "Automatisations et intégrations sur mesure, à prix fixe, livrées sous 48 heures. One problem. One solution. Delivered in 48 hours.",
        },
        { name: "theme-color", content: "#f56d00" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },

  nitro: {
    prerender: { routes: ["/"] },

    serverAssets: [
      {
        baseName: "templates",
        dir: fileURLToPath(new URL("./server/templates", import.meta.url)),
      },
    ],
  },

  ui: {
    colorMode: false,
  },

  i18n: {
    defaultLocale: "fr",
    strategy: "prefix_and_default",
    locales: [
      { code: "fr", name: "Français", file: "fr.json" },
      { code: "en", name: "English", file: "en.json" },
      { code: "pt", name: "Portuguese", file: "pt.json" },
    ],
  },
});
