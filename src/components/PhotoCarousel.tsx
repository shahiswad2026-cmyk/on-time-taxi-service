import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { CAR_PHOTOS, getWhatsAppUrl } from '../data/businessData';
import { VehiclePhoto } from './VehiclePhoto';

export const PhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAR_PHOTOS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CAR_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  // Touch gesture support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentPhoto = CAR_PHOTOS[currentIndex];

  return (
    <section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto" aria-label="Vehicle Gallery">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#73726B]">
            Vehicle Gallery
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.02em] text-[#111111] mt-1">
            Our white taxi in detail
          </h2>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous vehicle photo"
            className="w-11 h-11 rounded-full border border-[#DCDAD0] bg-white hover:bg-[#F4F3EA] text-[#111111] flex items-center justify-center transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-black cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next vehicle photo"
            className="w-11 h-11 rounded-full border border-[#DCDAD0] bg-white hover:bg-[#F4F3EA] text-[#111111] flex items-center justify-center transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-black cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Showcase Container (24px rounded corners) */}
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative rounded-[24px] overflow-hidden border border-[#E3E1D2] bg-[#161816] shadow-[0_16px_40px_rgba(0,0,0,0.05)] focus-visible:outline-2 focus-visible:outline-[#111111]"
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#161816]">
          <VehiclePhoto
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            photoIndex={currentPhoto.id}
            title={currentPhoto.title}
            subtitle={currentPhoto.subtitle}
            aspectRatio="video"
            priority={false}
            className="w-full h-full rounded-[24px]"
          />

          {/* Floating Caption Overlay on Image Bottom (soft dark gradient ensures readability) */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-20 pointer-events-auto">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#BEFF4D]">
                Photo 0{currentPhoto.id} of 04
              </p>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-1">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-0.5">
                {currentPhoto.subtitle}
              </p>
            </div>

            <a
              href={getWhatsAppUrl(`Hello! I am viewing Photo ${currentPhoto.id} (${currentPhoto.title}) of your taxi and would like to check booking availability.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 rounded-full bg-[#BEFF4D] text-[#111111] hover:bg-[#AEF236] font-bold text-xs tracking-tight inline-flex items-center gap-1.5 self-start sm:self-auto transition-transform hover:scale-[1.02] shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Inquire about this car</span>
            </a>
          </div>
        </div>

        {/* Dots Navigation Bar */}
        <div className="p-4 bg-white border-t border-[#EAE8DD] flex items-center justify-between">
          <span className="text-xs font-medium text-[#73726B]">
            Swipe or use arrows to view all 4 photos
          </span>

          <div className="flex items-center gap-2">
            {CAR_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 rounded-full bg-[#111111]'
                    : 'w-2.5 h-2.5 rounded-full bg-[#DCDAD0] hover:bg-[#8E8D86]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
