<p align="center">
  <img src="https://img.shields.io/badge/📌-ScrollStamp-7c3aed?style=for-the-badge&labelColor=1a1a2e" alt="ScrollStamp" />
</p>

<h1 align="center">📌 ScrollStamp</h1>

<p align="center">
  <strong>Never Lose Your Place in AI Conversations Again</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-v2.1_Hybrid-7c3aed?style=flat-square" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/Chrome-Extension-4285f4?style=flat-square&logo=googlechrome" alt="Chrome Extension" />
  <img src="https://img.shields.io/badge/Manifest-V3-orange?style=flat-square" alt="Manifest V3" />
</p>

<p align="center">
  <a href="#-the-problem">Problem</a> •
  <a href="#-the-solution">Solution</a> •
  <a href="#-features">Features</a> •
  <a href="#-installation">Install</a> •
  <a href="#-supported-platforms">Platforms</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

---

## 😫 The Problem

Ever had this happen?

> *"Where was that architecture decision Claude gave me 2 hours ago?"*
> 
> *"I know ChatGPT explained that bug fix somewhere in this 50-message thread..."*
> 
> *"Gemini gave me the perfect solution, but now I can't find it!"*

**Long AI conversations are a nightmare to navigate.**

You're deep in a coding session with Claude, ChatGPT, or Gemini. The AI gives you brilliant insights, step-by-step instructions, and critical decisions scattered across a massive thread. But when you need to reference that one important message? 

🔄 Endless scrolling...  
😤 Context switching...  
🤯 Lost productivity...

---

## ✨ The Solution

**ScrollStamp** is a Chrome extension that lets you **bookmark exact AI messages** with a single click and **instantly jump back** to them anytime.

Think of it as **bookmarks for your AI conversations**.

```
📍 One click to save → 🚀 One click to return
```

### Why ScrollStamp?

| Without ScrollStamp | With ScrollStamp |
|---------------------|------------------|
| 🔄 Scroll for minutes | ⚡ Jump in seconds |
| 😵 Lose important context | 📌 Never lose anything |
| 🔁 Re-ask the same questions | 📚 Reference saved answers |
| 😤 Frustrated workflow | 😌 Organized productivity |

---

## 🎯 Two Powerful Modes

ScrollStamp v2.1 is a **hybrid extension** with two specialized modes:

### 🤖 AI Chat Mode (v2)
**Message-level bookmarking** designed specifically for AI conversation platforms.

- ✅ Detects AI assistant messages automatically
- ✅ Bookmarks the exact message, not just scroll position
- ✅ Shows message preview in bookmark list
- ✅ Visual highlight when jumping to bookmarks
- ✅ Works even if conversation grows longer

### 📜 Scroll Mode (v1)
**Position-based bookmarking** that works on any website.

- ✅ Save scroll positions on any webpage
- ✅ Perfect for documentation, articles, tutorials
- ✅ Percentage-based positioning
- ✅ Universal website support

---

## 🚀 Features

<table>
  <tr>
    <td align="center">
      <strong>📍 One-Click Bookmarking</strong><br/>
      <sub>Floating pin button on every supported page</sub>
    </td>
    <td align="center">
      <strong>✨ Visual Feedback</strong><br/>
      <sub>Animated highlights when navigating</sub>
    </td>
    <td align="center">
      <strong>✏️ Editable Titles</strong><br/>
      <sub>Rename bookmarks for easy reference</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>🧠 Smart Detection</strong><br/>
      <sub>Automatically identifies AI messages</sub>
    </td>
    <td align="center">
      <strong>💾 Persistent Storage</strong><br/>
      <sub>Survives page refreshes & browser restarts</sub>
    </td>
    <td align="center">
      <strong>🌐 Multi-Platform</strong><br/>
      <sub>6 AI platforms + any website</sub>
    </td>
  </tr>
</table>

---

## 🌐 Supported Platforms

### AI Chat Platforms (v2 Mode)

