import { useEffect, useRef, useState } from 'react';
import './App.css';
import TerminalFrame from './components/TerminalFrame';
import Sidebar from './components/Sidebar';
import StatusBar from './components/StatusBar';
import AboutMe from './components/sections/AboutMe';
import Work from './components/sections/Work';
import Illustrations from './components/sections/Illustrations';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { navItems } from './data/mock';

function App() {
  const [active, setActive] = useState('about');
  const [collapsed, setCollapsed] = useState(false);
  const [booting, setBooting] = useState(true);
  const scrollerRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = document.activeElement && document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === '[' || e.key === ']') {
        setCollapsed((v) => !v);
        return;
      }
      const found = navItems.find((n) => n.shortcut.toLowerCase() === e.key.toLowerCase());
      if (found) {
        e.preventDefault();
        scrollTo(found.key);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute('data-key');
            if (key) setActive(key);
          }
        });
      },
      { root: el, threshold: 0.32 }
    );
    Object.values(sectionRefs.current).forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, [booting]);

  const scrollTo = (key) => {
    const el = sectionRefs.current[key];
    const scroller = scrollerRef.current;
    if (el && scroller) {
      scroller.scrollTo({ top: el.offsetTop - 12, behavior: 'smooth' });
    }
  };

  const setRef = (key) => (node) => { sectionRefs.current[key] = node; };

  return (
    <div className="App min-h-screen">
      <TerminalFrame>
        <div className="flex h-full min-h-0">
          <Sidebar
            active={active}
            onNavigate={scrollTo}
            collapsed={collapsed}
            onToggle={() => setCollapsed((v) => !v)}
            booting={booting}
          />
          <main
            ref={scrollerRef}
            className="flex-1 min-w-0 overflow-y-auto"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div data-key="about" ref={setRef('about')}><AboutMe /></div>
            <div data-key="work" ref={setRef('work')}><Work /></div>
            <div data-key="illustrations" ref={setRef('illustrations')}><Illustrations /></div>
            <div data-key="experience" ref={setRef('experience')}><Experience /></div>
            <div data-key="skills" ref={setRef('skills')}><Skills /></div>
            <div data-key="contact" ref={setRef('contact')}><Contact /></div>
            <Footer />
          </main>
        </div>
      </TerminalFrame>
      <StatusBar />
    </div>
  );
}

export default App;
