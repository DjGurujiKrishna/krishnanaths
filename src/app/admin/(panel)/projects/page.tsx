import CrudManager from "@/components/admin/CrudManager";
import { createProject, deleteProject, updateProject } from "@/actions/content";
import { getProjects } from "@/lib/queries";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <CrudManager
      title="Projects"
      hint="Use nil for missing GitHub or live links."
      items={projects}
      createAction={createProject}
      updateAction={updateProject}
      deleteAction={deleteProject}
      fields={[
        { name: "name", label: "Name" },
        { name: "status", label: "Status", type: "select", options: ["completed", "in-progress"] },
        { name: "githubLink", label: "GitHub URL" },
        { name: "productionLink", label: "Live URL" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "order", label: "Order", type: "number" },
      ]}
    />
  );
}
