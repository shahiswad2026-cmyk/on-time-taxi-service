import React from 'react';
import { MessageCircle, Star, ArrowUpRight, ArrowDown } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, HERO_PHOTO } from '../data/businessData';
import { VehiclePhoto } from './VehiclePhoto';

export const Hero: React.FC = () => {
  const heroWhatsAppMessage = `Hello! I would like to book a ride across Meghalaya with ${BUSINESS_CONFIG.name}. Please let me know your availability.`;

  return (
    <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* Google 5.0 Rating Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E0D4] shadow-xs mb-5 sm:mb-6">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#111111]">
            5.0 on Google
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.02em] text-[#111111] max-w-3xl leading-[1.1] text-balance">
          Reliable rides across Meghalaya
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#5A5A55] max-w-xl font-normal leading-relaxed text-balance">
          Experience punctual, comfortable travel to Shillong, Sohra, Dawki, and Mawlynnong in a well-maintained vehicle at {BUSINESS_CONFIG.dayRate} per day.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {/* Outline Button: See trips */}
          <a
            href="#trips"
            className="w-full sm:w-auto h-12 px-7 rounded-full border border-[#111111]/20 hover:border-[#111111] bg-transparent text-[#111111] font-semibold text-sm tracking-tight inline-flex items-center justify-center gap-2 transition-all hover:bg-black/[0.03] active:scale-[0.98]"
          >
            <span>See trips</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Lime Button: Book on WhatsApp */}
          <a
            href={getWhatsAppUrl(heroWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 px-7 rounded-full bg-[#BEFF4D] hover:bg-[#AEF236] text-[#111111] font-bold text-sm tracking-tight inline-flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Book on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Large Featured Car Photo (Photo 2: Three-quarter view on a hill) */}
      <div className="mt-10 sm:mt-12">
        <div className="relative rounded-[24px] overflow-hidden border border-[#E1DFD1] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] group">
          <VehiclePhoto
            src={HERO_PHOTO.src}
            alt={HERO_PHOTO.alt}
            aspectRatio="video"
            photoIndex={HERO_PHOTO.id}
            title={HERO_PHOTO.title}
            subtitle={HERO_PHOTO.subtitle}
            priority={true}
            className="w-full rounded-[24px]"
          />

          {/* Bottom info bar inside card */}
          <div className="p-4 sm:p-5 bg-white border-t border-[#EAE8DD] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#BEFF4D] border border-black/10 shrink-0" />
              <div>
                <p className="text-sm font-semibold tracking-tight text-[#111111]">
                  One comfortable, well-maintained white vehicle
                </p>
                <p className="text-xs text-[#666661]">
                  Spotless interior, dedicated local driver for your Meghalaya journey
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <span className="text-xs font-medium text-[#666661] uppercase tracking-wider">
                Standard Hire
              </span>
              <span className="text-base font-bold text-[#111111] tracking-tight bg-[#F4F3EA] px-3 py-1 rounded-full border border-[#E3E1D4]">
                {BUSINESS_CONFIG.dayRate} / day
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
