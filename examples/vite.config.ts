import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@hakimi-ui/utils": resolve(__dirname, "../packages/utils/index.ts"),
      "@hakimi-ui/hook": resolve(__dirname, "../packages/hook/index.ts"),
      "@hakimi-ui/components": resolve(__dirname, "../packages/components/index.ts"),
      "@hakimi-ui/theme": resolve(__dirname, "../packages/theme/src/index.css"),
    },
  },
})
