import CrudManager from "@/components/admin/CrudManager";
import { createSkill, deleteSkill, updateSkill } from "@/actions/content";
import { getSkills } from "@/lib/queries";

export default async function AdminSkillsPage() {
  const skills = await getSkills();

  return (
    <CrudManager
      title="Skills"
      hint="Comma-separated skills inside each category."
      items={skills}
      createAction={createSkill}
      updateAction={updateSkill}
      deleteAction={deleteSkill}
      fields={[
        { name: "category", label: "Category" },
        { name: "skills", label: "Skills", type: "textarea" },
        { name: "order", label: "Order", type: "number" },
      ]}
    />
  );
}
