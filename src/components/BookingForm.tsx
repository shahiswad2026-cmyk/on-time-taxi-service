import React, { useState } from 'react';
import { Calendar, Users, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, formatDisplayDate } from '../data/businessData';

export const BookingForm: React.FC = () => {
  // Default date to tomorrow in YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState(defaultDateStr);
  const [pickup, setPickup] = useState('Shillong');
  const [destination, setDestination] = useState('Sohra (Cherrapunji)');
  const [passengers, setPassengers] = useState('2');

  const displayFormattedDate = formatDisplayDate(date);

  const buildMessage = () => {
    const lines = [
      `Hello ${BUSINESS_CONFIG.name}! I would like to book your taxi in Meghalaya.`,
      `📅 Travel Date: ${displayFormattedDate}`,
      `📍 Pickup Location: ${pickup || 'To be decided'}`,
      `🚗 Destination: ${destination || 'Custom route'}`,
      `👥 Passengers: ${passengers || '1-4'}`,
      `Please let me know if your vehicle is available on this date. Thank you!`,
    ];
    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrl(buildMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
      <div className="bg-white border border-[#E3E1D2] rounded-[24px] p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
        <div className="max-w-2xl mb-8">
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#73726B]">
            Plan Your Ride
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.02em] text-[#111111] mt-1">
            Book your taxi on WhatsApp
          </h2>
          <p className="mt-2 text-sm text-[#5A5A55] leading-relaxed">
            Fill in your preferred travel details below. Clicking the button will launch WhatsApp with your ready-to-send itinerary.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Travel Date with unified format display */}
            <div>
              <label
                htmlFor="booking-date"
                className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
              >
                Travel Date
              </label>
              <div className="relative group">
                <input
                  id="booking-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-full h-12 px-4 rounded-xl border border-[#D8D6C9] bg-[#F7F6EF] text-[#111111] text-sm font-semibold flex items-center justify-between group-hover:border-[#111111] transition-all">
                  <span>{displayFormattedDate}</span>
                  <Calendar className="w-4 h-4 text-[#73726B]" />
                </div>
              </div>
            </div>

            {/* Passengers Count */}
            <div>
              <label
                htmlFor="booking-passengers"
                className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
              >
                Number of Passengers
              </label>
              <div className="relative">
                <select
                  id="booking-passengers"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-[#D8D6C9] bg-[#F7F6EF] text-[#111111] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#111111] focus:bg-white transition-all cursor-pointer appearance-none"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5+">5 or more (Inquire)</option>
                </select>
                <Users className="w-4 h-4 text-[#73726B] absolute right-4 top-4 pointer-events-none" />
              </div>
            </div>

            {/* Pickup Place */}
            <div>
              <label
                htmlFor="booking-pickup"
                className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
              >
                Pickup Location
              </label>
              <div className="relative">
                <input
                  id="booking-pickup"
                  type="text"
                  placeholder="e.g. Police Bazar, Shillong / Hotel"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-[#D8D6C9] bg-[#F7F6EF] text-[#111111] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#111111] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label
                htmlFor="booking-destination"
                className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
              >
                Destination / Sightseeing Route
              </label>
              <div className="relative">
                <input
                  id="booking-destination"
                  type="text"
                  placeholder="e.g. Sohra, Dawki, or Shillong Sightseeing"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-[#D8D6C9] bg-[#F7F6EF] text-[#111111] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#111111] focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Quick preset destination pills */}
          <div className="pt-2">
            <span className="text-[11px] font-semibold text-[#73726B] block mb-2">
              Popular quick picks:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                'Shillong Sightseeing',
                'Sohra (Cherrapunji)',
                'Dawki & Mawlynnong',
                'Custom Itinerary',
              ].map((pick) => (
                <button
                  key={pick}
                  type="button"
                  onClick={() => setDestination(pick)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                    destination === pick
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#F4F3EA] text-[#5A5A55] border-[#DCDAD0] hover:border-[#111111]'
                  }`}
                >
                  {pick}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp message preview box showing formatted date matching form */}
          <div className="mt-4 p-4 rounded-xl bg-[#F7F6EF] border border-[#E3E1D2] text-xs text-[#5A5A55]">
            <p className="font-bold text-[#111111] mb-1 flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-[#111111]" />
              WhatsApp Message Preview:
            </p>
            <p className="font-mono text-[11px] whitespace-pre-line text-[#444440] bg-white p-3 rounded-lg border border-[#E8E6DA]">
              {buildMessage()}
            </p>
          </div>

          {/* Submit CTA Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto h-13 px-8 rounded-full bg-[#BEFF4D] hover:bg-[#AEF236] text-[#111111] font-bold text-sm tracking-tight inline-flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-[0.98] shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Send Booking Request on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
