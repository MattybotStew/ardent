# Journal

## 2026-07-15 — Cursor (desktop container width + Stats grid)
- User screenshot (Stats + Platforms) still too wide on desktop — restored responsive `.container-site` scale: xl+ **65%**, lg 80%, md 90%, below md 100% + 24px
- Stats bottom `20+` row: same 3-column flex skeleton as rows above so side dividers align under the middle column (fixes freestanding narrow box)
- Docs: AGENTS.md / .cursorrules updated for container cascade

## 2026-07-15 — Cline (Team cards text-over-image + Stats divider fix)

- **Team cards:** Replaced stacked photo+text layout with text-over-image overlay — names/titles/CTA layered on the photo with `bg-gradient-to-t from-ardent-blue/90 via-ardent-blue/40` gradient (matches Platform cards). Eliminates the separate ~140px text block, reducing card height by ~25% (mobile: ~549px → ~409px; desktop: ~530px → ~383px).
- **Team photo ratio:** Finalized at `aspect-[4/5]` (standard corporate portrait crop) — card and modal both match.
- **Team container:** Migrated from `.container-team` (65%-90% breakpoint cascade) to `.container-site` (80% viewport) — consistent with all other sections. Removed `.container-team` CSS from `globals.css` (27 lines deleted).
- **TeamCardTitle:** Added optional `className` prop for white text in overlay context; defaults to `text-charcoal`.
- **Stats dividers:** Fixed double-stroke bug on mobile — wrapping `<Divider/>` in `<div className="max-lg:hidden">` broke `self-stretch` on desktop (vertical lines collapsed). Solution: added `className` prop directly to `Divider` component. Start dividers get `max-lg:hidden`; end dividers remain visible to give one clean separator between rows on mobile.
- **Stats component:** `Divider` now accepts `className?: string` prop.
- **Docs:** AGENTS.md, .cursorrules synced for team overlay, container migration, and stats divider fix.

## 2026-07-15 — Cursor (Team bio card container + portraits)
- Added `.container-team` in `globals.css`: xl+ 65%, lg 80%, md 90%, below md 100% + 24px padding
- `Team.tsx` uses `.container-team` instead of flat `max-w-[65%]`
- Portrait frames → `aspect-[3/4]` (cards + bio modal) for long vertical headshots; `sizes` tuned to container breakpoints
- Docs: AGENTS.md / .cursorrules updated for `.container-team` vs `.container-site`

## 2026-07-15 — Cursor (real Team title wrap fix)
- Replaced `line-clamp` band-aid with intentional title structure in `teamTitleLines()` / `protectTitlePhrases()` (`src/data/team.ts`)
- Compound titles break after `&` (“Partner &” / “Chief Executive Officer”) so roles aren’t orphaned mid-phrase
- NBSP binds known multi-word roles (CEO/CFO, Managing Director, Real Estate, etc.)
- Cards: flex footer with `mt-auto` “View bio” + stable text-block min-height; titles use `text-body` / `text-pretty`
- Modal title uses same phrase protection
- Team photo height: dropped fixed `h-[360px]` / `max-lg:h-[370px]` for `aspect-[4/5]` so frame scales with card width

## 2026-07-15 — Cursor (agent docs sync after card review)
- Branch: `cursor/homepage-polish-team-news` (`a7737ac`)
- Synced **AGENTS.md** (canonical) + **.cursorrules** (+ `.clinerules` symlink) with card visual review status
- Marked done: sticky-header scroll offsets, Team `line-clamp-3`, tab horizontal scroll, `sizes` on fill images
- Open leftovers documented: card body `0.9375rem` (under 16px), map inner `rounded-[14px]`, optional Equity copy / News crop, Playwright cleanup
- Corrected stale notes: per-member team photos (not shared `team-photo.jpg`); mobile nav is shipped; removed inaccurate “News excerpts = text-body” fixed claim
- README / CLAUDE.md unchanged (already accurate pointers)

## 2026-07-15 — Cline (LinkedIn → News final sync + visual tweaks)
- Verified `npm run build` clean with async `News.tsx` calling `getNewsPosts()` from `src/lib/linkedin.ts`
- LinkedIn Posts API integration + curated fallbacks confirmed working; no compilation errors
- Updated AGENTS.md / .cursorrules / README / .gitignore — synced file structure, marked LinkedIn done
- News card images: doubled height `h-44` → `h-88` desktop / `h-56` mobile; build clean
- Contact emails: split at `@` with `<wbr />`, capped left column at 520px, reduced font to `text-small`
- .gitignore: added `/From Client/`, `/ardent@0.1.0`, `/eslint` (stray artifacts from Grok worktree)

