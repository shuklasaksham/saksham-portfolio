import React, { useState } from 'react';
import { contactPrompts, socials } from '../../data/mock';
import { Check, Send, Flag } from 'lucide-react';

export default function Contact() {
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!msg.trim()) return;
    try { localStorage.setItem('cyber_msg', msg); } catch (_) {}
    setSent(true);
    setTimeout(() => { setSent(false); setMsg(''); }, 2400);
  };

  return (
    <section className="h-full w-full overflow-hidden px-6 md:px-10 lg:px-12 py-6 flex flex-col">
      <div className="mb-3 flex items-center gap-3 text-[13px]" style={{ color: 'var(--amber)', letterSpacing: '0.15em' }}>
        <span className="font-semibold">CONTACT</span>
        <span className="flex-1 h-px" style={{ background: 'rgba(245,165,36,0.2)' }} />
        <span className="opacity-70">inbox open</span>
      </div>

      <article className="rounded-sm p-5 md:p-6 flex-1 min-h-0 overflow-hidden flex flex-col" style={{ border: '1px solid var(--amber)' }}>
        <div className="flex items-center justify-between flex-wrap gap-2 text-[13px]" style={{ color: 'var(--amber)' }}>
          <div className="flex items-center gap-2">
            <span>saksham@design</span>
            <span>◉</span>
            <span>L</span>
            <span>∽</span>
          </div>
          <div className="opacity-80">draft • auto-saved</div>
        </div>

        <div className="mt-3">
          <a href="#" className="text-[15px] font-semibold underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>
            V2026.05 — Let&apos;s build something that shouldn&apos;t exist
          </a>
        </div>

        <h1 className="mt-3 font-bold leading-[1.1] hard-glow" style={{ color: 'var(--amber-2)', fontSize: 'clamp(22px, 2vw, 32px)' }}>
          Say hi — or send a wild idea.
        </h1>
        <p className="mt-2 text-[13px]" style={{ color: 'var(--amber)' }}>Complete a sentence or write your own.</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {contactPrompts.map((p) => (
            <button key={p} onClick={() => setMsg((m) => (m ? m + ' ' + p : p))} className="text-[12px] px-3 py-1.5" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>
              {p}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="mt-3 flex-1 min-h-0 flex flex-col">
          <div className="flex gap-2 px-3 py-3 flex-1 min-h-0" style={{ border: '1px solid rgba(245,165,36,0.4)', borderRadius: 2 }}>
            <span className="pt-1" style={{ color: 'var(--amber)' }}>&gt;</span>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Start typing or pick a sentence above…" className="w-full h-full bg-transparent outline-none resize-none text-[14px] placeholder:opacity-50" style={{ color: 'var(--amber-2)', caretColor: 'var(--amber)' }} />
          </div>

          <div className="mt-3 flex items-center gap-3 flex-wrap">
            <button type="submit" className="inline-flex items-center gap-2 text-[13px] font-semibold px-4 py-2" style={{ background: 'var(--amber)', color: '#0a0704', borderRadius: 2 }}>
              {sent ? <Check size={14} /> : <Send size={14} />}
              {sent ? 'Sent — will reply in 24h' : 'Send it →'}
            </button>
            <span className="text-[12px]" style={{ color: 'var(--muted)' }}>
              or press <span style={{ color: 'var(--amber)' }}>[⌘ + Enter]</span>
            </span>
            <div className="ml-auto text-[13px]" style={{ color: 'var(--amber)' }}>
              {socials.map((s, i) => (
                <React.Fragment key={s.label}>
                  <a href={s.href} className="underline underline-offset-[3px]" style={{ color: 'var(--amber-2)' }}>{s.label}</a>
                  {i < socials.length - 1 ? '  ·  ' : ''}
                </React.Fragment>
              ))}
            </div>
          </div>
        </form>

        <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[12px]" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--amber)' }}>[↵]</span> Open&nbsp;&nbsp;
            <span style={{ color: 'var(--amber)' }}>[S]</span> Save
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>hire</span>
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>collab</span>
            <span className="text-[12px] px-2.5 py-1" style={{ border: '1px solid rgba(245,165,36,0.55)', color: 'var(--amber)', borderRadius: 2 }}>chat</span>
            <Flag size={14} style={{ color: 'var(--amber)' }} />
          </div>
        </div>
      </article>
    </section>
  );
}
