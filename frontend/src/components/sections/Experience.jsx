import React, { useState } from 'react';
import { experience } from '../../data/mock';
import { Flag, ChevronRight, Users, Sparkles } from 'lucide-react';

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
        {/* Company list */}
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

        {/* Detail */}
        <article className="lg:col-span-8 rounded-sm p-5 md:p-6 flex flex-col min-h-0 overflow-y-auto" style={{ border: '1px solid var(--amber)' }}>
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <div className="text-[19px] font-semibold" style={{ color: 'var(--amber-2)' }}>
                {e.role}
              </div>
              <div className="text-[13px]" style={{ color: 'var(--amber)' }}>
                {e.company} · {e.location}
              </div>
            </div>
            <div className="text-[12px] px-2 py-1" style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)', borderRadius: 2 }}>
              {e.period}
            </div>
          </div>

          <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{e.summary}</p>

          {/* Highlight tiles */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
            {e.highlights && e.highlights.map((h, i) => (
              <div key={i} className="px-3 py-3" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
                <div className="flex items-center gap-1.5 text-[10px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>
                  <Sparkles size={10} />
                  <span>{h.label.toUpperCase()}</span>
                </div>
                <div className="mt-1.5 text-[13px] leading-snug" style={{ color: 'var(--amber)' }}>{h.text}</div>
              </div>
            ))}
          </div>

          <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

          <div className="text-[11px] mb-2" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>WHAT I DID</div>
          <ul className="space-y-1.5 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
            {e.bullets.map((b, i) => (<li key={i}>• {b}</li>))}
          </ul>

          <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <div className="text-[11px] mb-2" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>STACK</div>
              <div className="flex flex-wrap gap-1.5">
                {e.stack && e.stack.map((s) => (
                  <span key={s} className="text-[11px] px-2 py-1" style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)', borderRadius: 2 }}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] mb-2" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>TEAM</div>
              <div className="inline-flex items-center gap-2 text-[12px]" style={{ color: 'var(--amber)' }}>
                <Users size={12} />
                <span>{e.team}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end flex-wrap gap-3">
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
