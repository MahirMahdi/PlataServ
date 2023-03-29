import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 * 1024
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
