"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Linkedin, Github, Mail, Globe2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        
        {/* --- TOP ROW: STATUS & CTA --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-16">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900">
              Availability: <span className="text-zinc-500 font-medium">Accepting Q1 2026 Projects</span>
            </p>
          </div>
          <Link 
            href="/contact" 
            className="group text-2xl font-semibold tracking-tighter text-zinc-950 hover:text-blue-600 transition-colors"
          >
            Let&apos;s build the future <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
          </Link>
        </div>

        {/* --- MAIN NAVIGATION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-y border-zinc-100">
          
          {/* BRAND ARCHITECTURE (4 Cols) */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex flex-col shrink-0">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 100 120" className="h-10 w-auto fill-zinc-950" aria-hidden="true">
                  <path d="M48 5C48 5 20 35 20 65C20 85 35 100 55 100C75 100 90 85 90 65C90 55 85 45 78 38L60 55C65 40 65 25 48 5Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-2xl font-black leading-[0.8] tracking-tighter text-zinc-950 uppercase">Forge Digital</span>
                </div>
              </div>
              <span className="mt-1.5 text-[9px] font-bold tracking-[0.5em] text-zinc-400 uppercase">Systems Architecture</span>
            </div>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-zinc-500">
              A high-performance product studio specializing in resilient software systems and sophisticated digital interfaces.
            </p>
            <div className="flex items-center gap-4">
               <a href="https://linkedin.com" className="p-2 border border-zinc-100 rounded-full hover:bg-zinc-50 transition-colors">
                  <Linkedin className="w-4 h-4 text-zinc-600" />
               </a>
               <a href="https://github.com" className="p-2 border border-zinc-100 rounded-full hover:bg-zinc-50 transition-colors">
                  <Github className="w-4 h-4 text-zinc-600" />
               </a>
               <a href="mailto:Info@forgedigitaltechnologies.com" className="p-2 border border-zinc-100 rounded-full hover:bg-zinc-50 transition-colors">
                  <Mail className="w-4 h-4 text-zinc-600" />
               </a>
            </div>
          </div>

          {/* SITEMAP (2 Cols) */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-950">Studio</p>
            <nav className="flex flex-col gap-4">
              {['About', 'Work', 'Services', 'Pricing'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-xs font-semibold text-zinc-500 hover:text-blue-600 transition-colors uppercase tracking-widest">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* CAPABILITIES (3 Cols) */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-950">Expertise</p>
            <nav className="flex flex-col gap-4">
              {['Web Systems', 'Mobile Products', 'UX Strategy', 'Cloud Infrastructure'].map((item) => (
                <span key={item} className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                  {item}
                </span>
              ))}
            </nav>
          </div>

          {/* LOCATION (2 Cols) */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-950">Global</p>
            <div className="space-y-4">
               <div className="flex items-center gap-2 text-zinc-500">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold uppercase tracking-widest">Remote-First</span>
               </div>
               <p className="text-[10px] leading-relaxed text-zinc-400 font-medium uppercase tracking-tighter">
                  Operating across <br /> Multiple Timezones.
               </p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: SIGNATURE & LEGAL --- */}
        <div className="pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-950">
              © {currentYear} Forge Digital Technologies
            </p>
            <span className="hidden md:block h-3 w-px bg-zinc-200"></span>
            <p className="text-[9px] font-medium text-zinc-400 uppercase tracking-widest">
              Built by <span className="text-zinc-900">Redlines Development Team</span>
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">
              Terms of Service
            </Link>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-950"
            >
              Top
              <div className="p-1.5 border border-zinc-200 rounded-full group-hover:bg-zinc-950 group-hover:text-white transition-all">
                <ArrowUp className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
