import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { TRIP_CARDS, getWhatsAppUrl } from '../data/businessData';

export const TripCards: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="trips" className="py-12 sm:py-16 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#73726B]">
            Popular Routes
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.02em] text-[#111111] mt-1">
            Day trips across Meghalaya
          </h2>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll trips left"
            className="w-11 h-11 rounded-full border border-[#DCDAD0] bg-white hover:bg-[#F4F3EA] text-[#111111] flex items-center justify-center transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-black cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll trips right"
            className="w-11 h-11 rounded-full border border-[#DCDAD0] bg-white hover:bg-[#F4F3EA] text-[#111111] flex items-center justify-center transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-black cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal-Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto pb-4 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
        tabIndex={0}
        aria-label="Horizontal list of day trip options"
      >
        {TRIP_CARDS.map((trip) => (
          <div
            key={trip.id}
            className="snap-start shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] bg-white border border-[#E3E1D2] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#111111]/30 transition-all hover:translate-y-[-2px]"
          >
            <div>
              {/* Pill tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F3EA] border border-[#E4E2D5] text-[11px] font-bold text-[#111111] tracking-tight mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF4D] border border-black/20" />
                <span>{trip.tag}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                {trip.title}
              </h3>

              {/* One-line description */}
              <p className="mt-3 text-sm text-[#5A5A55] leading-relaxed">
                {trip.description}
              </p>
            </div>

            {/* CTA: Ask on WhatsApp (no prices or durations) */}
            <div className="mt-8 pt-5 border-t border-[#EAE8DD]">
              <a
                href={getWhatsAppUrl(trip.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#000000] group"
              >
                <MessageCircle className="w-4 h-4 text-[#111111] group-hover:scale-110 transition-transform" />
                <span className="underline underline-offset-4 decoration-[#BEFF4D] decoration-2 group-hover:decoration-[#111111]">
                  Ask on WhatsApp
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
