import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/install.js'),
      name: 'VgGradientText',
      fileName: 'vg-gradient-text',
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@helpers': path.resolve(__dirname, 'src', 'helpers'),
      '@images': path.resolve(__dirname, 'images'),
    },
  },
});
