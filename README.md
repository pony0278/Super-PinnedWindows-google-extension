# Super Pinned Windows (Chrome Extension) ![Logo](icons/icon48.png)

**Super Pinned Windows** is a powerful Chrome extension designed to fundamentally change your multitasking workflow. It allows you to float any webpage tab or link using two distinct and powerful modes:


1.  **PiP Mode (Picture-in-Picture):** A single, **truly always-on-top**, interactive window that floats above all your other applications.
2.  **Popup Mode (Popup Window):** A flexible, independent, and minimal browser window that you can **open multiple times**.

---

## 🌟 Features at a Glance

<table align="center">
  <tr>
    <td><img src="images/demo.gif" width="400"></td>
    <td width="40"></td>
    <td><img src="images/demo2.gif" width="400"></td>
  </tr>
</table>


---

## ✨ Core Functionality

* **Dual Float Modes:** Freely choose between a "PiP Always-on-Top" or a "Popup Window" based on your needs.
* **Works on Any Site:** Thanks to advanced request modification, PiP Mode can load *any* website, including Google and YouTube, bypassing `X-Frame-Options` restrictions.
* **Fully Interactive:** Windows in both modes are fully functional browsers, allowing you to log in, scroll, click, and type.
* **Right-Click Context Menu:** Right-click any link to choose which mode to open it in.
* **Multi-Window Support:** You can have one PiP window open and **simultaneously** open as many Popup windows as you need.
* **Cross-Platform Topmost:** Popup Mode automatically enables "Always-on-Top" on macOS and Linux.

---

## 🤔 Which Mode Should I Use?

These two modes are designed to solve different problems:

### 1. PiP Mode (Always-on-Top)

This is your **single, powerful, pinned** option. It will always remain visible above every other window.

**Best For:**
* Watching a tutorial video or live stream while working.
* Monitoring a stock chart, dashboard, or social media feed.
* Keeping reference material or notes visible at all times.

**Limitations:**
* You can only have **one** PiP window open at a time.
* The window is tied to its original tab; closing the original tab will also close the PiP window.

### 2. Popup Mode (Popup Window)

This is your **multitasking, flexible** option. It creates an independent, minimal browser window.

**Best For:**
* Opening **multiple** reference pages and spreading them across your screen.
* Popping out a temporary chat window (like Discord or Slack) to keep in the corner.
* The window is fully independent; closing the original tab **will not** affect it.

**Limitations:**
* On the **Windows OS**, this mode **cannot** be made "Always-on-Top" by the extension alone.

---

## 🚀 How to Use

### 1. For Your Current Tab
1.  Click the extension icon in your Chrome toolbar.
2.  From the dropdown, choose:
    * **PiP Window (Always-on-Top)**: Opens the current tab in PiP mode.
    * **Popup Window (Multiple)**: Opens the current tab in a new popup window.

### 2. For Any Link on a Page
1.  Right-click on any link on any webpage.
2.  From the context menu, select:
    * **Open Link as PiP (Always-on-Top)**
    * **Open Link as Popup (Multiple)**

---

## 🖥️ A Special Note for Windows Users

As mentioned, Popup Mode cannot be programmatically set to "Always-on-Top" on Windows.

**Recommended Solution:**
We strongly recommend installing **[Microsoft PowerToys](https://learn.microsoft.com/en-us/windows/powertoys/)**, a free and official utility suite from Microsoft.

1.  Install PowerToys (available from the Microsoft Store).
2.  Enable the "Always on Top" module within PowerToys.
3.  Use this extension to open a **"Popup Window"**.
4.  Click the new popup window to focus it, then press the shortcut `⊞ Win` + `Ctrl` + `T` to manually pin it on top.

---

## 🛠️ Installation

### Option A: From the Chrome Web Store (Future)
`[Coming Soon]`

### Option B: Manual Installation (Developer Mode)
1.  Clone this repository or download and unzip the project folder.
2.  Open your Chrome browser and navigate to `chrome://extensions/`.
3.  Enable the **"Developer mode"** toggle in the top-right corner.
4.  Click the **"Load unpacked"** button in the top-left.
5.  Select the unzipped project folder.
6.  The extension is now installed and ready to use!

---

## 🔬 How It Works (The Technical Part)

This extension combines two distinct Chrome APIs to achieve its functionality:

* **PiP Mode:** Uses the `documentPictureInPicture` API to create the native, always-on-top window shell. To load **any** website, it opens the page in an `<iframe>` and simultaneously uses the `declarativeNetRequest` API to intercept and remove the `X-Frame-Options` and `Content-Security-Policy` headers from the server's response, bypassing the embedding restrictions.

* **Popup Mode:** Uses the `chrome.windows.create({ type: 'popup' })` API to create a minimal window without the browser UI. The script uses `chrome.runtime.getPlatformInfo` to detect the OS and automatically adds the `alwaysOnTop: true` parameter on non-Windows systems to provide the best native experience.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).