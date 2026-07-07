# lotmwebsite

Marketing website for **Light On The Mountain Campground** — built from the official PDF brochure.

A faith-based retreat and conference center nestled in the ponderosa pines of Kaibab National Forest, 3 miles south of Williams, AZ.

## Pages

- **Home** (`/`) — brochure-style layout with activities, amenities, attractions, contact, and map
- **Photo Gallery** (`/gallery`) — facility and regional photos extracted from the brochure

## Stack

- Next.js 16 (App Router)
- React 19 + Tailwind CSS 4
- Montserrat typography matching the brochure

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to your domain

```bash
npm run package
```

This creates **`lotmwebsite-deploy.zip`** — a static site you can upload to cPanel/`public_html`. See [DEPLOY.md](DEPLOY.md) for full instructions.

## Source material

The site content and images are sourced from `docs/design.pdf` (the official campground brochure).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build (static export to `out/`)
- `npm run package` — build and create `lotmwebsite-deploy.zip`
- `npm start` — run production server (not needed for static hosting)
- `npm run lint` — ESLint
