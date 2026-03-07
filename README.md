# Inside the Mind of Hidas K C

A professional React-based portfolio website featuring immersive scroll-based animations and interactions. Built with modern technologies and architectural best practices.

## 🎯 Features

- **Smooth Scroll Animations**: Dynamic scene transitions based on scroll progress
- **Custom Cursor**: Interactive cursor with pupil tracking
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Film Grain Effect**: Authentic analog texture overlay
- **Performance Optimized**: Fast load times with minimal bundle size
- **Accessible**: WCAG-compliant markup and semantic HTML
- **Type-Safe**: Full TypeScript support throughout

## 📦 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **CSS3** - Modern styling with CSS variables
- **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd hexmoc

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
hexmoc/
├── src/
│   ├── components/
│   │   ├── Canvas/
│   │   │   ├── Canvas.tsx       # Main scene container
│   │   │   ├── Canvas.css       # Canvas styling
│   │   │   └── Scenes/          # Individual scene components
│   │   │       ├── IntroScene.tsx
│   │   │       ├── GreetingScene.tsx
│   │   │       ├── NameScene.tsx
│   │   │       ├── DesignerScene.tsx
│   │   │       ├── ThoughtsScene.tsx
│   │   │       ├── BengaluruScene.tsx
│   │   │       ├── WorkScene.tsx
│   │   │       ├── ReflectionScene.tsx
│   │   │       └── EndScene.tsx
│   │   ├── Borders/             # Frame border component
│   │   ├── Noise/               # Film grain overlay
│   │   ├── Curtain/             # Opening curtain animation
│   │   ├── Cursor/              # Custom cursor component
│   │   ├── SocialLinks/         # Social media links
│   │   ├── ScrollIndicator/     # Mobile scroll hint
│   │   └── Typography/          # Typography styles
│   ├── hooks/
│   │   ├── useScroll.ts         # Scroll progress tracking
│   │   └── useCursor.ts         # Cursor position and tracking
│   ├── config/
│   │   └── sceneConfig.ts       # Scene timing and work items
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── styles/
│   │   └── globals.css          # Global styles and CSS variables
│   ├── App.tsx                  # Root component
│   └── index.tsx                # React entry point
├── public/
│   └── index.html               # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Design System

### Color Palette

- **Background**: `#0d0d0d` (Deep Black)
- **Text**: `#ffffff` (White)
- **Accent Red**: `#b73e41` (Primary accent)
- **Accent Amber**: `#a76c03` (Secondary accent)
- **Surface**: `#111111` (Dark surface)

### Typography

- **Headings**: Space Grotesk (Bold)
- **Body/Labels**: Exposit (Bold)

### Spacing

Uses viewport-relative units (`vw`) for responsive scaling with CSS `clamp()` for optimal sizing across all devices.

## 🔧 Customization

### Updating Content

Edit scene components in `src/components/Canvas/Scenes/` to modify content:

```typescript
// Example: Edit IntroScene.tsx
<div className="t-inside-the-mind">Inside the Mind of</div>
<div className="t-name-big">HIDAS</div>
```

### Adjusting Scene Timing

Modify scene configuration in `src/config/sceneConfig.ts`:

```typescript
{ id: 'scene-intro', inStart: -10, inEnd: -1, outStart: 5, outEnd: 8 }
```

- `inStart/inEnd`: Fade-in progress percentage
- `outStart/outEnd`: Fade-out progress percentage

### Changing Colors

Update CSS variables in `src/styles/globals.css`:

```css
:root {
  --color-accent-red: #b73e41;
  --color-accent-amber: #a76c03;
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 992px
- **Desktop**: > 992px

## ⚡ Performance Tips

1. **Code Splitting**: Components are tree-shakable
2. **CSS Optimization**: Uses CSS variables for minimal file size
3. **Animation Performance**: Uses `transform` and `opacity` for GPU acceleration
4. **Image Optimization**: External resources cached by browsers

## 🤝 Contributing

When contributing to this project:

1. Maintain the component structure
2. Keep styles modular and scoped to components
3. Use TypeScript for type safety
4. Test responsive design across breakpoints

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

Built as a modern React conversion of the original HTML portfolio with enhanced architecture, performance, and maintainability.

---

**Made with ❤️ by Hidas K C**
