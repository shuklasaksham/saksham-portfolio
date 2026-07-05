import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

/**
 * PeekContext — a lightweight global search state that dims non-matches and
 * highlights matches across case-study cards, workbench chips, and principles.
 * Toggle: press `/` (unfocused). Close: Escape.
 */
const PeekContext = createContext({
  open: false,
  query: '',
  matches: (text) => true,
  setOpen: () => {},
  setQuery: () => {}
});

export function usePeek() {
  return useContext(PeekContext);
}

/**
 * Hook that returns [className, isMatch] for a given searchable text.
 *  - When peek is closed OR query is empty → className is '' (no visual change)
 *  - When peek is open with query → returns 'peek-match' or 'peek-dim'
 */
export function usePeekTarget(text) {
  const { open, query } = usePeek();
  return useMemo(() => {
    const q = (query || '').trim().toLowerCase();
    if (!open || !q) return '';
    const hay = String(text || '').toLowerCase();
    return hay.includes(q) ? 'peek-match' : 'peek-dim';
  }, [open, query, text]);
}

export function PeekProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = (e) => {
      const tag = document.activeElement && document.activeElement.tagName;
      const inField = tag === 'INPUT' || tag === 'TEXTAREA';

      if (e.key === '/' && !inField && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setOpen(true);
        return;
      }
      if (e.key === 'Escape') {
        setOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const value = useMemo(() => ({ open, query, setOpen, setQuery }), [open, query]);
  return <PeekContext.Provider value={value}>{children}</PeekContext.Provider>;
}
