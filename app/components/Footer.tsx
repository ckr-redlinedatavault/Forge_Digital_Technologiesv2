import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
        
        {/* TOP SECTION: BRAND & NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-zinc-100">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col group shrink-0">
              <div className="flex items-center gap-3">
                {/* Brand Flame Icon */}
                <svg viewBox="0 0 100 120" className="h-10 w-auto fill-zinc-950" aria-hidden="true">
                  <path d="M48 5C48 5 20 35 20 65C20 85 35 100 55 100C75 100 90 85 90 65C90 55 85 45 78 38L60 55C65 40 65 25 48 5Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-2xl font-black leading-[0.8] tracking-tighter text-zinc-950">FORGE</span>
                  <span className="text-2xl font-black leading-[0.8] tracking-tighter text-zinc-950">DIGITAL</span>
                </div>
              </div>
              <span className="mt-1.5 text-[10px] font-bold tracking-[0.45em] text-zinc-950">TECHNOLOGIES</span>
            </div>
            <p className="max-w-md text-sm font-medium leading-relaxed text-zinc-500">
              A high-performance product studio engineering resilient software architecture and sophisticated digital experiences.
            </p>
          </div>

          {/* COLUMN 2: NAVIGATION */}
          <div className="space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">Navigation</p>
            <nav className="flex flex-col gap-3">
              <a href="/about" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="/services" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="/work" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                Work
              </a>
              <a href="#testimonials" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* COLUMN 3: CONNECT */}
          <div className="space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">Connect</p>
            <nav className="flex flex-col gap-3">
              <a href="/contact" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                Contact Us
              </a>
              <a href="mailto:you@example.com" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                Email
              </a>
              <a href="#" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                GitHub
              </a>
            </nav>
          </div>
        </div>

        {/* BOTTOM SECTION: SIGNATURE & COPYRIGHT */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* BRAND SIGNATURE */}
          <div className="flex items-center gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-950">
              SYSTEMS ARCHITECTURE
            </p>
            <span className="h-[1px] w-10 bg-zinc-200"></span>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-950">
              FORGE DIGITAL TECHNOLOGIES
            </p>
          </div>

          {/* COPYRIGHT & BACK TO TOP */}
          <div className="flex items-center gap-6 text-xs font-medium text-zinc-400">
            <p>© {currentYear} All rights reserved</p>
            <a 
              href="/#hero" 
              className="flex items-center gap-2 text-zinc-600 hover:text-blue-600 transition-colors"
            >
              Back to top
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
