import React from 'react';
import { ArrowUpRight, MessageCircle, Star } from 'lucide-react';
import { getWhatsAppUrl } from '../data/businessData';

export const StatHeadline: React.FC = () => {
  const statWhatsAppMessage =
    'Hello! I saw your 5.0 stars rating on Google for On Time Taxi Service and would like to check availability for my trip to Meghalaya.';

  return (
    <section className="py-16 sm:py-24 px-4 max-w-4xl mx-auto text-center">
      <div className="flex justify-center items-center gap-1.5 mb-4 text-amber-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current stroke-none" />
        ))}
      </div>

      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-[#111111] text-balance">
        5.0 stars on Google.
      </h2>

      <p className="mt-4 text-sm sm:text-base text-[#5A5A55] max-w-lg mx-auto leading-relaxed text-balance">
        Every trip handled with punctuality, clean comfort, and trusted local route guidance across Meghalaya.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href={getWhatsAppUrl(statWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 px-7 rounded-full bg-[#BEFF4D] hover:bg-[#AEF236] text-[#111111] font-bold text-sm tracking-tight inline-flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Book on WhatsApp</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
