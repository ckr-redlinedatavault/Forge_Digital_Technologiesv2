import React from 'react';

const PARTNERS = [
  "TECHFLOW", "KNOTS", "FARM-LINK", "STUDENT-FORGE", "NSS-CMRIT"
  
];

export default function SliderSection() {
  return (
    <section className="w-full bg-blue-600 py-6 shadow-inner">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Label: Adjusted for blue background */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-blue-100 whitespace-nowrap">
            Strategic Partners
          </span>
          {/* Separator line adjusted to light blue/white with low opacity */}
          <div className="h-[1px] w-full bg-blue-400/30"></div>
        </div>

        {/* Slider Area */}
        <div className="relative overflow-hidden">
          
          {/* Edge Fades: Crucial - These must match the blue background exactly */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-blue-600 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-blue-600 to-transparent"></div>

          {/* Marquee Track */}
          <div className="animate-marquee pause-marquee flex w-max items-center gap-12 md:gap-20">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2.5 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                {/* Micro SVG Icon - Changed to White */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                   <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                   <path d="M2 17L12 22L22 17" fillOpacity="0.4" />
                </svg>
                
                {/* Name: White, Semi-bold */}
                <span className="text-sm font-semibold tracking-tighter text-white">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
