"use server";

import { revalidatePath } from "next/cache";
import { createWorkspace as createWorkspaceRecord } from "@/lib/workspaces";

export type CreateWorkspaceState = {
  error?: string;
  success?: boolean;
};

export async function createWorkspaceAction(
  _prevState: CreateWorkspaceState,
  formData: FormData
): Promise<CreateWorkspaceState> {
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  if (!name) {
    return { error: "Workspace name is required" };
  }

  if (name.length > 100) {
    return { error: "Workspace name must be 100 characters or fewer" };
  }

  createWorkspaceRecord({
    name,
    description: description || undefined,
  });

  revalidatePath("/");
  return { success: true };
}
