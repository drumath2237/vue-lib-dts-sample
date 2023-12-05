import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ exclude: ['src/main.ts'] })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vue-component-dts',
      fileName: 'index',
      formats: ['es', 'umd']
    }
  }
})
