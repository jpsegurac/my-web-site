# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview production build locally
```

No test runner or linter is configured.

## Architecture

This is an **Astro 5** personal portfolio and blog, deployed to GitHub Pages at `https://jpsegurac.github.io/my-web-site`. The `base` is set to `/my-web-site` in `astro.config.mjs` — all internal links must use `import.meta.env.BASE_URL` as a prefix (it always has a trailing slash, e.g. `/my-web-site/` in prod, `/` in dev). Never hardcode absolute paths like `/es` or `/blog`.

### Internationalization (i18n)

The site supports English (`en`) and Spanish (`es`). English is the default locale with no URL prefix; Spanish lives under `/es/`. Page routing mirrors this:

- `src/pages/index.astro` → English home (`/`)
- `src/pages/es/index.astro` → Spanish home (`/es/`)
- `src/pages/blog/[slug].astro` → English blog posts
- `src/pages/es/blog/[slug].astro` → Spanish blog posts

**Translation strings** live in `src/i18n/en.ts` and `src/i18n/es.ts`. Use `useTranslations(lang)` from `src/i18n/index.ts` inside components — never hardcode UI text. All components accept a `lang: "en" | "es"` prop and pass it down.

### Content Collections

Defined in `src/content/config.ts`. Three collections:

- **blog** — Markdown posts with `lang` field (`"en"` or `"es"`). Bilingual posts are separate files (e.g. `microservices-event-driven.md` / `microservicios-eventos.md`).
- **projects** — Portfolio projects with optional `descriptionEs` for Spanish overrides. Sorted by `order` field.
- **experience** — Work history with optional `roleEs`. Sorted by `order` field.

### Component Structure

- `src/layouts/BaseLayout.astro` — Root HTML shell; handles dark mode (persisted via `localStorage`), Navbar, Footer, and global CSS.
- `src/layouts/PostLayout.astro` — Wraps blog post content.
- `src/components/layout/` — `Navbar.astro`, `Footer.astro`.
- `src/components/sections/` — One component per homepage section (`Hero`, `Experience`, `Projects`, `BlogPreview`).

### Styling

Tailwind CSS via `@astrojs/tailwind`. Dark mode uses the `class` strategy (toggled by adding/removing the `dark` class on `<html>`). The `@tailwindcss/typography` plugin is available for prose content.

### Site Constants

Global metadata (name, URL, social links) is in `src/consts.ts` as the `SITE` object.
