# S.O.K — Website

Showcase website and user documentation for [S.O.K (Storage Organisation Kit)](https://github.com/SOKTeam/S.O.K), the desktop app that identifies, renames and organizes movies, TV shows, music, books and games.

It is a static site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Pages

| Route | Content |
| --- | --- |
| `/` | Landing page: hero, app preview, metadata providers, features |
| `/features` | Feature details |
| `/docs` | User guide (see [Documentation](#documentation)) |
| `/roadmap` | Development roadmap |
| `/download` | Download for the latest release |
| `/releases` | Archive of every published release |

## Getting started

Requires **Node.js 22.12 or later**.

```sh
npm install
npm run dev
```

The site runs at [http://localhost:4321](http://localhost:4321).

| Command | Action |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built site locally |

## Project structure

```text
src/
├── assets/              # Logos and provider icons (imported by components)
├── components/
│   ├── landing/         # Landing page sections (Hero, MediaShowcase, ApiLogos...)
│   ├── shared/          # Header, Navigation, Footer, ThemeToggle
│   └── ui/              # Reusable Button and Card
├── content/
│   └── docs/            # User guide pages, in Markdown
├── content.config.ts    # Content collection schema for the docs
├── layouts/
│   ├── BaseLayout.astro # Page shell: <head>, header, footer
│   └── DocsLayout.astro # Docs sidebar, prev/next links, Markdown styles
├── lib/
│   └── release.js       # Fetches release data from GitHub at build time
├── pages/               # One file per route
└── styles/
    ├── global.css       # Tailwind import, animations
    └── theme.css        # Color tokens for the orange (default) and dark themes
public/                  # Static files served as is
```

## Documentation

Each page of the user guide is a Markdown file in `src/content/docs/`. The file name becomes the URL: `tv-shows.md` is served at `/docs/tv-shows`.

To add a page, create a file with this front matter:

```md
---
title: Page title
description: One sentence shown under the title and on the docs home page.
order: 7
---

Content in Markdown...
```

`order` sets the position in the sidebar. The sidebar, the docs home page and the previous/next links update on their own.

The guide describes the app as released (currently **v1.1.0**). Update it when a new version changes the interface or behavior.

## Deployment

The site is hosted on [Vercel](https://vercel.com). Vercel detects Astro, runs `npm run build` and serves the static `dist/` folder.

## Release data

The download and release archive pages call the GitHub API **at build time** (`src/lib/release.js`) to get the version, size and download link of each release of `SOKTeam/S.O.K`.

- **Redeploy the site on Vercel after each new release** so it links to the latest version.
- If GitHub cannot be reached during the build, the download page falls back to the values in `FALLBACK` (`src/lib/release.js`) and the archive page shows no releases. Keep `FALLBACK` up to date.

## Theming

Colors are CSS variables defined in `src/styles/theme.css`:

- `:root` holds the default orange theme.
- `.dark` holds the dark theme, applied to `<html>` by the theme toggle and saved in `localStorage`.

Use the variables (`bg-[var(--color-card-bg)]`, `text-[var(--color-secondary)]`...) rather than hard-coded colors so both themes keep working.

## Responsive design

The site targets screens from 320px wide. Below the `md` breakpoint (768px), the header navigation moves into a hamburger menu and the docs sidebar becomes a collapsible menu. Check new pages at phone width before merging.

## Related

- [S.O.K app repository](https://github.com/SOKTeam/S.O.K)
- [Releases](https://github.com/SOKTeam/S.O.K/releases)
