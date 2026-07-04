import type { Workspace } from "../api";

interface WorkspaceListProps {
  workspaces: Workspace[];
  loading: boolean;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function WorkspaceList({ workspaces, loading }: WorkspaceListProps) {
  return (
    <section className="panel list-panel">
      <div className="panel-header">
        <h2>Your workspaces</h2>
        <p>{workspaces.length} workspace{workspaces.length === 1 ? "" : "s"} available</p>
      </div>

      {loading ? (
        <p className="empty-state">Loading workspaces...</p>
      ) : workspaces.length === 0 ? (
        <div className="empty-state">
          <strong>No workspaces yet</strong>
          <span>Create your first workspace to start dictating.</span>
        </div>
      ) : (
        <ul className="workspace-list">
          {workspaces.map((workspace) => (
            <li key={workspace.id} className="workspace-card">
              <div className="workspace-card-body">
                <h3>{workspace.name}</h3>
                {workspace.description ? <p>{workspace.description}</p> : null}
              </div>
              <time dateTime={workspace.createdAt}>Created {formatDate(workspace.createdAt)}</time>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
