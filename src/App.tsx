/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FloatingNav } from './components/FloatingNav';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { StatHeadline } from './components/StatHeadline';
import { TabbedCard } from './components/TabbedCard';
import { PhotoCarousel } from './components/PhotoCarousel';
import { PillarCards } from './components/PillarCards';
import { TripCards } from './components/TripCards';
import { RateAndInfoCards } from './components/RateAndInfoCards';
import { BookingForm } from './components/BookingForm';
import { LimeFooter } from './components/LimeFooter';
import { BottomBar } from './components/BottomBar';
import { StickyWhatsApp } from './components/StickyWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F3EA] text-[#111111] flex flex-col font-sans selection:bg-[#BEFF4D] selection:text-[#111111] relative">
      {/* 1. Floating Nav Card */}
      <FloatingNav />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Marquee strip of place names */}
        <MarqueeStrip />

        {/* 4. Stat headline: 5.0 stars on Google + lime pill CTA */}
        <StatHeadline />

        {/* 5. Tabbed card with pill tabs: Vehicle / Trips / How to book */}
        <TabbedCard />

        {/* 6. Photo carousel of 4 car photos with dots */}
        <PhotoCarousel />

        {/* 7. Four pillar cards */}
        <PillarCards />

        {/* 8. Horizontal-scroll trip cards */}
        <TripCards />

        {/* 9. Rate and info cards (3) */}
        <RateAndInfoCards />

        {/* 10. Booking form */}
        <BookingForm />
      </main>

      {/* 11. Lime footer */}
      <LimeFooter />

      {/* 12. Bottom bar */}
      <BottomBar />

      {/* Global Sticky WhatsApp Button */}
      <StickyWhatsApp />
    </div>
  );
}
