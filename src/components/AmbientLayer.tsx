export default function AmbientLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div className="absolute inset-0 site-grid" />
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-600/18 blur-[140px] animate-orbit-glow" />
      <div className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-red-900/20 blur-[130px]" />
      <div className="absolute top-1/3 -right-24 h-[360px] w-[360px] rounded-full bg-white/5 blur-[110px]" />
      <div className="absolute inset-0 site-noise mix-blend-overlay" />
    </div>
  );
}
