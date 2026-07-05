import React, { useEffect, useState, useMemo, useRef } from 'react';

const PROMPT = 'C:\\Users\\Saksham>';

const SCRIPT = [
  { kind: 'cmd', text: 'browser --status' },
  { kind: 'blank' },
  { kind: 'out', text: 'My Browser Has...', bold: true },
  { kind: 'out', text: '  97 open tabs.' },
  { kind: 'out', text: '  12 unfinished ideas.' },
  { kind: 'out', text: "  1 final-final-v8.fig  (there's always a v9)." },
  { kind: 'out', text: '  A folder full of screenshots.' },
  { kind: 'out', text: '  A habit of questioning almost everything.' },
  { kind: 'blank' },
  { kind: 'out', text: "Turns out, that's a pretty useful trait for designing products.", accent: true },
  { kind: 'blank' },
  { kind: 'prompt' }
];

const TYPE_SPEED = 26;

export default function BehindThePixels() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState('');
  const [cursorOn, setCursorOn] = useState(true);
  const [done, setDone] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (step >= SCRIPT.length) { setDone(true); return; }
    const item = SCRIPT[step];

    if (item.kind === 'cmd') {
      setTyped('');
      let i = 0;
      const t = setInterval(() => {
        i += 1;
        setTyped(item.text.slice(0, i));
        if (i >= item.text.length) {
          clearInterval(t);
          setTimeout(() => setStep((s) => s + 1), 260);
        }
      }, TYPE_SPEED);
      return () => clearInterval(t);
    }
    if (item.kind === 'out') {
      const t = setTimeout(() => setStep((s) => s + 1), 180);
      return () => clearTimeout(t);
    }
    if (item.kind === 'blank') {
      const t = setTimeout(() => setStep((s) => s + 1), 90);
      return () => clearTimeout(t);
    }
    if (item.kind === 'prompt') {
      const t = setTimeout(() => setStep((s) => s + 1), 200);
      return () => clearTimeout(t);
    }
  }, [step]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [step, typed]);

  const rendered = useMemo(() => {
    const nodes = [];
    for (let i = 0; i < step && i < SCRIPT.length; i += 1) {
      const it = SCRIPT[i];
      if (it.kind === 'cmd') {
        nodes.push(
          <div key={i} className="whitespace-pre">
            <span style={{ color: '#e5e5e5' }}>{PROMPT} </span>
            <span style={{ color: '#ffffff' }}>{it.text}</span>
          </div>
        );
      } else if (it.kind === 'out') {
        nodes.push(
          <div
            key={i}
            className="whitespace-pre"
            style={{
              color: it.accent ? '#f5a524' : '#e5e5e5',
              fontWeight: it.bold ? 700 : 400
            }}
          >
            {it.text}
          </div>
        );
      } else if (it.kind === 'blank') {
        nodes.push(<div key={i} className="h-[6px]" />);
      }
    }

    const cur = SCRIPT[step];
    if (cur && cur.kind === 'cmd') {
      nodes.push(
        <div key="typing" className="whitespace-pre">
          <span style={{ color: '#e5e5e5' }}>{PROMPT} </span>
          <span style={{ color: '#ffffff' }}>{typed}</span>
          <span
            aria-hidden
            className="inline-block align-baseline"
            style={{ width: '0.6ch', height: '1em', background: '#e5e5e5', opacity: cursorOn ? 1 : 0, transform: 'translateY(2px)', marginLeft: 2 }}
          />
        </div>
      );
    } else if (done || (cur && cur.kind === 'prompt')) {
      nodes.push(
        <div key="prompt" className="whitespace-pre">
          <span style={{ color: '#e5e5e5' }}>{PROMPT} </span>
          <span
            aria-hidden
            className="inline-block align-baseline"
            style={{ width: '0.6ch', height: '1em', background: '#e5e5e5', opacity: cursorOn ? 1 : 0, transform: 'translateY(2px)' }}
          />
        </div>
      );
    }

    return nodes;
  }, [step, typed, cursorOn, done]);

  const restart = () => { setStep(0); setTyped(''); setDone(false); };

  return (
    <section className="xl:h-full w-full xl:overflow-hidden px-4 sm:px-6 md:px-10 lg:px-12 py-4 md:py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[12px] sm:text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">BEHIND THE PIXELS</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <button onClick={restart} className="text-[11px] px-2 py-1" style={{ border: '1px solid rgba(245,165,36,0.45)', color: 'var(--amber)', borderRadius: 2, letterSpacing: '0.1em' }}>
          REPLAY
        </button>
      </div>

      {/* CMD body — no window chrome */}
      <div
        ref={bodyRef}
        className="xl:flex-1 xl:min-h-0 xl:overflow-y-auto px-4 sm:px-6 md:px-8 py-5 md:py-6 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] min-h-[380px]"
        style={{
          background: '#000',
          color: '#e5e5e5',
          fontFamily: 'Consolas, "Cascadia Mono", "IBM Plex Mono", monospace',
          border: '1px solid rgba(245,165,36,0.35)',
          borderRadius: 4
        }}
      >
        <div style={{ color: '#8a8a8a' }} className="mb-3">
          Microsoft Windows [Version 10.0.26100.2894]
          <br />
          (c) Microsoft Corporation. All rights reserved.
        </div>
        {rendered}
      </div>
    </section>
  );
}
