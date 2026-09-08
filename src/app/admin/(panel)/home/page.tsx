import { saveProfile } from "@/actions/content";
import { getLatestJob, getProfile } from "@/lib/queries";

export default async function AdminHomePage() {
  const [profile, latestJob] = await Promise.all([getProfile(), getLatestJob()]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black font-outfit uppercase tracking-tight">
          Home
        </h1>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
          Company and position always come from the latest job.
        </p>
      </div>

      <div className="glass-card p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-red-500">
          Live from latest job
        </p>
        <p className="mt-3 text-xl font-semibold">
          {latestJob?.title ?? "No job yet"}
        </p>
        <p className="text-zinc-400">{latestJob?.company ?? "Add a job first"}</p>
      </div>

      <form action={saveProfile} className="glass-card p-6 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="admin-label">Name line 1</span>
          <input className="admin-input" name="nameLine1" defaultValue={profile?.nameLine1} required />
        </label>
        <label className="block">
          <span className="admin-label">Name line 2</span>
          <input className="admin-input" name="nameLine2" defaultValue={profile?.nameLine2} required />
        </label>
        <label className="block">
          <span className="admin-label">Availability</span>
          <input className="admin-input" name="availability" defaultValue={profile?.availability} required />
        </label>
        <label className="block">
          <span className="admin-label">Location</span>
          <input className="admin-input" name="location" defaultValue={profile?.location} required />
        </label>
        <label className="block">
          <span className="admin-label">Stack label</span>
          <input className="admin-input" name="stackLabel" defaultValue={profile?.stackLabel} required />
        </label>
        <label className="block">
          <span className="admin-label">Portrait URL</span>
          <input className="admin-input" name="portraitUrl" defaultValue={profile?.portraitUrl} required />
        </label>
        <label className="block">
          <span className="admin-label">Image badge</span>
          <input className="admin-input" name="badgeLabel" defaultValue={profile?.badgeLabel} required />
        </label>
        <label className="md:col-span-2 block">
          <span className="admin-label">Bio</span>
          <textarea className="admin-input min-h-28" name="bio" defaultValue={profile?.bio} required />
        </label>
        <label className="md:col-span-2 block">
          <span className="admin-label">Marquee skills (comma separated)</span>
          <textarea className="admin-input min-h-24" name="marquee" defaultValue={profile?.marquee} required />
        </label>
        <div className="md:col-span-2">
          <button className="btn-modern" type="submit">
            Save home content
          </button>
        </div>
      </form>
    </div>
  );
}
