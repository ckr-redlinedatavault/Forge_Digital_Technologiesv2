 "use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/916304218064"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] inline-flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 py-4 shadow-2xl shadow-black/15 transition hover:scale-105 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 text-white"
        fill="currentColor"
      >
        <path d="M16.01 4c-5.5 0-9.97 4.42-9.98 9.86a9.8 9.8 0 0 0 1.36 5l-1.44 4.7 4.82-1.38a10 10 0 0 0 5.22 1.44h.01c5.5 0 9.97-4.43 9.99-9.87A9.8 9.8 0 0 0 16.01 4Zm-.02 17.8a8.4 8.4 0 0 1-4.28-1.18l-.31-.18-2.86.82.82-2.78-.2-.29a8.1 8.1 0 0 1-1.27-4.36c.01-4.53 3.73-8.21 8.32-8.21 2.22 0 4.3.86 5.86 2.42a8.2 8.2 0 0 1 2.44 5.83c-.02 4.53-3.74 8.22-8.32 8.22Zm4.74-6.1c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.18.26-.69.85-.85 1.03-.16.18-.31.19-.58.06-.26-.13-1.11-.41-2.12-1.31-.78-.69-1.3-1.53-1.45-1.79-.15-.26-.02-.4.11-.53.11-.11.26-.29.38-.43.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.06-.13-.6-1.44-.82-1.97-.21-.5-.42-.43-.6-.44l-.51-.01c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.13.18 1.86 2.96 4.52 4.15.63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.53-.62 1.74-1.22.21-.6.21-1.11.15-1.22-.06-.11-.23-.18-.49-.31Z" />
      </svg>
      {showLabel && (
        <span className="text-sm font-semibold text-white leading-none">Start a project</span>
      )}
    </a>
  );
}

