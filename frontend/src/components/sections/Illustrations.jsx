import React from 'react';
import { digitalArt } from '../../data/mock';
import { Flag } from 'lucide-react';

export default function Illustrations() {
  return (
    <section className="xl:h-full w-full xl:overflow-hidden px-4 sm:px-6 md:px-10 lg:px-12 py-4 md:py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[12px] sm:text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">ILLUSTRATIONS</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <span className="opacity-70 whitespace-nowrap">{digitalArt.length} entries</span>
      </div>

      <article className="rounded-sm p-4 sm:p-5 md:p-6 flex flex-col xl:flex-1 xl:min-h-0 xl:overflow-hidden" style={{ border: '1px solid var(--amber)' }}>
        <div className="flex items-center justify-end text-[13px]" style={{ color: 'var(--amber)' }}>
          <p className="text-[12px] sm:text-[13px]" style={{ color: 'var(--amber)' }}>
            A rotating collection of personal pieces — sketches, matte paintings, retro-wave, anime. Hover any tile to un-dither.
          </p>
        </div>

        <div className="my-3 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

        <div className="xl:flex-1 xl:min-h-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 xl:overflow-hidden">
          {digitalArt.map((a) => (
            <figure key={a.id} className="relative rounded-sm overflow-hidden group aspect-square md:aspect-auto xl:h-full xl:min-h-0" style={{ border: '1px solid rgba(245,165,36,0.5)' }}>
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
