import React from 'react';
import { experience } from '../../data/mock';
import { Flag } from 'lucide-react';

export default function Experience() {
  return (
    <section className="px-6 md:px-10 lg:px-12 py-8 border-t" style={{ borderColor: 'rgba(245,165,36,0.24)' }}>
      <div className="mb-4 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">EXPERIENCE</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <span className="opacity-70">{experience.length} roles</span>
      </div>

      <div className="space-y-4">
        {experience.map((e) => (
          <article key={e.company} className="rounded-sm p-5 md:p-6" style={{ border: '1px solid var(--amber)' }}>
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
        ))}
      </div>
    </section>
  );
}
