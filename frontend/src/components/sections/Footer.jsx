import React from 'react';

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-12 py-6 border-t" style={{ borderColor: 'rgba(245,165,36,0.24)' }}>
      <div className="flex flex-wrap items-center justify-between gap-3 text-[13px]" style={{ color: 'var(--muted)' }}>
        <div>&copy; 2026 Saksham Shukla — designed & coded in a terminal.</div>
        <div className="text-[12px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>
          SESSION 0xC7B4A9 · SIGNAL STRONG
        </div>
      </div>
    </footer>
  );
}
