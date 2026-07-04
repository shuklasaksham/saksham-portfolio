import React, { useState } from 'react';
import { contactPrompts } from '../../data/mock';
import { Check, Send } from 'lucide-react';

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
    <section className="px-6 md:px-10 lg:px-16 py-24 border-t" style={{ borderColor: 'rgba(245,165,36,0.2)' }}>
      <div className="text-[10px] mb-3" style={{ color: 'var(--muted-2)', letterSpacing: '0.2em' }}>&gt; MAIL -TO saksham@saksham.design</div>
      <h2 className="text-[44px] md:text-[64px] font-bold leading-tight glow max-w-3xl" style={{ color: 'var(--amber)' }}>
        Let&#39;s build something<br />
        that <span className="hard-glow" style={{ color: 'var(--amber-2)' }}>shouldn&#39;t exist</span>.
      </h2>
      <p className="mt-5 text-[13px]" style={{ color: 'var(--muted)' }}>Complete a sentence or write your own.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {contactPrompts.map((p) => (
          <button
            key={p}
            onClick={() => setMsg((m) => (m ? m + ' ' + p : p))}
            className="amber-btn text-[12px]"
          >
            {p}
          </button>
        ))}
      </div>

      <form onSubmit={submit} className="mt-6 max-w-3xl">
        <div className="panel px-4 py-3">
          <div className="flex items-center gap-2 text-[10px] pb-2 border-b" style={{ borderColor: 'rgba(245,165,36,0.2)', color: 'var(--muted-2)' }}>
            <span>saksham@design</span>
            <span>~/inbox</span>
            <span className="ml-auto">DRAFT</span>
          </div>
          <div className="pt-3 flex gap-2">
            <span className="pt-1" style={{ color: 'var(--amber)' }}>&gt;</span>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Start typing or pick a sentence above…"
              rows={4}
              className="w-full bg-transparent outline-none resize-none text-[14px] placeholder:opacity-50"
              style={{ color: 'var(--amber-2)', caretColor: 'var(--amber)' }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <button type="submit" className="amber-btn-solid inline-flex items-center gap-2 text-[12px]">
            {sent ? <Check size={14} /> : <Send size={14} />}
            {sent ? 'Sent — will reply in 24h' : 'Send it →'}
          </button>
          <span className="text-[11px]" style={{ color: 'var(--muted-2)' }}>
            or press <span style={{ color: 'var(--amber)' }}>[⌘ + Enter]</span>
          </span>
        </div>
      </form>
    </section>
  );
}
