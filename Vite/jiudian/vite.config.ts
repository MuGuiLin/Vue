import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin, NutuiResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [
        NutuiResolve(),
      ]
    })
  ],
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@views': resolve(__dirname, 'src/views'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@enums': resolve(__dirname, 'src/enums'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@comps': resolve(__dirname, 'src/components'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss"; @import "./src/themes/global.scss";`
      }
    }
  },
  server: {
    host: true,
    open: true,
    port: 3000,
    hmr: {
      overlay: false
    },
    proxy: {
      '/api': {
        target: '//api.jiudianmanhua.me/api/v1',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
