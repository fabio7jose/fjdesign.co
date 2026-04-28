# CLAUDE.md — fjdesign.co Portfolio

> **Read this file first before touching any code.** Do not make any changes to this project without explicit approval from the user. This document is the authoritative briefing for every session.

---

## 1. Project Overview

Personal portfolio website for **Fábio José** — UX/UI & Web Designer, Creative Technologist & AI Builder based in Bahia, Brazil. Multi-page application — currently the Home page is a single long-scroll page with all sections; individual Case Study pages are planned (see §Planned Pages). Bilingual (PT/EN) with dark/light mode toggle. Both preferences are persisted to `localStorage`.

The project was initially prototyped and then heavily customized from scratch — this explains the `fjdesign-co` package name, the `figmaAssetResolver` Vite plugin, and the comment in `vite.config.ts` warning never to remove the React and Tailwind plugins even if Tailwind appears unused.

**Dev server:** `npm run dev` → `http://localhost:5173`
**Build:** `npm run build`

---

## Planned Pages

| Route | Status | Description |
|---|---|---|
| `/` | ✅ Live | Home — full single-scroll page with all sections (Hero, Work, Skills, Certifications, AI Lab, About, Contact) |
| `/work/[slug]` | 🔲 Planned | Case Study pages — one per project, with detailed process, images, and outcomes |

**Routing notes for when Case Study pages are built:**
- Routing is currently handled by `src/app/routes.tsx` via `react-router` v7 (`createBrowserRouter`). Add new routes there.
- Each case study slug should match the project `id` or a new `slug` field added to the `projects` array in `Work.tsx`.
- The "View case" hover CTA on project cards in `Work.tsx` currently has no `href` — it will need to become a `<Link to={/work/${slug}}>` when case study pages exist.
- Certification cards link to `href="#"` — they are a separate issue and not related to case study routing.

---

## 2. Tech Stack

| Layer | Library | Version |
|---|---|---|
| UI framework | React | 18.3.1 (peer dep) |
| Build tool | Vite | 6.3.5 |
| Language | TypeScript | (via Vite) |
| Styling | Tailwind CSS | 4.1.12 (via `@tailwindcss/vite`) |
| Animation | motion/react (Framer Motion v12) | 12.23.24 |
| Routing | react-router | 7.13.0 |
| Forms | react-hook-form | 7.55.0 |
| Form delivery | Formspree | `https://formspree.io/f/mojyprab` |
| Icons | lucide-react | 0.487.0 |
| Masonry grid | react-responsive-masonry | 2.7.1 |
| Carousel | embla-carousel-react | 8.6.0 |
| Component lib | shadcn/ui (Radix-based) | various — mostly unused |

**Important import aliases:**
- `motion/react` — NOT `framer-motion`. This is Framer Motion v12's new package name.
- `react-router` v7 — NOT `react-router-dom`. Uses `RouterProvider` + `createBrowserRouter`.
- `@` alias → `./src` (configured in `vite.config.ts`).

**Installed but unused:**
- `@mui/material` + `@emotion/react/styled` — present in package.json, not used in any component.
- ~20 shadcn components in `src/app/components/ui/` are never imported anywhere.

---

## 3. Project Structure

```
fjdesign.co/
├── index.html                    ← Entry HTML (needs meta tag work — see §8)
├── vite.config.ts                ← Vite config with figmaAssetResolver plugin
├── package.json                  ← Package manager: npm (pnpm config present but pnpm not installed)
├── src/
│   ├── main.tsx                  ← ReactDOM.createRoot entry point
│   └── app/
│       ├── App.tsx               ← ThemeContext + LangContext + RouterProvider root
│       ├── routes.tsx            ← Single route: '/' → Home
│       ├── i18n.ts               ← All translations (en + pt), exported `Translations` type
│       ├── pages/
│       │   └── Home.tsx          ← Assembles all sections in render order
│       └── components/
│           ├── Navbar.tsx        ← Fixed navbar, scroll detection, mobile menu
│           ├── Hero.tsx          ← Full-screen hero, stats, CTA button
│           ├── MarqueeBanner.tsx ← Infinite scrolling skills ticker
│           ├── Work.tsx          ← Project cards (featured + 2-col grid), filter pills
│           ├── Skills.tsx        ← 3 approach cards
│           ├── Certifications.tsx← Glide.js carousel (CDN-loaded)
│           ├── AILab.tsx         ← Masonry image grid with hover overlays
│           ├── About.tsx         ← Bio, education timeline, photo
│           ├── Contact.tsx       ← react-hook-form + Formspree POST
│           ├── Footer.tsx        ← Copyright, back-to-top link
│           ├── figma/
│           │   └── ImageWithFallback.tsx ← img with graceful error fallback
│           └── ui/               ← shadcn/Radix components (~50 files, mostly unused)
```

