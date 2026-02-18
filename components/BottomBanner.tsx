"use client";

import React from 'react';

const BottomBanner = () => {
    return (
        <div className="w-full bg-white border-t border-neutral-100 py-8 px-6 md:px-12 lg:px-20 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <a
                    href="https://www.redlix.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:opacity-70 transition-opacity"
                >
                    <img
                        src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1771179430/Screenshot_2026-02-15_at_23.46.29-removebg-preview_burcwg.png"
                        alt="Redlix Systems Logo"
                        className="h-8 w-auto opacity-80"
                    />
                    <div className="h-6 w-[1px] bg-neutral-200 hidden md:block"></div>
                    <p className="text-[11px] text-neutral-500 font-light tracking-wide">
                        Developed & Managed by <span className="text-black font-medium">Redlix Systems</span>
                    </p>
                </a>

                <a
                    href="https://www.redlix.co.in/maintenance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-2.5 bg-neutral-900 hover:bg-[#FF6B58] transition-all duration-500 rounded-full group"
                >
                    <span className="text-[10px] text-white font-bold uppercase tracking-widest">Support & Assistance</span>
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default BottomBanner;
