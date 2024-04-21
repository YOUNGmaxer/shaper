import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ChromeExtensionBuilder } from 'vite-plugin-chrome-builder'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  root: 'src/content',
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
      imports: [
        'vue',
        'pinia',
        {
          'ant-design-vue': ['Modal'],
        },
      ],
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/popup.html'),
        content: resolve(__dirname, 'src/content/index.html'),
        'content-script': resolve(__dirname, 'src/content/content-script.ts'),
        'service-worker': resolve(__dirname, 'src/background/service-worker.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
