# Indrajeet Kumar — Portfolio

Personal portfolio website for **Indrajeet Kumar**, Senior Software Engineer.

**Live website:** https://officio-indrajeet.github.io/

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 (PostCSS)
- Static export hosted on GitHub Pages

The site uses Next.js for routing, metadata, static rendering and the application structure. It is exported as static HTML so it can continue to run on GitHub Pages without a Node.js server.

## Features

- Responsive portfolio with experience, skills, selected projects, writing, education and contact sections
- App Router page and metadata
- SEO, canonical URL, Open Graph, Twitter metadata and Person structured data
- Keyboard-accessible mobile navigation and skip-to-content link
- Standalone Resume page with print / save as PDF
- Standalone Java 8 Streams article
- Static deployment through GitHub Actions

## Project structure

```text
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── public/
│   ├── profile.jpg
│   ├── Resume.pdf
│   ├── resume/
│   │   └── index.html
│   └── blogs/
│       └── java-8-streams/
│           └── index.html
├── src/
│   ├── components/
│   ├── data/
│   │   └── userData.ts
│   └── index.css
├── next.config.ts
├── package.json
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## Local development

**Requirements:** Node.js 20.19 or later and npm.

Clone the repository and install dependencies:

```bash
git clone https://github.com/officio-indrajeet/officio-indrajeet.github.io.git
cd officio-indrajeet.github.io
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Build and preview

Create the static export:

```bash
npm run build
```

Next.js writes the deployable static website to `out/`.

To test the generated static site locally, use a static file server pointed at `out/` (for example, `npx serve out`).

## Content updates

Portfolio content is maintained in:

```text
src/data/userData.ts
```

This file contains profile information, experience, skills, education and the projects displayed on the homepage.

The top-level SEO metadata and Person structured data are maintained in:

```text
app/layout.tsx
```

Global styling is maintained in:

```text
src/index.css
```

## Projects

- [RiskPulse](https://github.com/officio-indrajeet/riskpulse) — transaction ingestion and Kafka pipeline, currently in progress.
- [PrepStack](https://github.com/officio-indrajeet/prepstack) — interview preparation dashboard.

Project descriptions on the portfolio distinguish implemented functionality from work still in progress.

## Deployment

GitHub Actions runs on pushes to `main`:

1. Installs Node dependencies.
2. Runs ESLint.
3. Runs TypeScript checking and `next build`.
4. Publishes the generated `out/` directory to GitHub Pages.

The site uses Next.js static export (`output: "export"`) and does not require a server or paid hosting.

**Repository:** https://github.com/officio-indrajeet/officio-indrajeet.github.io  
**Website:** https://officio-indrajeet.github.io/

## Contact

- [GitHub](https://github.com/officio-indrajeet)
- [LinkedIn](https://www.linkedin.com/in/indrajeet-1103/)
- officio.indrajeet@gmail.com

