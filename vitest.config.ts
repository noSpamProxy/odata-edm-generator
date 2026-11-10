import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@netatwork/odata-edm-generator': fileURLToPath(new URL('./src/api/index.ts', import.meta.url)),
    },
  },
  test: {
    include: ['tests/**/*.spec.ts'],
    setupFiles: ['./tests/setup.ts'],
  },
});
