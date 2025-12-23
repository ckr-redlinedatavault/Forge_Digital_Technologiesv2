import React from 'react';

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative w-full bg-blue-600 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Accent Glow */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT: CONTENT */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1.5px] w-8 bg-white"></span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-100">
                Get Started
              </p>
            </div>
            
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
              Ready to talk about your{" "}
              <span className="text-blue-100">next project</span>?
            </h2>
            
            <p className="max-w-xl text-base font-medium leading-relaxed text-blue-50">
              Tell us a bit about what you&apos;re building and we&apos;ll reply
              within 1–2 business days with next steps.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm font-medium text-blue-50">
                  Average response: 4 hours
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                <span className="text-sm font-medium text-blue-50">
                  Global support 24/7
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: ACTION BLOCK */}
          <div className="flex flex-col gap-6 lg:items-end">
            <div className="w-full lg:w-auto space-y-4">
              <a
                href="/contact"
                className="group relative flex w-full lg:w-auto items-center justify-center gap-3 rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50 active:scale-95 shadow-lg"
              >
                <span>Get in touch</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
              
              <a
                href="mailto:you@example.com"
                className="group flex w-full lg:w-auto items-center justify-center gap-2 rounded-md border-2 border-white/30 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Email us</span>
              </a>
            </div>

            <p className="text-xs font-medium text-blue-100 text-center lg:text-right">
              Or schedule a call to discuss your requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
