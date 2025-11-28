import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // PostCSS (tailwindcss + autoprefixer) is configured via `postcss.config.cjs`.
  vite: {}
});