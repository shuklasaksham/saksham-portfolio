import React from 'react';
import { digitalArt } from '../../data/mock';
import { Flag } from 'lucide-react';

export default function Art() {
  return (
    <section className="px-6 md:px-10 lg:px-12 py-8 border-t" style={{ borderColor: 'rgba(245,165,36,0.24)' }}>
      <div className="mb-4 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">JOURNAL — DIGITAL ART</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <span className="opacity-70">{digitalArt.length} entries</span>
      </div>

      <article className="rounded-sm p-5 md:p-6" style={{ border: '1px solid var(--amber)' }}>
        <div className="flex items-center justify-between flex-wrap gap-2 text-[13px]" style={{ color: 'var(--amber)' }}>
          <div className="flex items-center gap-2">
            <span>@saksham_shukla</span>
            <span>◉</span>
            <span>L</span>
            <span>∽</span>
          </div>
          <div className="opacity-80">weekly • {digitalArt.length} pieces • 42 saves • 8 replies</div>
        </div>

        <div className="mt-3">
          <a href="#" className="text-[16px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
            V2026.03 — Illustrations, sketches & concept art
          </a>
        </div>

        <p className="mt-2 text-[14px]" style={{ color: 'var(--amber)' }}>
          A rotating collection of personal pieces — sketches, matte paintings, retro-wave, anime. Hover any tile to un-dither.
        </p>

        <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {digitalArt.map((a) => (
            <figure key={a.id} className="relative rounded-sm overflow-hidden group" style={{ border: '1px solid rgba(245,165,36,0.5)', aspectRatio: '3/4' }}>
              <img src={a.src} alt={a.title} loading="lazy" className="w-full h-full object-cover dither transition-all duration-300" />
              <figcaption className="absolute inset-x-0 bottom-0 px-2 py-1 text-[11px] flex items-center justify-between" style={{ color: 'var(--amber)', background: 'linear-gradient(180deg, transparent, rgba(5,5,5,0.92))', letterSpacing: '0.05em' }}>
                <span>#{String(a.id).padStart(2, '0')}</span>
                <span className="truncate ml-2 opacity-80">{a.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--amber)' }}>[↵]</span> Open&nbsp;&nbsp;
            <span style={{ color: 'var(--amber)' }}>[S]</span> Save
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>illustration</span>
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>sketchbook</span>
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>concept-art</span>
            <Flag size={14} style={{ color: 'var(--amber)' }} />
          </div>
        </div>
      </article>
    </section>
  );
}
