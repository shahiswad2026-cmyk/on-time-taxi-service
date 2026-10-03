import React, { useState } from 'react';

interface VehiclePhotoProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'wide' | 'auto';
  photoIndex?: number;
  priority?: boolean;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const VehiclePhoto: React.FC<VehiclePhotoProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'video',
  photoIndex = 1,
  priority = false,
  title,
  subtitle,
  children,
}) => {
  // Always default to false - never show the dark placeholder by default while image is loading
  const [loadFailed, setLoadFailed] = useState<boolean>(false);

  const aspectClass =
    aspectRatio === 'video'
      ? 'aspect-[16/10] md:aspect-[16/9]'
      : aspectRatio === 'wide'
      ? 'aspect-[21/9]'
      : 'h-full';

  return (
    <div
      className={`relative overflow-hidden rounded-[24px] bg-[#161816] text-white flex items-center justify-center ${aspectClass} ${className}`}
    >
      {!loadFailed ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setLoadFailed(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.01]"
        />
      ) : (
        /* Dark placeholder shown ONLY when an image fails to load via onError */
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1C1F1C] via-[#141614] to-[#0E100E] flex flex-col justify-between p-6 select-none"
        >
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-tight bg-white/5 border border-white/10 text-[#BEFF4D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF4D] animate-pulse" />
              On Time Taxi Service · Meghalaya
            </span>
            <span className="text-xs font-mono tracking-wider text-white/40">
              PHOTO 0{photoIndex} / 04
            </span>
          </div>

          <div className="my-auto flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#BEFF4D] mb-3">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-white/90 tracking-tight">
              {title || 'White Tourist Taxi'}
            </p>
            <p className="text-xs text-neutral-400 mt-0.5 max-w-xs">
              {subtitle || 'Comfortable vehicle for Meghalaya day trips & sightseeing'}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-white/5 pt-3 text-xs text-white/50 z-10">
            <span>5.0 on Google</span>
            <span className="font-semibold text-[#BEFF4D]">Rs 5,000 / day</span>
          </div>
        </div>
      )}

      {/* Soft dark gradient at the bottom so overlay text stays completely readable */}
      <div
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Overlay contents if passed */}
      {children && <div className="absolute inset-0 z-20 pointer-events-none">{children}</div>}
    </div>
  );
};
