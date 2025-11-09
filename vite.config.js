import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // skida ~ prefiks iz CSS import-a (ako se pojavi)
      { find: /^~(.*)$/, replacement: '$1' },

      // '@' -> /src
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
  // >>> ukloni bilo kakav "define: { 'process.env': process.env }" ako ga ima <<<
})
