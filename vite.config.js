import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  plugins: [react()],
  // Ensure assets work when the site is served from a GitHub Pages sub-path
  base: repositoryName ? `/${repositoryName}/` : '/',
})
