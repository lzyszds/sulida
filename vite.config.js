import { resolve } from "node:path";
import process from "node:process";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import autoprefixer from "autoprefixer";
import { VantResolver } from '@vant/auto-import-resolver';

import vitePluginRemoteDeploy from "vite-plugin-remote-deploy";
import fs from "fs";

const CWD = process.cwd();

export default ({ mode }) => {
  const env = loadEnv(mode, CWD);
  console.log(mode, env, CWD);
  return defineConfig({
    plugins: [
      vue(),
      VueDevTools(),
      // vitePluginRemoteDeploy({
      //   host: '43.134.163.159', // 服务器地址
      //   port: 22, // 服务器端口
      //   username: 'root', // 服务器用户名
      //   privateKey: fs.readFileSync('./id_rsa', "utf-8"), // 私钥
      //   remoteDirPath: '/www/wwwroot/wap.chuhai.best', // 服务器目录
      //   exclude: ['**/stats.html'], // 排除 stats.html 文件
      // }),
      Components({
        resolvers: [VantResolver()],
      }),
      AutoImport({
        imports: ["vue", "vue-router", "@vueuse/core", "pinia"],
        dts: './src/auto-imports.d.ts', // 修改为相对路径
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(CWD, "src/assets/svg")],
        symbolId: "svg-icon-[dir]-[name]",
      }),
      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true,
        filename: "dist/stats.html",
      }),
      viteCompression({
        verbose: true,
        disable: true, // 你这里禁用了，可以按需开启
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
      }),
      ViteImageOptimizer(),
    ],
    build: {
      target: 'esnext',
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // 将 node_modules 中的第三方库合并为一个 chunk
              return 'vendor';
            }

            if (id.includes('src/components')) {
              // 将 src/components 中的组件合并到一个 chunk
              return 'components';
            }
          },
        },
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    server: {
      host: "localhost",
      open: false,
      port: 1234,
    },
  });
};
