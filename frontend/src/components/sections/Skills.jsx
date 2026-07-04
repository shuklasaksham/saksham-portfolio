import React, { useState } from 'react';
import { skillsData } from '../../data/mock';
import { Flag } from 'lucide-react';

const TABS = [
  { key: 'process', label: 'Process' },
  { key: 'skills', label: 'Skills' },
  { key: 'obsessions', label: 'Obsessions' },
  { key: 'peeves', label: 'Pet Peeves' }
];

export default function Skills() {
  const [tab, setTab] = useState('process');
  const items = skillsData[tab];

  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-12 py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">SKILLS AND PROCESS</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
      </div>

      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {TABS.map((t) => {
          const on = tab === t.key;
          return (
            <button key={t.key} onClick={() => setTab(t.key)} className="px-4 py-2 text-[13px] font-medium" style={{ border: `1px solid ${on ? 'var(--amber-2)' : 'rgba(245,165,36,0.45)'}`, color: on ? 'var(--amber-2)' : 'var(--amber)', borderRadius: 2, background: 'transparent', boxShadow: on ? '0 0 0 1px rgba(245,165,36,0.35)' : 'none' }}>
              {t.label}
            </button>
          );
        })}
      </div>

      <article className="rounded-sm p-5 md:p-6 flex-1 min-h-0 overflow-hidden flex flex-col" style={{ border: '1px solid var(--amber)' }}>
        <div className="flex items-center justify-between flex-wrap gap-2 text-[13px]" style={{ color: 'var(--amber)' }}>
          <div className="flex items-center gap-2">
            <span>@saksham_shukla</span>
            <span>◉</span>
            <span>L</span>
            <span>∽</span>
          </div>
          <div className="opacity-80">notebook • always evolving</div>
        </div>

        <div className="mt-3">
          <a href="#" className="text-[15px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
            V2026.02 — {TABS.find((t) => t.key === tab).label}
          </a>
        </div>

        <p className="mt-2 text-[13px] leading-relaxed max-w-3xl" style={{ color: 'var(--amber)' }}>
          Research-driven design and pixel-level craft. Below is a snapshot of my current toolkit and the way I move from ambiguity to shipped product.
        </p>

        <div className="my-3 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1 min-h-0">
          {items.map((it) => (
            <div key={it.n} className="px-4 py-4 flex flex-col" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
              <div className="text-[11px] mb-2" style={{ color: 'var(--muted)' }}>{it.n}</div>
              <div className="text-[16px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>{it.title}</div>
              <div className="mt-1 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{it.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--amber)' }}>[↵]</span> Open&nbsp;&nbsp;
            <span style={{ color: 'var(--amber)' }}>[S]</span> Save
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>process</span>
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>craft</span>
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>notes</span>
            <Flag size={14} style={{ color: 'var(--amber)' }} />
          </div>
        </div>
      </article>
    </section>
  );
}
