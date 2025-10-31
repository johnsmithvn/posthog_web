import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      // JS assets & config
      '/static': { target: 'api_host', changeOrigin: true, secure: true },
      '/array':  { target: 'api_host', changeOrigin: true, secure: true },
      // Ingestion & flags (thường dùng)
      '/e':      { target: 'api_host', changeOrigin: true, secure: true },
      '/flags':  { target: 'api_host', changeOrigin: true, secure: true },
      // Dự phòng cho các tính năng khác
      '/decide': { target: 'api_host', changeOrigin: true, secure: true },
      '/s/':      { target: 'api_host', changeOrigin: true, secure: true },
      '/api':    { target: 'api_host', changeOrigin: true, secure: true },
    },
  },
})
