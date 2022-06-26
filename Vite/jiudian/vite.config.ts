import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@views': resolve(__dirname, 'src/views'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss"; @import "./src/themes/global.scss";`
      }
    }
  },
})
