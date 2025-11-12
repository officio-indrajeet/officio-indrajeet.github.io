# 🧩 Component Guide

Understanding the component structure and how to modify each section.

## 📐 Component Architecture

```
App.tsx (Main Container)
├── Navbar.tsx (Fixed Navigation)
├── Hero.tsx (Landing Section)
├── About.tsx (About Me Section)
├── Projects.tsx (GitHub Projects)
├── Skills.tsx (Tech Stack)
├── Contact.tsx (Contact Form)
└── Footer.tsx (Footer)
```

---

## 🧭 Navbar Component

**File:** `src/components/Navbar.tsx`

### What it does:
- Fixed navigation bar at the top
- Smooth scroll to sections
- Mobile hamburger menu
- Glass effect on scroll

### Key customizations:

```typescript
// Add/remove navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // Add your own sections here
];

// Change logo
<a href="#home" className="text-2xl font-bold gradient-text">
  IK  {/* Change this */}
</a>
```

### Props: None (standalone component)

---

## 🎯 Hero Component

**File:** `src/components/Hero.tsx`

### What it does:
- Main landing section
- Profile picture with glow effect
- Introduction text
- CTA buttons
- Social media links
- Animated background

### Key customizations:

```typescript
// Change button text
<a href="#contact">Get In Touch</a>  // Modify text
<a href="#projects">View Projects</a>  // Modify text

// Modify background blobs
<div className="absolute w-96 h-96 bg-primary/20...">
  // Change w-96 h-96 for size
  // Change bg-primary/20 for color
  // Change position with -top-48 -left-48
</div>

// Update avatar
<img src={userData.avatar} alt={userData.name} />
```

### Data source: `userData.ts`

---

## 📝 About Component

**File:** `src/components/About.tsx`

### What it does:
- Brief introduction
- Key points about you
- Statistics (projects, followers, etc.)

### Key customizations:

```typescript
// Modify statistics
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  <div>
    <div className="text-3xl font-bold gradient-text">82+</div>
    <div className="text-gray-400">Projects</div>
  </div>
  // Add more stats
</div>

// Change grid layout
grid-cols-2 md:grid-cols-4  // Change number of columns
```

### Data source: `userData.ts` → `about` array

---

## 💼 Projects Component

**File:** `src/components/Projects.tsx`

### What it does:
- Fetches repos from GitHub API
- Displays project cards
- Filter by programming language
- Shows stars, forks, topics
- Links to GitHub and live demos

### Key customizations:

```typescript
// Change GitHub username
const response = await fetch(
  'https://api.github.com/users/YOUR_USERNAME/repos'
);

// Change number of projects displayed
.slice(0, 12)  // Change 12 to your preferred number

// Modify card grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  // Change lg:grid-cols-3 to 2 or 4
</div>

// Filter out specific repos
.filter((repo) => !repo.name.includes('fork'))
.filter((repo) => repo.name !== 'repo-to-hide')
```

### State:
- `repos` - Array of GitHub repositories
- `loading` - Loading state
- `filter` - Current language filter

### API: GitHub REST API v3

---

## 🛠️ Skills Component

**File:** `src/components/Skills.tsx`

### What it does:
- Displays skills organized by category
- Icon for each category
- Hover effects on skill tags

### Key customizations:

```typescript
// Add new skill category
{
  category: "Mobile Development",
  items: ["React Native", "Flutter", "Swift"]
}

// Change grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  // Adjust columns as needed
</div>

// Customize category icons
<svg className="w-6 h-6">
  // Replace with different icon
</svg>
```

### Data source: `userData.ts` → `skills` array

---

## 📧 Contact Component

**File:** `src/components/Contact.tsx`

### What it does:
- Contact information display
- Contact form
- Social media links
- Email integration (mailto)

### Key customizations:

