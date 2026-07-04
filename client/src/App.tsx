import { useCallback, useEffect, useState } from "react";
import { createWorkspace, fetchWorkspaces, type Workspace } from "./api";
import { CreateWorkspaceForm } from "./components/CreateWorkspaceForm";
import { WorkspaceList } from "./components/WorkspaceList";

export default function App() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadWorkspaces = useCallback(async () => {
    setLoadError(null);
    try {
      const data = await fetchWorkspaces();
      setWorkspaces(data);
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : "Failed to load workspaces");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadWorkspaces();
  }, [loadWorkspaces]);

  async function handleCreate(input: { name: string; description?: string }) {
    const workspace = await createWorkspace(input);
    setWorkspaces((current) => [workspace, ...current]);
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">PcDictate</p>
          <h1>Workspaces</h1>
        </div>
        <p className="header-copy">
          Create dedicated spaces for different clients, departments, or projects.
        </p>
      </header>

      {loadError ? <p className="banner-error">{loadError}</p> : null}

      <main className="app-grid">
        <CreateWorkspaceForm onCreate={handleCreate} />
        <WorkspaceList workspaces={workspaces} loading={loading} />
      </main>
    </div>
  );
}
