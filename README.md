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

Open [http://localhost:3004](http://localhost:3004) (default dev port **3004**).

To use another port once: `cd website` then `npx next dev -p 4000`.

## Scripts (repo root)

| Command | Description |
|--------|-------------|
| `npm run install:website` | Install dependencies in `website/` |
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server (after build) |
| `npm run lint` | ESLint |

## Deploy on Render (client preview URL)

1. Push this repo to GitHub (`https://github.com/aqibbilal188/Estimatex`).
2. Go to [dashboard.render.com](https://dashboard.render.com) → **New** → **Blueprint**.
3. Connect the **Estimatex** repo — Render reads `render.yaml` at the repo root.
4. Click **Apply** — first deploy takes ~5–10 minutes.
5. Your live URL will look like: **`https://estimatesx.onrender.com`** (send this to the client).

**Manual setup** (if you skip Blueprint): **New Web Service** → same repo → **Root Directory** = `website` → Build: `npm install && npm run build` → Start: `npm start` → Node 20.

Optional env var: `WORDPRESS_URL` = `https://estimatesx.com` (for blog posts from WordPress).

**Note:** Free tier sleeps after ~15 min idle; first visit may take ~30s to wake up.

## Other hosts

Build output is the standard Next.js app in `website/`. Also works on [Vercel](https://vercel.com), Netlify, or any Node host.

## Remote

```bash
git remote add origin https://github.com/aqibbilal188/Estimatex.git
git branch -M main
git push -u origin main
```
