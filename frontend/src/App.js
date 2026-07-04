import { useEffect, useState } from 'react';
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
import { navItems } from './data/mock';

const SECTION_MAP = {
  about: AboutMe,
  work: Work,
  illustrations: Illustrations,
  experience: Experience,
  skills: Skills,
  contact: Contact
};

function App() {
  const [active, setActive] = useState('about');
  const [collapsed, setCollapsed] = useState(false);
  const [booting, setBooting] = useState(true);

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
        setActive(found.key);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const Section = SECTION_MAP[active] || AboutMe;

  return (
    <div className="App min-h-screen">
      <TerminalFrame>
        <div className="flex h-full min-h-0">
          <Sidebar
            active={active}
            onNavigate={setActive}
            collapsed={collapsed}
            onToggle={() => setCollapsed((v) => !v)}
            booting={booting}
          />
          <main className="flex-1 min-w-0 h-full overflow-hidden">
            <div key={active} className="h-full w-full section-fade">
              <Section />
            </div>
          </main>
        </div>
      </TerminalFrame>
      <StatusBar />
    </div>
  );
}

export default App;
