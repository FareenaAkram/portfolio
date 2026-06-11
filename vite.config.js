import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // '/portfolio/' in production so asset URLs resolve correctly on GitHub Pages.
  // '/' in dev so localhost:3000 works without a subpath.
  base: command === 'build' ? '/portfolio/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
}));
