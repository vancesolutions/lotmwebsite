import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const dataDir = path.join(process.cwd(), "data");
fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, "lotmwebsite.db");

const globalForDb = globalThis as typeof globalThis & {
  __lotmDb?: Database.Database;
};

function createDb() {
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

  return db;
}

export function getDb() {
  if (!globalForDb.__lotmDb) {
    globalForDb.__lotmDb = createDb();
  }

  return globalForDb.__lotmDb;
}
