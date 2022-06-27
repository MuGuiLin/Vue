import { resolve } from 'path'
import { defineConfig, UserConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((config: UserConfig) => {

  return {
    plugins: [vue()],

    base: (config.mode || process.env.NODE_ENV) === 'development' ? '/' : './',

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
          additionalData: `@import "@nutui/nutui/dist/styles/variables.scss"; @import "src/themes/global.scss";`
        }
      }
    },
  }
});
