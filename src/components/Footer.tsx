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
      className="relative group p-2 transition-all duration-300 transform hover:-translate-y-1"
      data-aos="zoom-in"
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
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-red-600/10 to-transparent" />
      <p className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none text-[18vw] font-black leading-none tracking-tighter text-white/[0.03] font-outfit">
        KRISHNA
      </p>
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-black font-outfit text-white tracking-tighter uppercase">
              KRISHNA<span className="text-red-600">NATH</span>
            </h3>
            <p className="text-zinc-500 max-w-xs font-medium uppercase tracking-widest text-[10px] leading-relaxed">
              Crafting state-of-the-art digital experiences with precision and
              speed.
            </p>
          </div>

          <div className="space-y-5" data-aos="fade-up">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
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
          </div>

          <div className="hidden lg:block"></div>

          <div
            className="space-y-6 flex flex-col items-start md:items-end"
            data-aos="fade-left"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
              Social Connections
            </h4>
            <div className="flex gap-4">
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

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
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
