document.getElementById('openPip').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0 && tabs[0].url) {
      chrome.tabs.sendMessage(tabs[0].id, { 
        action: "open_companion_window", 
        url: tabs[0].url 
      });
    }
  });
  window.close();
});

document.getElementById('openPopup').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'open_popup_current_tab' });
  window.close();
});