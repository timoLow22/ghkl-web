Welcome to the repository of the Gospel Hall Kuala Lumpur (GHKL) web app!

Honorable mention to the site that started it all (created with Wix and is probably dead by now lmao): [gospelhallkl.org](https://www.gospelhallkl.org/)

## Getting Started

To run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Updating church content

**All site-wide church content lives in [`config/site.ts`](config/site.ts)** — name, navigation links, address, service times, verse, and footer copy. Changes there propagate to the navbar, footer, and page metadata.

For visual design (colors, fonts), edit [`app/globals.css`](app/globals.css).

## Project structure

Follows the [Next.js App Router](https://nextjs.org/docs/app/getting-started/project-structure) convention: `app/` for routes and layouts, top-level folders for shared code.

```
app/                  # Routes, layouts, global styles
  _components/        # App-specific components (layout shell, UI primitives)
config/               # Church content and site metadata
lib/                  # Shared code helpers (not church copy)
  stringUtils.ts      # String formatting and manipulation
  styles/             # Tailwind / className utilities
public/               # Static assets (images, etc.)
docs/                 # Project docs and roadmap
```

### File naming

Next.js only mandates names for routing files (`page.tsx`, `layout.tsx`, etc.). For everything else, this project uses:

| Kind | Convention | Example |
|------|------------|---------|
| Route folders | kebab-case | `app/contact-us/page.tsx` |
| UI components | kebab-case | `page-header.tsx` |
| Utilities / lib / config / UI components | camelCase | `mergeClassNames.ts`, `site.ts`, `pageHeader.tsx` |

See [`docs/ROADMAP.md`](docs/ROADMAP.md) for the full build plan.
