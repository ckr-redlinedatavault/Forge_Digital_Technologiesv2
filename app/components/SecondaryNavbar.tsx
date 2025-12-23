import React from 'react';

export default function SecondaryNavbar() {
  return (
    <div className="w-full bg-zinc-950 border-b border-white/10 py-4 lg:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        
        {/* LEFT: Live Operational Status */}
        <div className="flex items-center gap-4">
          {/* Professional Status Pulse */}
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Operational Status:
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-zinc-200">
              Booking Q1 2026 Enterprise Engagements
            </span>
          </div>
        </div>

        {/* RIGHT: Direct Access Line */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:partner@forgedigital.com"
            className="group hidden sm:flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-white"
          >
            <span className="text-blue-500 font-black">/</span>
            Direct Inquiry
            <span className="h-[1px] w-4 bg-zinc-800 transition-all group-hover:w-8 group-hover:bg-blue-600"></span>
            <span className="text-zinc-200 lowercase tracking-normal group-hover:text-blue-400 transition-colors">
              partner@forgedigital.com
            </span>
          </a>

          {/* Mobile Quick Action */}
          <a href="mailto:partner@forgedigital.com" className="sm:hidden text-blue-500 text-[10px] font-bold uppercase tracking-widest">
            Email Us ↗
          </a>
        </div>
        
      </div>
    </div>
  );
}