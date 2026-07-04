import React from 'react';
import { profile } from '../../data/mock';
import { Eye, Flag } from 'lucide-react';

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
      className="leading-[0.85] text-[13px] md:text-[14px] select-none"
      style={{ color: '#0a0704', fontFamily: 'VT323, IBM Plex Mono, monospace', letterSpacing: '0.02em' }}
    >
      {rows.join('\n')}
    </pre>
  );
}

const STATS = [
  { value: '4.5+', label: 'Years Experience' },
  { value: '3', label: 'Products Shipped' },
  { value: '2', label: 'Global Companies' },
  { value: '1', label: 'AI Product Built' }
];

export default function AboutMe() {
  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-12 py-6 flex flex-col">
      <div className="rounded-md p-5 md:p-6" style={{ background: 'var(--amber)', color: '#0a0704' }}>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="shrink-0 rounded-sm p-2" style={{ background: 'rgba(10,7,4,0.08)', border: '1px solid rgba(10,7,4,0.35)' }}>
            <AsciiAvatar />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-[17px] md:text-[19px] font-semibold">
                <span>{profile.handle}</span>
                <Eye size={15} />
                <span className="font-normal">L</span>
                <span className="font-normal">∽</span>
              </div>
              <div className="text-[12px] italic">{profile.joined}</div>
            </div>
            <div className="mt-3 text-[14px] leading-snug">Product Designer · Verizon · Building Bracket (AI Decision OS)</div>
            <div className="mt-4 flex items-center gap-5 text-[13px] flex-wrap">
              <div><span className="font-bold">{profile.followers.toLocaleString()}</span> Followers</div>
              <div><span className="font-bold">{profile.following}</span> Following</div>
              <div className="flex items-center gap-2 ml-auto">
                <ActionBtn label="[P] Portfolio" />
                <ActionBtn label="[C] Contact" />
                <ActionBtn label="[F] Follow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-sm p-5 md:p-6 flex-1 min-h-0 overflow-hidden flex flex-col" style={{ border: '1px solid var(--amber)' }}>
        <div className="flex items-center justify-between flex-wrap gap-2 text-[13px]" style={{ color: 'var(--amber)' }}>
          <div className="flex items-center gap-2">
            <span>{profile.handle}</span>
            <Eye size={13} />
            <span>L</span>
            <span>∽</span>
          </div>
          <div className="opacity-80">now • pinned • <span style={{ color: 'var(--amber-2)' }}>featured</span></div>
        </div>

        <div className="mt-3">
          <a href="#" className="text-[15px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
            V2026.1 — A little about me
          </a>
        </div>

        <h1 className="mt-3 font-bold leading-[1.1] hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(24px, 2.4vw, 36px)', letterSpacing: '-0.01em' }}>
          Designing products that simplify complexity.
        </h1>

        <p className="mt-3 text-[14px] leading-relaxed max-w-4xl" style={{ color: 'var(--amber)' }}>
          I&apos;m Saksham, a Product Designer with 4.5+ years of experience creating enterprise and AI-powered products across telecom and automotive. Currently at Verizon, and building <span className="underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>Bracket</span> — an AI Decision OS that transforms messy briefs into structured decisions, documentation, and collaborative workflows.
        </p>
        <p className="mt-2 text-[14px] leading-relaxed max-w-4xl" style={{ color: 'var(--amber)' }}>
          I enjoy turning ambiguity into intuitive experiences through product thinking, systems design, and thoughtful interaction.
        </p>

        <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-3" style={{ border: '1px solid rgba(245,165,36,0.45)', borderRadius: 2 }}>
              <div className="font-bold hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(24px, 2vw, 32px)', lineHeight: 1 }}>
                {s.value}
              </div>
              <div className="mt-1.5 text-[12px]" style={{ color: 'var(--amber)', letterSpacing: '0.02em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1" />

        <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--amber)' }}>[↵]</span> Open&nbsp;&nbsp;
            <span style={{ color: 'var(--amber)' }}>[S]</span> Save
          </div>
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

function ActionBtn({ label }) {
  return (
    <button className="px-3 py-1.5 text-[13px] font-medium" style={{ border: '1px solid rgba(10,7,4,0.55)', color: '#0a0704', borderRadius: 2, background: 'transparent' }}>
      {label}
    </button>
  );
}
function Chip({ label }) {
  return (
    <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>
      {label}
    </span>
  );
}
