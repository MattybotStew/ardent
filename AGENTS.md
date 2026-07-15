<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# PROJECT OVERVIEW

**The Ardent Companies** — a marketing website for a privately held real estate investment firm. A single-page, static Next.js site.

## Agent docs (source of truth)

| File | Audience | Role |
| ---- | -------- | ---- |
| **`AGENTS.md`** | All agents | **Canonical** project rules — edit this first |
| **`CLAUDE.md`** | Claude Code | Points at `@AGENTS.md` (do not duplicate rules there) |
| **`.cursorrules`** | Cursor | Same rules as this file + open work checklist — keep in sync with `AGENTS.md` |
| **`.clinerules`** | Cline | Symlink → `.cursorrules` |
| **`JOURNAL.md`** | All agents | Session log (newest first) — read at session start; append when finishing work |
| **`README.md`** | Humans | Getting started / stack summary |

## Tech Stack

| Layer         | Technology               |
| ------------- | ------------------------ |
| Framework     | Next.js 16.2.10          |
| UI Library    | React 19.2.4             |
| Styling       | Tailwind CSS v4          |
| Language      | TypeScript 5             |
| Fonts         | System font: Verdana (stack: `Verdana, Geneva, sans-serif`) |
| Linting       | ESLint 9 + `eslint-config-next` |

## File Structure

```
ardent/
├── public/
│   └── images/              # Static assets (logo.svg, hero-bg.png, maps SVGs, photos)
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind import + CSS vars + @theme + type @utility
│   │   ├── layout.tsx       # Root layout: metadata, <html>/<body>
│   │   ├── page.tsx         # Home page: composes all sections
│   │   └── favicon.ico
│   ├── data/
│   │   ├── news.ts          # NewsPost type + fallback posts + LinkedIn company URL
│   │   └── team.ts          # Team member data, departments, bios
│   ├── lib/
│   │   └── linkedin.ts      # LinkedIn Posts API fetch + getNewsPosts() helper
│   └── components/
│       ├── Header.tsx       # Sticky nav with logo, nav links, Investor Login, CTA
│       ├── Hero.tsx         # Full-bleed hero with background image + overlay
│       ├── Stats.tsx        # "At a Glance" stats with large numbers
│       ├── Platforms.tsx    # Debt Platform + Equity Platform cards
│       ├── MarketPresence.tsx # Map section (US + UK)
│       ├── Team.tsx         # Leadership team grid with tab sidebar
│       ├── News.tsx         # News & Announcements (async — pulls LinkedIn or fallbacks)
│       ├── Contact.tsx      # Contact section + Headquarters
│       ├── SvgImg.tsx       # SVG <img> wrapper with scoped eslint-disable
│       └── Footer.tsx       # Simple copyright footer
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── package.json
├── AGENTS.md
├── CLAUDE.md                # @AGENTS.md
├── .cursorrules
├── .clinerules              # → .cursorrules
├── JOURNAL.md
└── README.md
```

No `tailwind.config.ts` — Tailwind v4 is CSS-first via `globals.css`.

## Design System

### Colors (defined in `src/app/globals.css`)

| CSS Variable         | Hex       | Tailwind Token        |
| -------------------- | --------- | --------------------- |
| `--ardent-blue`      | `#00315b` | `text-ardent-blue`    |
| `--ardent-blue-dark` | `#002a4d` | `bg-ardent-blue-dark` |
| `--ardent-light`     | `#f6f9fc` | `bg-ardent-light`     |
| `--charcoal`         | `#4a4a4a` | `text-charcoal`       |
| `--background`       | `#ffffff` | `bg-background`       |
| `--foreground`       | `#00315b` | `text-foreground`     |

Prefer tokens over one-off hex. If a Figma color is intentional and not in the table, register it in `:root` + `@theme inline` first.

### Typography System

**Font**: Verdana (stack: `Verdana, Geneva, sans-serif`) — system font, no Google Fonts / no imports.

**Type scale ratio**: `1.25` (Major Third) — design intent.

#### Design intent (responsive type scale)

| Breakpoint | Scale | Heading 1 | Heading 2 | Heading 3 | Body | Small |
|------------|-------|-----------|-----------|-----------|------|-------|
| Desktop (≥1024px) | 1.25 | `3rem` (48px) | `2.25rem` (36px) | `1.75rem` (28px) | `1rem` (16px) | `0.875rem` (14px) |
| Tablet | 1.25 | `2.25rem` (36px) | `1.875rem` (30px) | `1.5rem` (24px) | `1rem` (16px) | `0.875rem` (14px) |
| Mobile | 1.25 | `1.75rem` (28px) | `1.5rem` (24px) | `1.25rem` (20px) | `1rem` (16px) | `0.875rem` (14px) |

#### Implemented utilities (`globals.css` `@utility`)

