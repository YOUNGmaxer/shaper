function insertContent() {
  const iframe = document.createElement('iframe')
  iframe.className = 'azer-shaper'
  iframe.style.cssText = 'height: 100%; width: 500px; position: fixed; top: 0; right: 0; z-index: 99999; border: none'
  iframe.src = chrome.runtime.getURL('src/content/content.html')

  document.body.appendChild(iframe)
}

insertContent()
