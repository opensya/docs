import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    // English content collection
    content_en: defineCollection({
      type: "page",
      source: {
        include: "en/**",
        prefix: "",
      },
    }),
    // French content collection
    content_fr: defineCollection({
      type: "page",
      source: {
        include: "fr/**",
        prefix: "",
      },
    }),
    // Farsi content collection
    content_pt: defineCollection({
      type: "page",
      source: {
        include: "pt/**",
        prefix: "",
      },
    }),
  },
});
