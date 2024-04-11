import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ChromeExtensionBuilder } from 'vite-plugin-chrome-builder'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    UnoCSS(),
    ChromeExtensionBuilder(),
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: ['vue', 'pinia'],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/popup.html'),
        content: resolve(__dirname, 'src/content/content.html'),
        'content-script': resolve(__dirname, 'src/content/content-script.ts'),
        'service-worker': resolve(__dirname, 'src/background/service-worker.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
