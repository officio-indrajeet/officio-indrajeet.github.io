# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🎯 Essential Customizations

### 1. Update Your Information (2 minutes)

**File:** `src/data/userData.ts`

```typescript
export const userData = {
  name: "YOUR NAME HERE",
  title: "YOUR TITLE HERE",
  bio: "YOUR BIO HERE",
  location: "YOUR LOCATION",
  email: "YOUR EMAIL",
  github: "YOUR GITHUB URL",
  linkedin: "YOUR LINKEDIN URL",
  // ... update all fields
};
```

### 2. Update GitHub Username (30 seconds)

**File:** `src/components/Projects.tsx` (Line 17)

```typescript
// Change 'officio-indrajeet' to your username
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=100');
```

### 3. Update Skills (1 minute)

**File:** `src/data/userData.ts`

```typescript
skills: [
  { category: "Frontend", items: ["React", "Vue", ...] },
  { category: "Backend", items: ["Node.js", "Python", ...] },
  // Add your skills
]
```

### 4. Update Meta Tags (1 minute)

**File:** `index.html`

Update:
- `<title>` tag
- `<meta name="description">` content
- Open Graph tags

## 🚀 Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Quick Style Changes

### Change Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: '#YOUR_COLOR',    // Main color
  secondary: '#YOUR_COLOR',  // Accent color
}
```

### Popular Color Combos:
- Blue/Purple: `#3b82f6` / `#8b5cf6` (current)
- Green/Teal: `#10b981` / `#14b8a6`
- Orange/Red: `#f97316` / `#ef4444`
- Pink/Purple: `#ec4899` / `#a855f7`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/      # All UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── userData.ts  # ⭐ YOUR DATA HERE
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.css
├── index.html           # ⭐ UPDATE META TAGS
└── tailwind.config.js   # ⭐ CUSTOMIZE COLORS
```

## ✅ Checklist

Before deploying, make sure you've:

- [ ] Updated `userData.ts` with your information
- [ ] Changed GitHub username in `Projects.tsx`
- [ ] Updated skills in `userData.ts`
- [ ] Modified colors in `tailwind.config.js` (optional)
- [ ] Updated meta tags in `index.html`
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`

## 🌐 Deploy (Choose One)

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build: `npm run build`
2. Drag `dist` folder to netlify.com

### GitHub Pages
1. Update `vite.config.ts` with repo name
2. `npm install -D gh-pages`
3. Add deploy script to `package.json`
4. `npm run deploy`

## 📚 More Help

- **Detailed Customization:** See `CUSTOMIZATION.md`
- **Deployment Options:** See `DEPLOYMENT.md`
- **Full Documentation:** See `README.md`

## 🆘 Common Issues

**Issue:** Projects not loading
- **Fix:** Update GitHub username in `Projects.tsx`

**Issue:** Styles not working
- **Fix:** Make sure Tailwind is configured correctly

**Issue:** Build fails
- **Fix:** Run `npm install` again

## 💡 Pro Tips

1. **Test on mobile:** Use browser dev tools
2. **Optimize images:** Use WebP format
3. **Check performance:** Run Lighthouse audit
4. **Update regularly:** Keep dependencies updated

---

That's it! You're ready to go! 🎉

For questions, check the other documentation files or create an issue.
