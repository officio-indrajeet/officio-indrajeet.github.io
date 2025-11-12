# 🚀 Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## Option 1: GitHub Pages (Recommended for GitHub Users)

### Step 1: Update Vite Config

**File:** `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your repository name
})
```

### Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 3: Update package.json

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 4: Deploy

```bash
npm run deploy
```

Your site will be live at: `https://your-username.github.io/your-repo-name/`

---

## Option 2: Vercel (Easiest & Fastest)

### Method A: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

### Method B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Custom Domain:** Add in Project Settings → Domains

---

## Option 3: Netlify

### Method A: Drag & Drop

1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify Drop

### Method B: Git Integration

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Method C: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod
```

---

## Option 4: Firebase Hosting

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

### Step 3: Initialize Firebase

```bash
firebase init hosting
```

Select:
- Public directory: `dist`
- Single-page app: `Yes`
- GitHub auto-deploy: `No` (or Yes if you want)

### Step 4: Build and Deploy

```bash
npm run build
firebase deploy
```

---

## Option 5: AWS S3 + CloudFront

### Step 1: Build Your Project

```bash
npm run build
```

### Step 2: Create S3 Bucket

1. Go to AWS S3 Console
2. Create a new bucket
3. Enable static website hosting
4. Upload `dist` folder contents

### Step 3: Configure CloudFront (Optional)

1. Create CloudFront distribution
2. Point to S3 bucket
3. Configure SSL certificate

### Step 4: Deploy Updates

```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
```

---

## Option 6: Render

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New Static Site"
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Create Static Site"

---

## Option 7: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub account
3. Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Save and Deploy"

---

## Custom Domain Setup

### For GitHub Pages

1. Add `CNAME` file to `public` folder with your domain
2. In GitHub repo settings → Pages → Custom domain
3. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

### For Vercel/Netlify

1. Go to project settings
2. Add custom domain
3. Update DNS records as instructed

---

## Environment Variables

If you need environment variables:

### Create `.env` file:

```env
VITE_API_KEY=your_api_key
VITE_API_URL=your_api_url
```

### Access in code:

```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

### Set in deployment platforms:

- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Build & Deploy → Environment
- **GitHub Pages:** Use GitHub Secrets for build actions

---

## Performance Optimization

### Before Deployment

1. **Optimize Images:**
```bash
npm install -D vite-plugin-imagemin
```

2. **Enable Compression:**
Most platforms do this automatically

3. **Check Bundle Size:**
```bash
npm run build
```

4. **Test Production Build:**
```bash
npm run preview
```

---

## Continuous Deployment

### GitHub Actions (for GitHub Pages)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install and Build
        run: |
          npm install
          npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Troubleshooting

### Issue: 404 on Refresh

**Solution:** Configure your hosting for SPA:

**Netlify:** Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Issue: Assets Not Loading

**Solution:** Check `base` in `vite.config.ts`

### Issue: Build Fails

**Solution:** 
1. Clear cache: `rm -rf node_modules package-lock.json`
2. Reinstall: `npm install`
3. Build: `npm run build`

---

## Monitoring & Analytics

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

---

## Recommended: Vercel or Netlify

For most users, **Vercel** or **Netlify** offer:
- ✅ Free tier
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Easy custom domains
- ✅ Automatic deployments from Git
- ✅ Preview deployments for PRs

---

Need help? Check the platform-specific documentation or open an issue!
