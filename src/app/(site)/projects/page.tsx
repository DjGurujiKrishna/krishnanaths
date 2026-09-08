import ProjectsView from "@/components/ProjectsView";
import { getProjects } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsView projects={projects} />;
}
