"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "01",
    name: "Alex Rivera",
    role: "Founder, FlowMetrics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    quote: "The engineering depth at Forge is exceptional. They functioned as an extension of our core team, moving us from concept to product in record time.",
  },
  {
    id: "02",
    name: "Priya Shah",
    role: "Head of Product, Northline",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    quote: "Our new enterprise dashboard is a performance game-changer. Our clients now interact with complex data sets seamlessly and without support.",
  },
  {
    id: "03",
    name: "Marcus Thorne",
    role: "CTO, Arca Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    quote: "Precision and scalability are rare. Forge delivered a system architecture that handled our 3x traffic surge without a single drop.",
  },
  {
    id: "04",
    name: "Sarah Jenkins",
    role: "Director, Velocity Lab",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    quote: "A team that understands business outcomes. They don't just write code; they build digital assets that drive actual revenue growth.",
  }
];

export default function TestimonialsSection() {
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
    <section id="testimonials" className="relative w-full bg-white border-b border-zinc-100 overflow-hidden py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        
        {/* COMPACT HEADER: Blueprint Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-100 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                Strategic Validation Logs
              </span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
              Partner <span className="text-blue-600">Insights</span>
            </h2>
          </div>

          {/* SLIDER CONTROLS: Integrated UI */}
          <div className="flex items-center gap-6">
             <div className="flex flex-col items-end gap-2">
                <span className="font-mono text-[9px] font-bold text-zinc-400">TRACKING_SEQUENCE</span>
                <div className="h-[2px] w-32 bg-zinc-100 overflow-hidden relative">
                   <div 
                    className="absolute inset-y-0 left-0 bg-blue-600 transition-all duration-300" 
                    style={{ width: `${progress}%` }} 
                   />
                </div>
             </div>
             <div className="flex gap-1">
                <button 
                  onClick={() => scroll('left')} 
                  className="group flex h-10 w-10 items-center justify-center border border-zinc-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                  aria-label="Scroll Left"
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button 
                  onClick={() => scroll('right')} 
                  className="group flex h-10 w-10 items-center justify-center border border-zinc-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                  aria-label="Scroll Right"
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M9 5l7 7-7 7"/></svg>
                </button>
             </div>
          </div>
        </div>

        {/* HORIZONTAL DATA STREAM */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative min-w-full md:min-w-[480px] snap-start bg-[#fafafa] border border-zinc-200 p-8 transition-all duration-500 hover:border-blue-600 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 group"
            >
              {/* Corner Accent Decoration */}
              <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-transparent group-hover:border-blue-600 transition-colors" />

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] font-bold text-blue-600 tracking-widest">REF_ID // {item.id}</span>
                    <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-tighter">STATUS: VERIFIED_PARTNER</span>
                  </div>
                  <div className="text-3xl font-serif text-zinc-200 group-hover:text-blue-200 transition-colors">"</div>
                </div>

                <blockquote className="text-base font-medium leading-relaxed text-zinc-800 md:text-lg min-h-[100px]">
                  {item.quote}
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-1 ring-zinc-200">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <cite className="not-italic text-sm font-black uppercase tracking-tight text-zinc-950">{item.name}</cite>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-blue-600">{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER: Signature & Legal Trace */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-zinc-100 pt-6 gap-4">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-950">
              TRUST ARCHITECTURE
            </p>
            <div className="h-[1px] w-6 bg-zinc-300" />
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400">
              [SYSTEM_CHECK_OK]
            </p>
          </div>
          <p className="font-mono text-[9px] font-medium text-zinc-400 uppercase tracking-widest">
            Data verified by Forge Digital Technologies © 2025
          </p>
        </div>
      </div>
      
      <style jsx>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
