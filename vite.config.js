import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv('', process.cwd())

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.PUBLIC_URL': JSON.stringify(env.PUBLIC_URL)
  },
  plugins: [react()],
  server: {
    port: 8080,
  },
  base: '/',
})
