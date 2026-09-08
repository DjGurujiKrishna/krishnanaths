import CrudManager from "@/components/admin/CrudManager";
import { createJob, deleteJob, updateJob } from "@/actions/content";
import { getJobs } from "@/lib/queries";

export default async function AdminJobsPage() {
  const jobs = await getJobs();

  return (
    <CrudManager
      title="Jobs"
      hint="The most recently added job is featured on the home page."
      items={jobs.map((job) => ({
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        locationType: job.locationType,
        startDate: job.startDate,
        endDate: job.endDate,
        description: job.description,
      }))}
      createAction={createJob}
      updateAction={updateJob}
      deleteAction={deleteJob}
      fields={[
        { name: "title", label: "Position" },
        { name: "company", label: "Company" },
        { name: "location", label: "Location" },
        { name: "locationType", label: "Location type" },
        { name: "startDate", label: "Start date" },
        { name: "endDate", label: "End date" },
        { name: "description", label: "Description", type: "textarea" },
      ]}
    />
  );
}
