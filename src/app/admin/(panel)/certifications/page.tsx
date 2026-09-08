import CrudManager from "@/components/admin/CrudManager";
import {
  createCertification,
  deleteCertification,
  updateCertification,
} from "@/actions/content";
import { getCertifications } from "@/lib/queries";

export default async function AdminCertificationsPage() {
  const certifications = await getCertifications();

  return (
    <CrudManager
      title="Certifications"
      items={certifications}
      createAction={createCertification}
      updateAction={updateCertification}
      deleteAction={deleteCertification}
      fields={[
        { name: "name", label: "Name" },
        { name: "organization", label: "Organization" },
        { name: "issueDate", label: "Issue date" },
        { name: "credentialId", label: "Credential ID" },
        { name: "credentialUrl", label: "Credential URL" },
        { name: "order", label: "Order", type: "number" },
      ]}
    />
  );
}
