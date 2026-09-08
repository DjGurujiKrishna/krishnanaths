import Link from "next/link";
import {
  getCertifications,
  getEducation,
  getJobs,
  getLatestJob,
  getProjects,
  getServices,
  getSkills,
} from "@/lib/queries";

export default async function AdminOverviewPage() {
  const [jobs, education, certifications, skills, services, projects, latestJob] =
    await Promise.all([
      getJobs(),
      getEducation(),
      getCertifications(),
      getSkills(),
      getServices(),
      getProjects(),
      getLatestJob(),
    ]);

  const cards = [
    { href: "/admin/jobs", label: "Jobs", count: jobs.length },
    { href: "/admin/education", label: "Education", count: education.length },
    { href: "/admin/certifications", label: "Certifications", count: certifications.length },
    { href: "/admin/skills", label: "Skills", count: skills.length },
    { href: "/admin/services", label: "Services", count: services.length },
    { href: "/admin/projects", label: "Projects", count: projects.length },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black font-outfit tracking-tighter uppercase">
          Content studio
        </h1>
        <p className="mt-3 text-zinc-500 text-sm">
          Edit Home, About, Skills, Services, Projects, and Resume. The newest
          job you add becomes the company and position on the home page.
        </p>
      </div>

      {latestJob ? (
        <div className="glass-card p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-red-500">
            Currently featured on Home
          </p>
          <p className="mt-3 text-2xl font-black font-outfit">
            {latestJob.title}
          </p>
          <p className="text-zinc-400">{latestJob.company}</p>
        </div>
      ) : (
        <div className="glass-card p-6 text-zinc-500">
          Add a job to populate the home page company and position.
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="glass-card p-6 hover:border-red-500/40">
            <p className="text-3xl font-black font-outfit">{card.count}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              {card.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
