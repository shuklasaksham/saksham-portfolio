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
