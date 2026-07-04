import { FormEvent, useState } from "react";

interface CreateWorkspaceFormProps {
  onCreate: (input: { name: string; description?: string }) => Promise<void>;
}

export function CreateWorkspaceForm({ onCreate }: CreateWorkspaceFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await onCreate({
        name,
        description: description.trim() || undefined,
      });
      setName("");
      setDescription("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="panel create-panel">
      <div className="panel-header">
        <h2>Create new workspace</h2>
        <p>Organize dictation sessions, settings, and history in separate workspaces.</p>
      </div>

      <form className="create-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Workspace name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Medical practice, Legal briefs"
            maxLength={100}
            required
            autoFocus
          />
        </label>

        <label className="field">
          <span>Description (optional)</span>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="What will you use this workspace for?"
            rows={3}
          />
        </label>

        {error ? <p className="form-error">{error}</p> : null}

        <button type="submit" className="primary-button" disabled={submitting || !name.trim()}>
          {submitting ? "Creating..." : "Create workspace"}
        </button>
      </form>
    </section>
  );
}
