# PcDictate

Modern dictation app with workspace management. Each workspace keeps dictation sessions, settings, and history organized in one place.

## Features

- Create new workspaces with a name and optional description
- List all workspaces with creation timestamps
- SQLite-backed persistence via a lightweight Express API
- React UI with a clean workspace dashboard

## Getting started

```bash
npm install
npm run dev
```

This starts:

- API server on `http://localhost:3001`
- Web UI on `http://localhost:5173`

## API

### `GET /api/workspaces`

Returns all workspaces, newest first.

### `POST /api/workspaces`

Create a new workspace.

```json
{
  "name": "Medical practice",
  "description": "Patient notes and clinical dictation"
}
```

## Project structure

```
pcdictate/
├── client/     React + Vite frontend
├── server/     Express + SQLite backend
└── package.json
```

## Scripts

- `npm run dev` — run frontend and backend together
- `npm run build` — build client and server
- `npm start` — run production server
