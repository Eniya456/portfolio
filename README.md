# Eniya V — Personal Portfolio

A production-ready personal portfolio website built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (dev server + production build)
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)
- **Framer Motion** (animations)
- **Lucide React** (icons)

---

## Getting Started (Local Development)

### Prerequisites
- Node.js 18+ installed

### Install and run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be live at **http://localhost:5173**

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## Adding Your Resume

1. Get your latest resume PDF
2. Name it exactly: `Eniya_V_Resume.pdf`
3. Place it in the `public/` folder:
   ```
   public/
   └── Eniya_V_Resume.pdf   ← place here
   ```
4. All "Download Resume" and "Resume" buttons will work automatically.

---

## Deploying to Vercel (Free)

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — no extra config needed
5. Click **Deploy**

Your site will be live at `https://your-project.vercel.app`

> **Tip**: Add your resume PDF (`Eniya_V_Resume.pdf`) to `public/` before deploying so the download works on the live site.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          Sticky navigation
│   ├── Hero.tsx            Hero / landing section
│   ├── About.tsx           About me + education
│   ├── Skills.tsx          Technical skills grid
│   ├── Experience.tsx      Work experience timeline
│   ├── Projects.tsx        Featured projects cards
│   ├── Achievements.tsx    Certifications & awards
│   ├── Contact.tsx         Contact section
│   ├── Footer.tsx          Footer
│   ├── SectionHeader.tsx   Reusable section heading
│   ├── Tag.tsx             Technology tag badge
│   └── Button.tsx          Reusable button
├── data/
│   └── portfolio.ts        All portfolio content (edit here)
├── App.tsx
├── main.tsx
└── index.css               Tailwind v4 + design tokens

public/
├── favicon.svg
└── Eniya_V_Resume.pdf      ← Place your resume here
```

## Customizing Content

All website content lives in `src/data/portfolio.ts`. Edit that file to update:
- Personal info (email, LinkedIn, GitHub)
- Skills
- Experience
- Projects
- Achievements

---

## License

2026 Eniya V. All rights reserved.
