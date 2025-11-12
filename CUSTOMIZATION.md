# 🎨 Customization Guide

This guide will help you customize your portfolio to match your personal brand and preferences.

## Quick Start Customization

### 1. Update Personal Information

**File:** `src/data/userData.ts`

```typescript
export const userData = {
  name: "Your Name",                    // Your full name
  title: "Your Professional Title",     // e.g., "Full Stack Developer"
  bio: "Your bio description",          // Short bio
  location: "Your City, Country",       // Your location
  company: "Your Company/University",   // Current affiliation
  email: "your.email@example.com",      // Your email
  github: "https://github.com/username", // Your GitHub profile
  linkedin: "https://linkedin.com/in/username", // Your LinkedIn
  website: "https://yourwebsite.com",   // Your website
  avatar: "URL_TO_YOUR_IMAGE",          // Your profile picture URL
  
  // Update your skills
  skills: [
    { 
      category: "Frontend", 
      items: ["React", "Vue", "Angular", ...] 
    },
    // Add more skill categories
  ],
  
  // Update about section
  about: [
    "Your first point about yourself",
    "Your second point",
    // Add more points
  ]
};
```

### 2. Change GitHub Username

**File:** `src/components/Projects.tsx`

Find this line (around line 17):
```typescript
const response = await fetch('https://api.github.com/users/officio-indrajeet/repos?sort=updated&per_page=100');
```

Replace `officio-indrajeet` with your GitHub username.

### 3. Customize Colors

**File:** `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Main accent color (blue)
      secondary: '#8b5cf6',  // Secondary accent color (purple)
      dark: '#0f172a',       // Dark background
      darker: '#020617',     // Darker background
    },
  },
}
```

**Popular Color Schemes:**

- **Blue & Purple** (Current): `primary: '#3b82f6'`, `secondary: '#8b5cf6'`
- **Green & Teal**: `primary: '#10b981'`, `secondary: '#14b8a6'`
- **Orange & Red**: `primary: '#f97316'`, `secondary: '#ef4444'`
- **Pink & Purple**: `primary: '#ec4899'`, `secondary: '#a855f7'`

### 4. Update Meta Tags & SEO

**File:** `portfolio/index.html`

Update the following in the `<head>` section:
- `<title>` - Your name and title
- `<meta name="description">` - Your description
- `<meta name="keywords">` - Relevant keywords
- Open Graph tags for social media sharing

### 5. Customize Animations

**File:** `tailwind.config.js`

Modify animation speeds:
```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in',     // Change 0.6s to adjust speed
  'slide-up': 'slideUp 0.6s ease-out',  // Change 0.6s to adjust speed
  'float': 'float 3s ease-in-out infinite', // Change 3s to adjust speed
},
```

## Advanced Customization

### Adding a New Section

1. **Create Component:** `src/components/NewSection.tsx`
```typescript
const NewSection = () => {
  return (
    <section id="new-section" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          New <span className="gradient-text">Section</span>
        </h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. **Add to App:** `src/App.tsx`
```typescript
import NewSection from './components/NewSection';

function App() {
  return (
    <div className="min-h-screen bg-darker">
      <Navbar />
      <Hero />
      <NewSection /> {/* Add here */}
      {/* ... other sections */}
    </div>
  );
}
```

3. **Add Navigation:** `src/components/Navbar.tsx`
```typescript
const navLinks = [
  // ... existing links
  { name: 'New Section', href: '#new-section' },
];
```

### Changing Fonts

**File:** `src/index.css`

Add Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

@layer base {
  body {
    @apply font-['Inter'] bg-darker text-white;
  }
}
```

### Modifying Layout

**Container Width:** Change `max-w-*` classes in components
- `max-w-4xl` - Narrow
- `max-w-6xl` - Medium (default)
- `max-w-7xl` - Wide

**Spacing:** Adjust `py-20` (padding) and `mb-16` (margin) values

### Custom Utility Classes

**File:** `src/index.css`

Add custom utilities:
```css
@layer utilities {
  .gradient-text {
    @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent;
  }
  
  .glass-effect {
    @apply bg-white/5 backdrop-blur-lg border border-white/10;
  }
  
  /* Add your own */
  .custom-shadow {
    @apply shadow-2xl shadow-primary/20;
  }
}
```

## Tips & Best Practices

1. **Images:** Use optimized images (WebP format recommended)
2. **Performance:** Keep animations smooth (avoid too many at once)
3. **Accessibility:** Maintain good color contrast ratios
4. **Mobile:** Test on different screen sizes
5. **Content:** Keep text concise and impactful

## Common Customizations

### Change Hero Background Effect

**File:** `src/components/Hero.tsx`

Modify the animated blobs:
```typescript
<div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
```

Adjust:
- `w-96 h-96` - Size
- `bg-primary/20` - Color and opacity
- `-top-48 -left-48` - Position

### Modify Project Card Layout

**File:** `src/components/Projects.tsx`

Change grid columns:
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

Options:
- `lg:grid-cols-2` - 2 columns on large screens
- `lg:grid-cols-3` - 3 columns (current)
- `lg:grid-cols-4` - 4 columns

### Update Contact Form Behavior

**File:** `src/components/Contact.tsx`

The form currently opens email client. To integrate with a backend:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Send to your backend
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  // Handle response
};
```

## Need Help?

- Check the main README.md for setup instructions
- Review component files for inline comments
- Tailwind CSS docs: https://tailwindcss.com/docs
- React docs: https://react.dev

---

Happy customizing! 🚀
