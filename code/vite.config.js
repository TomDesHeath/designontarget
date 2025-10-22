import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProduction = process.env.NODE_ENV === 'production'
const isVercel = Boolean(process.env.VERCEL)
const productionBasePath = '/designontarget/'

export default defineConfig({
  plugins: [react()],
  // Use the repository path when deploying to GitHub Pages (non-Vercel)
  base: isProduction && !isVercel ? productionBasePath : '/',
})
