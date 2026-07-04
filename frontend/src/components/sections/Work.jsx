import React from 'react';
import { caseStudies } from '../../data/mock';
import { Flag } from 'lucide-react';

export default function Work() {
  return (
    <section className="px-6 md:px-10 lg:px-12 py-8 border-t" style={{ borderColor: 'rgba(245,165,36,0.24)' }}>
      <div className="mb-4 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">WORK</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <span className="opacity-70">{caseStudies.length} of 30 shown</span>
      </div>

      <div className="space-y-4">
        {caseStudies.map((cs) => (
          <article key={cs.id} className="rounded-sm p-5 md:p-6" style={{ border: '1px solid var(--amber)' }}>
            <div className="flex items-center justify-between flex-wrap gap-2 text-[13px]" style={{ color: 'var(--amber)' }}>
              <div className="flex items-center gap-2">
                <span>@saksham_shukla</span>
                <span>◉</span>
                <span>L</span>
                <span>∽</span>
              </div>
              <div className="opacity-80">
                {cs.year} • {cs.words} words • {cs.saves} saves • {cs.replies} replies
              </div>
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
              {cs.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>

            <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

            <div className="text-[14px]" style={{ color: 'var(--amber)' }}>{cs.caption}</div>

            <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
              <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
                <span style={{ color: 'var(--amber)' }}>[↵]</span> Open&nbsp;&nbsp;
                <span style={{ color: 'var(--amber)' }}>[S]</span> Save
              </div>
              <div className="flex items-center gap-2">
                {cs.tags.map((t) => (
                  <span key={t} className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>
                    {t}
                  </span>
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
