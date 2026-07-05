import React, { useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { usePeek } from '../context/PeekContext';

/**
 * PeekSearch — floating top-center search bar. Triggered by `/` global shortcut.
 * Live-filters the current view by dimming non-matches and outlining matches.
 */
export default function PeekSearch() {
  const { open, query, setOpen, setQuery } = usePeek();
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      const id = setTimeout(() => inputRef.current && inputRef.current.focus(), 20);
      return () => clearTimeout(id);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] pointer-events-none"
      role="dialog"
      aria-label="Peek search"
      data-testid="peek-overlay"
    >
      {/* Click outside to close */}
      <button
        aria-label="Close peek"
        onClick={() => { setOpen(false); setQuery(''); }}
        className="absolute inset-0 pointer-events-auto"
        style={{ background: 'transparent', cursor: 'default' }}
      />

      {/* Floating search chip */}
      <div
        className="pointer-events-auto absolute left-1/2 top-4 sm:top-6 -translate-x-1/2 w-[92%] max-w-[520px]"
        style={{
          background: 'rgba(10,7,4,0.92)',
          border: '1px solid rgba(245,165,36,0.55)',
          borderRadius: 8,
          boxShadow: '0 0 0 1px rgba(245,165,36,0.15), 0 30px 70px -20px rgba(245,165,36,0.45), 0 0 60px rgba(245,165,36,0.15)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)'
        }}
      >
        <div className="flex items-center gap-3 px-3 py-2.5">
          <Search size={15} strokeWidth={1.75} style={{ color: 'var(--amber)' }} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to peek — case studies, tools, principles…"
            data-testid="peek-input"
            className="flex-1 bg-transparent outline-none text-[14px] placeholder:opacity-50"
            style={{ color: 'var(--amber-2)', caretColor: 'var(--amber)' }}
          />
          <span className="hidden sm:inline text-[10px] px-1.5 py-0.5 select-none" style={{ border: '1px solid rgba(245,165,36,0.4)', color: 'var(--amber)', borderRadius: 3, letterSpacing: '0.08em' }}>ESC</span>
          <button
            onClick={() => { setOpen(false); setQuery(''); }}
            aria-label="Close"
            className="press w-6 h-6 inline-flex items-center justify-center"
            style={{ color: 'var(--amber)' }}
          >
            <X size={14} strokeWidth={1.75} />
          </button>
        </div>
        <div className="px-3 pb-2 text-[11px] flex items-center gap-2" style={{ color: 'var(--muted)' }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--amber)' }} />
          <span>PEEK MODE — non-matches fade, matches glow. Live across the current section.</span>
        </div>
      </div>
    </div>
  );
}
