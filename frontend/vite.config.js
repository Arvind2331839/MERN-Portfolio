import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // mode (development / production) ke hisaab se env load hoga
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,   // yaha env variable use kar sakte ho
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
