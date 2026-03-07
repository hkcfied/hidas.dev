import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  css: {
    modules: {
      generateScopedName: '[hash:base64:5]',
    },
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        properties: false,
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[hash:10][extname]',
        chunkFileNames: 'assets/[hash:10].js',
        entryFileNames: 'assets/[hash:10].js',
      },
    },
  },
})
