import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import type { IconType } from "react-icons";

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: IconType;
  label: string;
}) {
  return (
      <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative group p-2 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 rounded-xl transition-all duration-300 blur-lg scale-150"></div>
      <div className="relative z-10 text-zinc-500 group-hover:text-red-500 transition-colors duration-300">
        <Icon className="h-6 w-6" />
      </div>
    </a>
  );
}

const socialLinks = [
  { href: "https://github.com/DJGuruji", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.instagram.com/__krishnanath/profilecard/?igsh=eXF3NTM4YTdzMGo=",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/krishnanath-s-24055a227",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  { href: "mailto:nath93266@gmail.com", icon: SiGmail, label: "Email" },
  {
    href: "https://buymeacoffee.com/krishnanaths",
    icon: PiCoffeeFill,
    label: "Buy Me A Coffee",
  },
];

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-red-600/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 relative z-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-start md:gap-6">
          <div className="space-y-3 md:col-span-5">
            <h3 className="text-2xl font-black font-outfit text-white tracking-tighter uppercase">
              KRISHNA<span className="text-red-600">NATH</span>
            </h3>
            <p className="text-zinc-500 max-w-sm font-medium uppercase tracking-widest text-[10px] leading-relaxed">
              Crafting state-of-the-art digital experiences with precision and
              speed.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
              Navigate
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 md:gap-x-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="md:col-span-4 md:justify-self-end">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 md:text-right">
              Social
            </h4>
            <div className="mt-2 flex flex-wrap gap-1 md:justify-end">
              {socialLinks.map((link) => (
                <SocialIcon
                  key={link.label}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6 pr-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">
            &copy; {currentYear} KRISHNANATH.S • ALL RIGHTS RESERVED
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