## 2026-07-15 — Grok (visual pass / broken cards)
- Found & fixed: Thomas Olson full-width last card → CSS `grid-cols-2`
- Team photo `fill` height 0 → fixed `h-[295px]` containers
- Emails mid-break outside cards → email inside card + `break-words`
- Mobile overflow 51px from Contact long emails → `min-w-0` + `break-all`
- Mobile presence “disciplinedinvestment” → space before `<br className="max-lg:hidden">`
- Tabs/modal appeared broken under Playwright via 127.0.0.1 — Next blocked cross-origin HMR; added `allowedDevOrigins` in next.config.ts
- News/Platforms `sizes` on fill images; stats 55+/20+ accent spans
- Verified: Debt tab filters correctly, modal opens, mobile overflow 0, equal card widths

## 2026-07-15 — Grok (team headshots + bio modals)
- Imported client headshots → `public/images/team/*` (38 web-resized JPEGs)
- `src/data/team.ts` — members, departments, bios from Website Bios + Employee Bios + directory
- `Team.tsx` is a client component: working department tabs, card headshots, accessible bio modal (Escape, overlay, focus trap, scroll lock)
- Leadership “Team” tab: 7 partners (added Gregg Goldenberg); other tabs filter by department when photos exist
- Asset Management tab empty pending headshots; placeholder copy shown
- Confirmed emails only for original six partners
- Lint + build clean

## 2026-07-15 — Grok (lint clean)
- Cleared 5 `@next/next/no-img-element` warnings for intentional public SVGs
- Added `SvgImg` helper (scoped eslint-disable); Header logo + MarketPresence maps use it
- `npm run lint` clean on main checkout

## 2026-07-15 — Grok (fix all review bugs)
- Fixed all 7 review bugs without adding client components
- Header: mobile Menu via `details`/`summary` + always-visible Contact Us; logo uses `next/link`
- MarketPresence: desktop absolute maps kept; mobile stacked fluid US/UK maps with captions
- Stats: dividers become full-width horizontal rules under `max-lg`
- Team: filter tabs → static `<li>` labels (no focusable dead buttons)
- News: excerpts use `text-body` (not 14px caption)
- Hero: gradient overlay `max-lg:rounded-none` matches image
- Platforms + Contact: section `h2.sr-only` for outline
- `npm run lint` clean of errors (SVG `<img>` warnings only); `npm run build` OK
- Docs checklists updated in AGENTS.md / .cursorrules

## 2026-07-15 — Grok (agent docs sync)
- Brought all project markdown/agent docs in sync with current site state
- **`AGENTS.md`**: full rewrite — responsive rules, SVG vs raster images, type utilities table, tokens, known open work, agent-doc map
- **`.cursorrules`**: aligned with AGENTS.md + open/done checklist
- **`.clinerules`**: still symlink → `.cursorrules`
- **`README.md`**: removed stale Google Fonts (PT Sans/Archivo/Noto); Verdana + accurate stack/structure
- **`CLAUDE.md`**: unchanged (`@AGENTS.md`)
- No application source code changes in this pass

## 2026-07-15 — Grok
- Added `.clinerules` → symlink to `.cursorrules` so Cline and Cursor share one rule file
- Same symlink on main checkout `/Users/matthewstewart/dev-projects/ardent/` if missing
- No Cline-only rules file existed for Ardent before this

## 2026-07-15 — Grok (code review)
- Full CSS + code review of local uncommitted changes (Verdana/type utilities, SVG assets, `rounded-[20px]`, `max-lg:` responsive pass)
- Verdict: desktop mostly sound; not ship-ready for responsive/a11y as written
- Top bugs: mobile maps (absolute coords), nav hidden below `lg`, stats dividers in column layout, dead team tab buttons, 14px news body, hero gradient radius mismatch, heading hierarchy gaps
- Review artifacts: scratch `grok-review-af778096.md` (temp); findings captured in AGENTS.md “Known open work” and `.cursorrules` checklist
- No source fixes applied (review only)
