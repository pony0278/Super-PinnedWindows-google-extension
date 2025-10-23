// 監聽來自 background.js 的訊息，要求更新 iframe 的 URL
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "load_url_in_sidepanel") {
    const iframe = document.getElementById('content-frame');
    if (iframe && request.url) {
      iframe.src = request.url;
    }
  }
});

// 當 side panel 第一次被開啟時，主動向 background 請求 URL
// 這能確保即使 panel 已經被關閉後重新打開，也能載入正確的 URL
chrome.runtime.sendMessage({ action: "get_sidepanel_url" });