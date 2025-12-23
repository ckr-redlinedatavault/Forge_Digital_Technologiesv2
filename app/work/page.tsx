import SecondaryNavbar from "../components/SecondaryNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "FinTech Command Center",
    category: "Data Experience",
    period: "2022",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-blue-600 selection:text-white scroll-smooth">
      <SecondaryNavbar />
      <Navbar />

      <main className="relative">
        
        {/* --- HERO SECTION (MATCHES HOME HERO STYLE) --- */}
        <section className="relative w-full overflow-hidden bg-white pt-20 pb-16 md:pt-32 md:pb-24 border-b border-zinc-100">
          {/* Subtle Grid Pattern */}
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

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center md:px-10">
            <div className="flex w-full flex-col items-center space-y-8">
              <div className="space-y-4">
                <p className="inline-block border-x-2 border-blue-600 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Portfolio
                </p>
                <h1 className="text-5xl font-semibold leading-[1.1] tracking-tighter text-zinc-900 md:text-6xl lg:text-7xl">
                  Proof of execution, <br className="hidden md:block" /> 
                  built for <span className="text-blue-600 italic">scale.</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
                  A snapshot of product builds, experience design, and technical 
                  architecture delivered for founders and enterprise teams.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-zinc-900 px-8 py-4 text-sm font-semibold tracking-widest text-white transition-all hover:bg-blue-600 uppercase"
                >
                  Start a project
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/case-studies"
                  className="text-sm font-semibold tracking-widest text-zinc-900 underline decoration-blue-600 decoration-2 underline-offset-8 transition-colors hover:text-blue-600 uppercase"
                >
                  View case studies
                </a>
              </div>
            </div>

            {/* Subtle Decorative Glow */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />
          </div>
        </section>

        {/* --- WORK GRID SECTION --- */}
        <section id="cases" className="relative z-10 w-full bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
               <p className="inline-block border-x-2 border-blue-600 px-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  Case Studies
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Systems we shipped.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 overflow-hidden rounded-lg">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="group relative bg-white overflow-hidden"
                >
                  <div className="relative aspect-16/11 w-full overflow-hidden bg-zinc-50">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 shadow-sm border border-zinc-100">
                      <span className="text-[10px] font-bold text-zinc-900 tracking-tighter uppercase">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </article>
              ))}

              {/* "MANY MORE" CARD */}
              <div className="group relative bg-zinc-50 flex flex-col items-center justify-center p-12 text-center space-y-6">
                <div className="h-px w-12 bg-blue-600" />
                <div className="space-y-2">
                    <h3 className="text-2xl font-serif italic text-zinc-900">And many more...</h3>
                    <p className="text-sm text-zinc-500 max-w-[200px] leading-relaxed">
                        20+ successful launches across fintech, e-commerce, and SaaS.
                    </p>
                </div>
                <a 
                    href="/contact" 
                    className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase border-b border-blue-600 pb-1 transition-colors hover:text-zinc-900 hover:border-zinc-900"
                >
                    View Archive
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA (MATCHES HERO STYLE) --- */}
        <section className="py-24 bg-white relative overflow-hidden border-t border-zinc-100">
           {/* Decorative Glow for Footer CTA */}
           <div className="absolute left-1/2 bottom-0 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />

          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-10">
               <p className="inline-block border-x-2 border-blue-600 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Next Engagement
              </p>
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-tight">
                Ready to add <span className="text-blue-600 italic">your project</span> to the list?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                <a href="/contact" className="group inline-flex items-center justify-center bg-zinc-900 px-10 py-5 text-sm font-bold tracking-[0.2em] text-white transition-all hover:bg-blue-600 uppercase">
                  START A PROJECT 
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="mailto:hello@studio.com" className="inline-flex items-center justify-center border-2 border-zinc-200 px-10 py-5 text-sm font-bold tracking-[0.2em] text-zinc-900 transition-all hover:border-blue-600 hover:text-blue-600 uppercase">
                  <Mail className="mr-3 h-4 w-4" />
                  EMAIL US
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}