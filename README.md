# Shekhar Kambale — Developer Portfolio

Personal portfolio for **Shekhar Kambale**, B.E. CSE student at BMS College of Engineering, Bengaluru.  
Built with React 19, TanStack Start, Vite 8, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## Tech stack

| Layer           | Technology                                     |
| --------------- | ---------------------------------------------- |
| Framework       | React 19 + TanStack Start (file-based routing) |
| Build tool      | Vite 8                                         |
| Language        | TypeScript (strict)                            |
| Styling         | Tailwind CSS v4                                |
| Animation       | Framer Motion                                  |
| Icons           | Lucide React                                   |
| UI primitives   | Radix UI / shadcn-ui                           |
| Package manager | npm (`package-lock.json`)                      |

---

## Prerequisites

- **Node.js** ≥ 18 (LTS recommended)
- **npm** ≥ 9

---

## Setup & scripts

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build → .output/
npm run build

# Preview production build locally
npm run preview

# Lint (ESLint)
npm run lint

# Auto-format (Prettier)
npm run format

# Run tests (Vitest)
npm test
```

---

## Personalisation

All content lives in **[`src/data/portfolio.ts`](src/data/portfolio.ts)**. Edit that file to update:

- Name, email, GitHub, LinkedIn URL, profile photo path
- Featured projects (name, description, tech stack, GitHub link)
- Skills groups
- Education timeline
- Highlights (hackathons, certifications, activities)
- Process steps

> **Profile photo** — the photo is served from `public/shekhar-kambale.jpg`.  
> Replace that file to update the About section image.

---

## ⚠ Owner checklist — confirm before publishing

The following items need your explicit decision before going live:

| #   | Item                                                              | Action                                                                                         |
| --- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 1   | **PUC mark (90%)** — currently hidden                             | Set `showMarks: true` in the PUC entry in `portfolio.ts` to display it                         |
| 2   | **SSLC mark (98.88%)** — currently hidden                         | Set `showMarks: true` in the SSLC entry to display it                                          |
| 3   | **B.E. CGPA (6.99)** — intentionally not shown                    | Only add it to the Education card if you want it public                                        |
| 4   | **Certification credential links** — not included                 | Add verifiable URLs next to each certification in `portfolio.ts` once confirmed                |
| 5   | **ScamShield tech stack** — listed as "AI / API integration, Web" | Inspect the repo README/code and update the `stack` array with the actual languages/frameworks |
| 6   | **Profile photo**                                                 | The photo at `public/shekhar-kambale.jpg` is live — confirm you want it used                   |

---

## Deployment

### Vercel (recommended)

1. Push this repository to your GitHub account (`iamshekhark`).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repository.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy** — your site goes live at `<project-name>.vercel.app`.

### Cloudflare Pages / Netlify

Same build settings: build command `npm run build`, publish directory `dist`.

### GitHub Pages

Set `base` in `vite.config.ts` to your repository name and configure a 404 → `index.html` fallback for SPA routing.

---

## Custom domain — `shekharkambale.is-a.dev`

- Availability is **not guaranteed** and has **not been checked** against the registry.
- To register, follow the [is-a-dev/register](https://github.com/is-a-dev/register) documentation and submit a PR to that repo.
- **Do not submit the PR without your explicit approval** — the registration is a public, irreversible action.
- Check Vercel/Cloudflare platform subdomains first as a free and instant alternative.

---

## License

© 2025 Shekhar Kambale. All rights reserved.
