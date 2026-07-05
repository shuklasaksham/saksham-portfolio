# Saksham Shukla — Portfolio (Cyberspace Terminal Aesthetic)

## Original Problem Statement
Create a portfolio for Product Designer Saksham Shukla using the provided terminal/dark-amber
"Cyberspace" visual reference. Pixel-perfect clone containing content from
https://www.sakshamshukla.com/. Frontend-only initially.

## Design Language
- Dark background (#0a0704) with amber accent (#f5a524)
- Monospace terminal typography (VT323 / IBM Plex Mono)
- No browser chrome — single-screen master-detail layout
- Micro-interactions: 80ms slide transitions, Cmd+K palette, custom "Inspect" cursor,
  pulsing status dots, ASCII/pixel art motifs

## Architecture
- Frontend: React + Tailwind, `lucide-react` icons, all data mocked in `/app/frontend/src/data/mock.js`
- Backend: FastAPI + MongoDB (scaffolded, NOT used yet — Contact form saves to localStorage)

## Key Components
- `/app/frontend/src/App.js` — section switcher (no react-router)
- `/app/frontend/src/components/TerminalFrame.jsx`, `Sidebar.jsx`, `StatusBar.jsx`, `CommandPalette.jsx`
- `/app/frontend/src/components/sections/`
  - `AboutMe.jsx` — amber statement block, pixel crab avatar, stats, tool stack, principles
  - `Work.jsx` — 4 case studies (Bracket 2026, Tello 2025, Hyundai 2024, Harman Kardon 2023)
  - `Experience.jsx` — timeline master-detail
  - `Illustrations.jsx`, `BehindThePixels.jsx` (typing CMD demo), `Contact.jsx`

## Changelog
- 2026-02: Initial MVP — sidebar, TerminalFrame, command palette, OS-aware shortcuts, custom cursor
- 2026-02: Populated 4 case studies with metric tiles, project details, workflow arrows
- 2026-02: Reordered case studies (Bracket → Tello → Hyundai → Harman Kardon) with corrected years
- 2026-02: Sidebar header updated to "SAKSHAM SHUKLA"
- 2026-02-05: **About Me profile avatar updated to black pixel-art crab** on amber block
  (transparent PNG + `filter: brightness(0)` so only crab silhouette turns black)
- 2026-02-05: **About Me avatar swapped to user-provided `crab_bw_shades.png`** (native grayscale/black
  pixel-art crab, no CSS filter applied). Verified via testing_agent — 100% pass.
- 2026-02-05: **Avatar image path moved to local `/app/frontend/public/crab-avatar.png`** — external
  customer-assets URL was unreachable in user's network, causing a broken image icon. Fixed.
- 2026-02-05: **Bracket case study Impact metrics updated** → 123 Freelancers & Teams, 68 Requirements
  Extracted, 115 Risks Identified, 90 Client Questions Generated.
- 2026-02-05: **Removed "Open Designs" CTA from Tello, Hyundai, Harman Kardon.** Kept only on Bracket,
  renamed to "Open Bracket" → links to https://use-bracket.com/
- 2026-02-05: **Real social links + email + phone wired in.** LinkedIn, Instagram, Behance, mailto:
  shuklasaksham01@gmail.com, tel:+917318088227. Old email 'hello@saksham.design' and Twitter link removed
  from About Me, Command Palette, Contact section. Verified — 100% pass (15/15 checks).
- 2026-02-05: **Full responsive redesign — desktop/tablet/mobile.** Added `MobileTopBar` (hamburger +
  brand + palette shortcut) shown only <md. Sidebar now dual-mode: inline collapsible on md+, slide-in
  drawer on mobile. TerminalFrame lets body scroll on mobile; sections switched from `h-full overflow-hidden`
  to `md:h-full md:overflow-hidden` so mobile content flows naturally. Reduced paddings + `clamp()` font
  sizes on smaller viewports. StatusBar shows fewer shortcuts on smaller widths. Verified — 100% pass across
  390 / 820 / 1024 / 1440 / 1920 viewports.
- 2026-02-05: **About Me availability copy updated.** 'Onboarding 3 design partners this quarter' →
  'Open to Product Designer roles + collaborations'.
- 2026-02-05: **Case study roles fixed.** Hyundai × Bang & Olufsen → 'Experience Designer'. One Audio
  (Harman Kardon) → 'Designer'.
- 2026-02-05: **Browser chrome polish.** `<title>` set to `Saksham Shukla | Product Designer`; favicon
  swapped to `/crab-avatar.png`. Removed the dark rectangle wrapper around the crab avatar in About Me.
- 2026-02-05: **Tello.ai media populated.** Replaced 2 placeholders with (1) the Activation | pSIM & eSIM
  Figma flow image (rendered with `object-contain` to show the full diagram) and (2) the prototype
  walkthrough MP4 (autoplay, muted, loop, with controls). Extended case-study media schema to accept
  `type: 'image' | 'video'` and an optional `fit: 'contain' | 'cover'` hint.
- 2026-02-05: **Bracket, Hyundai, One Audio media populated.** Bracket → 2 videos; Hyundai → 1 image
  + 1 video; One Audio → 2 images.
- 2026-02-05: **BUG FIX: Case-study media not visible.** Root cause — `customer-assets.emergentagent.com`
  was blocked in the user's network (same issue that hit the crab avatar previously). Fix: downloaded
  all 8 media files (5 videos, 3 images) to `/app/frontend/public/media/` and pointed all `mock.js`
  entries at same-origin `/media/*` paths. Re-muxed all 4 videos with `ffmpeg -movflags +faststart` so
  the `moov` atom sits at the head of each file for instant first-frame playback. Verified — 100%
  pass for all images (4/4). Videos verified reachable (HTTP 200 + range 206); Playwright headless
  Chromium cannot decode H.264 by design, but real user browsers will play cleanly.
- 2026-02-05: **Media letterbox removed + aspect ratio preserved.** Removed fixed heights on case-study
  media tiles; media now renders `w-full h-auto block` so each figure exactly hugs its media (no black
  bars). Added `items-start` on the paired-grid so mismatched aspects don't get stretched.
- 2026-02-05: **Bracket hyperlinks everywhere.** Every occurrence of the product noun 'Bracket' is now
  a `<a data-testid="bracket-link" href="https://use-bracket.com/" target="_blank">` — in the About Me
  bio paragraph, the Currently panel headline, and as the H1 title of the Bracket case study.
- 2026-02-05: **Desktop-wide responsive polish.** Raised the viewport-locked "terminal" threshold from
  `md` (768px) to `xl` (1280px). Widths 1024/1280 now scroll the page naturally instead of clipping;
  ≥1280 keeps the single-screen master-detail experience. Mobile drawer + <768px unchanged.
- 2026-02-05: **Global micro-interactions.** New utility classes in index.css: `.card-hover`, `.chip`,
  `.press`, `.link-amber`, `.stagger` (fade-up entrance), `.boot-glow` (stat number entrance),
  `.icon-wobble`. Applied to stat tiles, workbench chips, case-study cards, master list items, and
  primary buttons. Case-study master list items now slide right on hover with a chevron translate.
- 2026-02-05: **Workbench alive.** Chips animate on hover (amber fill + icon rotate/wobble), have a
  staggered entrance, and show a 'HOVER TO INSPECT' hint in the card header. Testing agent — 100%
  pass on all 13 sub-checks.
- 2026-02-05: **Case-study media stacked (not side-by-side).** First figure renders full-width, second
  figure at ~60% width below, so nothing is squeezed or letterboxed. Verified across all 4 studies.
- 2026-02-05: **Product Designer chip → solid black + amber content.** On the amber statement block
  chip now has background #0a0704 with amber text and amber dot for stronger contrast.
- 2026-02-05: **Behind The Pixels — translucent CMD box.** Background is now `rgba(0,0,0,0.55)` with
  `backdrop-filter: blur(6px)` and a 4-layer amber drop shadow (`#f5a524` @ 0.18 ring, 0.35 drop,
  0.15 glow, 0.06 inset) for the neon-CRT vibe.
- 2026-02-05: **NEW: Peek mode (`/` search).** Global keyboard-driven live filter (like Linear/Raycast)
  — press `/` to open a floating top-center search bar (`data-testid="peek-overlay"` + `peek-input`).
  As you type, matching items get an amber ring glow (.peek-match), non-matches fade to 22% opacity
  and desaturate (.peek-dim). Wired to case-study cards, workbench chips, and principles. Escape
  closes and clears. `/ Peek` hint added to StatusBar. Testing agent — 21/22 hard assertions pass.
- 2026-02-05: **Case-study media flow refined.** Primary (wide) asset renders full-width right after
  the intro. Secondary asset is now a `float: right` element inside the first Problem/Overview/Challenge
  section — text wraps around it subtly, no whitespace gaps, aspect ratio preserved. Width scales via
  `clamp(220px, 38%, 460px)`. `clear: both` before "The Challenge" ensures the next section starts
  on its own line. Verified visually.
- 2026-02-05: **Behind The Pixels refined.** Removed the heavy amber drop shadow. Background is now a
  radial gradient anchored to the bottom-right corner
  (`radial-gradient(120% 90% at 88% 92%, rgba(245,165,36,0.22) → rgba(0,0,0,0.55))`), matching the
  neon-embers reference. Backdrop blur retained.

## Roadmap
### P1
- Replace dummy image placeholders across all 4 Case Studies with real project images (needs assets)
- Replace `#` `openDesignsUrl` in Case Studies with real Figma/Framer links (needs URLs)

### P2
- Backend Integration: FastAPI + MongoDB storage for Contact form (currently localStorage only)
- Analytics / view counter on case studies

## Mocked / Not Yet Real
- Entire content in `mock.js`
- Contact form → localStorage (MOCKED, not persisted server-side)
- No backend endpoints wired to frontend yet

## Test Credentials
N/A — no auth in the app.
