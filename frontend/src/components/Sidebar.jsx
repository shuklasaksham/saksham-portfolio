import React from 'react';
import { navItems } from '../data/mock';
import { PanelLeft, User, FolderKanban, Palette, Briefcase, MonitorDot, Mail, X } from 'lucide-react';

const ICONS = { User, FolderKanban, Palette, Briefcase, MonitorDot, Mail };

/**
 * Renders both:
 *  - Desktop/tablet inline sidebar (md+): current terminal-style collapsible column
 *  - Mobile slide-in drawer (<md): controlled by `mobileOpen` from parent, dismissed on nav
 */
export default function Sidebar({
  active,
  onNavigate,
  collapsed,
  onToggle,
  mobileOpen = false,
  onMobileClose = () => {}
}) {
  const width = collapsed ? 72 : 260;

  const NavList = ({ inDrawer = false }) => (
    <ul className="space-y-0.5">
      {navItems.map((item) => {
        const isActive = active === item.key;
        const Icon = ICONS[item.icon];
        const showLabel = inDrawer || !collapsed;
        return (
          <li key={item.key}>
            <button
              onClick={() => {
                onNavigate(item.key);
                if (inDrawer) onMobileClose();
              }}
              data-testid={`nav-${item.key}`}
              title={!showLabel ? item.label : undefined}
              className={`w-full text-left flex items-center transition-colors ${showLabel ? 'gap-3 px-3 py-2.5' : 'justify-center px-2 py-2.5'}`}
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
              {showLabel && (<span className="flex-1 truncate">{item.label}</span>)}
              {showLabel && item.badge && (
                <span className="text-[12px]" style={{ color: isActive ? '#0a0704' : 'var(--amber)' }}>{item.badge}</span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Desktop / tablet inline sidebar */}
      <aside
        className="hidden md:flex flex-col shrink-0 relative transition-[width] duration-200 ease-out"
        style={{
          width,
          borderRight: '1px solid rgba(245,165,36,0.3)'
        }}
        data-testid="sidebar-desktop"
      >
        <div className={`pt-5 pb-3 ${collapsed ? 'px-3 flex justify-center' : 'px-5'}`}>
          {collapsed ? (
            <div
              className="text-[22px] leading-none hard-glow"
              style={{ color: 'var(--amber)', fontFamily: 'VT323, IBM Plex Mono, monospace' }}
            >
              SS
            </div>
          ) : (
            <div
              className="text-[20px] leading-none hard-glow whitespace-nowrap"
              style={{
                color: 'var(--amber)',
                fontFamily: 'VT323, IBM Plex Mono, monospace',
                letterSpacing: '0.06em'
              }}
            >
              SAKSHAM SHUKLA
            </div>
          )}
        </div>

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

        <nav className="flex-1 px-2">
          <NavList />
        </nav>

        <div className="pb-5" />
      </aside>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(5,3,2,0.72)', backdropFilter: 'blur(2px)' }}
          onClick={onMobileClose}
        />
        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 bottom-0 flex flex-col transition-transform duration-200 ease-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{
            width: 268,
            background: '#0a0503',
            borderRight: '1px solid rgba(245,165,36,0.35)',
            boxShadow: '20px 0 40px -20px rgba(0,0,0,0.7)'
          }}
          data-testid="sidebar-mobile"
        >
          <div className="pt-5 pb-3 px-5 flex items-center justify-between">
            <div
              className="text-[20px] leading-none hard-glow whitespace-nowrap"
              style={{
                color: 'var(--amber)',
                fontFamily: 'VT323, IBM Plex Mono, monospace',
                letterSpacing: '0.06em'
              }}
            >
              SAKSHAM SHUKLA
            </div>
            <button
              onClick={onMobileClose}
              className="inline-flex items-center justify-center w-7 h-7 rounded-sm"
              style={{ border: '1px solid rgba(245,165,36,0.4)', color: 'var(--amber)' }}
              aria-label="Close menu"
              data-testid="sidebar-mobile-close"
            >
              <X size={14} />
            </button>
          </div>

          <nav className="flex-1 px-2 mt-4 overflow-y-auto">
            <NavList inDrawer />
          </nav>

          <div className="px-5 py-4 text-[11px]" style={{ color: 'var(--muted-2)', letterSpacing: '0.14em', borderTop: '1px solid rgba(245,165,36,0.2)' }}>
            CYBEROS v1.0.8
          </div>
        </aside>
      </div>
    </>
  );
}
