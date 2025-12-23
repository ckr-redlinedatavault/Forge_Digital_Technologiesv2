"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        
        {/* LOGO AREA */}
        <a
          href="/"
          className="group flex flex-col transition-opacity hover:opacity-90"
        >
          <div className="flex items-center gap-3">
            {/* Brand Flame Icon */}
            <svg
              viewBox="0 0 100 120"
              className="h-9 w-auto fill-zinc-950"
              aria-hidden="true"
            >
              <path d="M48 5C48 5 20 35 20 65C20 85 35 100 55 100C75 100 90 85 90 65C90 55 85 45 78 38L60 55C65 40 65 25 48 5Z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-2xl font-black leading-[0.8] tracking-tighter text-zinc-950">
                FORGE
              </span>
              <span className="text-2xl font-black leading-[0.8] tracking-tighter text-zinc-950">
                DIGITAL
              </span>
            </div>
          </div>
          <span className="mt-1 text-[10px] font-bold tracking-[0.45em] text-zinc-950">
            TECHNOLOGIES
          </span>
        </a>

        {/* NAVIGATION: Desktop */}
        <nav className="hidden items-center gap-10 text-[13px] font-semibold uppercase tracking-widest text-zinc-500 md:flex">
          <a href="/#hero" className="transition-colors hover:text-blue-600">Home</a>
          <a href="/about" className="transition-colors hover:text-blue-600">About</a>
          <a href="/services" className="transition-colors hover:text-blue-600">Services</a>
          <a href="/work" className="transition-colors hover:text-blue-600">Work</a>
          <a href="/#faq" className="transition-colors hover:text-blue-600">FAQ</a>
        </nav>

        {/* CTA BUTTON: Desktop */}
        <div className="hidden items-center md:flex">
          <a
            href="/contact"
            className="rounded-sm bg-zinc-950 px-7 py-3 text-[12px] font-semibold uppercase tracking-widest text-white transition-all hover:bg-blue-600 active:scale-95 shadow-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="block p-2 text-zinc-950 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-6 border-b border-zinc-100 bg-white p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 md:hidden">
          <nav className="flex flex-col gap-6">
            <a href="/#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-zinc-950">Home</a>
            <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-zinc-950">About</a>
            <a href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-zinc-950">Services</a>
            <a href="/work" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-zinc-950">Work</a>
          </nav>
          <a
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-sm bg-blue-600 py-4 text-center text-xs font-bold uppercase tracking-widest text-white"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}