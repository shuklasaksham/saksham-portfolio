import React from 'react';
import { digitalArt } from '../../data/mock';
import { Flag } from 'lucide-react';

export default function Illustrations() {
  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-12 py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">ILLUSTRATIONS</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <span className="opacity-70">{digitalArt.length} entries</span>
      </div>

      <article className="rounded-sm p-5 md:p-6 flex flex-col flex-1 min-h-0 overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
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
          <a href="#" className="text-[15px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
            V2026.03 — Digital art & concept sketches
          </a>
        </div>

        <p className="mt-2 text-[13px]" style={{ color: 'var(--amber)' }}>
          A rotating collection of personal pieces — sketches, matte paintings, retro-wave, anime. Hover any tile to un-dither.
        </p>

        <div className="my-3 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

        <div className="flex-1 min-h-0 grid grid-cols-2 md:grid-cols-5 gap-2 overflow-hidden">
          {digitalArt.map((a) => (
            <figure key={a.id} className="relative rounded-sm overflow-hidden group h-full min-h-0" style={{ border: '1px solid rgba(245,165,36,0.5)' }}>
              <img src={a.src} alt={a.title} loading="lazy" className="w-full h-full object-cover dither transition-all duration-300" />
              <figcaption className="absolute inset-x-0 bottom-0 px-2 py-1 text-[10px] flex items-center justify-between" style={{ color: 'var(--amber)', background: 'linear-gradient(180deg, transparent, rgba(5,5,5,0.92))', letterSpacing: '0.05em' }}>
                <span>#{String(a.id).padStart(2, '0')}</span>
                <span className="truncate ml-2 opacity-80">{a.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between flex-wrap gap-3">
          
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
