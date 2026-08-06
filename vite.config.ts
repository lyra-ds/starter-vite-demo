/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from https://lyra-ds.github.io/starter-vite-demo/ — a project page
  // lives under a sub-path, so assets need the matching base.
  base: '/starter-vite-demo/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['node_modules/**', 'dist/**'],
  },
})
