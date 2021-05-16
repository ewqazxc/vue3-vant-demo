import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: "./", //打包路径
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), //设置别名
    },
  },
  server: {
    port: 3000, //启动端口
    open: false,
    proxy: {
      // 选项写法
      "/api": "http://192.168.1.69:8080", //代理网址
    },
    cors: true,
  },
});

// 反向代理
// proxy: {
//     '/api': {
//     target: 'https://blog.csdn.net/weixin_45292658',
//     changeOrigin: true,
//     rewrite: path => path.replace(/^\/api/, '')
//     }
// },
