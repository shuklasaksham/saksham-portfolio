import React from 'react';
import { Lock, Plus, Copy, ChevronLeft, ChevronRight, LayoutPanelLeft } from 'lucide-react';

export default function TerminalFrame({ children }) {
  return (
    <div className="px-4 md:px-8 pt-4 pb-14">
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '1560px',
          height: 'calc(100vh - 76px)',
          borderRadius: 14,
          background: 'linear-gradient(180deg, #0d0906 0%, #06040200 100%)',
          boxShadow:
            '0 0 0 1px rgba(245,165,36,0.28), 0 30px 80px -20px rgba(245,165,36,0.18), inset 0 0 120px rgba(0,0,0,0.6)'
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-3 px-5 py-3 border-b"
          style={{ borderColor: 'rgba(245,165,36,0.28)' }}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <div className="flex items-center gap-2 ml-4 text-[13px]" style={{ color: 'var(--muted)' }}>
            <LayoutPanelLeft size={14} />
            <ChevronLeft size={14} />
            <ChevronRight size={14} />
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-md text-[12px]"
              style={{ background: 'rgba(245,165,36,0.06)', border: '1px solid rgba(245,165,36,0.22)', color: 'var(--amber)' }}
            >
              <Lock size={11} />
              <span>saksham.design</span>
              <span style={{ color: 'var(--muted-2)' }}>/portfolio</span>
            </div>
          </div>
          <div className="flex items-center gap-3" style={{ color: 'var(--muted)' }}>
            <Plus size={14} />
            <Copy size={14} />
          </div>
        </div>

        {/* Inner terminal content */}
        <div className="h-[calc(100%-46px)] overflow-hidden rounded-b-[14px]">
          {children}
        </div>

        {/* Subtle inner glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[14px]"
          style={{ boxShadow: 'inset 0 0 120px rgba(245,165,36,0.05)' }}
        />
      </div>
    </div>
  );
}
