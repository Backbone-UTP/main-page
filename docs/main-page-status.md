# Main page — status & work plan seed

BackBone UTP is shifting from event-only landings (SFD) to an **org home at `/`** that shows events, projects, and members. Branch `feat/landing-integration` has the landing scaffold; **P0 blockers are resolved** in local WIP. Remaining work is mostly P1 product completeness and P2 polish.

**Last reviewed:** 2026-07-30

## Quick path

1. Read **Goal** and **Current state**.
2. Skim **P0 status** (done) and use **Pending work** for what remains.
3. Turn open P1/P2 items into a sequenced plan.

## Goal

Deliver a production-ready community landing at `/` that:

| Need | Meaning |
|------|---------|
| Brand home | BackBone UTP as the default entry (not only SFD event pages) |
| Discoverability | Next event, past events, projects, members |
| Navigation | Shared header + section anchors + footer legal/social links |
| Content-driven | Typed data via `DataService` / `src/assets/content/*` |
| Reuse | Shared UI between main page and event pages (e.g. header) |

**Out of scope for this doc:** SFD 2025 page polish (mostly done on `main`), Storybook, backend APIs.

## Current state

| Item | Detail |
|------|--------|
| Branch | `feat/landing-integration` (4 commits ahead of `main` + local WIP) |
| Stack | Angular 20, Tailwind, SCSS, Karma/Jasmine |
| Default route | `''` → `MainComponent` |
| Event routes | `/events/software-freedom-day-2024`, `/events/software-freedom-day-2025` |
| Extra route | `/code-of-conduct` |
| Catch-all | `**` → redirect to `/` |

### Commits already on the branch

1. `a6d4866` — DataService, models, footer, member cards, landing layout, staff assets  
2. `8b07d36` — Dependency upgrade (Angular 20)  
3. `34ed6ea` — Code of Conduct page  
4. `2cd9ac9` — Hero / project images  

### Local WIP (uncommitted) — P0-focused

| Change | Status |
|--------|--------|
| Shared `EventHeaderComponent`; SFD 2024/2025 headers removed | Done in tree |
| Main page header + `mainHeaderLinks` + past-events slider | Done |
| Event catalog + artwork under `assets/images/main/` | Done |
| Empty next-event state → Instagram CTA | Done |
| Event deep links (`relativeUrl` / `absoluteUrl`) | Done |
| Catch-all `**` → `/` | Done |
| Header section observer fixed (watches `#fragment` ids) | Done |
| Specs for routes, events content, empty state, nav, past cards | Added |
| `.gitignore` for `.atl/` / Engram local state | Done |

### Main page composition (as implemented)

```
EventHeader (logo + Eventos / Proyectos / Miembros)
└── main
    ├── Hero
    ├── Próximo Evento   (#next-event)  → card-next-event (or empty state)
    ├── Eventos Previos  (#past-events) → previous-event-card slider
    ├── Proyectos        (#projects)    → projects cards
    ├── Miembros         (#members)     → member-card grid
    └── Footer
```

Data flows through `DataService` → `toSignal()` in `MainComponent`.

## Progress checklist

### Done

- [x] `/` serves the org landing (no longer only event pages)
- [x] Section shell: hero, next event, past events, projects, members, footer
- [x] `DataService` + `Event` / `Member` / `Project` interfaces
- [x] Staff photos (`staff_*.webp`) and main/project hero assets
- [x] Past-events carousel with prev/next controls
- [x] Shared `event-header` used by main + SFD 2024/2025
- [x] Code of Conduct page + footer link to it
- [x] AGENTS.md for contributor/agent conventions
- [x] **P0.1** Empty next-event UX (Instagram CTA) when catalog has no future dates
- [x] **P0.2** Real event images (`sfd-2023/24/25.webp`, `flisol_pereira.webp`)
- [x] **P0.3** Deep links for SFD 2023/2024/2025 + FLiSoL 2023/2024/2025
- [x] **P0.4** Wildcard route `**` redirects to home
- [x] **P0.5** Header unification in working tree (still uncommitted)
- [x] Header active-section tracking via `data-section-id` / page fragments

### Partially done / open

- [ ] **Members** — cards render; no social links / hover; `members.ts` unused (fake names)  
- [x] **Next-event card (when event exists)** — real countdown; optional registration CTA; past-event details fallback
- [x] **Hero CTA** — links to the BackBone WhatsApp community
- [x] **Footer** — unsupported Contact & Privacy links removed; Code of Conduct retained
- [x] **P0 stage commit** — completed with the P0 implementation  
- [ ] **PR** — open after the next review-ready slice  

