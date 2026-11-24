import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cn } from 'cn/vite'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss(), cn()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
