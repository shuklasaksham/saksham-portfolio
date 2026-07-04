import React from 'react';
import { navItems } from '../data/mock';
import { PanelLeft, Server, Wrench, Menu, LogOut, User, FolderKanban, Palette, Briefcase, Cog, Mail } from 'lucide-react';

const ICONS = { User, FolderKanban, Palette, Briefcase, Cog, Mail };

export default function Sidebar({ active, onNavigate, collapsed, onToggle, booting }) {
  const width = collapsed ? 72 : 260;

  return (
    <aside
      className="hidden md:flex flex-col shrink-0 relative transition-[width] duration-200 ease-out"
      style={{
        width,
        borderRight: '1px solid rgba(245,165,36,0.3)'
      }}
    >
      {/* Brand */}
      <div className={`pt-5 pb-3 ${collapsed ? 'px-3 flex justify-center' : 'px-5'}`}>
        {collapsed ? (
          <div
            className="text-[22px] leading-none hard-glow"
            style={{ color: 'var(--amber)', fontFamily: 'VT323, IBM Plex Mono, monospace' }}
          >
            S
          </div>
        ) : (
          <div
            className="text-[22px] leading-none hard-glow whitespace-nowrap"
            style={{
              color: 'var(--amber)',
              fontFamily: 'VT323, IBM Plex Mono, monospace',
              letterSpacing: '0.02em'
            }}
          >
            S¥βSH¥¢E
          </div>
        )}
      </div>

      {/* Collapse toggle */}
      <div className={`pb-5 ${collapsed ? 'px-3 flex justify-center' : 'px-5'}`}>
        <button
          onClick={onToggle}
          className="inline-flex items-center justify-center w-6 h-6 rounded-sm transition-colors"
          style={{ border: '1px solid rgba(245,165,36,0.4)', color: 'var(--amber)' }}
          aria-label={collapsed ? 'expand' : 'collapse'}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <PanelLeft size={12} style={{ transform: collapsed ? 'rotate(180deg)' : 'none' }} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = active === item.key;
            const Icon = ICONS[item.icon];
            return (
              <li key={item.key}>
                <button
                  onClick={() => onNavigate(item.key)}
                  title={collapsed ? item.label : undefined}
                  className={`w-full text-left flex items-center transition-colors ${collapsed ? 'justify-center px-2 py-2.5' : 'gap-3 px-3 py-2.5'}`}
                  style={{
                    background: isActive ? 'var(--amber)' : 'transparent',
                    color: isActive ? '#0a0704' : 'var(--amber)',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.01em',
                    fontSize: 14,
                    borderRadius: 2
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--amber-2)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--amber)'; }}
                >
                  {Icon && <Icon size={15} strokeWidth={1.75} />}
                  {!collapsed && (
                    <span className="flex-1 truncate">{item.label}</span>
                  )}
                  {!collapsed && item.badge && (
                    <span className="text-[12px]" style={{ color: isActive ? '#0a0704' : 'var(--amber)' }}>
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
      <div className={`pb-2 ${collapsed ? 'px-2 text-center' : 'px-5 text-center'}`}>
        <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
          {collapsed ? 'v1.0.8' : (booting ? 'Booting…' : 'CyberOS v1.0.8')}
        </div>
      </div>

      {/* Bottom icons */}
      <div className={`pb-5 flex items-center ${collapsed ? 'justify-center px-2 flex-wrap gap-2' : 'px-5 gap-4'}`} style={{ color: 'var(--muted)' }}>
        <Server size={14} />
        <Wrench size={14} />
        {!collapsed && <Menu size={14} />}
        <LogOut size={14} />
      </div>
    </aside>
  );
}
