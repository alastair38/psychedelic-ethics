import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'fr', 'es-419', 'nl', 'de', 'pt-br'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), icon()],
});
