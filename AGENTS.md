# CertiByt Frontend

## Tech Stack
- **Runtime**: Node.js 22 (ESM, `"type": "module"`)
- **Frontend**: React 19 + TypeScript, Vite, Tailwind CSS v3, Wouter (routing), Framer Motion (animation)
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
│   │   ├── Home.tsx                  # Composes homepage sections
│   │   ├── HowItWorks.tsx            # /how-it-works
│   │   ├── CertificationsCatalog.tsx # /certifications — search/filter/sort catalog
│   │   ├── Universities.tsx          # /organizations/universities
│   │   ├── TrainingInstitutes.tsx    # /organizations/training-institutes
│   │   ├── CorporateOrganizations.tsx # /organizations/corporate
│   │   ├── PartnerEnquiry.tsx        # /organizations/partner — partnership enquiry form
│   │   └── ComingSoon.tsx            # Generic placeholder for not-yet-built routes
│   ├── components/
│   │   ├── Navbar.tsx                # Fixed, transparent->solid on scroll, click-to-toggle dropdowns
│   │   ├── Footer.tsx                # Site-wide, rendered in App.tsx outside the router
│   │   ├── Hero.tsx, TrustedBy.tsx, Certifications.tsx, JourneySteps.tsx,
│   │   │   SecureAssessment.tsx, VerifiedCredential.tsx   # Home page sections
│   │   ├── certifications/           # CatalogHero, FilterSidebar, CertCard, CertIcon,
│   │   │                             # FeaturedBanner, TrustGrid, CertificatePreview, JourneyCTA
│   │   ├── universities/             # UniversityHero, CollaborationProcess, WhyCertiByt, PartnershipCTA
│   │   ├── training/                 # TrainingHero, TrainingToCertification, WhyTrainingInstitutes,
│   │   │                             # TrainingPartnershipCTA
│   │   ├── corporate/                # CorporateHero, CorporateProcess, WorkforceInfrastructure,
│   │   │                             # CorporatePartnershipCTA
│   │   └── partner/                  # PartnerHero, WhoCanPartner, PartnerProcess, EnquiryForm,
│   │                                 # PartnerFinalCTA
│   ├── data/
│   │   └── certifications.ts         # Mock certification catalog (see Data below)
│   ├── assets/                       # Images (webp preferred, see Image Handling below)
│   │   └── icons/                    # Provided step/feature artwork
│   ├── App.tsx                       # Router (wouter Router+Switch/Route) + Navbar + Footer shell
│   ├── main.tsx                      # React root
│   └── index.css                     # Tailwind directives + global resets
├── public/                           # favicon.png, static files served as-is
├── .github/workflows/deploy.yml      # Builds and deploys to GitHub Pages on push to main
├── vite.config.ts                    # base is '/certi-frontend/' in build, '/' in dev — do not hardcode one value
├── tailwind.config.js
└── package.json
```

## Key Conventions
- **Routing**: `wouter`. App is wrapped in `<Router base={import.meta.env.BASE_URL}>` (trailing slash stripped) so paths resolve correctly both at dev root and under the `/certi-frontend/` GitHub Pages prefix — always use `Link`/`useLocation` from `wouter`, never raw `window.location`.
- **Every internal link uses `<Link href="...">`** from wouter, never a plain `<a href>` — plain anchors force a full page reload. External links (socials, etc.) stay as `<a target="_blank" rel="noreferrer">`.
- **Routes without a real page yet** render `<ComingSoon title="..." />`, registered via the `COMING_SOON_ROUTES` array in `App.tsx` — add new stub links there so nothing dead-ends, then swap the entry for a real `<Route path=... component={...} />` once the page is built (see recent history for the pattern: Certifications, Universities, TrainingInstitutes, CorporateOrganizations, PartnerEnquiry were all built this way).
- **New pages**: add to `src/pages/`, register in `src/App.tsx`'s `<Switch>` **and** link it from wherever it should be reachable (nav dropdown, footer column, cross-links on sibling pages) — building the page is not enough, it must actually be linked or it's unreachable except by typing the URL.
- **Styling**: Tailwind utility classes only. No inline `style={{}}` props (lint-enforced) and no styled-components/CSS modules — if a dynamic value is needed (e.g. an image url), prefer an actual `<img>` with Tailwind's `object-*` utilities over inline `background-image`.
- **Imports**: relative imports (`../components/...`, `../assets/...`). No path aliases configured yet.
- **Icons**: inline SVG components co-located in the file that uses them (see any component's `*Icon` helper) — no icon library installed. When real artwork is provided for a section, swap the SVG placeholder for the image import; don't leave both.
- **Animation**: `framer-motion` is installed — used for fade-up on scroll (`whileInView`), hover lift (`whileHover={{ y: -4 }}`), and floating/looping animations on hero visuals. Keep it subtle; don't animate every element.
- **Forms**: no backend exists (see Known Gaps), so forms are local-only — validate client-side, hold state in `useState`, and swap the form body for a success-state card on submit (never a browser `alert()`). See `components/partner/EnquiryForm.tsx` for the reference pattern (native `required`/`type=email` validation plus manual validation for the multi-select and checkbox fields wouter/HTML can't validate natively).

## Design System
- **Palette**: white + royal blue (`royal`, `royal-600`, `royal-700`) + deep navy (`navy`, `navy-950`) + soft cyan glow (`cyan-glow`) accent. Defined in `tailwind.config.js` under `theme.extend.colors`.
- **Base theme is light**: white backgrounds, navy text/headings, royal blue CTAs/links. Cyan glow is an accent only (blurred background blobs, hover glows) — not a background fill. Dark panels (navy/royal gradient bg) are used selectively for closing CTA sections (e.g. `SecureAssessment`, `Footer`, every B2B page's final "Partnership CTA"), not site-wide.
- **Container width**: `max-w-[1600px]` with `px-6 sm:px-10 lg:px-16` — used consistently across Navbar/Hero/every page section so content aligns. Don't reintroduce `max-w-7xl` (it leaves large empty gutters on wide monitors).
- **Navbar**: `fixed` (not `sticky`) so it overlays hero images; transparent until `scrollY > 8`, then solid `bg-white/80 backdrop-blur-xl`. Dropdowns are **click-to-toggle**, not hover — hover-open was tried and reverted because it made items unselectable (menu would close mid-move from trigger to menu item).
- Logo: `light_themeee.png` on light/transparent nav, `dark_themeee.png` on dark backgrounds (Footer).
- **B2B page pattern** (Universities / Training Institutes / Corporate Organizations / Partner Enquiry): each follows Hero → Process (icon flow strip + 4 numbered steps with dashed connectors) → Benefit cards (3 or 4, icon + title + desc) → gradient Partnership CTA (navy→royal, custom SVG illustration, never a stock photo or globe). Keep these pages **short** — this is an explicit, repeated user instruction: no testimonials, stats, pricing, FAQs, or case studies until there's real partner evidence to back them.
- **Process/CTA illustrations**: when a section spec says "no large image" / "no people" / "premium 3D visual" / "no globe", build an inline SVG illustration (icon nodes + dashed glowing connector lines, `#5eead4` cyan / `#7c9cff` light-royal on transparent), not a photo. Only use a real uploaded image when the spec explicitly says "use your uploaded X image."

