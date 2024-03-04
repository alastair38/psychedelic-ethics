// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';

const reservedWidths = ['default', 'full', 'split'] as const;
// 2. Define a `type` and `schema` for each collection
const pagesCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      language: z.string(),
      languageCode: z.string(),
      image: image().optional(),
      alt: z.string().optional(),
      file: z.string().optional(),
      otherLanguages: z.array(reference('pages')).optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  pages: pagesCollection,
};
