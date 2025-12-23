import React from 'react';

const points = [
  {
    number: "01",
    title: "Strategy first",
    description:
      "We work with you to clarify goals, define success metrics, and align the product with your business objectives.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design that converts",
    description:
      "Clean, modern interfaces focused on usability and conversion—engineered for performance, not just aesthetics.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "From idea to launch",
    description:
      "Full-lifecycle support across discovery, design, and development to ensure a seamless market entry.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="w-full bg-white border-b border-zinc-100"
    >
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24 lg:px-16">
        
        {/* HEADER: Clean Left-Alignment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-blue-600"></span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                Strategic Framework
              </p>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
              A partner focused on <span className="text-blue-600">outcomes</span>.
            </h2>
          </div>
          <p className="max-w-xs text-base font-medium leading-relaxed text-zinc-500">
            Enterprise-grade reliability. We ship digital products built for 
            global scale and performance.
          </p>
        </div>

        {/* BLUE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="group relative flex flex-col gap-8 bg-blue-600 p-8 md:p-10 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200/50"
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-blue-500/30 rounded-sm text-white">
                  {point.icon}
                </div>
                <span className="text-[10px] font-black tracking-widest text-blue-300/50">
                  {point.number}
                </span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {point.title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-blue-50">
                  {point.description}
                </p>
              </div>

              {/* Minimalist interactive detail */}
              <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-200 opacity-0 transition-opacity group-hover:opacity-100">
                Learn Methodology →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
