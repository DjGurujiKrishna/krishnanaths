import PageShell from "@/components/PageShell";
import { getServiceIcon } from "@/lib/icons";
import { getServices } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <PageShell className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4 mb-20" data-aos="fade-down">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-500 uppercase tracking-widest text-sm font-bold">
              Offerings
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
            My <br /> <span className="text-gradient">Services</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <div
                key={service.id}
                className="glass-card p-10 group hover:border-red-500/50 transition-all duration-500 relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all"></div>

                <div className="text-3xl text-red-600 mb-6 transform group-hover:scale-110 transition-transform origin-left relative z-10">
                  <Icon />
                </div>

                <p className="absolute top-6 right-8 text-5xl font-black text-white/5 font-outfit group-hover:text-red-600/10 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="text-2xl font-black text-white font-outfit uppercase tracking-tight mb-4 relative z-10">
                  {service.title}
                </h2>
                <p className="text-zinc-500 leading-relaxed font-medium text-sm relative z-10">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
