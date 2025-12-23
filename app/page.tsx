import SecondaryNavbar from "./components/SecondaryNavbar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SliderSection from "./components/SliderSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // Added 'scroll-smooth' for better navigation and 'selection:bg-blue-600' for brand consistency
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* 1. TOP UTILITY BAR */}
      <SecondaryNavbar />
      
      {/* 2. MAIN NAVIGATION (Sticky) */}
      <Navbar />

      <main className="relative">
        {/* OPTIONAL: Subtle Engineering Grid Overlay 
            This adds a very faint pattern across the whole site to reinforce the 'Forge' brand */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* 3. HERO & LOGO MARQUEE */}
        <HeroSection />
        <SliderSection />

        {/* 4. VALUE PROPOSITION & IDENTITY */}
        <WhyChooseUs />
        <AboutSection />

        {/* 5. CAPABILITIES & PROOF */}
        <ServicesSection />
        <PortfolioSection />

        {/* 6. SOCIAL PROOF & DOCUMENTATION (Updated Blueprints) */}
        <TestimonialsSection />
        <FAQSection />

        {/* 7. CONVERSION */}
        <CTASection />
      </main>

      {/* 8. FOOTER */}
      <Footer />
    </div>
  );
}