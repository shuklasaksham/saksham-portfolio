import React, { useEffect, useState } from 'react';
import { stats } from '../../data/mock';

const LANGS = [
  { code: 'EN', text: 'This is not a portfolio.' },
  { code: 'HI', text: 'This is not \u092a\u094b\u0930\u094d\u091f\u092b\u094b\u0932\u093f\u092f\u094b.' },
  { code: 'JP', text: 'This is not \u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa.' },
  { code: 'DE', text: 'This is not ein Portfolio.' },
  { code: 'FR', text: 'This is not un portfolio.' }
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % LANGS.length), 3200);
    return () => clearInterval(t);
  }, []);
  const current = LANGS[idx];

  return (
    <section className="relative px-6 md:px-10 lg:px-16 pt-10 pb-24 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      {/* Header row */}
      <div className="flex items-center justify-between mb-10 text-[11px]" style={{ color: 'var(--muted)' }}>
        <div className="flex items-center gap-3">
          <span className="px-2 py-1 rounded" style={{ border: '1px solid rgba(245,165,36,0.3)' }}>PROFILE</span>
          <span>~/portfolio/home</span>
        </div>
        <div>SAKSHAM SHUKLA — <span style={{ color: 'var(--amber)' }}>UI/UX DESIGNER</span></div>
      </div>

      {/* Big heading */}
      <div className="relative">
        <div className="absolute -right-6 top-8 w-72 h-72 rounded-full opacity-[0.18] pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(245,165,36,0.7) 0%, rgba(245,165,36,0.0) 65%)' }} />
        <div className="text-[10px] mb-3" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em' }}>&gt; INIT_HERO.exe</div>
        <h1
          className="text-[52px] md:text-[70px] lg:text-[86px] font-bold leading-[1.04] tracking-tight glow"
          style={{ color: 'var(--amber)', fontFamily: 'IBM Plex Mono, monospace' }}
        >
          <span style={{ color: '#fff2d9' }}>&gt;_ </span>
          <span>{current.text.split(' ').slice(0, 3).join(' ')} </span>
          <span className="hard-glow" style={{ color: 'var(--amber-2)' }}>
            {current.text.split(' ').slice(3).join(' ')}
          </span>
          <span
            className="caret"
            style={{ width: '0.4ch', height: '0.9em', verticalAlign: '-0.08em', marginLeft: 6 }}
          />
        </h1>

        <div className="mt-4 flex items-center gap-3 text-[12px]" style={{ color: 'var(--muted)' }}>
          <span className="px-2 py-0.5 rounded" style={{ border: '1px solid rgba(245,165,36,0.3)' }}>lang: {current.code}</span>
          <span>— It’s a controlled design experiment.</span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-3 gap-4 max-w-2xl">
        {stats.map((s) => (
          <div key={s.label} className="panel px-5 py-5">
            <div className="text-[36px] md:text-[42px] font-bold hard-glow" style={{ color: 'var(--amber-2)' }}>{s.value}</div>
            <div className="text-[10px] mt-1" style={{ color: 'var(--muted)', letterSpacing: '0.2em' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="mt-16 flex items-center gap-3 text-[11px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.25em' }}>
        <span>SCROLL TO EXPLORE</span>
        <span className="w-16 h-px" style={{ background: 'rgba(245,165,36,0.3)' }} />
        <span>▾</span>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 border-t" style={{ borderColor: 'rgba(245,165,36,0.18)' }}>
        <div className="marquee-track whitespace-nowrap text-[11px]" style={{ color: 'var(--muted)', letterSpacing: '0.3em' }}>
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              &nbsp;&nbsp;PRODUCT DESIGN &nbsp;•&nbsp; INTERACTION &nbsp;•&nbsp; MOTION &nbsp;•&nbsp; SYSTEMS &nbsp;•&nbsp; VOICE UI &nbsp;•&nbsp; SPATIAL &nbsp;•&nbsp; AVAILABLE FOR WORK Q3 2026 &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
