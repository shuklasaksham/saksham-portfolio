import React from 'react';
import { Lock, Plus, Copy, ChevronLeft, ChevronRight, PanelLeft, Globe } from 'lucide-react';

export default function TerminalFrame({ children }) {
  return (
    <div className="px-4 md:px-8 pt-4 pb-14">
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '1560px',
          height: 'calc(100vh - 76px)',
          borderRadius: 20,
          background: '#0a0503',
          boxShadow:
            '0 0 0 1px rgba(245,165,36,0.24), 0 30px 90px -20px rgba(245,165,36,0.18), inset 0 0 140px rgba(0,0,0,0.7)'
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-3 px-5 py-3 border-b"
          style={{ borderColor: 'rgba(245,165,36,0.24)' }}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <div className="flex items-center gap-3 ml-4 text-[13px]" style={{ color: 'var(--muted)' }}>
            <PanelLeft size={14} />
            <span className="opacity-60">⌄</span>
            <ChevronLeft size={14} />
            <ChevronRight size={14} />
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-md text-[13px]"
              style={{
                background: 'rgba(245,165,36,0.05)',
                border: '1px solid rgba(245,165,36,0.22)',
                color: 'var(--amber)',
                minWidth: 320,
                justifyContent: 'center'
              }}
            >
              <Globe size={12} />
              <span>saksham.design</span>
            </div>
          </div>
          <div className="flex items-center gap-4" style={{ color: 'var(--muted)' }}>
            <span className="opacity-80">⮡</span>
            <Plus size={14} />
            <Copy size={14} />
          </div>
        </div>

        {/* Inner terminal content */}
        <div className="h-[calc(100%-46px)] overflow-hidden rounded-b-[20px]">
          {children}
        </div>
      </div>
    </div>
  );
}
