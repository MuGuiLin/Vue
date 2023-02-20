import { fileURLToPath, URL } from "node:url";
import type { UserConfig, loadEnv } from "vite";
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig((config: UserConfig) => {
  return {
    plugins: [vue(), vueJsx()],

    base: "/",

    mode: config.mode || process.env.NODE_ENV,

    publicDir: "public",

    cacheDir: "node_modules/.vite",

    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@api": fileURLToPath(new URL("./src/apis", import.meta.url)),
        "@com": fileURLToPath(new URL("./src/components", import.meta.url)),
      },
      extensions: [".js", ".ts", "css", "scss", ".json", ".vue", "*"],
    },

    server: {
      host: true,
      port: 666,
      strictPort: 888,
      open: true,
      https: false,
      proxy: {
        "/api": {
          target: `https://stanserver.cn`,
          cors: true,
          changeOrigin: true,
          rewrite(path) {
            return path.replace(/^\/api/, "");
          },
        },
      },
    },

    build: {
      outDir: "dist",
      target: "modules",
      assetsDir: "assets",
      assetsInlineLimit: 360000,
    },
  };
});
