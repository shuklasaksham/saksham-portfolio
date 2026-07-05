import React, { useEffect, useState } from 'react';
import { toolStack, principles, currentStatus } from '../../data/mock';
import { usePeekTarget } from '../../context/PeekContext';
import { PenTool, Terminal, Frame, FileText, GitBranch, Video, Layers, Grid3x3, Copy, ArrowUpRight, Check } from 'lucide-react';

const ICONS = { PenTool, Terminal, Frame, FileText, GitBranch, Video, Layers, Grid3x3 };

const BRACKET_URL = 'https://use-bracket.com/';

// Individual peek-aware Workbench chip
function WorkbenchChip({ t }) {
  const Icon = ICONS[t.icon];
  const peekClass = usePeekTarget(t.name);
  return (
    <span
      className={`chip cursor-pointer inline-flex items-center gap-1.5 px-2 py-1 text-[11px] relative ${peekClass}`}
      style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)', borderRadius: 2 }}
      title={t.proficiency ? `${t.name} · ${t.proficiency}` : t.name}
      data-testid={`workbench-chip-${t.name.toLowerCase()}`}
    >
      {Icon && <Icon size={11} strokeWidth={1.75} className="icon-wobble" />}
      {t.name}
    </span>
  );
}

// Individual peek-aware Principle row
function PrincipleRow({ p }) {
  const peekClass = usePeekTarget(`${p.title} ${p.text || ''}`);
  return (
    <li className={`flex items-start gap-3 ${peekClass}`} data-testid={`principle-${p.n}`}>
      <span className="text-[11px] pt-0.5" style={{ color: 'var(--muted)' }}>{p.n}</span>
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-semibold" style={{ color: 'var(--amber-2)' }}>{p.title}</div>
        <div className="text-[11px] leading-relaxed" style={{ color: 'var(--amber)' }}>{p.text}</div>
      </div>
    </li>
  );
}

