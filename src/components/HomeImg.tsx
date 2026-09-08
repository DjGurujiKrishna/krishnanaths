import Image from "next/image";

export default function HomeImg() {
  return (
    <div className="flex items-center justify-center py-8 md:py-12 px-4 relative">
      <div className="relative group animate-float" data-aos="zoom-in">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[128%] h-[128%] bg-red-600/28 rounded-full blur-[90px] group-hover:bg-red-500/40 transition-all duration-700"></div>

        <div className="relative z-10 perspective-1000">
          <div className="absolute -top-3 -left-3 h-16 w-16 border-l-2 border-t-2 border-red-500/80 rounded-tl-3xl" />
          <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-white/70 rounded-br-3xl" />

          <Image
            src="/krishna.jpg"
            alt="Portrait of Krishnanath S"
            width={384}
            height={550}
            priority
            className="rounded-[2.5rem] object-cover border-[6px] border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                       w-64 h-80
                       md:w-80 md:h-[450px]
                       lg:w-96 lg:h-[550px]
                       transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1"
          />
          <div className="ab