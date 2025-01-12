import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ['react-router-dom', 'tailwindcss'],
    optimizeDeps: {
      exclude: ['@sanity/client']
    }
  },
  build: {
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    ssrEmitAssets: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@sanity/client']
  }
});