import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import metaTags from 'astro-meta-tags';

import tunnel from 'astro-tunnel';

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
  integrations: [tailwind(), icon(), metaTags(), tunnel()],
});
