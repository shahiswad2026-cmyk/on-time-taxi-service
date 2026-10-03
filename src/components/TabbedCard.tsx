import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, VEHICLE_TAB_PHOTO } from '../data/businessData';
import { VehiclePhoto } from './VehiclePhoto';

type TabKey = 'vehicle' | 'trips' | 'how-to-book';

export const TabbedCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('vehicle');

  return (
    <section className="py-8 sm:py-12 px-4 max-w-5xl mx-auto">
      <div className="bg-white border border-[#E3E1D2] rounded-[24px] p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
        {/* Pill Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#F4F3EA] border border-[#E4E2D5]">
            <button
              type="button"
              onClick={() => setActiveTab('vehicle')}
              className={`h-10 px-5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                activeTab === 'vehicle'
                  ? 'bg-[#BEFF4D] text-[#111111] shadow-xs'
                  : 'text-[#5A5A55] hover:text-[#111111]'
              }`}
            >
              Vehicle
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('trips')}
              className={`h-10 px-5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                activeTab === 'trips'
                  ? 'bg-[#BEFF4D] text-[#111111] shadow-xs'
                  : 'text-[#5A5A55] hover:text-[#111111]'
              }`}
            >
              Trips
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('how-to-book')}
              className={`h-10 px-5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                activeTab === 'how-to-book'
                  ? 'bg-[#BEFF4D] text-[#111111] shadow-xs'
                  : 'text-[#5A5A55] hover:text-[#111111]'
              }`}
            >
              How to book
            </button>
          </div>
        </div>

        {/* Tab Content 1: Vehicle (Photo 1: Front view on a hill) */}
        {activeTab === 'vehicle' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            <div className="lg:col-span-7 rounded-[24px] overflow-hidden border border-[#E5E3D6] shadow-sm">
              <VehiclePhoto
                src={VEHICLE_TAB_PHOTO.src}
                alt={VEHICLE_TAB_PHOTO.alt}
                aspectRatio="video"
                photoIndex={VEHICLE_TAB_PHOTO.id}
                title={VEHICLE_TAB_PHOTO.title}
                subtitle={VEHICLE_TAB_PHOTO.subtitle}
                priority={false}
                className="w-full rounded-[24px]"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#5A5A55] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#111111]" />
                <span>Our Dedicated Taxi</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                Comfortable white vehicle
              </h3>

              <div className="mt-3 inline-flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                  {BUSINESS_CONFIG.dayRate}
                </span>
                <span className="text-sm font-medium text-[#666661]">/ day rate</span>
              </div>

              <p className="mt-4 text-sm text-[#5A5A55] leading-relaxed">
                A clean, well-maintained white passenger car equipped for scenic Meghalaya routes, hills, and sightseeing spots. Punctual, private, and smooth travel.
              </p>

              <div className="mt-6 pt-6 border-t border-[#EAE8DD] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getWhatsAppUrl('Hello! I would like to book your vehicle at Rs 5,000/day for my travel in Meghalaya.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-6 rounded-full bg-[#BEFF4D] hover:bg-[#AEF236] text-[#111111] font-bold text-sm tracking-tight inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book this vehicle</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Trips */}
        {activeTab === 'trips' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                Scenic routes across Meghalaya
              </h3>
              <p className="mt-2 text-sm text-[#5A5A55]">
                Tailor your day trip to your preferred sights or choose from these popular routes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-[18px] bg-[#F7F6EE] border border-[#E6E4D6] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#666661]">
                    City & Viewpoints
                  </span>
                  <h4 className="mt-1 text-lg font-bold text-[#111111]">Shillong sightseeing</h4>
                  <p className="mt-2 text-xs text-[#5A5A55] leading-relaxed">
                    Local peaks, lakes, viewpoints, and pine forest paths around the capital.
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl('Hello! I would like to ask about the Shillong sightseeing trip.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:underline"
                >
                  <span>Ask on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-5 rounded-[18px] bg-[#F7F6EE] border border-[#E6E4D6] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#666661]">
                    Waterfalls & Valleys
                  </span>
                  <h4 className="mt-1 text-lg font-bold text-[#111111]">Sohra (Cherrapunji)</h4>
                  <p className="mt-2 text-xs text-[#5A5A55] leading-relaxed">
                    Misty cloudscapes, deep gorges, and dramatic waterfalls along winding hill highways.
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl('Hello! I would like to ask about the Sohra (Cherrapunji) day trip.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:underline"
                >
                  <span>Ask on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-5 rounded-[18px] bg-[#F7F6EE] border border-[#E6E4D6] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#666661]">
                    River & Culture
                  </span>
                  <h4 className="mt-1 text-lg font-bold text-[#111111]">Dawki & Mawlynnong</h4>
                  <p className="mt-2 text-xs text-[#5A5A55] leading-relaxed">
                    The transparent waters of the Umngot River and Asia’s cleanest village.
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl('Hello! I would like to ask about the Dawki and Mawlynnong day trip.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:underline"
                >
                  <span>Ask on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <a
                href={getWhatsAppUrl('Hello! I would like to discuss custom trip itineraries across Meghalaya with On Time Taxi Service.')}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-full bg-[#111111] text-white hover:bg-black font-semibold text-xs tracking-tight inline-flex items-center gap-2 transition-colors"
              >
                <span>Discuss custom route on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Tab Content 3: How to book */}
        {activeTab === 'how-to-book' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                3 steps to book on WhatsApp
              </h3>
              <p className="mt-2 text-sm text-[#5A5A55]">
                Direct, transparent, and confirmed in minutes without middlemen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-[20px] bg-[#F7F6EE] border border-[#E6E4D6] relative">
                <div className="w-8 h-8 rounded-full bg-[#BEFF4D] text-[#111111] font-bold text-sm flex items-center justify-center mb-4">
                  1
                </div>
                <h4 className="text-base font-bold text-[#111111]">Send your dates</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#5A5A55] leading-relaxed">
                  Message us on WhatsApp with your desired travel date, pickup point, and destination.
                </p>
              </div>

              <div className="p-6 rounded-[20px] bg-[#F7F6EE] border border-[#E6E4D6] relative">
                <div className="w-8 h-8 rounded-full bg-[#BEFF4D] text-[#111111] font-bold text-sm flex items-center justify-center mb-4">
                  2
                </div>
                <h4 className="text-base font-bold text-[#111111]">Confirm schedule</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#5A5A55] leading-relaxed">
                  We verify availability, clarify timing, and lock in your reservation for the day.
                </p>
              </div>

              <div className="p-6 rounded-[20px] bg-[#F7F6EE] border border-[#E6E4D6] relative">
                <div className="w-8 h-8 rounded-full bg-[#BEFF4D] text-[#111111] font-bold text-sm flex items-center justify-center mb-4">
                  3
                </div>
                <h4 className="text-base font-bold text-[#111111]">Enjoy your ride</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#5A5A55] leading-relaxed">
                  Your clean white vehicle arrives on time. Sit back and enjoy Meghalaya’s scenic wonders.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-center">
              <a
                href={getWhatsAppUrl('Hello! I would like to book On Time Taxi Service for my upcoming trip.')}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-7 rounded-full bg-[#BEFF4D] hover:bg-[#AEF236] text-[#111111] font-bold text-sm tracking-tight inline-flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Start step 1 on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
