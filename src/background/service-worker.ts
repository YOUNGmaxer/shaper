import { Event } from '@/modules/event'
import { startWebSocketClient } from 'vite-plugin-chrome-builder/dist/ws/client'

chrome.runtime.onInstalled.addListener(() => {
  startWebSocketClient('ws://localhost:7878')
})

// 点击插件图标时触发
chrome.action.onClicked.addListener((currentTab) => {
  if (!currentTab.id) return
  chrome.tabs.sendMessage(currentTab.id, JSON.stringify({ type: Event.IconClicked }))
})
