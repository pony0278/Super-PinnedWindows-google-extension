chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "load_url_in_sidepanel") {
    const iframe = document.getElementById('content-frame');
    if (iframe && request.url) {
      iframe.src = request.url;
    }
  }
});

chrome.runtime.sendMessage({ action: "get_sidepanel_url" });