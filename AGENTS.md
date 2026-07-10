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
│   │   ├── Home.tsx                   # Composes homepage sections
│   │   ├── HowItWorks.tsx             # /how-it-works
│   │   ├── CertificationsCatalog.tsx  # /certifications — search/filter/sort catalog
│   │   ├── Universities.tsx           # /organizations/universities
│   │   ├── TrainingInstitutes.tsx     # /organizations/training-institutes
│   │   ├── CorporateOrganizations.tsx # /organizations/corporate
│   │   ├── PartnerEnquiry.tsx         # /organizations/partner — partnership enquiry form
│   │   ├── VerifyCertificate.tsx      # /verify — Certificate ID lookup + result
│   │   ├── About.tsx                  # /about
│   │   ├── SecureAssessments.tsx      # /resources/secure-assessments
│   │   ├── DigitalCredentials.tsx     # /resources/digital-credentials
│   │   ├── HelpSupport.tsx            # /resources/help — FAQ + support request form
│   │   └── ComingSoon.tsx             # Generic placeholder for not-yet-built routes
│   ├── components/
│   │   ├── Navbar.tsx                 # Fixed, transparent->solid on scroll, click-to-toggle dropdowns
│   │   ├── Footer.tsx                 # Site-wide, rendered in App.tsx outside the router
│   │   ├── Hero.tsx, TrustedBy.tsx, Certifications.tsx,
│   │   │   SecureAssessment.tsx, VerifiedCredential.tsx    # Home page sections
│   │   ├── certifications/            # CatalogHero, FilterSidebar, CertCard, CertIcon,
│   │   │                              # FeaturedBanner, TrustGrid, CertificatePreview, JourneyCTA
│   │   ├── universities/              # UniversityHero, CollaborationProcess, WhyCertiByt, PartnershipCTA
│   │   ├── training/                  # TrainingHero, TrainingToCertification, WhyTrainingInstitutes,
│   │   │                              # TrainingPartnershipCTA
│   │   ├── corporate/                 # CorporateHero, CorporateProcess, WorkforceInfrastructure,
│   │   │                              # CorporatePartnershipCTA
│   │   ├── partner/                   # PartnerHero, WhoCanPartner, PartnerProcess, EnquiryForm,
│   │   │                              # PartnerFinalCTA
│   │   ├── verify/                    # VerifyHero, VerificationResult, FindCertificateId
│   │   ├── about/                     # AboutHero, OurPurpose, WhatWereBuilding, OurVision, AboutFinalCTA
│   │   ├── secureAssessments/         # SecureAssessmentsHero, ProtectionGrid, AssessmentJourney,
│   │   │                              # SecureAssessmentsFinalCTA
│   │   ├── digitalCredentials/        # CredentialsHero, WhatMakesVerifiable, CredentialJourney,
│   │   │                              # CredentialsFinalCTA
│   │   └── help/                      # HelpHero, HelpTopics, ContactSupport
│   ├── data/
│   │   ├── certifications.ts          # Mock certification catalog (see Data below)
│   │   ├── certificates.ts            # Mock Certificate-ID -> verification-record lookup
│   │   └── helpTopics.ts              # Help Center topics + FAQ articles
│   ├── assets/                        # Images (webp preferred, see Image Handling below)
│   │   └── icons/                     # Provided step/feature artwork
│   ├── App.tsx                        # Router (wouter Router+Switch/Route) + Navbar + Footer shell
│   ├── main.tsx                       # React root
│   └── index.css                      # Tailwind directives + global resets
├── public/                            # favicon.png, static files served as-is
├── .github/workflows/deploy.yml       # Builds and deploys to GitHub Pages on push to main
├── vite.config.ts                     # base is '/certi-frontend/' in build, '/' in dev — do not hardcode one value
├── tailwind.config.js
└── package.json
```

## Key Conventions
- **Routing**: `wouter`. App is wrapped in `<Router base={import.meta.env.BASE_URL}>` (trailing slash stripped) so paths resolve correctly both at dev root and under the `/certi-frontend/` GitHub Pages prefix — always use `Link`/`useLocation` from `wouter`, never raw `window.location`.
- **Every internal link uses `<Link href="...">`** from wouter, never a plain `<a href>` — plain anchors force a full page reload. External links (socials, etc.) stay as `<a target="_blank" rel="noreferrer">`.
- **Scroll-to-top on route change** is handled once in `App.tsx` (`useEffect(() => window.scrollTo(0, 0), [location])`) — don't duplicate this per-page.
- **Routes without a real page yet** render `<ComingSoon title="..." />`, registered via the `COMING_SOON_ROUTES` array in `App.tsx` — add new stub links there so nothing dead-ends, then swap the entry for a real `<Route path=... component={...} />` once the page is built. Nearly every planned page has now been built this way (see Known Gaps for what's left).
- **New pages**: add to `src/pages/`, register in `src/App.tsx`'s `<Switch>` **and** link it from wherever it should be reachable (nav dropdown, footer column, cross-links on sibling pages) — building the page is not enough, it must actually be linked or it's unreachable except by typing the URL. This has been missed before (Organizations overview page) — double-check after building.
- **Styling**: Tailwind utility classes only. No inline `style={{}}` props (lint-enforced) and no styled-components/CSS modules — if a dynamic value is needed (e.g. an image url), prefer an actual `<img>` with Tailwind's `object-*` utilities over inline `background-image`.
- **Imports**: relative imports (`../components/...`, `../assets/...`). No path aliases configured yet.
- **Icons**: inline SVG components co-located in the file that uses them (see any component's `*Icon` helper) — no icon library installed. When real artwork is provided for a section, swap the SVG placeholder for the image import; don't leave both.
- **Animation**: `framer-motion` is installed — used for fade-up on scroll (`whileInView`), hover lift (`whileHover={{ y: -4 }}`), and floating/looping animations on hero visuals. Keep it subtle; don't animate every element.
- **Forms**: no backend exists (see Known Gaps), so forms are local-only — validate client-side, hold state in `useState`, and swap the form body for a success-state card on submit (never a browser `alert()`). See `components/partner/EnquiryForm.tsx` for the reference pattern (native `required`/`type=email` validation plus manual validation for the multi-select and checkbox fields wouter/HTML can't validate natively).
- **Responsive**: the whole site is built mobile-first — `grid-cols-1` base with `sm:`/`lg:` breakpoints added, never an unprefixed multi-column grid. This has been verified with real headless-browser screenshots (Playwright — see Responsive Testing below), not just code review. Keep following this pattern for new sections.

## Design System
- **Palette**: white + royal blue (`royal`, `royal-600`, `royal-700`) + deep navy (`navy`, `navy-950`) + soft cyan glow (`cyan-glow`) accent. Defined in `tailwind.config.js` under `theme.extend.colors`.
- **Base theme is light**: white backgrounds, navy text/headings, royal blue CTAs/links. Cyan glow is an accent only (blurred background blobs, hover glows) — not a background fill. Dark panels (navy/royal gradient bg) are used selectively for closing CTA sections (e.g. `SecureAssessment`, `Footer`, every B2B page's final "Partnership CTA"), not site-wide.
- **Container width**: `max-w-[1600px]` with `px-6 sm:px-10 lg:px-16` — used consistently across Navbar/Hero/every page section so content aligns. Don't reintroduce `max-w-7xl` (it leaves large empty gutters on wide monitors).
- **Navbar**: `fixed` (not `sticky`) so it overlays hero images; transparent until `scrollY > 8`, then solid `bg-white/80 backdrop-blur-xl`. Dropdowns are **click-to-toggle**, not hover — hover-open was tried and reverted because it made items unselectable (menu would close mid-move from trigger to menu item). "Certifications" is a direct link (not a dropdown) straight to `/certifications`.
- Logo: `light_themeee.png` on light/transparent nav, `dark_themeee.png` on dark backgrounds (Footer).
- **B2B page pattern** (Universities / Training Institutes / Corporate Organizations / Partner Enquiry): each follows Hero → Process (icon flow strip + 4 numbered steps with dashed connectors) → Benefit cards (3 or 4, icon + title + desc) → gradient Partnership CTA (navy→royal, custom SVG illustration, never a stock photo or globe). Keep these pages **short** — this is an explicit, repeated user instruction: no testimonials, stats, pricing, FAQs, or case studies until there's real partner evidence to back them.
- **Resource page pattern** (Secure Assessments / Digital Credentials / Help & Support): Hero (badge + headline + trust points/search) → feature/protection grid (4 cards) → process journey (flow strip + 4 numbered steps) or FAQ topics → gradient final CTA. Same visual language as the B2B pages.
- **Process/CTA illustrations**: when a section spec says "no large image" / "no people" / "premium 3D visual" / "no globe", build an inline SVG illustration (icon nodes + dashed glowing connector lines, `#5eead4` cyan / `#7c9cff` light-royal on transparent), not a photo. Only use a real uploaded image when the spec explicitly says "use your uploaded X image," and prefer reusing an existing on-topic asset already in the repo (e.g. the real certificate image) over fabricating a new illustration when one is a better fit.
- **Background images that carry text**: use a gradient fade (e.g. `from-navy via-navy/70 to-navy/10`) rather than a heavy flat overlay — a too-dark gradient (`via-navy/85`+) has repeatedly needed correcting because it washes the image out. When in doubt, err toward the image being more visible, not less.

