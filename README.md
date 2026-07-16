# Light On The Mountain Campground

Modern marketing website for **Light On The Mountain Campground**, rebuilt from the official PDF brochure (`Lotm Camp.pdf`).

A faith-based retreat and conference center nestled in the ponderosa pines of Kaibab National Forest, 3 miles south of Williams, AZ.

## Pages

- **Home** (`/`) — full-bleed hero, gatherings, amenities, nearby attractions, gallery preview, and contact/map
- **Photo Gallery** (`/gallery`) — facility and regional photos from the brochure

## Stack

- Next.js 16 (App Router, static export)
- React 19 + Tailwind CSS 4
- Fraunces + Source Sans 3 typography

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

Site content and imagery are based on the Light On The Mountain Campground brochure (Lotm Camp.pdf).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build (static export to `out/`)
- `npm run package` — build and create `lotmwebsite-deploy.zip`
- `npm start` — run production server (not needed for static hosting)
- `npm run lint` — ESLint