```typescript
// Change form behavior
const handleSubmit = (e: React.FormEvent) => {
  // Current: Opens email client
  // Can integrate with: EmailJS, Formspree, etc.
};

// Add more contact methods
<div className="flex items-start gap-4">
  <div className="w-12 h-12 bg-gradient-to-r...">
    {/* Icon */}
  </div>
  <div>
    <h4>Phone</h4>
    <p>+1 234 567 8900</p>
  </div>
</div>

// Modify form fields
<input type="text" name="company" />  // Add new field
```

### State:
- `formData` - Form input values
- `status` - Form submission status

---

## 🔚 Footer Component

**File:** `src/components/Footer.tsx`

### What it does:
- Copyright notice
- Tech stack mention
- Social links

### Key customizations:

```typescript
// Add more links
<div className="flex gap-4">
  <a href="...">Icon</a>
  // Add more social links
</div>

// Change copyright text
<p>© {currentYear} {userData.name}. All rights reserved.</p>

// Add additional footer sections
<div className="flex flex-col md:flex-row justify-between">
  <div>Left section</div>
  <div>Right section</div>
</div>
```

---

## 📊 Data Structure

**File:** `src/data/userData.ts`

```typescript
export const userData = {
  // Personal Info
  name: string,
  title: string,
  bio: string,
  location: string,
  company: string,
  email: string,
  
  // Social Links
  github: string,
  linkedin: string,
  website: string,
  avatar: string,
  
  // Skills (array of objects)
  skills: [
    {
      category: string,
      items: string[]
    }
  ],
  
  // About (array of strings)
  about: string[]
};
```

---

## 🎨 Styling System

### Tailwind Classes Used

**Colors:**
- `text-primary` - Primary color text
- `bg-primary` - Primary color background
- `text-secondary` - Secondary color text
- `bg-secondary` - Secondary color background

**Custom Classes:**
- `gradient-text` - Gradient text effect
- `glass-effect` - Frosted glass effect

**Animations:**
- `animate-fade-in` - Fade in animation
- `animate-slide-up` - Slide up animation
- `animate-float` - Floating animation

### Adding Custom Styles

**File:** `src/index.css`

```css
@layer utilities {
  .your-custom-class {
    @apply bg-gradient-to-r from-primary to-secondary;
  }
}
```

---

## 🔄 Component Communication

### Data Flow:
```
userData.ts → Components → UI
```

### No Props Needed:
All components import `userData` directly, making them independent and easy to reorder.

### To Add Props:
```typescript
// Define interface
interface HeroProps {
  title: string;
  subtitle: string;
}

// Use in component
const Hero = ({ title, subtitle }: HeroProps) => {
  return <h1>{title}</h1>;
};

// Pass from App
<Hero title="Hello" subtitle="World" />
```

---

## 🧪 Testing Components

### View Individual Component:

1. Comment out other components in `App.tsx`:
```typescript
function App() {
  return (
    <div className="min-h-screen bg-darker">
      {/* <Navbar /> */}
      <Hero />  {/* Only this will show */}
      {/* <About /> */}
      {/* ... */}
    </div>
  );
}
```

2. Save and view in browser

---

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

Example:
```typescript
<div className="text-sm md:text-base lg:text-lg">
  // Small on mobile, base on tablet, large on desktop
</div>
```

---

## 🎯 Quick Modifications

### Change Section Order:
**File:** `src/App.tsx`
```typescript
<Hero />
<Skills />    // Moved up
<About />     // Moved down
<Projects />
```

### Remove a Section:
Just comment it out or delete the line in `App.tsx`

### Add a Section:
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to JSX
4. Add nav link in `Navbar.tsx`

---

## 💡 Pro Tips

1. **Keep components small** - Each should do one thing well
2. **Use TypeScript** - Catch errors early
3. **Consistent spacing** - Use Tailwind's spacing scale
4. **Mobile-first** - Design for mobile, enhance for desktop
5. **Reusable components** - Extract common patterns

---

Need help with a specific component? Check the code comments or refer to the main README!