## Data
- `src/data/certifications.ts` — mock certification catalog (`CERTIFICATIONS` array), typed `Certification[]`. Includes a `certificateIncluded: boolean` flag — **only set `true` when a cert is actually meant to issue a credential**; this models the real backend rule ("an exam without a configured certificate template can still run but doesn't issue a certificate") so the UI's "Digital Certificate Included" badge stays honest once real data replaces the mock.
- `src/data/certificates.ts` — mock Certificate-ID verification lookup (`verifyCertificateId`) backing the `/verify` page. Seeded with one sample record (`CB-DS-2025-5A7F9C`); anything else returns not-found.
- `src/data/helpTopics.ts` — Help Center topics + FAQ articles backing `/resources/help`.
- No backend exists yet — all of this data is hardcoded, structured so a real API response with the same shape can drop in later.

## Image Handling
- **Always compress before committing.** Source PNGs/JPGs from design tools have been 1.7MB–7.6MB; uncompressed images caused multi-second load times (see git history around the Hero image fix).
- Workflow: `npx --yes sharp-cli -i "src/assets/<name>.png" -o "src/assets/<name>.webp" -q 80 resize <maxWidthPx>` then delete the source PNG/JPG once the `.webp` is wired up and building cleanly. Typical target: q78–82, resize to ~1400–2000px depending on how large the image renders.
- Hero/LCP images: add `fetchPriority="high"` on the `<img>`.
- Below-the-fold images: add `loading="lazy"`.
- **Asset supply runs out fast.** Every provided source photo gets consumed by whichever page needs it — don't reuse an already-committed image across unrelated pages, and don't fabricate a photographic substitute beyond an SVG illustration. When a page's spec calls for a real photo and none exists yet, either use the closest existing on-topic asset (documented per-page in commit history) or say so explicitly and wait for a new asset — don't silently skip the visual.

