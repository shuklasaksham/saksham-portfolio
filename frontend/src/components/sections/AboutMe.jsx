import React from 'react';
import { stats, profile } from '../../data/mock';
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
      className="leading-[0.85] text-[14px] md:text-[16px] select-none"
      style={{ color: '#0a0704', fontFamily: 'VT323, IBM Plex Mono, monospace', letterSpacing: '0.02em' }}
    >
      {rows.join('\n')}
    </pre>
  );
}

export default function AboutMe() {
  return (
    <section className="px-6 md:px-10 lg:px-12 py-8 min-h-full">
      <div className="mb-4 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">ABOUT ME</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
      </div>

      <div className="rounded-md p-6 md:p-8" style={{ background: 'var(--amber)', color: '#0a0704' }}>
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="shrink-0 rounded-sm p-2" style={{ background: 'rgba(10,7,4,0.08)', border: '1px solid rgba(10,7,4,0.35)' }}>
            <AsciiAvatar />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-[18px] md:text-[20px] font-semibold">
                <span>{profile.handle}</span>
                <Eye size={16} />
                <span className="font-normal">L</span>
                <span className="font-normal">∽</span>
              </div>
              <div className="text-[13px] italic">{profile.joined}</div>
            </div>
            <div className="mt-8 text-[20px] md:text-[24px] leading-snug">{profile.bio}</div>
          </div>
        </div>

        <div className="my-6 h-px w-full" style={{ background: 'rgba(10,7,4,0.35)' }} />

        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-6 text-[15px]">
            <div><span className="font-bold">{profile.followers.toLocaleString()}</span> Followers</div>
            <div><span className="font-bold">{profile.following}</span> Following</div>
          </div>
          <div className="flex items-center gap-3">
            <ActionBtn label="[P] Portfolio" />
            <ActionBtn label="[C] Contact" />
            <ActionBtn label="[F] Follow" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <TabBtn label="Posts" active />
        <TabBtn label="Replies" />
        <TabBtn label="Bookmarks" />
      </div>

      <div className="mt-4 rounded-sm p-5 md:p-6" style={{ border: '1px solid var(--amber)' }}>
        <div className="flex items-center justify-between flex-wrap gap-2 text-[13px]" style={{ color: 'var(--amber)' }}>
          <div className="flex items-center gap-2">
            <span>{profile.handle}</span>
            <Eye size={13} />
            <span>L</span>
            <span>∽</span>
          </div>
          <div className="opacity-80">now • pinned • <span style={{ color: 'var(--amber-2)' }}>featured</span></div>
        </div>

        <div className="mt-4">
          <a href="#" className="text-[16px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
            V2026.1 — A little about me
          </a>
        </div>

        <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed" style={{ color: 'var(--amber)' }}>
          <li>• Product designer with {stats[0].value} years shipping real interfaces</li>
          <li>• Delivered {stats[1].value} projects across {stats[2].value} clients — automotive, audio, AI</li>
          <li>• Currently obsessed with terminal UIs, voice agents and spatial design</li>
          <li>• Based in New Delhi, working remotely with teams in SF, Seoul and Berlin</li>
        </ul>

        <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

        <div className="text-[14px]" style={{ color: 'var(--amber)' }}>
          Scroll to explore — or press <span className="font-bold">[W]</span> Work, <span className="font-bold">[I]</span> Illustrations, <span className="font-bold">[E]</span> Experience, <span className="font-bold">[S]</span> Skills, <span className="font-bold">[C]</span> Contact.
        </div>

        <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--amber)' }}>[↵]</span> Open&nbsp;&nbsp;
            <span style={{ color: 'var(--amber)' }}>[S]</span> Save
          </div>
          <div className="flex items-center gap-2">
            <Chip label="designer" />
            <Chip label="cyberos" />
            <Chip label="portfolio" />
            <Flag size={14} style={{ color: 'var(--amber)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionBtn({ label }) {
  return (
    <button className="px-3 py-1.5 text-[14px] font-medium" style={{ border: '1px solid rgba(10,7,4,0.55)', color: '#0a0704', borderRadius: 2, background: 'transparent' }}>
      {label}
    </button>
  );
}
function TabBtn({ label, active }) {
  return (
    <button className="px-4 py-2 text-[14px] font-medium" style={{ border: `1px solid ${active ? 'var(--amber-2)' : 'rgba(245,165,36,0.45)'}`, color: active ? 'var(--amber-2)' : 'var(--amber)', borderRadius: 2, background: 'transparent', boxShadow: active ? '0 0 0 1px rgba(245,165,36,0.35)' : 'none' }}>
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