Use these classes in components (source of truth for *current* CSS):

| Utility | Size | Notes |
| ------- | ---- | ----- |
| `text-hero` | `clamp(1.75rem, 5vw, 4.125rem)` | Hero H1 only |
| `text-heading-1` | `clamp(1.75rem, 3vw, 3rem)` | Section titles |
| `text-heading-2` | `clamp(1.5rem, 2.5vw, 2.25rem)` | |
| `text-heading-3` | `clamp(1.25rem, 1.75vw, 1.375rem)` | Currently tops at 22px (not full design-intent 28px) |
| `text-body` | `1.125rem` (18px) | Fixed body size in CSS today |
| `text-body-lg` | `clamp(1.125rem, 1.5vw, 1.25rem)` | Hero subtext, larger body |
| `text-small` | `0.984375rem` (~15.75px) | Nav labels, small UI |
| `text-caption` | `0.875rem` (14px) | Metadata only — **not** article body |
| `text-stat` / `text-stat-lg` / `text-stat-accent` | clamp ranges | Stats figures |

When changing type, update both the utilities and this table so they stay aligned.

#### Implementation Rules

- **ALWAYS** use `rem` or `clamp()` for font sizes — NEVER fixed pixel font sizes in CSS
- **NEVER** use body text smaller than `16px` (`1rem`) — `text-caption` is for labels/dates only
- **ALWAYS** set `line-height: 1.5` for body text, `~1.2` or less for headings (utilities already set this)
- **MAINTAIN** a minimum body text size of `16px` (`1rem`)

#### Anti-Patterns

- Hardcoded pixel font sizes (`font-size: 14px` on body copy)
- Single non-responsive font-size for all screen sizes when a utility exists
- Body text smaller than `16px`
- Default browser font stacks without Verdana
- Google Fonts / secondary heading fonts

### Spacing & Layout Conventions

- Prefer Tailwind v4-mapped utilities where they match: `px-8.5` (34px), `px-25` (100px), `py-30` (120px), `gap-7.5` (30px), `max-w-300` (1200px)
- Fall back to arbitrary values when needed: `px-[34px]`, `py-[120px]`, `gap-[30px]`, `max-w-[1200px]`
- **Inter-section gap (single source of truth):** `main` in `page.tsx` uses `gap-30` (120px) / `max-lg:gap-20` (80px). Do **not** add outer vertical padding/margin on sections for spacing between sections.
- Inner panel content (e.g. light rounded boxes) may still use `py-30` for padding *inside* the panel only.
- Cards: `rounded-[20px]` universally (NO `rounded-[26px]`)
- **Content max-width:** `.container-site` in `globals.css` — **xl+ 65%**, **lg 80%**, **md 90%**, below md **100% + 24px** padding. Use on major section inners (Hero, Stats, Platforms, Presence, Team, News, Contact, Footer, Header bar).
- Gaps: `gap-7.5` / `gap-[30px]`, `gap-2.5`, `gap-10`

## Component Patterns

### Image Handling

- **Raster** (JPG/PNG photos): `next/image` with explicit `width`/`height` or `fill` + prefer a `sizes` prop on `fill` images
- **SVG** (`logo.svg`, `map-us.svg`, `map-uk.svg`): bare `<img>` is allowed — `next/image` does not meaningfully optimize SVGs from `public/`
- Hero and card backgrounds: `fill` + `object-cover` inside a `relative` parent
- Priority: `priority` on hero (and other LCP-critical images as needed)
- Paths: all images under `public/images/` (URLs like `/images/hero-bg.png`)

Key assets currently in repo:

- `logo.svg`, `hero-bg.png`, `map-us.svg`, `map-uk.svg`
- `debt-platform.jpg`, `equity-platform.jpg`
- `public/images/team/*.jpg` — per-member headshots (Asset Management set still incomplete)
- `news-1.jpg` … `news-3.jpg`, map markers

### Single-Page Navigation

- Anchors: `#at-a-glance`, `#platforms`, `#presence`, `#team`, `#news`, `#contact`
- Each section sets matching `id`
- Desktop nav in header; below `lg`, mobile Menu via `details`/`summary` + always-visible Contact Us

### Component Conventions

- Default-exported function per file under `src/components/`
- Sections composed in `src/app/page.tsx` in order: Header → Hero → Stats → Platforms → MarketPresence → Team → News → Contact → Footer
- Fully static / server-rendered — no `"use client"`, no `useState`/`useEffect`, no event handlers beyond anchor links unless explicitly requested
- Props use inline type annotations
- Prefer a single `h1` (Hero); each major section should have an `h2` (use `sr-only` if design has no visible title)

## Styling Rules