## Responsive Testing
- No `chromium-cli` / browser tool is available in this environment by default. For real (not just code-review) responsive verification, install Playwright's Chromium on demand: `npx --yes playwright install chromium`, then drive it with a small `.mjs` script (`chromium.launch()` → `newContext({ viewport })` → `page.goto()` → `page.screenshot()`), writing screenshots to the scratchpad and viewing them with the Read tool. `playwright` itself must be `npm install`ed somewhere resolvable (e.g. in the scratchpad dir) since bare `npx playwright` in a script's `import` won't resolve without a local `node_modules`.
- **Framer Motion `whileInView` cards render as invisible (opacity 0) in a single fast `page.screenshot({ fullPage: true })` capture** if Playwright scrolls through the page faster than the IntersectionObserver fires — this looks like a rendering bug (cards missing, big blank gaps) but isn't one. Verify real below-the-fold content by manually scrolling with a `waitForTimeout` between `window.scrollTo` and the screenshot, not by trusting a single full-page capture.
- This project has been audited this way once already (mobile 375px + desktop 1440px across 9 pages) with no real bugs found — the mobile-first Tailwind conventions above were already solid going in.

## Deployment
- GitHub Pages via `.github/workflows/deploy.yml`, triggered on push to `main`. Repo Pages source must be set to "GitHub Actions" once in repo settings (Settings → Pages) — this can't be done via CLI without `gh`.
- Live at `https://aman-0402.github.io/certi-frontend/`.
- `vite.config.ts` sets `base` conditionally (`command === 'build' ? '/certi-frontend/' : '/'`). If this ever gets hardcoded to the Pages path, the dev server breaks (blank page — JS/CSS 404 under the wrong prefix). Keep it conditional.
- The build workflow copies `dist/index.html` to `dist/404.html` so direct links/refreshes to non-root routes (e.g. `/certifications`) don't 404 on GitHub Pages' static hosting — SPA routing needs this since there's no server to rewrite the path.
- Production JS bundle has crossed the 500KB (minified) warning threshold now that most pages are built — not an error, just a Vite build note. Route-based code-splitting (`React.lazy` per page) would fix it if load time ever becomes a real complaint; not done yet since it hasn't been asked for.

## Git Workflow (this repo specifically)
- **Commit and push after every change** — don't wait to be asked. Still pause for genuinely destructive ops (force-push, history rewrite).
- **No co-author trailer.** Do not add `Co-authored-by: Claude` or any co-author line — user is sole commit author in this repo.
- Verify before committing: `npx tsc -b` and `npm run build` should both pass clean.
- **Dev server hygiene**: this project has repeatedly ended up with multiple stale `vite` processes on ports 5173/5174 from earlier sessions (started before a config change like the Pages `base` fix), serving stale/broken output. If something looks broken in-browser but the code/build is correct, check `netstat -ano | findstr LISTENING | findstr "517"` for duplicate dev servers before debugging further, kill stale PIDs, and restart clean.

## Known Gaps / Not Yet Built
- Still `ComingSoon`-stubbed: `/organizations` (overview), `/certifications/categories`, `/certifications/featured`, `/certifications/:slug` (detail page), `/resources/verification` (removed — was a duplicate of `/verify`), `/sign-in`, `/get-certified`, `/contact`, `/privacy`, `/terms`. See `COMING_SOON_ROUTES` in `App.tsx` for the current list.
- No backend/API integration yet (this is frontend-only so far). The partner enquiry form and support request form both submit locally only — no network call.
- **Product note for whenever the backend exists**: the partner enquiry form must NOT auto-create an organization account on submit — it should create a reviewable lead only; account creation is a separate deliberate step after CertiByt's team reviews the enquiry.
- No test suite configured.