## Data
- `src/data/certifications.ts` — mock certification catalog (`CERTIFICATIONS` array), typed `Certification[]`. Includes a `certificateIncluded: boolean` flag — **only set `true` when a cert is actually meant to issue a credential**; this models the real backend rule ("an exam without a configured certificate template can still run but doesn't issue a certificate") so the UI's "Digital Certificate Included" badge stays honest once real data replaces the mock.
- No backend exists yet — this data is hardcoded, structured so a real API response with the same shape can drop in later.

## Image Handling
- **Always compress before committing.** Source PNGs/JPGs from design tools have been 1.7MB–7.6MB; uncompressed images caused multi-second load times (see git history around the Hero image fix).
- Workflow: `npx --yes sharp-cli -i "src/assets/<name>.png" -o "src/assets/<name>.webp" -q 80 resize <maxWidthPx>` then delete the source PNG/JPG once the `.webp` is wired up and building cleanly. Typical target: q78–82, resize to ~1400–2000px depending on how large the image renders.
- Hero/LCP images: add `fetchPriority="high"` on the `<img>`.
- Below-the-fold images: add `loading="lazy"`.
- **Asset supply has run out**: every provided source photo in `src/assets/` has now been consumed by some page (Home hero/sections, How It Works steps, Certifications catalog, and one generic leftover image each for Universities/Training/Corporate hero placeholders). Any *new* page needing a real photo will need a new asset from the user — don't reuse an already-committed one across unrelated pages, and don't fabricate a substitute beyond an SVG illustration.

## Deployment
- GitHub Pages via `.github/workflows/deploy.yml`, triggered on push to `main`. Repo Pages source must be set to "GitHub Actions" once in repo settings (Settings → Pages) — this can't be done via CLI without `gh`.
- Live at `https://aman-0402.github.io/certi-frontend/`.
- `vite.config.ts` sets `base` conditionally (`command === 'build' ? '/certi-frontend/' : '/'`). If this ever gets hardcoded to the Pages path, the dev server breaks (blank page — JS/CSS 404 under the wrong prefix). Keep it conditional.
- The build workflow copies `dist/index.html` to `dist/404.html` so direct links/refreshes to non-root routes (e.g. `/certifications`) don't 404 on GitHub Pages' static hosting — SPA routing needs this since there's no server to rewrite the path.

## Git Workflow (this repo specifically)
- **Commit and push after every change** — don't wait to be asked. Still pause for genuinely destructive ops (force-push, history rewrite).
- **No co-author trailer.** Do not add `Co-authored-by: Claude` or any co-author line — user is sole commit author in this repo.
- Verify before committing: `npx tsc -b` and `npm run build` should both pass clean.
- **Dev server hygiene**: this project has repeatedly ended up with multiple stale `vite` processes on ports 5173/5174 from earlier sessions (started before a config change like the Pages `base` fix), serving stale/broken output. If something looks broken in-browser but the code/build is correct, check `netstat -ano | findstr LISTENING | findstr "517"` for duplicate dev servers before debugging further, kill stale PIDs, and restart clean.

## Known Gaps / Not Yet Built
- Still `ComingSoon`-stubbed: `/organizations` (overview), `/certifications/categories`, `/certifications/featured`, `/certifications/:slug` (detail page), `/resources/*`, `/verify`, `/about`, `/sign-in`, `/get-certified`, `/contact`, `/privacy`, `/terms`. See `COMING_SOON_ROUTES` in `App.tsx` for the current list.
- No backend/API integration yet (this is frontend-only so far). The partner enquiry form submits locally only — no network call.
- **Product note for whenever the backend exists**: the partner enquiry form must NOT auto-create an organization account on submit — it should create a reviewable lead only; account creation is a separate deliberate step after CertiByt's team reviews the enquiry.
- No test suite configured.
