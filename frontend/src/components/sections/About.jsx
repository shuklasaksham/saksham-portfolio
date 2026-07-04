import React, { useState } from 'react';
import { aboutTabs } from '../../data/mock';

const TABS = [
  { key: 'process', label: 'PROCESS' },
  { key: 'skills', label: 'SKILLS' },
  { key: 'obsessions', label: 'OBSESSIONS' },
  { key: 'peeves', label: 'PET PEEVES' }
];

export default function About() {
  const [tab, setTab] = useState('process');
  const items = aboutTabs[tab];

  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 border-t" style={{ borderColor: 'rgba(245,165,36,0.2)' }}>
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-[10px] mb-3" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em' }}>&gt; CAT ~/ABOUT.md</div>
          <h2 className="text-[44px] md:text-[60px] font-bold leading-tight glow" style={{ color: 'var(--amber)' }}>
            Not a bio.<br />
            A <span className="hard-glow" style={{ color: 'var(--amber-2)' }}>personality</span> map.
          </h2>
          <p className="mt-6 text-[13px] leading-relaxed max-w-md" style={{ color: 'var(--muted)' }}>
            I&#39;m Saksham — a product designer who turns complex problems into intuitive, beautiful
            experiences. Research-driven design and pixel-level craft. Currently exploring the edge
            between conversational AI, spatial UI and good old-fashioned terminals.
          </p>

          <div className="mt-8 space-y-2 text-[12px]" style={{ color: 'var(--muted)' }}>
            <div><span style={{ color: 'var(--amber)' }}>location</span> — New Delhi → Remote</div>
            <div><span style={{ color: 'var(--amber)' }}>role</span> — Sr. Product Designer</div>
            <div><span style={{ color: 'var(--amber)' }}>status</span> — <span style={{ color: 'var(--amber-2)' }}>● available for Q3 2026</span></div>
            <div><span style={{ color: 'var(--amber)' }}>tools</span> — Figma, Cursor, Framer, Origami, Blender</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {TABS.map((t) => {
              const on = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className="px-4 py-2 text-[11px] rounded-md transition-colors"
                  style={{
                    background: on ? 'var(--amber)' : 'transparent',
                    color: on ? '#0a0704' : 'var(--amber)',
                    border: '1px solid rgba(245,165,36,0.45)',
                    letterSpacing: '0.15em',
                    fontWeight: on ? 600 : 400
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <div key={it.n} className="panel panel-hover px-5 py-5">
                <div className="text-[11px] mb-3" style={{ color: 'var(--muted-2)' }}>{it.n}</div>
                <div className="text-[18px] font-semibold" style={{ color: 'var(--amber-2)' }}>{it.title}</div>
                <div className="mt-2 text-[12px] leading-relaxed" style={{ color: 'var(--muted)' }}>{it.text}</div>
              </div>
            ))}
          </div>

          {/* Quote panel */}
          <div className="mt-6 panel px-5 py-6">
            <div className="flex items-center gap-2 text-[10px] mb-3" style={{ color: 'var(--muted-2)', letterSpacing: '0.25em' }}>
              <span>QUOTE.txt</span>
              <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
              <span>001/999</span>
            </div>
            <div className="text-[18px] leading-relaxed" style={{ color: 'var(--amber-2)' }}>
              &ldquo;Design is the silent ambassador of your brand.&rdquo;
            </div>
            <div className="mt-2 text-[11px]" style={{ color: 'var(--muted)' }}>— Paul Rand</div>
          </div>
        </div>
      </div>
    </section>
  );
}
