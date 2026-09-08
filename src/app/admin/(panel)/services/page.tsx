import CrudManager from "@/components/admin/CrudManager";
import { createService, deleteService, updateService } from "@/actions/content";
import { getServices } from "@/lib/queries";

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <CrudManager
      title="Services"
      hint="Icon names: FaCode, FaLayerGroup, FaServer, FaLaptopCode, FaDatabase, FaInfinity"
      items={services}
      createAction={createService}
      updateAction={updateService}
      deleteAction={deleteService}
      fields={[
        { name: "title", label: "Title" },
        { name: "icon", label: "Icon" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "order", label: "Order", type: "number" },
      ]}
    />
  );
}
