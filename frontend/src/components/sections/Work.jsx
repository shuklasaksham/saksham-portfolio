import React, { useEffect, useRef, useState } from 'react';
import { caseStudies } from '../../data/mock';
import { ChevronRight, Eye, Zap, BrainCircuit, Music, Check, X, ArrowRight, Sparkles, Wrench, Clock, Cpu } from 'lucide-react';

const PRINCIPLE_ICONS = { Eye, Zap, BrainCircuit, Music };

export default function Work() {
  const [selectedId, setSelectedId] = useState(caseStudies[0].id);
  const [loaded, setLoaded] = useState(false);
  const [dotOn, setDotOn] = useState(true);
  const scrollerRef = useRef(null);

  const cs = caseStudies.find((c) => c.id === selectedId);

  useEffect(() => {
    const t = setInterval(() => setDotOn((v) => !v), 700);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setLoaded(false);
    const t = setTimeout(() => setLoaded(true), 220);
    if (scrollerRef.current) scrollerRef.current.scrollTop = 0;
    return () => clearTimeout(t);
  }, [selectedId]);

  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-12 py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">CASE STUDIES & PROJECTS</span>
        <span className="flex-1 h-px breathe" style={{ background: 'var(--amber)' }} />
        <span className="opacity-70">{caseStudies.length} of 30 shown</span>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Project list */}
        <div className="lg:col-span-4 rounded-sm overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
          <ul>
            {caseStudies.map((c) => {
              const isOn = selectedId === c.id;
              return (
                <li key={c.id}>
                  <button
                    onClick={() => setSelectedId(c.id)}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 transition-colors"
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

        {/* Detail panel */}
        <article ref={scrollerRef} className="lg:col-span-8 rounded-sm p-5 md:p-6 flex flex-col min-h-0 overflow-y-auto" style={{ border: '1px solid var(--amber)' }}>
          <div className="text-[12px]" style={{ color: 'var(--muted-2)' }}>
            <span style={{ color: 'var(--amber)' }}>&gt;</span> Case study loaded.
            <span aria-hidden className="inline-block ml-1 align-baseline" style={{ width: '0.5ch', height: '0.85em', background: 'var(--amber)', opacity: dotOn ? 0.9 : 0, transform: 'translateY(1px)' }} />
          </div>

          <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 200ms ease 80ms' }}>
            {cs.detailed ? <DetailedCaseStudy cs={cs} /> : <SimpleCaseStudy cs={cs} />}
          </div>
        </article>
      </div>
    </section>
  );
}

function DetailedCaseStudy({ cs }) {
  return (
    <div className="mt-4">
      {/* Hero */}
      <h1 className="font-bold leading-[1.1] hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(24px, 2.3vw, 34px)' }}>
        {cs.title}
      </h1>
      <p className="mt-2 text-[15px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.subtitle}</p>

      {/* Results */}
      <SectionLabel>Results</SectionLabel>
      <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
        {cs.results.map((r) => (
          <div key={r.label} className="px-3 py-3 hover-lift" style={{ border: '1px solid rgba(245,165,36,0.45)', borderRadius: 2 }}>
            <div className="font-bold hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(20px, 1.7vw, 26px)', lineHeight: 1 }}>{r.value}</div>
            <div className="mt-1.5 text-[11px] leading-snug" style={{ color: 'var(--amber)' }}>{r.label}</div>
          </div>
        ))}
      </div>

      {/* Meta */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Meta icon={Sparkles} label="Role" value={cs.role} />
        <Meta icon={Clock} label="Duration" value={cs.duration} />
        <Meta icon={Cpu} label="Platform" value={cs.platform} />
        <Meta icon={Wrench} label="Tools">
          <div className="flex flex-wrap gap-1.5">
            {cs.tools.map((t) => (
              <span key={t} className="text-[11px] px-2 py-0.5" style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)', borderRadius: 2 }}>{t}</span>
            ))}
          </div>
        </Meta>
      </div>

      {/* Overview */}
      <SectionLabel>Overview</SectionLabel>
      {cs.overview.map((p, i) => (
        <p key={i} className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{p}</p>
      ))}

      {/* Challenge */}
      <SectionLabel>The Challenge</SectionLabel>
      <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.challenge.lead}</p>
      <p className="mt-3 text-[13px]" style={{ color: 'var(--muted)' }}>{cs.challenge.body}</p>
      <ul className="mt-2 space-y-1 text-[14px]" style={{ color: 'var(--amber)' }}>
        {cs.challenge.items.map((it, i) => (<li key={i} className="flex gap-2"><span style={{ color: 'var(--amber-2)' }}>›</span>{it}</li>))}
      </ul>

      {/* Research */}
      <SectionLabel>Research & Insights</SectionLabel>
      <p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>While studying existing infotainment systems, four recurring problems became clear:</p>
      <div className="mt-3 grid md:grid-cols-2 gap-2">
        {cs.research.map((r, i) => (
          <div key={i} className="px-4 py-3 hover-lift" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
            <div className="text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>{r.title}</div>
            <div className="mt-1 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{r.text}</div>
          </div>
        ))}
      </div>

      {/* Key insight callout */}
      <div className="mt-5 rounded-sm p-5 md:p-6" style={{ background: 'var(--amber)', color: '#0a0704' }}>
        <div className="text-[10px] mb-2" style={{ letterSpacing: '0.2em', opacity: 0.7 }}>KEY INSIGHT</div>
        <div className="font-bold leading-[1.15]" style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}>{cs.insight}</div>
      </div>

      {/* Design Principles */}
      <SectionLabel>Design Principles</SectionLabel>
      <p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>Everything in the experience followed four simple principles.</p>
      <div className="mt-3 grid md:grid-cols-2 gap-2">
        {cs.principles.map((p, i) => {
          const Icon = PRINCIPLE_ICONS[p.icon] || Sparkles;
          return (
            <div key={i} className="px-4 py-3 hover-lift" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
              <div className="flex items-center gap-2 text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>
                <Icon size={14} strokeWidth={1.75} />
                <span>{p.title}</span>
              </div>
              <div className="mt-1 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{p.text}</div>
            </div>
          );
        })}
      </div>

      {/* Exploration */}
      <SectionLabel>Exploration</SectionLabel>
      <p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>I explored several interaction models before arriving at the final direction.</p>
      <div className="mt-3 space-y-2">
        {cs.exploration.map((ex, i) => (
          <div
            key={i}
            className="px-4 py-3 flex items-start gap-3"
            style={{
              border: `1px solid ${ex.ok ? 'var(--amber)' : 'rgba(245,165,36,0.28)'}`,
              background: ex.ok ? 'rgba(245,165,36,0.06)' : 'transparent',
              borderRadius: 2
            }}
          >
            <div
              className="shrink-0 mt-0.5 inline-flex items-center justify-center"
              style={{ width: 18, height: 18, borderRadius: 99, background: ex.ok ? '#22c55e' : 'rgba(239,68,68,0.9)', color: '#0a0704' }}
            >
              {ex.ok ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-semibold" style={{ color: ex.ok ? 'var(--amber-2)' : 'var(--amber)' }}>{ex.title}</div>
              <div className="mt-0.5 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{ex.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Solution */}
      <SectionLabel>Final Solution</SectionLabel>
      <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.finalSolution.lead}</p>
      <p className="mt-3 text-[13px]" style={{ color: 'var(--muted)' }}>{cs.finalSolution.body}</p>
      <ul className="mt-2 space-y-1 text-[14px]" style={{ color: 'var(--amber)' }}>
        {cs.finalSolution.items.map((it, i) => (<li key={i} className="flex gap-2"><span style={{ color: 'var(--amber-2)' }}>›</span>{it}</li>))}
      </ul>
      <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.finalSolution.close}</p>
      <div className="mt-4">
        <div className="text-[13px]" style={{ color: 'var(--muted)' }}>{cs.finalSolution.distraction.title}</div>
        <ul className="mt-2 space-y-1 text-[14px]" style={{ color: 'var(--amber)' }}>
          {cs.finalSolution.distraction.items.map((it, i) => (<li key={i} className="flex gap-2"><span style={{ color: 'var(--amber-2)' }}>›</span>{it}</li>))}
        </ul>
      </div>

      {/* Key Takeaways */}
      <SectionLabel>Key Takeaways</SectionLabel>
      <p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>{cs.takeaway.lead}</p>
      <blockquote className="mt-2 pl-4 py-2" style={{ borderLeft: '2px solid var(--amber)' }}>
        <div className="text-[16px] leading-relaxed" style={{ color: 'var(--amber-2)' }}>{cs.takeaway.quote}</div>
      </blockquote>
      <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.takeaway.body}</p>

      {/* What I'd improve */}
      <SectionLabel>What I&apos;d Improve</SectionLabel>
      <p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>If I continued this concept, I would focus on:</p>
      <ul className="mt-2 space-y-1 text-[14px] mb-3" style={{ color: 'var(--amber)' }}>
        {cs.improvements.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            <ArrowRight size={13} className="mt-1 shrink-0" style={{ color: 'var(--amber-2)' }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SimpleCaseStudy({ cs }) {
  return (
    <div className="mt-4">
      <h1 className="font-bold leading-[1.1] hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(22px, 2vw, 30px)' }}>{cs.title}</h1>
      <div className="mt-1 text-[12px]" style={{ color: 'var(--muted)', letterSpacing: '0.12em' }}>{cs.category} · {cs.role}</div>
      <ul className="mt-4 space-y-1.5 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
        {cs.bullets.map((b, i) => (<li key={i} className="flex gap-2"><span style={{ color: 'var(--amber-2)' }}>›</span>{b}</li>))}
      </ul>
      <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />
      <p className="text-[14px]" style={{ color: 'var(--amber)' }}>{cs.caption}</p>
      <div className="mt-5 flex items-center gap-2 flex-wrap">
        {cs.tags.map((t) => (
          <span key={t} className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>{t}</span>
        ))}
      </div>
      <div className="mt-5 text-[12px] px-3 py-2 inline-flex items-center gap-2" style={{ border: '1px dashed rgba(245,165,36,0.45)', color: 'var(--muted)', borderRadius: 2 }}>
        <Sparkles size={12} /> Detailed case study coming soon
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mt-6 mb-1 flex items-center gap-3">
      <span className="text-[11px] font-semibold" style={{ color: 'var(--amber-2)', letterSpacing: '0.22em' }}>
        {String(children).toUpperCase()}
      </span>
      <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />
    </div>
  );
}

function Meta({ icon: Icon, label, value, children }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[10px] mb-1" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>
        <Icon size={11} />
        <span>{label.toUpperCase()}</span>
      </div>
      {value ? (
        <div className="text-[14px]" style={{ color: 'var(--amber-2)' }}>{value}</div>
      ) : children}
    </div>
  );
}
