let visible = false
let content = createContentIframe()

function createContentIframe(): HTMLIFrameElement {
  const iframe = document.createElement('iframe')
  iframe.className = 'azer-shaper'
  iframe.style.cssText =
    'height: 100%; width: 500px; position: fixed; top: 0; right: 0; z-index: 99999; border: none; transform: translateX(500px); transition: all .4s; box-shadow: 0 0 15px 2px rgba(0,0,0,0.12);'
  iframe.src = chrome.runtime.getURL('src/content/content.html')
  return iframe
}

/** 插件内容显示开关 */
function toggleContent() {
  content.style.setProperty('transform', visible ? 'translateX(0)' : 'translateX(500px)', 'important')
}

/** 监听插件按钮点击 */
function listenIconClicked() {
  chrome.runtime.onMessage.addListener((message) => {
    if (JSON.parse(message).type === 'IconClicked') {
      visible = !visible
      toggleContent()
    }
  })
}

function insertContent() {
  document.body.appendChild(content)
}

insertContent()
listenIconClicked()
