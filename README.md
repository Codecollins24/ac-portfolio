# Ainomugisha Collins — Portfolio

Production-ready portfolio site for **Ainomugisha Collins**, a Full-Stack Web & Mobile Developer and CompTIA Security+ certified Cybersecurity Professional based in Lira City, Uganda.

Built as a fully client-side React app that runs entirely without a backend today, while its data/service layer is structured to plug into a future Django REST API with no component changes.

## Features

- Dark mode by default with a persisted light/dark theme toggle
- Sticky navigation with scroll-spy active-section highlighting and a mobile menu
- Framer Motion animations: staggered reveals, hover lift/glow, animated gradient background, floating hero image, animated count-up stats, an "AC" initials loading screen, and full `prefers-reduced-motion` support
- Sections: Home, About, Services, Tech Stack, Projects, Achievements, Contact
- Real achievement artifacts (CompTIA Security+, UCC Cyberstars competition, membership and debate certificates) with a live Credly verification link
- Contact form wired to [Formspree](https://formspree.io), with a graceful `mailto:` fallback if no endpoint is configured
- SEO: meta description, Open Graph, Twitter Card, canonical link, Person JSON-LD schema, `robots.txt`, `sitemap.xml`
- Accessible: semantic landmarks, `aria-labelledby` sections, keyboard-navigable, WCAG AA text contrast in both themes

## Tech Stack

- **React 19** + **Vite**
- **Framer Motion** for animation
- **Axios** (wired for future API calls; currently unused)
- **Lucide React** icons
- Custom CSS only — CSS variables, Grid, Flexbox (no Tailwind/Bootstrap/MUI)

## Folder Structure

```
src/
  assets/images/     Optimized real images (photo, certificates)
  components/        UI components, one .jsx + co-located .css per component
  context/           ThemeContext (dark/light theme state)
  data/              Mock content — hero, about, services, techStack, projects, achievements, contact
  hooks/             useTheme, useActiveSection, useCountUp
  services/          One function per data domain; currently reads local data,
                     structured to swap to axios calls against a Django API later
  styles/            variables.css (design tokens) + global.css (reset/utilities)
  utils/             iconMap (lucide icon lookup), navLinks (shared nav config)
public/
  cv/                Downloadable CV PDF
  images/            OG image, favicon-adjacent static assets
  robots.txt, sitemap.xml
```

## Getting Started

```bash
npm install
npm run dev       # start the dev server (default: http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Environment Variables

Copy `.env.example` to `.env` and fill in as needed:

| Variable | Purpose | If unset |
|---|---|---|
| `VITE_FORMSPREE_ENDPOINT` | Formspree form endpoint (e.g. `https://formspree.io/f/xxxxxxx`) for the contact form | Contact form falls back to opening a `mailto:` link |
| `VITE_API_URL` | Future Django REST API base URL | Every service reads local mock data from `src/data/` instead |

`.env` is gitignored — set these in Vercel's project settings (Environment Variables) for production too.

## Deployment (Vercel)

This is a static Vite build with no server-side routing, so Vercel's zero-config Vite detection is all that's needed:

1. Push this repo to GitHub (already done — see below).
2. In Vercel, **Import Project** → select the GitHub repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist`.
4. Add the environment variables above under Project Settings → Environment Variables.
5. Deploy. Update `og:url`, `twitter:image`, canonical link in `index.html`, and the `Sitemap:` URL in `public/robots.txt` / `public/sitemap.xml` to your real Vercel domain once assigned.

## Future Django Backend Integration

Nothing in `src/components` talks to `src/data` directly — every component calls a function in `src/services/*.js` (e.g. `getProjects()`, `getServices()`). Today those functions resolve local mock data from `src/data/*.js`. To connect the real Django REST API later:

1. Set `VITE_API_URL` to the deployed API base URL.
2. In each `src/services/*.js` file, replace the `Promise.resolve(mockData)` body with the corresponding `apiClient.get("/api/...")` call (the axios instance in `src/services/api.js` already reads `VITE_API_URL`).
3. No component code needs to change — they only depend on the service function's return shape.

Planned endpoints: `/api/hero/`, `/api/stats/`, `/api/about/`, `/api/services/`, `/api/tech-stack/`, `/api/projects/`, `/api/achievements/`, `/api/contact-info/`.

## License

Personal portfolio — all rights reserved.
