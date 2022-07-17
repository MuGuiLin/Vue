import { resolve } from 'path'
import { defineConfig, UserConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((config: UserConfig) => {

  return {
    plugins: [vue()],

    base: '/',

    mode: (config.mode || process.env.NODE_ENV),

    publicDir: 'public',

    cacheDir: 'node_modules/.vite',

    resolve: {
      alias: {
        '~': resolve(__dirname, './'),
        '@': resolve(__dirname, 'src'),
        '@api': resolve(__dirname, 'src/api'),
        '@coms': resolve(__dirname, 'src/components'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@views': resolve(__dirname, 'src/views'),
      },
      extensions: ['.js', '.ts', 'css', 'scss', '.json', '.vue', '*']
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@nutui/nutui/dist/styles/variables.scss"; @import "src/themes/global.scss";`
        }
      }
    },

    server: {
      host: true,
      port: 666,
      strictPort: 888,
      open: false,
      https: false,
      proxy: {
        '/api': {
          target: 'http://dev-api.xhbigdata.com',
          cors: true,
          changeOrigin: true,
          rewrite(path) {
            return path.replace(/^\/api/, '')
          },
        }
      }
    },

    build: {
      outDir: 'dist',
      target: 'modules',
      assetsDir: 'assets',
      assetsInlineLimit: 360000
    }
  }
});
