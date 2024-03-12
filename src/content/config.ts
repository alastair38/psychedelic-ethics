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
      language: z.string().optional(),
      languageCode: z.string().optional(),
      image: image().optional(),
      alt: z.string().optional(),
      file: z.string().optional(),
      otherLanguages: z.array(reference('pages')).optional(),
      translation: reference('translations'),
    }),
});

const translationCollection = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: () =>
    z.object({
      siteTitle: z.string(),
      pdfLink: z.string(),
      versions: z.string(),
      versionText: z.object({
        en: z.string(),
        fr: z.string(),
        es: z.string(),
        'es-419': z.string(),
        'pt-BR': z.string(),
        nl: z.string(),
        de: z.string(),
      }),
      langChooser: z.string(),
      toc: z.string(),
      navMainAria: z.string(),
      navMain: z.array(
        z.object({
          text: z.string(),
          url: z.string(),
        })
      ),
      navLang: z.array(
        z.object({
          text: z.string(),
          url: z.string(),
          lang: z.string(),
        })
      ),
      navLangAria: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  pages: pagesCollection,
  translations: translationCollection,
};
