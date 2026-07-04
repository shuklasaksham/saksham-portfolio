import React from 'react';
import { digitalArt } from '../../data/mock';

export default function Art() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-24 border-t" style={{ borderColor: 'rgba(245,165,36,0.2)' }}>
      <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-[10px] mb-3" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em' }}>&gt; RUN ~/DIGITAL_ART</div>
          <h2 className="text-[44px] md:text-[64px] font-bold leading-none glow" style={{ color: 'var(--amber)' }}>
            Illust<span className="hard-glow" style={{ color: 'var(--amber-2)' }}>rations</span>.
          </h2>
        </div>
        <p className="text-[13px] max-w-sm" style={{ color: 'var(--muted)' }}>
          A collection of digital illustrations, sketches, and concept art. Hover to un-dither.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {digitalArt.map((a) => (
          <figure
            key={a.id}
            className="relative panel panel-hover overflow-hidden group"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src={a.src}
              alt={a.title}
              loading="lazy"
              className="w-full h-full object-cover dither transition-all duration-300"
            />
            <figcaption
              className="absolute inset-x-0 bottom-0 px-3 py-2 text-[10px] flex items-center justify-between"
              style={{ color: 'var(--amber)', background: 'linear-gradient(180deg, transparent, rgba(5,5,5,0.9))', letterSpacing: '0.1em' }}
            >
              <span>#{String(a.id).padStart(2, '0')}</span>
              <span className="truncate ml-2 opacity-80">{a.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
