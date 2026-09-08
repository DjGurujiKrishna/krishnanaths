"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type HomeContent = {
  nameLine1: string;
  nameLine2: string;
  availability: string;
  bio: string;
  location: string;
  stackLabel: string;
  company: string;
  position: string;
};

export default function Discription({ content }: { content: HomeContent }) {
  const router = useRouter();
  const stats = [
    { label: "Position", value: content.position },
    { label: "Stack", value: content.stackLabel },
    { label: "Based in", value: content.location },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-0">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-8" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-red-400">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-red-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              {content.availability}
            </span>
            <span className="text-red-500 uppercase tracking-[0.3em] text-sm font-bold">
              {content.position}
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold text-white leading-[0.88] tracking-tighter"
            >
              {content.nameLine1}
              <br />
              <span className="text-gradient">{content.nameLine2}</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-500 font-medium uppercase tracking-widest text-xs lg:text-sm"
          >
            <span>{content.company}</span>
            <span className="text-red-600">•</span>
            <span>{content.position}</span>
            <span className="text-red-600">•</span>
            <span>{content.location}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light"
          >
            {content.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="grid grid-cols-3 gap-4 max-w-lg"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4"
              >
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-zinc-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-white tracking-tight">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              className="btn-modern"
              onClick={() => router.push("/projects")}
              type="button"
            >
              View Projects
            </button>

            <button
              className="btn-outline"
              onClick={() => router.push("/contact")}
              type="button"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
