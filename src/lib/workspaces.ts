import { getDb } from "./db";

export interface Workspace {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

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
  const rows = getDb()
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

  getDb()
    .prepare(
      "INSERT INTO workspaces (id, name, description, created_at, updated_at) VALUES (?, ?, ?, ?, ?)"
    )
    .run(id, name, description, now, now);

  return {
    id,
    name,
    description,
    createdAt: now,
    updatedAt: now,
  };
}
