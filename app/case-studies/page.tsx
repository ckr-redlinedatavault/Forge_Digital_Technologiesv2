import SecondaryNavbar from "../components/SecondaryNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function StudentForgeCaseStudy() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-blue-600 selection:text-white scroll-smooth">
      <SecondaryNavbar />
      <Navbar />

      <main className="relative">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Hero Section */}
        <section className="relative z-10 w-full overflow-hidden bg-white pt-20 pb-16 md:pt-32 md:pb-24 border-b border-zinc-200">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-600" />
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
                  Case Study: EdTech & Skill Development
                </p>
              </div>
              <h1 className="text-5xl font-semibold leading-[1.1] tracking-tighter text-zinc-950 md:text-7xl lg:text-8xl">
                Student Forge.
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-zinc-500 md:text-2xl">
                Building industry-ready technical talent through practice-first experiential learning and mentor-driven architectures.
              </p>
            </div>

            {/* Quick Profile Grid */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-100 pt-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-2">Sector</p>
                <p className="text-sm font-semibold">Skill Development</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-2">Target</p>
                <p className="text-sm font-semibold">Engineering Students</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-2">Model</p>
                <p className="text-sm font-semibold">Hybrid (Project-Based)</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-2">Geography</p>
                <p className="text-sm font-semibold">India (Pan-National)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Introduction & Context */}
        <section className="relative z-10 py-24 bg-white">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-semibold tracking-tight">The Education Gap</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-zinc-600">
                <p>
                  India produces millions of graduates annually, yet a significant percentage remain unemployable. 
                  This stems from a fundamental disconnect between academic theory and industry reality. 
                  Traditional systems reward rote learning, leaving students ill-equipped for the dynamic requirements of a modern tech workforce.
                </p>
                <p className="font-medium text-zinc-900">
                  Student Forge was established to bridge this void by offering structured, practice-first education and career clarity to students in tier-2 and tier-3 institutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Founder & Inspiration (Visual Block) */}
        <section className="relative z-10 py-24 bg-zinc-900 text-white">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 aspect-square relative grayscale contrast-125 opacity-80">
                <Image 
                  src="https://media.licdn.com/dms/image/v2/D5603AQE4zgldVYCrKA/profile-displayphoto-scale_200_200/B56ZiypuSeHMAY-/0/1755343940973?e=2147483647&v=beta&t=46ZY5zEDWtYXC0i_5qNvwXSrJhU8bUpY3TQ6_YHf-8U" 
                  alt="Founder" 
                  fill 
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">The Catalyst</p>
                <h2 className="text-4xl font-semibold tracking-tight leading-tight">Founded on personal friction.</h2>
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  <p>
                    Founder Jashwanth Sonti experienced the systemic failures of traditional engineering education firsthand. 
                    The lack of mentorship and career guidance during his own academic journey became the blueprint for what Student Forge would solve.
                  </p>
                  <p>
                    Observation: While leading NSS activities, Jashwanth noted that structured guidance and hands-on exposure dramatically improved student outcomes compared to classroom hours alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Problem vs Solution */}
        <section className="relative z-10 py-24 bg-white">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/5">
              {/* Problem */}
              <div className="bg-white p-12 space-y-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-red-500">The Problem</h3>
                <ul className="space-y-6">
                  {[
                    "Skill Gap: Theoretical knowledge with zero industry readiness.",
                    "No Real Projects: Learning ends at the textbook level.",
                    "Career Confusion: Lack of roadmaps and professional exposure.",
                    "Low Confidence: Fear of real-world technical interviews."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-zinc-600">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Solution */}
              <div className="bg-zinc-50 p-12 space-y-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600">The Solution</h3>
                <ul className="space-y-6">
                  {[
                    "Project-Based Learning: Simulating industry workflows.",
                    "Mentor-Driven Approach: Direct guidance from domain experts.",
                    "Career Enablement: Resume building and internship prep.",
                    "Community Ecosystem: Collaborative hackathons and workshops."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-zinc-900 font-medium">
                      <span className="text-blue-600 mt-1.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Operational Model / Student Journey */}
        <section className="relative z-10 py-24 bg-white border-y border-zinc-100">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-semibold tracking-tight">The Forge Engine.</h2>
              <p className="text-zinc-500 uppercase text-[10px] font-bold tracking-[0.3em]">Operational Student Journey</p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: "Onboarding", desc: "Skill assessment & career mapping" },
                { title: "Foundation", desc: "Core domain fundamentals & tools" },
                { title: "Execution", desc: "Real-world project implementation" },
                { title: "Review", desc: "Regular mentor-led checkpoints" },
                { title: "Readiness", desc: "Mock interviews & job guidance" }
              ].map((step, idx) => (
                <div key={idx} className="relative p-6 border border-zinc-100 rounded-lg bg-white hover:border-blue-200 transition-colors">
                  <span className="block text-3xl font-bold text-zinc-100 mb-4">0{idx + 1}</span>
                  <h4 className="font-bold text-sm mb-2 uppercase tracking-tighter">{step.title}</h4>
                  <p className="text-xs leading-relaxed text-zinc-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SWOT Analysis */}
        <section className="relative z-10 py-24 bg-zinc-50">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Strengths</p>
                <p className="text-sm text-zinc-600 leading-relaxed italic">Founder-led vision, practical-first pedagogy, and affordable access.</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Weaknesses</p>
                <p className="text-sm text-zinc-600 leading-relaxed italic">Scalability of quality mentors and limited public performance metrics.</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Opportunities</p>
                <p className="text-sm text-zinc-600 leading-relaxed italic">AI-driven assessments, college partnerships, and corporate tie-ups.</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Threats</p>
                <p className="text-sm text-zinc-600 leading-relaxed italic">Large EdTech competition and rapid technology shifts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Impact & Conclusion */}
        <section className="relative z-10 py-24 bg-white">
          <div className="mx-auto max-w-3xl px-6 md:px-10 text-center space-y-10">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-950">Closing the Loop.</h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Student Forge represents a new-age education model focused on skills, confidence, and career readiness. 
              By addressing gaps in traditional education through empathetic leadership and community-driven learning, 
              it empowers students to transition smoothly from classrooms to careers.
            </p>
            <div className="pt-10 border-t border-zinc-100 grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest mb-4 text-blue-600">Key Learning</h5>
                <p className="text-sm text-zinc-500 leading-relaxed italic">"Experience beats theory in employability; mentorship is a force multiplier in education."</p>
              </div>
              <div>
                <h5 className="font-bold text-xs uppercase tracking-widest mb-4 text-blue-600">Future Roadmap</h5>
                <p className="text-sm text-zinc-500 leading-relaxed italic">Industry-recognized certifications and AI-driven skill platforms are currently in development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Aligned with the project */}
        <section className="relative z-10 w-full bg-blue-600 overflow-hidden">
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-white tracking-tight">Inspired by Student Forge?</h3>
                <p className="text-blue-100 max-w-md">Let's discuss how we can build your next platform, internal tool, or engineering ecosystem.</p>
              </div>
              <a
                href="/contact"
                className="group flex items-center gap-3 rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50 active:scale-95 shadow-xl"
              >
                <span>Start your project</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}