// Inline anchor for the "Bracket" product noun
function BracketLink({ children = 'Bracket', className = '' }) {
  return (
    <a
      href={BRACKET_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="bracket-link"
      className={`link-amber font-semibold ${className}`}
    >
      {children}
    </a>
  );
}

// Replace the first plain "Bracket" occurrence in a string with an inline hyperlink
function renderWithBracketLink(text) {
  const parts = text.split(/(Bracket)/);
  return parts.map((p, i) =>
    p === 'Bracket' ? <BracketLink key={i}>Bracket</BracketLink> : <React.Fragment key={i}>{p}</React.Fragment>
  );
}

function PixelAvatar() {
  return (
    <img
      src="/crab-avatar.png"
      alt="Saksham pixel avatar"
      draggable={false}
      className="block select-none"
      data-testid="about-me-avatar"
      style={{
        width: 96,
        height: 96,
        imageRendering: 'pixelated'
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
      await navigator.clipboard.writeText('shuklasaksham01@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (_) {}
  };

  return (
    <section className="xl:h-full w-full xl:overflow-hidden px-4 sm:px-6 md:px-10 lg:px-12 py-4 md:py-6 flex flex-col gap-4">
      {/* Solid amber statement block */}
      <div className="rounded-md p-4 sm:p-5 md:p-6" style={{ background: 'var(--amber)', color: '#0a0704' }}>
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="shrink-0">
            <PixelAvatar />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold leading-[1.05]" style={{ fontSize: 'clamp(20px, 4.5vw, 36px)', letterSpacing: '-0.01em' }}>
              Designing products that simplify complexity.
              <span
                aria-hidden
                className="inline-block ml-1 align-baseline"
                style={{ width: '0.55ch', height: '0.9em', background: '#0a0704', opacity: showCaret ? 1 : 0, transform: 'translateY(2px)' }}
              />
            </h1>
            <div className="mt-3 flex items-center flex-wrap gap-2 sm:gap-3 text-[12px] sm:text-[13px]">
              <span className="inline-flex items-center gap-2 px-2 py-0.5" style={{ background: '#0a0704', color: 'var(--amber)', borderRadius: 2 }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: 'var(--amber)' }} />
                Product Designer
              </span>
              <span className="opacity-80">Simplifying complexity, one pixel at a time.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body: two columns */}
      <div className="grid lg:grid-cols-12 gap-4 xl:flex-1 xl:min-h-0">
        {/* Left: Bio + Stats */}
        <div className="lg:col-span-7 rounded-sm p-4 sm:p-5 md:p-6 flex flex-col xl:min-h-0 xl:overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
          <p className="text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
            I&apos;m Saksham, a Product Designer with 4.5+ years of experience creating enterprise and AI-powered products across telecom and automotive. Currently at Verizon, and building <BracketLink /> — an AI Decision OS that transforms messy briefs into structured decisions, documentation, and collaborative workflows.
          </p>
          <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
            I enjoy turning ambiguity into intuitive experiences through product thinking, systems design, and thoughtful interaction.
          </p>

          <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 stagger">
            {STATS.map((s) => (
              <div key={s.label} className="hover-lift px-3 py-3" style={{ border: '1px solid rgba(245,165,36,0.45)', borderRadius: 2 }}>
                <div className="font-bold hard-glow boot-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(22px, 1.9vw, 30px)', lineHeight: 1 }}>
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
              data-testid="copy-email-btn"
              className="press inline-flex items-center gap-2 px-3 py-2 text-[12px] font-semibold"
              style={{ background: 'var(--amber)', color: '#0a0704', borderRadius: 2 }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Copied — shuklasaksham01@gmail.com' : 'Copy email'}
            </button>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="press chip inline-flex items-center gap-2 px-3 py-2 text-[12px]"
              style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}
            >
              Contact <ArrowUpRight size={13} />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('work')}
              className="press chip inline-flex items-center gap-2 px-3 py-2 text-[12px]"
              style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}
            >
              See work <ArrowUpRight size={13} />
            </button>
          </div>
        </div>

        {/* Right: Currently + Tool stack + Principles */}
        <div className="lg:col-span-5 flex flex-col gap-3 xl:min-h-0">
          {/* Currently */}
          <div className="card-hover rounded-sm p-4" style={{ border: '1px solid var(--amber)' }}>
            <div className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              <span>CURRENTLY — LIVE</span>
            </div>
            <div className="mt-2 text-[14px] font-semibold" style={{ color: 'var(--amber-2)' }}>{renderWithBracketLink(currentStatus.headline)}</div>
            <div className="mt-1 text-[12px] leading-relaxed" style={{ color: 'var(--amber)' }}>{currentStatus.detail}</div>
            <div className="mt-2 flex items-center flex-wrap gap-2 text-[11px]" style={{ color: 'var(--muted)' }}>
              <span className="px-2 py-0.5" style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)', borderRadius: 2 }}>{currentStatus.availability}</span>
              <span>{currentStatus.responseTime}</span>
            </div>
          </div>

          {/* Tool stack */}
          <div className="card-hover rounded-sm p-4" style={{ border: '1px solid var(--amber)' }}>
            <div className="text-[11px] mb-2 flex items-center justify-between" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>
              <span>WORKBENCH</span>
              <span className="text-[10px] opacity-70">HOVER TO INSPECT</span>
            </div>
            <div className="flex flex-wrap gap-1.5 stagger">
              {toolStack.map((t) => (
                <WorkbenchChip key={t.name} t={t} />
              ))}
            </div>
          </div>

          {/* Principles */}
          <div className="card-hover rounded-sm p-4 xl:flex-1 xl:min-h-0 flex flex-col" style={{ border: '1px solid var(--amber)' }}>
            <div className="text-[11px] mb-2" style={{ color: 'var(--muted-2)', letterSpacing: '0.18em' }}>PRINCIPLES</div>
            <ul className="space-y-2 xl:flex-1 xl:min-h-0 xl:overflow-hidden stagger">
              {principles.map((p) => (
                <PrincipleRow key={p.n} p={p} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
