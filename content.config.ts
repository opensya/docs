import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md',
    }),

    docs: defineCollection({
      type: 'page',
      source: {
        include: 'docs/**',
        exclude: ['docs/index.md'],
      },
      schema: z.object({
        links: z
          .array(
            z.object({
              label: z.string(),
              title: z.string(),
              icon: z.string(),
              to: z.string(),
              target: z.string().optional(),
            }),
          )
          .optional(),
      }),
    }),

    persistence: defineCollection({
      type: 'page',
      source: {
        include: 'persistence/**',
        // exclude: ['persistence/index.md'],
      },
      schema: z.object({
        links: z
          .array(
            z.object({
              label: z.string(),
              title: z.string(),
              icon: z.string(),
              to: z.string(),
              target: z.string().optional(),
            }),
          )
          .optional(),
      }),
    }),
  },
});
