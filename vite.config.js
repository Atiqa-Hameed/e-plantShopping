// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './src', // specify the root folder if needed
  build: {
    outDir: '../dist' // ensure the output directory is correct
  }
})
