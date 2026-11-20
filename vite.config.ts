import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // CJS-only package; bundle it so the prerender step can import named exports.
  ssr: { noExternal: ['react-helmet-async'] },
})
