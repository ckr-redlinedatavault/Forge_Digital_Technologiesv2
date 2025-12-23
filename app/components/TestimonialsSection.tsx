"use client";
import React, { useRef, useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Layers, 
  ArrowRight 
} from 'lucide-react';

interface ManifestoItem {
  id: string;
  title: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const standards: ManifestoItem[] = [
  {
    id: "01",
    title: "Resilient Architecture",
    label: "ENGINEERING_INTEGRITY",
    icon: <ShieldCheck className="w-4 h-4" />,
    description: "We build with a 'failure-proof' mindset. Systems architected to handle 10x traffic spikes with zero latency degradation.",
  },
  {
    id: "02",
    title: "Frictionless UX",
    label: "EXPERIENCE_DESIGN",
    icon: <Cpu className="w-4 h-4" />,
    description: "Eliminating cognitive load to ensure users reach goals in the fewest clicks possible. Performance-first interaction.",
  },
  {
    id: "03",
    title: "Scalable Growth",
    label: "BUSINESS_ALIGNMENT",
    icon: <Zap className="w-4 h-4" />,
    description: "Digital assets designed to lower acquisition costs and drive revenue. Every line of code serves a business outcome.",
  },
  {
    id: "04",
    title: "Elastic Infrastructure",
    label: "SYSTEM_SCALABILITY",
    icon: <Layers className="w-4 h-4" />,
    description: "Modular, cloud-native deployments that grow from MVP to enterprise scale without requiring a total rewrite.",
  }
];

export default function StandardsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProgress(scrollPercent);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="standards" className="relative w-full bg-white border-b border-zinc-100 overflow-hidden py-12 md:py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        
        {/* HEADER: Reduced height and padding */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-zinc-100 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-blue-600" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                Production Standards v1.0
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl lg:text-4xl">
              How we <span className="text-blue-600 italic">forge</span> systems.
            </h2>
          </div>

          {/* CONTROLS: Scaled down */}
          <div className="flex items-center gap-6">
             <div className="hidden lg:flex flex-col items-end gap-1.5">
                <span className="font-mono text-[8px] font-bold text-zinc-300 uppercase tracking-widest">MANIFESTO_PROGRESS</span>
                <div className="h-[1px] w-32 bg-zinc-100 overflow-hidden relative">
                   <div 
                    className="absolute inset-y-0 left-0 bg-blue-600 transition-all duration-500" 
                    style={{ width: `${progress}%` }} 
                   />
                </div>
             </div>
             <div className="flex gap-1">
                <button onClick={() => scroll('left')} className="group flex h-9 w-9 items-center justify-center border border-zinc-200 hover:border-zinc-900 transition-all active:scale-95">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button onClick={() => scroll('right')} className="group flex h-9 w-9 items-center justify-center border border-zinc-200 hover:border-zinc-900 transition-all active:scale-95">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
                </button>
             </div>
          </div>
        </div>

        {/* MANIFESTO GRID: Reduced Card Padding */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-px bg-zinc-200 border border-zinc-200"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {standards.map((item) => (
            <div
              key={item.id}
              className="relative min-w-full md:min-w-[380px] snap-start bg-white p-8 md:p-10 group flex flex-col justify-between"
            >
              {/* Card ID Indicator: Scaled down */}
              <div className="absolute top-6 right-8">
                <span className="text-2xl font-black text-zinc-50 group-hover:text-blue-50 transition-colors duration-500">
                  {item.id}
                </span>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-zinc-50 text-zinc-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 rounded-sm">
                   {item.icon}
                </div>
                
                <div className="space-y-1">
                  <span className="font-mono text-[8px] font-bold text-blue-600 tracking-[0.3em] uppercase">
                    {item.label}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-950 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-zinc-500 font-medium max-w-[280px]">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-300">Standard // Verified</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* SUBTLE FOOTER: Reduced margin */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 opacity-50">
           <div className="flex items-center gap-3">
             <div className="h-px w-6 bg-zinc-300" />
             <p className="font-mono text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-950">
               Engineering Protocol
             </p>
           </div>
           <p className="font-mono text-[8px] font-medium text-zinc-400 uppercase tracking-widest">
             Studio_Manifesto_2026
           </p>
        </div>
      </div>
      
      <style jsx>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
