"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/service" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = dropdown ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [dropdown]);

  return (
    <nav
      className={`lg:fixed relative top-0 left-0 w-full z-[9999] transition-all duration-500 ${
        scrolled
          ? "lg:bg-black/75 lg:backdrop-blur-xl lg:border-b lg:border-white/5 lg:py-3 lg:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent py-6"
      } ${!scrolled && "lg:py-6"} bg-black lg:bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[10001]">
        <Link href="/" className="group">
          <h1 className="text-2xl font-black tracking-tighter font-outfit text-white">
            KRISHNA
            <span className="text-red-600 group-hover:text-red-500 transition-colors">
              NATH
            </span>
            &nbsp;S
          </h1>
        </Link>

        <div className="hidden lg:flex items-center space-x-7">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`group relative text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? "text-red-500" : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-red-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-black transition-all hover:bg-red-600 hover:text-white"
          >
            Hire me
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setDropdown(!dropdown)}
          type="button"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-[2px] bg-white transition-all ${
                dropdown ? "rotate-45 translate-y-[9px]" : ""
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-white transition-all ${
                dropdown ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-white transition-all ${
                dropdown ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-3xl transition-all duration-500 z-[10000] ${
          dropdown
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-7 p-6">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setDropdown(false)}
              className={`text-2xl font-black uppercase tracking-widest transition-all ${
                pathname === item.path
                  ? "text-red-600 scale-110"
                  : "text-zinc-500"
              }`}
            >
              <span className="mr-3 text-[10px] text-zinc-700">
                0{index + 1}
              </span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
