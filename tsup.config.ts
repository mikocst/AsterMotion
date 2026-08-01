import path from 'node:path';
import { defineConfig } from 'tsup';

const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  entry: { index: 'src/components/Library/index.ts' },
  outDir: 'lib-dist',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  external: ['react', 'react-dom', 'motion', 'motion/react'],
  esbuildOptions(options) {
    options.alias = {
      ...options.alias,
      '@types': r('src/types/index.ts'),
      '@components/Button': r('src/components/Button.tsx'),
      'src/lib/utils': r('src/lib/utils.ts'),
      'src/lib/utils/mergedRefs': r('src/lib/utils/mergedRefs.ts'),
    };
  },
});
