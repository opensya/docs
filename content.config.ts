import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    docsLanding: defineCollection({
      type: 'page',
      source: 'docs/index.md',
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
  },
});
