import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/businessData';

export const StickyWhatsApp: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    'Hi! I would like to inquire about booking On Time Taxi Service in Meghalaya.'
  );

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with On Time Taxi Service"
        className="group relative flex items-center gap-2.5 bg-[#BEFF4D] hover:bg-[#AEF236] text-[#111111] p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-black/10 transition-all duration-200 hover:scale-105 active:scale-95 min-w-[48px] min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#111111]"
      >
        {/* Pulsing presence indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600 border-2 border-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="hidden sm:inline font-bold text-xs tracking-tight">
          Book on WhatsApp
        </span>
      </a>
    </aside>
  );
};
