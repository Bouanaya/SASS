import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  // server: {
  //   host: '192.168.0.143', // Listen on all IP addresses
  //   port: 3000,      // Specify the port
  // },
  resolve: {
    
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
