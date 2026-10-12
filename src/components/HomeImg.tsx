import Image from "next/image";

const HERO_IMAGE = "/krishnanath.jpg";

function resolveHeroSrc(src: string) {
  if (!src || src === "/krishna.jpg") return HERO_IMAGE;
  return src;
}

export default function HomeImg({
  src,
  badge,
}: {
  src: string;
  badge: string;
}) {
  const resolved = resolveHeroSrc(src);
  const isRemote = resolved.startsWith("http");

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-bg absolute inset-x-0 top-0 h-[58vh] lg:left-[34%] lg:h-[88vh] lg:w-auto">
        <Image
          src={resolved}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 64vw, 100vw"
          unoptimized={isRemote}
          className="hero-drift object-cover object-[70%_36%] lg:object-[76%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black lg:bg-gradient-to-r lg:from-black lg:via-black/55 lg:to-black/10" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent lg:h-40" />
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 lg:flex">
          <span className="h-px w-8 bg-red-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/80">
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
}
