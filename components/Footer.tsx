"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        
        <footer className="w-full bg-white text-black pt-20 pb-12 px-6 md:px-12 lg:px-20 border-t border-neutral-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4">

                    
                    <div className="flex flex-col gap-6 lg:col-span-1 lg:pr-6">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF6B58]">
                                <path d="M12 0C12 0 4 7 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 12 18 8 15 4L12 0Z" fill="currentColor" />
                                <path d="M12 23C12 23 14 21 14 18C14 16 13 15 12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <div className="flex flex-col">
                                <div className="flex flex-col leading-[0.85] text-[#FF6B58]">
                                    <span className="text-[14px] font-black tracking-tight uppercase">Forge</span>
                                    <span className="text-[14px] font-black tracking-tight uppercase">Digital</span>
                                </div>
                                <span className="text-[7px] font-bold tracking-[0.45em] uppercase text-[#FF6B58] mt-1 border-t border-[#FF6B58]/20 pt-1">
                                    Technologies
                                </span>
                            </div>
                        </div>
                        <p className="text-neutral-500 text-[12px] font-extralight leading-relaxed max-w-[180px]">
                            We build modern digital products to help your business grow.
                        </p>
                    </div>

                    
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 mb-2">Solutions</h4>
                        <Link href="/services/website-development" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Website Design</Link>
                        <Link href="/services/mobile-app-development" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Mobile Apps</Link>
                        <Link href="/services/ui-ux-design" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">UI/UX Design</Link>
                        <Link href="/services/ad-design-marketing" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Ad Marketing</Link>
                    </div>

                    
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 mb-2">Company</h4>
                        <Link href="/about" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Our Story</Link>
                        <Link href="/our-work" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Case Studies</Link>
                        <Link href="/contact" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Contact Us</Link>
                    </div>

                    
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900 mb-2">Policy & Team</h4>
                        <Link href="/privacy-policy" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Privacy policy</Link>
                        <Link href="/terms-of-service" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Terms of service</Link>
                        <Link href="/cookies" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Cookie Policy</Link>
                        <Link href="/careers" className="text-[14px] text-neutral-500 hover:text-[#FF6B58] transition-colors font-light">Careers</Link>
                    </div>

                    
                    <div className="flex flex-col gap-5">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-900">Join Us</h4>
                        <div className="flex flex-col gap-3">
                            <p className="text-[11px] text-neutral-400 font-light">Sign up for our news</p>
                            <div className="flex border-b border-neutral-200 pb-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="bg-transparent text-sm w-full focus:outline-none text-neutral-800 placeholder-neutral-300 font-light"
                                />
                                <button className="text-[#FF6B58] hover:text-black transition-colors px-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="pt-10 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-neutral-400 text-[9px] uppercase tracking-[0.3em]">
                        © 2026 Forge Digital Technologies.
                    </p>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-6 text-[#FF6B58]">
                            <a href="#" className="text-[9px] uppercase tracking-[0.2em] font-light hover:text-black transition-colors">LinkedIn</a>
                            <a href="#" className="text-[9px] uppercase tracking-[0.2em] font-light hover:text-black transition-colors">Instagram</a>
                        </div>

                        
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 group"
                        >
                            <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 group-hover:text-[#FF6B58] transition-colors">Back to top</span>
                            <div className="p-1 border border-neutral-100 group-hover:border-[#FF6B58] group-hover:bg-[#FF6B58]/5 transition-all">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF6B58]">
                                    <path d="M18 15l-6-6-6 6" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.4]">
                <h1 className="text-[11vw] font-black text-neutral-100 uppercase tracking-[0.05em] leading-none whitespace-nowrap">
                    Forge Digital
                </h1>
            </div>
        </footer>
    );
};

export default Footer;