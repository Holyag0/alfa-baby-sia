import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://alfa_sia.com',
        changeOrigin: true,
        secure: false,
      },
    },
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
  build: { outDir: 'public/build', },
  base: '/',
});
