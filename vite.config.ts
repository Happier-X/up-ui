import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['packages/**/*.ts', 'packages/**/*.vue'],
      outDir: 'dist',
      staticImport: true,
      insertTypesEntry: true,
      rollupTypes: true
    })
  ],
  resolve: {
    alias: {
      '@up-ui/utils': resolve(__dirname, 'packages/utils/index.ts'),
      '@up-ui/hook': resolve(__dirname, 'packages/hook/index.ts'),
      '@up-ui/components': resolve(__dirname, 'packages/components/index.ts')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'HakimiUI',
      fileName: (format) => `hakimi-ui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        // 导出 CSS 文件
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css'
          return assetInfo.name as string
        }
      }
    }
  }
})
