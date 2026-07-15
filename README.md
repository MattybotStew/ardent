# The Ardent Companies — Marketing Website

Single-page Next.js marketing site for The Ardent Companies (real estate investment). Prototype based on the [New Ardent HP](https://www.figma.com/design/1fSszaRq7tmpuqNOHhVBdo/New-Ardent-HP) Figma design.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Stack

| Layer | Technology |
| ----- | ---------- |
| Framework | Next.js 16.2.10 (App Router) |
| UI | React 19.2.4 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-first in `src/app/globals.css`) |
| Font | System Verdana (`Verdana, Geneva, sans-serif`) — no Google Fonts |

## Project structure

```
src/app/            # layout, page, globals.css
src/components/     # Header, Hero, Stats, Platforms, MarketPresence, Team, News, Contact, Footer, SvgImg
src/data/           # news.ts (LinkedIn fallbacks), team.ts (members, departments, bios)
src/lib/            # linkedin.ts (Posts API fetch + getNewsPosts helper)
public/images/      # logo.svg, hero-bg.png, maps, platform/news/team photos
```

Section order on the home page: Header → Hero → Stats → Platforms → MarketPresence → Team → News → Contact → Footer.

## LinkedIn → News & Announcements

The News section loads **company LinkedIn posts** when API credentials are present; otherwise it shows curated fallbacks that link to the company page.

1. Copy `.env.example` → `.env.local`
2. Create a LinkedIn developer app and request **`r_organization_social`**
3. Set:
   - `LINKEDIN_ACCESS_TOKEN` — OAuth token for a **page admin**
   - `LINKEDIN_ORGANIZATION_ID` — numeric organization id
4. Restart `npm run dev`

Posts revalidate about every hour (`next: { revalidate: 3600 }`).

## Agent / contributor docs

| File | Purpose |
| ---- | ------- |
| [`AGENTS.md`](./AGENTS.md) | **Canonical** project rules for all AI agents |
| [`CLAUDE.md`](./CLAUDE.md) | Claude Code entry → `@AGENTS.md` |
| [`.cursorrules`](./.cursorrules) | Cursor rules (kept in sync with AGENTS.md) |
| [`.clinerules`](./.clinerules) | Cline → symlink to `.cursorrules` |
| [`JOURNAL.md`](./JOURNAL.md) | Cross-agent session log |

## Remote

```bash
git remote -v
# origin  https://github.com/MattybotStew/ardent.git
```
