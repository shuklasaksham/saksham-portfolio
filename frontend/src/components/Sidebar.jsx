import React from 'react';
import { navItems, socials } from '../data/mock';
import { Terminal, Power, Settings, Menu, LogOut, Github } from 'lucide-react';

export default function Sidebar({ active, onNavigate, booting }) {
  return (
    <aside
      className="hidden md:flex flex-col shrink-0"
      style={{
        width: 240,
        borderRight: '1px solid rgba(245,165,36,0.24)',
        background: 'linear-gradient(180deg, rgba(245,165,36,0.03), transparent 60%)'
      }}
    >
      {/* Logo */}
      <div className="px-6 pt-6 pb-5">
        <div className="flex items-center gap-2">
          <Terminal size={16} style={{ color: 'var(--amber)' }} />
          <span
            className="font-bold tracking-widest text-[15px] hard-glow"
            style={{ color: 'var(--amber)', fontFamily: 'VT323, IBM Plex Mono, monospace', letterSpacing: '0.12em' }}
          >
            S¥βSH¥CE
          </span>
        </div>
        <div className="mt-1 text-[10px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.15em' }}>
          v2.6.1 — UI/UX OS
        </div>
      </div>

      <div className="px-4">
        <div
          className="inline-flex items-center justify-center w-7 h-7 rounded"
          style={{ border: '1px solid rgba(245,165,36,0.35)', color: 'var(--amber)' }}
          title="collapse"
        >
          <Menu size={12} />
        </div>
      </div>

      {/* Nav */}
      <nav className="mt-5 flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item, idx) => {
            const isActive = active === item.key;
            return (
              <li key={item.key}>
                <button
                  onClick={() => onNavigate(item.key)}
                  className="w-full text-left px-4 py-2.5 rounded-md text-[14px] flex items-center justify-between transition-colors"
                  style={{
                    background: isActive ? 'rgba(245,165,36,0.14)' : 'transparent',
                    color: isActive ? 'var(--amber-2)' : 'var(--amber)',
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: '0.02em'
                  }}
                >
                  <span className={isActive ? 'hard-glow' : ''}>{String(idx + 1).padStart(2, '0')}. {item.label}</span>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded"
                    style={{ border: '1px solid rgba(245,165,36,0.35)', color: 'var(--muted)' }}
                  >
                    {item.shortcut}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 px-4">
          <div className="text-[10px] mb-3" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em' }}>ELSEWHERE</div>
          <ul className="space-y-1.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-[12px] hover:underline" style={{ color: 'var(--muted)' }}>
                  → {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Status */}
      <div className="px-4 pb-4">
        <div className="text-[10px] mb-2" style={{ color: 'var(--muted-2)' }}>
          {booting ? 'BOOTING…' : 'CyberOS v2.6.1'}
        </div>
        <div className="flex items-center gap-3" style={{ color: 'var(--muted)' }}>
          <Power size={13} />
          <Settings size={13} />
          <Github size={13} />
          <LogOut size={13} />
        </div>
      </div>
    </aside>
  );
}
