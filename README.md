# 🌟 Portfolio Website

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗     ║
║   ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗    ║
║   ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║    ║
║   ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║    ║
║   ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝    ║
║   ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝     ║
║                                                           ║
║        Modern • Responsive • Beautiful • Fast            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

A stunning, modern, fully responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

**✨ Live Demo:** [View Demo](https://your-portfolio-url.com)
**📚 Full Documentation:** See all `.md` files in this project

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on all devices
- **GitHub Integration**: Automatically fetches and displays your GitHub repositories
- **Customizable**: Easy to customize through configuration files
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Type-Safe**: Written in TypeScript for better code quality

## 📋 Sections

- **Hero**: Eye-catching introduction with your photo and social links
- **About**: Brief introduction and statistics
- **Projects**: Showcase of your GitHub repositories with filtering
- **Skills**: Display your technical skills organized by category
- **Contact**: Contact form and information

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GitHub API

## 🎨 Customization

### 1. Personal Information

Edit `src/data/userData.ts` to update your personal information:

```typescript
export const userData = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio",
  location: "Your Location",
  // ... more fields
};
```

### 2. Skills

Update your skills in `src/data/userData.ts`:

```typescript
skills: [
  { category: "Frontend", items: ["React", "Vue", ...] },
  { category: "Backend", items: ["Node.js", "Python", ...] },
  // ... more categories
]
```

### 3. Theme Colors

Customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: '#3b82f6',    // Change to your preferred color
  secondary: '#8b5cf6',  // Change to your preferred color
  // ...
}
```

### 4. GitHub Integration

The portfolio automatically fetches your repositories from GitHub. Update the username in `src/components/Projects.tsx`:

```typescript
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos');
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Build and deploy:
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

## 📝 Customization Guide

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Changing Animations

Animations are defined in `tailwind.config.js`. You can:
- Modify existing animations
- Add new animations
- Adjust animation timing

### Updating Styles

- Global styles: `src/index.css`
- Component styles: Use Tailwind classes in components
- Custom utilities: Add to `tailwind.config.js`

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- Icons from Heroicons
- GitHub API for repository data
- Tailwind CSS for styling

---

Built with ❤️ by Indrajeet Kumar
