export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white pt-20 pb-16 md:pt-32 md:pb-24"
    >
      {/* 1. INDUSTRY BACKGROUND: Subtle Grid Pattern */}
       <div className="absolute inset-0 z-0 opacity-[0.03] mask-[linear-gradient(to_bottom,white,transparent)]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start px-6 text-left md:px-10 md:items-center md:text-center">
        
        {/* CONTENT */}
        <div className="flex w-full flex-col items-start space-y-8 md:items-center">
          <div className="space-y-4">
            <p className="inline-block border-x-2 border-blue-600 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Digital Product Studio
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tighter text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl">
              {/* Added 'italic' class below */}
              We design and build <span className="text-blue-600 italic">products</span> <br className="hidden md:block" /> that people love.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
              From idea to launch, we help founders and teams ship modern, fast,
              and beautiful web experiences that actually move the needle.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-start gap-6 md:justify-center">
            <a
              href="#cta"
              className="group relative inline-flex items-center justify-center bg-zinc-900 px-8 py-4 text-sm font-semibold tracking-widest text-white transition-all hover:bg-blue-600"
            >
              BOOK A FREE STRATEGY CALL
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="/work"
              className="text-sm font-semibold tracking-widest text-zinc-900 underline decoration-blue-600 decoration-2 underline-offset-8 transition-colors hover:text-blue-600"
            >
              VIEW RECENT WORK
            </a>
          </div>

          {/* SOCIAL PROOF */}
          <div className="flex flex-wrap items-start justify-start gap-8 border-t border-zinc-100 pt-10 md:justify-center">
            <div className="flex flex-col items-start md:items-center">
              <span className="text-3xl font-semibold text-zinc-900">25+</span>
              <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">Projects Delivered</span>
            </div>
            <div className="h-10 w-px bg-zinc-100 hidden md:block" />
            <div className="flex flex-col items-start md:items-center">
              <span className="text-3xl font-semibold text-zinc-900">4.9/5</span>
              <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">Client Rating</span>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Glow (Center Bottom) */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      </div>
    </section>
  );
}
