// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(fortis): confirm the production domain before launch. It is baked into
// canonicals, Open Graph URLs and the sitemap.
export default defineConfig({
  site: 'https://www.fortisk2cleaning.com',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') })],
  build: { inlineStylesheets: 'auto', format: 'directory' },
  image: { responsiveStyles: true },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  compressHTML: true,
});
