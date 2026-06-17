import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@components': 'src/components/index.ts',
        '@types': 'src/types/index.ts',
        '@assets': 'public/assets',
      },
    },
  }
});