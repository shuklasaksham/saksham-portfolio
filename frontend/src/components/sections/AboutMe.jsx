import React, { useEffect, useState } from 'react';
import { toolStack, principles, currentStatus } from '../../data/mock';
import { PenTool, Terminal, Frame, FileText, GitBranch, Video, Layers, Grid3x3, Copy, ArrowUpRight, Check } from 'lucide-react';

const ICONS = { PenTool, Terminal, Frame, FileText, GitBranch, Video, Layers, Grid3x3 };

function PixelAvatar() {
  return (
    <img
      src="https://customer-assets.emergentagent.com/job_saksham-design-1/artifacts/d43v3wwa_crab.png"
      alt="Saksham pixel avatar"
      draggable={false}
      className="block select-none"
      style={{
        width: 96,
        height: 96,
        imageRendering: 'pixelated',
        filter: 'brightness(0) saturate(100%)'
      }}
    />
  );
}

const STATS = [
  { value: '4.5+', label: 'Years Experience' },
  { value: '30+', label: 'Products Shipped' },
  { value: '12', label: 'Clients' },
  { value: '1', label: 'AI Product Built' }
];

export default function AboutMe({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  // Small typing caret on the tagline
  const [showCaret, setShowCaret] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setShowCaret((v) => !v), 550);
    return () => clearInterval(t);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@saksham.design');
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (_) {}
  };

  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-12 py-6 flex flex-col gap-4">
      {/* Solid amber statement block */}
      <div className="rounded-md p-5 md:p-6" style={{ background: 'var(--amber)', color: '#0a0704' }}>
        <div className="flex items-center gap-5">
          <div className="shrink-0 rounded-sm p-2" style={{ background: 'rgba(10,7,4,0.08)', border: '1px solid rgba(10,7,4,0.35)' }}>
            <PixelAvatar />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold leading-[1.05]" style={{ fontSize: 'clamp(24px, 2.4vw, 36px)', letterSpacing: '-0.01em' }}>
              Designing products that simplify complexity.
              <span
                aria-hidden
                className="inline-block ml-1 align-baseline"
                style={{ width: '0.55ch', height: '0.9em', background: '#0a0704', opacity: showCaret ? 1 : 0, transform: 'translateY(2px)' }}
              />
            </h1>
            <div className="mt-3 flex items-center gap-3 text-[13px]">
              <span className="inline-flex items-center gap-2 px-2 py-0.5" style={{ background: 'rgba(10,7,4,0.12)', border: '1px solid rgba(10,7,4,0.35)', borderRadius: 2 }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#0a0704' }} />
                Product Designer
              </span>
              <span className="opacity-80">Simplifying complexity, one pixel at a time.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body: two columns */}
      <div className="grid lg:grid-cols-12 gap-4 flex-1 min-h-0">
        {/* Left: Bio + Stats */}
        <div className="lg:col-span-7 rounded-sm p-5 md:p-6 flex flex-col min-h-0 overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
          <p className="text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
            I&apos;m Saksham, a Product Designer with 4.5+ years of experience creating enterprise and AI-powered products across telecom and automotive. Currently at Verizon, and building <span className="underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>Bracket</span> — an AI Decision OS that transforms messy briefs into structured decisions, documentation, and collaborative workflows.
          </p>
          <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
            I enjoy turning ambiguity into intuitive experiences through product thinking, systems design, and thoughtful interaction.
          </p>

          <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {STATS.map((s) => (
              <div key={s.label} className="px-3 py-3" style={{ border: '1px solid rgba(245,165,36,0.45)', borderRadius: 2 }}>
                <div className="font-bold hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(22px, 1.9vw, 30px)', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div className="mt-1.5 text-[11px]" style={{ color: 'var(--amber)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1" />

          {/* Quick actions */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3 py-2 text-[12px] font-semibold"
              style={{ background: 'var(--amber)', color: '#0a0704', borderRadius: 2 }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Copied — hello@saksham.design' : 'Copy email'}
            </button>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="inline-flex items-center gap-2 px-3 py-2 text-[12px]"
              style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}
            >
              Contact <ArrowUpRight size={13} />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('work')}
              className="inline-flex items-center gap-2 px-3 py-2 text-[12px]"
              style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}
            >
              See work <ArrowUpRight size={13} />
            </button>
          </div>
        </div>

        {/* Right: Currently + Tool stack + Principles */}
        <div className="lg:col-span-5 flex flex-col gap-3 min-h-0">
          {/* Currently */}
          <div className="rounded-sm p-4" style={{ border: '1px solid var(--amber)' }}>
            <div className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span>CURRENTLY — LIVE</span>
            </div>
            <div className="mt-2 text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>{currentStatus.headline}</div>
            <div className="mt-1 text-[12px] leading-relaxed" style={{ color: 'var(--amber)' }}>{currentStatus.detail}</div>
            <div className="mt-2 flex items-center flex-wrap gap-2 text-[11px]" style={{ color: 'var(--muted)' }}>
              <span className="px-2 py-0.5" style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)', borderRadius: 2 }}>{currentStatus.availability}</span>
              <span>{currentStatus.responseTime}</span>
            </div>
          </div>

          {/* Tool stack */}
          <div className="rounded-sm p-4" style={{ border: '1px solid var(--amber)' }}>
            <div className="text-[11px] mb-2" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>WORKBENCH</div>
            <div className="flex flex-wrap gap-1.5">
              {toolStack.map((t) => {
                const Icon = ICONS[t.icon];
                return (
                  <span key={t.name} className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px]" style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)', borderRadius: 2 }}>
                    {Icon && <Icon size={11} strokeWidth={1.75} />}
                    {t.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Principles */}
          <div className="rounded-sm p-4 flex-1 min-h-0 flex flex-col" style={{ border: '1px solid var(--amber)' }}>
            <div className="text-[11px] mb-2" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>PRINCIPLES</div>
            <ul className="space-y-2 flex-1 min-h-0 overflow-hidden">
              {principles.map((p) => (
                <li key={p.n} className="flex items-start gap-3">
                  <span className="text-[11px] pt-0.5" style={{ color: 'var(--muted)' }}>{p.n}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold" style={{ color: 'var(--amber-2)' }}>{p.title}</div>
                    <div className="text-[11px] leading-relaxed" style={{ color: 'var(--amber)' }}>{p.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
