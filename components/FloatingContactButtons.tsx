"use client";

import {
  primaryWhatsApp,
  whatsappHref,
  defaultEnquiryMessage,
} from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function FloatingContactButtons() {
  return (
    <div
      className="fixed bottom-20 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
      aria-label="Quick WhatsApp contact"
    >
      {/* WhatsApp Button (At the right bottom with pulse animation) */}
      <a
        href={whatsappHref(primaryWhatsApp, defaultEnquiryMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BT Banana on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        {/* Pulse / Ping Animation Ring */}
        <span className="absolute -inset-1 animate-ping rounded-full bg-[#25D366] opacity-75 duration-1000" />
        {/* Soft breathing pulse ring */}
        <span className="absolute -inset-0.5 animate-pulse rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon className="relative z-10 h-7 w-7" />
        {/* Desktop Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-neutral-900/90 px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
