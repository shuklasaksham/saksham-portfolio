import React, { useState } from 'react';
import { experience } from '../../data/mock';
import { Flag, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const e = experience[selected];

  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-12 py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">EXPERIENCE</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <span className="opacity-70">{experience.length} roles</span>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4 rounded-sm overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
          <ul>
            {experience.map((exp, i) => {
              const isOn = selected === i;
              return (
                <li key={exp.company}>
                  <button
                    onClick={() => setSelected(i)}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 transition-colors"
                    style={{
                      background: isOn ? 'var(--amber)' : 'transparent',
                      color: isOn ? '#0a0704' : 'var(--amber)',
                      borderBottom: '1px solid rgba(245,165,36,0.25)'
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold truncate">{exp.company}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: isOn ? 'rgba(10,7,4,0.7)' : 'var(--muted)' }}>
                        {exp.role} · {exp.period}
                      </div>
                    </div>
                    <ChevronRight size={14} style={{ opacity: isOn ? 1 : 0.6 }} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <article className="lg:col-span-8 rounded-sm p-5 md:p-6 flex flex-col min-h-0 overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
          <div className="flex items-center justify-between flex-wrap gap-2 text-[13px]" style={{ color: 'var(--amber)' }}>
            <div className="flex items-center gap-2">
              <span>@saksham_shukla</span>
              <span>◉</span>
              <span>L</span>
              <span>∽</span>
            </div>
            <div className="opacity-80">{e.period} • {e.location}</div>
          </div>

          <div className="mt-3">
            <a href="#" className="text-[16px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
              {e.company} — {e.role}
            </a>
          </div>

          <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
            {e.bullets.map((b, i) => (<li key={i}>• {b}</li>))}
          </ul>

          <div className="flex-1" />

          <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
              <span style={{ color: 'var(--amber)' }}>[↵]</span> Open&nbsp;&nbsp;
              <span style={{ color: 'var(--amber)' }}>[S]</span> Save
            </div>
            <div className="flex items-center gap-2">
              {e.tags.map((t) => (
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
