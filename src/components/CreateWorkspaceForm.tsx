"use client";

import { useActionState } from "react";
import {
  createWorkspaceAction,
  type CreateWorkspaceState,
} from "@/app/actions/workspaces";

const initialState: CreateWorkspaceState = {};

export function CreateWorkspaceForm() {
  const [state, formAction, pending] = useActionState(
    createWorkspaceAction,
    initialState
  );

  return (
    <section className="panel">
      <div className="panel-header">
        <p className="eyebrow">Gray Fog Archive</p>
        <h2>Create new workspace</h2>
        <p>
          Separate research, chapter notes, and pathway references into their
          own sanctums.
        </p>
      </div>

      <form action={formAction} className="panel-body form-grid">
        <label className="field">
          <span>Workspace name</span>
          <input
            type="text"
            name="name"
            placeholder="e.g. Tarot Club notes, Pathway research"
            maxLength={100}
            required
          />
        </label>

        <label className="field">
          <span>Description (optional)</span>
          <textarea
            name="description"
            placeholder="What mysteries will you track here?"
            rows={3}
          />
        </label>

        {state.error ? <p className="form-error">{state.error}</p> : null}
        {state.success ? (
          <p className="form-success">Workspace created successfully.</p>
        ) : null}

        <button type="submit" className="primary-button" disabled={pending}>
          {pending ? "Creating..." : "Create workspace"}
        </button>
      </form>
    </section>
  );
}
