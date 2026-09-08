import { saveResume } from "@/actions/content";
import SubmitButton from "@/components/admin/SubmitButton";
import { getResume } from "@/lib/queries";

export default async function AdminResumePage() {
  const resume = await getResume();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black font-outfit uppercase tracking-tight">
          Resume
        </h1>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
          Paste a Google Drive share link or a file in /public. Drive links are converted to an embeddable preview automatically.
        </p>
      </div>
      <form action={saveResume} className="glass-card p-6 grid gap-4">
        <label className="block">
          <span className="admin-label">Summary</span>
          <textarea
            className="admin-input min-h-28"
            name="summary"
            defaultValue={resume?.summary}
            required
          />
        </label>
        <label className="block">
          <span className="admin-label">PDF URL</span>
          <input
            className="admin-input"
            name="pdfUrl"
            defaultValue={resume?.pdfUrl}
            required
          />
        </label>
        <label className="block">
          <span className="admin-label">Download filename</span>
          <input
            className="admin-input"
            name="fileName"
            defaultValue={resume?.fileName}
            required
          />
        </label>
        <SubmitButton idle="Save resume" pending="Saving..." className="btn-modern w-fit" />
      </form>
    </div>
  );
}
