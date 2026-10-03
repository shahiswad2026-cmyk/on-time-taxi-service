import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { RATE_INFO_CARDS, getWhatsAppUrl } from '../data/businessData';

export const RateAndInfoCards: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] font-bold tracking-wider uppercase text-[#73726B]">
          Pricing & Information
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.02em] text-[#111111] mt-1">
          Simple rates. No surprises.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {RATE_INFO_CARDS.map((card) => {
          const isPrimary = card.id === 'day-rate';

          return (
            <div
              key={card.id}
              className={`rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-all hover:translate-y-[-2px] ${
                isPrimary
                  ? 'bg-white border-2 border-[#111111] shadow-[0_12px_36px_rgba(0,0,0,0.06)]'
                  : 'bg-white border border-[#E3E1D2] shadow-[0_8px_24px_rgba(0,0,0,0.02)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-extrabold tracking-[0.08em] uppercase text-[#73726B]">
                    {card.badge}
                  </span>
                  {isPrimary && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#BEFF4D] text-[#111111]">
                      POPULAR
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#111111] tracking-tight">
                  {card.title}
                </h3>

                <div className="mt-4 mb-3">
                  <div
                    className={`font-extrabold tracking-tight ${
                      isPrimary
                        ? 'text-3xl sm:text-4xl text-[#111111]'
                        : 'text-2xl sm:text-3xl text-[#111111]'
                    }`}
                  >
                    {card.value}
                  </div>
                  {isPrimary && (
                    <span className="text-xs font-medium text-[#666661]">
                      per full day hire
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#5A5A55] leading-relaxed mt-2">
                  {card.subtext}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#EAE8DD]">
                <a
                  href={getWhatsAppUrl(card.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-11 px-4 rounded-full font-bold text-xs tracking-tight inline-flex items-center justify-center gap-2 transition-all ${
                    isPrimary
                      ? 'bg-[#BEFF4D] hover:bg-[#AEF236] text-[#111111] shadow-xs hover:scale-[1.01]'
                      : 'bg-[#F4F3EA] hover:bg-[#EAE8DD] text-[#111111] border border-[#E0DED0]'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>{card.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