**Page section render order (Home.tsx):**
1. `<Navbar />` — fixed, z-index 100, height 72px
2. `<Hero />` — id="home"
3. `<MarqueeBanner />`
4. `<Work />` — id="work", section label "01"
5. 1px divider
6. `<Skills />` — id="skills", section label "02"
7. 1px divider
8. `<Certifications />` — id="certifications", section label "03"
9. 1px divider
10. `<AILab />` — id="ai-lab", section label "04"
11. 1px divider
12. `<About />` — id="about", section label "05"
13. 1px divider
14. `<Contact />` — id="contact", section label "06"
15. `<Footer />`

---

## 4. Design System

### Colors

All colors are computed inline per-component using `isDark` ternary. There is **no central CSS variables file** — this is the primary maintainability risk of the codebase.

| Token (conceptual) | Dark value | Light value |
|---|---|---|
| `bg` | `#0A0A0A` | `#F5F5F0` |
| `cardBg` | `#111111` | `#ffffff` |
| `text` | `#ffffff` | `#0A0A0A` |
| `textMuted` | `rgba(255,255,255,0.45)` | `rgba(10,10,10,0.45)` |
| `border` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)` |
| `accent` | `#AAFF00` (electric green) | `#5C8A00` (dark green) |
| `accentFg` | `#0A0A0A` (text ON accent bg) | `#ffffff` (text ON accent bg) |
| `accentAlpha` | `rgba(170,255,0,0.4)` | `rgba(92,138,0,0.3)` |
| `accentBg` | `rgba(170,255,0,0.04)` | `rgba(92,138,0,0.05)` |
| `tagBg` | `rgba(255,255,255,0.06)` | `rgba(0,0,0,0.05)` |

**Warning — inconsistency:** `textMuted` opacity is not uniform. Navbar uses `0.4`, Skills uses `0.55`, others use `0.45`. Standardise before adding new sections.

### Fonts

Loaded via Google Fonts (in `index.html` or CSS — verify before adding new weights):
- **Space Grotesk** — headings, logo "FJ.", section titles, card titles, nav mobile menu
- **Inter** — body text, labels, tags, form inputs, small metadata

### Spacing Convention

- Section padding: `80px 2rem` (all sections except Hero and Certifications)
- Hero padding: `calc(72px + 40px) 2rem 40px` (accounts for fixed navbar height)
- Certifications padding: `80px 0` with manual inner padding `0 2rem` (required by Glide overflow logic)
- Max-width container: `maxWidth: '1400px', margin: '0 auto'`
- Navbar height: `72px` — hardcoded in multiple places, do not change without updating Hero padding

### Theme & Language Persistence

```ts
// Theme
localStorage.setItem('fabio-theme', isDark ? 'dark' : 'light')
// Default: dark

// Language
localStorage.setItem('fabio-lang', lang)  // 'pt' | 'en'
// Default: pt (Portuguese)
```

Both contexts are provided at the root in `App.tsx` via `ThemeContext` and `LangContext`. Any component accesses them via:

```ts
const { isDark, toggleTheme } = useTheme()
const { t, lang, toggleLang } = useLang()
```

---

## 5. i18n System

All strings live in `src/app/i18n.ts`. The file exports `translations` with `en` and `pt` keys, and a `Translations` type derived from the `en` object.

**Critical gotcha:** There is no compile-time enforcement that `pt` has all the same keys as `en`. The `Translations` type is derived only from `en`. If you add a new string to `en` and forget `pt`, TypeScript will not error — the app will show `undefined` silently in Portuguese mode.

**Pattern for adding new strings:**
1. Add the key to `translations.en`
2. Add the same key to `translations.pt` immediately — never leave it incomplete
3. Access via `t.section.key` in the component

---

## 6. Styling Approach & Rules

**~90% of styling is via inline React `style` objects.** Tailwind is used only for responsive layout utilities (`hidden md:flex`, `grid-cols-1 md:grid-cols-2`, `flex-shrink-0`, etc.).

