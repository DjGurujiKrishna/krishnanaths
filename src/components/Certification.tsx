import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export type CertificationItem = {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  credentialId: string;
  credentialUrl?: string;
};

function CertificationCard({
  cert,
  index,
}: {
  cert: CertificationItem;
  index: number;
}) {
  return (
    <div
      className="glass-card p-5 sm:p-8 group relative overflow-hidden transition-all duration-500 hover:border-red-500/30"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all duration-700"></div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 min-w-0">
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3 mb-3">
            <FaCertificate className="text-red-600 text-sm mt-1 shrink-0" />
            <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tighter transition-colors group-hover:text-red-500 break-words">
              {cert.name}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <span className="text-zinc-400">Issued by {cert.organization}</span>
            <span className="w-1 h-1 bg-zinc-800 rounded-full hidden md:block"></span>
            <span>{cert.issueDate}</span>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto md:max-w-[46%] min-w-0">
          <div className="flex flex-col items-start md:items-end w-full min-w-0">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-1">
              Credential ID
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-normal bg-white/5 px-2 py-1 rounded break-all max-w-full w-full md:w-auto">
              {cert.credentialId}
            </span>
          </div>

          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-all group/link"
            >
              <span>Verify License</span>
              <FaExternalLinkAlt className="text-xs transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Certification({
  certifications,
}: {
  certifications: CertificationItem[];
}) {
  if (certifications.length === 0) {
    return (
      <p className="text-center text-zinc-500 uppercase tracking-widest text-xs">
        No certifications added yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
      {certifications.map((cert, index) => (
        <CertificationCard key={cert.id} cert={cert} index={index} />
      ))}
    </div>
  );
}
