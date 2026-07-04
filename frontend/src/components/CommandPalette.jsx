import React, { useEffect, useMemo, useRef, useState } from 'react';
import { navItems, socials } from '../data/mock';
import { Search, ArrowRight, User, FolderKanban, Palette, Briefcase, Cog, Mail, Link as LinkIcon, PanelLeft, Copy, Command } from 'lucide-react';

const NAV_ICONS = { User, FolderKanban, Palette, Briefcase, Cog, Mail };

export default function CommandPalette({ open, onClose, onNavigate, onToggleSidebar }) {
  const [query, setQuery] = useState('');
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // Reset when opening
  useEffect(() => {
    if (open) {
      setQuery('');
      setIdx(0);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 30);
    }
  }, [open]);

  const actions = useMemo(() => {
    const nav = navItems.map((n) => ({
      id: 'go-' + n.key,
      label: 'Go to ' + n.label,
      hint: 'Section',
      icon: NAV_ICONS[n.icon] || ArrowRight,
      run: () => { onNavigate(n.key); onClose(); }
    }));
    const extra = [
      {
        id: 'toggle-sidebar',
        label: 'Toggle sidebar',
        hint: '[  or  ]',
        icon: PanelLeft,
        run: () => { onToggleSidebar(); onClose(); }
      },
      {
        id: 'copy-email',
        label: 'Copy email — hello@saksham.design',
        hint: 'Contact',
        icon: Copy,
        run: async () => {
          try {
            await navigator.clipboard.writeText('hello@saksham.design');
            setCopied(true);
            setTimeout(() => { setCopied(false); onClose(); }, 900);
          } catch (_) { onClose(); }
        }
      },
      ...socials.map((s) => ({
        id: 'open-' + s.label,
        label: 'Open ' + s.label,
        hint: 'External',
        icon: LinkIcon,
        run: () => { window.open(s.href, '_blank', 'noopener,noreferrer'); onClose(); }
      }))
    ];
    return [...nav, ...extra];
  }, [onNavigate, onClose, onToggleSidebar]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => a.label.toLowerCase().includes(q) || a.hint.toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => { setIdx(0); }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, filtered.length - 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
      else if (e.key === 'Enter') {
        e.preventDefault();
        const a = filtered[idx];
        if (a) a.run();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, idx, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onMouseDown={onClose}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="w-full max-w-[620px] overflow-hidden"
        style={{
          background: '#0a0503',
          border: '1px solid rgba(245,165,36,0.5)',
          borderRadius: 8,
          boxShadow: '0 30px 80px -20px rgba(245,165,36,0.35), 0 0 0 1px rgba(245,165,36,0.2)'
        }}
      >
        <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid rgba(245,165,36,0.28)' }}>
          <Search size={16} style={{ color: 'var(--amber)' }} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            className="flex-1 bg-transparent outline-none text-[15px]"
            style={{ color: 'var(--amber-2)', caretColor: 'var(--amber)' }}
          />
          <kbd className="text-[11px] px-2 py-0.5" style={{ border: '1px solid rgba(245,165,36,0.4)', color: 'var(--muted)', borderRadius: 3 }}>ESC</kbd>
        </div>

        <ul className="max-h-[360px] overflow-y-auto py-1">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-[13px]" style={{ color: 'var(--muted)' }}>
              No matching commands
            </li>
          )}
          {filtered.map((a, i) => {
            const Icon = a.icon;
            const on = i === idx;
            return (
              <li key={a.id}>
                <button
                  onMouseEnter={() => setIdx(i)}
                  onClick={a.run}
                  className="w-full text-left px-4 py-2.5 flex items-center gap-3 text-[14px]"
                  style={{
                    background: on ? 'rgba(245,165,36,0.14)' : 'transparent',
                    color: on ? 'var(--amber-2)' : 'var(--amber)'
                  }}
                >
                  <Icon size={15} strokeWidth={1.75} />
                  <span className="flex-1 truncate">{a.label}</span>
                  <span className="text-[11px]" style={{ color: 'var(--muted-2)' }}>{a.hint}</span>
                  {on && <ArrowRight size={14} style={{ color: 'var(--amber-2)' }} />}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="px-4 py-2 flex items-center justify-between text-[11px]" style={{ borderTop: '1px solid rgba(245,165,36,0.28)', color: 'var(--muted)' }}>
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5" style={{ border: '1px solid rgba(245,165,36,0.35)', borderRadius: 3 }}>↑↓</kbd> navigate</span>
            <span><kbd className="px-1.5 py-0.5" style={{ border: '1px solid rgba(245,165,36,0.35)', borderRadius: 3 }}>↵</kbd> run</span>
          </div>
          <div className="flex items-center gap-2">
            <Command size={11} />
            <span>{copied ? 'Copied!' : filtered.length + ' commands'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
