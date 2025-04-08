import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // اضافه کردن ماژول path برای کار با مسیرها

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // تعریف @ به عنوان میانبر برای src
    },
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
