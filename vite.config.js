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
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'framer-motion';
          if (id.includes('react-router') || id.includes('@remix-run')) return 'router';
          if (id.includes('lucide-react')) return 'icons';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
}));
