import React from 'react';
import { PLACES_MARQUEE } from '../data/businessData';
import { MapPin } from 'lucide-react';

export const MarqueeStrip: React.FC = () => {
  // Duplicate array 3 times for a seamless infinite loop
  const repeatedItems = [...PLACES_MARQUEE, ...PLACES_MARQUEE, ...PLACES_MARQUEE];

  return (
    <section className="w-full py-5 border-y border-[#E3E1D2] bg-[#EDECE2]/60 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 mb-2 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-[#73726B]">
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#111111]" />
          Popular Routes Across Meghalaya
        </span>
        <span className="hidden sm:inline">Punctual & Comfortable</span>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap py-1">
          {repeatedItems.map((place, idx) => (
            <div
              key={`${place}-${idx}`}
              className="inline-flex items-center gap-6 sm:gap-8 text-base sm:text-lg font-bold tracking-tight text-[#111111]"
            >
              <span>{place}</span>
              <span className="w-2 h-2 rounded-full bg-[#BEFF4D] border border-black/10 inline-block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
