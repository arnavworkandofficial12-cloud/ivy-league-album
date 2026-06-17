# 🎓 Ivy League Photo Album

A vanilla JavaScript photo gallery with modal expand, keyboard navigation, and smooth animations.


## Features

- **Photo grid** — displays university photos in a responsive card layout
- **Modal expand** — click any photo to view it fullscreen
- **Keyboard navigation** — arrow keys to browse, Escape to close
- **On-screen buttons** — previous, next, and close buttons for mouse/touch users
- **Fade animations** — smooth fade + scale on load and modal open
- **Scroll lock** — page scroll disabled while modal is open

---

## Tech Stack

- HTML5
- CSS3 (animations, flexbox, fixed positioning)
- Vanilla JavaScript (no frameworks, no libraries)

---

## Getting Started

No build step needed — just open in a browser.

```bash
git clone https://github.com/your-username/ivy-league-album.git
cd ivy-league-album
```

Then open `index.html` directly in your browser, or use Live Server in VS Code.

---

## Project Structure

```
ivy-league-album/
├── index.html
├── style.css
├── script.js
├── yale.png
├── oxford.png
├── ucberkeley.png
├── brownusa.png
└── README.md
```

---

## Controls

| Action | How |
|--------|-----|
| Expand photo | Click on it |
| Next photo | → Arrow key or → button |
| Previous photo | ← Arrow key or ← button |
| Close modal | Escape key or ✕ button or click background |

---

## Possible Improvements

- [ ] Add captions / university names under each photo
- [ ] Touch / swipe support for mobile
- [ ] Add more universities
- [ ] Lazy load images for performance
- [ ] CSS grid layout option

---

## License

MIT