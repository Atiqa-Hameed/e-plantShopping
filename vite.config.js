import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/shoppingreact/', // Add this line to set the base path
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
