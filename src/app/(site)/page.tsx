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
    <PageShell className="min-h-screen bg-black text-neutral-100 relative overflow-x-hidden">
      <section className="relative">
        <HomeImg
          src={profile?.portraitUrl || "/krishnanath.jpg"}
          badge={latestJob?.title || profile?.badgeLabel || "Engineer"}
        />
        <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pb-8 pt-[52vh] lg:min-h-[88vh] lg:justify-center lg:py-20 lg:pt-20">
          <div className="w-full max-w-xl lg:max-w-2xl" data-aos="fade-up">
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
      </section>
      <div className="relative z-10 px-6 pb-16 flex justify-center">
        <TechMarquee items={marquee} />
      </div>
    </PageShell>
  );
}
