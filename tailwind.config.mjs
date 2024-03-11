/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: ['data-footnote-backref', 'footnotes li p', 'footnotes'],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'lower-roman',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.data-footnote-backref': {
          display: 'inline-grid',
          height: '1.75rem',
          width: '1.75rem',
          'place-content': 'center',
          'border-radius': '50%',
          'font-family': 'sans-serif',
          'background-color': 'lightblue',
          'text-decoration': 'none',
        },
        '.footnotes li p': {
          margin: '0',
        },
        '.footnotes': {
          'margin-top': '2rem',
          'padding-block': '1rem',
          'border-top': '1px solid #e5e7eb',
        },
      });
    }),
  ],
};
