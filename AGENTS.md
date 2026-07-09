# CertiByt Frontend

## Tech Stack
- **Runtime**: Node.js 22 (ESM, `"type": "module"`)
- **Frontend**: React 19 + TypeScript, Vite, Tailwind CSS v3, Wouter (routing)
- **Package manager**: npm

## Shell Commands
```powershell
npm run dev       # Start Vite dev server (localhost:5173)
npm run build     # tsc -b && vite build -> dist/
npm run preview   # Preview production build locally
npm run lint      # oxlint
```

## Project Structure
```
certi-frontend/
├── src/
│   ├── pages/
│   │   ├── Home.tsx            # Composes homepage sections
│   │   └── HowItWorks.tsx      # /how-it-works route
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed, transparent->solid on scroll, dropdown menus
│   │   ├── Footer.tsx          # Site-wide, rendered in App.tsx outside the router
│   │   ├── Hero.tsx
│   │   ├── TrustedBy.tsx
│   │   ├── Certifications.tsx
│   │   ├── JourneySteps.tsx
│   │   ├── SecureAssessment.tsx
│   │   └── VerifiedCredential.tsx
│   ├── assets/                 # Images (webp preferred, see Image Handling below)
│   │   └── icons/               # Provided step/feature artwork
│   ├── App.tsx                 # Router (wouter Switch/Route) + Navbar + Footer shell
│   ├── main.tsx                # React root
│   └── index.css               # Tailwind directives + global resets
├── public/                     # favicon.png, static files served as-is
├── .github/workflows/deploy.yml  # Builds and deploys to GitHub Pages on push to main
├── vite.config.ts              # base is '/certi-frontend/' in build, '/' in dev — do not hardcode one value
├── tailwind.config.js
└── package.json
```

## Key Conventions
- **Routing**: `wouter`. Use `<Link href="...">` from wouter for in-app routes (client-side nav); plain `<a href>` is fine for routes that don't exist yet.
- **New pages**: add to `src/pages/`, register in `src/App.tsx`'s `<Switch>`. Navbar/Footer wrap all routes automatically — don't re-add them per page.
- **Styling**: Tailwind utility classes only. No inline `style={{}}` props (lint-enforced) and no styled-components/CSS modules — if a dynamic value is needed (e.g. an image url), prefer an actual `<img>` with Tailwind's `object-*` utilities over inline `background-image`.
- **Imports**: relative imports (`../components/...`, `../assets/...`). No path aliases configured yet.
- **Icons**: inline SVG components co-located in the file that uses them (see any component's `*Icon` helper) — no icon library installed. When real artwork is provided for a section, swap the SVG placeholder for the image import; don't leave both.

## Design System
- **Palette**: white + royal blue (`royal`, `royal-600`, `royal-700`) + deep navy (`navy`, `navy-950`) + soft cyan glow (`cyan-glow`) accent. Defined in `tailwind.config.js` under `theme.extend.colors`.
- **Base theme is light**: white backgrounds, navy text/headings, royal blue CTAs/links. Cyan glow is an accent only (blurred background blobs, hover glows) — not a background fill. Dark panels (navy bg) are used selectively for contrast sections (e.g. `SecureAssessment`, `Footer`), not site-wide.
- **Container width**: `max-w-[1600px]` with `px-6 sm:px-10 lg:px-16` — used consistently across Navbar/Hero/TrustedBy/sections so content aligns. Don't reintroduce `max-w-7xl` (it leaves large empty gutters on wide monitors).
- **Navbar**: `fixed` (not `sticky`) so it overlays the Hero image; transparent until `scrollY > 8`, then solid `bg-white/80 backdrop-blur-xl`.
- Logo: `light_themeee.png` on light/transparent nav, `dark_themeee.png` on dark backgrounds (Footer).

## Image Handling
- **Always compress before committing.** Source PNGs/JPGs from design tools have been 1.7MB–6.5MB; uncompressed images caused a multi-second load time (see git history around the Hero image fix).
- Workflow: `npx --yes sharp-cli -i "src/assets/<name>.png" -o "src/assets/<name>.webp" -q 80 resize <maxWidthPx>` then delete the source PNG/JPG once the `.webp` is wired up and building cleanly. Typical target: q78–82, resize to ~1400–2000px depending on how large the image renders.
- Hero/LCP images: add `fetchPriority="high"` on the `<img>`.
- Below-the-fold images: add `loading="lazy"`.

## Deployment
- GitHub Pages via `.github/workflows/deploy.yml`, triggered on push to `main`. Repo Pages source must be set to "GitHub Actions" once in repo settings (Settings → Pages) — this can't be done via CLI without `gh`.
- Live at `https://aman-0402.github.io/certi-frontend/`.
- `vite.config.ts` sets `base` conditionally (`command === 'build' ? '/certi-frontend/' : '/'`). If this ever gets hardcoded to the Pages path, the dev server breaks (blank page — JS/CSS 404 under the wrong prefix). Keep it conditional.

## Git Workflow (this repo specifically)
- **Commit and push after every change** — don't wait to be asked. Still pause for genuinely destructive ops (force-push, history rewrite).
- **No co-author trailer.** Do not add `Co-authored-by: Claude` or any co-author line — user is sole commit author in this repo.
- Verify before committing: `npx tsc -b` and `npm run build` should both pass clean.

## Known Gaps / Not Yet Built
- Most nav/footer links (`/certifications`, `/organizations/...`, `/resources/...`, `/verify`, `/about`, `/sign-in`, `/get-certified`) point to routes that don't exist yet — plain anchors, not wired to wouter `<Route>`s.
- No backend/API integration yet (this is frontend-only so far).
- No test suite configured.
