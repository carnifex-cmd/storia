# Storia Coconut Water Website

Landing page for **Storia**, a premium coconut water brand. The site is built with Vite, React, and TypeScript and features a scroll-driven hero, product storytelling overlays, a purchase section, and a footer.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Anime.js

## Features

- Animated product hero with scroll progress tracking
- Fixed text overlays that sync with the bottle animation
- Product details and purchase call-to-action
- Static image sequence assets for the hero animation
- Responsive layout for desktop and mobile

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run lint checks

```bash
npm run lint
```

## Project Structure

- `src/App.tsx` - Main page composition
- `src/components/` - Navbar, hero animation, product overlays, buy section, footer
- `src/data/product.ts` - Product copy, pricing, stats, and section content
- `public/images/coconut/` - Frame sequence used for the animated bottle hero
- `src/index.css` and `src/App.css` - Global and app-specific styles

## Notes

- The site is currently static and does not include a backend or checkout flow.
- The page title is set to `Storia - Premium Coconut Water` in `index.html`.
