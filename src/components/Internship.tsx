import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

export type JobItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType: string;
  startDate: string;
  endDate: string;
  description: string;
};

function InternshipCard({ internship, index }: { internship: JobItem; index: number }) {
  return (
    <div
      className="glass-card p-10 group relative overflow-hidden transition-all duration-500 hover:border-red-500/30 w-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all duration-700"></div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <FaBriefcase className="text-red-600 text-sm hover:text-white" />
            <h3 className="text-2xl font-black text-white font-outfit hover:text-red-600 uppercase tracking-tighter">
              {internship.title}
            </h3>
          </div>
          <h4 className="text-zinc-400 font-bold uppercase tracking-widest text-xs">
            {internship.company}
          </h4>
        </div>

        <div className="flex flex-col items-end gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-600/50" />
            <span>
              {internship.location} • {internship.locationType}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-red-600/50" />
            <span>
              {internship.startDate} — {internship.endDate}
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 w-1 h-full bg-red-600/20 rounded-full"></div>
        <p className="pl-6 text-zinc-400 leading-relaxed font-medium text-sm text-justify">
          {internship.description}
        </p>
      </div>
    </div>
  );
}

export default function Internship({ jobs }: { jobs: JobItem[] }) {
  if (jobs.length === 0) {
    return (
      <p className="text-center text-zinc-500 uppercase tracking-widest text-xs">
        No experience added yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto py-8 relative">
      {jobs.map((internship, index) => (
        <InternshipCard key={internship.id} internship={internship} index={index} />
      ))}
    </div>
  );
}
