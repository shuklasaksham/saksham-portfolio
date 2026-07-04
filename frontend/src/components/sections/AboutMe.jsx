import React from 'react';
import { Flag } from 'lucide-react';

function AsciiAvatar() {
  const rows = [
    '  ░░▓▓▓▓░░  ',
    ' ░▓▓████▓▓░ ',
    '░▓████████▓░',
    '░▓█░████░█▓░',
    '░▓████████▓░',
    '░▓██░░░░██▓░',
    '░▓████████▓░',
    ' ░▓▓████▓▓░ ',
    '  ░░▓▓▓▓░░  '
  ];
  return (
    <pre
      className="leading-[0.85] text-[14px] md:text-[16px] select-none"
      style={{ color: '#0a0704', fontFamily: 'VT323, IBM Plex Mono, monospace', letterSpacing: '0.02em' }}
    >
      {rows.join('\n')}
    </pre>
  );
}

const STATS = [
  { value: '4.5+', label: 'Years Experience' },
  { value: '30+', label: 'Products Shipped' },
  { value: '12', label: 'Clients' },
  { value: '1', label: 'AI Product Built' }
];

export default function AboutMe() {
  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-14 py-8 flex flex-col">
      {/* Solid amber statement block */}
      <div className="rounded-md p-6 md:p-8" style={{ background: 'var(--amber)', color: '#0a0704' }}>
        <div className="flex items-center gap-6">
          <div className="shrink-0 rounded-sm p-2" style={{ background: 'rgba(10,7,4,0.08)', border: '1px solid rgba(10,7,4,0.35)' }}>
            <AsciiAvatar />
          </div>
          <h1 className="font-bold leading-[1.05]" style={{ fontSize: 'clamp(26px, 2.6vw, 40px)', letterSpacing: '-0.01em' }}>
            Designing products that simplify complexity.
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="mt-5 rounded-sm p-6 md:p-8 flex-1 min-h-0 overflow-hidden flex flex-col" style={{ border: '1px solid var(--amber)' }}>
        <a href="#" className="text-[15px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
          V2026.1 — A little about me
        </a>

        <p className="mt-4 text-[15px] leading-relaxed max-w-4xl" style={{ color: 'var(--amber)' }}>
          I&apos;m Saksham, a Product Designer with 4.5+ years of experience creating enterprise and AI-powered products across telecom and automotive. Currently at Verizon, and building <span className="underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>Bracket</span> — an AI Decision OS that transforms messy briefs into structured decisions, documentation, and collaborative workflows.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed max-w-4xl" style={{ color: 'var(--amber)' }}>
          I enjoy turning ambiguity into intuitive experiences through product thinking, systems design, and thoughtful interaction.
        </p>

        <div className="my-6 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-4" style={{ border: '1px solid rgba(245,165,36,0.45)', borderRadius: 2 }}>
              <div className="font-bold hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(28px, 2.2vw, 38px)', lineHeight: 1 }}>
                {s.value}
              </div>
              <div className="mt-2 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.02em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1" />

        <div className="mt-5 flex items-center justify-end">
          <div className="flex items-center gap-2 flex-wrap">
            <Chip label="product-design" />
            <Chip label="ai" />
            <Chip label="telecom" />
            <Chip label="automotive" />
            <Flag size={14} style={{ color: 'var(--amber)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ label }) {
  return (
    <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>
      {label}
    </span>
  );
}
