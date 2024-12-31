import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const excludeFiles = [
  'node_modules',
  'dist',
  'coverage',
  'plop-templates',
  'public',
  '.husky',
  'src/assets',
  'src/mocks',
  'src/store',
  '**/index.js',
];

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    include: ['src/**/*.test.{js,ts,jsx,tsx}'],
    exclude: [...excludeFiles],
    coverage: {
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      exclude: [...excludeFiles],
    },
  },
});
