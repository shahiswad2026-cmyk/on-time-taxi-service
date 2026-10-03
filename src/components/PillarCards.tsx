import React from 'react';
import { Tag, MessageSquare, MapPin, ShieldCheck } from 'lucide-react';
import { PILLAR_CARDS } from '../data/businessData';

const iconMap = {
  tag: Tag,
  'message-square': MessageSquare,
  'map-pin': MapPin,
  'shield-check': ShieldCheck,
};

export const PillarCards: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] font-bold tracking-wider uppercase text-[#73726B]">
          Why Ride With Us
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.02em] text-[#111111] mt-1">
          Simple, honest taxi service
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {PILLAR_CARDS.map((card) => {
          const IconComponent = iconMap[card.icon];
          return (
            <div
              key={card.id}
              className="bg-white border border-[#E3E1D2] rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#111111]/30 transition-all hover:translate-y-[-2px]"
            >
              {/* Icon badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#F4F3EA] border border-[#E5E3D6] flex items-center justify-center text-[#111111] mb-5">
                <IconComponent className="w-5 h-5" />
              </div>

              {/* Small caps label */}
              <span className="text-[11px] font-extrabold tracking-[0.08em] uppercase text-[#73726B] block">
                {card.smallCaps}
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mt-1.5">
                {card.title}
              </h3>

              {/* One line description */}
              <p className="mt-2.5 text-sm text-[#5A5A55] leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
