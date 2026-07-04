import React, { useRef, useState } from 'react';
import { Flag } from 'lucide-react';

function ShyButton() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [caught, setCaught] = useState(false);
  const ref = useRef(null);

  const onMove = (e) => {
    if (caught) return;
    const el = ref.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const bx = box.left + box.width / 2;
    const by = box.top + box.height / 2;
    const dx = e.clientX - bx;
    const dy = e.clientY - by;
    const dist = Math.hypot(dx, dy);
    if (dist < 90) {
      const ang = Math.atan2(dy, dx);
      const push = 90 - dist;
      setPos((p) => ({ x: p.x - Math.cos(ang) * push * 0.6, y: p.y - Math.sin(ang) * push * 0.6 }));
    }
  };

  return (
    <div className="relative w-full h-32 flex items-center justify-center" onMouseMove={onMove} onDoubleClick={() => { setPos({ x: 0, y: 0 }); setCaught(false); }}>
      <button ref={ref} onClick={() => setCaught(true)} className="px-4 py-2 text-[13px] font-semibold transition-transform" style={{ background: 'var(--amber)', color: '#0a0704', borderRadius: 2, transform: `translate(${pos.x}px, ${pos.y}px)` }}>
        {caught ? 'You got me!' : '[K] Try to click'}
      </button>
    </div>
  );
}

function ElasticCard() {
  const [drag, setDrag] = useState({ x: 0, y: 0, active: false });
  const start = useRef({ x: 0, y: 0 });

  const onDown = (e) => { setDrag((d) => ({ ...d, active: true })); start.current = { x: e.clientX - drag.x, y: e.clientY - drag.y }; };
  const onMove = (e) => { if (!drag.active) return; setDrag({ x: (e.clientX - start.current.x) * 0.6, y: (e.clientY - start.current.y) * 0.6, active: true }); };
  const onUp = () => setDrag({ x: 0, y: 0, active: false });

  return (
    <div className="relative w-full h-32 flex items-center justify-center" onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}>
      <div onMouseDown={onDown} className="select-none cursor-grab active:cursor-grabbing flex items-center justify-center text-[12px] font-bold" style={{ width: 88, height: 88, background: 'var(--amber)', color: '#0a0704', letterSpacing: '0.15em', borderRadius: 2, transform: `translate(${drag.x}px, ${drag.y}px)`, transition: drag.active ? 'none' : 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
        DRAG
      </div>
    </div>
  );
}

function GlitchType() {
  return (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="text-[36px] font-black tracking-tight" style={{ color: 'var(--amber-2)' }}>
        <span className="glitch" data-text="BREAK ME">BREAK ME</span>
      </div>
    </div>
  );
}

function GravityUI() {
  const [on, setOn] = useState(false);
  const balls = [0, 1, 2, 3, 4];
  return (
    <div className="relative w-full h-32 flex flex-col items-center justify-start pt-2 overflow-hidden">
      <div className="relative w-full flex-1 flex items-center justify-center gap-2">
        {balls.map((i) => (
          <span key={i} className="block" style={{ width: 18, height: 18, background: 'var(--amber)', borderRadius: 2, transform: on ? `translateY(${44 + i * 4}px)` : 'translateY(0)', transition: `transform 900ms cubic-bezier(0.55, 0.055, 0.675, 0.19) ${i * 60}ms` }} />
        ))}
      </div>
      <button className="text-[12px] px-3 py-1 mt-2" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }} onClick={() => setOn((v) => !v)}>
        {on ? '[R] lift up' : '[G] enable gravity'}
      </button>
    </div>
  );
}

const CARDS = [
  { category: 'INTERACTION', title: 'The Shy Button', Comp: ShyButton },
  { category: 'MOTION', title: 'Elastic Card', Comp: ElasticCard },
  { category: 'VISUAL', title: 'Glitch Type', Comp: GlitchType },
  { category: 'CONCEPT', title: 'Gravity UI', Comp: GravityUI }
];

export default function Playground() {
  return (
    <section className="px-6 md:px-10 lg:px-12 py-8 border-t" style={{ borderColor: 'rgba(245,165,36,0.24)' }}>
      <div className="mb-4 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">PLAYGROUND</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <span className="opacity-70">4 experiments</span>
      </div>

      <article className="rounded-sm p-5 md:p-6" style={{ border: '1px solid var(--amber)' }}>
        <div className="flex items-center justify-between flex-wrap gap-2 text-[13px]" style={{ color: 'var(--amber)' }}>
          <div className="flex items-center gap-2">
            <span>@saksham_shukla</span>
            <span>◉</span>
            <span>L</span>
            <span>∽</span>
          </div>
          <div className="opacity-80">interactive • misbehaves on purpose</div>
        </div>

        <div className="mt-3">
          <a href="#" className="text-[16px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
            V2026.04 — Design experiments
          </a>
        </div>

        <p className="mt-2 text-[14px]" style={{ color: 'var(--amber)' }}>
          Interaction concepts and motion studies. Try them.
        </p>

        <div className="my-4 h-px" style={{ background: 'rgba(245,165,36,0.28)' }} />

        <div className="grid md:grid-cols-2 gap-3">
          {CARDS.map(({ category, title, Comp }) => (
            <div key={title} className="px-4 py-4" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
              <div className="text-[10px]" style={{ color: 'var(--muted)', letterSpacing: '0.2em' }}>{category}</div>
              <div className="text-[16px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>{title}</div>
              <div className="mt-2"><Comp /></div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--amber)' }}>[↵]</span> Open&nbsp;&nbsp;
            <span style={{ color: 'var(--amber)' }}>[S]</span> Save
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>interactions</span>
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>motion</span>
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>fun</span>
            <Flag size={14} style={{ color: 'var(--amber)' }} />
          </div>
        </div>
      </article>
    </section>
  );
}
