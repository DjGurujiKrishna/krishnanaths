import Discription from "@/components/Discription";
import HomeImg from "@/components/HomeImg";
import PageShell from "@/components/PageShell";
import TechMarquee from "@/components/TechMarquee";
import { getHomeContent } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { profile, latestJob } = await getHomeContent();
  const marquee = (profile?.marquee ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <PageShell className="min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-neutral-100 relative overflow-x-hidden">
      <main className="relative z-10 min-h-[85vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 py-12 lg:py-20">
        <div className="flex-shrink-0" data-aos="fade-right">
          <HomeImg
            src={profile?.portraitUrl || "/krishna.jpg"}
            badge={latestJob?.title || profile?.badgeLabel || "Engineer"}
          />
        </div>
        <div className="flex-1 max-w-3xl" data-aos="fade-left">
          <Discription
            content={{
              nameLine1: profile?.nameLine1 || "KRISHNA",
              nameLine2: profile?.nameLine2 || "NATH S",
              availability: profile?.availability || "Available for work",
              bio:
                profile?.bio ||
                "Crafting high-performance web experiences with the MERN Stack, Django, and Next.js.",
              location: latestJob?.location || profile?.location || "Kochi, Kerala",
              stackLabel: profile?.stackLabel || "MERN + Django",
              company: latestJob?.company || "Add your latest job in admin",
              position: latestJob?.title || "Software Engineer",
            }}
          />
        </div>
      </main>
      <div className="relative z-10 px-6 pb-16 flex justify-center">
        <TechMarquee items={marquee} />
      </div>
    </PageShell>
  );
}
