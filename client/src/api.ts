export interface Workspace {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export async function fetchWorkspaces(): Promise<Workspace[]> {
  const response = await fetch("/api/workspaces");
  if (!response.ok) {
    throw new Error("Failed to load workspaces");
  }
  return response.json();
}

export async function createWorkspace(input: {
  name: string;
  description?: string;
}): Promise<Workspace> {
  const response = await fetch("/api/workspaces", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error ?? "Failed to create workspace");
  }
  return data;
}