This is intentional to the project's current architecture. When making changes:
- Do not introduce CSS modules or styled-components without discussion
- Do not add Tailwind utility classes for colors — use the inline `isDark` pattern
- Always derive new color values from the token table in §4, not from arbitrary hex values
- Every component that uses colors must read `const { isDark } = useTheme()` and compute its own local color variables at the top

**Standard per-component color block pattern:**
```ts
const text      = isDark ? '#ffffff' : '#0A0A0A'
const textMuted = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)'
const border    = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
const bg        = isDark ? '#0A0A0A' : '#F5F5F0'
const accent    = isDark ? '#AAFF00' : '#5C8A00'
const accentFg  = isDark ? '#0A0A0A' : '#ffffff'
```

---

## 7. Features Already Implemented

- [x] Dark / light mode toggle (persisted to localStorage, default: dark)
- [x] PT / EN language toggle (persisted to localStorage, default: PT)
- [x] Fixed navbar with scroll-aware frosted glass background
- [x] Mobile hamburger menu (full-screen overlay)
- [x] Hero with animated entrance, background watermark text, stat counters, CTA
- [x] Infinite marquee skills banner
- [x] Work section: featured card + 2×2 grid, filter pills by category
- [x] Project card hover overlay with "View case" pill
- [x] Skills section: 3 approach cards with scroll-triggered animation
- [x] Certifications carousel (Glide.js, responsive perView: 1/2/3/4)
- [x] AI Lab masonry grid with hover overlays and play button for video tiles
- [x] About section with bio and education timeline
- [x] Contact form with react-hook-form validation
- [x] Contact form Formspree integration (endpoint: `https://formspree.io/f/mojyprab`)
- [x] Contact form loading state + error handling
- [x] Social links: LinkedIn, GitHub, Behance, Email
- [x] Scroll-triggered entrance animations (motion/react, `whileInView`, `once: true`)
- [x] `ImageWithFallback` component for graceful image error states

---

## 8. Pending Fixes (from Code Review — April 2026)

### 🟡 Medium Priority

✅ **M1 — Certifications carousel: CDN dependency with no fallback** — Fixed — April 2026
`src/app/components/Certifications.tsx` — Glide.js CSS and JS are injected at runtime from jsDelivr CDN. If the CDN is unavailable, the carousel silently breaks with no user feedback. `embla-carousel-react` is already installed in `package.json` and is the recommended replacement — it would eliminate the CDN dependency entirely.

**M2 — Certifications carousel: touch thresholds too aggressive**
`src/app/components/Certifications.tsx` lines 96–97 — `dragThreshold: 20` and `swipeThreshold: 40` cause accidental swipes during vertical scrolling on mobile. Increase to ~40 and ~70 respectively.

✅ **M3 — Contact form: no `<label>` elements (WCAG violation)** — Fixed — April 2026
`src/app/components/Contact.tsx` lines 175–251 — All inputs use placeholder text only. Placeholders disappear when typing and are insufficient for screen readers. Add proper `<label>` elements. This is a WCAG 2.1 Level A violation.

✅ **M4 — i18n: no compile-time key parity guarantee** — Fixed — April 2026
`src/app/i18n.ts` — Create a shared `TranslationShape` interface and assert both `en` and `pt` against it, so missing keys cause a TypeScript error at build time.

✅ **M5 — Theme flash on initial load** — Fixed — April 2026
`src/app/App.tsx` — When the stored theme differs from the default, a visible color flash occurs on first render. Standard fix: add a `no-transition` class to `<html>` during the first render cycle and remove it after mount.

✅ **M6 — Muted text opacity inconsistency** — Fixed — April 2026
Navbar uses `0.4`, Skills uses `0.55`, all others use `0.45`. Standardise to a single value across all components.

### 🟢 Low Priority

**L1 — index.html: missing production metadata**
- Title is `"Site portfólio project"` — change to `"Fábio José — UX/UI & Web Designer"`
- Missing Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Missing `twitter:card` tag
- Missing `theme-color` meta for mobile browser chrome
- Missing favicon link

**L2 — Hero.tsx: scroll indicator may be clipped**
`src/app/components/Hero.tsx` — Scroll indicator is positioned at `bottom: '-3rem'`. On short viewports or expanded browser UI it may not be visible.

