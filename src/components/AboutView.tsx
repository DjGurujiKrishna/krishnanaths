"use client";

import { useRef } from "react";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import type { IconType } from "react-icons";
import AboutDiscription, { type EducationItem } from "@/components/AboutDiscription";
import Certification, { type CertificationItem } from "@/components/Certification";
import Internship, { type JobItem } from "@/components/Internship";
import PageShell from "@/components/PageShell";

function NavButton({
  icon: Icon,
  text,
  onClick,
}: {
  icon: IconType;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      data-aos="zoom-in"
      className="flex items-center glass-card font-black px-6 py-3 rounded-full
    text-[10px] uppercase tracking-[0.2em] text-zinc-400
    hover:text-white hover:border-red-500/50
    hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,49,49,0.2)] transition-all duration-300 group"
      onClick={onClick}
      type="button"
    >
      <Icon className="mr-3 scale-125 group-hover:text-red-500 transition-colors" />
      <span>{text}</span>
    </button>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-8 md:mb-12" data-aos="fade-down">
      <div className="flex items-center gap-4">
        <span className="w-12 h-[2px] bg-red-600"></span>
        <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
          Details
        </span>
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-center">
        {title}
      </h1>
    </div>
  );
}

export default function AboutView({
  jobs,
  certifications,
  education,
}: {
  jobs: JobItem[];
  certifications: CertificationItem[];
  education: EducationItem[];
}) {
  const degreeRef = useRef<HTMLDivElement>(null);
  const internshipRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <PageShell className="min-h-screen bg-black text-white pt-6 pb-32 md:pt-8 relative overflow-hidden">
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-50 px-6 py-4 glass-card rounded-full border border-white/5 backdrop-blur-2xl shadow-2xl">
        <NavButton
          icon={RiVerifiedBadgeFill}
          text="EXP"
          onClick={() => scrollToSection(internshipRef)}
        />
        <NavButton
          icon={PiCertificateFill}
          text="CERT"
          onClick={() => scrollToSection(certificationRef)}
        />
        <NavButton
          icon={IoSchool}
          text="EDU"
          onClick={() => scrollToSection(degreeRef)}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={internshipRef} className="pt-2 pb-16 md:pb-20 relative scroll-mt-28">
          <SectionHeader title="Professional Experience" />
          <div className="relative w-full">
            <Internship jobs={jobs} />
          </div>
        </div>

        <div ref={certificationRef} className="py-16 md:py-20 relative scroll-mt-28">
          <SectionHeader title="Certifications" />
          <div className="relative w-full">
            <Certification certifications={certifications} />
          </div>
        </div>

        <div ref={degreeRef} className="pt-16 pb-8 md:py-20 relative scroll-mt-28">
          <SectionHeader title="Education" />
          <div className="relative w-full">
            <AboutDiscription education={education} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-12 left-12 z-40 hidden md:block">
        <button
          className="glass-card hover:bg-white/10 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          onClick={scrollToTop}
          type="button"
        >
          <BiSolidUpArrowCircle className="text-3xl" />
        </button>
      </div>
    </PageShell>
  );
}
