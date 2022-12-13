import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          [
            '@emotion/babel-plugin',
            {
              autoLabel: 'dev-only',
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve('src/'),
      '@components': path.resolve('src/components'),
    },
  },
});