**L3 — Hero.tsx: no safe-area inset for notched phones**
Padding uses hardcoded `calc(72px + 40px)`. On iPhone with Dynamic Island: `calc(72px + 40px + env(safe-area-inset-top, 0px))`.

**L4 — Navbar.tsx: mobile menu has no focus trap or Escape key handler**
`src/app/components/Navbar.tsx` lines 180–219 — Keyboard-only users can navigate behind the open overlay. Should trap focus inside and close on Escape.

**L5 — Certifications.tsx: no keyboard navigation; cert links are `href="#"`**
Arrow keys don't advance the carousel. All certification cards link to `href="#"` which is a no-op. Links should either point to real certification URLs or be `<button>` elements.

**L6 — Certifications.tsx: scroll hint fails contrast at 30% opacity**
Hint text at `rgba(10,10,10,0.3)` in light mode likely fails WCAG AA contrast ratio (min 4.5:1).

**L7 — Bundle bloat: ~20 unused shadcn components**
`src/app/components/ui/` contains components never imported anywhere: `accordion`, `breadcrumb`, `calendar`, `command`, `context-menu`, `dialog`, `drawer`, `hover-card`, `navigation-menu`, `pagination`, `popover`, `resizable`, `sidebar`, `tabs`, `toggle`, `toggle-group`, and more. Run `vite-bundle-visualizer` to confirm and prune.

**L8 — No `React.memo` on card components**
`ProjectCard` in `Work.tsx` and masonry tiles in `AILab.tsx` re-render on every theme or language change. Wrapping in `React.memo` is a low-effort perf improvement.

---

## 9. Important Gotchas & Notes

1. **Custom origin (`fjdesign-co`).** The Vite config has a `figmaAssetResolver` plugin that maps `figma:asset/*` imports to `src/assets/`. The comment explicitly says: _"The React and Tailwind plugins are both required for Make, even if Tailwind is not being actively used — do not remove them."_ Do not touch the Vite plugin array.

2. **`motion/react` not `framer-motion`.** This is Framer Motion v12. The import is `import { motion } from 'motion/react'`. Do not use `framer-motion`.

3. **`react-router` v7, not `react-router-dom`.** Uses `createBrowserRouter` + `RouterProvider`. Do not import from `react-router-dom`.

4. **No TypeScript strict mode.** `(window as any).Glide` in `Certifications.tsx` is intentional to access the CDN-injected global. If strict mode is ever enabled, this needs a proper ambient declaration.

5. **Formspree endpoint is live.** `Contact.tsx` posts to `https://formspree.io/f/mojyprab`. This is the real production endpoint tied to the user's email. Do not change it without confirmation.

6. **Package manager is npm.** `package.json` has a `pnpm.overrides` section but pnpm is not installed on this machine. Use `npm install` and `npm run dev`.

7. **All project data is hardcoded.** Projects in `Work.tsx`, certifications in `Certifications.tsx`, and tiles in `AILab.tsx` are all static arrays in the component files — there is no CMS or data layer.

8. **Unsplash images.** All project and AI Lab images use Unsplash URLs with signed tokens. If images stop loading, the `ImageWithFallback` component handles the error gracefully with a placeholder.

9. **Section IDs must match Navbar hrefs.** Navbar links use `document.getElementById(id)` with `scrollIntoView`. The section IDs are: `home`, `work`, `skills`, `certifications`, `ai-lab`, `about`, `contact`. Do not change them without updating `Navbar.tsx`.

10. **Inline styles make global theme changes expensive.** To change a color used across all sections, you must update each component individually. This is the biggest structural debt in the project.

---

## 10. Instructions for Future Sessions

1. **Always read this file first.** It contains decisions made in previous sessions that are not obvious from the code alone.
2. **Never make changes without explicit user approval.** Present your plan and wait for a go-ahead before editing files.
3. **Never modify `vite.config.ts` plugins** (see Gotcha #1).
4. **Never change the Formspree endpoint** without user confirmation (see Gotcha #5).
5. **When adding any new UI element with color**, follow the `isDark` inline pattern from §6 — never use hardcoded hex values that aren't in the token table in §4.
6. **When adding new i18n strings**, always add to both `en` and `pt` in the same edit.
7. **Do not install new packages** without discussing alternatives first — the project already has several installed-but-unused dependencies.
8. **Run the dev server and visually verify** any visual change in both dark and light mode before reporting it as done.
