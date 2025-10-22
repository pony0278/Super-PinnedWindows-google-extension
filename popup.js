document.getElementById('openPip').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'open_pip_current_tab' });
  window.close();
});

document.getElementById('openPopup').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'open_popup_current_tab' });
  window.close();
});