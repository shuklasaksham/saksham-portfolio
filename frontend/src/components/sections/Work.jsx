import React, { useEffect, useRef, useState } from 'react';
import { caseStudies } from '../../data/mock';
import { ChevronRight, Eye, Zap, BrainCircuit, Music, Check, X, ArrowRight, Sparkles, Wrench, Clock, Cpu, Database, Route, Bot, FileText, RefreshCw, LineChart, Users, Home, SlidersHorizontal, BarChart3, Store, Phone, Frown, HelpCircle, Search, Minimize2, DoorOpen, ExternalLink } from 'lucide-react';

const ICONS = { Eye, Zap, BrainCircuit, Music, Database, Sparkles, Route, Bot, FileText, RefreshCw, LineChart, Users, Home, SlidersHorizontal, BarChart3, Store, Phone, Frown, HelpCircle, Search, Minimize2, DoorOpen };

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
    <section className="xl:h-full w-full xl:overflow-hidden px-4 sm:px-6 md:px-10 lg:px-12 py-4 md:py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[12px] sm:text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">CASE STUDIES & PROJECTS</span>
        <span className="flex-1 h-px breathe" style={{ background: 'var(--amber)' }} />
        <span className="opacity-70 whitespace-nowrap">{caseStudies.length} of 30 shown</span>
      </div>

      <div className="xl:flex-1 xl:min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
        <div className="lg:col-span-4 rounded-sm overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
          <ul>
            {caseStudies.map((c) => {
              const isOn = selectedId === c.id;
              return (
                <li key={c.id}>
                  <button
                    onClick={() => setSelectedId(c.id)}
                    data-testid={`case-study-item-${c.id}`}
                    className="group w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-150 hover:pl-5"
                    style={{
                      background: isOn ? 'var(--amber)' : 'transparent',
                      color: isOn ? '#0a0704' : 'var(--amber)',
                      borderBottom: '1px solid rgba(245,165,36,0.25)'
                    }}
                    onMouseEnter={(e) => { if (!isOn) e.currentTarget.style.background = 'rgba(245,165,36,0.06)'; }}
                    onMouseLeave={(e) => { if (!isOn) e.currentTarget.style.background = 'transparent'; }}
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
                    <ChevronRight size={14} style={{ opacity: isOn ? 1 : 0.6, transition: 'transform 180ms ease' }} className="group-hover:translate-x-1" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <article ref={scrollerRef} className="lg:col-span-8 rounded-sm p-4 sm:p-5 md:p-6 flex flex-col xl:min-h-0 xl:overflow-y-auto" style={{ border: '1px solid var(--amber)' }}>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="text-[12px]" style={{ color: 'var(--muted-2)' }}>
              <span style={{ color: 'var(--amber)' }}>&gt;</span> Case study loaded.
              <span aria-hidden className="inline-block ml-1 align-baseline" style={{ width: '0.5ch', height: '0.85em', background: 'var(--amber)', opacity: dotOn ? 0.9 : 0, transform: 'translateY(1px)' }} />
            </div>
            {cs.openDesignsUrl && (
              <a
                href={cs.openDesignsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`open-designs-${cs.id}`}
                className="inline-flex items-center gap-2 text-[12px] font-semibold px-3 py-1.5"
                style={{ background: 'var(--amber)', color: '#0a0704', borderRadius: 2 }}
              >
                <ExternalLink size={13} strokeWidth={2} />
                {cs.openDesignsLabel || 'Open Designs'}
              </a>
            )}
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
  const hasBullets = cs.challenge && cs.challenge.items && cs.challenge.items.length > 0;
  const researchIsArray = Array.isArray(cs.research);

  return (
    <div className="mt-4">
      <h1 className="font-bold leading-[1.1] hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(24px, 2.3vw, 34px)' }}>
        {cs.id === 'bracket' ? (
          <a href="https://use-bracket.com/" target="_blank" rel="noopener noreferrer" data-testid="bracket-link" className="link-amber">{cs.title}</a>
        ) : cs.title}
      </h1>
      {cs.subtitle && (
        <p className="mt-2 text-[15px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.subtitle}</p>
      )}

      {cs.images && cs.images.length > 0 && (
        <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-3 stagger">
          {cs.images.map((img, i) => (
            <figure key={i} className="relative card-hover overflow-hidden" style={{ border: '1px solid rgba(245,165,36,0.45)', borderRadius: 4, background: '#050301' }}>
              {img.type === 'video' ? (
                <video
                  src={img.src}
                  poster={img.poster}
                  className="block w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  data-testid={`case-study-media-${cs.id}-${i}`}
                />
              ) : (
                <img
                  src={img.src}
                  alt={img.caption || 'case study image'}
                  className="block w-full h-auto"
                  data-testid={`case-study-media-${cs.id}-${i}`}
                />
              )}
              <figcaption className="absolute inset-x-0 bottom-0 px-2 py-1 text-[10px] flex items-center gap-2 pointer-events-none" style={{ color: 'var(--amber)', background: 'linear-gradient(180deg, transparent, rgba(5,5,5,0.9))', letterSpacing: '0.05em' }}>
                <span className="opacity-70">{img.type === 'video' ? 'VID' : 'IMG'}.{String(i + 1).padStart(2, '0')}</span>
                <span className="truncate">{img.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {cs.results && cs.results.length > 0 && (
        <>
          <SectionLabel>{cs.resultsLabel || 'Results'}</SectionLabel>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
            {cs.results.map((r) => (
              <div key={r.label} className="px-3 py-3 hover-lift" style={{ border: '1px solid rgba(245,165,36,0.45)', borderRadius: 2 }}>
                <div className="font-bold hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(20px, 1.7vw, 26px)', lineHeight: 1 }}>{r.value}</div>
                <div className="mt-1.5 text-[11px] leading-snug" style={{ color: 'var(--amber)' }}>{r.label}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Meta icon={Sparkles} label="Role" value={cs.role} />
        <Meta icon={Clock} label="Duration" value={cs.duration || cs.year} />
        <Meta icon={Cpu} label="Platform" value={cs.platform} />
        <Meta icon={Wrench} label="Tools">
          <div className="flex flex-wrap gap-1.5">
            {cs.tools && cs.tools.map((t) => (
              <span key={t} className="text-[11px] px-2 py-0.5" style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)', borderRadius: 2 }}>{t}</span>
            ))}
          </div>
        </Meta>
      </div>

      {cs.problem && (
        <>
          <SectionLabel>{cs.problem.label || 'The Problem'}</SectionLabel>
          <p className="mt-2 text-[15px] leading-relaxed font-semibold" style={{ color: 'var(--amber-2)' }}>{cs.problem.lead}</p>
          <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.problem.body}</p>
        </>
      )}

      {cs.overview && cs.overview.length > 0 && (
        <>
          <SectionLabel>Overview</SectionLabel>
          {cs.overview.map((p, i) => (
            <p key={i} className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{p}</p>
          ))}
        </>
      )}

      {cs.challenge && (
        <>
          <SectionLabel>The Challenge</SectionLabel>
          <p className="mt-2 text-[15px] leading-relaxed font-semibold" style={{ color: 'var(--amber-2)' }}>{cs.challenge.lead}</p>
          {cs.challenge.paragraphs && cs.challenge.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{p}</p>
          ))}
          {hasBullets && (
            <>
              <p className="mt-3 text-[13px]" style={{ color: 'var(--muted)' }}>{cs.challenge.body}</p>
              <ul className="mt-2 space-y-1 text-[14px]" style={{ color: 'var(--amber)' }}>
                {cs.challenge.items.map((it, i) => (<li key={i} className="flex gap-2"><span style={{ color: 'var(--amber-2)' }}>›</span>{it}</li>))}
              </ul>
            </>
          )}
        </>
      )}

      {cs.research && (
        <>
          <SectionLabel>{cs.researchLabel || 'Research & Insights'}</SectionLabel>
          {researchIsArray ? (
            <div className="mt-3 grid md:grid-cols-2 gap-2">
              {cs.research.map((r, i) => {
                const Icon = r.icon ? (ICONS[r.icon] || Sparkles) : null;
                return (
                  <div key={i} className="px-4 py-3 hover-lift" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
                    <div className="flex items-center gap-2 text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>
                      {Icon && <Icon size={14} strokeWidth={1.75} />}
                      <span>{r.title}</span>
                    </div>
                    <div className="mt-1 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{r.text}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {cs.research.intro && (<p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.research.intro}</p>)}
              {cs.research.paragraphs && cs.research.paragraphs.map((p, i) => (
                <p key={i} className="mt-1.5 text-[15px] leading-relaxed" style={{ color: 'var(--amber-2)', fontWeight: 500 }}>{p}</p>
              ))}
              {cs.research.listLead && (<p className="mt-3 text-[13px]" style={{ color: 'var(--muted)' }}>{cs.research.listLead}</p>)}
              {cs.research.items && cs.research.items.length > 0 && (
                <ul className="mt-2 space-y-1 text-[14px]" style={{ color: 'var(--amber)' }}>
                  {cs.research.items.map((it, i) => (<li key={i} className="flex gap-2"><span style={{ color: 'var(--amber-2)' }}>›</span>{it}</li>))}
                </ul>
              )}
            </>
          )}
        </>
      )}

      {cs.targetUser && (
        <>
          <SectionLabel>{cs.targetUser.label || 'Who I Was Designing For'}</SectionLabel>
          <p className="mt-2 text-[15px] leading-relaxed font-semibold" style={{ color: 'var(--amber-2)' }}>{cs.targetUser.lead}</p>
          <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.targetUser.body}</p>
        </>
      )}

      {cs.insight && (
        <div className="mt-6 rounded-sm p-5 md:p-6" style={{ background: 'var(--amber)', color: '#0a0704' }}>
          <div className="text-[10px] mb-2" style={{ letterSpacing: '0.2em', opacity: 0.7 }}>{(cs.insightLabel || 'Key Insight').toUpperCase()}</div>
          <div className="font-bold leading-[1.15]" style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}>{cs.insight}</div>
        </div>
      )}
      {cs.insightBody && (
        <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.insightBody}</p>
      )}

      {cs.principles && cs.principles.length > 0 && (
        <>
          <SectionLabel>{cs.principlesLabel || 'Design Principles'}</SectionLabel>
          {cs.principlesIntro && (<p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>{cs.principlesIntro}</p>)}
          <div className="mt-3 grid md:grid-cols-2 gap-2">
            {cs.principles.map((p, i) => {
              const Icon = ICONS[p.icon] || Sparkles;
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
        </>
      )}

      {cs.exploration && cs.exploration.length > 0 && (
        <>
          <SectionLabel>{cs.explorationLabel || 'Exploration'}</SectionLabel>
          <p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>{cs.explorationIntro || 'I explored several interaction models before arriving at the final direction.'}</p>
          <div className="mt-3 space-y-2">
            {cs.exploration.map((ex, i) => (
              <div key={i} className="px-4 py-3 flex items-start gap-3" style={{ border: `1px solid ${ex.ok ? 'var(--amber)' : 'rgba(245,165,36,0.28)'}`, background: ex.ok ? 'rgba(245,165,36,0.06)' : 'transparent', borderRadius: 2 }}>
                <div className="shrink-0 mt-0.5 inline-flex items-center justify-center" style={{ width: 18, height: 18, borderRadius: 99, background: ex.ok ? '#22c55e' : 'rgba(239,68,68,0.9)', color: '#0a0704' }}>
                  {ex.ok ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-semibold" style={{ color: ex.ok ? 'var(--amber-2)' : 'var(--amber)' }}>{ex.title}</div>
                  <div className="mt-0.5 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{ex.text}</div>
                  {ex.why && (
                    <div className="mt-2 text-[12px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                      <span className="font-semibold" style={{ color: ex.ok ? '#22c55e' : 'rgba(239,68,68,0.9)' }}>{ex.whyLabel || (ex.ok ? 'Why selected' : 'Why rejected')}:</span> {ex.why}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {cs.coreDecisions && cs.coreDecisions.length > 0 && (
        <>
          <SectionLabel>Core Decisions</SectionLabel>
          <div className="mt-3 space-y-3">
            {cs.coreDecisions.map((d, i) => (
              <div key={i} className="px-4 py-4" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
                <div className="text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>{d.title}</div>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{d.body}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {cs.aiInteraction && (
        <>
          <SectionLabel>{cs.aiInteraction.title || 'AI Interaction Design'}</SectionLabel>
          {cs.aiInteraction.subtitle && (
            <p className="mt-2 text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>{cs.aiInteraction.subtitle}</p>
          )}
          <p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.aiInteraction.body}</p>
        </>
      )}

      {cs.finalSolution && (
        <>
          <SectionLabel>{cs.finalSolutionLabel || 'Final Solution'}</SectionLabel>
          {cs.finalSolution.lead && (<p className="mt-2 text-[15px] leading-relaxed font-semibold" style={{ color: 'var(--amber-2)' }}>{cs.finalSolution.lead}</p>)}
          {cs.finalSolution.body && (<p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.finalSolution.body}</p>)}

          {cs.finalSolution.workflow && (
            <div className="mt-4 flex items-center flex-wrap gap-1.5 text-[13px]">
              {cs.finalSolution.workflow.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="px-3 py-1.5" style={{ border: '1px solid var(--amber)', color: 'var(--amber-2)', borderRadius: 2, fontWeight: 600 }}>{step}</span>
                  {i < cs.finalSolution.workflow.length - 1 && <ArrowRight size={14} style={{ color: 'var(--amber)' }} />}
                </React.Fragment>
              ))}
            </div>
          )}

          {cs.finalSolution.items && (
            <>
              <p className="mt-3 text-[13px]" style={{ color: 'var(--muted)' }}>The experience introduces:</p>
              <ul className="mt-2 space-y-1 text-[14px]" style={{ color: 'var(--amber)' }}>
                {cs.finalSolution.items.map((it, i) => (<li key={i} className="flex gap-2"><span style={{ color: 'var(--amber-2)' }}>›</span>{it}</li>))}
              </ul>
            </>
          )}
          {cs.finalSolution.close && (<p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.finalSolution.close}</p>)}
          {cs.finalSolution.distraction && (
            <div className="mt-4">
              <div className="text-[13px]" style={{ color: 'var(--muted)' }}>{cs.finalSolution.distraction.title}</div>
              <ul className="mt-2 space-y-1 text-[14px]" style={{ color: 'var(--amber)' }}>
                {cs.finalSolution.distraction.items.map((it, i) => (<li key={i} className="flex gap-2"><span style={{ color: 'var(--amber-2)' }}>›</span>{it}</li>))}
              </ul>
            </div>
          )}
        </>
      )}

      {cs.finalUI && (
        <>
          <SectionLabel>{cs.finalUI.title || 'Final UI'}</SectionLabel>
          <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.finalUI.body}</p>
        </>
      )}

      {cs.impactNarrative && (
        <>
          <SectionLabel>{cs.impactNarrative.title || 'Impact'}</SectionLabel>
          {cs.impactNarrative.subtitle && (
            <p className="mt-2 text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>{cs.impactNarrative.subtitle}</p>
          )}
          <p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.impactNarrative.body}</p>
        </>
      )}

      {cs.features && cs.features.length > 0 && (
        <>
          <SectionLabel>Core Features</SectionLabel>
          <div className="mt-3 grid md:grid-cols-2 gap-2">
            {cs.features.map((f, i) => {
              const Icon = ICONS[f.icon] || Sparkles;
              return (
                <div key={i} className="px-4 py-3 hover-lift" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
                  <div className="flex items-center gap-2 text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>
                    <Icon size={14} strokeWidth={1.75} />
                    <span>{f.title}</span>
                  </div>
                  <div className="mt-1 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{f.text}</div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {cs.keyFeatures && cs.keyFeatures.length > 0 && (
        <>
          <SectionLabel>{cs.keyFeaturesLabel || 'Key Features'}</SectionLabel>
          <div className="mt-3 space-y-2">
            {cs.keyFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
                <span className="shrink-0 text-[11px] font-bold hard-glow" style={{ color: 'var(--amber-2)', letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{f}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {cs.learnings && cs.learnings.items && (
        <>
          <SectionLabel>{cs.learnings.title || 'What I Learned'}</SectionLabel>
          {cs.learnings.intro && (<p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>{cs.learnings.intro}</p>)}
          <div className="mt-3 space-y-3">
            {cs.learnings.items.map((l, i) => (
              <div key={i} className="px-4 py-4" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
                <div className="text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>{l.title}</div>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--amber)' }}>{l.body}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {cs.takeaway && !cs.learnings && (
        <>
          <SectionLabel>{cs.takeawayLabel || 'Key Takeaways'}</SectionLabel>
          {cs.takeaway.lead && <p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>{cs.takeaway.lead}</p>}
          {cs.takeaway.quote && (
            <blockquote className="mt-2 pl-4 py-2" style={{ borderLeft: '2px solid var(--amber)' }}>
              <div className="text-[16px] leading-relaxed" style={{ color: 'var(--amber-2)' }}>{cs.takeaway.quote}</div>
            </blockquote>
          )}
          {cs.takeaway.body && <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{cs.takeaway.body}</p>}
          {cs.takeaway.paragraphs && cs.takeaway.paragraphs.map((p, i) => (
            <p key={i} className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>{p}</p>
          ))}
        </>
      )}

      {cs.improvements && cs.improvements.length > 0 && (
        <>
          <SectionLabel>{cs.improvementsLabel || "What I'd Improve"}</SectionLabel>
          {cs.improvementsIntro && (<p className="mt-2 text-[13px]" style={{ color: 'var(--muted)' }}>{cs.improvementsIntro}</p>)}
          <ul className="mt-2 space-y-1 text-[14px] mb-3" style={{ color: 'var(--amber)' }}>
            {cs.improvements.map((it, i) => (
              <li key={i} className="flex items-start gap-2">
                <ArrowRight size={13} className="mt-1 shrink-0" style={{ color: 'var(--amber-2)' }} />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </>
      )}
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
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mt-6 mb-1 flex items-center gap-3">
      <span className="text-[11px] font-semibold" style={{ color: 'var(--amber-2)', letterSpacing: '0.22em' }}>{String(children).toUpperCase()}</span>
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
      {value ? (<div className="text-[14px]" style={{ color: 'var(--amber-2)' }}>{value}</div>) : children}
    </div>
  );
}
