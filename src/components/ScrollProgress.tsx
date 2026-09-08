"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const el = barRef.current;
      if (!el) return;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? window.scrollY / height : 0;
      el.style.transform = `scaleX(${Math.min(progress, 1)})`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[10000] h-[2px] w-full bg-white/5">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-red-700 via-red-500 to-red-300"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
