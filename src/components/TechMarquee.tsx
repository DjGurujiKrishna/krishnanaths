const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
];

export default function TechMarquee() {
  const items = [...STACK, ...STACK];

  return (
    <div className="relative w-full max-w-5xl overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-neutral-950 to-transparent" />
      <div className="flex w-max animate-marquee gap-3">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
