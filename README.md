# Indrajeet Kumar — Portfolio

Personal portfolio website for **Indrajeet Kumar**, Senior Software Engineer.

🌐 **Live Website:** <https://officio-indrajeet.github.io/>

---

## About the Project

A modern, responsive portfolio website built to showcase my software engineering experience, technical projects, skills, and professional background.

The portfolio focuses on backend engineering, distributed systems, cloud-native development, and software engineering projects.

---

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GitHub API
- GitHub Pages

---

## Features

- Responsive design for desktop, tablet, and mobile
- Professional engineering-focused layout
- Experience section
- Selected projects section
- Technical skills grouped by category
- Education section
- GitHub repository integration
- LinkedIn and GitHub links
- Contact information
- SEO metadata
- Open Graph metadata for social sharing
- Fast Vite production builds
- GitHub Pages deployment

---

## Project Structure

```text
.
├── public/
│   └── profile.jpg
│
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   │
│   ├── data/
│   │   └── userData.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Local Development

### Requirements

- Node.js 18+
- npm

### Clone the repository

```bash
git clone https://github.com/officio-indrajeet/officio-indrajeet.github.io.git
```

### Navigate to the project

```bash
cd officio-indrajeet.github.io
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

The generated production files will be available in:

```text
dist/
```

### Preview the production build

```bash
npm run preview
```

---

## Configuration

Portfolio content is primarily managed through:

```text
src/data/userData.ts
```

This file contains the data used throughout the portfolio, including:

- Personal information
- Professional experience
- Technical skills
- Education
- Projects
- Social links

This keeps the portfolio content separate from the React components and makes future updates easier.

---

## GitHub Integration

The portfolio can retrieve public GitHub repository information using the GitHub API.

GitHub profile:

<https://github.com/officio-indrajeet>

When modifying the GitHub integration, update the relevant configuration in:

```text
src/components/Projects.tsx
```

---

## Deployment

The portfolio is hosted using **GitHub Pages**.

### Repository

<https://github.com/officio-indrajeet/officio-indrajeet.github.io>

### Live Website

<https://officio-indrajeet.github.io/>

The project source code is maintained on the `main` branch, with GitHub Pages responsible for serving the deployed website.

---

## Updating the Portfolio

After making changes locally:

```bash
git status
```

Review the modified files.

Then:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Update portfolio"
```

Push the changes:

```bash
git push origin main
```

---

## Customization

### Personal Information

Update:

```text
src/data/userData.ts
```

### Website Metadata

Update:

```text
index.html
```

This contains:

- Page title
- SEO description
- Keywords
- Open Graph metadata
- Social sharing metadata
- Structured data

### Styling

Global styling:

```text
src/index.css
```

Component styling is primarily handled using Tailwind CSS classes.

### Components

Reusable UI components are located in:

```text
src/components/
```

---

## Performance

The website is built with Vite to provide:

- Fast development builds
- Optimized production bundles
- Modern JavaScript and CSS processing
- Lightweight static deployment
- Responsive performance across devices

---

## Browser Support

The portfolio is designed for modern browsers supporting:

- ES Modules
- Modern JavaScript
- CSS Flexbox
- CSS Grid
- Responsive Web APIs

---

## Contact

For professional opportunities or software engineering discussions:

**Indrajeet Kumar**

🌐 Portfolio:  
<https://officio-indrajeet.github.io/>

💻 GitHub:  
<https://github.com/officio-indrajeet>

💼 LinkedIn:  
<https://www.linkedin.com/in/indrajeet-1103/>

📧 Email:  
<officio.indrajeet@gmail.com>

---

## License

This repository contains a personal portfolio website and is not intended to be distributed as a general-purpose portfolio template.

---

Built with ❤️ by **Indrajeet Kumar** using React, TypeScript, Vite, and Tailwind CSS.
