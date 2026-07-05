import React from 'react';

// Full-viewport terminal container. No browser chrome — matches the reference.
// Responsive:
//  • Desktop/Tablet: locked to viewport height (single-screen master-detail experience)
//  • Mobile: opens up — content scrolls vertically, chrome padding shrinks
export default function TerminalFrame({ children }) {
  return (
    <div className="px-2 md:px-4 py-2 md:py-3">
      <div
        className="relative mx-auto md:overflow-hidden"
        style={{
          maxWidth: '1560px',
          borderRadius: 14,
          background: '#0a0503',
          boxShadow:
            '0 0 0 1px rgba(245,165,36,0.35), 0 30px 90px -30px rgba(245,165,36,0.18), inset 0 0 160px rgba(0,0,0,0.7)'
        }}
      >
        {/* Desktop/tablet: fixed viewport height. Mobile: intrinsic height */}
        <div className="h-auto md:h-[calc(100vh-24px)] w-full">{children}</div>
      </div>
    </div>
  );
}
