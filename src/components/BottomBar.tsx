import React from 'react';
import { BUSINESS_CONFIG } from '../data/businessData';

export const BottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Demo status and legal notice"
      className="bg-[#111111] text-[#A5A59E] pt-6 pb-24 sm:pb-20 px-4 border-t border-black/20"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left">
        <div>
          <p className="font-semibold text-white">
            © 2026 {BUSINESS_CONFIG.name}. All rights reserved.
          </p>
        </div>

        <div className="max-w-md">
          <p className="text-[#888880] text-[11px] leading-relaxed">
            Demo preview: details will be updated with your confirmed information.
          </p>
        </div>
      </div>
    </aside>
  );
};
