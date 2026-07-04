import { useEffect, useRef, useState } from 'react';
import './App.css';
import TerminalFrame from './components/TerminalFrame';
import Sidebar from './components/Sidebar';
import StatusBar from './components/StatusBar';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import Art from './components/sections/Art';
import About from './components/sections/About';
import Playground from './components/sections/Playground';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { navItems } from './data/mock';

function App() {
  const [active, setActive] = useState('home');
  const [booting, setBooting] = useState(true);
  const scrollerRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 900);
    return () => clearTimeout(t);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = document.activeElement && document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      const found = navItems.find((n) => n.shortcut.toLowerCase() === e.key.toLowerCase());
      if (found) {
        e.preventDefault();
        scrollTo(found.key);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Observe active section on scroll
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
      { root: el, threshold: 0.35 }
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
    <div className="App crt min-h-screen">
      <TerminalFrame>
        <div className="flex h-full min-h-0">
          <Sidebar active={active} onNavigate={scrollTo} booting={booting} />
          <main
            ref={scrollerRef}
            className="flex-1 min-w-0 overflow-y-auto"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div data-key="home" ref={setRef('home')}><Hero /></div>
            <div data-key="work" ref={setRef('work')}><Work /></div>
            <div data-key="art" ref={setRef('art')}><Art /></div>
            <div data-key="about" ref={setRef('about')}><About /></div>
            <div data-key="play" ref={setRef('play')}><Playground /></div>
            <div data-key="contact" ref={setRef('contact')}><Contact /></div>
            <Footer />
          </main>
        </div>
      </TerminalFrame>
      <StatusBar active={active} />
    </div>
  );
}

export default App;
