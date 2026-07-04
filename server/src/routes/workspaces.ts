import { Router } from "express";
import { createWorkspace, getWorkspace, listWorkspaces } from "../db.js";

export const workspacesRouter = Router();

workspacesRouter.get("/", (_req, res) => {
  res.json(listWorkspaces());
});

workspacesRouter.get("/:id", (req, res) => {
  const workspace = getWorkspace(req.params.id);
  if (!workspace) {
    res.status(404).json({ error: "Workspace not found" });
    return;
  }
  res.json(workspace);
});

workspacesRouter.post("/", (req, res) => {
  const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";

  if (!name) {
    res.status(400).json({ error: "Workspace name is required" });
    return;
  }

  if (name.length > 100) {
    res.status(400).json({ error: "Workspace name must be 100 characters or fewer" });
    return;
  }

  const description =
    typeof req.body?.description === "string" ? req.body.description : undefined;

  const workspace = createWorkspace({ name, description });
  res.status(201).json(workspace);
});
