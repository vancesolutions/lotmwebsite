import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "data");
fs.mkdirSync(dataDir, { recursive: true });
const dbPath = path.join(dataDir, "pcdictate.db");

export interface Workspace {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS workspaces (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )
`);

function rowToWorkspace(row: {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}): Workspace {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function listWorkspaces(): Workspace[] {
  const rows = db
    .prepare(
      "SELECT id, name, description, created_at, updated_at FROM workspaces ORDER BY created_at DESC"
    )
    .all() as Array<{
    id: string;
    name: string;
    description: string | null;
    created_at: string;
    updated_at: string;
  }>;

  return rows.map(rowToWorkspace);
}

export function createWorkspace(input: {
  name: string;
  description?: string;
}): Workspace {
  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  const name = input.name.trim();
  const description = input.description?.trim() || null;

  db.prepare(
    "INSERT INTO workspaces (id, name, description, created_at, updated_at) VALUES (?, ?, ?, ?, ?)"
  ).run(id, name, description, now, now);

  return {
    id,
    name,
    description,
    createdAt: now,
    updatedAt: now,
  };
}

export function getWorkspace(id: string): Workspace | null {
  const row = db
    .prepare(
      "SELECT id, name, description, created_at, updated_at FROM workspaces WHERE id = ?"
    )
    .get(id) as
    | {
        id: string;
        name: string;
        description: string | null;
        created_at: string;
        updated_at: string;
      }
    | undefined;

  return row ? rowToWorkspace(row) : null;
}
