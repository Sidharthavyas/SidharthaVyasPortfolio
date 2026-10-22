# Sidhartha Vyas — Portfolio

Live: https://sidhartha-vyas-portfolio.vercel.app

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Updating content

Almost everything lives in **`src/app/data/portfolio.ts`**:

| What | Where |
|---|---|
| Email, LinkedIn, GitHub, WhatsApp | `LINKS` (used by every component) |
| Skills | `skills` (new category? add a color in `components/Skills.tsx`) |
| Work history | `experience` (newest first; the first entry is highlighted) |
| Projects | `projects`. `featured: true` puts it in the big cards; `client: true` adds the "Client project" badge |
| Case studies | `caseStudies`, keyed by project `id`. A card shows "View Case Study" only when one exists |

Other places:

- Hero headline, rotating words and stats: `src/app/components/Hero.tsx`
- About text and the four pillars: `src/app/components/About.tsx`
- Page title, description and share preview: `index.html` and `public/og.png` (1200x630)

GitHub stats, the contribution calendar and the language chart load live from GitHub. If GitHub
is unreachable they show "–" and a link instead of placeholder numbers.

`vercel.json` sends every route to `index.html`, so `/case-study/...` links work when opened
directly or refreshed.
