"use client";
import React, { useState } from 'react';

interface FAQItem {
  id: string;
  tag: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    tag: "CAPABILITY",
    question: "What is your project specialisation?",
    answer: "We focus on high-performance enterprise architectures, scalable marketing ecosystems, and sophisticated internal toolsets for global engineering teams.",
  },
  {
    id: "02",
    tag: "TIMELINE",
    question: "What are your typical delivery timelines?",
    answer: "Standard production cycles range from 4 to 8 weeks. This allows for rigorous technical discovery, architectural design, and thorough performance auditing.",
  },
  {
    id: "03",
    tag: "SUPPORT",
    question: "Do you provide long-term technical support?",
    answer: "Absolutely. We offer structured hand-offs for internal teams or continuous maintenance retainers focused on security, speed, and platform iterations.",
  },
  {
    id: "04",
    tag: "STACK",
    question: "Which technology stack do you deploy?",
    answer: "We primarily build with TypeScript, Next.js, and Node.js. Our systems are engineered for cloud-native environments like AWS and Vercel for maximum reliability.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-[#fafafa] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* HEADER AREA: Compact Log Style */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-zinc-200 pb-8 lg:flex-row lg:items-end">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                System Query Logs
              </span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
              Common <span className="text-blue-600">Inquiries</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[10px] leading-relaxed uppercase tracking-wider text-zinc-500">
            [v1.0.4] Documentation regarding process & architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* LEFT: Sidebar Progress Indicators */}
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32 space-y-6 border-l border-zinc-200 pl-8">
              {faqs.map((faq, index) => (
                <div key={`nav-${faq.id}`} className="group flex items-center gap-4">
                  <span className={`font-mono text-[10px] font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-zinc-300'}`}>
                    {faq.id}
                  </span>
                  <div className={`h-[1px] transition-all duration-500 ${openIndex === index ? 'w-10 bg-blue-600' : 'w-4 bg-zinc-200 group-hover:bg-zinc-400'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Compact Accordion */}
          <div className="lg:col-span-9">
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.id}
                    className={`relative overflow-hidden border transition-all duration-500 ${
                      isOpen 
                        ? 'border-blue-600 bg-white shadow-lg shadow-blue-900/5' 
                        : 'border-zinc-200 bg-transparent hover:border-zinc-400'
                    }`}
                  >
                    {isOpen && (
                      <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-blue-600" />
                    )}

                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-5 text-left outline-none"
                    >
                      <div className="flex flex-col gap-1">
                        <span className={`font-mono text-[9px] font-bold tracking-[0.2em] ${isOpen ? 'text-blue-600' : 'text-zinc-400'}`}>
                          TYPE: {faq.tag}
                        </span>
                        <h3 className={`text-xl font-semibold tracking-tight transition-colors ${isOpen ? 'text-zinc-950' : 'text-zinc-600'}`}>
                          {faq.question}
                        </h3>
                      </div>

                      {/* Geometric Toggle Icon */}
                      <div className={`relative flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-500 ${isOpen ? 'rotate-90 border-blue-600 bg-blue-600 text-white' : 'border-zinc-200 text-zinc-400'}`}>
                         <span className="font-mono text-[10px] font-bold">{isOpen ? '−' : '+'}</span>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-5 pb-6">
                        <div className="flex gap-4 border-t border-zinc-100 pt-5">
                          <div className="hidden pt-1 md:block">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                                <path d="M13 5l7 7-7 7M5 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="max-w-2xl text-base font-medium leading-relaxed text-zinc-600">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout: Tightened */}
            <div className="mt-8 flex items-center gap-4 rounded-sm border border-dashed border-zinc-300 p-4">
              <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                End of logs. <a href="#cta" className="text-blue-600 underline underline-offset-4 hover:text-zinc-950">Request Tech Specs</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
