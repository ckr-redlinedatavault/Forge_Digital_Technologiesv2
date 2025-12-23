import React from 'react';
import Image from 'next/image';

const projects = [
  {
    name: "Student Forge",
    category: "Learning Platform",
    period: "2024",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Farm-Link",
    category: "E-Commerce Platform",
    period: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "VC Portfolio Ecosystem",
    category: "UX Strategy",
    period: "2023",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative w-full bg-white border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
        
        {/* REFINED HEADER: Semi-Bold MNC Look */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-[1.5px] w-8 bg-blue-600"></span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                Strategic Engagements
              </p>
            </div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
              Selected <span className="text-blue-600">Archive</span>.
            </h2>
          </div>
          <a href="#" className="text-[12px] font-semibold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors">
            Capability Deck ↗
          </a>
        </div>

        {/* HIGH-DENSITY IMAGE GRID: Architectural 1px Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
          {projects.map((project) => (
            <article key={project.name} className="group relative bg-white overflow-hidden">
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-50">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  priority
                />
                {/* Micro Label */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-2 py-1.5 shadow-sm">
                  <span className="text-[10px] font-semibold text-zinc-900 tracking-tighter">FY // {project.period}</span>
                </div>
              </div>

              {/* CONTENT AREA: All Semi-Bold */}
              <div className="p-8 space-y-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                {/* Subtle technical accent */}
                <div className="h-[1px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full mt-4" />
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER SIGNATURE: Dark & Bold Brand Identity */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-zinc-100 pt-10 gap-6">
           <div className="flex items-center gap-4">
             <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-950">
               SYSTEMS ARCHITECTURE
             </p>
             <span className="h-[1px] w-10 bg-zinc-200"></span>
             <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-950">
               FORGE DIGITAL TECHNOLOGIES
             </p>
           </div>
           <p className="text-[9px] font-semibold text-zinc-400 uppercase tracking-widest">
             © 2026 Production Studio
           </p>
        </div>
      </div>
    </section>
  );
}
