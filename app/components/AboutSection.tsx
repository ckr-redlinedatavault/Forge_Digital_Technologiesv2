import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white border-b border-zinc-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT CONTENT: Condensed Corporate Narrative */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[1.5px] w-8 bg-blue-600"></span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                  Corporate Architecture
                </p>
              </div>
              
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
                Senior engineering team <br />
                focused on <span className="text-blue-600">precision</span>.
              </h2>

              <p className="max-w-xl text-base font-semibold leading-relaxed text-zinc-500">
                Forge Digital Technologies operates as a high-density product studio. 
                We partner with global enterprises to engineer resilient software 
                architecture and sophisticated, performance-driven user interfaces.
              </p>
            </div>

            {/* INTEGRATED METRICS: One-line horizontal for reduced height */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-zinc-100 pt-8">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-zinc-950">25+ Projects</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Successfully Shipped</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-zinc-950">5+ Years</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Engineering Depth</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-zinc-950">4-8 Weeks</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Average Velocity</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: High-Impact MNC Visual (Single Image) */}
          <div className="relative group">
            {/* Architectural/Studio Image from Unsplash */}
            <div className="relative h-[300px] w-full overflow-hidden bg-zinc-100 md:h-[400px]">
              <Image 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
                alt="Forge Digital Corporate Environment"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                priority
              />
              
              {/* Technical Overlay: Engineering Bracket */}
              <div className="absolute top-6 right-6 h-12 w-12 border-t border-r border-white/40" />
              <div className="absolute bottom-6 left-6 h-12 w-12 border-b border-l border-white/40" />
            </div>
            
            {/* Caption: MNC Clean Look */}
            <div className="absolute -bottom-4 -left-4 bg-zinc-950 p-4 hidden md:block">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white">
                Forge / Studio_HQ
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
