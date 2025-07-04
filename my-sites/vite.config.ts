import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        company: path.resolve(__dirname, 'public/company.html'),
        product: path.resolve(__dirname, 'public/product.html'),
      }
    }
  }
})