interface SiteData {
  name: String;
  description: String;
  lang?: String;
  currency: String;
  image: {
    src: String;
    alt: String;
  };
  defaultLayouts: {
    pages: 'default' | 'full' | 'split';
  };
  pageSize: Number;
}

export const siteData: SiteData = {
  name: 'HOPE Declaration',
  description: 'The HOPE Declaration',
  lang: 'en',
  currency: 'GBP',
  image: {
    src: '/social.webp',
    alt: 'The Hub at Oxford for Psychedelic Ethics logo',
  },
  defaultLayouts: {
    pages: 'default',
  },
  pageSize: 5,
};

export const socials = [
  {
    label: 'Instagram',
    icon: 'instagram',
    href: 'https://instagram.com/handle',
  },
  {
    label: 'Email',
    icon: 'mail',
    href: 'mailto:mail@email.com',
  },
  {
    label: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/handle',
  },
];

export const languages = [
  {
    lang: 'en',
    slug: 'en',
  },
  {
    lang: 'es',
    slug: 'es',
  },
  {
    lang: 'fr',
    slug: 'fr',
  },
];

export const allTranslations = {
  en: {
    siteTitle: 'HOPE Declaration',
    pdfLink: 'download PDF',
    versions: 'Versions',
    versionText: {
      en: 'English',
      fr: 'French',
      es: 'Spanish',
      'es-419': 'Spanish (Latin America)',
      'pt-BR': 'Portuguese (BR)',
      nl: 'Dutch',
      de: 'German',
    },
    en: 'English',
    langChooser: 'Languages',
    toc: 'Table of contents',
    navMain: 'Main navigation',
    navLang: 'Available languages',
  },
  fr: {
    siteTitle: 'HOPE Déclaration',
    pdfLink: 'télécharger PDF',
    versions: 'Versions',
    versionText: {
      en: 'Anglais',
      fr: 'Francais',
      es: 'Espagnol',
      'es-419': 'Espagnol (Amérique latine)',
      'pt-BR': 'Portugais (BR)',
      nl: 'Dutch',
      de: 'Allemand',
    },
    en: 'Anglais',
    langChooser: 'Langues',
    toc: 'Tableau de contents',
    navMain: 'Principal navigation',
    navLang: 'Disponible langues',
  },
  es: {
    siteTitle: 'HOPE Declaración',
    pdfLink: 'descargar PDF',
    versions: 'Versiones',
    versionText: {
      en: 'Inglés',
      fr: 'Francés',
      es: 'Español',
      'es-419': 'Español (América Latina)',
      'pt-BR': 'Portugués (BR)',
      nl: 'Holandés',
      de: 'Alemán',
    },
    en: 'Inglese',
    langChooser: 'Idiomas',
    toc: 'Tavola a contents',
    navMain: 'Principal navegación',
    navLang: 'Disponible idiomas',
  },
  'es-419': {
    siteTitle: 'HOPE Declaración',
    pdfLink: 'descargar PDF',
    versions: 'Versiones',
    versionText: {
      en: 'Inglés',
      fr: 'Francés',
      es: 'Español',
      'es-419': 'Español (América Latina)',
      'pt-BR': 'Portugués (BR)',
      nl: 'Holandés',
      de: 'Alemán',
    },
    en: 'Inglese',
    langChooser: 'Idiomas',
    toc: 'Tavola a contents',
    navMain: 'Principal navegación',
    navLang: 'Disponible idiomas',
  },
  'pt-BR': {
    siteTitle: 'HOPE Declaração',
    pdfLink: 'download do PDF',
    versions: 'Versões',
    versionText: {
      en: 'Inglês',
      fr: 'Francês',
      es: 'Espanhol',
      'es-419': 'Espanhol (América Latina)',
      'pt-BR': 'Português (BR)',
      nl: 'Holandês',
      de: 'Alemão',
    },
    en: 'Inglês',
    langChooser: 'Idiomas',
    toc: 'Tabela de conteúdo',
    navMain: 'Navegação principal',
    navLang: 'Idiomas disponíveis',
  },
  nl: {
    siteTitle: 'HOPE Verklaring',
    pdfLink: 'PDF downloaden',
    versions: 'Versies',
    versionText: {
      en: 'Engels',
      fr: 'Frans',
      es: 'Spaans',
      'es-419': 'Spaans (Latijns-Amerika)',
      'pt-BR': 'Portugees (BR)',
      nl: 'Nederlands',
      de: 'Engels',
    },
    en: 'Engels',
    langChooser: 'Talen',
    toc: 'Inhoudsopgave',
    navMain: 'Hoofdnavigatie',
    navLang: 'Beschikbare talen',
  },
  de: {
    siteTitle: 'HOPE Erklärung',
    pdfLink: 'PDF herunterladen',
    versions: 'Fassungen',
    versionText: {
      en: 'Englisch',
      fr: 'Französisch',
      es: 'Spanisch',
      'es-419': 'Spanisch (Lateinamerika)',
      'pt-BR': 'Portugiesisch (BR)',
      nl: 'Niederländisch',
      de: 'Deutsch',
    },
    en: 'Englisch',
    langChooser: 'Sprachen',
    toc: 'Inhaltsübersicht',
    navMain: 'Hauptnavigation',
    navLang: 'Verfügbare Sprachen',
  },
};

