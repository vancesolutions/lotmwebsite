import type { Workspace } from "@/lib/workspaces";

interface WorkspaceListProps {
  workspaces: Workspace[];
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function WorkspaceList({ workspaces }: WorkspaceListProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <p className="eyebrow">Recorded Sanctums</p>
        <h2>Your workspaces</h2>
        <p>
          {workspaces.length} workspace{workspaces.length === 1 ? "" : "s"}{" "}
          preserved in the archive.
        </p>
      </div>

      {workspaces.length === 0 ? (
        <div className="empty-state">
          <strong>No workspaces yet</strong>
          <span>
            The fog is quiet. Create your first workspace to begin cataloging
            mysteries.
          </span>
        </div>
      ) : (
        <ul className="workspace-list">
          {workspaces.map((workspace) => (
            <li key={workspace.id} className="workspace-card">
              <div>
                <h3>{workspace.name}</h3>
                {workspace.description ? <p>{workspace.description}</p> : null}
              </div>
              <time dateTime={workspace.createdAt}>
                Created {formatDate(workspace.createdAt)}
              </time>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
