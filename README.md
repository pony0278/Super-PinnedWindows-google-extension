# Super Pinned Windows (Chrome Extension) ![Logo](icons/icon48.png)

###### *Open floating mini-windows anywhere with this Chrome extension — sneak a peek at videos or stocks or do anything while you work!*
![GitHub stars](https://img.shields.io/github/stars/pony0278/Super-PinnedWindows-google-extension?style=social)
![GitHub forks](https://img.shields.io/github/forks/pony0278/Super-PinnedWindows-google-extension?style=social)
![GitHub license](https://img.shields.io/github/license/pony0278/Super-PinnedWindows-google-extension)


**Super Pinned Windows** is a powerful Chrome extension designed to fundamentally change your multitasking workflow. It allows you to float any webpage tab or link using two distinct and powerful modes:


1. **PiP Mode (Picture-in-Picture):** A single, **truly always-on-top**, interactive window that floats above all your other applications.
2. **Popup Mode (Popup Window):** A flexible, independent, and minimal browser window that you can **open multiple times**.
3. **Side panel (Docked):** A fully interactive panel **locked to the side** of your main browser window, perfect for persistent companion apps, notes, or media controls.

---

## 🌟 Demo

<table align="center">
  <tr>
    <td><img src="images/demo.gif" width="400"></td>
    <td width="40"></td>
    <td><img src="images/demo2.gif" width="400"></td>
  </tr>
</table>


---

## ✨ Core Functionality

* **Dual Float Modes:** Freely choose between an "Always-on-Top PiP," a "Flexible Popup," or a "Docked Side Panel" based on your needs.
* **Works on Any Site:** Thanks to advanced request modification, both **PiP Mode and Side Panel Mode** can load *any* website, including Google and YouTube, by bypassing `X-Frame-Options` restrictions.
* **Fully Interactive:** Windows in both modes are fully functional browsers, allowing you to log in, scroll, click, and type.
* **Right-Click Context Menu:** Right-click any link to open it directly in your choice of PiP, Popup, or Side Panel.
* **Multi-Window Support:** You can have one PiP window, one Side Panel, and multiple Popup windows all open and working at the same time.
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

### 3. Side Panel Mode (Docked)

This is your **persistent, integrated** option. It locks a webpage to the side of your current browser window, resizing the main content to fit.

**Best For:**
* Keeping a persistent tool visible (e.g., a notebook, calculator, or chat app).
* Controlling media (like Spotify or YouTube Music) without leaving your tab.
* "Companion" apps that work alongside your main page.

**Limitations:**
* Only one Side Panel can be open at a time.
* It is "docked" to the browser window and cannot be floated freely over other applications.
---

## 🚀 How to Use

### 1. For Your Current Tab
1.  Click the extension icon in your Chrome toolbar.
2.  From the dropdown, choose:
    * **PiP Window (Always-on-Top)**: Opens the current tab in PiP mode.
    * **Popup Window (Multiple)**: Opens the current tab in a new popup window.
    * **Side Panel (Docked)**: Opens the current tab in the browser's side panel.

### 2. Keyboard Shortcuts (Customizable)
All three actions can be triggered with keyboard shortcuts that you can change at any time via `chrome://extensions/shortcuts`.

**Default shortcuts (you can reassign these):**
* `Alt` + `Shift` + `W` → Open current tab in **PiP** (always-on-top)
* `Alt` + `Shift` + `O` → Open current tab in **Popup** (multiple)
* `Alt` + `Shift` + `S` → Open current tab in **Side Panel** (docked)

Alt+Shift+P is reserved by Chrome for its built-in Picture-in-Picture toggle, so the PiP shortcut here defaults to `Alt` + `Shift` + `W` to avoid conflicts.

To customize, open `chrome://extensions/shortcuts`, find **Super Pinned Windows**, and set your preferred keys for each action.

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