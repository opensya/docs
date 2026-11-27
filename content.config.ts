import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const blogSchema = z.object({
  subtitle: z.string().optional(),
  author: z.string().optional(),
  date: z.string().optional(),
  category: z.string().optional(),
  categories: z.string().array().optional().default([]),
  cover: z.string().optional(),
});

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: "page",
      source: {
        include: "en/others/**/*.md",
        prefix: "",
      },
      schema: blogSchema,
    }),
    content_fr: defineCollection({
      type: "page",
      source: {
        include: "fr/others/**/*.md",
        prefix: "",
      },
      schema: blogSchema,
    }),
    content_pt: defineCollection({
      type: "page",
      source: {
        include: "pt/others/**/*.md",
        prefix: "",
      },
      schema: blogSchema,
    }),

    content_blog_en: defineCollection({
      type: "page",
      source: {
        include: "en/blog/**/.md",
        prefix: "",
      },
      schema: blogSchema,
    }),
    content_blog_fr: defineCollection({
      type: "page",
      source: {
        include: "fr/blog/**/*.md",
        prefix: "",
      },
      schema: blogSchema,
    }),
    content_blog_pt: defineCollection({
      type: "page",
      source: {
        include: "pt/blog/**/*.md",
        prefix: "",
      },
      schema: blogSchema,
    }),
  },
});
