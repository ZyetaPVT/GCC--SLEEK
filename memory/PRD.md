# PRD — Zyeta GCC Landing Page Rebuild

## Original Problem Statement
Rebuild https://zyeta-minimal.preview.emergentagent.com/ with: (1) new hero header with landscape video + text overlay, great on desktop and mobile; (2) same Poppins font but sleeker/premium weights (not too bold); (3) new FAQ section with 3–4 important questions; (4) everything else stays the same. User choices: hero video = modern premium office interiors; FAQ topics = GCC-focused. Art direction target: Awwwards-level — kinetic masked-reveal hero, slow editorial marquee, numbered chapters, framer-motion reveals, lenis smooth scroll, parallax hero.

## User Personas
- Global Real Estate Directors / C-suite evaluating India GCC expansion
- VP / India GCC Centre Heads
- Enterprise facilities & workplace leaders

## Architecture
- Frontend: React 19 + Tailwind + shadcn/ui, framer-motion (reveals, counters, parallax), lenis (smooth scroll). Components in /app/frontend/src/components/landing/ + /app/frontend/src/pages/Landing.jsx
- Backend: FastAPI (/api prefix) + MongoDB (motor). Leads endpoints: POST/GET /api/leads
- Design system: cream #F9F8F3, forest #0F2E23, lime #80C342 / #95D94B; Poppins 300–600 + JetBrains Mono; /app/design_guidelines.json
- Hero video: Pexels CDN mp4 (id 8347237, HD landscape) + poster fallback

## Core Requirements (static)
- Video hero with readable overlay text, responsive
- Sleek Poppins typography (light/regular display, medium CTAs)
- FAQ section (GCC-focused, 4 Q&As)
- Preserve all original sections/content (01–07 chapters)

## Implemented (2026-09-03)
- Full-page rebuild: Nav (glass on scroll, mobile menu), video Hero (masked line-by-line reveal, parallax, zoom-on-load), client logo marquee, 01 Reality cards, 02 Proof of Work grid, 03 Awards (dark forest), 04 animated counters, 05 Voices cards, 06 India Studios city tab switcher, FAQ accordion (4 GCC questions), 07 lead form, Footer, sticky bottom CTA
- Backend: POST /api/leads + GET /api/leads (MongoDB persisted), kept /api/status
- data-testid coverage on all interactive elements

## Verified
- POST /api/leads + GET (2 test leads saved: test@gcc.com, asha@globalcorp.com)
- Desktop screenshots: hero video playing, sections render, FAQ accordion opens, form submit + success toast, studio tab switch
- Mobile (390px) hero verified

## Backlog
- P1: Replace stock hero video/imagery with Zyeta's real footage & project photography
- P1: "Watch the story" / Voices cards currently static mock — wire real video playback/modal
- P2: Email notification on new lead (Resend), admin leads view
- P2: SEO metadata, OG tags, favicon polish

## Next Tasks
1. Swap hero video/poster for brand footage when provided
2. Add lead email notification (Resend managed integration)
3. Real client-story video modal for 05 Voices
