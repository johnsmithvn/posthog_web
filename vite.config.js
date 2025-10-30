import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      // JS assets & config
      '/static': { target: 'https://api-compass-25.leanflag.net', changeOrigin: true, secure: true },
      '/array':  { target: 'https://api-compass-25.leanflag.net', changeOrigin: true, secure: true },
      // Ingestion & flags (thường dùng)
      '/e':      { target: 'https://api-compass-25.leanflag.net', changeOrigin: true, secure: true },
      '/flags':  { target: 'https://api-compass-25.leanflag.net', changeOrigin: true, secure: true },
      // Dự phòng cho các tính năng khác
      '/decide': { target: 'https://api-compass-25.leanflag.net', changeOrigin: true, secure: true },
      '/s/':      { target: 'https://api-compass-25.leanflag.net', changeOrigin: true, secure: true },
      '/api':    { target: 'https://api-compass-25.leanflag.net', changeOrigin: true, secure: true },
    },
  },
})
