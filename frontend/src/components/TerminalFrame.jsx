import React from 'react';

// Full-viewport terminal container. No browser chrome — matches the reference.
export default function TerminalFrame({ children }) {
  return (
    <div className="px-3 md:px-4 py-3">
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          maxWidth: '1560px',
          height: 'calc(100vh - 24px)',
          borderRadius: 14,
          background: '#0a0503',
          boxShadow:
            '0 0 0 1px rgba(245,165,36,0.35), 0 30px 90px -30px rgba(245,165,36,0.18), inset 0 0 160px rgba(0,0,0,0.7)'
        }}
      >
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
}