export const navData = [
  {
    name: 'Statement',
    href: '/',
    lang: 'en',
  },
  {
    name: 'Resources',
    href: '/resources',
    lang: 'en',
  },
  {
    name: 'Déclaration',
    href: '/fr',
    lang: 'fr',
  },
  {
    name: 'Ressources',
    href: '/fr/ressources',
    lang: 'fr',
  },
  {
    name: 'Declaración',
    href: '/es',
    lang: 'es',
  },
  {
    name: 'Recursos',
    href: '/es/recursos',
    lang: 'es',
  },
  {
    name: 'Declaración',
    href: '/es-419',
    lang: 'es-419',
  },
  {
    name: 'Recursos',
    href: '/es-419/recursos',
    lang: 'es-419',
  },
  {
    name: 'Declaração',
    href: '/pt-br',
    lang: 'pt-BR',
  },
  {
    name: 'Recursos',
    href: '/pt-br/recursos',
    lang: 'pt-BR',
  },
  {
    name: 'Erklärung',
    href: '/de',
    lang: 'de',
  },
  {
    name: 'Ressourcen',
    href: '/de/ressourcen',
    lang: 'de',
  },
  {
    name: 'Verklaring',
    href: '/nl',
    lang: 'nl',
  },
  {
    name: 'Middelen',
    href: '/nl/middelen',
    lang: 'nl',
  },
];

export const langNavData = [
  {
    name: 'English',
    href: '/',
    lang: 'en',
  },
  {
    name: 'French',
    href: '/fr',
    lang: 'en',
  },
  {
    name: 'Spanish',
    href: '/es',
    lang: 'en',
  },
  {
    name: 'Spanish (Latin Am)',
    href: '/es-419',
    lang: 'en',
  },
  {
    name: 'Portuguese (BR)',
    href: '/pt-br',
    lang: 'en',
  },
  {
    name: 'Dutch',
    href: '/nl',
    lang: 'en',
  },
  {
    name: 'German',
    href: '/de',
    lang: 'en',
  },
  {
    name: 'Anglais',
    href: '/',
    lang: 'fr',
  },
  {
    name: 'Francais',
    href: '/fr',
    lang: 'fr',
  },
  {
    name: 'Espagnol',
    href: '/es',
    lang: 'fr',
  },
  {
    name: 'Espagnol (Amérique latine)',
    href: '/es-419',
    lang: 'fr',
  },
  {
    name: 'Portugais (BR)',
    href: '/pt-br',
    lang: 'fr',
  },
  {
    name: 'Néerlandais',
    href: '/nl',
    lang: 'fr',
  },
  {
    name: 'Allemand',
    href: '/de',
    lang: 'fr',
  },
  {
    name: 'Inglés',
    href: '/',
    lang: 'es',
  },
  {
    name: 'Francés',
    href: '/fr',
    lang: 'es',
  },
  {
    name: 'Español',
    href: '/es',
    lang: 'es',
  },
  {
    name: 'Español (Latinoamérica)',
    href: '/es-419',
    lang: 'es',
  },
  {
    name: 'Portugués (BR)',
    href: '/pt-br',
    lang: 'es',
  },
  {
    name: 'Holandés',
    href: '/nl',
    lang: 'es',
  },
  {
    name: 'Alemán',
    href: '/de',
    lang: 'es',
  },
  {
    name: 'Inglés',
    href: '/',
    lang: 'es-419',
  },
  {
    name: 'Francés',
    href: '/fr',
    lang: 'es-419',
  },
  {
    name: 'Español',
    href: '/es',
    lang: 'es-419',
  },
  {
    name: 'Español (Latinoamérica)',
    href: '/es-419',
    lang: 'es-419',
  },
  {
    name: 'Portugués (BR)',
    href: '/pt-br',
    lang: 'es-419',
  },
  {
    name: 'Holandés',
    href: '/nl',
    lang: 'es-419',
  },
  {
    name: 'Aléman',
    href: '/de',
    lang: 'es-419',
  },
  {
    name: 'Inglês',
    href: '/',
    lang: 'pt-BR',
  },
  {
    name: 'Francês',
    href: '/fr',
    lang: 'pt-BR',
  },
  {
    name: 'Espanhol',
    href: '/es',
    lang: 'pt-BR',
  },
  {
    name: 'Espanhol (América Latina)',
    href: '/es-419',
    lang: 'pt-BR',
  },
  {
    name: 'Português (BR)',
    href: '/pt-br',
    lang: 'pt-BR',
  },
  {
    name: 'Holandês',
    href: '/nl',
    lang: 'pt-BR',
  },
  {
    name: 'Alemão',
    href: '/de',
    lang: 'pt-BR',
  },
  {
    name: 'Engels',
    href: '/',
    lang: 'nl',
  },
  {
    name: 'Frans',
    href: '/fr',
    lang: 'nl',
  },
  {
    name: 'Spaans',
    href: '/es',
    lang: 'nl',
  },
  {
    name: 'Spaans (Latijns-Amerika)',
    href: '/es-419',
    lang: 'nl',
  },
  {
    name: 'Portugees (BR)',
    href: '/pt-br',
    lang: 'nl',
  },
  {
    name: 'Nederlands',
    href: '/nl',
    lang: 'nl',
  },
  {
    name: 'Duits',
    href: '/de',
    lang: 'nl',
  },
  {
    name: 'Englisch',
    href: '/',
    lang: 'de',
  },
  {
    name: 'Französisch',
    href: '/fr',
    lang: 'de',
  },
  {
    name: 'Spanisch',
    href: '/es',
    lang: 'de',
  },
  {
    name: 'Spanisch (Lateinamerika)',
    href: '/es-419',
    lang: 'de',
  },
  {
    name: 'Portugiesisch (BR)',
    href: '/pt-br',
    lang: 'de',
  },
  {
    name: 'Niederländisch',
    href: '/nl',
    lang: 'de',
  },
  {
    name: 'Deutsch',
    href: '/de',
    lang: 'de',
  },
];
