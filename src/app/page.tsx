import { CreateWorkspaceForm } from "@/components/CreateWorkspaceForm";
import { WorkspaceList } from "@/components/WorkspaceList";
import { listWorkspaces } from "@/lib/workspaces";

export const dynamic = "force-dynamic";

export default function Home() {
  const workspaces = listWorkspaces();

  return (
    <div className="page-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">Lord of the Mysteries</p>
          <h1>lotmwebsite</h1>
        </div>
        <p className="site-lede">
          A fan archive for pathways, tarot notes, and chapter research — built
          on Next.js with workspace sanctums you can create and manage.
        </p>
      </header>

      <section className="hero-card">
        <div>
          <p className="eyebrow">Entering the Gray Fog</p>
          <h2>Organize your investigation</h2>
          <p>
            Workspaces keep your Lord of the Mysteries research isolated — one
            for tarot sessions, another for beyonder pathways, another for
            chapter summaries.
          </p>
        </div>
        <dl className="hero-stats">
          <div>
            <dt>Stack</dt>
            <dd>Next.js App Router</dd>
          </div>
          <div>
            <dt>Persistence</dt>
            <dd>SQLite</dd>
          </div>
          <div>
            <dt>Workspaces</dt>
            <dd>{workspaces.length}</dd>
          </div>
        </dl>
      </section>

      <main className="workspace-grid">
        <CreateWorkspaceForm />
        <WorkspaceList workspaces={workspaces} />
      </main>
    </div>
  );
}
