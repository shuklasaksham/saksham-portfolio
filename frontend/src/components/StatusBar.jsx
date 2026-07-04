import React, { useEffect, useState } from 'react';
import { navItems } from '../data/mock';

export default function StatusBar({ active }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const activeLabel = navItems.find((n) => n.key === active)?.label || 'Home';

  const hh = String(time.getHours()).padStart(2, '0');
  const mm = String(time.getMinutes()).padStart(2, '0');
  const ss = String(time.getSeconds()).padStart(2, '0');

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t"
      style={{ borderColor: 'rgba(245,165,36,0.28)', background: '#050505' }}
    >
      <div className="max-w-[1560px] mx-auto px-6 py-2 flex items-center justify-between text-[11px]" style={{ color: 'var(--muted)' }}>
        <div className="flex items-center gap-5">
          <span><span style={{ color: 'var(--amber)' }}>[⌘K]</span> Commands</span>
          <span className="hidden sm:inline"><span style={{ color: 'var(--amber)' }}>[↑/↓]</span> Navigate</span>
          <span className="hidden md:inline"><span style={{ color: 'var(--amber)' }}>[H W A B P C]</span> Jump</span>
          <span className="hidden lg:inline"><span style={{ color: 'var(--amber)' }}>[ESC]</span> Close</span>
          <span className="hidden lg:inline"><span style={{ color: 'var(--amber)' }}>[TAB]</span> Select</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">SECTION: <span style={{ color: 'var(--amber)' }}>{activeLabel.toUpperCase()}</span></span>
          <span className="hidden sm:inline">● ONLINE</span>
          <span style={{ color: 'var(--amber)' }}>{hh}:{mm}:{ss}</span>
          <span>@saksham</span>
        </div>
      </div>
    </div>
  );
}
