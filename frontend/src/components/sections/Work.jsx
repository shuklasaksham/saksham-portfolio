import React, { useState } from 'react';
import { caseStudies } from '../../data/mock';
import { ArrowUpRight } from 'lucide-react';

export default function Work() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 border-t" style={{ borderColor: 'rgba(245,165,36,0.2)' }}>
      <div className="mb-10">
        <div className="text-[10px] mb-3" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em' }}>&gt; LS ~/CASE_STUDIES</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-[44px] md:text-[64px] font-bold leading-none glow" style={{ color: 'var(--amber)' }}>
            Selected <span className="hard-glow" style={{ color: 'var(--amber-2)' }}>work</span>.
          </h2>
          <p className="text-[13px] max-w-sm" style={{ color: 'var(--muted)' }}>
            Real problems, real users, real impact. A curated set from 30+ shipped projects.
          </p>
        </div>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-12 text-[10px] pb-3 border-b" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em', borderColor: 'rgba(245,165,36,0.2)' }}>
        <div className="col-span-1">IDX</div>
        <div className="col-span-5">PROJECT</div>
        <div className="col-span-3 hidden md:block">CATEGORY</div>
        <div className="col-span-2 hidden md:block">ROLE</div>
        <div className="col-span-1 text-right">YEAR</div>
      </div>

      <ul className="divide-y" style={{ borderColor: 'rgba(245,165,36,0.18)' }}>
        {caseStudies.map((cs, i) => {
          const isH = hovered === cs.id;
          return (
            <li
              key={cs.id}
              onMouseEnter={() => setHovered(cs.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative group cursor-pointer border-b"
              style={{ borderColor: 'rgba(245,165,36,0.14)' }}
            >
              <div
                className="grid grid-cols-12 items-center px-2 py-6 transition-colors"
                style={{ background: isH ? 'rgba(245,165,36,0.06)' : 'transparent' }}
              >
                <div className="col-span-1 text-[12px]" style={{ color: 'var(--muted)' }}>
                  0{i + 1}
                </div>
                <div className="col-span-11 md:col-span-5">
                  <div
                    className="text-[24px] md:text-[30px] font-semibold leading-tight transition-transform"
                    style={{ color: isH ? 'var(--amber-2)' : 'var(--amber)', transform: isH ? 'translateX(6px)' : 'translateX(0)' }}
                  >
                    {cs.title}
                  </div>
                  <div className="mt-1 text-[11px] md:hidden" style={{ color: 'var(--muted)' }}>
                    {cs.category} · {cs.role}
                  </div>
                </div>
                <div className="col-span-3 hidden md:block text-[12px]" style={{ color: 'var(--muted)' }}>
                  {cs.category}
                </div>
                <div className="col-span-2 hidden md:block text-[12px]" style={{ color: 'var(--muted)' }}>
                  {cs.role}
                </div>
                <div className="col-span-1 flex items-center justify-end gap-2 text-[12px]" style={{ color: 'var(--muted)' }}>
                  <span>{cs.year}</span>
                  <ArrowUpRight
                    size={16}
                    style={{
                      color: isH ? 'var(--amber-2)' : 'var(--amber)',
                      transform: isH ? 'translate(3px, -3px)' : 'none',
                      transition: 'transform 200ms ease'
                    }}
                  />
                </div>
              </div>

              {/* Expanded panel */}
              <div
                className="overflow-hidden transition-all"
                style={{
                  maxHeight: isH ? 180 : 0,
                  opacity: isH ? 1 : 0
                }}
              >
                <div className="px-2 pb-6 grid md:grid-cols-3 gap-6">
                  <p className="md:col-span-2 text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--amber)' }}>&gt; </span>
                    {cs.description}
                  </p>
                  <div className="flex flex-wrap gap-2 self-start">
                    {cs.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-1 rounded" style={{ border: '1px solid rgba(245,165,36,0.35)', color: 'var(--amber)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex items-center gap-3 text-[11px]" style={{ color: 'var(--muted-2)' }}>
        <span>&gt;</span>
        <span>{caseStudies.length} of 30 shown — press <span style={{ color: 'var(--amber)' }}>[M]</span> for more (coming soon)</span>
      </div>
    </section>
  );
}
