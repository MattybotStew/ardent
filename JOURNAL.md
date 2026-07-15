# Journal

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