1. Use Tailwind utilities; prefer mapped spacing tokens (`px-8.5`, `py-30`) then arbitrary values when needed.
2. CSS custom properties live in `:root` in `globals.css` and are registered in `@theme inline`.
3. Font is always Verdana via `font-sans` / body rules — no `font-[family-name:...]` overrides.
4. Gradient overlays on images: `bg-gradient-*` or intentional inline gradient when multi-stop angles require it; prefer tokenized blues.
5. **Responsive design is required** — use `max-lg:` (and related) so multi-column layouts collapse below 1024px; reduce padding on small screens (e.g. `max-lg:px-6 max-lg:py-20`). Desktop-first with `max-lg:` overrides is the current pattern.

## Critical Rules

1. **Next.js 16** has breaking changes — check `node_modules/next/dist/docs/` before writing framework APIs.
2. **No client components** unless explicitly requested — static site only.
3. **Images**: `next/image` for raster; `<img>` OK for SVGs from `public/` (logo, maps).
4. **Single-page anchors** only for primary nav destinations listed above.
5. **Tailwind v4 CSS-first** — do not add `tailwind.config.ts` unless deliberately migrating away from `@theme inline`.
6. **Verdana only** — no Archivo, PT Sans, Noto, or other font families.
7. **Responsive** — all new sections must include sensible `max-lg:` behavior.
8. **New components** → `src/components/`, PascalCase, composed in `page.tsx`.
9. **Props** — inline type annotations.
10. **Cards** — `rounded-[20px]` only.

## Known open work

Do not mark these done without implementing them:

### Medium

- Footer — real Terms/Privacy/LinkedIn links, copyright year, mobile padding audit
- Layout diversity — Stats, MarketPresence, Team, News, Contact still share similar centered stacks
- Placeholder links — Investor Login / News “more” still `href="#"` (need client URLs)
- Asset Management team photos/bios still missing from client set
- Placeholder/short bios for some non-leadership staff (expand when client provides)

### Low (incl. card visual review leftovers @ 390 / 768 / 1440)

- Card body type — Platforms / News / Team still use `text-[0.9375rem]` (~15px); AGENTS body rule is ≥16px (`text-body` / `1rem`)
- MarketPresence inner map board — `rounded-[14px]` vs card rule `rounded-[20px]` (align if design allows)
- Platforms Equity blurb much longer than Debt — uneven optical weight (optional copy tighten)
- News third-card media — graphic poster vs photo cards (optional `object-position` / crop)
- Header — audit `font-medium` weight on Verdana nav
- Align type utilities with design-intent scale table when design approves
- Optional: remove temporary Playwright `devDependency` used for the card audit (`.tmp-card-review/`)

### Notes (not “open bugs”)

- Team is a client component (`Team.tsx`) for tabs + bio modal — allowed exception to “no client” rule

### Fixed (2026-07-15)

- Mobile navigation via `details`/`summary` menu + always-visible Contact Us (`Header.tsx`)
- MarketPresence: desktop absolute composition retained; mobile/tablet stacked fluid maps
- Stats dividers: `max-lg:h-px max-lg:w-full` for column layout
- Team: headshots + bios + working department tabs + full-bio modal (`src/data/team.ts`, `Team.tsx`)
- Hero gradient: `max-lg:rounded-none` matches image container
- Platforms / Contact: section `h2.sr-only` for heading hierarchy
- News & Announcements: LinkedIn Posts API integration (`src/lib/linkedin.ts`, `src/data/news.ts`) with curated fallbacks when credentials not set
- `sizes` on `fill` images — Hero, Platforms, News, Team
- **Card review mediums:** sticky-header section offset (`scroll-padding-top` / `scroll-margin-top` in `globals.css`); department tabs horizontal scroll under `max-lg`
- **Team title wrap:** intentional break after `&` via `teamTitleLines()` + NBSP-bound role phrases via `protectTitlePhrases()` (`src/data/team.ts`) — avoids “Partner & Chief / Executive Officer” orphans; View bio stays bottom-pinned with flex
- **Team photo frame:** `aspect-[4/5]` (width-driven) text-over-image overlay with gradient fade; modal uses the same ratio
- **Team container / site width:** `.container-site` is xl+ **65%** / lg 80% / md 90% / mobile 100%+pad (not a flat 80%)
- **Stats dividers:** Start/end dividers hidden on mobile via `max-lg:hidden` to prevent double strokes; between dividers remain visible
- **Divider component:** Added `className` prop so `max-lg:hidden` applies directly to the flex child (wrapper divs broke `self-stretch` on desktop)

## Session continuity

1. At session start: read `JOURNAL.md` (newest first) and skim recent `git log`.
2. Before ending a session or after significant work: prepend an entry to `JOURNAL.md`.
3. After changing project rules: update **`AGENTS.md` first**, then sync **`.cursorrules`** (`.clinerules` follows automatically).
