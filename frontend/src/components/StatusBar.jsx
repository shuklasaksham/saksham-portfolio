import React, { useEffect, useState } from 'react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const hh = String(time.getHours()).padStart(2, '0');
  const mm = String(time.getMinutes()).padStart(2, '0');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40" style={{ background: '#050505', borderTop: '1px solid rgba(245,165,36,0.24)' }}>
      <div className="max-w-[1560px] mx-auto px-6 py-2.5 flex items-center justify-between text-[13px]" style={{ color: 'var(--amber)' }}>
        <div className="flex items-center gap-6">
          <span><span className="opacity-90">[⌘K]</span> <span className="opacity-80">Commands</span></span>
          <span className="hidden sm:inline"><span className="opacity-90">[↑/↓]</span> <span className="opacity-80">Navigate</span></span>
          <span className="hidden md:inline"><span className="opacity-90">[ESC]</span> <span className="opacity-80">Close</span></span>
          <span className="hidden md:inline"><span className="opacity-90">[TAB]</span> <span className="opacity-80">Select</span></span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline opacity-70">{hh}:{mm}</span>
          <span>@saksham_shukla</span>
        </div>
      </div>
    </div>
  );
}
