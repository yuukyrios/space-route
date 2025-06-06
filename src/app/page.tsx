import Navbar from "@/components/Navbar";
import background from "@/assets/bg-home.jpg";

export default function Home() {
  return (
    <body style={{ backgroundImage: `url(${background.src})` }}>
      <Navbar />
      <main className="container mx-auto mt-48 lg:mt-96 px-5 flex gap-16 flex-col lg:flex-row items-center justify-between">
        <div className="text-white max-w-[60ch] space-y-6 text-center lg:text-left">
          <p className="font-barlow-condensed sm:text-3xl uppercase tracking-widest">
            So you want to travel to
          </p>
          <p className="font-bellefair text-7xl sm:text-9xl uppercase">Space</p>
          <p className="text-sm sm:text-lg leading-relaxed">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="size-40 sm:size-80 lg:size-96 relative rounded-full group flex justify-center items-center select-none">
          <p className="uppercase font-bellefair sm:text-2xl lg:text-3xl relative z-10">
            Explore
          </p>
          <div className="bg-white/30 absolute inset-0 rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
          <div className="bg-white absolute inset-0 scale-75 rounded-full" />
        </div>
      </main>
    </body>
  );
}
