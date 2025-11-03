import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Shared API target used by the dev server proxy
const API_TARGET = 'api'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      // JS assets & config
      '/static': { target: API_TARGET, changeOrigin: true, secure: true },
      '/array':  { target: API_TARGET, changeOrigin: true, secure: true },
      // Ingestion & flags (thường dùng)
      '/e':      { target: API_TARGET, changeOrigin: true, secure: true },
      '/flags':  { target: API_TARGET, changeOrigin: true, secure: true },
      // Dự phòng cho các tính năng khác
      '/decide': { target: API_TARGET, changeOrigin: true, secure: true },
      '/s/':      { target: API_TARGET, changeOrigin: true, secure: true },
      '/api':    { target: API_TARGET, changeOrigin: true, secure: true },
    },
  },
})
