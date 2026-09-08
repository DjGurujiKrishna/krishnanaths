"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAdmin } from "@/actions/content";
import SubmitButton from "@/components/admin/SubmitButton";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/home", label: "Home" },
  { href: "/admin/jobs", label: "Jobs" },
  { href: "/admin/education", label: "Education" },
  { href: "/admin/certifications", label: "Certifications" },
  { href: "/admin/skills", label: "Skills" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/resume", label: "Resume" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="lg:sticky lg:top-8 glass-card p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-6">
          CMS
        </p>
        <nav className="flex flex-wrap lg:flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.16em] ${
                pathname === link.href
                  ? "bg-red-600 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <form action={logoutAdmin} className="mt-6">
          <SubmitButton
            idle="Sign out"
            pending="Signing out..."
            className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white disabled:opacity-60 disabled:cursor-wait"
          />
        </form>
      </div>
    </aside>
  );
}
