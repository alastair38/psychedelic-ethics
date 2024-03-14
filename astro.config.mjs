import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import metaTags from 'astro-meta-tags';
import tunnel from 'astro-tunnel';

// npm dist of sitemap does not currently work with i18n configuration if locale route contains numbers. Schema.ts https://github.com/withastro/astro/blob/main/packages/integrations/sitemap/src/schema.ts regex needs '\d' added after the '-'. Uncomment i18n config to build before deployment and add built sitemaps to public folder. Also uncomment sitemap link in SEO component. Then comment out i18n config to prevent sitemap build error when deploying
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://psychedelic-ethics.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'fr', 'es-419', 'nl', 'de', 'pt-BR'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    icon(),
    metaTags(),
    tunnel(),
    // sitemap({
    //   i18n: {
    //     defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
    //     locales: {
    //       en: 'en', // The `defaultLocale` value must present in `locales` keys
    //       es: 'es',
    //       fr: 'fr',
    //       'es-419': 'es-419',
    //       nl: 'nl',
    //       de: 'de',
    //       'pt-BR': 'pt-br',
    //     },
    //   },
    // }),
  ],
});
