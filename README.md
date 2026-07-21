# Sanghpal Portfolio — Antigravity Edition

A modern, performant portfolio and service website for **Sanghpal Bhakte** — Full-Stack & AI Automation Developer based in Nagpur, India.

---

## Tech Stack

| Layer | Tool |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Build tool** | Vite 6 |
| **Styling** | Vanilla CSS (custom design system) |
| **Database** | Firebase Firestore (optional) |
| **Forms** | Netlify Forms |
| **Deployment** | Netlify |

---

## Project Structure

```
sanghpal-portfolio-antigravity/
├── public/                  # Static files served as-is (favicon, OG image, robots.txt)
├── src/
│   ├── assets/              # Images, SVGs, fonts bundled by Vite
│   ├── components/          # UI components (Nav, Hero, Services, Projects, About, Contact, Footer)
│   ├── data/                # Static content — portfolio.ts (all copy + type exports)
│   ├── hooks/               # Custom React hooks (e.g. useProjects for Firestore)
│   ├── lib/                 # Third-party clients (firebase.ts)
│   ├── types/               # Shared TypeScript interfaces
│   ├── App.tsx              # Root component, section layout
│   ├── main.tsx             # React DOM entry point
│   └── index.css            # Global design system (CSS custom properties)
├── .env.local.example       # Firebase credentials template (safe to commit)
├── .gitignore
├── index.html               # Entry HTML with SEO meta tags
├── netlify.toml             # Netlify build config + headers + SPA redirect
├── vite.config.ts
└── tsconfig.json
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and add your Firebase credentials
cp .env.local.example .env.local
# Edit .env.local with your Firebase project values

# 3. Start the dev server (hot-reload at http://localhost:5173)
npm run dev

# 4. Build for production → output in dist/
npm run build

# 5. Preview the production build locally
npm run preview
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Firebase values:

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

> **Never commit `.env.local`** — it is already in `.gitignore`.
> For Netlify: add these as Environment Variables in Site settings.

---

## Deployment

### Netlify (recommended)
1. Push this repo to GitHub
2. Connect to Netlify → build command `npm run build`, publish dir `dist`
3. Add the 6 `VITE_FIREBASE_*` env vars in Site settings → Environment variables
4. Netlify detects `netlify.toml` automatically — SPA routing and headers are pre-configured

### Vercel
1. Import repo → Framework preset: **Vite** — build `npm run build`, output `dist`
2. Add the same env vars before deploying

> Note: Netlify Forms (contact form) only works on Netlify.

---

## License

MIT — feel free to fork and adapt.
