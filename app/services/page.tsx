import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Cpu, Globe, Layers, Zap, PenTool, BarChart3 } from "lucide-react";
import SecondaryNavbar from "../components/SecondaryNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const offerings = [
  {
    id: "01",
    name: "Product Strategy",
    icon: <BarChart3 className="w-5 h-5" />,
    desc: "Define the right thing to build—roadmaps, success metrics, and technical approach.",
    bullets: ["Discovery & prioritization", "User journeys", "Architecture direction"],
  },
  {
    id: "02",
    name: "Design Systems",
    icon: <Layers className="w-5 h-5" />,
    desc: "Visual language that keeps teams aligned and shipping faster.",
    bullets: ["Design tokens", "Rapid prototyping", "Accessibility-first UI"],
  },
  {
    id: "03",
    name: "Web & Platform",
    icon: <Globe className="w-5 h-5" />,
    desc: "High-performance platforms built with Next.js, tuned for speed and SEO.",
    bullets: ["Next.js / React builds", "API & data layers", "Performance hardening"],
  },
  {
    id: "04",
    name: "Internal Tools",
    icon: <Cpu className="w-5 h-5" />,
    desc: "Operational tools and dashboards that streamline workflows.",
    bullets: ["Internal dashboards", "Workflow automation", "Role-based access"],
  },
  {
    id: "05",
    name: "Growth & Experiment",
    icon: <Zap className="w-5 h-5" />,
    desc: "Landing pages and funnels to validate and scale quickly.",
    bullets: ["Conversion-focused pages", "A/B testing", "Analytics setup"],
  },
  {
    id: "06",
    name: "Care & Scale",
    icon: <PenTool className="w-5 h-5" />,
    desc: "Sustained velocity after launch—monitoring and feature iterations.",
    bullets: ["Performance audits", "Reliability", "Continuous delivery"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-blue-600 selection:text-white scroll-smooth">
      <SecondaryNavbar />
      <Navbar />

      <main className="relative">
        
        {/* --- HERO SECTION (MATCHES HOME HERO STYLE) --- */}
        <section className="relative w-full overflow-hidden bg-white pt-20 pb-16 md:pt-32 md:pb-24 border-b border-zinc-100">
          {/* 1. INDUSTRY BACKGROUND: Subtle Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]">
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
                  Our Capabilities
                </p>
                <h1 className="text-5xl font-semibold leading-[1.1] tracking-tighter text-zinc-900 md:text-6xl lg:text-7xl">
                  From zero to launch, we own the <span className="text-blue-600 italic">lifecycle.</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
                  Strategy, design, and engineering led by seniors. We build high-performance 
                  foundations for teams that need to move fast without breaking things.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center bg-zinc-900 px-8 py-4 text-sm font-semibold tracking-widest text-white transition-all hover:bg-blue-600"
                >
                  START A PROJECT
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#offerings"
                  className="text-sm font-semibold tracking-widest text-zinc-900 underline decoration-blue-600 decoration-2 underline-offset-8 transition-colors hover:text-blue-600"
                >
                  EXPLORE SERVICES
                </a>
              </div>
            </div>

            {/* Subtle Decorative Glow */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />
          </div>
        </section>

        {/* --- OFFERINGS SECTION --- */}
        <section id="offerings" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
               <p className="inline-block border-x-2 border-blue-600 px-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  What we ship
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Senior-led expertise. No fluff.</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 overflow-hidden rounded-lg">
              {offerings.map((item) => (
                <div key={item.id} className="group bg-white p-10 hover:bg-zinc-50 transition-colors duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black text-zinc-300 group-hover:text-blue-600 transition-colors uppercase tracking-[0.3em]">
                      F_ID // {item.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-[13px] font-medium text-zinc-400">
                        <div className="w-1 h-1 bg-blue-600" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
          <div className="container mx-auto px-6">
             <div className="flex flex-col items-center text-center mb-16 space-y-4">
               <p className="inline-block border-x-2 border-blue-600 px-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  Methodology
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Clear milestones. Direct access.</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discover", body: "We audit your tech, define MVP scope, and align on business goals." },
                { step: "02", title: "Design", body: "High-fidelity prototypes and design systems built for production." },
                { step: "03", title: "Develop", body: "Clean, type-safe code using Next.js and industry-leading patterns." },
                { step: "04", title: "Scale", body: "Post-launch monitoring, performance tuning, and roadmap execution." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-8 bg-white border border-zinc-200 rounded-md shadow-sm group hover:border-blue-600 transition-all">
                  <span className="block text-2xl font-bold text-zinc-100 group-hover:text-blue-100 transition-colors mb-4">{item.step}</span>
                  <h4 className="text-sm font-bold mb-3 uppercase tracking-widest text-zinc-900">{item.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA (MATCHES HOME BUTTON STYLE) --- */}
        <section className="py-24 bg-white relative overflow-hidden">
           {/* Decorative Glow for Footer CTA */}
           <div className="absolute left-1/2 bottom-0 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />

          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-10">
               <p className="inline-block border-x-2 border-blue-600 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Ready to begin?
              </p>
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-tight">
                Let’s build <span className="text-blue-600 italic">something great</span> together.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                <a href="/contact" className="group inline-flex items-center justify-center bg-zinc-900 px-10 py-5 text-sm font-bold tracking-[0.2em] text-white transition-all hover:bg-blue-600 uppercase">
                  BOOK A STRATEGY CALL 
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="mailto:hello@studio.com" className="inline-flex items-center justify-center border-2 border-zinc-200 px-10 py-5 text-sm font-bold tracking-[0.2em] text-zinc-900 transition-all hover:border-blue-600 hover:text-blue-600 uppercase">
                  EMAIL US DIRECT
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