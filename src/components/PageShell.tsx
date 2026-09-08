"use client";

import { type PointerEvent, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { useBackground } from "@/context/BackgroundContext";
import AmbientLayer from "@/components/AmbientLayer";
import BackgroundToggle from "@/components/BackgroundToggle";
import ScrollProgress from "@/components/ScrollProgress";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});

function handleSpotlight(event: PointerEvent<HTMLDivElement>) {
  const card = (event.target as HTMLElement).closest(".glass-card");
  if (!(card instanceof HTMLElement)) return;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
  card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
}

export default function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const { showBackground, bgOpacity } = useBackground();

  return (
    <div className={className} onPointerMove={handleSpotlight}>
      <ScrollProgress />
      <AmbientLayer />
      {showBackground && <ThreeBackground opacity={bgOpacity} />}
      {children}
      <BackgroundToggle />
    </div>
  );
}
