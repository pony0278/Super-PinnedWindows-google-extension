chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "open_companion_window") {
    openCompanion(request.url);
    sendResponse({ status: "success" });
  }
  return true; 
});

async function openCompanion(url) {
  if (!("documentPictureInPicture" in window)) {
    alert("Your browser does not support Document Picture-in-Picture API.");
    return;
  }

  try {
    const pipWindow = await documentPictureInPicture.requestWindow({
      width: 800,
      height: 600,
    });

    const style = pipWindow.document.createElement('style');
    style.textContent = `
      body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
      iframe { width: 100%; height: 100%; border: none; }
    `;
    pipWindow.document.head.appendChild(style);
    
    const iframe = pipWindow.document.createElement('iframe');
    iframe.src = url;
    pipWindow.document.body.appendChild(iframe);

  } catch (error) {
    console.error("Failed to open companion window:", error);
  }
}