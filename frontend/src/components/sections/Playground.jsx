import React, { useRef, useState } from 'react';

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

  const reset = () => { setPos({ x: 0, y: 0 }); setCaught(false); };

  return (
    <div className="relative w-full h-40 flex items-center justify-center" onMouseMove={onMove} onDoubleClick={reset}>
      <button
        ref={ref}
        onClick={() => setCaught(true)}
        className="amber-btn-solid text-[12px] transition-transform"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        {caught ? 'You got me!' : 'Try to click'}
      </button>
    </div>
  );
}

function ElasticCard() {
  const [drag, setDrag] = useState({ x: 0, y: 0, active: false });
  const start = useRef({ x: 0, y: 0 });

  const onDown = (e) => {
    setDrag((d) => ({ ...d, active: true }));
    start.current = { x: e.clientX - drag.x, y: e.clientY - drag.y };
  };
  const onMove = (e) => {
    if (!drag.active) return;
    setDrag({ x: (e.clientX - start.current.x) * 0.6, y: (e.clientY - start.current.y) * 0.6, active: true });
  };
  const onUp = () => setDrag({ x: 0, y: 0, active: false });

  return (
    <div className="relative w-full h-40 flex items-center justify-center" onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}>
      <div
        onMouseDown={onDown}
        className="select-none cursor-grab active:cursor-grabbing rounded-md flex items-center justify-center text-[11px] font-bold"
        style={{
          width: 96,
          height: 96,
          background: 'var(--amber)',
          color: '#0a0704',
          letterSpacing: '0.15em',
          transform: `translate(${drag.x}px, ${drag.y}px)`,
          transition: drag.active ? 'none' : 'transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        DRAG
      </div>
    </div>
  );
}

function GlitchType() {
  const [on, setOn] = useState(true);
  return (
    <div className="w-full h-40 flex items-center justify-center">
      <div className="text-[42px] font-black tracking-tight" style={{ color: 'var(--amber-2)' }}>
        {on ? (
          <span className="glitch" data-text="BREAK ME">BREAK ME</span>
        ) : (
          <button className="amber-btn text-[11px]" onClick={() => setOn(true)}>REPAIR</button>
        )}
      </div>
      {on && (
        <button className="absolute mt-24 amber-btn text-[10px]" onClick={() => setOn(false)}>STOP GLITCH</button>
      )}
    </div>
  );
}

function GravityUI() {
  const [on, setOn] = useState(false);
  const balls = [0, 1, 2, 3, 4];
  return (
    <div className="relative w-full h-40 flex flex-col items-center justify-start pt-4 overflow-hidden">
      <div className="relative w-full flex-1 flex items-center justify-center gap-2">
        {balls.map((i) => (
          <span
            key={i}
            className="block rounded-full"
            style={{
              width: 22,
              height: 22,
              background: 'var(--amber)',
              transform: on ? `translateY(${60 + i * 6}px)` : 'translateY(0)',
              transition: `transform 900ms cubic-bezier(0.55, 0.055, 0.675, 0.19) ${i * 60}ms`
            }}
          />
        ))}
      </div>
      <button className="amber-btn text-[10px] mt-2" onClick={() => setOn((v) => !v)}>
        {on ? 'lift up' : 'enable gravity'}
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
    <section className="px-6 md:px-10 lg:px-16 py-24 border-t" style={{ borderColor: 'rgba(245,165,36,0.2)' }}>
      <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-[10px] mb-3" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em' }}>&gt; ./PLAYGROUND — experimental</div>
          <h2 className="text-[44px] md:text-[64px] font-bold leading-none glow" style={{ color: 'var(--amber)' }}>
            Design <span className="hard-glow" style={{ color: 'var(--amber-2)' }}>experiments</span>.
          </h2>
        </div>
        <p className="text-[13px] max-w-sm" style={{ color: 'var(--muted)' }}>
          Interaction concepts and motion studies. Try them — they misbehave on purpose.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CARDS.map(({ category, title, Comp }) => (
          <div key={title} className="panel panel-hover px-5 py-5">
            <div className="text-[10px] mb-1" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em' }}>{category}</div>
            <div className="text-[18px] font-semibold" style={{ color: 'var(--amber-2)' }}>{title}</div>
            <div className="mt-3">
              <Comp />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
