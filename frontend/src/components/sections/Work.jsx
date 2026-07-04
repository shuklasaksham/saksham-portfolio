import React, { useState } from 'react';
import { caseStudies } from '../../data/mock';
import { Flag, ChevronRight } from 'lucide-react';

export default function Work() {
  const [selected, setSelected] = useState(caseStudies[0].id);
  const cs = caseStudies.find((c) => c.id === selected);

  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-12 py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">CASE STUDIES & PROJECTS</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <span className="opacity-70">{caseStudies.length} of 30 shown</span>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Project list */}
        <div className="lg:col-span-4 rounded-sm overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
          <ul>
            {caseStudies.map((c) => {
              const isOn = selected === c.id;
              return (
                <li key={c.id}>
                  <button
                    onClick={() => setSelected(c.id)}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 transition-colors hover-lift"
                    style={{
                      background: isOn ? 'var(--amber)' : 'transparent',
                      color: isOn ? '#0a0704' : 'var(--amber)',
                      borderBottom: '1px solid rgba(245,165,36,0.25)'
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] tracking-wider mb-0.5" style={{ color: isOn ? 'rgba(10,7,4,0.75)' : 'var(--muted-2)' }}>
                        {c.category}
                      </div>
                      <div className="text-[15px] font-bold truncate">{c.title}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: isOn ? 'rgba(10,7,4,0.7)' : 'var(--muted)' }}>
                        {c.role} · {c.year}
                      </div>
                    </div>
                    <ChevronRight size={14} style={{ opacity: isOn ? 1 : 0.6 }} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Detail */}
        <article className="lg:col-span-8 rounded-sm p-5 md:p-6 flex flex-col min-h-0 overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
          <div className="flex items-center justify-between flex-wrap gap-2 text-[13px]" style={{ color: 'var(--amber)' }}>
            <div className="flex items-center gap-2">
              <span>@saksham_shukla</span>
              <span>◉</span>
              <span>L</span>
              <span>∽</span>
            </div>
            <div className="opacity-80">{cs.year} • {cs.words} words • {cs.saves} saves • {cs.replies} replies</div>
          </div>

          <div className="mt-3">
            <a href="#" className="text-[16px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
              {cs.version} — {cs.title}
            </a>
            <div className="mt-1 text-[12px]" style={{ color: 'var(--muted)', letterSpacing: '0.12em' }}>
              {cs.category} · {cs.role}
            </div>
          </div>

          <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
            {cs.bullets.map((b, i) => (<li key={i}>• {b}</li>))}
          </ul>

          <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

          <p className="text-[14px]" style={{ color: 'var(--amber)' }}>{cs.caption}</p>

          <div className="flex-1" />

          <div className="mt-4 flex items-center justify-end flex-wrap gap-3">
            <div className="flex items-center gap-2">
              {cs.tags.map((t) => (
                <span key={t} className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>{t}</span>
              ))}
              <Flag size={14} style={{ color: 'var(--amber)' }} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
