# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page marketing/fan website for **Mala Junta FC**, an amateur football team from Tucumán, Argentina. All content is in Spanish. The site features a dark neon aesthetic, smooth Framer Motion animations, and mock data ready for backend integration.

## Commands

```bash
npm run dev      # Start development server (Next.js)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

> TypeScript build errors are intentionally ignored in `next.config.mjs` (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true`).

## Architecture

**Tech Stack:** Next.js (App Router) + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui

**Single-page with anchor navigation** — no traditional routes. All sections live in `app/page.tsx` and are navigated via hash links (`#inicio`, `#equipo`, `#fixture`, `#noticias`, `#sponsors`, `#redes`, `#contacto`).

```
app/
  layout.tsx       — Root layout: fonts (Bebas Neue display, Inter body), forced dark theme, Vercel Analytics
  page.tsx         — Composes all section components in order
  globals.css      — Custom CSS variables, glow effects, noise overlay, scrollbar

components/
  sections/        — One file per page section (navbar, hero, players, fixture, news, sponsors, contact, etc.)
  ui/              — 68 shadcn/ui components (Radix UI-based, mostly untouched)

lib/
  mock-data.ts     — ALL application data: players, fixtures, news, sponsors, nav links
  utils.ts         — cn() helper (clsx + tailwind-merge)

hooks/
  use-mobile.ts    — Responsive breakpoint hook
  use-toast.ts     — Toast hook

public/
  branding/        — Logos
  images/          — Player photos, news images, sponsor logos
```

## Data Layer

**All data lives in `lib/mock-data.ts`** — no database, no API routes. This is the single source of truth for players (17), fixtures (11 matches), news articles, sponsor tiers, and nav links. Replace contents of this file when integrating a real backend.

## Styling System

- **Forced dark mode** — `<html className="dark">` in `layout.tsx`; never add light theme variants
- **CSS custom properties** (defined in `app/globals.css`):
  - `--carbon: #0B0B0D` — background
  - `--neon: #20E000` — primary accent (neon green)
  - `--yellow: #FFD400` — secondary
  - `--magenta: #FF2DB2` — tertiary
  - `--smoke: #A9A9A9` — muted text
- **Utility classes**: `.glow-green` (box-shadow), `.glow-green-text` (text-shadow), `.noise-overlay` (SVG fractal texture at 4% opacity)
- Tailwind v4 is configured via `postcss.config.mjs`; no `tailwind.config.js` — use CSS variables directly for theme values

## Animation Patterns

Framer Motion is used throughout. Standard pattern for scroll-triggered reveals:
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.05 }}
```
Modals use `AnimatePresence` with `motion.div`. Staggered list items use index-based delay.

## Key Interactions

- **Contact form** → submits via WhatsApp API (`https://wa.me/<number>?text=<message>`), no backend needed
- **Player modals** and **news modals** are inline Framer Motion overlays with `AnimatePresence`
- **Fixture filtering** is client-side by month using `useState`
- **Countdown timer** in hero counts down to the next match date from `mock-data.ts`

## Path Alias

`@/` maps to the project root (configured in `tsconfig.json`). Use `@/components/...`, `@/lib/...`, etc.