## Pending work (backlog seed)

### P0 — Blockers / correctness

| ID | Task | Status | Notes |
|----|------|--------|-------|
| P0.1 | Fix “no next event” reality | **Done** | Chose empty-state UX (not a fake future event). CTA → Instagram. |
| P0.2 | Add event images | **Done** | Artwork lives in `assets/images/main/` (not `images/events/`). |
| P0.3 | Wire event deep links | **Done** | SFD 2023 uses its canonical external recording; SFD 24/25 and all FLiSoL editions are linked. |
| P0.4 | Fix catch-all route | **Done** | `path: '**'` → `redirectTo: ''`. Covered by `app.routes.spec.ts`. |
| P0.5 | Finish header unification | **Done in WIP** | Shared component + deleted per-event headers and stale SFD 2025 module. Needs commit. |

### P1 — Product completeness

| ID | Task | Notes |
|----|------|-------|
| P1.1 | Real countdown on next-event card | **Done** — shared countdown uses the event date and supports a compact card presentation. |
| P1.2 | Register CTA | **Done** — optional per-event URL; hidden when absent; past events with links show “Ver más detalles”. |
| P1.3 | Hero “Únete a la comunidad” CTA | **Done** — links to the BackBone WhatsApp community. |
| P1.4 | Members section (#89) | Dynamic “Integrantes”: hover, social redirect, configurable layout. |
| P1.5 | Single source for members | Use `src/assets/content/members.ts` (or drop it); remove placeholder names. |
| P1.6 | Footer routes | **Done** — removed unsupported Contact and Privacy links; retained Code of Conduct. |
| P1.7 | Projects content hygiene | Confirm repo/live links; consider moving projects out of service hardcode into content file. |

### P2 — Polish & quality

| ID | Task | Status / notes |
|----|------|----------------|
| P2.1 | Responsive hero | Side-by-side layout may break on small screens. |
| P2.2 | Header active-link observer | **Done in WIP** — observes section `id`s from nav fragments. |
| P2.3 | Padding under fixed header | Main still uses `py-5`; hero may sit under fixed nav. |
| P2.4 | Tests | Improved (routes, events content, empty state, nav highlight, past-card links). Still light on DataService date logic / slider. |
| P2.5 | Lint / type cleanup | Related open work: PR #74 lint; issue #21 naming. |
| P2.6 | Merge readiness | Commit WIP → rebase/merge with `main` → open PR. |

## Related open GitHub items

| Item | Relevance |
|------|-----------|
| [#89 Crear componente Integrantes](https://github.com/Backbone-UTP/main-page/issues/89) | Members section on home + project pages |
| [#141 Añadir red social Luisa](https://github.com/Backbone-UTP/main-page/issues/141) | Member social data |
| [PR #74 Fix error lint](https://github.com/Backbone-UTP/main-page/pull/74) | Lint debt (stale vs Angular 20 branch) |

## Key files

| Area | Path |
|------|------|
| Main page | `src/app/pages/main/` |
| Routes | `src/app/app.routes.ts` (+ `app.routes.spec.ts`) |
| Data | `src/app/shared/services/data.service.ts` |
| Models | `src/app/shared/interfaces/data.models.ts` |
| Events content | `src/assets/content/events.ts` (+ `events.spec.ts`) |
| Nav / social consts | `src/assets/content/sfd-links.ts` (`mainHeaderLinks`, `BACKBONE_INSTAGRAM_URL`) |
| Shared header | `src/app/shared/components/event-header/` |
| Event artwork | `src/assets/images/main/sfd-*.webp`, `flisol_pereira.webp` |
| Cards | `card-next-event`, `previous-event-card`, `projects-cards`, `member-card` |

## Suggested planning order

1. ~~Stabilize content (P0.1–P0.3)~~ → **done**.  
2. ~~Finish shared header + routes (P0.4–P0.5)~~ → **done in WIP**.  
3. ~~Commit the completed P0 WIP~~ → **done**.  
4. ~~Close interaction gaps (P1.1–P1.3, P1.6)~~ → **done**.
5. **Members / projects depth** (P1.4–P1.5, P1.7, #89).  
6. **Polish + PR** (P2.1, P2.3–P2.6).

## Next step

Continue with **members / projects depth** (#89, P1.4–P1.5, P1.7).
