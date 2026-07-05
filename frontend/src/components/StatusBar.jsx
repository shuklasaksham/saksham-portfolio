import React, { useEffect, useState } from 'react';

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/i.test(navigator.platform);
const MOD = isMac ? '⌘' : 'Ctrl';

export default function StatusBar({ onOpenPalette }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const hh = String(time.getHours()).padStart(2, '0');
  const mm = String(time.getMinutes()).padStart(2, '0');

  return (
    <div
      className="px-3 md:px-5 py-2 flex items-center justify-between text-[11px] md:text-[12px] gap-3"
      style={{
        borderTop: '1px solid rgba(245,165,36,0.28)',
        color: 'var(--muted)',
        background: 'rgba(245,165,36,0.02)'
      }}
    >
      <div className="flex items-center gap-3 md:gap-5 min-w-0">
        <button
          onClick={onOpenPalette}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          style={{ color: 'var(--amber)' }}
          aria-label="Open command palette"
        >
          <kbd className="px-1.5 py-0.5 text-[11px]" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 3 }}>{MOD} K</kbd>
          <span className="opacity-80 hidden xs:inline sm:inline">Commands</span>
        </button>
        <span className="hidden md:flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 text-[11px]" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 3, color: 'var(--amber)' }}>1–6</kbd>
          <span className="opacity-80">Jump section</span>
        </span>
        <span className="hidden lg:flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 text-[11px]" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 3, color: 'var(--amber)' }}>[</kbd>
          <span className="opacity-80">Toggle sidebar</span>
        </span>
        <span className="hidden lg:flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 text-[11px]" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 3, color: 'var(--amber)' }}>/</kbd>
          <span className="opacity-80">Peek</span>
        </span>
      </div>

      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        <span className="hidden sm:flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
          <span className="opacity-80">Available</span>
        </span>
        <span style={{ color: 'var(--amber)' }}>{hh}:{mm}</span>
      </div>
    </div>
  );
}
