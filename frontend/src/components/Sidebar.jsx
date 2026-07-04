import React from 'react';
import { navItems } from '../data/mock';
import { PanelLeft, Server, Wrench, Menu, LogOut } from 'lucide-react';

// Simplified sidebar matching the reference: text-only list, active item = solid amber bg with dark text
export default function Sidebar({ active, onNavigate, booting }) {
  return (
    <aside
      className="hidden md:flex flex-col shrink-0 relative"
      style={{
        width: 240,
        borderRight: '1px solid rgba(245,165,36,0.28)'
      }}
    >
      {/* Brand */}
      <div className="px-6 pt-6 pb-4">
        <div
          className="text-[22px] leading-none hard-glow"
          style={{
            color: 'var(--amber)',
            fontFamily: 'VT323, IBM Plex Mono, monospace',
            letterSpacing: '0.02em'
          }}
        >
          S¥βSH¥¢E
        </div>
      </div>

      {/* Collapse icon */}
      <div className="px-6 pb-6">
        <button
          className="inline-flex items-center justify-center w-6 h-6 rounded-sm"
          style={{ border: '1px solid rgba(245,165,36,0.4)', color: 'var(--amber)' }}
          aria-label="collapse"
        >
          <PanelLeft size={12} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = active === item.key;
            return (
              <li key={item.key}>
                <button
                  onClick={() => onNavigate(item.key)}
                  className="w-full text-left px-3 py-2.5 flex items-center justify-between text-[15px] transition-colors"
                  style={{
                    background: isActive ? 'var(--amber)' : 'transparent',
                    color: isActive ? '#0a0704' : 'var(--amber)',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.01em',
                    borderRadius: 2
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--amber-2)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--amber)';
                  }}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className="text-[13px]"
                      style={{ color: isActive ? '#0a0704' : 'var(--amber)' }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Version */}
      <div className="px-6 pb-2">
        <div className="text-center text-[13px]" style={{ color: 'var(--muted)', letterSpacing: '0.05em' }}>
          {booting ? 'Booting…' : 'CyberOS v1.0.8'}
        </div>
      </div>

      {/* Bottom icons */}
      <div className="px-6 pb-5 flex items-center gap-4" style={{ color: 'var(--muted)' }}>
        <Server size={14} />
        <Wrench size={14} />
        <Menu size={14} />
        <LogOut size={14} />
      </div>
    </aside>
  );
}
