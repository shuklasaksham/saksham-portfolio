import React from 'react';
import { socials } from '../../data/mock';

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-8 border-t" style={{ borderColor: 'rgba(245,165,36,0.2)' }}>
      <div className="flex flex-wrap items-center justify-between gap-4 text-[11px]" style={{ color: 'var(--muted)' }}>
        <div>© 2026 Saksham Shukla — designed & coded in a terminal.</div>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="hover:underline" style={{ color: 'var(--amber)' }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-3 text-[10px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em' }}>
        SIGNAL: STRONG — SESSION_ID: 0xC7B4A9 — BUILT_WITH: REACT, TAILWIND, LOVE
      </div>
    </footer>
  );
}
