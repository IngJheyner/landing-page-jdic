import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueform from '@vueform/vueform/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueform()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
