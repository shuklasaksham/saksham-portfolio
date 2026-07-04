import React, { useEffect, useRef, useState } from 'react';
import { experience } from '../../data/mock';
import { ChevronRight, Users, ScanSearch } from 'lucide-react';

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [inspect, setInspect] = useState(null); // {x, y} while hovering role title
  const [dotOn, setDotOn] = useState(true);
  const timers = useRef([]);

  const e = experience[selected];

  // Blinking cursor / active dot
  useEffect(() => {
    const t = setInterval(() => setDotOn((v) => !v), 700);
    return () => clearInterval(t);
  }, []);

  // "Experience loaded." effect when switching
  useEffect(() => {
    setLoaded(false);
    timers.current.forEach(clearTimeout);
    const t = setTimeout(() => setLoaded(true), 220);
    timers.current.push(t);
    return () => timers.current.forEach(clearTimeout);
  }, [selected]);

  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-12 py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">WORK EXPERIENCE</span>
        <span className="flex-1 h-px breathe" style={{ background: 'var(--amber)' }} />
        <span className="opacity-70">{experience.length} entries</span>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Timeline list */}
        <div className="lg:col-span-4 rounded-sm overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
          <ul>
            {experience.map((exp, i) => {
              const isOn = selected === i;
              return (
                <li key={i}>
                  <button
                    onClick={() => setSelected(i)}
                    className="w-full text-left px-4 py-3.5 flex items-start gap-3 transition-colors"
                    style={{
                      background: isOn ? 'var(--amber)' : 'transparent',
                      color: isOn ? '#0a0704' : 'var(--amber)',
                      borderBottom: '1px solid rgba(245,165,36,0.25)'
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] tracking-wider" style={{ color: isOn ? 'rgba(10,7,4,0.75)' : 'var(--muted)' }}>
                        {exp.dateShort}
                      </div>
                      <div className="text-[15px] font-bold mt-0.5 truncate">{exp.company}</div>
                      <div className="text-[11px] mt-0.5 uppercase tracking-wide truncate" style={{ color: isOn ? 'rgba(10,7,4,0.75)' : 'var(--muted)' }}>
                        {exp.role}
                      </div>
                    </div>
                    <ChevronRight size={14} className="mt-1" style={{ opacity: isOn ? 1 : 0.55 }} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Software-feel detail panel */}
        <article className="lg:col-span-8 rounded-sm p-5 md:p-6 flex flex-col min-h-0 overflow-y-auto" style={{ border: '1px solid var(--amber)' }}>
          {/* Terminal "loaded" line */}
          <div className="text-[12px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.06em' }}>
            <span style={{ color: 'var(--amber)' }}>&gt;</span> Experience loaded.
            <span
              aria-hidden
              className="inline-block ml-1 align-baseline"
              style={{ width: '0.5ch', height: '0.85em', background: 'var(--amber)', opacity: dotOn ? 0.9 : 0, transform: 'translateY(1px)' }}
            />
          </div>

          {/* Meta grid: Role / Status */}
          <div className="mt-4 grid grid-cols-2 gap-6">
            <FieldLabel label="Role:">
              <span
                className="font-bold hard-glow inline-block cursor-none"
                style={{ color: 'var(--amber-2)', fontSize: 'clamp(20px, 1.7vw, 26px)', lineHeight: 1.1 }}
                onMouseMove={(ev) => setInspect({ x: ev.clientX, y: ev.clientY })}
                onMouseLeave={() => setInspect(null)}
              >
                {loaded ? e.role : ' '}
              </span>
            </FieldLabel>

            <FieldLabel label="Status:">
              <div className="inline-flex items-center gap-2">
                <span
                  className={e.status === 'Active' ? 'pulse-dot' : ''}
                  style={{
                    display: 'inline-block',
                    width: 8, height: 8, borderRadius: 99,
                    background: e.status === 'Active' ? '#22c55e' : 'var(--muted)',
                    boxShadow: e.status === 'Active' ? '0 0 10px #22c55e' : 'none'
                  }}
                />
                <span className="font-bold" style={{ color: e.status === 'Active' ? '#22c55e' : 'var(--amber)', fontSize: 20 }}>
                  {loaded ? e.status : ' '}
                </span>
              </div>
            </FieldLabel>

            <FieldLabel label="Company:">
              <div className="text-[15px]" style={{ color: 'var(--amber)' }}>{loaded ? e.company : ' '}</div>
            </FieldLabel>

            <FieldLabel label="Period:">
              <div className="text-[15px]" style={{ color: 'var(--amber)' }}>{loaded ? e.period : ' '}</div>
            </FieldLabel>
          </div>

          <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

          <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 200ms ease 80ms' }}>
            <p className="text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{e.summary}</p>

            {/* Highlight tiles */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
              {e.highlights && e.highlights.map((h, i) => (
                <div key={i} className="px-3 py-3 hover-lift" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
                  <div className="text-[10px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>{h.label.toUpperCase()}</div>
                  <div className="mt-1.5 text-[13px] leading-snug" style={{ color: 'var(--amber)' }}>{h.text}</div>
                </div>
              ))}
            </div>

            <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

            <div className="text-[11px] mb-2" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>WHAT I DID</div>
            <ul className="space-y-1.5 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
              {e.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: 'var(--amber-2)' }}>›</span>
                  <span>{b}</span>
                </li>
              ))}
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
          </div>
        </article>
      </div>

      {/* Custom "Inspect" cursor follower */}
      {inspect && (
        <div
          className="fixed pointer-events-none z-40"
          style={{ left: inspect.x + 12, top: inspect.y + 12 }}
        >
          <span
            className="inline-flex items-center gap-1.5 text-[11px] px-2 py-1"
            style={{ background: 'var(--amber)', color: '#0a0704', borderRadius: 2, fontWeight: 600, letterSpacing: '0.02em', boxShadow: '0 6px 18px -6px rgba(245,165,36,0.5)' }}
          >
            <ScanSearch size={11} strokeWidth={2} />
            Inspect
          </span>
        </div>
      )}
    </section>
  );
}

function FieldLabel({ label, children }) {
  return (
    <div>
      <div className="text-[11px] mb-1" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>{label.toUpperCase()}</div>
      <div>{children}</div>
    </div>
  );
}
