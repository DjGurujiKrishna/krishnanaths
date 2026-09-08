"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaSearch, FaChevronDown } from "react-icons/fa";
import PageShell from "@/components/PageShell";

export type ProjectItem = {
  id: string;
  name: string;
  description: string;
  status: string;
  githubLink: string;
  productionLink: string;
};

function Project({
  name,
  description,
  status,
  githubLink,
  productionLink,
}: ProjectItem) {
  return (
    <div
      className="glass-card p-8 group hover:border-red-500/50 transition-all duration-500 mb-8 relative overflow-hidden h-full flex flex-col justify-between"
      data-aos="fade-up"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 rounded-full blur-[80px] group-hover:bg-red-600/20 transition-all duration-700"></div>

      <div>
        <div className="flex justify-between items-start mb-6 gap-4 min-w-0">
          <h2 className="text-3xl font-black text-white font-outfit leading-tight tracking-tighter break-words min-w-0">
            {name.toUpperCase()}
          </h2>
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
              status === "completed"
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "bg-red-500/10 text-red-500 border border-red-500/20"
            }`}
          >
            {status}
          </span>
        </div>

        <ExpandableText text={description} />
      </div>

      <div className="flex items-center gap-6 mt-auto">
        <a
          href={githubLink === "nil" ? "#" : githubLink}
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${
            githubLink === "nil"
              ? "text-zinc-600 cursor-not-allowed"
              : "text-white hover:text-red-500"
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl" />
          <span>Source</span>
        </a>

        {productionLink !== "nil" && productionLink ? (
          <a
            href={productionLink}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="text-lg" />
            <span>Launch</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}

function ExpandableText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const measure = () => {
      if (expanded) return;
      setNeedsToggle(el.scrollHeight > el.clientHeight + 1);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, expanded]);

  return (
    <div className="mb-8">
      <div className="relative">
        <p
          ref={textRef}
          className={`text-zinc-400 leading-relaxed font-light text-lg ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {text}
        </p>
        {!expanded && needsToggle ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/70 to-transparent" />
        ) : null}
      </div>
      {needsToggle ? (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-red-500 transition-all hover:border-red-500/40 hover:text-white"
        >
          {expanded ? "Show less" : "Show more"}
          <FaChevronDown
            className={`text-[10px] transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      ) : null}
    </div>
  );
}

export default function ProjectsView({ projects }: { projects: ProjectItem[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <PageShell className="min-h-screen bg-black text-white py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          data-aos="fade-down"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-red-600"></span>
              <span className="text-red-500 uppercase tracking-widest text-sm font-bold">
                Portfolio
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              Featured <br /> <span className="text-gradient">Projects</span>
            </h1>
          </div>

          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="FILTER PROJECTS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-red-500/50 focus:shadow-[0_0_24px_rgba(255,49,49,0.15)] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-zinc-600 uppercase tracking-widest text-xs font-bold">
              No matches found
            </p>
          </div>
        )}
      </div>
    </PageShell>
  );
}
