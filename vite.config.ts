import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CPSC481-Social-Media-Network',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 // Increase limit to 1MB
  }
})
