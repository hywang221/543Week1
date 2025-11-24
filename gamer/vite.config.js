import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'
const resolve = (dir) => path.join(__dirname, dir)

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/gamer/dist' : '/',
});
