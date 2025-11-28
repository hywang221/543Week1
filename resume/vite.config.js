import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          '@babel/plugin-transform-react-jsx',  // 处理 JSX 语法
          
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {}
      }
    }
  },
  // base: '/resume/dist',
  base: process.env.NODE_ENV === 'production' ? '/resume/dist' : '/',
  // build: {
  //   outDir: '/resume/dist'
  // }
});
