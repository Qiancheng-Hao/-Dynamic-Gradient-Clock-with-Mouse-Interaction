# 🌈 Dynamic Gradient Clock with Mouse Interaction

A visually striking web page that displays a large clock with a dynamic gradient background that changes based on either:
1. The current time (hours, minutes, seconds)
2. Mouse position (when mouse is moving)

The interface features a smart hide/show button that disappears after 5 seconds of inactivity and reappears on mouse movement.

[//]: # (![Demo Screenshot]&#40;screenshot.png&#41; <!-- Add a screenshot later if possible -->)

## ✨ Features
- **Real-time clock display** centered on screen
- **Dual-mode background**:
    - Time-based gradients that shift throughout the day
    - Mouse-position based colors that respond to movement
- **Smart UI controls**:
    - Auto-hiding menu button after 5 seconds of inactivity
    - Smooth fade transitions for all UI elements
    - Hide/show clock functionality
- **Responsive design** that works on all screen sizes

## 🚀 How to Use
1. Open `index.html` in any modern browser
2. The clock will display with time-based gradient colors
3. Move your mouse to:
    - Switch to mouse-position based colors
    - Reveal the hidden menu button at the top
4. Click the button to toggle clock visibility
5. The menu will automatically hide after 5 seconds of inactivity

## 🧩 File Structure
Dynamic Gradient Clock with Mouse Interaction/
├── index.html       # Main HTML file
├── index.css        # Styles for the clock and gradients
├── index.js         # Logic for time/mouse interactions
└── images/
    └── menu.png              # Menu icon for the hide/show button

## 🔧 Dependencies
- [jQuery](https://jquery.com/) (loaded via CDN)

## 🌐 Live Demo

[View the live version here](https://qiancheng-hao.github.io/Dynamic-Gradient-Clock-with-Mouse-Interaction) <!-- Add your GitHub Pages link if deployed -->

## 🛠️ Customization
You can adjust these variables in `index.js`:
- `buttonGap`: Time before menu disappears (milliseconds)
- `timeGap`: Time before switching from mouse to time mode (milliseconds)
- Background color formulas in `setColor()` function

## 📝 Notes
- The gradient algorithm creates smooth transitions between 3 color points
- The clock text has a glowing effect with multiple text shadows
- Pointer events are managed to ensure proper interaction when elements are transparent

Enjoy the colorful time display! 🎨⏰
