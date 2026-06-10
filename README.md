# My First Website

A stunning fullscreen portfolio website featuring interactive particle animations, glass-morphism design, and smooth typing effects.

## Features

✨ **Interactive Particle Animation**
- 80 vibrant neon-colored particles
- Particles respond to mouse movement
- Physics-based bouncing off edges
- Smooth connections between nearby particles
- Gradient-colored particle trails

🎨 **Glass-Morphism Design**
- Modern frosted glass effect card
- Centered layout with smooth animations
- Vibrant gradient text for name and role
- Glowing text effect animations

⌨️ **Typing Effect**
- Smooth character-by-character typing animation
- Auto-repeating text with pause
- Blinking cursor indicator

📱 **Responsive Design**
- Works perfectly on desktop, tablet, and mobile
- Touch support for mobile devices
- Adaptive font sizes and spacing

## Color Palette

The website uses vibrant neon colors:
- Neon Green: `#00ff88`
- Cyan: `#00d4ff`
- Hot Pink: `#ff006e`
- Yellow: `#ffbe0b`
- Orange: `#fb5607`
- Purple: `#8338ec`
- Blue: `#3a86ff`
- Mint: `#06ffa5`

## File Structure

```
my-first-website/
├── index.html       # HTML structure
├── styles.css       # Styling and animations
├── particles.js     # Particle system and physics
├── typing.js        # Typing effect animation
└── README.md        # Documentation
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/euphoria314/my-first-website.git
cd my-first-website
```

2. Open `index.html` in your web browser

That's it! No dependencies or build process required.

## Customization

### Change the Name
Edit the name in `index.html`:
```html
<h1 class="name">Your Name Here</h1>
```

### Change the Typing Text
Edit the text in `typing.js`:
```javascript
new TypingEffect('.typing-text', 'Your Title Here', 80, 500);
```

### Adjust Particle Count
In `particles.js`, change the `particleCount` value:
```javascript
this.particleCount = 80; // Change this number
```

### Modify Colors
Edit the `colors` array in `particles.js`:
```javascript
const colors = [
    '#00ff88', // Your colors here
    // ...
];
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

The website is optimized for smooth 60 FPS animation on most devices. If you experience lag:
- Reduce `particleCount` in `particles.js`
- Decrease `connectionDistance` in the `drawConnections()` method
- Lower the typing speed in `typing.js`

## License

This project is open source and available under the MIT License.

---

Made with ❤️ by Anele