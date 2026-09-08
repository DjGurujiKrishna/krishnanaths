"use client";

import Discription from "@/components/Discription";
import HomeImg from "@/components/HomeImg";
import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-neutral-100 relative overflow-x-hidden">
      <main className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 py-12 lg:py-20">
        <div className="flex-shrink-0" data-aos="fade-right">
          <HomeImg />
        </div>
        <div className="flex-1 max-w-3xl" data-aos="fade-left">
          <Discription />
        </div>
      </main>
    </PageShell>
  );
}
