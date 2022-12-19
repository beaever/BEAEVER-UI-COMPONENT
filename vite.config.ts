import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
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
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@src': path.resolve('src/'),
      '@components': path.resolve('src/components'),
      '@hooks': path.resolve('src/hooks'),
      '@styles': path.resolve('src/styles'),
      '@general': path.resolve('src/components/general'),
      '@layout': path.resolve('src/components/layout'),
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
