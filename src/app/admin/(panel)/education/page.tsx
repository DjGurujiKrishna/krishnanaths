import CrudManager from "@/components/admin/CrudManager";
import {
  createEducation,
  deleteEducation,
  updateEducation,
} from "@/actions/content";
import { getEducation } from "@/lib/queries";

export default async function AdminEducationPage() {
  const education = await getEducation();

  return (
    <CrudManager
      title="Education"
      hint="Rows with the same heading are grouped together on About."
      items={education}
      createAction={createEducation}
      updateAction={updateEducation}
      deleteAction={deleteEducation}
      fields={[
        { name: "heading", label: "Group heading" },
        { name: "title", label: "Label" },
        { name: "value", label: "Value", type: "textarea" },
        { name: "order", label: "Order", type: "number" },
      ]}
    />
  );
}
