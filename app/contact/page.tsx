"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Globe, 
  Monitor, 
  Smartphone, 
  Palette, 
  Megaphone, 
  ArrowRight, 
  MapPin,
  CheckCircle2
} from "lucide-react";
import SecondaryNavbar from "../components/SecondaryNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "UI/UX Design",
    message: "",
  });

  const services = [
    { id: "uiux", label: "UI/UX Design", icon: <Palette className="w-4 h-4" /> },
    { id: "web", label: "Web Development", icon: <Monitor className="w-4 h-4" /> },
    { id: "app", label: "App Development", icon: <Smartphone className="w-4 h-4" /> },
    { id: "marketing", label: "Digital Marketing & ADs", icon: <Megaphone className="w-4 h-4" /> },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
        <section className="relative w-full bg-white border-b border-zinc-100 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
              {/* Left: Content */}
              <div className="flex flex-col gap-6 md:w-3/5">
                <div className="flex items-center gap-3">
                  <span className="h-[1.5px] w-8 bg-blue-600"></span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                    Get In Touch
                  </p>
                </div>
                <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
                  Ready to talk about your{" "}
                  <span className="text-blue-600">next project</span>?
                </h1>
                <p className="max-w-2xl text-base font-medium leading-relaxed text-zinc-600">
                  Tell us a bit about what you&apos;re building and we&apos;ll reply
                  within 1–2 business days with next steps.
                </p>
              </div>

              {/* Right: Image */}
              <div className="relative md:w-2/5 flex justify-center md:justify-end">
                <div className="relative w-full max-w-[400px] aspect-square">
                  <Image
                    src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-svg-download-png-7050145.png"
                    alt="Contact Us"
                    fill
                    className="object-contain z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative w-full bg-white border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-2">
              
              {/* Left: Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="w-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-2">
                      Select Service
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setFormData({...formData, service: s.label})}
                          className={`flex flex-col items-center gap-2 p-4 rounded-md border transition-all text-center ${
                            formData.service === s.label
                              ? "border-blue-600 bg-blue-50 text-blue-700"
                              : "border-zinc-200 hover:border-blue-200 text-zinc-500 bg-white"
                          }`}
                        >
                          {s.icon}
                          <span className="text-[10px] font-semibold leading-tight uppercase">
                            {s.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={6}
                      className="w-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
                      placeholder="Tell us about your project, timeline, and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-3 w-full md:w-auto bg-zinc-950 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 active:scale-[0.98]"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <p className="mt-4 text-xs font-medium text-zinc-400 text-center md:text-left">
                  By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
                </p>
              </div>

              {/* Right: Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-4">
                    Let&apos;s start a conversation.
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Whether you have a project in mind or just want to explore
                    possibilities, we&apos;re here to help. Reach out and let&apos;s
                    discuss how we can bring your vision to life.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400 mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:you@example.com"
                      className="text-base font-medium text-zinc-950 hover:text-blue-600 transition-colors"
                    >
                      you@example.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400 mb-2">
                      Response Time
                    </p>
                    <p className="text-base font-medium text-zinc-950">
                      1–2 business days
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400 mb-2">
                      Availability
                    </p>
                    <p className="text-base font-medium text-zinc-950">
                      Currently accepting Q1 2026 projects
                    </p>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="pt-6 border-t border-zinc-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-sm font-medium text-zinc-600">
                      Average response: 4 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-sm font-medium text-zinc-600">
                      Free initial consultation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-sm font-medium text-zinc-600">
                      No commitment required
                    </span>
                  </div>
                </div>

                {/* Location Info */}
                <div className="pt-6 border-t border-zinc-100 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-950 uppercase mb-1">
                        Office Location
                      </h4>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        Serving clients globally with remote-first operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-950 uppercase mb-1">
                        Global Support
                      </h4>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        Available across multiple time zones for seamless collaboration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="relative w-full bg-white border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1.5px] w-8 bg-blue-600"></span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                  What Happens Next
                </p>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
                Our process.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black tracking-widest text-blue-600">
                    01
                  </span>
                  <div className="h-px w-8 bg-zinc-200"></div>
                </div>
                <h3 className="text-xl font-semibold text-zinc-950">
                  Initial Review
                </h3>
                <p className="text-base font-medium text-zinc-600 leading-relaxed">
                  We review your message and project requirements within 24 hours.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black tracking-widest text-blue-600">
                    02
                  </span>
                  <div className="h-px w-8 bg-zinc-200"></div>
                </div>
                <h3 className="text-xl font-semibold text-zinc-950">
                  Discovery Call
                </h3>
                <p className="text-base font-medium text-zinc-600 leading-relaxed">
                  We schedule a free consultation to understand your goals and timeline.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black tracking-widest text-blue-600">
                    03
                  </span>
                  <div className="h-px w-8 bg-zinc-200"></div>
                </div>
                <h3 className="text-xl font-semibold text-zinc-950">
                  Proposal & Next Steps
                </h3>
                <p className="text-base font-medium text-zinc-600 leading-relaxed">
                  We provide a detailed proposal with timeline, scope, and investment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
