# lotmwebsite

A **Lord of the Mysteries** fan website built with **Next.js** (App Router), **React Server Components**, **Server Actions**, **Tailwind CSS**, and **SQLite**.

Workspaces let you create separate research sanctums for tarot notes, pathway references, chapter summaries, and more.

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 4 |
| Data | SQLite via `better-sqlite3` |
| Mutations | Server Actions |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- Create new workspaces with a name and optional description
- List all workspaces on the home page
- Dark, LOTM-inspired archive UI
- SQLite persistence stored in `data/lotmwebsite.db`

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm start` — run the production server
- `npm run lint` — run ESLint
