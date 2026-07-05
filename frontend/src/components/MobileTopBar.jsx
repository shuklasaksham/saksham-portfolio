import React from 'react';
import { Menu, Command } from 'lucide-react';
import { navItems } from '../data/mock';

/**
 * Compact top bar shown only on mobile (<md).
 * Hosts hamburger to open sidebar drawer, brand mark, and command palette shortcut.
 */
export default function MobileTopBar({ active, onOpenSidebar, onOpenPalette }) {
  const current = navItems.find((n) => n.key === active);
  return (
    <div
      className="md:hidden flex items-center gap-3 px-3 py-2.5"
      style={{ borderBottom: '1px solid rgba(245,165,36,0.28)' }}
      data-testid="mobile-topbar"
    >
      <button
        onClick={onOpenSidebar}
        className="inline-flex items-center justify-center w-9 h-9 rounded-sm"
        style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)' }}
        aria-label="Open menu"
        data-testid="mobile-menu-btn"
      >
        <Menu size={17} strokeWidth={1.75} />
      </button>
      <div className="flex-1 min-w-0 flex items-center gap-2">
        <div
          className="text-[16px] leading-none hard-glow truncate"
          style={{
            color: 'var(--amber)',
            fontFamily: 'VT323, IBM Plex Mono, monospace',
            letterSpacing: '0.06em'
          }}
        >
          SAKSHAM SHUKLA
        </div>
        <span className="text-[10px] opacity-60" style={{ color: 'var(--muted)' }}>·</span>
        <span
          className="text-[11px] truncate uppercase"
          style={{ color: 'var(--muted-2)', letterSpacing: '0.14em' }}
        >
          {current ? current.label : ''}
        </span>
      </div>
      <button
        onClick={onOpenPalette}
        className="inline-flex items-center justify-center w-9 h-9 rounded-sm"
        style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)' }}
        aria-label="Open command palette"
        data-testid="mobile-palette-btn"
      >
        <Command size={16} strokeWidth={1.75} />
      </button>
    </div>
  );
}
