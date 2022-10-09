import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), jsx({
      transformOn: true,
      mergeProps: true,
    })
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'css', 'less', '.json', '.vue', '*']
  },
  build: {
    outDir: 'dist',
    target: 'modules',
    assetsDir: 'assets',
    assetsInlineLimit: 360000
  }

});
