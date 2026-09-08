export type EducationItem = {
  id: string;
  heading: string;
  title: string;
  value: string;
};

function EducationDetail({ title, value }: { title: string; value: string }) {
  return (
    <tr className="group transition-all duration-300">
      <td className="py-4 text-left text-zinc-500 font-bold w-1/3 uppercase tracking-[0.2em] text-[10px]">
        {title}
      </td>
      <td className="py-4 text-left text-white font-medium text-sm group-hover:text-red-500 transition-colors">
        {value}
      </td>
    </tr>
  );
}

export default function AboutDiscription({
  education,
}: {
  education: EducationItem[];
}) {
  const groups = education.reduce<Record<string, EducationItem[]>>((acc, row) => {
    acc[row.heading] = acc[row.heading] ?? [];
    acc[row.heading].push(row);
    return acc;
  }, {});

  const headings = Object.keys(groups);

  if (headings.length === 0) {
    return (
      <p className="text-center text-zinc-500 uppercase tracking-widest text-xs">
        No education added yet.
      </p>
    );
  }

  return (
    <div className="space-y-12">
      {headings.map((heading, index) => (
        <div
          key={heading}
          className="glass-card p-10 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all duration-700"></div>

          <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tighter mb-8 flex items-center">
            <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
            {heading}
          </h3>

          <div className="w-full">
            <table className="w-full">
              <tbody className="divide-y divide-white/5">
                {groups[heading].map((item) => (
                  <EducationDetail
                    key={item.id}
                    title={item.title}
                    value={item.value}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