| Platform | Status | Detection |
|----------|--------|-----------|
| 💬 ChatGPT | ✅ Supported | Message-based |
| 🧠 Claude | ✅ Supported | Message-based |
| ✨ Gemini | ✅ Supported | Message-based |
| 🔍 Perplexity | ✅ Supported | Message-based |
| ⚡ Grok | ✅ Supported | Message-based |
| 🤖 DeepSeek | ✅ Supported | Message-based |

### Any Website (v1 Mode)
Scroll Mode works on **every website** — documentation, articles, tutorials, you name it!

---

## 📦 Installation

### Quick Install (3 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/SathwikPerla/scrollstamp.git

# 2. Navigate to extension folder
cd scrollstamp/public/scrollstamp-v2
```

Then in Chrome:

1. Open `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Select the `scrollstamp-v2` folder
5. **Pin** ScrollStamp to your toolbar for quick access! 📌

---

## 🎮 How to Use

### Creating a Bookmark
1. Navigate to any supported AI chat platform
2. Scroll to the AI response you want to save
3. Click the floating **📌 button** (bottom-right corner)
4. Done! A toast confirms your bookmark is saved

### Accessing Bookmarks
1. Click the **ScrollStamp icon** in your browser toolbar
2. See all saved bookmarks with **previews** and **timestamps**
3. Click any bookmark to **instantly jump** to that message

### Managing Bookmarks
- **Delete one**: Click the 🗑️ button on any bookmark
- **Delete all**: Click "Clear All" in the popup footer
- **Edit title**: Click the ✏️ icon (coming soon!)

---

## 📁 Extension Structure

```
scrollstamp-v2/
├── manifest.json     # Chrome extension configuration (Manifest V3)
├── content.js        # Message detection & bookmarking logic
├── content.css       # Floating button & highlight styles
├── popup.html        # Bookmark list popup structure
├── popup.js          # Popup interaction handling
├── popup.css         # Popup styling
└── icon.png          # Extension icon
```

---

## 🛠️ Technical Details

| Component | Technology |
|-----------|------------|
| Manifest | Chrome Manifest V3 |
| Storage | Chrome Storage API |
| Injection | Content Scripts |
| UI | Vanilla HTML/CSS/JS |
| Detection | DOM-based selectors |

### How It Works

1. **Content Script** injects into supported AI chat pages
2. **Smart Detection** identifies AI assistant message containers using platform-specific selectors
3. **Floating Button** appears for easy bookmark creation
4. **Chrome Storage** persists bookmarks across sessions
5. **Popup Interface** displays and manages all saved bookmarks
6. **Navigation** scrolls to exact message and highlights it

---

## 🗺️ Roadmap

### v2.2.0 (Coming Soon)
- [ ] Bookmark folders/categories
- [ ] Search within bookmarks
- [ ] Export/import bookmarks
- [ ] Keyboard shortcuts

### v3.0.0 (Future)
- [ ] Cross-device sync
- [ ] Custom bookmark labels/notes
- [ ] AI-powered organization
- [ ] Browser sidebar view
- [ ] Firefox & Edge support

---

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug reports
- 💡 Feature requests
- 🔧 Pull requests
- 📖 Documentation improvements

Feel free to [open an issue](https://github.com/SathwikPerla/scrollstamp/issues) or submit a PR!

### Adding Support for New Platforms

Want to add support for a new AI chat platform? Check the `content.js` file and add the appropriate DOM selectors for detecting AI messages on that platform.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute!

---

## 👨‍💻 Author

<p align="center">
  Built with ❤️ by <a href="https://github.com/SathwikPerla"><strong>Sathwik Perla</strong></a>
</p>

---

## ⭐ Show Your Support

If ScrollStamp helps you stay organized in AI conversations:

<p align="center">
  <a href="https://github.com/SathwikPerla/scrollstamp">
    <img src="https://img.shields.io/badge/⭐_Star_this_repo-7c3aed?style=for-the-badge" alt="Star this repo" />
  </a>
</p>

**Every star helps other developers discover this tool!** 🙏

---

<p align="center">
  <sub>📌 ScrollStamp — Because your AI conversations deserve bookmarks too.</sub>
</p>
