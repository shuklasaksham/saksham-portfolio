import { useEffect, useState } from 'react';
import './App.css';
import TerminalFrame from './components/TerminalFrame';
import Sidebar from './components/Sidebar';
import StatusBar from './components/StatusBar';
import CommandPalette from './components/CommandPalette';
import MobileTopBar from './components/MobileTopBar';
import AboutMe from './components/sections/AboutMe';
import Work from './components/sections/Work';
import Illustrations from './components/sections/Illustrations';
import Experience from './components/sections/Experience';
import BehindThePixels from './components/sections/BehindThePixels';
import Contact from './components/sections/Contact';
import { navItems } from './data/mock';

const SECTION_MAP = {
  about: AboutMe,
  work: Work,
  illustrations: Illustrations,
  experience: Experience,
  pixels: BehindThePixels,
  contact: Contact
};

function App() {
  const [active, setActive] = useState('about');
  const [collapsed, setCollapsed] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      const tag = document.activeElement && document.activeElement.tagName;
      const inField = tag === 'INPUT' || tag === 'TEXTAREA';

      // Cmd/Ctrl + K — open command palette
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setPaletteOpen((v) => !v);
        return;
      }

      if (inField) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      // Toggle sidebar
      if (e.key === '[' || e.key === ']') {
        setCollapsed((v) => !v);
        return;
      }

      // Number keys 1-6 to jump sections
      const n = parseInt(e.key, 10);
      if (!Number.isNaN(n) && n >= 1 && n <= navItems.length) {
        e.preventDefault();
        setActive(navItems[n - 1].key);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const Section = SECTION_MAP[active] || AboutMe;

  return (
    <div className="App min-h-screen">
      <TerminalFrame>
        <div className="flex flex-col h-auto md:h-full min-h-0">
          {/* Mobile only: top bar with hamburger */}
          <MobileTopBar
            active={active}
            onOpenSidebar={() => setMobileNavOpen(true)}
            onOpenPalette={() => setPaletteOpen(true)}
          />

          <div className="flex flex-1 min-h-0">
            <Sidebar
              active={active}
              onNavigate={setActive}
              collapsed={collapsed}
              onToggle={() => setCollapsed((v) => !v)}
              mobileOpen={mobileNavOpen}
              onMobileClose={() => setMobileNavOpen(false)}
            />
            <main className="flex-1 min-w-0 xl:h-full xl:overflow-hidden">
              <div key={active} className="h-full w-full section-fade">
                <Section onNavigate={setActive} />
              </div>
            </main>
          </div>
          <StatusBar onOpenPalette={() => setPaletteOpen(true)} />
        </div>
      </TerminalFrame>
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={setActive}
        onToggleSidebar={() => setCollapsed((v) => !v)}
      />
    </div>
  );
}

export default App;
