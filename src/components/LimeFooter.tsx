import React from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, getPhoneCallUrl } from '../data/businessData';

export const LimeFooter: React.FC = () => {
  return (
    <footer className="mt-16 bg-[#BEFF4D] text-[#111111] overflow-hidden relative pt-12 sm:pt-16 pb-0">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-black/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#111111]/70 block mb-2">
              Book Your Ride Today
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-[#111111]">
              Ready to explore Meghalaya?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#111111]/80 max-w-md">
              Message or call directly to reserve your date with On Time Taxi Service. Day rate {BUSINESS_CONFIG.dayRate}.
            </p>
          </div>

          {/* Call & WhatsApp Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getPhoneCallUrl()}
              className="h-12 px-6 rounded-full bg-[#111111] hover:bg-black text-white font-bold text-xs sm:text-sm tracking-tight inline-flex items-center gap-2 shadow-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_CONFIG.displayPhone}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hello! I would like to book On Time Taxi Service in Meghalaya.')}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-full bg-white hover:bg-[#F7F6EF] text-[#111111] font-bold text-xs sm:text-sm tracking-tight inline-flex items-center gap-2 shadow-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Social Icon Row: Only WhatsApp and Phone for now */}
        <div className="py-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-[#111111]/70">
              Direct Contact:
            </span>
            <div className="flex items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="w-10 h-10 rounded-full bg-[#111111] hover:bg-black text-[#BEFF4D] flex items-center justify-center transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={getPhoneCallUrl()}
                aria-label="Phone Contact"
                className="w-10 h-10 rounded-full bg-[#111111] hover:bg-black text-[#BEFF4D] flex items-center justify-center transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-[#111111] block">
              {BUSINESS_CONFIG.location}, India
            </span>
            <span className="text-[11px] text-[#111111]/70">
              Standard Hire {BUSINESS_CONFIG.dayRate}/day
            </span>
          </div>
        </div>
      </div>

      {/* Oversized wordmark: container has plenty of height with small negative bottom margin showing 85-90% of wordmark height */}
      <div className="w-full overflow-hidden select-none pointer-events-none pt-4 sm:pt-6 pb-2 sm:pb-3 -mb-2 sm:-mb-3.5">
        <h2 className="text-[15vw] sm:text-[16vw] font-black tracking-tighter leading-none text-[#111111] whitespace-nowrap text-center opacity-95">
          On Time Taxi
        </h2>
      </div>
    </footer>
  );
};
