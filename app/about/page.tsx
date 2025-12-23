import SecondaryNavbar from "../components/SecondaryNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-blue-600 selection:text-white scroll-smooth">
      <SecondaryNavbar />
      <Navbar />

      <main className="relative">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Hero */}
        <section className="relative w-full bg-white border-b border-zinc-100 overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-20 lg:px-16">
            <div className="flex flex-col items-center text-center gap-6">
              <p className="inline-block border-x-2 border-blue-600 px-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                About Forge
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-5xl lg:text-6xl">
                We are a senior product studio engineering
                <span className="text-blue-600"> resilient</span> digital systems.
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-zinc-500 md:text-xl">
                From strategy and architecture to design and build, we partner directly with founders and
                enterprise teams to ship performant, reliable, and beautiful products.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white px-4 py-3 shadow-sm">
                  <span className="text-3xl font-semibold text-zinc-900">25+</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    Projects
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white px-4 py-3 shadow-sm">
                  <span className="text-3xl font-semibold text-zinc-900">4–8 wks</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    Avg Velocity
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white px-4 py-3 shadow-sm">
                  <span className="text-3xl font-semibold text-zinc-900">5 yrs</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                    Depth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story + Visual */}
        <section className="relative w-full bg-white border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-[1.5px] w-8 bg-blue-600" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                      Our Story
                    </p>
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                    Built by engineers and designers who own the outcome.
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-zinc-600">
                    Forge is intentionally small and senior. You partner directly with the builders—no handoffs
                    to junior teams. We combine product strategy, UX, and high-performance engineering to
                    deliver systems that scale without trade-offs.
                  </p>
                  <p className="text-base font-medium leading-relaxed text-zinc-600">
                    Our approach blends rigorous discovery, rapid prototyping, and production-grade delivery.
                    Every engagement is designed to be measurable, with clear milestones and accountability.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-md border border-zinc-200 bg-white p-4 shadow-sm">
                      <p className="text-sm font-semibold text-zinc-900">Engagement model</p>
                      <p className="text-sm text-zinc-600">Sprint-based delivery with leadership involvement.</p>
                    </div>
                    <div className="rounded-md border border-zinc-200 bg-white p-4 shadow-sm">
                      <p className="text-sm font-semibold text-zinc-900">Quality bar</p>
                      <p className="text-sm text-zinc-600">Performance, accessibility, and maintainability by default.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-[340px] w-full overflow-hidden bg-zinc-100 md:h-[420px]">
                  <Image
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1600"
                    alt="Forge Team"
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 border border-white/30" />
                  <div className="absolute top-6 right-6 h-12 w-12 border-t border-r border-white/50" />
                  <div className="absolute bottom-6 left-6 h-12 w-12 border-b border-l border-white/50" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-zinc-950 p-4 hidden md:block">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white">
                    Studio / Operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="relative w-full bg-white border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20 lg:px-16">
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="h-[1.5px] w-8 bg-blue-600" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                  Operating Principles
                </p>
              </div>
              <h3 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                The standards we hold every project to.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Outcome-driven",
                  desc: "We define success metrics up front and align delivery to measurable business outcomes.",
                },
                {
                  title: "Performance obsessed",
                  desc: "Speed, reliability, accessibility, and scalability are non-negotiable in every build.",
                },
                {
                  title: "Transparent delivery",
                  desc: "Weekly checkpoints, artifact sharing, and clear ownership so you always know status.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-md border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-50"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">Standard</p>
                  </div>
                  <h4 className="text-xl font-semibold text-zinc-950">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership / Stats */}
        <section className="relative w-full bg-zinc-50 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20 lg:px-16">
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="h-[1.5px] w-8 bg-blue-600" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                  Footprint
                </p>
              </div>
              <h3 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                A distributed team with global delivery.
              </h3>
              <p className="max-w-3xl text-base font-medium leading-relaxed text-zinc-600">
                We operate across timezones with collaborative rituals that keep momentum high and decisions fast.
                Leadership stays directly engaged in every engagement.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Core Pods", value: "3", note: "Design, Build, Scale" },
                { label: "Timezones", value: "3", note: "US / EU / APAC coverage" },
                { label: "Engagements", value: "25+", note: "Product launches & rebuilds" },
              ].map((item) => (
                <div key={item.label} className="rounded-md border border-zinc-200 bg-white p-6 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-600">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-zinc-950">{item.value}</p>
                  <p className="mt-2 text-sm text-zinc-600">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA (match work page style) */}
        <section className="relative z-10 w-full bg-blue-600 overflow-hidden">
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-[1.5px] w-8 bg-white" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-100">
                    Next engagement
                  </p>
                </div>
                <h3 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
                  Let&apos;s build your next release together.
                </h3>
                <p className="max-w-xl text-base font-medium leading-relaxed text-blue-50">
                  Tell us about the product, platform, or internal tool you need. We respond within
                  1–2 business days with next steps.
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

