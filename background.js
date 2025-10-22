chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-link-as-pip",
    title: "Open Link as PiP (Always-on-Top)",
    contexts: ["link"]
  });
  chrome.contextMenus.create({
    id: "open-link-as-popup",
    title: "Open Link as Popup (Multiple)",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-link-as-pip" && info.linkUrl) {
    chrome.tabs.sendMessage(tab.id, { 
      action: "open_companion_window", 
      url: info.linkUrl 
    });
  }
  if (info.menuItemId === "open-link-as-popup" && info.linkUrl) {
    openAsPopup(info.linkUrl);
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'open_popup_current_tab') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        openAsPopup(tabs[0].url);
      }
    });
  }
  return true; 
});


function openAsPopup(url) {
  if (!url || (!url.startsWith('http://') && !url.startsWith('https://'))) {
    console.log("Invalid URL for popup window.");
    return;
  }
  
  chrome.runtime.getPlatformInfo((platformInfo) => {
    const createData = {
      url: url,
      type: 'popup',
      width: 800,
      height: 600
    };
    if (platformInfo.os !== 'win') {
      createData.alwaysOnTop = true;
    }
    chrome.windows.create(createData);
  });
}