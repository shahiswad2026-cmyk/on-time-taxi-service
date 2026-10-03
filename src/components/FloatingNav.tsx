import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, getPhoneCallUrl } from '../data/businessData';

export const FloatingNav: React.FC = () => {
  return (
    <header className="sticky top-4 z-40 px-3 sm:px-4 w-full max-w-5xl mx-auto pointer-events-none">
      <nav
        aria-label="Primary Navigation"
        className="pointer-events-auto bg-white/95 backdrop-blur-md border border-[#E3E1D4] shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-3 transition-all"
      >
        {/* Wordmark: slightly reduced font on small screens with clean truncation so there is clear spacing from buttons on 360px phones */}
        <a
          href="#"
          className="flex items-center gap-2 min-w-0 shrink text-xs xs:text-sm sm:text-base font-bold tracking-[-0.02em] text-[#111111] hover:opacity-80 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#BEFF4D] border border-black/10 inline-block shrink-0" />
          <span className="truncate max-w-[135px] xs:max-w-[180px] sm:max-w-none">
            {BUSINESS_CONFIG.name}
          </span>
        </a>

        {/* Quick Actions (shrink-0 with clear separation) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={getPhoneCallUrl()}
            aria-label="Call On Time Taxi Service"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#E5E3D6] bg-[#F7F6EF] hover:bg-[#EAE8DB] text-[#111111] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#111111] shrink-0"
          >
            <Phone className="w-4 h-4" />
          </a>

          <a
            href={getWhatsAppUrl('Hello! I would like to inquire about booking On Time Taxi Service in Meghalaya.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on WhatsApp"
            className="h-11 sm:h-12 px-3.5 sm:px-5 rounded-full bg-[#BEFF4D] hover:bg-[#AEF236] text-[#111111] font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs focus-visible:outline-2 focus-visible:outline-[#111111] shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span className="hidden xs:inline">Book on WhatsApp</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
