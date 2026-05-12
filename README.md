# Estimatex

Marketing website for **EstimatesX** — construction estimating, quantity takeoffs, and related services.

## Tech stack

- **Next.js** 16 (App Router)
- **React** 19 + **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion**, **next-themes**

## Run locally

From the repository root:

```bash
npm run install:website
npm run dev
```

Or from the `website` folder:

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts (repo root)

| Command | Description |
|--------|-------------|
| `npm run install:website` | Install dependencies in `website/` |
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server (after build) |
| `npm run lint` | ESLint |

## Deploy

Build output is the standard Next.js app in `website/`. Deploy **`website`** (or the whole repo with root `package.json` build) on [Vercel](https://vercel.com), Netlify, or any Node host.

## Remote

```bash
git remote add origin https://github.com/aqibbilal188/Estimatex.git
git branch -M main
git push -u origin main
```
