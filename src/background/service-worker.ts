import { startWebSocketClient } from 'vite-plugin-chrome-builder/dist/ws/client'

chrome.runtime.onInstalled.addListener((details) => {
  startWebSocketClient('ws://localhost:7878')
})
