import React from 'react';

const services = [
  {
    id: "01",
    name: "Website",
    description: "High-speed professional websites built for performance.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" /></svg>
  },
  {
    id: "02",
    name: "App",
    description: "Modern web and mobile applications for your business.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  },
  {
    id: "03",
    name: "UI/UX",
    description: "Clean and intuitive designs that are easy to navigate.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13t0 0h16M10 4v16" /></svg>
  },
  {
    id: "04",
    name: "Ad Design",
    description: "Eye-catching posters and ads to grow your brand.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  },
  {
    id: "05",
    name: "Marketing",
    description: "Digital strategies to reach the right audience.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
  }
];

export default function ServicesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      
      {/* SECTION HEADER */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 mb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-[2.5px] w-10 bg-blue-600"></span>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">Core Capabilities</p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
            Service Architecture<span className="text-blue-600">.</span>
          </h2>
        </div>
      </div>

      {/* THE SLANT CONTAINER: Combined Blue Cards with Light Separators */}
      <div className="relative -skew-y-3 border-t border-b border-blue-100 bg-blue-100">
        
        {/* GRID: 1px gap reveals the Light Blue background as lines */}
        <div className="mx-auto grid max-w-[100vw] grid-cols-1 md:grid-cols-5 gap-[1px]">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative flex flex-col bg-blue-600 p-8 py-16 transition-all duration-500 hover:bg-blue-700 overflow-hidden"
            >
              {/* Blueprint Dot Pattern */}
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

              <div className="relative z-10 skew-y-3 flex flex-col gap-8 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-widest text-blue-200">
                    F_ID // {service.id}
                  </span>
                  <div className="text-blue-200 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </div>

                <div className="text-white transform transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {service.name}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-blue-100 opacity-90">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Corner Bracket */}
              <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-white/20 group-hover:border-white/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER LABEL: Dark and Bold as requested */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 mt-12 flex justify-end">
        <div className="flex items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900">
            Systems Architecture
          </p>
          <span className="h-[1px] w-12 bg-zinc-200"></span>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900">
            Forge Digital Technologies
          </p>
        </div>
      </div>
    </section>
  );
}
